(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Xo(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function OS(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){if(this instanceof r){var i=[null];i.push.apply(i,arguments);var s=Function.bind.apply(e,i);return new s}return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var Mv={exports:{}},ku={},Fv={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jo=Symbol.for("react.element"),DS=Symbol.for("react.portal"),$S=Symbol.for("react.fragment"),bS=Symbol.for("react.strict_mode"),LS=Symbol.for("react.profiler"),MS=Symbol.for("react.provider"),FS=Symbol.for("react.context"),jS=Symbol.for("react.forward_ref"),US=Symbol.for("react.suspense"),VS=Symbol.for("react.memo"),zS=Symbol.for("react.lazy"),bm=Symbol.iterator;function BS(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var jv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uv=Object.assign,Vv={};function ds(t,e,n){this.props=t,this.context=e,this.refs=Vv,this.updater=n||jv}ds.prototype.isReactComponent={};ds.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ds.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zv(){}zv.prototype=ds.prototype;function Sf(t,e,n){this.props=t,this.context=e,this.refs=Vv,this.updater=n||jv}var Tf=Sf.prototype=new zv;Tf.constructor=Sf;Uv(Tf,ds.prototype);Tf.isPureReactComponent=!0;var Lm=Array.isArray,Bv=Object.prototype.hasOwnProperty,kf={current:null},Hv={key:!0,ref:!0,__self:!0,__source:!0};function qv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Bv.call(e,r)&&!Hv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Jo,type:t,key:s,ref:o,props:i,_owner:kf.current}}function HS(t,e){return{$$typeof:Jo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function If(t){return typeof t=="object"&&t!==null&&t.$$typeof===Jo}function qS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Mm=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qS(""+t.key):e.toString(36)}function rl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Jo:case DS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+xc(o,0):r,Lm(i)?(n="",t!=null&&(n=t.replace(Mm,"$&/")+"/"),rl(i,e,n,"",function(u){return u})):i!=null&&(If(i)&&(i=HS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Mm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Lm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+xc(s,a);o+=rl(s,e,n,l,i)}else if(l=BS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+xc(s,a++),o+=rl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ca(t,e,n){if(t==null)return t;var r=[],i=0;return rl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function KS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var at={current:null},il={transition:null},WS={ReactCurrentDispatcher:at,ReactCurrentBatchConfig:il,ReactCurrentOwner:kf};G.Children={map:Ca,forEach:function(t,e,n){Ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ca(t,function(){e++}),e},toArray:function(t){return Ca(t,function(e){return e})||[]},only:function(t){if(!If(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};G.Component=ds;G.Fragment=$S;G.Profiler=LS;G.PureComponent=Sf;G.StrictMode=bS;G.Suspense=US;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WS;G.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Uv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Bv.call(e,l)&&!Hv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Jo,type:t.type,key:i,ref:s,props:r,_owner:o}};G.createContext=function(t){return t={$$typeof:FS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:MS,_context:t},t.Consumer=t};G.createElement=qv;G.createFactory=function(t){var e=qv.bind(null,t);return e.type=t,e};G.createRef=function(){return{current:null}};G.forwardRef=function(t){return{$$typeof:jS,render:t}};G.isValidElement=If;G.lazy=function(t){return{$$typeof:zS,_payload:{_status:-1,_result:t},_init:KS}};G.memo=function(t,e){return{$$typeof:VS,type:t,compare:e===void 0?null:e}};G.startTransition=function(t){var e=il.transition;il.transition={};try{t()}finally{il.transition=e}};G.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};G.useCallback=function(t,e){return at.current.useCallback(t,e)};G.useContext=function(t){return at.current.useContext(t)};G.useDebugValue=function(){};G.useDeferredValue=function(t){return at.current.useDeferredValue(t)};G.useEffect=function(t,e){return at.current.useEffect(t,e)};G.useId=function(){return at.current.useId()};G.useImperativeHandle=function(t,e,n){return at.current.useImperativeHandle(t,e,n)};G.useInsertionEffect=function(t,e){return at.current.useInsertionEffect(t,e)};G.useLayoutEffect=function(t,e){return at.current.useLayoutEffect(t,e)};G.useMemo=function(t,e){return at.current.useMemo(t,e)};G.useReducer=function(t,e,n){return at.current.useReducer(t,e,n)};G.useRef=function(t){return at.current.useRef(t)};G.useState=function(t){return at.current.useState(t)};G.useSyncExternalStore=function(t,e,n){return at.current.useSyncExternalStore(t,e,n)};G.useTransition=function(){return at.current.useTransition()};G.version="18.2.0";Fv.exports=G;var N=Fv.exports;const GS=Xo(N);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QS=N,YS=Symbol.for("react.element"),XS=Symbol.for("react.fragment"),JS=Object.prototype.hasOwnProperty,ZS=QS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eT={key:!0,ref:!0,__self:!0,__source:!0};function Kv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)JS.call(e,r)&&!eT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:YS,type:t,key:s,ref:o,props:i,_owner:ZS.current}}ku.Fragment=XS;ku.jsx=Kv;ku.jsxs=Kv;Mv.exports=ku;var S=Mv.exports,Ih={},Wv={exports:{}},Nt={},Gv={exports:{}},Qv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,z){var q=D.length;D.push(z);e:for(;0<q;){var he=q-1>>>1,we=D[he];if(0<i(we,z))D[he]=z,D[q]=we,q=he;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var z=D[0],q=D.pop();if(q!==z){D[0]=q;e:for(var he=0,we=D.length,Ir=we>>>1;he<Ir;){var Gt=2*(he+1)-1,Cc=D[Gt],Cr=Gt+1,Ia=D[Cr];if(0>i(Cc,q))Cr<we&&0>i(Ia,Cc)?(D[he]=Ia,D[Cr]=q,he=Cr):(D[he]=Cc,D[Gt]=q,he=Gt);else if(Cr<we&&0>i(Ia,q))D[he]=Ia,D[Cr]=q,he=Cr;else break e}}return z}function i(D,z){var q=D.sortIndex-z.sortIndex;return q!==0?q:D.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,f=null,c=3,p=!1,g=!1,v=!1,T=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(D){for(var z=n(u);z!==null;){if(z.callback===null)r(u);else if(z.startTime<=D)r(u),z.sortIndex=z.expirationTime,e(l,z);else break;z=n(u)}}function E(D){if(v=!1,y(D),!g)if(n(l)!==null)g=!0,Pt(I);else{var z=n(u);z!==null&&pi(E,z.startTime-D)}}function I(D,z){g=!1,v&&(v=!1,m(k),k=-1),p=!0;var q=c;try{for(y(z),f=n(l);f!==null&&(!(f.expirationTime>z)||D&&!L());){var he=f.callback;if(typeof he=="function"){f.callback=null,c=f.priorityLevel;var we=he(f.expirationTime<=z);z=t.unstable_now(),typeof we=="function"?f.callback=we:f===n(l)&&r(l),y(z)}else r(l);f=n(l)}if(f!==null)var Ir=!0;else{var Gt=n(u);Gt!==null&&pi(E,Gt.startTime-z),Ir=!1}return Ir}finally{f=null,c=q,p=!1}}var w=!1,_=null,k=-1,C=5,R=-1;function L(){return!(t.unstable_now()-R<C)}function j(){if(_!==null){var D=t.unstable_now();R=D;var z=!0;try{z=_(!0,D)}finally{z?M():(w=!1,_=null)}}else w=!1}var M;if(typeof d=="function")M=function(){d(j)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,oe=ne.port2;ne.port1.onmessage=j,M=function(){oe.postMessage(null)}}else M=function(){T(j,0)};function Pt(D){_=D,w||(w=!0,M())}function pi(D,z){k=T(function(){D(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,Pt(I))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return c},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(c){case 1:case 2:case 3:var z=3;break;default:z=c}var q=c;c=z;try{return D()}finally{c=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var q=c;c=D;try{return z()}finally{c=q}},t.unstable_scheduleCallback=function(D,z,q){var he=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?he+q:he):q=he,D){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=q+we,D={id:h++,callback:z,priorityLevel:D,startTime:q,expirationTime:we,sortIndex:-1},q>he?(D.sortIndex=q,e(u,D),n(l)===null&&D===n(u)&&(v?(m(k),k=-1):v=!0,pi(E,q-he))):(D.sortIndex=we,e(l,D),g||p||(g=!0,Pt(I))),D},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(D){var z=c;return function(){var q=c;c=z;try{return D.apply(this,arguments)}finally{c=q}}}})(Qv);Gv.exports=Qv;var tT=Gv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv=N,Ct=tT;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xv=new Set,ao={};function li(t,e){Gi(t,e),Gi(t+"Capture",e)}function Gi(t,e){for(ao[t]=e,t=0;t<e.length;t++)Xv.add(e[t])}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ch=Object.prototype.hasOwnProperty,nT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fm={},jm={};function rT(t){return Ch.call(jm,t)?!0:Ch.call(Fm,t)?!1:nT.test(t)?jm[t]=!0:(Fm[t]=!0,!1)}function iT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function sT(t,e,n,r){if(e===null||typeof e>"u"||iT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function lt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){He[t]=new lt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];He[e]=new lt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){He[t]=new lt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){He[t]=new lt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){He[t]=new lt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){He[t]=new lt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){He[t]=new lt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){He[t]=new lt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){He[t]=new lt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Cf=/[\-:]([a-z])/g;function xf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Cf,xf);He[e]=new lt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Cf,xf);He[e]=new lt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Cf,xf);He[e]=new lt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){He[t]=new lt(t,1,!1,t.toLowerCase(),null,!1,!1)});He.xlinkHref=new lt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){He[t]=new lt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Nf(t,e,n,r){var i=He.hasOwnProperty(e)?He[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(sT(e,n,i,r)&&(n=null),r||i===null?rT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jn=Yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xa=Symbol.for("react.element"),_i=Symbol.for("react.portal"),Si=Symbol.for("react.fragment"),Rf=Symbol.for("react.strict_mode"),xh=Symbol.for("react.profiler"),Jv=Symbol.for("react.provider"),Zv=Symbol.for("react.context"),Pf=Symbol.for("react.forward_ref"),Nh=Symbol.for("react.suspense"),Rh=Symbol.for("react.suspense_list"),Af=Symbol.for("react.memo"),Bn=Symbol.for("react.lazy"),e0=Symbol.for("react.offscreen"),Um=Symbol.iterator;function _s(t){return t===null||typeof t!="object"?null:(t=Um&&t[Um]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,Nc;function As(t){if(Nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Nc=e&&e[1]||""}return`
`+Nc+t}var Rc=!1;function Pc(t,e){if(!t||Rc)return"";Rc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Rc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?As(t):""}function oT(t){switch(t.tag){case 5:return As(t.type);case 16:return As("Lazy");case 13:return As("Suspense");case 19:return As("SuspenseList");case 0:case 2:case 15:return t=Pc(t.type,!1),t;case 11:return t=Pc(t.type.render,!1),t;case 1:return t=Pc(t.type,!0),t;default:return""}}function Ph(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Si:return"Fragment";case _i:return"Portal";case xh:return"Profiler";case Rf:return"StrictMode";case Nh:return"Suspense";case Rh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Zv:return(t.displayName||"Context")+".Consumer";case Jv:return(t._context.displayName||"Context")+".Provider";case Pf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Af:return e=t.displayName||null,e!==null?e:Ph(t.type)||"Memo";case Bn:e=t._payload,t=t._init;try{return Ph(t(e))}catch{}}return null}function aT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ph(e);case 8:return e===Rf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function t0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function lT(t){var e=t0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Na(t){t._valueTracker||(t._valueTracker=lT(t))}function n0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=t0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ah(t,e){var n=e.checked;return me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function r0(t,e){e=e.checked,e!=null&&Nf(t,"checked",e,!1)}function Oh(t,e){r0(t,e);var n=fr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Dh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Dh(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Dh(t,e,n){(e!=="number"||Il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Os=Array.isArray;function $i(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function $h(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(Os(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function i0(t,e){var n=fr(e.value),r=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Hm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function s0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?s0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ra,o0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ra=Ra||document.createElement("div"),Ra.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ra.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Bs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uT=["Webkit","ms","Moz","O"];Object.keys(Bs).forEach(function(t){uT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Bs[e]=Bs[t]})});function a0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Bs.hasOwnProperty(t)&&Bs[t]?(""+e).trim():e+"px"}function l0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=a0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var cT=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lh(t,e){if(e){if(cT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function Mh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fh=null;function Of(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jh=null,bi=null,Li=null;function qm(t){if(t=ta(t)){if(typeof jh!="function")throw Error(x(280));var e=t.stateNode;e&&(e=Ru(e),jh(t.stateNode,t.type,e))}}function u0(t){bi?Li?Li.push(t):Li=[t]:bi=t}function c0(){if(bi){var t=bi,e=Li;if(Li=bi=null,qm(t),e)for(t=0;t<e.length;t++)qm(e[t])}}function h0(t,e){return t(e)}function d0(){}var Ac=!1;function f0(t,e,n){if(Ac)return t(e,n);Ac=!0;try{return h0(t,e,n)}finally{Ac=!1,(bi!==null||Li!==null)&&(d0(),c0())}}function uo(t,e){var n=t.stateNode;if(n===null)return null;var r=Ru(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var Uh=!1;if(Rn)try{var Ss={};Object.defineProperty(Ss,"passive",{get:function(){Uh=!0}}),window.addEventListener("test",Ss,Ss),window.removeEventListener("test",Ss,Ss)}catch{Uh=!1}function hT(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var Hs=!1,Cl=null,xl=!1,Vh=null,dT={onError:function(t){Hs=!0,Cl=t}};function fT(t,e,n,r,i,s,o,a,l){Hs=!1,Cl=null,hT.apply(dT,arguments)}function pT(t,e,n,r,i,s,o,a,l){if(fT.apply(this,arguments),Hs){if(Hs){var u=Cl;Hs=!1,Cl=null}else throw Error(x(198));xl||(xl=!0,Vh=u)}}function ui(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function p0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Km(t){if(ui(t)!==t)throw Error(x(188))}function mT(t){var e=t.alternate;if(!e){if(e=ui(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Km(i),t;if(s===r)return Km(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function m0(t){return t=mT(t),t!==null?g0(t):null}function g0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=g0(t);if(e!==null)return e;t=t.sibling}return null}var y0=Ct.unstable_scheduleCallback,Wm=Ct.unstable_cancelCallback,gT=Ct.unstable_shouldYield,yT=Ct.unstable_requestPaint,Ee=Ct.unstable_now,vT=Ct.unstable_getCurrentPriorityLevel,Df=Ct.unstable_ImmediatePriority,v0=Ct.unstable_UserBlockingPriority,Nl=Ct.unstable_NormalPriority,wT=Ct.unstable_LowPriority,w0=Ct.unstable_IdlePriority,Iu=null,rn=null;function ET(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Iu,t,void 0,(t.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:TT,_T=Math.log,ST=Math.LN2;function TT(t){return t>>>=0,t===0?32:31-(_T(t)/ST|0)|0}var Pa=64,Aa=4194304;function Ds(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Rl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ds(a):(s&=o,s!==0&&(r=Ds(s)))}else o=n&~i,o!==0?r=Ds(o):s!==0&&(r=Ds(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Bt(e),i=1<<n,r|=t[n],e&=~i;return r}function kT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=kT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function zh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function E0(){var t=Pa;return Pa<<=1,!(Pa&4194240)&&(Pa=64),t}function Oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Zo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bt(e),t[e]=n}function CT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function $f(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ie=0;function _0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var S0,bf,T0,k0,I0,Bh=!1,Oa=[],er=null,tr=null,nr=null,co=new Map,ho=new Map,Kn=[],xT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gm(t,e){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ho.delete(e.pointerId)}}function Ts(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ta(e),e!==null&&bf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function NT(t,e,n,r,i){switch(e){case"focusin":return er=Ts(er,t,e,n,r,i),!0;case"dragenter":return tr=Ts(tr,t,e,n,r,i),!0;case"mouseover":return nr=Ts(nr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return co.set(s,Ts(co.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ho.set(s,Ts(ho.get(s)||null,t,e,n,r,i)),!0}return!1}function C0(t){var e=Lr(t.target);if(e!==null){var n=ui(e);if(n!==null){if(e=n.tag,e===13){if(e=p0(n),e!==null){t.blockedOn=e,I0(t.priority,function(){T0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Hh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Fh=r,n.target.dispatchEvent(r),Fh=null}else return e=ta(n),e!==null&&bf(e),t.blockedOn=n,!1;e.shift()}return!0}function Qm(t,e,n){sl(t)&&n.delete(e)}function RT(){Bh=!1,er!==null&&sl(er)&&(er=null),tr!==null&&sl(tr)&&(tr=null),nr!==null&&sl(nr)&&(nr=null),co.forEach(Qm),ho.forEach(Qm)}function ks(t,e){t.blockedOn===e&&(t.blockedOn=null,Bh||(Bh=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,RT)))}function fo(t){function e(i){return ks(i,t)}if(0<Oa.length){ks(Oa[0],t);for(var n=1;n<Oa.length;n++){var r=Oa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(er!==null&&ks(er,t),tr!==null&&ks(tr,t),nr!==null&&ks(nr,t),co.forEach(e),ho.forEach(e),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)C0(n),n.blockedOn===null&&Kn.shift()}var Mi=jn.ReactCurrentBatchConfig,Pl=!0;function PT(t,e,n,r){var i=ie,s=Mi.transition;Mi.transition=null;try{ie=1,Lf(t,e,n,r)}finally{ie=i,Mi.transition=s}}function AT(t,e,n,r){var i=ie,s=Mi.transition;Mi.transition=null;try{ie=4,Lf(t,e,n,r)}finally{ie=i,Mi.transition=s}}function Lf(t,e,n,r){if(Pl){var i=Hh(t,e,n,r);if(i===null)zc(t,e,r,Al,n),Gm(t,r);else if(NT(i,t,e,n,r))r.stopPropagation();else if(Gm(t,r),e&4&&-1<xT.indexOf(t)){for(;i!==null;){var s=ta(i);if(s!==null&&S0(s),s=Hh(t,e,n,r),s===null&&zc(t,e,r,Al,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else zc(t,e,r,null,n)}}var Al=null;function Hh(t,e,n,r){if(Al=null,t=Of(r),t=Lr(t),t!==null)if(e=ui(t),e===null)t=null;else if(n=e.tag,n===13){if(t=p0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Al=t,null}function x0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(vT()){case Df:return 1;case v0:return 4;case Nl:case wT:return 16;case w0:return 536870912;default:return 16}default:return 16}}var Xn=null,Mf=null,ol=null;function N0(){if(ol)return ol;var t,e=Mf,n=e.length,r,i="value"in Xn?Xn.value:Xn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ol=i.slice(t,1<r?1-r:void 0)}function al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Da(){return!0}function Ym(){return!1}function Rt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Da:Ym,this.isPropagationStopped=Ym,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Da)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Da)},persist:function(){},isPersistent:Da}),e}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ff=Rt(fs),ea=me({},fs,{view:0,detail:0}),OT=Rt(ea),Dc,$c,Is,Cu=me({},ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(Dc=t.screenX-Is.screenX,$c=t.screenY-Is.screenY):$c=Dc=0,Is=t),Dc)},movementY:function(t){return"movementY"in t?t.movementY:$c}}),Xm=Rt(Cu),DT=me({},Cu,{dataTransfer:0}),$T=Rt(DT),bT=me({},ea,{relatedTarget:0}),bc=Rt(bT),LT=me({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),MT=Rt(LT),FT=me({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jT=Rt(FT),UT=me({},fs,{data:0}),Jm=Rt(UT),VT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function HT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=BT[t])?!!e[t]:!1}function jf(){return HT}var qT=me({},ea,{key:function(t){if(t.key){var e=VT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jf,charCode:function(t){return t.type==="keypress"?al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),KT=Rt(qT),WT=me({},Cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zm=Rt(WT),GT=me({},ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jf}),QT=Rt(GT),YT=me({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),XT=Rt(YT),JT=me({},Cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ZT=Rt(JT),ek=[9,13,27,32],Uf=Rn&&"CompositionEvent"in window,qs=null;Rn&&"documentMode"in document&&(qs=document.documentMode);var tk=Rn&&"TextEvent"in window&&!qs,R0=Rn&&(!Uf||qs&&8<qs&&11>=qs),eg=String.fromCharCode(32),tg=!1;function P0(t,e){switch(t){case"keyup":return ek.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function A0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ti=!1;function nk(t,e){switch(t){case"compositionend":return A0(e);case"keypress":return e.which!==32?null:(tg=!0,eg);case"textInput":return t=e.data,t===eg&&tg?null:t;default:return null}}function rk(t,e){if(Ti)return t==="compositionend"||!Uf&&P0(t,e)?(t=N0(),ol=Mf=Xn=null,Ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return R0&&e.locale!=="ko"?null:e.data;default:return null}}var ik={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ng(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ik[t.type]:e==="textarea"}function O0(t,e,n,r){u0(r),e=Ol(e,"onChange"),0<e.length&&(n=new Ff("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ks=null,po=null;function sk(t){B0(t,0)}function xu(t){var e=Ci(t);if(n0(e))return t}function ok(t,e){if(t==="change")return e}var D0=!1;if(Rn){var Lc;if(Rn){var Mc="oninput"in document;if(!Mc){var rg=document.createElement("div");rg.setAttribute("oninput","return;"),Mc=typeof rg.oninput=="function"}Lc=Mc}else Lc=!1;D0=Lc&&(!document.documentMode||9<document.documentMode)}function ig(){Ks&&(Ks.detachEvent("onpropertychange",$0),po=Ks=null)}function $0(t){if(t.propertyName==="value"&&xu(po)){var e=[];O0(e,po,t,Of(t)),f0(sk,e)}}function ak(t,e,n){t==="focusin"?(ig(),Ks=e,po=n,Ks.attachEvent("onpropertychange",$0)):t==="focusout"&&ig()}function lk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xu(po)}function uk(t,e){if(t==="click")return xu(e)}function ck(t,e){if(t==="input"||t==="change")return xu(e)}function hk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qt=typeof Object.is=="function"?Object.is:hk;function mo(t,e){if(qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ch.call(e,i)||!qt(t[i],e[i]))return!1}return!0}function sg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function og(t,e){var n=sg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sg(n)}}function b0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?b0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function L0(){for(var t=window,e=Il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Il(t.document)}return e}function Vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dk(t){var e=L0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&b0(n.ownerDocument.documentElement,n)){if(r!==null&&Vf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=og(n,s);var o=og(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var fk=Rn&&"documentMode"in document&&11>=document.documentMode,ki=null,qh=null,Ws=null,Kh=!1;function ag(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kh||ki==null||ki!==Il(r)||(r=ki,"selectionStart"in r&&Vf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ws&&mo(Ws,r)||(Ws=r,r=Ol(qh,"onSelect"),0<r.length&&(e=new Ff("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ki)))}function $a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ii={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionend:$a("Transition","TransitionEnd")},Fc={},M0={};Rn&&(M0=document.createElement("div").style,"AnimationEvent"in window||(delete Ii.animationend.animation,delete Ii.animationiteration.animation,delete Ii.animationstart.animation),"TransitionEvent"in window||delete Ii.transitionend.transition);function Nu(t){if(Fc[t])return Fc[t];if(!Ii[t])return t;var e=Ii[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in M0)return Fc[t]=e[n];return t}var F0=Nu("animationend"),j0=Nu("animationiteration"),U0=Nu("animationstart"),V0=Nu("transitionend"),z0=new Map,lg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){z0.set(t,e),li(e,[t])}for(var jc=0;jc<lg.length;jc++){var Uc=lg[jc],pk=Uc.toLowerCase(),mk=Uc[0].toUpperCase()+Uc.slice(1);wr(pk,"on"+mk)}wr(F0,"onAnimationEnd");wr(j0,"onAnimationIteration");wr(U0,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(V0,"onTransitionEnd");Gi("onMouseEnter",["mouseout","mouseover"]);Gi("onMouseLeave",["mouseout","mouseover"]);Gi("onPointerEnter",["pointerout","pointerover"]);Gi("onPointerLeave",["pointerout","pointerover"]);li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));li("onBeforeInput",["compositionend","keypress","textInput","paste"]);li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $s="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gk=new Set("cancel close invalid load scroll toggle".split(" ").concat($s));function ug(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,pT(r,e,void 0,t),t.currentTarget=null}function B0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;ug(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;ug(i,a,u),s=l}}}if(xl)throw t=Vh,xl=!1,Vh=null,t}function le(t,e){var n=e[Xh];n===void 0&&(n=e[Xh]=new Set);var r=t+"__bubble";n.has(r)||(H0(e,t,2,!1),n.add(r))}function Vc(t,e,n){var r=0;e&&(r|=4),H0(n,t,r,e)}var ba="_reactListening"+Math.random().toString(36).slice(2);function go(t){if(!t[ba]){t[ba]=!0,Xv.forEach(function(n){n!=="selectionchange"&&(gk.has(n)||Vc(n,!1,t),Vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ba]||(e[ba]=!0,Vc("selectionchange",!1,e))}}function H0(t,e,n,r){switch(x0(e)){case 1:var i=PT;break;case 4:i=AT;break;default:i=Lf}n=i.bind(null,e,n,t),i=void 0,!Uh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function zc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Lr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}f0(function(){var u=s,h=Of(n),f=[];e:{var c=z0.get(t);if(c!==void 0){var p=Ff,g=t;switch(t){case"keypress":if(al(n)===0)break e;case"keydown":case"keyup":p=KT;break;case"focusin":g="focus",p=bc;break;case"focusout":g="blur",p=bc;break;case"beforeblur":case"afterblur":p=bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=$T;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=QT;break;case F0:case j0:case U0:p=MT;break;case V0:p=XT;break;case"scroll":p=OT;break;case"wheel":p=ZT;break;case"copy":case"cut":case"paste":p=jT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zm}var v=(e&4)!==0,T=!v&&t==="scroll",m=v?c!==null?c+"Capture":null:c;v=[];for(var d=u,y;d!==null;){y=d;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,m!==null&&(E=uo(d,m),E!=null&&v.push(yo(d,E,y)))),T)break;d=d.return}0<v.length&&(c=new p(c,g,null,n,h),f.push({event:c,listeners:v}))}}if(!(e&7)){e:{if(c=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",c&&n!==Fh&&(g=n.relatedTarget||n.fromElement)&&(Lr(g)||g[Pn]))break e;if((p||c)&&(c=h.window===h?h:(c=h.ownerDocument)?c.defaultView||c.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Lr(g):null,g!==null&&(T=ui(g),g!==T||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(v=Xm,E="onMouseLeave",m="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(v=Zm,E="onPointerLeave",m="onPointerEnter",d="pointer"),T=p==null?c:Ci(p),y=g==null?c:Ci(g),c=new v(E,d+"leave",p,n,h),c.target=T,c.relatedTarget=y,E=null,Lr(h)===u&&(v=new v(m,d+"enter",g,n,h),v.target=y,v.relatedTarget=T,E=v),T=E,p&&g)t:{for(v=p,m=g,d=0,y=v;y;y=mi(y))d++;for(y=0,E=m;E;E=mi(E))y++;for(;0<d-y;)v=mi(v),d--;for(;0<y-d;)m=mi(m),y--;for(;d--;){if(v===m||m!==null&&v===m.alternate)break t;v=mi(v),m=mi(m)}v=null}else v=null;p!==null&&cg(f,c,p,v,!1),g!==null&&T!==null&&cg(f,T,g,v,!0)}}e:{if(c=u?Ci(u):window,p=c.nodeName&&c.nodeName.toLowerCase(),p==="select"||p==="input"&&c.type==="file")var I=ok;else if(ng(c))if(D0)I=ck;else{I=lk;var w=ak}else(p=c.nodeName)&&p.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(I=uk);if(I&&(I=I(t,u))){O0(f,I,n,h);break e}w&&w(t,c,u),t==="focusout"&&(w=c._wrapperState)&&w.controlled&&c.type==="number"&&Dh(c,"number",c.value)}switch(w=u?Ci(u):window,t){case"focusin":(ng(w)||w.contentEditable==="true")&&(ki=w,qh=u,Ws=null);break;case"focusout":Ws=qh=ki=null;break;case"mousedown":Kh=!0;break;case"contextmenu":case"mouseup":case"dragend":Kh=!1,ag(f,n,h);break;case"selectionchange":if(fk)break;case"keydown":case"keyup":ag(f,n,h)}var _;if(Uf)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Ti?P0(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(R0&&n.locale!=="ko"&&(Ti||k!=="onCompositionStart"?k==="onCompositionEnd"&&Ti&&(_=N0()):(Xn=h,Mf="value"in Xn?Xn.value:Xn.textContent,Ti=!0)),w=Ol(u,k),0<w.length&&(k=new Jm(k,t,null,n,h),f.push({event:k,listeners:w}),_?k.data=_:(_=A0(n),_!==null&&(k.data=_)))),(_=tk?nk(t,n):rk(t,n))&&(u=Ol(u,"onBeforeInput"),0<u.length&&(h=new Jm("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=_))}B0(f,e)})}function yo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ol(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=uo(t,n),s!=null&&r.unshift(yo(t,s,i)),s=uo(t,e),s!=null&&r.push(yo(t,s,i))),t=t.return}return r}function mi(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=uo(n,s),l!=null&&o.unshift(yo(n,l,a))):i||(l=uo(n,s),l!=null&&o.push(yo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var yk=/\r\n?/g,vk=/\u0000|\uFFFD/g;function hg(t){return(typeof t=="string"?t:""+t).replace(yk,`
`).replace(vk,"")}function La(t,e,n){if(e=hg(e),hg(t)!==e&&n)throw Error(x(425))}function Dl(){}var Wh=null,Gh=null;function Qh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yh=typeof setTimeout=="function"?setTimeout:void 0,wk=typeof clearTimeout=="function"?clearTimeout:void 0,dg=typeof Promise=="function"?Promise:void 0,Ek=typeof queueMicrotask=="function"?queueMicrotask:typeof dg<"u"?function(t){return dg.resolve(null).then(t).catch(_k)}:Yh;function _k(t){setTimeout(function(){throw t})}function Bc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),fo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fo(e)}function rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function fg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ps=Math.random().toString(36).slice(2),Jt="__reactFiber$"+ps,vo="__reactProps$"+ps,Pn="__reactContainer$"+ps,Xh="__reactEvents$"+ps,Sk="__reactListeners$"+ps,Tk="__reactHandles$"+ps;function Lr(t){var e=t[Jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pn]||n[Jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fg(t);t!==null;){if(n=t[Jt])return n;t=fg(t)}return e}t=n,n=t.parentNode}return null}function ta(t){return t=t[Jt]||t[Pn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ci(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function Ru(t){return t[vo]||null}var Jh=[],xi=-1;function Er(t){return{current:t}}function ce(t){0>xi||(t.current=Jh[xi],Jh[xi]=null,xi--)}function ae(t,e){xi++,Jh[xi]=t.current,t.current=e}var pr={},et=Er(pr),mt=Er(!1),Qr=pr;function Qi(t,e){var n=t.type.contextTypes;if(!n)return pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function $l(){ce(mt),ce(et)}function pg(t,e,n){if(et.current!==pr)throw Error(x(168));ae(et,e),ae(mt,n)}function q0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,aT(t)||"Unknown",i));return me({},n,r)}function bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,Qr=et.current,ae(et,t),ae(mt,mt.current),!0}function mg(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=q0(t,e,Qr),r.__reactInternalMemoizedMergedChildContext=t,ce(mt),ce(et),ae(et,t)):ce(mt),ae(mt,n)}var En=null,Pu=!1,Hc=!1;function K0(t){En===null?En=[t]:En.push(t)}function kk(t){Pu=!0,K0(t)}function _r(){if(!Hc&&En!==null){Hc=!0;var t=0,e=ie;try{var n=En;for(ie=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}En=null,Pu=!1}catch(i){throw En!==null&&(En=En.slice(t+1)),y0(Df,_r),i}finally{ie=e,Hc=!1}}return null}var Ni=[],Ri=0,Ll=null,Ml=0,At=[],Ot=0,Yr=null,Sn=1,Tn="";function Rr(t,e){Ni[Ri++]=Ml,Ni[Ri++]=Ll,Ll=t,Ml=e}function W0(t,e,n){At[Ot++]=Sn,At[Ot++]=Tn,At[Ot++]=Yr,Yr=t;var r=Sn;t=Tn;var i=32-Bt(r)-1;r&=~(1<<i),n+=1;var s=32-Bt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Sn=1<<32-Bt(e)+i|n<<i|r,Tn=s+t}else Sn=1<<s|n<<i|r,Tn=t}function zf(t){t.return!==null&&(Rr(t,1),W0(t,1,0))}function Bf(t){for(;t===Ll;)Ll=Ni[--Ri],Ni[Ri]=null,Ml=Ni[--Ri],Ni[Ri]=null;for(;t===Yr;)Yr=At[--Ot],At[Ot]=null,Tn=At[--Ot],At[Ot]=null,Sn=At[--Ot],At[Ot]=null}var St=null,_t=null,de=!1,zt=null;function G0(t,e){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,St=t,_t=rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,St=t,_t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:Sn,overflow:Tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,St=t,_t=null,!0):!1;default:return!1}}function Zh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ed(t){if(de){var e=_t;if(e){var n=e;if(!gg(t,e)){if(Zh(t))throw Error(x(418));e=rr(n.nextSibling);var r=St;e&&gg(t,e)?G0(r,n):(t.flags=t.flags&-4097|2,de=!1,St=t)}}else{if(Zh(t))throw Error(x(418));t.flags=t.flags&-4097|2,de=!1,St=t}}}function yg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;St=t}function Ma(t){if(t!==St)return!1;if(!de)return yg(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Qh(t.type,t.memoizedProps)),e&&(e=_t)){if(Zh(t))throw Q0(),Error(x(418));for(;e;)G0(t,e),e=rr(e.nextSibling)}if(yg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_t=rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_t=null}}else _t=St?rr(t.stateNode.nextSibling):null;return!0}function Q0(){for(var t=_t;t;)t=rr(t.nextSibling)}function Yi(){_t=St=null,de=!1}function Hf(t){zt===null?zt=[t]:zt.push(t)}var Ik=jn.ReactCurrentBatchConfig;function Ut(t,e){if(t&&t.defaultProps){e=me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Fl=Er(null),jl=null,Pi=null,qf=null;function Kf(){qf=Pi=jl=null}function Wf(t){var e=Fl.current;ce(Fl),t._currentValue=e}function td(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Fi(t,e){jl=t,qf=Pi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function Lt(t){var e=t._currentValue;if(qf!==t)if(t={context:t,memoizedValue:e,next:null},Pi===null){if(jl===null)throw Error(x(308));Pi=t,jl.dependencies={lanes:0,firstContext:t}}else Pi=Pi.next=t;return e}var Mr=null;function Gf(t){Mr===null?Mr=[t]:Mr.push(t)}function Y0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Gf(e)):(n.next=i.next,i.next=n),e.interleaved=n,An(t,r)}function An(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hn=!1;function Qf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function X0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,An(t,n)}return i=r.interleaved,i===null?(e.next=e,Gf(r)):(e.next=i.next,i.next=e),r.interleaved=e,An(t,n)}function ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$f(t,n)}}function vg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ul(t,e,n,r){var i=t.updateQueue;Hn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=u=l=null,a=s;do{var c=a.lane,p=a.eventTime;if((r&c)===c){h!==null&&(h=h.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(c=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){f=g.call(p,f,c);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,c=typeof g=="function"?g.call(p,f,c):g,c==null)break e;f=me({},f,c);break e;case 2:Hn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,c=i.effects,c===null?i.effects=[a]:c.push(a))}else p={eventTime:p,lane:c,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=p,l=f):h=h.next=p,o|=c;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;c=a,a=c.next,c.next=null,i.lastBaseUpdate=c,i.shared.pending=null}}while(1);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=f}}function wg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var J0=new Yv.Component().refs;function nd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Au={isMounted:function(t){return(t=t._reactInternals)?ui(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),i=or(t),s=xn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,i),e!==null&&(Ht(e,t,i,r),ll(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),i=or(t),s=xn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,i),e!==null&&(Ht(e,t,i,r),ll(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=or(t),i=xn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ir(t,i,r),e!==null&&(Ht(e,t,r,n),ll(e,t,r))}};function Eg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!mo(n,r)||!mo(i,s):!0}function Z0(t,e,n){var r=!1,i=pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Lt(s):(i=gt(e)?Qr:et.current,r=e.contextTypes,s=(r=r!=null)?Qi(t,i):pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Au,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function _g(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Au.enqueueReplaceState(e,e.state,null)}function rd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=J0,Qf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Lt(s):(s=gt(e)?Qr:et.current,i.context=Qi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Au.enqueueReplaceState(i,i.state,null),Ul(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===J0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Fa(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sg(t){var e=t._init;return e(t._payload)}function e1(t){function e(m,d){if(t){var y=m.deletions;y===null?(m.deletions=[d],m.flags|=16):y.push(d)}}function n(m,d){if(!t)return null;for(;d!==null;)e(m,d),d=d.sibling;return null}function r(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function i(m,d){return m=ar(m,d),m.index=0,m.sibling=null,m}function s(m,d,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<d?(m.flags|=2,d):y):(m.flags|=2,d)):(m.flags|=1048576,d)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,d,y,E){return d===null||d.tag!==6?(d=Xc(y,m.mode,E),d.return=m,d):(d=i(d,y),d.return=m,d)}function l(m,d,y,E){var I=y.type;return I===Si?h(m,d,y.props.children,E,y.key):d!==null&&(d.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Bn&&Sg(I)===d.type)?(E=i(d,y.props),E.ref=Cs(m,d,y),E.return=m,E):(E=pl(y.type,y.key,y.props,null,m.mode,E),E.ref=Cs(m,d,y),E.return=m,E)}function u(m,d,y,E){return d===null||d.tag!==4||d.stateNode.containerInfo!==y.containerInfo||d.stateNode.implementation!==y.implementation?(d=Jc(y,m.mode,E),d.return=m,d):(d=i(d,y.children||[]),d.return=m,d)}function h(m,d,y,E,I){return d===null||d.tag!==7?(d=Hr(y,m.mode,E,I),d.return=m,d):(d=i(d,y),d.return=m,d)}function f(m,d,y){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Xc(""+d,m.mode,y),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case xa:return y=pl(d.type,d.key,d.props,null,m.mode,y),y.ref=Cs(m,null,d),y.return=m,y;case _i:return d=Jc(d,m.mode,y),d.return=m,d;case Bn:var E=d._init;return f(m,E(d._payload),y)}if(Os(d)||_s(d))return d=Hr(d,m.mode,y,null),d.return=m,d;Fa(m,d)}return null}function c(m,d,y,E){var I=d!==null?d.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:a(m,d,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case xa:return y.key===I?l(m,d,y,E):null;case _i:return y.key===I?u(m,d,y,E):null;case Bn:return I=y._init,c(m,d,I(y._payload),E)}if(Os(y)||_s(y))return I!==null?null:h(m,d,y,E,null);Fa(m,y)}return null}function p(m,d,y,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return m=m.get(y)||null,a(d,m,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case xa:return m=m.get(E.key===null?y:E.key)||null,l(d,m,E,I);case _i:return m=m.get(E.key===null?y:E.key)||null,u(d,m,E,I);case Bn:var w=E._init;return p(m,d,y,w(E._payload),I)}if(Os(E)||_s(E))return m=m.get(y)||null,h(d,m,E,I,null);Fa(d,E)}return null}function g(m,d,y,E){for(var I=null,w=null,_=d,k=d=0,C=null;_!==null&&k<y.length;k++){_.index>k?(C=_,_=null):C=_.sibling;var R=c(m,_,y[k],E);if(R===null){_===null&&(_=C);break}t&&_&&R.alternate===null&&e(m,_),d=s(R,d,k),w===null?I=R:w.sibling=R,w=R,_=C}if(k===y.length)return n(m,_),de&&Rr(m,k),I;if(_===null){for(;k<y.length;k++)_=f(m,y[k],E),_!==null&&(d=s(_,d,k),w===null?I=_:w.sibling=_,w=_);return de&&Rr(m,k),I}for(_=r(m,_);k<y.length;k++)C=p(_,m,k,y[k],E),C!==null&&(t&&C.alternate!==null&&_.delete(C.key===null?k:C.key),d=s(C,d,k),w===null?I=C:w.sibling=C,w=C);return t&&_.forEach(function(L){return e(m,L)}),de&&Rr(m,k),I}function v(m,d,y,E){var I=_s(y);if(typeof I!="function")throw Error(x(150));if(y=I.call(y),y==null)throw Error(x(151));for(var w=I=null,_=d,k=d=0,C=null,R=y.next();_!==null&&!R.done;k++,R=y.next()){_.index>k?(C=_,_=null):C=_.sibling;var L=c(m,_,R.value,E);if(L===null){_===null&&(_=C);break}t&&_&&L.alternate===null&&e(m,_),d=s(L,d,k),w===null?I=L:w.sibling=L,w=L,_=C}if(R.done)return n(m,_),de&&Rr(m,k),I;if(_===null){for(;!R.done;k++,R=y.next())R=f(m,R.value,E),R!==null&&(d=s(R,d,k),w===null?I=R:w.sibling=R,w=R);return de&&Rr(m,k),I}for(_=r(m,_);!R.done;k++,R=y.next())R=p(_,m,k,R.value,E),R!==null&&(t&&R.alternate!==null&&_.delete(R.key===null?k:R.key),d=s(R,d,k),w===null?I=R:w.sibling=R,w=R);return t&&_.forEach(function(j){return e(m,j)}),de&&Rr(m,k),I}function T(m,d,y,E){if(typeof y=="object"&&y!==null&&y.type===Si&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case xa:e:{for(var I=y.key,w=d;w!==null;){if(w.key===I){if(I=y.type,I===Si){if(w.tag===7){n(m,w.sibling),d=i(w,y.props.children),d.return=m,m=d;break e}}else if(w.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Bn&&Sg(I)===w.type){n(m,w.sibling),d=i(w,y.props),d.ref=Cs(m,w,y),d.return=m,m=d;break e}n(m,w);break}else e(m,w);w=w.sibling}y.type===Si?(d=Hr(y.props.children,m.mode,E,y.key),d.return=m,m=d):(E=pl(y.type,y.key,y.props,null,m.mode,E),E.ref=Cs(m,d,y),E.return=m,m=E)}return o(m);case _i:e:{for(w=y.key;d!==null;){if(d.key===w)if(d.tag===4&&d.stateNode.containerInfo===y.containerInfo&&d.stateNode.implementation===y.implementation){n(m,d.sibling),d=i(d,y.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else e(m,d);d=d.sibling}d=Jc(y,m.mode,E),d.return=m,m=d}return o(m);case Bn:return w=y._init,T(m,d,w(y._payload),E)}if(Os(y))return g(m,d,y,E);if(_s(y))return v(m,d,y,E);Fa(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,d!==null&&d.tag===6?(n(m,d.sibling),d=i(d,y),d.return=m,m=d):(n(m,d),d=Xc(y,m.mode,E),d.return=m,m=d),o(m)):n(m,d)}return T}var Xi=e1(!0),t1=e1(!1),na={},sn=Er(na),wo=Er(na),Eo=Er(na);function Fr(t){if(t===na)throw Error(x(174));return t}function Yf(t,e){switch(ae(Eo,e),ae(wo,t),ae(sn,na),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bh(e,t)}ce(sn),ae(sn,e)}function Ji(){ce(sn),ce(wo),ce(Eo)}function n1(t){Fr(Eo.current);var e=Fr(sn.current),n=bh(e,t.type);e!==n&&(ae(wo,t),ae(sn,n))}function Xf(t){wo.current===t&&(ce(sn),ce(wo))}var fe=Er(0);function Vl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qc=[];function Jf(){for(var t=0;t<qc.length;t++)qc[t]._workInProgressVersionPrimary=null;qc.length=0}var ul=jn.ReactCurrentDispatcher,Kc=jn.ReactCurrentBatchConfig,Xr=0,pe=null,Ie=null,Oe=null,zl=!1,Gs=!1,_o=0,Ck=0;function qe(){throw Error(x(321))}function Zf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qt(t[n],e[n]))return!1;return!0}function ep(t,e,n,r,i,s){if(Xr=s,pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ul.current=t===null||t.memoizedState===null?Pk:Ak,t=n(r,i),Gs){s=0;do{if(Gs=!1,_o=0,25<=s)throw Error(x(301));s+=1,Oe=Ie=null,e.updateQueue=null,ul.current=Ok,t=n(r,i)}while(Gs)}if(ul.current=Bl,e=Ie!==null&&Ie.next!==null,Xr=0,Oe=Ie=pe=null,zl=!1,e)throw Error(x(300));return t}function tp(){var t=_o!==0;return _o=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?pe.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function Mt(){if(Ie===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=Ie.next;var e=Oe===null?pe.memoizedState:Oe.next;if(e!==null)Oe=e,Ie=t;else{if(t===null)throw Error(x(310));Ie=t,t={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Oe===null?pe.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function So(t,e){return typeof e=="function"?e(t):e}function Wc(t){var e=Mt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=Ie,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((Xr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,pe.lanes|=h,Jr|=h}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,qt(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,pe.lanes|=s,Jr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gc(t){var e=Mt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);qt(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function r1(){}function i1(t,e){var n=pe,r=Mt(),i=e(),s=!qt(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,np(a1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,To(9,o1.bind(null,n,r,i,e),void 0,null),be===null)throw Error(x(349));Xr&30||s1(n,e,i)}return i}function s1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function o1(t,e,n,r){e.value=n,e.getSnapshot=r,l1(e)&&u1(t)}function a1(t,e,n){return n(function(){l1(e)&&u1(t)})}function l1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qt(t,n)}catch{return!0}}function u1(t){var e=An(t,1);e!==null&&Ht(e,t,1,-1)}function Tg(t){var e=Xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:t},e.queue=t,t=t.dispatch=Rk.bind(null,pe,t),[e.memoizedState,t]}function To(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=pe.updateQueue,e===null?(e={lastEffect:null,stores:null},pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function c1(){return Mt().memoizedState}function cl(t,e,n,r){var i=Xt();pe.flags|=t,i.memoizedState=To(1|e,n,void 0,r===void 0?null:r)}function Ou(t,e,n,r){var i=Mt();r=r===void 0?null:r;var s=void 0;if(Ie!==null){var o=Ie.memoizedState;if(s=o.destroy,r!==null&&Zf(r,o.deps)){i.memoizedState=To(e,n,s,r);return}}pe.flags|=t,i.memoizedState=To(1|e,n,s,r)}function kg(t,e){return cl(8390656,8,t,e)}function np(t,e){return Ou(2048,8,t,e)}function h1(t,e){return Ou(4,2,t,e)}function d1(t,e){return Ou(4,4,t,e)}function f1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function p1(t,e,n){return n=n!=null?n.concat([t]):null,Ou(4,4,f1.bind(null,e,t),n)}function rp(){}function m1(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function g1(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Zf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function y1(t,e,n){return Xr&21?(qt(n,e)||(n=E0(),pe.lanes|=n,Jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function xk(t,e){var n=ie;ie=n!==0&&4>n?n:4,t(!0);var r=Kc.transition;Kc.transition={};try{t(!1),e()}finally{ie=n,Kc.transition=r}}function v1(){return Mt().memoizedState}function Nk(t,e,n){var r=or(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},w1(t))E1(e,n);else if(n=Y0(t,e,n,r),n!==null){var i=ot();Ht(n,t,r,i),_1(n,e,r)}}function Rk(t,e,n){var r=or(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(w1(t))E1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,qt(a,o)){var l=e.interleaved;l===null?(i.next=i,Gf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Y0(t,e,i,r),n!==null&&(i=ot(),Ht(n,t,r,i),_1(n,e,r))}}function w1(t){var e=t.alternate;return t===pe||e!==null&&e===pe}function E1(t,e){Gs=zl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,$f(t,n)}}var Bl={readContext:Lt,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useInsertionEffect:qe,useLayoutEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useMutableSource:qe,useSyncExternalStore:qe,useId:qe,unstable_isNewReconciler:!1},Pk={readContext:Lt,useCallback:function(t,e){return Xt().memoizedState=[t,e===void 0?null:e],t},useContext:Lt,useEffect:kg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,cl(4194308,4,f1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cl(4194308,4,t,e)},useInsertionEffect:function(t,e){return cl(4,2,t,e)},useMemo:function(t,e){var n=Xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Nk.bind(null,pe,t),[r.memoizedState,t]},useRef:function(t){var e=Xt();return t={current:t},e.memoizedState=t},useState:Tg,useDebugValue:rp,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=Tg(!1),e=t[0];return t=xk.bind(null,t[1]),Xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=pe,i=Xt();if(de){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),be===null)throw Error(x(349));Xr&30||s1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,kg(a1.bind(null,r,s,t),[t]),r.flags|=2048,To(9,o1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Xt(),e=be.identifierPrefix;if(de){var n=Tn,r=Sn;n=(r&~(1<<32-Bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ck++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ak={readContext:Lt,useCallback:m1,useContext:Lt,useEffect:np,useImperativeHandle:p1,useInsertionEffect:h1,useLayoutEffect:d1,useMemo:g1,useReducer:Wc,useRef:c1,useState:function(){return Wc(So)},useDebugValue:rp,useDeferredValue:function(t){var e=Mt();return y1(e,Ie.memoizedState,t)},useTransition:function(){var t=Wc(So)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:r1,useSyncExternalStore:i1,useId:v1,unstable_isNewReconciler:!1},Ok={readContext:Lt,useCallback:m1,useContext:Lt,useEffect:np,useImperativeHandle:p1,useInsertionEffect:h1,useLayoutEffect:d1,useMemo:g1,useReducer:Gc,useRef:c1,useState:function(){return Gc(So)},useDebugValue:rp,useDeferredValue:function(t){var e=Mt();return Ie===null?e.memoizedState=t:y1(e,Ie.memoizedState,t)},useTransition:function(){var t=Gc(So)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:r1,useSyncExternalStore:i1,useId:v1,unstable_isNewReconciler:!1};function Zi(t,e){try{var n="",r=e;do n+=oT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Qc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function id(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Dk=typeof WeakMap=="function"?WeakMap:Map;function S1(t,e,n){n=xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ql||(ql=!0,pd=r),id(t,e)},n}function T1(t,e,n){n=xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){id(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){id(t,e),typeof r!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ig(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Dk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Wk.bind(null,t,e,n),e.then(t,t))}function Cg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function xg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xn(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var $k=jn.ReactCurrentOwner,pt=!1;function rt(t,e,n,r){e.child=t===null?t1(e,null,n,r):Xi(e,t.child,n,r)}function Ng(t,e,n,r,i){n=n.render;var s=e.ref;return Fi(e,i),r=ep(t,e,n,r,s,i),n=tp(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(de&&n&&zf(e),e.flags|=1,rt(t,e,r,i),e.child)}function Rg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!hp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,k1(t,e,s,r,i)):(t=pl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:mo,n(o,r)&&t.ref===e.ref)return On(t,e,i)}return e.flags|=1,t=ar(s,r),t.ref=e.ref,t.return=e,e.child=t}function k1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(mo(s,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,On(t,e,i)}return sd(t,e,n,r,i)}function I1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(Oi,wt),wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ae(Oi,wt),wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ae(Oi,wt),wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ae(Oi,wt),wt|=r;return rt(t,e,i,n),e.child}function C1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sd(t,e,n,r,i){var s=gt(n)?Qr:et.current;return s=Qi(e,s),Fi(e,i),n=ep(t,e,n,r,s,i),r=tp(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(de&&r&&zf(e),e.flags|=1,rt(t,e,n,i),e.child)}function Pg(t,e,n,r,i){if(gt(n)){var s=!0;bl(e)}else s=!1;if(Fi(e,i),e.stateNode===null)hl(t,e),Z0(e,n,r),rd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Lt(u):(u=gt(n)?Qr:et.current,u=Qi(e,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&_g(e,o,r,u),Hn=!1;var c=e.memoizedState;o.state=c,Ul(e,r,o,i),l=e.memoizedState,a!==r||c!==l||mt.current||Hn?(typeof h=="function"&&(nd(e,n,h,r),l=e.memoizedState),(a=Hn||Eg(e,n,a,r,c,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,X0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Ut(e.type,a),o.props=u,f=e.pendingProps,c=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Lt(l):(l=gt(n)?Qr:et.current,l=Qi(e,l));var p=n.getDerivedStateFromProps;(h=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||c!==l)&&_g(e,o,r,l),Hn=!1,c=e.memoizedState,o.state=c,Ul(e,r,o,i);var g=e.memoizedState;a!==f||c!==g||mt.current||Hn?(typeof p=="function"&&(nd(e,n,p,r),g=e.memoizedState),(u=Hn||Eg(e,n,u,r,c,g,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),r=!1)}return od(t,e,n,r,s,i)}function od(t,e,n,r,i,s){C1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&mg(e,n,!1),On(t,e,s);r=e.stateNode,$k.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xi(e,t.child,null,s),e.child=Xi(e,null,a,s)):rt(t,e,a,s),e.memoizedState=r.state,i&&mg(e,n,!0),e.child}function x1(t){var e=t.stateNode;e.pendingContext?pg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pg(t,e.context,!1),Yf(t,e.containerInfo)}function Ag(t,e,n,r,i){return Yi(),Hf(i),e.flags|=256,rt(t,e,n,r),e.child}var ad={dehydrated:null,treeContext:null,retryLane:0};function ld(t){return{baseLanes:t,cachePool:null,transitions:null}}function N1(t,e,n){var r=e.pendingProps,i=fe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ae(fe,i&1),t===null)return ed(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=bu(o,r,0,null),t=Hr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ld(n),e.memoizedState=ad,t):ip(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return bk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ar(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ar(a,s):(s=Hr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ld(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ad,r}return s=t.child,t=s.sibling,r=ar(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ip(t,e){return e=bu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ja(t,e,n,r){return r!==null&&Hf(r),Xi(e,t.child,null,n),t=ip(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Qc(Error(x(422))),ja(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=bu({mode:"visible",children:r.children},i,0,null),s=Hr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Xi(e,t.child,null,o),e.child.memoizedState=ld(o),e.memoizedState=ad,s);if(!(e.mode&1))return ja(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=Qc(s,r,void 0),ja(t,e,o,r)}if(a=(o&t.childLanes)!==0,pt||a){if(r=be,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,An(t,i),Ht(r,t,i,-1))}return cp(),r=Qc(Error(x(421))),ja(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Gk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,_t=rr(i.nextSibling),St=e,de=!0,zt=null,t!==null&&(At[Ot++]=Sn,At[Ot++]=Tn,At[Ot++]=Yr,Sn=t.id,Tn=t.overflow,Yr=e),e=ip(e,r.children),e.flags|=4096,e)}function Og(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),td(t.return,e,n)}function Yc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function R1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(rt(t,e,r.children,n),r=fe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Og(t,n,e);else if(t.tag===19)Og(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ae(fe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Vl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Yc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Yc(e,!0,n,null,s);break;case"together":Yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function hl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function On(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Lk(t,e,n){switch(e.tag){case 3:x1(e),Yi();break;case 5:n1(e);break;case 1:gt(e.type)&&bl(e);break;case 4:Yf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ae(Fl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ae(fe,fe.current&1),e.flags|=128,null):n&e.child.childLanes?N1(t,e,n):(ae(fe,fe.current&1),t=On(t,e,n),t!==null?t.sibling:null);ae(fe,fe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return R1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(fe,fe.current),r)break;return null;case 22:case 23:return e.lanes=0,I1(t,e,n)}return On(t,e,n)}var P1,ud,A1,O1;P1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ud=function(){};A1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Fr(sn.current);var s=null;switch(n){case"input":i=Ah(t,i),r=Ah(t,r),s=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),s=[];break;case"textarea":i=$h(t,i),r=$h(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Dl)}Lh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ao.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ao.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&le("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};O1=function(t,e,n,r){n!==r&&(e.flags|=4)};function xs(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Mk(t,e,n){var r=e.pendingProps;switch(Bf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(e),null;case 1:return gt(e.type)&&$l(),Ke(e),null;case 3:return r=e.stateNode,Ji(),ce(mt),ce(et),Jf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ma(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zt!==null&&(yd(zt),zt=null))),ud(t,e),Ke(e),null;case 5:Xf(e);var i=Fr(Eo.current);if(n=e.type,t!==null&&e.stateNode!=null)A1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return Ke(e),null}if(t=Fr(sn.current),Ma(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Jt]=e,r[vo]=s,t=(e.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<$s.length;i++)le($s[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Vm(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":Bm(r,s),le("invalid",r)}Lh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&La(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&La(r.textContent,a,t),i=["children",""+a]):ao.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":Na(r),zm(r,s,!0);break;case"textarea":Na(r),Hm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Dl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=s0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Jt]=e,t[vo]=r,P1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Mh(n,r),n){case"dialog":le("cancel",t),le("close",t),i=r;break;case"iframe":case"object":case"embed":le("load",t),i=r;break;case"video":case"audio":for(i=0;i<$s.length;i++)le($s[i],t);i=r;break;case"source":le("error",t),i=r;break;case"img":case"image":case"link":le("error",t),le("load",t),i=r;break;case"details":le("toggle",t),i=r;break;case"input":Vm(t,r),i=Ah(t,r),le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),le("invalid",t);break;case"textarea":Bm(t,r),i=$h(t,r),le("invalid",t);break;default:i=r}Lh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?l0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&o0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&lo(t,l):typeof l=="number"&&lo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ao.hasOwnProperty(s)?l!=null&&s==="onScroll"&&le("scroll",t):l!=null&&Nf(t,s,l,o))}switch(n){case"input":Na(t),zm(t,r,!1);break;case"textarea":Na(t),Hm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?$i(t,!!r.multiple,s,!1):r.defaultValue!=null&&$i(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Dl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ke(e),null;case 6:if(t&&e.stateNode!=null)O1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=Fr(Eo.current),Fr(sn.current),Ma(e)){if(r=e.stateNode,n=e.memoizedProps,r[Jt]=e,(s=r.nodeValue!==n)&&(t=St,t!==null))switch(t.tag){case 3:La(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&La(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jt]=e,e.stateNode=r}return Ke(e),null;case 13:if(ce(fe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&_t!==null&&e.mode&1&&!(e.flags&128))Q0(),Yi(),e.flags|=98560,s=!1;else if(s=Ma(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[Jt]=e}else Yi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ke(e),s=!1}else zt!==null&&(yd(zt),zt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||fe.current&1?Ne===0&&(Ne=3):cp())),e.updateQueue!==null&&(e.flags|=4),Ke(e),null);case 4:return Ji(),ud(t,e),t===null&&go(e.stateNode.containerInfo),Ke(e),null;case 10:return Wf(e.type._context),Ke(e),null;case 17:return gt(e.type)&&$l(),Ke(e),null;case 19:if(ce(fe),s=e.memoizedState,s===null)return Ke(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)xs(s,!1);else{if(Ne!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vl(t),o!==null){for(e.flags|=128,xs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ae(fe,fe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ee()>es&&(e.flags|=128,r=!0,xs(s,!1),e.lanes=4194304)}else{if(!r)if(t=Vl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!de)return Ke(e),null}else 2*Ee()-s.renderingStartTime>es&&n!==1073741824&&(e.flags|=128,r=!0,xs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ee(),e.sibling=null,n=fe.current,ae(fe,r?n&1|2:n&1),e):(Ke(e),null);case 22:case 23:return up(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?wt&1073741824&&(Ke(e),e.subtreeFlags&6&&(e.flags|=8192)):Ke(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function Fk(t,e){switch(Bf(e),e.tag){case 1:return gt(e.type)&&$l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ji(),ce(mt),ce(et),Jf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xf(e),null;case 13:if(ce(fe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));Yi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ce(fe),null;case 4:return Ji(),null;case 10:return Wf(e.type._context),null;case 22:case 23:return up(),null;case 24:return null;default:return null}}var Ua=!1,Ye=!1,jk=typeof WeakSet=="function"?WeakSet:Set,$=null;function Ai(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(t,e,r)}else n.current=null}function cd(t,e,n){try{n()}catch(r){ge(t,e,r)}}var Dg=!1;function Uk(t,e){if(Wh=Pl,t=L0(),Vf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,f=t,c=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)c=f,f=p;for(;;){if(f===t)break t;if(c===n&&++u===i&&(a=o),c===s&&++h===r&&(l=o),(p=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gh={focusedElem:t,selectionRange:n},Pl=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,T=g.memoizedState,m=e.stateNode,d=m.getSnapshotBeforeUpdate(e.elementType===e.type?v:Ut(e.type,v),T);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(E){ge(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return g=Dg,Dg=!1,g}function Qs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&cd(e,n,s)}i=i.next}while(i!==r)}}function Du(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function hd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function D1(t){var e=t.alternate;e!==null&&(t.alternate=null,D1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jt],delete e[vo],delete e[Xh],delete e[Sk],delete e[Tk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $1(t){return t.tag===5||t.tag===3||t.tag===4}function $g(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Dl));else if(r!==4&&(t=t.child,t!==null))for(dd(t,e,n),t=t.sibling;t!==null;)dd(t,e,n),t=t.sibling}function fd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(fd(t,e,n),t=t.sibling;t!==null;)fd(t,e,n),t=t.sibling}var je=null,Vt=!1;function Vn(t,e,n){for(n=n.child;n!==null;)b1(t,e,n),n=n.sibling}function b1(t,e,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Iu,n)}catch{}switch(n.tag){case 5:Ye||Ai(n,e);case 6:var r=je,i=Vt;je=null,Vn(t,e,n),je=r,Vt=i,je!==null&&(Vt?(t=je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):je.removeChild(n.stateNode));break;case 18:je!==null&&(Vt?(t=je,n=n.stateNode,t.nodeType===8?Bc(t.parentNode,n):t.nodeType===1&&Bc(t,n),fo(t)):Bc(je,n.stateNode));break;case 4:r=je,i=Vt,je=n.stateNode.containerInfo,Vt=!0,Vn(t,e,n),je=r,Vt=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&cd(n,e,o),i=i.next}while(i!==r)}Vn(t,e,n);break;case 1:if(!Ye&&(Ai(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ge(n,e,a)}Vn(t,e,n);break;case 21:Vn(t,e,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,Vn(t,e,n),Ye=r):Vn(t,e,n);break;default:Vn(t,e,n)}}function bg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new jk),e.forEach(function(r){var i=Qk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:je=a.stateNode,Vt=!1;break e;case 3:je=a.stateNode.containerInfo,Vt=!0;break e;case 4:je=a.stateNode.containerInfo,Vt=!0;break e}a=a.return}if(je===null)throw Error(x(160));b1(s,o,i),je=null,Vt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ge(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)L1(e,t),e=e.sibling}function L1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ft(e,t),Qt(t),r&4){try{Qs(3,t,t.return),Du(3,t)}catch(v){ge(t,t.return,v)}try{Qs(5,t,t.return)}catch(v){ge(t,t.return,v)}}break;case 1:Ft(e,t),Qt(t),r&512&&n!==null&&Ai(n,n.return);break;case 5:if(Ft(e,t),Qt(t),r&512&&n!==null&&Ai(n,n.return),t.flags&32){var i=t.stateNode;try{lo(i,"")}catch(v){ge(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&r0(i,s),Mh(a,o);var u=Mh(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?l0(i,f):h==="dangerouslySetInnerHTML"?o0(i,f):h==="children"?lo(i,f):Nf(i,h,f,u)}switch(a){case"input":Oh(i,s);break;case"textarea":i0(i,s);break;case"select":var c=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?$i(i,!!s.multiple,p,!1):c!==!!s.multiple&&(s.defaultValue!=null?$i(i,!!s.multiple,s.defaultValue,!0):$i(i,!!s.multiple,s.multiple?[]:"",!1))}i[vo]=s}catch(v){ge(t,t.return,v)}}break;case 6:if(Ft(e,t),Qt(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ge(t,t.return,v)}}break;case 3:if(Ft(e,t),Qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fo(e.containerInfo)}catch(v){ge(t,t.return,v)}break;case 4:Ft(e,t),Qt(t);break;case 13:Ft(e,t),Qt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ap=Ee())),r&4&&bg(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Ye=(u=Ye)||h,Ft(e,t),Ye=u):Ft(e,t),Qt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for($=t,h=t.child;h!==null;){for(f=$=h;$!==null;){switch(c=$,p=c.child,c.tag){case 0:case 11:case 14:case 15:Qs(4,c,c.return);break;case 1:Ai(c,c.return);var g=c.stateNode;if(typeof g.componentWillUnmount=="function"){r=c,n=c.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){ge(r,n,v)}}break;case 5:Ai(c,c.return);break;case 22:if(c.memoizedState!==null){Mg(f);continue}}p!==null?(p.return=c,$=p):Mg(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=a0("display",o))}catch(v){ge(t,t.return,v)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){ge(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ft(e,t),Qt(t),r&4&&bg(t);break;case 21:break;default:Ft(e,t),Qt(t)}}function Qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($1(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(lo(i,""),r.flags&=-33);var s=$g(t);fd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=$g(t);dd(t,a,o);break;default:throw Error(x(161))}}catch(l){ge(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Vk(t,e,n){$=t,M1(t)}function M1(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ua;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ye;a=Ua;var u=Ye;if(Ua=o,(Ye=l)&&!u)for($=i;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?Fg(i):l!==null?(l.return=o,$=l):Fg(i);for(;s!==null;)$=s,M1(s),s=s.sibling;$=i,Ua=a,Ye=u}Lg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Lg(t)}}function Lg(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ye||Du(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}wg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&fo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}Ye||e.flags&512&&hd(e)}catch(c){ge(e,e.return,c)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Mg(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function Fg(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Du(4,e)}catch(l){ge(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ge(e,i,l)}}var s=e.return;try{hd(e)}catch(l){ge(e,s,l)}break;case 5:var o=e.return;try{hd(e)}catch(l){ge(e,o,l)}}}catch(l){ge(e,e.return,l)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var zk=Math.ceil,Hl=jn.ReactCurrentDispatcher,sp=jn.ReactCurrentOwner,bt=jn.ReactCurrentBatchConfig,ee=0,be=null,Te=null,ze=0,wt=0,Oi=Er(0),Ne=0,ko=null,Jr=0,$u=0,op=0,Ys=null,dt=null,ap=0,es=1/0,wn=null,ql=!1,pd=null,sr=null,Va=!1,Jn=null,Kl=0,Xs=0,md=null,dl=-1,fl=0;function ot(){return ee&6?Ee():dl!==-1?dl:dl=Ee()}function or(t){return t.mode&1?ee&2&&ze!==0?ze&-ze:Ik.transition!==null?(fl===0&&(fl=E0()),fl):(t=ie,t!==0||(t=window.event,t=t===void 0?16:x0(t.type)),t):1}function Ht(t,e,n,r){if(50<Xs)throw Xs=0,md=null,Error(x(185));Zo(t,n,r),(!(ee&2)||t!==be)&&(t===be&&(!(ee&2)&&($u|=n),Ne===4&&Wn(t,ze)),yt(t,r),n===1&&ee===0&&!(e.mode&1)&&(es=Ee()+500,Pu&&_r()))}function yt(t,e){var n=t.callbackNode;IT(t,e);var r=Rl(t,t===be?ze:0);if(r===0)n!==null&&Wm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Wm(n),e===1)t.tag===0?kk(jg.bind(null,t)):K0(jg.bind(null,t)),Ek(function(){!(ee&6)&&_r()}),n=null;else{switch(_0(r)){case 1:n=Df;break;case 4:n=v0;break;case 16:n=Nl;break;case 536870912:n=w0;break;default:n=Nl}n=q1(n,F1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function F1(t,e){if(dl=-1,fl=0,ee&6)throw Error(x(327));var n=t.callbackNode;if(ji()&&t.callbackNode!==n)return null;var r=Rl(t,t===be?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Wl(t,r);else{e=r;var i=ee;ee|=2;var s=U1();(be!==t||ze!==e)&&(wn=null,es=Ee()+500,Br(t,e));do try{qk();break}catch(a){j1(t,a)}while(1);Kf(),Hl.current=s,ee=i,Te!==null?e=0:(be=null,ze=0,e=Ne)}if(e!==0){if(e===2&&(i=zh(t),i!==0&&(r=i,e=gd(t,i))),e===1)throw n=ko,Br(t,0),Wn(t,r),yt(t,Ee()),n;if(e===6)Wn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Bk(i)&&(e=Wl(t,r),e===2&&(s=zh(t),s!==0&&(r=s,e=gd(t,s))),e===1))throw n=ko,Br(t,0),Wn(t,r),yt(t,Ee()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:Pr(t,dt,wn);break;case 3:if(Wn(t,r),(r&130023424)===r&&(e=ap+500-Ee(),10<e)){if(Rl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Yh(Pr.bind(null,t,dt,wn),e);break}Pr(t,dt,wn);break;case 4:if(Wn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Bt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*zk(r/1960))-r,10<r){t.timeoutHandle=Yh(Pr.bind(null,t,dt,wn),r);break}Pr(t,dt,wn);break;case 5:Pr(t,dt,wn);break;default:throw Error(x(329))}}}return yt(t,Ee()),t.callbackNode===n?F1.bind(null,t):null}function gd(t,e){var n=Ys;return t.current.memoizedState.isDehydrated&&(Br(t,e).flags|=256),t=Wl(t,e),t!==2&&(e=dt,dt=n,e!==null&&yd(e)),t}function yd(t){dt===null?dt=t:dt.push.apply(dt,t)}function Bk(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wn(t,e){for(e&=~op,e&=~$u,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bt(e),r=1<<n;t[n]=-1,e&=~r}}function jg(t){if(ee&6)throw Error(x(327));ji();var e=Rl(t,0);if(!(e&1))return yt(t,Ee()),null;var n=Wl(t,e);if(t.tag!==0&&n===2){var r=zh(t);r!==0&&(e=r,n=gd(t,r))}if(n===1)throw n=ko,Br(t,0),Wn(t,e),yt(t,Ee()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Pr(t,dt,wn),yt(t,Ee()),null}function lp(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(es=Ee()+500,Pu&&_r())}}function Zr(t){Jn!==null&&Jn.tag===0&&!(ee&6)&&ji();var e=ee;ee|=1;var n=bt.transition,r=ie;try{if(bt.transition=null,ie=1,t)return t()}finally{ie=r,bt.transition=n,ee=e,!(ee&6)&&_r()}}function up(){wt=Oi.current,ce(Oi)}function Br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wk(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(Bf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&$l();break;case 3:Ji(),ce(mt),ce(et),Jf();break;case 5:Xf(r);break;case 4:Ji();break;case 13:ce(fe);break;case 19:ce(fe);break;case 10:Wf(r.type._context);break;case 22:case 23:up()}n=n.return}if(be=t,Te=t=ar(t.current,null),ze=wt=e,Ne=0,ko=null,op=$u=Jr=0,dt=Ys=null,Mr!==null){for(e=0;e<Mr.length;e++)if(n=Mr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Mr=null}return t}function j1(t,e){do{var n=Te;try{if(Kf(),ul.current=Bl,zl){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zl=!1}if(Xr=0,Oe=Ie=pe=null,Gs=!1,_o=0,sp.current=null,n===null||n.return===null){Ne=1,ko=e,Te=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ze,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var c=h.alternate;c?(h.updateQueue=c.updateQueue,h.memoizedState=c.memoizedState,h.lanes=c.lanes):(h.updateQueue=null,h.memoizedState=null)}var p=Cg(o);if(p!==null){p.flags&=-257,xg(p,o,a,s,e),p.mode&1&&Ig(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){Ig(s,u,e),cp();break e}l=Error(x(426))}}else if(de&&a.mode&1){var T=Cg(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),xg(T,o,a,s,e),Hf(Zi(l,a));break e}}s=l=Zi(l,a),Ne!==4&&(Ne=2),Ys===null?Ys=[s]:Ys.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=S1(s,l,e);vg(s,m);break e;case 1:a=l;var d=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(sr===null||!sr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=T1(s,a,e);vg(s,E);break e}}s=s.return}while(s!==null)}z1(n)}catch(I){e=I,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(1)}function U1(){var t=Hl.current;return Hl.current=Bl,t===null?Bl:t}function cp(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),be===null||!(Jr&268435455)&&!($u&268435455)||Wn(be,ze)}function Wl(t,e){var n=ee;ee|=2;var r=U1();(be!==t||ze!==e)&&(wn=null,Br(t,e));do try{Hk();break}catch(i){j1(t,i)}while(1);if(Kf(),ee=n,Hl.current=r,Te!==null)throw Error(x(261));return be=null,ze=0,Ne}function Hk(){for(;Te!==null;)V1(Te)}function qk(){for(;Te!==null&&!gT();)V1(Te)}function V1(t){var e=H1(t.alternate,t,wt);t.memoizedProps=t.pendingProps,e===null?z1(t):Te=e,sp.current=null}function z1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Fk(n,e),n!==null){n.flags&=32767,Te=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ne=6,Te=null;return}}else if(n=Mk(n,e,wt),n!==null){Te=n;return}if(e=e.sibling,e!==null){Te=e;return}Te=e=t}while(e!==null);Ne===0&&(Ne=5)}function Pr(t,e,n){var r=ie,i=bt.transition;try{bt.transition=null,ie=1,Kk(t,e,n,r)}finally{bt.transition=i,ie=r}return null}function Kk(t,e,n,r){do ji();while(Jn!==null);if(ee&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(CT(t,s),t===be&&(Te=be=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Va||(Va=!0,q1(Nl,function(){return ji(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=bt.transition,bt.transition=null;var o=ie;ie=1;var a=ee;ee|=4,sp.current=null,Uk(t,n),L1(n,t),dk(Gh),Pl=!!Wh,Gh=Wh=null,t.current=n,Vk(n),yT(),ee=a,ie=o,bt.transition=s}else t.current=n;if(Va&&(Va=!1,Jn=t,Kl=i),s=t.pendingLanes,s===0&&(sr=null),ET(n.stateNode),yt(t,Ee()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ql)throw ql=!1,t=pd,pd=null,t;return Kl&1&&t.tag!==0&&ji(),s=t.pendingLanes,s&1?t===md?Xs++:(Xs=0,md=t):Xs=0,_r(),null}function ji(){if(Jn!==null){var t=_0(Kl),e=bt.transition,n=ie;try{if(bt.transition=null,ie=16>t?16:t,Jn===null)var r=!1;else{if(t=Jn,Jn=null,Kl=0,ee&6)throw Error(x(331));var i=ee;for(ee|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for($=u;$!==null;){var h=$;switch(h.tag){case 0:case 11:case 15:Qs(8,h,s)}var f=h.child;if(f!==null)f.return=h,$=f;else for(;$!==null;){h=$;var c=h.sibling,p=h.return;if(D1(h),h===u){$=null;break}if(c!==null){c.return=p,$=c;break}$=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var T=v.sibling;v.sibling=null,v=T}while(v!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Qs(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,$=m;break e}$=s.return}}var d=t.current;for($=d;$!==null;){o=$;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,$=y;else e:for(o=d;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Du(9,a)}}catch(I){ge(a,a.return,I)}if(a===o){$=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,$=E;break e}$=a.return}}if(ee=i,_r(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Iu,t)}catch{}r=!0}return r}finally{ie=n,bt.transition=e}}return!1}function Ug(t,e,n){e=Zi(n,e),e=S1(t,e,1),t=ir(t,e,1),e=ot(),t!==null&&(Zo(t,1,e),yt(t,e))}function ge(t,e,n){if(t.tag===3)Ug(t,t,n);else for(;e!==null;){if(e.tag===3){Ug(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(sr===null||!sr.has(r))){t=Zi(n,t),t=T1(e,t,1),e=ir(e,t,1),t=ot(),e!==null&&(Zo(e,1,t),yt(e,t));break}}e=e.return}}function Wk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,be===t&&(ze&n)===n&&(Ne===4||Ne===3&&(ze&130023424)===ze&&500>Ee()-ap?Br(t,0):op|=n),yt(t,e)}function B1(t,e){e===0&&(t.mode&1?(e=Aa,Aa<<=1,!(Aa&130023424)&&(Aa=4194304)):e=1);var n=ot();t=An(t,e),t!==null&&(Zo(t,e,n),yt(t,n))}function Gk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),B1(t,n)}function Qk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),B1(t,n)}var H1;H1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,Lk(t,e,n);pt=!!(t.flags&131072)}else pt=!1,de&&e.flags&1048576&&W0(e,Ml,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;hl(t,e),t=e.pendingProps;var i=Qi(e,et.current);Fi(e,n),i=ep(null,e,r,t,i,n);var s=tp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(s=!0,bl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Qf(e),i.updater=Au,e.stateNode=i,i._reactInternals=e,rd(e,r,t,n),e=od(null,e,r,!0,s,n)):(e.tag=0,de&&s&&zf(e),rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(hl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Xk(r),t=Ut(r,t),i){case 0:e=sd(null,e,r,t,n);break e;case 1:e=Pg(null,e,r,t,n);break e;case 11:e=Ng(null,e,r,t,n);break e;case 14:e=Rg(null,e,r,Ut(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),sd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Pg(t,e,r,i,n);case 3:e:{if(x1(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,X0(t,e),Ul(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Zi(Error(x(423)),e),e=Ag(t,e,r,n,i);break e}else if(r!==i){i=Zi(Error(x(424)),e),e=Ag(t,e,r,n,i);break e}else for(_t=rr(e.stateNode.containerInfo.firstChild),St=e,de=!0,zt=null,n=t1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yi(),r===i){e=On(t,e,n);break e}rt(t,e,r,n)}e=e.child}return e;case 5:return n1(e),t===null&&ed(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Qh(r,i)?o=null:s!==null&&Qh(r,s)&&(e.flags|=32),C1(t,e),rt(t,e,o,n),e.child;case 6:return t===null&&ed(e),null;case 13:return N1(t,e,n);case 4:return Yf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xi(e,null,r,n):rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),Ng(t,e,r,i,n);case 7:return rt(t,e,e.pendingProps,n),e.child;case 8:return rt(t,e,e.pendingProps.children,n),e.child;case 12:return rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ae(Fl,r._currentValue),r._currentValue=o,s!==null)if(qt(s.value,o)){if(s.children===i.children&&!mt.current){e=On(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=xn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),td(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),td(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Fi(e,n),i=Lt(i),r=r(i),e.flags|=1,rt(t,e,r,n),e.child;case 14:return r=e.type,i=Ut(r,e.pendingProps),i=Ut(r.type,i),Rg(t,e,r,i,n);case 15:return k1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Ut(r,i),hl(t,e),e.tag=1,gt(r)?(t=!0,bl(e)):t=!1,Fi(e,n),Z0(e,r,i),rd(e,r,i,n),od(null,e,r,!0,t,n);case 19:return R1(t,e,n);case 22:return I1(t,e,n)}throw Error(x(156,e.tag))};function q1(t,e){return y0(t,e)}function Yk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(t,e,n,r){return new Yk(t,e,n,r)}function hp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xk(t){if(typeof t=="function")return hp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Pf)return 11;if(t===Af)return 14}return 2}function ar(t,e){var n=t.alternate;return n===null?(n=$t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function pl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")hp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Si:return Hr(n.children,i,s,e);case Rf:o=8,i|=8;break;case xh:return t=$t(12,n,e,i|2),t.elementType=xh,t.lanes=s,t;case Nh:return t=$t(13,n,e,i),t.elementType=Nh,t.lanes=s,t;case Rh:return t=$t(19,n,e,i),t.elementType=Rh,t.lanes=s,t;case e0:return bu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jv:o=10;break e;case Zv:o=9;break e;case Pf:o=11;break e;case Af:o=14;break e;case Bn:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=$t(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Hr(t,e,n,r){return t=$t(7,t,r,e),t.lanes=n,t}function bu(t,e,n,r){return t=$t(22,t,r,e),t.elementType=e0,t.lanes=n,t.stateNode={isHidden:!1},t}function Xc(t,e,n){return t=$t(6,t,null,e),t.lanes=n,t}function Jc(t,e,n){return e=$t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Jk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Oc(0),this.expirationTimes=Oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function dp(t,e,n,r,i,s,o,a,l){return t=new Jk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=$t(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qf(s),t}function Zk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_i,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function K1(t){if(!t)return pr;t=t._reactInternals;e:{if(ui(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(gt(n))return q0(t,n,e)}return e}function W1(t,e,n,r,i,s,o,a,l){return t=dp(n,r,!0,t,i,s,o,a,l),t.context=K1(null),n=t.current,r=ot(),i=or(n),s=xn(r,i),s.callback=e??null,ir(n,s,i),t.current.lanes=i,Zo(t,i,r),yt(t,r),t}function Lu(t,e,n,r){var i=e.current,s=ot(),o=or(i);return n=K1(n),e.context===null?e.context=n:e.pendingContext=n,e=xn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ir(i,e,o),t!==null&&(Ht(t,i,o,s),ll(t,i,o)),o}function Gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function fp(t,e){Vg(t,e),(t=t.alternate)&&Vg(t,e)}function eI(){return null}var G1=typeof reportError=="function"?reportError:function(t){console.error(t)};function pp(t){this._internalRoot=t}Mu.prototype.render=pp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));Lu(t,e,null,null)};Mu.prototype.unmount=pp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(function(){Lu(null,t,null,null)}),e[Pn]=null}};function Mu(t){this._internalRoot=t}Mu.prototype.unstable_scheduleHydration=function(t){if(t){var e=k0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kn.length&&e!==0&&e<Kn[n].priority;n++);Kn.splice(n,0,t),n===0&&C0(t)}};function mp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zg(){}function tI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Gl(o);s.call(u)}}var o=W1(e,r,t,0,null,!1,!1,"",zg);return t._reactRootContainer=o,t[Pn]=o.current,go(t.nodeType===8?t.parentNode:t),Zr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Gl(l);a.call(u)}}var l=dp(t,0,!1,null,null,!1,!1,"",zg);return t._reactRootContainer=l,t[Pn]=l.current,go(t.nodeType===8?t.parentNode:t),Zr(function(){Lu(e,l,n,r)}),l}function ju(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Gl(o);a.call(l)}}Lu(e,o,t,i)}else o=tI(n,e,t,i,r);return Gl(o)}S0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ds(e.pendingLanes);n!==0&&($f(e,n|1),yt(e,Ee()),!(ee&6)&&(es=Ee()+500,_r()))}break;case 13:Zr(function(){var r=An(t,1);if(r!==null){var i=ot();Ht(r,t,1,i)}}),fp(t,1)}};bf=function(t){if(t.tag===13){var e=An(t,134217728);if(e!==null){var n=ot();Ht(e,t,134217728,n)}fp(t,134217728)}};T0=function(t){if(t.tag===13){var e=or(t),n=An(t,e);if(n!==null){var r=ot();Ht(n,t,e,r)}fp(t,e)}};k0=function(){return ie};I0=function(t,e){var n=ie;try{return ie=t,e()}finally{ie=n}};jh=function(t,e,n){switch(e){case"input":if(Oh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ru(r);if(!i)throw Error(x(90));n0(r),Oh(r,i)}}}break;case"textarea":i0(t,n);break;case"select":e=n.value,e!=null&&$i(t,!!n.multiple,e,!1)}};h0=lp;d0=Zr;var nI={usingClientEntryPoint:!1,Events:[ta,Ci,Ru,u0,c0,lp]},Ns={findFiberByHostInstance:Lr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},rI={bundleType:Ns.bundleType,version:Ns.version,rendererPackageName:Ns.rendererPackageName,rendererConfig:Ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=m0(t),t===null?null:t.stateNode},findFiberByHostInstance:Ns.findFiberByHostInstance||eI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!za.isDisabled&&za.supportsFiber)try{Iu=za.inject(rI),rn=za}catch{}}Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nI;Nt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mp(e))throw Error(x(200));return Zk(t,e,null,n)};Nt.createRoot=function(t,e){if(!mp(t))throw Error(x(299));var n=!1,r="",i=G1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=dp(t,1,!1,null,null,n,!1,r,i),t[Pn]=e.current,go(t.nodeType===8?t.parentNode:t),new pp(e)};Nt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=m0(e),t=t===null?null:t.stateNode,t};Nt.flushSync=function(t){return Zr(t)};Nt.hydrate=function(t,e,n){if(!Fu(e))throw Error(x(200));return ju(null,t,e,!0,n)};Nt.hydrateRoot=function(t,e,n){if(!mp(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=G1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=W1(e,null,t,1,n??null,i,!1,s,o),t[Pn]=e.current,go(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Mu(e)};Nt.render=function(t,e,n){if(!Fu(e))throw Error(x(200));return ju(null,t,e,!1,n)};Nt.unmountComponentAtNode=function(t){if(!Fu(t))throw Error(x(40));return t._reactRootContainer?(Zr(function(){ju(null,null,t,!1,function(){t._reactRootContainer=null,t[Pn]=null})}),!0):!1};Nt.unstable_batchedUpdates=lp;Nt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Fu(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return ju(t,e,n,!1,r)};Nt.version="18.2.0-next-9e3b772b8-20220608";function Q1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q1)}catch(t){console.error(t)}}Q1(),Wv.exports=Nt;var iI=Wv.exports,Bg=iI;Ih.createRoot=Bg.createRoot,Ih.hydrateRoot=Bg.hydrateRoot;/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Io(){return Io=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Io.apply(this,arguments)}var Zn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Zn||(Zn={}));const Hg="popstate";function sI(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=ci(i.location.hash.substr(1));return vd("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:Ql(s))}function r(i,s){Uu(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return aI(e,n,r,t)}function ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Uu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oI(){return Math.random().toString(36).substr(2,8)}function qg(t,e){return{usr:t.state,key:t.key,idx:e}}function vd(t,e,n,r){return n===void 0&&(n=null),Io({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ci(e):e,{state:n,key:e&&e.key||r||oI()})}function Ql(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ci(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function aI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Zn.Pop,l=null,u=h();u==null&&(u=0,o.replaceState(Io({},o.state,{idx:u}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=Zn.Pop;let T=h(),m=T==null?null:T-u;u=T,l&&l({action:a,location:v.location,delta:m})}function c(T,m){a=Zn.Push;let d=vd(v.location,T,m);n&&n(d,T),u=h()+1;let y=qg(d,u),E=v.createHref(d);try{o.pushState(y,"",E)}catch{i.location.assign(E)}s&&l&&l({action:a,location:v.location,delta:1})}function p(T,m){a=Zn.Replace;let d=vd(v.location,T,m);n&&n(d,T),u=h();let y=qg(d,u),E=v.createHref(d);o.replaceState(y,"",E),s&&l&&l({action:a,location:v.location,delta:0})}function g(T){let m=i.location.origin!=="null"?i.location.origin:i.location.href,d=typeof T=="string"?T:Ql(T);return ke(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let v={get action(){return a},get location(){return t(i,o)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Hg,f),l=T,()=>{i.removeEventListener(Hg,f),l=null}},createHref(T){return e(i,T)},createURL:g,encodeLocation(T){let m=g(T);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:c,replace:p,go(T){return o.go(T)}};return v}var Kg;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Kg||(Kg={}));function lI(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ci(e):e,i=gp(r.pathname||"/",n);if(i==null)return null;let s=Y1(t);uI(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=vI(s[a],_I(i));return o}function Y1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ke(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=lr([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Y1(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:gI(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of X1(s.path))i(s,o,l)}),e}function X1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=X1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function uI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:yI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const cI=/^:\w+$/,hI=3,dI=2,fI=1,pI=10,mI=-2,Wg=t=>t==="*";function gI(t,e){let n=t.split("/"),r=n.length;return n.some(Wg)&&(r+=mI),e&&(r+=dI),n.filter(i=>!Wg(i)).reduce((i,s)=>i+(cI.test(s)?hI:s===""?fI:pI),r)}function yI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function vI(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",h=wI({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!h)return null;Object.assign(r,h.params);let f=a.route;s.push({params:r,pathname:lr([i,h.pathname]),pathnameBase:II(lr([i,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(i=lr([i,h.pathnameBase]))}return s}function wI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=EI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,h,f)=>{if(h==="*"){let c=a[f]||"";o=s.slice(0,s.length-c.length).replace(/(.)\/+$/,"$1")}return u[h]=SI(a[f]||"",h),u},{}),pathname:s,pathnameBase:o,pattern:t}}function EI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Uu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function _I(t){try{return decodeURI(t)}catch(e){return Uu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function SI(t,e){try{return decodeURIComponent(t)}catch(n){return Uu(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function gp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function TI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ci(t):t;return{pathname:n?n.startsWith("/")?n:kI(n,e):e,search:CI(r),hash:xI(i)}}function kI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Zc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function J1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Z1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ci(t):(i=Io({},t),ke(!i.pathname||!i.pathname.includes("?"),Zc("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),Zc("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),Zc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let f=e.length-1;if(o.startsWith("..")){let c=o.split("/");for(;c[0]==="..";)c.shift(),f-=1;i.pathname=c.join("/")}a=f>=0?e[f]:"/"}let l=TI(i,a),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const lr=t=>t.join("/").replace(/\/\/+/g,"/"),II=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),CI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,xI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function NI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ew=["post","put","patch","delete"];new Set(ew);const RI=["get",...ew];new Set(RI);/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yl(){return Yl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yl.apply(this,arguments)}const yp=N.createContext(null),tw=N.createContext(null),hi=N.createContext(null),Vu=N.createContext(null),Sr=N.createContext({outlet:null,matches:[],isDataRoute:!1}),nw=N.createContext(null);function PI(t,e){let{relative:n}=e===void 0?{}:e;ra()||ke(!1);let{basename:r,navigator:i}=N.useContext(hi),{hash:s,pathname:o,search:a}=vp(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:lr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function ra(){return N.useContext(Vu)!=null}function ia(){return ra()||ke(!1),N.useContext(Vu).location}function rw(t){N.useContext(hi).static||N.useLayoutEffect(t)}function AI(){let{isDataRoute:t}=N.useContext(Sr);return t?qI():OI()}function OI(){ra()||ke(!1);let t=N.useContext(yp),{basename:e,navigator:n}=N.useContext(hi),{matches:r}=N.useContext(Sr),{pathname:i}=ia(),s=JSON.stringify(J1(r).map(l=>l.pathnameBase)),o=N.useRef(!1);return rw(()=>{o.current=!0}),N.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let h=Z1(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:lr([e,h.pathname])),(u.replace?n.replace:n.push)(h,u.state,u)},[e,n,s,i,t])}function DI(){let{matches:t}=N.useContext(Sr),e=t[t.length-1];return e?e.params:{}}function vp(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=N.useContext(Sr),{pathname:i}=ia(),s=JSON.stringify(J1(r).map(o=>o.pathnameBase));return N.useMemo(()=>Z1(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function $I(t,e){return bI(t,e)}function bI(t,e,n){ra()||ke(!1);let{navigator:r}=N.useContext(hi),{matches:i}=N.useContext(Sr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=ia(),u;if(e){var h;let v=typeof e=="string"?ci(e):e;a==="/"||(h=v.pathname)!=null&&h.startsWith(a)||ke(!1),u=v}else u=l;let f=u.pathname||"/",c=a==="/"?f:f.slice(a.length)||"/",p=lI(t,{pathname:c}),g=UI(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:lr([a,r.encodeLocation?r.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?a:lr([a,r.encodeLocation?r.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,n);return e&&g?N.createElement(Vu.Provider,{value:{location:Yl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Zn.Pop}},g):g}function LI(){let t=HI(),e=NI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return N.createElement(N.Fragment,null,N.createElement("h2",null,"Unexpected Application Error!"),N.createElement("h3",{style:{fontStyle:"italic"}},e),n?N.createElement("pre",{style:i},n):null,s)}const MI=N.createElement(LI,null);class FI extends N.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?N.createElement(Sr.Provider,{value:this.props.routeContext},N.createElement(nw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function jI(t){let{routeContext:e,match:n,children:r}=t,i=N.useContext(yp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),N.createElement(Sr.Provider,{value:e},r)}function UI(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ke(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let h=l.route.id?o==null?void 0:o[l.route.id]:null,f=null;n&&(f=l.route.errorElement||MI);let c=e.concat(s.slice(0,u+1)),p=()=>{let g;return h?g=f:l.route.Component?g=N.createElement(l.route.Component,null):l.route.element?g=l.route.element:g=a,N.createElement(jI,{match:l,routeContext:{outlet:a,matches:c,isDataRoute:n!=null},children:g})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?N.createElement(FI,{location:n.location,revalidation:n.revalidation,component:f,error:h,children:p(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):p()},null)}var wd;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(wd||(wd={}));var Co;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Co||(Co={}));function VI(t){let e=N.useContext(yp);return e||ke(!1),e}function zI(t){let e=N.useContext(tw);return e||ke(!1),e}function BI(t){let e=N.useContext(Sr);return e||ke(!1),e}function iw(t){let e=BI(),n=e.matches[e.matches.length-1];return n.route.id||ke(!1),n.route.id}function HI(){var t;let e=N.useContext(nw),n=zI(Co.UseRouteError),r=iw(Co.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function qI(){let{router:t}=VI(wd.UseNavigateStable),e=iw(Co.UseNavigateStable),n=N.useRef(!1);return rw(()=>{n.current=!0}),N.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Yl({fromRouteId:e},s)))},[t,e])}function Ar(t){ke(!1)}function KI(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Zn.Pop,navigator:s,static:o=!1}=t;ra()&&ke(!1);let a=e.replace(/^\/*/,"/"),l=N.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=ci(r));let{pathname:u="/",search:h="",hash:f="",state:c=null,key:p="default"}=r,g=N.useMemo(()=>{let v=gp(u,a);return v==null?null:{location:{pathname:v,search:h,hash:f,state:c,key:p},navigationType:i}},[a,u,h,f,c,p,i]);return g==null?null:N.createElement(hi.Provider,{value:l},N.createElement(Vu.Provider,{children:n,value:g}))}function WI(t){let{children:e,location:n}=t;return $I(Ed(e),n)}var Gg;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Gg||(Gg={}));new Promise(()=>{});function Ed(t,e){e===void 0&&(e=[]);let n=[];return N.Children.forEach(t,(r,i)=>{if(!N.isValidElement(r))return;let s=[...e,i];if(r.type===N.Fragment){n.push.apply(n,Ed(r.props.children,s));return}r.type!==Ar&&ke(!1),!r.props.index||!r.props.children||ke(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Ed(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xl(){return Xl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xl.apply(this,arguments)}function sw(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function GI(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function QI(t,e){return t.button===0&&(!e||e==="_self")&&!GI(t)}const YI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],XI=["aria-current","caseSensitive","className","end","style","to","children"];function JI(t){let{basename:e,children:n,window:r}=t,i=N.useRef();i.current==null&&(i.current=sI({window:r,v5Compat:!0}));let s=i.current,[o,a]=N.useState({action:s.action,location:s.location});return N.useLayoutEffect(()=>s.listen(a),[s]),N.createElement(KI,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const ZI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ow=N.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:h}=e,f=sw(e,YI),{basename:c}=N.useContext(hi),p,g=!1;if(typeof u=="string"&&eC.test(u)&&(p=u,ZI))try{let d=new URL(window.location.href),y=u.startsWith("//")?new URL(d.protocol+u):new URL(u),E=gp(y.pathname,c);y.origin===d.origin&&E!=null?u=E+y.search+y.hash:g=!0}catch{}let v=PI(u,{relative:i}),T=tC(u,{replace:o,state:a,target:l,preventScrollReset:h,relative:i});function m(d){r&&r(d),d.defaultPrevented||T(d)}return N.createElement("a",Xl({},f,{href:p||v,onClick:g||s?r:m,ref:n,target:l}))}),bs=N.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,h=sw(e,XI),f=vp(l,{relative:h.relative}),c=ia(),p=N.useContext(tw),{navigator:g}=N.useContext(hi),v=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,T=c.pathname,m=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;i||(T=T.toLowerCase(),m=m?m.toLowerCase():null,v=v.toLowerCase());let d=T===v||!o&&T.startsWith(v)&&T.charAt(v.length)==="/",y=m!=null&&(m===v||!o&&m.startsWith(v)&&m.charAt(v.length)==="/"),E=d?r:void 0,I;typeof s=="function"?I=s({isActive:d,isPending:y}):I=[s,d?"active":null,y?"pending":null].filter(Boolean).join(" ");let w=typeof a=="function"?a({isActive:d,isPending:y}):a;return N.createElement(ow,Xl({},h,{"aria-current":E,className:I,ref:n,style:w,to:l}),typeof u=="function"?u({isActive:d,isPending:y}):u)});var Qg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Qg||(Qg={}));var Yg;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Yg||(Yg={}));function tC(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=AI(),l=ia(),u=vp(t,{relative:o});return N.useCallback(h=>{if(QI(h,n)){h.preventDefault();let f=r!==void 0?r:Ql(l)===Ql(u);a(t,{replace:f,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const nC="_nav_p2i2c_1",rC="_cart_p2i2c_32",iC="_cartNum_p2i2c_38",sC="_cartImg_p2i2c_45",oC="_bar_p2i2c_52",aC="_search_p2i2c_60",lC="_userContainer_p2i2c_72",uC="_userInfo_p2i2c_77",cC="_userImg_p2i2c_83",Yt={nav:nC,cart:rC,cartNum:iC,cartImg:sC,bar:oC,search:aC,userContainer:lC,userInfo:uC,userImg:cC};const hC="_container_1v7ej_1",dC="_header_1v7ej_23",fC="_startShopping_1v7ej_69",eh={container:hC,header:dC,startShopping:fC};var _d={exports:{}},aw={exports:{}},pC="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",mC=pC,gC=mC;function lw(){}function uw(){}uw.resetWarningCache=lw;var yC=function(){function t(r,i,s,o,a,l){if(l!==gC){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:uw,resetWarningCache:lw};return n.PropTypes=n,n};aw.exports=yC();var fn=aw.exports,Wt={};(function(t){function e(d){try{return v.insertRule(d,v.cssRules.length)}catch{console.warn("react-reveal - animation failed")}}function n(d,y,E,I,w){var _=Math.log(I),k=Math.log(w),C=(k-_)/(E-y);return Math.exp(_+C*(d-y))}function r(d){if(!v)return"";var y="@keyframes "+(T+p)+"{"+d+"}",E=g[d];return E?""+T+E:(v.insertRule(y,v.cssRules.length),g[d]=p,""+T+p++)}function i(){f||(t.globalHide=f=!0,window.removeEventListener("scroll",i,!0),e("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",i,!0),window.document.removeEventListener("visibilitychange",i))}function s(d){var y=d.ssrFadeout;t.fadeOutEnabled=y}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=e,t.cascade=n,t.animation=r,t.hideAll=i,t.default=s;var o=t.namespace="react-reveal";t.defaults={duration:1e3,delay:0,count:1};var a=t.ssr=!0,l=t.observerMode=!1,u=t.raf=function(d){return window.setTimeout(d,66)},h=t.disableSsr=function(){return t.ssr=a=!1};t.fadeOutEnabled=!1,t.ssrFadeout=function(){var d=arguments.length>0&&arguments[0]!==void 0&&arguments[0];return t.fadeOutEnabled=d};var f=t.globalHide=!1;t.ie10=!1;var c=t.collapseend=void 0,p=1,g={},v=!1,T=o+"-"+Math.floor(1e15*Math.random())+"-";if(typeof window<"u"&&window.name!=="nodejs"&&window.document&&typeof navigator<"u"){t.observerMode=l="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=u=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||u,t.ssr=a=window.document.querySelectorAll("div[data-reactroot]").length>0,navigator.appVersion.indexOf("MSIE 10")!==-1&&(t.ie10=!0),a&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=a=!1),a&&window.setTimeout(h,1500),l||(t.collapseend=c=document.createEvent("Event"),c.initEvent("collapseend",!0,!0));var m=document.createElement("style");document.head.appendChild(m),m.sheet&&m.sheet.cssRules&&m.sheet.insertRule&&(v=m.sheet,window.addEventListener("scroll",i,!0),window.addEventListener("orientationchange",i,!0),window.document.addEventListener("visibilitychange",i))}})(Wt);var Sd={exports:{}},Td={exports:{}};(function(t,e){function n(E){return E&&E.__esModule?E:{default:E}}function r(E,I,w){return I in E?Object.defineProperty(E,I,{value:w,enumerable:!0,configurable:!0,writable:!0}):E[I]=w,E}function i(E,I){if(!(E instanceof I))throw new TypeError("Cannot call a class as a function")}function s(E,I){if(!E)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!I||typeof I!="object"&&typeof I!="function"?E:I}function o(E,I){if(typeof I!="function"&&I!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof I);E.prototype=Object.create(I&&I.prototype,{constructor:{value:E,enumerable:!1,writable:!0,configurable:!0}}),I&&(Object.setPrototypeOf?Object.setPrototypeOf(E,I):E.__proto__=I)}Object.defineProperty(e,"__esModule",{value:!0});var a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(E){return typeof E}:function(E){return E&&typeof Symbol=="function"&&E.constructor===Symbol&&E!==Symbol.prototype?"symbol":typeof E},l=function(){function E(I,w){var _=[],k=!0,C=!1,R=void 0;try{for(var L,j=I[Symbol.iterator]();!(k=(L=j.next()).done)&&(_.push(L.value),!w||_.length!==w);k=!0);}catch(M){C=!0,R=M}finally{try{!k&&j.return&&j.return()}finally{if(C)throw R}}return _}return function(I,w){if(Array.isArray(I))return I;if(Symbol.iterator in Object(I))return E(I,w);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),u=Object.assign||function(E){for(var I=1;I<arguments.length;I++){var w=arguments[I];for(var _ in w)Object.prototype.hasOwnProperty.call(w,_)&&(E[_]=w[_])}return E},h=function(){function E(I,w){for(var _=0;_<w.length;_++){var k=w[_];k.enumerable=k.enumerable||!1,k.configurable=!0,"value"in k&&(k.writable=!0),Object.defineProperty(I,k.key,k)}}return function(I,w,_){return w&&E(I.prototype,w),_&&E(I,_),I}}(),f=N,c=n(f),p=fn,g=Wt,v=(0,p.shape)({make:p.func,duration:p.number.isRequired,delay:p.number.isRequired,forever:p.bool,count:p.number.isRequired,style:p.object.isRequired,reverse:p.bool}),T={collapse:p.bool,collapseEl:p.element,cascade:p.bool,wait:p.number,force:p.bool,disabled:p.bool,appear:p.bool,enter:p.bool,exit:p.bool,fraction:p.number,refProp:p.string,innerRef:p.func,onReveal:p.func,unmountOnExit:p.bool,mountOnEnter:p.bool,inEffect:v.isRequired,outEffect:(0,p.oneOfType)([v,(0,p.oneOf)([!1])]).isRequired,ssrReveal:p.bool,collapseOnly:p.bool,ssrFadeout:p.bool},m={fraction:.2,refProp:"ref"},d={transitionGroup:p.object},y=function(E){function I(w,_){i(this,I);var k=s(this,(I.__proto__||Object.getPrototypeOf(I)).call(this,w,_));return k.isOn=w.when===void 0||!!w.when,k.state={collapse:w.collapse?I.getInitialCollapseStyle(w):void 0,style:{opacity:k.isOn&&!w.ssrReveal||!w.outEffect?void 0:0}},k.savedChild=!1,k.isShown=!1,g.observerMode?k.handleObserve=k.handleObserve.bind(k):(k.revealHandler=k.makeHandler(k.reveal),k.resizeHandler=k.makeHandler(k.resize)),k.saveRef=k.saveRef.bind(k),k}return o(I,E),h(I,[{key:"saveRef",value:function(w){this.childRef&&this.childRef(w),this.props.innerRef&&this.props.innerRef(w),this.el!==w&&(this.el=w&&"offsetHeight"in w?w:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?u({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!g.observerMode&&this.props.collapse&&window.document.dispatchEvent(g.collapseend)))}},{key:"animationEnd",value:function(w,_,k){var C=this,R=k.forever,L=k.count,j=k.delay,M=k.duration;if(!R){var ne=function(){C&&C.el&&(C.animationEndTimeout=void 0,w.call(C))};this.animationEndTimeout=window.setTimeout(ne,j+(M+(_?M:0)*L))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(w,_,k){var C=k.duration+(_.cascade?k.duration:0),R=this.isOn?this.getDimensionValue():0,L=void 0,j=void 0;if(_.collapseOnly)L=k.duration/3,j=k.delay;else{var M=C>>2,ne=M>>1;L=M,j=k.delay+(this.isOn?0:C-M-ne),w.style.animationDuration=C-M+(this.isOn?ne:-ne)+"ms",w.style.animationDelay=k.delay+(this.isOn?M-ne:0)+"ms"}return w.collapse={height:R,transition:"height "+L+"ms ease "+j+"ms",overflow:_.collapseOnly?"hidden":void 0},w}},{key:"animate",value:function(w){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var _=!this.isOn&&w.outEffect,k=w[_?"outEffect":"inEffect"],C="style"in k&&k.style.animationName||void 0,R=void 0;w.collapseOnly?R={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((w.outEffect||this.isOn)&&k.make&&(C=k.make),R={hasAppeared:!0,hasExited:!1,collapse:void 0,style:u({},k.style,{animationDuration:k.duration+"ms",animationDelay:k.delay+"ms",animationIterationCount:k.forever?"infinite":k.count,opacity:1,animationName:C}),className:k.className}),this.setState(w.collapse?this.collapse(R,w,k):R),_?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,w.cascade,k)):this.savedChild=!1,this.onReveal(w)}}},{key:"onReveal",value:function(w){w.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),w.wait?this.onRevealTimeout=window.setTimeout(w.onReveal,w.wait):w.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),g.ssr&&(0,g.disableSsr)()}},{key:"handleObserve",value:function(w,_){l(w,1)[0].intersectionRatio>0&&(_.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(w){var _=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(this.el&&g.observerMode){if(this.observer){if(!_)return;this.observer.disconnect()}else if(_)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:w.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(w){var _=this,k=arguments.length>1&&arguments[1]!==void 0&&arguments[1];g.globalHide||(0,g.hideAll)(),this&&this.el&&(w||(w=this.props),g.ssr&&(0,g.disableSsr)(),this.isOn&&this.isShown&&w.spy!==void 0?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return _.reveal(w)},200)):k||this.inViewport(w)||w.force?this.animate(w):g.observerMode?this.observe(w):this.listen())}},{key:"componentDidMount",value:function(){var w=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),this.props.when!==void 0&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var _=this.context.transitionGroup,k=_&&!_.isMounting?!("enter"in this.props&&this.props.enter===!1):this.props.appear;return this.isOn&&((this.props.when!==void 0||this.props.spy!==void 0)&&!k||g.ssr&&!g.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&I.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):g.ssr&&(g.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&I.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return w.reveal(w.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(w){var _=this,k=void 0;k=typeof w=="string"?w.split("").map(function(oe,Pt){return c.default.createElement("span",{key:Pt,style:{display:"inline-block",whiteSpace:"pre"}},oe)}):c.default.Children.toArray(w);var C=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],R=C.duration,L=C.reverse,j=k.length,M=2*R;this.props.collapse&&(M=parseInt(this.state.style.animationDuration,10),R=M/2);var ne=L?j:0;return k=k.map(function(oe){return(oe===void 0?"undefined":a(oe))==="object"&&oe?c.default.cloneElement(oe,{style:u({},oe.props.style,_.state.style,{animationDuration:Math.round((0,g.cascade)(L?ne--:ne++,0,j,R,M))+"ms"})}):oe})}},{key:"componentWillReceiveProps",value:function(w){if(w.when!==void 0&&(this.isOn=!!w.when),w.fraction!==this.props.fraction&&this.observe(w,!0),!this.isOn&&w.onExited&&"exit"in w&&w.exit===!1)return void w.onExited();w.disabled||(w.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:I.getInitialCollapseStyle(w)}),this.isShown=!1),w.when===this.props.when&&w.spy===this.props.spy||this.reveal(w),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if(a(this.props.children)==="object"){var w=c.default.Children.only(this.props.children);return"type"in w&&typeof w.type=="string"||this.props.refProp!=="ref"?w:c.default.createElement("div",null,w)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var w=void 0;w=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var _=this.getChild();typeof _.ref=="function"&&(this.childRef=_.ref);var k=!1,C=_.props,R=C.style,L=C.className,j=C.children,M=this.props.disabled?L:(this.props.outEffect?g.namespace:"")+(this.state.className?" "+this.state.className:"")+(L?" "+L:"")||void 0,ne=void 0;typeof this.state.style.animationName=="function"&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&j&&this.state.style.animationName?(k=this.cascade(j),ne=u({},R,{opacity:1})):ne=this.props.disabled?R:u({},R,this.state.style);var oe=u({},this.props.props,r({className:M,style:ne},this.props.refProp,this.saveRef)),Pt=c.default.cloneElement(_,oe,w?k||j:void 0);return this.props.collapse!==void 0?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:u({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:Pt}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:Pt}):Pt}},{key:"makeHandler",value:function(w){var _=this,k=function(){w.call(_,_.props),_.ticking=!1};return function(){_.ticking||((0,g.raf)(k),_.ticking=!0)}}},{key:"inViewport",value:function(w){if(!this.el||window.document.hidden)return!1;var _=this.el.offsetHeight,k=window.pageYOffset-I.getTop(this.el),C=Math.min(_,window.innerHeight)*(g.globalHide?w.fraction:0);return k>C-window.innerHeight&&k<_-C}},{key:"resize",value:function(w){this&&this.el&&this.isOn&&this.inViewport(w)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!w.outEffect?1:0}}),this.onReveal(w))}},{key:"listen",value:function(){g.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!g.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(w){return{height:0,visibility:w.when?void 0:"hidden"}}},{key:"getTop",value:function(w){for(;w.offsetTop===void 0;)w=w.parentNode;for(var _=w.offsetTop;w.offsetParent;_+=w.offsetTop)w=w.offsetParent;return _}}]),I}(c.default.Component);y.propTypes=T,y.defaultProps=m,y.contextTypes=d,y.displayName="RevealBase",e.default=y,t.exports=e.default})(Td,Td.exports);var vC=Td.exports;(function(t,e){function n(u){return u&&u.__esModule?u:{default:u}}function r(u,h,f,c){return"in"in u&&(u.when=u.in),o.default.Children.count(c)<2?o.default.createElement(l.default,i({},u,{inEffect:h,outEffect:f,children:c})):(c=o.default.Children.map(c,function(p){return o.default.createElement(l.default,i({},u,{inEffect:h,outEffect:f,children:p}))}),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,c):o.default.createElement("span",null,c))}Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(u){for(var h=1;h<arguments.length;h++){var f=arguments[h];for(var c in f)Object.prototype.hasOwnProperty.call(f,c)&&(u[c]=f[c])}return u};e.default=r;var s=N,o=n(s),a=vC,l=n(a);t.exports=e.default})(Sd,Sd.exports);var Un=Sd.exports;(function(t,e){function n(c){return c&&c.__esModule?c:{default:c}}function r(c,p){var g={};for(var v in c)p.indexOf(v)>=0||Object.prototype.hasOwnProperty.call(c,v)&&(g[v]=c[v]);return g}function i(c,p){var g=p.distance,v=p.left,T=p.right,m=p.up,d=p.down,y=p.top,E=p.bottom,I=p.big,w=p.mirror,_=p.opposite,k=(g?g.toString():0)+((v?1:0)|(T?2:0)|(y||d?4:0)|(E||m?8:0)|(w?16:0)|(_?32:0)|(c?64:0)|(I?128:0));if(f.hasOwnProperty(k))return f[k];var C=v||T||m||d||y||E,R=void 0,L=void 0;if(C){if(!w!=!(c&&_)){var j=[T,v,E,y,d,m];v=j[0],T=j[1],y=j[2],E=j[3],m=j[4],d=j[5]}var M=g||(I?"2000px":"100%");R=v?"-"+M:T?M:"0",L=d||y?"-"+M:m||E?M:"0"}return f[k]=(0,a.animation)((c?"to":"from")+" {opacity: 0;"+(C?" transform: translate3d("+R+", "+L+", 0);":"")+`}
     `+(c?"from":"to")+" {opacity: 1;transform: none;} "),f[k]}function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:a.defaults,p=arguments.length>1&&arguments[1]!==void 0&&arguments[1],g=c.children,v=(c.out,c.forever),T=c.timeout,m=c.duration,d=m===void 0?a.defaults.duration:m,y=c.delay,E=y===void 0?a.defaults.delay:y,I=c.count,w=I===void 0?a.defaults.count:I,_=r(c,["children","out","forever","timeout","duration","delay","count"]),k={make:i,duration:T===void 0?d:T,delay:E,forever:v,count:w,style:{animationFillMode:"both"},reverse:_.left};return p?(0,u.default)(_,k,k,g):k}Object.defineProperty(e,"__esModule",{value:!0});var o=fn,a=Wt,l=Un,u=n(l),h={out:o.bool,left:o.bool,right:o.bool,top:o.bool,bottom:o.bool,big:o.bool,mirror:o.bool,opposite:o.bool,duration:o.number,timeout:o.number,distance:o.string,delay:o.number,count:o.number,forever:o.bool},f={};s.propTypes=h,e.default=s,t.exports=e.default})(_d,_d.exports);var wp=_d.exports;const Xe=Xo(wp),wC=()=>S.jsx("div",{className:eh.container,children:S.jsxs("div",{className:eh.header,children:[S.jsx("h2",{children:S.jsx(Xe,{right:!0,big:!0,cascade:!0,children:"Welcome to online shop"})}),S.jsx("h2",{children:S.jsx(Xe,{right:!0,big:!0,cascade:!0})}),S.jsx(Xe,{bottom:!0,cascade:!0,children:S.jsx("p",{children:"Discover a wide range of products for every need"})}),S.jsx(bs,{to:"/shop",children:S.jsx("button",{type:"button",className:eh.startShopping,children:"Shop"})})]})}),EC="_container_c9pce_1",_C="_header_c9pce_19",SC="_categories_c9pce_31",TC="_category_c9pce_45",kC="_imgHolder_c9pce_59",IC="_name_c9pce_83",CC="_img_c9pce_59",xr={container:EC,header:_C,categories:SC,category:TC,imgHolder:kC,name:IC,img:CC};var kd={exports:{}};(function(t,e){function n(c){return c&&c.__esModule?c:{default:c}}function r(c,p){var g={};for(var v in c)p.indexOf(v)>=0||Object.prototype.hasOwnProperty.call(c,v)&&(g[v]=c[v]);return g}function i(c,p){var g=p.left,v=p.right,T=p.up,m=p.down,d=p.top,y=p.bottom,E=p.mirror,I=p.opposite,w=(g?1:0)|(v?2:0)|(d||m?4:0)|(y||T?8:0)|(E?16:0)|(I?32:0)|(c?64:0);if(f.hasOwnProperty(w))return f[w];if(!E!=!(c&&I)){var _=[v,g,y,d,m,T];g=_[0],v=_[1],d=_[2],y=_[3],T=_[4],m=_[5]}var k=g||v,C=d||y||T||m,R=k||C,L=void 0,j=void 0,M=void 0,ne=void 0,oe=void 0,Pt=void 0,pi=void 0,D=void 0,z=void 0,q=void 0,he=void 0,we=void 0,Ir=void 0,Gt=void 0;return c?(ne=k?(v?"-":"")+"20px":0,oe=C?(T||y?"":"-")+"10px":"0",Pt=(m||d?"":"-")+"20px",Ir=k?(g?"-":"")+"2000px":"0",Gt=C?(m||d?"-":"")+"2000px":"0"):(j=k?(g?"-":"")+"3000px":"0",M=C?(m||d?"-":"")+"3000px":"0",pi=k?(v?"-":"")+"25px":"0",D=C?(T||y?"-":"")+"25px":"0",z=k?(g?"-":"")+"10px":"0",q=C?(m||d?"-":"")+"10px":"0",he=k?(v?"-":"")+"5px":"0",we=C?(T||y?"-":"")+"5px":"0"),L=R?c?`
        20% {
          transform: translate3d(`+ne+", "+oe+`, 0);
          }
        `+(C?`40%, 45% {
            opacity: 1;
            transform: translate3d(0, `+Pt+`, 0);
          }`:"")+`
          to {
            opacity: 0;
            transform: translate3d(`+Ir+", "+Gt+`, 0);
        }
      `:`from, 60%, 75%, 90%, to {
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      }
      from {
        opacity: 0;
        transform: translate3d(`+j+", "+M+`, 0);
      }
      60% {
        opacity: 1;
        transform: translate3d(`+pi+", "+D+`, 0);
      }
      75% {
        transform: translate3d(`+z+", "+q+`, 0);
      }
      90% {
        transform: translate3d(`+he+", "+we+`, 0);
      }
      to {
        transform: none;
      }`:c?`20% {
          transform: scale3d(.9, .9, .9);
        }
        50%, 55% {
          opacity: 1;
          transform: scale3d(1.1, 1.1, 1.1);
        }
        to {
          opacity: 0;
          transform: scale3d(.3, .3, .3);
      }`:`from, 20%, 40%, 60%, 80%, to {
        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      }
      0% {
        opacity: 0;
        transform: scale3d(.3, .3, .3);
      }
      20% {
        transform: scale3d(1.1, 1.1, 1.1);
      }
      40% {
        transform: scale3d(.9, .9, .9);
      }
      60% {
        opacity: 1;
        transform: scale3d(1.03, 1.03, 1.03);
      }
      80% {
        transform: scale3d(.97, .97, .97);
      }
      to {
        opacity: 1;
        transform: scale3d(1, 1, 1);
      }`,f[w]=(0,u.animation)(L),f[w]}function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u.defaults,p=c.children,g=(c.out,c.forever),v=c.timeout,T=c.duration,m=T===void 0?u.defaults.duration:T,d=c.delay,y=d===void 0?u.defaults.delay:d,E=c.count,I=E===void 0?u.defaults.count:E,w=r(c,["children","out","forever","timeout","duration","delay","count"]),_={make:i,duration:v===void 0?m:v,delay:y,forever:g,count:I,style:{animationFillMode:"both"},reverse:w.left};return(0,l.default)(w,_,_,p)}Object.defineProperty(e,"__esModule",{value:!0});var o=fn,a=Un,l=n(a),u=Wt,h={out:o.bool,left:o.bool,right:o.bool,top:o.bool,bottom:o.bool,mirror:o.bool,opposite:o.bool,duration:o.number,timeout:o.number,delay:o.number,count:o.number,forever:o.bool},f={};s.propTypes=h,e.default=s,t.exports=e.default})(kd,kd.exports);var cw=kd.exports;const Id=Xo(cw),xC=t=>{const[e,n]=N.useState([]);return t.prop.productList.forEach(r=>{!e.includes(r.category)&&n([...e,r.category])}),S.jsxs("div",{className:xr.container,children:[S.jsx("h1",{className:xr.header,children:S.jsx(Xe,{left:!0,cascade:!0,children:"SHOP"})}),S.jsx("div",{className:xr.categories,children:e.map(r=>S.jsx(ow,{to:"/shop/"+r,children:S.jsx("div",{className:xr.category,children:S.jsx("div",{className:xr.imgHolder,children:S.jsxs(Id,{top:!0,cascade:!0,children:[S.jsx("img",{className:xr.img,src:"./assets/img/category/"+r+".jpg",alt:r}),S.jsx("div",{className:xr.name,children:r})]})})})},"cat"+e.indexOf(r)))})]})},NC="_container_1bzf7_1",RC="_header_1bzf7_21",PC="_form_1bzf7_33",AC="_group_1bzf7_49",OC="_icon_1bzf7_77",ut={container:NC,header:RC,form:PC,group:AC,icon:OC};var Cd={exports:{}};(function(t,e){function n(c){return c&&c.__esModule?c:{default:c}}function r(c,p){var g={};for(var v in c)p.indexOf(v)>=0||Object.prototype.hasOwnProperty.call(c,v)&&(g[v]=c[v]);return g}function i(c,p){var g=p.left,v=p.right,T=p.top,m=p.bottom,d=p.x,y=p.y,E=p.mirror,I=p.opposite,w=(g?1:0)|(v||y?2:0)|(T||d?4:0)|(m?8:0)|(E?16:0)|(I?32:0)|(c?64:0);if(f.hasOwnProperty(w))return f[w];if(!E!=!(c&&I)){var _=[v,g,m,T,y,d];g=_[0],v=_[1],T=_[2],m=_[3],d=_[4],y=_[5]}var k=void 0;if(d||y||g||v||T||m){var C=d||T||m?(m?"-":"")+"1":"0",R=y||v||g?(g?"-":"")+"1":"0";k=c?`from {
          transform: perspective(400px);
        }
        30% {
          transform: perspective(400px) rotate3d(`+C+", "+R+`, 0, -15deg);
          opacity: 1;
        }
        to {
          transform: perspective(400px) rotate3d(`+C+", "+R+`, 0, 90deg);
          opacity: 0;
        }`:`from {
          transform: perspective(400px) rotate3d(`+C+", "+R+`, 0, 90deg);
          animation-timing-function: ease-in;
          opacity: 0;
        }
        40% {
          transform: perspective(400px) rotate3d(`+C+", "+R+`, 0, -20deg);
          animation-timing-function: ease-in;
        }
        60% {
          transform: perspective(400px) rotate3d(`+C+", "+R+`, 0, 10deg);
          opacity: 1;
        }
        80% {
          transform: perspective(400px) rotate3d(`+C+", "+R+`, 0, -5deg);
        }
        to {
          transform: perspective(400px);
        }`}else k=`from {
          transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
          animation-timing-function: ease-out;
          opacity: `+(c?"1":"0")+`;
        }
        40% {
          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
          animation-timing-function: ease-out;
        }
        50% {
          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
          animation-timing-function: ease-in;
        }
        to {
          transform: perspective(400px);
          animation-timing-function: ease-in;
          opacity: `+(c?"0":"1")+`;
        }`;return f[w]=(0,u.animation)(k),f[w]}function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u.defaults,p=c.children,g=(c.out,c.forever),v=c.timeout,T=c.duration,m=T===void 0?u.defaults.duration:T,d=c.delay,y=d===void 0?u.defaults.delay:d,E=c.count,I=E===void 0?u.defaults.count:E,w=r(c,["children","out","forever","timeout","duration","delay","count"]),_={make:i,duration:v===void 0?m:v,delay:y,forever:g,count:I,style:{animationFillMode:"both",backfaceVisibility:"visible"}};return(0,l.default)(w,_,_,p)}Object.defineProperty(e,"__esModule",{value:!0});var o=fn,a=Un,l=n(a),u=Wt,h={out:o.bool,left:o.bool,right:o.bool,top:o.bool,bottom:o.bool,mirror:o.bool,opposite:o.bool,duration:o.number,timeout:o.number,delay:o.number,count:o.number,forever:o.bool},f={};s.propTypes=h,e.default=s,t.exports=e.default})(Cd,Cd.exports);var hw=Cd.exports;const DC=Xo(hw),$C=()=>S.jsxs("div",{className:ut.container,children:[S.jsx("h1",{className:ut.header,children:S.jsx(Xe,{left:!0,cascade:!0,children:"CONTACT"})}),S.jsxs("form",{className:ut.form,children:[S.jsx("div",{className:ut.group,children:S.jsxs(Xe,{right:!0,cascade:!0,children:[S.jsx("label",{htmlFor:"name",children:"Name:"}),S.jsx("input",{type:"text",id:"name",name:"name",placeholder:"Enter your name",required:!0})]})}),S.jsx("div",{className:ut.group,children:S.jsxs(Xe,{left:!0,cascade:!0,children:[S.jsx("label",{htmlFor:"email",children:"Email:"}),S.jsx("input",{type:"email",id:"email",name:"email",placeholder:"Enter your email",required:!0})]})}),S.jsx("div",{className:ut.group,children:S.jsxs(Xe,{bottom:!0,cascade:!0,children:[S.jsx("label",{htmlFor:"subject",children:"Subject:"}),S.jsx("input",{type:"text",id:"subject",name:"subject",placeholder:"Enter the subject",required:!0})]})}),S.jsxs("div",{className:ut.group,children:[S.jsx("label",{htmlFor:"message",children:"Message:"}),S.jsx("textarea",{id:"message",name:"message",placeholder:"Enter your message",required:!0})]}),S.jsx("button",{type:"submit",children:"Submit"})]}),S.jsx(DC,{bottom:!0,cascade:!0,children:S.jsxs("div",{className:ut.icons,children:[S.jsx("a",{href:"",children:S.jsx("img",{className:ut.icon,src:"./assets/img/icons/facebook.png",alt:"facebook"})}),S.jsx("a",{href:"",children:S.jsx("img",{className:ut.icon,src:"./assets/img/icons/instagram.png",alt:"instagram"})}),S.jsx("a",{href:"",children:S.jsx("img",{className:ut.icon,src:"./assets/img/icons/tik-tok.png",alt:"tik-tok"})}),S.jsx("a",{href:"",children:S.jsx("img",{className:ut.icon,src:"./assets/img/icons/twitter.png",alt:"twitter"})}),S.jsx("a",{href:"",children:S.jsx("img",{className:ut.icon,src:"./assets/img/icons/whatsapp.png",alt:"whatsapp"})}),S.jsx("a",{href:"",children:S.jsx("img",{className:ut.icon,src:"./assets/img/icons/youtube.png",alt:"youtube"})})]})})]}),bC="_container_xpo8p_1",LC="_header_xpo8p_19",MC="_products_xpo8p_37",Ba={container:bC,header:LC,products:MC},FC="_container_1de3v_1",jC="_imgHolder_1de3v_23",UC="_description_1de3v_35",VC="_header_1de3v_63",zC="_img_1de3v_23",BC="_icon_1de3v_93",HC="_right_1de3v_119",gn={container:FC,imgHolder:jC,description:UC,header:VC,img:zC,icon:BC,right:HC},dw="/odin-shopping-cart/assets/cart-variant-f7392a95.svg",qC="/odin-shopping-cart/assets/credit-card-outline-16d8a4fc.svg",Xg=t=>{const e=()=>{t.addToCart(t.prop)};return S.jsxs("div",{className:gn.container,children:[S.jsx(Xe,{children:S.jsx("div",{className:gn.imgHolder,children:S.jsx("img",{className:gn.img,src:t.prop.url,alt:t.prop.title})})}),S.jsx(Xe,{top:!0,children:S.jsxs("div",{className:gn.description,children:[S.jsxs("div",{className:gn.left,children:[S.jsx("h4",{className:gn.header,children:S.jsx(Xe,{left:!0,cascade:!0,children:t.prop.title})}),S.jsx(Xe,{right:!0,children:S.jsx("p",{children:t.prop.description})}),S.jsx(Xe,{bottom:!0,children:S.jsxs("p",{children:["Price: ",t.prop.price,"$"]})})]}),S.jsxs("div",{className:gn.right,children:[S.jsx(Id,{bottom:!0,children:S.jsx("div",{children:S.jsx("img",{className:gn.icon,src:dw,alt:"cart",onClick:e})})}),S.jsx(Id,{right:!0,children:S.jsx("div",{children:S.jsx("img",{className:gn.icon,src:qC,alt:"card"})})})]})]})})]})},Jg=t=>{const{category:e}=DI(),n=r=>{t.addToCart(r)};return S.jsxs("div",{className:Ba.container,children:[t.prop.searchInput.length===0?S.jsx("h1",{className:Ba.header,children:S.jsx(Xe,{right:!0,cascade:!0,children:e})}):S.jsx("h1",{className:Ba.header,children:S.jsx(Xe,{right:!0,cascade:!0,children:"Search results"})}),S.jsx("div",{className:Ba.products,children:t.prop.searchInput.length===0?t.prop.productList.filter(r=>r.category===e).map(r=>S.jsx(Xg,{prop:r,addToCart:n},"product"+r.id)):t.prop.productList.filter(r=>r.title.toLowerCase().match(t.prop.searchInput.toLowerCase())).map(r=>S.jsx(Xg,{prop:r,addToCart:n},"product"+r.id))})]})},KC="_container_7r3z9_1",WC={container:KC},GC=()=>S.jsxs("div",{className:WC.container,children:[S.jsx("h1",{children:S.jsx("p",{children:S.jsx(Xe,{right:!0,cascade:!0,children:"404"})})}),S.jsx("h3",{children:S.jsx("p",{children:"Page not found."})})]}),QC="_container_1pkr5_1",YC="_header_1pkr5_21",XC="_products_1pkr5_33",JC="_item_1pkr5_47",ZC="_left_1pkr5_65",ex="_img_1pkr5_89",tx="_description_1pkr5_107",nx="_buttons_1pkr5_123",rx="_buttonsBottom_1pkr5_139",jt={container:QC,header:YC,products:XC,item:JC,left:ZC,img:ex,description:tx,buttons:nx,buttonsBottom:rx},ix="_form_1rc5a_1",sx="_group_1rc5a_27",Nr={form:ix,group:sx},ox=t=>{const[e,n]=N.useState(t.prop.title),[r,i]=N.useState(t.prop.description),[s,o]=N.useState(t.prop.category),[a,l]=N.useState(t.prop.price),[u,h]=N.useState(t.prop.url),f=d=>{d.preventDefault(),n(d.target.value)},c=d=>{d.preventDefault(),i(d.target.value)},p=d=>{d.preventDefault(),o(d.target.value)},g=d=>{d.preventDefault(),l(d.target.value)},v=d=>{d.preventDefault(),h(d.target.value)},T=d=>{d.preventDefault();const y={id:t.prop.id,title:e,description:r,category:s,price:a,url:u};t.saveForm(y)},m=()=>{t.closeForm()};return S.jsxs("form",{className:Nr.form,onSubmit:T,children:[S.jsxs("div",{className:Nr.group,children:[S.jsx("label",{htmlFor:"id",children:"ID:"}),S.jsx("input",{type:"text",id:"id",name:t.prop.id,placeholder:t.prop.id,readOnly:!0})]}),S.jsxs("div",{className:Nr.group,children:[S.jsx("label",{htmlFor:"title",children:"Title:"}),S.jsx("input",{type:"text",id:"title",name:"title",value:e,onChange:f,required:!0})]}),S.jsxs("div",{className:Nr.group,children:[S.jsx("label",{htmlFor:"description",children:"Description:"}),S.jsx("input",{type:"text",id:"description",name:"description",value:r,onChange:c,required:!0})]}),S.jsxs("div",{className:Nr.group,children:[S.jsx("label",{htmlFor:"category",children:"Category:"}),S.jsx("input",{type:"text",id:"category",name:"category",value:s,onChange:p,required:!0})]}),S.jsxs("div",{className:Nr.group,children:[S.jsx("label",{htmlFor:"price",children:"Price:"}),S.jsx("input",{type:"number",id:"price",name:"price",min:0,step:.01,value:a,onChange:g,required:!0})]}),S.jsxs("div",{className:Nr.group,children:[S.jsx("label",{htmlFor:"url",children:"Image URL:"}),S.jsx("input",{type:"text",id:"url",name:"url",value:u,onChange:v,required:!0})]}),S.jsxs("div",{children:[S.jsx("button",{type:"submit",children:"Save"}),S.jsx("button",{type:"button",onClick:m,children:"Close"})]})]})};var Ep={},xd={exports:{}};(function(t,e){function n(g){return g&&g.__esModule?g:{default:g}}function r(g,v){var T={};for(var m in g)v.indexOf(m)>=0||Object.prototype.hasOwnProperty.call(g,m)&&(T[m]=g[m]);return T}function i(g){function v(oe){return oe?L?{duration:w,delay:_,count:k,forever:C,className:L,style:{}}:M:R?{duration:m===void 0?d:m,delay:y,count:E,forever:I,className:R,style:{}}:j}var T=g.children,m=g.timeout,d=g.duration,y=g.delay,E=g.count,I=g.forever,w=g.durationOut,_=g.delayOut,k=g.countOut,C=g.foreverOut,R=g.effect,L=g.effectOut,j=g.inEffect,M=g.outEffect,ne=r(g,["children","timeout","duration","delay","count","forever","durationOut","delayOut","countOut","foreverOut","effect","effectOut","inEffect","outEffect"]);return(0,u.default)(ne,v(!1),v(!0),T)}Object.defineProperty(e,"__esModule",{value:!0});var s=Object.assign||function(g){for(var v=1;v<arguments.length;v++){var T=arguments[v];for(var m in T)Object.prototype.hasOwnProperty.call(T,m)&&(g[m]=T[m])}return g},o=fn,a=Wt,l=Un,u=n(l),h=wp,f=n(h),c={in:o.object,out:(0,o.oneOfType)([o.object,(0,o.oneOf)([!1])]),effect:o.string,effectOut:o.string,duration:o.number,timeout:o.number,delay:o.number,count:o.number,forever:o.bool,durationOut:o.number,delayOut:o.number,countOut:o.number,foreverOut:o.bool},p=s({},a.defaults,{durationOut:a.defaults.duration,delayOut:a.defaults.delay,countOut:a.defaults.count,foreverOut:a.defaults.forever,inEffect:(0,f.default)(a.defaults),outEffect:(0,f.default)(s({out:!0},a.defaults))});i.propTypes=c,i.defaultProps=p,e.default=i,t.exports=e.default})(xd,xd.exports);var ax=xd.exports,Nd={exports:{}};(function(t,e){function n(c){return c&&c.__esModule?c:{default:c}}function r(c,p){var g={};for(var v in c)p.indexOf(v)>=0||Object.prototype.hasOwnProperty.call(c,v)&&(g[v]=c[v]);return g}function i(c,p){var g=p.left,v=p.right,T=p.up,m=p.down,d=p.top,y=p.bottom,E=p.big,I=p.mirror,w=p.opposite,_=(g?1:0)|(v?2:0)|(d||m?4:0)|(y||T?8:0)|(I?16:0)|(w?32:0)|(c?64:0)|(E?128:0);if(f.hasOwnProperty(_))return f[_];if(!I!=!(c&&w)){var k=[v,g,y,d,m,T];g=k[0],v=k[1],d=k[2],y=k[3],T=k[4],m=k[5]}var C=E?"2000px":"100%",R=g?"-"+C:v?C:"0",L=m||d?"-"+C:T||y?C:"0";return f[_]=(0,u.animation)(`
    `+(c?"to":"from")+" {opacity: 0;transform: translate3d("+R+", "+L+`, 0) rotate3d(0, 0, 1, -120deg);}
	  `+(c?"from":"to")+` {opacity: 1;transform: none}
  `),f[_]}function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u.defaults,p=c.children,g=(c.out,c.forever),v=c.timeout,T=c.duration,m=T===void 0?u.defaults.duration:T,d=c.delay,y=d===void 0?u.defaults.delay:d,E=c.count,I=E===void 0?u.defaults.count:E,w=r(c,["children","out","forever","timeout","duration","delay","count"]),_={make:i,duration:v===void 0?m:v,delay:y,forever:g,count:I,style:{animationFillMode:"both"}};return(0,a.default)(w,_,_,p)}Object.defineProperty(e,"__esModule",{value:!0});var o=Un,a=n(o),l=fn,u=Wt,h={out:l.bool,left:l.bool,right:l.bool,top:l.bool,bottom:l.bool,big:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},f={};s.propTypes=h,e.default=s,t.exports=e.default})(Nd,Nd.exports);var lx=Nd.exports,Rd={exports:{}};(function(t,e){function n(c){return c&&c.__esModule?c:{default:c}}function r(c,p){var g={};for(var v in c)p.indexOf(v)>=0||Object.prototype.hasOwnProperty.call(c,v)&&(g[v]=c[v]);return g}function i(c,p){var g=p.left,v=p.right,T=p.up,m=p.down,d=p.top,y=p.bottom,E=p.big,I=p.mirror,w=p.opposite,_=(g?1:0)|(v?2:0)|(d||m?4:0)|(y||T?8:0)|(I?16:0)|(w?32:0)|(c?64:0)|(E?128:0);if(f.hasOwnProperty(_))return f[_];var k=g||v||T||m||d||y,C=void 0,R=void 0;if(k){if(!I!=!(c&&w)){var L=[v,g,y,d,m,T];g=L[0],v=L[1],d=L[2],y=L[3],T=L[4],m=L[5]}var j=E?"2000px":"100%";C=g?"-"+j:v?j:"0",R=m||d?"-"+j:T||y?j:"0"}return f[_]=(0,u.animation)((c?"to":"from")+" {"+(k?" transform: translate3d("+C+", "+R+", 0);":"")+`}
     `+(c?"from":"to")+" {transform: none;} "),f[_]}function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u.defaults,p=c.children,g=(c.out,c.forever),v=c.timeout,T=c.duration,m=T===void 0?u.defaults.duration:T,d=c.delay,y=d===void 0?u.defaults.delay:d,E=c.count,I=E===void 0?u.defaults.count:E,w=r(c,["children","out","forever","timeout","duration","delay","count"]),_={make:i,duration:v===void 0?m:v,delay:y,forever:g,count:I,style:{animationFillMode:"both"},reverse:w.left};return(0,l.default)(w,_,_,p)}Object.defineProperty(e,"__esModule",{value:!0});var o=fn,a=Un,l=n(a),u=Wt,h={out:o.bool,left:o.bool,right:o.bool,top:o.bool,bottom:o.bool,big:o.bool,mirror:o.bool,opposite:o.bool,duration:o.number,timeout:o.number,delay:o.number,count:o.number,forever:o.bool},f={};s.propTypes=h,e.default=s,t.exports=e.default})(Rd,Rd.exports);var ux=Rd.exports,Pd={exports:{}};(function(t,e){function n(c){return c&&c.__esModule?c:{default:c}}function r(c,p){var g={};for(var v in c)p.indexOf(v)>=0||Object.prototype.hasOwnProperty.call(c,v)&&(g[v]=c[v]);return g}function i(c,p){var g=p.left,v=p.right,T=p.up,m=p.down,d=p.top,y=p.bottom,E=p.mirror,I=p.opposite,w=(g?1:0)|(v?2:0)|(d||m?4:0)|(y||T?8:0)|(E?16:0)|(I?32:0)|(c?64:0);if(f.hasOwnProperty(w))return f[w];if(!E!=!(c&&I)){var _=[v,g,y,d,m,T];g=_[0],v=_[1],d=_[2],y=_[3],T=_[4],m=_[5]}var k="-200deg",C="center";return(m||d)&&g&&(k="-45deg"),((m||d)&&v||(T||y)&&g)&&(k="45deg"),(T||y)&&v&&(k="-90deg"),(g||v)&&(C=(g?"left":"right")+" bottom"),f[w]=(0,u.animation)(`
    `+(c?"to":"from")+" { opacity: 0; transform-origin: "+C+"; transform: rotate3d(0, 0, 1, "+k+`);}
    `+(c?"from":"to")+" { opacity: 1; transform-origin: "+C+`; transform: none;}
  `),f[w]}function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u.defaults,p=c.children,g=(c.out,c.forever),v=c.timeout,T=c.duration,m=T===void 0?u.defaults.duration:T,d=c.delay,y=d===void 0?u.defaults.delay:d,E=c.count,I=E===void 0?u.defaults.count:E,w=r(c,["children","out","forever","timeout","duration","delay","count"]),_={make:i,duration:v===void 0?m:v,delay:y,forever:g,count:I,style:{animationFillMode:"both"}};return(0,l.default)(w,_,_,p)}Object.defineProperty(e,"__esModule",{value:!0});var o=fn,a=Un,l=n(a),u=Wt,h={out:o.bool,left:o.bool,right:o.bool,top:o.bool,bottom:o.bool,mirror:o.bool,opposite:o.bool,duration:o.number,timeout:o.number,delay:o.number,count:o.number,forever:o.bool},f={};s.propTypes=h,e.default=s,t.exports=e.default})(Pd,Pd.exports);var cx=Pd.exports,Ad={exports:{}};(function(t,e){function n(c){return c&&c.__esModule?c:{default:c}}function r(c,p){var g={};for(var v in c)p.indexOf(v)>=0||Object.prototype.hasOwnProperty.call(c,v)&&(g[v]=c[v]);return g}function i(c,p){var g=p.left,v=p.right,T=p.mirror,m=p.opposite,d=(g?1:0)|(v?2:0)|(T?16:0)|(m?32:0)|(c?64:0);if(f.hasOwnProperty(d))return f[d];if(!T!=!(c&&m)){var y=[v,g];g=y[0],v=y[1]}var E=g?"-100%":v?"100%":"0",I=c?`from {
        opacity: 1;
      }
      to {
        transform: translate3d(`+E+`, 0, 0) skewX(30deg);
        opacity: 0;
      }
    `:`from {
        transform: translate3d(`+E+`, 0, 0) skewX(-30deg);
        opacity: 0;
      }
      60% {
        transform: skewX(20deg);
        opacity: 1;
      }
      80% {
        transform: skewX(-5deg);
        opacity: 1;
      }
      to {
        transform: none;
        opacity: 1;
      }`;return f[d]=(0,u.animation)(I),f[d]}function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u.defaults,p=c.children,g=(c.out,c.forever),v=c.timeout,T=c.duration,m=T===void 0?u.defaults.duration:T,d=c.delay,y=d===void 0?u.defaults.delay:d,E=c.count,I=E===void 0?u.defaults.count:E,w=r(c,["children","out","forever","timeout","duration","delay","count"]),_={make:i,duration:v===void 0?m:v,delay:y,forever:g,count:I,style:{animationFillMode:"both"}};return w.left,w.right,w.mirror,w.opposite,(0,a.default)(w,_,_,p)}Object.defineProperty(e,"__esModule",{value:!0});var o=Un,a=n(o),l=fn,u=Wt,h={out:l.bool,left:l.bool,right:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},f={};s.propTypes=h,e.default=s,t.exports=e.default})(Ad,Ad.exports);var hx=Ad.exports,Od={exports:{}};(function(t,e){function n(c){return c&&c.__esModule?c:{default:c}}function r(c,p){var g={};for(var v in c)p.indexOf(v)>=0||Object.prototype.hasOwnProperty.call(c,v)&&(g[v]=c[v]);return g}function i(c,p){var g=p.left,v=p.right,T=p.up,m=p.down,d=p.top,y=p.bottom,E=p.mirror,I=p.opposite,w=(g?1:0)|(v?2:0)|(d||m?4:0)|(y||T?8:0)|(E?16:0)|(I?32:0)|(c?64:0);if(f.hasOwnProperty(w))return f[w];if(!E!=!(c&&I)){var _=[v,g,y,d,m,T];g=_[0],v=_[1],d=_[2],y=_[3],T=_[4],m=_[5]}var k=g||v,C=d||y||T||m,R=k||C,L=void 0,j=void 0,M=void 0,ne=void 0,oe=void 0;return R?c?(j=k?(g?"":"-")+"42px":"0",M=C?(m||d?"-":"")+"60px":"0",ne=k?(v?"":"-")+"2000px":"0",oe=C?(T||y?"":"-")+"2000px":"0",L=`40% {
          opacity: 1;
          transform: scale3d(.475, .475, .475) translate3d(`+j+", "+M+`, 0);
        }
        to {
          opacity: 0;
          transform: scale(.1) translate3d(`+ne+", "+oe+`, 0);
          transform-origin: `+(C?"center bottom":(g?"left":"right")+" center")+`;
        }`):(j=k?(g?"-":"")+"1000px":"0",M=C?(m||d?"-":"")+"1000px":"0",ne=k?(v?"-":"")+"10px":"0",oe=C?(T||y?"-":"")+"60px":"0",L=`from {
          opacity: 0;
          transform: scale3d(.1, .1, .1) translate3d(`+j+", "+M+`, 0);
          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
        }
        60% {
          opacity: 1;
          transform: scale3d(.475, .475, .475) translate3d(`+ne+", "+oe+`, 0);
          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
        }`):L=(c?"to":"from")+" {opacity: 0; transform: scale3d(.1, .1, .1);} "+(c?"from":"to")+" { opacity: 1; transform: none;}",f[w]=(0,u.animation)(L),f[w]}function s(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:u.defaults,p=c.children,g=(c.out,c.forever),v=c.timeout,T=c.duration,m=T===void 0?u.defaults.duration:T,d=c.delay,y=d===void 0?u.defaults.delay:d,E=c.count,I=E===void 0?u.defaults.count:E,w=r(c,["children","out","forever","timeout","duration","delay","count"]),_={make:i,duration:v===void 0?m:v,delay:y,forever:g,count:I,style:{animationFillMode:"both"},reverse:w.left};return(0,l.default)(w,_,_,p)}Object.defineProperty(e,"__esModule",{value:!0});var o=fn,a=Un,l=n(a),u=Wt,h={out:o.bool,left:o.bool,right:o.bool,top:o.bool,bottom:o.bool,mirror:o.bool,opposite:o.bool,duration:o.number,timeout:o.number,delay:o.number,count:o.number,forever:o.bool},f={};s.propTypes=h,e.default=s,t.exports=e.default})(Od,Od.exports);var dx=Od.exports;(function(t){function e(f){return f&&f.__esModule?f:{default:f}}Object.defineProperty(t,"__esModule",{value:!0});var n=ax;Object.defineProperty(t,"default",{enumerable:!0,get:function(){return e(n).default}});var r=wp;Object.defineProperty(t,"Fade",{enumerable:!0,get:function(){return e(r).default}});var i=cw;Object.defineProperty(t,"Bounce",{enumerable:!0,get:function(){return e(i).default}});var s=lx;Object.defineProperty(t,"Roll",{enumerable:!0,get:function(){return e(s).default}});var o=ux;Object.defineProperty(t,"Slide",{enumerable:!0,get:function(){return e(o).default}});var a=hw;Object.defineProperty(t,"Flip",{enumerable:!0,get:function(){return e(a).default}}),Object.defineProperty(t,"Reveal",{enumerable:!0,get:function(){return e(n).default}});var l=cx;Object.defineProperty(t,"Rotate",{enumerable:!0,get:function(){return e(l).default}});var u=hx;Object.defineProperty(t,"LightSpeed",{enumerable:!0,get:function(){return e(u).default}});var h=dx;Object.defineProperty(t,"Zoom",{enumerable:!0,get:function(){return e(h).default}})})(Ep);const fx=t=>{const[e,n]=N.useState(null),r=u=>{const h=t.prop.productList.filter(f=>f.id===parseFloat(u.target.value));n(h[0])},i=u=>{t.saveForm(u),n(null)},s=()=>{n(null)},o=()=>{t.setToDefault()},a=()=>{function u(f,c,p){if(c>p)return p+1;if(c!=f[c])return c;let g=parseInt((c+p)/2,10);return f[g]==g?u(f,g+1,p):u(f,c,g)}function h(){let f=[];return t.prop.productList.map(c=>f.push(c.id)),f.toSorted((c,p)=>c-p)}n({id:u(h(),0,t.prop.productList.length),title:"",description:"",category:"",price:0,url:""})},l=u=>{t.deleteProduct(u.target.value)};return S.jsxs("div",{className:jt.container,children:[S.jsx("h1",{className:jt.header,children:S.jsx(Ep.Fade,{left:!0,cascade:!0,children:"ADMIN BOARD"})}),S.jsx("div",{className:jt.products,children:t.prop.productList.map(u=>S.jsxs("div",{className:jt.item,children:[S.jsxs("div",{className:jt.left,children:[S.jsx("p",{children:u.id}),S.jsx("img",{className:jt.img,src:u.url,alt:u.title}),S.jsxs("div",{className:jt.description,children:[S.jsx("p",{children:u.title}),S.jsx("p",{children:u.description}),S.jsxs("p",{children:["Price: ",u.price,"$"]})]})]}),S.jsxs("div",{className:jt.buttons,children:[S.jsx("button",{className:jt.edit,value:u.id,onClick:r,children:"Edit"}),S.jsx("button",{className:jt.delete,value:u.id,onClick:l,children:"Delete"})]})]},"prod"+u.id))}),S.jsxs("div",{className:jt.buttonsBottom,children:[S.jsx("button",{onClick:a,children:"New"}),S.jsx("button",{onClick:o,children:"Default"})]}),e!==null&&S.jsx(ox,{prop:e,saveForm:i,closeForm:s})]})},px="_container_13yx2_1",mx="_buttonClose_13yx2_33",gx="_item_13yx2_41",yx="_left_13yx2_57",vx="_img_13yx2_81",wx="_description_13yx2_99",Ex="_buttons_13yx2_115",yn={container:px,buttonClose:mx,item:gx,left:yx,img:vx,description:wx,buttons:Ex};function _x(t){throw new Error('Could not dynamically require "'+t+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var xo={exports:{}};const Sx={},Tx=Object.freeze(Object.defineProperty({__proto__:null,default:Sx},Symbol.toStringTag,{value:"Module"})),kx=OS(Tx);var fw=typeof process<"u"&&process.pid?process.pid.toString(36):"",pw="";if(typeof __webpack_require__!="function"&&typeof _x<"u"){var th="",Zg=kx;if(Zg.networkInterfaces)var nh=Zg.networkInterfaces();if(nh){e:for(let t in nh){const e=nh[t],n=e.length;for(var gi=0;gi<n;gi++)if(e[gi]!==void 0&&e[gi].mac&&e[gi].mac!="00:00:00:00:00:00"){th=e[gi].mac;break e}}pw=th?parseInt(th.replace(/\:|\D+/gi,"")).toString(36):""}}xo.exports=xo.exports.default=function(t,e){return(t||"")+pw+fw+No().toString(36)+(e||"")};xo.exports.process=function(t,e){return(t||"")+fw+No().toString(36)+(e||"")};xo.exports.time=function(t,e){return(t||"")+No().toString(36)+(e||"")};function No(){var t=Date.now(),e=No.last||t;return No.last=t>e?t:e+1}var Ix=xo.exports;const Cx=Xo(Ix),xx=t=>{const e=()=>{t.closeCart()},n=r=>{t.deleteFromCart(r.target.value)};return N.useEffect(()=>{t.calculateTotalPrice()},[t]),S.jsxs("div",{className:yn.container,children:[t.prop.itemsInCart.length>0&&S.jsx("h3",{children:"Shopping Cart"}),t.prop.itemsInCart.map(r=>S.jsxs("div",{className:yn.item,children:[S.jsxs("div",{className:yn.left,children:[S.jsx("img",{className:yn.img,src:r.url,alt:r.title}),S.jsxs("div",{className:yn.description,children:[S.jsx("p",{children:r.title}),S.jsx("p",{children:r.description}),S.jsxs("p",{children:["Price: ",r.price,"$"]})]})]}),S.jsxs("div",{className:yn.buttons,children:[S.jsx("button",{children:"Buy"}),S.jsx("button",{className:yn.delete,value:r.id,onClick:n,children:"Delete"})]})]},"cartProd"+Cx())),t.prop.itemsInCart.length>0?S.jsxs("h4",{children:["Total price: ",t.prop.totalPrice,"$"]}):S.jsx("h3",{children:"Cart is empty"}),S.jsxs("div",{children:[t.prop.itemsInCart.length>0&&S.jsx("button",{className:yn.buttonBuyAll,children:"Buy all"}),S.jsx("button",{className:yn.buttonClose,onClick:e,children:"Close"})]})]})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Nx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let c=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(c=64)),r.push(n[h],n[f],n[c],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Nx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new Rx;const c=s<<2|a>>4;if(r.push(c),u!==64){const p=a<<4&240|u>>2;if(r.push(p),f!==64){const g=u<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Rx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Px=function(t){const e=mw(t);return gw.encodeByteArray(e,!0)},Jl=function(t){return Px(t).replace(/\./g,"")},yw=function(t){try{return gw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox=()=>Ax().__FIREBASE_DEFAULTS__,Dx=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$x=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yw(t[1]);return e&&JSON.parse(e)},_p=()=>{try{return Ox()||Dx()||$x()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vw=t=>{var e,n;return(n=(e=_p())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ww=t=>{const e=vw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ew=()=>{var t;return(t=_p())===null||t===void 0?void 0:t.config},_w=t=>{var e;return(e=_p())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Jl(JSON.stringify(n)),Jl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(tt())}function Mx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Fx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jx(){const t=tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Ux(){try{return typeof indexedDB=="object"}catch{return!1}}function Vx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zx="FirebaseError";class pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zx,Object.setPrototypeOf(this,pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sa.prototype.create)}}class sa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Bx(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new pn(i,a,r)}}function Bx(t,e){return t.replace(Hx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Hx=/\{\$([^}]+)}/g;function qx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ey(s)&&ey(o)){if(!Zl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ey(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Kx(t,e){const n=new Wx(t,e);return n.subscribe.bind(n)}class Wx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Gx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=rh),i.error===void 0&&(i.error=rh),i.complete===void 0&&(i.complete=rh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(t){return t&&t._delegate?t._delegate:t}class mr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xx(e))try{this.getOrInitializeService({instanceIdentifier:Or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Or){return this.instances.has(e)}getOptions(e=Or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Yx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Or){return this.component?this.component.multipleInstances?e:Or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Yx(t){return t===Or?void 0:t}function Xx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Qx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const Zx={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},eN=Q.INFO,tN={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},nN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=tN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zu{constructor(e){this.name=e,this._logLevel=eN,this._logHandler=nN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const rN=(t,e)=>e.some(n=>t instanceof n);let ty,ny;function iN(){return ty||(ty=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sN(){return ny||(ny=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tw=new WeakMap,Dd=new WeakMap,kw=new WeakMap,ih=new WeakMap,Sp=new WeakMap;function oN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ur(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Tw.set(n,t)}).catch(()=>{}),Sp.set(e,t),e}function aN(t){if(Dd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Dd.set(t,e)}let $d={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function lN(t){$d=t($d)}function uN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(sh(this),e,...n);return kw.set(r,e.sort?e.sort():[e]),ur(r)}:sN().includes(t)?function(...e){return t.apply(sh(this),e),ur(Tw.get(this))}:function(...e){return ur(t.apply(sh(this),e))}}function cN(t){return typeof t=="function"?uN(t):(t instanceof IDBTransaction&&aN(t),rN(t,iN())?new Proxy(t,$d):t)}function ur(t){if(t instanceof IDBRequest)return oN(t);if(ih.has(t))return ih.get(t);const e=cN(t);return e!==t&&(ih.set(t,e),Sp.set(e,t)),e}const sh=t=>Sp.get(t);function hN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ur(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ur(o.result),l.oldVersion,l.newVersion,ur(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const dN=["get","getKey","getAll","getAllKeys","count"],fN=["put","add","delete","clear"],oh=new Map;function ry(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oh.get(e))return oh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return oh.set(e,s),s}lN(t=>({...t,get:(e,n,r)=>ry(e,n)||t.get(e,n,r),has:(e,n)=>!!ry(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bd="@firebase/app",iy="0.9.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=new zu("@firebase/app"),gN="@firebase/app-compat",yN="@firebase/analytics-compat",vN="@firebase/analytics",wN="@firebase/app-check-compat",EN="@firebase/app-check",_N="@firebase/auth",SN="@firebase/auth-compat",TN="@firebase/database",kN="@firebase/database-compat",IN="@firebase/functions",CN="@firebase/functions-compat",xN="@firebase/installations",NN="@firebase/installations-compat",RN="@firebase/messaging",PN="@firebase/messaging-compat",AN="@firebase/performance",ON="@firebase/performance-compat",DN="@firebase/remote-config",$N="@firebase/remote-config-compat",bN="@firebase/storage",LN="@firebase/storage-compat",MN="@firebase/firestore",FN="@firebase/firestore-compat",jN="firebase",UN="9.22.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ld="[DEFAULT]",VN={[bd]:"fire-core",[gN]:"fire-core-compat",[vN]:"fire-analytics",[yN]:"fire-analytics-compat",[EN]:"fire-app-check",[wN]:"fire-app-check-compat",[_N]:"fire-auth",[SN]:"fire-auth-compat",[TN]:"fire-rtdb",[kN]:"fire-rtdb-compat",[IN]:"fire-fn",[CN]:"fire-fn-compat",[xN]:"fire-iid",[NN]:"fire-iid-compat",[RN]:"fire-fcm",[PN]:"fire-fcm-compat",[AN]:"fire-perf",[ON]:"fire-perf-compat",[DN]:"fire-rc",[$N]:"fire-rc-compat",[bN]:"fire-gcs",[LN]:"fire-gcs-compat",[MN]:"fire-fst",[FN]:"fire-fst-compat","fire-js":"fire-js",[jN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=new Map,Md=new Map;function zN(t,e){try{t.container.addComponent(e)}catch(n){ei.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ti(t){const e=t.name;if(Md.has(e))return ei.debug(`There were multiple attempts to register component ${e}.`),!1;Md.set(e,t);for(const n of eu.values())zN(n,t);return!0}function Bu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},cr=new sa("app","Firebase",BN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=UN;function Iw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ld,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw cr.create("bad-app-name",{appName:String(i)});if(n||(n=Ew()),!n)throw cr.create("no-options");const s=eu.get(i);if(s){if(Zl(n,s.options)&&Zl(r,s.config))return s;throw cr.create("duplicate-app",{appName:i})}const o=new Jx(i);for(const l of Md.values())o.addComponent(l);const a=new HN(n,r,o);return eu.set(i,a),a}function Tp(t=Ld){const e=eu.get(t);if(!e&&t===Ld&&Ew())return Iw();if(!e)throw cr.create("no-app",{appName:t});return e}function on(t,e,n){var r;let i=(r=VN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ei.warn(a.join(" "));return}ti(new mr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN="firebase-heartbeat-database",KN=1,Ro="firebase-heartbeat-store";let ah=null;function Cw(){return ah||(ah=hN(qN,KN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ro)}}}).catch(t=>{throw cr.create("idb-open",{originalErrorMessage:t.message})})),ah}async function WN(t){try{return await(await Cw()).transaction(Ro).objectStore(Ro).get(xw(t))}catch(e){if(e instanceof pn)ei.warn(e.message);else{const n=cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ei.warn(n.message)}}}async function sy(t,e){try{const r=(await Cw()).transaction(Ro,"readwrite");await r.objectStore(Ro).put(e,xw(t)),await r.done}catch(n){if(n instanceof pn)ei.warn(n.message);else{const r=cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ei.warn(r.message)}}}function xw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GN=1024,QN=30*24*60*60*1e3;class YN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new JN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=oy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=QN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=oy(),{heartbeatsToSend:n,unsentEntries:r}=XN(this._heartbeatsCache.heartbeats),i=Jl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function oy(){return new Date().toISOString().substring(0,10)}function XN(t,e=GN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ay(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ay(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class JN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ux()?Vx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await WN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return sy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ay(t){return Jl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZN(t){ti(new mr("platform-logger",e=>new pN(e),"PRIVATE")),ti(new mr("heartbeat",e=>new YN(e),"PRIVATE")),on(bd,iy,t),on(bd,iy,"esm2017"),on("fire-js","")}ZN("");function kp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Nw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const e2=Nw,Rw=new sa("auth","Firebase",Nw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu=new zu("@firebase/auth");function t2(t,...e){tu.logLevel<=Q.WARN&&tu.warn(`Auth (${di}): ${t}`,...e)}function ml(t,...e){tu.logLevel<=Q.ERROR&&tu.error(`Auth (${di}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(t,...e){throw Ip(t,...e)}function an(t,...e){return Ip(t,...e)}function Pw(t,e,n){const r=Object.assign(Object.assign({},e2()),{[e]:n});return new sa("auth","Firebase",r).create(e,{appName:t.name})}function n2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&cn(t,"argument-error"),Pw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ip(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rw.create(t,...e)}function B(t,e,...n){if(!t)throw Ip(e,...n)}function kn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ml(e),new Error(e)}function Dn(t,e){t||kn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function r2(){return ly()==="http:"||ly()==="https:"}function ly(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(r2()||Mx()||"connection"in navigator)?navigator.onLine:!0}function s2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=Lx()||Fx()}get(){return i2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;kn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;kn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;kn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2=new aa(3e4,6e4);function Ow(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function la(t,e,n,r,i={}){return Dw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=oa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Aw.fetch()($w(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Dw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},o2),e);try{const i=new u2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ha(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ha(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ha(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ha(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Pw(t,h,u);cn(t,h)}}catch(i){if(i instanceof pn)throw i;cn(t,"network-request-failed",{message:String(i)})}}async function l2(t,e,n,r,i={}){const s=await la(t,e,n,r,i);return"mfaPendingCredential"in s&&cn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function $w(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Cp(t.config,i):`${t.config.apiScheme}://${i}`}class u2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),a2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ha(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=an(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c2(t,e){return la(t,"POST","/v1/accounts:delete",e)}async function h2(t,e){return la(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function d2(t,e=!1){const n=vt(t),r=await n.getIdToken(e),i=xp(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Js(lh(i.auth_time)),issuedAtTime:Js(lh(i.iat)),expirationTime:Js(lh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function lh(t){return Number(t)*1e3}function xp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ml("JWT malformed, contained fewer than 3 sections"),null;try{const i=yw(n);return i?JSON.parse(i):(ml("Failed to decode base64 JWT payload"),null)}catch(i){return ml("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function f2(t){const e=xp(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof pn&&p2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function p2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Js(this.lastLoginAt),this.creationTime=Js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Po(t,h2(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?v2(s.providerUserInfo):[],a=y2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new bw(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function g2(t){const e=vt(t);await nu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function y2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function v2(t){return t.map(e=>{var{providerId:n}=e,r=kp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w2(t,e){const n=await Dw(t,{},async()=>{const r=oa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=$w(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Aw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):f2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await w2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ao;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ao,this.toJSON())}_performRefresh(){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=kp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new m2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Po(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return d2(this,e)}reload(){return g2(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await nu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Po(this,c2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,c=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:y,emailVerified:E,isAnonymous:I,providerData:w,stsTokenManager:_}=n;B(y&&_,e,"internal-error");const k=Ao.fromJSON(this.name,_);B(typeof y=="string",e,"internal-error"),zn(f,e.name),zn(c,e.name),B(typeof E=="boolean",e,"internal-error"),B(typeof I=="boolean",e,"internal-error"),zn(p,e.name),zn(g,e.name),zn(v,e.name),zn(T,e.name),zn(m,e.name),zn(d,e.name);const C=new qr({uid:y,auth:e,email:c,emailVerified:E,displayName:f,isAnonymous:I,photoURL:g,phoneNumber:p,tenantId:v,stsTokenManager:k,createdAt:m,lastLoginAt:d});return w&&Array.isArray(w)&&(C.providerData=w.map(R=>Object.assign({},R))),T&&(C._redirectEventId=T),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ao;i.updateFromServerResponse(n);const s=new qr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await nu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy=new Map;function In(t){Dn(t instanceof Function,"Expected a class definition");let e=uy.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,uy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Lw.type="NONE";const cy=Lw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(t,e,n){return`firebase:${t}:${e}:${n}`}class Ui{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=gl(this.userKey,i.apiKey,s),this.fullPersistenceKey=gl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?qr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ui(In(cy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||In(cy);const o=gl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const f=qr._fromJSON(e,h);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ui(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ui(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vw(e))return"Blackberry";if(zw(e))return"Webos";if(Np(e))return"Safari";if((e.includes("chrome/")||Fw(e))&&!e.includes("edge/"))return"Chrome";if(Uw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mw(t=tt()){return/firefox\//i.test(t)}function Np(t=tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fw(t=tt()){return/crios\//i.test(t)}function jw(t=tt()){return/iemobile/i.test(t)}function Uw(t=tt()){return/android/i.test(t)}function Vw(t=tt()){return/blackberry/i.test(t)}function zw(t=tt()){return/webos/i.test(t)}function Hu(t=tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function E2(t=tt()){var e;return Hu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _2(){return jx()&&document.documentMode===10}function Bw(t=tt()){return Hu(t)||Uw(t)||zw(t)||Vw(t)||/windows phone/i.test(t)||jw(t)}function S2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hw(t,e=[]){let n;switch(t){case"Browser":n=hy(tt());break;case"Worker":n=`${hy(tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${di}/${r}`}async function qw(t,e){return la(t,"GET","/v2/recaptchaConfig",Ow(t,e))}function dy(t){return t!==void 0&&t.enterprise!==void 0}class Kw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ww(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=an("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",T2().appendChild(r)})}function k2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const I2="https://www.google.com/recaptcha/enterprise.js?render=",C2="recaptcha-enterprise",x2="NO_RECAPTCHA";class N2{constructor(e){this.type=C2,this.auth=ua(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{qw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Kw(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;dy(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(x2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&dy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ww(I2+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fy(this),this.idTokenSubscription=new fy(this),this.beforeStateQueue=new R2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ui.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=s2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?vt(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}async initializeRecaptchaConfig(){const e=await qw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Kw(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new N2(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new sa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await Ui.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return B(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&t2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ua(t){return vt(t)}class fy{constructor(e){this.auth=e,this.observer=null,this.addObserver=Kx(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A2(t,e){const n=Bu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Zl(s,e??{}))return i;cn(i,"already-initialized")}return n.initialize({options:e})}function O2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(In);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function D2(t,e,n){const r=ua(t);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Gw(e),{host:o,port:a}=$2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||b2()}function Gw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $2(t){const e=Gw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:py(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:py(o)}}}function py(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function b2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return kn("not implemented")}_getIdTokenResponse(e){return kn("not implemented")}_linkToIdToken(e,n){return kn("not implemented")}_getReauthenticationResolver(e){return kn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(t,e){return l2(t,"POST","/v1/accounts:signInWithIdp",Ow(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2="http://localhost";class ni extends Qw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=kp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ni(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vi(e,n)}buildRequest(){const e={requestUri:L2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends Rp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends ca{constructor(){super("facebook.com")}static credential(e){return ni._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends ca{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ni._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends ca{constructor(){super("github.com")}static credential(e){return ni._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends ca{constructor(){super("twitter.com")}static credential(e,n){return ni._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await qr._fromIdTokenResponse(e,r,i),o=my(r);return new ts({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=my(r);return new ts({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function my(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru extends pn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ru.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ru(e,n,r,i)}}function Yw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ru._fromErrorAndOperation(t,s,e,r):s})}async function M2(t,e,n=!1){const r=await Po(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ts._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F2(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Po(t,Yw(r,i,e,t),n);B(s.idToken,r,"internal-error");const o=xp(s.idToken);B(o,r,"internal-error");const{sub:a}=o;return B(t.uid===a,r,"user-mismatch"),ts._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&cn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j2(t,e,n=!1){const r="signIn",i=await Yw(t,r,e),s=await ts._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function U2(t,e,n,r){return vt(t).onIdTokenChanged(e,n,r)}function V2(t,e,n){return vt(t).beforeAuthStateChanged(e,n)}function z2(t,e,n,r){return vt(t).onAuthStateChanged(e,n,r)}function B2(t){return vt(t).signOut()}const iu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(iu,"1"),this.storage.removeItem(iu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(){const t=tt();return Np(t)||Hu(t)}const q2=1e3,K2=10;class Jw extends Xw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=H2()&&S2(),this.fallbackToPolling=Bw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);_2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,K2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},q2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jw.type="LOCAL";const W2=Jw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw extends Xw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zw.type="SESSION";const eE=Zw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new qu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await G2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Pp("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const c=f;if(c.data.eventId===u)switch(c.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(c.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function Y2(t){ln().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tE(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function X2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function J2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Z2(){return tE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="firebaseLocalStorageDb",eR=1,su="firebaseLocalStorage",rE="fbase_key";class ha{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ku(t,e){return t.transaction([su],e?"readwrite":"readonly").objectStore(su)}function tR(){const t=indexedDB.deleteDatabase(nE);return new ha(t).toPromise()}function jd(){const t=indexedDB.open(nE,eR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(su,{keyPath:rE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(su)?e(r):(r.close(),await tR(),e(await jd()))})})}async function gy(t,e,n){const r=Ku(t,!0).put({[rE]:e,value:n});return new ha(r).toPromise()}async function nR(t,e){const n=Ku(t,!1).get(e),r=await new ha(n).toPromise();return r===void 0?null:r.value}function yy(t,e){const n=Ku(t,!0).delete(e);return new ha(n).toPromise()}const rR=800,iR=3;class iE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>iR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qu._getInstance(Z2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await X2(),!this.activeServiceWorker)return;this.sender=new Q2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||J2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jd();return await gy(e,iu,"1"),await yy(e,iu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ku(i,!1).getAll();return new ha(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iE.type="LOCAL";const sR=iE;new aa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sE(t,e){return e?In(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap extends Qw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function oR(t){return j2(t.auth,new Ap(t),t.bypassAuthState)}function aR(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),F2(n,new Ap(t),t.bypassAuthState)}async function lR(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),M2(n,new Ap(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oR;case"linkViaPopup":case"linkViaRedirect":return lR;case"reauthViaPopup":case"reauthViaRedirect":return aR;default:cn(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=new aa(2e3,1e4);async function cR(t,e,n){const r=ua(t);n2(t,e,Rp);const i=sE(r,n);return new jr(r,"signInViaPopup",e,i).executeNotNull()}class jr extends oE{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=Pp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,uR.get())};e()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR="pendingRedirect",yl=new Map;class dR extends oE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=yl.get(this.auth._key());if(!e){try{const r=await fR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}yl.set(this.auth._key(),e)}return this.bypassAuthState||yl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fR(t,e){const n=gR(e),r=mR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function pR(t,e){yl.set(t._key(),e)}function mR(t){return In(t._redirectPersistence)}function gR(t){return gl(hR,t.config.apiKey,t.name)}async function yR(t,e,n=!1){const r=ua(t),i=sE(r,e),o=await new dR(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=10*60*1e3;class wR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ER(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!aE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vR&&this.cachedEventUids.clear(),this.cachedEventUids.has(vy(e))}saveEventToCache(e){this.cachedEventUids.add(vy(e)),this.lastProcessedEventTime=Date.now()}}function vy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function aE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ER(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _R(t,e={}){return la(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TR=/^https?/;async function kR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _R(t);for(const n of e)try{if(IR(n))return}catch{}cn(t,"unauthorized-domain")}function IR(t){const e=Fd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!TR.test(n))return!1;if(SR.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=new aa(3e4,6e4);function wy(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function xR(t){return new Promise((e,n)=>{var r,i,s;function o(){wy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wy(),n(an(t,"network-request-failed"))},timeout:CR.get()})}if(!((i=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ln().gapi)===null||s===void 0)&&s.load)o();else{const a=k2("iframefcb");return ln()[a]=()=>{gapi.load?o():n(an(t,"network-request-failed"))},Ww(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw vl=null,e})}let vl=null;function NR(t){return vl=vl||xR(t),vl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=new aa(5e3,15e3),PR="__/auth/iframe",AR="emulator/auth/iframe",OR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},DR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $R(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cp(e,AR):`https://${t.config.authDomain}/${PR}`,r={apiKey:e.apiKey,appName:t.name,v:di},i=DR.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${oa(r).slice(1)}`}async function bR(t){const e=await NR(t),n=ln().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:$R(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:OR,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),a=ln().setTimeout(()=>{s(o)},RR.get());function l(){ln().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},MR=500,FR=600,jR="_blank",UR="http://localhost";class Ey{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VR(t,e,n,r=MR,i=FR){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},LR),{width:r.toString(),height:i.toString(),top:s,left:o}),u=tt().toLowerCase();n&&(a=Fw(u)?jR:n),Mw(u)&&(e=e||UR,l.scrollbars="yes");const h=Object.entries(l).reduce((c,[p,g])=>`${c}${p}=${g},`,"");if(E2(u)&&a!=="_self")return zR(e||"",a),new Ey(null);const f=window.open(e||"",a,h);B(f,t,"popup-blocked");try{f.focus()}catch{}return new Ey(f)}function zR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR="__/auth/handler",HR="emulator/auth/handler",qR=encodeURIComponent("fac");async function _y(t,e,n,r,i,s){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:di,eventId:i};if(e instanceof Rp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",qx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries(s||{}))o[h]=f}if(e instanceof ca){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${qR}=${encodeURIComponent(l)}`:"";return`${KR(t)}?${oa(a).slice(1)}${u}`}function KR({config:t}){return t.emulator?Cp(t,HR):`https://${t.authDomain}/${BR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="webStorageSupport";class WR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=eE,this._completeRedirectFn=yR,this._overrideRedirectResult=pR}async _openPopup(e,n,r,i){var s;Dn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await _y(e,n,r,Fd(),i);return VR(e,o,Pp())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await _y(e,n,r,Fd(),i);return Y2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Dn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bR(e),r=new wR(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(uh,{type:uh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[uh];o!==void 0&&n(!!o),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=kR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bw()||Np()||Hu()}}const GR=WR;var Sy="@firebase/auth",Ty="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function XR(t){ti(new mr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hw(t)},u=new P2(r,i,s,l);return O2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ti(new mr("auth-internal",e=>{const n=ua(e.getProvider("auth").getImmediate());return(r=>new QR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),on(Sy,Ty,YR(t)),on(Sy,Ty,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=5*60,ZR=_w("authIdTokenMaxAge")||JR;let ky=null;const eP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ZR)return;const i=n==null?void 0:n.token;ky!==i&&(ky=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Dr(t=Tp()){const e=Bu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=A2(t,{popupRedirectResolver:GR,persistence:[sR,W2,eE]}),r=_w("authTokenSyncURL");if(r){const s=eP(r);V2(n,s,()=>s(n.currentUser)),U2(n,o=>s(o))}const i=vw("auth");return i&&D2(n,`http://${i}`),n}XR("Browser");var tP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,Op=Op||{},U=tP||self;function Wu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function da(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function nP(t){return Object.prototype.hasOwnProperty.call(t,ch)&&t[ch]||(t[ch]=++rP)}var ch="closure_uid_"+(1e9*Math.random()>>>0),rP=0;function iP(t,e,n){return t.call.apply(t.bind,arguments)}function sP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Je=iP:Je=sP,Je.apply(null,arguments)}function qa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Fe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Tr(){this.s=this.s,this.o=this.o}var oP=0;Tr.prototype.s=!1;Tr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),oP!=0)&&nP(this)};Tr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const lE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Dp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Iy(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Wu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ze(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ze.prototype.h=function(){this.defaultPrevented=!0};var aP=function(){if(!U.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{U.addEventListener("test",()=>{},e),U.removeEventListener("test",()=>{},e)}catch{}return t}();function Oo(t){return/^[\s\xa0]*$/.test(t)}function Gu(){var t=U.navigator;return t&&(t=t.userAgent)?t:""}function Zt(t){return Gu().indexOf(t)!=-1}function $p(t){return $p[" "](t),t}$p[" "]=function(){};function lP(t,e){var n=eA;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var uP=Zt("Opera"),ns=Zt("Trident")||Zt("MSIE"),uE=Zt("Edge"),Ud=uE||ns,cE=Zt("Gecko")&&!(Gu().toLowerCase().indexOf("webkit")!=-1&&!Zt("Edge"))&&!(Zt("Trident")||Zt("MSIE"))&&!Zt("Edge"),cP=Gu().toLowerCase().indexOf("webkit")!=-1&&!Zt("Edge");function hE(){var t=U.document;return t?t.documentMode:void 0}var Vd;e:{var hh="",dh=function(){var t=Gu();if(cE)return/rv:([^\);]+)(\)|;)/.exec(t);if(uE)return/Edge\/([\d\.]+)/.exec(t);if(ns)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(cP)return/WebKit\/(\S+)/.exec(t);if(uP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(dh&&(hh=dh?dh[1]:""),ns){var fh=hE();if(fh!=null&&fh>parseFloat(hh)){Vd=String(fh);break e}}Vd=hh}var zd;if(U.document&&ns){var Cy=hE();zd=Cy||parseInt(Vd,10)||void 0}else zd=void 0;var hP=zd;function Do(t,e){if(Ze.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(cE){e:{try{$p(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:dP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Do.$.h.call(this)}}Fe(Do,Ze);var dP={2:"touch",3:"pen",4:"mouse"};Do.prototype.h=function(){Do.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var fa="closure_listenable_"+(1e6*Math.random()|0),fP=0;function pP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++fP,this.fa=this.ia=!1}function Qu(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function bp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function mP(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function dE(t){const e={};for(const n in t)e[n]=t[n];return e}const xy="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<xy.length;s++)n=xy[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Yu(t){this.src=t,this.g={},this.h=0}Yu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Hd(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new pP(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Bd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=lE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Qu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Hd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Lp="closure_lm_"+(1e6*Math.random()|0),ph={};function pE(t,e,n,r,i){if(r&&r.once)return gE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)pE(t,e[s],n,r,i);return null}return n=jp(n),t&&t[fa]?t.O(e,n,da(r)?!!r.capture:!!r,i):mE(t,e,n,!1,r,i)}function mE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=da(i)?!!i.capture:!!i,a=Fp(t);if(a||(t[Lp]=a=new Yu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=gP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)aP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(vE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function gP(){function t(n){return e.call(t.src,t.listener,n)}const e=yP;return t}function gE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)gE(t,e[s],n,r,i);return null}return n=jp(n),t&&t[fa]?t.P(e,n,da(r)?!!r.capture:!!r,i):mE(t,e,n,!0,r,i)}function yE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)yE(t,e[s],n,r,i);else r=da(r)?!!r.capture:!!r,n=jp(n),t&&t[fa]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Hd(s,n,r,i),-1<n&&(Qu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Fp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Hd(e,n,r,i)),(n=-1<t?e[t]:null)&&Mp(n))}function Mp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[fa])Bd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(vE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Fp(e))?(Bd(n,t),n.h==0&&(n.src=null,e[Lp]=null)):Qu(t)}}}function vE(t){return t in ph?ph[t]:ph[t]="on"+t}function yP(t,e){if(t.fa)t=!0;else{e=new Do(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Mp(t),t=n.call(r,e)}return t}function Fp(t){return t=t[Lp],t instanceof Yu?t:null}var mh="__closure_events_fn_"+(1e9*Math.random()>>>0);function jp(t){return typeof t=="function"?t:(t[mh]||(t[mh]=function(e){return t.handleEvent(e)}),t[mh])}function Le(){Tr.call(this),this.i=new Yu(this),this.S=this,this.J=null}Fe(Le,Tr);Le.prototype[fa]=!0;Le.prototype.removeEventListener=function(t,e,n,r){yE(this,t,e,n,r)};function Be(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ze(e,t);else if(e instanceof Ze)e.target=e.target||t;else{var i=e;e=new Ze(r,t),fE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ka(o,r,!0,e)&&i}if(o=e.g=t,i=Ka(o,r,!0,e)&&i,i=Ka(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ka(o,r,!1,e)&&i}Le.prototype.N=function(){if(Le.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Qu(n[r]);delete t.g[e],t.h--}}this.J=null};Le.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Le.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ka(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Bd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Up=U.JSON.stringify;class vP{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function wP(){var t=Vp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class EP{constructor(){this.h=this.g=null}add(e,n){const r=wE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var wE=new vP(()=>new _P,t=>t.reset());class _P{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function SP(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function TP(t){U.setTimeout(()=>{throw t},0)}let $o,bo=!1,Vp=new EP,EE=()=>{const t=U.Promise.resolve(void 0);$o=()=>{t.then(kP)}};var kP=()=>{for(var t;t=wP();){try{t.h.call(t.g)}catch(n){TP(n)}var e=wE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}bo=!1};function Xu(t,e){Le.call(this),this.h=t||1,this.g=e||U,this.j=Je(this.qb,this),this.l=Date.now()}Fe(Xu,Le);O=Xu.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Be(this,"tick"),this.ga&&(zp(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function zp(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){Xu.$.N.call(this),zp(this),delete this.g};function Bp(t,e,n){if(typeof t=="function")n&&(t=Je(t,n));else if(t&&typeof t.handleEvent=="function")t=Je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:U.setTimeout(t,e||0)}function _E(t){t.g=Bp(()=>{t.g=null,t.i&&(t.i=!1,_E(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class IP extends Tr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:_E(this)}N(){super.N(),this.g&&(U.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Lo(t){Tr.call(this),this.h=t,this.g={}}Fe(Lo,Tr);var Ny=[];function SE(t,e,n,r){Array.isArray(n)||(n&&(Ny[0]=n.toString()),n=Ny);for(var i=0;i<n.length;i++){var s=pE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function TE(t){bp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Mp(e)},t),t.g={}}Lo.prototype.N=function(){Lo.$.N.call(this),TE(this)};Lo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ju(){this.g=!0}Ju.prototype.Ea=function(){this.g=!1};function CP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var f=h.split("_");o=2<=f.length&&f[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function xP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Di(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+RP(t,n)+(r?" "+r:"")})}function NP(t,e){t.info(function(){return"TIMEOUT: "+e})}Ju.prototype.info=function(){};function RP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Up(n)}catch{return e}}var fi={},Ry=null;function Zu(){return Ry=Ry||new Le}fi.Ta="serverreachability";function kE(t){Ze.call(this,fi.Ta,t)}Fe(kE,Ze);function Mo(t){const e=Zu();Be(e,new kE(e))}fi.STAT_EVENT="statevent";function IE(t,e){Ze.call(this,fi.STAT_EVENT,t),this.stat=e}Fe(IE,Ze);function it(t){const e=Zu();Be(e,new IE(e,t))}fi.Ua="timingevent";function CE(t,e){Ze.call(this,fi.Ua,t),this.size=e}Fe(CE,Ze);function pa(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return U.setTimeout(function(){t()},e)}var ec={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},xE={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Hp(){}Hp.prototype.h=null;function Py(t){return t.h||(t.h=t.i())}function NE(){}var ma={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function qp(){Ze.call(this,"d")}Fe(qp,Ze);function Kp(){Ze.call(this,"c")}Fe(Kp,Ze);var qd;function tc(){}Fe(tc,Hp);tc.prototype.g=function(){return new XMLHttpRequest};tc.prototype.i=function(){return{}};qd=new tc;function ga(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Lo(this),this.P=PP,t=Ud?125:void 0,this.V=new Xu(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new RE}function RE(){this.i=null,this.g="",this.h=!1}var PP=45e3,Kd={},ou={};O=ga.prototype;O.setTimeout=function(t){this.P=t};function Wd(t,e,n){t.L=1,t.v=rc($n(e)),t.s=n,t.S=!0,PE(t,null)}function PE(t,e){t.G=Date.now(),ya(t),t.A=$n(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),FE(n.i,"t",r),t.C=0,n=t.l.J,t.h=new RE,t.g=s_(t.l,n?e:null,!t.s),0<t.O&&(t.M=new IP(Je(t.Pa,t,t.g),t.O)),SE(t.U,t.g,"readystatechange",t.nb),e=t.I?dE(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Mo(),CP(t.j,t.u,t.A,t.m,t.W,t.s)}O.nb=function(t){t=t.target;const e=this.M;e&&tn(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const h=tn(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>h)&&(h!=3||Ud||this.g&&(this.h.h||this.g.ja()||$y(this.g)))){this.J||h!=4||e==7||(e==8||0>=f?Mo(3):Mo(2)),nc(this);var n=this.g.da();this.ca=n;t:if(AE(this)){var r=$y(this.g);t="";var i=r.length,s=tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ur(this),Zs(this);var o="";break t}this.h.i=new U.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,xP(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Oo(a)){var u=a;break t}}u=null}if(n=u)Di(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Gd(this,n);else{this.i=!1,this.o=3,it(12),Ur(this),Zs(this);break e}}this.S?(OE(this,h,o),Ud&&this.i&&h==3&&(SE(this.U,this.V,"tick",this.mb),this.V.start())):(Di(this.j,this.m,o,null),Gd(this,o)),h==4&&Ur(this),this.i&&!this.J&&(h==4?t_(this.l,this):(this.i=!1,ya(this)))}else XP(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),Ur(this),Zs(this)}}}catch{}finally{}};function AE(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function OE(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=AP(t,n),i==ou){e==4&&(t.o=4,it(14),r=!1),Di(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Kd){t.o=4,it(15),Di(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Di(t.j,t.m,i,null),Gd(t,i);AE(t)&&i!=ou&&i!=Kd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,it(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Jp(e),e.M=!0,it(11))):(Di(t.j,t.m,n,"[Invalid Chunked Response]"),Ur(t),Zs(t))}O.mb=function(){if(this.g){var t=tn(this.g),e=this.g.ja();this.C<e.length&&(nc(this),OE(this,t,e),this.i&&t!=4&&ya(this))}};function AP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ou:(n=Number(e.substring(n,r)),isNaN(n)?Kd:(r+=1,r+n>e.length?ou:(e=e.slice(r,r+n),t.C=r+n,e)))}O.cancel=function(){this.J=!0,Ur(this)};function ya(t){t.Y=Date.now()+t.P,DE(t,t.P)}function DE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=pa(Je(t.lb,t),e)}function nc(t){t.B&&(U.clearTimeout(t.B),t.B=null)}O.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(NP(this.j,this.A),this.L!=2&&(Mo(),it(17)),Ur(this),this.o=2,Zs(this)):DE(this,this.Y-t)};function Zs(t){t.l.H==0||t.J||t_(t.l,t)}function Ur(t){nc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,zp(t.V),TE(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Gd(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Qd(n.i,t))){if(!t.K&&Qd(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)uu(n),oc(n);else break e;Xp(n),it(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=pa(Je(n.ib,n),6e3));if(1>=VE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Vr(n,11)}else if((t.K||n.g==t)&&uu(n),!Oo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const h=u[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const c=u[5];c!=null&&typeof c=="number"&&0<c&&(r=1.5*c,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.i;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Wp(s,s.h),s.h=null))}if(r.F){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,ue(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=i_(r,r.J?r.pa:null,r.Y),o.K){zE(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(nc(a),ya(a)),r.g=o}else ZE(r);0<n.j.length&&ac(n)}else u[0]!="stop"&&u[0]!="close"||Vr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Vr(n,7):Yp(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Mo(4)}catch{}}function OP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Wu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function DP(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Wu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function $E(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Wu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=DP(t),r=OP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var bE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $P(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Kr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Kr){this.h=t.h,au(this,t.j),this.s=t.s,this.g=t.g,lu(this,t.m),this.l=t.l;var e=t.i,n=new Fo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ay(this,n),this.o=t.o}else t&&(e=String(t).match(bE))?(this.h=!1,au(this,e[1]||"",!0),this.s=Ls(e[2]||""),this.g=Ls(e[3]||"",!0),lu(this,e[4]),this.l=Ls(e[5]||"",!0),Ay(this,e[6]||"",!0),this.o=Ls(e[7]||"")):(this.h=!1,this.i=new Fo(null,this.h))}Kr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ms(e,Oy,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ms(e,Oy,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ms(n,n.charAt(0)=="/"?MP:LP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ms(n,jP)),t.join("")};function $n(t){return new Kr(t)}function au(t,e,n){t.j=n?Ls(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function lu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ay(t,e,n){e instanceof Fo?(t.i=e,UP(t.i,t.h)):(n||(e=Ms(e,FP)),t.i=new Fo(e,t.h))}function ue(t,e,n){t.i.set(e,n)}function rc(t){return ue(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ls(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ms(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,bP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function bP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Oy=/[#\/\?@]/g,LP=/[#\?:]/g,MP=/[#\?]/g,FP=/[#\?@]/g,jP=/#/g;function Fo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function kr(t){t.g||(t.g=new Map,t.h=0,t.i&&$P(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=Fo.prototype;O.add=function(t,e){kr(this),this.i=null,t=ms(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function LE(t,e){kr(t),e=ms(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ME(t,e){return kr(t),e=ms(t,e),t.g.has(e)}O.forEach=function(t,e){kr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};O.ta=function(){kr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};O.Z=function(t){kr(this);let e=[];if(typeof t=="string")ME(this,t)&&(e=e.concat(this.g.get(ms(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return kr(this),this.i=null,t=ms(this,t),ME(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function FE(t,e,n){LE(t,e),0<n.length&&(t.i=null,t.g.set(ms(t,e),Dp(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function ms(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function UP(t,e){e&&!t.j&&(kr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(LE(this,r),FE(this,i,n))},t)),t.j=e}var VP=class{constructor(t,e){this.g=t,this.map=e}};function jE(t){this.l=t||zP,U.PerformanceNavigationTiming?(t=U.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(U.g&&U.g.Ka&&U.g.Ka()&&U.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var zP=10;function UE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function VE(t){return t.h?1:t.g?t.g.size:0}function Qd(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Wp(t,e){t.g?t.g.add(e):t.h=e}function zE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}jE.prototype.cancel=function(){if(this.i=BE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function BE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Dp(t.i)}var BP=class{stringify(t){return U.JSON.stringify(t,void 0)}parse(t){return U.JSON.parse(t,void 0)}};function HP(){this.g=new BP}function qP(t,e,n){const r=n||"";try{$E(t,function(i,s){let o=i;da(i)&&(o=Up(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function KP(t,e){const n=new Ju;if(U.Image){const r=new Image;r.onload=qa(Wa,n,r,"TestLoadImage: loaded",!0,e),r.onerror=qa(Wa,n,r,"TestLoadImage: error",!1,e),r.onabort=qa(Wa,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=qa(Wa,n,r,"TestLoadImage: timeout",!1,e),U.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Wa(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function va(t){this.l=t.fc||null,this.j=t.ob||!1}Fe(va,Hp);va.prototype.g=function(){return new ic(this.l,this.j)};va.prototype.i=function(t){return function(){return t}}({});function ic(t,e){Le.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Gp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Fe(ic,Le);var Gp=0;O=ic.prototype;O.open=function(t,e){if(this.readyState!=Gp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,jo(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||U).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,wa(this)),this.readyState=Gp};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,jo(this)),this.g&&(this.readyState=3,jo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof U.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;HE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function HE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?wa(this):jo(this),this.readyState==3&&HE(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,wa(this))};O.Ya=function(t){this.g&&(this.response=t,wa(this))};O.ka=function(){this.g&&wa(this)};function wa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,jo(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function jo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ic.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var WP=U.JSON.parse;function ve(t){Le.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=qE,this.L=this.M=!1}Fe(ve,Le);var qE="",GP=/^https?$/i,QP=["POST","PUT"];O=ve.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():qd.g(),this.C=this.u?Py(this.u):Py(qd),this.g.onreadystatechange=Je(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Dy(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=U.FormData&&t instanceof U.FormData,!(0<=lE(QP,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{GE(this),0<this.B&&((this.L=YP(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Je(this.ua,this)):this.A=Bp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Dy(this,s)}};function YP(t){return ns&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof Op<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Be(this,"timeout"),this.abort(8))};function Dy(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,KE(t),sc(t)}function KE(t){t.F||(t.F=!0,Be(t,"complete"),Be(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Be(this,"complete"),Be(this,"abort"),sc(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),sc(this,!0)),ve.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?WE(this):this.kb())};O.kb=function(){WE(this)};function WE(t){if(t.h&&typeof Op<"u"&&(!t.C[1]||tn(t)!=4||t.da()!=2)){if(t.v&&tn(t)==4)Bp(t.La,0,t);else if(Be(t,"readystatechange"),tn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(bE)[1]||null;!i&&U.self&&U.self.location&&(i=U.self.location.protocol.slice(0,-1)),r=!GP.test(i?i.toLowerCase():"")}n=r}if(n)Be(t,"complete"),Be(t,"success");else{t.m=6;try{var s=2<tn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",KE(t)}}finally{sc(t)}}}}function sc(t,e){if(t.g){GE(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Be(t,"ready");try{n.onreadystatechange=r}catch{}}}function GE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(U.clearTimeout(t.A),t.A=null)}O.isActive=function(){return!!this.g};function tn(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<tn(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),WP(e)}};function $y(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case qE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function XP(t){const e={};t=(t.g&&2<=tn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Oo(t[r]))continue;var n=SP(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}mP(e,function(r){return r.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function QE(t){let e="";return bp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Qp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=QE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ue(t,e,n))}function Rs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function YE(t){this.Ga=0,this.j=[],this.l=new Ju,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Rs("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Rs("baseRetryDelayMs",5e3,t),this.hb=Rs("retryDelaySeedMs",1e4,t),this.eb=Rs("forwardChannelMaxRetries",2,t),this.xa=Rs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new jE(t&&t.concurrentRequestLimit),this.Ja=new HP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=YE.prototype;O.ra=8;O.H=1;function Yp(t){if(XE(t),t.H==3){var e=t.W++,n=$n(t.I);if(ue(n,"SID",t.K),ue(n,"RID",e),ue(n,"TYPE","terminate"),Ea(t,n),e=new ga(t,t.l,e),e.L=2,e.v=rc($n(n)),n=!1,U.navigator&&U.navigator.sendBeacon)try{n=U.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&U.Image&&(new Image().src=e.v,n=!0),n||(e.g=s_(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ya(e)}r_(t)}function oc(t){t.g&&(Jp(t),t.g.cancel(),t.g=null)}function XE(t){oc(t),t.u&&(U.clearTimeout(t.u),t.u=null),uu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&U.clearTimeout(t.m),t.m=null)}function ac(t){if(!UE(t.i)&&!t.m){t.m=!0;var e=t.Na;$o||EE(),bo||($o(),bo=!0),Vp.add(e,t),t.C=0}}function JP(t,e){return VE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=pa(Je(t.Na,t,e),n_(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ga(this,this.l,t);let s=this.s;if(this.U&&(s?(s=dE(s),fE(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=JE(this,i,e),n=$n(this.I),ue(n,"RID",t),ue(n,"CVER",22),this.F&&ue(n,"X-HTTP-Session-Id",this.F),Ea(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(QE(s)))+"&"+e:this.o&&Qp(n,this.o,s)),Wp(this.i,i),this.bb&&ue(n,"TYPE","init"),this.P?(ue(n,"$req",e),ue(n,"SID","null"),i.aa=!0,Wd(i,n,null)):Wd(i,n,e),this.H=2}}else this.H==3&&(t?by(this,t):this.j.length==0||UE(this.i)||by(this))};function by(t,e){var n;e?n=e.m:n=t.W++;const r=$n(t.I);ue(r,"SID",t.K),ue(r,"RID",n),ue(r,"AID",t.V),Ea(t,r),t.o&&t.s&&Qp(r,t.o,t.s),n=new ga(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=JE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Wp(t.i,n),Wd(n,r,e)}function Ea(t,e){t.na&&bp(t.na,function(n,r){ue(e,r,n)}),t.h&&$E({},function(n,r){ue(e,r,n)})}function JE(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Je(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const h=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{qP(h,o,"req"+u+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function ZE(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;$o||EE(),bo||($o(),bo=!0),Vp.add(e,t),t.A=0}}function Xp(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=pa(Je(t.Ma,t),n_(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,e_(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=pa(Je(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,it(10),oc(this),e_(this))};function Jp(t){t.B!=null&&(U.clearTimeout(t.B),t.B=null)}function e_(t){t.g=new ga(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=$n(t.wa);ue(e,"RID","rpc"),ue(e,"SID",t.K),ue(e,"AID",t.V),ue(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&ue(e,"TO",t.qa),ue(e,"TYPE","xmlhttp"),Ea(t,e),t.o&&t.s&&Qp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=rc($n(e)),n.s=null,n.S=!0,PE(n,t)}O.ib=function(){this.v!=null&&(this.v=null,oc(this),Xp(this),it(19))};function uu(t){t.v!=null&&(U.clearTimeout(t.v),t.v=null)}function t_(t,e){var n=null;if(t.g==e){uu(t),Jp(t),t.g=null;var r=2}else if(Qd(t.i,e))n=e.F,zE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Zu(),Be(r,new CE(r,n)),ac(t)}else ZE(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&JP(t,e)||r==2&&Xp(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Vr(t,5);break;case 4:Vr(t,10);break;case 3:Vr(t,6);break;default:Vr(t,2)}}}function n_(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Vr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Je(t.pb,t);n||(n=new Kr("//www.google.com/images/cleardot.gif"),U.location&&U.location.protocol=="http"||au(n,"https"),rc(n)),KP(n.toString(),r)}else it(2);t.H=0,t.h&&t.h.za(e),r_(t),XE(t)}O.pb=function(t){t?(this.l.info("Successfully pinged google.com"),it(2)):(this.l.info("Failed to ping google.com"),it(1))};function r_(t){if(t.H=0,t.ma=[],t.h){const e=BE(t.i);(e.length!=0||t.j.length!=0)&&(Iy(t.ma,e),Iy(t.ma,t.j),t.i.i.length=0,Dp(t.j),t.j.length=0),t.h.ya()}}function i_(t,e,n){var r=n instanceof Kr?$n(n):new Kr(n);if(r.g!="")e&&(r.g=e+"."+r.g),lu(r,r.m);else{var i=U.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Kr(null);r&&au(s,r),e&&(s.g=e),i&&lu(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&ue(r,n,e),ue(r,"VER",t.ra),Ea(t,r),r}function s_(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new ve(new va({ob:!0})):new ve(t.va),e.Oa(t.J),e}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function o_(){}O=o_.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function cu(){if(ns&&!(10<=Number(hP)))throw Error("Environmental error: no available transport.")}cu.prototype.g=function(t,e){return new xt(t,e)};function xt(t,e){Le.call(this),this.g=new YE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Oo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Oo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new gs(this)}Fe(xt,Le);xt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;it(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=i_(t,null,t.Y),ac(t)};xt.prototype.close=function(){Yp(this.g)};xt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Up(t),t=n);e.j.push(new VP(e.fb++,t)),e.H==3&&ac(e)};xt.prototype.N=function(){this.g.h=null,delete this.j,Yp(this.g),delete this.g,xt.$.N.call(this)};function a_(t){qp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Fe(a_,qp);function l_(){Kp.call(this),this.status=1}Fe(l_,Kp);function gs(t){this.g=t}Fe(gs,o_);gs.prototype.Ba=function(){Be(this.g,"a")};gs.prototype.Aa=function(t){Be(this.g,new a_(t))};gs.prototype.za=function(t){Be(this.g,new l_)};gs.prototype.ya=function(){Be(this.g,"b")};function ZP(){this.blockSize=-1}function Kt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Fe(Kt,ZP);Kt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function gh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Kt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)gh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){gh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){gh(this,r),i=0;break}}this.h=i,this.i+=e};Kt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function se(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var eA={};function Zp(t){return-128<=t&&128>t?lP(t,function(e){return new se([e|0],0>e?-1:0)}):new se([t|0],0>t?-1:0)}function nn(t){if(isNaN(t)||!isFinite(t))return zi;if(0>t)return Ve(nn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Yd;return new se(e,0)}function u_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ve(u_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=nn(Math.pow(e,8)),r=zi,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=nn(Math.pow(e,s)),r=r.R(s).add(nn(o))):(r=r.R(n),r=r.add(nn(o)))}return r}var Yd=4294967296,zi=Zp(0),Xd=Zp(1),Ly=Zp(16777216);O=se.prototype;O.ea=function(){if(Dt(this))return-Ve(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Yd+r)*e,e*=Yd}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Cn(this))return"0";if(Dt(this))return"-"+Ve(this).toString(t);for(var e=nn(Math.pow(t,6)),n=this,r="";;){var i=du(n,e).g;n=hu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Cn(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Cn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Dt(t){return t.h==-1}O.X=function(t){return t=hu(this,t),Dt(t)?-1:Cn(t)?0:1};function Ve(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new se(n,~t.h).add(Xd)}O.abs=function(){return Dt(this)?Ve(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new se(n,n[n.length-1]&-2147483648?-1:0)};function hu(t,e){return t.add(Ve(e))}O.R=function(t){if(Cn(this)||Cn(t))return zi;if(Dt(this))return Dt(t)?Ve(this).R(Ve(t)):Ve(Ve(this).R(t));if(Dt(t))return Ve(this.R(Ve(t)));if(0>this.X(Ly)&&0>t.X(Ly))return nn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Ga(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Ga(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Ga(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Ga(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new se(n,0)};function Ga(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ps(t,e){this.g=t,this.h=e}function du(t,e){if(Cn(e))throw Error("division by zero");if(Cn(t))return new Ps(zi,zi);if(Dt(t))return e=du(Ve(t),e),new Ps(Ve(e.g),Ve(e.h));if(Dt(e))return e=du(t,Ve(e)),new Ps(Ve(e.g),e.h);if(30<t.g.length){if(Dt(t)||Dt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Xd,r=e;0>=r.X(t);)n=My(n),r=My(r);var i=yi(n,1),s=yi(r,1);for(r=yi(r,2),n=yi(n,2);!Cn(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=yi(r,1),n=yi(n,1)}return e=hu(t,i.R(e)),new Ps(i,e)}for(i=zi;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=nn(n),o=s.R(e);Dt(o)||0<o.X(t);)n-=r,s=nn(n),o=s.R(e);Cn(s)&&(s=Xd),i=i.add(s),t=hu(t,o)}return new Ps(i,t)}O.gb=function(t){return du(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new se(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new se(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new se(n,this.h^t.h)};function My(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new se(n,t.h)}function yi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new se(i,t.h)}cu.prototype.createWebChannel=cu.prototype.g;xt.prototype.send=xt.prototype.u;xt.prototype.open=xt.prototype.m;xt.prototype.close=xt.prototype.close;ec.NO_ERROR=0;ec.TIMEOUT=8;ec.HTTP_ERROR=6;xE.COMPLETE="complete";NE.EventType=ma;ma.OPEN="a";ma.CLOSE="b";ma.ERROR="c";ma.MESSAGE="d";Le.prototype.listen=Le.prototype.O;ve.prototype.listenOnce=ve.prototype.P;ve.prototype.getLastError=ve.prototype.Sa;ve.prototype.getLastErrorCode=ve.prototype.Ia;ve.prototype.getStatus=ve.prototype.da;ve.prototype.getResponseJson=ve.prototype.Wa;ve.prototype.getResponseText=ve.prototype.ja;ve.prototype.send=ve.prototype.ha;ve.prototype.setWithCredentials=ve.prototype.Oa;Kt.prototype.digest=Kt.prototype.l;Kt.prototype.reset=Kt.prototype.reset;Kt.prototype.update=Kt.prototype.j;se.prototype.add=se.prototype.add;se.prototype.multiply=se.prototype.R;se.prototype.modulo=se.prototype.gb;se.prototype.compare=se.prototype.X;se.prototype.toNumber=se.prototype.ea;se.prototype.toString=se.prototype.toString;se.prototype.getBits=se.prototype.D;se.fromNumber=nn;se.fromString=u_;var tA=function(){return new cu},nA=function(){return Zu()},yh=ec,rA=xE,iA=fi,Fy={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},sA=va,Qa=NE,oA=ve,aA=Kt,Bi=se;const jy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qe=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys="9.22.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new zu("@firebase/firestore");function Uy(){return ri.logLevel}function b(t,...e){if(ri.logLevel<=Q.DEBUG){const n=e.map(em);ri.debug(`Firestore (${ys}): ${t}`,...n)}}function bn(t,...e){if(ri.logLevel<=Q.ERROR){const n=e.map(em);ri.error(`Firestore (${ys}): ${t}`,...n)}}function rs(t,...e){if(ri.logLevel<=Q.WARN){const n=e.map(em);ri.warn(`Firestore (${ys}): ${t}`,...n)}}function em(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${ys}) INTERNAL ASSERTION FAILED: `+t;throw bn(e),new Error(e)}function Re(t,e){t||K()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let F=class extends pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wr=class{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let c_=class{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}},lA=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}};class uA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}let cA=class{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Wr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Wr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Wr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string"),new c_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string"),new Qe(e)}},hA=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}},dA=class{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new hA(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}},fA=class{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},pA=class{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string"),this.T=n.token,new fA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let h_=class{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=mA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}};function re(t,e){return t<e?-1:t>e?1:0}function is(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un=class wl{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return wl.fromMillis(Date.now())}static fromDate(e){return wl.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new wl(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let W=class El{constructor(e){this.timestamp=e}static fromTimestamp(e){return new El(e)}static min(){return new El(new un(0,0))}static max(){return new El(new un(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d_=class Jd{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Jd.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Jd?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}},De=class _l extends d_{construct(e,n,r){return new _l(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new _l(n)}static emptyPath(){return new _l([])}};const gA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends d_{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return gA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new F(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new F(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new F(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new F(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let V=class Fs{constructor(e){this.path=e}static fromPath(e){return new Fs(De.fromString(e))}static fromName(e){return new Fs(De.fromString(e).popFirst(5))}static empty(){return new Fs(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Fs(new De(e.slice()))}};function yA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new un(n+1,0):new un(n,r));return new Uo(i,V.empty(),e)}function vA(t){return new Uo(t.readTime,t.key,-1)}let Uo=class Zd{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zd(W.min(),V.empty(),-1)}static max(){return new Zd(W.max(),V.empty(),-1)}};function wA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=V.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";let _A=class{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==EA)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P=class ct{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ct((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ct?n:ct.resolve(n)}catch(n){return ct.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ct.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ct.reject(n)}static resolve(e){return new ct((n,r)=>{n(e)})}static reject(e){return new ct((n,r)=>{r(e)})}static waitFor(e){return new ct((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=ct.resolve(!1);for(const r of e)n=n.next(i=>i?ct.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new ct((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new ct((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}};function _a(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nm=class{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}};nm.ct=-1;function lc(t){return t==null}function ef(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function uc(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function SA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Me=class tf{constructor(e,n){this.comparator=e,this.root=n||hr.EMPTY}insert(e,n){return new tf(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,hr.BLACK,null,null))}remove(e){return new tf(this.comparator,this.root.remove(e,this.comparator).copy(null,null,hr.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ya(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ya(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ya(this.root,e,this.comparator,!0)}},Ya=class{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},hr=class vn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??vn.RED,this.left=i??vn.EMPTY,this.right=s??vn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new vn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return vn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return vn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,vn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,vn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}};hr.EMPTY=null,hr.RED=!0,hr.BLACK=!1;hr.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(t,e,n,r,i){return this}insert(t,e,n){return new hr(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tt=class nf{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new zy(this.data.getIterator())}getIteratorFrom(e){return new zy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof nf)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new nf(this.comparator);return n.data=e,n}};class zy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let js=class rf{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new rf([])}unionWith(e){let n=new Tt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new rf(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return is(this.fields,e.fields,(n,r)=>n.isEqual(r))}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let f_=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new f_("Invalid base64 string: "+i):i}}(e);return new nt(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const TA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gr(t){if(Re(!!t),typeof t=="string"){let e=0;const n=TA.exec(t);if(Re(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Se(t.seconds),nanos:Se(t.nanos)}}function Se(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ii(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rm(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function im(t){const e=t.mapValue.fields.__previous_value__;return rm(e)?im(e):e}function Vo(t){const e=gr(t.mapValue.fields.__local_write_time__.timestampValue);return new un(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class zo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new zo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof zo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function si(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rm(t)?4:IA(t)?9007199254740991:10:K()}function hn(t,e){if(t===e)return!0;const n=si(t);if(n!==si(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vo(t).isEqual(Vo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=gr(r.timestampValue),o=gr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ii(r.bytesValue).isEqual(ii(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Se(r.geoPointValue.latitude)===Se(i.geoPointValue.latitude)&&Se(r.geoPointValue.longitude)===Se(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Se(r.integerValue)===Se(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Se(r.doubleValue),o=Se(i.doubleValue);return s===o?ef(s)===ef(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return is(t.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Vy(s)!==Vy(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!hn(s[a],o[a])))return!1;return!0}(t,e);default:return K()}}function Bo(t,e){return(t.values||[]).find(n=>hn(n,e))!==void 0}function ss(t,e){if(t===e)return 0;const n=si(t),r=si(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Se(i.integerValue||i.doubleValue),a=Se(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return By(t.timestampValue,e.timestampValue);case 4:return By(Vo(t),Vo(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ii(i),a=ii(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=re(o[l],a[l]);if(u!==0)return u}return re(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=re(Se(i.latitude),Se(s.latitude));return o!==0?o:re(Se(i.longitude),Se(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ss(o[l],a[l]);if(u)return u}return re(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Xa.mapValue&&s===Xa.mapValue)return 0;if(i===Xa.mapValue)return 1;if(s===Xa.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const f=re(a[h],u[h]);if(f!==0)return f;const c=ss(o[a[h]],l[u[h]]);if(c!==0)return c}return re(a.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function By(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=gr(t),r=gr(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function os(t){return sf(t)}function sf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=gr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ii(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,V.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=sf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${sf(r.fields[a])}`;return s+"}"}(t.mapValue):K();var e,n}function of(t){return!!t&&"integerValue"in t}function sm(t){return!!t&&"arrayValue"in t}function Hy(t){return!!t&&"nullValue"in t}function qy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function vh(t){return!!t&&"mapValue"in t}function eo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return uc(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=eo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=eo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function IA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br=class af{constructor(e){this.value=e}static empty(){return new af({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!vh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=eo(n)}setAll(e){let n=ft.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=eo(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());vh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];vh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){uc(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new af(eo(this.value))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln=class $r{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new $r(e,0,W.min(),W.min(),W.min(),br.empty(),0)}static newFoundDocument(e,n,r,i){return new $r(e,1,n,W.min(),r,i,0)}static newNoDocument(e,n){return new $r(e,2,n,W.min(),W.min(),br.empty(),0)}static newUnknownDocument(e,n){return new $r(e,3,n,W.min(),W.min(),br.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=br.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=br.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $r&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $r(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fu=class{constructor(e,n){this.position=e,this.inclusive=n}};function Ky(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=V.comparator(V.fromName(o.referenceValue),n.key):r=ss(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let to=class{constructor(e,n="asc"){this.field=e,this.dir=n}};function CA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let p_=class{};class xe extends p_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new NA(e,n,r):n==="array-contains"?new AA(e,r):n==="in"?new OA(e,r):n==="not-in"?new DA(e,r):n==="array-contains-any"?new $A(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new RA(e,r):new PA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ss(n,this.value)):n!==null&&si(this.value)===si(n)&&this.matchesComparison(ss(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class dn extends p_{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new dn(e,n)}matches(e){return m_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function m_(t){return t.op==="and"}function g_(t){return xA(t)&&m_(t)}function xA(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function lf(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+os(t.value);if(g_(t))return t.filters.map(e=>lf(e)).join(",");{const e=t.filters.map(n=>lf(n)).join(",");return`${t.op}(${e})`}}function y_(t,e){return t instanceof xe?function(n,r){return r instanceof xe&&n.op===r.op&&n.field.isEqual(r.field)&&hn(n.value,r.value)}(t,e):t instanceof dn?function(n,r){return r instanceof dn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&y_(s,r.filters[o]),!0):!1}(t,e):void K()}function v_(t){return t instanceof xe?function(e){return`${e.field.canonicalString()} ${e.op} ${os(e.value)}`}(t):t instanceof dn?function(e){return e.op.toString()+" {"+e.getFilters().map(v_).join(" ,")+"}"}(t):"Filter"}let NA=class extends xe{constructor(e,n,r){super(e,n,r),this.key=V.fromName(r.referenceValue)}matches(e){const n=V.comparator(e.key,this.key);return this.matchesComparison(n)}},RA=class extends xe{constructor(e,n){super(e,"in",n),this.keys=w_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}};class PA extends xe{constructor(e,n){super(e,"not-in",n),this.keys=w_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function w_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>V.fromName(r.referenceValue))}let AA=class extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return sm(n)&&Bo(n.arrayValue,this.value)}};class OA extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bo(this.value.arrayValue,n)}}let DA=class extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Bo(this.value.arrayValue,n)}};class $A extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!sm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Bo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.dt=null}}function Gy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new bA(t,e,n,r,i,s,o)}function om(t){const e=te(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>lf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),lc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>os(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>os(r)).join(",")),e.dt=n}return e.dt}function am(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!CA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!y_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wy(t.startAt,e.startAt)&&Wy(t.endAt,e.endAt)}function uf(t){return V.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this._t=null,this.startAt,this.endAt}}function LA(t,e,n,r,i,s,o,a){return new cc(t,e,n,r,i,s,o,a)}function lm(t){return new cc(t)}function Qy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function MA(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function FA(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function jA(t){return t.collectionGroup!==null}function Hi(t){const e=te(t);if(e.wt===null){e.wt=[];const n=FA(e),r=MA(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new to(n)),e.wt.push(new to(ft.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new to(ft.keyField(),s))}}}return e.wt}function Mn(t){const e=te(t);if(!e._t)if(e.limitType==="F")e._t=Gy(e.path,e.collectionGroup,Hi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Hi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new to(s.field,o))}const r=e.endAt?new fu(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new fu(e.startAt.position,e.startAt.inclusive):null;e._t=Gy(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function cf(t,e,n){return new cc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hc(t,e){return am(Mn(t),Mn(e))&&t.limitType===e.limitType}function E_(t){return`${om(Mn(t))}|lt:${t.limitType}`}function hf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>v_(r)).join(", ")}]`),lc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>os(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>os(r)).join(",")),`Target(${n})`}(Mn(t))}; limitType=${t.limitType})`}function dc(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):V.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Hi(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Ky(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Hi(n),r)||n.endAt&&!function(i,s,o){const a=Ky(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Hi(n),r))}(t,e)}function UA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function __(t){return(e,n)=>{let r=!1;for(const i of Hi(t)){const s=VA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function VA(t,e,n){const r=t.field.isKeyField()?V.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ss(a,l):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){uc(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return SA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA=new Me(V.comparator);function yr(){return zA}const S_=new Me(V.comparator);function Us(...t){let e=S_;for(const n of t)e=e.insert(n.key,n);return e}function BA(t){let e=S_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zr(){return no()}function T_(){return no()}function no(){return new vs(t=>t.toString(),(t,e)=>t.isEqual(e))}const HA=new Tt(V.comparator);function J(...t){let e=HA;for(const n of t)e=e.add(n);return e}const qA=new Tt(re);function KA(){return qA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ef(e)?"-0":e}}function GA(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(){this._=void 0}}function QA(t,e,n){return t instanceof df?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&rm(i)&&(i=im(i)),i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof pu?k_(t,e):t instanceof mu?I_(t,e):function(r,i){const s=XA(r,i),o=Yy(s)+Yy(r.gt);return of(s)&&of(r.gt)?GA(o):WA(r.serializer,o)}(t,e)}function YA(t,e,n){return t instanceof pu?k_(t,e):t instanceof mu?I_(t,e):n}function XA(t,e){return t instanceof ff?of(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class df extends fc{}class pu extends fc{constructor(e){super(),this.elements=e}}function k_(t,e){const n=C_(e);for(const r of t.elements)n.some(i=>hn(i,r))||n.push(r);return{arrayValue:{values:n}}}class mu extends fc{constructor(e){super(),this.elements=e}}function I_(t,e){let n=C_(e);for(const r of t.elements)n=n.filter(i=>!hn(i,r));return{arrayValue:{values:n}}}class ff extends fc{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Yy(t){return Se(t.integerValue||t.doubleValue)}function C_(t){return sm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function JA(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof pu&&r instanceof pu||n instanceof mu&&r instanceof mu?is(n.elements,r.elements,hn):n instanceof ff&&r instanceof ff?hn(n.gt,r.gt):n instanceof df&&r instanceof df}(t.transform,e.transform)}class Gr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gr}static exists(e){return new Gr(void 0,e)}static updateTime(e){return new Gr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Sl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class um{}function x_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new eO(t.key,Gr.none()):new cm(t.key,t.data,Gr.none());{const n=t.data,r=br.empty();let i=new Tt(ft.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new pc(t.key,r,new js(i.toArray()),Gr.none())}}function ZA(t,e,n){t instanceof cm?function(r,i,s){const o=r.value.clone(),a=Jy(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof pc?function(r,i,s){if(!Sl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Jy(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(N_(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ro(t,e,n,r){return t instanceof cm?function(i,s,o,a){if(!Sl(i.precondition,s))return o;const l=i.value.clone(),u=Zy(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof pc?function(i,s,o,a){if(!Sl(i.precondition,s))return o;const l=Zy(i.fieldTransforms,a,s),u=s.data;return u.setAll(N_(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,s,o){return Sl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function Xy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&is(n,r,(i,s)=>JA(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class cm extends um{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class pc extends um{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function N_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Jy(t,e,n){const r=new Map;Re(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,YA(o,a,n[i]))}return r}function Zy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,QA(s,o,e))}return r}class eO extends um{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ZA(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ro(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=T_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=x_(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),J())}isEqual(e){return this.batchId===e.batchId&&is(this.mutations,e.mutations,(n,r)=>Xy(n,r))&&is(this.baseMutations,e.baseMutations,(n,r)=>Xy(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e,Y;function R_(t){if(t===void 0)return bn("GRPC error has no .code"),A.UNKNOWN;switch(t){case _e.OK:return A.OK;case _e.CANCELLED:return A.CANCELLED;case _e.UNKNOWN:return A.UNKNOWN;case _e.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case _e.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case _e.INTERNAL:return A.INTERNAL;case _e.UNAVAILABLE:return A.UNAVAILABLE;case _e.UNAUTHENTICATED:return A.UNAUTHENTICATED;case _e.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case _e.NOT_FOUND:return A.NOT_FOUND;case _e.ALREADY_EXISTS:return A.ALREADY_EXISTS;case _e.PERMISSION_DENIED:return A.PERMISSION_DENIED;case _e.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case _e.ABORTED:return A.ABORTED;case _e.OUT_OF_RANGE:return A.OUT_OF_RANGE;case _e.UNIMPLEMENTED:return A.UNIMPLEMENTED;case _e.DATA_LOSS:return A.DATA_LOSS;default:return K()}}(Y=_e||(_e={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ja}static getOrCreateInstance(){return Ja===null&&(Ja=new hm),Ja}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Ja=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO=new Bi([4294967295,4294967295],0);function ev(t){const e=iO().encode(t),n=new aA;return n.update(e),new Uint8Array(n.digest())}function tv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Bi([n,r],0),new Bi([i,s],0)]}class dm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Vs(`Invalid padding: ${n}`);if(r<0)throw new Vs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Vs(`Invalid padding when bitmap length is 0: ${n}`);this.It=8*e.length-n,this.Tt=Bi.fromNumber(this.It)}Et(e,n,r){let i=e.add(n.multiply(Bi.fromNumber(r)));return i.compare(sO)===1&&(i=new Bi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const n=ev(e),[r,i]=tv(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);if(!this.At(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new dm(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const n=ev(e),[r,i]=tv(n);for(let s=0;s<this.hashCount;s++){const o=this.Et(r,i,s);this.Rt(o)}}Rt(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Sa.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new mc(W.min(),i,new Me(re),yr(),J())}}class Sa{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Sa(r,n,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,n,r,i){this.Pt=e,this.removedTargetIds=n,this.key=r,this.bt=i}}class P_{constructor(e,n){this.targetId=e,this.Vt=n}}class A_{constructor(e,n,r=nt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class nv{constructor(){this.St=0,this.Dt=iv(),this.Ct=nt.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=J(),n=J(),r=J();return this.Dt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new Sa(this.Ct,this.xt,e,n,r)}Ft(){this.Nt=!1,this.Dt=iv()}Bt(e,n){this.Nt=!0,this.Dt=this.Dt.insert(e,n)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class oO{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=yr(),this.zt=rv(),this.Wt=new Me(re)}Ht(e){for(const n of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(n,e.bt):this.Yt(n,e.key,e.bt);for(const n of e.removedTargetIds)this.Yt(n,e.key,e.bt)}Xt(e){this.forEachTarget(e,n=>{const r=this.Zt(n);switch(e.state){case 0:this.te(n)&&r.$t(e.resumeToken);break;case 1:r.Ut(),r.kt||r.Ft(),r.$t(e.resumeToken);break;case 2:r.Ut(),r.kt||this.removeTarget(n);break;case 3:this.te(n)&&(r.Kt(),r.$t(e.resumeToken));break;case 4:this.te(n)&&(this.ee(n),r.$t(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qt.forEach((r,i)=>{this.te(i)&&n(i)})}ne(e){var n;const r=e.targetId,i=e.Vt.count,s=this.se(r);if(s){const o=s.target;if(uf(o))if(i===0){const a=new V(o.path);this.Yt(r,a,Ln.newNoDocument(a,W.min()))}else Re(i===1);else{const a=this.ie(r);if(a!==i){const l=this.re(e,a);if(l!==0){this.ee(r);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(r,u)}(n=hm.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(u,h,f){var c,p,g,v,T,m;const d={localCacheCount:h,existenceFilterCount:f.count},y=f.unchangedNames;return y&&(d.bloomFilter={applied:u===0,hashCount:(c=y==null?void 0:y.hashCount)!==null&&c!==void 0?c:0,bitmapLength:(v=(g=(p=y==null?void 0:y.bits)===null||p===void 0?void 0:p.bitmap)===null||g===void 0?void 0:g.length)!==null&&v!==void 0?v:0,padding:(m=(T=y==null?void 0:y.bits)===null||T===void 0?void 0:T.padding)!==null&&m!==void 0?m:0}),d}(l,a,e.Vt))}}}}re(e,n){const{unchangedNames:r,count:i}=e.Vt;if(!r||!r.bits)return 1;const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=ii(s).toUint8Array()}catch(h){if(h instanceof f_)return rs("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw h}try{u=new dm(l,o,a)}catch(h){return rs(h instanceof Vs?"BloomFilter error: ":"Applying bloom filter failed: ",h),1}return u.It===0?1:i!==n-this.oe(e.targetId,u)?2:0}oe(e,n){const r=this.Gt.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;n.vt(a)||(this.Yt(e,s,null),i++)}),i}ce(e){const n=new Map;this.Qt.forEach((s,o)=>{const a=this.se(o);if(a){if(s.current&&uf(a.target)){const l=new V(a.target.path);this.jt.get(l)!==null||this.ae(o,l)||this.Yt(o,l,Ln.newNoDocument(l,e))}s.Mt&&(n.set(o,s.Ot()),s.Ft())}});let r=J();this.zt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.se(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.jt.forEach((s,o)=>o.setReadTime(e));const i=new mc(e,n,this.Wt,this.jt,r);return this.jt=yr(),this.zt=rv(),this.Wt=new Me(re),i}Jt(e,n){if(!this.te(e))return;const r=this.ae(e,n.key)?2:0;this.Zt(e).Bt(n.key,r),this.jt=this.jt.insert(n.key,n),this.zt=this.zt.insert(n.key,this.he(n.key).add(e))}Yt(e,n,r){if(!this.te(e))return;const i=this.Zt(e);this.ae(e,n)?i.Bt(n,1):i.Lt(n),this.zt=this.zt.insert(n,this.he(n).delete(e)),r&&(this.jt=this.jt.insert(n,r))}removeTarget(e){this.Qt.delete(e)}ie(e){const n=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let n=this.Qt.get(e);return n||(n=new nv,this.Qt.set(e,n)),n}he(e){let n=this.zt.get(e);return n||(n=new Tt(re),this.zt=this.zt.insert(e,n)),n}te(e){const n=this.se(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}se(e){const n=this.Qt.get(e);return n&&n.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new nv),this.Gt.getRemoteKeysForTarget(e).forEach(n=>{this.Yt(e,n,null)})}ae(e,n){return this.Gt.getRemoteKeysForTarget(e).has(n)}}function rv(){return new Me(V.comparator)}function iv(){return new Me(V.comparator)}const aO=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),lO=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),uO=(()=>({and:"AND",or:"OR"}))();class cO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function pf(t,e){return t.useProto3Json||lc(e)?e:{value:e}}function hO(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function dO(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function qi(t){return Re(!!t),W.fromTimestamp(function(e){const n=gr(e);return new un(n.seconds,n.nanos)}(t))}function fO(t,e){return function(n){return new De(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function O_(t){const e=De.fromString(t);return Re(L_(e)),e}function wh(t,e){const n=O_(e);if(n.get(1)!==t.databaseId.projectId)throw new F(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new V(D_(n))}function mf(t,e){return fO(t.databaseId,e)}function pO(t){const e=O_(t);return e.length===4?De.emptyPath():D_(e)}function sv(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function D_(t){return Re(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function mO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(Re(u===void 0||typeof u=="string"),nt.fromBase64String(u||"")):(Re(u===void 0||u instanceof Uint8Array),nt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?A.UNKNOWN:R_(l.code);return new F(u,l.message||"")}(o);n=new A_(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=wh(t,r.document.name),s=qi(r.document.updateTime),o=r.document.createTime?qi(r.document.createTime):W.min(),a=new br({mapValue:{fields:r.document.fields}}),l=Ln.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Tl(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=wh(t,r.document),s=r.readTime?qi(r.readTime):W.min(),o=Ln.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Tl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=wh(t,r.document),s=r.removedTargetIds||[];n=new Tl([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new rO(i,s),a=r.targetId;n=new P_(a,o)}}return n}function gO(t,e){return{documents:[mf(t,e.path)]}}function yO(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=mf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=mf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return b_(dn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:vi(h.field),direction:EO(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=pf(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function vO(t){let e=pO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Re(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(h){const f=$_(h);return f instanceof dn&&g_(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(f){return new to(wi(f.field),function(c){switch(c){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(f.direction))}(h)));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,lc(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,c=h.values||[];return new fu(c,f)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const f=!h.before,c=h.values||[];return new fu(c,f)}(n.endAt)),LA(e,i,o,s,a,"F",l,u)}function wO(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function $_(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=wi(e.unaryFilter.field);return xe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=wi(e.unaryFilter.field);return xe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=wi(e.unaryFilter.field);return xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=wi(e.unaryFilter.field);return xe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(e){return xe.create(wi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return dn.create(e.compositeFilter.filters.map(n=>$_(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return K()}}(e.compositeFilter.op))}(t):K()}function EO(t){return aO[t]}function _O(t){return lO[t]}function SO(t){return uO[t]}function vi(t){return{fieldPath:t.canonicalString()}}function wi(t){return ft.fromServerFormat(t.fieldPath)}function b_(t){return t instanceof xe?function(e){if(e.op==="=="){if(qy(e.value))return{unaryFilter:{field:vi(e.field),op:"IS_NAN"}};if(Hy(e.value))return{unaryFilter:{field:vi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(qy(e.value))return{unaryFilter:{field:vi(e.field),op:"IS_NOT_NAN"}};if(Hy(e.value))return{unaryFilter:{field:vi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vi(e.field),op:_O(e.op),value:e.value}}}(t):t instanceof dn?function(e){const n=e.getFilters().map(r=>b_(r));return n.length===1?n[0]:{compositeFilter:{op:SO(e.op),filters:n}}}(t):K()}function L_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fm=class zs{constructor(e,n,r,i,s=W.min(),o=W.min(),a=nt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new zs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new zs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TO=class{constructor(e){this.fe=e}};function kO(t){const e=vO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(){this.rn=new CO}addToCollectionParentIndex(e,n){return this.rn.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(Uo.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(Uo.min())}updateCollectionGroup(e,n,r){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}let CO=class{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Tt(De.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Tt(De.comparator)).toArray()}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new as(0)}static Mn(){return new as(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(){this.changes=new vs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ln.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ro(r.mutation,i,js.empty(),un.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,J()).next(()=>r))}getLocalViewOfDocuments(e,n,r=J()){const i=zr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Us();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,J()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=yr();const o=no(),a=no();return n.forEach((l,u)=>{const h=r.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof pc)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),ro(h.mutation,u,h.mutation.getFieldMask(),un.now())):o.set(u.key,js.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new NO(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=no();let i=new Me((o,a)=>o-a),s=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||js.empty();h=a.applyToLocalView(u,h),r.set(l,h);const f=(i.get(a.batchId)||J()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,f=T_();h.forEach(c=>{if(!s.has(c)){const p=x_(n.get(c),r.get(c));p!==null&&f.set(c,p),s=s.add(c)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return V.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):jA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):P.resolve(zr());let a=-1,l=s;return o.next(u=>P.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?P.resolve():this.remoteDocumentCache.getEntry(e,h).next(c=>{l=l.insert(h,c)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,J())).next(h=>({batchId:a,changes:BA(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new V(n)).next(r=>{let i=Us();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Us();return this.indexManager.getCollectionParents(e,i).next(o=>P.forEach(o,a=>{const l=function(u,h){return new cc(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((h,f)=>{s=s.insert(h,f)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Ln.newInvalidDocument(u)))});let o=Us();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&ro(u.mutation,l,js.empty(),un.now()),dc(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return P.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var r;return this.cs.set(n.id,{id:(r=n).id,version:r.version,createTime:qi(r.createTime)}),P.resolve()}getNamedQuery(e,n){return P.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(r){return{name:r.name,query:kO(r.bundledQuery),readTime:qi(r.readTime)}}(n)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(){this.overlays=new Me(V.comparator),this.ls=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zr();return P.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.we(e,n,s)}),P.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ls.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ls.delete(r)),P.resolve()}getOverlaysForCollection(e,n,r){const i=zr(),s=n.length+1,o=new V(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Me((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=s.get(u.largestBatchId);h===null&&(h=zr(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=zr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return P.resolve(a)}we(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ls.get(i.largestBatchId).delete(r.key);this.ls.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new nO(n,r));let s=this.ls.get(n);s===void 0&&(s=J(),this.ls.set(n,s)),this.ls.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(){this.fs=new Tt(Ae.ds),this.ws=new Tt(Ae._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const r=new Ae(e,n);this.fs=this.fs.add(r),this.ws=this.ws.add(r)}gs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ys(new Ae(e,n))}ps(e,n){e.forEach(r=>this.removeReference(r,n))}Is(e){const n=new V(new De([])),r=new Ae(n,e),i=new Ae(n,e+1),s=[];return this.ws.forEachInRange([r,i],o=>{this.ys(o),s.push(o.key)}),s}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new V(new De([])),r=new Ae(n,e),i=new Ae(n,e+1);let s=J();return this.ws.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ae(e,0),r=this.fs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ae{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return V.comparator(e.key,n.key)||re(e.As,n.As)}static _s(e,n){return re(e.As,n.As)||V.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new Tt(Ae.ds)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new tO(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.Rs=this.Rs.add(new Ae(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.bs(r),s=i<0?0:i;return P.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ae(n,0),i=new Ae(n,Number.POSITIVE_INFINITY),s=[];return this.Rs.forEachInRange([r,i],o=>{const a=this.Ps(o.As);s.push(a)}),P.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Tt(re);return n.forEach(i=>{const s=new Ae(i,0),o=new Ae(i,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([s,o],a=>{r=r.add(a.As)})}),P.resolve(this.Vs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;V.isDocumentKey(s)||(s=s.child(""));const o=new Ae(new V(s),0);let a=new Tt(re);return this.Rs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.As)),!0)},o),P.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(r=>{const i=this.Ps(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Re(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return P.forEach(n.mutations,i=>{const s=new Ae(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Rs=r})}Cn(e){}containsKey(e,n){const r=new Ae(n,0),i=this.Rs.firstAfterOrEqual(r);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e){this.Ds=e,this.docs=new Me(V.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ds(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():Ln.newInvalidDocument(n))}getEntries(e,n){let r=yr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ln.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=yr();const o=n.path,a=new V(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||wA(vA(h),r)<=0||(i.has(h.key)||dc(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return P.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Cs(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new $O(this)}getSize(e){return P.resolve(this.size)}}class $O extends xO{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.os.addEntry(e,i)):this.os.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bO{constructor(e){this.persistence=e,this.xs=new vs(n=>om(n),am),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Ns=0,this.ks=new pm,this.targetCount=0,this.Ms=as.kn()}forEachTarget(e,n){return this.xs.forEach((r,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ns&&(this.Ns=n),P.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new as(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.Fn(n),P.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.xs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),P.waitFor(s).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.xs.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.ks.gs(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.ks.ps(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),P.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ks.Es(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LO{constructor(e,n){this.$s={},this.overlays={},this.Os=new nm(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new bO(this),this.indexManager=new IO,this.remoteDocumentCache=function(r){return new DO(r)}(r=>this.referenceDelegate.Ls(r)),this.serializer=new TO(n),this.qs=new PO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new AO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.$s[e.toKey()];return r||(r=new OO(n,this.referenceDelegate),this.$s[e.toKey()]=r),r}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,r){b("MemoryPersistence","Starting transaction:",e);const i=new MO(this.Os.next());return this.referenceDelegate.Us(),r(i).next(s=>this.referenceDelegate.Ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gs(e,n){return P.or(Object.values(this.$s).map(r=>()=>r.containsKey(e,n)))}}class MO extends _A{constructor(e){super(),this.currentSequenceNumber=e}}class mm{constructor(e){this.persistence=e,this.Qs=new pm,this.js=null}static zs(e){return new mm(e)}get Ws(){if(this.js)return this.js;throw K()}addReference(e,n,r){return this.Qs.addReference(r,n),this.Ws.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.Qs.removeReference(r,n),this.Ws.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),P.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(i=>this.Ws.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ws.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Ws,r=>{const i=V.fromPath(r);return this.Hs(e,i).next(s=>{s||n.removeEntry(i,W.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(r=>{r?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return P.or([()=>P.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Fi=r,this.Bi=i}static Li(e,n){let r=J(),i=J();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new gm(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ki(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.Qi(e,n))}Ki(e,n){if(Qy(n))return P.resolve(null);let r=Mn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=cf(n,null,"F"),r=Mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=J(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.zi(n,u,o,l.readTime)?this.Ki(e,cf(n,null,"F")):this.Wi(e,u,n,l)}))})))}Gi(e,n,r,i){return Qy(n)||i.isEqual(W.min())?this.Qi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.zi(n,o,r,i)?this.Qi(e,n):(Uy()<=Q.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),hf(n)),this.Wi(e,o,n,yA(i,-1)))})}ji(e,n){let r=new Tt(__(e));return n.forEach((i,s)=>{dc(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Qi(e,n){return Uy()<=Q.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",hf(n)),this.Ui.getDocumentsMatchingQuery(e,n,Uo.min())}Wi(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new Me(re),this.Yi=new vs(s=>om(s),am),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(r)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RO(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function UO(t,e,n,r){return new jO(t,e,n,r)}async function M_(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.tr(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=J();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({er:u,removedBatchIds:o,addedBatchIds:a}))})})}function F_(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function VO(t,e){const n=te(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Zi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((h,f)=>{const c=i.get(f);if(!c)return;a.push(n.Bs.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Bs.addMatchingKeys(s,h.addedDocuments,f)));let p=c.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?p=p.withResumeToken(nt.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):h.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(h.resumeToken,r)),i=i.insert(f,p),function(g,v,T){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(c,p,h)&&a.push(n.Bs.updateTargetData(s,p))});let l=yr(),u=J();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(zO(s,o,e.documentUpdates).next(h=>{l=h.nr,u=h.sr})),!r.isEqual(W.min())){const h=n.Bs.getLastRemoteSnapshotVersion(s).next(f=>n.Bs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return P.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function zO(t,e,n){let r=J(),i=J();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=yr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(W.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{nr:o,sr:i}})}function BO(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Bs.getTargetData(r,e).next(s=>s?(i=s,P.resolve(i)):n.Bs.allocateTargetId(r).next(o=>(i=new fm(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Bs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function gf(t,e,n){const r=te(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!_a(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function ov(t,e,n){const r=te(t);let i=W.min(),s=J();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const h=te(a),f=h.Yi.get(u);return f!==void 0?P.resolve(h.Ji.get(f)):h.Bs.getTargetData(l,u)}(r,o,Mn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Bs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:W.min(),n?s:J())).next(a=>(HO(r,UA(e),a),{documents:a,ir:s})))}function HO(t,e,n){let r=t.Xi.get(e)||W.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Xi.set(e,r)}class av{constructor(){this.activeTargetIds=KA()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qO{constructor(){this.Hr=new av,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,r){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new av,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Za=null;function Eh(){return Za===null?Za=268435456+Math.round(2147483648*Math.random()):Za++,"0x"+Za.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We="WebChannelConnection";class QO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,r,i,s){const o=Eh(),a=this.To(e,n);b("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.Eo(l,i,s),this.Ao(e,a,l,r).then(u=>(b("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw rs("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}vo(e,n,r,i,s,o){return this.Io(e,n,r,i,s)}Eo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ys,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}To(e,n){const r=WO[e];return`${this.mo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,r,i){const s=Eh();return new Promise((o,a)=>{const l=new oA;l.setWithCredentials(!0),l.listenOnce(rA.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case yh.NO_ERROR:const h=l.getResponseJson();b(We,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case yh.TIMEOUT:b(We,`RPC '${e}' ${s} timed out`),a(new F(A.DEADLINE_EXCEEDED,"Request time out"));break;case yh.HTTP_ERROR:const f=l.getStatus();if(b(We,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let c=l.getResponseJson();Array.isArray(c)&&(c=c[0]);const p=c==null?void 0:c.error;if(p&&p.status&&p.message){const g=function(v){const T=v.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(T)>=0?T:A.UNKNOWN}(p.status);a(new F(g,p.message))}else a(new F(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new F(A.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{b(We,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);b(We,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Ro(e,n,r){const i=Eh(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=tA(),a=nA(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new sA({})),this.Eo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");b(We,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let c=!1,p=!1;const g=new GO({ro:T=>{p?b(We,`Not sending because RPC '${e}' stream ${i} is closed:`,T):(c||(b(We,`Opening RPC '${e}' stream ${i} transport.`),f.open(),c=!0),b(We,`RPC '${e}' stream ${i} sending:`,T),f.send(T))},oo:()=>f.close()}),v=(T,m,d)=>{T.listen(m,y=>{try{d(y)}catch(E){setTimeout(()=>{throw E},0)}})};return v(f,Qa.EventType.OPEN,()=>{p||b(We,`RPC '${e}' stream ${i} transport opened.`)}),v(f,Qa.EventType.CLOSE,()=>{p||(p=!0,b(We,`RPC '${e}' stream ${i} transport closed`),g.wo())}),v(f,Qa.EventType.ERROR,T=>{p||(p=!0,rs(We,`RPC '${e}' stream ${i} transport errored:`,T),g.wo(new F(A.UNAVAILABLE,"The operation could not be completed")))}),v(f,Qa.EventType.MESSAGE,T=>{var m;if(!p){const d=T.data[0];Re(!!d);const y=d,E=y.error||((m=y[0])===null||m===void 0?void 0:m.error);if(E){b(We,`RPC '${e}' stream ${i} received error:`,E);const I=E.status;let w=function(k){const C=_e[k];if(C!==void 0)return R_(C)}(I),_=E.message;w===void 0&&(w=A.INTERNAL,_="Unknown error status: "+I+" with message "+E.message),p=!0,g.wo(new F(w,_)),f.close()}else b(We,`RPC '${e}' stream ${i} received:`,d),g._o(d)}}),v(a,iA.STAT_EVENT,T=>{T.stat===Fy.PROXY?b(We,`RPC '${e}' stream ${i} detected buffering proxy`):T.stat===Fy.NOPROXY&&b(We,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.fo()},0),g}}function _h(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(t){return new cO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.Po=r,this.bo=i,this.Vo=s,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),r=Math.max(0,Date.now()-this.Co),i=Math.max(0,n-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.$o=r,this.Oo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new U_(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(bn(n.toString()),bn("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Fo===n&&this.Zo(r,i)},r=>{e(()=>{const i=new F(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.tu(i)})})}Zo(e,n){const r=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(i=>{r(()=>this.tu(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class XO extends YO{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}eu(e,n){return this.connection.Ro("Listen",e,n)}onMessage(e){this.qo.reset();const n=mO(this.serializer,e),r=function(i){if(!("targetChange"in i))return W.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?W.min():s.readTime?qi(s.readTime):W.min()}(e);return this.listener.nu(n,r)}su(e){const n={};n.database=sv(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;if(o=uf(a)?{documents:gO(i,a)}:{query:yO(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0){o.resumeToken=dO(i,s.resumeToken);const l=pf(i,s.expectedCount);l!==null&&(o.expectedCount=l)}else if(s.snapshotVersion.compareTo(W.min())>0){o.readTime=hO(i,s.snapshotVersion.toTimestamp());const l=pf(i,s.expectedCount);l!==null&&(o.expectedCount=l)}return o}(this.serializer,e);const r=wO(this.serializer,e);r&&(n.labels=r),this.Wo(n)}iu(e){const n={};n.database=sv(this.serializer),n.removeTarget=e,this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.lu=!1}fu(){if(this.lu)throw new F(A.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Io(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(A.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new F(A.UNKNOWN,s.toString())})}terminate(){this.lu=!0}}class ZO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(bn(n),this.mu=!1):b("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=s,this.Pu.Yr(o=>{r.enqueueAndForget(async()=>{ka(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=te(a);l.vu.add(4),await Ta(l),l.bu.set("Unknown"),l.vu.delete(4),await gc(l)}(this))})}),this.bu=new ZO(r,i)}}async function gc(t){if(ka(t))for(const e of t.Ru)await e(!0)}async function Ta(t){for(const e of t.Ru)await e(!1)}function V_(t,e){const n=te(t);n.Au.has(e.targetId)||(n.Au.set(e.targetId,e),wm(n)?vm(n):ws(n).Ko()&&ym(n,e))}function z_(t,e){const n=te(t),r=ws(n);n.Au.delete(e),r.Ko()&&B_(n,e),n.Au.size===0&&(r.Ko()?r.jo():ka(n)&&n.bu.set("Unknown"))}function ym(t,e){if(t.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ws(t).su(e)}function B_(t,e){t.Vu.qt(e),ws(t).iu(e)}function vm(t){t.Vu=new oO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),le:e=>t.Au.get(e)||null,ue:()=>t.datastore.serializer.databaseId}),ws(t).start(),t.bu.gu()}function wm(t){return ka(t)&&!ws(t).Uo()&&t.Au.size>0}function ka(t){return te(t).vu.size===0}function H_(t){t.Vu=void 0}async function tD(t){t.Au.forEach((e,n)=>{ym(t,e)})}async function nD(t,e){H_(t),wm(t)?(t.bu.Iu(e),vm(t)):t.bu.set("Unknown")}async function rD(t,e,n){if(t.bu.set("Online"),e instanceof A_&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Au.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Au.delete(o),r.Vu.removeTarget(o))}(t,e)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await uv(t,r)}else if(e instanceof Tl?t.Vu.Ht(e):e instanceof P_?t.Vu.ne(e):t.Vu.Xt(e),!n.isEqual(W.min()))try{const r=await F_(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Vu.ce(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.Au.get(l);u&&i.Au.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach((a,l)=>{const u=i.Au.get(a);if(!u)return;i.Au.set(a,u.withResumeToken(nt.EMPTY_BYTE_STRING,u.snapshotVersion)),B_(i,a);const h=new fm(u.target,a,l,u.sequenceNumber);ym(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await uv(t,r)}}async function uv(t,e,n){if(!_a(e))throw e;t.vu.add(1),await Ta(t),t.bu.set("Offline"),n||(n=()=>F_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await gc(t)})}async function cv(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=ka(n);n.vu.add(3),await Ta(n),r&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await gc(n)}async function iD(t,e){const n=te(t);e?(n.vu.delete(2),await gc(n)):e||(n.vu.add(2),await Ta(n),n.bu.set("Unknown"))}function ws(t){return t.Su||(t.Su=function(e,n,r){const i=te(e);return i.fu(),new XO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{uo:tD.bind(null,t),ao:nD.bind(null,t),nu:rD.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Qo(),wm(t)?vm(t):t.bu.set("Unknown")):(await t.Su.stop(),H_(t))})),t.Su}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Wr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Em(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function q_(t,e){if(bn("AsyncQueue",`${e}: ${t}`),_a(t))return new F(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e){this.comparator=e?(n,r)=>e(n,r)||V.comparator(n.key,r.key):(n,r)=>V.comparator(n.key,r.key),this.keyedMap=Us(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new Ki(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ki)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ki;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(){this.Cu=new Me(V.comparator)}track(e){const n=e.doc.key,r=this.Cu.get(n);r?e.type!==0&&r.type===3?this.Cu=this.Cu.insert(n,e):e.type===3&&r.type!==1?this.Cu=this.Cu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Cu=this.Cu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Cu=this.Cu.remove(n):e.type===1&&r.type===2?this.Cu=this.Cu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Cu=this.Cu.insert(n,{type:2,doc:e.doc}):K():this.Cu=this.Cu.insert(n,e)}xu(){const e=[];return this.Cu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ls{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ls(e,n,Ki.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(){this.Nu=void 0,this.listeners=[]}}class oD{constructor(){this.queries=new vs(e=>E_(e),hc),this.onlineState="Unknown",this.ku=new Set}}async function aD(t,e){const n=te(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new sD),i)try{s.Nu=await n.onListen(r)}catch(o){const a=q_(o,`Initialization of query '${hf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Mu(n.onlineState),s.Nu&&e.$u(s.Nu)&&_m(n)}async function lD(t,e){const n=te(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function uD(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.$u(i)&&(r=!0);o.Nu=i}}r&&_m(n)}function cD(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function _m(t){t.ku.forEach(e=>{e.next()})}class hD{constructor(e,n,r){this.query=e,this.Ou=n,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=r||{}}$u(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ls(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),n=!0):this.qu(e,this.onlineState)&&(this.Uu(e),n=!0),this.Bu=e,n}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let n=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),n=!0),n}qu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ku||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const n=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Uu(e){e=ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e){this.key=e}}class W_{constructor(e){this.key=e}}class dD{constructor(e,n){this.query=e,this.Yu=n,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=J(),this.mutatedKeys=J(),this.tc=__(e),this.ec=new Ki(this.tc)}get nc(){return this.Yu}sc(e,n){const r=n?n.ic:new hv,i=n?n.ec:this.ec;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const c=i.get(h),p=dc(this.query,f)?f:null,g=!!c&&this.mutatedKeys.has(c.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let T=!1;c&&p?c.data.isEqual(p.data)?g!==v&&(r.track({type:3,doc:p}),T=!0):this.rc(c,p)||(r.track({type:2,doc:p}),T=!0,(l&&this.tc(p,l)>0||u&&this.tc(p,u)<0)&&(a=!0)):!c&&p?(r.track({type:0,doc:p}),T=!0):c&&!p&&(r.track({type:1,doc:c}),T=!0,(l||u)&&(a=!0)),T&&(p?(o=o.add(p),s=v?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{ec:o,ic:r,zi:a,mutatedKeys:s}}rc(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const s=e.ic.xu();s.sort((u,h)=>function(f,c){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return p(f)-p(c)}(u.type,h.type)||this.tc(u.doc,h.doc)),this.oc(r);const o=n?this.uc():[],a=this.Zu.size===0&&this.current?1:0,l=a!==this.Xu;return this.Xu=a,s.length!==0||l?{snapshot:new ls(this.query,e.ec,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new hv,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(n=>this.Yu=this.Yu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Yu=this.Yu.delete(n)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=J(),this.ec.forEach(r=>{this.ac(r.key)&&(this.Zu=this.Zu.add(r.key))});const n=[];return e.forEach(r=>{this.Zu.has(r)||n.push(new W_(r))}),this.Zu.forEach(r=>{e.has(r)||n.push(new K_(r))}),n}hc(e){this.Yu=e.ir,this.Zu=J();const n=this.sc(e.documents);return this.applyChanges(n,!0)}lc(){return ls.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class fD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pD{constructor(e){this.key=e,this.fc=!1}}class mD{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new vs(a=>E_(a),hc),this._c=new Map,this.mc=new Set,this.gc=new Me(V.comparator),this.yc=new Map,this.Ic=new pm,this.Tc={},this.Ec=new Map,this.Ac=as.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function gD(t,e){const n=TD(t);let r,i;const s=n.wc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.lc();else{const o=await BO(n.localStore,Mn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await yD(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&V_(n.remoteStore,o)}return i}async function yD(t,e,n,r,i){t.Rc=(f,c,p)=>async function(g,v,T,m){let d=v.view.sc(T);d.zi&&(d=await ov(g.localStore,v.query,!1).then(({documents:I})=>v.view.sc(I,d)));const y=m&&m.targetChanges.get(v.targetId),E=v.view.applyChanges(d,g.isPrimaryClient,y);return fv(g,v.targetId,E.cc),E.snapshot}(t,f,c,p);const s=await ov(t.localStore,e,!0),o=new dD(e,s.ir),a=o.sc(s.documents),l=Sa.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);fv(t,n,u.cc);const h=new fD(e,n,o);return t.wc.set(e,h),t._c.has(n)?t._c.get(n).push(e):t._c.set(n,[e]),u.snapshot}async function vD(t,e){const n=te(t),r=n.wc.get(e),i=n._c.get(r.targetId);if(i.length>1)return n._c.set(r.targetId,i.filter(s=>!hc(s,e))),void n.wc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await gf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),z_(n.remoteStore,r.targetId),yf(n,r.targetId)}).catch(tm)):(yf(n,r.targetId),await gf(n.localStore,r.targetId,!0))}async function G_(t,e){const n=te(t);try{const r=await VO(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.yc.get(s);o&&(Re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.fc=!0:i.modifiedDocuments.size>0?Re(o.fc):i.removedDocuments.size>0&&(Re(o.fc),o.fc=!1))}),await Y_(n,r,e)}catch(r){await tm(r)}}function dv(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.wc.forEach((s,o)=>{const a=o.view.Mu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=te(s);a.onlineState=o;let l=!1;a.queries.forEach((u,h)=>{for(const f of h.listeners)f.Mu(o)&&(l=!0)}),l&&_m(a)}(r.eventManager,e),i.length&&r.dc.nu(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wD(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.yc.get(e),s=i&&i.key;if(s){let o=new Me(V.comparator);o=o.insert(s,Ln.newNoDocument(s,W.min()));const a=J().add(s),l=new mc(W.min(),new Map,new Me(re),o,a);await G_(r,l),r.gc=r.gc.remove(s),r.yc.delete(e),Sm(r)}else await gf(r.localStore,e,!1).then(()=>yf(r,e,n)).catch(tm)}function yf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t._c.get(e))t.wc.delete(r),n&&t.dc.Pc(r,n);t._c.delete(e),t.isPrimaryClient&&t.Ic.Is(e).forEach(r=>{t.Ic.containsKey(r)||Q_(t,r)})}function Q_(t,e){t.mc.delete(e.path.canonicalString());const n=t.gc.get(e);n!==null&&(z_(t.remoteStore,n),t.gc=t.gc.remove(e),t.yc.delete(n),Sm(t))}function fv(t,e,n){for(const r of n)r instanceof K_?(t.Ic.addReference(r.key,e),ED(t,r)):r instanceof W_?(b("SyncEngine","Document no longer in limbo: "+r.key),t.Ic.removeReference(r.key,e),t.Ic.containsKey(r.key)||Q_(t,r.key)):K()}function ED(t,e){const n=e.key,r=n.path.canonicalString();t.gc.get(n)||t.mc.has(r)||(b("SyncEngine","New document in limbo: "+n),t.mc.add(r),Sm(t))}function Sm(t){for(;t.mc.size>0&&t.gc.size<t.maxConcurrentLimboResolutions;){const e=t.mc.values().next().value;t.mc.delete(e);const n=new V(De.fromString(e)),r=t.Ac.next();t.yc.set(r,new pD(n)),t.gc=t.gc.insert(n,r),V_(t.remoteStore,new fm(Mn(lm(n.path)),r,"TargetPurposeLimboResolution",nm.ct))}}async function Y_(t,e,n){const r=te(t),i=[],s=[],o=[];r.wc.isEmpty()||(r.wc.forEach((a,l)=>{o.push(r.Rc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const h=gm.Li(l.targetId,u);s.push(h)}}))}),await Promise.all(o),r.dc.nu(i),await async function(a,l){const u=te(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(l,f=>P.forEach(f.Fi,c=>u.persistence.referenceDelegate.addReference(h,f.targetId,c)).next(()=>P.forEach(f.Bi,c=>u.persistence.referenceDelegate.removeReference(h,f.targetId,c)))))}catch(h){if(!_a(h))throw h;b("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const f=h.targetId;if(!h.fromCache){const c=u.Ji.get(f),p=c.snapshotVersion,g=c.withLastLimboFreeSnapshotVersion(p);u.Ji=u.Ji.insert(f,g)}}}(r.localStore,s))}async function _D(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const r=await M_(n.localStore,e);n.currentUser=e,function(i,s){i.Ec.forEach(o=>{o.forEach(a=>{a.reject(new F(A.CANCELLED,s))})}),i.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Y_(n,r.er)}}function SD(t,e){const n=te(t),r=n.yc.get(e);if(r&&r.fc)return J().add(r.key);{let i=J();const s=n._c.get(e);if(!s)return i;for(const o of s){const a=n.wc.get(o);i=i.unionWith(a.view.nc)}return i}}function TD(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=G_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wD.bind(null,e),e.dc.nu=uD.bind(null,e.eventManager),e.dc.Pc=cD.bind(null,e.eventManager),e}class pv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=j_(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return UO(this.persistence,new FO,e.initialUser,this.serializer)}createPersistence(e){return new LO(mm.zs,this.serializer)}createSharedClientState(e){return new qO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class kD{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=_D.bind(null,this.syncEngine),await iD(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new oD}createDatastore(e){const n=j_(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new QO(i));var i;return function(s,o,a,l){return new JO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>dv(this.syncEngine,a,0),o=lv.D()?new lv:new KO,new eD(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const h=new mD(r,i,s,o,a,l);return u&&(h.vc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=te(e);b("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await Ta(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):bn("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Qe.UNAUTHENTICATED,this.clientId=h_.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{b("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(b("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new F(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Wr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=q_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Sh(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await M_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function mv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ND(t);b("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>cv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>cv(e.remoteStore,s)),t._onlineComponents=e}function xD(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ND(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){b("FirestoreClient","Using user provided OfflineComponentProvider");try{await Sh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!xD(n))throw n;rs("Error using user provided cache. Falling back to memory cache: "+n),await Sh(t,new pv)}}else b("FirestoreClient","Using default OfflineComponentProvider"),await Sh(t,new pv);return t._offlineComponents}async function RD(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(b("FirestoreClient","Using user provided OnlineComponentProvider"),await mv(t,t._uninitializedComponentsProvider._online)):(b("FirestoreClient","Using default OnlineComponentProvider"),await mv(t,new kD))),t._onlineComponents}async function PD(t){const e=await RD(t),n=e.eventManager;return n.onListen=gD.bind(null,e.syncEngine),n.onUnlisten=vD.bind(null,e.syncEngine),n}function AD(t,e,n={}){const r=new Wr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new ID({next:f=>{s.enqueueAndForget(()=>lD(i,h));const c=f.docs.has(o);!c&&f.fromCache?l.reject(new F(A.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&f.fromCache&&a&&a.source==="server"?l.reject(new F(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(f)},error:f=>l.reject(f)}),h=new hD(lm(o.path),u,{includeMetadataChanges:!0,Ku:!0});return aD(i,h)}(await PD(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OD(t,e,n){if(!n)throw new F(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DD(t,e,n,r){if(e===!0&&r===!0)throw new F(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function yv(t){if(!V.isDocumentKey(t))throw new F(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function $D(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function vf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$D(t);throw new F(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=X_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Tm{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new F(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new F(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new lA;switch(n.type){case"firstParty":return new dA(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=gv.get(e);n&&(b("ComponentProvider","Removing Datastore"),gv.delete(e),n.terminate())}(this),Promise.resolve()}}function bD(t,e,n,r={}){var i;const s=(t=vf(t,Tm))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&rs("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=Qe.MOCK_USER;else{o=Sw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new F(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Qe(l)}t._authCredentials=new uA(new c_(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ho(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Nn(this.firestore,e,this._key)}}class km{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new km(this.firestore,e,this._query)}}class Ho extends km{constructor(e,n,r){super(e,n,lm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Nn(this.firestore,null,new V(e))}withConverter(e){return new Ho(this.firestore,e,this._path)}}function LD(t,e,...n){if(t=vt(t),arguments.length===1&&(e=h_.A()),OD("doc","path",e),t instanceof Tm){const r=De.fromString(e,...n);return yv(r),new Nn(t,null,new V(r))}{if(!(t instanceof Nn||t instanceof Ho))throw new F(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return yv(r),new Nn(t.firestore,t instanceof Ho?t.converter:null,new V(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MD{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new U_(this,"async_queue_retry"),this.Xc=()=>{const n=_h();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=_h();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=_h();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Wr;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!_a(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(r=>{this.Wc=r,this.Hc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw bn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Hc=!1,r))));return this.Gc=n,n}enqueueAfterDelay(e,n,r){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const i=Em.createAndSchedule(this,e,n,r,s=>this.na(s));return this.zc.push(i),i}Zc(){this.Wc&&K()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class J_ extends Tm{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new MD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Z_(this),this._firestoreClient.terminate()}}function FD(t,e){const n=typeof t=="object"?t:Tp(),r=typeof t=="string"?t:e||"(default)",i=Bu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=ww("firestore");s&&bD(i,...s)}return i}function jD(t){return t._firestoreClient||Z_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Z_(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new kA(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,X_(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new CD(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e){this._byteString=e}static fromBase64String(e){try{return new gu(nt.fromBase64String(e))}catch(n){throw new F(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new gu(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}const VD=new RegExp("[~\\*/\\[\\]]");function zD(t,e,n){if(e.search(VD)>=0)throw wv(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new eS(...e.split("."))._internalPath}catch{throw wv(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wv(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new F(A.INVALID_ARGUMENT,a+t+l)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Nn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(nS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class BD extends tS{data(){return super.data()}}function nS(t,e){return typeof e=="string"?zD(t,e):e instanceof eS?e._internalPath:e._delegate._internalPath}class HD{convertValue(e,n="none"){switch(si(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Se(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return uc(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new UD(Se(e.latitude),Se(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=im(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vo(e));default:return null}}convertTimestamp(e){const n=gr(e);return new un(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Re(L_(r));const i=new zo(r.get(1),r.get(3)),s=new V(r.popFirst(5));return i.isEqual(n)||bn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rS extends tS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new KD(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(nS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class KD extends rS{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WD(t){t=vf(t,Nn);const e=vf(t.firestore,J_);return AD(jD(e),t._key).then(n=>QD(e,t,n))}class GD extends HD{constructor(e){super(),this.firestore=e}convertBytes(e){return new gu(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Nn(this.firestore,null,n)}}function QD(t,e,n){const r=n.docs.get(e._key),i=new GD(t);return new rS(t,i,e._key,r,new qD(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){ys=n})(di),ti(new mr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new J_(new cA(n.getProvider("auth-internal")),new pA(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new F(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new zo(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),on(jy,"3.12.1",t),on(jy,"3.12.1","esm2017")})();const YD=t=>{const[e,n]=N.useState(t.prop.loadedData),[r,i]=N.useState([]),[s,o]=N.useState("hidden"),[a,l]=N.useState(!1),[u,h]=N.useState(0),[f,c]=N.useState(""),[p,g]=N.useState(!1),v=async()=>(await WD(LD(FD(),"admin","email"))).data().email;N.useEffect(()=>{t.authStateChanged()},[a,p]);async function T(){var M=new _n;await cR(Dr(),M).then(l(!!Dr().currentUser)).then(await v()===t.prop.currentUser.email?g(!0):g(!1))}async function m(){await B2(Dr()).then(l(!!Dr().currentUser)).then(await v()===t.prop.user.email?g(!0):g(!1))}function d(){return Dr().currentUser.displayName}function y(){return Dr().currentUser.photoURL||"/assets/img/category/default-category.svg"}const E=M=>{M.preventDefault(),c(M.target.value)},I=()=>{s==="hidden"&&o("visible")},w=()=>{s==="visible"&&o("hidden")},_=M=>{i([...r,M]),C()},k=M=>{const ne=r.findIndex(oe=>oe.id===parseFloat(M));if(ne!==-1){const oe=[...r];oe.splice(ne,1),i(oe)}C()},C=()=>{h(0),r.forEach(M=>{h(ne=>ne+M.price)})},R=M=>{t.saveForm(M)},L=()=>{t.setToDefault()},j=M=>{t.deleteProduct(M)};return S.jsx(S.Fragment,{children:S.jsxs(JI,{children:[S.jsxs("div",{className:Yt.nav,children:[S.jsxs("ul",{children:[S.jsx("li",{children:S.jsx(bs,{to:"/",children:"Home"})}),S.jsx("li",{children:S.jsx(bs,{to:"/shop",children:"Shop"})}),S.jsx("li",{children:S.jsx(bs,{to:"/contact",children:"Contact"})}),p&&S.jsx("li",{children:S.jsx(bs,{to:"/admin",children:"Admin"})})]}),S.jsx("input",{type:"text",placeholder:"Search here",className:Yt.search,value:f,onChange:E}),a?S.jsxs("div",{className:Yt.userContainer,children:[S.jsxs("div",{className:Yt.userInfo,children:[S.jsx("img",{className:Yt.userImg,src:y(),alt:"User photo"}),S.jsx("p",{children:d()})]}),S.jsx("button",{onClick:m,children:"Sign out"})]}):S.jsx("div",{className:Yt.userContainer,children:S.jsx("button",{onClick:T,children:"Sign in Google"})}),S.jsxs("div",{className:Yt.cart,onClick:I,children:[S.jsx("img",{className:Yt.cartImg,src:dw,alt:"Cart"}),r.length>0&&S.jsx("div",{className:Yt.cartNum,children:r.length}),S.jsx(Ep.Fade,{right:!0,when:s==="visible",children:S.jsx("div",{className:Yt.bar,style:{visibility:s},children:S.jsx(xx,{prop:{itemsInCart:r,totalPrice:u},closeCart:w,deleteFromCart:k,calculateTotalPrice:C})})})]})]}),f.length>0?S.jsx(Jg,{prop:{productList:e,searchInput:f},addToCart:_}):S.jsxs(WI,{children:[S.jsx(Ar,{path:"/",element:S.jsx(wC,{})}),S.jsx(Ar,{path:"/shop",element:S.jsx(xC,{prop:{productList:e}})}),S.jsx(Ar,{path:"/shop/:category",element:S.jsx(Jg,{prop:{productList:e,searchInput:f},addToCart:_})}),S.jsx(Ar,{path:"/contact",element:S.jsx($C,{})}),p&&S.jsx(Ar,{path:"/Admin",element:S.jsx(fx,{prop:{productList:e},saveForm:R,setToDefault:L,deleteProduct:j})}),S.jsx(Ar,{path:"*",element:S.jsx(GC,{})})]})]})})};var XD="firebase",JD="9.22.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on(XD,JD,"app");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Es="9.22.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new zu("@firebase/firestore");function yu(t,...e){if(us.logLevel<=Q.DEBUG){const n=e.map(Cm);us.debug(`Firestore (${Es}): ${t}`,...n)}}function Im(t,...e){if(us.logLevel<=Q.ERROR){const n=e.map(Cm);us.error(`Firestore (${Es}): ${t}`,...n)}}function iS(t,...e){if(us.logLevel<=Q.WARN){const n=e.map(Cm);us.warn(`Firestore (${Es}): ${t}`,...n)}}function Cm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(t="Unexpected state"){const e=`FIRESTORE (${Es}) INTERNAL ASSERTION FAILED: `+t;throw Im(e),new Error(e)}function vr(t,e){t||ye()}function yc(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="ok",ZD="cancelled",io="unknown",Z="invalid-argument",e$="deadline-exceeded",t$="not-found",n$="permission-denied",wf="unauthenticated",r$="resource-exhausted",cs="failed-precondition",i$="aborted",s$="out-of-range",sS="unimplemented",o$="internal",a$="unavailable";class H extends pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class l${getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ht.UNAUTHENTICATED))}shutdown(){}}class u${constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class c${constructor(e){this.auth=null,e.onInit(n=>{this.auth=n})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(vr(typeof e.accessToken=="string"),new oS(e.accessToken,new ht(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}class h${constructor(e,n,r){this.t=e,this.i=n,this.o=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.u=new Map}h(){return this.o?this.o():null}get headers(){this.u.set("X-Goog-AuthUser",this.t);const e=this.h();return e&&this.u.set("Authorization",e),this.i&&this.u.set("X-Goog-Iam-Authorization-Token",this.i),this.u}}class d${constructor(e,n,r){this.t=e,this.i=n,this.o=r}getToken(){return Promise.resolve(new h$(this.t,this.i,this.o))}start(e,n){e.enqueueRetryable(()=>n(ht.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class f${constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class p${constructor(e){this.l=e,this.appCheck=null,e.onInit(n=>{this.appCheck=n})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(vr(typeof e.token=="string"),new f$(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,n){}shutdown(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m${constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class qo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qo&&e.projectId===this.projectId&&e.database===this.database}}class Ko{constructor(e,n,r){n===void 0?n=0:n>e.length&&ye(),r===void 0?r=e.length-n:r>e.length-n&&ye(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ko.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ko?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class $e extends Ko{construct(e,n,r){return new $e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(Z,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const g$=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Et extends Ko{construct(e,n,r){return new Et(e,n,r)}static isValidIdentifier(e){return g$.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(Z,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new H(Z,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new H(Z,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new H(Z,"Unterminated ` in path: "+e);return new Et(n)}static emptyPath(){return new Et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.path=e}static fromPath(e){return new st($e.fromString(e))}static fromName(e){return new st($e.fromString(e).popFirst(5))}static empty(){return new st($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new st(new $e(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(t,e,n){if(!n)throw new H(Z,`Function ${t}() cannot be called with an empty ${e}.`)}function _v(t){if(!st.isDocumentKey(t))throw new H(Z,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Sv(t){if(st.isDocumentKey(t))throw new H(Z,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ye()}function vc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(Z,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xm(t);throw new H(Z,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el=null;function y$(){return el===null?el=268435456+Math.round(2147483648*Math.random()):el++,"0x"+el.toString(16)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v$(t){return t==null}function vu(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tv,X;function kv(t){if(t===void 0)return Im("RPC_ERROR","HTTP error has no status"),io;switch(t){case 200:return Ev;case 400:return cs;case 401:return wf;case 403:return n$;case 404:return t$;case 409:return i$;case 416:return s$;case 429:return r$;case 499:return ZD;case 500:return io;case 501:return sS;case 503:return a$;case 504:return e$;default:return t>=200&&t<300?Ev:t>=400&&t<500?cs:t>=500&&t<600?o$:io}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(X=Tv||(Tv={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";class E$ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.m=n+"://"+e.host,this.p="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get g(){return!1}v(e,n,r,i,s){const o=y$(),a=this.I(e,n);yu("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.T(l,i,s),this.A(e,a,l,r).then(u=>(yu("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw iS("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}R(e,n,r,i,s,o){return this.v(e,n,r,i,s)}T(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Es,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}I(e,n){const r=w$[e];return`${this.m}/v1/${n}:${r}`}}{constructor(e,n){super(e),this.P=n}V(e,n){throw new Error("Not supported by FetchConnection")}async A(e,n,r,i){var s;const o=JSON.stringify(i);let a;try{a=await this.P(n,{method:"POST",headers:r,body:o})}catch(l){const u=l;throw new H(kv(u.status),"Request failed with error: "+u.statusText)}if(!a.ok){let l=await a.json();Array.isArray(l)&&(l=l[0]);const u=(s=l==null?void 0:l.error)===null||s===void 0?void 0:s.message;throw new H(kv(a.status),`Request failed with error: ${u??a.statusText}`)}return a.json()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _$(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S${static N(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=_$(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Pe(t,e){return t<e?-1:t>e?1:0}function uS(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function wc(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T$ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new T$("Invalid base64 string: "+i):i}}(e);return new Fn(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Fn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fn.EMPTY_BYTE_STRING=new Fn("");const k$=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function oi(t){if(vr(!!t),typeof t=="string"){let e=0;const n=k$.exec(t);if(vr(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ce(t.seconds),nanos:Ce(t.nanos)}}function Ce(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wo(t){return typeof t=="string"?Fn.fromBase64String(t):Fn.fromUint8Array(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(Z,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(Z,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(Z,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(Z,"Timestamp seconds out of range: "+e)}static now(){return kt.fromMillis(Date.now())}static fromDate(e){return kt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new kt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function hS(t){const e=t.mapValue.fields.__previous_value__;return cS(e)?hS(e):e}function Go(t){const e=oi(t.mapValue.fields.__local_write_time__.timestampValue);return new kt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl={fields:{__type__:{stringValue:"__max__"}}};function ai(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?cS(t)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(t)?9007199254740991:10:ye()}function wu(t,e){if(t===e)return!0;const n=ai(t);if(n!==ai(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Go(t).isEqual(Go(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=oi(r.timestampValue),o=oi(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Wo(r.bytesValue).isEqual(Wo(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ce(r.geoPointValue.latitude)===Ce(i.geoPointValue.latitude)&&Ce(r.geoPointValue.longitude)===Ce(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ce(r.integerValue)===Ce(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ce(r.doubleValue),o=Ce(i.doubleValue);return s===o?vu(s)===vu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return uS(t.arrayValue.values||[],e.arrayValue.values||[],wu);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Iv(s)!==Iv(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!wu(s[a],o[a])))return!1;return!0}(t,e);default:return ye()}}function Qo(t,e){return(t.values||[]).find(n=>wu(n,e))!==void 0}function Eu(t,e){if(t===e)return 0;const n=ai(t),r=ai(e);if(n!==r)return Pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ce(i.integerValue||i.doubleValue),a=Ce(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Cv(t.timestampValue,e.timestampValue);case 4:return Cv(Go(t),Go(e));case 5:return Pe(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Wo(i),a=Wo(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Pe(o[l],a[l]);if(u!==0)return u}return Pe(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Pe(Ce(i.latitude),Ce(s.latitude));return o!==0?o:Pe(Ce(i.longitude),Ce(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Eu(o[l],a[l]);if(u)return u}return Pe(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===tl&&s===tl)return 0;if(i===tl)return 1;if(s===tl)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const f=Pe(a[h],u[h]);if(f!==0)return f;const c=Eu(o[a[h]],l[u[h]]);if(c!==0)return c}return Pe(a.length,u.length)}(t.mapValue,e.mapValue);default:throw ye()}}function Cv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);const n=oi(t),r=oi(e),i=Pe(n.seconds,r.seconds);return i!==0?i:Pe(n.nanos,r.nanos)}function dS(t){return!!t&&"arrayValue"in t}function xv(t){return!!t&&"nullValue"in t}function Nv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Th(t){return!!t&&"mapValue"in t}function so(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return wc(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=so(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=so(t.arrayValue.values[n]);return e}return Object.assign({},t)}class Rv{constructor(e,n){this.position=e,this.inclusive=n}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{}class mn extends fS{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new I$(e,n,r):n==="array-contains"?new N$(e,r):n==="in"?new R$(e,r):n==="not-in"?new P$(e,r):n==="array-contains-any"?new A$(e,r):new mn(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new C$(e,r):new x$(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Eu(n,this.value)):n!==null&&ai(this.value)===ai(n)&&this.matchesComparison(Eu(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ye()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ec extends fS{constructor(e,n){super(),this.filters=e,this.op=n,this.D=null}static create(e,n){return new Ec(e,n)}matches(e){return this.op==="and"?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.D!==null||(this.D=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.D}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.F(n=>n.isInequality());return e!==null?e.field:null}F(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}class I$ extends mn{constructor(e,n,r){super(e,n,r),this.key=st.fromName(r.referenceValue)}matches(e){const n=st.comparator(e.key,this.key);return this.matchesComparison(n)}}class C$ extends mn{constructor(e,n){super(e,"in",n),this.keys=pS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class x$ extends mn{constructor(e,n){super(e,"not-in",n),this.keys=pS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function pS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>st.fromName(r.referenceValue))}class N$ extends mn{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dS(n)&&Qo(n.arrayValue,this.value)}}class R$ extends mn{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Qo(this.value.arrayValue,n)}}class P$ extends mn{constructor(e,n){super(e,"not-in",n)}matches(e){if(Qo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Qo(this.value.arrayValue,n)}}class A$ extends mn{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dS(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Qo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,n="asc"){this.field=e,this.dir=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ge(e)}static min(){return new Ge(new kt(0,0))}static max(){return new Ge(new kt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new _u(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new _u(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nl(this.root,e,this.comparator,!1)}getReverseIterator(){return new nl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nl(this.root,e,this.comparator,!0)}}class nl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??Ue.EMPTY,this.right=s??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ye();const e=this.left.check();if(e!==this.right.check())throw ye();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw ye()}get value(){throw ye()}get color(){throw ye()}get left(){throw ye()}get right(){throw ye()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ue(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e){this.comparator=e,this.data=new _u(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Pv(this.data.getIterator())}getIteratorFrom(e){return new Pv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Su)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Su(this.comparator);return n.data=e,n}}class Pv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e){this.fields=e,e.sort(Et.comparator)}static empty(){return new Yo([])}unionWith(e){let n=new Su(Et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yo(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return uS(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.value=e}static empty(){return new en({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Th(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=so(n)}setAll(e){let n=Et.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=so(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Th(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wu(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Th(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){wc(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new en(so(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new qn(e,0,Ge.min(),Ge.min(),Ge.min(),en.empty(),0)}static newFoundDocument(e,n,r,i){return new qn(e,1,n,Ge.min(),r,i,0)}static newNoDocument(e,n){return new qn(e,2,n,Ge.min(),Ge.min(),en.empty(),0)}static newUnknownDocument(e,n){return new qn(e,3,n,Ge.min(),Ge.min(),en.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=en.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=en.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof qn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new qn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O${constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.S=null}}function Av(t,e=null,n=[],r=[],i=null,s=null,o=null){return new O$(t,e,n,r,i,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D${constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.q=null,this.O=null,this.startAt,this.endAt}}function $$(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function b$(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Ov(t){const e=yc(t);if(e.q===null){e.q=[];const n=b$(e),r=$$(e);if(n!==null&&r===null)n.isKeyField()||e.q.push(new kl(n)),e.q.push(new kl(Et.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.q.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.q.push(new kl(Et.keyField(),s))}}}return e.q}function L$(t){const e=yc(t);if(!e.O)if(e.limitType==="F")e.O=Av(e.path,e.collectionGroup,Ov(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ov(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new kl(s.field,o))}const r=e.endAt?new Rv(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Rv(e.startAt.position,e.startAt.inclusive):null;e.O=Av(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.O}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M$(t,e){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!vu(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(e)?function(n){return{integerValue:""+n}}(e):function(n,r){if(n.useProto3Json){if(isNaN(r))return{doubleValue:"NaN"};if(r===1/0)return{doubleValue:"Infinity"};if(r===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vu(r)?"-0":r}}(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(){this._=void 0}}class F$ extends _c{}class j$ extends _c{constructor(e){super(),this.elements=e}}class U$ extends _c{constructor(e){super(),this.elements=e}}class V$ extends _c{constructor(e,n){super(),this.serializer=e,this.k=n}}class Wi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Wi}static exists(e){return new Wi(void 0,e)}static updateTime(e){return new Wi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Sc{}class mS extends Sc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class gS extends Sc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}class yS extends Sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class z$ extends Sc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B$=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),H$=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),q$=(()=>({and:"AND",or:"OR"}))();class K${constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ef(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function W$(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function G$(t,e){return Ef(t,e.toTimestamp())}function Dv(t){return vr(!!t),Ge.fromTimestamp(function(e){const n=oi(e);return new kt(n.seconds,n.nanos)}(t))}function Nm(t,e){return function(n){return new $e(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function _f(t,e){return Nm(t.databaseId,e.path)}function Q$(t,e){const n=function(i){const s=$e.fromString(i);return vr(wS(s)),s}(e);if(n.get(1)!==t.databaseId.projectId)throw new H(Z,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(Z,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new st((vr((r=n).length>4&&r.get(4)==="documents"),r.popFirst(5)));var r}function $v(t,e){return Nm(t.databaseId,e)}function Y$(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bv(t,e,n){return{name:_f(t,e),fields:n.value.mapValue.fields}}function X$(t,e){let n;if(e instanceof mS)n={update:bv(t,e.key,e.value)};else if(e instanceof yS)n={delete:_f(t,e.key)};else if(e instanceof gS)n={update:bv(t,e.key,e.data),updateMask:nb(e.fieldMask)};else{if(!(e instanceof z$))return ye();n={verify:_f(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof F$)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof j$)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof U$)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof V$)return{fieldPath:s.field.canonicalString(),increment:o.k};throw ye()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:G$(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ye()}(t,e.precondition)),n}function J$(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=$v(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=$v(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return vS(Ec.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Ei(h.field),direction:Z$(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.useProto3Json||v$(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function Z$(t){return B$[t]}function eb(t){return H$[t]}function tb(t){return q$[t]}function Ei(t){return{fieldPath:t.canonicalString()}}function vS(t){return t instanceof mn?function(e){if(e.op==="=="){if(Nv(e.value))return{unaryFilter:{field:Ei(e.field),op:"IS_NAN"}};if(xv(e.value))return{unaryFilter:{field:Ei(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Nv(e.value))return{unaryFilter:{field:Ei(e.field),op:"IS_NOT_NAN"}};if(xv(e.value))return{unaryFilter:{field:Ei(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ei(e.field),op:eb(e.op),value:e.value}}}(t):t instanceof Ec?function(e){const n=e.getFilters().map(r=>vS(r));return n.length===1?n[0]:{compositeFilter:{op:tb(e.op),filters:n}}}(t):ye()}function nb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function wS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(t){return new K$(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.J=!1}X(){if(this.J)throw new H(cs,"The client has already been terminated.")}v(e,n,r){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.v(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===wf&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(io,i.toString())})}R(e,n,r,i){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.R(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===wf&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(io,s.toString())})}terminate(){this.J=!0}}async function ES(t,e){const n=yc(t),r=Y$(n.serializer)+"/documents",i={writes:e.map(s=>X$(n.serializer,s))};await n.v("Commit",r,i)}async function ib(t,e){const n=yc(t),r=J$(n.serializer,L$(e));return(await n.R("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(i=>!!i.document).map(i=>function(s,o,a){const l=Q$(s,o.name),u=Dv(o.updateTime),h=o.createTime?Dv(o.createTime):Ge.min(),f=new en({mapValue:{fields:o.fields}}),c=qn.newFoundDocument(l,u,h,f);return a&&c.setHasCommittedMutations(),a?c.setHasCommittedMutations():c}(n.serializer,i.document,void 0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo=new Map;function Pm(t){if(t._terminated)throw new H(cs,"The client has already been terminated.");if(!oo.has(t)){yu("ComponentProvider","Initializing Datastore");const s=function(l){return new E$(l,fetch.bind(null))}((e=t._databaseId,n=t.app.options.appId||"",r=t._persistenceKey,i=t._freezeSettings(),new m$(e,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,lS(i.experimentalLongPollingOptions),i.useFetchStreams))),o=Rm(t._databaseId),a=function(l,u,h,f){return new rb(l,u,h,f)}(t._authCredentials,t._appCheckCredentials,s,o);oo.set(t,a)}var e,n,r,i;/**
* @license
* Copyright 2018 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return oo.get(t)}class Lv{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(Z,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(Z,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(i,s,o,a){if(s===!0&&a===!0)throw new H(Z,`${i} and ${o} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=lS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(Z,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(Z,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(Z,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,r=e.experimentalLongPollingOptions,n.timeoutSeconds===r.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,r}}class Tc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new H(cs,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new H(cs,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new l$;switch(n.type){case"firstParty":return new d$(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new H(Z,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=oo.get(e);n&&(yu("ComponentProvider","Removing Datastore"),oo.delete(e),n.terminate())}(this),Promise.resolve()}}function kc(t,e){const n=typeof t=="object"?t:Tp(),r=typeof t=="string"?t:e||"(default)",i=Bu(n,"firestore/lite").getImmediate({identifier:r});if(!i._initialized){const s=ww("firestore");s&&sb(i,...s)}return i}function sb(t,e,n,r={}){var i;const s=(t=vc(t,Tc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&iS("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ht.MOCK_USER;else{o=Sw(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new H(Z,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ht(l)}t._authCredentials=new u$(new oS(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class Ic{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ic(this.firestore,e,this._query)}}class dr extends Ic{constructor(e,n,r){super(e,n,new D$(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new st(e))}withConverter(e){return new dr(this.firestore,e,this._path)}}function ob(t,e,...n){if(t=vt(t),aS("collection","path",e),t instanceof Tc){const r=$e.fromString(e,...n);return Sv(r),new dr(t,null,r)}{if(!(t instanceof It||t instanceof dr))throw new H(Z,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return Sv(r),new dr(t.firestore,null,r)}}function Am(t,e,...n){if(t=vt(t),arguments.length===1&&(e=S$.N()),aS("doc","path",e),t instanceof Tc){const r=$e.fromString(e,...n);return _v(r),new It(t,null,new st(r))}{if(!(t instanceof It||t instanceof dr))throw new H(Z,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return _v(r),new It(t.firestore,t instanceof dr?t.converter:null,new st(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new hs(Fn.fromBase64String(e))}catch(n){throw new H(Z,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new hs(Fn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(Z,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _S{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(Z,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(Z,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=/^__.*__$/;class lb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new gS(e,this.data,this.fieldMask,n,this.fieldTransforms):new mS(e,this.data,n,this.fieldTransforms)}}function SS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ye()}}class $m{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.tt(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get et(){return this.settings.et}nt(e){return new $m(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}rt(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.nt({path:r,st:!1});return i.it(e),i}ot(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.nt({path:r,st:!1});return i.tt(),i}ut(e){return this.nt({path:void 0,st:!0})}ct(e){return Tu(e,this.settings.methodName,this.settings.ht||!1,this.path,this.settings.lt)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}tt(){if(this.path)for(let e=0;e<this.path.length;e++)this.it(this.path.get(e))}it(e){if(e.length===0)throw this.ct("Document fields must not be empty");if(SS(this.et)&&ab.test(e))throw this.ct('Document fields cannot begin and end with "__"')}}class ub{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Rm(e)}ft(e,n,r,i=!1){return new $m({et:e,methodName:n,lt:r,path:Et.emptyPath(),st:!1,ht:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cb(t){const e=t._freezeSettings(),n=Rm(t._databaseId);return new ub(t._databaseId,!!e.ignoreUndefinedProperties,n)}function hb(t,e,n,r,i,s={}){const o=t.ft(s.merge||s.mergeFields?2:0,e,n,i);CS("Data must be an object, but it was:",o,r);const a=kS(r,o);let l,u;if(s.merge)l=new Yo(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const c=db(e,f,n);if(!o.contains(c))throw new H(Z,`Field '${c}' is specified in your field mask but missing from your input data.`);pb(h,c)||h.push(c)}l=new Yo(h),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new lb(new en(a),l,u)}function TS(t,e){if(IS(t=vt(t)))return CS("Unsupported field value:",e,t),kS(t,e);if(t instanceof _S)return function(n,r){if(!SS(r.et))throw r.ct(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ct(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.st&&e.et!==4)throw e.ct("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=TS(o,r.ut(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=vt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return M$(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=kt.fromDate(n);return{timestampValue:Ef(r.serializer,i)}}if(n instanceof kt){const i=new kt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ef(r.serializer,i)}}if(n instanceof Dm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof hs)return{bytesValue:W$(r.serializer,n._byteString)};if(n instanceof It){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ct(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Nm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ct(`Unsupported field value: ${xm(n)}`)}(t,e)}function kS(t,e){const n={};return function(r){for(const i in r)if(Object.prototype.hasOwnProperty.call(r,i))return!1;return!0}(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):wc(t,(r,i)=>{const s=TS(i,e.rt(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function IS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof kt||t instanceof Dm||t instanceof hs||t instanceof It||t instanceof _S)}function CS(t,e,n){if(!IS(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=xm(n);throw r==="an object"?e.ct(t+" a custom object"):e.ct(t+" "+r)}}function db(t,e,n){if((e=vt(e))instanceof Om)return e._internalPath;if(typeof e=="string")return xS(t,e);throw Tu("Field path arguments must be of type string or ",t,!1,void 0,n)}const fb=new RegExp("[~\\*/\\[\\]]");function xS(t,e,n){if(e.search(fb)>=0)throw Tu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Om(...e.split("."))._internalPath}catch{throw Tu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Tu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new H(Z,a+t+l)}function pb(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yb("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NS extends mb{data(){return super.data()}}class gb{constructor(e,n){this._docs=n,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(e,n){this._docs.forEach(e,n)}}function yb(t,e){return typeof e=="string"?xS(t,e):e instanceof Om?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vb(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class wb extends class{convertValue(e,n="none"){switch(ai(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ce(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ye()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return wc(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Dm(Ce(e.latitude),Ce(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=hS(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Go(e));default:return null}}convertTimestamp(e){const n=oi(e);return new kt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=$e.fromString(e);vr(wS(r));const i=new qo(r.get(1),r.get(3)),s=new st(r.popFirst(5));return i.isEqual(n)||Im(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new hs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function Eb(t){(function(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new H(sS,"limitToLast() queries require specifying at least one orderBy() clause")})((t=vc(t,Ic))._query);const e=Pm(t.firestore),n=new wb(t.firestore);return ib(e,t._query).then(r=>{const i=r.map(s=>new NS(t.firestore,n,s.key,s,t.converter));return t._query.limitType==="L"&&i.reverse(),new gb(t,i)})}function RS(t,e,n){const r=vb((t=vc(t,It)).converter,e,n),i=hb(cb(t.firestore),"setDoc",t._key,r,t.converter!==null,n);return ES(Pm(t.firestore),[i.toMutation(t._key,Wi.none())])}function _b(t){return ES(Pm((t=vc(t,It)).firestore),[new yS(t._key,Wi.none())])}(function(t){Es=t})(`${di}_lite`),ti(new mr("firestore/lite",(t,{instanceIdentifier:e,options:n})=>{const r=t.getProvider("app").getImmediate(),i=new Tc(new c$(t.getProvider("auth-internal")),new p$(t.getProvider("app-check-internal")),function(s,o){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new H(Z,'"projectId" not provided in firebase.initializeApp.');return new qo(s.options.projectId,o)}(r,e),r);return n&&i._setSettings(n),i},"PUBLIC").setMultipleInstances(!0)),on("firestore-lite","3.12.1",""),on("firestore-lite","3.12.1","esm2017");const kh={apiKey:"AIzaSyBWNfFXqZN_MB9T5Y0VJrwN3JdR3qscizo",authDomain:"shopping-cart-c1357.firebaseapp.com",projectId:"shopping-cart-c1357",storageBucket:"shopping-cart-c1357.appspot.com",messagingSenderId:"1015872791678",appId:"1:1015872791678:web:47b4063f84610ff29ee42f",measurementId:"G-H2B3M70GGQ"};function Sb(){if(!kh||!kh.apiKey)throw new Error(`No Firebase configuration object provided.
Add your web app's configuration object to firebase-config.js`);return kh}const Tb=[{id:0,title:"Entryway Door Mat",description:"2'x 4', Brown",category:"home",price:26,url:"./assets/img/products/prod0.jpg"},{id:1,title:"MOJE AUTO",description:"Car cosmetic KIT",category:"car",price:82,url:"./assets/img/products/prod1.jpg"},{id:2,title:"Pioneer DJ",description:"Professional DJ controller",category:"music",price:4100,url:"./assets/img/products/prod2.jpg"},{id:3,title:"Kindle e-book",description:"Amazon Kindle reader",category:"electronics",price:183,url:"./assets/img/products/prod3.jpg"},{id:4,title:"t-shirt",description:"Blue t-shirt, XL",category:"clothing",price:59,url:"./assets/img/products/prod4.jpg"},{id:5,title:"Fitness mat",description:"160cm x 58cm x 7mm",category:"sport",price:92,url:"./assets/img/products/prod5.jpg"},{id:6,title:"baseball cap",description:"Gray baseball cap",category:"clothing",price:9,url:"./assets/img/products/prod6.jpg"},{id:7,title:"Borygo Rim",description:"Car cosmetic KIT",category:"car",price:75,url:"./assets/img/products/prod7.jpg"},{id:8,title:"jeans",description:"blue classic XL",category:"clothing",price:19,url:"./assets/img/products/prod8.jpg"},{id:9,title:"Smart Watch",description:"3G, 4G, LTE, Bluetooth, Wi-Fi",category:"electronics",price:203,url:"./assets/img/products/prod9.jpg"}];function kb(){z2(Dr(),Rb)}const Ib=()=>{};function Cb(t){t.map(async e=>{try{await RS(Am(kc(),"products",`${e.id}`),{data:e}).then(console.log("Database saved!"))}catch(n){console.error("Error save to Firebase Database!",n)}})}async function xb(t){try{await RS(Am(kc(),"products",`${t.id}`),{data:t}).then(console.log("Database edited!"))}catch(e){console.error("Error save to Firebase Database!",e)}}async function PS(){let t=[];return(await Eb(ob(kc(),"products"))).forEach(n=>{t.push(n.data().data)}),console.log("Database loaded!"),t}async function Nb(){(await PS()).forEach(e=>{AS(e.id)}),Cb(Tb),console.log("Database set to default!")}async function AS(t){await _b(Am(kc(),"products",`${t}`)).then(console.log(`Id: ${t} removed!`))}async function Rb(t){const e=await PS();let n=t;n=JSON.parse(localStorage.getItem("user")),Ih.createRoot(document.getElementById("root")).render(S.jsx(GS.StrictMode,{children:S.jsx(YD,{prop:{currentUser:n,loadedData:e},authStateChanged:Ib,saveForm:xb,setToDefault:Nb,deleteProduct:AS})})),t&&(localStorage.setItem("user",JSON.stringify(t)),console.log(JSON.parse(localStorage.getItem("user"))))}const Pb=Sb();Iw(Pb);kb();