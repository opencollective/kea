webpackJsonp([5],{1029:function(e,n,t){var r=t(578);"string"==typeof r&&(r=[[e.i,r,""]]);t(36)(r,{});r.locals&&(e.exports=r.locals)},1044:function(e,n,t){e.exports=t(361)},228:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var i=t(1029),c=(t.n(i),t(4)),l=t.n(c),u=t(34),s=(t.n(u),t(90)),p=(t.n(s),t(230));t.d(n,"a",function(){return b});var f,m,h=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),b=(f=t.i(u.kea)({}),f(m=function(e){function n(){var e,o,i,c;r(this,n);for(var l=arguments.length,u=Array(l),p=0;p<l;p++)u[p]=arguments[p];return o=i=a(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(u))),i.handleRoute=function(e){var n=i.props.dispatch,r=e.target.attributes.href.value;e.preventDefault(),n(t.i(s.push)(r)),window.scrollTo(0,0)},c=o,a(i,c)}return o(n,e),h(n,[{key:"render",value:function(){return l.a.createElement("div",{className:"homepage-scene"},l.a.createElement("div",{style:{margin:20}},l.a.createElement(p.a,{id:0})),l.a.createElement("div",{style:{margin:20}},"Please check out the examples from the menu above!",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"/counter-singleton",onClick:this.handleRoute},"Or click here to begin"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("a",{href:"https://www.github.com/mariusandra/kea"},"Fork on GitHub")))}}]),n}(c.Component))||m)},361:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(23),a=(t.n(r),t(228));n.default=t.i(r.createScene)({name:"homepage",component:a.a})},380:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(23),a=(t.n(r),t(228));n.default=t.i(r.createScene)({name:"homepage",component:a.a})},578:function(e,n,t){n=e.exports=t(32)(),n.push([e.i,".homepage-scene {\n  font-family: 'Helvetica Neue', 'Arial', sans-serif;\n  text-align: center;\n}\n\n.homepage-scene h1 em {\n  border-bottom: 1px dashed #888;\n  cursor: pointer;\n}\n\n.homepage-scene .slider-container {\n  max-width: 500px;\n  margin: 0 auto;\n}\n\n  @media (min-width: 960px) {\n\n  .homepage-scene .kea-slider {\n    height: 600px;\n    overflow: hidden;\n  }\n\n  .homepage-scene .kea-slider img {\n    position: absolute;\n  }\n  }\n",""])}},[1044]);