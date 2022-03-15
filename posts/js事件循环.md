---
title: js事件循环
description:
date: 2021-03-24
tags:
  - javascript
---

1.事件循环EventLoop
事件循环就是一个程序启动期间的死循环，Node代码虽然运行在单线程中，但仍然能依靠事件循环实现高并发。

例子：以Ajax请求为例，当JavaScript执行到对应的代码时，就为这句代码注册了一个事件，在发出请求后该语句就执行完毕了，后续的操作会交给回调函数来处理。此时，浏览器背后的循环正在不断遍历事件队列，在Ajax操作完成之前，事件队列里还是空的（并不是发出请求这一动作被加入事件队列，而是请求完成这一事件才会加入队列）。如果Ajax操作完成了，这个队列中就会增加一个事件，随后被循环遍历到，如果这个事件绑定了一个回调方法，那么循环就会去调用这个方法。

1.1node中的事件循环
事件循环同样运行在单线程环境下，JavaScript的事件循环是依靠浏览器实现的，而Node作为另一种运行时，事件循环由底层的libuv实现。

![事件循环](/sjxh1.png)

事件循环分成6个不同的阶段：

1.1.1 Timers：这个阶段主要用来处理定时器相关的回调，当一个定时器超时后，一个事件就会加入到队列中，事件循环会跳转至这个阶段会执行对应的回调函数。定时器的回调会在触发后尽可能早地被调用，这表示实际的延时可能会比定时器规定的时间要长。如果事件循环，此时正在执行一个比较耗时的回调，或者是处理一个比较耗时的循环，那么定时器的回调只能等当前回调执行结束了才会被执行，即被阻塞。事实上，timers阶段的执行受到poll阶段控制。

1.1.2 I/O callbacks：大多数的回调方法在这个阶段执行，除了timers、 close和setImmediate事件的回调。事实上从源码来看，该阶段只是用来执行pending callback，例如TCP 的 error。而一些常见的回调，例如fs.readFile的回调是放在poll阶段来执行的。

1.1.3 idle, prepare：仅仅在内部使用。

1.1.4 Poll：轮询，不断检查有没有新的IO事件，事件循环可能会在这里阻塞。poll阶段的主要任务是等待新的事件出现（该阶段使用epoll来获取新的事件），如果没有，事件循环可能会在此阻塞。Poll阶段主要有两个步骤如下：（1）如果有到期的定时器，那么就执行定时器的回调方法。（2）如果这时没有要处理的定时器的回调方法，则会进行下面的判断：（1）如果poll队列不为空，则事件循环会按照顺序遍历执行队列中的回调函数，这个过程是同步的。（2）如果poll队列为空，会接着进行如下判断：如果当前代码定义了setImmediate方法，事件循环会离开poll阶段，然后进入check阶段去执行setImmediate方法定义的回调方法。如果当前代码没有定义setImmediate方法，那么事件循环可能会进入等待状态，并等待新的事件出现，这也是该阶段为什么会被命名为poll（轮询）的原因。此外，还会不断检查是否有相关的定时器超时，如果有，就会跳转到timers阶段，然后执行对应的回调。

1.1.5 Check：处理setImmediate()事件的回调。setImmediate是一个特殊的定时器方法，它占据了事件循环的一个阶段，整个check阶段就是为setImmediate方法而设置的。一般情况下，当事件循环到达poll阶段后，就会检查当前代码是否调用了setImmediate，但如果一个回调函数是被setImmediate方法调用的，事件循环就会跳出poll阶段进而进入check阶段。

1.1.6 close callbacks：处理一些close相关的事件，例如socket.on('close', ...)。如果一个socket或者一个句柄被关闭，那么就会产生一个close事件，该事件会被加入到对应的队列中。close阶段执行完毕后，本轮事件循环结束，循环进入到下一轮。

注意：这些方法本质上是顺序调用，用代码描述一下大约就是这种结构：

![事件循环](/sjxh2.png)

假设事件循环现在进入了某个阶段（即开始执行上面其中一个方法），即使在这期间有其他队列中的事件就绪，也会先将当前阶段队列里的全部回调方法执行完毕后，再进入到下个阶段。

1.2 process.nextTick
process.nextTick就是定义出一个异步动作，并且让这个动作在事件循环当前阶段结束后执行。

process.nextTick并不是事件循环的一部分，但它的回调方法也是由事件循环调用的，该方法定义的回调方法会被加入到名为nextTickQueue的队列中。

在事件循环的任何阶段，如果nextTickQueue不为空，都会在当前阶段操作结束后优先执行nextTickQueue中的回调函数，当nextTickQueue中的回调方法被执行完毕后，事件循环才会继续向下执行。

Node限制了nextTickQueue的大小，如果递归调用了process.nextTick，那么当nextTickQueue达到最大限制后会抛出一个错误。

nextTick定义的回调也是由事件循环执行的，如果nextTick的回调方法中出现了阻塞操作，后面的要执行的回调同样会被阻塞。

setImmediate方法不属于ECMAScript标准，而是Node提出的新方法。

它同样将一个回调函数加入到事件队列中，不同于setTimeout和setInterval，setImmediate并不接受一个时间作为参数。

setImmediate的事件会在当前事件循环的结尾触发，对应的回调方法会在当前事件循环末尾（check阶段）执行。

setImmediate方法和process.nextTick方法很相似，二者经常被拿来放在一起比较，由于process.nextTick会在当前操作完成后立刻执行，因此总会在setImmediate之前执行。

此外，当有递归的异步操作时只能使用setImmediate，不能使用process.nextTick，但可以使用setImmediate因为setImmediate不会生成call stack。

setImmediate方法会在poll阶段结束后执行，而setTimeout会在规定的时间到期后执行，当代码中同时存在这两个方法时，回调函数的执行顺序不是固定的。

但如果将二者放在一个IO操作的回调中，则永远是setImmediate先执行，这是因为readFile的回调执行时，事件循环位于poll阶段，因此事件循环会先进入check阶段执行setImmediate的回调，然后再进入timers阶段执行setTimeout的回调。

--《新时期的node.js入门》