(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(t,e,n){var r=n(143);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(41).default)("d4be674c",r,!0,{})},141:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=39)}([function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e,n){var r=n(28)("wks"),o=n(29),i=n(0).Symbol,c="function"==typeof i;(t.exports=function(t){return r[t]||(r[t]=c&&i[t]||(c?i:o)("Symbol."+t))}).store=r},function(t,e){var n=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(6);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var r=n(0),o=n(2),i=n(11),c=n(5),u=n(9),s=function(t,e,n){var a,f,l,d=t&s.F,p=t&s.G,h=t&s.S,v=t&s.P,m=t&s.B,y=t&s.W,g=p?o:o[e]||(o[e]={}),_=g.prototype,w=p?r:h?r[e]:(r[e]||{}).prototype;for(a in p&&(n=e),n)(f=!d&&w&&void 0!==w[a])&&u(g,a)||(l=f?w[a]:n[a],g[a]=p&&"function"!=typeof w[a]?n[a]:m&&f?i(l,r):y&&w[a]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((g.virtual||(g.virtual={}))[a]=l,t&s.R&&_&&!_[a]&&c(_,a,l)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},function(t,e,n){var r=n(13),o=n(31);t.exports=n(7)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(14)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports={}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var r=n(12);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(3),o=n(49),i=n(50),c=Object.defineProperty;e.f=n(7)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){var r=n(16);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var r=n(45),o=n(30);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(26),o=n(16);t.exports=function(t){return r(o(t))}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(28)("keys"),o=n(29);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e){t.exports=!0},function(t,e,n){var r=n(6),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(13).f,o=n(9),i=n(1)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){"use strict";var r=n(12);t.exports.f=function(t){return new function(t){var e,n;this.promise=new t(function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r}),this.resolve=r(e),this.reject=r(n)}(t)}},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var r=s(n(42)),o=s(n(51)),i=s(n(79)),c=s(n(85)),u=s(n(86));function s(t){return t&&t.__esModule?t:{default:t}}e.default={name:"VueUeditorWrap",data:function(){return{editor:null,status:0,initValue:"",defaultConfig:{UEDITOR_HOME_URL:t.env.BASE_URL?t.env.BASE_URL+"UEditor/":"/static/UEditor/",enableAutoSave:!1}}},props:{mode:{type:String,default:"observer",validator:function(t){return-1!==["observer","listener"].indexOf(t)}},value:{type:String,default:""},config:{type:Object,default:function(){return{}}},init:{type:Function,default:function(){return function(){}}},destroy:{type:Boolean,default:!1},name:{type:String,default:""},observerDebounceTime:{type:Number,default:50,validator:function(t){return t>=20}},observerOptions:{type:Object,default:function(){return{attributes:!0,attributeFilter:["src","style","type","name"],characterData:!0,childList:!0,subtree:!0}}},forceInit:{type:Boolean,default:!1}},computed:{mixedConfig:function(){return(0,i.default)({},this.defaultConfig,this.config)}},methods:{registerButton:function(t){var e=t.name,n=t.icon,r=t.tip,o=t.handler,i=t.index,c=t.UE,u=void 0===c?window.UE:c;u.registerUI(e,function(t,e){t.registerCommand(e,{execCommand:function(){o(t,e)}});var i=new u.ui.Button({name:e,title:r,cssRules:"background-image: url("+n+") !important;background-size: cover;",onclick:function(){t.execCommand(e)}});return t.addListener("selectionchange",function(){var n=t.queryCommandState(e);-1===n?(i.setDisabled(!0),i.setChecked(!1)):(i.setDisabled(!1),i.setChecked(n))}),i},i,this.id)},_initEditor:function(){var t=this;this.$refs.script.id=this.id="editor_"+Math.random().toString(16).slice(-6),this.init(),this.$emit("beforeInit",this.id,this.mixedConfig),this.editor=window.UE.getEditor(this.id,this.mixedConfig),this.editor.addListener("ready",function(){t.status=2,t.$emit("ready",t.editor),t.editor.setContent(t.initValue),"observer"===t.mode&&window.MutationObserver?t._observerChangeListener():t._normalChangeListener()})},_checkDependencies:function(){var t=this;return new o.default(function(e,n){window.UE&&window.UEDITOR_CONFIG&&0!==(0,r.default)(window.UEDITOR_CONFIG).length&&window.UE.getEditor?e():window.$loadEnv?window.$loadEnv.on("scriptsLoaded",function(){e()}):(window.$loadEnv=new c.default,t._loadConfig().then(function(){return t._loadCore()}).then(function(){e(),window.$loadEnv.emit("scriptsLoaded")}))})},_loadConfig:function(){var t=this;return new o.default(function(e,n){if(window.UE&&window.UEDITOR_CONFIG&&0!==(0,r.default)(window.UEDITOR_CONFIG).length)e();else{var o=document.createElement("script");o.type="text/javascript",o.src=t.mixedConfig.UEDITOR_HOME_URL+"ueditor.config.js",document.getElementsByTagName("head")[0].appendChild(o),o.onload=function(){window.UE&&window.UEDITOR_CONFIG&&0!==(0,r.default)(window.UEDITOR_CONFIG).length?e():console.error("加载ueditor.config.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n",o.src)}}})},_loadCore:function(){var t=this;return new o.default(function(e,n){if(window.UE&&window.UE.getEditor)e();else{var r=document.createElement("script");r.type="text/javascript",r.src=t.mixedConfig.UEDITOR_HOME_URL+"ueditor.all.min.js",document.getElementsByTagName("head")[0].appendChild(r),r.onload=function(){window.UE&&window.UE.getEditor?e():console.error("加载ueditor.all.min.js失败,请检查您的配置地址UEDITOR_HOME_URL填写是否正确!\n",r.src)}}})},_setContent:function(t){t===this.editor.getContent()||this.editor.setContent(t)},_normalChangeListener:function(){var t=this;this.editor.addListener("contentChange",function(){t.$emit("input",t.editor.getContent())})},_observerChangeListener:function(){var t=this;this.observer=new MutationObserver((0,u.default)(function(e){t.editor.document.getElementById("baidu_pastebin")||t.$emit("input",t.editor.getContent())},this.observerDebounceTime)),this.observer.observe(this.editor.body,this.observerOptions)}},beforeDestroy:function(){this.destroy&&this.editor&&this.editor.destroy&&this.editor.destroy(),this.observer&&this.observer.disconnect&&this.observer.disconnect()},watch:{value:{handler:function(e){var n=this;switch(this.status){case 0:this.status=1,this.initValue=e,(this.forceInit||void 0!==t&&t.client||"undefined"!=typeof window)&&this._checkDependencies().then(function(){n.$refs.script?n._initEditor():n.$nextTick(function(){return n._initEditor()})});break;case 1:this.initValue=e;break;case 2:this._setContent(e)}},immediate:!0}}}}).call(e,n(41))},function(t,e,n){var r=n(10);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,e,n){var r=n(19),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){var r=n(2),o=n(0),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:n(21)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){"use strict";var r=n(21),o=n(4),i=n(56),c=n(5),u=n(8),s=n(57),a=n(23),f=n(60),l=n(1)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,h,v,m,y){s(n,e,h);var g,_,w,b=function(t){if(!d&&t in C)return C[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},x=e+" Iterator",E="values"==v,O=!1,C=t.prototype,T=C[l]||C["@@iterator"]||v&&C[v],j=T||b(v),S=v?E?b("entries"):j:void 0,k="Array"==e&&C.entries||T;if(k&&(w=f(k.call(new t)))!==Object.prototype&&w.next&&(a(w,x,!0),r||"function"==typeof w[l]||c(w,l,p)),E&&T&&"values"!==T.name&&(O=!0,j=function(){return T.call(this)}),r&&!y||!d&&!O&&C[l]||c(C,l,j),u[e]=j,u[x]=p,v)if(g={values:E?j:b("values"),keys:m?j:b("keys"),entries:S},y)for(_ in g)_ in C||i(C,_,g[_]);else o(o.P+o.F*(d||O),e,g);return g}},function(t,e,n){var r=n(0).document;t.exports=r&&r.documentElement},function(t,e,n){var r=n(10),o=n(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?n:i?r(e):"Object"==(c=r(e))&&"function"==typeof e.callee?"Arguments":c}},function(t,e,n){var r=n(3),o=n(12),i=n(1)("species");t.exports=function(t,e){var n,c=r(t).constructor;return void 0===c||null==(n=r(c)[i])?e:o(n)}},function(t,e,n){var r,o,i,c=n(11),u=n(71),s=n(33),a=n(22),f=n(0),l=f.process,d=f.setImmediate,p=f.clearImmediate,h=f.MessageChannel,v=f.Dispatch,m=0,y={},g=function(){var t=+this;if(y.hasOwnProperty(t)){var e=y[t];delete y[t],e()}},_=function(t){g.call(t.data)};d&&p||(d=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return y[++m]=function(){u("function"==typeof t?t:Function(t),e)},r(m),m},p=function(t){delete y[t]},"process"==n(10)(l)?r=function(t){l.nextTick(c(g,t,1))}:v&&v.now?r=function(t){v.now(c(g,t,1))}:h?(i=(o=new h).port2,o.port1.onmessage=_,r=c(i.postMessage,i,1)):f.addEventListener&&"function"==typeof postMessage&&!f.importScripts?(r=function(t){f.postMessage(t+"","*")},f.addEventListener("message",_,!1)):r="onreadystatechange"in a("script")?function(t){s.appendChild(a("script")).onreadystatechange=function(){s.removeChild(this),g.call(t)}}:function(t){setTimeout(c(g,t,1),0)}),t.exports={set:d,clear:p}},function(t,e){t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},function(t,e,n){var r=n(3),o=n(6),i=n(24);t.exports=function(t,e){if(r(t),o(e)&&e.constructor===t)return e;var n=i.f(t);return(0,n.resolve)(e),n.promise}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(25),o=n.n(r);for(var i in r)"default"!==i&&function(t){n.d(e,t,function(){return r[t]})}(i);var c=n(87),u=n(40)(o.a,c.a,!1,null,null,null);u.options.__file="src/components/vue-ueditor-wrap.vue",e.default=u.exports},function(t,e){t.exports=function(t,e,n,r,o,i){var c,u=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(c=t,u=t.default);var a,f="function"==typeof u?u.options:u;if(e&&(f.render=e.render,f.staticRenderFns=e.staticRenderFns,f._compiled=!0),n&&(f.functional=!0),o&&(f._scopeId=o),i?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},f._ssrRegister=a):r&&(a=r),a){var l=f.functional,d=l?f.render:f.beforeCreate;l?(f._injectStyles=a,f.render=function(t,e){return a.call(e),d(t,e)}):f.beforeCreate=d?[].concat(d,a):[a]}return{esModule:c,exports:u,options:f}}},function(t,e){var n,r,o=t.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(t){n=i}try{r="function"==typeof clearTimeout?clearTimeout:c}catch(t){r=c}}();var s,a=[],f=!1,l=-1;function d(){f&&s&&(f=!1,s.length?a=s.concat(a):l=-1,a.length&&p())}function p(){if(!f){var t=u(d);f=!0;for(var e=a.length;e;){for(s=a,a=[];++l<e;)s&&s[l].run();l=-1,e=a.length}s=null,f=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function h(t,e){this.fun=t,this.array=e}function v(){}o.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];a.push(new h(t,e)),1!==a.length||f||u(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(t){return[]},o.binding=function(t){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(t){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(t,e,n){t.exports={default:n(43),__esModule:!0}},function(t,e,n){n(44),t.exports=n(2).Object.keys},function(t,e,n){var r=n(15),o=n(17);n(48)("keys",function(){return function(t){return o(r(t))}})},function(t,e,n){var r=n(9),o=n(18),i=n(46)(!1),c=n(20)("IE_PROTO");t.exports=function(t,e){var n,u=o(t),s=0,a=[];for(n in u)n!=c&&r(u,n)&&a.push(n);for(;e.length>s;)r(u,n=e[s++])&&(~i(a,n)||a.push(n));return a}},function(t,e,n){var r=n(18),o=n(27),i=n(47);t.exports=function(t){return function(e,n,c){var u,s=r(e),a=o(s.length),f=i(c,a);if(t&&n!=n){for(;a>f;)if((u=s[f++])!=u)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===n)return t||f||0;return!t&&-1}}},function(t,e,n){var r=n(19),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?o(t+e,0):i(t,e)}},function(t,e,n){var r=n(4),o=n(2),i=n(14);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],c={};c[t]=e(n),r(r.S+r.F*i(function(){n(1)}),"Object",c)}},function(t,e,n){t.exports=!n(7)&&!n(14)(function(){return 7!=Object.defineProperty(n(22)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){var r=n(6);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){t.exports={default:n(52),__esModule:!0}},function(t,e,n){n(53),n(54),n(61),n(65),n(77),n(78),t.exports=n(2).Promise},function(t,e){},function(t,e,n){"use strict";var r=n(55)(!0);n(32)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=r(e,n),this._i+=t.length,{value:t,done:!1})})},function(t,e,n){var r=n(19),o=n(16);t.exports=function(t){return function(e,n){var i,c,u=String(o(e)),s=r(n),a=u.length;return s<0||s>=a?t?"":void 0:(i=u.charCodeAt(s))<55296||i>56319||s+1===a||(c=u.charCodeAt(s+1))<56320||c>57343?t?u.charAt(s):i:t?u.slice(s,s+2):c-56320+(i-55296<<10)+65536}}},function(t,e,n){t.exports=n(5)},function(t,e,n){"use strict";var r=n(58),o=n(31),i=n(23),c={};n(5)(c,n(1)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(c,{next:o(1,n)}),i(t,e+" Iterator")}},function(t,e,n){var r=n(3),o=n(59),i=n(30),c=n(20)("IE_PROTO"),u=function(){},s=function(){var t,e=n(22)("iframe"),r=i.length;for(e.style.display="none",n(33).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;r--;)delete s.prototype[i[r]];return s()};t.exports=Object.create||function(t,e){var n;return null!==t?(u.prototype=r(t),n=new u,u.prototype=null,n[c]=t):n=s(),void 0===e?n:o(n,e)}},function(t,e,n){var r=n(13),o=n(3),i=n(17);t.exports=n(7)?Object.defineProperties:function(t,e){o(t);for(var n,c=i(e),u=c.length,s=0;u>s;)r.f(t,n=c[s++],e[n]);return t}},function(t,e,n){var r=n(9),o=n(15),i=n(20)("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},function(t,e,n){n(62);for(var r=n(0),o=n(5),i=n(8),c=n(1)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<u.length;s++){var a=u[s],f=r[a],l=f&&f.prototype;l&&!l[c]&&o(l,c,a),i[a]=i.Array}},function(t,e,n){"use strict";var r=n(63),o=n(64),i=n(8),c=n(18);t.exports=n(32)(Array,"Array",function(t,e){this._t=c(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,o(1)):o(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},function(t,e){t.exports=function(){}},function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},function(t,e,n){"use strict";var r,o,i,c,u=n(21),s=n(0),a=n(11),f=n(34),l=n(4),d=n(6),p=n(12),h=n(66),v=n(67),m=n(35),y=n(36).set,g=n(72)(),_=n(24),w=n(37),b=n(73),x=n(38),E=s.TypeError,O=s.process,C=O&&O.versions,T=C&&C.v8||"",j=s.Promise,S="process"==f(O),k=function(){},U=o=_.f,L=!!function(){try{var t=j.resolve(1),e=(t.constructor={})[n(1)("species")]=function(t){t(k,k)};return(S||"function"==typeof PromiseRejectionEvent)&&t.then(k)instanceof e&&0!==T.indexOf("6.6")&&-1===b.indexOf("Chrome/66")}catch(t){}}(),P=function(t){var e;return!(!d(t)||"function"!=typeof(e=t.then))&&e},M=function(t,e){if(!t._n){t._n=!0;var n=t._c;g(function(){for(var r=t._v,o=1==t._s,i=0,c=function(e){var n,i,c,u=o?e.ok:e.fail,s=e.resolve,a=e.reject,f=e.domain;try{u?(o||(2==t._h&&D(t),t._h=1),!0===u?n=r:(f&&f.enter(),n=u(r),f&&(f.exit(),c=!0)),n===e.promise?a(E("Promise-chain cycle")):(i=P(n))?i.call(n,s,a):s(n)):a(r)}catch(t){f&&!c&&f.exit(),a(t)}};n.length>i;)c(n[i++]);t._c=[],t._n=!1,e&&!t._h&&R(t)})}},R=function(t){y.call(s,function(){var e,n,r,o=t._v,i=I(t);if(i&&(e=w(function(){S?O.emit("unhandledRejection",o,t):(n=s.onunhandledrejection)?n({promise:t,reason:o}):(r=s.console)&&r.error&&r.error("Unhandled promise rejection",o)}),t._h=S||I(t)?2:1),t._a=void 0,i&&e.e)throw e.v})},I=function(t){return 1!==t._h&&0===(t._a||t._c).length},D=function(t){y.call(s,function(){var e;S?O.emit("rejectionHandled",t):(e=s.onrejectionhandled)&&e({promise:t,reason:t._v})})},F=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),M(e,!0))},A=function(t){var e,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===t)throw E("Promise can't be resolved itself");(e=P(t))?g(function(){var r={_w:n,_d:!1};try{e.call(t,a(A,r,1),a(F,r,1))}catch(t){F.call(r,t)}}):(n._v=t,n._s=1,M(n,!1))}catch(t){F.call({_w:n,_d:!1},t)}}};L||(j=function(t){h(this,j,"Promise","_h"),p(t),r.call(this);try{t(a(A,this,1),a(F,this,1))}catch(t){F.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=n(74)(j.prototype,{then:function(t,e){var n=U(m(this,j));return n.ok="function"!=typeof t||t,n.fail="function"==typeof e&&e,n.domain=S?O.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&M(this,!1),n.promise},catch:function(t){return this.then(void 0,t)}}),i=function(){var t=new r;this.promise=t,this.resolve=a(A,t,1),this.reject=a(F,t,1)},_.f=U=function(t){return t===j||t===c?new i(t):o(t)}),l(l.G+l.W+l.F*!L,{Promise:j}),n(23)(j,"Promise"),n(75)("Promise"),c=n(2).Promise,l(l.S+l.F*!L,"Promise",{reject:function(t){var e=U(this);return(0,e.reject)(t),e.promise}}),l(l.S+l.F*(u||!L),"Promise",{resolve:function(t){return x(u&&this===c?j:this,t)}}),l(l.S+l.F*!(L&&n(76)(function(t){j.all(t).catch(k)})),"Promise",{all:function(t){var e=this,n=U(e),r=n.resolve,o=n.reject,i=w(function(){var n=[],i=0,c=1;v(t,!1,function(t){var u=i++,s=!1;n.push(void 0),c++,e.resolve(t).then(function(t){s||(s=!0,n[u]=t,--c||r(n))},o)}),--c||r(n)});return i.e&&o(i.v),n.promise},race:function(t){var e=this,n=U(e),r=n.reject,o=w(function(){v(t,!1,function(t){e.resolve(t).then(n.resolve,r)})});return o.e&&r(o.v),n.promise}})},function(t,e){t.exports=function(t,e,n,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(n+": incorrect invocation!");return t}},function(t,e,n){var r=n(11),o=n(68),i=n(69),c=n(3),u=n(27),s=n(70),a={},f={};(e=t.exports=function(t,e,n,l,d){var p,h,v,m,y=d?function(){return t}:s(t),g=r(n,l,e?2:1),_=0;if("function"!=typeof y)throw TypeError(t+" is not iterable!");if(i(y)){for(p=u(t.length);p>_;_++)if((m=e?g(c(h=t[_])[0],h[1]):g(t[_]))===a||m===f)return m}else for(v=y.call(t);!(h=v.next()).done;)if((m=o(v,g,h.value,e))===a||m===f)return m}).BREAK=a,e.RETURN=f},function(t,e,n){var r=n(3);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(8),o=n(1)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[o]===t)}},function(t,e,n){var r=n(34),o=n(1)("iterator"),i=n(8);t.exports=n(2).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[r(t)]}},function(t,e){t.exports=function(t,e,n){var r=void 0===n;switch(e.length){case 0:return r?t():t.call(n);case 1:return r?t(e[0]):t.call(n,e[0]);case 2:return r?t(e[0],e[1]):t.call(n,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(n,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(n,e[0],e[1],e[2],e[3])}return t.apply(n,e)}},function(t,e,n){var r=n(0),o=n(36).set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,u=r.Promise,s="process"==n(10)(c);t.exports=function(){var t,e,n,a=function(){var r,o;for(s&&(r=c.domain)&&r.exit();t;){o=t.fn,t=t.next;try{o()}catch(r){throw t?n():e=void 0,r}}e=void 0,r&&r.enter()};if(s)n=function(){c.nextTick(a)};else if(!i||r.navigator&&r.navigator.standalone)if(u&&u.resolve){var f=u.resolve(void 0);n=function(){f.then(a)}}else n=function(){o.call(r,a)};else{var l=!0,d=document.createTextNode("");new i(a).observe(d,{characterData:!0}),n=function(){d.data=l=!l}}return function(r){var o={fn:r,next:void 0};e&&(e.next=o),t||(t=o,n()),e=o}}},function(t,e,n){var r=n(0).navigator;t.exports=r&&r.userAgent||""},function(t,e,n){var r=n(5);t.exports=function(t,e,n){for(var o in e)n&&t[o]?t[o]=e[o]:r(t,o,e[o]);return t}},function(t,e,n){"use strict";var r=n(0),o=n(2),i=n(13),c=n(7),u=n(1)("species");t.exports=function(t){var e="function"==typeof o[t]?o[t]:r[t];c&&e&&!e[u]&&i.f(e,u,{configurable:!0,get:function(){return this}})}},function(t,e,n){var r=n(1)("iterator"),o=!1;try{var i=[7][r]();i.return=function(){o=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i=[7],c=i[r]();c.next=function(){return{done:n=!0}},i[r]=function(){return c},t(i)}catch(t){}return n}},function(t,e,n){"use strict";var r=n(4),o=n(2),i=n(0),c=n(35),u=n(38);r(r.P+r.R,"Promise",{finally:function(t){var e=c(this,o.Promise||i.Promise),n="function"==typeof t;return this.then(n?function(n){return u(e,t()).then(function(){return n})}:t,n?function(n){return u(e,t()).then(function(){throw n})}:t)}})},function(t,e,n){"use strict";var r=n(4),o=n(24),i=n(37);r(r.S,"Promise",{try:function(t){var e=o.f(this),n=i(t);return(n.e?e.reject:e.resolve)(n.v),e.promise}})},function(t,e,n){t.exports={default:n(80),__esModule:!0}},function(t,e,n){n(81),t.exports=n(2).Object.assign},function(t,e,n){var r=n(4);r(r.S+r.F,"Object",{assign:n(82)})},function(t,e,n){"use strict";var r=n(17),o=n(83),i=n(84),c=n(15),u=n(26),s=Object.assign;t.exports=!s||n(14)(function(){var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach(function(t){e[t]=t}),7!=s({},t)[n]||Object.keys(s({},e)).join("")!=r})?function(t,e){for(var n=c(t),s=arguments.length,a=1,f=o.f,l=i.f;s>a;)for(var d,p=u(arguments[a++]),h=f?r(p).concat(f(p)):r(p),v=h.length,m=0;v>m;)l.call(p,d=h[m++])&&(n[d]=p[d]);return n}:s},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){this.listeners={},this.on=function(t,e){void 0===this.listeners[t]&&(this.listeners[t]=[]),this.listeners[t].push(e)},this.emit=function(t){this.listeners[t]&&this.listeners[t].forEach(function(t){return t()})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){var n=null;return function(){var r=this,o=arguments;n&&clearTimeout(n),n=setTimeout(function(){t.apply(r,o)},e)}}},function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("script",{ref:"script",attrs:{name:this.name,type:"text/plain"}})};r._withStripped=!0;var o={render:r,staticRenderFns:[]};e.a=o}]).default},142:function(t,e,n){"use strict";var r=n(138);n.n(r).a},143:function(t,e,n){(t.exports=n(40)(!1)).push([t.i,".preview{min-height:150px}",""])},145:function(t,e,n){"use strict";n.r(e);n(27);var r=n(141),o={components:{VueUeditorWrap:n.n(r).a},data:function(){return{msg:'<h2><img src="http://img.baidu.com/hi/jx2/j_0003.gif"/>Vue + UEditor + v-model双向绑定</h2>',config:{autoHeightEnabled:!1,initialFrameHeight:240,initialFrameWidth:"100%",serverUrl:"http://35.201.165.105:8000/controller.php",UEDITOR_HOME_URL:"".concat("/","UEditor/")}}},mounted:function(){console.log("%c注意：本Demo提供的serverUrl是为了方便小伙伴们体验图片文件等上传功能。\n请勿在生产环境使用此serverUrl！！！","background:#f33;color:#fff")},methods:{ready:function(t){console.log("实例".concat(t.key,"已经初始化:"),t)},showData:function(){console.log(this.msg)},addCustomUI:function(t,e){console.log(t+"的配置参数是:",JSON.stringify(e,null,2)),window.UE.registerUI("test-button"+t,function(e,n){e.registerCommand(n,{execCommand:function(){e.execCommand("inserthtml",'<span style="color: #'.concat(t.substr(-3),';">这是一段由自定义按钮添加的文字，你点击的编辑器ID是').concat(t,"</span>"))}});var r=new window.UE.ui.Button({name:n,title:"鼠标悬停时的提示文字",cssRules:"background-image: url('".concat("/","test-button.png') !important;background-size: cover;"),onclick:function(){e.execCommand(n)}});return e.addListener("selectionchange",function(){var t=e.queryCommandState(n);-1===t?(r.setDisabled(!0),r.setChecked(!1)):(r.setDisabled(!1),r.setChecked(t))}),r},0,t),window.UE.registerUI("table-center-button"+t,function(t,e){t.registerCommand(e,{execCommand:function(){var e=t.document.querySelectorAll("table");e.length?e.forEach(function(t){t.style.margin="0 auto"}):t.trigger("showmessage",{content:"没有表格",timeout:2e3})}});var n=new window.UE.ui.Button({name:e,title:"点击设置表格居中",cssRules:"background-image: url('".concat("/","center.png') !important;background-size: cover;"),onclick:function(){t.execCommand(e)}});return t.addListener("selectionchange",function(){var r=t.queryCommandState(e);-1===r?(n.setDisabled(!0),n.setChecked(!1)):(n.setDisabled(!1),n.setChecked(r))}),n},1,t),window.UE.registerUI("test-dialog"+t,function(t,e){var n=new window.UE.ui.Dialog({iframeUrl:"".concat("/","customizeDialogPage.html"),editor:t,name:e,title:"这是一个自定义的 Dialog 浮层",cssRules:"width:600px;height:300px;",buttons:[{className:"edui-okbutton",label:"确定",onclick:function(){n.close(!0)}},{className:"edui-cancelbutton",label:"取消",onclick:function(){n.close(!1)}}]});return new window.UE.ui.Button({name:"dialog-button",title:"鼠标悬停时的提示文字",cssRules:"background-image: url('".concat("/","test-dialog.png') !important;background-size: cover;"),onclick:function(){n.render(),n.open()}})},2,t)}}},i=(n(142),n(19)),c=Object(i.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"preview",domProps:{innerHTML:t._s(t.msg)},on:{click:t.showData}}),t._v(" "),t._l(2,function(e){return n("vue-ueditor-wrap",{key:e,attrs:{config:t.config},on:{ready:t.ready,beforeInit:t.addCustomUI},model:{value:t.msg,callback:function(e){t.msg=e},expression:"msg"}})})],2)},[],!1,null,null,null);c.options.__file="index.vue";e.default=c.exports}}]);