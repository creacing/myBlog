---
title: audio和embed的区别
description: 
date: 2022-03-20
tags:
  - css
---

### html5里的一些新的标签,object、embed、video、audio都可以添加视频或音频文件。

- embed是针对非IE的浏览器的媒体播放器。

- video是html5的新标准，并不是所有的浏览器都支持。

- video支持三种媒体类型，常用的是mp4。

### audio通过js控制 不使用默认controls 属性
```javascript
 const audio = document.getElementsByClassName("bg-music")[0];
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
```

