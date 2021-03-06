// 说明：这种组件是单例模式，但可以多条数据
// alert 这种调用式组件，是挂载一个方法到 Vue.prototype 上供实例调用

/*
* 实现步骤：
* 挂载方法前需要完成的事：
* 1. 把选项传递进来，当做函数的参数，并最终以 props 或者 实例方法的参数形式传递给组件
* 2. 组件实例化，并调用方法显示提醒

* 注册方式：
* 1. 可以用 install 的方式，让用户 use 一下，自动挂载到原型
* 2. 提供一个函数出来，让用户自己挂载到 prototype 上
*/

// 组件实例化：vue单文件 | 选项对象
//             => vm = new Vue() | new Vue.extend() 产生 vNode
//             => el = vm.$mount() 产生 dom 实例 | el = vm.$mount($el) el若存在，则已完成挂载，否则下一步
//             => document.body.appendChild(el) 将 vue dom 元素插入页面

// 将一个单文件import后，渲染成dom的方法
// 1.
// render(h) => h(Alert)

// 2.
// new Vue({
//   el: null,
//   template: '<div>水水</div>',
//   data: {
//     name: 'omo'
//   }
// });

// 3.
// new Vue.extend({
//   template: '<div>水水</div>',
//   data(){
//     return {
//        name: 'omo'
//     }
//   }
// });
