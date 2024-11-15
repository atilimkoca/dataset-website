function PE(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var LE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function DE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ov={exports:{}},gu={},Fv={exports:{}},ot={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rl=Symbol.for("react.element"),IE=Symbol.for("react.portal"),NE=Symbol.for("react.fragment"),UE=Symbol.for("react.strict_mode"),OE=Symbol.for("react.profiler"),FE=Symbol.for("react.provider"),kE=Symbol.for("react.context"),BE=Symbol.for("react.forward_ref"),zE=Symbol.for("react.suspense"),HE=Symbol.for("react.memo"),VE=Symbol.for("react.lazy"),gg=Symbol.iterator;function GE(t){return t===null||typeof t!="object"?null:(t=gg&&t[gg]||t["@@iterator"],typeof t=="function"?t:null)}var kv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bv=Object.assign,zv={};function Ko(t,e,n){this.props=t,this.context=e,this.refs=zv,this.updater=n||kv}Ko.prototype.isReactComponent={};Ko.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ko.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hv(){}Hv.prototype=Ko.prototype;function Qh(t,e,n){this.props=t,this.context=e,this.refs=zv,this.updater=n||kv}var Jh=Qh.prototype=new Hv;Jh.constructor=Qh;Bv(Jh,Ko.prototype);Jh.isPureReactComponent=!0;var _g=Array.isArray,Vv=Object.prototype.hasOwnProperty,ep={current:null},Gv={key:!0,ref:!0,__self:!0,__source:!0};function Wv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Vv.call(e,i)&&!Gv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var c=Array(a),u=0;u<a;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:rl,type:t,key:s,ref:o,props:r,_owner:ep.current}}function WE(t,e){return{$$typeof:rl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function tp(t){return typeof t=="object"&&t!==null&&t.$$typeof===rl}function XE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vg=/\/+/g;function uf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?XE(""+t.key):e.toString(36)}function Mc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case rl:case IE:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+uf(o,0):i,_g(r)?(n="",t!=null&&(n=t.replace(vg,"$&/")+"/"),Mc(r,e,n,"",function(u){return u})):r!=null&&(tp(r)&&(r=WE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(vg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",_g(t))for(var a=0;a<t.length;a++){s=t[a];var c=i+uf(s,a);o+=Mc(s,e,n,c,r)}else if(c=GE(t),typeof c=="function")for(t=c.call(t),a=0;!(s=t.next()).done;)s=s.value,c=i+uf(s,a++),o+=Mc(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Nl(t,e,n){if(t==null)return t;var i=[],r=0;return Mc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function jE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ln={current:null},wc={transition:null},$E={ReactCurrentDispatcher:Ln,ReactCurrentBatchConfig:wc,ReactCurrentOwner:ep};function Xv(){throw Error("act(...) is not supported in production builds of React.")}ot.Children={map:Nl,forEach:function(t,e,n){Nl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Nl(t,function(){e++}),e},toArray:function(t){return Nl(t,function(e){return e})||[]},only:function(t){if(!tp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ot.Component=Ko;ot.Fragment=NE;ot.Profiler=OE;ot.PureComponent=Qh;ot.StrictMode=UE;ot.Suspense=zE;ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$E;ot.act=Xv;ot.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Bv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ep.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(c in e)Vv.call(e,c)&&!Gv.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&a!==void 0?a[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){a=Array(c);for(var u=0;u<c;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:rl,type:t.type,key:r,ref:s,props:i,_owner:o}};ot.createContext=function(t){return t={$$typeof:kE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:FE,_context:t},t.Consumer=t};ot.createElement=Wv;ot.createFactory=function(t){var e=Wv.bind(null,t);return e.type=t,e};ot.createRef=function(){return{current:null}};ot.forwardRef=function(t){return{$$typeof:BE,render:t}};ot.isValidElement=tp;ot.lazy=function(t){return{$$typeof:VE,_payload:{_status:-1,_result:t},_init:jE}};ot.memo=function(t,e){return{$$typeof:HE,type:t,compare:e===void 0?null:e}};ot.startTransition=function(t){var e=wc.transition;wc.transition={};try{t()}finally{wc.transition=e}};ot.unstable_act=Xv;ot.useCallback=function(t,e){return Ln.current.useCallback(t,e)};ot.useContext=function(t){return Ln.current.useContext(t)};ot.useDebugValue=function(){};ot.useDeferredValue=function(t){return Ln.current.useDeferredValue(t)};ot.useEffect=function(t,e){return Ln.current.useEffect(t,e)};ot.useId=function(){return Ln.current.useId()};ot.useImperativeHandle=function(t,e,n){return Ln.current.useImperativeHandle(t,e,n)};ot.useInsertionEffect=function(t,e){return Ln.current.useInsertionEffect(t,e)};ot.useLayoutEffect=function(t,e){return Ln.current.useLayoutEffect(t,e)};ot.useMemo=function(t,e){return Ln.current.useMemo(t,e)};ot.useReducer=function(t,e,n){return Ln.current.useReducer(t,e,n)};ot.useRef=function(t){return Ln.current.useRef(t)};ot.useState=function(t){return Ln.current.useState(t)};ot.useSyncExternalStore=function(t,e,n){return Ln.current.useSyncExternalStore(t,e,n)};ot.useTransition=function(){return Ln.current.useTransition()};ot.version="18.3.1";Fv.exports=ot;var Ae=Fv.exports;const jv=DE(Ae),YE=PE({__proto__:null,default:jv},[Ae]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qE=Ae,KE=Symbol.for("react.element"),ZE=Symbol.for("react.fragment"),QE=Object.prototype.hasOwnProperty,JE=qE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,eM={key:!0,ref:!0,__self:!0,__source:!0};function $v(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)QE.call(e,i)&&!eM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:KE,type:t,key:s,ref:o,props:r,_owner:JE.current}}gu.Fragment=ZE;gu.jsx=$v;gu.jsxs=$v;Ov.exports=gu;var pe=Ov.exports,pd={},Yv={exports:{}},ti={},qv={exports:{}},Kv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,Q){var N=O.length;O.push(Q);e:for(;0<N;){var ge=N-1>>>1,Oe=O[ge];if(0<r(Oe,Q))O[ge]=Q,O[N]=Oe,N=ge;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var Q=O[0],N=O.pop();if(N!==Q){O[0]=N;e:for(var ge=0,Oe=O.length,at=Oe>>>1;ge<at;){var q=2*(ge+1)-1,ce=O[q],ve=q+1,me=O[ve];if(0>r(ce,N))ve<Oe&&0>r(me,ce)?(O[ge]=me,O[ve]=N,ge=ve):(O[ge]=ce,O[q]=N,ge=q);else if(ve<Oe&&0>r(me,N))O[ge]=me,O[ve]=N,ge=ve;else break e}}return Q}function r(O,Q){var N=O.sortIndex-Q.sortIndex;return N!==0?N:O.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var c=[],u=[],d=1,h=null,p=3,_=!1,x=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(O){for(var Q=n(u);Q!==null;){if(Q.callback===null)i(u);else if(Q.startTime<=O)i(u),Q.sortIndex=Q.expirationTime,e(c,Q);else break;Q=n(u)}}function E(O){if(M=!1,y(O),!x)if(n(c)!==null)x=!0,J(I);else{var Q=n(u);Q!==null&&ae(E,Q.startTime-O)}}function I(O,Q){x=!1,M&&(M=!1,f(D),D=-1),_=!0;var N=p;try{for(y(Q),h=n(c);h!==null&&(!(h.expirationTime>Q)||O&&!U());){var ge=h.callback;if(typeof ge=="function"){h.callback=null,p=h.priorityLevel;var Oe=ge(h.expirationTime<=Q);Q=t.unstable_now(),typeof Oe=="function"?h.callback=Oe:h===n(c)&&i(c),y(Q)}else i(c);h=n(c)}if(h!==null)var at=!0;else{var q=n(u);q!==null&&ae(E,q.startTime-Q),at=!1}return at}finally{h=null,p=N,_=!1}}var L=!1,P=null,D=-1,b=5,T=-1;function U(){return!(t.unstable_now()-T<b)}function Z(){if(P!==null){var O=t.unstable_now();T=O;var Q=!0;try{Q=P(!0,O)}finally{Q?$():(L=!1,P=null)}}else L=!1}var $;if(typeof v=="function")$=function(){v(Z)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,oe=re.port2;re.port1.onmessage=Z,$=function(){oe.postMessage(null)}}else $=function(){g(Z,0)};function J(O){P=O,L||(L=!0,$())}function ae(O,Q){D=g(function(){O(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){x||_||(x=!0,J(I))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(O){switch(p){case 1:case 2:case 3:var Q=3;break;default:Q=p}var N=p;p=Q;try{return O()}finally{p=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,Q){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var N=p;p=O;try{return Q()}finally{p=N}},t.unstable_scheduleCallback=function(O,Q,N){var ge=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?ge+N:ge):N=ge,O){case 1:var Oe=-1;break;case 2:Oe=250;break;case 5:Oe=1073741823;break;case 4:Oe=1e4;break;default:Oe=5e3}return Oe=N+Oe,O={id:d++,callback:Q,priorityLevel:O,startTime:N,expirationTime:Oe,sortIndex:-1},N>ge?(O.sortIndex=N,e(u,O),n(c)===null&&O===n(u)&&(M?(f(D),D=-1):M=!0,ae(E,N-ge))):(O.sortIndex=Oe,e(c,O),x||_||(x=!0,J(I))),O},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(O){var Q=p;return function(){var N=p;p=Q;try{return O.apply(this,arguments)}finally{p=N}}}})(Kv);qv.exports=Kv;var tM=qv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nM=Ae,ei=tM;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zv=new Set,Fa={};function zs(t,e){Fo(t,e),Fo(t+"Capture",e)}function Fo(t,e){for(Fa[t]=e,t=0;t<e.length;t++)Zv.add(e[t])}var hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),md=Object.prototype.hasOwnProperty,iM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xg={},yg={};function rM(t){return md.call(yg,t)?!0:md.call(xg,t)?!1:iM.test(t)?yg[t]=!0:(xg[t]=!0,!1)}function sM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function oM(t,e,n,i){if(e===null||typeof e>"u"||sM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var gn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){gn[t]=new Dn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];gn[e]=new Dn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){gn[t]=new Dn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){gn[t]=new Dn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){gn[t]=new Dn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){gn[t]=new Dn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){gn[t]=new Dn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){gn[t]=new Dn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){gn[t]=new Dn(t,5,!1,t.toLowerCase(),null,!1,!1)});var np=/[\-:]([a-z])/g;function ip(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(np,ip);gn[e]=new Dn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(np,ip);gn[e]=new Dn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(np,ip);gn[e]=new Dn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){gn[t]=new Dn(t,1,!1,t.toLowerCase(),null,!1,!1)});gn.xlinkHref=new Dn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){gn[t]=new Dn(t,1,!1,t.toLowerCase(),null,!0,!0)});function rp(t,e,n,i){var r=gn.hasOwnProperty(e)?gn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(oM(e,n,r,i)&&(n=null),i||r===null?rM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var xr=nM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ul=Symbol.for("react.element"),mo=Symbol.for("react.portal"),go=Symbol.for("react.fragment"),sp=Symbol.for("react.strict_mode"),gd=Symbol.for("react.profiler"),Qv=Symbol.for("react.provider"),Jv=Symbol.for("react.context"),op=Symbol.for("react.forward_ref"),_d=Symbol.for("react.suspense"),vd=Symbol.for("react.suspense_list"),ap=Symbol.for("react.memo"),Lr=Symbol.for("react.lazy"),e0=Symbol.for("react.offscreen"),Sg=Symbol.iterator;function ca(t){return t===null||typeof t!="object"?null:(t=Sg&&t[Sg]||t["@@iterator"],typeof t=="function"?t:null)}var Xt=Object.assign,ff;function Ea(t){if(ff===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ff=e&&e[1]||""}return`
`+ff+t}var df=!1;function hf(t,e){if(!t||df)return"";df=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var c=`
`+r[o].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=o&&0<=a);break}}}finally{df=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ea(t):""}function aM(t){switch(t.tag){case 5:return Ea(t.type);case 16:return Ea("Lazy");case 13:return Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 2:case 15:return t=hf(t.type,!1),t;case 11:return t=hf(t.type.render,!1),t;case 1:return t=hf(t.type,!0),t;default:return""}}function xd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case go:return"Fragment";case mo:return"Portal";case gd:return"Profiler";case sp:return"StrictMode";case _d:return"Suspense";case vd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jv:return(t.displayName||"Context")+".Consumer";case Qv:return(t._context.displayName||"Context")+".Provider";case op:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ap:return e=t.displayName||null,e!==null?e:xd(t.type)||"Memo";case Lr:e=t._payload,t=t._init;try{return xd(t(e))}catch{}}return null}function lM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xd(e);case 8:return e===sp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function t0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cM(t){var e=t0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ol(t){t._valueTracker||(t._valueTracker=cM(t))}function n0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=t0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Vc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yd(t,e){var n=e.checked;return Xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Eg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function i0(t,e){e=e.checked,e!=null&&rp(t,"checked",e,!1)}function Sd(t,e){i0(t,e);var n=Kr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ed(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ed(t,e.type,Kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ed(t,e,n){(e!=="number"||Vc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ma=Array.isArray;function bo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Kr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Md(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return Xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(Ma(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Kr(n)}}function r0(t,e){var n=Kr(e.value),i=Kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Tg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function s0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?s0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fl,o0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fl=Fl||document.createElement("div"),Fl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ka(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},uM=["Webkit","ms","Moz","O"];Object.keys(ba).forEach(function(t){uM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ba[e]=ba[t]})});function a0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ba.hasOwnProperty(t)&&ba[t]?(""+e).trim():e+"px"}function l0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=a0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var fM=Xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Td(t,e){if(e){if(fM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function Ad(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cd=null;function lp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bd=null,Ro=null,Po=null;function Ag(t){if(t=al(t)){if(typeof bd!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=Su(e),bd(t.stateNode,t.type,e))}}function c0(t){Ro?Po?Po.push(t):Po=[t]:Ro=t}function u0(){if(Ro){var t=Ro,e=Po;if(Po=Ro=null,Ag(t),e)for(t=0;t<e.length;t++)Ag(e[t])}}function f0(t,e){return t(e)}function d0(){}var pf=!1;function h0(t,e,n){if(pf)return t(e,n);pf=!0;try{return f0(t,e,n)}finally{pf=!1,(Ro!==null||Po!==null)&&(d0(),u0())}}function Ba(t,e){var n=t.stateNode;if(n===null)return null;var i=Su(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var Rd=!1;if(hr)try{var ua={};Object.defineProperty(ua,"passive",{get:function(){Rd=!0}}),window.addEventListener("test",ua,ua),window.removeEventListener("test",ua,ua)}catch{Rd=!1}function dM(t,e,n,i,r,s,o,a,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Ra=!1,Gc=null,Wc=!1,Pd=null,hM={onError:function(t){Ra=!0,Gc=t}};function pM(t,e,n,i,r,s,o,a,c){Ra=!1,Gc=null,dM.apply(hM,arguments)}function mM(t,e,n,i,r,s,o,a,c){if(pM.apply(this,arguments),Ra){if(Ra){var u=Gc;Ra=!1,Gc=null}else throw Error(ue(198));Wc||(Wc=!0,Pd=u)}}function Hs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function p0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cg(t){if(Hs(t)!==t)throw Error(ue(188))}function gM(t){var e=t.alternate;if(!e){if(e=Hs(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Cg(r),t;if(s===i)return Cg(r),e;s=s.sibling}throw Error(ue(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ue(189))}}if(n.alternate!==i)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function m0(t){return t=gM(t),t!==null?g0(t):null}function g0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=g0(t);if(e!==null)return e;t=t.sibling}return null}var _0=ei.unstable_scheduleCallback,bg=ei.unstable_cancelCallback,_M=ei.unstable_shouldYield,vM=ei.unstable_requestPaint,qt=ei.unstable_now,xM=ei.unstable_getCurrentPriorityLevel,cp=ei.unstable_ImmediatePriority,v0=ei.unstable_UserBlockingPriority,Xc=ei.unstable_NormalPriority,yM=ei.unstable_LowPriority,x0=ei.unstable_IdlePriority,_u=null,Hi=null;function SM(t){if(Hi&&typeof Hi.onCommitFiberRoot=="function")try{Hi.onCommitFiberRoot(_u,t,void 0,(t.current.flags&128)===128)}catch{}}var Ri=Math.clz32?Math.clz32:wM,EM=Math.log,MM=Math.LN2;function wM(t){return t>>>=0,t===0?32:31-(EM(t)/MM|0)|0}var kl=64,Bl=4194304;function wa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=wa(a):(s&=o,s!==0&&(i=wa(s)))}else o=n&~r,o!==0?i=wa(o):s!==0&&(i=wa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Ri(e),r=1<<n,i|=t[n],e&=~r;return i}function TM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function AM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ri(s),a=1<<o,c=r[o];c===-1?(!(a&n)||a&i)&&(r[o]=TM(a,e)):c<=e&&(t.expiredLanes|=a),s&=~a}}function Ld(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function y0(){var t=kl;return kl<<=1,!(kl&4194240)&&(kl=64),t}function mf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function sl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ri(e),t[e]=n}function CM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Ri(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function up(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Ri(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Mt=0;function S0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var E0,fp,M0,w0,T0,Dd=!1,zl=[],Br=null,zr=null,Hr=null,za=new Map,Ha=new Map,Ir=[],bM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rg(t,e){switch(t){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":za.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ha.delete(e.pointerId)}}function fa(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=al(e),e!==null&&fp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function RM(t,e,n,i,r){switch(e){case"focusin":return Br=fa(Br,t,e,n,i,r),!0;case"dragenter":return zr=fa(zr,t,e,n,i,r),!0;case"mouseover":return Hr=fa(Hr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return za.set(s,fa(za.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ha.set(s,fa(Ha.get(s)||null,t,e,n,i,r)),!0}return!1}function A0(t){var e=Ts(t.target);if(e!==null){var n=Hs(e);if(n!==null){if(e=n.tag,e===13){if(e=p0(n),e!==null){t.blockedOn=e,T0(t.priority,function(){M0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Tc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Id(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Cd=i,n.target.dispatchEvent(i),Cd=null}else return e=al(n),e!==null&&fp(e),t.blockedOn=n,!1;e.shift()}return!0}function Pg(t,e,n){Tc(t)&&n.delete(e)}function PM(){Dd=!1,Br!==null&&Tc(Br)&&(Br=null),zr!==null&&Tc(zr)&&(zr=null),Hr!==null&&Tc(Hr)&&(Hr=null),za.forEach(Pg),Ha.forEach(Pg)}function da(t,e){t.blockedOn===e&&(t.blockedOn=null,Dd||(Dd=!0,ei.unstable_scheduleCallback(ei.unstable_NormalPriority,PM)))}function Va(t){function e(r){return da(r,t)}if(0<zl.length){da(zl[0],t);for(var n=1;n<zl.length;n++){var i=zl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Br!==null&&da(Br,t),zr!==null&&da(zr,t),Hr!==null&&da(Hr,t),za.forEach(e),Ha.forEach(e),n=0;n<Ir.length;n++)i=Ir[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ir.length&&(n=Ir[0],n.blockedOn===null);)A0(n),n.blockedOn===null&&Ir.shift()}var Lo=xr.ReactCurrentBatchConfig,$c=!0;function LM(t,e,n,i){var r=Mt,s=Lo.transition;Lo.transition=null;try{Mt=1,dp(t,e,n,i)}finally{Mt=r,Lo.transition=s}}function DM(t,e,n,i){var r=Mt,s=Lo.transition;Lo.transition=null;try{Mt=4,dp(t,e,n,i)}finally{Mt=r,Lo.transition=s}}function dp(t,e,n,i){if($c){var r=Id(t,e,n,i);if(r===null)Tf(t,e,i,Yc,n),Rg(t,i);else if(RM(r,t,e,n,i))i.stopPropagation();else if(Rg(t,i),e&4&&-1<bM.indexOf(t)){for(;r!==null;){var s=al(r);if(s!==null&&E0(s),s=Id(t,e,n,i),s===null&&Tf(t,e,i,Yc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Tf(t,e,i,null,n)}}var Yc=null;function Id(t,e,n,i){if(Yc=null,t=lp(i),t=Ts(t),t!==null)if(e=Hs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=p0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yc=t,null}function C0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xM()){case cp:return 1;case v0:return 4;case Xc:case yM:return 16;case x0:return 536870912;default:return 16}default:return 16}}var Or=null,hp=null,Ac=null;function b0(){if(Ac)return Ac;var t,e=hp,n=e.length,i,r="value"in Or?Or.value:Or.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ac=r.slice(t,1<i?1-i:void 0)}function Cc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Hl(){return!0}function Lg(){return!1}function ni(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Hl:Lg,this.isPropagationStopped=Lg,this}return Xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Hl)},persist:function(){},isPersistent:Hl}),e}var Zo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pp=ni(Zo),ol=Xt({},Zo,{view:0,detail:0}),IM=ni(ol),gf,_f,ha,vu=Xt({},ol,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ha&&(ha&&t.type==="mousemove"?(gf=t.screenX-ha.screenX,_f=t.screenY-ha.screenY):_f=gf=0,ha=t),gf)},movementY:function(t){return"movementY"in t?t.movementY:_f}}),Dg=ni(vu),NM=Xt({},vu,{dataTransfer:0}),UM=ni(NM),OM=Xt({},ol,{relatedTarget:0}),vf=ni(OM),FM=Xt({},Zo,{animationName:0,elapsedTime:0,pseudoElement:0}),kM=ni(FM),BM=Xt({},Zo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zM=ni(BM),HM=Xt({},Zo,{data:0}),Ig=ni(HM),VM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},GM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},WM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function XM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=WM[t])?!!e[t]:!1}function mp(){return XM}var jM=Xt({},ol,{key:function(t){if(t.key){var e=VM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?GM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mp,charCode:function(t){return t.type==="keypress"?Cc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$M=ni(jM),YM=Xt({},vu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ng=ni(YM),qM=Xt({},ol,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mp}),KM=ni(qM),ZM=Xt({},Zo,{propertyName:0,elapsedTime:0,pseudoElement:0}),QM=ni(ZM),JM=Xt({},vu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ew=ni(JM),tw=[9,13,27,32],gp=hr&&"CompositionEvent"in window,Pa=null;hr&&"documentMode"in document&&(Pa=document.documentMode);var nw=hr&&"TextEvent"in window&&!Pa,R0=hr&&(!gp||Pa&&8<Pa&&11>=Pa),Ug=" ",Og=!1;function P0(t,e){switch(t){case"keyup":return tw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function L0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _o=!1;function iw(t,e){switch(t){case"compositionend":return L0(e);case"keypress":return e.which!==32?null:(Og=!0,Ug);case"textInput":return t=e.data,t===Ug&&Og?null:t;default:return null}}function rw(t,e){if(_o)return t==="compositionend"||!gp&&P0(t,e)?(t=b0(),Ac=hp=Or=null,_o=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return R0&&e.locale!=="ko"?null:e.data;default:return null}}var sw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sw[t.type]:e==="textarea"}function D0(t,e,n,i){c0(i),e=qc(e,"onChange"),0<e.length&&(n=new pp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var La=null,Ga=null;function ow(t){G0(t,0)}function xu(t){var e=yo(t);if(n0(e))return t}function aw(t,e){if(t==="change")return e}var I0=!1;if(hr){var xf;if(hr){var yf="oninput"in document;if(!yf){var kg=document.createElement("div");kg.setAttribute("oninput","return;"),yf=typeof kg.oninput=="function"}xf=yf}else xf=!1;I0=xf&&(!document.documentMode||9<document.documentMode)}function Bg(){La&&(La.detachEvent("onpropertychange",N0),Ga=La=null)}function N0(t){if(t.propertyName==="value"&&xu(Ga)){var e=[];D0(e,Ga,t,lp(t)),h0(ow,e)}}function lw(t,e,n){t==="focusin"?(Bg(),La=e,Ga=n,La.attachEvent("onpropertychange",N0)):t==="focusout"&&Bg()}function cw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xu(Ga)}function uw(t,e){if(t==="click")return xu(e)}function fw(t,e){if(t==="input"||t==="change")return xu(e)}function dw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ii=typeof Object.is=="function"?Object.is:dw;function Wa(t,e){if(Ii(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!md.call(e,r)||!Ii(t[r],e[r]))return!1}return!0}function zg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hg(t,e){var n=zg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zg(n)}}function U0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?U0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function O0(){for(var t=window,e=Vc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vc(t.document)}return e}function _p(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hw(t){var e=O0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&U0(n.ownerDocument.documentElement,n)){if(i!==null&&_p(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Hg(n,s);var o=Hg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var pw=hr&&"documentMode"in document&&11>=document.documentMode,vo=null,Nd=null,Da=null,Ud=!1;function Vg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ud||vo==null||vo!==Vc(i)||(i=vo,"selectionStart"in i&&_p(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Da&&Wa(Da,i)||(Da=i,i=qc(Nd,"onSelect"),0<i.length&&(e=new pp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=vo)))}function Vl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xo={animationend:Vl("Animation","AnimationEnd"),animationiteration:Vl("Animation","AnimationIteration"),animationstart:Vl("Animation","AnimationStart"),transitionend:Vl("Transition","TransitionEnd")},Sf={},F0={};hr&&(F0=document.createElement("div").style,"AnimationEvent"in window||(delete xo.animationend.animation,delete xo.animationiteration.animation,delete xo.animationstart.animation),"TransitionEvent"in window||delete xo.transitionend.transition);function yu(t){if(Sf[t])return Sf[t];if(!xo[t])return t;var e=xo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in F0)return Sf[t]=e[n];return t}var k0=yu("animationend"),B0=yu("animationiteration"),z0=yu("animationstart"),H0=yu("transitionend"),V0=new Map,Gg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function es(t,e){V0.set(t,e),zs(e,[t])}for(var Ef=0;Ef<Gg.length;Ef++){var Mf=Gg[Ef],mw=Mf.toLowerCase(),gw=Mf[0].toUpperCase()+Mf.slice(1);es(mw,"on"+gw)}es(k0,"onAnimationEnd");es(B0,"onAnimationIteration");es(z0,"onAnimationStart");es("dblclick","onDoubleClick");es("focusin","onFocus");es("focusout","onBlur");es(H0,"onTransitionEnd");Fo("onMouseEnter",["mouseout","mouseover"]);Fo("onMouseLeave",["mouseout","mouseover"]);Fo("onPointerEnter",["pointerout","pointerover"]);Fo("onPointerLeave",["pointerout","pointerover"]);zs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zs("onBeforeInput",["compositionend","keypress","textInput","paste"]);zs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_w=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function Wg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,mM(i,e,void 0,t),t.currentTarget=null}function G0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],c=a.instance,u=a.currentTarget;if(a=a.listener,c!==s&&r.isPropagationStopped())break e;Wg(r,a,u),s=c}else for(o=0;o<i.length;o++){if(a=i[o],c=a.instance,u=a.currentTarget,a=a.listener,c!==s&&r.isPropagationStopped())break e;Wg(r,a,u),s=c}}}if(Wc)throw t=Pd,Wc=!1,Pd=null,t}function Ft(t,e){var n=e[zd];n===void 0&&(n=e[zd]=new Set);var i=t+"__bubble";n.has(i)||(W0(e,t,2,!1),n.add(i))}function wf(t,e,n){var i=0;e&&(i|=4),W0(n,t,i,e)}var Gl="_reactListening"+Math.random().toString(36).slice(2);function Xa(t){if(!t[Gl]){t[Gl]=!0,Zv.forEach(function(n){n!=="selectionchange"&&(_w.has(n)||wf(n,!1,t),wf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gl]||(e[Gl]=!0,wf("selectionchange",!1,e))}}function W0(t,e,n,i){switch(C0(e)){case 1:var r=LM;break;case 4:r=DM;break;default:r=dp}n=r.bind(null,e,n,t),r=void 0,!Rd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Tf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ts(a),o===null)return;if(c=o.tag,c===5||c===6){i=s=o;continue e}a=a.parentNode}}i=i.return}h0(function(){var u=s,d=lp(n),h=[];e:{var p=V0.get(t);if(p!==void 0){var _=pp,x=t;switch(t){case"keypress":if(Cc(n)===0)break e;case"keydown":case"keyup":_=$M;break;case"focusin":x="focus",_=vf;break;case"focusout":x="blur",_=vf;break;case"beforeblur":case"afterblur":_=vf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Dg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=UM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=KM;break;case k0:case B0:case z0:_=kM;break;case H0:_=QM;break;case"scroll":_=IM;break;case"wheel":_=ew;break;case"copy":case"cut":case"paste":_=zM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Ng}var M=(e&4)!==0,g=!M&&t==="scroll",f=M?p!==null?p+"Capture":null:p;M=[];for(var v=u,y;v!==null;){y=v;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,f!==null&&(E=Ba(v,f),E!=null&&M.push(ja(v,E,y)))),g)break;v=v.return}0<M.length&&(p=new _(p,x,null,n,d),h.push({event:p,listeners:M}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",p&&n!==Cd&&(x=n.relatedTarget||n.fromElement)&&(Ts(x)||x[pr]))break e;if((_||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,_?(x=n.relatedTarget||n.toElement,_=u,x=x?Ts(x):null,x!==null&&(g=Hs(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(_=null,x=u),_!==x)){if(M=Dg,E="onMouseLeave",f="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(M=Ng,E="onPointerLeave",f="onPointerEnter",v="pointer"),g=_==null?p:yo(_),y=x==null?p:yo(x),p=new M(E,v+"leave",_,n,d),p.target=g,p.relatedTarget=y,E=null,Ts(d)===u&&(M=new M(f,v+"enter",x,n,d),M.target=y,M.relatedTarget=g,E=M),g=E,_&&x)t:{for(M=_,f=x,v=0,y=M;y;y=Js(y))v++;for(y=0,E=f;E;E=Js(E))y++;for(;0<v-y;)M=Js(M),v--;for(;0<y-v;)f=Js(f),y--;for(;v--;){if(M===f||f!==null&&M===f.alternate)break t;M=Js(M),f=Js(f)}M=null}else M=null;_!==null&&Xg(h,p,_,M,!1),x!==null&&g!==null&&Xg(h,g,x,M,!0)}}e:{if(p=u?yo(u):window,_=p.nodeName&&p.nodeName.toLowerCase(),_==="select"||_==="input"&&p.type==="file")var I=aw;else if(Fg(p))if(I0)I=fw;else{I=cw;var L=lw}else(_=p.nodeName)&&_.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(I=uw);if(I&&(I=I(t,u))){D0(h,I,n,d);break e}L&&L(t,p,u),t==="focusout"&&(L=p._wrapperState)&&L.controlled&&p.type==="number"&&Ed(p,"number",p.value)}switch(L=u?yo(u):window,t){case"focusin":(Fg(L)||L.contentEditable==="true")&&(vo=L,Nd=u,Da=null);break;case"focusout":Da=Nd=vo=null;break;case"mousedown":Ud=!0;break;case"contextmenu":case"mouseup":case"dragend":Ud=!1,Vg(h,n,d);break;case"selectionchange":if(pw)break;case"keydown":case"keyup":Vg(h,n,d)}var P;if(gp)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else _o?P0(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(R0&&n.locale!=="ko"&&(_o||D!=="onCompositionStart"?D==="onCompositionEnd"&&_o&&(P=b0()):(Or=d,hp="value"in Or?Or.value:Or.textContent,_o=!0)),L=qc(u,D),0<L.length&&(D=new Ig(D,t,null,n,d),h.push({event:D,listeners:L}),P?D.data=P:(P=L0(n),P!==null&&(D.data=P)))),(P=nw?iw(t,n):rw(t,n))&&(u=qc(u,"onBeforeInput"),0<u.length&&(d=new Ig("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=P))}G0(h,e)})}function ja(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ba(t,n),s!=null&&i.unshift(ja(t,s,r)),s=Ba(t,e),s!=null&&i.push(ja(t,s,r))),t=t.return}return i}function Js(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,c=a.alternate,u=a.stateNode;if(c!==null&&c===i)break;a.tag===5&&u!==null&&(a=u,r?(c=Ba(n,s),c!=null&&o.unshift(ja(n,c,a))):r||(c=Ba(n,s),c!=null&&o.push(ja(n,c,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var vw=/\r\n?/g,xw=/\u0000|\uFFFD/g;function jg(t){return(typeof t=="string"?t:""+t).replace(vw,`
`).replace(xw,"")}function Wl(t,e,n){if(e=jg(e),jg(t)!==e&&n)throw Error(ue(425))}function Kc(){}var Od=null,Fd=null;function kd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Bd=typeof setTimeout=="function"?setTimeout:void 0,yw=typeof clearTimeout=="function"?clearTimeout:void 0,$g=typeof Promise=="function"?Promise:void 0,Sw=typeof queueMicrotask=="function"?queueMicrotask:typeof $g<"u"?function(t){return $g.resolve(null).then(t).catch(Ew)}:Bd;function Ew(t){setTimeout(function(){throw t})}function Af(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Va(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Va(e)}function Vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qo=Math.random().toString(36).slice(2),Bi="__reactFiber$"+Qo,$a="__reactProps$"+Qo,pr="__reactContainer$"+Qo,zd="__reactEvents$"+Qo,Mw="__reactListeners$"+Qo,ww="__reactHandles$"+Qo;function Ts(t){var e=t[Bi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[pr]||n[Bi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yg(t);t!==null;){if(n=t[Bi])return n;t=Yg(t)}return e}t=n,n=t.parentNode}return null}function al(t){return t=t[Bi]||t[pr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function yo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function Su(t){return t[$a]||null}var Hd=[],So=-1;function ts(t){return{current:t}}function kt(t){0>So||(t.current=Hd[So],Hd[So]=null,So--)}function Ut(t,e){So++,Hd[So]=t.current,t.current=e}var Zr={},Mn=ts(Zr),Bn=ts(!1),Is=Zr;function ko(t,e){var n=t.type.contextTypes;if(!n)return Zr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function zn(t){return t=t.childContextTypes,t!=null}function Zc(){kt(Bn),kt(Mn)}function qg(t,e,n){if(Mn.current!==Zr)throw Error(ue(168));Ut(Mn,e),Ut(Bn,n)}function X0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,lM(t)||"Unknown",r));return Xt({},n,i)}function Qc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zr,Is=Mn.current,Ut(Mn,t),Ut(Bn,Bn.current),!0}function Kg(t,e,n){var i=t.stateNode;if(!i)throw Error(ue(169));n?(t=X0(t,e,Is),i.__reactInternalMemoizedMergedChildContext=t,kt(Bn),kt(Mn),Ut(Mn,t)):kt(Bn),Ut(Bn,n)}var rr=null,Eu=!1,Cf=!1;function j0(t){rr===null?rr=[t]:rr.push(t)}function Tw(t){Eu=!0,j0(t)}function ns(){if(!Cf&&rr!==null){Cf=!0;var t=0,e=Mt;try{var n=rr;for(Mt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}rr=null,Eu=!1}catch(r){throw rr!==null&&(rr=rr.slice(t+1)),_0(cp,ns),r}finally{Mt=e,Cf=!1}}return null}var Eo=[],Mo=0,Jc=null,eu=0,ui=[],fi=0,Ns=null,or=1,ar="";function xs(t,e){Eo[Mo++]=eu,Eo[Mo++]=Jc,Jc=t,eu=e}function $0(t,e,n){ui[fi++]=or,ui[fi++]=ar,ui[fi++]=Ns,Ns=t;var i=or;t=ar;var r=32-Ri(i)-1;i&=~(1<<r),n+=1;var s=32-Ri(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,or=1<<32-Ri(e)+r|n<<r|i,ar=s+t}else or=1<<s|n<<r|i,ar=t}function vp(t){t.return!==null&&(xs(t,1),$0(t,1,0))}function xp(t){for(;t===Jc;)Jc=Eo[--Mo],Eo[Mo]=null,eu=Eo[--Mo],Eo[Mo]=null;for(;t===Ns;)Ns=ui[--fi],ui[fi]=null,ar=ui[--fi],ui[fi]=null,or=ui[--fi],ui[fi]=null}var Jn=null,Qn=null,zt=!1,Ai=null;function Y0(t,e){var n=hi(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Jn=t,Qn=Vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Jn=t,Qn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ns!==null?{id:or,overflow:ar}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=hi(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Jn=t,Qn=null,!0):!1;default:return!1}}function Vd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gd(t){if(zt){var e=Qn;if(e){var n=e;if(!Zg(t,e)){if(Vd(t))throw Error(ue(418));e=Vr(n.nextSibling);var i=Jn;e&&Zg(t,e)?Y0(i,n):(t.flags=t.flags&-4097|2,zt=!1,Jn=t)}}else{if(Vd(t))throw Error(ue(418));t.flags=t.flags&-4097|2,zt=!1,Jn=t}}}function Qg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Jn=t}function Xl(t){if(t!==Jn)return!1;if(!zt)return Qg(t),zt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kd(t.type,t.memoizedProps)),e&&(e=Qn)){if(Vd(t))throw q0(),Error(ue(418));for(;e;)Y0(t,e),e=Vr(e.nextSibling)}if(Qg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Qn=Vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Qn=null}}else Qn=Jn?Vr(t.stateNode.nextSibling):null;return!0}function q0(){for(var t=Qn;t;)t=Vr(t.nextSibling)}function Bo(){Qn=Jn=null,zt=!1}function yp(t){Ai===null?Ai=[t]:Ai.push(t)}var Aw=xr.ReactCurrentBatchConfig;function pa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var i=n.stateNode}if(!i)throw Error(ue(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function jl(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jg(t){var e=t._init;return e(t._payload)}function K0(t){function e(f,v){if(t){var y=f.deletions;y===null?(f.deletions=[v],f.flags|=16):y.push(v)}}function n(f,v){if(!t)return null;for(;v!==null;)e(f,v),v=v.sibling;return null}function i(f,v){for(f=new Map;v!==null;)v.key!==null?f.set(v.key,v):f.set(v.index,v),v=v.sibling;return f}function r(f,v){return f=jr(f,v),f.index=0,f.sibling=null,f}function s(f,v,y){return f.index=y,t?(y=f.alternate,y!==null?(y=y.index,y<v?(f.flags|=2,v):y):(f.flags|=2,v)):(f.flags|=1048576,v)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,v,y,E){return v===null||v.tag!==6?(v=Nf(y,f.mode,E),v.return=f,v):(v=r(v,y),v.return=f,v)}function c(f,v,y,E){var I=y.type;return I===go?d(f,v,y.props.children,E,y.key):v!==null&&(v.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Lr&&Jg(I)===v.type)?(E=r(v,y.props),E.ref=pa(f,v,y),E.return=f,E):(E=Nc(y.type,y.key,y.props,null,f.mode,E),E.ref=pa(f,v,y),E.return=f,E)}function u(f,v,y,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=Uf(y,f.mode,E),v.return=f,v):(v=r(v,y.children||[]),v.return=f,v)}function d(f,v,y,E,I){return v===null||v.tag!==7?(v=Ls(y,f.mode,E,I),v.return=f,v):(v=r(v,y),v.return=f,v)}function h(f,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Nf(""+v,f.mode,y),v.return=f,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ul:return y=Nc(v.type,v.key,v.props,null,f.mode,y),y.ref=pa(f,null,v),y.return=f,y;case mo:return v=Uf(v,f.mode,y),v.return=f,v;case Lr:var E=v._init;return h(f,E(v._payload),y)}if(Ma(v)||ca(v))return v=Ls(v,f.mode,y,null),v.return=f,v;jl(f,v)}return null}function p(f,v,y,E){var I=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return I!==null?null:a(f,v,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ul:return y.key===I?c(f,v,y,E):null;case mo:return y.key===I?u(f,v,y,E):null;case Lr:return I=y._init,p(f,v,I(y._payload),E)}if(Ma(y)||ca(y))return I!==null?null:d(f,v,y,E,null);jl(f,y)}return null}function _(f,v,y,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(y)||null,a(v,f,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ul:return f=f.get(E.key===null?y:E.key)||null,c(v,f,E,I);case mo:return f=f.get(E.key===null?y:E.key)||null,u(v,f,E,I);case Lr:var L=E._init;return _(f,v,y,L(E._payload),I)}if(Ma(E)||ca(E))return f=f.get(y)||null,d(v,f,E,I,null);jl(v,E)}return null}function x(f,v,y,E){for(var I=null,L=null,P=v,D=v=0,b=null;P!==null&&D<y.length;D++){P.index>D?(b=P,P=null):b=P.sibling;var T=p(f,P,y[D],E);if(T===null){P===null&&(P=b);break}t&&P&&T.alternate===null&&e(f,P),v=s(T,v,D),L===null?I=T:L.sibling=T,L=T,P=b}if(D===y.length)return n(f,P),zt&&xs(f,D),I;if(P===null){for(;D<y.length;D++)P=h(f,y[D],E),P!==null&&(v=s(P,v,D),L===null?I=P:L.sibling=P,L=P);return zt&&xs(f,D),I}for(P=i(f,P);D<y.length;D++)b=_(P,f,D,y[D],E),b!==null&&(t&&b.alternate!==null&&P.delete(b.key===null?D:b.key),v=s(b,v,D),L===null?I=b:L.sibling=b,L=b);return t&&P.forEach(function(U){return e(f,U)}),zt&&xs(f,D),I}function M(f,v,y,E){var I=ca(y);if(typeof I!="function")throw Error(ue(150));if(y=I.call(y),y==null)throw Error(ue(151));for(var L=I=null,P=v,D=v=0,b=null,T=y.next();P!==null&&!T.done;D++,T=y.next()){P.index>D?(b=P,P=null):b=P.sibling;var U=p(f,P,T.value,E);if(U===null){P===null&&(P=b);break}t&&P&&U.alternate===null&&e(f,P),v=s(U,v,D),L===null?I=U:L.sibling=U,L=U,P=b}if(T.done)return n(f,P),zt&&xs(f,D),I;if(P===null){for(;!T.done;D++,T=y.next())T=h(f,T.value,E),T!==null&&(v=s(T,v,D),L===null?I=T:L.sibling=T,L=T);return zt&&xs(f,D),I}for(P=i(f,P);!T.done;D++,T=y.next())T=_(P,f,D,T.value,E),T!==null&&(t&&T.alternate!==null&&P.delete(T.key===null?D:T.key),v=s(T,v,D),L===null?I=T:L.sibling=T,L=T);return t&&P.forEach(function(Z){return e(f,Z)}),zt&&xs(f,D),I}function g(f,v,y,E){if(typeof y=="object"&&y!==null&&y.type===go&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ul:e:{for(var I=y.key,L=v;L!==null;){if(L.key===I){if(I=y.type,I===go){if(L.tag===7){n(f,L.sibling),v=r(L,y.props.children),v.return=f,f=v;break e}}else if(L.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===Lr&&Jg(I)===L.type){n(f,L.sibling),v=r(L,y.props),v.ref=pa(f,L,y),v.return=f,f=v;break e}n(f,L);break}else e(f,L);L=L.sibling}y.type===go?(v=Ls(y.props.children,f.mode,E,y.key),v.return=f,f=v):(E=Nc(y.type,y.key,y.props,null,f.mode,E),E.ref=pa(f,v,y),E.return=f,f=E)}return o(f);case mo:e:{for(L=y.key;v!==null;){if(v.key===L)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(f,v.sibling),v=r(v,y.children||[]),v.return=f,f=v;break e}else{n(f,v);break}else e(f,v);v=v.sibling}v=Uf(y,f.mode,E),v.return=f,f=v}return o(f);case Lr:return L=y._init,g(f,v,L(y._payload),E)}if(Ma(y))return x(f,v,y,E);if(ca(y))return M(f,v,y,E);jl(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(f,v.sibling),v=r(v,y),v.return=f,f=v):(n(f,v),v=Nf(y,f.mode,E),v.return=f,f=v),o(f)):n(f,v)}return g}var zo=K0(!0),Z0=K0(!1),tu=ts(null),nu=null,wo=null,Sp=null;function Ep(){Sp=wo=nu=null}function Mp(t){var e=tu.current;kt(tu),t._currentValue=e}function Wd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Do(t,e){nu=t,Sp=wo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(kn=!0),t.firstContext=null)}function mi(t){var e=t._currentValue;if(Sp!==t)if(t={context:t,memoizedValue:e,next:null},wo===null){if(nu===null)throw Error(ue(308));wo=t,nu.dependencies={lanes:0,firstContext:t}}else wo=wo.next=t;return e}var As=null;function wp(t){As===null?As=[t]:As.push(t)}function Q0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,wp(e)):(n.next=r.next,r.next=n),e.interleaved=n,mr(t,i)}function mr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Dr=!1;function Tp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function J0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function fr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Gr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,_t&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,mr(t,n)}return r=i.interleaved,r===null?(e.next=e,wp(i)):(e.next=r.next,r.next=e),i.interleaved=e,mr(t,n)}function bc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,up(t,n)}}function e_(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function iu(t,e,n,i){var r=t.updateQueue;Dr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var c=a,u=c.next;c.next=null,o===null?s=u:o.next=u,o=c;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=c))}if(s!==null){var h=r.baseState;o=0,d=u=c=null,a=s;do{var p=a.lane,_=a.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:_,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,M=a;switch(p=e,_=n,M.tag){case 1:if(x=M.payload,typeof x=="function"){h=x.call(_,h,p);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=M.payload,p=typeof x=="function"?x.call(_,h,p):x,p==null)break e;h=Xt({},h,p);break e;case 2:Dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[a]:p.push(a))}else _={eventTime:_,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=_,c=h):d=d.next=_,o|=p;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;p=a,a=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(d===null&&(c=h),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Os|=o,t.lanes=o,t.memoizedState=h}}function t_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var ll={},Vi=ts(ll),Ya=ts(ll),qa=ts(ll);function Cs(t){if(t===ll)throw Error(ue(174));return t}function Ap(t,e){switch(Ut(qa,e),Ut(Ya,t),Ut(Vi,ll),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wd(e,t)}kt(Vi),Ut(Vi,e)}function Ho(){kt(Vi),kt(Ya),kt(qa)}function ex(t){Cs(qa.current);var e=Cs(Vi.current),n=wd(e,t.type);e!==n&&(Ut(Ya,t),Ut(Vi,n))}function Cp(t){Ya.current===t&&(kt(Vi),kt(Ya))}var Gt=ts(0);function ru(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bf=[];function bp(){for(var t=0;t<bf.length;t++)bf[t]._workInProgressVersionPrimary=null;bf.length=0}var Rc=xr.ReactCurrentDispatcher,Rf=xr.ReactCurrentBatchConfig,Us=0,Wt=null,tn=null,cn=null,su=!1,Ia=!1,Ka=0,Cw=0;function vn(){throw Error(ue(321))}function Rp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ii(t[n],e[n]))return!1;return!0}function Pp(t,e,n,i,r,s){if(Us=s,Wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rc.current=t===null||t.memoizedState===null?Lw:Dw,t=n(i,r),Ia){s=0;do{if(Ia=!1,Ka=0,25<=s)throw Error(ue(301));s+=1,cn=tn=null,e.updateQueue=null,Rc.current=Iw,t=n(i,r)}while(Ia)}if(Rc.current=ou,e=tn!==null&&tn.next!==null,Us=0,cn=tn=Wt=null,su=!1,e)throw Error(ue(300));return t}function Lp(){var t=Ka!==0;return Ka=0,t}function Fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?Wt.memoizedState=cn=t:cn=cn.next=t,cn}function gi(){if(tn===null){var t=Wt.alternate;t=t!==null?t.memoizedState:null}else t=tn.next;var e=cn===null?Wt.memoizedState:cn.next;if(e!==null)cn=e,tn=t;else{if(t===null)throw Error(ue(310));tn=t,t={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},cn===null?Wt.memoizedState=cn=t:cn=cn.next=t}return cn}function Za(t,e){return typeof e=="function"?e(t):e}function Pf(t){var e=gi(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=tn,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,c=null,u=s;do{var d=u.lane;if((Us&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(a=c=h,o=i):c=c.next=h,Wt.lanes|=d,Os|=d}u=u.next}while(u!==null&&u!==s);c===null?o=i:c.next=a,Ii(i,e.memoizedState)||(kn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Wt.lanes|=s,Os|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Lf(t){var e=gi(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Ii(s,e.memoizedState)||(kn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function tx(){}function nx(t,e){var n=Wt,i=gi(),r=e(),s=!Ii(i.memoizedState,r);if(s&&(i.memoizedState=r,kn=!0),i=i.queue,Dp(sx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||cn!==null&&cn.memoizedState.tag&1){if(n.flags|=2048,Qa(9,rx.bind(null,n,i,r,e),void 0,null),un===null)throw Error(ue(349));Us&30||ix(n,e,r)}return r}function ix(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Wt.updateQueue,e===null?(e={lastEffect:null,stores:null},Wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rx(t,e,n,i){e.value=n,e.getSnapshot=i,ox(e)&&ax(t)}function sx(t,e,n){return n(function(){ox(e)&&ax(t)})}function ox(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ii(t,n)}catch{return!0}}function ax(t){var e=mr(t,1);e!==null&&Pi(e,t,1,-1)}function n_(t){var e=Fi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Za,lastRenderedState:t},e.queue=t,t=t.dispatch=Pw.bind(null,Wt,t),[e.memoizedState,t]}function Qa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Wt.updateQueue,e===null?(e={lastEffect:null,stores:null},Wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function lx(){return gi().memoizedState}function Pc(t,e,n,i){var r=Fi();Wt.flags|=t,r.memoizedState=Qa(1|e,n,void 0,i===void 0?null:i)}function Mu(t,e,n,i){var r=gi();i=i===void 0?null:i;var s=void 0;if(tn!==null){var o=tn.memoizedState;if(s=o.destroy,i!==null&&Rp(i,o.deps)){r.memoizedState=Qa(e,n,s,i);return}}Wt.flags|=t,r.memoizedState=Qa(1|e,n,s,i)}function i_(t,e){return Pc(8390656,8,t,e)}function Dp(t,e){return Mu(2048,8,t,e)}function cx(t,e){return Mu(4,2,t,e)}function ux(t,e){return Mu(4,4,t,e)}function fx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dx(t,e,n){return n=n!=null?n.concat([t]):null,Mu(4,4,fx.bind(null,e,t),n)}function Ip(){}function hx(t,e){var n=gi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function px(t,e){var n=gi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function mx(t,e,n){return Us&21?(Ii(n,e)||(n=y0(),Wt.lanes|=n,Os|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,kn=!0),t.memoizedState=n)}function bw(t,e){var n=Mt;Mt=n!==0&&4>n?n:4,t(!0);var i=Rf.transition;Rf.transition={};try{t(!1),e()}finally{Mt=n,Rf.transition=i}}function gx(){return gi().memoizedState}function Rw(t,e,n){var i=Xr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},_x(t))vx(e,n);else if(n=Q0(t,e,n,i),n!==null){var r=Pn();Pi(n,t,i,r),xx(n,e,i)}}function Pw(t,e,n){var i=Xr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(_x(t))vx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Ii(a,o)){var c=e.interleaved;c===null?(r.next=r,wp(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=Q0(t,e,r,i),n!==null&&(r=Pn(),Pi(n,t,i,r),xx(n,e,i))}}function _x(t){var e=t.alternate;return t===Wt||e!==null&&e===Wt}function vx(t,e){Ia=su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,up(t,n)}}var ou={readContext:mi,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},Lw={readContext:mi,useCallback:function(t,e){return Fi().memoizedState=[t,e===void 0?null:e],t},useContext:mi,useEffect:i_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pc(4194308,4,fx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pc(4,2,t,e)},useMemo:function(t,e){var n=Fi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Fi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Rw.bind(null,Wt,t),[i.memoizedState,t]},useRef:function(t){var e=Fi();return t={current:t},e.memoizedState=t},useState:n_,useDebugValue:Ip,useDeferredValue:function(t){return Fi().memoizedState=t},useTransition:function(){var t=n_(!1),e=t[0];return t=bw.bind(null,t[1]),Fi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Wt,r=Fi();if(zt){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),un===null)throw Error(ue(349));Us&30||ix(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,i_(sx.bind(null,i,s,t),[t]),i.flags|=2048,Qa(9,rx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Fi(),e=un.identifierPrefix;if(zt){var n=ar,i=or;n=(i&~(1<<32-Ri(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Cw++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Dw={readContext:mi,useCallback:hx,useContext:mi,useEffect:Dp,useImperativeHandle:dx,useInsertionEffect:cx,useLayoutEffect:ux,useMemo:px,useReducer:Pf,useRef:lx,useState:function(){return Pf(Za)},useDebugValue:Ip,useDeferredValue:function(t){var e=gi();return mx(e,tn.memoizedState,t)},useTransition:function(){var t=Pf(Za)[0],e=gi().memoizedState;return[t,e]},useMutableSource:tx,useSyncExternalStore:nx,useId:gx,unstable_isNewReconciler:!1},Iw={readContext:mi,useCallback:hx,useContext:mi,useEffect:Dp,useImperativeHandle:dx,useInsertionEffect:cx,useLayoutEffect:ux,useMemo:px,useReducer:Lf,useRef:lx,useState:function(){return Lf(Za)},useDebugValue:Ip,useDeferredValue:function(t){var e=gi();return tn===null?e.memoizedState=t:mx(e,tn.memoizedState,t)},useTransition:function(){var t=Lf(Za)[0],e=gi().memoizedState;return[t,e]},useMutableSource:tx,useSyncExternalStore:nx,useId:gx,unstable_isNewReconciler:!1};function wi(t,e){if(t&&t.defaultProps){e=Xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Xd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wu={isMounted:function(t){return(t=t._reactInternals)?Hs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Pn(),r=Xr(t),s=fr(i,r);s.payload=e,n!=null&&(s.callback=n),e=Gr(t,s,r),e!==null&&(Pi(e,t,r,i),bc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Pn(),r=Xr(t),s=fr(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Gr(t,s,r),e!==null&&(Pi(e,t,r,i),bc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pn(),i=Xr(t),r=fr(n,i);r.tag=2,e!=null&&(r.callback=e),e=Gr(t,r,i),e!==null&&(Pi(e,t,i,n),bc(e,t,i))}};function r_(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Wa(n,i)||!Wa(r,s):!0}function yx(t,e,n){var i=!1,r=Zr,s=e.contextType;return typeof s=="object"&&s!==null?s=mi(s):(r=zn(e)?Is:Mn.current,i=e.contextTypes,s=(i=i!=null)?ko(t,r):Zr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function s_(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&wu.enqueueReplaceState(e,e.state,null)}function jd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Tp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=mi(s):(s=zn(e)?Is:Mn.current,r.context=ko(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Xd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&wu.enqueueReplaceState(r,r.state,null),iu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Vo(t,e){try{var n="",i=e;do n+=aM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Df(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $d(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Nw=typeof WeakMap=="function"?WeakMap:Map;function Sx(t,e,n){n=fr(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){lu||(lu=!0,ih=i),$d(t,e)},n}function Ex(t,e,n){n=fr(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){$d(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$d(t,e),typeof i!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function o_(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Nw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Yw.bind(null,t,e,n),e.then(t,t))}function a_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function l_(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=fr(-1,1),e.tag=2,Gr(n,e,1))),n.lanes|=1),t)}var Uw=xr.ReactCurrentOwner,kn=!1;function Rn(t,e,n,i){e.child=t===null?Z0(e,null,n,i):zo(e,t.child,n,i)}function c_(t,e,n,i,r){n=n.render;var s=e.ref;return Do(e,r),i=Pp(t,e,n,i,s,r),n=Lp(),t!==null&&!kn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gr(t,e,r)):(zt&&n&&vp(e),e.flags|=1,Rn(t,e,i,r),e.child)}function u_(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Hp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Mx(t,e,s,i,r)):(t=Nc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Wa,n(o,i)&&t.ref===e.ref)return gr(t,e,r)}return e.flags|=1,t=jr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Mx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Wa(s,i)&&t.ref===e.ref)if(kn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(kn=!0);else return e.lanes=t.lanes,gr(t,e,r)}return Yd(t,e,n,i,r)}function wx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Ao,Zn),Zn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ut(Ao,Zn),Zn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,Ut(Ao,Zn),Zn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,Ut(Ao,Zn),Zn|=i;return Rn(t,e,r,n),e.child}function Tx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yd(t,e,n,i,r){var s=zn(n)?Is:Mn.current;return s=ko(e,s),Do(e,r),n=Pp(t,e,n,i,s,r),i=Lp(),t!==null&&!kn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,gr(t,e,r)):(zt&&i&&vp(e),e.flags|=1,Rn(t,e,n,r),e.child)}function f_(t,e,n,i,r){if(zn(n)){var s=!0;Qc(e)}else s=!1;if(Do(e,r),e.stateNode===null)Lc(t,e),yx(e,n,i),jd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var c=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=mi(u):(u=zn(n)?Is:Mn.current,u=ko(e,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||c!==u)&&s_(e,o,i,u),Dr=!1;var p=e.memoizedState;o.state=p,iu(e,i,o,r),c=e.memoizedState,a!==i||p!==c||Bn.current||Dr?(typeof d=="function"&&(Xd(e,n,d,i),c=e.memoizedState),(a=Dr||r_(e,n,a,i,p,c,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),o.props=i,o.state=c,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,J0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:wi(e.type,a),o.props=u,h=e.pendingProps,p=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=mi(c):(c=zn(n)?Is:Mn.current,c=ko(e,c));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||p!==c)&&s_(e,o,i,c),Dr=!1,p=e.memoizedState,o.state=p,iu(e,i,o,r);var x=e.memoizedState;a!==h||p!==x||Bn.current||Dr?(typeof _=="function"&&(Xd(e,n,_,i),x=e.memoizedState),(u=Dr||r_(e,n,u,i,p,x,c)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,c)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=c,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return qd(t,e,n,i,s,r)}function qd(t,e,n,i,r,s){Tx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Kg(e,n,!1),gr(t,e,s);i=e.stateNode,Uw.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=zo(e,t.child,null,s),e.child=zo(e,null,a,s)):Rn(t,e,a,s),e.memoizedState=i.state,r&&Kg(e,n,!0),e.child}function Ax(t){var e=t.stateNode;e.pendingContext?qg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qg(t,e.context,!1),Ap(t,e.containerInfo)}function d_(t,e,n,i,r){return Bo(),yp(r),e.flags|=256,Rn(t,e,n,i),e.child}var Kd={dehydrated:null,treeContext:null,retryLane:0};function Zd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Cx(t,e,n){var i=e.pendingProps,r=Gt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),Ut(Gt,r&1),t===null)return Gd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cu(o,i,0,null),t=Ls(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zd(n),e.memoizedState=Kd,t):Np(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ow(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var c={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=jr(r,c),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=jr(a,s):(s=Ls(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Zd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Kd,i}return s=t.child,t=s.sibling,i=jr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Np(t,e){return e=Cu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $l(t,e,n,i){return i!==null&&yp(i),zo(e,t.child,null,n),t=Np(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ow(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Df(Error(ue(422))),$l(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Cu({mode:"visible",children:i.children},r,0,null),s=Ls(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&zo(e,t.child,null,o),e.child.memoizedState=Zd(o),e.memoizedState=Kd,s);if(!(e.mode&1))return $l(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ue(419)),i=Df(s,i,void 0),$l(t,e,o,i)}if(a=(o&t.childLanes)!==0,kn||a){if(i=un,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,mr(t,r),Pi(i,t,r,-1))}return zp(),i=Df(Error(ue(421))),$l(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=qw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Qn=Vr(r.nextSibling),Jn=e,zt=!0,Ai=null,t!==null&&(ui[fi++]=or,ui[fi++]=ar,ui[fi++]=Ns,or=t.id,ar=t.overflow,Ns=e),e=Np(e,i.children),e.flags|=4096,e)}function h_(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Wd(t.return,e,n)}function If(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function bx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Rn(t,e,i.children,n),i=Gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&h_(t,n,e);else if(t.tag===19)h_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Ut(Gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ru(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),If(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ru(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}If(e,!0,n,null,s);break;case"together":If(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Lc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function gr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Os|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=jr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=jr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Fw(t,e,n){switch(e.tag){case 3:Ax(e),Bo();break;case 5:ex(e);break;case 1:zn(e.type)&&Qc(e);break;case 4:Ap(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Ut(tu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Ut(Gt,Gt.current&1),e.flags|=128,null):n&e.child.childLanes?Cx(t,e,n):(Ut(Gt,Gt.current&1),t=gr(t,e,n),t!==null?t.sibling:null);Ut(Gt,Gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return bx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Ut(Gt,Gt.current),i)break;return null;case 22:case 23:return e.lanes=0,wx(t,e,n)}return gr(t,e,n)}var Rx,Qd,Px,Lx;Rx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Qd=function(){};Px=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Cs(Vi.current);var s=null;switch(n){case"input":r=yd(t,r),i=yd(t,i),s=[];break;case"select":r=Xt({},r,{value:void 0}),i=Xt({},i,{value:void 0}),s=[];break;case"textarea":r=Md(t,r),i=Md(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Kc)}Td(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Fa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==a&&(c!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&a[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,a=a?a.__html:void 0,c!=null&&a!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Fa.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ft("scroll",t),s||a===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Lx=function(t,e,n,i){n!==i&&(e.flags|=4)};function ma(t,e){if(!zt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function xn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function kw(t,e,n){var i=e.pendingProps;switch(xp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return xn(e),null;case 1:return zn(e.type)&&Zc(),xn(e),null;case 3:return i=e.stateNode,Ho(),kt(Bn),kt(Mn),bp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Xl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ai!==null&&(oh(Ai),Ai=null))),Qd(t,e),xn(e),null;case 5:Cp(e);var r=Cs(qa.current);if(n=e.type,t!==null&&e.stateNode!=null)Px(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return xn(e),null}if(t=Cs(Vi.current),Xl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Bi]=e,i[$a]=s,t=(e.mode&1)!==0,n){case"dialog":Ft("cancel",i),Ft("close",i);break;case"iframe":case"object":case"embed":Ft("load",i);break;case"video":case"audio":for(r=0;r<Ta.length;r++)Ft(Ta[r],i);break;case"source":Ft("error",i);break;case"img":case"image":case"link":Ft("error",i),Ft("load",i);break;case"details":Ft("toggle",i);break;case"input":Eg(i,s),Ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Ft("invalid",i);break;case"textarea":wg(i,s),Ft("invalid",i)}Td(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Wl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Wl(i.textContent,a,t),r=["children",""+a]):Fa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ft("scroll",i)}switch(n){case"input":Ol(i),Mg(i,s,!0);break;case"textarea":Ol(i),Tg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Kc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=s0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Bi]=e,t[$a]=i,Rx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ad(n,i),n){case"dialog":Ft("cancel",t),Ft("close",t),r=i;break;case"iframe":case"object":case"embed":Ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ta.length;r++)Ft(Ta[r],t);r=i;break;case"source":Ft("error",t),r=i;break;case"img":case"image":case"link":Ft("error",t),Ft("load",t),r=i;break;case"details":Ft("toggle",t),r=i;break;case"input":Eg(t,i),r=yd(t,i),Ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Xt({},i,{value:void 0}),Ft("invalid",t);break;case"textarea":wg(t,i),r=Md(t,i),Ft("invalid",t);break;default:r=i}Td(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="style"?l0(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&o0(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ka(t,c):typeof c=="number"&&ka(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fa.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Ft("scroll",t):c!=null&&rp(t,s,c,o))}switch(n){case"input":Ol(t),Mg(t,i,!1);break;case"textarea":Ol(t),Tg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Kr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?bo(t,!!i.multiple,s,!1):i.defaultValue!=null&&bo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Kc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return xn(e),null;case 6:if(t&&e.stateNode!=null)Lx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(n=Cs(qa.current),Cs(Vi.current),Xl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Bi]=e,(s=i.nodeValue!==n)&&(t=Jn,t!==null))switch(t.tag){case 3:Wl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Bi]=e,e.stateNode=i}return xn(e),null;case 13:if(kt(Gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(zt&&Qn!==null&&e.mode&1&&!(e.flags&128))q0(),Bo(),e.flags|=98560,s=!1;else if(s=Xl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[Bi]=e}else Bo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;xn(e),s=!1}else Ai!==null&&(oh(Ai),Ai=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Gt.current&1?nn===0&&(nn=3):zp())),e.updateQueue!==null&&(e.flags|=4),xn(e),null);case 4:return Ho(),Qd(t,e),t===null&&Xa(e.stateNode.containerInfo),xn(e),null;case 10:return Mp(e.type._context),xn(e),null;case 17:return zn(e.type)&&Zc(),xn(e),null;case 19:if(kt(Gt),s=e.memoizedState,s===null)return xn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ma(s,!1);else{if(nn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ru(t),o!==null){for(e.flags|=128,ma(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ut(Gt,Gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&qt()>Go&&(e.flags|=128,i=!0,ma(s,!1),e.lanes=4194304)}else{if(!i)if(t=ru(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ma(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!zt)return xn(e),null}else 2*qt()-s.renderingStartTime>Go&&n!==1073741824&&(e.flags|=128,i=!0,ma(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=qt(),e.sibling=null,n=Gt.current,Ut(Gt,i?n&1|2:n&1),e):(xn(e),null);case 22:case 23:return Bp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Zn&1073741824&&(xn(e),e.subtreeFlags&6&&(e.flags|=8192)):xn(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function Bw(t,e){switch(xp(e),e.tag){case 1:return zn(e.type)&&Zc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ho(),kt(Bn),kt(Mn),bp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Cp(e),null;case 13:if(kt(Gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));Bo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return kt(Gt),null;case 4:return Ho(),null;case 10:return Mp(e.type._context),null;case 22:case 23:return Bp(),null;case 24:return null;default:return null}}var Yl=!1,En=!1,zw=typeof WeakSet=="function"?WeakSet:Set,Re=null;function To(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){$t(t,e,i)}else n.current=null}function Jd(t,e,n){try{n()}catch(i){$t(t,e,i)}}var p_=!1;function Hw(t,e){if(Od=$c,t=O0(),_p(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,c=-1,u=0,d=0,h=t,p=null;t:for(;;){for(var _;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(c=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(_=h.firstChild)!==null;)p=h,h=_;for(;;){if(h===t)break t;if(p===n&&++u===r&&(a=o),p===s&&++d===i&&(c=o),(_=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=_}n=a===-1||c===-1?null:{start:a,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fd={focusedElem:t,selectionRange:n},$c=!1,Re=e;Re!==null;)if(e=Re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Re=t;else for(;Re!==null;){e=Re;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var M=x.memoizedProps,g=x.memoizedState,f=e.stateNode,v=f.getSnapshotBeforeUpdate(e.elementType===e.type?M:wi(e.type,M),g);f.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(E){$t(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}return x=p_,p_=!1,x}function Na(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Jd(e,n,s)}r=r.next}while(r!==i)}}function Tu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function eh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Dx(t){var e=t.alternate;e!==null&&(t.alternate=null,Dx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bi],delete e[$a],delete e[zd],delete e[Mw],delete e[ww])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ix(t){return t.tag===5||t.tag===3||t.tag===4}function m_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ix(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function th(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Kc));else if(i!==4&&(t=t.child,t!==null))for(th(t,e,n),t=t.sibling;t!==null;)th(t,e,n),t=t.sibling}function nh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(nh(t,e,n),t=t.sibling;t!==null;)nh(t,e,n),t=t.sibling}var pn=null,Ti=!1;function wr(t,e,n){for(n=n.child;n!==null;)Nx(t,e,n),n=n.sibling}function Nx(t,e,n){if(Hi&&typeof Hi.onCommitFiberUnmount=="function")try{Hi.onCommitFiberUnmount(_u,n)}catch{}switch(n.tag){case 5:En||To(n,e);case 6:var i=pn,r=Ti;pn=null,wr(t,e,n),pn=i,Ti=r,pn!==null&&(Ti?(t=pn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):pn.removeChild(n.stateNode));break;case 18:pn!==null&&(Ti?(t=pn,n=n.stateNode,t.nodeType===8?Af(t.parentNode,n):t.nodeType===1&&Af(t,n),Va(t)):Af(pn,n.stateNode));break;case 4:i=pn,r=Ti,pn=n.stateNode.containerInfo,Ti=!0,wr(t,e,n),pn=i,Ti=r;break;case 0:case 11:case 14:case 15:if(!En&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Jd(n,e,o),r=r.next}while(r!==i)}wr(t,e,n);break;case 1:if(!En&&(To(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){$t(n,e,a)}wr(t,e,n);break;case 21:wr(t,e,n);break;case 22:n.mode&1?(En=(i=En)||n.memoizedState!==null,wr(t,e,n),En=i):wr(t,e,n);break;default:wr(t,e,n)}}function g_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zw),e.forEach(function(i){var r=Kw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function yi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:pn=a.stateNode,Ti=!1;break e;case 3:pn=a.stateNode.containerInfo,Ti=!0;break e;case 4:pn=a.stateNode.containerInfo,Ti=!0;break e}a=a.return}if(pn===null)throw Error(ue(160));Nx(s,o,r),pn=null,Ti=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){$t(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ux(e,t),e=e.sibling}function Ux(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yi(e,t),Oi(t),i&4){try{Na(3,t,t.return),Tu(3,t)}catch(M){$t(t,t.return,M)}try{Na(5,t,t.return)}catch(M){$t(t,t.return,M)}}break;case 1:yi(e,t),Oi(t),i&512&&n!==null&&To(n,n.return);break;case 5:if(yi(e,t),Oi(t),i&512&&n!==null&&To(n,n.return),t.flags&32){var r=t.stateNode;try{ka(r,"")}catch(M){$t(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&i0(r,s),Ad(a,o);var u=Ad(a,s);for(o=0;o<c.length;o+=2){var d=c[o],h=c[o+1];d==="style"?l0(r,h):d==="dangerouslySetInnerHTML"?o0(r,h):d==="children"?ka(r,h):rp(r,d,h,u)}switch(a){case"input":Sd(r,s);break;case"textarea":r0(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?bo(r,!!s.multiple,_,!1):p!==!!s.multiple&&(s.defaultValue!=null?bo(r,!!s.multiple,s.defaultValue,!0):bo(r,!!s.multiple,s.multiple?[]:"",!1))}r[$a]=s}catch(M){$t(t,t.return,M)}}break;case 6:if(yi(e,t),Oi(t),i&4){if(t.stateNode===null)throw Error(ue(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){$t(t,t.return,M)}}break;case 3:if(yi(e,t),Oi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Va(e.containerInfo)}catch(M){$t(t,t.return,M)}break;case 4:yi(e,t),Oi(t);break;case 13:yi(e,t),Oi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Fp=qt())),i&4&&g_(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(En=(u=En)||d,yi(e,t),En=u):yi(e,t),Oi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(Re=t,d=t.child;d!==null;){for(h=Re=d;Re!==null;){switch(p=Re,_=p.child,p.tag){case 0:case 11:case 14:case 15:Na(4,p,p.return);break;case 1:To(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(M){$t(i,n,M)}}break;case 5:To(p,p.return);break;case 22:if(p.memoizedState!==null){v_(h);continue}}_!==null?(_.return=p,Re=_):v_(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,c=h.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,a.style.display=a0("display",o))}catch(M){$t(t,t.return,M)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(M){$t(t,t.return,M)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:yi(e,t),Oi(t),i&4&&g_(t);break;case 21:break;default:yi(e,t),Oi(t)}}function Oi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ix(n)){var i=n;break e}n=n.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ka(r,""),i.flags&=-33);var s=m_(t);nh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=m_(t);th(t,a,o);break;default:throw Error(ue(161))}}catch(c){$t(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Vw(t,e,n){Re=t,Ox(t)}function Ox(t,e,n){for(var i=(t.mode&1)!==0;Re!==null;){var r=Re,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Yl;if(!o){var a=r.alternate,c=a!==null&&a.memoizedState!==null||En;a=Yl;var u=En;if(Yl=o,(En=c)&&!u)for(Re=r;Re!==null;)o=Re,c=o.child,o.tag===22&&o.memoizedState!==null?x_(r):c!==null?(c.return=o,Re=c):x_(r);for(;s!==null;)Re=s,Ox(s),s=s.sibling;Re=r,Yl=a,En=u}__(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Re=s):__(t)}}function __(t){for(;Re!==null;){var e=Re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:En||Tu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!En)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:wi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&t_(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}t_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Va(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}En||e.flags&512&&eh(e)}catch(p){$t(e,e.return,p)}}if(e===t){Re=null;break}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}}function v_(t){for(;Re!==null;){var e=Re;if(e===t){Re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Re=n;break}Re=e.return}}function x_(t){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Tu(4,e)}catch(c){$t(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){$t(e,r,c)}}var s=e.return;try{eh(e)}catch(c){$t(e,s,c)}break;case 5:var o=e.return;try{eh(e)}catch(c){$t(e,o,c)}}}catch(c){$t(e,e.return,c)}if(e===t){Re=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Re=a;break}Re=e.return}}var Gw=Math.ceil,au=xr.ReactCurrentDispatcher,Up=xr.ReactCurrentOwner,pi=xr.ReactCurrentBatchConfig,_t=0,un=null,Jt=null,mn=0,Zn=0,Ao=ts(0),nn=0,Ja=null,Os=0,Au=0,Op=0,Ua=null,On=null,Fp=0,Go=1/0,ir=null,lu=!1,ih=null,Wr=null,ql=!1,Fr=null,cu=0,Oa=0,rh=null,Dc=-1,Ic=0;function Pn(){return _t&6?qt():Dc!==-1?Dc:Dc=qt()}function Xr(t){return t.mode&1?_t&2&&mn!==0?mn&-mn:Aw.transition!==null?(Ic===0&&(Ic=y0()),Ic):(t=Mt,t!==0||(t=window.event,t=t===void 0?16:C0(t.type)),t):1}function Pi(t,e,n,i){if(50<Oa)throw Oa=0,rh=null,Error(ue(185));sl(t,n,i),(!(_t&2)||t!==un)&&(t===un&&(!(_t&2)&&(Au|=n),nn===4&&Nr(t,mn)),Hn(t,i),n===1&&_t===0&&!(e.mode&1)&&(Go=qt()+500,Eu&&ns()))}function Hn(t,e){var n=t.callbackNode;AM(t,e);var i=jc(t,t===un?mn:0);if(i===0)n!==null&&bg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&bg(n),e===1)t.tag===0?Tw(y_.bind(null,t)):j0(y_.bind(null,t)),Sw(function(){!(_t&6)&&ns()}),n=null;else{switch(S0(i)){case 1:n=cp;break;case 4:n=v0;break;case 16:n=Xc;break;case 536870912:n=x0;break;default:n=Xc}n=Wx(n,Fx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Fx(t,e){if(Dc=-1,Ic=0,_t&6)throw Error(ue(327));var n=t.callbackNode;if(Io()&&t.callbackNode!==n)return null;var i=jc(t,t===un?mn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=uu(t,i);else{e=i;var r=_t;_t|=2;var s=Bx();(un!==t||mn!==e)&&(ir=null,Go=qt()+500,Ps(t,e));do try{jw();break}catch(a){kx(t,a)}while(!0);Ep(),au.current=s,_t=r,Jt!==null?e=0:(un=null,mn=0,e=nn)}if(e!==0){if(e===2&&(r=Ld(t),r!==0&&(i=r,e=sh(t,r))),e===1)throw n=Ja,Ps(t,0),Nr(t,i),Hn(t,qt()),n;if(e===6)Nr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ww(r)&&(e=uu(t,i),e===2&&(s=Ld(t),s!==0&&(i=s,e=sh(t,s))),e===1))throw n=Ja,Ps(t,0),Nr(t,i),Hn(t,qt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:ys(t,On,ir);break;case 3:if(Nr(t,i),(i&130023424)===i&&(e=Fp+500-qt(),10<e)){if(jc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Pn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Bd(ys.bind(null,t,On,ir),e);break}ys(t,On,ir);break;case 4:if(Nr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Ri(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=qt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Gw(i/1960))-i,10<i){t.timeoutHandle=Bd(ys.bind(null,t,On,ir),i);break}ys(t,On,ir);break;case 5:ys(t,On,ir);break;default:throw Error(ue(329))}}}return Hn(t,qt()),t.callbackNode===n?Fx.bind(null,t):null}function sh(t,e){var n=Ua;return t.current.memoizedState.isDehydrated&&(Ps(t,e).flags|=256),t=uu(t,e),t!==2&&(e=On,On=n,e!==null&&oh(e)),t}function oh(t){On===null?On=t:On.push.apply(On,t)}function Ww(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Ii(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Nr(t,e){for(e&=~Op,e&=~Au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ri(e),i=1<<n;t[n]=-1,e&=~i}}function y_(t){if(_t&6)throw Error(ue(327));Io();var e=jc(t,0);if(!(e&1))return Hn(t,qt()),null;var n=uu(t,e);if(t.tag!==0&&n===2){var i=Ld(t);i!==0&&(e=i,n=sh(t,i))}if(n===1)throw n=Ja,Ps(t,0),Nr(t,e),Hn(t,qt()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ys(t,On,ir),Hn(t,qt()),null}function kp(t,e){var n=_t;_t|=1;try{return t(e)}finally{_t=n,_t===0&&(Go=qt()+500,Eu&&ns())}}function Fs(t){Fr!==null&&Fr.tag===0&&!(_t&6)&&Io();var e=_t;_t|=1;var n=pi.transition,i=Mt;try{if(pi.transition=null,Mt=1,t)return t()}finally{Mt=i,pi.transition=n,_t=e,!(_t&6)&&ns()}}function Bp(){Zn=Ao.current,kt(Ao)}function Ps(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,yw(n)),Jt!==null)for(n=Jt.return;n!==null;){var i=n;switch(xp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Zc();break;case 3:Ho(),kt(Bn),kt(Mn),bp();break;case 5:Cp(i);break;case 4:Ho();break;case 13:kt(Gt);break;case 19:kt(Gt);break;case 10:Mp(i.type._context);break;case 22:case 23:Bp()}n=n.return}if(un=t,Jt=t=jr(t.current,null),mn=Zn=e,nn=0,Ja=null,Op=Au=Os=0,On=Ua=null,As!==null){for(e=0;e<As.length;e++)if(n=As[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}As=null}return t}function kx(t,e){do{var n=Jt;try{if(Ep(),Rc.current=ou,su){for(var i=Wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}su=!1}if(Us=0,cn=tn=Wt=null,Ia=!1,Ka=0,Up.current=null,n===null||n.return===null){nn=1,Ja=e,Jt=null;break}e:{var s=t,o=n.return,a=n,c=e;if(e=mn,a.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=a_(o);if(_!==null){_.flags&=-257,l_(_,o,a,s,e),_.mode&1&&o_(s,u,e),e=_,c=u;var x=e.updateQueue;if(x===null){var M=new Set;M.add(c),e.updateQueue=M}else x.add(c);break e}else{if(!(e&1)){o_(s,u,e),zp();break e}c=Error(ue(426))}}else if(zt&&a.mode&1){var g=a_(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),l_(g,o,a,s,e),yp(Vo(c,a));break e}}s=c=Vo(c,a),nn!==4&&(nn=2),Ua===null?Ua=[s]:Ua.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Sx(s,c,e);e_(s,f);break e;case 1:a=c;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Wr===null||!Wr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Ex(s,a,e);e_(s,E);break e}}s=s.return}while(s!==null)}Hx(n)}catch(I){e=I,Jt===n&&n!==null&&(Jt=n=n.return);continue}break}while(!0)}function Bx(){var t=au.current;return au.current=ou,t===null?ou:t}function zp(){(nn===0||nn===3||nn===2)&&(nn=4),un===null||!(Os&268435455)&&!(Au&268435455)||Nr(un,mn)}function uu(t,e){var n=_t;_t|=2;var i=Bx();(un!==t||mn!==e)&&(ir=null,Ps(t,e));do try{Xw();break}catch(r){kx(t,r)}while(!0);if(Ep(),_t=n,au.current=i,Jt!==null)throw Error(ue(261));return un=null,mn=0,nn}function Xw(){for(;Jt!==null;)zx(Jt)}function jw(){for(;Jt!==null&&!_M();)zx(Jt)}function zx(t){var e=Gx(t.alternate,t,Zn);t.memoizedProps=t.pendingProps,e===null?Hx(t):Jt=e,Up.current=null}function Hx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Bw(n,e),n!==null){n.flags&=32767,Jt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{nn=6,Jt=null;return}}else if(n=kw(n,e,Zn),n!==null){Jt=n;return}if(e=e.sibling,e!==null){Jt=e;return}Jt=e=t}while(e!==null);nn===0&&(nn=5)}function ys(t,e,n){var i=Mt,r=pi.transition;try{pi.transition=null,Mt=1,$w(t,e,n,i)}finally{pi.transition=r,Mt=i}return null}function $w(t,e,n,i){do Io();while(Fr!==null);if(_t&6)throw Error(ue(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(CM(t,s),t===un&&(Jt=un=null,mn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ql||(ql=!0,Wx(Xc,function(){return Io(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=pi.transition,pi.transition=null;var o=Mt;Mt=1;var a=_t;_t|=4,Up.current=null,Hw(t,n),Ux(n,t),hw(Fd),$c=!!Od,Fd=Od=null,t.current=n,Vw(n),vM(),_t=a,Mt=o,pi.transition=s}else t.current=n;if(ql&&(ql=!1,Fr=t,cu=r),s=t.pendingLanes,s===0&&(Wr=null),SM(n.stateNode),Hn(t,qt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(lu)throw lu=!1,t=ih,ih=null,t;return cu&1&&t.tag!==0&&Io(),s=t.pendingLanes,s&1?t===rh?Oa++:(Oa=0,rh=t):Oa=0,ns(),null}function Io(){if(Fr!==null){var t=S0(cu),e=pi.transition,n=Mt;try{if(pi.transition=null,Mt=16>t?16:t,Fr===null)var i=!1;else{if(t=Fr,Fr=null,cu=0,_t&6)throw Error(ue(331));var r=_t;for(_t|=4,Re=t.current;Re!==null;){var s=Re,o=s.child;if(Re.flags&16){var a=s.deletions;if(a!==null){for(var c=0;c<a.length;c++){var u=a[c];for(Re=u;Re!==null;){var d=Re;switch(d.tag){case 0:case 11:case 15:Na(8,d,s)}var h=d.child;if(h!==null)h.return=d,Re=h;else for(;Re!==null;){d=Re;var p=d.sibling,_=d.return;if(Dx(d),d===u){Re=null;break}if(p!==null){p.return=_,Re=p;break}Re=_}}}var x=s.alternate;if(x!==null){var M=x.child;if(M!==null){x.child=null;do{var g=M.sibling;M.sibling=null,M=g}while(M!==null)}}Re=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Re=o;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Na(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Re=f;break e}Re=s.return}}var v=t.current;for(Re=v;Re!==null;){o=Re;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Re=y;else e:for(o=v;Re!==null;){if(a=Re,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Tu(9,a)}}catch(I){$t(a,a.return,I)}if(a===o){Re=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,Re=E;break e}Re=a.return}}if(_t=r,ns(),Hi&&typeof Hi.onPostCommitFiberRoot=="function")try{Hi.onPostCommitFiberRoot(_u,t)}catch{}i=!0}return i}finally{Mt=n,pi.transition=e}}return!1}function S_(t,e,n){e=Vo(n,e),e=Sx(t,e,1),t=Gr(t,e,1),e=Pn(),t!==null&&(sl(t,1,e),Hn(t,e))}function $t(t,e,n){if(t.tag===3)S_(t,t,n);else for(;e!==null;){if(e.tag===3){S_(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Wr===null||!Wr.has(i))){t=Vo(n,t),t=Ex(e,t,1),e=Gr(e,t,1),t=Pn(),e!==null&&(sl(e,1,t),Hn(e,t));break}}e=e.return}}function Yw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Pn(),t.pingedLanes|=t.suspendedLanes&n,un===t&&(mn&n)===n&&(nn===4||nn===3&&(mn&130023424)===mn&&500>qt()-Fp?Ps(t,0):Op|=n),Hn(t,e)}function Vx(t,e){e===0&&(t.mode&1?(e=Bl,Bl<<=1,!(Bl&130023424)&&(Bl=4194304)):e=1);var n=Pn();t=mr(t,e),t!==null&&(sl(t,e,n),Hn(t,n))}function qw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Vx(t,n)}function Kw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),Vx(t,n)}var Gx;Gx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Bn.current)kn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return kn=!1,Fw(t,e,n);kn=!!(t.flags&131072)}else kn=!1,zt&&e.flags&1048576&&$0(e,eu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Lc(t,e),t=e.pendingProps;var r=ko(e,Mn.current);Do(e,n),r=Pp(null,e,i,t,r,n);var s=Lp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,zn(i)?(s=!0,Qc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Tp(e),r.updater=wu,e.stateNode=r,r._reactInternals=e,jd(e,i,t,n),e=qd(null,e,i,!0,s,n)):(e.tag=0,zt&&s&&vp(e),Rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Lc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Qw(i),t=wi(i,t),r){case 0:e=Yd(null,e,i,t,n);break e;case 1:e=f_(null,e,i,t,n);break e;case 11:e=c_(null,e,i,t,n);break e;case 14:e=u_(null,e,i,wi(i.type,t),n);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wi(i,r),Yd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wi(i,r),f_(t,e,i,r,n);case 3:e:{if(Ax(e),t===null)throw Error(ue(387));i=e.pendingProps,s=e.memoizedState,r=s.element,J0(t,e),iu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Vo(Error(ue(423)),e),e=d_(t,e,i,n,r);break e}else if(i!==r){r=Vo(Error(ue(424)),e),e=d_(t,e,i,n,r);break e}else for(Qn=Vr(e.stateNode.containerInfo.firstChild),Jn=e,zt=!0,Ai=null,n=Z0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bo(),i===r){e=gr(t,e,n);break e}Rn(t,e,i,n)}e=e.child}return e;case 5:return ex(e),t===null&&Gd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,kd(i,r)?o=null:s!==null&&kd(i,s)&&(e.flags|=32),Tx(t,e),Rn(t,e,o,n),e.child;case 6:return t===null&&Gd(e),null;case 13:return Cx(t,e,n);case 4:return Ap(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=zo(e,null,i,n):Rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wi(i,r),c_(t,e,i,r,n);case 7:return Rn(t,e,e.pendingProps,n),e.child;case 8:return Rn(t,e,e.pendingProps.children,n),e.child;case 12:return Rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Ut(tu,i._currentValue),i._currentValue=o,s!==null)if(Ii(s.value,o)){if(s.children===r.children&&!Bn.current){e=gr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var c=a.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=fr(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Wd(s.return,n,e),a.lanes|=n;break}c=c.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ue(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Wd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Do(e,n),r=mi(r),i=i(r),e.flags|=1,Rn(t,e,i,n),e.child;case 14:return i=e.type,r=wi(i,e.pendingProps),r=wi(i.type,r),u_(t,e,i,r,n);case 15:return Mx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:wi(i,r),Lc(t,e),e.tag=1,zn(i)?(t=!0,Qc(e)):t=!1,Do(e,n),yx(e,i,r),jd(e,i,r,n),qd(null,e,i,!0,t,n);case 19:return bx(t,e,n);case 22:return wx(t,e,n)}throw Error(ue(156,e.tag))};function Wx(t,e){return _0(t,e)}function Zw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(t,e,n,i){return new Zw(t,e,n,i)}function Hp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Qw(t){if(typeof t=="function")return Hp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===op)return 11;if(t===ap)return 14}return 2}function jr(t,e){var n=t.alternate;return n===null?(n=hi(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Nc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Hp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case go:return Ls(n.children,r,s,e);case sp:o=8,r|=8;break;case gd:return t=hi(12,n,e,r|2),t.elementType=gd,t.lanes=s,t;case _d:return t=hi(13,n,e,r),t.elementType=_d,t.lanes=s,t;case vd:return t=hi(19,n,e,r),t.elementType=vd,t.lanes=s,t;case e0:return Cu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Qv:o=10;break e;case Jv:o=9;break e;case op:o=11;break e;case ap:o=14;break e;case Lr:o=16,i=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=hi(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ls(t,e,n,i){return t=hi(7,t,i,e),t.lanes=n,t}function Cu(t,e,n,i){return t=hi(22,t,i,e),t.elementType=e0,t.lanes=n,t.stateNode={isHidden:!1},t}function Nf(t,e,n){return t=hi(6,t,null,e),t.lanes=n,t}function Uf(t,e,n){return e=hi(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Jw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mf(0),this.expirationTimes=mf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Vp(t,e,n,i,r,s,o,a,c){return t=new Jw(t,e,n,a,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=hi(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tp(s),t}function eT(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Xx(t){if(!t)return Zr;t=t._reactInternals;e:{if(Hs(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(zn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(zn(n))return X0(t,n,e)}return e}function jx(t,e,n,i,r,s,o,a,c){return t=Vp(n,i,!0,t,r,s,o,a,c),t.context=Xx(null),n=t.current,i=Pn(),r=Xr(n),s=fr(i,r),s.callback=e??null,Gr(n,s,r),t.current.lanes=r,sl(t,r,i),Hn(t,i),t}function bu(t,e,n,i){var r=e.current,s=Pn(),o=Xr(r);return n=Xx(n),e.context===null?e.context=n:e.pendingContext=n,e=fr(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Gr(r,e,o),t!==null&&(Pi(t,r,o,s),bc(t,r,o)),o}function fu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function E_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Gp(t,e){E_(t,e),(t=t.alternate)&&E_(t,e)}function tT(){return null}var $x=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wp(t){this._internalRoot=t}Ru.prototype.render=Wp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));bu(t,e,null,null)};Ru.prototype.unmount=Wp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fs(function(){bu(null,t,null,null)}),e[pr]=null}};function Ru(t){this._internalRoot=t}Ru.prototype.unstable_scheduleHydration=function(t){if(t){var e=w0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ir.length&&e!==0&&e<Ir[n].priority;n++);Ir.splice(n,0,t),n===0&&A0(t)}};function Xp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function M_(){}function nT(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=fu(o);s.call(u)}}var o=jx(e,i,t,0,null,!1,!1,"",M_);return t._reactRootContainer=o,t[pr]=o.current,Xa(t.nodeType===8?t.parentNode:t),Fs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=fu(c);a.call(u)}}var c=Vp(t,0,!1,null,null,!1,!1,"",M_);return t._reactRootContainer=c,t[pr]=c.current,Xa(t.nodeType===8?t.parentNode:t),Fs(function(){bu(e,c,n,i)}),c}function Lu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var c=fu(o);a.call(c)}}bu(e,o,t,r)}else o=nT(n,e,t,r,i);return fu(o)}E0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wa(e.pendingLanes);n!==0&&(up(e,n|1),Hn(e,qt()),!(_t&6)&&(Go=qt()+500,ns()))}break;case 13:Fs(function(){var i=mr(t,1);if(i!==null){var r=Pn();Pi(i,t,1,r)}}),Gp(t,1)}};fp=function(t){if(t.tag===13){var e=mr(t,134217728);if(e!==null){var n=Pn();Pi(e,t,134217728,n)}Gp(t,134217728)}};M0=function(t){if(t.tag===13){var e=Xr(t),n=mr(t,e);if(n!==null){var i=Pn();Pi(n,t,e,i)}Gp(t,e)}};w0=function(){return Mt};T0=function(t,e){var n=Mt;try{return Mt=t,e()}finally{Mt=n}};bd=function(t,e,n){switch(e){case"input":if(Sd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Su(i);if(!r)throw Error(ue(90));n0(i),Sd(i,r)}}}break;case"textarea":r0(t,n);break;case"select":e=n.value,e!=null&&bo(t,!!n.multiple,e,!1)}};f0=kp;d0=Fs;var iT={usingClientEntryPoint:!1,Events:[al,yo,Su,c0,u0,kp]},ga={findFiberByHostInstance:Ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rT={bundleType:ga.bundleType,version:ga.version,rendererPackageName:ga.rendererPackageName,rendererConfig:ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=m0(t),t===null?null:t.stateNode},findFiberByHostInstance:ga.findFiberByHostInstance||tT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{_u=Kl.inject(rT),Hi=Kl}catch{}}ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iT;ti.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xp(e))throw Error(ue(200));return eT(t,e,null,n)};ti.createRoot=function(t,e){if(!Xp(t))throw Error(ue(299));var n=!1,i="",r=$x;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Vp(t,1,!1,null,null,n,!1,i,r),t[pr]=e.current,Xa(t.nodeType===8?t.parentNode:t),new Wp(e)};ti.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=m0(e),t=t===null?null:t.stateNode,t};ti.flushSync=function(t){return Fs(t)};ti.hydrate=function(t,e,n){if(!Pu(e))throw Error(ue(200));return Lu(null,t,e,!0,n)};ti.hydrateRoot=function(t,e,n){if(!Xp(t))throw Error(ue(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=$x;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=jx(e,null,t,1,n??null,r,!1,s,o),t[pr]=e.current,Xa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ru(e)};ti.render=function(t,e,n){if(!Pu(e))throw Error(ue(200));return Lu(null,t,e,!1,n)};ti.unmountComponentAtNode=function(t){if(!Pu(t))throw Error(ue(40));return t._reactRootContainer?(Fs(function(){Lu(null,null,t,!1,function(){t._reactRootContainer=null,t[pr]=null})}),!0):!1};ti.unstable_batchedUpdates=kp;ti.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Pu(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return Lu(t,e,n,!1,i)};ti.version="18.3.1-next-f1338f8080-20240426";function Yx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yx)}catch(t){console.error(t)}}Yx(),Yv.exports=ti;var sT=Yv.exports,w_=sT;pd.createRoot=w_.createRoot,pd.hydrateRoot=w_.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function el(){return el=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},el.apply(this,arguments)}var kr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(kr||(kr={}));const T_="popstate";function oT(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return ah("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:du(r)}return lT(e,n,null,t)}function en(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function qx(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function aT(){return Math.random().toString(36).substr(2,8)}function A_(t,e){return{usr:t.state,key:t.key,idx:e}}function ah(t,e,n,i){return n===void 0&&(n=null),el({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Jo(e):e,{state:n,key:e&&e.key||i||aT()})}function du(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Jo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function lT(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=kr.Pop,c=null,u=d();u==null&&(u=0,o.replaceState(el({},o.state,{idx:u}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=kr.Pop;let g=d(),f=g==null?null:g-u;u=g,c&&c({action:a,location:M.location,delta:f})}function p(g,f){a=kr.Push;let v=ah(M.location,g,f);u=d()+1;let y=A_(v,u),E=M.createHref(v);try{o.pushState(y,"",E)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;r.location.assign(E)}s&&c&&c({action:a,location:M.location,delta:1})}function _(g,f){a=kr.Replace;let v=ah(M.location,g,f);u=d();let y=A_(v,u),E=M.createHref(v);o.replaceState(y,"",E),s&&c&&c({action:a,location:M.location,delta:0})}function x(g){let f=r.location.origin!=="null"?r.location.origin:r.location.href,v=typeof g=="string"?g:du(g);return v=v.replace(/ $/,"%20"),en(f,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,f)}let M={get action(){return a},get location(){return t(r,o)},listen(g){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(T_,h),c=g,()=>{r.removeEventListener(T_,h),c=null}},createHref(g){return e(r,g)},createURL:x,encodeLocation(g){let f=x(g);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:p,replace:_,go(g){return o.go(g)}};return M}var C_;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(C_||(C_={}));function cT(t,e,n){return n===void 0&&(n="/"),uT(t,e,n,!1)}function uT(t,e,n,i){let r=typeof e=="string"?Jo(e):e,s=jp(r.pathname||"/",n);if(s==null)return null;let o=Kx(t);fT(o);let a=null;for(let c=0;a==null&&c<o.length;++c){let u=ET(s);a=yT(o[c],u,i)}return a}function Kx(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,o,a)=>{let c={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};c.relativePath.startsWith("/")&&(en(c.relativePath.startsWith(i),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(i.length));let u=$r([i,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(en(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Kx(s.children,e,d,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:vT(u,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let c of Zx(s.path))r(s,o,c)}),e}function Zx(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Zx(i.join("/")),a=[];return a.push(...o.map(c=>c===""?s:[s,c].join("/"))),r&&a.push(...o),a.map(c=>t.startsWith("/")&&c===""?"/":c)}function fT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:xT(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const dT=/^:[\w-]+$/,hT=3,pT=2,mT=1,gT=10,_T=-2,b_=t=>t==="*";function vT(t,e){let n=t.split("/"),i=n.length;return n.some(b_)&&(i+=_T),e&&(i+=pT),n.filter(r=>!b_(r)).reduce((r,s)=>r+(dT.test(s)?hT:s===""?mT:gT),i)}function xT(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function yT(t,e,n){let{routesMeta:i}=t,r={},s="/",o=[];for(let a=0;a<i.length;++a){let c=i[a],u=a===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",h=R_({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),p=c.route;if(!h&&u&&n&&!i[i.length-1].route.index&&(h=R_({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!h)return null;Object.assign(r,h.params),o.push({params:r,pathname:$r([s,h.pathname]),pathnameBase:AT($r([s,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(s=$r([s,h.pathnameBase]))}return o}function R_(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=ST(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,d,h)=>{let{paramName:p,isOptional:_}=d;if(p==="*"){let M=a[h]||"";o=s.slice(0,s.length-M.length).replace(/(.)\/+$/,"$1")}const x=a[h];return _&&!x?u[p]=void 0:u[p]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:t}}function ST(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),qx(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,c)=>(i.push({paramName:a,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function ET(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qx(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function jp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function MT(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Jo(t):t;return{pathname:n?n.startsWith("/")?n:wT(n,e):e,search:CT(i),hash:bT(r)}}function wT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function Of(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function TT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Qx(t,e){let n=TT(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Jx(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Jo(t):(r=el({},t),en(!r.pathname||!r.pathname.includes("?"),Of("?","pathname","search",r)),en(!r.pathname||!r.pathname.includes("#"),Of("#","pathname","hash",r)),en(!r.search||!r.search.includes("#"),Of("#","search","hash",r)));let s=t===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!i&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),h-=1;r.pathname=p.join("/")}a=h>=0?e[h]:"/"}let c=MT(r,a),u=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const $r=t=>t.join("/").replace(/\/\/+/g,"/"),AT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),CT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,bT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function RT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ey=["post","put","patch","delete"];new Set(ey);const PT=["get",...ey];new Set(PT);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function tl(){return tl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},tl.apply(this,arguments)}const $p=Ae.createContext(null),LT=Ae.createContext(null),Vs=Ae.createContext(null),Du=Ae.createContext(null),Gs=Ae.createContext({outlet:null,matches:[],isDataRoute:!1}),ty=Ae.createContext(null);function DT(t,e){let{relative:n}=e===void 0?{}:e;cl()||en(!1);let{basename:i,navigator:r}=Ae.useContext(Vs),{hash:s,pathname:o,search:a}=iy(t,{relative:n}),c=o;return i!=="/"&&(c=o==="/"?i:$r([i,o])),r.createHref({pathname:c,search:a,hash:s})}function cl(){return Ae.useContext(Du)!=null}function ul(){return cl()||en(!1),Ae.useContext(Du).location}function ny(t){Ae.useContext(Vs).static||Ae.useLayoutEffect(t)}function IT(){let{isDataRoute:t}=Ae.useContext(Gs);return t?jT():NT()}function NT(){cl()||en(!1);let t=Ae.useContext($p),{basename:e,future:n,navigator:i}=Ae.useContext(Vs),{matches:r}=Ae.useContext(Gs),{pathname:s}=ul(),o=JSON.stringify(Qx(r,n.v7_relativeSplatPath)),a=Ae.useRef(!1);return ny(()=>{a.current=!0}),Ae.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){i.go(u);return}let h=Jx(u,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:$r([e,h.pathname])),(d.replace?i.replace:i.push)(h,d.state,d)},[e,i,o,s,t])}function iy(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=Ae.useContext(Vs),{matches:r}=Ae.useContext(Gs),{pathname:s}=ul(),o=JSON.stringify(Qx(r,i.v7_relativeSplatPath));return Ae.useMemo(()=>Jx(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function UT(t,e){return OT(t,e)}function OT(t,e,n,i){cl()||en(!1);let{navigator:r}=Ae.useContext(Vs),{matches:s}=Ae.useContext(Gs),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let u=ul(),d;if(e){var h;let g=typeof e=="string"?Jo(e):e;c==="/"||(h=g.pathname)!=null&&h.startsWith(c)||en(!1),d=g}else d=u;let p=d.pathname||"/",_=p;if(c!=="/"){let g=c.replace(/^\//,"").split("/");_="/"+p.replace(/^\//,"").split("/").slice(g.length).join("/")}let x=cT(t,{pathname:_}),M=HT(x&&x.map(g=>Object.assign({},g,{params:Object.assign({},a,g.params),pathname:$r([c,r.encodeLocation?r.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?c:$r([c,r.encodeLocation?r.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),s,n,i);return e&&M?Ae.createElement(Du.Provider,{value:{location:tl({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:kr.Pop}},M):M}function FT(){let t=XT(),e=RT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Ae.createElement(Ae.Fragment,null,Ae.createElement("h2",null,"Unexpected Application Error!"),Ae.createElement("h3",{style:{fontStyle:"italic"}},e),n?Ae.createElement("pre",{style:r},n):null,null)}const kT=Ae.createElement(FT,null);class BT extends Ae.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?Ae.createElement(Gs.Provider,{value:this.props.routeContext},Ae.createElement(ty.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function zT(t){let{routeContext:e,match:n,children:i}=t,r=Ae.useContext($p);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),Ae.createElement(Gs.Provider,{value:e},i)}function HT(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(r=n)==null?void 0:r.errors;if(a!=null){let d=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);d>=0||en(!1),o=o.slice(0,Math.min(o.length,d+1))}let c=!1,u=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:p,errors:_}=n,x=h.route.loader&&p[h.route.id]===void 0&&(!_||_[h.route.id]===void 0);if(h.route.lazy||x){c=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((d,h,p)=>{let _,x=!1,M=null,g=null;n&&(_=a&&h.route.id?a[h.route.id]:void 0,M=h.route.errorElement||kT,c&&(u<0&&p===0?(x=!0,g=null):u===p&&(x=!0,g=h.route.hydrateFallbackElement||null)));let f=e.concat(o.slice(0,p+1)),v=()=>{let y;return _?y=M:x?y=g:h.route.Component?y=Ae.createElement(h.route.Component,null):h.route.element?y=h.route.element:y=d,Ae.createElement(zT,{match:h,routeContext:{outlet:d,matches:f,isDataRoute:n!=null},children:y})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?Ae.createElement(BT,{location:n.location,revalidation:n.revalidation,component:M,error:_,children:v(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):v()},null)}var ry=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(ry||{}),hu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(hu||{});function VT(t){let e=Ae.useContext($p);return e||en(!1),e}function GT(t){let e=Ae.useContext(LT);return e||en(!1),e}function WT(t){let e=Ae.useContext(Gs);return e||en(!1),e}function sy(t){let e=WT(),n=e.matches[e.matches.length-1];return n.route.id||en(!1),n.route.id}function XT(){var t;let e=Ae.useContext(ty),n=GT(hu.UseRouteError),i=sy(hu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function jT(){let{router:t}=VT(ry.UseNavigateStable),e=sy(hu.UseNavigateStable),n=Ae.useRef(!1);return ny(()=>{n.current=!0}),Ae.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,tl({fromRouteId:e},s)))},[t,e])}const P_={};function $T(t,e){P_[e]||(P_[e]=!0,console.warn(e))}const L_=(t,e,n)=>$T(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function YT(t,e){t!=null&&t.v7_startTransition||L_("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&!e&&L_("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function Uc(t){en(!1)}function qT(t){let{basename:e="/",children:n=null,location:i,navigationType:r=kr.Pop,navigator:s,static:o=!1,future:a}=t;cl()&&en(!1);let c=e.replace(/^\/*/,"/"),u=Ae.useMemo(()=>({basename:c,navigator:s,static:o,future:tl({v7_relativeSplatPath:!1},a)}),[c,a,s,o]);typeof i=="string"&&(i=Jo(i));let{pathname:d="/",search:h="",hash:p="",state:_=null,key:x="default"}=i,M=Ae.useMemo(()=>{let g=jp(d,c);return g==null?null:{location:{pathname:g,search:h,hash:p,state:_,key:x},navigationType:r}},[c,d,h,p,_,x,r]);return M==null?null:Ae.createElement(Vs.Provider,{value:u},Ae.createElement(Du.Provider,{children:n,value:M}))}function KT(t){let{children:e,location:n}=t;return UT(lh(e),n)}new Promise(()=>{});function lh(t,e){e===void 0&&(e=[]);let n=[];return Ae.Children.forEach(t,(i,r)=>{if(!Ae.isValidElement(i))return;let s=[...e,r];if(i.type===Ae.Fragment){n.push.apply(n,lh(i.props.children,s));return}i.type!==Uc&&en(!1),!i.props.index||!i.props.children||en(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=lh(i.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ch(){return ch=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ch.apply(this,arguments)}function ZT(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function QT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function JT(t,e){return t.button===0&&(!e||e==="_self")&&!QT(t)}const e1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],t1="6";try{window.__reactRouterVersion=t1}catch{}const n1="startTransition",D_=YE[n1];function i1(t){let{basename:e,children:n,future:i,window:r}=t,s=Ae.useRef();s.current==null&&(s.current=oT({window:r,v5Compat:!0}));let o=s.current,[a,c]=Ae.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},d=Ae.useCallback(h=>{u&&D_?D_(()=>c(h)):c(h)},[c,u]);return Ae.useLayoutEffect(()=>o.listen(d),[o,d]),Ae.useEffect(()=>YT(i),[i]),Ae.createElement(qT,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:i})}const r1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",s1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zl=Ae.forwardRef(function(e,n){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:c,to:u,preventScrollReset:d,viewTransition:h}=e,p=ZT(e,e1),{basename:_}=Ae.useContext(Vs),x,M=!1;if(typeof u=="string"&&s1.test(u)&&(x=u,r1))try{let y=new URL(window.location.href),E=u.startsWith("//")?new URL(y.protocol+u):new URL(u),I=jp(E.pathname,_);E.origin===y.origin&&I!=null?u=I+E.search+E.hash:M=!0}catch{}let g=DT(u,{relative:r}),f=o1(u,{replace:o,state:a,target:c,preventScrollReset:d,relative:r,viewTransition:h});function v(y){i&&i(y),y.defaultPrevented||f(y)}return Ae.createElement("a",ch({},p,{href:x||g,onClick:M||s?i:v,ref:n,target:c}))});var I_;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(I_||(I_={}));var N_;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(N_||(N_={}));function o1(t,e){let{target:n,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,c=IT(),u=ul(),d=iy(t,{relative:o});return Ae.useCallback(h=>{if(JT(h,n)){h.preventDefault();let p=i!==void 0?i:du(u)===du(d);c(t,{replace:p,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[u,c,d,i,r,n,t,s,o,a])}const oy="/assets/favicon-DcFwGrdB.ico",a1=()=>{const t=ul(),e=n=>t.pathname===n?"active":"";return pe.jsx("nav",{className:"navbar",children:pe.jsxs("div",{className:"container d-flex justify-content-between align-items-center",children:[pe.jsxs(Zl,{to:"/",className:"navbar-brand",children:[pe.jsx("img",{src:oy,alt:"IKCU AI Lab",height:"40"}),pe.jsx("span",{className:"brand-text",children:"IKCU AI Lab"})]}),pe.jsxs("div",{className:"nav-links",children:[pe.jsx(Zl,{to:"/",className:`nav-link ${e("/")}`,children:"Home"}),pe.jsx(Zl,{to:"/about",className:`nav-link ${e("/about")}`,children:"About"}),pe.jsx(Zl,{to:"/dataset",className:`nav-link ${e("/dataset")}`,children:"Dataset"})]})]})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yp="170",l1=0,U_=1,c1=2,ay=1,u1=2,nr=3,Qr=0,Vn=1,sr=2,Yr=0,No=1,O_=2,F_=3,k_=4,f1=5,Ms=100,d1=101,h1=102,p1=103,m1=104,g1=200,_1=201,v1=202,x1=203,uh=204,fh=205,y1=206,S1=207,E1=208,M1=209,w1=210,T1=211,A1=212,C1=213,b1=214,dh=0,hh=1,ph=2,Wo=3,mh=4,gh=5,_h=6,vh=7,ly=0,R1=1,P1=2,qr=0,L1=1,D1=2,I1=3,N1=4,U1=5,O1=6,F1=7,cy=300,Xo=301,jo=302,xh=303,yh=304,Iu=306,Sh=1e3,bs=1001,Eh=1002,Li=1003,k1=1004,Ql=1005,zi=1006,Ff=1007,Rs=1008,_r=1009,uy=1010,fy=1011,nl=1012,qp=1013,ks=1014,lr=1015,fl=1016,Kp=1017,Zp=1018,$o=1020,dy=35902,hy=1021,py=1022,bi=1023,my=1024,gy=1025,Uo=1026,Yo=1027,_y=1028,Qp=1029,vy=1030,Jp=1031,em=1033,Oc=33776,Fc=33777,kc=33778,Bc=33779,Mh=35840,wh=35841,Th=35842,Ah=35843,Ch=36196,bh=37492,Rh=37496,Ph=37808,Lh=37809,Dh=37810,Ih=37811,Nh=37812,Uh=37813,Oh=37814,Fh=37815,kh=37816,Bh=37817,zh=37818,Hh=37819,Vh=37820,Gh=37821,zc=36492,Wh=36494,Xh=36495,xy=36283,jh=36284,$h=36285,Yh=36286,B1=3200,z1=3201,H1=0,V1=1,Ur="",ci="srgb",ea="srgb-linear",Nu="linear",bt="srgb",eo=7680,B_=519,G1=512,W1=513,X1=514,yy=515,j1=516,$1=517,Y1=518,q1=519,z_=35044,H_="300 es",cr=2e3,pu=2001;class ta{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kf=Math.PI/180,qh=180/Math.PI;function dl(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(yn[t&255]+yn[t>>8&255]+yn[t>>16&255]+yn[t>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[n&63|128]+yn[n>>8&255]+"-"+yn[n>>16&255]+yn[n>>24&255]+yn[i&255]+yn[i>>8&255]+yn[i>>16&255]+yn[i>>24&255]).toLowerCase()}function Fn(t,e,n){return Math.max(e,Math.min(n,t))}function K1(t,e){return(t%e+e)%e}function Bf(t,e,n){return(1-n)*t+n*e}function _a(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Un(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class It{constructor(e=0,n=0){It.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,n,i,r,s,o,a,c,u){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,c,u)}set(e,n,i,r,s,o,a,c,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=c,d[6]=i,d[7]=o,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],c=i[6],u=i[1],d=i[4],h=i[7],p=i[2],_=i[5],x=i[8],M=r[0],g=r[3],f=r[6],v=r[1],y=r[4],E=r[7],I=r[2],L=r[5],P=r[8];return s[0]=o*M+a*v+c*I,s[3]=o*g+a*y+c*L,s[6]=o*f+a*E+c*P,s[1]=u*M+d*v+h*I,s[4]=u*g+d*y+h*L,s[7]=u*f+d*E+h*P,s[2]=p*M+_*v+x*I,s[5]=p*g+_*y+x*L,s[8]=p*f+_*E+x*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],d=e[8];return n*o*d-n*a*u-i*s*d+i*a*c+r*s*u-r*o*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],d=e[8],h=d*o-a*u,p=a*c-d*s,_=u*s-o*c,x=n*h+i*p+r*_;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=h*M,e[1]=(r*u-d*i)*M,e[2]=(a*i-r*o)*M,e[3]=p*M,e[4]=(d*n-r*c)*M,e[5]=(r*s-a*n)*M,e[6]=_*M,e[7]=(i*c-u*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*o+u*a)+o+e,-r*u,r*c,-r*(-u*o+c*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(zf.makeScale(e,n)),this}rotate(e){return this.premultiply(zf.makeRotation(-e)),this}translate(e,n){return this.premultiply(zf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zf=new Je;function Sy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function mu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Z1(){const t=mu("canvas");return t.style.display="block",t}const V_={};function Aa(t){t in V_||(V_[t]=!0,console.warn(t))}function Q1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function J1(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function eA(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const gt={enabled:!0,workingColorSpace:ea,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===bt&&(t.r=dr(t.r),t.g=dr(t.g),t.b=dr(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===bt&&(t.r=Oo(t.r),t.g=Oo(t.g),t.b=Oo(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Ur?Nu:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function dr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Oo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const G_=[.64,.33,.3,.6,.15,.06],W_=[.2126,.7152,.0722],X_=[.3127,.329],j_=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$_=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);gt.define({[ea]:{primaries:G_,whitePoint:X_,transfer:Nu,toXYZ:j_,fromXYZ:$_,luminanceCoefficients:W_,workingColorSpaceConfig:{unpackColorSpace:ci},outputColorSpaceConfig:{drawingBufferColorSpace:ci}},[ci]:{primaries:G_,whitePoint:X_,transfer:bt,toXYZ:j_,fromXYZ:$_,luminanceCoefficients:W_,outputColorSpaceConfig:{drawingBufferColorSpace:ci}}});let to;class tA{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{to===void 0&&(to=mu("canvas")),to.width=e.width,to.height=e.height;const i=to.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=to}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=mu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=dr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(dr(n[i]/255)*255):n[i]=dr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nA=0;class Ey{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nA++}),this.uuid=dl(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Hf(r[o].image)):s.push(Hf(r[o]))}else s=Hf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Hf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?tA.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iA=0;class Gn extends ta{constructor(e=Gn.DEFAULT_IMAGE,n=Gn.DEFAULT_MAPPING,i=bs,r=bs,s=zi,o=Rs,a=bi,c=_r,u=Gn.DEFAULT_ANISOTROPY,d=Ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iA++}),this.uuid=dl(),this.name="",this.source=new Ey(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sh:e.x=e.x-Math.floor(e.x);break;case bs:e.x=e.x<0?0:1;break;case Eh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sh:e.y=e.y-Math.floor(e.y);break;case bs:e.y=e.y<0?0:1;break;case Eh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=cy;Gn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,n=0,i=0,r=1){Kt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],d=c[4],h=c[8],p=c[1],_=c[5],x=c[9],M=c[2],g=c[6],f=c[10];if(Math.abs(d-p)<.01&&Math.abs(h-M)<.01&&Math.abs(x-g)<.01){if(Math.abs(d+p)<.1&&Math.abs(h+M)<.1&&Math.abs(x+g)<.1&&Math.abs(u+_+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,E=(_+1)/2,I=(f+1)/2,L=(d+p)/4,P=(h+M)/4,D=(x+g)/4;return y>E&&y>I?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=L/i,s=P/i):E>I?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=L/r,s=D/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=P/s,r=D/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-x)*(g-x)+(h-M)*(h-M)+(p-d)*(p-d));return Math.abs(v)<.001&&(v=1),this.x=(g-x)/v,this.y=(h-M)/v,this.z=(p-d)/v,this.w=Math.acos((u+_+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rA extends ta{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Kt(0,0,e,n),this.scissorTest=!1,this.viewport=new Kt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Gn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ey(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bs extends rA{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class My extends Gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Li,this.minFilter=Li,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sA extends Gn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Li,this.minFilter=Li,this.wrapR=bs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hl{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let c=i[r+0],u=i[r+1],d=i[r+2],h=i[r+3];const p=s[o+0],_=s[o+1],x=s[o+2],M=s[o+3];if(a===0){e[n+0]=c,e[n+1]=u,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=p,e[n+1]=_,e[n+2]=x,e[n+3]=M;return}if(h!==M||c!==p||u!==_||d!==x){let g=1-a;const f=c*p+u*_+d*x+h*M,v=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const I=Math.sqrt(y),L=Math.atan2(I,f*v);g=Math.sin(g*L)/I,a=Math.sin(a*L)/I}const E=a*v;if(c=c*g+p*E,u=u*g+_*E,d=d*g+x*E,h=h*g+M*E,g===1-a){const I=1/Math.sqrt(c*c+u*u+d*d+h*h);c*=I,u*=I,d*=I,h*=I}}e[n]=c,e[n+1]=u,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],c=i[r+1],u=i[r+2],d=i[r+3],h=s[o],p=s[o+1],_=s[o+2],x=s[o+3];return e[n]=a*x+d*h+c*_-u*p,e[n+1]=c*x+d*p+u*h-a*_,e[n+2]=u*x+d*_+a*p-c*h,e[n+3]=d*x-a*h-c*p-u*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(i/2),d=a(r/2),h=a(s/2),p=c(i/2),_=c(r/2),x=c(s/2);switch(o){case"XYZ":this._x=p*d*h+u*_*x,this._y=u*_*h-p*d*x,this._z=u*d*x+p*_*h,this._w=u*d*h-p*_*x;break;case"YXZ":this._x=p*d*h+u*_*x,this._y=u*_*h-p*d*x,this._z=u*d*x-p*_*h,this._w=u*d*h+p*_*x;break;case"ZXY":this._x=p*d*h-u*_*x,this._y=u*_*h+p*d*x,this._z=u*d*x+p*_*h,this._w=u*d*h-p*_*x;break;case"ZYX":this._x=p*d*h-u*_*x,this._y=u*_*h+p*d*x,this._z=u*d*x-p*_*h,this._w=u*d*h+p*_*x;break;case"YZX":this._x=p*d*h+u*_*x,this._y=u*_*h+p*d*x,this._z=u*d*x-p*_*h,this._w=u*d*h-p*_*x;break;case"XZY":this._x=p*d*h-u*_*x,this._y=u*_*h-p*d*x,this._z=u*d*x+p*_*h,this._w=u*d*h+p*_*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],c=n[9],u=n[2],d=n[6],h=n[10],p=i+a+h;if(p>0){const _=.5/Math.sqrt(p+1);this._w=.25/_,this._x=(d-c)*_,this._y=(s-u)*_,this._z=(o-r)*_}else if(i>a&&i>h){const _=2*Math.sqrt(1+i-a-h);this._w=(d-c)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(s+u)/_}else if(a>h){const _=2*Math.sqrt(1+a-i-h);this._w=(s-u)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(c+d)/_}else{const _=2*Math.sqrt(1+h-i-a);this._w=(o-r)/_,this._x=(s+u)/_,this._y=(c+d)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,c=n._y,u=n._z,d=n._w;return this._x=i*d+o*a+r*u-s*c,this._y=r*d+o*c+s*a-i*u,this._z=s*d+o*u+i*c-r*a,this._w=o*d-i*a-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const _=1-n;return this._w=_*o+n*this._w,this._x=_*i+n*this._x,this._y=_*r+n*this._y,this._z=_*s+n*this._z,this.normalize(),this}const u=Math.sqrt(c),d=Math.atan2(u,a),h=Math.sin((1-n)*d)/u,p=Math.sin(n*d)/u;return this._w=o*h+this._w*p,this._x=i*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Y_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Y_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,u=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+c*u+o*h-a*d,this.y=i+c*d+a*u-s*h,this.z=r+c*h+s*d-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,c=n.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vf.copy(this).projectOnVector(e),this.sub(Vf)}reflect(e){return this.sub(Vf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Fn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vf=new j,Y_=new hl;class pl{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Si.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Si.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Si.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Si):Si.fromBufferAttribute(s,o),Si.applyMatrix4(e.matrixWorld),this.expandByPoint(Si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jl.copy(i.boundingBox)),Jl.applyMatrix4(e.matrixWorld),this.union(Jl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Si),Si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),ec.subVectors(this.max,va),no.subVectors(e.a,va),io.subVectors(e.b,va),ro.subVectors(e.c,va),Tr.subVectors(io,no),Ar.subVectors(ro,io),hs.subVectors(no,ro);let n=[0,-Tr.z,Tr.y,0,-Ar.z,Ar.y,0,-hs.z,hs.y,Tr.z,0,-Tr.x,Ar.z,0,-Ar.x,hs.z,0,-hs.x,-Tr.y,Tr.x,0,-Ar.y,Ar.x,0,-hs.y,hs.x,0];return!Gf(n,no,io,ro,ec)||(n=[1,0,0,0,1,0,0,0,1],!Gf(n,no,io,ro,ec))?!1:(tc.crossVectors(Tr,Ar),n=[tc.x,tc.y,tc.z],Gf(n,no,io,ro,ec))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zi=[new j,new j,new j,new j,new j,new j,new j,new j],Si=new j,Jl=new pl,no=new j,io=new j,ro=new j,Tr=new j,Ar=new j,hs=new j,va=new j,ec=new j,tc=new j,ps=new j;function Gf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ps.fromArray(t,s);const a=r.x*Math.abs(ps.x)+r.y*Math.abs(ps.y)+r.z*Math.abs(ps.z),c=e.dot(ps),u=n.dot(ps),d=i.dot(ps);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>a)return!1}return!0}const oA=new pl,xa=new j,Wf=new j;class Uu{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):oA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xa.subVectors(e,this.center);const n=xa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(xa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xa.copy(e.center).add(Wf)),this.expandByPoint(xa.copy(e.center).sub(Wf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qi=new j,Xf=new j,nc=new j,Cr=new j,jf=new j,ic=new j,$f=new j;class wy{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Qi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Qi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Qi.copy(this.origin).addScaledVector(this.direction,n),Qi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Xf.copy(e).add(n).multiplyScalar(.5),nc.copy(n).sub(e).normalize(),Cr.copy(this.origin).sub(Xf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(nc),a=Cr.dot(this.direction),c=-Cr.dot(nc),u=Cr.lengthSq(),d=Math.abs(1-o*o);let h,p,_,x;if(d>0)if(h=o*c-a,p=o*a-c,x=s*d,h>=0)if(p>=-x)if(p<=x){const M=1/d;h*=M,p*=M,_=h*(h+o*p+2*a)+p*(o*h+p+2*c)+u}else p=s,h=Math.max(0,-(o*p+a)),_=-h*h+p*(p+2*c)+u;else p=-s,h=Math.max(0,-(o*p+a)),_=-h*h+p*(p+2*c)+u;else p<=-x?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-c),s),_=-h*h+p*(p+2*c)+u):p<=x?(h=0,p=Math.min(Math.max(-s,-c),s),_=p*(p+2*c)+u):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-c),s),_=-h*h+p*(p+2*c)+u);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),_=-h*h+p*(p+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Xf).addScaledVector(nc,p),_}intersectSphere(e,n){Qi.subVectors(e.center,this.origin);const i=Qi.dot(this.direction),r=Qi.dot(Qi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,c;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,p=this.origin;return u>=0?(i=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(i=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),d>=0?(s=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-p.z)*h,c=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,c=(e.min.z-p.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Qi)!==null}intersectTriangle(e,n,i,r,s){jf.subVectors(n,e),ic.subVectors(i,e),$f.crossVectors(jf,ic);let o=this.direction.dot($f),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cr.subVectors(this.origin,e);const c=a*this.direction.dot(ic.crossVectors(Cr,ic));if(c<0)return null;const u=a*this.direction.dot(jf.cross(Cr));if(u<0||c+u>o)return null;const d=-a*Cr.dot($f);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(e,n,i,r,s,o,a,c,u,d,h,p,_,x,M,g){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,c,u,d,h,p,_,x,M,g)}set(e,n,i,r,s,o,a,c,u,d,h,p,_,x,M,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=u,f[6]=d,f[10]=h,f[14]=p,f[3]=_,f[7]=x,f[11]=M,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/so.setFromMatrixColumn(e,0).length(),s=1/so.setFromMatrixColumn(e,1).length(),o=1/so.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),u=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=o*d,_=o*h,x=a*d,M=a*h;n[0]=c*d,n[4]=-c*h,n[8]=u,n[1]=_+x*u,n[5]=p-M*u,n[9]=-a*c,n[2]=M-p*u,n[6]=x+_*u,n[10]=o*c}else if(e.order==="YXZ"){const p=c*d,_=c*h,x=u*d,M=u*h;n[0]=p+M*a,n[4]=x*a-_,n[8]=o*u,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=_*a-x,n[6]=M+p*a,n[10]=o*c}else if(e.order==="ZXY"){const p=c*d,_=c*h,x=u*d,M=u*h;n[0]=p-M*a,n[4]=-o*h,n[8]=x+_*a,n[1]=_+x*a,n[5]=o*d,n[9]=M-p*a,n[2]=-o*u,n[6]=a,n[10]=o*c}else if(e.order==="ZYX"){const p=o*d,_=o*h,x=a*d,M=a*h;n[0]=c*d,n[4]=x*u-_,n[8]=p*u+M,n[1]=c*h,n[5]=M*u+p,n[9]=_*u-x,n[2]=-u,n[6]=a*c,n[10]=o*c}else if(e.order==="YZX"){const p=o*c,_=o*u,x=a*c,M=a*u;n[0]=c*d,n[4]=M-p*h,n[8]=x*h+_,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-u*d,n[6]=_*h+x,n[10]=p-M*h}else if(e.order==="XZY"){const p=o*c,_=o*u,x=a*c,M=a*u;n[0]=c*d,n[4]=-h,n[8]=u*d,n[1]=p*h+M,n[5]=o*d,n[9]=_*h-x,n[2]=x*h-_,n[6]=a*d,n[10]=M*h+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aA,e,lA)}lookAt(e,n,i){const r=this.elements;return qn.subVectors(e,n),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),br.crossVectors(i,qn),br.lengthSq()===0&&(Math.abs(i.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),br.crossVectors(i,qn)),br.normalize(),rc.crossVectors(qn,br),r[0]=br.x,r[4]=rc.x,r[8]=qn.x,r[1]=br.y,r[5]=rc.y,r[9]=qn.y,r[2]=br.z,r[6]=rc.z,r[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],c=i[8],u=i[12],d=i[1],h=i[5],p=i[9],_=i[13],x=i[2],M=i[6],g=i[10],f=i[14],v=i[3],y=i[7],E=i[11],I=i[15],L=r[0],P=r[4],D=r[8],b=r[12],T=r[1],U=r[5],Z=r[9],$=r[13],re=r[2],oe=r[6],J=r[10],ae=r[14],O=r[3],Q=r[7],N=r[11],ge=r[15];return s[0]=o*L+a*T+c*re+u*O,s[4]=o*P+a*U+c*oe+u*Q,s[8]=o*D+a*Z+c*J+u*N,s[12]=o*b+a*$+c*ae+u*ge,s[1]=d*L+h*T+p*re+_*O,s[5]=d*P+h*U+p*oe+_*Q,s[9]=d*D+h*Z+p*J+_*N,s[13]=d*b+h*$+p*ae+_*ge,s[2]=x*L+M*T+g*re+f*O,s[6]=x*P+M*U+g*oe+f*Q,s[10]=x*D+M*Z+g*J+f*N,s[14]=x*b+M*$+g*ae+f*ge,s[3]=v*L+y*T+E*re+I*O,s[7]=v*P+y*U+E*oe+I*Q,s[11]=v*D+y*Z+E*J+I*N,s[15]=v*b+y*$+E*ae+I*ge,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],u=e[13],d=e[2],h=e[6],p=e[10],_=e[14],x=e[3],M=e[7],g=e[11],f=e[15];return x*(+s*c*h-r*u*h-s*a*p+i*u*p+r*a*_-i*c*_)+M*(+n*c*_-n*u*p+s*o*p-r*o*_+r*u*d-s*c*d)+g*(+n*u*h-n*a*_-s*o*h+i*o*_+s*a*d-i*u*d)+f*(-r*a*d-n*c*h+n*a*p+r*o*h-i*o*p+i*c*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],d=e[8],h=e[9],p=e[10],_=e[11],x=e[12],M=e[13],g=e[14],f=e[15],v=h*g*u-M*p*u+M*c*_-a*g*_-h*c*f+a*p*f,y=x*p*u-d*g*u-x*c*_+o*g*_+d*c*f-o*p*f,E=d*M*u-x*h*u+x*a*_-o*M*_-d*a*f+o*h*f,I=x*h*c-d*M*c-x*a*p+o*M*p+d*a*g-o*h*g,L=n*v+i*y+r*E+s*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=v*P,e[1]=(M*p*s-h*g*s-M*r*_+i*g*_+h*r*f-i*p*f)*P,e[2]=(a*g*s-M*c*s+M*r*u-i*g*u-a*r*f+i*c*f)*P,e[3]=(h*c*s-a*p*s-h*r*u+i*p*u+a*r*_-i*c*_)*P,e[4]=y*P,e[5]=(d*g*s-x*p*s+x*r*_-n*g*_-d*r*f+n*p*f)*P,e[6]=(x*c*s-o*g*s-x*r*u+n*g*u+o*r*f-n*c*f)*P,e[7]=(o*p*s-d*c*s+d*r*u-n*p*u-o*r*_+n*c*_)*P,e[8]=E*P,e[9]=(x*h*s-d*M*s-x*i*_+n*M*_+d*i*f-n*h*f)*P,e[10]=(o*M*s-x*a*s+x*i*u-n*M*u-o*i*f+n*a*f)*P,e[11]=(d*a*s-o*h*s-d*i*u+n*h*u+o*i*_-n*a*_)*P,e[12]=I*P,e[13]=(d*M*r-x*h*r+x*i*p-n*M*p-d*i*g+n*h*g)*P,e[14]=(x*a*r-o*M*r-x*i*c+n*M*c+o*i*g-n*a*g)*P,e[15]=(o*h*r-d*a*r+d*i*c-n*h*c-o*i*p+n*a*p)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,c=e.z,u=s*o,d=s*a;return this.set(u*o+i,u*a-r*c,u*c+r*a,0,u*a+r*c,d*a+i,d*c-r*o,0,u*c-r*a,d*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,c=n._w,u=s+s,d=o+o,h=a+a,p=s*u,_=s*d,x=s*h,M=o*d,g=o*h,f=a*h,v=c*u,y=c*d,E=c*h,I=i.x,L=i.y,P=i.z;return r[0]=(1-(M+f))*I,r[1]=(_+E)*I,r[2]=(x-y)*I,r[3]=0,r[4]=(_-E)*L,r[5]=(1-(p+f))*L,r[6]=(g+v)*L,r[7]=0,r[8]=(x+y)*P,r[9]=(g-v)*P,r[10]=(1-(p+M))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=so.set(r[0],r[1],r[2]).length();const o=so.set(r[4],r[5],r[6]).length(),a=so.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ei.copy(this);const u=1/s,d=1/o,h=1/a;return Ei.elements[0]*=u,Ei.elements[1]*=u,Ei.elements[2]*=u,Ei.elements[4]*=d,Ei.elements[5]*=d,Ei.elements[6]*=d,Ei.elements[8]*=h,Ei.elements[9]*=h,Ei.elements[10]*=h,n.setFromRotationMatrix(Ei),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=cr){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let _,x;if(a===cr)_=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===pu)_=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=cr){const c=this.elements,u=1/(n-e),d=1/(i-r),h=1/(o-s),p=(n+e)*u,_=(i+r)*d;let x,M;if(a===cr)x=(o+s)*h,M=-2*h;else if(a===pu)x=s*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*d,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=M,c[14]=-x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const so=new j,Ei=new Zt,aA=new j(0,0,0),lA=new j(1,1,1),br=new j,rc=new j,qn=new j,q_=new Zt,K_=new hl;class vr{constructor(e=0,n=0,i=0,r=vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],u=r[5],d=r[9],h=r[2],p=r[6],_=r[10];switch(n){case"XYZ":this._y=Math.asin(Fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Fn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Fn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,_),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Fn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,_),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Fn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-Fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return q_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(q_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return K_.setFromEuler(this),this.setFromQuaternion(K_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vr.DEFAULT_ORDER="XYZ";class Ty{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cA=0;const Z_=new j,oo=new hl,Ji=new Zt,sc=new j,ya=new j,uA=new j,fA=new hl,Q_=new j(1,0,0),J_=new j(0,1,0),ev=new j(0,0,1),tv={type:"added"},dA={type:"removed"},ao={type:"childadded",child:null},Yf={type:"childremoved",child:null};class Wn extends ta{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cA++}),this.uuid=dl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new j,n=new vr,i=new hl,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Je}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ty,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return oo.setFromAxisAngle(e,n),this.quaternion.multiply(oo),this}rotateOnWorldAxis(e,n){return oo.setFromAxisAngle(e,n),this.quaternion.premultiply(oo),this}rotateX(e){return this.rotateOnAxis(Q_,e)}rotateY(e){return this.rotateOnAxis(J_,e)}rotateZ(e){return this.rotateOnAxis(ev,e)}translateOnAxis(e,n){return Z_.copy(e).applyQuaternion(this.quaternion),this.position.add(Z_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Q_,e)}translateY(e){return this.translateOnAxis(J_,e)}translateZ(e){return this.translateOnAxis(ev,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?sc.copy(e):sc.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(ya,sc,this.up):Ji.lookAt(sc,ya,this.up),this.quaternion.setFromRotationMatrix(Ji),r&&(Ji.extractRotation(r.matrixWorld),oo.setFromRotationMatrix(Ji),this.quaternion.premultiply(oo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tv),ao.child=e,this.dispatchEvent(ao),ao.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(dA),Yf.child=e,this.dispatchEvent(Yf),Yf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ji.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ji),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tv),ao.child=e,this.dispatchEvent(ao),ao.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,uA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,fA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const h=c[u];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(n){const a=o(e.geometries),c=o(e.materials),u=o(e.textures),d=o(e.images),h=o(e.shapes),p=o(e.skeletons),_=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),_.length>0&&(i.animations=_),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wn.DEFAULT_UP=new j(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new j,er=new j,qf=new j,tr=new j,lo=new j,co=new j,nv=new j,Kf=new j,Zf=new j,Qf=new j,Jf=new Kt,ed=new Kt,td=new Kt;class Ci{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Mi.subVectors(e,n),r.cross(Mi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Mi.subVectors(r,n),er.subVectors(i,n),qf.subVectors(e,n);const o=Mi.dot(Mi),a=Mi.dot(er),c=Mi.dot(qf),u=er.dot(er),d=er.dot(qf),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const p=1/h,_=(u*c-a*d)*p,x=(o*d-a*c)*p;return s.set(1-_-x,x,_)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,tr)===null?!1:tr.x>=0&&tr.y>=0&&tr.x+tr.y<=1}static getInterpolation(e,n,i,r,s,o,a,c){return this.getBarycoord(e,n,i,r,tr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,tr.x),c.addScaledVector(o,tr.y),c.addScaledVector(a,tr.z),c)}static getInterpolatedAttribute(e,n,i,r,s,o){return Jf.setScalar(0),ed.setScalar(0),td.setScalar(0),Jf.fromBufferAttribute(e,n),ed.fromBufferAttribute(e,i),td.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Jf,s.x),o.addScaledVector(ed,s.y),o.addScaledVector(td,s.z),o}static isFrontFacing(e,n,i,r){return Mi.subVectors(i,n),er.subVectors(e,n),Mi.cross(er).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),er.subVectors(this.a,this.b),Mi.cross(er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ci.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Ci.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;lo.subVectors(r,i),co.subVectors(s,i),Kf.subVectors(e,i);const c=lo.dot(Kf),u=co.dot(Kf);if(c<=0&&u<=0)return n.copy(i);Zf.subVectors(e,r);const d=lo.dot(Zf),h=co.dot(Zf);if(d>=0&&h<=d)return n.copy(r);const p=c*h-d*u;if(p<=0&&c>=0&&d<=0)return o=c/(c-d),n.copy(i).addScaledVector(lo,o);Qf.subVectors(e,s);const _=lo.dot(Qf),x=co.dot(Qf);if(x>=0&&_<=x)return n.copy(s);const M=_*u-c*x;if(M<=0&&u>=0&&x<=0)return a=u/(u-x),n.copy(i).addScaledVector(co,a);const g=d*x-_*h;if(g<=0&&h-d>=0&&_-x>=0)return nv.subVectors(s,r),a=(h-d)/(h-d+(_-x)),n.copy(r).addScaledVector(nv,a);const f=1/(g+M+p);return o=M*f,a=p*f,n.copy(i).addScaledVector(lo,o).addScaledVector(co,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ay={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rr={h:0,s:0,l:0},oc={h:0,s:0,l:0};function nd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ci){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,gt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=gt.workingColorSpace){if(e=K1(e,1),n=Fn(n,0,1),i=Fn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=nd(o,s,e+1/3),this.g=nd(o,s,e),this.b=nd(o,s,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,n=ci){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ci){const i=Ay[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=Oo(e.r),this.g=Oo(e.g),this.b=Oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ci){return gt.fromWorkingColorSpace(Sn.copy(this),e),Math.round(Fn(Sn.r*255,0,255))*65536+Math.round(Fn(Sn.g*255,0,255))*256+Math.round(Fn(Sn.b*255,0,255))}getHexString(e=ci){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.fromWorkingColorSpace(Sn.copy(this),n);const i=Sn.r,r=Sn.g,s=Sn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,u;const d=(a+o)/2;if(a===o)c=0,u=0;else{const h=o-a;switch(u=d<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,n=gt.workingColorSpace){return gt.fromWorkingColorSpace(Sn.copy(this),n),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=ci){gt.fromWorkingColorSpace(Sn.copy(this),e);const n=Sn.r,i=Sn.g,r=Sn.b;return e!==ci?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Rr),this.setHSL(Rr.h+e,Rr.s+n,Rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Rr),e.getHSL(oc);const i=Bf(Rr.h,oc.h,n),r=Bf(Rr.s,oc.s,n),s=Bf(Rr.l,oc.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Et;Et.NAMES=Ay;let hA=0;class ml extends ta{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hA++}),this.uuid=dl(),this.name="",this.blending=No,this.side=Qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=fh,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==No&&(i.blending=this.blending),this.side!==Qr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uh&&(i.blendSrc=this.blendSrc),this.blendDst!==fh&&(i.blendDst=this.blendDst),this.blendEquation!==Ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==B_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==eo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==eo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==eo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Cy extends ml{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.combine=ly,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qt=new j,ac=new It;class Di{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=z_,this.updateRanges=[],this.gpuType=lr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ac.fromBufferAttribute(this,n),ac.applyMatrix3(e),this.setXY(n,ac.x,ac.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix3(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=_a(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Un(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=_a(n,this.array)),n}setX(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=_a(n,this.array)),n}setY(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=_a(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=_a(n,this.array)),n}setW(e,n){return this.normalized&&(n=Un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),i=Un(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),i=Un(i,this.array),r=Un(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Un(n,this.array),i=Un(i,this.array),r=Un(r,this.array),s=Un(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==z_&&(e.usage=this.usage),e}}class by extends Di{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ry extends Di{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ds extends Di{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pA=0;const li=new Zt,id=new Wn,uo=new j,Kn=new pl,Sa=new pl,ln=new j;class yr extends ta{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pA++}),this.uuid=dl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sy(e)?Ry:by)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return li.makeRotationFromQuaternion(e),this.applyMatrix4(li),this}rotateX(e){return li.makeRotationX(e),this.applyMatrix4(li),this}rotateY(e){return li.makeRotationY(e),this.applyMatrix4(li),this}rotateZ(e){return li.makeRotationZ(e),this.applyMatrix4(li),this}translate(e,n,i){return li.makeTranslation(e,n,i),this.applyMatrix4(li),this}scale(e,n,i){return li.makeScale(e,n,i),this.applyMatrix4(li),this}lookAt(e){return id.lookAt(e),id.updateMatrix(),this.applyMatrix4(id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(uo).negate(),this.translate(uo.x,uo.y,uo.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ds(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Kn.setFromBufferAttribute(s),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Uu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Sa.setFromBufferAttribute(a),this.morphTargetsRelative?(ln.addVectors(Kn.min,Sa.min),Kn.expandByPoint(ln),ln.addVectors(Kn.max,Sa.max),Kn.expandByPoint(ln)):(Kn.expandByPoint(Sa.min),Kn.expandByPoint(Sa.max))}Kn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ln.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ln));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],c=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)ln.fromBufferAttribute(a,u),c&&(uo.fromBufferAttribute(e,u),ln.add(uo)),r=Math.max(r,i.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<i.count;D++)a[D]=new j,c[D]=new j;const u=new j,d=new j,h=new j,p=new It,_=new It,x=new It,M=new j,g=new j;function f(D,b,T){u.fromBufferAttribute(i,D),d.fromBufferAttribute(i,b),h.fromBufferAttribute(i,T),p.fromBufferAttribute(s,D),_.fromBufferAttribute(s,b),x.fromBufferAttribute(s,T),d.sub(u),h.sub(u),_.sub(p),x.sub(p);const U=1/(_.x*x.y-x.x*_.y);isFinite(U)&&(M.copy(d).multiplyScalar(x.y).addScaledVector(h,-_.y).multiplyScalar(U),g.copy(h).multiplyScalar(_.x).addScaledVector(d,-x.x).multiplyScalar(U),a[D].add(M),a[b].add(M),a[T].add(M),c[D].add(g),c[b].add(g),c[T].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,b=v.length;D<b;++D){const T=v[D],U=T.start,Z=T.count;for(let $=U,re=U+Z;$<re;$+=3)f(e.getX($+0),e.getX($+1),e.getX($+2))}const y=new j,E=new j,I=new j,L=new j;function P(D){I.fromBufferAttribute(r,D),L.copy(I);const b=a[D];y.copy(b),y.sub(I.multiplyScalar(I.dot(b))).normalize(),E.crossVectors(L,b);const U=E.dot(c[D])<0?-1:1;o.setXYZW(D,y.x,y.y,y.z,U)}for(let D=0,b=v.length;D<b;++D){const T=v[D],U=T.start,Z=T.count;for(let $=U,re=U+Z;$<re;$+=3)P(e.getX($+0)),P(e.getX($+1)),P(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Di(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,_=i.count;p<_;p++)i.setXYZ(p,0,0,0);const r=new j,s=new j,o=new j,a=new j,c=new j,u=new j,d=new j,h=new j;if(e)for(let p=0,_=e.count;p<_;p+=3){const x=e.getX(p+0),M=e.getX(p+1),g=e.getX(p+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,g),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,x),c.fromBufferAttribute(i,M),u.fromBufferAttribute(i,g),a.add(d),c.add(d),u.add(d),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let p=0,_=n.count;p<_;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),o.fromBufferAttribute(n,p+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)ln.fromBufferAttribute(e,n),ln.normalize(),e.setXYZ(n,ln.x,ln.y,ln.z)}toNonIndexed(){function e(a,c){const u=a.array,d=a.itemSize,h=a.normalized,p=new u.constructor(c.length*d);let _=0,x=0;for(let M=0,g=c.length;M<g;M++){a.isInterleavedBufferAttribute?_=c[M]*a.data.stride+a.offset:_=c[M]*d;for(let f=0;f<d;f++)p[x++]=u[_++]}return new Di(p,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new yr,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],u=e(c,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const c=[],u=s[a];for(let d=0,h=u.length;d<h;d++){const p=u[d],_=e(p,i);c.push(_)}n.morphAttributes[a]=c}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let h=0,p=u.length;h<p;h++){const _=u[h];d.push(_.toJSON(e.data))}d.length>0&&(r[c]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],h=s[u];for(let p=0,_=h.length;p<_;p++)d.push(h[p].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,d=o.length;u<d;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const iv=new Zt,ms=new wy,lc=new Uu,rv=new j,cc=new j,uc=new j,fc=new j,rd=new j,dc=new j,sv=new j,hc=new j;class ur extends Wn{constructor(e=new yr,n=new Cy){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){dc.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const d=a[c],h=s[c];d!==0&&(rd.fromBufferAttribute(h,e),o?dc.addScaledVector(rd,d):dc.addScaledVector(rd.sub(n),d))}n.add(dc)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(s),ms.copy(e.ray).recast(e.near),!(lc.containsPoint(ms.origin)===!1&&(ms.intersectSphere(lc,rv)===null||ms.origin.distanceToSquared(rv)>(e.far-e.near)**2))&&(iv.copy(s).invert(),ms.copy(e.ray).applyMatrix4(iv),!(i.boundingBox!==null&&ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ms)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,p=s.groups,_=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,M=p.length;x<M;x++){const g=p[x],f=o[g.materialIndex],v=Math.max(g.start,_.start),y=Math.min(a.count,Math.min(g.start+g.count,_.start+_.count));for(let E=v,I=y;E<I;E+=3){const L=a.getX(E),P=a.getX(E+1),D=a.getX(E+2);r=pc(this,f,e,i,u,d,h,L,P,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,_.start),M=Math.min(a.count,_.start+_.count);for(let g=x,f=M;g<f;g+=3){const v=a.getX(g),y=a.getX(g+1),E=a.getX(g+2);r=pc(this,o,e,i,u,d,h,v,y,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let x=0,M=p.length;x<M;x++){const g=p[x],f=o[g.materialIndex],v=Math.max(g.start,_.start),y=Math.min(c.count,Math.min(g.start+g.count,_.start+_.count));for(let E=v,I=y;E<I;E+=3){const L=E,P=E+1,D=E+2;r=pc(this,f,e,i,u,d,h,L,P,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,_.start),M=Math.min(c.count,_.start+_.count);for(let g=x,f=M;g<f;g+=3){const v=g,y=g+1,E=g+2;r=pc(this,o,e,i,u,d,h,v,y,E),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function mA(t,e,n,i,r,s,o,a){let c;if(e.side===Vn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Qr,a),c===null)return null;hc.copy(a),hc.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(hc);return u<n.near||u>n.far?null:{distance:u,point:hc.clone(),object:t}}function pc(t,e,n,i,r,s,o,a,c,u){t.getVertexPosition(a,cc),t.getVertexPosition(c,uc),t.getVertexPosition(u,fc);const d=mA(t,e,n,i,cc,uc,fc,sv);if(d){const h=new j;Ci.getBarycoord(sv,cc,uc,fc,h),r&&(d.uv=Ci.getInterpolatedAttribute(r,a,c,u,h,new It)),s&&(d.uv1=Ci.getInterpolatedAttribute(s,a,c,u,h,new It)),o&&(d.normal=Ci.getInterpolatedAttribute(o,a,c,u,h,new j),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:c,c:u,normal:new j,materialIndex:0};Ci.getNormal(cc,uc,fc,p.normal),d.face=p,d.barycoord=h}return d}class gl extends yr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],u=[],d=[],h=[];let p=0,_=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ds(u,3)),this.setAttribute("normal",new Ds(d,3)),this.setAttribute("uv",new Ds(h,2));function x(M,g,f,v,y,E,I,L,P,D,b){const T=E/P,U=I/D,Z=E/2,$=I/2,re=L/2,oe=P+1,J=D+1;let ae=0,O=0;const Q=new j;for(let N=0;N<J;N++){const ge=N*U-$;for(let Oe=0;Oe<oe;Oe++){const at=Oe*T-Z;Q[M]=at*v,Q[g]=ge*y,Q[f]=re,u.push(Q.x,Q.y,Q.z),Q[M]=0,Q[g]=0,Q[f]=L>0?1:-1,d.push(Q.x,Q.y,Q.z),h.push(Oe/P),h.push(1-N/D),ae+=1}}for(let N=0;N<D;N++)for(let ge=0;ge<P;ge++){const Oe=p+ge+oe*N,at=p+ge+oe*(N+1),q=p+(ge+1)+oe*(N+1),ce=p+(ge+1)+oe*N;c.push(Oe,at,ce),c.push(at,q,ce),O+=6}a.addGroup(_,O,b),_+=O,p+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function bn(t){const e={};for(let n=0;n<t.length;n++){const i=qo(t[n]);for(const r in i)e[r]=i[r]}return e}function gA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Py(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const _A={clone:qo,merge:bn};var vA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jr extends ml{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vA,this.fragmentShader=xA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qo(e.uniforms),this.uniformsGroups=gA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ly extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=cr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new j,ov=new It,av=new It;class di extends Ly{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=qh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qh*2*Math.atan(Math.tan(kf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,n){return this.getViewBounds(e,ov,av),n.subVectors(av,ov)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(kf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/c,n-=o.offsetY*i/u,r*=o.width/c,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const fo=-90,ho=1;class yA extends Wn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new di(fo,ho,e,n);r.layers=this.layers,this.add(r);const s=new di(fo,ho,e,n);s.layers=this.layers,this.add(s);const o=new di(fo,ho,e,n);o.layers=this.layers,this.add(o);const a=new di(fo,ho,e,n);a.layers=this.layers,this.add(a);const c=new di(fo,ho,e,n);c.layers=this.layers,this.add(c);const u=new di(fo,ho,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,c]=n;for(const u of n)this.remove(u);if(e===cr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===pu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,u,d]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,p,_),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Dy extends Gn{constructor(e,n,i,r,s,o,a,c,u,d){e=e!==void 0?e:[],n=n!==void 0?n:Xo,super(e,n,i,r,s,o,a,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class SA extends Bs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Dy(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:zi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new gl(5,5,5),s=new Jr({name:"CubemapFromEquirect",uniforms:qo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vn,blending:Yr});s.uniforms.tEquirect.value=n;const o=new ur(r,s),a=n.minFilter;return n.minFilter===Rs&&(n.minFilter=zi),new yA(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const sd=new j,EA=new j,MA=new Je;class Ss{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=sd.subVectors(i,n).cross(EA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(sd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||MA.getNormalMatrix(e),r=this.coplanarPoint(sd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new Uu,mc=new j;class Iy{constructor(e=new Ss,n=new Ss,i=new Ss,r=new Ss,s=new Ss,o=new Ss){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=cr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],u=r[4],d=r[5],h=r[6],p=r[7],_=r[8],x=r[9],M=r[10],g=r[11],f=r[12],v=r[13],y=r[14],E=r[15];if(i[0].setComponents(c-s,p-u,g-_,E-f).normalize(),i[1].setComponents(c+s,p+u,g+_,E+f).normalize(),i[2].setComponents(c+o,p+d,g+x,E+v).normalize(),i[3].setComponents(c-o,p-d,g-x,E-v).normalize(),i[4].setComponents(c-a,p-h,g-M,E-y).normalize(),n===cr)i[5].setComponents(c+a,p+h,g+M,E+y).normalize();else if(n===pu)i[5].setComponents(a,h,M,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(mc.x=r.normal.x>0?e.max.x:e.min.x,mc.y=r.normal.y>0?e.max.y:e.min.y,mc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mc)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ny(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function wA(t){const e=new WeakMap;function n(a,c){const u=a.array,d=a.usage,h=u.byteLength,p=t.createBuffer();t.bindBuffer(c,p),t.bufferData(c,u,d),a.onUploadCallback();let _;if(u instanceof Float32Array)_=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?_=t.HALF_FLOAT:_=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=t.SHORT;else if(u instanceof Uint32Array)_=t.UNSIGNED_INT;else if(u instanceof Int32Array)_=t.INT;else if(u instanceof Int8Array)_=t.BYTE;else if(u instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,u){const d=c.array,h=c.updateRanges;if(t.bindBuffer(u,a),h.length===0)t.bufferSubData(u,0,d);else{h.sort((_,x)=>_.start-x.start);let p=0;for(let _=1;_<h.length;_++){const x=h[p],M=h[_];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++p,h[p]=M)}h.length=p+1;for(let _=0,x=h.length;_<x;_++){const M=h[_];t.bufferSubData(u,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(t.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,c),u.version=a.version}}return{get:r,remove:s,update:o}}class Ou extends yr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),c=Math.floor(r),u=a+1,d=c+1,h=e/a,p=n/c,_=[],x=[],M=[],g=[];for(let f=0;f<d;f++){const v=f*p-o;for(let y=0;y<u;y++){const E=y*h-s;x.push(E,-v,0),M.push(0,0,1),g.push(y/a),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let v=0;v<a;v++){const y=v+u*f,E=v+u*(f+1),I=v+1+u*(f+1),L=v+1+u*f;_.push(y,E,L),_.push(E,I,L)}this.setIndex(_),this.setAttribute("position",new Ds(x,3)),this.setAttribute("normal",new Ds(M,3)),this.setAttribute("uv",new Ds(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ou(e.width,e.height,e.widthSegments,e.heightSegments)}}var TA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,AA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,CA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,DA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,NA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,BA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,HA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$A=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,YA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,KA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ZA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eC=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tC="gl_FragColor = linearToOutputTexel( gl_FragColor );",nC=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rC=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sC=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oC=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aC=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lC=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cC=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uC=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fC=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dC=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hC=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pC=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mC=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gC=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_C=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vC=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xC=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,EC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,MC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wC=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CC=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bC=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RC=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PC=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LC=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FC=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kC=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,BC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zC=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,HC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$C=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,YC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,eb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ib=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ob=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ab=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ub=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_b=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Tb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ab=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Db=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ib=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ub=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ob=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Gb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$b=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:TA,alphahash_pars_fragment:AA,alphamap_fragment:CA,alphamap_pars_fragment:bA,alphatest_fragment:RA,alphatest_pars_fragment:PA,aomap_fragment:LA,aomap_pars_fragment:DA,batching_pars_vertex:IA,batching_vertex:NA,begin_vertex:UA,beginnormal_vertex:OA,bsdfs:FA,iridescence_fragment:kA,bumpmap_pars_fragment:BA,clipping_planes_fragment:zA,clipping_planes_pars_fragment:HA,clipping_planes_pars_vertex:VA,clipping_planes_vertex:GA,color_fragment:WA,color_pars_fragment:XA,color_pars_vertex:jA,color_vertex:$A,common:YA,cube_uv_reflection_fragment:qA,defaultnormal_vertex:KA,displacementmap_pars_vertex:ZA,displacementmap_vertex:QA,emissivemap_fragment:JA,emissivemap_pars_fragment:eC,colorspace_fragment:tC,colorspace_pars_fragment:nC,envmap_fragment:iC,envmap_common_pars_fragment:rC,envmap_pars_fragment:sC,envmap_pars_vertex:oC,envmap_physical_pars_fragment:_C,envmap_vertex:aC,fog_vertex:lC,fog_pars_vertex:cC,fog_fragment:uC,fog_pars_fragment:fC,gradientmap_pars_fragment:dC,lightmap_pars_fragment:hC,lights_lambert_fragment:pC,lights_lambert_pars_fragment:mC,lights_pars_begin:gC,lights_toon_fragment:vC,lights_toon_pars_fragment:xC,lights_phong_fragment:yC,lights_phong_pars_fragment:SC,lights_physical_fragment:EC,lights_physical_pars_fragment:MC,lights_fragment_begin:wC,lights_fragment_maps:TC,lights_fragment_end:AC,logdepthbuf_fragment:CC,logdepthbuf_pars_fragment:bC,logdepthbuf_pars_vertex:RC,logdepthbuf_vertex:PC,map_fragment:LC,map_pars_fragment:DC,map_particle_fragment:IC,map_particle_pars_fragment:NC,metalnessmap_fragment:UC,metalnessmap_pars_fragment:OC,morphinstance_vertex:FC,morphcolor_vertex:kC,morphnormal_vertex:BC,morphtarget_pars_vertex:zC,morphtarget_vertex:HC,normal_fragment_begin:VC,normal_fragment_maps:GC,normal_pars_fragment:WC,normal_pars_vertex:XC,normal_vertex:jC,normalmap_pars_fragment:$C,clearcoat_normal_fragment_begin:YC,clearcoat_normal_fragment_maps:qC,clearcoat_pars_fragment:KC,iridescence_pars_fragment:ZC,opaque_fragment:QC,packing:JC,premultiplied_alpha_fragment:eb,project_vertex:tb,dithering_fragment:nb,dithering_pars_fragment:ib,roughnessmap_fragment:rb,roughnessmap_pars_fragment:sb,shadowmap_pars_fragment:ob,shadowmap_pars_vertex:ab,shadowmap_vertex:lb,shadowmask_pars_fragment:cb,skinbase_vertex:ub,skinning_pars_vertex:fb,skinning_vertex:db,skinnormal_vertex:hb,specularmap_fragment:pb,specularmap_pars_fragment:mb,tonemapping_fragment:gb,tonemapping_pars_fragment:_b,transmission_fragment:vb,transmission_pars_fragment:xb,uv_pars_fragment:yb,uv_pars_vertex:Sb,uv_vertex:Eb,worldpos_vertex:Mb,background_vert:wb,background_frag:Tb,backgroundCube_vert:Ab,backgroundCube_frag:Cb,cube_vert:bb,cube_frag:Rb,depth_vert:Pb,depth_frag:Lb,distanceRGBA_vert:Db,distanceRGBA_frag:Ib,equirect_vert:Nb,equirect_frag:Ub,linedashed_vert:Ob,linedashed_frag:Fb,meshbasic_vert:kb,meshbasic_frag:Bb,meshlambert_vert:zb,meshlambert_frag:Hb,meshmatcap_vert:Vb,meshmatcap_frag:Gb,meshnormal_vert:Wb,meshnormal_frag:Xb,meshphong_vert:jb,meshphong_frag:$b,meshphysical_vert:Yb,meshphysical_frag:qb,meshtoon_vert:Kb,meshtoon_frag:Zb,points_vert:Qb,points_frag:Jb,shadow_vert:eR,shadow_frag:tR,sprite_vert:nR,sprite_frag:iR},ye={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},ki={basic:{uniforms:bn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:bn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Et(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:bn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:bn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:bn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Et(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:bn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:bn([ye.points,ye.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:bn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:bn([ye.common,ye.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:bn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:bn([ye.sprite,ye.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:bn([ye.common,ye.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:bn([ye.lights,ye.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};ki.physical={uniforms:bn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const gc={r:0,b:0,g:0},_s=new vr,rR=new Zt;function sR(t,e,n,i,r,s,o){const a=new Et(0);let c=s===!0?0:1,u,d,h=null,p=0,_=null;function x(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?n:e).get(y)),y}function M(v){let y=!1;const E=x(v);E===null?f(a,c):E&&E.isColor&&(f(E,1),y=!0);const I=t.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(v,y){const E=x(y);E&&(E.isCubeTexture||E.mapping===Iu)?(d===void 0&&(d=new ur(new gl(1,1,1),new Jr({name:"BackgroundCubeMaterial",uniforms:qo(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),_s.copy(y.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(rR.makeRotationFromEuler(_s)),d.material.toneMapped=gt.getTransfer(E.colorSpace)!==bt,(h!==E||p!==E.version||_!==t.toneMapping)&&(d.material.needsUpdate=!0,h=E,p=E.version,_=t.toneMapping),d.layers.enableAll(),v.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(u===void 0&&(u=new ur(new Ou(2,2),new Jr({name:"BackgroundMaterial",uniforms:qo(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Qr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=E,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=gt.getTransfer(E.colorSpace)!==bt,E.matrixAutoUpdate===!0&&E.updateMatrix(),u.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||p!==E.version||_!==t.toneMapping)&&(u.material.needsUpdate=!0,h=E,p=E.version,_=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function f(v,y){v.getRGB(gc,Py(t)),i.buffers.color.setClear(gc.r,gc.g,gc.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),c=y,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,f(a,c)},render:M,addToRenderList:g}}function oR(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,o=!1;function a(T,U,Z,$,re){let oe=!1;const J=h($,Z,U);s!==J&&(s=J,u(s.object)),oe=_(T,$,Z,re),oe&&x(T,$,Z,re),re!==null&&e.update(re,t.ELEMENT_ARRAY_BUFFER),(oe||o)&&(o=!1,E(T,U,Z,$),re!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function c(){return t.createVertexArray()}function u(T){return t.bindVertexArray(T)}function d(T){return t.deleteVertexArray(T)}function h(T,U,Z){const $=Z.wireframe===!0;let re=i[T.id];re===void 0&&(re={},i[T.id]=re);let oe=re[U.id];oe===void 0&&(oe={},re[U.id]=oe);let J=oe[$];return J===void 0&&(J=p(c()),oe[$]=J),J}function p(T){const U=[],Z=[],$=[];for(let re=0;re<n;re++)U[re]=0,Z[re]=0,$[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:Z,attributeDivisors:$,object:T,attributes:{},index:null}}function _(T,U,Z,$){const re=s.attributes,oe=U.attributes;let J=0;const ae=Z.getAttributes();for(const O in ae)if(ae[O].location>=0){const N=re[O];let ge=oe[O];if(ge===void 0&&(O==="instanceMatrix"&&T.instanceMatrix&&(ge=T.instanceMatrix),O==="instanceColor"&&T.instanceColor&&(ge=T.instanceColor)),N===void 0||N.attribute!==ge||ge&&N.data!==ge.data)return!0;J++}return s.attributesNum!==J||s.index!==$}function x(T,U,Z,$){const re={},oe=U.attributes;let J=0;const ae=Z.getAttributes();for(const O in ae)if(ae[O].location>=0){let N=oe[O];N===void 0&&(O==="instanceMatrix"&&T.instanceMatrix&&(N=T.instanceMatrix),O==="instanceColor"&&T.instanceColor&&(N=T.instanceColor));const ge={};ge.attribute=N,N&&N.data&&(ge.data=N.data),re[O]=ge,J++}s.attributes=re,s.attributesNum=J,s.index=$}function M(){const T=s.newAttributes;for(let U=0,Z=T.length;U<Z;U++)T[U]=0}function g(T){f(T,0)}function f(T,U){const Z=s.newAttributes,$=s.enabledAttributes,re=s.attributeDivisors;Z[T]=1,$[T]===0&&(t.enableVertexAttribArray(T),$[T]=1),re[T]!==U&&(t.vertexAttribDivisor(T,U),re[T]=U)}function v(){const T=s.newAttributes,U=s.enabledAttributes;for(let Z=0,$=U.length;Z<$;Z++)U[Z]!==T[Z]&&(t.disableVertexAttribArray(Z),U[Z]=0)}function y(T,U,Z,$,re,oe,J){J===!0?t.vertexAttribIPointer(T,U,Z,re,oe):t.vertexAttribPointer(T,U,Z,$,re,oe)}function E(T,U,Z,$){M();const re=$.attributes,oe=Z.getAttributes(),J=U.defaultAttributeValues;for(const ae in oe){const O=oe[ae];if(O.location>=0){let Q=re[ae];if(Q===void 0&&(ae==="instanceMatrix"&&T.instanceMatrix&&(Q=T.instanceMatrix),ae==="instanceColor"&&T.instanceColor&&(Q=T.instanceColor)),Q!==void 0){const N=Q.normalized,ge=Q.itemSize,Oe=e.get(Q);if(Oe===void 0)continue;const at=Oe.buffer,q=Oe.type,ce=Oe.bytesPerElement,ve=q===t.INT||q===t.UNSIGNED_INT||Q.gpuType===qp;if(Q.isInterleavedBufferAttribute){const me=Q.data,le=me.stride,Ge=Q.offset;if(me.isInstancedInterleavedBuffer){for(let et=0;et<O.locationSize;et++)f(O.location+et,me.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let et=0;et<O.locationSize;et++)g(O.location+et);t.bindBuffer(t.ARRAY_BUFFER,at);for(let et=0;et<O.locationSize;et++)y(O.location+et,ge/O.locationSize,q,N,le*ce,(Ge+ge/O.locationSize*et)*ce,ve)}else{if(Q.isInstancedBufferAttribute){for(let me=0;me<O.locationSize;me++)f(O.location+me,Q.meshPerAttribute);T.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let me=0;me<O.locationSize;me++)g(O.location+me);t.bindBuffer(t.ARRAY_BUFFER,at);for(let me=0;me<O.locationSize;me++)y(O.location+me,ge/O.locationSize,q,N,ge*ce,ge/O.locationSize*me*ce,ve)}}else if(J!==void 0){const N=J[ae];if(N!==void 0)switch(N.length){case 2:t.vertexAttrib2fv(O.location,N);break;case 3:t.vertexAttrib3fv(O.location,N);break;case 4:t.vertexAttrib4fv(O.location,N);break;default:t.vertexAttrib1fv(O.location,N)}}}}v()}function I(){D();for(const T in i){const U=i[T];for(const Z in U){const $=U[Z];for(const re in $)d($[re].object),delete $[re];delete U[Z]}delete i[T]}}function L(T){if(i[T.id]===void 0)return;const U=i[T.id];for(const Z in U){const $=U[Z];for(const re in $)d($[re].object),delete $[re];delete U[Z]}delete i[T.id]}function P(T){for(const U in i){const Z=i[U];if(Z[T.id]===void 0)continue;const $=Z[T.id];for(const re in $)d($[re].object),delete $[re];delete Z[T.id]}}function D(){b(),o=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:g,disableUnusedAttributes:v}}function aR(t,e,n){let i;function r(u){i=u}function s(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function o(u,d,h){h!==0&&(t.drawArraysInstanced(i,u,d,h),n.update(d,i,h))}function a(u,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=d[x];n.update(_,i,1)}function c(u,d,h,p){if(h===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<u.length;x++)o(u[x],d[x],p[x]);else{_.multiDrawArraysInstancedWEBGL(i,u,0,d,0,p,0,h);let x=0;for(let M=0;M<h;M++)x+=d[M]*p[M];n.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function lR(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==bi&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const D=P===fl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==_r&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==lr&&!D)}function c(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=c(u);d!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=n.logarithmicDepthBuffer===!0,p=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),_=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),I=x>0,L=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:p,maxTextures:_,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:E,vertexTextures:I,maxSamples:L}}function cR(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ss,a=new Je,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const _=h.length!==0||p||i!==0||r;return r=p,i=h.length,_},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){n=d(h,p,0)},this.setState=function(h,p,_){const x=h.clippingPlanes,M=h.clipIntersection,g=h.clipShadows,f=t.get(h);if(!r||x===null||x.length===0||s&&!g)s?d(null):u();else{const v=s?0:i,y=v*4;let E=f.clippingState||null;c.value=E,E=d(x,p,y,_);for(let I=0;I!==y;++I)E[I]=n[I];f.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,p,_,x){const M=h!==null?h.length:0;let g=null;if(M!==0){if(g=c.value,x!==!0||g===null){const f=_+M*4,v=p.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<f)&&(g=new Float32Array(f));for(let y=0,E=_;y!==M;++y,E+=4)o.copy(h[y]).applyMatrix4(v,a),o.normal.toArray(g,E),g[E+3]=o.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}function uR(t){let e=new WeakMap;function n(o,a){return a===xh?o.mapping=Xo:a===yh&&(o.mapping=jo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===xh||a===yh)if(e.has(o)){const c=e.get(o).texture;return n(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new SA(c.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class fR extends Ly{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Co=4,lv=[.125,.215,.35,.446,.526,.582],ws=20,od=new fR,cv=new Et;let ad=null,ld=0,cd=0,ud=!1;const Es=(1+Math.sqrt(5))/2,po=1/Es,uv=[new j(-Es,po,0),new j(Es,po,0),new j(-po,0,Es),new j(po,0,Es),new j(0,Es,-po),new j(0,Es,po),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class fv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){ad=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ad,ld,cd),this._renderer.xr.enabled=ud,e.scissorTest=!1,_c(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xo||e.mapping===jo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ad=this._renderer.getRenderTarget(),ld=this._renderer.getActiveCubeFace(),cd=this._renderer.getActiveMipmapLevel(),ud=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:zi,minFilter:zi,generateMipmaps:!1,type:fl,format:bi,colorSpace:ea,depthBuffer:!1},r=dv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dv(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dR(s)),this._blurMaterial=hR(s,e,n)}return r}_compileMaterial(e){const n=new ur(this._lodPlanes[0],e);this._renderer.compile(n,od)}_sceneToCubeUV(e,n,i,r){const a=new di(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(cv),d.toneMapping=qr,d.autoClear=!1;const _=new Cy({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1}),x=new ur(new gl,_);let M=!1;const g=e.background;g?g.isColor&&(_.color.copy(g),e.background=null,M=!0):(_.color.copy(cv),M=!0);for(let f=0;f<6;f++){const v=f%3;v===0?(a.up.set(0,c[f],0),a.lookAt(u[f],0,0)):v===1?(a.up.set(0,0,c[f]),a.lookAt(0,u[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,u[f]));const y=this._cubeSize;_c(r,v*y,f>2?y:0,y,y),d.setRenderTarget(r),M&&d.render(x,a),d.render(e,a)}x.geometry.dispose(),x.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xo||e.mapping===jo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ur(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;_c(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(o,od)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=uv[(r-s-1)%uv.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new ur(this._lodPlanes[r],u),p=u.uniforms,_=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*ws-1),M=s/x,g=isFinite(s)?1+Math.floor(d*M):ws;g>ws&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ws}`);const f=[];let v=0;for(let P=0;P<ws;++P){const D=P/M,b=Math.exp(-D*D/2);f.push(b),P===0?v+=b:P<g&&(v+=2*b)}for(let P=0;P<f.length;P++)f[P]=f[P]/v;p.envMap.value=e.texture,p.samples.value=g,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);const{_lodMax:y}=this;p.dTheta.value=x,p.mipInt.value=y-i;const E=this._sizeLods[r],I=3*E*(r>y-Co?r-y+Co:0),L=4*(this._cubeSize-E);_c(n,I,L,3*E,2*E),c.setRenderTarget(n),c.render(h,od)}}function dR(t){const e=[],n=[],i=[];let r=t;const s=t-Co+1+lv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let c=1/a;o>t-Co?c=lv[o-t+Co-1]:o===0&&(c=0),i.push(c);const u=1/(a-2),d=-u,h=1+u,p=[d,d,h,d,h,h,d,d,h,h,d,h],_=6,x=6,M=3,g=2,f=1,v=new Float32Array(M*x*_),y=new Float32Array(g*x*_),E=new Float32Array(f*x*_);for(let L=0;L<_;L++){const P=L%3*2/3-1,D=L>2?0:-1,b=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];v.set(b,M*x*L),y.set(p,g*x*L);const T=[L,L,L,L,L,L];E.set(T,f*x*L)}const I=new yr;I.setAttribute("position",new Di(v,M)),I.setAttribute("uv",new Di(y,g)),I.setAttribute("faceIndex",new Di(E,f)),e.push(I),r>Co&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function dv(t,e,n){const i=new Bs(t,e,n);return i.texture.mapping=Iu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _c(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function hR(t,e,n){const i=new Float32Array(ws),r=new j(0,1,0);return new Jr({name:"SphericalGaussianBlur",defines:{n:ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function hv(){return new Jr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function pv(){return new Jr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yr,depthTest:!1,depthWrite:!1})}function tm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pR(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const c=a.mapping,u=c===xh||c===yh,d=c===Xo||c===jo;if(u||d){let h=e.get(a);const p=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return n===null&&(n=new fv(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const _=a.image;return u&&_&&_.height>0||d&&_&&r(_)?(n===null&&(n=new fv(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&c++;return c===u}function s(a){const c=a.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function mR(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Aa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function gR(t,e,n,i){const r={},s=new WeakMap;function o(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const x in p.attributes)e.remove(p.attributes[x]);for(const x in p.morphAttributes){const M=p.morphAttributes[x];for(let g=0,f=M.length;g<f;g++)e.remove(M[g])}p.removeEventListener("dispose",o),delete r[p.id];const _=s.get(p);_&&(e.remove(_),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,n.memory.geometries++),p}function c(h){const p=h.attributes;for(const x in p)e.update(p[x],t.ARRAY_BUFFER);const _=h.morphAttributes;for(const x in _){const M=_[x];for(let g=0,f=M.length;g<f;g++)e.update(M[g],t.ARRAY_BUFFER)}}function u(h){const p=[],_=h.index,x=h.attributes.position;let M=0;if(_!==null){const v=_.array;M=_.version;for(let y=0,E=v.length;y<E;y+=3){const I=v[y+0],L=v[y+1],P=v[y+2];p.push(I,L,L,P,P,I)}}else if(x!==void 0){const v=x.array;M=x.version;for(let y=0,E=v.length/3-1;y<E;y+=3){const I=y+0,L=y+1,P=y+2;p.push(I,L,L,P,P,I)}}else return;const g=new(Sy(p)?Ry:by)(p,1);g.version=M;const f=s.get(h);f&&e.remove(f),s.set(h,g)}function d(h){const p=s.get(h);if(p){const _=h.index;_!==null&&p.version<_.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:d}}function _R(t,e,n){let i;function r(p){i=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function c(p,_){t.drawElements(i,_,s,p*o),n.update(_,i,1)}function u(p,_,x){x!==0&&(t.drawElementsInstanced(i,_,s,p*o,x),n.update(_,i,x))}function d(p,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,s,p,0,x);let g=0;for(let f=0;f<x;f++)g+=_[f];n.update(g,i,1)}function h(p,_,x,M){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let f=0;f<p.length;f++)u(p[f]/o,_[f],M[f]);else{g.multiDrawElementsInstancedWEBGL(i,_,0,s,p,0,M,0,x);let f=0;for(let v=0;v<x;v++)f+=_[v]*M[v];n.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function vR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function xR(t,e,n){const i=new WeakMap,r=new Kt;function s(o,a,c){const u=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let p=i.get(a);if(p===void 0||p.count!==h){let T=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",T)};var _=T;p!==void 0&&p.texture.dispose();const x=a.morphAttributes.position!==void 0,M=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let E=0;x===!0&&(E=1),M===!0&&(E=2),g===!0&&(E=3);let I=a.attributes.position.count*E,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const P=new Float32Array(I*L*4*h),D=new My(P,I,L,h);D.type=lr,D.needsUpdate=!0;const b=E*4;for(let U=0;U<h;U++){const Z=f[U],$=v[U],re=y[U],oe=I*L*4*U;for(let J=0;J<Z.count;J++){const ae=J*b;x===!0&&(r.fromBufferAttribute(Z,J),P[oe+ae+0]=r.x,P[oe+ae+1]=r.y,P[oe+ae+2]=r.z,P[oe+ae+3]=0),M===!0&&(r.fromBufferAttribute($,J),P[oe+ae+4]=r.x,P[oe+ae+5]=r.y,P[oe+ae+6]=r.z,P[oe+ae+7]=0),g===!0&&(r.fromBufferAttribute(re,J),P[oe+ae+8]=r.x,P[oe+ae+9]=r.y,P[oe+ae+10]=r.z,P[oe+ae+11]=re.itemSize===4?r.w:1)}}p={count:h,texture:D,size:new It(I,L)},i.set(a,p),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let g=0;g<u.length;g++)x+=u[g];const M=a.morphTargetsRelative?1:1-x;c.getUniforms().setValue(t,"morphTargetBaseInfluence",M),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:s}}function yR(t,e,n,i){let r=new WeakMap;function s(c){const u=i.render.frame,d=c.geometry,h=e.get(c,d);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function o(){r=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class Uy extends Gn{constructor(e,n,i,r,s,o,a,c,u,d=Uo){if(d!==Uo&&d!==Yo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Uo&&(i=ks),i===void 0&&d===Yo&&(i=$o),super(null,r,s,o,a,c,d,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Li,this.minFilter=c!==void 0?c:Li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Oy=new Gn,mv=new Uy(1,1),Fy=new My,ky=new sA,By=new Dy,gv=[],_v=[],vv=new Float32Array(16),xv=new Float32Array(9),yv=new Float32Array(4);function na(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=gv[r];if(s===void 0&&(s=new Float32Array(r),gv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function rn(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function sn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Fu(t,e){let n=_v[e];n===void 0&&(n=new Int32Array(e),_v[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function SR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ER(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;t.uniform2fv(this.addr,e),sn(n,e)}}function MR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(rn(n,e))return;t.uniform3fv(this.addr,e),sn(n,e)}}function wR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;t.uniform4fv(this.addr,e),sn(n,e)}}function TR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(rn(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,i))return;yv.set(i),t.uniformMatrix2fv(this.addr,!1,yv),sn(n,i)}}function AR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(rn(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,i))return;xv.set(i),t.uniformMatrix3fv(this.addr,!1,xv),sn(n,i)}}function CR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(rn(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),sn(n,e)}else{if(rn(n,i))return;vv.set(i),t.uniformMatrix4fv(this.addr,!1,vv),sn(n,i)}}function bR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function RR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;t.uniform2iv(this.addr,e),sn(n,e)}}function PR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;t.uniform3iv(this.addr,e),sn(n,e)}}function LR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;t.uniform4iv(this.addr,e),sn(n,e)}}function DR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function IR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(rn(n,e))return;t.uniform2uiv(this.addr,e),sn(n,e)}}function NR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(rn(n,e))return;t.uniform3uiv(this.addr,e),sn(n,e)}}function UR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(rn(n,e))return;t.uniform4uiv(this.addr,e),sn(n,e)}}function OR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(mv.compareFunction=yy,s=mv):s=Oy,n.setTexture2D(e||s,r)}function FR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||ky,r)}function kR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||By,r)}function BR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Fy,r)}function zR(t){switch(t){case 5126:return SR;case 35664:return ER;case 35665:return MR;case 35666:return wR;case 35674:return TR;case 35675:return AR;case 35676:return CR;case 5124:case 35670:return bR;case 35667:case 35671:return RR;case 35668:case 35672:return PR;case 35669:case 35673:return LR;case 5125:return DR;case 36294:return IR;case 36295:return NR;case 36296:return UR;case 35678:case 36198:case 36298:case 36306:case 35682:return OR;case 35679:case 36299:case 36307:return FR;case 35680:case 36300:case 36308:case 36293:return kR;case 36289:case 36303:case 36311:case 36292:return BR}}function HR(t,e){t.uniform1fv(this.addr,e)}function VR(t,e){const n=na(e,this.size,2);t.uniform2fv(this.addr,n)}function GR(t,e){const n=na(e,this.size,3);t.uniform3fv(this.addr,n)}function WR(t,e){const n=na(e,this.size,4);t.uniform4fv(this.addr,n)}function XR(t,e){const n=na(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function jR(t,e){const n=na(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $R(t,e){const n=na(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function YR(t,e){t.uniform1iv(this.addr,e)}function qR(t,e){t.uniform2iv(this.addr,e)}function KR(t,e){t.uniform3iv(this.addr,e)}function ZR(t,e){t.uniform4iv(this.addr,e)}function QR(t,e){t.uniform1uiv(this.addr,e)}function JR(t,e){t.uniform2uiv(this.addr,e)}function eP(t,e){t.uniform3uiv(this.addr,e)}function tP(t,e){t.uniform4uiv(this.addr,e)}function nP(t,e,n){const i=this.cache,r=e.length,s=Fu(n,r);rn(i,s)||(t.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Oy,s[o])}function iP(t,e,n){const i=this.cache,r=e.length,s=Fu(n,r);rn(i,s)||(t.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||ky,s[o])}function rP(t,e,n){const i=this.cache,r=e.length,s=Fu(n,r);rn(i,s)||(t.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||By,s[o])}function sP(t,e,n){const i=this.cache,r=e.length,s=Fu(n,r);rn(i,s)||(t.uniform1iv(this.addr,s),sn(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Fy,s[o])}function oP(t){switch(t){case 5126:return HR;case 35664:return VR;case 35665:return GR;case 35666:return WR;case 35674:return XR;case 35675:return jR;case 35676:return $R;case 5124:case 35670:return YR;case 35667:case 35671:return qR;case 35668:case 35672:return KR;case 35669:case 35673:return ZR;case 5125:return QR;case 36294:return JR;case 36295:return eP;case 36296:return tP;case 35678:case 36198:case 36298:case 36306:case 35682:return nP;case 35679:case 36299:case 36307:return iP;case 35680:case 36300:case 36308:case 36293:return rP;case 36289:case 36303:case 36311:case 36292:return sP}}class aP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=zR(n.type)}}class lP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=oP(n.type)}}class cP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const fd=/(\w+)(\])?(\[|\.)?/g;function Sv(t,e){t.seq.push(e),t.map[e.id]=e}function uP(t,e,n){const i=t.name,r=i.length;for(fd.lastIndex=0;;){const s=fd.exec(i),o=fd.lastIndex;let a=s[1];const c=s[2]==="]",u=s[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===r){Sv(n,u===void 0?new aP(a,t,e):new lP(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new cP(a),Sv(n,h)),n=h}}}class Hc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);uP(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Ev(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const fP=37297;let dP=0;function hP(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Mv=new Je;function pP(t){gt._getMatrix(Mv,gt.workingColorSpace,t);const e=`mat3( ${Mv.elements.map(n=>n.toFixed(4))} )`;switch(gt.getTransfer(t)){case Nu:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function wv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+hP(t.getShaderSource(e),o)}else return r}function mP(t,e){const n=pP(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function gP(t,e){let n;switch(e){case L1:n="Linear";break;case D1:n="Reinhard";break;case I1:n="Cineon";break;case N1:n="ACESFilmic";break;case O1:n="AgX";break;case F1:n="Neutral";break;case U1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const vc=new j;function _P(){gt.getLuminanceCoefficients(vc);const t=vc.x.toFixed(4),e=vc.y.toFixed(4),n=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vP(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function xP(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function yP(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ca(t){return t!==""}function Tv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Av(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(t){return t.replace(SP,MP)}const EP=new Map;function MP(t,e){let n=nt[e];if(n===void 0){const i=EP.get(e);if(i!==void 0)n=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Kh(n)}const wP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cv(t){return t.replace(wP,TP)}function TP(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function AP(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ay?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===u1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===nr&&(e="SHADOWMAP_TYPE_VSM"),e}function CP(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xo:case jo:e="ENVMAP_TYPE_CUBE";break;case Iu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bP(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case jo:e="ENVMAP_MODE_REFRACTION";break}return e}function RP(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ly:e="ENVMAP_BLENDING_MULTIPLY";break;case R1:e="ENVMAP_BLENDING_MIX";break;case P1:e="ENVMAP_BLENDING_ADD";break}return e}function PP(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function LP(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const c=AP(n),u=CP(n),d=bP(n),h=RP(n),p=PP(n),_=vP(n),x=xP(s),M=r.createProgram();let g,f,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ca).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Ca).join(`
`),f.length>0&&(f+=`
`)):(g=[bv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),f=[bv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qr?"#define TONE_MAPPING":"",n.toneMapping!==qr?nt.tonemapping_pars_fragment:"",n.toneMapping!==qr?gP("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,mP("linearToOutputTexel",n.outputColorSpace),_P(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ca).join(`
`)),o=Kh(o),o=Tv(o,n),o=Av(o,n),a=Kh(a),a=Tv(a,n),a=Av(a,n),o=Cv(o),a=Cv(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===H_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===H_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=v+g+o,E=v+f+a,I=Ev(r,r.VERTEX_SHADER,y),L=Ev(r,r.FRAGMENT_SHADER,E);r.attachShader(M,I),r.attachShader(M,L),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function P(U){if(t.debug.checkShaderErrors){const Z=r.getProgramInfoLog(M).trim(),$=r.getShaderInfoLog(I).trim(),re=r.getShaderInfoLog(L).trim();let oe=!0,J=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(oe=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,I,L);else{const ae=wv(r,I,"vertex"),O=wv(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Z+`
`+ae+`
`+O)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):($===""||re==="")&&(J=!1);J&&(U.diagnostics={runnable:oe,programLog:Z,vertexShader:{log:$,prefix:g},fragmentShader:{log:re,prefix:f}})}r.deleteShader(I),r.deleteShader(L),D=new Hc(r,M),b=yP(r,M)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(M,fP)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dP++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=I,this.fragmentShader=L,this}let DP=0;class IP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new NP(e),n.set(e,i)),i}}class NP{constructor(e){this.id=DP++,this.code=e,this.usedTimes=0}}function UP(t,e,n,i,r,s,o){const a=new Ty,c=new IP,u=new Set,d=[],h=r.logarithmicDepthBuffer,p=r.vertexTextures;let _=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return u.add(b),b===0?"uv":`uv${b}`}function g(b,T,U,Z,$){const re=Z.fog,oe=$.geometry,J=b.isMeshStandardMaterial?Z.environment:null,ae=(b.isMeshStandardMaterial?n:e).get(b.envMap||J),O=ae&&ae.mapping===Iu?ae.image.height:null,Q=x[b.type];b.precision!==null&&(_=r.getMaxPrecision(b.precision),_!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const N=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,ge=N!==void 0?N.length:0;let Oe=0;oe.morphAttributes.position!==void 0&&(Oe=1),oe.morphAttributes.normal!==void 0&&(Oe=2),oe.morphAttributes.color!==void 0&&(Oe=3);let at,q,ce,ve;if(Q){const ft=ki[Q];at=ft.vertexShader,q=ft.fragmentShader}else at=b.vertexShader,q=b.fragmentShader,c.update(b),ce=c.getVertexShaderID(b),ve=c.getFragmentShaderID(b);const me=t.getRenderTarget(),le=t.state.buffers.depth.getReversed(),Ge=$.isInstancedMesh===!0,et=$.isBatchedMesh===!0,Ot=!!b.map,ut=!!b.matcap,Rt=!!ae,V=!!b.aoMap,on=!!b.lightMap,Ze=!!b.bumpMap,lt=!!b.normalMap,Be=!!b.displacementMap,Pt=!!b.emissiveMap,ke=!!b.metalnessMap,R=!!b.roughnessMap,w=b.anisotropy>0,G=b.clearcoat>0,te=b.dispersion>0,se=b.iridescence>0,ee=b.sheen>0,Ie=b.transmission>0,_e=w&&!!b.anisotropyMap,we=G&&!!b.clearcoatMap,it=G&&!!b.clearcoatNormalMap,fe=G&&!!b.clearcoatRoughnessMap,Ce=se&&!!b.iridescenceMap,ze=se&&!!b.iridescenceThicknessMap,We=ee&&!!b.sheenColorMap,Pe=ee&&!!b.sheenRoughnessMap,ct=!!b.specularMap,Ke=!!b.specularColorMap,wt=!!b.specularIntensityMap,F=Ie&&!!b.transmissionMap,xe=Ie&&!!b.thicknessMap,K=!!b.gradientMap,ne=!!b.alphaMap,Te=b.alphaTest>0,Ee=!!b.alphaHash,qe=!!b.extensions;let Bt=qr;b.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Bt=t.toneMapping);const Ht={shaderID:Q,shaderType:b.type,shaderName:b.name,vertexShader:at,fragmentShader:q,defines:b.defines,customVertexShaderID:ce,customFragmentShaderID:ve,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:et,batchingColor:et&&$._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&$.instanceColor!==null,instancingMorph:Ge&&$.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:me===null?t.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:ea,alphaToCoverage:!!b.alphaToCoverage,map:Ot,matcap:ut,envMap:Rt,envMapMode:Rt&&ae.mapping,envMapCubeUVHeight:O,aoMap:V,lightMap:on,bumpMap:Ze,normalMap:lt,displacementMap:p&&Be,emissiveMap:Pt,normalMapObjectSpace:lt&&b.normalMapType===V1,normalMapTangentSpace:lt&&b.normalMapType===H1,metalnessMap:ke,roughnessMap:R,anisotropy:w,anisotropyMap:_e,clearcoat:G,clearcoatMap:we,clearcoatNormalMap:it,clearcoatRoughnessMap:fe,dispersion:te,iridescence:se,iridescenceMap:Ce,iridescenceThicknessMap:ze,sheen:ee,sheenColorMap:We,sheenRoughnessMap:Pe,specularMap:ct,specularColorMap:Ke,specularIntensityMap:wt,transmission:Ie,transmissionMap:F,thicknessMap:xe,gradientMap:K,opaque:b.transparent===!1&&b.blending===No&&b.alphaToCoverage===!1,alphaMap:ne,alphaTest:Te,alphaHash:Ee,combine:b.combine,mapUv:Ot&&M(b.map.channel),aoMapUv:V&&M(b.aoMap.channel),lightMapUv:on&&M(b.lightMap.channel),bumpMapUv:Ze&&M(b.bumpMap.channel),normalMapUv:lt&&M(b.normalMap.channel),displacementMapUv:Be&&M(b.displacementMap.channel),emissiveMapUv:Pt&&M(b.emissiveMap.channel),metalnessMapUv:ke&&M(b.metalnessMap.channel),roughnessMapUv:R&&M(b.roughnessMap.channel),anisotropyMapUv:_e&&M(b.anisotropyMap.channel),clearcoatMapUv:we&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:it&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:We&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&M(b.sheenRoughnessMap.channel),specularMapUv:ct&&M(b.specularMap.channel),specularColorMapUv:Ke&&M(b.specularColorMap.channel),specularIntensityMapUv:wt&&M(b.specularIntensityMap.channel),transmissionMapUv:F&&M(b.transmissionMap.channel),thicknessMapUv:xe&&M(b.thicknessMap.channel),alphaMapUv:ne&&M(b.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(lt||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!oe.attributes.uv&&(Ot||ne),fog:!!re,useFog:b.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:le,skinning:$.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:ge,morphTextureStride:Oe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:Bt,decodeVideoTexture:Ot&&b.map.isVideoTexture===!0&&gt.getTransfer(b.map.colorSpace)===bt,decodeVideoTextureEmissive:Pt&&b.emissiveMap.isVideoTexture===!0&&gt.getTransfer(b.emissiveMap.colorSpace)===bt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===sr,flipSided:b.side===Vn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&b.extensions.multiDraw===!0||et)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ht.vertexUv1s=u.has(1),Ht.vertexUv2s=u.has(2),Ht.vertexUv3s=u.has(3),u.clear(),Ht}function f(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const U in b.defines)T.push(U),T.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(v(T,b),y(T,b),T.push(t.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function v(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function y(b,T){a.disableAll(),T.supportsVertexTextures&&a.enable(0),T.instancing&&a.enable(1),T.instancingColor&&a.enable(2),T.instancingMorph&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),T.dispersion&&a.enable(20),T.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reverseDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),b.push(a.mask)}function E(b){const T=x[b.type];let U;if(T){const Z=ki[T];U=_A.clone(Z.uniforms)}else U=b.uniforms;return U}function I(b,T){let U;for(let Z=0,$=d.length;Z<$;Z++){const re=d[Z];if(re.cacheKey===T){U=re,++U.usedTimes;break}}return U===void 0&&(U=new LP(t,T,b,s),d.push(U)),U}function L(b){if(--b.usedTimes===0){const T=d.indexOf(b);d[T]=d[d.length-1],d.pop(),b.destroy()}}function P(b){c.remove(b)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:f,getUniforms:E,acquireProgram:I,releaseProgram:L,releaseShaderCache:P,programs:d,dispose:D}}function OP(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,c){t.get(o)[a]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function FP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Rv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Pv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,p,_,x,M,g){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:p,material:_,groupOrder:x,renderOrder:h.renderOrder,z:M,group:g},t[e]=f):(f.id=h.id,f.object=h,f.geometry=p,f.material=_,f.groupOrder=x,f.renderOrder=h.renderOrder,f.z=M,f.group=g),e++,f}function a(h,p,_,x,M,g){const f=o(h,p,_,x,M,g);_.transmission>0?i.push(f):_.transparent===!0?r.push(f):n.push(f)}function c(h,p,_,x,M,g){const f=o(h,p,_,x,M,g);_.transmission>0?i.unshift(f):_.transparent===!0?r.unshift(f):n.unshift(f)}function u(h,p){n.length>1&&n.sort(h||FP),i.length>1&&i.sort(p||Rv),r.length>1&&r.sort(p||Rv)}function d(){for(let h=e,p=t.length;h<p;h++){const _=t[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:d,sort:u}}function kP(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Pv,t.set(i,[o])):r>=s.length?(o=new Pv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function BP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Et};break;case"SpotLight":n={position:new j,direction:new j,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":n={color:new Et,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function zP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let HP=0;function VP(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function GP(t){const e=new BP,n=zP(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new j);const r=new j,s=new Zt,o=new Zt;function a(u){let d=0,h=0,p=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let _=0,x=0,M=0,g=0,f=0,v=0,y=0,E=0,I=0,L=0,P=0;u.sort(VP);for(let b=0,T=u.length;b<T;b++){const U=u[b],Z=U.color,$=U.intensity,re=U.distance,oe=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=Z.r*$,h+=Z.g*$,p+=Z.b*$;else if(U.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(U.sh.coefficients[J],$);P++}else if(U.isDirectionalLight){const J=e.get(U);if(J.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ae=U.shadow,O=n.get(U);O.shadowIntensity=ae.intensity,O.shadowBias=ae.bias,O.shadowNormalBias=ae.normalBias,O.shadowRadius=ae.radius,O.shadowMapSize=ae.mapSize,i.directionalShadow[_]=O,i.directionalShadowMap[_]=oe,i.directionalShadowMatrix[_]=U.shadow.matrix,v++}i.directional[_]=J,_++}else if(U.isSpotLight){const J=e.get(U);J.position.setFromMatrixPosition(U.matrixWorld),J.color.copy(Z).multiplyScalar($),J.distance=re,J.coneCos=Math.cos(U.angle),J.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),J.decay=U.decay,i.spot[M]=J;const ae=U.shadow;if(U.map&&(i.spotLightMap[I]=U.map,I++,ae.updateMatrices(U),U.castShadow&&L++),i.spotLightMatrix[M]=ae.matrix,U.castShadow){const O=n.get(U);O.shadowIntensity=ae.intensity,O.shadowBias=ae.bias,O.shadowNormalBias=ae.normalBias,O.shadowRadius=ae.radius,O.shadowMapSize=ae.mapSize,i.spotShadow[M]=O,i.spotShadowMap[M]=oe,E++}M++}else if(U.isRectAreaLight){const J=e.get(U);J.color.copy(Z).multiplyScalar($),J.halfWidth.set(U.width*.5,0,0),J.halfHeight.set(0,U.height*.5,0),i.rectArea[g]=J,g++}else if(U.isPointLight){const J=e.get(U);if(J.color.copy(U.color).multiplyScalar(U.intensity),J.distance=U.distance,J.decay=U.decay,U.castShadow){const ae=U.shadow,O=n.get(U);O.shadowIntensity=ae.intensity,O.shadowBias=ae.bias,O.shadowNormalBias=ae.normalBias,O.shadowRadius=ae.radius,O.shadowMapSize=ae.mapSize,O.shadowCameraNear=ae.camera.near,O.shadowCameraFar=ae.camera.far,i.pointShadow[x]=O,i.pointShadowMap[x]=oe,i.pointShadowMatrix[x]=U.shadow.matrix,y++}i.point[x]=J,x++}else if(U.isHemisphereLight){const J=e.get(U);J.skyColor.copy(U.color).multiplyScalar($),J.groundColor.copy(U.groundColor).multiplyScalar($),i.hemi[f]=J,f++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=p;const D=i.hash;(D.directionalLength!==_||D.pointLength!==x||D.spotLength!==M||D.rectAreaLength!==g||D.hemiLength!==f||D.numDirectionalShadows!==v||D.numPointShadows!==y||D.numSpotShadows!==E||D.numSpotMaps!==I||D.numLightProbes!==P)&&(i.directional.length=_,i.spot.length=M,i.rectArea.length=g,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=E+I-L,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,D.directionalLength=_,D.pointLength=x,D.spotLength=M,D.rectAreaLength=g,D.hemiLength=f,D.numDirectionalShadows=v,D.numPointShadows=y,D.numSpotShadows=E,D.numSpotMaps=I,D.numLightProbes=P,i.version=HP++)}function c(u,d){let h=0,p=0,_=0,x=0,M=0;const g=d.matrixWorldInverse;for(let f=0,v=u.length;f<v;f++){const y=u[f];if(y.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),h++}else if(y.isSpotLight){const E=i.spot[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),E.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(g),_++}else if(y.isRectAreaLight){const E=i.rectArea[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){const E=i.point[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(g),p++}else if(y.isHemisphereLight){const E=i.hemi[M];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(g),M++}}}return{setup:a,setupView:c,state:i}}function Lv(t){const e=new GP(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function c(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function WP(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Lv(t),e.set(r,[a])):s>=o.length?(a=new Lv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class XP extends ml{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=B1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jP extends ml{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $P=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YP=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qP(t,e,n){let i=new Iy;const r=new It,s=new It,o=new Kt,a=new XP({depthPacking:z1}),c=new jP,u={},d=n.maxTextureSize,h={[Qr]:Vn,[Vn]:Qr,[sr]:sr},p=new Jr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:$P,fragmentShader:YP}),_=p.clone();_.defines.HORIZONTAL_PASS=1;const x=new yr;x.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ur(x,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ay;let f=this.type;this.render=function(L,P,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;const b=t.getRenderTarget(),T=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),Z=t.state;Z.setBlending(Yr),Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const $=f!==nr&&this.type===nr,re=f===nr&&this.type!==nr;for(let oe=0,J=L.length;oe<J;oe++){const ae=L[oe],O=ae.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const Q=O.getFrameExtents();if(r.multiply(Q),s.copy(O.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Q.x),r.x=s.x*Q.x,O.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Q.y),r.y=s.y*Q.y,O.mapSize.y=s.y)),O.map===null||$===!0||re===!0){const ge=this.type!==nr?{minFilter:Li,magFilter:Li}:{};O.map!==null&&O.map.dispose(),O.map=new Bs(r.x,r.y,ge),O.map.texture.name=ae.name+".shadowMap",O.camera.updateProjectionMatrix()}t.setRenderTarget(O.map),t.clear();const N=O.getViewportCount();for(let ge=0;ge<N;ge++){const Oe=O.getViewport(ge);o.set(s.x*Oe.x,s.y*Oe.y,s.x*Oe.z,s.y*Oe.w),Z.viewport(o),O.updateMatrices(ae,ge),i=O.getFrustum(),E(P,D,O.camera,ae,this.type)}O.isPointLightShadow!==!0&&this.type===nr&&v(O,D),O.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(b,T,U)};function v(L,P){const D=e.update(M);p.defines.VSM_SAMPLES!==L.blurSamples&&(p.defines.VSM_SAMPLES=L.blurSamples,_.defines.VSM_SAMPLES=L.blurSamples,p.needsUpdate=!0,_.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Bs(r.x,r.y)),p.uniforms.shadow_pass.value=L.map.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,t.setRenderTarget(L.mapPass),t.clear(),t.renderBufferDirect(P,null,D,p,M,null),_.uniforms.shadow_pass.value=L.mapPass.texture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,t.setRenderTarget(L.map),t.clear(),t.renderBufferDirect(P,null,D,_,M,null)}function y(L,P,D,b){let T=null;const U=D.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(U!==void 0)T=U;else if(T=D.isPointLight===!0?c:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Z=T.uuid,$=P.uuid;let re=u[Z];re===void 0&&(re={},u[Z]=re);let oe=re[$];oe===void 0&&(oe=T.clone(),re[$]=oe,P.addEventListener("dispose",I)),T=oe}if(T.visible=P.visible,T.wireframe=P.wireframe,b===nr?T.side=P.shadowSide!==null?P.shadowSide:P.side:T.side=P.shadowSide!==null?P.shadowSide:h[P.side],T.alphaMap=P.alphaMap,T.alphaTest=P.alphaTest,T.map=P.map,T.clipShadows=P.clipShadows,T.clippingPlanes=P.clippingPlanes,T.clipIntersection=P.clipIntersection,T.displacementMap=P.displacementMap,T.displacementScale=P.displacementScale,T.displacementBias=P.displacementBias,T.wireframeLinewidth=P.wireframeLinewidth,T.linewidth=P.linewidth,D.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Z=t.properties.get(T);Z.light=D}return T}function E(L,P,D,b,T){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&T===nr)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,L.matrixWorld);const $=e.update(L),re=L.material;if(Array.isArray(re)){const oe=$.groups;for(let J=0,ae=oe.length;J<ae;J++){const O=oe[J],Q=re[O.materialIndex];if(Q&&Q.visible){const N=y(L,Q,b,T);L.onBeforeShadow(t,L,P,D,$,N,O),t.renderBufferDirect(D,null,$,N,L,O),L.onAfterShadow(t,L,P,D,$,N,O)}}}else if(re.visible){const oe=y(L,re,b,T);L.onBeforeShadow(t,L,P,D,$,oe,null),t.renderBufferDirect(D,null,$,oe,L,null),L.onAfterShadow(t,L,P,D,$,oe,null)}}const Z=L.children;for(let $=0,re=Z.length;$<re;$++)E(Z[$],P,D,b,T)}function I(L){L.target.removeEventListener("dispose",I);for(const D in u){const b=u[D],T=L.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}const KP={[dh]:hh,[ph]:_h,[mh]:vh,[Wo]:gh,[hh]:dh,[_h]:ph,[vh]:mh,[gh]:Wo};function ZP(t,e){function n(){let F=!1;const xe=new Kt;let K=null;const ne=new Kt(0,0,0,0);return{setMask:function(Te){K!==Te&&!F&&(t.colorMask(Te,Te,Te,Te),K=Te)},setLocked:function(Te){F=Te},setClear:function(Te,Ee,qe,Bt,Ht){Ht===!0&&(Te*=Bt,Ee*=Bt,qe*=Bt),xe.set(Te,Ee,qe,Bt),ne.equals(xe)===!1&&(t.clearColor(Te,Ee,qe,Bt),ne.copy(xe))},reset:function(){F=!1,K=null,ne.set(-1,0,0,0)}}}function i(){let F=!1,xe=!1,K=null,ne=null,Te=null;return{setReversed:function(Ee){if(xe!==Ee){const qe=e.get("EXT_clip_control");xe?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);const Bt=Te;Te=null,this.setClear(Bt)}xe=Ee},getReversed:function(){return xe},setTest:function(Ee){Ee?me(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(Ee){K!==Ee&&!F&&(t.depthMask(Ee),K=Ee)},setFunc:function(Ee){if(xe&&(Ee=KP[Ee]),ne!==Ee){switch(Ee){case dh:t.depthFunc(t.NEVER);break;case hh:t.depthFunc(t.ALWAYS);break;case ph:t.depthFunc(t.LESS);break;case Wo:t.depthFunc(t.LEQUAL);break;case mh:t.depthFunc(t.EQUAL);break;case gh:t.depthFunc(t.GEQUAL);break;case _h:t.depthFunc(t.GREATER);break;case vh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ne=Ee}},setLocked:function(Ee){F=Ee},setClear:function(Ee){Te!==Ee&&(xe&&(Ee=1-Ee),t.clearDepth(Ee),Te=Ee)},reset:function(){F=!1,K=null,ne=null,Te=null,xe=!1}}}function r(){let F=!1,xe=null,K=null,ne=null,Te=null,Ee=null,qe=null,Bt=null,Ht=null;return{setTest:function(ft){F||(ft?me(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(ft){xe!==ft&&!F&&(t.stencilMask(ft),xe=ft)},setFunc:function(ft,Xn,_i){(K!==ft||ne!==Xn||Te!==_i)&&(t.stencilFunc(ft,Xn,_i),K=ft,ne=Xn,Te=_i)},setOp:function(ft,Xn,_i){(Ee!==ft||qe!==Xn||Bt!==_i)&&(t.stencilOp(ft,Xn,_i),Ee=ft,qe=Xn,Bt=_i)},setLocked:function(ft){F=ft},setClear:function(ft){Ht!==ft&&(t.clearStencil(ft),Ht=ft)},reset:function(){F=!1,xe=null,K=null,ne=null,Te=null,Ee=null,qe=null,Bt=null,Ht=null}}}const s=new n,o=new i,a=new r,c=new WeakMap,u=new WeakMap;let d={},h={},p=new WeakMap,_=[],x=null,M=!1,g=null,f=null,v=null,y=null,E=null,I=null,L=null,P=new Et(0,0,0),D=0,b=!1,T=null,U=null,Z=null,$=null,re=null;const oe=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ae=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(O)[1]),J=ae>=1):O.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),J=ae>=2);let Q=null,N={};const ge=t.getParameter(t.SCISSOR_BOX),Oe=t.getParameter(t.VIEWPORT),at=new Kt().fromArray(ge),q=new Kt().fromArray(Oe);function ce(F,xe,K,ne){const Te=new Uint8Array(4),Ee=t.createTexture();t.bindTexture(F,Ee),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<K;qe++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,ne,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(xe+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return Ee}const ve={};ve[t.TEXTURE_2D]=ce(t.TEXTURE_2D,t.TEXTURE_2D,1),ve[t.TEXTURE_CUBE_MAP]=ce(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[t.TEXTURE_2D_ARRAY]=ce(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ve[t.TEXTURE_3D]=ce(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),me(t.DEPTH_TEST),o.setFunc(Wo),Ze(!1),lt(U_),me(t.CULL_FACE),V(Yr);function me(F){d[F]!==!0&&(t.enable(F),d[F]=!0)}function le(F){d[F]!==!1&&(t.disable(F),d[F]=!1)}function Ge(F,xe){return h[F]!==xe?(t.bindFramebuffer(F,xe),h[F]=xe,F===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=xe),F===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function et(F,xe){let K=_,ne=!1;if(F){K=p.get(xe),K===void 0&&(K=[],p.set(xe,K));const Te=F.textures;if(K.length!==Te.length||K[0]!==t.COLOR_ATTACHMENT0){for(let Ee=0,qe=Te.length;Ee<qe;Ee++)K[Ee]=t.COLOR_ATTACHMENT0+Ee;K.length=Te.length,ne=!0}}else K[0]!==t.BACK&&(K[0]=t.BACK,ne=!0);ne&&t.drawBuffers(K)}function Ot(F){return x!==F?(t.useProgram(F),x=F,!0):!1}const ut={[Ms]:t.FUNC_ADD,[d1]:t.FUNC_SUBTRACT,[h1]:t.FUNC_REVERSE_SUBTRACT};ut[p1]=t.MIN,ut[m1]=t.MAX;const Rt={[g1]:t.ZERO,[_1]:t.ONE,[v1]:t.SRC_COLOR,[uh]:t.SRC_ALPHA,[w1]:t.SRC_ALPHA_SATURATE,[E1]:t.DST_COLOR,[y1]:t.DST_ALPHA,[x1]:t.ONE_MINUS_SRC_COLOR,[fh]:t.ONE_MINUS_SRC_ALPHA,[M1]:t.ONE_MINUS_DST_COLOR,[S1]:t.ONE_MINUS_DST_ALPHA,[T1]:t.CONSTANT_COLOR,[A1]:t.ONE_MINUS_CONSTANT_COLOR,[C1]:t.CONSTANT_ALPHA,[b1]:t.ONE_MINUS_CONSTANT_ALPHA};function V(F,xe,K,ne,Te,Ee,qe,Bt,Ht,ft){if(F===Yr){M===!0&&(le(t.BLEND),M=!1);return}if(M===!1&&(me(t.BLEND),M=!0),F!==f1){if(F!==g||ft!==b){if((f!==Ms||E!==Ms)&&(t.blendEquation(t.FUNC_ADD),f=Ms,E=Ms),ft)switch(F){case No:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case O_:t.blendFunc(t.ONE,t.ONE);break;case F_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case k_:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case No:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case O_:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case F_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case k_:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}v=null,y=null,I=null,L=null,P.set(0,0,0),D=0,g=F,b=ft}return}Te=Te||xe,Ee=Ee||K,qe=qe||ne,(xe!==f||Te!==E)&&(t.blendEquationSeparate(ut[xe],ut[Te]),f=xe,E=Te),(K!==v||ne!==y||Ee!==I||qe!==L)&&(t.blendFuncSeparate(Rt[K],Rt[ne],Rt[Ee],Rt[qe]),v=K,y=ne,I=Ee,L=qe),(Bt.equals(P)===!1||Ht!==D)&&(t.blendColor(Bt.r,Bt.g,Bt.b,Ht),P.copy(Bt),D=Ht),g=F,b=!1}function on(F,xe){F.side===sr?le(t.CULL_FACE):me(t.CULL_FACE);let K=F.side===Vn;xe&&(K=!K),Ze(K),F.blending===No&&F.transparent===!1?V(Yr):V(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);const ne=F.stencilWrite;a.setTest(ne),ne&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Pt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?me(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(F){T!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),T=F)}function lt(F){F!==l1?(me(t.CULL_FACE),F!==U&&(F===U_?t.cullFace(t.BACK):F===c1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),U=F}function Be(F){F!==Z&&(J&&t.lineWidth(F),Z=F)}function Pt(F,xe,K){F?(me(t.POLYGON_OFFSET_FILL),($!==xe||re!==K)&&(t.polygonOffset(xe,K),$=xe,re=K)):le(t.POLYGON_OFFSET_FILL)}function ke(F){F?me(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function R(F){F===void 0&&(F=t.TEXTURE0+oe-1),Q!==F&&(t.activeTexture(F),Q=F)}function w(F,xe,K){K===void 0&&(Q===null?K=t.TEXTURE0+oe-1:K=Q);let ne=N[K];ne===void 0&&(ne={type:void 0,texture:void 0},N[K]=ne),(ne.type!==F||ne.texture!==xe)&&(Q!==K&&(t.activeTexture(K),Q=K),t.bindTexture(F,xe||ve[F]),ne.type=F,ne.texture=xe)}function G(){const F=N[Q];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function se(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function We(F){at.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),at.copy(F))}function Pe(F){q.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),q.copy(F))}function ct(F,xe){let K=u.get(xe);K===void 0&&(K=new WeakMap,u.set(xe,K));let ne=K.get(F);ne===void 0&&(ne=t.getUniformBlockIndex(xe,F.name),K.set(F,ne))}function Ke(F,xe){const ne=u.get(xe).get(F);c.get(xe)!==ne&&(t.uniformBlockBinding(xe,ne,F.__bindingPointIndex),c.set(xe,ne))}function wt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},Q=null,N={},h={},p=new WeakMap,_=[],x=null,M=!1,g=null,f=null,v=null,y=null,E=null,I=null,L=null,P=new Et(0,0,0),D=0,b=!1,T=null,U=null,Z=null,$=null,re=null,at.set(0,0,t.canvas.width,t.canvas.height),q.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:me,disable:le,bindFramebuffer:Ge,drawBuffers:et,useProgram:Ot,setBlending:V,setMaterial:on,setFlipSided:Ze,setCullFace:lt,setLineWidth:Be,setPolygonOffset:Pt,setScissorTest:ke,activeTexture:R,bindTexture:w,unbindTexture:G,compressedTexImage2D:te,compressedTexImage3D:se,texImage2D:Ce,texImage3D:ze,updateUBOMapping:ct,uniformBlockBinding:Ke,texStorage2D:it,texStorage3D:fe,texSubImage2D:ee,texSubImage3D:Ie,compressedTexSubImage2D:_e,compressedTexSubImage3D:we,scissor:We,viewport:Pe,reset:wt}}function Dv(t,e,n,i){const r=QP(i);switch(n){case hy:return t*e;case my:return t*e;case gy:return t*e*2;case _y:return t*e/r.components*r.byteLength;case Qp:return t*e/r.components*r.byteLength;case vy:return t*e*2/r.components*r.byteLength;case Jp:return t*e*2/r.components*r.byteLength;case py:return t*e*3/r.components*r.byteLength;case bi:return t*e*4/r.components*r.byteLength;case em:return t*e*4/r.components*r.byteLength;case Oc:case Fc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case kc:case Bc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wh:case Ah:return Math.max(t,16)*Math.max(e,8)/4;case Mh:case Th:return Math.max(t,8)*Math.max(e,8)/2;case Ch:case bh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Rh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case kh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case zh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Hh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Gh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case zc:case Wh:case Xh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case xy:case jh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case $h:case Yh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function QP(t){switch(t){case _r:case uy:return{byteLength:1,components:1};case nl:case fy:case fl:return{byteLength:2,components:1};case Kp:case Zp:return{byteLength:2,components:4};case ks:case qp:case lr:return{byteLength:4,components:1};case dy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function JP(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new It,d=new WeakMap;let h;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,w){return _?new OffscreenCanvas(R,w):mu("canvas")}function M(R,w,G){let te=1;const se=ke(R);if((se.width>G||se.height>G)&&(te=G/Math.max(se.width,se.height)),te<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ee=Math.floor(te*se.width),Ie=Math.floor(te*se.height);h===void 0&&(h=x(ee,Ie));const _e=w?x(ee,Ie):h;return _e.width=ee,_e.height=Ie,_e.getContext("2d").drawImage(R,0,0,ee,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ee+"x"+Ie+")."),_e}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function g(R){return R.generateMipmaps}function f(R){t.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(R,w,G,te,se=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ee=w;if(w===t.RED&&(G===t.FLOAT&&(ee=t.R32F),G===t.HALF_FLOAT&&(ee=t.R16F),G===t.UNSIGNED_BYTE&&(ee=t.R8)),w===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.R8UI),G===t.UNSIGNED_SHORT&&(ee=t.R16UI),G===t.UNSIGNED_INT&&(ee=t.R32UI),G===t.BYTE&&(ee=t.R8I),G===t.SHORT&&(ee=t.R16I),G===t.INT&&(ee=t.R32I)),w===t.RG&&(G===t.FLOAT&&(ee=t.RG32F),G===t.HALF_FLOAT&&(ee=t.RG16F),G===t.UNSIGNED_BYTE&&(ee=t.RG8)),w===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RG8UI),G===t.UNSIGNED_SHORT&&(ee=t.RG16UI),G===t.UNSIGNED_INT&&(ee=t.RG32UI),G===t.BYTE&&(ee=t.RG8I),G===t.SHORT&&(ee=t.RG16I),G===t.INT&&(ee=t.RG32I)),w===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),G===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),G===t.UNSIGNED_INT&&(ee=t.RGB32UI),G===t.BYTE&&(ee=t.RGB8I),G===t.SHORT&&(ee=t.RGB16I),G===t.INT&&(ee=t.RGB32I)),w===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),G===t.UNSIGNED_INT&&(ee=t.RGBA32UI),G===t.BYTE&&(ee=t.RGBA8I),G===t.SHORT&&(ee=t.RGBA16I),G===t.INT&&(ee=t.RGBA32I)),w===t.RGB&&G===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),w===t.RGBA){const Ie=se?Nu:gt.getTransfer(te);G===t.FLOAT&&(ee=t.RGBA32F),G===t.HALF_FLOAT&&(ee=t.RGBA16F),G===t.UNSIGNED_BYTE&&(ee=Ie===bt?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function E(R,w){let G;return R?w===null||w===ks||w===$o?G=t.DEPTH24_STENCIL8:w===lr?G=t.DEPTH32F_STENCIL8:w===nl&&(G=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ks||w===$o?G=t.DEPTH_COMPONENT24:w===lr?G=t.DEPTH_COMPONENT32F:w===nl&&(G=t.DEPTH_COMPONENT16),G}function I(R,w){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Li&&R.minFilter!==zi?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function L(R){const w=R.target;w.removeEventListener("dispose",L),D(w),w.isVideoTexture&&d.delete(w)}function P(R){const w=R.target;w.removeEventListener("dispose",P),T(w)}function D(R){const w=i.get(R);if(w.__webglInit===void 0)return;const G=R.source,te=p.get(G);if(te){const se=te[w.__cacheKey];se.usedTimes--,se.usedTimes===0&&b(R),Object.keys(te).length===0&&p.delete(G)}i.remove(R)}function b(R){const w=i.get(R);t.deleteTexture(w.__webglTexture);const G=R.source,te=p.get(G);delete te[w.__cacheKey],o.memory.textures--}function T(R){const w=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(w.__webglFramebuffer[te]))for(let se=0;se<w.__webglFramebuffer[te].length;se++)t.deleteFramebuffer(w.__webglFramebuffer[te][se]);else t.deleteFramebuffer(w.__webglFramebuffer[te]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[te])}else{if(Array.isArray(w.__webglFramebuffer))for(let te=0;te<w.__webglFramebuffer.length;te++)t.deleteFramebuffer(w.__webglFramebuffer[te]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let te=0;te<w.__webglColorRenderbuffer.length;te++)w.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[te]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const G=R.textures;for(let te=0,se=G.length;te<se;te++){const ee=i.get(G[te]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(G[te])}i.remove(R)}let U=0;function Z(){U=0}function $(){const R=U;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),U+=1,R}function re(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function oe(R,w){const G=i.get(R);if(R.isVideoTexture&&Be(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(G,R,w);return}}n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+w)}function J(R,w){const G=i.get(R);if(R.version>0&&G.__version!==R.version){q(G,R,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+w)}function ae(R,w){const G=i.get(R);if(R.version>0&&G.__version!==R.version){q(G,R,w);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+w)}function O(R,w){const G=i.get(R);if(R.version>0&&G.__version!==R.version){ce(G,R,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+w)}const Q={[Sh]:t.REPEAT,[bs]:t.CLAMP_TO_EDGE,[Eh]:t.MIRRORED_REPEAT},N={[Li]:t.NEAREST,[k1]:t.NEAREST_MIPMAP_NEAREST,[Ql]:t.NEAREST_MIPMAP_LINEAR,[zi]:t.LINEAR,[Ff]:t.LINEAR_MIPMAP_NEAREST,[Rs]:t.LINEAR_MIPMAP_LINEAR},ge={[G1]:t.NEVER,[q1]:t.ALWAYS,[W1]:t.LESS,[yy]:t.LEQUAL,[X1]:t.EQUAL,[Y1]:t.GEQUAL,[j1]:t.GREATER,[$1]:t.NOTEQUAL};function Oe(R,w){if(w.type===lr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===zi||w.magFilter===Ff||w.magFilter===Ql||w.magFilter===Rs||w.minFilter===zi||w.minFilter===Ff||w.minFilter===Ql||w.minFilter===Rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,Q[w.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,Q[w.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,Q[w.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,N[w.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,N[w.minFilter]),w.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,ge[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Li||w.minFilter!==Ql&&w.minFilter!==Rs||w.type===lr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function at(R,w){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",L));const te=w.source;let se=p.get(te);se===void 0&&(se={},p.set(te,se));const ee=re(w);if(ee!==R.__cacheKey){se[ee]===void 0&&(se[ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,G=!0),se[ee].usedTimes++;const Ie=se[R.__cacheKey];Ie!==void 0&&(se[R.__cacheKey].usedTimes--,Ie.usedTimes===0&&b(w)),R.__cacheKey=ee,R.__webglTexture=se[ee].texture}return G}function q(R,w,G){let te=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(te=t.TEXTURE_3D);const se=at(R,w),ee=w.source;n.bindTexture(te,R.__webglTexture,t.TEXTURE0+G);const Ie=i.get(ee);if(ee.version!==Ie.__version||se===!0){n.activeTexture(t.TEXTURE0+G);const _e=gt.getPrimaries(gt.workingColorSpace),we=w.colorSpace===Ur?null:gt.getPrimaries(w.colorSpace),it=w.colorSpace===Ur||_e===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let fe=M(w.image,!1,r.maxTextureSize);fe=Pt(w,fe);const Ce=s.convert(w.format,w.colorSpace),ze=s.convert(w.type);let We=y(w.internalFormat,Ce,ze,w.colorSpace,w.isVideoTexture);Oe(te,w);let Pe;const ct=w.mipmaps,Ke=w.isVideoTexture!==!0,wt=Ie.__version===void 0||se===!0,F=ee.dataReady,xe=I(w,fe);if(w.isDepthTexture)We=E(w.format===Yo,w.type),wt&&(Ke?n.texStorage2D(t.TEXTURE_2D,1,We,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,We,fe.width,fe.height,0,Ce,ze,null));else if(w.isDataTexture)if(ct.length>0){Ke&&wt&&n.texStorage2D(t.TEXTURE_2D,xe,We,ct[0].width,ct[0].height);for(let K=0,ne=ct.length;K<ne;K++)Pe=ct[K],Ke?F&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Pe.width,Pe.height,Ce,ze,Pe.data):n.texImage2D(t.TEXTURE_2D,K,We,Pe.width,Pe.height,0,Ce,ze,Pe.data);w.generateMipmaps=!1}else Ke?(wt&&n.texStorage2D(t.TEXTURE_2D,xe,We,fe.width,fe.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe.width,fe.height,Ce,ze,fe.data)):n.texImage2D(t.TEXTURE_2D,0,We,fe.width,fe.height,0,Ce,ze,fe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ke&&wt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,We,ct[0].width,ct[0].height,fe.depth);for(let K=0,ne=ct.length;K<ne;K++)if(Pe=ct[K],w.format!==bi)if(Ce!==null)if(Ke){if(F)if(w.layerUpdates.size>0){const Te=Dv(Pe.width,Pe.height,w.format,w.type);for(const Ee of w.layerUpdates){const qe=Pe.data.subarray(Ee*Te/Pe.data.BYTES_PER_ELEMENT,(Ee+1)*Te/Pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,Ee,Pe.width,Pe.height,1,Ce,qe)}w.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Pe.width,Pe.height,fe.depth,Ce,Pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,K,We,Pe.width,Pe.height,fe.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ke?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,K,0,0,0,Pe.width,Pe.height,fe.depth,Ce,ze,Pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,K,We,Pe.width,Pe.height,fe.depth,0,Ce,ze,Pe.data)}else{Ke&&wt&&n.texStorage2D(t.TEXTURE_2D,xe,We,ct[0].width,ct[0].height);for(let K=0,ne=ct.length;K<ne;K++)Pe=ct[K],w.format!==bi?Ce!==null?Ke?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,K,0,0,Pe.width,Pe.height,Ce,Pe.data):n.compressedTexImage2D(t.TEXTURE_2D,K,We,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?F&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Pe.width,Pe.height,Ce,ze,Pe.data):n.texImage2D(t.TEXTURE_2D,K,We,Pe.width,Pe.height,0,Ce,ze,Pe.data)}else if(w.isDataArrayTexture)if(Ke){if(wt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,We,fe.width,fe.height,fe.depth),F)if(w.layerUpdates.size>0){const K=Dv(fe.width,fe.height,w.format,w.type);for(const ne of w.layerUpdates){const Te=fe.data.subarray(ne*K/fe.data.BYTES_PER_ELEMENT,(ne+1)*K/fe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ne,fe.width,fe.height,1,Ce,ze,Te)}w.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Ce,ze,fe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,We,fe.width,fe.height,fe.depth,0,Ce,ze,fe.data);else if(w.isData3DTexture)Ke?(wt&&n.texStorage3D(t.TEXTURE_3D,xe,We,fe.width,fe.height,fe.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Ce,ze,fe.data)):n.texImage3D(t.TEXTURE_3D,0,We,fe.width,fe.height,fe.depth,0,Ce,ze,fe.data);else if(w.isFramebufferTexture){if(wt)if(Ke)n.texStorage2D(t.TEXTURE_2D,xe,We,fe.width,fe.height);else{let K=fe.width,ne=fe.height;for(let Te=0;Te<xe;Te++)n.texImage2D(t.TEXTURE_2D,Te,We,K,ne,0,Ce,ze,null),K>>=1,ne>>=1}}else if(ct.length>0){if(Ke&&wt){const K=ke(ct[0]);n.texStorage2D(t.TEXTURE_2D,xe,We,K.width,K.height)}for(let K=0,ne=ct.length;K<ne;K++)Pe=ct[K],Ke?F&&n.texSubImage2D(t.TEXTURE_2D,K,0,0,Ce,ze,Pe):n.texImage2D(t.TEXTURE_2D,K,We,Ce,ze,Pe);w.generateMipmaps=!1}else if(Ke){if(wt){const K=ke(fe);n.texStorage2D(t.TEXTURE_2D,xe,We,K.width,K.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ce,ze,fe)}else n.texImage2D(t.TEXTURE_2D,0,We,Ce,ze,fe);g(w)&&f(te),Ie.__version=ee.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ce(R,w,G){if(w.image.length!==6)return;const te=at(R,w),se=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+G);const ee=i.get(se);if(se.version!==ee.__version||te===!0){n.activeTexture(t.TEXTURE0+G);const Ie=gt.getPrimaries(gt.workingColorSpace),_e=w.colorSpace===Ur?null:gt.getPrimaries(w.colorSpace),we=w.colorSpace===Ur||Ie===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const it=w.isCompressedTexture||w.image[0].isCompressedTexture,fe=w.image[0]&&w.image[0].isDataTexture,Ce=[];for(let ne=0;ne<6;ne++)!it&&!fe?Ce[ne]=M(w.image[ne],!0,r.maxCubemapSize):Ce[ne]=fe?w.image[ne].image:w.image[ne],Ce[ne]=Pt(w,Ce[ne]);const ze=Ce[0],We=s.convert(w.format,w.colorSpace),Pe=s.convert(w.type),ct=y(w.internalFormat,We,Pe,w.colorSpace),Ke=w.isVideoTexture!==!0,wt=ee.__version===void 0||te===!0,F=se.dataReady;let xe=I(w,ze);Oe(t.TEXTURE_CUBE_MAP,w);let K;if(it){Ke&&wt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,ct,ze.width,ze.height);for(let ne=0;ne<6;ne++){K=Ce[ne].mipmaps;for(let Te=0;Te<K.length;Te++){const Ee=K[Te];w.format!==bi?We!==null?Ke?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,0,0,Ee.width,Ee.height,We,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,ct,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,0,0,Ee.width,Ee.height,We,Pe,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,ct,Ee.width,Ee.height,0,We,Pe,Ee.data)}}}else{if(K=w.mipmaps,Ke&&wt){K.length>0&&xe++;const ne=ke(Ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,ct,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(fe){Ke?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce[ne].width,Ce[ne].height,We,Pe,Ce[ne].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ct,Ce[ne].width,Ce[ne].height,0,We,Pe,Ce[ne].data);for(let Te=0;Te<K.length;Te++){const qe=K[Te].image[ne].image;Ke?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,0,0,qe.width,qe.height,We,Pe,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,ct,qe.width,qe.height,0,We,Pe,qe.data)}}else{Ke?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,We,Pe,Ce[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ct,We,Pe,Ce[ne]);for(let Te=0;Te<K.length;Te++){const Ee=K[Te];Ke?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,0,0,We,Pe,Ee.image[ne]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,ct,We,Pe,Ee.image[ne])}}}g(w)&&f(t.TEXTURE_CUBE_MAP),ee.__version=se.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ve(R,w,G,te,se,ee){const Ie=s.convert(G.format,G.colorSpace),_e=s.convert(G.type),we=y(G.internalFormat,Ie,_e,G.colorSpace),it=i.get(w),fe=i.get(G);if(fe.__renderTarget=w,!it.__hasExternalTextures){const Ce=Math.max(1,w.width>>ee),ze=Math.max(1,w.height>>ee);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,ee,we,Ce,ze,w.depth,0,Ie,_e,null):n.texImage2D(se,ee,we,Ce,ze,0,Ie,_e,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),lt(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,se,fe.__webglTexture,0,Ze(w)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,se,fe.__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function me(R,w,G){if(t.bindRenderbuffer(t.RENDERBUFFER,R),w.depthBuffer){const te=w.depthTexture,se=te&&te.isDepthTexture?te.type:null,ee=E(w.stencilBuffer,se),Ie=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=Ze(w);lt(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,_e,ee,w.width,w.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,ee,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,ee,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ie,t.RENDERBUFFER,R)}else{const te=w.textures;for(let se=0;se<te.length;se++){const ee=te[se],Ie=s.convert(ee.format,ee.colorSpace),_e=s.convert(ee.type),we=y(ee.internalFormat,Ie,_e,ee.colorSpace),it=Ze(w);G&&lt(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,it,we,w.width,w.height):lt(w)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,it,we,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,we,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function le(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(w.depthTexture);te.__renderTarget=w,(!te.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),oe(w.depthTexture,0);const se=te.__webglTexture,ee=Ze(w);if(w.depthTexture.format===Uo)lt(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(w.depthTexture.format===Yo)lt(w)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Ge(R){const w=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){const te=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),te){const se=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,te.removeEventListener("dispose",se)};te.addEventListener("dispose",se),w.__depthDisposeCallback=se}w.__boundDepthTexture=te}if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");le(w.__webglFramebuffer,R)}else if(G){w.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[te]),w.__webglDepthbuffer[te]===void 0)w.__webglDepthbuffer[te]=t.createRenderbuffer(),me(w.__webglDepthbuffer[te],R,!1);else{const se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=w.__webglDepthbuffer[te];t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,ee)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),me(w.__webglDepthbuffer,R,!1);else{const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,se)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function et(R,w,G){const te=i.get(R);w!==void 0&&ve(te.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&Ge(R)}function Ot(R){const w=R.texture,G=i.get(R),te=i.get(w);R.addEventListener("dispose",P);const se=R.textures,ee=R.isWebGLCubeRenderTarget===!0,Ie=se.length>1;if(Ie||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=w.version,o.memory.textures++),ee){G.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer[_e]=[];for(let we=0;we<w.mipmaps.length;we++)G.__webglFramebuffer[_e][we]=t.createFramebuffer()}else G.__webglFramebuffer[_e]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){G.__webglFramebuffer=[];for(let _e=0;_e<w.mipmaps.length;_e++)G.__webglFramebuffer[_e]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(Ie)for(let _e=0,we=se.length;_e<we;_e++){const it=i.get(se[_e]);it.__webglTexture===void 0&&(it.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&lt(R)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let _e=0;_e<se.length;_e++){const we=se[_e];G.__webglColorRenderbuffer[_e]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[_e]);const it=s.convert(we.format,we.colorSpace),fe=s.convert(we.type),Ce=y(we.internalFormat,it,fe,we.colorSpace,R.isXRRenderTarget===!0),ze=Ze(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,Ce,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,G.__webglColorRenderbuffer[_e])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),me(G.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,w);for(let _e=0;_e<6;_e++)if(w.mipmaps&&w.mipmaps.length>0)for(let we=0;we<w.mipmaps.length;we++)ve(G.__webglFramebuffer[_e][we],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,we);else ve(G.__webglFramebuffer[_e],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);g(w)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let _e=0,we=se.length;_e<we;_e++){const it=se[_e],fe=i.get(it);n.bindTexture(t.TEXTURE_2D,fe.__webglTexture),Oe(t.TEXTURE_2D,it),ve(G.__webglFramebuffer,R,it,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,0),g(it)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let _e=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(_e,te.__webglTexture),Oe(_e,w),w.mipmaps&&w.mipmaps.length>0)for(let we=0;we<w.mipmaps.length;we++)ve(G.__webglFramebuffer[we],R,w,t.COLOR_ATTACHMENT0,_e,we);else ve(G.__webglFramebuffer,R,w,t.COLOR_ATTACHMENT0,_e,0);g(w)&&f(_e),n.unbindTexture()}R.depthBuffer&&Ge(R)}function ut(R){const w=R.textures;for(let G=0,te=w.length;G<te;G++){const se=w[G];if(g(se)){const ee=v(R),Ie=i.get(se).__webglTexture;n.bindTexture(ee,Ie),f(ee),n.unbindTexture()}}}const Rt=[],V=[];function on(R){if(R.samples>0){if(lt(R)===!1){const w=R.textures,G=R.width,te=R.height;let se=t.COLOR_BUFFER_BIT;const ee=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ie=i.get(R),_e=w.length>1;if(_e)for(let we=0;we<w.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let we=0;we<w.length;we++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),_e){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[we]);const it=i.get(w[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,it,0)}t.blitFramebuffer(0,0,G,te,0,0,G,te,se,t.NEAREST),c===!0&&(Rt.length=0,V.length=0,Rt.push(t.COLOR_ATTACHMENT0+we),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Rt.push(ee),V.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,V)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Rt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),_e)for(let we=0;we<w.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[we]);const it=i.get(w[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,it,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const w=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function Ze(R){return Math.min(r.maxSamples,R.samples)}function lt(R){const w=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Be(R){const w=o.render.frame;d.get(R)!==w&&(d.set(R,w),R.update())}function Pt(R,w){const G=R.colorSpace,te=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==ea&&G!==Ur&&(gt.getTransfer(G)===bt?(te!==bi||se!==_r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),w}function ke(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=$,this.resetTextureUnits=Z,this.setTexture2D=oe,this.setTexture2DArray=J,this.setTexture3D=ae,this.setTextureCube=O,this.rebindTextures=et,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=lt}function eL(t,e){function n(i,r=Ur){let s;const o=gt.getTransfer(r);if(i===_r)return t.UNSIGNED_BYTE;if(i===Kp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Zp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===dy)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===uy)return t.BYTE;if(i===fy)return t.SHORT;if(i===nl)return t.UNSIGNED_SHORT;if(i===qp)return t.INT;if(i===ks)return t.UNSIGNED_INT;if(i===lr)return t.FLOAT;if(i===fl)return t.HALF_FLOAT;if(i===hy)return t.ALPHA;if(i===py)return t.RGB;if(i===bi)return t.RGBA;if(i===my)return t.LUMINANCE;if(i===gy)return t.LUMINANCE_ALPHA;if(i===Uo)return t.DEPTH_COMPONENT;if(i===Yo)return t.DEPTH_STENCIL;if(i===_y)return t.RED;if(i===Qp)return t.RED_INTEGER;if(i===vy)return t.RG;if(i===Jp)return t.RG_INTEGER;if(i===em)return t.RGBA_INTEGER;if(i===Oc||i===Fc||i===kc||i===Bc)if(o===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Oc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Fc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===kc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Oc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Fc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===kc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Bc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Mh||i===wh||i===Th||i===Ah)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Mh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Th)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ah)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ch||i===bh||i===Rh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ch||i===bh)return o===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Rh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ph||i===Lh||i===Dh||i===Ih||i===Nh||i===Uh||i===Oh||i===Fh||i===kh||i===Bh||i===zh||i===Hh||i===Vh||i===Gh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ph)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Lh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ih)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gh)return o===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zc||i===Wh||i===Xh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zc)return o===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Xh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xy||i===jh||i===$h||i===Yh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===jh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$h)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===$o?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class tL extends di{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xc extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nL={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const M of e.hand.values()){const g=n.getJointPose(M,i),f=this._getHandJoint(u,M);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],p=d.position.distanceTo(h.position),_=.02,x=.005;u.inputState.pinching&&p>_+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=_-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nL)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new xc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const iL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rL=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Gn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Jr({vertexShader:iL,fragmentShader:rL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ur(new Ou(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oL extends ta{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,u=null,d=null,h=null,p=null,_=null,x=null;const M=new sL,g=n.getContextAttributes();let f=null,v=null;const y=[],E=[],I=new It;let L=null;const P=new di;P.viewport=new Kt;const D=new di;D.viewport=new Kt;const b=[P,D],T=new tL;let U=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ce=y[q];return ce===void 0&&(ce=new dd,y[q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(q){let ce=y[q];return ce===void 0&&(ce=new dd,y[q]=ce),ce.getGripSpace()},this.getHand=function(q){let ce=y[q];return ce===void 0&&(ce=new dd,y[q]=ce),ce.getHandSpace()};function $(q){const ce=E.indexOf(q.inputSource);if(ce===-1)return;const ve=y[ce];ve!==void 0&&(ve.update(q.inputSource,q.frame,u||o),ve.dispatchEvent({type:q.type,data:q.inputSource}))}function re(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",oe);for(let q=0;q<y.length;q++){const ce=E[q];ce!==null&&(E[q]=null,y[q].disconnect(ce))}U=null,Z=null,M.reset(),e.setRenderTarget(f),_=null,p=null,h=null,r=null,v=null,at.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return p!==null?p:_},this.getBinding=function(){return h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",re),r.addEventListener("inputsourceschange",oe),g.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0){const ce={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,n,ce),r.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),v=new Bs(_.framebufferWidth,_.framebufferHeight,{format:bi,type:_r,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ce=null,ve=null,me=null;g.depth&&(me=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=g.stencil?Yo:Uo,ve=g.stencil?$o:ks);const le={colorFormat:n.RGBA8,depthFormat:me,scaleFactor:s};h=new XRWebGLBinding(r,n),p=h.createProjectionLayer(le),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new Bs(p.textureWidth,p.textureHeight,{format:bi,type:_r,depthTexture:new Uy(p.textureWidth,p.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(a),at.setContext(r),at.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function oe(q){for(let ce=0;ce<q.removed.length;ce++){const ve=q.removed[ce],me=E.indexOf(ve);me>=0&&(E[me]=null,y[me].disconnect(ve))}for(let ce=0;ce<q.added.length;ce++){const ve=q.added[ce];let me=E.indexOf(ve);if(me===-1){for(let Ge=0;Ge<y.length;Ge++)if(Ge>=E.length){E.push(ve),me=Ge;break}else if(E[Ge]===null){E[Ge]=ve,me=Ge;break}if(me===-1)break}const le=y[me];le&&le.connect(ve)}}const J=new j,ae=new j;function O(q,ce,ve){J.setFromMatrixPosition(ce.matrixWorld),ae.setFromMatrixPosition(ve.matrixWorld);const me=J.distanceTo(ae),le=ce.projectionMatrix.elements,Ge=ve.projectionMatrix.elements,et=le[14]/(le[10]-1),Ot=le[14]/(le[10]+1),ut=(le[9]+1)/le[5],Rt=(le[9]-1)/le[5],V=(le[8]-1)/le[0],on=(Ge[8]+1)/Ge[0],Ze=et*V,lt=et*on,Be=me/(-V+on),Pt=Be*-V;if(ce.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Pt),q.translateZ(Be),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),le[10]===-1)q.projectionMatrix.copy(ce.projectionMatrix),q.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const ke=et+Be,R=Ot+Be,w=Ze-Pt,G=lt+(me-Pt),te=ut*Ot/R*ke,se=Rt*Ot/R*ke;q.projectionMatrix.makePerspective(w,G,te,se,ke,R),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Q(q,ce){ce===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ce.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ce=q.near,ve=q.far;M.texture!==null&&(M.depthNear>0&&(ce=M.depthNear),M.depthFar>0&&(ve=M.depthFar)),T.near=D.near=P.near=ce,T.far=D.far=P.far=ve,(U!==T.near||Z!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),U=T.near,Z=T.far),P.layers.mask=q.layers.mask|2,D.layers.mask=q.layers.mask|4,T.layers.mask=P.layers.mask|D.layers.mask;const me=q.parent,le=T.cameras;Q(T,me);for(let Ge=0;Ge<le.length;Ge++)Q(le[Ge],me);le.length===2?O(T,P,D):T.projectionMatrix.copy(P.projectionMatrix),N(q,T,me)};function N(q,ce,ve){ve===null?q.matrix.copy(ce.matrixWorld):(q.matrix.copy(ve.matrixWorld),q.matrix.invert(),q.matrix.multiply(ce.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ce.projectionMatrix),q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=qh*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(p===null&&_===null))return c},this.setFoveation=function(q){c=q,p!==null&&(p.fixedFoveation=q),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=q)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(T)};let ge=null;function Oe(q,ce){if(d=ce.getViewerPose(u||o),x=ce,d!==null){const ve=d.views;_!==null&&(e.setRenderTargetFramebuffer(v,_.framebuffer),e.setRenderTarget(v));let me=!1;ve.length!==T.cameras.length&&(T.cameras.length=0,me=!0);for(let Ge=0;Ge<ve.length;Ge++){const et=ve[Ge];let Ot=null;if(_!==null)Ot=_.getViewport(et);else{const Rt=h.getViewSubImage(p,et);Ot=Rt.viewport,Ge===0&&(e.setRenderTargetTextures(v,Rt.colorTexture,p.ignoreDepthValues?void 0:Rt.depthStencilTexture),e.setRenderTarget(v))}let ut=b[Ge];ut===void 0&&(ut=new di,ut.layers.enable(Ge),ut.viewport=new Kt,b[Ge]=ut),ut.matrix.fromArray(et.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(et.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),Ge===0&&(T.matrix.copy(ut.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),me===!0&&T.cameras.push(ut)}const le=r.enabledFeatures;if(le&&le.includes("depth-sensing")){const Ge=h.getDepthInformation(ve[0]);Ge&&Ge.isValid&&Ge.texture&&M.init(e,Ge,r.renderState)}}for(let ve=0;ve<y.length;ve++){const me=E[ve],le=y[ve];me!==null&&le!==void 0&&le.update(me,ce,u||o)}ge&&ge(q,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),x=null}const at=new Ny;at.setAnimationLoop(Oe),this.setAnimationLoop=function(q){ge=q},this.dispose=function(){}}}const vs=new vr,aL=new Zt;function lL(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,Py(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,v,y,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(g,f):f.isMeshToonMaterial?(s(g,f),h(g,f)):f.isMeshPhongMaterial?(s(g,f),d(g,f)):f.isMeshStandardMaterial?(s(g,f),p(g,f),f.isMeshPhysicalMaterial&&_(g,f,E)):f.isMeshMatcapMaterial?(s(g,f),x(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),M(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(o(g,f),f.isLineDashedMaterial&&a(g,f)):f.isPointsMaterial?c(g,f,v,y):f.isSpriteMaterial?u(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===Vn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===Vn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const v=e.get(f),y=v.envMap,E=v.envMapRotation;y&&(g.envMap.value=y,vs.copy(E),vs.x*=-1,vs.y*=-1,vs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),g.envMapRotation.value.setFromMatrix4(aL.makeRotationFromEuler(vs)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function o(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function a(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,v,y){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*v,g.scale.value=y*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function d(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function h(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function p(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function _(g,f,v){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Vn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,f){f.matcap&&(g.matcap.value=f.matcap)}function M(g,f){const v=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cL(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,y){const E=y.program;i.uniformBlockBinding(v,E)}function u(v,y){let E=r[v.id];E===void 0&&(x(v),E=d(v),r[v.id]=E,v.addEventListener("dispose",g));const I=y.program;i.updateUBOMapping(v,I);const L=e.render.frame;s[v.id]!==L&&(p(v),s[v.id]=L)}function d(v){const y=h();v.__bindingPointIndex=y;const E=t.createBuffer(),I=v.__size,L=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,I,L),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,E),E}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const y=r[v.id],E=v.uniforms,I=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let L=0,P=E.length;L<P;L++){const D=Array.isArray(E[L])?E[L]:[E[L]];for(let b=0,T=D.length;b<T;b++){const U=D[b];if(_(U,L,b,I)===!0){const Z=U.__offset,$=Array.isArray(U.value)?U.value:[U.value];let re=0;for(let oe=0;oe<$.length;oe++){const J=$[oe],ae=M(J);typeof J=="number"||typeof J=="boolean"?(U.__data[0]=J,t.bufferSubData(t.UNIFORM_BUFFER,Z+re,U.__data)):J.isMatrix3?(U.__data[0]=J.elements[0],U.__data[1]=J.elements[1],U.__data[2]=J.elements[2],U.__data[3]=0,U.__data[4]=J.elements[3],U.__data[5]=J.elements[4],U.__data[6]=J.elements[5],U.__data[7]=0,U.__data[8]=J.elements[6],U.__data[9]=J.elements[7],U.__data[10]=J.elements[8],U.__data[11]=0):(J.toArray(U.__data,re),re+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Z,U.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function _(v,y,E,I){const L=v.value,P=y+"_"+E;if(I[P]===void 0)return typeof L=="number"||typeof L=="boolean"?I[P]=L:I[P]=L.clone(),!0;{const D=I[P];if(typeof L=="number"||typeof L=="boolean"){if(D!==L)return I[P]=L,!0}else if(D.equals(L)===!1)return D.copy(L),!0}return!1}function x(v){const y=v.uniforms;let E=0;const I=16;for(let P=0,D=y.length;P<D;P++){const b=Array.isArray(y[P])?y[P]:[y[P]];for(let T=0,U=b.length;T<U;T++){const Z=b[T],$=Array.isArray(Z.value)?Z.value:[Z.value];for(let re=0,oe=$.length;re<oe;re++){const J=$[re],ae=M(J),O=E%I,Q=O%ae.boundary,N=O+Q;E+=Q,N!==0&&I-N<ae.storage&&(E+=I-N),Z.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=E,E+=ae.storage}}}const L=E%I;return L>0&&(E+=I-L),v.__size=E,v.__cache={},this}function M(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function g(v){const y=v.target;y.removeEventListener("dispose",g);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function f(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:c,update:u,dispose:f}}class uL{constructor(e={}){const{canvas:n=Z1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=o;const x=new Uint32Array(4),M=new Int32Array(4);let g=null,f=null;const v=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ci,this.toneMapping=qr,this.toneMappingExposure=1;const E=this;let I=!1,L=0,P=0,D=null,b=-1,T=null;const U=new Kt,Z=new Kt;let $=null;const re=new Et(0);let oe=0,J=n.width,ae=n.height,O=1,Q=null,N=null;const ge=new Kt(0,0,J,ae),Oe=new Kt(0,0,J,ae);let at=!1;const q=new Iy;let ce=!1,ve=!1;const me=new Zt,le=new Zt,Ge=new j,et=new Kt,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Rt(){return D===null?O:1}let V=i;function on(A,z){return n.getContext(A,z)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yp}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",Te,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),V===null){const z="webgl2";if(V=on(z,A),V===null)throw on(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ze,lt,Be,Pt,ke,R,w,G,te,se,ee,Ie,_e,we,it,fe,Ce,ze,We,Pe,ct,Ke,wt,F;function xe(){Ze=new mR(V),Ze.init(),Ke=new eL(V,Ze),lt=new lR(V,Ze,e,Ke),Be=new ZP(V,Ze),lt.reverseDepthBuffer&&p&&Be.buffers.depth.setReversed(!0),Pt=new vR(V),ke=new OP,R=new JP(V,Ze,Be,ke,lt,Ke,Pt),w=new uR(E),G=new pR(E),te=new wA(V),wt=new oR(V,te),se=new gR(V,te,Pt,wt),ee=new yR(V,se,te,Pt),We=new xR(V,lt,R),fe=new cR(ke),Ie=new UP(E,w,G,Ze,lt,wt,fe),_e=new lL(E,ke),we=new kP,it=new WP(Ze),ze=new sR(E,w,G,Be,ee,_,c),Ce=new qP(E,ee,lt),F=new cL(V,Pt,lt,Be),Pe=new aR(V,Ze,Pt),ct=new _R(V,Ze,Pt),Pt.programs=Ie.programs,E.capabilities=lt,E.extensions=Ze,E.properties=ke,E.renderLists=we,E.shadowMap=Ce,E.state=Be,E.info=Pt}xe();const K=new oL(E,V);this.xr=K,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=Ze.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ze.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(J,ae,!1))},this.getSize=function(A){return A.set(J,ae)},this.setSize=function(A,z,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=A,ae=z,n.width=Math.floor(A*O),n.height=Math.floor(z*O),W===!0&&(n.style.width=A+"px",n.style.height=z+"px"),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(J*O,ae*O).floor()},this.setDrawingBufferSize=function(A,z,W){J=A,ae=z,O=W,n.width=Math.floor(A*W),n.height=Math.floor(z*W),this.setViewport(0,0,A,z)},this.getCurrentViewport=function(A){return A.copy(U)},this.getViewport=function(A){return A.copy(ge)},this.setViewport=function(A,z,W,X){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,z,W,X),Be.viewport(U.copy(ge).multiplyScalar(O).round())},this.getScissor=function(A){return A.copy(Oe)},this.setScissor=function(A,z,W,X){A.isVector4?Oe.set(A.x,A.y,A.z,A.w):Oe.set(A,z,W,X),Be.scissor(Z.copy(Oe).multiplyScalar(O).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(A){Be.setScissorTest(at=A)},this.setOpaqueSort=function(A){Q=A},this.setTransparentSort=function(A){N=A},this.getClearColor=function(A){return A.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(A=!0,z=!0,W=!0){let X=0;if(A){let B=!1;if(D!==null){const de=D.texture.format;B=de===em||de===Jp||de===Qp}if(B){const de=D.texture.type,Se=de===_r||de===ks||de===nl||de===$o||de===Kp||de===Zp,Le=ze.getClearColor(),Ne=ze.getClearAlpha(),Ve=Le.r,je=Le.g,Ue=Le.b;Se?(x[0]=Ve,x[1]=je,x[2]=Ue,x[3]=Ne,V.clearBufferuiv(V.COLOR,0,x)):(M[0]=Ve,M[1]=je,M[2]=Ue,M[3]=Ne,V.clearBufferiv(V.COLOR,0,M))}else X|=V.COLOR_BUFFER_BIT}z&&(X|=V.DEPTH_BUFFER_BIT),W&&(X|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",Te,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),we.dispose(),it.dispose(),ke.dispose(),w.dispose(),G.dispose(),ee.dispose(),wt.dispose(),F.dispose(),Ie.dispose(),K.dispose(),K.removeEventListener("sessionstart",_l),K.removeEventListener("sessionend",vl),Gi.stop()};function ne(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const A=Pt.autoReset,z=Ce.enabled,W=Ce.autoUpdate,X=Ce.needsUpdate,B=Ce.type;xe(),Pt.autoReset=A,Ce.enabled=z,Ce.autoUpdate=W,Ce.needsUpdate=X,Ce.type=B}function Ee(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function qe(A){const z=A.target;z.removeEventListener("dispose",qe),Bt(z)}function Bt(A){Ht(A),ke.remove(A)}function Ht(A){const z=ke.get(A).programs;z!==void 0&&(z.forEach(function(W){Ie.releaseProgram(W)}),A.isShaderMaterial&&Ie.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,W,X,B,de){z===null&&(z=Ot);const Se=B.isMesh&&B.matrixWorld.determinant()<0,Le=fn(A,z,W,X,B);Be.setMaterial(X,Se);let Ne=W.index,Ve=1;if(X.wireframe===!0){if(Ne=se.getWireframeAttribute(W),Ne===void 0)return;Ve=2}const je=W.drawRange,Ue=W.attributes.position;let dt=je.start*Ve,xt=(je.start+je.count)*Ve;de!==null&&(dt=Math.max(dt,de.start*Ve),xt=Math.min(xt,(de.start+de.count)*Ve)),Ne!==null?(dt=Math.max(dt,0),xt=Math.min(xt,Ne.count)):Ue!=null&&(dt=Math.max(dt,0),xt=Math.min(xt,Ue.count));const Tt=xt-dt;if(Tt<0||Tt===1/0)return;wt.setup(B,X,Le,W,Ne);let dn,pt=Pe;if(Ne!==null&&(dn=te.get(Ne),pt=ct,pt.setIndex(dn)),B.isMesh)X.wireframe===!0?(Be.setLineWidth(X.wireframeLinewidth*Rt()),pt.setMode(V.LINES)):pt.setMode(V.TRIANGLES);else if(B.isLine){let Fe=X.linewidth;Fe===void 0&&(Fe=1),Be.setLineWidth(Fe*Rt()),B.isLineSegments?pt.setMode(V.LINES):B.isLineLoop?pt.setMode(V.LINE_LOOP):pt.setMode(V.LINE_STRIP)}else B.isPoints?pt.setMode(V.POINTS):B.isSprite&&pt.setMode(V.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)pt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))pt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Fe=B._multiDrawStarts,ii=B._multiDrawCounts,mt=B._multiDrawCount,In=Ne?te.get(Ne).bytesPerElement:1,hn=ke.get(X).currentProgram.getUniforms();for(let Lt=0;Lt<mt;Lt++)hn.setValue(V,"_gl_DrawID",Lt),pt.render(Fe[Lt]/In,ii[Lt])}else if(B.isInstancedMesh)pt.renderInstances(dt,Tt,B.count);else if(W.isInstancedBufferGeometry){const Fe=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ii=Math.min(W.instanceCount,Fe);pt.renderInstances(dt,Tt,ii)}else pt.render(dt,Tt)};function ft(A,z,W){A.transparent===!0&&A.side===sr&&A.forceSinglePass===!1?(A.side=Vn,A.needsUpdate=!0,js(A,z,W),A.side=Qr,A.needsUpdate=!0,js(A,z,W),A.side=sr):js(A,z,W)}this.compile=function(A,z,W=null){W===null&&(W=A),f=it.get(W),f.init(z),y.push(f),W.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),A!==W&&A.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const X=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const de=B.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){const Le=de[Se];ft(Le,W,B),X.add(Le)}else ft(de,W,B),X.add(de)}),y.pop(),f=null,X},this.compileAsync=function(A,z,W=null){const X=this.compile(A,z,W);return new Promise(B=>{function de(){if(X.forEach(function(Se){ke.get(Se).currentProgram.isReady()&&X.delete(Se)}),X.size===0){B(A);return}setTimeout(de,10)}Ze.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Xn=null;function _i(A){Xn&&Xn(A)}function _l(){Gi.stop()}function vl(){Gi.start()}const Gi=new Ny;Gi.setAnimationLoop(_i),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(A){Xn=A,K.setAnimationLoop(A),A===null?Gi.stop():Gi.start()},K.addEventListener("sessionstart",_l),K.addEventListener("sessionend",vl),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(z),z=K.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,z,D),f=it.get(A,y.length),f.init(z),y.push(f),le.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),q.setFromProjectionMatrix(le),ve=this.localClippingEnabled,ce=fe.init(this.clippingPlanes,ve),g=we.get(A,v.length),g.init(),v.push(g),K.enabled===!0&&K.isPresenting===!0){const de=E.xr.getDepthSensingMesh();de!==null&&is(de,z,-1/0,E.sortObjects)}is(A,z,0,E.sortObjects),g.finish(),E.sortObjects===!0&&g.sort(Q,N),ut=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ut&&ze.addToRenderList(g,A),this.info.render.frame++,ce===!0&&fe.beginShadows();const W=f.state.shadowsArray;Ce.render(W,A,z),ce===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=g.opaque,B=g.transmissive;if(f.setupLights(),z.isArrayCamera){const de=z.cameras;if(B.length>0)for(let Se=0,Le=de.length;Se<Le;Se++){const Ne=de[Se];rs(X,B,A,Ne)}ut&&ze.render(A);for(let Se=0,Le=de.length;Se<Le;Se++){const Ne=de[Se];Wi(g,A,Ne,Ne.viewport)}}else B.length>0&&rs(X,B,A,z),ut&&ze.render(A),Wi(g,A,z);D!==null&&(R.updateMultisampleRenderTarget(D),R.updateRenderTargetMipmap(D)),A.isScene===!0&&A.onAfterRender(E,A,z),wt.resetDefaultState(),b=-1,T=null,y.pop(),y.length>0?(f=y[y.length-1],ce===!0&&fe.setGlobalState(E.clippingPlanes,f.state.camera)):f=null,v.pop(),v.length>0?g=v[v.length-1]:g=null};function is(A,z,W,X){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)f.pushLight(A),A.castShadow&&f.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||q.intersectsSprite(A)){X&&et.setFromMatrixPosition(A.matrixWorld).applyMatrix4(le);const Se=ee.update(A),Le=A.material;Le.visible&&g.push(A,Se,Le,W,et.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||q.intersectsObject(A))){const Se=ee.update(A),Le=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),et.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),et.copy(Se.boundingSphere.center)),et.applyMatrix4(A.matrixWorld).applyMatrix4(le)),Array.isArray(Le)){const Ne=Se.groups;for(let Ve=0,je=Ne.length;Ve<je;Ve++){const Ue=Ne[Ve],dt=Le[Ue.materialIndex];dt&&dt.visible&&g.push(A,Se,dt,W,et.z,Ue)}}else Le.visible&&g.push(A,Se,Le,W,et.z,null)}}const de=A.children;for(let Se=0,Le=de.length;Se<Le;Se++)is(de[Se],z,W,X)}function Wi(A,z,W,X){const B=A.opaque,de=A.transmissive,Se=A.transparent;f.setupLightsView(W),ce===!0&&fe.setGlobalState(E.clippingPlanes,W),X&&Be.viewport(U.copy(X)),B.length>0&&Ws(B,z,W),de.length>0&&Ws(de,z,W),Se.length>0&&Ws(Se,z,W),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function rs(A,z,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[X.id]===void 0&&(f.state.transmissionRenderTarget[X.id]=new Bs(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?fl:_r,minFilter:Rs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const de=f.state.transmissionRenderTarget[X.id],Se=X.viewport||U;de.setSize(Se.z,Se.w);const Le=E.getRenderTarget();E.setRenderTarget(de),E.getClearColor(re),oe=E.getClearAlpha(),oe<1&&E.setClearColor(16777215,.5),E.clear(),ut&&ze.render(W);const Ne=E.toneMapping;E.toneMapping=qr;const Ve=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),f.setupLightsView(X),ce===!0&&fe.setGlobalState(E.clippingPlanes,X),Ws(A,W,X),R.updateMultisampleRenderTarget(de),R.updateRenderTargetMipmap(de),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Ue=0,dt=z.length;Ue<dt;Ue++){const xt=z[Ue],Tt=xt.object,dn=xt.geometry,pt=xt.material,Fe=xt.group;if(pt.side===sr&&Tt.layers.test(X.layers)){const ii=pt.side;pt.side=Vn,pt.needsUpdate=!0,Xs(Tt,W,X,dn,pt,Fe),pt.side=ii,pt.needsUpdate=!0,je=!0}}je===!0&&(R.updateMultisampleRenderTarget(de),R.updateRenderTargetMipmap(de))}E.setRenderTarget(Le),E.setClearColor(re,oe),Ve!==void 0&&(X.viewport=Ve),E.toneMapping=Ne}function Ws(A,z,W){const X=z.isScene===!0?z.overrideMaterial:null;for(let B=0,de=A.length;B<de;B++){const Se=A[B],Le=Se.object,Ne=Se.geometry,Ve=X===null?Se.material:X,je=Se.group;Le.layers.test(W.layers)&&Xs(Le,z,W,Ne,Ve,je)}}function Xs(A,z,W,X,B,de){A.onBeforeRender(E,z,W,X,B,de),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(E,z,W,X,A,de),B.transparent===!0&&B.side===sr&&B.forceSinglePass===!1?(B.side=Vn,B.needsUpdate=!0,E.renderBufferDirect(W,z,X,B,A,de),B.side=Qr,B.needsUpdate=!0,E.renderBufferDirect(W,z,X,B,A,de),B.side=sr):E.renderBufferDirect(W,z,X,B,A,de),A.onAfterRender(E,z,W,X,B,de)}function js(A,z,W){z.isScene!==!0&&(z=Ot);const X=ke.get(A),B=f.state.lights,de=f.state.shadowsArray,Se=B.state.version,Le=Ie.getParameters(A,B.state,de,z,W),Ne=Ie.getProgramCacheKey(Le);let Ve=X.programs;X.environment=A.isMeshStandardMaterial?z.environment:null,X.fog=z.fog,X.envMap=(A.isMeshStandardMaterial?G:w).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",qe),Ve=new Map,X.programs=Ve);let je=Ve.get(Ne);if(je!==void 0){if(X.currentProgram===je&&X.lightsStateVersion===Se)return Xi(A,Le),je}else Le.uniforms=Ie.getUniforms(A),A.onBeforeCompile(Le,E),je=Ie.acquireProgram(Le,Ne),Ve.set(Ne,je),X.uniforms=Le.uniforms;const Ue=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ue.clippingPlanes=fe.uniform),Xi(A,Le),X.needsLights=Tn(A),X.lightsStateVersion=Se,X.needsLights&&(Ue.ambientLightColor.value=B.state.ambient,Ue.lightProbe.value=B.state.probe,Ue.directionalLights.value=B.state.directional,Ue.directionalLightShadows.value=B.state.directionalShadow,Ue.spotLights.value=B.state.spot,Ue.spotLightShadows.value=B.state.spotShadow,Ue.rectAreaLights.value=B.state.rectArea,Ue.ltc_1.value=B.state.rectAreaLTC1,Ue.ltc_2.value=B.state.rectAreaLTC2,Ue.pointLights.value=B.state.point,Ue.pointLightShadows.value=B.state.pointShadow,Ue.hemisphereLights.value=B.state.hemi,Ue.directionalShadowMap.value=B.state.directionalShadowMap,Ue.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ue.spotShadowMap.value=B.state.spotShadowMap,Ue.spotLightMatrix.value=B.state.spotLightMatrix,Ue.spotLightMap.value=B.state.spotLightMap,Ue.pointShadowMap.value=B.state.pointShadowMap,Ue.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=je,X.uniformsList=null,je}function xl(A){if(A.uniformsList===null){const z=A.currentProgram.getUniforms();A.uniformsList=Hc.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function Xi(A,z){const W=ke.get(A);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.batchingColor=z.batchingColor,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}function fn(A,z,W,X,B){z.isScene!==!0&&(z=Ot),R.resetTextureUnits();const de=z.fog,Se=X.isMeshStandardMaterial?z.environment:null,Le=D===null?E.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ea,Ne=(X.isMeshStandardMaterial?G:w).get(X.envMap||Se),Ve=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,je=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Ue=!!W.morphAttributes.position,dt=!!W.morphAttributes.normal,xt=!!W.morphAttributes.color;let Tt=qr;X.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Tt=E.toneMapping);const dn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,pt=dn!==void 0?dn.length:0,Fe=ke.get(X),ii=f.state.lights;if(ce===!0&&(ve===!0||A!==T)){const Vt=A===T&&X.id===b;fe.setState(X,A,Vt)}let mt=!1;X.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==ii.state.version||Fe.outputColorSpace!==Le||B.isBatchedMesh&&Fe.batching===!1||!B.isBatchedMesh&&Fe.batching===!0||B.isBatchedMesh&&Fe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Fe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Fe.instancing===!1||!B.isInstancedMesh&&Fe.instancing===!0||B.isSkinnedMesh&&Fe.skinning===!1||!B.isSkinnedMesh&&Fe.skinning===!0||B.isInstancedMesh&&Fe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Fe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Fe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Fe.instancingMorph===!1&&B.morphTexture!==null||Fe.envMap!==Ne||X.fog===!0&&Fe.fog!==de||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==fe.numPlanes||Fe.numIntersection!==fe.numIntersection)||Fe.vertexAlphas!==Ve||Fe.vertexTangents!==je||Fe.morphTargets!==Ue||Fe.morphNormals!==dt||Fe.morphColors!==xt||Fe.toneMapping!==Tt||Fe.morphTargetsCount!==pt)&&(mt=!0):(mt=!0,Fe.__version=X.version);let In=Fe.currentProgram;mt===!0&&(In=js(X,z,B));let hn=!1,Lt=!1,jn=!1;const rt=In.getUniforms(),Nn=Fe.uniforms;if(Be.useProgram(In.program)&&(hn=!0,Lt=!0,jn=!0),X.id!==b&&(b=X.id,Lt=!0),hn||T!==A){Be.buffers.depth.getReversed()?(me.copy(A.projectionMatrix),J1(me),eA(me),rt.setValue(V,"projectionMatrix",me)):rt.setValue(V,"projectionMatrix",A.projectionMatrix),rt.setValue(V,"viewMatrix",A.matrixWorldInverse);const _n=rt.map.cameraPosition;_n!==void 0&&_n.setValue(V,Ge.setFromMatrixPosition(A.matrixWorld)),lt.logarithmicDepthBuffer&&rt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&rt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,Lt=!0,jn=!0)}if(B.isSkinnedMesh){rt.setOptional(V,B,"bindMatrix"),rt.setOptional(V,B,"bindMatrixInverse");const Vt=B.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),rt.setValue(V,"boneTexture",Vt.boneTexture,R))}B.isBatchedMesh&&(rt.setOptional(V,B,"batchingTexture"),rt.setValue(V,"batchingTexture",B._matricesTexture,R),rt.setOptional(V,B,"batchingIdTexture"),rt.setValue(V,"batchingIdTexture",B._indirectTexture,R),rt.setOptional(V,B,"batchingColorTexture"),B._colorsTexture!==null&&rt.setValue(V,"batchingColorTexture",B._colorsTexture,R));const ji=W.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&We.update(B,W,In),(Lt||Fe.receiveShadow!==B.receiveShadow)&&(Fe.receiveShadow=B.receiveShadow,rt.setValue(V,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Nn.envMap.value=Ne,Nn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&z.environment!==null&&(Nn.envMapIntensity.value=z.environmentIntensity),Lt&&(rt.setValue(V,"toneMappingExposure",E.toneMappingExposure),Fe.needsLights&&wn(Nn,jn),de&&X.fog===!0&&_e.refreshFogUniforms(Nn,de),_e.refreshMaterialUniforms(Nn,X,O,ae,f.state.transmissionRenderTarget[A.id]),Hc.upload(V,xl(Fe),Nn,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Hc.upload(V,xl(Fe),Nn,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&rt.setValue(V,"center",B.center),rt.setValue(V,"modelViewMatrix",B.modelViewMatrix),rt.setValue(V,"normalMatrix",B.normalMatrix),rt.setValue(V,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Vt=X.uniformsGroups;for(let _n=0,$n=Vt.length;_n<$n;_n++){const $i=Vt[_n];F.update($i,In),F.bind($i,In)}}return In}function wn(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Tn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,z,W){ke.get(A.texture).__webglTexture=z,ke.get(A.depthTexture).__webglTexture=W;const X=ke.get(A);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,z){const W=ke.get(A);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,W=0){D=A,L=z,P=W;let X=!0,B=null,de=!1,Se=!1;if(A){const Ne=ke.get(A);if(Ne.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(V.FRAMEBUFFER,null),X=!1;else if(Ne.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(Ne.__hasExternalTextures)R.rebindTextures(A,ke.get(A.texture).__webglTexture,ke.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ue=A.depthTexture;if(Ne.__boundDepthTexture!==Ue){if(Ue!==null&&ke.has(Ue)&&(A.width!==Ue.image.width||A.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Se=!0);const je=ke.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(je[z])?B=je[z][W]:B=je[z],de=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?B=ke.get(A).__webglMultisampledFramebuffer:Array.isArray(je)?B=je[W]:B=je,U.copy(A.viewport),Z.copy(A.scissor),$=A.scissorTest}else U.copy(ge).multiplyScalar(O).floor(),Z.copy(Oe).multiplyScalar(O).floor(),$=at;if(Be.bindFramebuffer(V.FRAMEBUFFER,B)&&X&&Be.drawBuffers(A,B),Be.viewport(U),Be.scissor(Z),Be.setScissorTest($),de){const Ne=ke.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ne.__webglTexture,W)}else if(Se){const Ne=ke.get(A.texture),Ve=z||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ne.__webglTexture,W||0,Ve)}b=-1},this.readRenderTargetPixels=function(A,z,W,X,B,de,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Le=Le[Se]),Le){Be.bindFramebuffer(V.FRAMEBUFFER,Le);try{const Ne=A.texture,Ve=Ne.format,je=Ne.type;if(!lt.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-X&&W>=0&&W<=A.height-B&&V.readPixels(z,W,X,B,Ke.convert(Ve),Ke.convert(je),de)}finally{const Ne=D!==null?ke.get(D).__webglFramebuffer:null;Be.bindFramebuffer(V.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(A,z,W,X,B,de,Se){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Le=Le[Se]),Le){const Ne=A.texture,Ve=Ne.format,je=Ne.type;if(!lt.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=A.width-X&&W>=0&&W<=A.height-B){Be.bindFramebuffer(V.FRAMEBUFFER,Le);const Ue=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Ue),V.bufferData(V.PIXEL_PACK_BUFFER,de.byteLength,V.STREAM_READ),V.readPixels(z,W,X,B,Ke.convert(Ve),Ke.convert(je),0);const dt=D!==null?ke.get(D).__webglFramebuffer:null;Be.bindFramebuffer(V.FRAMEBUFFER,dt);const xt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Q1(V,xt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Ue),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,de),V.deleteBuffer(Ue),V.deleteSync(xt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,z=null,W=0){A.isTexture!==!0&&(Aa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,A=arguments[1]);const X=Math.pow(2,-W),B=Math.floor(A.image.width*X),de=Math.floor(A.image.height*X),Se=z!==null?z.x:0,Le=z!==null?z.y:0;R.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,W,0,0,Se,Le,B,de),Be.unbindTexture()},this.copyTextureToTexture=function(A,z,W=null,X=null,B=0){A.isTexture!==!0&&(Aa("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1],z=arguments[2],B=arguments[3]||0,W=null);let de,Se,Le,Ne,Ve,je,Ue,dt,xt;const Tt=A.isCompressedTexture?A.mipmaps[B]:A.image;W!==null?(de=W.max.x-W.min.x,Se=W.max.y-W.min.y,Le=W.isBox3?W.max.z-W.min.z:1,Ne=W.min.x,Ve=W.min.y,je=W.isBox3?W.min.z:0):(de=Tt.width,Se=Tt.height,Le=Tt.depth||1,Ne=0,Ve=0,je=0),X!==null?(Ue=X.x,dt=X.y,xt=X.z):(Ue=0,dt=0,xt=0);const dn=Ke.convert(z.format),pt=Ke.convert(z.type);let Fe;z.isData3DTexture?(R.setTexture3D(z,0),Fe=V.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(R.setTexture2DArray(z,0),Fe=V.TEXTURE_2D_ARRAY):(R.setTexture2D(z,0),Fe=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,z.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,z.unpackAlignment);const ii=V.getParameter(V.UNPACK_ROW_LENGTH),mt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),In=V.getParameter(V.UNPACK_SKIP_PIXELS),hn=V.getParameter(V.UNPACK_SKIP_ROWS),Lt=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Tt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Tt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ne),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ve),V.pixelStorei(V.UNPACK_SKIP_IMAGES,je);const jn=A.isDataArrayTexture||A.isData3DTexture,rt=z.isDataArrayTexture||z.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const Nn=ke.get(A),ji=ke.get(z),Vt=ke.get(Nn.__renderTarget),_n=ke.get(ji.__renderTarget);Be.bindFramebuffer(V.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,_n.__webglFramebuffer);for(let $n=0;$n<Le;$n++)jn&&V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ke.get(A).__webglTexture,B,je+$n),A.isDepthTexture?(rt&&V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ke.get(z).__webglTexture,B,xt+$n),V.blitFramebuffer(Ne,Ve,de,Se,Ue,dt,de,Se,V.DEPTH_BUFFER_BIT,V.NEAREST)):rt?V.copyTexSubImage3D(Fe,B,Ue,dt,xt+$n,Ne,Ve,de,Se):V.copyTexSubImage2D(Fe,B,Ue,dt,xt+$n,Ne,Ve,de,Se);Be.bindFramebuffer(V.READ_FRAMEBUFFER,null),Be.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else rt?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Fe,B,Ue,dt,xt,de,Se,Le,dn,pt,Tt.data):z.isCompressedArrayTexture?V.compressedTexSubImage3D(Fe,B,Ue,dt,xt,de,Se,Le,dn,Tt.data):V.texSubImage3D(Fe,B,Ue,dt,xt,de,Se,Le,dn,pt,Tt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,B,Ue,dt,de,Se,dn,pt,Tt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,B,Ue,dt,Tt.width,Tt.height,dn,Tt.data):V.texSubImage2D(V.TEXTURE_2D,B,Ue,dt,de,Se,dn,pt,Tt);V.pixelStorei(V.UNPACK_ROW_LENGTH,ii),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,mt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,In),V.pixelStorei(V.UNPACK_SKIP_ROWS,hn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Lt),B===0&&z.generateMipmaps&&V.generateMipmap(Fe),Be.unbindTexture()},this.copyTextureToTexture3D=function(A,z,W=null,X=null,B=0){return A.isTexture!==!0&&(Aa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,A=arguments[2],z=arguments[3],B=arguments[4]||0),Aa('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,z,W,X,B)},this.initRenderTarget=function(A){ke.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),Be.unbindTexture()},this.resetState=function(){L=0,P=0,D=null,Be.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=gt._getDrawingBufferColorSpace(e),n.unpackColorSpace=gt._getUnpackColorSpace()}}class fL extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vr,this.environmentIntensity=1,this.environmentRotation=new vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class zy extends ml{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Iv=new Zt,Zh=new wy,yc=new Uu,Sc=new j;class dL extends Wn{constructor(e=new yr,n=new zy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(r),yc.radius+=s,e.ray.intersectsSphere(yc)===!1)return;Iv.copy(r).invert(),Zh.copy(e.ray).applyMatrix4(Iv);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let x=p,M=_;x<M;x++){const g=u.getX(x);Sc.fromBufferAttribute(h,g),Nv(Sc,g,c,r,e,n,this)}}else{const p=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let x=p,M=_;x<M;x++)Sc.fromBufferAttribute(h,x),Nv(Sc,x,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Nv(t,e,n,i,r,s,o){const a=Zh.distanceSqToPoint(t);if(a<n){const c=new j;Zh.closestPointToPoint(t,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yp);const hL=()=>(Ae.useEffect(()=>{let t=100,e=50,n=50,i,r,s,o,a=[],c=0,u=0,d=0,h=window.innerWidth/2,p=window.innerHeight/2;const _=()=>{i=document.createElement("div"),i.id="particles",i.className="particles";const E=document.getElementById("homepage-hero");E&&E.appendChild(i),r=new di(75,window.innerWidth/window.innerHeight,1,1e4),r.position.z=1e3,s=new fL;const I=new yr,L=new zy({color:12852794,size:5,transparent:!0,opacity:.8}),P=new Float32Array(e*n*3);let D=0;for(let b=0;b<e;b++)for(let T=0;T<n;T++)P[D]=b*t-e*t/2,P[D+1]=0,P[D+2]=T*t-n*t/2,D+=3;I.setAttribute("position",new Di(P,3)),a=new dL(I,L),s.add(a),o=new uL({antialias:!0,alpha:!0}),o.setPixelRatio(window.devicePixelRatio),o.setSize(window.innerWidth,window.innerHeight),o.setClearColor(0,0),i.appendChild(o.domElement),document.addEventListener("mousemove",M,!1),document.addEventListener("touchstart",g,!1),document.addEventListener("touchmove",f,!1),window.addEventListener("resize",x,!1)},x=()=>{h=window.innerWidth/2,p=window.innerHeight/2,r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight)},M=E=>{u=E.clientX-h,d=E.clientY-p},g=E=>{E.touches.length===1&&(E.preventDefault(),u=E.touches[0].pageX-h,d=E.touches[0].pageY-p)},f=E=>{E.touches.length===1&&(E.preventDefault(),u=E.touches[0].pageX-h,d=E.touches[0].pageY-p)},v=()=>{requestAnimationFrame(v),y()},y=()=>{r.position.x+=(u-r.position.x)*.05,r.position.y+=(-d-r.position.y)*.05,r.lookAt(s.position);const E=a.geometry.attributes.position.array;let I=0;for(let L=0;L<e;L++)for(let P=0;P<n;P++)E[I+1]=Math.sin((L+c)*.3)*50+Math.sin((P+c)*.5)*50,I+=3;a.geometry.attributes.position.needsUpdate=!0,o.render(s,r),c+=.1};return _(),v(),()=>{window.removeEventListener("resize",x),document.removeEventListener("mousemove",M),document.removeEventListener("touchstart",g),document.removeEventListener("touchmove",f),i&&i.parentNode&&i.parentNode.removeChild(i),s.remove(a),a.geometry.dispose(),a.material.dispose(),o.dispose()}},[]),null),pL=()=>pe.jsx(pe.Fragment,{children:pe.jsxs("section",{id:"homepage-hero",children:[pe.jsx(hL,{}),pe.jsx("div",{className:"content-wrapper",children:pe.jsx("div",{className:"container",children:pe.jsxs("div",{className:"hero-content",children:[pe.jsx("h1",{children:"IKCU AI Lab"}),pe.jsx("p",{children:"Advancing healthcare through artificial intelligence research and innovation."})]})})})]})}),mL="/assets/image-Bwxmel-u.webp",gL="/assets/video-NC2QL3M3.webp",_L="/assets/glucose-C9L_6jBW.webp",vL="/assets/ai_computer_lab_image-hqQxmJf_.png",xL="/assets/our_mission-C05XL5xN.png",yL="/assets/research-CJryBKMX.png",SL="/assets/support-9iBteTyw.png",EL="/assets/key_focus_areas_image-BV22Zuej.png",ML="/assets/glucose_prediction_image-DwURKed8.png";function wL(t){const[e,n]=Ae.useState(!1);return Ae.useEffect(()=>{const i=new IntersectionObserver(([r])=>n(r.isIntersecting),{threshold:.5});return t.current&&i.observe(t.current),()=>i.disconnect()},[t]),e}function Ec({title:t,icon:e,description:n}){return pe.jsxs("div",{className:"focus-area-card",children:[pe.jsx("div",{className:"card-icon",children:e}),pe.jsx("h3",{className:"card-title",children:t}),pe.jsx("p",{className:"card-description",children:n})]})}function TL(){const t=[{title:"About IKCU AI Lab",content:"Pioneering AI Research in Healthcare at Izmir Katip Celebi University.",backgroundImage:vL},{title:"Our Mission",content:`At IKCU AI Lab, we are dedicated to advancing healthcare through innovative 
                artificial intelligence solutions. Our research focuses on developing 
                cutting-edge AI technologies that can improve patient care and medical 
                decision-making processes.`,backgroundImage:xL},{title:"Key Focus Areas",content:pe.jsxs("div",{className:"focus-area-grid",children:[pe.jsx(Ec,{title:"Medical AI Research",icon:"🔬",description:"Exploring cutting-edge AI applications for medical research."}),pe.jsx(Ec,{title:"Healthcare Analytics",icon:"📊",description:"Leveraging data to drive insights and improve healthcare outcomes."}),pe.jsx(Ec,{title:"Patient Data Processing",icon:"💻",description:"Processing patient data securely to support clinical decision-making."}),pe.jsx(Ec,{title:"Predictive Healthcare Models",icon:"📈",description:"Building predictive models to enhance patient care and treatment."})]}),backgroundImage:EL},{title:"Current Research Projects",content:pe.jsxs("div",{className:"card-container",children:[pe.jsx(hd,{title:"Medical Image Captioning",content:"Developing advanced AI models to automatically generate accurate descriptions of medical images, helping healthcare professionals in diagnosis and documentation.",image:mL}),pe.jsx(hd,{title:"Medical Video Captioning",content:"Creating AI systems that can analyze and describe medical procedure videos, enhancing medical education and documentation processes.",image:gL}),pe.jsx(hd,{title:"Glucose Prediction",content:"Developing predictive models for glucose levels, providing a tool for healthcare providers to better manage diabetes care.",image:_L})]}),backgroundImage:yL},{title:"TUBITAK Support",content:"Our projects are proudly supported by TUBITAK (The Scientific and Technological Research Council of Turkey), which provides crucial funding and resources that enable us to drive forward our innovative research in AI and healthcare.",backgroundImage:SL},{title:"Contact Us",content:pe.jsxs("div",{className:"map",children:[pe.jsx("div",{id:"map"}),pe.jsxs("div",{className:"map-c",children:[pe.jsx("h1",{children:"IKCU AI Lab"}),pe.jsx("p",{children:"Pioneering AI Research in Healthcare at Izmir Katip Celebi University."}),pe.jsxs("div",{className:"det",children:[pe.jsx("i",{className:"fa fa-map-marker"})," Izmir Katip Celebi University, Faculty of Engineering and Architecture, Lab HZ 44"]}),pe.jsxs("div",{className:"det",children:[pe.jsx("i",{className:"fa fa-envelope"})," ",pe.jsx("a",{href:"mailto:ikcuailab@gmail.com",children:"ikcuailab@gmail.com"})]}),pe.jsxs("center",{children:[pe.jsx("button",{className:"fa fa-car"}),pe.jsx("button",{className:"fa fa-envelope"})]})]})]}),backgroundImage:ML}];return Ae.useEffect(()=>{const e=()=>{const n=window.google,i={lat:38.4629,lng:27.2261},r=new n.maps.Map(document.getElementById("map"),{center:i,zoom:12,mapTypeId:n.maps.MapTypeId.ROADMAP});new n.maps.Marker({position:i,map:r})};if(window.google)e();else{const n=document.createElement("script");n.src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY",n.async=!0,n.onload=e,document.head.appendChild(n)}},[]),pe.jsx("div",{className:"about-us-page",children:t.map((e,n)=>pe.jsx(AL,{title:e.title,content:e.content,backgroundImage:e.backgroundImage},n))})}function AL({title:t,content:e,backgroundImage:n}){const i=Ae.useRef(),r=wL(i);return pe.jsx("div",{ref:i,className:`section ${r?"visible":""}`,style:{backgroundImage:`url(${n})`},children:pe.jsxs("div",{className:"section-content",children:[pe.jsx("h2",{children:t}),pe.jsx("div",{className:"section-text",children:e})]})})}function hd({title:t,content:e,image:n}){return pe.jsx("div",{className:"card",style:{backgroundImage:`url(${n})`},children:pe.jsxs("div",{className:"card-overlay",children:[pe.jsx("h3",{className:"card-title",children:t}),pe.jsx("p",{className:"card-content",children:e})]})})}const il={_origin:"https://api.emailjs.com"},CL=(t,e="https://api.emailjs.com")=>{il._userID=t,il._origin=e},Hy=(t,e,n)=>{if(!t)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Uv{constructor(e){this.status=e.status,this.text=e.responseText}}const Vy=(t,e,n={})=>new Promise((i,r)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:o})=>{const a=new Uv(o);a.status===200||a.text==="OK"?i(a):r(a)}),s.addEventListener("error",({target:o})=>{r(new Uv(o))}),s.open("POST",il._origin+t,!0),Object.keys(n).forEach(o=>{s.setRequestHeader(o,n[o])}),s.send(e)}),bL=(t,e,n,i)=>{const r=i||il._userID;return Hy(r,t,e),Vy("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:t,template_id:e,template_params:n}),{"Content-type":"application/json"})},RL=t=>{let e;if(typeof t=="string"?e=document.querySelector(t):e=t,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},PL=(t,e,n,i)=>{const r=i||il._userID,s=RL(n);Hy(r,t,e);const o=new FormData(s);return o.append("lib_version","3.2.0"),o.append("service_id",t),o.append("template_id",e),o.append("user_id",r),Vy("/api/v1.0/email/send-form",o)},LL={init:CL,send:bL,sendForm:PL};function DL(){const[t,e]=Ae.useState({name:"",institution:"",email:"",reason:""}),n=r=>{const{name:s,value:o}=r.target;e({...t,[s]:o})},i=r=>{r.preventDefault(),LL.send("service_tih99ju","template_d2ku5hi",{name:t.name,institution:t.institution,email:t.email,reason:t.reason},"T8wG6kmkFXZEAWSLD").then(s=>{console.log("Email successfully sent!",s.status,s.text),alert("Your request has been submitted successfully!"),e({name:"",institution:"",email:"",reason:""})}).catch(s=>{console.error("Failed to send email. Error: ",s),alert("Failed to submit request. Please try again.")})};return pe.jsx("div",{className:"dataset-page",children:pe.jsxs("div",{className:"dataset-container",children:[pe.jsx("div",{className:"form-container",children:pe.jsxs("form",{onSubmit:i,children:[pe.jsx("h1",{children:"Dataset Request Form"}),pe.jsx("input",{type:"text",name:"name",placeholder:"Name",value:t.name,onChange:n,required:!0}),pe.jsx("input",{type:"text",name:"institution",placeholder:"Institution",value:t.institution,onChange:n,required:!0}),pe.jsx("input",{type:"email",name:"email",placeholder:"Email",value:t.email,onChange:n,required:!0}),pe.jsx("textarea",{name:"reason",placeholder:"Please describe the intended use and objectives for this dataset",value:t.reason,onChange:n,required:!0}),pe.jsx("button",{type:"submit",children:"Submit"})]})}),pe.jsxs("div",{className:"overlay",children:[pe.jsx("img",{src:oy,alt:"IKCU AI Lab Logo",className:"logo"}),pe.jsx("h1",{children:"IKCU AI Lab"}),pe.jsx("p",{children:"Pioneering AI Research in Healthcare"})]})]})})}function IL(){return pe.jsxs("div",{className:"app-wrapper",children:[pe.jsx(a1,{}),pe.jsx("main",{children:pe.jsxs(KT,{children:[pe.jsx(Uc,{path:"/",element:pe.jsx("div",{className:"home-page",children:pe.jsx(pL,{})})}),pe.jsx(Uc,{path:"/about",element:pe.jsx(TL,{})}),pe.jsx(Uc,{path:"/dataset",element:pe.jsx(DL,{})})]})})]})}var NL={exports:{}};/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(t,e){(function(n,i){t.exports=i()})(LE,function(){const n=new Map,i={set(S,l,m){n.has(S)||n.set(S,new Map);const C=n.get(S);C.has(l)||C.size===0?C.set(l,m):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(C.keys())[0]}.`)},get:(S,l)=>n.has(S)&&n.get(S).get(l)||null,remove(S,l){if(!n.has(S))return;const m=n.get(S);m.delete(l),m.size===0&&n.delete(S)}},r="transitionend",s=S=>(S&&window.CSS&&window.CSS.escape&&(S=S.replace(/#([^\s"#']+)/g,(l,m)=>`#${CSS.escape(m)}`)),S),o=S=>{S.dispatchEvent(new Event(r))},a=S=>!(!S||typeof S!="object")&&(S.jquery!==void 0&&(S=S[0]),S.nodeType!==void 0),c=S=>a(S)?S.jquery?S[0]:S:typeof S=="string"&&S.length>0?document.querySelector(s(S)):null,u=S=>{if(!a(S)||S.getClientRects().length===0)return!1;const l=getComputedStyle(S).getPropertyValue("visibility")==="visible",m=S.closest("details:not([open])");if(!m)return l;if(m!==S){const C=S.closest("summary");if(C&&C.parentNode!==m||C===null)return!1}return l},d=S=>!S||S.nodeType!==Node.ELEMENT_NODE||!!S.classList.contains("disabled")||(S.disabled!==void 0?S.disabled:S.hasAttribute("disabled")&&S.getAttribute("disabled")!=="false"),h=S=>{if(!document.documentElement.attachShadow)return null;if(typeof S.getRootNode=="function"){const l=S.getRootNode();return l instanceof ShadowRoot?l:null}return S instanceof ShadowRoot?S:S.parentNode?h(S.parentNode):null},p=()=>{},_=S=>{S.offsetHeight},x=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,M=[],g=()=>document.documentElement.dir==="rtl",f=S=>{var l;l=()=>{const m=x();if(m){const C=S.NAME,k=m.fn[C];m.fn[C]=S.jQueryInterface,m.fn[C].Constructor=S,m.fn[C].noConflict=()=>(m.fn[C]=k,S.jQueryInterface)}},document.readyState==="loading"?(M.length||document.addEventListener("DOMContentLoaded",()=>{for(const m of M)m()}),M.push(l)):l()},v=(S,l=[],m=S)=>typeof S=="function"?S(...l):m,y=(S,l,m=!0)=>{if(!m)return void v(S);const C=(Y=>{if(!Y)return 0;let{transitionDuration:ie,transitionDelay:he}=window.getComputedStyle(Y);const be=Number.parseFloat(ie),De=Number.parseFloat(he);return be||De?(ie=ie.split(",")[0],he=he.split(",")[0],1e3*(Number.parseFloat(ie)+Number.parseFloat(he))):0})(l)+5;let k=!1;const H=({target:Y})=>{Y===l&&(k=!0,l.removeEventListener(r,H),v(S))};l.addEventListener(r,H),setTimeout(()=>{k||o(l)},C)},E=(S,l,m,C)=>{const k=S.length;let H=S.indexOf(l);return H===-1?!m&&C?S[k-1]:S[0]:(H+=m?1:-1,C&&(H=(H+k)%k),S[Math.max(0,Math.min(H,k-1))])},I=/[^.]*(?=\..*)\.|.*/,L=/\..*/,P=/::\d+$/,D={};let b=1;const T={mouseenter:"mouseover",mouseleave:"mouseout"},U=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Z(S,l){return l&&`${l}::${b++}`||S.uidEvent||b++}function $(S){const l=Z(S);return S.uidEvent=l,D[l]=D[l]||{},D[l]}function re(S,l,m=null){return Object.values(S).find(C=>C.callable===l&&C.delegationSelector===m)}function oe(S,l,m){const C=typeof l=="string",k=C?m:l||m;let H=Q(S);return U.has(H)||(H=S),[C,k,H]}function J(S,l,m,C,k){if(typeof l!="string"||!S)return;let[H,Y,ie]=oe(l,m,C);l in T&&(Y=($e=>function(Xe){if(!Xe.relatedTarget||Xe.relatedTarget!==Xe.delegateTarget&&!Xe.delegateTarget.contains(Xe.relatedTarget))return $e.call(this,Xe)})(Y));const he=$(S),be=he[ie]||(he[ie]={}),De=re(be,Y,H?m:null);if(De)return void(De.oneOff=De.oneOff&&k);const Me=Z(Y,l.replace(I,"")),Qe=H?function(He,$e,Xe){return function Ye(At){const Nt=He.querySelectorAll($e);for(let{target:st}=At;st&&st!==this;st=st.parentNode)for(const vt of Nt)if(vt===st)return ge(At,{delegateTarget:st}),Ye.oneOff&&N.off(He,At.type,$e,Xe),Xe.apply(st,[At])}}(S,m,Y):function(He,$e){return function Xe(Ye){return ge(Ye,{delegateTarget:He}),Xe.oneOff&&N.off(He,Ye.type,$e),$e.apply(He,[Ye])}}(S,Y);Qe.delegationSelector=H?m:null,Qe.callable=Y,Qe.oneOff=k,Qe.uidEvent=Me,be[Me]=Qe,S.addEventListener(ie,Qe,H)}function ae(S,l,m,C,k){const H=re(l[m],C,k);H&&(S.removeEventListener(m,H,!!k),delete l[m][H.uidEvent])}function O(S,l,m,C){const k=l[m]||{};for(const[H,Y]of Object.entries(k))H.includes(C)&&ae(S,l,m,Y.callable,Y.delegationSelector)}function Q(S){return S=S.replace(L,""),T[S]||S}const N={on(S,l,m,C){J(S,l,m,C,!1)},one(S,l,m,C){J(S,l,m,C,!0)},off(S,l,m,C){if(typeof l!="string"||!S)return;const[k,H,Y]=oe(l,m,C),ie=Y!==l,he=$(S),be=he[Y]||{},De=l.startsWith(".");if(H===void 0){if(De)for(const Me of Object.keys(he))O(S,he,Me,l.slice(1));for(const[Me,Qe]of Object.entries(be)){const He=Me.replace(P,"");ie&&!l.includes(He)||ae(S,he,Y,Qe.callable,Qe.delegationSelector)}}else{if(!Object.keys(be).length)return;ae(S,he,Y,H,k?m:null)}},trigger(S,l,m){if(typeof l!="string"||!S)return null;const C=x();let k=null,H=!0,Y=!0,ie=!1;l!==Q(l)&&C&&(k=C.Event(l,m),C(S).trigger(k),H=!k.isPropagationStopped(),Y=!k.isImmediatePropagationStopped(),ie=k.isDefaultPrevented());const he=ge(new Event(l,{bubbles:H,cancelable:!0}),m);return ie&&he.preventDefault(),Y&&S.dispatchEvent(he),he.defaultPrevented&&k&&k.preventDefault(),he}};function ge(S,l={}){for(const[m,C]of Object.entries(l))try{S[m]=C}catch{Object.defineProperty(S,m,{configurable:!0,get:()=>C})}return S}function Oe(S){if(S==="true")return!0;if(S==="false")return!1;if(S===Number(S).toString())return Number(S);if(S===""||S==="null")return null;if(typeof S!="string")return S;try{return JSON.parse(decodeURIComponent(S))}catch{return S}}function at(S){return S.replace(/[A-Z]/g,l=>`-${l.toLowerCase()}`)}const q={setDataAttribute(S,l,m){S.setAttribute(`data-bs-${at(l)}`,m)},removeDataAttribute(S,l){S.removeAttribute(`data-bs-${at(l)}`)},getDataAttributes(S){if(!S)return{};const l={},m=Object.keys(S.dataset).filter(C=>C.startsWith("bs")&&!C.startsWith("bsConfig"));for(const C of m){let k=C.replace(/^bs/,"");k=k.charAt(0).toLowerCase()+k.slice(1,k.length),l[k]=Oe(S.dataset[C])}return l},getDataAttribute:(S,l)=>Oe(S.getAttribute(`data-bs-${at(l)}`))};class ce{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(l){return l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l}_mergeConfigObj(l,m){const C=a(m)?q.getDataAttribute(m,"config"):{};return{...this.constructor.Default,...typeof C=="object"?C:{},...a(m)?q.getDataAttributes(m):{},...typeof l=="object"?l:{}}}_typeCheckConfig(l,m=this.constructor.DefaultType){for(const[k,H]of Object.entries(m)){const Y=l[k],ie=a(Y)?"element":(C=Y)==null?`${C}`:Object.prototype.toString.call(C).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(H).test(ie))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${k}" provided type "${ie}" but expected type "${H}".`)}var C}}class ve extends ce{constructor(l,m){super(),(l=c(l))&&(this._element=l,this._config=this._getConfig(m),i.set(this._element,this.constructor.DATA_KEY,this))}dispose(){i.remove(this._element,this.constructor.DATA_KEY),N.off(this._element,this.constructor.EVENT_KEY);for(const l of Object.getOwnPropertyNames(this))this[l]=null}_queueCallback(l,m,C=!0){y(l,m,C)}_getConfig(l){return l=this._mergeConfigObj(l,this._element),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}static getInstance(l){return i.get(c(l),this.DATA_KEY)}static getOrCreateInstance(l,m={}){return this.getInstance(l)||new this(l,typeof m=="object"?m:null)}static get VERSION(){return"5.3.3"}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(l){return`${l}${this.EVENT_KEY}`}}const me=S=>{let l=S.getAttribute("data-bs-target");if(!l||l==="#"){let m=S.getAttribute("href");if(!m||!m.includes("#")&&!m.startsWith("."))return null;m.includes("#")&&!m.startsWith("#")&&(m=`#${m.split("#")[1]}`),l=m&&m!=="#"?m.trim():null}return l?l.split(",").map(m=>s(m)).join(","):null},le={find:(S,l=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(l,S)),findOne:(S,l=document.documentElement)=>Element.prototype.querySelector.call(l,S),children:(S,l)=>[].concat(...S.children).filter(m=>m.matches(l)),parents(S,l){const m=[];let C=S.parentNode.closest(l);for(;C;)m.push(C),C=C.parentNode.closest(l);return m},prev(S,l){let m=S.previousElementSibling;for(;m;){if(m.matches(l))return[m];m=m.previousElementSibling}return[]},next(S,l){let m=S.nextElementSibling;for(;m;){if(m.matches(l))return[m];m=m.nextElementSibling}return[]},focusableChildren(S){const l=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(m=>`${m}:not([tabindex^="-"])`).join(",");return this.find(l,S).filter(m=>!d(m)&&u(m))},getSelectorFromElement(S){const l=me(S);return l&&le.findOne(l)?l:null},getElementFromSelector(S){const l=me(S);return l?le.findOne(l):null},getMultipleElementsFromSelector(S){const l=me(S);return l?le.find(l):[]}},Ge=(S,l="hide")=>{const m=`click.dismiss${S.EVENT_KEY}`,C=S.NAME;N.on(document,m,`[data-bs-dismiss="${C}"]`,function(k){if(["A","AREA"].includes(this.tagName)&&k.preventDefault(),d(this))return;const H=le.getElementFromSelector(this)||this.closest(`.${C}`);S.getOrCreateInstance(H)[l]()})},et=".bs.alert",Ot=`close${et}`,ut=`closed${et}`;class Rt extends ve{static get NAME(){return"alert"}close(){if(N.trigger(this._element,Ot).defaultPrevented)return;this._element.classList.remove("show");const l=this._element.classList.contains("fade");this._queueCallback(()=>this._destroyElement(),this._element,l)}_destroyElement(){this._element.remove(),N.trigger(this._element,ut),this.dispose()}static jQueryInterface(l){return this.each(function(){const m=Rt.getOrCreateInstance(this);if(typeof l=="string"){if(m[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);m[l](this)}})}}Ge(Rt,"close"),f(Rt);const V='[data-bs-toggle="button"]';class on extends ve{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(l){return this.each(function(){const m=on.getOrCreateInstance(this);l==="toggle"&&m[l]()})}}N.on(document,"click.bs.button.data-api",V,S=>{S.preventDefault();const l=S.target.closest(V);on.getOrCreateInstance(l).toggle()}),f(on);const Ze=".bs.swipe",lt=`touchstart${Ze}`,Be=`touchmove${Ze}`,Pt=`touchend${Ze}`,ke=`pointerdown${Ze}`,R=`pointerup${Ze}`,w={endCallback:null,leftCallback:null,rightCallback:null},G={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class te extends ce{constructor(l,m){super(),this._element=l,l&&te.isSupported()&&(this._config=this._getConfig(m),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return w}static get DefaultType(){return G}static get NAME(){return"swipe"}dispose(){N.off(this._element,Ze)}_start(l){this._supportPointerEvents?this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX):this._deltaX=l.touches[0].clientX}_end(l){this._eventIsPointerPenTouch(l)&&(this._deltaX=l.clientX-this._deltaX),this._handleSwipe(),v(this._config.endCallback)}_move(l){this._deltaX=l.touches&&l.touches.length>1?0:l.touches[0].clientX-this._deltaX}_handleSwipe(){const l=Math.abs(this._deltaX);if(l<=40)return;const m=l/this._deltaX;this._deltaX=0,m&&v(m>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(N.on(this._element,ke,l=>this._start(l)),N.on(this._element,R,l=>this._end(l)),this._element.classList.add("pointer-event")):(N.on(this._element,lt,l=>this._start(l)),N.on(this._element,Be,l=>this._move(l)),N.on(this._element,Pt,l=>this._end(l)))}_eventIsPointerPenTouch(l){return this._supportPointerEvents&&(l.pointerType==="pen"||l.pointerType==="touch")}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const se=".bs.carousel",ee=".data-api",Ie="next",_e="prev",we="left",it="right",fe=`slide${se}`,Ce=`slid${se}`,ze=`keydown${se}`,We=`mouseenter${se}`,Pe=`mouseleave${se}`,ct=`dragstart${se}`,Ke=`load${se}${ee}`,wt=`click${se}${ee}`,F="carousel",xe="active",K=".active",ne=".carousel-item",Te=K+ne,Ee={ArrowLeft:it,ArrowRight:we},qe={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Bt={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Ht extends ve{constructor(l,m){super(l,m),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=le.findOne(".carousel-indicators",this._element),this._addEventListeners(),this._config.ride===F&&this.cycle()}static get Default(){return qe}static get DefaultType(){return Bt}static get NAME(){return"carousel"}next(){this._slide(Ie)}nextWhenVisible(){!document.hidden&&u(this._element)&&this.next()}prev(){this._slide(_e)}pause(){this._isSliding&&o(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){this._config.ride&&(this._isSliding?N.one(this._element,Ce,()=>this.cycle()):this.cycle())}to(l){const m=this._getItems();if(l>m.length-1||l<0)return;if(this._isSliding)return void N.one(this._element,Ce,()=>this.to(l));const C=this._getItemIndex(this._getActive());if(C===l)return;const k=l>C?Ie:_e;this._slide(k,m[l])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(l){return l.defaultInterval=l.interval,l}_addEventListeners(){this._config.keyboard&&N.on(this._element,ze,l=>this._keydown(l)),this._config.pause==="hover"&&(N.on(this._element,We,()=>this.pause()),N.on(this._element,Pe,()=>this._maybeEnableCycle())),this._config.touch&&te.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const m of le.find(".carousel-item img",this._element))N.on(m,ct,C=>C.preventDefault());const l={leftCallback:()=>this._slide(this._directionToOrder(we)),rightCallback:()=>this._slide(this._directionToOrder(it)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),500+this._config.interval))}};this._swipeHelper=new te(this._element,l)}_keydown(l){if(/input|textarea/i.test(l.target.tagName))return;const m=Ee[l.key];m&&(l.preventDefault(),this._slide(this._directionToOrder(m)))}_getItemIndex(l){return this._getItems().indexOf(l)}_setActiveIndicatorElement(l){if(!this._indicatorsElement)return;const m=le.findOne(K,this._indicatorsElement);m.classList.remove(xe),m.removeAttribute("aria-current");const C=le.findOne(`[data-bs-slide-to="${l}"]`,this._indicatorsElement);C&&(C.classList.add(xe),C.setAttribute("aria-current","true"))}_updateInterval(){const l=this._activeElement||this._getActive();if(!l)return;const m=Number.parseInt(l.getAttribute("data-bs-interval"),10);this._config.interval=m||this._config.defaultInterval}_slide(l,m=null){if(this._isSliding)return;const C=this._getActive(),k=l===Ie,H=m||E(this._getItems(),C,k,this._config.wrap);if(H===C)return;const Y=this._getItemIndex(H),ie=Me=>N.trigger(this._element,Me,{relatedTarget:H,direction:this._orderToDirection(l),from:this._getItemIndex(C),to:Y});if(ie(fe).defaultPrevented||!C||!H)return;const he=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(Y),this._activeElement=H;const be=k?"carousel-item-start":"carousel-item-end",De=k?"carousel-item-next":"carousel-item-prev";H.classList.add(De),_(H),C.classList.add(be),H.classList.add(be),this._queueCallback(()=>{H.classList.remove(be,De),H.classList.add(xe),C.classList.remove(xe,De,be),this._isSliding=!1,ie(Ce)},C,this._isAnimated()),he&&this.cycle()}_isAnimated(){return this._element.classList.contains("slide")}_getActive(){return le.findOne(Te,this._element)}_getItems(){return le.find(ne,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(l){return g()?l===we?_e:Ie:l===we?Ie:_e}_orderToDirection(l){return g()?l===_e?we:it:l===_e?it:we}static jQueryInterface(l){return this.each(function(){const m=Ht.getOrCreateInstance(this,l);if(typeof l!="number"){if(typeof l=="string"){if(m[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);m[l]()}}else m.to(l)})}}N.on(document,wt,"[data-bs-slide], [data-bs-slide-to]",function(S){const l=le.getElementFromSelector(this);if(!l||!l.classList.contains(F))return;S.preventDefault();const m=Ht.getOrCreateInstance(l),C=this.getAttribute("data-bs-slide-to");return C?(m.to(C),void m._maybeEnableCycle()):q.getDataAttribute(this,"slide")==="next"?(m.next(),void m._maybeEnableCycle()):(m.prev(),void m._maybeEnableCycle())}),N.on(window,Ke,()=>{const S=le.find('[data-bs-ride="carousel"]');for(const l of S)Ht.getOrCreateInstance(l)}),f(Ht);const ft=".bs.collapse",Xn=`show${ft}`,_i=`shown${ft}`,_l=`hide${ft}`,vl=`hidden${ft}`,Gi=`click${ft}.data-api`,is="show",Wi="collapse",rs="collapsing",Ws=`:scope .${Wi} .${Wi}`,Xs='[data-bs-toggle="collapse"]',js={parent:null,toggle:!0},xl={parent:"(null|element)",toggle:"boolean"};class Xi extends ve{constructor(l,m){super(l,m),this._isTransitioning=!1,this._triggerArray=[];const C=le.find(Xs);for(const k of C){const H=le.getSelectorFromElement(k),Y=le.find(H).filter(ie=>ie===this._element);H!==null&&Y.length&&this._triggerArray.push(k)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return js}static get DefaultType(){return xl}static get NAME(){return"collapse"}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let l=[];if(this._config.parent&&(l=this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(k=>k!==this._element).map(k=>Xi.getOrCreateInstance(k,{toggle:!1}))),l.length&&l[0]._isTransitioning||N.trigger(this._element,Xn).defaultPrevented)return;for(const k of l)k.hide();const m=this._getDimension();this._element.classList.remove(Wi),this._element.classList.add(rs),this._element.style[m]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const C=`scroll${m[0].toUpperCase()+m.slice(1)}`;this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(rs),this._element.classList.add(Wi,is),this._element.style[m]="",N.trigger(this._element,_i)},this._element,!0),this._element.style[m]=`${this._element[C]}px`}hide(){if(this._isTransitioning||!this._isShown()||N.trigger(this._element,_l).defaultPrevented)return;const l=this._getDimension();this._element.style[l]=`${this._element.getBoundingClientRect()[l]}px`,_(this._element),this._element.classList.add(rs),this._element.classList.remove(Wi,is);for(const m of this._triggerArray){const C=le.getElementFromSelector(m);C&&!this._isShown(C)&&this._addAriaAndCollapsedClass([m],!1)}this._isTransitioning=!0,this._element.style[l]="",this._queueCallback(()=>{this._isTransitioning=!1,this._element.classList.remove(rs),this._element.classList.add(Wi),N.trigger(this._element,vl)},this._element,!0)}_isShown(l=this._element){return l.classList.contains(is)}_configAfterMerge(l){return l.toggle=!!l.toggle,l.parent=c(l.parent),l}_getDimension(){return this._element.classList.contains("collapse-horizontal")?"width":"height"}_initializeChildren(){if(!this._config.parent)return;const l=this._getFirstLevelChildren(Xs);for(const m of l){const C=le.getElementFromSelector(m);C&&this._addAriaAndCollapsedClass([m],this._isShown(C))}}_getFirstLevelChildren(l){const m=le.find(Ws,this._config.parent);return le.find(l,this._config.parent).filter(C=>!m.includes(C))}_addAriaAndCollapsedClass(l,m){if(l.length)for(const C of l)C.classList.toggle("collapsed",!m),C.setAttribute("aria-expanded",m)}static jQueryInterface(l){const m={};return typeof l=="string"&&/show|hide/.test(l)&&(m.toggle=!1),this.each(function(){const C=Xi.getOrCreateInstance(this,m);if(typeof l=="string"){if(C[l]===void 0)throw new TypeError(`No method named "${l}"`);C[l]()}})}}N.on(document,Gi,Xs,function(S){(S.target.tagName==="A"||S.delegateTarget&&S.delegateTarget.tagName==="A")&&S.preventDefault();for(const l of le.getMultipleElementsFromSelector(this))Xi.getOrCreateInstance(l,{toggle:!1}).toggle()}),f(Xi);var fn="top",wn="bottom",Tn="right",A="left",z="auto",W=[fn,wn,Tn,A],X="start",B="end",de="clippingParents",Se="viewport",Le="popper",Ne="reference",Ve=W.reduce(function(S,l){return S.concat([l+"-"+X,l+"-"+B])},[]),je=[].concat(W,[z]).reduce(function(S,l){return S.concat([l,l+"-"+X,l+"-"+B])},[]),Ue="beforeRead",dt="read",xt="afterRead",Tt="beforeMain",dn="main",pt="afterMain",Fe="beforeWrite",ii="write",mt="afterWrite",In=[Ue,dt,xt,Tt,dn,pt,Fe,ii,mt];function hn(S){return S?(S.nodeName||"").toLowerCase():null}function Lt(S){if(S==null)return window;if(S.toString()!=="[object Window]"){var l=S.ownerDocument;return l&&l.defaultView||window}return S}function jn(S){return S instanceof Lt(S).Element||S instanceof Element}function rt(S){return S instanceof Lt(S).HTMLElement||S instanceof HTMLElement}function Nn(S){return typeof ShadowRoot<"u"&&(S instanceof Lt(S).ShadowRoot||S instanceof ShadowRoot)}const ji={name:"applyStyles",enabled:!0,phase:"write",fn:function(S){var l=S.state;Object.keys(l.elements).forEach(function(m){var C=l.styles[m]||{},k=l.attributes[m]||{},H=l.elements[m];rt(H)&&hn(H)&&(Object.assign(H.style,C),Object.keys(k).forEach(function(Y){var ie=k[Y];ie===!1?H.removeAttribute(Y):H.setAttribute(Y,ie===!0?"":ie)}))})},effect:function(S){var l=S.state,m={popper:{position:l.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(l.elements.popper.style,m.popper),l.styles=m,l.elements.arrow&&Object.assign(l.elements.arrow.style,m.arrow),function(){Object.keys(l.elements).forEach(function(C){var k=l.elements[C],H=l.attributes[C]||{},Y=Object.keys(l.styles.hasOwnProperty(C)?l.styles[C]:m[C]).reduce(function(ie,he){return ie[he]="",ie},{});rt(k)&&hn(k)&&(Object.assign(k.style,Y),Object.keys(H).forEach(function(ie){k.removeAttribute(ie)}))})}},requires:["computeStyles"]};function Vt(S){return S.split("-")[0]}var _n=Math.max,$n=Math.min,$i=Math.round;function ku(){var S=navigator.userAgentData;return S!=null&&S.brands&&Array.isArray(S.brands)?S.brands.map(function(l){return l.brand+"/"+l.version}).join(" "):navigator.userAgent}function nm(){return!/^((?!chrome|android).)*safari/i.test(ku())}function $s(S,l,m){l===void 0&&(l=!1),m===void 0&&(m=!1);var C=S.getBoundingClientRect(),k=1,H=1;l&&rt(S)&&(k=S.offsetWidth>0&&$i(C.width)/S.offsetWidth||1,H=S.offsetHeight>0&&$i(C.height)/S.offsetHeight||1);var Y=(jn(S)?Lt(S):window).visualViewport,ie=!nm()&&m,he=(C.left+(ie&&Y?Y.offsetLeft:0))/k,be=(C.top+(ie&&Y?Y.offsetTop:0))/H,De=C.width/k,Me=C.height/H;return{width:De,height:Me,top:be,right:he+De,bottom:be+Me,left:he,x:he,y:be}}function Bu(S){var l=$s(S),m=S.offsetWidth,C=S.offsetHeight;return Math.abs(l.width-m)<=1&&(m=l.width),Math.abs(l.height-C)<=1&&(C=l.height),{x:S.offsetLeft,y:S.offsetTop,width:m,height:C}}function im(S,l){var m=l.getRootNode&&l.getRootNode();if(S.contains(l))return!0;if(m&&Nn(m)){var C=l;do{if(C&&S.isSameNode(C))return!0;C=C.parentNode||C.host}while(C)}return!1}function Yi(S){return Lt(S).getComputedStyle(S)}function Gy(S){return["table","td","th"].indexOf(hn(S))>=0}function Sr(S){return((jn(S)?S.ownerDocument:S.document)||window.document).documentElement}function yl(S){return hn(S)==="html"?S:S.assignedSlot||S.parentNode||(Nn(S)?S.host:null)||Sr(S)}function rm(S){return rt(S)&&Yi(S).position!=="fixed"?S.offsetParent:null}function ia(S){for(var l=Lt(S),m=rm(S);m&&Gy(m)&&Yi(m).position==="static";)m=rm(m);return m&&(hn(m)==="html"||hn(m)==="body"&&Yi(m).position==="static")?l:m||function(C){var k=/firefox/i.test(ku());if(/Trident/i.test(ku())&&rt(C)&&Yi(C).position==="fixed")return null;var H=yl(C);for(Nn(H)&&(H=H.host);rt(H)&&["html","body"].indexOf(hn(H))<0;){var Y=Yi(H);if(Y.transform!=="none"||Y.perspective!=="none"||Y.contain==="paint"||["transform","perspective"].indexOf(Y.willChange)!==-1||k&&Y.willChange==="filter"||k&&Y.filter&&Y.filter!=="none")return H;H=H.parentNode}return null}(S)||l}function zu(S){return["top","bottom"].indexOf(S)>=0?"x":"y"}function ra(S,l,m){return _n(S,$n(l,m))}function sm(S){return Object.assign({},{top:0,right:0,bottom:0,left:0},S)}function om(S,l){return l.reduce(function(m,C){return m[C]=S,m},{})}const am={name:"arrow",enabled:!0,phase:"main",fn:function(S){var l,m=S.state,C=S.name,k=S.options,H=m.elements.arrow,Y=m.modifiersData.popperOffsets,ie=Vt(m.placement),he=zu(ie),be=[A,Tn].indexOf(ie)>=0?"height":"width";if(H&&Y){var De=function(Ct,St){return sm(typeof(Ct=typeof Ct=="function"?Ct(Object.assign({},St.rects,{placement:St.placement})):Ct)!="number"?Ct:om(Ct,W))}(k.padding,m),Me=Bu(H),Qe=he==="y"?fn:A,He=he==="y"?wn:Tn,$e=m.rects.reference[be]+m.rects.reference[he]-Y[he]-m.rects.popper[be],Xe=Y[he]-m.rects.reference[he],Ye=ia(H),At=Ye?he==="y"?Ye.clientHeight||0:Ye.clientWidth||0:0,Nt=$e/2-Xe/2,st=De[Qe],vt=At-Me[be]-De[He],tt=At/2-Me[be]/2+Nt,ht=ra(st,tt,vt),yt=he;m.modifiersData[C]=((l={})[yt]=ht,l.centerOffset=ht-tt,l)}},effect:function(S){var l=S.state,m=S.options.element,C=m===void 0?"[data-popper-arrow]":m;C!=null&&(typeof C!="string"||(C=l.elements.popper.querySelector(C)))&&im(l.elements.popper,C)&&(l.elements.arrow=C)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ys(S){return S.split("-")[1]}var Wy={top:"auto",right:"auto",bottom:"auto",left:"auto"};function lm(S){var l,m=S.popper,C=S.popperRect,k=S.placement,H=S.variation,Y=S.offsets,ie=S.position,he=S.gpuAcceleration,be=S.adaptive,De=S.roundOffsets,Me=S.isFixed,Qe=Y.x,He=Qe===void 0?0:Qe,$e=Y.y,Xe=$e===void 0?0:$e,Ye=typeof De=="function"?De({x:He,y:Xe}):{x:He,y:Xe};He=Ye.x,Xe=Ye.y;var At=Y.hasOwnProperty("x"),Nt=Y.hasOwnProperty("y"),st=A,vt=fn,tt=window;if(be){var ht=ia(m),yt="clientHeight",Ct="clientWidth";ht===Lt(m)&&Yi(ht=Sr(m)).position!=="static"&&ie==="absolute"&&(yt="scrollHeight",Ct="scrollWidth"),(k===fn||(k===A||k===Tn)&&H===B)&&(vt=wn,Xe-=(Me&&ht===tt&&tt.visualViewport?tt.visualViewport.height:ht[yt])-C.height,Xe*=he?1:-1),k!==A&&(k!==fn&&k!==wn||H!==B)||(st=Tn,He-=(Me&&ht===tt&&tt.visualViewport?tt.visualViewport.width:ht[Ct])-C.width,He*=he?1:-1)}var St,Yt=Object.assign({position:ie},be&&Wy),Yn=De===!0?function(xi,An){var si=xi.x,oi=xi.y,jt=An.devicePixelRatio||1;return{x:$i(si*jt)/jt||0,y:$i(oi*jt)/jt||0}}({x:He,y:Xe},Lt(m)):{x:He,y:Xe};return He=Yn.x,Xe=Yn.y,he?Object.assign({},Yt,((St={})[vt]=Nt?"0":"",St[st]=At?"0":"",St.transform=(tt.devicePixelRatio||1)<=1?"translate("+He+"px, "+Xe+"px)":"translate3d("+He+"px, "+Xe+"px, 0)",St)):Object.assign({},Yt,((l={})[vt]=Nt?Xe+"px":"",l[st]=At?He+"px":"",l.transform="",l))}const Hu={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(S){var l=S.state,m=S.options,C=m.gpuAcceleration,k=C===void 0||C,H=m.adaptive,Y=H===void 0||H,ie=m.roundOffsets,he=ie===void 0||ie,be={placement:Vt(l.placement),variation:Ys(l.placement),popper:l.elements.popper,popperRect:l.rects.popper,gpuAcceleration:k,isFixed:l.options.strategy==="fixed"};l.modifiersData.popperOffsets!=null&&(l.styles.popper=Object.assign({},l.styles.popper,lm(Object.assign({},be,{offsets:l.modifiersData.popperOffsets,position:l.options.strategy,adaptive:Y,roundOffsets:he})))),l.modifiersData.arrow!=null&&(l.styles.arrow=Object.assign({},l.styles.arrow,lm(Object.assign({},be,{offsets:l.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:he})))),l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-placement":l.placement})},data:{}};var Sl={passive:!0};const Vu={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(S){var l=S.state,m=S.instance,C=S.options,k=C.scroll,H=k===void 0||k,Y=C.resize,ie=Y===void 0||Y,he=Lt(l.elements.popper),be=[].concat(l.scrollParents.reference,l.scrollParents.popper);return H&&be.forEach(function(De){De.addEventListener("scroll",m.update,Sl)}),ie&&he.addEventListener("resize",m.update,Sl),function(){H&&be.forEach(function(De){De.removeEventListener("scroll",m.update,Sl)}),ie&&he.removeEventListener("resize",m.update,Sl)}},data:{}};var Xy={left:"right",right:"left",bottom:"top",top:"bottom"};function El(S){return S.replace(/left|right|bottom|top/g,function(l){return Xy[l]})}var jy={start:"end",end:"start"};function cm(S){return S.replace(/start|end/g,function(l){return jy[l]})}function Gu(S){var l=Lt(S);return{scrollLeft:l.pageXOffset,scrollTop:l.pageYOffset}}function Wu(S){return $s(Sr(S)).left+Gu(S).scrollLeft}function Xu(S){var l=Yi(S),m=l.overflow,C=l.overflowX,k=l.overflowY;return/auto|scroll|overlay|hidden/.test(m+k+C)}function um(S){return["html","body","#document"].indexOf(hn(S))>=0?S.ownerDocument.body:rt(S)&&Xu(S)?S:um(yl(S))}function sa(S,l){var m;l===void 0&&(l=[]);var C=um(S),k=C===((m=S.ownerDocument)==null?void 0:m.body),H=Lt(C),Y=k?[H].concat(H.visualViewport||[],Xu(C)?C:[]):C,ie=l.concat(Y);return k?ie:ie.concat(sa(yl(Y)))}function ju(S){return Object.assign({},S,{left:S.x,top:S.y,right:S.x+S.width,bottom:S.y+S.height})}function fm(S,l,m){return l===Se?ju(function(C,k){var H=Lt(C),Y=Sr(C),ie=H.visualViewport,he=Y.clientWidth,be=Y.clientHeight,De=0,Me=0;if(ie){he=ie.width,be=ie.height;var Qe=nm();(Qe||!Qe&&k==="fixed")&&(De=ie.offsetLeft,Me=ie.offsetTop)}return{width:he,height:be,x:De+Wu(C),y:Me}}(S,m)):jn(l)?function(C,k){var H=$s(C,!1,k==="fixed");return H.top=H.top+C.clientTop,H.left=H.left+C.clientLeft,H.bottom=H.top+C.clientHeight,H.right=H.left+C.clientWidth,H.width=C.clientWidth,H.height=C.clientHeight,H.x=H.left,H.y=H.top,H}(l,m):ju(function(C){var k,H=Sr(C),Y=Gu(C),ie=(k=C.ownerDocument)==null?void 0:k.body,he=_n(H.scrollWidth,H.clientWidth,ie?ie.scrollWidth:0,ie?ie.clientWidth:0),be=_n(H.scrollHeight,H.clientHeight,ie?ie.scrollHeight:0,ie?ie.clientHeight:0),De=-Y.scrollLeft+Wu(C),Me=-Y.scrollTop;return Yi(ie||H).direction==="rtl"&&(De+=_n(H.clientWidth,ie?ie.clientWidth:0)-he),{width:he,height:be,x:De,y:Me}}(Sr(S)))}function dm(S){var l,m=S.reference,C=S.element,k=S.placement,H=k?Vt(k):null,Y=k?Ys(k):null,ie=m.x+m.width/2-C.width/2,he=m.y+m.height/2-C.height/2;switch(H){case fn:l={x:ie,y:m.y-C.height};break;case wn:l={x:ie,y:m.y+m.height};break;case Tn:l={x:m.x+m.width,y:he};break;case A:l={x:m.x-C.width,y:he};break;default:l={x:m.x,y:m.y}}var be=H?zu(H):null;if(be!=null){var De=be==="y"?"height":"width";switch(Y){case X:l[be]=l[be]-(m[De]/2-C[De]/2);break;case B:l[be]=l[be]+(m[De]/2-C[De]/2)}}return l}function qs(S,l){l===void 0&&(l={});var m=l,C=m.placement,k=C===void 0?S.placement:C,H=m.strategy,Y=H===void 0?S.strategy:H,ie=m.boundary,he=ie===void 0?de:ie,be=m.rootBoundary,De=be===void 0?Se:be,Me=m.elementContext,Qe=Me===void 0?Le:Me,He=m.altBoundary,$e=He!==void 0&&He,Xe=m.padding,Ye=Xe===void 0?0:Xe,At=sm(typeof Ye!="number"?Ye:om(Ye,W)),Nt=Qe===Le?Ne:Le,st=S.rects.popper,vt=S.elements[$e?Nt:Qe],tt=function(An,si,oi,jt){var Ni=si==="clippingParents"?function(Dt){var Cn=sa(yl(Dt)),ai=["absolute","fixed"].indexOf(Yi(Dt).position)>=0&&rt(Dt)?ia(Dt):Dt;return jn(ai)?Cn.filter(function(Mr){return jn(Mr)&&im(Mr,ai)&&hn(Mr)!=="body"}):[]}(An):[].concat(si),Ui=[].concat(Ni,[oi]),Qs=Ui[0],an=Ui.reduce(function(Dt,Cn){var ai=fm(An,Cn,jt);return Dt.top=_n(ai.top,Dt.top),Dt.right=$n(ai.right,Dt.right),Dt.bottom=$n(ai.bottom,Dt.bottom),Dt.left=_n(ai.left,Dt.left),Dt},fm(An,Qs,jt));return an.width=an.right-an.left,an.height=an.bottom-an.top,an.x=an.left,an.y=an.top,an}(jn(vt)?vt:vt.contextElement||Sr(S.elements.popper),he,De,Y),ht=$s(S.elements.reference),yt=dm({reference:ht,element:st,strategy:"absolute",placement:k}),Ct=ju(Object.assign({},st,yt)),St=Qe===Le?Ct:ht,Yt={top:tt.top-St.top+At.top,bottom:St.bottom-tt.bottom+At.bottom,left:tt.left-St.left+At.left,right:St.right-tt.right+At.right},Yn=S.modifiersData.offset;if(Qe===Le&&Yn){var xi=Yn[k];Object.keys(Yt).forEach(function(An){var si=[Tn,wn].indexOf(An)>=0?1:-1,oi=[fn,wn].indexOf(An)>=0?"y":"x";Yt[An]+=xi[oi]*si})}return Yt}function $y(S,l){l===void 0&&(l={});var m=l,C=m.placement,k=m.boundary,H=m.rootBoundary,Y=m.padding,ie=m.flipVariations,he=m.allowedAutoPlacements,be=he===void 0?je:he,De=Ys(C),Me=De?ie?Ve:Ve.filter(function($e){return Ys($e)===De}):W,Qe=Me.filter(function($e){return be.indexOf($e)>=0});Qe.length===0&&(Qe=Me);var He=Qe.reduce(function($e,Xe){return $e[Xe]=qs(S,{placement:Xe,boundary:k,rootBoundary:H,padding:Y})[Vt(Xe)],$e},{});return Object.keys(He).sort(function($e,Xe){return He[$e]-He[Xe]})}const hm={name:"flip",enabled:!0,phase:"main",fn:function(S){var l=S.state,m=S.options,C=S.name;if(!l.modifiersData[C]._skip){for(var k=m.mainAxis,H=k===void 0||k,Y=m.altAxis,ie=Y===void 0||Y,he=m.fallbackPlacements,be=m.padding,De=m.boundary,Me=m.rootBoundary,Qe=m.altBoundary,He=m.flipVariations,$e=He===void 0||He,Xe=m.allowedAutoPlacements,Ye=l.options.placement,At=Vt(Ye),Nt=he||(At!==Ye&&$e?function(Dt){if(Vt(Dt)===z)return[];var Cn=El(Dt);return[cm(Dt),Cn,cm(Cn)]}(Ye):[El(Ye)]),st=[Ye].concat(Nt).reduce(function(Dt,Cn){return Dt.concat(Vt(Cn)===z?$y(l,{placement:Cn,boundary:De,rootBoundary:Me,padding:be,flipVariations:$e,allowedAutoPlacements:Xe}):Cn)},[]),vt=l.rects.reference,tt=l.rects.popper,ht=new Map,yt=!0,Ct=st[0],St=0;St<st.length;St++){var Yt=st[St],Yn=Vt(Yt),xi=Ys(Yt)===X,An=[fn,wn].indexOf(Yn)>=0,si=An?"width":"height",oi=qs(l,{placement:Yt,boundary:De,rootBoundary:Me,altBoundary:Qe,padding:be}),jt=An?xi?Tn:A:xi?wn:fn;vt[si]>tt[si]&&(jt=El(jt));var Ni=El(jt),Ui=[];if(H&&Ui.push(oi[Yn]<=0),ie&&Ui.push(oi[jt]<=0,oi[Ni]<=0),Ui.every(function(Dt){return Dt})){Ct=Yt,yt=!1;break}ht.set(Yt,Ui)}if(yt)for(var Qs=function(Dt){var Cn=st.find(function(ai){var Mr=ht.get(ai);if(Mr)return Mr.slice(0,Dt).every(function(Ll){return Ll})});if(Cn)return Ct=Cn,"break"},an=$e?3:1;an>0&&Qs(an)!=="break";an--);l.placement!==Ct&&(l.modifiersData[C]._skip=!0,l.placement=Ct,l.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function pm(S,l,m){return m===void 0&&(m={x:0,y:0}),{top:S.top-l.height-m.y,right:S.right-l.width+m.x,bottom:S.bottom-l.height+m.y,left:S.left-l.width-m.x}}function mm(S){return[fn,Tn,wn,A].some(function(l){return S[l]>=0})}const gm={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(S){var l=S.state,m=S.name,C=l.rects.reference,k=l.rects.popper,H=l.modifiersData.preventOverflow,Y=qs(l,{elementContext:"reference"}),ie=qs(l,{altBoundary:!0}),he=pm(Y,C),be=pm(ie,k,H),De=mm(he),Me=mm(be);l.modifiersData[m]={referenceClippingOffsets:he,popperEscapeOffsets:be,isReferenceHidden:De,hasPopperEscaped:Me},l.attributes.popper=Object.assign({},l.attributes.popper,{"data-popper-reference-hidden":De,"data-popper-escaped":Me})}},_m={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(S){var l=S.state,m=S.options,C=S.name,k=m.offset,H=k===void 0?[0,0]:k,Y=je.reduce(function(De,Me){return De[Me]=function(Qe,He,$e){var Xe=Vt(Qe),Ye=[A,fn].indexOf(Xe)>=0?-1:1,At=typeof $e=="function"?$e(Object.assign({},He,{placement:Qe})):$e,Nt=At[0],st=At[1];return Nt=Nt||0,st=(st||0)*Ye,[A,Tn].indexOf(Xe)>=0?{x:st,y:Nt}:{x:Nt,y:st}}(Me,l.rects,H),De},{}),ie=Y[l.placement],he=ie.x,be=ie.y;l.modifiersData.popperOffsets!=null&&(l.modifiersData.popperOffsets.x+=he,l.modifiersData.popperOffsets.y+=be),l.modifiersData[C]=Y}},$u={name:"popperOffsets",enabled:!0,phase:"read",fn:function(S){var l=S.state,m=S.name;l.modifiersData[m]=dm({reference:l.rects.reference,element:l.rects.popper,strategy:"absolute",placement:l.placement})},data:{}},vm={name:"preventOverflow",enabled:!0,phase:"main",fn:function(S){var l=S.state,m=S.options,C=S.name,k=m.mainAxis,H=k===void 0||k,Y=m.altAxis,ie=Y!==void 0&&Y,he=m.boundary,be=m.rootBoundary,De=m.altBoundary,Me=m.padding,Qe=m.tether,He=Qe===void 0||Qe,$e=m.tetherOffset,Xe=$e===void 0?0:$e,Ye=qs(l,{boundary:he,rootBoundary:be,padding:Me,altBoundary:De}),At=Vt(l.placement),Nt=Ys(l.placement),st=!Nt,vt=zu(At),tt=vt==="x"?"y":"x",ht=l.modifiersData.popperOffsets,yt=l.rects.reference,Ct=l.rects.popper,St=typeof Xe=="function"?Xe(Object.assign({},l.rects,{placement:l.placement})):Xe,Yt=typeof St=="number"?{mainAxis:St,altAxis:St}:Object.assign({mainAxis:0,altAxis:0},St),Yn=l.modifiersData.offset?l.modifiersData.offset[l.placement]:null,xi={x:0,y:0};if(ht){if(H){var An,si=vt==="y"?fn:A,oi=vt==="y"?wn:Tn,jt=vt==="y"?"height":"width",Ni=ht[vt],Ui=Ni+Ye[si],Qs=Ni-Ye[oi],an=He?-Ct[jt]/2:0,Dt=Nt===X?yt[jt]:Ct[jt],Cn=Nt===X?-Ct[jt]:-yt[jt],ai=l.elements.arrow,Mr=He&&ai?Bu(ai):{width:0,height:0},Ll=l.modifiersData["arrow#persistent"]?l.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},rg=Ll[si],sg=Ll[oi],Dl=ra(0,yt[jt],Mr[jt]),EE=st?yt[jt]/2-an-Dl-rg-Yt.mainAxis:Dt-Dl-rg-Yt.mainAxis,ME=st?-yt[jt]/2+an+Dl+sg+Yt.mainAxis:Cn+Dl+sg+Yt.mainAxis,af=l.elements.arrow&&ia(l.elements.arrow),wE=af?vt==="y"?af.clientTop||0:af.clientLeft||0:0,og=(An=Yn==null?void 0:Yn[vt])!=null?An:0,TE=Ni+ME-og,ag=ra(He?$n(Ui,Ni+EE-og-wE):Ui,Ni,He?_n(Qs,TE):Qs);ht[vt]=ag,xi[vt]=ag-Ni}if(ie){var lg,AE=vt==="x"?fn:A,CE=vt==="x"?wn:Tn,ds=ht[tt],Il=tt==="y"?"height":"width",cg=ds+Ye[AE],ug=ds-Ye[CE],lf=[fn,A].indexOf(At)!==-1,fg=(lg=Yn==null?void 0:Yn[tt])!=null?lg:0,dg=lf?cg:ds-yt[Il]-Ct[Il]-fg+Yt.altAxis,hg=lf?ds+yt[Il]+Ct[Il]-fg-Yt.altAxis:ug,pg=He&&lf?function(bE,RE,cf){var mg=ra(bE,RE,cf);return mg>cf?cf:mg}(dg,ds,hg):ra(He?dg:cg,ds,He?hg:ug);ht[tt]=pg,xi[tt]=pg-ds}l.modifiersData[C]=xi}},requiresIfExists:["offset"]};function Yy(S,l,m){m===void 0&&(m=!1);var C,k,H=rt(l),Y=rt(l)&&function(Me){var Qe=Me.getBoundingClientRect(),He=$i(Qe.width)/Me.offsetWidth||1,$e=$i(Qe.height)/Me.offsetHeight||1;return He!==1||$e!==1}(l),ie=Sr(l),he=$s(S,Y,m),be={scrollLeft:0,scrollTop:0},De={x:0,y:0};return(H||!H&&!m)&&((hn(l)!=="body"||Xu(ie))&&(be=(C=l)!==Lt(C)&&rt(C)?{scrollLeft:(k=C).scrollLeft,scrollTop:k.scrollTop}:Gu(C)),rt(l)?((De=$s(l,!0)).x+=l.clientLeft,De.y+=l.clientTop):ie&&(De.x=Wu(ie))),{x:he.left+be.scrollLeft-De.x,y:he.top+be.scrollTop-De.y,width:he.width,height:he.height}}function qy(S){var l=new Map,m=new Set,C=[];function k(H){m.add(H.name),[].concat(H.requires||[],H.requiresIfExists||[]).forEach(function(Y){if(!m.has(Y)){var ie=l.get(Y);ie&&k(ie)}}),C.push(H)}return S.forEach(function(H){l.set(H.name,H)}),S.forEach(function(H){m.has(H.name)||k(H)}),C}var xm={placement:"bottom",modifiers:[],strategy:"absolute"};function ym(){for(var S=arguments.length,l=new Array(S),m=0;m<S;m++)l[m]=arguments[m];return!l.some(function(C){return!(C&&typeof C.getBoundingClientRect=="function")})}function Ml(S){S===void 0&&(S={});var l=S,m=l.defaultModifiers,C=m===void 0?[]:m,k=l.defaultOptions,H=k===void 0?xm:k;return function(Y,ie,he){he===void 0&&(he=H);var be,De,Me={placement:"bottom",orderedModifiers:[],options:Object.assign({},xm,H),modifiersData:{},elements:{reference:Y,popper:ie},attributes:{},styles:{}},Qe=[],He=!1,$e={state:Me,setOptions:function(Ye){var At=typeof Ye=="function"?Ye(Me.options):Ye;Xe(),Me.options=Object.assign({},H,Me.options,At),Me.scrollParents={reference:jn(Y)?sa(Y):Y.contextElement?sa(Y.contextElement):[],popper:sa(ie)};var Nt,st,vt=function(tt){var ht=qy(tt);return In.reduce(function(yt,Ct){return yt.concat(ht.filter(function(St){return St.phase===Ct}))},[])}((Nt=[].concat(C,Me.options.modifiers),st=Nt.reduce(function(tt,ht){var yt=tt[ht.name];return tt[ht.name]=yt?Object.assign({},yt,ht,{options:Object.assign({},yt.options,ht.options),data:Object.assign({},yt.data,ht.data)}):ht,tt},{}),Object.keys(st).map(function(tt){return st[tt]})));return Me.orderedModifiers=vt.filter(function(tt){return tt.enabled}),Me.orderedModifiers.forEach(function(tt){var ht=tt.name,yt=tt.options,Ct=yt===void 0?{}:yt,St=tt.effect;if(typeof St=="function"){var Yt=St({state:Me,name:ht,instance:$e,options:Ct});Qe.push(Yt||function(){})}}),$e.update()},forceUpdate:function(){if(!He){var Ye=Me.elements,At=Ye.reference,Nt=Ye.popper;if(ym(At,Nt)){Me.rects={reference:Yy(At,ia(Nt),Me.options.strategy==="fixed"),popper:Bu(Nt)},Me.reset=!1,Me.placement=Me.options.placement,Me.orderedModifiers.forEach(function(St){return Me.modifiersData[St.name]=Object.assign({},St.data)});for(var st=0;st<Me.orderedModifiers.length;st++)if(Me.reset!==!0){var vt=Me.orderedModifiers[st],tt=vt.fn,ht=vt.options,yt=ht===void 0?{}:ht,Ct=vt.name;typeof tt=="function"&&(Me=tt({state:Me,options:yt,name:Ct,instance:$e})||Me)}else Me.reset=!1,st=-1}}},update:(be=function(){return new Promise(function(Ye){$e.forceUpdate(),Ye(Me)})},function(){return De||(De=new Promise(function(Ye){Promise.resolve().then(function(){De=void 0,Ye(be())})})),De}),destroy:function(){Xe(),He=!0}};if(!ym(Y,ie))return $e;function Xe(){Qe.forEach(function(Ye){return Ye()}),Qe=[]}return $e.setOptions(he).then(function(Ye){!He&&he.onFirstUpdate&&he.onFirstUpdate(Ye)}),$e}}var Ky=Ml(),Zy=Ml({defaultModifiers:[Vu,$u,Hu,ji]}),Yu=Ml({defaultModifiers:[Vu,$u,Hu,ji,_m,hm,vm,am,gm]});const Sm=Object.freeze(Object.defineProperty({__proto__:null,afterMain:pt,afterRead:xt,afterWrite:mt,applyStyles:ji,arrow:am,auto:z,basePlacements:W,beforeMain:Tt,beforeRead:Ue,beforeWrite:Fe,bottom:wn,clippingParents:de,computeStyles:Hu,createPopper:Yu,createPopperBase:Ky,createPopperLite:Zy,detectOverflow:qs,end:B,eventListeners:Vu,flip:hm,hide:gm,left:A,main:dn,modifierPhases:In,offset:_m,placements:je,popper:Le,popperGenerator:Ml,popperOffsets:$u,preventOverflow:vm,read:dt,reference:Ne,right:Tn,start:X,top:fn,variationPlacements:Ve,viewport:Se,write:ii},Symbol.toStringTag,{value:"Module"})),Em="dropdown",ss=".bs.dropdown",qu=".data-api",Qy="ArrowUp",Mm="ArrowDown",Jy=`hide${ss}`,eS=`hidden${ss}`,tS=`show${ss}`,nS=`shown${ss}`,wm=`click${ss}${qu}`,Tm=`keydown${ss}${qu}`,iS=`keyup${ss}${qu}`,Ks="show",os='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',rS=`${os}.${Ks}`,wl=".dropdown-menu",sS=g()?"top-end":"top-start",oS=g()?"top-start":"top-end",aS=g()?"bottom-end":"bottom-start",lS=g()?"bottom-start":"bottom-end",cS=g()?"left-start":"right-start",uS=g()?"right-start":"left-start",fS={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},dS={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class vi extends ve{constructor(l,m){super(l,m),this._popper=null,this._parent=this._element.parentNode,this._menu=le.next(this._element,wl)[0]||le.prev(this._element,wl)[0]||le.findOne(wl,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return fS}static get DefaultType(){return dS}static get NAME(){return Em}toggle(){return this._isShown()?this.hide():this.show()}show(){if(d(this._element)||this._isShown())return;const l={relatedTarget:this._element};if(!N.trigger(this._element,tS,l).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(".navbar-nav"))for(const m of[].concat(...document.body.children))N.on(m,"mouseover",p);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ks),this._element.classList.add(Ks),N.trigger(this._element,nS,l)}}hide(){if(d(this._element)||!this._isShown())return;const l={relatedTarget:this._element};this._completeHide(l)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(l){if(!N.trigger(this._element,Jy,l).defaultPrevented){if("ontouchstart"in document.documentElement)for(const m of[].concat(...document.body.children))N.off(m,"mouseover",p);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ks),this._element.classList.remove(Ks),this._element.setAttribute("aria-expanded","false"),q.removeDataAttribute(this._menu,"popper"),N.trigger(this._element,eS,l)}}_getConfig(l){if(typeof(l=super._getConfig(l)).reference=="object"&&!a(l.reference)&&typeof l.reference.getBoundingClientRect!="function")throw new TypeError(`${Em.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return l}_createPopper(){if(Sm===void 0)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let l=this._element;this._config.reference==="parent"?l=this._parent:a(this._config.reference)?l=c(this._config.reference):typeof this._config.reference=="object"&&(l=this._config.reference);const m=this._getPopperConfig();this._popper=Yu(l,this._menu,m)}_isShown(){return this._menu.classList.contains(Ks)}_getPlacement(){const l=this._parent;if(l.classList.contains("dropend"))return cS;if(l.classList.contains("dropstart"))return uS;if(l.classList.contains("dropup-center"))return"top";if(l.classList.contains("dropdown-center"))return"bottom";const m=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return l.classList.contains("dropup")?m?oS:sS:m?lS:aS}_detectNavbar(){return this._element.closest(".navbar")!==null}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(m=>Number.parseInt(m,10)):typeof l=="function"?m=>l(m,this._element):l}_getPopperConfig(){const l={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(q.setDataAttribute(this._menu,"popper","static"),l.modifiers=[{name:"applyStyles",enabled:!1}]),{...l,...v(this._config.popperConfig,[l])}}_selectMenuItem({key:l,target:m}){const C=le.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(k=>u(k));C.length&&E(C,m,l===Mm,!C.includes(m)).focus()}static jQueryInterface(l){return this.each(function(){const m=vi.getOrCreateInstance(this,l);if(typeof l=="string"){if(m[l]===void 0)throw new TypeError(`No method named "${l}"`);m[l]()}})}static clearMenus(l){if(l.button===2||l.type==="keyup"&&l.key!=="Tab")return;const m=le.find(rS);for(const C of m){const k=vi.getInstance(C);if(!k||k._config.autoClose===!1)continue;const H=l.composedPath(),Y=H.includes(k._menu);if(H.includes(k._element)||k._config.autoClose==="inside"&&!Y||k._config.autoClose==="outside"&&Y||k._menu.contains(l.target)&&(l.type==="keyup"&&l.key==="Tab"||/input|select|option|textarea|form/i.test(l.target.tagName)))continue;const ie={relatedTarget:k._element};l.type==="click"&&(ie.clickEvent=l),k._completeHide(ie)}}static dataApiKeydownHandler(l){const m=/input|textarea/i.test(l.target.tagName),C=l.key==="Escape",k=[Qy,Mm].includes(l.key);if(!k&&!C||m&&!C)return;l.preventDefault();const H=this.matches(os)?this:le.prev(this,os)[0]||le.next(this,os)[0]||le.findOne(os,l.delegateTarget.parentNode),Y=vi.getOrCreateInstance(H);if(k)return l.stopPropagation(),Y.show(),void Y._selectMenuItem(l);Y._isShown()&&(l.stopPropagation(),Y.hide(),H.focus())}}N.on(document,Tm,os,vi.dataApiKeydownHandler),N.on(document,Tm,wl,vi.dataApiKeydownHandler),N.on(document,wm,vi.clearMenus),N.on(document,iS,vi.clearMenus),N.on(document,wm,os,function(S){S.preventDefault(),vi.getOrCreateInstance(this).toggle()}),f(vi);const Am="backdrop",Cm="show",bm=`mousedown.bs.${Am}`,hS={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},pS={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class Rm extends ce{constructor(l){super(),this._config=this._getConfig(l),this._isAppended=!1,this._element=null}static get Default(){return hS}static get DefaultType(){return pS}static get NAME(){return Am}show(l){if(!this._config.isVisible)return void v(l);this._append();const m=this._getElement();this._config.isAnimated&&_(m),m.classList.add(Cm),this._emulateAnimation(()=>{v(l)})}hide(l){this._config.isVisible?(this._getElement().classList.remove(Cm),this._emulateAnimation(()=>{this.dispose(),v(l)})):v(l)}dispose(){this._isAppended&&(N.off(this._element,bm),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const l=document.createElement("div");l.className=this._config.className,this._config.isAnimated&&l.classList.add("fade"),this._element=l}return this._element}_configAfterMerge(l){return l.rootElement=c(l.rootElement),l}_append(){if(this._isAppended)return;const l=this._getElement();this._config.rootElement.append(l),N.on(l,bm,()=>{v(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(l){y(l,this._getElement(),this._config.isAnimated)}}const Tl=".bs.focustrap",mS=`focusin${Tl}`,gS=`keydown.tab${Tl}`,Pm="backward",_S={autofocus:!0,trapElement:null},vS={autofocus:"boolean",trapElement:"element"};class Lm extends ce{constructor(l){super(),this._config=this._getConfig(l),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return _S}static get DefaultType(){return vS}static get NAME(){return"focustrap"}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),N.off(document,Tl),N.on(document,mS,l=>this._handleFocusin(l)),N.on(document,gS,l=>this._handleKeydown(l)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,N.off(document,Tl))}_handleFocusin(l){const{trapElement:m}=this._config;if(l.target===document||l.target===m||m.contains(l.target))return;const C=le.focusableChildren(m);C.length===0?m.focus():this._lastTabNavDirection===Pm?C[C.length-1].focus():C[0].focus()}_handleKeydown(l){l.key==="Tab"&&(this._lastTabNavDirection=l.shiftKey?Pm:"forward")}}const Dm=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Im=".sticky-top",Al="padding-right",Nm="margin-right";class Ku{constructor(){this._element=document.body}getWidth(){const l=document.documentElement.clientWidth;return Math.abs(window.innerWidth-l)}hide(){const l=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Al,m=>m+l),this._setElementAttributes(Dm,Al,m=>m+l),this._setElementAttributes(Im,Nm,m=>m-l)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Al),this._resetElementAttributes(Dm,Al),this._resetElementAttributes(Im,Nm)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(l,m,C){const k=this.getWidth();this._applyManipulationCallback(l,H=>{if(H!==this._element&&window.innerWidth>H.clientWidth+k)return;this._saveInitialAttribute(H,m);const Y=window.getComputedStyle(H).getPropertyValue(m);H.style.setProperty(m,`${C(Number.parseFloat(Y))}px`)})}_saveInitialAttribute(l,m){const C=l.style.getPropertyValue(m);C&&q.setDataAttribute(l,m,C)}_resetElementAttributes(l,m){this._applyManipulationCallback(l,C=>{const k=q.getDataAttribute(C,m);k!==null?(q.removeDataAttribute(C,m),C.style.setProperty(m,k)):C.style.removeProperty(m)})}_applyManipulationCallback(l,m){if(a(l))m(l);else for(const C of le.find(l,this._element))m(C)}}const ri=".bs.modal",xS=`hide${ri}`,yS=`hidePrevented${ri}`,Um=`hidden${ri}`,Om=`show${ri}`,SS=`shown${ri}`,ES=`resize${ri}`,MS=`click.dismiss${ri}`,wS=`mousedown.dismiss${ri}`,TS=`keydown.dismiss${ri}`,AS=`click${ri}.data-api`,Fm="modal-open",km="show",Zu="modal-static",CS={backdrop:!0,focus:!0,keyboard:!0},bS={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class as extends ve{constructor(l,m){super(l,m),this._dialog=le.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Ku,this._addEventListeners()}static get Default(){return CS}static get DefaultType(){return bS}static get NAME(){return"modal"}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||this._isTransitioning||N.trigger(this._element,Om,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Fm),this._adjustDialog(),this._backdrop.show(()=>this._showElement(l)))}hide(){this._isShown&&!this._isTransitioning&&(N.trigger(this._element,xS).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(km),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated())))}dispose(){N.off(window,ri),N.off(this._dialog,ri),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Rm({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Lm({trapElement:this._element})}_showElement(l){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const m=le.findOne(".modal-body",this._dialog);m&&(m.scrollTop=0),_(this._element),this._element.classList.add(km),this._queueCallback(()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,N.trigger(this._element,SS,{relatedTarget:l})},this._dialog,this._isAnimated())}_addEventListeners(){N.on(this._element,TS,l=>{l.key==="Escape"&&(this._config.keyboard?this.hide():this._triggerBackdropTransition())}),N.on(window,ES,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),N.on(this._element,wS,l=>{N.one(this._element,MS,m=>{this._element===l.target&&this._element===m.target&&(this._config.backdrop!=="static"?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Fm),this._resetAdjustments(),this._scrollBar.reset(),N.trigger(this._element,Um)})}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(N.trigger(this._element,yS).defaultPrevented)return;const l=this._element.scrollHeight>document.documentElement.clientHeight,m=this._element.style.overflowY;m==="hidden"||this._element.classList.contains(Zu)||(l||(this._element.style.overflowY="hidden"),this._element.classList.add(Zu),this._queueCallback(()=>{this._element.classList.remove(Zu),this._queueCallback(()=>{this._element.style.overflowY=m},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const l=this._element.scrollHeight>document.documentElement.clientHeight,m=this._scrollBar.getWidth(),C=m>0;if(C&&!l){const k=g()?"paddingLeft":"paddingRight";this._element.style[k]=`${m}px`}if(!C&&l){const k=g()?"paddingRight":"paddingLeft";this._element.style[k]=`${m}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(l,m){return this.each(function(){const C=as.getOrCreateInstance(this,l);if(typeof l=="string"){if(C[l]===void 0)throw new TypeError(`No method named "${l}"`);C[l](m)}})}}N.on(document,AS,'[data-bs-toggle="modal"]',function(S){const l=le.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&S.preventDefault(),N.one(l,Om,C=>{C.defaultPrevented||N.one(l,Um,()=>{u(this)&&this.focus()})});const m=le.findOne(".modal.show");m&&as.getInstance(m).hide(),as.getOrCreateInstance(l).toggle(this)}),Ge(as),f(as);const qi=".bs.offcanvas",Bm=".data-api",RS=`load${qi}${Bm}`,zm="show",Hm="showing",Vm="hiding",Gm=".offcanvas.show",PS=`show${qi}`,LS=`shown${qi}`,DS=`hide${qi}`,Wm=`hidePrevented${qi}`,Xm=`hidden${qi}`,IS=`resize${qi}`,NS=`click${qi}${Bm}`,US=`keydown.dismiss${qi}`,OS={backdrop:!0,keyboard:!0,scroll:!1},FS={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Ki extends ve{constructor(l,m){super(l,m),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return OS}static get DefaultType(){return FS}static get NAME(){return"offcanvas"}toggle(l){return this._isShown?this.hide():this.show(l)}show(l){this._isShown||N.trigger(this._element,PS,{relatedTarget:l}).defaultPrevented||(this._isShown=!0,this._backdrop.show(),this._config.scroll||new Ku().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(Hm),this._queueCallback(()=>{this._config.scroll&&!this._config.backdrop||this._focustrap.activate(),this._element.classList.add(zm),this._element.classList.remove(Hm),N.trigger(this._element,LS,{relatedTarget:l})},this._element,!0))}hide(){this._isShown&&(N.trigger(this._element,DS).defaultPrevented||(this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(Vm),this._backdrop.hide(),this._queueCallback(()=>{this._element.classList.remove(zm,Vm),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Ku().reset(),N.trigger(this._element,Xm)},this._element,!0)))}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const l=!!this._config.backdrop;return new Rm({className:"offcanvas-backdrop",isVisible:l,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:l?()=>{this._config.backdrop!=="static"?this.hide():N.trigger(this._element,Wm)}:null})}_initializeFocusTrap(){return new Lm({trapElement:this._element})}_addEventListeners(){N.on(this._element,US,l=>{l.key==="Escape"&&(this._config.keyboard?this.hide():N.trigger(this._element,Wm))})}static jQueryInterface(l){return this.each(function(){const m=Ki.getOrCreateInstance(this,l);if(typeof l=="string"){if(m[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);m[l](this)}})}}N.on(document,NS,'[data-bs-toggle="offcanvas"]',function(S){const l=le.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&S.preventDefault(),d(this))return;N.one(l,Xm,()=>{u(this)&&this.focus()});const m=le.findOne(Gm);m&&m!==l&&Ki.getInstance(m).hide(),Ki.getOrCreateInstance(l).toggle(this)}),N.on(window,RS,()=>{for(const S of le.find(Gm))Ki.getOrCreateInstance(S).show()}),N.on(window,IS,()=>{for(const S of le.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(S).position!=="fixed"&&Ki.getOrCreateInstance(S).hide()}),Ge(Ki),f(Ki);const jm={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},kS=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),BS=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,zS=(S,l)=>{const m=S.nodeName.toLowerCase();return l.includes(m)?!kS.has(m)||!!BS.test(S.nodeValue):l.filter(C=>C instanceof RegExp).some(C=>C.test(m))},HS={allowList:jm,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},VS={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},GS={entry:"(string|element|function|null)",selector:"(string|element)"};class WS extends ce{constructor(l){super(),this._config=this._getConfig(l)}static get Default(){return HS}static get DefaultType(){return VS}static get NAME(){return"TemplateFactory"}getContent(){return Object.values(this._config.content).map(l=>this._resolvePossibleFunction(l)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(l){return this._checkContent(l),this._config.content={...this._config.content,...l},this}toHtml(){const l=document.createElement("div");l.innerHTML=this._maybeSanitize(this._config.template);for(const[k,H]of Object.entries(this._config.content))this._setContent(l,H,k);const m=l.children[0],C=this._resolvePossibleFunction(this._config.extraClass);return C&&m.classList.add(...C.split(" ")),m}_typeCheckConfig(l){super._typeCheckConfig(l),this._checkContent(l.content)}_checkContent(l){for(const[m,C]of Object.entries(l))super._typeCheckConfig({selector:m,entry:C},GS)}_setContent(l,m,C){const k=le.findOne(C,l);k&&((m=this._resolvePossibleFunction(m))?a(m)?this._putElementInTemplate(c(m),k):this._config.html?k.innerHTML=this._maybeSanitize(m):k.textContent=m:k.remove())}_maybeSanitize(l){return this._config.sanitize?function(m,C,k){if(!m.length)return m;if(k&&typeof k=="function")return k(m);const H=new window.DOMParser().parseFromString(m,"text/html"),Y=[].concat(...H.body.querySelectorAll("*"));for(const ie of Y){const he=ie.nodeName.toLowerCase();if(!Object.keys(C).includes(he)){ie.remove();continue}const be=[].concat(...ie.attributes),De=[].concat(C["*"]||[],C[he]||[]);for(const Me of be)zS(Me,De)||ie.removeAttribute(Me.nodeName)}return H.body.innerHTML}(l,this._config.allowList,this._config.sanitizeFn):l}_resolvePossibleFunction(l){return v(l,[this])}_putElementInTemplate(l,m){if(this._config.html)return m.innerHTML="",void m.append(l);m.textContent=l.textContent}}const XS=new Set(["sanitize","allowList","sanitizeFn"]),Qu="fade",Cl="show",$m=".modal",Ym="hide.bs.modal",oa="hover",Ju="focus",jS={AUTO:"auto",TOP:"top",RIGHT:g()?"left":"right",BOTTOM:"bottom",LEFT:g()?"right":"left"},$S={allowList:jm,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},YS={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class ls extends ve{constructor(l,m){if(Sm===void 0)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(l,m),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return $S}static get DefaultType(){return YS}static get NAME(){return"tooltip"}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){this._isEnabled&&(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()?this._leave():this._enter())}dispose(){clearTimeout(this._timeout),N.off(this._element.closest($m),Ym,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!this._isWithContent()||!this._isEnabled)return;const l=N.trigger(this._element,this.constructor.eventName("show")),m=(h(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(l.defaultPrevented||!m)return;this._disposePopper();const C=this._getTipElement();this._element.setAttribute("aria-describedby",C.getAttribute("id"));const{container:k}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(k.append(C),N.trigger(this._element,this.constructor.eventName("inserted"))),this._popper=this._createPopper(C),C.classList.add(Cl),"ontouchstart"in document.documentElement)for(const H of[].concat(...document.body.children))N.on(H,"mouseover",p);this._queueCallback(()=>{N.trigger(this._element,this.constructor.eventName("shown")),this._isHovered===!1&&this._leave(),this._isHovered=!1},this.tip,this._isAnimated())}hide(){if(this._isShown()&&!N.trigger(this._element,this.constructor.eventName("hide")).defaultPrevented){if(this._getTipElement().classList.remove(Cl),"ontouchstart"in document.documentElement)for(const l of[].concat(...document.body.children))N.off(l,"mouseover",p);this._activeTrigger.click=!1,this._activeTrigger[Ju]=!1,this._activeTrigger[oa]=!1,this._isHovered=null,this._queueCallback(()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),N.trigger(this._element,this.constructor.eventName("hidden")))},this.tip,this._isAnimated())}}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(l){const m=this._getTemplateFactory(l).toHtml();if(!m)return null;m.classList.remove(Qu,Cl),m.classList.add(`bs-${this.constructor.NAME}-auto`);const C=(k=>{do k+=Math.floor(1e6*Math.random());while(document.getElementById(k));return k})(this.constructor.NAME).toString();return m.setAttribute("id",C),this._isAnimated()&&m.classList.add(Qu),m}setContent(l){this._newContent=l,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(l){return this._templateFactory?this._templateFactory.changeContent(l):this._templateFactory=new WS({...this._config,content:l,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{".tooltip-inner":this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(l){return this.constructor.getOrCreateInstance(l.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Qu)}_isShown(){return this.tip&&this.tip.classList.contains(Cl)}_createPopper(l){const m=v(this._config.placement,[this,l,this._element]),C=jS[m.toUpperCase()];return Yu(this._element,l,this._getPopperConfig(C))}_getOffset(){const{offset:l}=this._config;return typeof l=="string"?l.split(",").map(m=>Number.parseInt(m,10)):typeof l=="function"?m=>l(m,this._element):l}_resolvePossibleFunction(l){return v(l,[this._element])}_getPopperConfig(l){const m={placement:l,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:C=>{this._getTipElement().setAttribute("data-popper-placement",C.state.placement)}}]};return{...m,...v(this._config.popperConfig,[m])}}_setListeners(){const l=this._config.trigger.split(" ");for(const m of l)if(m==="click")N.on(this._element,this.constructor.eventName("click"),this._config.selector,C=>{this._initializeOnDelegatedTarget(C).toggle()});else if(m!=="manual"){const C=m===oa?this.constructor.eventName("mouseenter"):this.constructor.eventName("focusin"),k=m===oa?this.constructor.eventName("mouseleave"):this.constructor.eventName("focusout");N.on(this._element,C,this._config.selector,H=>{const Y=this._initializeOnDelegatedTarget(H);Y._activeTrigger[H.type==="focusin"?Ju:oa]=!0,Y._enter()}),N.on(this._element,k,this._config.selector,H=>{const Y=this._initializeOnDelegatedTarget(H);Y._activeTrigger[H.type==="focusout"?Ju:oa]=Y._element.contains(H.relatedTarget),Y._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},N.on(this._element.closest($m),Ym,this._hideModalHandler)}_fixTitle(){const l=this._element.getAttribute("title");l&&(this._element.getAttribute("aria-label")||this._element.textContent.trim()||this._element.setAttribute("aria-label",l),this._element.setAttribute("data-bs-original-title",l),this._element.removeAttribute("title"))}_enter(){this._isShown()||this._isHovered?this._isHovered=!0:(this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show))}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(l,m){clearTimeout(this._timeout),this._timeout=setTimeout(l,m)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(l){const m=q.getDataAttributes(this._element);for(const C of Object.keys(m))XS.has(C)&&delete m[C];return l={...m,...typeof l=="object"&&l?l:{}},l=this._mergeConfigObj(l),l=this._configAfterMerge(l),this._typeCheckConfig(l),l}_configAfterMerge(l){return l.container=l.container===!1?document.body:c(l.container),typeof l.delay=="number"&&(l.delay={show:l.delay,hide:l.delay}),typeof l.title=="number"&&(l.title=l.title.toString()),typeof l.content=="number"&&(l.content=l.content.toString()),l}_getDelegateConfig(){const l={};for(const[m,C]of Object.entries(this._config))this.constructor.Default[m]!==C&&(l[m]=C);return l.selector=!1,l.trigger="manual",l}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(l){return this.each(function(){const m=ls.getOrCreateInstance(this,l);if(typeof l=="string"){if(m[l]===void 0)throw new TypeError(`No method named "${l}"`);m[l]()}})}}f(ls);const qS={...ls.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},KS={...ls.DefaultType,content:"(null|string|element|function)"};class bl extends ls{static get Default(){return qS}static get DefaultType(){return KS}static get NAME(){return"popover"}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{".popover-header":this._getTitle(),".popover-body":this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(l){return this.each(function(){const m=bl.getOrCreateInstance(this,l);if(typeof l=="string"){if(m[l]===void 0)throw new TypeError(`No method named "${l}"`);m[l]()}})}}f(bl);const ef=".bs.scrollspy",ZS=`activate${ef}`,qm=`click${ef}`,QS=`load${ef}.data-api`,Zs="active",tf="[href]",Km=".nav-link",JS=`${Km}, .nav-item > ${Km}, .list-group-item`,eE={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},tE={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class aa extends ve{constructor(l,m){super(l,m),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return eE}static get DefaultType(){return tE}static get NAME(){return"scrollspy"}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const l of this._observableSections.values())this._observer.observe(l)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(l){return l.target=c(l.target)||document.body,l.rootMargin=l.offset?`${l.offset}px 0px -30%`:l.rootMargin,typeof l.threshold=="string"&&(l.threshold=l.threshold.split(",").map(m=>Number.parseFloat(m))),l}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(N.off(this._config.target,qm),N.on(this._config.target,qm,tf,l=>{const m=this._observableSections.get(l.target.hash);if(m){l.preventDefault();const C=this._rootElement||window,k=m.offsetTop-this._element.offsetTop;if(C.scrollTo)return void C.scrollTo({top:k,behavior:"smooth"});C.scrollTop=k}}))}_getNewObserver(){const l={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(m=>this._observerCallback(m),l)}_observerCallback(l){const m=Y=>this._targetLinks.get(`#${Y.target.id}`),C=Y=>{this._previousScrollData.visibleEntryTop=Y.target.offsetTop,this._process(m(Y))},k=(this._rootElement||document.documentElement).scrollTop,H=k>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=k;for(const Y of l){if(!Y.isIntersecting){this._activeTarget=null,this._clearActiveClass(m(Y));continue}const ie=Y.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(H&&ie){if(C(Y),!k)return}else H||ie||C(Y)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const l=le.find(tf,this._config.target);for(const m of l){if(!m.hash||d(m))continue;const C=le.findOne(decodeURI(m.hash),this._element);u(C)&&(this._targetLinks.set(decodeURI(m.hash),m),this._observableSections.set(m.hash,C))}}_process(l){this._activeTarget!==l&&(this._clearActiveClass(this._config.target),this._activeTarget=l,l.classList.add(Zs),this._activateParents(l),N.trigger(this._element,ZS,{relatedTarget:l}))}_activateParents(l){if(l.classList.contains("dropdown-item"))le.findOne(".dropdown-toggle",l.closest(".dropdown")).classList.add(Zs);else for(const m of le.parents(l,".nav, .list-group"))for(const C of le.prev(m,JS))C.classList.add(Zs)}_clearActiveClass(l){l.classList.remove(Zs);const m=le.find(`${tf}.${Zs}`,l);for(const C of m)C.classList.remove(Zs)}static jQueryInterface(l){return this.each(function(){const m=aa.getOrCreateInstance(this,l);if(typeof l=="string"){if(m[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);m[l]()}})}}N.on(window,QS,()=>{for(const S of le.find('[data-bs-spy="scroll"]'))aa.getOrCreateInstance(S)}),f(aa);const cs=".bs.tab",nE=`hide${cs}`,iE=`hidden${cs}`,rE=`show${cs}`,sE=`shown${cs}`,oE=`click${cs}`,aE=`keydown${cs}`,lE=`load${cs}`,cE="ArrowLeft",Zm="ArrowRight",uE="ArrowUp",Qm="ArrowDown",nf="Home",Jm="End",us="active",eg="fade",rf="show",tg=".dropdown-toggle",sf=`:not(${tg})`,ng='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',of=`.nav-link${sf}, .list-group-item${sf}, [role="tab"]${sf}, ${ng}`,fE=`.${us}[data-bs-toggle="tab"], .${us}[data-bs-toggle="pill"], .${us}[data-bs-toggle="list"]`;class fs extends ve{constructor(l){super(l),this._parent=this._element.closest('.list-group, .nav, [role="tablist"]'),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),N.on(this._element,aE,m=>this._keydown(m)))}static get NAME(){return"tab"}show(){const l=this._element;if(this._elemIsActive(l))return;const m=this._getActiveElem(),C=m?N.trigger(m,nE,{relatedTarget:l}):null;N.trigger(l,rE,{relatedTarget:m}).defaultPrevented||C&&C.defaultPrevented||(this._deactivate(m,l),this._activate(l,m))}_activate(l,m){l&&(l.classList.add(us),this._activate(le.getElementFromSelector(l)),this._queueCallback(()=>{l.getAttribute("role")==="tab"?(l.removeAttribute("tabindex"),l.setAttribute("aria-selected",!0),this._toggleDropDown(l,!0),N.trigger(l,sE,{relatedTarget:m})):l.classList.add(rf)},l,l.classList.contains(eg)))}_deactivate(l,m){l&&(l.classList.remove(us),l.blur(),this._deactivate(le.getElementFromSelector(l)),this._queueCallback(()=>{l.getAttribute("role")==="tab"?(l.setAttribute("aria-selected",!1),l.setAttribute("tabindex","-1"),this._toggleDropDown(l,!1),N.trigger(l,iE,{relatedTarget:m})):l.classList.remove(rf)},l,l.classList.contains(eg)))}_keydown(l){if(![cE,Zm,uE,Qm,nf,Jm].includes(l.key))return;l.stopPropagation(),l.preventDefault();const m=this._getChildren().filter(k=>!d(k));let C;if([nf,Jm].includes(l.key))C=m[l.key===nf?0:m.length-1];else{const k=[Zm,Qm].includes(l.key);C=E(m,l.target,k,!0)}C&&(C.focus({preventScroll:!0}),fs.getOrCreateInstance(C).show())}_getChildren(){return le.find(of,this._parent)}_getActiveElem(){return this._getChildren().find(l=>this._elemIsActive(l))||null}_setInitialAttributes(l,m){this._setAttributeIfNotExists(l,"role","tablist");for(const C of m)this._setInitialAttributesOnChild(C)}_setInitialAttributesOnChild(l){l=this._getInnerElement(l);const m=this._elemIsActive(l),C=this._getOuterElement(l);l.setAttribute("aria-selected",m),C!==l&&this._setAttributeIfNotExists(C,"role","presentation"),m||l.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(l,"role","tab"),this._setInitialAttributesOnTargetPanel(l)}_setInitialAttributesOnTargetPanel(l){const m=le.getElementFromSelector(l);m&&(this._setAttributeIfNotExists(m,"role","tabpanel"),l.id&&this._setAttributeIfNotExists(m,"aria-labelledby",`${l.id}`))}_toggleDropDown(l,m){const C=this._getOuterElement(l);if(!C.classList.contains("dropdown"))return;const k=(H,Y)=>{const ie=le.findOne(H,C);ie&&ie.classList.toggle(Y,m)};k(tg,us),k(".dropdown-menu",rf),C.setAttribute("aria-expanded",m)}_setAttributeIfNotExists(l,m,C){l.hasAttribute(m)||l.setAttribute(m,C)}_elemIsActive(l){return l.classList.contains(us)}_getInnerElement(l){return l.matches(of)?l:le.findOne(of,l)}_getOuterElement(l){return l.closest(".nav-item, .list-group-item")||l}static jQueryInterface(l){return this.each(function(){const m=fs.getOrCreateInstance(this);if(typeof l=="string"){if(m[l]===void 0||l.startsWith("_")||l==="constructor")throw new TypeError(`No method named "${l}"`);m[l]()}})}}N.on(document,oE,ng,function(S){["A","AREA"].includes(this.tagName)&&S.preventDefault(),d(this)||fs.getOrCreateInstance(this).show()}),N.on(window,lE,()=>{for(const S of le.find(fE))fs.getOrCreateInstance(S)}),f(fs);const Er=".bs.toast",dE=`mouseover${Er}`,hE=`mouseout${Er}`,pE=`focusin${Er}`,mE=`focusout${Er}`,gE=`hide${Er}`,_E=`hidden${Er}`,vE=`show${Er}`,xE=`shown${Er}`,ig="hide",Rl="show",Pl="showing",yE={animation:"boolean",autohide:"boolean",delay:"number"},SE={animation:!0,autohide:!0,delay:5e3};class la extends ve{constructor(l,m){super(l,m),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return SE}static get DefaultType(){return yE}static get NAME(){return"toast"}show(){N.trigger(this._element,vE).defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove(ig),_(this._element),this._element.classList.add(Rl,Pl),this._queueCallback(()=>{this._element.classList.remove(Pl),N.trigger(this._element,xE),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this.isShown()&&(N.trigger(this._element,gE).defaultPrevented||(this._element.classList.add(Pl),this._queueCallback(()=>{this._element.classList.add(ig),this._element.classList.remove(Pl,Rl),N.trigger(this._element,_E)},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Rl),super.dispose()}isShown(){return this._element.classList.contains(Rl)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(l,m){switch(l.type){case"mouseover":case"mouseout":this._hasMouseInteraction=m;break;case"focusin":case"focusout":this._hasKeyboardInteraction=m}if(m)return void this._clearTimeout();const C=l.relatedTarget;this._element===C||this._element.contains(C)||this._maybeScheduleHide()}_setListeners(){N.on(this._element,dE,l=>this._onInteraction(l,!0)),N.on(this._element,hE,l=>this._onInteraction(l,!1)),N.on(this._element,pE,l=>this._onInteraction(l,!0)),N.on(this._element,mE,l=>this._onInteraction(l,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(l){return this.each(function(){const m=la.getOrCreateInstance(this,l);if(typeof l=="string"){if(m[l]===void 0)throw new TypeError(`No method named "${l}"`);m[l](this)}})}}return Ge(la),f(la),{Alert:Rt,Button:on,Carousel:Ht,Collapse:Xi,Dropdown:vi,Modal:as,Offcanvas:Ki,Popover:bl,ScrollSpy:aa,Tab:fs,Toast:la,Tooltip:ls}})})(NL);pd.createRoot(document.getElementById("root")).render(pe.jsx(jv.StrictMode,{children:pe.jsx(i1,{children:pe.jsx(IL,{})})}));
