import { hasOwn } from "jsdom/lib/jsdom/living/generated/utils"

//初始化methods 循环选项中的methods对象 将每一个属性依次挂在到vm上即可
function initMethods(vm, methods) {
    //props 用来判断 methods 中的方法 是否和props发生了重复
    const props = vm.$options.props
    for (const key in methods) {
        if (process.env.NODE_ENV !== 'production') {
            //当某个方法只有key没有value时 会发出警告
            if (methods[key] == null) {
                warn(
                    `Method "${key}" has an undefined value in the component definition.` + `Did you reference the function correctly?`, vm
                )
            }

            if (props && hasOwn(props, key)) {
                warn(
                    `Method "${key}" has already been defined as a prop.`, vm
                )
            }
            //如果methods中的某个方法已经存在于vm 且方法是以$或者_开头的
            if ((key in vm) && isReserved(key)) {
                warn(
                    `Method "${key}" conflicts with an existing Vue instance method.` + `Avoid defining component methods that start with _ or $.`
                )
            }
        }
        //将方法赋值到vm中 判断methods[key]是否存在 如果不存在 则将noop赋值到vm[key]中 如果存在则将该方法通过bind改写他的this后 再赋值到vm[key]中
        //这样就可以通过vm.x访问到methods中的x方法
        vm[key] = methods[key] == null ? noop : bind(methods[key], vm)
    }
}