(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{41:function(t,e,r){t.exports=r(74)},71:function(t,e,r){},74:function(t,e,r){"use strict";r.r(e);var n=r(8),o=r.n(n),a=r(37),i=r.n(a),c=r(2),u=r(24),s=r(9);function l(t){var e=t.notes.map(function(e,r){return o.a.createElement("div",{key:e.id},o.a.createElement("div",{className:"title ".concat(e.id===t.currentNote.id?"selected-note":""),onClick:function(){return t.setCurrentNoteId(e.id)}},o.a.createElement("h4",{className:"text-snippet"},e.body.split("\n")[0]),o.a.createElement("button",{className:"delete-btn",onClick:function(){return t.deleteNode(e.id)}},o.a.createElement("i",{className:"gg-trash trash-icon"}))))});return o.a.createElement("section",{className:"pane sidebar"},o.a.createElement("div",{className:"sidebar--header"},o.a.createElement("h3",null,"Notes"),o.a.createElement("button",{className:"new-note",onClick:t.newNote},"+")),e)}var f=r(28),h=r.n(f),p=r(38),d=r.n(p);function m(t){var e=t.tempNoteText,r=t.setTempNoteText,n=o.a.useState("write"),a=Object(s.a)(n,2),i=a[0],c=a[1],u=new d.a.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0});return o.a.createElement("section",{className:"pane editor"},o.a.createElement(h.a,{value:e,onChange:r,selectedTab:i,onTabChange:c,generateMarkdownPreview:function(t){return Promise.resolve(u.makeHtml(t))},minEditorHeight:80,heightUnits:"vh"}))}var v=r(40),y=r(39),g=r(16),w=Object(y.a)({apiKey:"AIzaSyCXZMROhs7OWLs0Vej9bP1jCjLwyY6TxdI",authDomain:"react-notes-2c20f.firebaseapp.com",projectId:"react-notes-2c20f",storageBucket:"react-notes-2c20f.appspot.com",messagingSenderId:"882308535178",appId:"1:882308535178:web:41baa9ab3ad90e0d45ae73"}),b=Object(g.e)(w),E=Object(g.b)(b,"notes");function x(){x=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new N(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var l={};function f(){}function h(){}function p(){}var d={};c(d,o,function(){return this});var m=Object.getPrototypeOf,v=m&&m(m(L([])));v&&v!==e&&r.call(v,o)&&(d=v);var y=p.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){var n;this._invoke=function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){l.value=t,i(l)},function(t){return n("throw",t,i,c)})}c(u.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=p,c(y,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),c(w.prototype,a,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},g(y),c(y,i,"Generator"),c(y,o,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}function j(){var t=o.a.useState([]),e=Object(s.a)(t,2),r=e[0],n=e[1],a=o.a.useState(""),i=Object(s.a)(a,2),f=i[0],h=i[1],p=o.a.useState(""),d=Object(s.a)(p,2),y=d[0],w=d[1],j=r.find(function(t){return t.id===f})||r[0],N=r.sort(function(t,e){return e.updatedAt-t.updatedAt});function L(){return O.apply(this,arguments)}function O(){return(O=Object(c.a)(x().mark(function t(){var e,r;return x().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={body:"# Type your markdown note's title here",createdAt:Date.now(),updatedAt:Date.now()},t.next=3,Object(g.a)(E,e);case 3:r=t.sent,h(r.id);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function k(){return(k=Object(c.a)(x().mark(function t(e){var r;return x().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=Object(g.d)(b,"notes",f),t.next=3,Object(g.g)(r,{body:e,updatedAt:Date.now()},{merge:!0});case 3:case"end":return t.stop()}},t)}))).apply(this,arguments)}function T(){return(T=Object(c.a)(x().mark(function t(e){var r;return x().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=Object(g.d)(b,"notes",e),t.next=3,Object(g.c)(r);case 3:case"end":return t.stop()}},t)}))).apply(this,arguments)}return o.a.useEffect(function(){return Object(g.f)(E,function(t){var e=t.docs.map(function(t){return Object(u.a)({},t.data(),{id:t.id})});n(e)})},[]),o.a.useEffect(function(){f||h(r[0]&&r[0].id)},[r]),o.a.useEffect(function(){j&&w(j.body)},[j]),o.a.useEffect(function(){var t=setTimeout(function(){y!==j.body&&function(t){k.apply(this,arguments)}(y)},500);return function(){return clearTimeout(t)}},[y]),o.a.createElement("main",null,r.length>0?o.a.createElement(v.a,{sizes:[30,70],direction:"horizontal",className:"split"},o.a.createElement(l,{notes:N,currentNote:j,setCurrentNoteId:h,newNote:L,deleteNode:function(t){return T.apply(this,arguments)}}),o.a.createElement(m,{tempNoteText:y,setTempNoteText:w})):o.a.createElement("div",{className:"no-notes"},o.a.createElement("h1",null,"You have no notes"),o.a.createElement("button",{className:"first-note",onClick:L},"Create one now")))}r(71);i.a.render(o.a.createElement(j,null),document.getElementById("root"))}},[[41,2,1]]]);
//# sourceMappingURL=main.d58f7d0d.chunk.js.map