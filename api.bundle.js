webpackJsonp([1],{198:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n(931),r=(n.n(l),n(2)),s=n.n(r),i=n(49),u=n.n(i);n.d(t,"a",function(){return d});var p=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),m={keaUsage:n(783),keaPath:n(780),keaConstants:n(779),keaActions:n(777),keaReducers:n(781),keaSelectors:n(782),keaConnect:n(778)},d=function(e){function t(){return a(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),p(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"api-scene"},s.a.createElement("h1",null,"API"),s.a.createElement("code",null,"import { kea, connect, keaReducer, keaSaga, createAction } from 'kea'"),s.a.createElement("h2",null,s.a.createElement("code",null,"kea(options)")),s.a.createElement("p",null,"Create a new kea logic store and connect it to redux."),s.a.createElement("p",{style:{fontStyle:"italic"}},"Note: For the dynamically connected instances, see the section ",s.a.createElement("code",null,"kea(options)(Component)")," below."),s.a.createElement("h3",null,"Usage"),s.a.createElement(u.a,{className:"javascript"},m.keaUsage),s.a.createElement("h3",null,"Options"),s.a.createElement("h4",null,"path: ",s.a.createElement("code",null,"() => []")),s.a.createElement("p",null,"Give a name to the component and register it in a certain location in your application's Redux tree."),s.a.createElement(u.a,{className:"javascript"},m.keaPath),s.a.createElement("h4",null,"constants: ",s.a.createElement("code",null,"() => []")),s.a.createElement("p",null),s.a.createElement(u.a,{className:"javascript"},m.keaConstants),s.a.createElement("h4",null,"actions: ",s.a.createElement("code",null,"({ path, constants }) => ({})")),s.a.createElement("p",null),s.a.createElement(u.a,{className:"javascript"},m.keaActions),s.a.createElement("h4",null,"reducers: ",s.a.createElement("code",null,"({ path, constants, actions }) => ({})")),s.a.createElement("p",null),s.a.createElement(u.a,{className:"javascript"},m.keaReducers),s.a.createElement("h4",null,"selectors: ",s.a.createElement("code",null,"({ path, constants, actions, selectors }) => ({})")),s.a.createElement("p",null),s.a.createElement(u.a,{className:"javascript"},m.keaSelectors),s.a.createElement("h4",null,"connect: ",s.a.createElement("code",null,"{}")),s.a.createElement("p",null),s.a.createElement(u.a,{className:"javascript"},m.keaConnect),s.a.createElement("h4",null,"start: ",s.a.createElement("code",null,"function * () ","{}")),s.a.createElement("h4",null,"stop: ",s.a.createElement("code",null,"function * () ","{}")),s.a.createElement("h4",null,"takeEvery: ",s.a.createElement("code",null,"({ actions }) => ({})")),s.a.createElement("h4",null,"takeLatest: ",s.a.createElement("code",null,"({ actions }) => ({})")),s.a.createElement("h4",null,"workers: ",s.a.createElement("code",null,"{}")),s.a.createElement("h3",null,"Returns"),s.a.createElement("h2",null,s.a.createElement("code",null,"kea(options)(Component)")),s.a.createElement("p",null,"Wrap a kea instance around a React component."),s.a.createElement("h3",null,"Options"),s.a.createElement("p",null,"Same as above, but in addition"),s.a.createElement("h4",null,"key: ",s.a.createElement("code",null,"(props) => 'key'")),s.a.createElement("h4",null,"path: ",s.a.createElement("code",null,"(key) => []")),s.a.createElement("h2",null,s.a.createElement("code",null,"connect(options)")),s.a.createElement("p",null,"Shorthand for ",s.a.createElement("code",null,"kea({ connect: options })")),s.a.createElement("h2",null,s.a.createElement("code",null,"keaReducer(reducerRoot)")),s.a.createElement("h2",null,s.a.createElement("code",null,"keaSaga")))}}]),t}(r.Component)},324:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(14),o=(n.n(a),n(198));t.default=n.i(a.createScene)({name:"api",component:o.a})},353:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(14),o=(n.n(a),n(198));t.default=n.i(a.createScene)({name:"api",component:o.a})},555:function(e,t,n){t=e.exports=n(20)(),t.push([e.i,".api-scene {\n  margin: 20px;\n}\n",""])},777:function(e,t){e.exports="// Input\nactions: ({ path, constants }) => ({\n  actionWithStaticPayload: 'payload value',\n  anotherActionWithAStaticPayload: { thisIs: 'that' },\n  simpleAction: true,\n\n  actionWithDynamicPayload: (id) => ({ id }),\n  actionWithManyParameters: (id, message) => ({ id, message }),\n  actionWithObjectInput: ({ id, message }) => ({ id, message })\n})\n\n// Output\nactions == {\n  actionWithStaticPayload: () => ({ type: '...', payload: 'payload value' }),\n  anotherActionWithAStaticPayload: () => ({ type: '...', payload: { thisIs: 'that' } }),\n  simpleAction: () => ({ type: '...', payload: true }),\n\n  actionWithDynamicPayload: (id) => ({ type: '...', payload: { id } }),\n  actionWithManyParameters: (id, message) => ({ type: '...', payload: { id, message } }),\n  actionWithObjectInput: ({ id, message }) => ({ type: '...', payload: { id, message } })\n}\n"},778:function(e,t){e.exports=""},779:function(e,t){e.exports="// Input\nconstants: () => ['STRING', 'OTHER_STRING']\n\n// Output\nconstants == { STRING: 'STRING', OTHER_STRING: 'OTHER_STRING' }\n"},780:function(e,t){e.exports="// Input\npath: () => ['scenes', 'myRandomScene', 'logicMountPoint']\n\n// Output\npath == ['scenes', 'myRandomScene', 'logicMountPoint']\n"},781:function(e,t){e.exports="// Input\nreducers: ({ actions, path, constants }) => ({\n  reducerKey: [defaultValue, propType, {\n    // operations\n    [actions.simpleAction]: (state, payload) => state + payload // return the new state,\n    [actions.complexAction]: (state, payload) => {\n      // do more things in the block\n      return state + payload\n    },\n    [actions.noStateUsed]: (_, payload) => payload.value,\n    [actions.setToTrue]: () => true,\n    [actions.clearSomething]: () => false\n  }, /* optional options: */ { persist: true }],\n\n  constantDefault: [constants.OTHER_STRING, PropTypes.string, {\n    [actions.clearSomething]: () => constants.STRING,\n    [actions.someOtherAction]: (_, payload) => payload.value\n  }]\n\n})\n\n// Output\nreducers == {\n  reducerKey: (initialState = defaultValue, action) => /* ... */,\n  constantDefault: (initialState = constants.OTHER_STRING, action) => /* ... */,\n}\nreducer == combineReducers(reducers)\n"},782:function(e,t){e.exports=""},783:function(e,t){e.exports="import { kea } from 'kea'\n\nexport default kea({\n  // opions come here\n})\n"},931:function(e,t,n){var a=n(555);"string"==typeof a&&(a=[[e.i,a,""]]);n(22)(a,{});a.locals&&(e.exports=a.locals)},997:function(e,t,n){e.exports=n(324)}},[997]);