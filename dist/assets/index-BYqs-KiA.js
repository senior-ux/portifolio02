(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function oS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lv={exports:{}},Nc={},Dv={exports:{}},Be={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xa=Symbol.for("react.element"),aS=Symbol.for("react.portal"),lS=Symbol.for("react.fragment"),cS=Symbol.for("react.strict_mode"),uS=Symbol.for("react.profiler"),dS=Symbol.for("react.provider"),fS=Symbol.for("react.context"),hS=Symbol.for("react.forward_ref"),pS=Symbol.for("react.suspense"),mS=Symbol.for("react.memo"),gS=Symbol.for("react.lazy"),im=Symbol.iterator;function vS(t){return t===null||typeof t!="object"?null:(t=im&&t[im]||t["@@iterator"],typeof t=="function"?t:null)}var Nv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Iv=Object.assign,Uv={};function ao(t,e,n){this.props=t,this.context=e,this.refs=Uv,this.updater=n||Nv}ao.prototype.isReactComponent={};ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fv(){}Fv.prototype=ao.prototype;function fh(t,e,n){this.props=t,this.context=e,this.refs=Uv,this.updater=n||Nv}var hh=fh.prototype=new Fv;hh.constructor=fh;Iv(hh,ao.prototype);hh.isPureReactComponent=!0;var rm=Array.isArray,Ov=Object.prototype.hasOwnProperty,ph={current:null},kv={key:!0,ref:!0,__self:!0,__source:!0};function Bv(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ov.call(e,i)&&!kv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:xa,type:t,key:s,ref:o,props:r,_owner:ph.current}}function _S(t,e){return{$$typeof:xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function mh(t){return typeof t=="object"&&t!==null&&t.$$typeof===xa}function xS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sm=/\/+/g;function lu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xS(""+t.key):e.toString(36)}function Al(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case xa:case aS:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+lu(o,0):i,rm(r)?(n="",t!=null&&(n=t.replace(sm,"$&/")+"/"),Al(r,e,n,"",function(c){return c})):r!=null&&(mh(r)&&(r=_S(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(sm,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",rm(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+lu(s,a);o+=Al(s,e,n,l,r)}else if(l=vS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+lu(s,a++),o+=Al(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fa(t,e,n){if(t==null)return t;var i=[],r=0;return Al(t,i,"","",function(s){return e.call(n,s,r++)}),i}function yS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},Cl={transition:null},SS={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:Cl,ReactCurrentOwner:ph};function zv(){throw Error("act(...) is not supported in production builds of React.")}Be.Children={map:Fa,forEach:function(t,e,n){Fa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fa(t,function(){e++}),e},toArray:function(t){return Fa(t,function(e){return e})||[]},only:function(t){if(!mh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Be.Component=ao;Be.Fragment=lS;Be.Profiler=uS;Be.PureComponent=fh;Be.StrictMode=cS;Be.Suspense=pS;Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SS;Be.act=zv;Be.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Iv({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ph.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ov.call(e,l)&&!kv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:xa,type:t.type,key:r,ref:s,props:i,_owner:o}};Be.createContext=function(t){return t={$$typeof:fS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:dS,_context:t},t.Consumer=t};Be.createElement=Bv;Be.createFactory=function(t){var e=Bv.bind(null,t);return e.type=t,e};Be.createRef=function(){return{current:null}};Be.forwardRef=function(t){return{$$typeof:hS,render:t}};Be.isValidElement=mh;Be.lazy=function(t){return{$$typeof:gS,_payload:{_status:-1,_result:t},_init:yS}};Be.memo=function(t,e){return{$$typeof:mS,type:t,compare:e===void 0?null:e}};Be.startTransition=function(t){var e=Cl.transition;Cl.transition={};try{t()}finally{Cl.transition=e}};Be.unstable_act=zv;Be.useCallback=function(t,e){return Qt.current.useCallback(t,e)};Be.useContext=function(t){return Qt.current.useContext(t)};Be.useDebugValue=function(){};Be.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};Be.useEffect=function(t,e){return Qt.current.useEffect(t,e)};Be.useId=function(){return Qt.current.useId()};Be.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};Be.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};Be.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};Be.useMemo=function(t,e){return Qt.current.useMemo(t,e)};Be.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};Be.useRef=function(t){return Qt.current.useRef(t)};Be.useState=function(t){return Qt.current.useState(t)};Be.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};Be.useTransition=function(){return Qt.current.useTransition()};Be.version="18.3.1";Dv.exports=Be;var xe=Dv.exports;const qi=oS(xe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var MS=xe,ES=Symbol.for("react.element"),TS=Symbol.for("react.fragment"),wS=Object.prototype.hasOwnProperty,AS=MS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,CS={key:!0,ref:!0,__self:!0,__source:!0};function Vv(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)wS.call(e,i)&&!CS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ES,type:t,key:s,ref:o,props:r,_owner:AS.current}}Nc.Fragment=TS;Nc.jsx=Vv;Nc.jsxs=Vv;Lv.exports=Nc;var D=Lv.exports,Md={},Hv={exports:{}},Sn={},Gv={exports:{}},Wv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,Y){var Z=N.length;N.push(Y);e:for(;0<Z;){var oe=Z-1>>>1,Se=N[oe];if(0<r(Se,Y))N[oe]=Y,N[Z]=Se,Z=oe;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var Y=N[0],Z=N.pop();if(Z!==Y){N[0]=Z;e:for(var oe=0,Se=N.length,He=Se>>>1;oe<He;){var G=2*(oe+1)-1,ne=N[G],ue=G+1,de=N[ue];if(0>r(ne,Z))ue<Se&&0>r(de,ne)?(N[oe]=de,N[ue]=Z,oe=ue):(N[oe]=ne,N[G]=Z,oe=G);else if(ue<Se&&0>r(de,Z))N[oe]=de,N[ue]=Z,oe=ue;else break e}}return Y}function r(N,Y){var Z=N.sortIndex-Y.sortIndex;return Z!==0?Z:N.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,x=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=N)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function y(N){if(v=!1,g(N),!x)if(n(l)!==null)x=!0,j(C);else{var Y=n(c);Y!==null&&W(y,Y.startTime-N)}}function C(N,Y){x=!1,v&&(v=!1,f(b),b=-1),p=!0;var Z=h;try{for(g(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||N&&!L());){var oe=d.callback;if(typeof oe=="function"){d.callback=null,h=d.priorityLevel;var Se=oe(d.expirationTime<=Y);Y=t.unstable_now(),typeof Se=="function"?d.callback=Se:d===n(l)&&i(l),g(Y)}else i(l);d=n(l)}if(d!==null)var He=!0;else{var G=n(c);G!==null&&W(y,G.startTime-Y),He=!1}return He}finally{d=null,h=Z,p=!1}}var A=!1,w=null,b=-1,T=5,S=-1;function L(){return!(t.unstable_now()-S<T)}function H(){if(w!==null){var N=t.unstable_now();S=N;var Y=!0;try{Y=w(!0,N)}finally{Y?V():(A=!1,w=null)}}else A=!1}var V;if(typeof _=="function")V=function(){_(H)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,K=$.port2;$.port1.onmessage=H,V=function(){K.postMessage(null)}}else V=function(){m(H,0)};function j(N){w=N,A||(A=!0,V())}function W(N,Y){b=m(function(){N(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){x||p||(x=!0,j(C))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var Z=h;h=Y;try{return N()}finally{h=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,Y){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var Z=h;h=N;try{return Y()}finally{h=Z}},t.unstable_scheduleCallback=function(N,Y,Z){var oe=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?oe+Z:oe):Z=oe,N){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Z+Se,N={id:u++,callback:Y,priorityLevel:N,startTime:Z,expirationTime:Se,sortIndex:-1},Z>oe?(N.sortIndex=Z,e(c,N),n(l)===null&&N===n(c)&&(v?(f(b),b=-1):v=!0,W(y,Z-oe))):(N.sortIndex=Se,e(l,N),x||p||(x=!0,j(C))),N},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(N){var Y=h;return function(){var Z=h;h=Y;try{return N.apply(this,arguments)}finally{h=Z}}}})(Wv);Gv.exports=Wv;var bS=Gv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var RS=xe,xn=bS;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jv=new Set,qo={};function Zr(t,e){Xs(t,e),Xs(t+"Capture",e)}function Xs(t,e){for(qo[t]=e,t=0;t<e.length;t++)jv.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ed=Object.prototype.hasOwnProperty,PS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,om={},am={};function LS(t){return Ed.call(am,t)?!0:Ed.call(om,t)?!1:PS.test(t)?am[t]=!0:(om[t]=!0,!1)}function DS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function NS(t,e,n,i){if(e===null||typeof e>"u"||DS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var gh=/[\-:]([a-z])/g;function vh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(gh,vh);Bt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(gh,vh);Bt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(gh,vh);Bt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function _h(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(NS(e,n,r,i)&&(n=null),i||r===null?LS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ni=RS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oa=Symbol.for("react.element"),xs=Symbol.for("react.portal"),ys=Symbol.for("react.fragment"),xh=Symbol.for("react.strict_mode"),Td=Symbol.for("react.profiler"),Xv=Symbol.for("react.provider"),Yv=Symbol.for("react.context"),yh=Symbol.for("react.forward_ref"),wd=Symbol.for("react.suspense"),Ad=Symbol.for("react.suspense_list"),Sh=Symbol.for("react.memo"),Gi=Symbol.for("react.lazy"),$v=Symbol.for("react.offscreen"),lm=Symbol.iterator;function mo(t){return t===null||typeof t!="object"?null:(t=lm&&t[lm]||t["@@iterator"],typeof t=="function"?t:null)}var dt=Object.assign,cu;function Ro(t){if(cu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cu=e&&e[1]||""}return`
`+cu+t}var uu=!1;function du(t,e){if(!t||uu)return"";uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{uu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ro(t):""}function IS(t){switch(t.tag){case 5:return Ro(t.type);case 16:return Ro("Lazy");case 13:return Ro("Suspense");case 19:return Ro("SuspenseList");case 0:case 2:case 15:return t=du(t.type,!1),t;case 11:return t=du(t.type.render,!1),t;case 1:return t=du(t.type,!0),t;default:return""}}function Cd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ys:return"Fragment";case xs:return"Portal";case Td:return"Profiler";case xh:return"StrictMode";case wd:return"Suspense";case Ad:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Yv:return(t.displayName||"Context")+".Consumer";case Xv:return(t._context.displayName||"Context")+".Provider";case yh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sh:return e=t.displayName||null,e!==null?e:Cd(t.type)||"Memo";case Gi:e=t._payload,t=t._init;try{return Cd(t(e))}catch{}}return null}function US(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Cd(e);case 8:return e===xh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Kv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function FS(t){var e=Kv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ka(t){t._valueTracker||(t._valueTracker=FS(t))}function qv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Kv(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function bd(t,e){var n=e.checked;return dt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function cm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zv(t,e){e=e.checked,e!=null&&_h(t,"checked",e,!1)}function Rd(t,e){Zv(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pd(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function um(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pd(t,e,n){(e!=="number"||Yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Po=Array.isArray;function Os(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Ld(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return dt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(Po(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function Qv(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function fm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Jv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Dd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Jv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ba,e_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ba=Ba||document.createElement("div"),Ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},OS=["Webkit","ms","Moz","O"];Object.keys(Oo).forEach(function(t){OS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Oo[e]=Oo[t]})});function t_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Oo.hasOwnProperty(t)&&Oo[t]?(""+e).trim():e+"px"}function n_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=t_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var kS=dt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Nd(t,e){if(e){if(kS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Id(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ud=null;function Mh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Fd=null,ks=null,Bs=null;function hm(t){if(t=Ma(t)){if(typeof Fd!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=kc(e),Fd(t.stateNode,t.type,e))}}function i_(t){ks?Bs?Bs.push(t):Bs=[t]:ks=t}function r_(){if(ks){var t=ks,e=Bs;if(Bs=ks=null,hm(t),e)for(t=0;t<e.length;t++)hm(e[t])}}function s_(t,e){return t(e)}function o_(){}var fu=!1;function a_(t,e,n){if(fu)return t(e,n);fu=!0;try{return s_(t,e,n)}finally{fu=!1,(ks!==null||Bs!==null)&&(o_(),r_())}}function Qo(t,e){var n=t.stateNode;if(n===null)return null;var i=kc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var Od=!1;if(Ci)try{var go={};Object.defineProperty(go,"passive",{get:function(){Od=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{Od=!1}function BS(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ko=!1,$l=null,Kl=!1,kd=null,zS={onError:function(t){ko=!0,$l=t}};function VS(t,e,n,i,r,s,o,a,l){ko=!1,$l=null,BS.apply(zS,arguments)}function HS(t,e,n,i,r,s,o,a,l){if(VS.apply(this,arguments),ko){if(ko){var c=$l;ko=!1,$l=null}else throw Error(ee(198));Kl||(Kl=!0,kd=c)}}function Qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function l_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function pm(t){if(Qr(t)!==t)throw Error(ee(188))}function GS(t){var e=t.alternate;if(!e){if(e=Qr(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return pm(r),t;if(s===i)return pm(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function c_(t){return t=GS(t),t!==null?u_(t):null}function u_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=u_(t);if(e!==null)return e;t=t.sibling}return null}var d_=xn.unstable_scheduleCallback,mm=xn.unstable_cancelCallback,WS=xn.unstable_shouldYield,jS=xn.unstable_requestPaint,_t=xn.unstable_now,XS=xn.unstable_getCurrentPriorityLevel,Eh=xn.unstable_ImmediatePriority,f_=xn.unstable_UserBlockingPriority,ql=xn.unstable_NormalPriority,YS=xn.unstable_LowPriority,h_=xn.unstable_IdlePriority,Ic=null,ii=null;function $S(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(Ic,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:ZS,KS=Math.log,qS=Math.LN2;function ZS(t){return t>>>=0,t===0?32:31-(KS(t)/qS|0)|0}var za=64,Va=4194304;function Lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Lo(a):(s&=o,s!==0&&(i=Lo(s)))}else o=n&~r,o!==0?i=Lo(o):s!==0&&(i=Lo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function QS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function JS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=QS(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Bd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function p_(){var t=za;return za<<=1,!(za&4194240)&&(za=64),t}function hu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ya(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function eM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Th(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function m_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var g_,wh,v_,__,x_,zd=!1,Ha=[],Zi=null,Qi=null,Ji=null,Jo=new Map,ea=new Map,ji=[],tM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gm(t,e){switch(t){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":Jo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ea.delete(e.pointerId)}}function vo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ma(e),e!==null&&wh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function nM(t,e,n,i,r){switch(e){case"focusin":return Zi=vo(Zi,t,e,n,i,r),!0;case"dragenter":return Qi=vo(Qi,t,e,n,i,r),!0;case"mouseover":return Ji=vo(Ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Jo.set(s,vo(Jo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ea.set(s,vo(ea.get(s)||null,t,e,n,i,r)),!0}return!1}function y_(t){var e=Ur(t.target);if(e!==null){var n=Qr(e);if(n!==null){if(e=n.tag,e===13){if(e=l_(n),e!==null){t.blockedOn=e,x_(t.priority,function(){v_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function bl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Ud=i,n.target.dispatchEvent(i),Ud=null}else return e=Ma(n),e!==null&&wh(e),t.blockedOn=n,!1;e.shift()}return!0}function vm(t,e,n){bl(t)&&n.delete(e)}function iM(){zd=!1,Zi!==null&&bl(Zi)&&(Zi=null),Qi!==null&&bl(Qi)&&(Qi=null),Ji!==null&&bl(Ji)&&(Ji=null),Jo.forEach(vm),ea.forEach(vm)}function _o(t,e){t.blockedOn===e&&(t.blockedOn=null,zd||(zd=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,iM)))}function ta(t){function e(r){return _o(r,t)}if(0<Ha.length){_o(Ha[0],t);for(var n=1;n<Ha.length;n++){var i=Ha[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zi!==null&&_o(Zi,t),Qi!==null&&_o(Qi,t),Ji!==null&&_o(Ji,t),Jo.forEach(e),ea.forEach(e),n=0;n<ji.length;n++)i=ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ji.length&&(n=ji[0],n.blockedOn===null);)y_(n),n.blockedOn===null&&ji.shift()}var zs=Ni.ReactCurrentBatchConfig,Ql=!0;function rM(t,e,n,i){var r=Je,s=zs.transition;zs.transition=null;try{Je=1,Ah(t,e,n,i)}finally{Je=r,zs.transition=s}}function sM(t,e,n,i){var r=Je,s=zs.transition;zs.transition=null;try{Je=4,Ah(t,e,n,i)}finally{Je=r,zs.transition=s}}function Ah(t,e,n,i){if(Ql){var r=Vd(t,e,n,i);if(r===null)Eu(t,e,i,Jl,n),gm(t,i);else if(nM(r,t,e,n,i))i.stopPropagation();else if(gm(t,i),e&4&&-1<tM.indexOf(t)){for(;r!==null;){var s=Ma(r);if(s!==null&&g_(s),s=Vd(t,e,n,i),s===null&&Eu(t,e,i,Jl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Eu(t,e,i,null,n)}}var Jl=null;function Vd(t,e,n,i){if(Jl=null,t=Mh(i),t=Ur(t),t!==null)if(e=Qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=l_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Jl=t,null}function S_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(XS()){case Eh:return 1;case f_:return 4;case ql:case YS:return 16;case h_:return 536870912;default:return 16}default:return 16}}var $i=null,Ch=null,Rl=null;function M_(){if(Rl)return Rl;var t,e=Ch,n=e.length,i,r="value"in $i?$i.value:$i.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Rl=r.slice(t,1<i?1-i:void 0)}function Pl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ga(){return!0}function _m(){return!1}function Mn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ga:_m,this.isPropagationStopped=_m,this}return dt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ga)},persist:function(){},isPersistent:Ga}),e}var lo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bh=Mn(lo),Sa=dt({},lo,{view:0,detail:0}),oM=Mn(Sa),pu,mu,xo,Uc=dt({},Sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==xo&&(xo&&t.type==="mousemove"?(pu=t.screenX-xo.screenX,mu=t.screenY-xo.screenY):mu=pu=0,xo=t),pu)},movementY:function(t){return"movementY"in t?t.movementY:mu}}),xm=Mn(Uc),aM=dt({},Uc,{dataTransfer:0}),lM=Mn(aM),cM=dt({},Sa,{relatedTarget:0}),gu=Mn(cM),uM=dt({},lo,{animationName:0,elapsedTime:0,pseudoElement:0}),dM=Mn(uM),fM=dt({},lo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hM=Mn(fM),pM=dt({},lo,{data:0}),ym=Mn(pM),mM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _M(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vM[t])?!!e[t]:!1}function Rh(){return _M}var xM=dt({},Sa,{key:function(t){if(t.key){var e=mM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?gM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rh,charCode:function(t){return t.type==="keypress"?Pl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),yM=Mn(xM),SM=dt({},Uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sm=Mn(SM),MM=dt({},Sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rh}),EM=Mn(MM),TM=dt({},lo,{propertyName:0,elapsedTime:0,pseudoElement:0}),wM=Mn(TM),AM=dt({},Uc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),CM=Mn(AM),bM=[9,13,27,32],Ph=Ci&&"CompositionEvent"in window,Bo=null;Ci&&"documentMode"in document&&(Bo=document.documentMode);var RM=Ci&&"TextEvent"in window&&!Bo,E_=Ci&&(!Ph||Bo&&8<Bo&&11>=Bo),Mm=" ",Em=!1;function T_(t,e){switch(t){case"keyup":return bM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function w_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ss=!1;function PM(t,e){switch(t){case"compositionend":return w_(e);case"keypress":return e.which!==32?null:(Em=!0,Mm);case"textInput":return t=e.data,t===Mm&&Em?null:t;default:return null}}function LM(t,e){if(Ss)return t==="compositionend"||!Ph&&T_(t,e)?(t=M_(),Rl=Ch=$i=null,Ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return E_&&e.locale!=="ko"?null:e.data;default:return null}}var DM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!DM[t.type]:e==="textarea"}function A_(t,e,n,i){i_(i),e=ec(e,"onChange"),0<e.length&&(n=new bh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var zo=null,na=null;function NM(t){O_(t,0)}function Fc(t){var e=Ts(t);if(qv(e))return t}function IM(t,e){if(t==="change")return e}var C_=!1;if(Ci){var vu;if(Ci){var _u="oninput"in document;if(!_u){var wm=document.createElement("div");wm.setAttribute("oninput","return;"),_u=typeof wm.oninput=="function"}vu=_u}else vu=!1;C_=vu&&(!document.documentMode||9<document.documentMode)}function Am(){zo&&(zo.detachEvent("onpropertychange",b_),na=zo=null)}function b_(t){if(t.propertyName==="value"&&Fc(na)){var e=[];A_(e,na,t,Mh(t)),a_(NM,e)}}function UM(t,e,n){t==="focusin"?(Am(),zo=e,na=n,zo.attachEvent("onpropertychange",b_)):t==="focusout"&&Am()}function FM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fc(na)}function OM(t,e){if(t==="click")return Fc(e)}function kM(t,e){if(t==="input"||t==="change")return Fc(e)}function BM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:BM;function ia(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ed.call(e,r)||!$n(t[r],e[r]))return!1}return!0}function Cm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bm(t,e){var n=Cm(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cm(n)}}function R_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?R_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function P_(){for(var t=window,e=Yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yl(t.document)}return e}function Lh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zM(t){var e=P_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&R_(n.ownerDocument.documentElement,n)){if(i!==null&&Lh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=bm(n,s);var o=bm(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var VM=Ci&&"documentMode"in document&&11>=document.documentMode,Ms=null,Hd=null,Vo=null,Gd=!1;function Rm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Gd||Ms==null||Ms!==Yl(i)||(i=Ms,"selectionStart"in i&&Lh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Vo&&ia(Vo,i)||(Vo=i,i=ec(Hd,"onSelect"),0<i.length&&(e=new bh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ms)))}function Wa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:Wa("Animation","AnimationEnd"),animationiteration:Wa("Animation","AnimationIteration"),animationstart:Wa("Animation","AnimationStart"),transitionend:Wa("Transition","TransitionEnd")},xu={},L_={};Ci&&(L_=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function Oc(t){if(xu[t])return xu[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in L_)return xu[t]=e[n];return t}var D_=Oc("animationend"),N_=Oc("animationiteration"),I_=Oc("animationstart"),U_=Oc("transitionend"),F_=new Map,Pm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){F_.set(t,e),Zr(e,[t])}for(var yu=0;yu<Pm.length;yu++){var Su=Pm[yu],HM=Su.toLowerCase(),GM=Su[0].toUpperCase()+Su.slice(1);hr(HM,"on"+GM)}hr(D_,"onAnimationEnd");hr(N_,"onAnimationIteration");hr(I_,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(U_,"onTransitionEnd");Xs("onMouseEnter",["mouseout","mouseover"]);Xs("onMouseLeave",["mouseout","mouseover"]);Xs("onPointerEnter",["pointerout","pointerover"]);Xs("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),WM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function Lm(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,HS(i,e,void 0,t),t.currentTarget=null}function O_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Lm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Lm(r,a,c),s=l}}}if(Kl)throw t=kd,Kl=!1,kd=null,t}function nt(t,e){var n=e[$d];n===void 0&&(n=e[$d]=new Set);var i=t+"__bubble";n.has(i)||(k_(e,t,2,!1),n.add(i))}function Mu(t,e,n){var i=0;e&&(i|=4),k_(n,t,i,e)}var ja="_reactListening"+Math.random().toString(36).slice(2);function ra(t){if(!t[ja]){t[ja]=!0,jv.forEach(function(n){n!=="selectionchange"&&(WM.has(n)||Mu(n,!1,t),Mu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ja]||(e[ja]=!0,Mu("selectionchange",!1,e))}}function k_(t,e,n,i){switch(S_(e)){case 1:var r=rM;break;case 4:r=sM;break;default:r=Ah}n=r.bind(null,e,n,t),r=void 0,!Od||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Eu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ur(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}a_(function(){var c=s,u=Mh(n),d=[];e:{var h=F_.get(t);if(h!==void 0){var p=bh,x=t;switch(t){case"keypress":if(Pl(n)===0)break e;case"keydown":case"keyup":p=yM;break;case"focusin":x="focus",p=gu;break;case"focusout":x="blur",p=gu;break;case"beforeblur":case"afterblur":p=gu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=lM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=EM;break;case D_:case N_:case I_:p=dM;break;case U_:p=wM;break;case"scroll":p=oM;break;case"wheel":p=CM;break;case"copy":case"cut":case"paste":p=hM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Sm}var v=(e&4)!==0,m=!v&&t==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var _=c,g;_!==null;){g=_;var y=g.stateNode;if(g.tag===5&&y!==null&&(g=y,f!==null&&(y=Qo(_,f),y!=null&&v.push(sa(_,y,g)))),m)break;_=_.return}0<v.length&&(h=new p(h,x,null,n,u),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==Ud&&(x=n.relatedTarget||n.fromElement)&&(Ur(x)||x[bi]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=n.relatedTarget||n.toElement,p=c,x=x?Ur(x):null,x!==null&&(m=Qr(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=c),p!==x)){if(v=xm,y="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=Sm,y="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?h:Ts(p),g=x==null?h:Ts(x),h=new v(y,_+"leave",p,n,u),h.target=m,h.relatedTarget=g,y=null,Ur(u)===c&&(v=new v(f,_+"enter",x,n,u),v.target=g,v.relatedTarget=m,y=v),m=y,p&&x)t:{for(v=p,f=x,_=0,g=v;g;g=ts(g))_++;for(g=0,y=f;y;y=ts(y))g++;for(;0<_-g;)v=ts(v),_--;for(;0<g-_;)f=ts(f),g--;for(;_--;){if(v===f||f!==null&&v===f.alternate)break t;v=ts(v),f=ts(f)}v=null}else v=null;p!==null&&Dm(d,h,p,v,!1),x!==null&&m!==null&&Dm(d,m,x,v,!0)}}e:{if(h=c?Ts(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var C=IM;else if(Tm(h))if(C_)C=kM;else{C=FM;var A=UM}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=OM);if(C&&(C=C(t,c))){A_(d,C,n,u);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Pd(h,"number",h.value)}switch(A=c?Ts(c):window,t){case"focusin":(Tm(A)||A.contentEditable==="true")&&(Ms=A,Hd=c,Vo=null);break;case"focusout":Vo=Hd=Ms=null;break;case"mousedown":Gd=!0;break;case"contextmenu":case"mouseup":case"dragend":Gd=!1,Rm(d,n,u);break;case"selectionchange":if(VM)break;case"keydown":case"keyup":Rm(d,n,u)}var w;if(Ph)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ss?T_(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(E_&&n.locale!=="ko"&&(Ss||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ss&&(w=M_()):($i=u,Ch="value"in $i?$i.value:$i.textContent,Ss=!0)),A=ec(c,b),0<A.length&&(b=new ym(b,t,null,n,u),d.push({event:b,listeners:A}),w?b.data=w:(w=w_(n),w!==null&&(b.data=w)))),(w=RM?PM(t,n):LM(t,n))&&(c=ec(c,"onBeforeInput"),0<c.length&&(u=new ym("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=w))}O_(d,e)})}function sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ec(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Qo(t,n),s!=null&&i.unshift(sa(t,s,r)),s=Qo(t,e),s!=null&&i.push(sa(t,s,r))),t=t.return}return i}function ts(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Dm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Qo(n,s),l!=null&&o.unshift(sa(n,l,a))):r||(l=Qo(n,s),l!=null&&o.push(sa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var jM=/\r\n?/g,XM=/\u0000|\uFFFD/g;function Nm(t){return(typeof t=="string"?t:""+t).replace(jM,`
`).replace(XM,"")}function Xa(t,e,n){if(e=Nm(e),Nm(t)!==e&&n)throw Error(ee(425))}function tc(){}var Wd=null,jd=null;function Xd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Yd=typeof setTimeout=="function"?setTimeout:void 0,YM=typeof clearTimeout=="function"?clearTimeout:void 0,Im=typeof Promise=="function"?Promise:void 0,$M=typeof queueMicrotask=="function"?queueMicrotask:typeof Im<"u"?function(t){return Im.resolve(null).then(t).catch(KM)}:Yd;function KM(t){setTimeout(function(){throw t})}function Tu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ta(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ta(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Um(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var co=Math.random().toString(36).slice(2),ei="__reactFiber$"+co,oa="__reactProps$"+co,bi="__reactContainer$"+co,$d="__reactEvents$"+co,qM="__reactListeners$"+co,ZM="__reactHandles$"+co;function Ur(t){var e=t[ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bi]||n[ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Um(t);t!==null;){if(n=t[ei])return n;t=Um(t)}return e}t=n,n=t.parentNode}return null}function Ma(t){return t=t[ei]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function kc(t){return t[oa]||null}var Kd=[],ws=-1;function pr(t){return{current:t}}function rt(t){0>ws||(t.current=Kd[ws],Kd[ws]=null,ws--)}function tt(t,e){ws++,Kd[ws]=t.current,t.current=e}var lr={},$t=pr(lr),on=pr(!1),Wr=lr;function Ys(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function nc(){rt(on),rt($t)}function Fm(t,e,n){if($t.current!==lr)throw Error(ee(168));tt($t,e),tt(on,n)}function B_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,US(t)||"Unknown",r));return dt({},n,i)}function ic(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Wr=$t.current,tt($t,t),tt(on,on.current),!0}function Om(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=B_(t,e,Wr),i.__reactInternalMemoizedMergedChildContext=t,rt(on),rt($t),tt($t,t)):rt(on),tt(on,n)}var _i=null,Bc=!1,wu=!1;function z_(t){_i===null?_i=[t]:_i.push(t)}function QM(t){Bc=!0,z_(t)}function mr(){if(!wu&&_i!==null){wu=!0;var t=0,e=Je;try{var n=_i;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}_i=null,Bc=!1}catch(r){throw _i!==null&&(_i=_i.slice(t+1)),d_(Eh,mr),r}finally{Je=e,wu=!1}}return null}var As=[],Cs=0,rc=null,sc=0,Cn=[],bn=0,jr=null,yi=1,Si="";function Cr(t,e){As[Cs++]=sc,As[Cs++]=rc,rc=t,sc=e}function V_(t,e,n){Cn[bn++]=yi,Cn[bn++]=Si,Cn[bn++]=jr,jr=t;var i=yi;t=Si;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,yi=1<<32-Xn(e)+r|n<<r|i,Si=s+t}else yi=1<<s|n<<r|i,Si=t}function Dh(t){t.return!==null&&(Cr(t,1),V_(t,1,0))}function Nh(t){for(;t===rc;)rc=As[--Cs],As[Cs]=null,sc=As[--Cs],As[Cs]=null;for(;t===jr;)jr=Cn[--bn],Cn[bn]=null,Si=Cn[--bn],Cn[bn]=null,yi=Cn[--bn],Cn[bn]=null}var vn=null,gn=null,ot=!1,Gn=null;function H_(t,e){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function km(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vn=t,gn=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vn=t,gn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=jr!==null?{id:yi,overflow:Si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vn=t,gn=null,!0):!1;default:return!1}}function qd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zd(t){if(ot){var e=gn;if(e){var n=e;if(!km(t,e)){if(qd(t))throw Error(ee(418));e=er(n.nextSibling);var i=vn;e&&km(t,e)?H_(i,n):(t.flags=t.flags&-4097|2,ot=!1,vn=t)}}else{if(qd(t))throw Error(ee(418));t.flags=t.flags&-4097|2,ot=!1,vn=t}}}function Bm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vn=t}function Ya(t){if(t!==vn)return!1;if(!ot)return Bm(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Xd(t.type,t.memoizedProps)),e&&(e=gn)){if(qd(t))throw G_(),Error(ee(418));for(;e;)H_(t,e),e=er(e.nextSibling)}if(Bm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gn=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gn=null}}else gn=vn?er(t.stateNode.nextSibling):null;return!0}function G_(){for(var t=gn;t;)t=er(t.nextSibling)}function $s(){gn=vn=null,ot=!1}function Ih(t){Gn===null?Gn=[t]:Gn.push(t)}var JM=Ni.ReactCurrentBatchConfig;function yo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function $a(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function zm(t){var e=t._init;return e(t._payload)}function W_(t){function e(f,_){if(t){var g=f.deletions;g===null?(f.deletions=[_],f.flags|=16):g.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=rr(f,_),f.index=0,f.sibling=null,f}function s(f,_,g){return f.index=g,t?(g=f.alternate,g!==null?(g=g.index,g<_?(f.flags|=2,_):g):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,_,g,y){return _===null||_.tag!==6?(_=Du(g,f.mode,y),_.return=f,_):(_=r(_,g),_.return=f,_)}function l(f,_,g,y){var C=g.type;return C===ys?u(f,_,g.props.children,y,g.key):_!==null&&(_.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Gi&&zm(C)===_.type)?(y=r(_,g.props),y.ref=yo(f,_,g),y.return=f,y):(y=Ol(g.type,g.key,g.props,null,f.mode,y),y.ref=yo(f,_,g),y.return=f,y)}function c(f,_,g,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==g.containerInfo||_.stateNode.implementation!==g.implementation?(_=Nu(g,f.mode,y),_.return=f,_):(_=r(_,g.children||[]),_.return=f,_)}function u(f,_,g,y,C){return _===null||_.tag!==7?(_=Hr(g,f.mode,y,C),_.return=f,_):(_=r(_,g),_.return=f,_)}function d(f,_,g){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Du(""+_,f.mode,g),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Oa:return g=Ol(_.type,_.key,_.props,null,f.mode,g),g.ref=yo(f,null,_),g.return=f,g;case xs:return _=Nu(_,f.mode,g),_.return=f,_;case Gi:var y=_._init;return d(f,y(_._payload),g)}if(Po(_)||mo(_))return _=Hr(_,f.mode,g,null),_.return=f,_;$a(f,_)}return null}function h(f,_,g,y){var C=_!==null?_.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(f,_,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Oa:return g.key===C?l(f,_,g,y):null;case xs:return g.key===C?c(f,_,g,y):null;case Gi:return C=g._init,h(f,_,C(g._payload),y)}if(Po(g)||mo(g))return C!==null?null:u(f,_,g,y,null);$a(f,g)}return null}function p(f,_,g,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(g)||null,a(_,f,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Oa:return f=f.get(y.key===null?g:y.key)||null,l(_,f,y,C);case xs:return f=f.get(y.key===null?g:y.key)||null,c(_,f,y,C);case Gi:var A=y._init;return p(f,_,g,A(y._payload),C)}if(Po(y)||mo(y))return f=f.get(g)||null,u(_,f,y,C,null);$a(_,y)}return null}function x(f,_,g,y){for(var C=null,A=null,w=_,b=_=0,T=null;w!==null&&b<g.length;b++){w.index>b?(T=w,w=null):T=w.sibling;var S=h(f,w,g[b],y);if(S===null){w===null&&(w=T);break}t&&w&&S.alternate===null&&e(f,w),_=s(S,_,b),A===null?C=S:A.sibling=S,A=S,w=T}if(b===g.length)return n(f,w),ot&&Cr(f,b),C;if(w===null){for(;b<g.length;b++)w=d(f,g[b],y),w!==null&&(_=s(w,_,b),A===null?C=w:A.sibling=w,A=w);return ot&&Cr(f,b),C}for(w=i(f,w);b<g.length;b++)T=p(w,f,b,g[b],y),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?b:T.key),_=s(T,_,b),A===null?C=T:A.sibling=T,A=T);return t&&w.forEach(function(L){return e(f,L)}),ot&&Cr(f,b),C}function v(f,_,g,y){var C=mo(g);if(typeof C!="function")throw Error(ee(150));if(g=C.call(g),g==null)throw Error(ee(151));for(var A=C=null,w=_,b=_=0,T=null,S=g.next();w!==null&&!S.done;b++,S=g.next()){w.index>b?(T=w,w=null):T=w.sibling;var L=h(f,w,S.value,y);if(L===null){w===null&&(w=T);break}t&&w&&L.alternate===null&&e(f,w),_=s(L,_,b),A===null?C=L:A.sibling=L,A=L,w=T}if(S.done)return n(f,w),ot&&Cr(f,b),C;if(w===null){for(;!S.done;b++,S=g.next())S=d(f,S.value,y),S!==null&&(_=s(S,_,b),A===null?C=S:A.sibling=S,A=S);return ot&&Cr(f,b),C}for(w=i(f,w);!S.done;b++,S=g.next())S=p(w,f,b,S.value,y),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?b:S.key),_=s(S,_,b),A===null?C=S:A.sibling=S,A=S);return t&&w.forEach(function(H){return e(f,H)}),ot&&Cr(f,b),C}function m(f,_,g,y){if(typeof g=="object"&&g!==null&&g.type===ys&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Oa:e:{for(var C=g.key,A=_;A!==null;){if(A.key===C){if(C=g.type,C===ys){if(A.tag===7){n(f,A.sibling),_=r(A,g.props.children),_.return=f,f=_;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Gi&&zm(C)===A.type){n(f,A.sibling),_=r(A,g.props),_.ref=yo(f,A,g),_.return=f,f=_;break e}n(f,A);break}else e(f,A);A=A.sibling}g.type===ys?(_=Hr(g.props.children,f.mode,y,g.key),_.return=f,f=_):(y=Ol(g.type,g.key,g.props,null,f.mode,y),y.ref=yo(f,_,g),y.return=f,f=y)}return o(f);case xs:e:{for(A=g.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===g.containerInfo&&_.stateNode.implementation===g.implementation){n(f,_.sibling),_=r(_,g.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=Nu(g,f.mode,y),_.return=f,f=_}return o(f);case Gi:return A=g._init,m(f,_,A(g._payload),y)}if(Po(g))return x(f,_,g,y);if(mo(g))return v(f,_,g,y);$a(f,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,g),_.return=f,f=_):(n(f,_),_=Du(g,f.mode,y),_.return=f,f=_),o(f)):n(f,_)}return m}var Ks=W_(!0),j_=W_(!1),oc=pr(null),ac=null,bs=null,Uh=null;function Fh(){Uh=bs=ac=null}function Oh(t){var e=oc.current;rt(oc),t._currentValue=e}function Qd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Vs(t,e){ac=t,Uh=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(sn=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(Uh!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(ac===null)throw Error(ee(308));bs=t,ac.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var Fr=null;function kh(t){Fr===null?Fr=[t]:Fr.push(t)}function X_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,kh(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ri(t,i)}function Ri(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wi=!1;function Bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Y_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ti(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,We&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ri(t,n)}return r=i.interleaved,r===null?(e.next=e,kh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ri(t,n)}function Ll(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Th(t,n)}}function Vm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lc(t,e,n,i){var r=t.updateQueue;Wi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,v=a;switch(h=e,p=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){d=x.call(p,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,h=typeof x=="function"?x.call(p,d,h):x,h==null)break e;d=dt({},d,h);break e;case 2:Wi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=d),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Yr|=o,t.lanes=o,t.memoizedState=d}}function Hm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Ea={},ri=pr(Ea),aa=pr(Ea),la=pr(Ea);function Or(t){if(t===Ea)throw Error(ee(174));return t}function zh(t,e){switch(tt(la,e),tt(aa,t),tt(ri,Ea),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Dd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Dd(e,t)}rt(ri),tt(ri,e)}function qs(){rt(ri),rt(aa),rt(la)}function $_(t){Or(la.current);var e=Or(ri.current),n=Dd(e,t.type);e!==n&&(tt(aa,t),tt(ri,n))}function Vh(t){aa.current===t&&(rt(ri),rt(aa))}var lt=pr(0);function cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Au=[];function Hh(){for(var t=0;t<Au.length;t++)Au[t]._workInProgressVersionPrimary=null;Au.length=0}var Dl=Ni.ReactCurrentDispatcher,Cu=Ni.ReactCurrentBatchConfig,Xr=0,ut=null,At=null,Dt=null,uc=!1,Ho=!1,ca=0,eE=0;function zt(){throw Error(ee(321))}function Gh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function Wh(t,e,n,i,r,s){if(Xr=s,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Dl.current=t===null||t.memoizedState===null?rE:sE,t=n(i,r),Ho){s=0;do{if(Ho=!1,ca=0,25<=s)throw Error(ee(301));s+=1,Dt=At=null,e.updateQueue=null,Dl.current=oE,t=n(i,r)}while(Ho)}if(Dl.current=dc,e=At!==null&&At.next!==null,Xr=0,Dt=At=ut=null,uc=!1,e)throw Error(ee(300));return t}function jh(){var t=ca!==0;return ca=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dt===null?ut.memoizedState=Dt=t:Dt=Dt.next=t,Dt}function In(){if(At===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Dt===null?ut.memoizedState:Dt.next;if(e!==null)Dt=e,At=t;else{if(t===null)throw Error(ee(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Dt===null?ut.memoizedState=Dt=t:Dt=Dt.next=t}return Dt}function ua(t,e){return typeof e=="function"?e(t):e}function bu(t){var e=In(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Xr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ut.lanes|=u,Yr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,$n(i,e.memoizedState)||(sn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ut.lanes|=s,Yr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ru(t){var e=In(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);$n(s,e.memoizedState)||(sn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function K_(){}function q_(t,e){var n=ut,i=In(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,sn=!0),i=i.queue,Xh(J_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Dt!==null&&Dt.memoizedState.tag&1){if(n.flags|=2048,da(9,Q_.bind(null,n,i,r,e),void 0,null),Nt===null)throw Error(ee(349));Xr&30||Z_(n,e,r)}return r}function Z_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Q_(t,e,n,i){e.value=n,e.getSnapshot=i,ex(e)&&tx(t)}function J_(t,e,n){return n(function(){ex(e)&&tx(t)})}function ex(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function tx(t){var e=Ri(t,1);e!==null&&Yn(e,t,1,-1)}function Gm(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},e.queue=t,t=t.dispatch=iE.bind(null,ut,t),[e.memoizedState,t]}function da(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function nx(){return In().memoizedState}function Nl(t,e,n,i){var r=Zn();ut.flags|=t,r.memoizedState=da(1|e,n,void 0,i===void 0?null:i)}function zc(t,e,n,i){var r=In();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&Gh(i,o.deps)){r.memoizedState=da(e,n,s,i);return}}ut.flags|=t,r.memoizedState=da(1|e,n,s,i)}function Wm(t,e){return Nl(8390656,8,t,e)}function Xh(t,e){return zc(2048,8,t,e)}function ix(t,e){return zc(4,2,t,e)}function rx(t,e){return zc(4,4,t,e)}function sx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ox(t,e,n){return n=n!=null?n.concat([t]):null,zc(4,4,sx.bind(null,e,t),n)}function Yh(){}function ax(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Gh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function lx(t,e){var n=In();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Gh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function cx(t,e,n){return Xr&21?($n(n,e)||(n=p_(),ut.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,sn=!0),t.memoizedState=n)}function tE(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=Cu.transition;Cu.transition={};try{t(!1),e()}finally{Je=n,Cu.transition=i}}function ux(){return In().memoizedState}function nE(t,e,n){var i=ir(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},dx(t))fx(e,n);else if(n=X_(t,e,n,i),n!==null){var r=Zt();Yn(n,t,i,r),hx(n,e,i)}}function iE(t,e,n){var i=ir(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(dx(t))fx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,$n(a,o)){var l=e.interleaved;l===null?(r.next=r,kh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=X_(t,e,r,i),n!==null&&(r=Zt(),Yn(n,t,i,r),hx(n,e,i))}}function dx(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function fx(t,e){Ho=uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function hx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Th(t,n)}}var dc={readContext:Nn,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},rE={readContext:Nn,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:Wm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,sx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=nE.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:Gm,useDebugValue:Yh,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=Gm(!1),e=t[0];return t=tE.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=Zn();if(ot){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Nt===null)throw Error(ee(349));Xr&30||Z_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Wm(J_.bind(null,i,s,t),[t]),i.flags|=2048,da(9,Q_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=Nt.identifierPrefix;if(ot){var n=Si,i=yi;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ca++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=eE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},sE={readContext:Nn,useCallback:ax,useContext:Nn,useEffect:Xh,useImperativeHandle:ox,useInsertionEffect:ix,useLayoutEffect:rx,useMemo:lx,useReducer:bu,useRef:nx,useState:function(){return bu(ua)},useDebugValue:Yh,useDeferredValue:function(t){var e=In();return cx(e,At.memoizedState,t)},useTransition:function(){var t=bu(ua)[0],e=In().memoizedState;return[t,e]},useMutableSource:K_,useSyncExternalStore:q_,useId:ux,unstable_isNewReconciler:!1},oE={readContext:Nn,useCallback:ax,useContext:Nn,useEffect:Xh,useImperativeHandle:ox,useInsertionEffect:ix,useLayoutEffect:rx,useMemo:lx,useReducer:Ru,useRef:nx,useState:function(){return Ru(ua)},useDebugValue:Yh,useDeferredValue:function(t){var e=In();return At===null?e.memoizedState=t:cx(e,At.memoizedState,t)},useTransition:function(){var t=Ru(ua)[0],e=In().memoizedState;return[t,e]},useMutableSource:K_,useSyncExternalStore:q_,useId:ux,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=dt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:dt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vc={isMounted:function(t){return(t=t._reactInternals)?Qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=ir(t),s=Ti(i,r);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&(Yn(e,t,r,i),Ll(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Zt(),r=ir(t),s=Ti(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&(Yn(e,t,r,i),Ll(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Zt(),i=ir(t),r=Ti(n,i);r.tag=2,e!=null&&(r.callback=e),e=tr(t,r,i),e!==null&&(Yn(e,t,i,n),Ll(e,t,i))}};function jm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ia(n,i)||!ia(r,s):!0}function px(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(r=an(e)?Wr:$t.current,i=e.contextTypes,s=(i=i!=null)?Ys(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Xm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Vc.enqueueReplaceState(e,e.state,null)}function ef(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Bh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Nn(s):(s=an(e)?Wr:$t.current,r.context=Ys(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Jd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Vc.enqueueReplaceState(r,r.state,null),lc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Zs(t,e){try{var n="",i=e;do n+=IS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Pu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function tf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var aE=typeof WeakMap=="function"?WeakMap:Map;function mx(t,e,n){n=Ti(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){hc||(hc=!0,ff=i),tf(t,e)},n}function gx(t,e,n){n=Ti(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){tf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){tf(t,e),typeof i!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ym(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new aE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=SE.bind(null,t,e,n),e.then(t,t))}function $m(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Km(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ti(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var lE=Ni.ReactCurrentOwner,sn=!1;function qt(t,e,n,i){e.child=t===null?j_(e,null,n,i):Ks(e,t.child,n,i)}function qm(t,e,n,i,r){n=n.render;var s=e.ref;return Vs(e,r),i=Wh(t,e,n,i,s,r),n=jh(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(ot&&n&&Dh(e),e.flags|=1,qt(t,e,i,r),e.child)}function Zm(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!tp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,vx(t,e,s,i,r)):(t=Ol(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ia,n(o,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=rr(s,i),t.ref=e.ref,t.return=e,e.child=t}function vx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ia(s,i)&&t.ref===e.ref)if(sn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(sn=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return nf(t,e,n,i,r)}function _x(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(Ps,mn),mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(Ps,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,tt(Ps,mn),mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,tt(Ps,mn),mn|=i;return qt(t,e,r,n),e.child}function xx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nf(t,e,n,i,r){var s=an(n)?Wr:$t.current;return s=Ys(e,s),Vs(e,r),n=Wh(t,e,n,i,s,r),i=jh(),t!==null&&!sn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(ot&&i&&Dh(e),e.flags|=1,qt(t,e,n,r),e.child)}function Qm(t,e,n,i,r){if(an(n)){var s=!0;ic(e)}else s=!1;if(Vs(e,r),e.stateNode===null)Il(t,e),px(e,n,i),ef(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Nn(c):(c=an(n)?Wr:$t.current,c=Ys(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Xm(e,o,i,c),Wi=!1;var h=e.memoizedState;o.state=h,lc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||on.current||Wi?(typeof u=="function"&&(Jd(e,n,u,i),l=e.memoizedState),(a=Wi||jm(e,n,a,i,h,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Y_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Vn(e.type,a),o.props=c,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nn(l):(l=an(n)?Wr:$t.current,l=Ys(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Xm(e,o,i,l),Wi=!1,h=e.memoizedState,o.state=h,lc(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||on.current||Wi?(typeof p=="function"&&(Jd(e,n,p,i),x=e.memoizedState),(c=Wi||jm(e,n,c,i,h,x,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return rf(t,e,n,i,s,r)}function rf(t,e,n,i,r,s){xx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Om(e,n,!1),Pi(t,e,s);i=e.stateNode,lE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ks(e,t.child,null,s),e.child=Ks(e,null,a,s)):qt(t,e,a,s),e.memoizedState=i.state,r&&Om(e,n,!0),e.child}function yx(t){var e=t.stateNode;e.pendingContext?Fm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fm(t,e.context,!1),zh(t,e.containerInfo)}function Jm(t,e,n,i,r){return $s(),Ih(r),e.flags|=256,qt(t,e,n,i),e.child}var sf={dehydrated:null,treeContext:null,retryLane:0};function of(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sx(t,e,n){var i=e.pendingProps,r=lt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(lt,r&1),t===null)return Zd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Wc(o,i,0,null),t=Hr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=of(n),e.memoizedState=sf,t):$h(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return cE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=rr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=rr(a,s):(s=Hr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?of(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=sf,i}return s=t.child,t=s.sibling,i=rr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function $h(t,e){return e=Wc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ka(t,e,n,i){return i!==null&&Ih(i),Ks(e,t.child,null,n),t=$h(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Pu(Error(ee(422))),Ka(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Wc({mode:"visible",children:i.children},r,0,null),s=Hr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ks(e,t.child,null,o),e.child.memoizedState=of(o),e.memoizedState=sf,s);if(!(e.mode&1))return Ka(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=Pu(s,i,void 0),Ka(t,e,o,i)}if(a=(o&t.childLanes)!==0,sn||a){if(i=Nt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ri(t,r),Yn(i,t,r,-1))}return ep(),i=Pu(Error(ee(421))),Ka(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ME.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,gn=er(r.nextSibling),vn=e,ot=!0,Gn=null,t!==null&&(Cn[bn++]=yi,Cn[bn++]=Si,Cn[bn++]=jr,yi=t.id,Si=t.overflow,jr=e),e=$h(e,i.children),e.flags|=4096,e)}function eg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Qd(t.return,e,n)}function Lu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Mx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(qt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&eg(t,n,e);else if(t.tag===19)eg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&cc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Lu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&cc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Lu(e,!0,n,null,s);break;case"together":Lu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function uE(t,e,n){switch(e.tag){case 3:yx(e),$s();break;case 5:$_(e);break;case 1:an(e.type)&&ic(e);break;case 4:zh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(oc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?Sx(t,e,n):(tt(lt,lt.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);tt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Mx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,_x(t,e,n)}return Pi(t,e,n)}var Ex,af,Tx,wx;Ex=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};af=function(){};Tx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Or(ri.current);var s=null;switch(n){case"input":r=bd(t,r),i=bd(t,i),s=[];break;case"select":r=dt({},r,{value:void 0}),i=dt({},i,{value:void 0}),s=[];break;case"textarea":r=Ld(t,r),i=Ld(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=tc)}Nd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(qo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(qo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&nt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};wx=function(t,e,n,i){n!==i&&(e.flags|=4)};function So(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function dE(t,e,n){var i=e.pendingProps;switch(Nh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vt(e),null;case 1:return an(e.type)&&nc(),Vt(e),null;case 3:return i=e.stateNode,qs(),rt(on),rt($t),Hh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gn!==null&&(mf(Gn),Gn=null))),af(t,e),Vt(e),null;case 5:Vh(e);var r=Or(la.current);if(n=e.type,t!==null&&e.stateNode!=null)Tx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Vt(e),null}if(t=Or(ri.current),Ya(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ei]=e,i[oa]=s,t=(e.mode&1)!==0,n){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(r=0;r<Do.length;r++)nt(Do[r],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":cm(i,s),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},nt("invalid",i);break;case"textarea":dm(i,s),nt("invalid",i)}Nd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Xa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Xa(i.textContent,a,t),r=["children",""+a]):qo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&nt("scroll",i)}switch(n){case"input":ka(i),um(i,s,!0);break;case"textarea":ka(i),fm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=tc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Jv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ei]=e,t[oa]=i,Ex(t,e,!1,!1),e.stateNode=t;e:{switch(o=Id(n,i),n){case"dialog":nt("cancel",t),nt("close",t),r=i;break;case"iframe":case"object":case"embed":nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Do.length;r++)nt(Do[r],t);r=i;break;case"source":nt("error",t),r=i;break;case"img":case"image":case"link":nt("error",t),nt("load",t),r=i;break;case"details":nt("toggle",t),r=i;break;case"input":cm(t,i),r=bd(t,i),nt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=dt({},i,{value:void 0}),nt("invalid",t);break;case"textarea":dm(t,i),r=Ld(t,i),nt("invalid",t);break;default:r=i}Nd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?n_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&e_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Zo(t,l):typeof l=="number"&&Zo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&nt("scroll",t):l!=null&&_h(t,s,l,o))}switch(n){case"input":ka(t),um(t,i,!1);break;case"textarea":ka(t),fm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Os(t,!!i.multiple,s,!1):i.defaultValue!=null&&Os(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=tc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Vt(e),null;case 6:if(t&&e.stateNode!=null)wx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=Or(la.current),Or(ri.current),Ya(e)){if(i=e.stateNode,n=e.memoizedProps,i[ei]=e,(s=i.nodeValue!==n)&&(t=vn,t!==null))switch(t.tag){case 3:Xa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return Vt(e),null;case 13:if(rt(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&gn!==null&&e.mode&1&&!(e.flags&128))G_(),$s(),e.flags|=98560,s=!1;else if(s=Ya(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[ei]=e}else $s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Vt(e),s=!1}else Gn!==null&&(mf(Gn),Gn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?bt===0&&(bt=3):ep())),e.updateQueue!==null&&(e.flags|=4),Vt(e),null);case 4:return qs(),af(t,e),t===null&&ra(e.stateNode.containerInfo),Vt(e),null;case 10:return Oh(e.type._context),Vt(e),null;case 17:return an(e.type)&&nc(),Vt(e),null;case 19:if(rt(lt),s=e.memoizedState,s===null)return Vt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)So(s,!1);else{if(bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cc(t),o!==null){for(e.flags|=128,So(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(lt,lt.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>Qs&&(e.flags|=128,i=!0,So(s,!1),e.lanes=4194304)}else{if(!i)if(t=cc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),So(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ot)return Vt(e),null}else 2*_t()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,i=!0,So(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=lt.current,tt(lt,i?n&1|2:n&1),e):(Vt(e),null);case 22:case 23:return Jh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(Vt(e),e.subtreeFlags&6&&(e.flags|=8192)):Vt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function fE(t,e){switch(Nh(e),e.tag){case 1:return an(e.type)&&nc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qs(),rt(on),rt($t),Hh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Vh(e),null;case 13:if(rt(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));$s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt(lt),null;case 4:return qs(),null;case 10:return Oh(e.type._context),null;case 22:case 23:return Jh(),null;case 24:return null;default:return null}}var qa=!1,jt=!1,hE=typeof WeakSet=="function"?WeakSet:Set,he=null;function Rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){gt(t,e,i)}else n.current=null}function lf(t,e,n){try{n()}catch(i){gt(t,e,i)}}var tg=!1;function pE(t,e){if(Wd=Ql,t=P_(),Lh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(jd={focusedElem:t,selectionRange:n},Ql=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,m=x.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?v:Vn(e.type,v),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(y){gt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return x=tg,tg=!1,x}function Go(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&lf(e,n,s)}r=r.next}while(r!==i)}}function Hc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function cf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ax(t){var e=t.alternate;e!==null&&(t.alternate=null,Ax(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ei],delete e[oa],delete e[$d],delete e[qM],delete e[ZM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Cx(t){return t.tag===5||t.tag===3||t.tag===4}function ng(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Cx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tc));else if(i!==4&&(t=t.child,t!==null))for(uf(t,e,n),t=t.sibling;t!==null;)uf(t,e,n),t=t.sibling}function df(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(df(t,e,n),t=t.sibling;t!==null;)df(t,e,n),t=t.sibling}var Ft=null,Hn=!1;function Ui(t,e,n){for(n=n.child;n!==null;)bx(t,e,n),n=n.sibling}function bx(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(Ic,n)}catch{}switch(n.tag){case 5:jt||Rs(n,e);case 6:var i=Ft,r=Hn;Ft=null,Ui(t,e,n),Ft=i,Hn=r,Ft!==null&&(Hn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(Hn?(t=Ft,n=n.stateNode,t.nodeType===8?Tu(t.parentNode,n):t.nodeType===1&&Tu(t,n),ta(t)):Tu(Ft,n.stateNode));break;case 4:i=Ft,r=Hn,Ft=n.stateNode.containerInfo,Hn=!0,Ui(t,e,n),Ft=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&lf(n,e,o),r=r.next}while(r!==i)}Ui(t,e,n);break;case 1:if(!jt&&(Rs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){gt(n,e,a)}Ui(t,e,n);break;case 21:Ui(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,Ui(t,e,n),jt=i):Ui(t,e,n);break;default:Ui(t,e,n)}}function ig(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new hE),e.forEach(function(i){var r=EE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ft=a.stateNode,Hn=!1;break e;case 3:Ft=a.stateNode.containerInfo,Hn=!0;break e;case 4:Ft=a.stateNode.containerInfo,Hn=!0;break e}a=a.return}if(Ft===null)throw Error(ee(160));bx(s,o,r),Ft=null,Hn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){gt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Rx(e,t),e=e.sibling}function Rx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),qn(t),i&4){try{Go(3,t,t.return),Hc(3,t)}catch(v){gt(t,t.return,v)}try{Go(5,t,t.return)}catch(v){gt(t,t.return,v)}}break;case 1:Fn(e,t),qn(t),i&512&&n!==null&&Rs(n,n.return);break;case 5:if(Fn(e,t),qn(t),i&512&&n!==null&&Rs(n,n.return),t.flags&32){var r=t.stateNode;try{Zo(r,"")}catch(v){gt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Zv(r,s),Id(a,o);var c=Id(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?n_(r,d):u==="dangerouslySetInnerHTML"?e_(r,d):u==="children"?Zo(r,d):_h(r,u,d,c)}switch(a){case"input":Rd(r,s);break;case"textarea":Qv(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Os(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Os(r,!!s.multiple,s.defaultValue,!0):Os(r,!!s.multiple,s.multiple?[]:"",!1))}r[oa]=s}catch(v){gt(t,t.return,v)}}break;case 6:if(Fn(e,t),qn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){gt(t,t.return,v)}}break;case 3:if(Fn(e,t),qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ta(e.containerInfo)}catch(v){gt(t,t.return,v)}break;case 4:Fn(e,t),qn(t);break;case 13:Fn(e,t),qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Zh=_t())),i&4&&ig(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(c=jt)||u,Fn(e,t),jt=c):Fn(e,t),qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(he=t,u=t.child;u!==null;){for(d=he=u;he!==null;){switch(h=he,p=h.child,h.tag){case 0:case 11:case 14:case 15:Go(4,h,h.return);break;case 1:Rs(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(v){gt(i,n,v)}}break;case 5:Rs(h,h.return);break;case 22:if(h.memoizedState!==null){sg(d);continue}}p!==null?(p.return=h,he=p):sg(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{r=d.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=t_("display",o))}catch(v){gt(t,t.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(v){gt(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Fn(e,t),qn(t),i&4&&ig(t);break;case 21:break;default:Fn(e,t),qn(t)}}function qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Cx(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Zo(r,""),i.flags&=-33);var s=ng(t);df(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=ng(t);uf(t,a,o);break;default:throw Error(ee(161))}}catch(l){gt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function mE(t,e,n){he=t,Px(t)}function Px(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||qa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||jt;a=qa;var c=jt;if(qa=o,(jt=l)&&!c)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?og(r):l!==null?(l.return=o,he=l):og(r);for(;s!==null;)he=s,Px(s),s=s.sibling;he=r,qa=a,jt=c}rg(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):rg(t)}}function rg(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||Hc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Hm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Hm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ta(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}jt||e.flags&512&&cf(e)}catch(h){gt(e,e.return,h)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function sg(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function og(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hc(4,e)}catch(l){gt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){gt(e,r,l)}}var s=e.return;try{cf(e)}catch(l){gt(e,s,l)}break;case 5:var o=e.return;try{cf(e)}catch(l){gt(e,o,l)}}}catch(l){gt(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var gE=Math.ceil,fc=Ni.ReactCurrentDispatcher,Kh=Ni.ReactCurrentOwner,Dn=Ni.ReactCurrentBatchConfig,We=0,Nt=null,wt=null,kt=0,mn=0,Ps=pr(0),bt=0,fa=null,Yr=0,Gc=0,qh=0,Wo=null,nn=null,Zh=0,Qs=1/0,vi=null,hc=!1,ff=null,nr=null,Za=!1,Ki=null,pc=0,jo=0,hf=null,Ul=-1,Fl=0;function Zt(){return We&6?_t():Ul!==-1?Ul:Ul=_t()}function ir(t){return t.mode&1?We&2&&kt!==0?kt&-kt:JM.transition!==null?(Fl===0&&(Fl=p_()),Fl):(t=Je,t!==0||(t=window.event,t=t===void 0?16:S_(t.type)),t):1}function Yn(t,e,n,i){if(50<jo)throw jo=0,hf=null,Error(ee(185));ya(t,n,i),(!(We&2)||t!==Nt)&&(t===Nt&&(!(We&2)&&(Gc|=n),bt===4&&Xi(t,kt)),ln(t,i),n===1&&We===0&&!(e.mode&1)&&(Qs=_t()+500,Bc&&mr()))}function ln(t,e){var n=t.callbackNode;JS(t,e);var i=Zl(t,t===Nt?kt:0);if(i===0)n!==null&&mm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&mm(n),e===1)t.tag===0?QM(ag.bind(null,t)):z_(ag.bind(null,t)),$M(function(){!(We&6)&&mr()}),n=null;else{switch(m_(i)){case 1:n=Eh;break;case 4:n=f_;break;case 16:n=ql;break;case 536870912:n=h_;break;default:n=ql}n=kx(n,Lx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Lx(t,e){if(Ul=-1,Fl=0,We&6)throw Error(ee(327));var n=t.callbackNode;if(Hs()&&t.callbackNode!==n)return null;var i=Zl(t,t===Nt?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=mc(t,i);else{e=i;var r=We;We|=2;var s=Nx();(Nt!==t||kt!==e)&&(vi=null,Qs=_t()+500,Vr(t,e));do try{xE();break}catch(a){Dx(t,a)}while(!0);Fh(),fc.current=s,We=r,wt!==null?e=0:(Nt=null,kt=0,e=bt)}if(e!==0){if(e===2&&(r=Bd(t),r!==0&&(i=r,e=pf(t,r))),e===1)throw n=fa,Vr(t,0),Xi(t,i),ln(t,_t()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!vE(r)&&(e=mc(t,i),e===2&&(s=Bd(t),s!==0&&(i=s,e=pf(t,s))),e===1))throw n=fa,Vr(t,0),Xi(t,i),ln(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:br(t,nn,vi);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=Zh+500-_t(),10<e)){if(Zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Zt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Yd(br.bind(null,t,nn,vi),e);break}br(t,nn,vi);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Xn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*gE(i/1960))-i,10<i){t.timeoutHandle=Yd(br.bind(null,t,nn,vi),i);break}br(t,nn,vi);break;case 5:br(t,nn,vi);break;default:throw Error(ee(329))}}}return ln(t,_t()),t.callbackNode===n?Lx.bind(null,t):null}function pf(t,e){var n=Wo;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=mc(t,e),t!==2&&(e=nn,nn=n,e!==null&&mf(e)),t}function mf(t){nn===null?nn=t:nn.push.apply(nn,t)}function vE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~qh,e&=~Gc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function ag(t){if(We&6)throw Error(ee(327));Hs();var e=Zl(t,0);if(!(e&1))return ln(t,_t()),null;var n=mc(t,e);if(t.tag!==0&&n===2){var i=Bd(t);i!==0&&(e=i,n=pf(t,i))}if(n===1)throw n=fa,Vr(t,0),Xi(t,e),ln(t,_t()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,br(t,nn,vi),ln(t,_t()),null}function Qh(t,e){var n=We;We|=1;try{return t(e)}finally{We=n,We===0&&(Qs=_t()+500,Bc&&mr())}}function $r(t){Ki!==null&&Ki.tag===0&&!(We&6)&&Hs();var e=We;We|=1;var n=Dn.transition,i=Je;try{if(Dn.transition=null,Je=1,t)return t()}finally{Je=i,Dn.transition=n,We=e,!(We&6)&&mr()}}function Jh(){mn=Ps.current,rt(Ps)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,YM(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(Nh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&nc();break;case 3:qs(),rt(on),rt($t),Hh();break;case 5:Vh(i);break;case 4:qs();break;case 13:rt(lt);break;case 19:rt(lt);break;case 10:Oh(i.type._context);break;case 22:case 23:Jh()}n=n.return}if(Nt=t,wt=t=rr(t.current,null),kt=mn=e,bt=0,fa=null,qh=Gc=Yr=0,nn=Wo=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Fr=null}return t}function Dx(t,e){do{var n=wt;try{if(Fh(),Dl.current=dc,uc){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}uc=!1}if(Xr=0,Dt=At=ut=null,Ho=!1,ca=0,Kh.current=null,n===null||n.return===null){bt=1,fa=e,wt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=$m(o);if(p!==null){p.flags&=-257,Km(p,o,a,s,e),p.mode&1&&Ym(s,c,e),e=p,l=c;var x=e.updateQueue;if(x===null){var v=new Set;v.add(l),e.updateQueue=v}else x.add(l);break e}else{if(!(e&1)){Ym(s,c,e),ep();break e}l=Error(ee(426))}}else if(ot&&a.mode&1){var m=$m(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Km(m,o,a,s,e),Ih(Zs(l,a));break e}}s=l=Zs(l,a),bt!==4&&(bt=2),Wo===null?Wo=[s]:Wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=mx(s,l,e);Vm(s,f);break e;case 1:a=l;var _=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(nr===null||!nr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=gx(s,a,e);Vm(s,y);break e}}s=s.return}while(s!==null)}Ux(n)}catch(C){e=C,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function Nx(){var t=fc.current;return fc.current=dc,t===null?dc:t}function ep(){(bt===0||bt===3||bt===2)&&(bt=4),Nt===null||!(Yr&268435455)&&!(Gc&268435455)||Xi(Nt,kt)}function mc(t,e){var n=We;We|=2;var i=Nx();(Nt!==t||kt!==e)&&(vi=null,Vr(t,e));do try{_E();break}catch(r){Dx(t,r)}while(!0);if(Fh(),We=n,fc.current=i,wt!==null)throw Error(ee(261));return Nt=null,kt=0,bt}function _E(){for(;wt!==null;)Ix(wt)}function xE(){for(;wt!==null&&!WS();)Ix(wt)}function Ix(t){var e=Ox(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?Ux(t):wt=e,Kh.current=null}function Ux(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=fE(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{bt=6,wt=null;return}}else if(n=dE(n,e,mn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);bt===0&&(bt=5)}function br(t,e,n){var i=Je,r=Dn.transition;try{Dn.transition=null,Je=1,yE(t,e,n,i)}finally{Dn.transition=r,Je=i}return null}function yE(t,e,n,i){do Hs();while(Ki!==null);if(We&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(eM(t,s),t===Nt&&(wt=Nt=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Za||(Za=!0,kx(ql,function(){return Hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=Je;Je=1;var a=We;We|=4,Kh.current=null,pE(t,n),Rx(n,t),zM(jd),Ql=!!Wd,jd=Wd=null,t.current=n,mE(n),jS(),We=a,Je=o,Dn.transition=s}else t.current=n;if(Za&&(Za=!1,Ki=t,pc=r),s=t.pendingLanes,s===0&&(nr=null),$S(n.stateNode),ln(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(hc)throw hc=!1,t=ff,ff=null,t;return pc&1&&t.tag!==0&&Hs(),s=t.pendingLanes,s&1?t===hf?jo++:(jo=0,hf=t):jo=0,mr(),null}function Hs(){if(Ki!==null){var t=m_(pc),e=Dn.transition,n=Je;try{if(Dn.transition=null,Je=16>t?16:t,Ki===null)var i=!1;else{if(t=Ki,Ki=null,pc=0,We&6)throw Error(ee(331));var r=We;for(We|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(he=c;he!==null;){var u=he;switch(u.tag){case 0:case 11:case 15:Go(8,u,s)}var d=u.child;if(d!==null)d.return=u,he=d;else for(;he!==null;){u=he;var h=u.sibling,p=u.return;if(Ax(u),u===c){he=null;break}if(h!==null){h.return=p,he=h;break}he=p}}}var x=s.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Go(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,he=f;break e}he=s.return}}var _=t.current;for(he=_;he!==null;){o=he;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,he=g;else e:for(o=_;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hc(9,a)}}catch(C){gt(a,a.return,C)}if(a===o){he=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,he=y;break e}he=a.return}}if(We=r,mr(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(Ic,t)}catch{}i=!0}return i}finally{Je=n,Dn.transition=e}}return!1}function lg(t,e,n){e=Zs(n,e),e=mx(t,e,1),t=tr(t,e,1),e=Zt(),t!==null&&(ya(t,1,e),ln(t,e))}function gt(t,e,n){if(t.tag===3)lg(t,t,n);else for(;e!==null;){if(e.tag===3){lg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(nr===null||!nr.has(i))){t=Zs(n,t),t=gx(e,t,1),e=tr(e,t,1),t=Zt(),e!==null&&(ya(e,1,t),ln(e,t));break}}e=e.return}}function SE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Zt(),t.pingedLanes|=t.suspendedLanes&n,Nt===t&&(kt&n)===n&&(bt===4||bt===3&&(kt&130023424)===kt&&500>_t()-Zh?Vr(t,0):qh|=n),ln(t,e)}function Fx(t,e){e===0&&(t.mode&1?(e=Va,Va<<=1,!(Va&130023424)&&(Va=4194304)):e=1);var n=Zt();t=Ri(t,e),t!==null&&(ya(t,e,n),ln(t,n))}function ME(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fx(t,n)}function EE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),Fx(t,n)}var Ox;Ox=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)sn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return sn=!1,uE(t,e,n);sn=!!(t.flags&131072)}else sn=!1,ot&&e.flags&1048576&&V_(e,sc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Il(t,e),t=e.pendingProps;var r=Ys(e,$t.current);Vs(e,n),r=Wh(null,e,i,t,r,n);var s=jh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,ic(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Bh(e),r.updater=Vc,e.stateNode=r,r._reactInternals=e,ef(e,i,t,n),e=rf(null,e,i,!0,s,n)):(e.tag=0,ot&&s&&Dh(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Il(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=wE(i),t=Vn(i,t),r){case 0:e=nf(null,e,i,t,n);break e;case 1:e=Qm(null,e,i,t,n);break e;case 11:e=qm(null,e,i,t,n);break e;case 14:e=Zm(null,e,i,Vn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),nf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Qm(t,e,i,r,n);case 3:e:{if(yx(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Y_(t,e),lc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Zs(Error(ee(423)),e),e=Jm(t,e,i,n,r);break e}else if(i!==r){r=Zs(Error(ee(424)),e),e=Jm(t,e,i,n,r);break e}else for(gn=er(e.stateNode.containerInfo.firstChild),vn=e,ot=!0,Gn=null,n=j_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),i===r){e=Pi(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return $_(e),t===null&&Zd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Xd(i,r)?o=null:s!==null&&Xd(i,s)&&(e.flags|=32),xx(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&Zd(e),null;case 13:return Sx(t,e,n);case 4:return zh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ks(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),qm(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,tt(oc,i._currentValue),i._currentValue=o,s!==null)if($n(s.value,o)){if(s.children===r.children&&!on.current){e=Pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ti(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Qd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Qd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Vs(e,n),r=Nn(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=Vn(i,e.pendingProps),r=Vn(i.type,r),Zm(t,e,i,r,n);case 15:return vx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Il(t,e),e.tag=1,an(i)?(t=!0,ic(e)):t=!1,Vs(e,n),px(e,i,r),ef(e,i,r,n),rf(null,e,i,!0,t,n);case 19:return Mx(t,e,n);case 22:return _x(t,e,n)}throw Error(ee(156,e.tag))};function kx(t,e){return d_(t,e)}function TE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,e,n,i){return new TE(t,e,n,i)}function tp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function wE(t){if(typeof t=="function")return tp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===yh)return 11;if(t===Sh)return 14}return 2}function rr(t,e){var n=t.alternate;return n===null?(n=Pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")tp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ys:return Hr(n.children,r,s,e);case xh:o=8,r|=8;break;case Td:return t=Pn(12,n,e,r|2),t.elementType=Td,t.lanes=s,t;case wd:return t=Pn(13,n,e,r),t.elementType=wd,t.lanes=s,t;case Ad:return t=Pn(19,n,e,r),t.elementType=Ad,t.lanes=s,t;case $v:return Wc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xv:o=10;break e;case Yv:o=9;break e;case yh:o=11;break e;case Sh:o=14;break e;case Gi:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=Pn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Hr(t,e,n,i){return t=Pn(7,t,i,e),t.lanes=n,t}function Wc(t,e,n,i){return t=Pn(22,t,i,e),t.elementType=$v,t.lanes=n,t.stateNode={isHidden:!1},t}function Du(t,e,n){return t=Pn(6,t,null,e),t.lanes=n,t}function Nu(t,e,n){return e=Pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function AE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hu(0),this.expirationTimes=hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function np(t,e,n,i,r,s,o,a,l){return t=new AE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bh(s),t}function CE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Bx(t){if(!t)return lr;t=t._reactInternals;e:{if(Qr(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(an(n))return B_(t,n,e)}return e}function zx(t,e,n,i,r,s,o,a,l){return t=np(n,i,!0,t,r,s,o,a,l),t.context=Bx(null),n=t.current,i=Zt(),r=ir(n),s=Ti(i,r),s.callback=e??null,tr(n,s,r),t.current.lanes=r,ya(t,r,i),ln(t,i),t}function jc(t,e,n,i){var r=e.current,s=Zt(),o=ir(r);return n=Bx(n),e.context===null?e.context=n:e.pendingContext=n,e=Ti(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=tr(r,e,o),t!==null&&(Yn(t,r,o,s),Ll(t,r,o)),o}function gc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function cg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ip(t,e){cg(t,e),(t=t.alternate)&&cg(t,e)}function bE(){return null}var Vx=typeof reportError=="function"?reportError:function(t){console.error(t)};function rp(t){this._internalRoot=t}Xc.prototype.render=rp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));jc(t,e,null,null)};Xc.prototype.unmount=rp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$r(function(){jc(null,t,null,null)}),e[bi]=null}};function Xc(t){this._internalRoot=t}Xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=__();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ji.length&&e!==0&&e<ji[n].priority;n++);ji.splice(n,0,t),n===0&&y_(t)}};function sp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ug(){}function RE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=gc(o);s.call(c)}}var o=zx(e,i,t,0,null,!1,!1,"",ug);return t._reactRootContainer=o,t[bi]=o.current,ra(t.nodeType===8?t.parentNode:t),$r(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=gc(l);a.call(c)}}var l=np(t,0,!1,null,null,!1,!1,"",ug);return t._reactRootContainer=l,t[bi]=l.current,ra(t.nodeType===8?t.parentNode:t),$r(function(){jc(e,l,n,i)}),l}function $c(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=gc(o);a.call(l)}}jc(e,o,t,r)}else o=RE(n,e,t,r,i);return gc(o)}g_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Lo(e.pendingLanes);n!==0&&(Th(e,n|1),ln(e,_t()),!(We&6)&&(Qs=_t()+500,mr()))}break;case 13:$r(function(){var i=Ri(t,1);if(i!==null){var r=Zt();Yn(i,t,1,r)}}),ip(t,1)}};wh=function(t){if(t.tag===13){var e=Ri(t,134217728);if(e!==null){var n=Zt();Yn(e,t,134217728,n)}ip(t,134217728)}};v_=function(t){if(t.tag===13){var e=ir(t),n=Ri(t,e);if(n!==null){var i=Zt();Yn(n,t,e,i)}ip(t,e)}};__=function(){return Je};x_=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};Fd=function(t,e,n){switch(e){case"input":if(Rd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=kc(i);if(!r)throw Error(ee(90));qv(i),Rd(i,r)}}}break;case"textarea":Qv(t,n);break;case"select":e=n.value,e!=null&&Os(t,!!n.multiple,e,!1)}};s_=Qh;o_=$r;var PE={usingClientEntryPoint:!1,Events:[Ma,Ts,kc,i_,r_,Qh]},Mo={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},LE={bundleType:Mo.bundleType,version:Mo.version,rendererPackageName:Mo.rendererPackageName,rendererConfig:Mo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=c_(t),t===null?null:t.stateNode},findFiberByHostInstance:Mo.findFiberByHostInstance||bE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Qa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Qa.isDisabled&&Qa.supportsFiber)try{Ic=Qa.inject(LE),ii=Qa}catch{}}Sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PE;Sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sp(e))throw Error(ee(200));return CE(t,e,null,n)};Sn.createRoot=function(t,e){if(!sp(t))throw Error(ee(299));var n=!1,i="",r=Vx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=np(t,1,!1,null,null,n,!1,i,r),t[bi]=e.current,ra(t.nodeType===8?t.parentNode:t),new rp(e)};Sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=c_(e),t=t===null?null:t.stateNode,t};Sn.flushSync=function(t){return $r(t)};Sn.hydrate=function(t,e,n){if(!Yc(e))throw Error(ee(200));return $c(null,t,e,!0,n)};Sn.hydrateRoot=function(t,e,n){if(!sp(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Vx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=zx(e,null,t,1,n??null,r,!1,s,o),t[bi]=e.current,ra(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Xc(e)};Sn.render=function(t,e,n){if(!Yc(e))throw Error(ee(200));return $c(null,t,e,!1,n)};Sn.unmountComponentAtNode=function(t){if(!Yc(t))throw Error(ee(40));return t._reactRootContainer?($r(function(){$c(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1};Sn.unstable_batchedUpdates=Qh;Sn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Yc(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return $c(t,e,n,!1,i)};Sn.version="18.3.1-next-f1338f8080-20240426";function Hx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hx)}catch(t){console.error(t)}}Hx(),Hv.exports=Sn;var DE=Hv.exports,dg=DE;Md.createRoot=dg.createRoot,Md.hydrateRoot=dg.hydrateRoot;const Gx=xe.createContext({});function NE(t){const e=xe.useRef(null);return e.current===null&&(e.current=t()),e.current}const op=xe.createContext(null),Wx=xe.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function IE(t=!0){const e=xe.useContext(op);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=xe.useId();xe.useEffect(()=>{t&&r(s)},[t]);const o=xe.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const ap=typeof window<"u",UE=ap?xe.useLayoutEffect:xe.useEffect,_n=t=>t;let jx=_n;function lp(t){let e;return()=>(e===void 0&&(e=t()),e)}const Js=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},wi=t=>t*1e3,Ai=t=>t/1e3,FE={useManualTiming:!1};function OE(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(c){s.has(c)&&(l.schedule(c),t()),c(o)}const l={schedule:(c,u=!1,d=!1)=>{const p=d&&i?e:n;return u&&s.add(c),p.has(c)||p.add(c),c},cancel:c=>{n.delete(c),s.delete(c)},process:c=>{if(o=c,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(c))}};return l}const Ja=["read","resolveKeyframes","update","preRender","render","postRender"],kE=40;function Xx(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Ja.reduce((f,_)=>(f[_]=OE(s),f),{}),{read:a,resolveKeyframes:l,update:c,preRender:u,render:d,postRender:h}=o,p=()=>{const f=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(f-r.timestamp,kE),1),r.timestamp=f,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),u.process(r),d.process(r),h.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},x=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:Ja.reduce((f,_)=>{const g=o[_];return f[_]=(y,C=!1,A=!1)=>(n||x(),g.schedule(y,C,A)),f},{}),cancel:f=>{for(let _=0;_<Ja.length;_++)o[Ja[_]].cancel(f)},state:r,steps:o}}const{schedule:st,cancel:cr,state:Ot,steps:Iu}=Xx(typeof requestAnimationFrame<"u"?requestAnimationFrame:_n,!0),Yx=xe.createContext({strict:!1}),fg={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},eo={};for(const t in fg)eo[t]={isEnabled:e=>fg[t].some(n=>!!e[n])};function BE(t){for(const e in t)eo[e]={...eo[e],...t[e]}}const zE=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function vc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||zE.has(t)}let $x=t=>!vc(t);function VE(t){t&&($x=e=>e.startsWith("on")?!vc(e):t(e))}try{VE(require("@emotion/is-prop-valid").default)}catch{}function HE(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||($x(r)||n===!0&&vc(r)||!e&&!vc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function GE(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const Kc=xe.createContext({});function ha(t){return typeof t=="string"||Array.isArray(t)}function qc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const cp=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],up=["initial",...cp];function Zc(t){return qc(t.animate)||up.some(e=>ha(t[e]))}function Kx(t){return!!(Zc(t)||t.variants)}function WE(t,e){if(Zc(t)){const{initial:n,animate:i}=t;return{initial:n===!1||ha(n)?n:void 0,animate:ha(i)?i:void 0}}return t.inherit!==!1?e:{}}function jE(t){const{initial:e,animate:n}=WE(t,xe.useContext(Kc));return xe.useMemo(()=>({initial:e,animate:n}),[hg(e),hg(n)])}function hg(t){return Array.isArray(t)?t.join(" "):t}const XE=Symbol.for("motionComponentSymbol");function Ls(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function YE(t,e,n){return xe.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Ls(n)&&(n.current=i))},[e])}const dp=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),$E="framerAppearId",qx="data-"+dp($E),{schedule:fp}=Xx(queueMicrotask,!1),Zx=xe.createContext({});function KE(t,e,n,i,r){var s,o;const{visualElement:a}=xe.useContext(Kc),l=xe.useContext(Yx),c=xe.useContext(op),u=xe.useContext(Wx).reducedMotion,d=xe.useRef(null);i=i||l.renderer,!d.current&&i&&(d.current=i(t,{visualState:e,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:u}));const h=d.current,p=xe.useContext(Zx);h&&!h.projection&&r&&(h.type==="html"||h.type==="svg")&&qE(d.current,n,r,p);const x=xe.useRef(!1);xe.useInsertionEffect(()=>{h&&x.current&&h.update(n,c)});const v=n[qx],m=xe.useRef(!!v&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,v))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,v)));return UE(()=>{h&&(x.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),fp.render(h.render),m.current&&h.animationState&&h.animationState.animateChanges())}),xe.useEffect(()=>{h&&(!m.current&&h.animationState&&h.animationState.animateChanges(),m.current&&(queueMicrotask(()=>{var f;(f=window.MotionHandoffMarkAsComplete)===null||f===void 0||f.call(window,v)}),m.current=!1))}),h}function qE(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:Qx(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Ls(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:c})}function Qx(t){if(t)return t.options.allowProjection!==!1?t.projection:Qx(t.parent)}function ZE({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&BE(t);function a(c,u){let d;const h={...xe.useContext(Wx),...c,layoutId:QE(c)},{isStatic:p}=h,x=jE(c),v=i(c,p);if(!p&&ap){JE();const m=e2(h);d=m.MeasureLayout,x.visualElement=KE(r,v,h,e,m.ProjectionNode)}return D.jsxs(Kc.Provider,{value:x,children:[d&&x.visualElement?D.jsx(d,{visualElement:x.visualElement,...h}):null,n(r,c,YE(v,x.visualElement,u),v,p,x.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=xe.forwardRef(a);return l[XE]=r,l}function QE({layoutId:t}){const e=xe.useContext(Gx).id;return e&&t!==void 0?e+"-"+t:t}function JE(t,e){xe.useContext(Yx).strict}function e2(t){const{drag:e,layout:n}=eo;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const t2=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function hp(t){return typeof t!="string"||t.includes("-")?!1:!!(t2.indexOf(t)>-1||/[A-Z]/u.test(t))}function pg(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function pp(t,e,n,i){if(typeof e=="function"){const[r,s]=pg(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=pg(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const gf=t=>Array.isArray(t),n2=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),i2=t=>gf(t)?t[t.length-1]||0:t,Xt=t=>!!(t&&t.getVelocity);function kl(t){const e=Xt(t)?t.get():t;return n2(e)?e.toValue():e}function r2({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:s2(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const Jx=t=>(e,n)=>{const i=xe.useContext(Kc),r=xe.useContext(op),s=()=>r2(t,e,i,r);return n?s():NE(s)};function s2(t,e,n,i){const r={},s=i(t,{});for(const h in s)r[h]=kl(s[h]);let{initial:o,animate:a}=t;const l=Zc(t),c=Kx(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const d=u?a:o;if(d&&typeof d!="boolean"&&!qc(d)){const h=Array.isArray(d)?d:[d];for(let p=0;p<h.length;p++){const x=pp(t,h[p]);if(x){const{transitionEnd:v,transition:m,...f}=x;for(const _ in f){let g=f[_];if(Array.isArray(g)){const y=u?g.length-1:0;g=g[y]}g!==null&&(r[_]=g)}for(const _ in v)r[_]=v[_]}}}return r}const uo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Jr=new Set(uo),ey=t=>e=>typeof e=="string"&&e.startsWith(t),ty=ey("--"),o2=ey("var(--"),mp=t=>o2(t)?a2.test(t.split("/*")[0].trim()):!1,a2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ny=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Li=(t,e,n)=>n>e?e:n<t?t:n,fo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},pa={...fo,transform:t=>Li(0,1,t)},el={...fo,default:1},Ta=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),Hi=Ta("deg"),si=Ta("%"),we=Ta("px"),l2=Ta("vh"),c2=Ta("vw"),mg={...si,parse:t=>si.parse(t)/100,transform:t=>si.transform(t*100)},u2={borderWidth:we,borderTopWidth:we,borderRightWidth:we,borderBottomWidth:we,borderLeftWidth:we,borderRadius:we,radius:we,borderTopLeftRadius:we,borderTopRightRadius:we,borderBottomRightRadius:we,borderBottomLeftRadius:we,width:we,maxWidth:we,height:we,maxHeight:we,top:we,right:we,bottom:we,left:we,padding:we,paddingTop:we,paddingRight:we,paddingBottom:we,paddingLeft:we,margin:we,marginTop:we,marginRight:we,marginBottom:we,marginLeft:we,backgroundPositionX:we,backgroundPositionY:we},d2={rotate:Hi,rotateX:Hi,rotateY:Hi,rotateZ:Hi,scale:el,scaleX:el,scaleY:el,scaleZ:el,skew:Hi,skewX:Hi,skewY:Hi,distance:we,translateX:we,translateY:we,translateZ:we,x:we,y:we,z:we,perspective:we,transformPerspective:we,opacity:pa,originX:mg,originY:mg,originZ:we},gg={...fo,transform:Math.round},gp={...u2,...d2,zIndex:gg,size:we,fillOpacity:pa,strokeOpacity:pa,numOctaves:gg},f2={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},h2=uo.length;function p2(t,e,n){let i="",r=!0;for(let s=0;s<h2;s++){const o=uo[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const c=ny(a,gp[o]);if(!l){r=!1;const u=f2[o]||o;i+=`${u}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function vp(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(Jr.has(l)){o=!0;continue}else if(ty(l)){r[l]=c;continue}else{const u=ny(c,gp[l]);l.startsWith("origin")?(a=!0,s[l]=u):i[l]=u}}if(e.transform||(o||n?i.transform=p2(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:u=0}=s;i.transformOrigin=`${l} ${c} ${u}`}}const m2={offset:"stroke-dashoffset",array:"stroke-dasharray"},g2={offset:"strokeDashoffset",array:"strokeDasharray"};function v2(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?m2:g2;t[s.offset]=we.transform(-i);const o=we.transform(e),a=we.transform(n);t[s.array]=`${o} ${a}`}function vg(t,e,n){return typeof t=="string"?t:we.transform(e+n*t)}function _2(t,e,n){const i=vg(e,t.x,t.width),r=vg(n,t.y,t.height);return`${i} ${r}`}function _p(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...c},u,d){if(vp(t,c,d),u){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:h,style:p,dimensions:x}=t;h.transform&&(x&&(p.transform=h.transform),delete h.transform),x&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=_2(x,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(h.x=e),n!==void 0&&(h.y=n),i!==void 0&&(h.scale=i),o!==void 0&&v2(h,o,a,l,!1)}const xp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),iy=()=>({...xp(),attrs:{}}),yp=t=>typeof t=="string"&&t.toLowerCase()==="svg";function ry(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const sy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function oy(t,e,n,i){ry(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(sy.has(r)?r:dp(r),e.attrs[r])}const _c={};function x2(t){Object.assign(_c,t)}function ay(t,{layout:e,layoutId:n}){return Jr.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!_c[t]||t==="opacity")}function Sp(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(Xt(r[o])||e.style&&Xt(e.style[o])||ay(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function ly(t,e,n){const i=Sp(t,e,n);for(const r in t)if(Xt(t[r])||Xt(e[r])){const s=uo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function y2(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const _g=["x","y","width","height","cx","cy","r"],S2={useVisualState:Jx({scrapeMotionValuesFromProps:ly,createRenderState:iy,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(Jr.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<_g.length;a++){const l=_g[a];t[l]!==e[l]&&(o=!0)}o&&st.read(()=>{y2(n,i),st.render(()=>{_p(i,r,yp(n.tagName),t.transformTemplate),oy(n,i)})})}})},M2={useVisualState:Jx({scrapeMotionValuesFromProps:Sp,createRenderState:xp})};function cy(t,e,n){for(const i in e)!Xt(e[i])&&!ay(i,n)&&(t[i]=e[i])}function E2({transformTemplate:t},e){return xe.useMemo(()=>{const n=xp();return vp(n,e,t),Object.assign({},n.vars,n.style)},[e])}function T2(t,e){const n=t.style||{},i={};return cy(i,n,t),Object.assign(i,E2(t,e)),i}function w2(t,e){const n={},i=T2(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function A2(t,e,n,i){const r=xe.useMemo(()=>{const s=iy();return _p(s,e,yp(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};cy(s,t.style,t),r.style={...s,...r.style}}return r}function C2(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(hp(n)?A2:w2)(i,s,o,n),c=HE(i,typeof n=="string",t),u=n!==xe.Fragment?{...c,...l,ref:r}:{},{children:d}=i,h=xe.useMemo(()=>Xt(d)?d.get():d,[d]);return xe.createElement(n,{...u,children:h})}}function b2(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...hp(i)?S2:M2,preloadedFeatures:t,useRender:C2(r),createVisualElement:e,Component:i};return ZE(o)}}function uy(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Qc(t,e,n){const i=t.getProps();return pp(i,e,n!==void 0?n:i.custom,t)}const R2=lp(()=>window.ScrollTimeline!==void 0);class P2{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(R2()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class L2 extends P2{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function Mp(t,e){return t?t[e]||t.default||t:void 0}const vf=2e4;function dy(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<vf;)e+=n,i=t.next(e);return e>=vf?1/0:e}function Ep(t){return typeof t=="function"}function xg(t,e){t.timeline=e,t.onfinish=null}const Tp=t=>Array.isArray(t)&&typeof t[0]=="number",D2={linearEasing:void 0};function N2(t,e){const n=lp(t);return()=>{var i;return(i=D2[e])!==null&&i!==void 0?i:n()}}const xc=N2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),fy=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(Js(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function hy(t){return!!(typeof t=="function"&&xc()||!t||typeof t=="string"&&(t in _f||xc())||Tp(t)||Array.isArray(t)&&t.every(hy))}const No=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,_f={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:No([0,.65,.55,1]),circOut:No([.55,0,1,.45]),backIn:No([.31,.01,.66,-.59]),backOut:No([.33,1.53,.69,.99])};function py(t,e){if(t)return typeof t=="function"&&xc()?fy(t,e):Tp(t)?No(t):Array.isArray(t)?t.map(n=>py(n,e)||_f.easeOut):_f[t]}const zn={x:!1,y:!1};function my(){return zn.x||zn.y}function I2(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function gy(t,e){const n=I2(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function yg(t){return e=>{e.pointerType==="touch"||my()||t(e)}}function U2(t,e,n={}){const[i,r,s]=gy(t,n),o=yg(a=>{const{target:l}=a,c=e(a);if(typeof c!="function"||!l)return;const u=yg(d=>{c(d),l.removeEventListener("pointerleave",u)});l.addEventListener("pointerleave",u,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const vy=(t,e)=>e?t===e?!0:vy(t,e.parentElement):!1,wp=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,F2=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function O2(t){return F2.has(t.tagName)||t.tabIndex!==-1}const Io=new WeakSet;function Sg(t){return e=>{e.key==="Enter"&&t(e)}}function Uu(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const k2=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=Sg(()=>{if(Io.has(n))return;Uu(n,"down");const r=Sg(()=>{Uu(n,"up")}),s=()=>Uu(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function Mg(t){return wp(t)&&!my()}function B2(t,e,n={}){const[i,r,s]=gy(t,n),o=a=>{const l=a.currentTarget;if(!Mg(a)||Io.has(l))return;Io.add(l);const c=e(a),u=(p,x)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",h),!(!Mg(p)||!Io.has(l))&&(Io.delete(l),typeof c=="function"&&c(p,{success:x}))},d=p=>{u(p,n.useGlobalTarget||vy(l,p.target))},h=p=>{u(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",h,r)};return i.forEach(a=>{!O2(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",c=>k2(c,r),r)}),s}function z2(t){return t==="x"||t==="y"?zn[t]?null:(zn[t]=!0,()=>{zn[t]=!1}):zn.x||zn.y?null:(zn.x=zn.y=!0,()=>{zn.x=zn.y=!1})}const _y=new Set(["width","height","top","left","right","bottom",...uo]);let Bl;function V2(){Bl=void 0}const oi={now:()=>(Bl===void 0&&oi.set(Ot.isProcessing||FE.useManualTiming?Ot.timestamp:performance.now()),Bl),set:t=>{Bl=t,queueMicrotask(V2)}};function Ap(t,e){t.indexOf(e)===-1&&t.push(e)}function Cp(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class bp{constructor(){this.subscriptions=[]}add(e){return Ap(this.subscriptions,e),()=>Cp(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function xy(t,e){return e?t*(1e3/e):0}const Eg=30,H2=t=>!isNaN(parseFloat(t));class G2{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=oi.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=oi.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=H2(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new bp);const i=this.events[e].add(n);return e==="change"?()=>{i(),st.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=oi.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Eg)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Eg);return xy(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ma(t,e){return new G2(t,e)}function W2(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,ma(n))}function j2(t,e){const n=Qc(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=i2(s[o]);W2(t,o,a)}}function X2(t){return!!(Xt(t)&&t.add)}function xf(t,e){const n=t.getValue("willChange");if(X2(n))return n.add(e)}function yy(t){return t.props[qx]}const Sy=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,Y2=1e-7,$2=12;function K2(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=Sy(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>Y2&&++a<$2);return o}function wa(t,e,n,i){if(t===e&&n===i)return _n;const r=s=>K2(s,0,1,t,n);return s=>s===0||s===1?s:Sy(r(s),e,i)}const My=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Ey=t=>e=>1-t(1-e),Ty=wa(.33,1.53,.69,.99),Rp=Ey(Ty),wy=My(Rp),Ay=t=>(t*=2)<1?.5*Rp(t):.5*(2-Math.pow(2,-10*(t-1))),Pp=t=>1-Math.sin(Math.acos(t)),Cy=Ey(Pp),by=My(Pp),Ry=t=>/^0[^.\s]+$/u.test(t);function q2(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Ry(t):!0}const Xo=t=>Math.round(t*1e5)/1e5,Lp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Z2(t){return t==null}const Q2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Dp=(t,e)=>n=>!!(typeof n=="string"&&Q2.test(n)&&n.startsWith(t)||e&&!Z2(n)&&Object.prototype.hasOwnProperty.call(n,e)),Py=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Lp);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},J2=t=>Li(0,255,t),Fu={...fo,transform:t=>Math.round(J2(t))},kr={test:Dp("rgb","red"),parse:Py("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Fu.transform(t)+", "+Fu.transform(e)+", "+Fu.transform(n)+", "+Xo(pa.transform(i))+")"};function eT(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const yf={test:Dp("#"),parse:eT,transform:kr.transform},Ds={test:Dp("hsl","hue"),parse:Py("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+si.transform(Xo(e))+", "+si.transform(Xo(n))+", "+Xo(pa.transform(i))+")"},Wt={test:t=>kr.test(t)||yf.test(t)||Ds.test(t),parse:t=>kr.test(t)?kr.parse(t):Ds.test(t)?Ds.parse(t):yf.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?kr.transform(t):Ds.transform(t)},tT=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function nT(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Lp))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(tT))===null||n===void 0?void 0:n.length)||0)>0}const Ly="number",Dy="color",iT="var",rT="var(",Tg="${}",sT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ga(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(sT,l=>(Wt.test(l)?(i.color.push(s),r.push(Dy),n.push(Wt.parse(l))):l.startsWith(rT)?(i.var.push(s),r.push(iT),n.push(l)):(i.number.push(s),r.push(Ly),n.push(parseFloat(l))),++s,Tg)).split(Tg);return{values:n,split:a,indexes:i,types:r}}function Ny(t){return ga(t).values}function Iy(t){const{split:e,types:n}=ga(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===Ly?s+=Xo(r[o]):a===Dy?s+=Wt.transform(r[o]):s+=r[o]}return s}}const oT=t=>typeof t=="number"?0:t;function aT(t){const e=Ny(t);return Iy(t)(e.map(oT))}const ur={test:nT,parse:Ny,createTransformer:Iy,getAnimatableNone:aT},lT=new Set(["brightness","contrast","saturate","opacity"]);function cT(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Lp)||[];if(!i)return t;const r=n.replace(i,"");let s=lT.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const uT=/\b([a-z-]*)\(.*?\)/gu,Sf={...ur,getAnimatableNone:t=>{const e=t.match(uT);return e?e.map(cT).join(" "):t}},dT={...gp,color:Wt,backgroundColor:Wt,outlineColor:Wt,fill:Wt,stroke:Wt,borderColor:Wt,borderTopColor:Wt,borderRightColor:Wt,borderBottomColor:Wt,borderLeftColor:Wt,filter:Sf,WebkitFilter:Sf},Np=t=>dT[t];function Uy(t,e){let n=Np(t);return n!==Sf&&(n=ur),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const fT=new Set(["auto","none","0"]);function hT(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!fT.has(s)&&ga(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=Uy(n,r)}const wg=t=>t===fo||t===we,Ag=(t,e)=>parseFloat(t.split(", ")[e]),Cg=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return Ag(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?Ag(s[1],t):0}},pT=new Set(["x","y","z"]),mT=uo.filter(t=>!pT.has(t));function gT(t){const e=[];return mT.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const to={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:Cg(4,13),y:Cg(5,14)};to.translateX=to.x;to.translateY=to.y;const Gr=new Set;let Mf=!1,Ef=!1;function Fy(){if(Ef){const t=Array.from(Gr).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=gT(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Ef=!1,Mf=!1,Gr.forEach(t=>t.complete()),Gr.clear()}function Oy(){Gr.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Ef=!0)})}function vT(){Oy(),Fy()}class Ip{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Gr.add(this),Mf||(Mf=!0,st.read(Oy),st.resolveKeyframes(Fy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Gr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Gr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const ky=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),_T=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function xT(t){const e=_T.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function By(t,e,n=1){const[i,r]=xT(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return ky(o)?parseFloat(o):o}return mp(r)?By(r,e,n+1):r}const zy=t=>e=>e.test(t),yT={test:t=>t==="auto",parse:t=>t},Vy=[fo,we,si,Hi,c2,l2,yT],bg=t=>Vy.find(zy(t));class Hy extends Ip{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let c=e[l];if(typeof c=="string"&&(c=c.trim(),mp(c))){const u=By(c,n.current);u!==void 0&&(e[l]=u),l===e.length-1&&(this.finalKeyframe=c)}}if(this.resolveNoneKeyframes(),!_y.has(i)||e.length!==2)return;const[r,s]=e,o=bg(r),a=bg(s);if(o!==a)if(wg(o)&&wg(a))for(let l=0;l<e.length;l++){const c=e[l];typeof c=="string"&&(e[l]=parseFloat(c))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)q2(e[r])&&i.push(r);i.length&&hT(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=to[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=to[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,c])=>{n.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const Rg=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(ur.test(t)||t==="0")&&!t.startsWith("url("));function ST(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function MT(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=Rg(r,e),a=Rg(s,e);return!o||!a?!1:ST(t)||(n==="spring"||Ep(n))&&i}const ET=t=>t!==null;function Jc(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(ET),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const TT=40;class Gy{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=oi.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>TT?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&vT(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=oi.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:c}=this.options;if(!c&&!MT(e,i,r,s))if(o)this.options.duration=0;else{l&&l(Jc(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const u=this.initPlayback(e,n);u!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...u},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const ct=(t,e,n)=>t+(e-t)*n;function Ou(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function wT({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Ou(l,a,t+1/3),s=Ou(l,a,t),o=Ou(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function yc(t,e){return n=>n>0?e:t}const ku=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},AT=[yf,kr,Ds],CT=t=>AT.find(e=>e.test(t));function Pg(t){const e=CT(t);if(!e)return!1;let n=e.parse(t);return e===Ds&&(n=wT(n)),n}const Lg=(t,e)=>{const n=Pg(t),i=Pg(e);if(!n||!i)return yc(t,e);const r={...n};return s=>(r.red=ku(n.red,i.red,s),r.green=ku(n.green,i.green,s),r.blue=ku(n.blue,i.blue,s),r.alpha=ct(n.alpha,i.alpha,s),kr.transform(r))},bT=(t,e)=>n=>e(t(n)),Aa=(...t)=>t.reduce(bT),Tf=new Set(["none","hidden"]);function RT(t,e){return Tf.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function PT(t,e){return n=>ct(t,e,n)}function Up(t){return typeof t=="number"?PT:typeof t=="string"?mp(t)?yc:Wt.test(t)?Lg:NT:Array.isArray(t)?Wy:typeof t=="object"?Wt.test(t)?Lg:LT:yc}function Wy(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Up(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function LT(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Up(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function DT(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const NT=(t,e)=>{const n=ur.createTransformer(e),i=ga(t),r=ga(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Tf.has(t)&&!r.values.length||Tf.has(e)&&!i.values.length?RT(t,e):Aa(Wy(DT(i,r),r.values),n):yc(t,e)};function jy(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?ct(t,e,n):Up(t)(t,e)}const IT=5;function Xy(t,e,n){const i=Math.max(e-IT,0);return xy(n-t(i),e-i)}const mt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Bu=.001;function UT({duration:t=mt.duration,bounce:e=mt.bounce,velocity:n=mt.velocity,mass:i=mt.mass}){let r,s,o=1-e;o=Li(mt.minDamping,mt.maxDamping,o),t=Li(mt.minDuration,mt.maxDuration,Ai(t)),o<1?(r=c=>{const u=c*o,d=u*t,h=u-n,p=wf(c,o),x=Math.exp(-d);return Bu-h/p*x},s=c=>{const d=c*o*t,h=d*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,x=Math.exp(-d),v=wf(Math.pow(c,2),o);return(-r(c)+Bu>0?-1:1)*((h-p)*x)/v}):(r=c=>{const u=Math.exp(-c*t),d=(c-n)*t+1;return-Bu+u*d},s=c=>{const u=Math.exp(-c*t),d=(n-c)*(t*t);return u*d});const a=5/t,l=OT(r,s,a);if(t=wi(t),isNaN(l))return{stiffness:mt.stiffness,damping:mt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const FT=12;function OT(t,e,n){let i=n;for(let r=1;r<FT;r++)i=i-t(i)/e(i);return i}function wf(t,e){return t*Math.sqrt(1-e*e)}const kT=["duration","bounce"],BT=["stiffness","damping","mass"];function Dg(t,e){return e.some(n=>t[n]!==void 0)}function zT(t){let e={velocity:mt.velocity,stiffness:mt.stiffness,damping:mt.damping,mass:mt.mass,isResolvedFromDuration:!1,...t};if(!Dg(t,BT)&&Dg(t,kT))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Li(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:mt.mass,stiffness:r,damping:s}}else{const n=UT(t);e={...e,...n,mass:mt.mass},e.isResolvedFromDuration=!0}return e}function Yy(t=mt.visualDuration,e=mt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:u,duration:d,velocity:h,isResolvedFromDuration:p}=zT({...n,velocity:-Ai(n.velocity||0)}),x=h||0,v=c/(2*Math.sqrt(l*u)),m=o-s,f=Ai(Math.sqrt(l/u)),_=Math.abs(m)<5;i||(i=_?mt.restSpeed.granular:mt.restSpeed.default),r||(r=_?mt.restDelta.granular:mt.restDelta.default);let g;if(v<1){const C=wf(f,v);g=A=>{const w=Math.exp(-v*f*A);return o-w*((x+v*f*m)/C*Math.sin(C*A)+m*Math.cos(C*A))}}else if(v===1)g=C=>o-Math.exp(-f*C)*(m+(x+f*m)*C);else{const C=f*Math.sqrt(v*v-1);g=A=>{const w=Math.exp(-v*f*A),b=Math.min(C*A,300);return o-w*((x+v*f*m)*Math.sinh(b)+C*m*Math.cosh(b))/C}}const y={calculatedDuration:p&&d||null,next:C=>{const A=g(C);if(p)a.done=C>=d;else{let w=0;v<1&&(w=C===0?wi(x):Xy(g,C,A));const b=Math.abs(w)<=i,T=Math.abs(o-A)<=r;a.done=b&&T}return a.value=a.done?o:A,a},toString:()=>{const C=Math.min(dy(y),vf),A=fy(w=>y.next(C*w).value,C,30);return C+"ms "+A}};return y}function Ng({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:u}){const d=t[0],h={done:!1,value:d},p=b=>a!==void 0&&b<a||l!==void 0&&b>l,x=b=>a===void 0?l:l===void 0||Math.abs(a-b)<Math.abs(l-b)?a:l;let v=n*e;const m=d+v,f=o===void 0?m:o(m);f!==m&&(v=f-d);const _=b=>-v*Math.exp(-b/i),g=b=>f+_(b),y=b=>{const T=_(b),S=g(b);h.done=Math.abs(T)<=c,h.value=h.done?f:S};let C,A;const w=b=>{p(h.value)&&(C=b,A=Yy({keyframes:[h.value,x(h.value)],velocity:Xy(g,b,h.value),damping:r,stiffness:s,restDelta:c,restSpeed:u}))};return w(0),{calculatedDuration:null,next:b=>{let T=!1;return!A&&C===void 0&&(T=!0,y(b),w(b)),C!==void 0&&b>=C?A.next(b-C):(!T&&y(b),h)}}}const VT=wa(.42,0,1,1),HT=wa(0,0,.58,1),$y=wa(.42,0,.58,1),GT=t=>Array.isArray(t)&&typeof t[0]!="number",WT={linear:_n,easeIn:VT,easeInOut:$y,easeOut:HT,circIn:Pp,circInOut:by,circOut:Cy,backIn:Rp,backInOut:wy,backOut:Ty,anticipate:Ay},Ig=t=>{if(Tp(t)){jx(t.length===4);const[e,n,i,r]=t;return wa(e,n,i,r)}else if(typeof t=="string")return WT[t];return t};function jT(t,e,n){const i=[],r=n||jy,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||_n:e;a=Aa(l,a)}i.push(a)}return i}function XT(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(jx(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=jT(e,i,r),l=a.length,c=u=>{if(o&&u<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(u<t[d+1]);d++);const h=Js(t[d],t[d+1],u);return a[d](h)};return n?u=>c(Li(t[0],t[s-1],u)):c}function YT(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=Js(0,e,i);t.push(ct(n,1,r))}}function $T(t){const e=[0];return YT(e,t.length-1),e}function KT(t,e){return t.map(n=>n*e)}function qT(t,e){return t.map(()=>e||$y).splice(0,t.length-1)}function Sc({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=GT(i)?i.map(Ig):Ig(i),s={done:!1,value:e[0]},o=KT(n&&n.length===e.length?n:$T(e),t),a=XT(o,e,{ease:Array.isArray(r)?r:qT(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const ZT=t=>{const e=({timestamp:n})=>t(n);return{start:()=>st.update(e,!0),stop:()=>cr(e),now:()=>Ot.isProcessing?Ot.timestamp:oi.now()}},QT={decay:Ng,inertia:Ng,tween:Sc,keyframes:Sc,spring:Yy},JT=t=>t/100;class Fp extends Gy{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||Ip,a=(l,c)=>this.onKeyframesResolved(l,c);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=Ep(n)?n:QT[n]||Sc;let l,c;a!==Sc&&typeof e[0]!="number"&&(l=Aa(JT,jy(e[0],e[1])),e=[0,100]);const u=a({...this.options,keyframes:e});s==="mirror"&&(c=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),u.calculatedDuration===null&&(u.calculatedDuration=dy(u));const{calculatedDuration:d}=u,h=d+r,p=h*(i+1)-r;return{generator:u,mirroredGenerator:c,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:h,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:b}=this.options;return{done:!0,value:b[b.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:c,totalDuration:u,resolvedDuration:d}=i;if(this.startTime===null)return s.next(0);const{delay:h,repeat:p,repeatType:x,repeatDelay:v,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-u/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const f=this.currentTime-h*(this.speed>=0?1:-1),_=this.speed>=0?f<0:f>u;this.currentTime=Math.max(f,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=u);let g=this.currentTime,y=s;if(p){const b=Math.min(this.currentTime,u)/d;let T=Math.floor(b),S=b%1;!S&&b>=1&&(S=1),S===1&&T--,T=Math.min(T,p+1),!!(T%2)&&(x==="reverse"?(S=1-S,v&&(S-=v/d)):x==="mirror"&&(y=o)),g=Li(0,1,S)*d}const C=_?{done:!1,value:l[0]}:y.next(g);a&&(C.value=a(C.value));let{done:A}=C;!_&&c!==null&&(A=this.speed>=0?this.currentTime>=u:this.currentTime<=0);const w=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return w&&r!==void 0&&(C.value=Jc(l,this.options,r)),m&&m(C.value),w&&this.finish(),C}get duration(){const{resolved:e}=this;return e?Ai(e.calculatedDuration):0}get time(){return Ai(this.currentTime)}set time(e){e=wi(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Ai(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=ZT,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const ew=new Set(["opacity","clipPath","filter","transform"]);function tw(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const c={[e]:n};l&&(c.offset=l);const u=py(a,r);return Array.isArray(u)&&(c.easing=u),t.animate(c,{delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const nw=lp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Mc=10,iw=2e4;function rw(t){return Ep(t.type)||t.type==="spring"||!hy(t.ease)}function sw(t,e){const n=new Fp({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<iw;)i=n.sample(s),r.push(i.value),s+=Mc;return{times:void 0,keyframes:r,duration:s-Mc,ease:"linear"}}const Ky={anticipate:Ay,backInOut:wy,circInOut:by};function ow(t){return t in Ky}class Ug extends Gy{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new Hy(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:c}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&xc()&&ow(s)&&(s=Ky[s]),rw(this.options)){const{onComplete:d,onUpdate:h,motionValue:p,element:x,...v}=this.options,m=sw(e,v);e=m.keyframes,e.length===1&&(e[1]=e[0]),i=m.duration,r=m.times,s=m.ease,o="keyframes"}const u=tw(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return u.startTime=c??this.calcStartTime(),this.pendingTimeline?(xg(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:d}=this.options;a.set(Jc(e,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Ai(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Ai(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=wi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return _n;const{animation:i}=n;xg(i,e)}return _n}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:c,onUpdate:u,onComplete:d,element:h,...p}=this.options,x=new Fp({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),v=wi(this.time);c.setWithVelocity(x.sample(v-Mc).value,x.sample(v).value,Mc)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=n.owner.getProps();return nw()&&i&&ew.has(i)&&!l&&!c&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const aw={type:"spring",stiffness:500,damping:25,restSpeed:10},lw=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),cw={type:"keyframes",duration:.8},uw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},dw=(t,{keyframes:e})=>e.length>2?cw:Jr.has(t)?t.startsWith("scale")?lw(e[1]):aw:uw;function fw({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...u}){return!!Object.keys(u).length}const Op=(t,e,n,i={},r,s)=>o=>{const a=Mp(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-wi(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:h=>{e.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};fw(a)||(u={...u,...dw(t,u)}),u.duration&&(u.duration=wi(u.duration)),u.repeatDelay&&(u.repeatDelay=wi(u.repeatDelay)),u.from!==void 0&&(u.keyframes[0]=u.from);let d=!1;if((u.type===!1||u.duration===0&&!u.repeatDelay)&&(u.duration=0,u.delay===0&&(d=!0)),d&&!s&&e.get()!==void 0){const h=Jc(u.keyframes,a);if(h!==void 0)return st.update(()=>{u.onUpdate(h),u.onComplete()}),new L2([])}return!s&&Ug.supports(u)?new Ug(u):new Fp(u)};function hw({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function qy(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const c=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const d in l){const h=t.getValue(d,(s=t.latestValues[d])!==null&&s!==void 0?s:null),p=l[d];if(p===void 0||u&&hw(u,d))continue;const x={delay:n,...Mp(o||{},d)};let v=!1;if(window.MotionHandoffAnimation){const f=yy(t);if(f){const _=window.MotionHandoffAnimation(f,d,st);_!==null&&(x.startTime=_,v=!0)}}xf(t,d),h.start(Op(d,h,p,t.shouldReduceMotion&&_y.has(d)?{type:!1}:x,t,v));const m=h.animation;m&&c.push(m)}return a&&Promise.all(c).then(()=>{st.update(()=>{a&&j2(t,a)})}),c}function Af(t,e,n={}){var i;const r=Qc(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(qy(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:u=0,staggerChildren:d,staggerDirection:h}=s;return pw(t,e,u+c,d,h,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[c,u]=l==="beforeChildren"?[o,a]:[a,o];return c().then(()=>u())}else return Promise.all([o(),a(n.delay)])}function pw(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(c=0)=>c*i:(c=0)=>a-c*i;return Array.from(t.variantChildren).sort(mw).forEach((c,u)=>{c.notify("AnimationStart",e),o.push(Af(c,e,{...s,delay:n+l(u)}).then(()=>c.notify("AnimationComplete",e)))}),Promise.all(o)}function mw(t,e){return t.sortNodePosition(e)}function gw(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Af(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Af(t,e,n);else{const r=typeof e=="function"?Qc(t,e,n.custom):e;i=Promise.all(qy(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const vw=up.length;function Zy(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?Zy(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<vw;n++){const i=up[n],r=t.props[i];(ha(r)||r===!1)&&(e[i]=r)}return e}const _w=[...cp].reverse(),xw=cp.length;function yw(t){return e=>Promise.all(e.map(({animation:n,options:i})=>gw(t,n,i)))}function Sw(t){let e=yw(t),n=Fg(),i=!0;const r=l=>(c,u)=>{var d;const h=Qc(t,u,l==="exit"?(d=t.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(h){const{transition:p,transitionEnd:x,...v}=h;c={...c,...v,...x}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,u=Zy(t.parent)||{},d=[],h=new Set;let p={},x=1/0;for(let m=0;m<xw;m++){const f=_w[m],_=n[f],g=c[f]!==void 0?c[f]:u[f],y=ha(g),C=f===l?_.isActive:null;C===!1&&(x=m);let A=g===u[f]&&g!==c[f]&&y;if(A&&i&&t.manuallyAnimateOnMount&&(A=!1),_.protectedKeys={...p},!_.isActive&&C===null||!g&&!_.prevProp||qc(g)||typeof g=="boolean")continue;const w=Mw(_.prevProp,g);let b=w||f===l&&_.isActive&&!A&&y||m>x&&y,T=!1;const S=Array.isArray(g)?g:[g];let L=S.reduce(r(f),{});C===!1&&(L={});const{prevResolvedValues:H={}}=_,V={...H,...L},$=W=>{b=!0,h.has(W)&&(T=!0,h.delete(W)),_.needsAnimating[W]=!0;const N=t.getValue(W);N&&(N.liveStyle=!1)};for(const W in V){const N=L[W],Y=H[W];if(p.hasOwnProperty(W))continue;let Z=!1;gf(N)&&gf(Y)?Z=!uy(N,Y):Z=N!==Y,Z?N!=null?$(W):h.add(W):N!==void 0&&h.has(W)?$(W):_.protectedKeys[W]=!0}_.prevProp=g,_.prevResolvedValues=L,_.isActive&&(p={...p,...L}),i&&t.blockInitialAnimation&&(b=!1),b&&(!(A&&w)||T)&&d.push(...S.map(W=>({animation:W,options:{type:f}})))}if(h.size){const m={};h.forEach(f=>{const _=t.getBaseTarget(f),g=t.getValue(f);g&&(g.liveStyle=!0),m[f]=_??null}),d.push({animation:m})}let v=!!d.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(v=!1),i=!1,v?e(d):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)===null||u===void 0||u.forEach(h=>{var p;return(p=h.animationState)===null||p===void 0?void 0:p.setActive(l,c)}),n[l].isActive=c;const d=o(l);for(const h in n)n[h].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Fg(),i=!0}}}function Mw(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!uy(e,t):!1}function yr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Fg(){return{animate:yr(!0),whileInView:yr(),whileHover:yr(),whileTap:yr(),whileDrag:yr(),whileFocus:yr(),exit:yr()}}class gr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class Ew extends gr{constructor(e){super(e),e.animationState||(e.animationState=Sw(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();qc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let Tw=0;class ww extends gr{constructor(){super(...arguments),this.id=Tw++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const Aw={animation:{Feature:Ew},exit:{Feature:ww}};function va(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function Ca(t){return{point:{x:t.pageX,y:t.pageY}}}const Cw=t=>e=>wp(e)&&t(e,Ca(e));function Yo(t,e,n,i){return va(t,e,Cw(n),i)}const Og=(t,e)=>Math.abs(t-e);function bw(t,e){const n=Og(t.x,e.x),i=Og(t.y,e.y);return Math.sqrt(n**2+i**2)}class Qy{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=Vu(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,p=bw(d.offset,{x:0,y:0})>=3;if(!h&&!p)return;const{point:x}=d,{timestamp:v}=Ot;this.history.push({...x,timestamp:v});const{onStart:m,onMove:f}=this.handlers;h||(m&&m(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),f&&f(this.lastMoveEvent,d)},this.handlePointerMove=(d,h)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=zu(h,this.transformPagePoint),st.update(this.updatePoint,!0)},this.handlePointerUp=(d,h)=>{this.end();const{onEnd:p,onSessionEnd:x,resumeAnimation:v}=this.handlers;if(this.dragSnapToOrigin&&v&&v(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const m=Vu(d.type==="pointercancel"?this.lastMoveEventInfo:zu(h,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,m),x&&x(d,m)},!wp(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=Ca(e),a=zu(o,this.transformPagePoint),{point:l}=a,{timestamp:c}=Ot;this.history=[{...l,timestamp:c}];const{onSessionStart:u}=n;u&&u(e,Vu(a,this.history)),this.removeListeners=Aa(Yo(this.contextWindow,"pointermove",this.handlePointerMove),Yo(this.contextWindow,"pointerup",this.handlePointerUp),Yo(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),cr(this.updatePoint)}}function zu(t,e){return e?{point:e(t.point)}:t}function kg(t,e){return{x:t.x-e.x,y:t.y-e.y}}function Vu({point:t},e){return{point:t,delta:kg(t,Jy(e)),offset:kg(t,Rw(e)),velocity:Pw(e,.1)}}function Rw(t){return t[0]}function Jy(t){return t[t.length-1]}function Pw(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=Jy(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>wi(e)));)n--;if(!i)return{x:0,y:0};const s=Ai(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const e1=1e-4,Lw=1-e1,Dw=1+e1,t1=.01,Nw=0-t1,Iw=0+t1;function yn(t){return t.max-t.min}function Uw(t,e,n){return Math.abs(t-e)<=n}function Bg(t,e,n,i=.5){t.origin=i,t.originPoint=ct(e.min,e.max,t.origin),t.scale=yn(n)/yn(e),t.translate=ct(n.min,n.max,t.origin)-t.originPoint,(t.scale>=Lw&&t.scale<=Dw||isNaN(t.scale))&&(t.scale=1),(t.translate>=Nw&&t.translate<=Iw||isNaN(t.translate))&&(t.translate=0)}function $o(t,e,n,i){Bg(t.x,e.x,n.x,i?i.originX:void 0),Bg(t.y,e.y,n.y,i?i.originY:void 0)}function zg(t,e,n){t.min=n.min+e.min,t.max=t.min+yn(e)}function Fw(t,e,n){zg(t.x,e.x,n.x),zg(t.y,e.y,n.y)}function Vg(t,e,n){t.min=e.min-n.min,t.max=t.min+yn(e)}function Ko(t,e,n){Vg(t.x,e.x,n.x),Vg(t.y,e.y,n.y)}function Ow(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?ct(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?ct(n,t,i.max):Math.min(t,n)),t}function Hg(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function kw(t,{top:e,left:n,bottom:i,right:r}){return{x:Hg(t.x,n,r),y:Hg(t.y,e,i)}}function Gg(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function Bw(t,e){return{x:Gg(t.x,e.x),y:Gg(t.y,e.y)}}function zw(t,e){let n=.5;const i=yn(t),r=yn(e);return r>i?n=Js(e.min,e.max-i,t.min):i>r&&(n=Js(t.min,t.max-r,e.min)),Li(0,1,n)}function Vw(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Cf=.35;function Hw(t=Cf){return t===!1?t=0:t===!0&&(t=Cf),{x:Wg(t,"left","right"),y:Wg(t,"top","bottom")}}function Wg(t,e,n){return{min:jg(t,e),max:jg(t,n)}}function jg(t,e){return typeof t=="number"?t:t[e]||0}const Xg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ns=()=>({x:Xg(),y:Xg()}),Yg=()=>({min:0,max:0}),vt=()=>({x:Yg(),y:Yg()});function An(t){return[t("x"),t("y")]}function n1({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function Gw({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function Ww(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Hu(t){return t===void 0||t===1}function bf({scale:t,scaleX:e,scaleY:n}){return!Hu(t)||!Hu(e)||!Hu(n)}function Rr(t){return bf(t)||i1(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function i1(t){return $g(t.x)||$g(t.y)}function $g(t){return t&&t!=="0%"}function Ec(t,e,n){const i=t-n,r=e*i;return n+r}function Kg(t,e,n,i,r){return r!==void 0&&(t=Ec(t,r,i)),Ec(t,n,i)+e}function Rf(t,e=0,n=1,i,r){t.min=Kg(t.min,e,n,i,r),t.max=Kg(t.max,e,n,i,r)}function r1(t,{x:e,y:n}){Rf(t.x,e.translate,e.scale,e.originPoint),Rf(t.y,n.translate,n.scale,n.originPoint)}const qg=.999999999999,Zg=1.0000000000001;function jw(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&Us(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,r1(t,o)),i&&Rr(s.latestValues)&&Us(t,s.latestValues))}e.x<Zg&&e.x>qg&&(e.x=1),e.y<Zg&&e.y>qg&&(e.y=1)}function Is(t,e){t.min=t.min+e,t.max=t.max+e}function Qg(t,e,n,i,r=.5){const s=ct(t.min,t.max,r);Rf(t,e,n,s,i)}function Us(t,e){Qg(t.x,e.x,e.scaleX,e.scale,e.originX),Qg(t.y,e.y,e.scaleY,e.scale,e.originY)}function s1(t,e){return n1(Ww(t.getBoundingClientRect(),e))}function Xw(t,e,n){const i=s1(t,n),{scroll:r}=e;return r&&(Is(i.x,r.offset.x),Is(i.y,r.offset.y)),i}const o1=({current:t})=>t?t.ownerDocument.defaultView:null,Yw=new WeakMap;class $w{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=vt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Ca(u).point)},s=(u,d)=>{const{drag:h,dragPropagation:p,onDragStart:x}=this.getProps();if(h&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=z2(h),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),An(m=>{let f=this.getAxisMotionValue(m).get()||0;if(si.test(f)){const{projection:_}=this.visualElement;if(_&&_.layout){const g=_.layout.layoutBox[m];g&&(f=yn(g)*(parseFloat(f)/100))}}this.originPoint[m]=f}),x&&st.postRender(()=>x(u,d)),xf(this.visualElement,"transform");const{animationState:v}=this.visualElement;v&&v.setActive("whileDrag",!0)},o=(u,d)=>{const{dragPropagation:h,dragDirectionLock:p,onDirectionLock:x,onDrag:v}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:m}=d;if(p&&this.currentDirection===null){this.currentDirection=Kw(m),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",d.point,m),this.updateAxis("y",d.point,m),this.visualElement.render(),v&&v(u,d)},a=(u,d)=>this.stop(u,d),l=()=>An(u=>{var d;return this.getAnimationState(u)==="paused"&&((d=this.getAxisMotionValue(u).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:c}=this.getProps();this.panSession=new Qy(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:c,contextWindow:o1(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&st.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!tl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=Ow(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Ls(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=kw(r.layoutBox,n):this.constraints=!1,this.elastic=Hw(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&An(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=Vw(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Ls(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=Xw(i,r.root,this.visualElement.getTransformPagePoint());let o=Bw(r.layout.layoutBox,s);if(n){const a=n(Gw(o));this.hasMutatedConstraints=!!a,a&&(o=n1(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=An(u=>{if(!tl(u,n,this.currentDirection))return;let d=l&&l[u]||{};o&&(d={min:0,max:0});const h=r?200:1e6,p=r?40:1e7,x={type:"inertia",velocity:i?e[u]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(u,x)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return xf(this.visualElement,e),i.start(Op(e,i,0,n,this.visualElement,!1))}stopAnimation(){An(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){An(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){An(n=>{const{drag:i}=this.getProps();if(!tl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-ct(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Ls(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};An(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=zw({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),An(o=>{if(!tl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(ct(l,c,r[o]))})}addListeners(){if(!this.visualElement.current)return;Yw.set(this.visualElement,this);const e=this.visualElement.current,n=Yo(e,"pointerdown",l=>{const{drag:c,dragListener:u=!0}=this.getProps();c&&u&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Ls(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),st.read(i);const o=va(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:c})=>{this.isDragging&&c&&(An(u=>{const d=this.getAxisMotionValue(u);d&&(this.originPoint[u]+=l[u].translate,d.set(d.get()+l[u].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Cf,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function tl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function Kw(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class qw extends gr{constructor(e){super(e),this.removeGroupControls=_n,this.removeListeners=_n,this.controls=new $w(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||_n}unmount(){this.removeGroupControls(),this.removeListeners()}}const Jg=t=>(e,n)=>{t&&st.postRender(()=>t(e,n))};class Zw extends gr{constructor(){super(...arguments),this.removePointerDownListener=_n}onPointerDown(e){this.session=new Qy(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:o1(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Jg(e),onStart:Jg(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&st.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Yo(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const zl={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function e0(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Eo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(we.test(t))t=parseFloat(t);else return t;const n=e0(t,e.target.x),i=e0(t,e.target.y);return`${n}% ${i}%`}},Qw={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=ur.parse(t);if(r.length>5)return i;const s=ur.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=ct(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}};class Jw extends xe.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;x2(e3),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),zl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||st.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),fp.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function a1(t){const[e,n]=IE(),i=xe.useContext(Gx);return D.jsx(Jw,{...t,layoutGroup:i,switchLayoutGroup:xe.useContext(Zx),isPresent:e,safeToRemove:n})}const e3={borderRadius:{...Eo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Eo,borderTopRightRadius:Eo,borderBottomLeftRadius:Eo,borderBottomRightRadius:Eo,boxShadow:Qw};function t3(t,e,n){const i=Xt(t)?t:ma(t);return i.start(Op("",i,e,n)),i.animation}function n3(t){return t instanceof SVGElement&&t.tagName!=="svg"}const i3=(t,e)=>t.depth-e.depth;class r3{constructor(){this.children=[],this.isDirty=!1}add(e){Ap(this.children,e),this.isDirty=!0}remove(e){Cp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(i3),this.isDirty=!1,this.children.forEach(e)}}function s3(t,e){const n=oi.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(cr(i),t(s-e))};return st.read(i,!0),()=>cr(i)}const l1=["TopLeft","TopRight","BottomLeft","BottomRight"],o3=l1.length,t0=t=>typeof t=="string"?parseFloat(t):t,n0=t=>typeof t=="number"||we.test(t);function a3(t,e,n,i,r,s){r?(t.opacity=ct(0,n.opacity!==void 0?n.opacity:1,l3(i)),t.opacityExit=ct(e.opacity!==void 0?e.opacity:1,0,c3(i))):s&&(t.opacity=ct(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<o3;o++){const a=`border${l1[o]}Radius`;let l=i0(e,a),c=i0(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||n0(l)===n0(c)?(t[a]=Math.max(ct(t0(l),t0(c),i),0),(si.test(c)||si.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=ct(e.rotate||0,n.rotate||0,i))}function i0(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const l3=c1(0,.5,Cy),c3=c1(.5,.95,_n);function c1(t,e,n){return i=>i<t?0:i>e?1:n(Js(t,e,i))}function r0(t,e){t.min=e.min,t.max=e.max}function Tn(t,e){r0(t.x,e.x),r0(t.y,e.y)}function s0(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function o0(t,e,n,i,r){return t-=e,t=Ec(t,1/n,i),r!==void 0&&(t=Ec(t,1/r,i)),t}function u3(t,e=0,n=1,i=.5,r,s=t,o=t){if(si.test(e)&&(e=parseFloat(e),e=ct(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=ct(s.min,s.max,i);t===s&&(a-=e),t.min=o0(t.min,e,n,a,r),t.max=o0(t.max,e,n,a,r)}function a0(t,e,[n,i,r],s,o){u3(t,e[n],e[i],e[r],e.scale,s,o)}const d3=["x","scaleX","originX"],f3=["y","scaleY","originY"];function l0(t,e,n,i){a0(t.x,e,d3,n?n.x:void 0,i?i.x:void 0),a0(t.y,e,f3,n?n.y:void 0,i?i.y:void 0)}function c0(t){return t.translate===0&&t.scale===1}function u1(t){return c0(t.x)&&c0(t.y)}function u0(t,e){return t.min===e.min&&t.max===e.max}function h3(t,e){return u0(t.x,e.x)&&u0(t.y,e.y)}function d0(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function d1(t,e){return d0(t.x,e.x)&&d0(t.y,e.y)}function f0(t){return yn(t.x)/yn(t.y)}function h0(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class p3{constructor(){this.members=[]}add(e){Ap(this.members,e),e.scheduleRender()}remove(e){if(Cp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function m3(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:u,rotateX:d,rotateY:h,skewX:p,skewY:x}=n;c&&(i=`perspective(${c}px) ${i}`),u&&(i+=`rotate(${u}deg) `),d&&(i+=`rotateX(${d}deg) `),h&&(i+=`rotateY(${h}deg) `),p&&(i+=`skewX(${p}deg) `),x&&(i+=`skewY(${x}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Pr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Uo=typeof window<"u"&&window.MotionDebug!==void 0,Gu=["","X","Y","Z"],g3={visibility:"hidden"},p0=1e3;let v3=0;function Wu(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function f1(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=yy(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",st,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&f1(i)}function h1({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=v3++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Uo&&(Pr.totalNodes=Pr.resolvedTargetDeltas=Pr.recalculatedProjection=0),this.nodes.forEach(y3),this.nodes.forEach(w3),this.nodes.forEach(A3),this.nodes.forEach(S3),Uo&&window.MotionDebug.record(Pr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new r3)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new bp),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=n3(o),this.instance=o;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(c||l)&&(this.isLayoutDirty=!0),t){let d;const h=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=s3(h,250),zl.hasAnimatedSinceResize&&(zl.hasAnimatedSinceResize=!1,this.nodes.forEach(g0))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h,hasRelativeTargetChanged:p,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const v=this.options.transition||u.getDefaultTransition()||L3,{onLayoutAnimationStart:m,onLayoutAnimationComplete:f}=u.getProps(),_=!this.targetLayout||!d1(this.targetLayout,x)||p,g=!h&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||g||h&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,g);const y={...Mp(v,"layout"),onPlay:m,onComplete:f};(u.shouldReduceMotion||this.options.layoutRoot)&&(y.delay=0,y.type=!1),this.startAnimation(y)}else h||g0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,cr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(C3),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&f1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const d=this.path[u];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(m0);return}this.isUpdating||this.nodes.forEach(E3),this.isUpdating=!1,this.nodes.forEach(T3),this.nodes.forEach(_3),this.nodes.forEach(x3),this.clearAllSnapshots();const a=oi.now();Ot.delta=Li(0,1e3/60,a-Ot.timestamp),Ot.timestamp=a,Ot.isProcessing=!0,Iu.update.process(Ot),Iu.preRender.process(Ot),Iu.render.process(Ot),Ot.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,fp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(M3),this.sharedNodes.forEach(b3)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,st.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){st.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=vt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!u1(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,u=c!==this.prevTransformTemplateValue;o&&(a||Rr(this.latestValues)||u)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),D3(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return vt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(N3))){const{scroll:u}=this.root;u&&(Is(l.x,u.offset.x),Is(l.y,u.offset.y))}return l}removeElementScroll(o){var a;const l=vt();if(Tn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let c=0;c<this.path.length;c++){const u=this.path[c],{scroll:d,options:h}=u;u!==this.root&&d&&h.layoutScroll&&(d.wasRoot&&Tn(l,o),Is(l.x,d.offset.x),Is(l.y,d.offset.y))}return l}applyTransform(o,a=!1){const l=vt();Tn(l,o);for(let c=0;c<this.path.length;c++){const u=this.path[c];!a&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Us(l,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),Rr(u.latestValues)&&Us(l,u.latestValues)}return Rr(this.latestValues)&&Us(l,this.latestValues),l}removeTransform(o){const a=vt();Tn(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Rr(c.latestValues))continue;bf(c.latestValues)&&c.updateSnapshot();const u=vt(),d=c.measurePageBox();Tn(u,d),l0(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,u)}return Rr(this.latestValues)&&l0(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Ot.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:h}=this.options;if(!(!this.layout||!(d||h))){if(this.resolvedRelativeTargetAt=Ot.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=vt(),this.relativeTargetOrigin=vt(),Ko(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Tn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=vt(),this.targetWithTransforms=vt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Fw(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Tn(this.target,this.layout.layoutBox),r1(this.target,this.targetDelta)):Tn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=vt(),this.relativeTargetOrigin=vt(),Ko(this.relativeTargetOrigin,this.target,p.target),Tn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Uo&&Pr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||bf(this.parent.latestValues)||i1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===Ot.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;Tn(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,p=this.treeScale.y;jw(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=vt());const{target:x}=a;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(s0(this.prevProjectionDelta.x,this.projectionDelta.x),s0(this.prevProjectionDelta.y,this.projectionDelta.y)),$o(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==p||!h0(this.projectionDelta.x,this.prevProjectionDelta.x)||!h0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x)),Uo&&Pr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Ns(),this.projectionDelta=Ns(),this.projectionDeltaWithTransform=Ns()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},u={...this.latestValues},d=Ns();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=vt(),p=l?l.source:void 0,x=this.layout?this.layout.source:void 0,v=p!==x,m=this.getStack(),f=!m||m.members.length<=1,_=!!(v&&!f&&this.options.crossfade===!0&&!this.path.some(P3));this.animationProgress=0;let g;this.mixTargetDelta=y=>{const C=y/1e3;v0(d.x,o.x,C),v0(d.y,o.y,C),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ko(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),R3(this.relativeTarget,this.relativeTargetOrigin,h,C),g&&h3(this.relativeTarget,g)&&(this.isProjectionDirty=!1),g||(g=vt()),Tn(g,this.relativeTarget)),v&&(this.animationValues=u,a3(u,c,this.latestValues,C,_,f)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(cr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=st.update(()=>{zl.hasAnimatedSinceResize=!0,this.currentAnimation=t3(0,p0,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(p0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:u}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&p1(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||vt();const d=yn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const h=yn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}Tn(a,l),Us(a,u),$o(this.projectionDeltaWithTransform,this.layoutCorrected,a,u)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new p3),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Wu("z",o,c,this.animationValues);for(let u=0;u<Gu.length;u++)Wu(`rotate${Gu[u]}`,o,c,this.animationValues),Wu(`skew${Gu[u]}`,o,c,this.animationValues);o.render();for(const u in c)o.setStaticValue(u,c[u]),this.animationValues&&(this.animationValues[u]=c[u]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return g3;const c={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=kl(o==null?void 0:o.pointerEvents)||"",c.transform=u?u(this.latestValues,""):"none",c;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const v={};return this.options.layoutId&&(v.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,v.pointerEvents=kl(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Rr(this.latestValues)&&(v.transform=u?u({},""):"none",this.hasProjected=!1),v}const h=d.animationValues||d.latestValues;this.applyTransformsToTarget(),c.transform=m3(this.projectionDeltaWithTransform,this.treeScale,h),u&&(c.transform=u(h,c.transform));const{x:p,y:x}=this.projectionDelta;c.transformOrigin=`${p.origin*100}% ${x.origin*100}% 0`,d.animationValues?c.opacity=d===this?(l=(a=h.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:c.opacity=d===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const v in _c){if(h[v]===void 0)continue;const{correct:m,applyTo:f}=_c[v],_=c.transform==="none"?h[v]:m(h[v],d);if(f){const g=f.length;for(let y=0;y<g;y++)c[f[y]]=_}else c[v]=_}return this.options.layoutId&&(c.pointerEvents=d===this?kl(o==null?void 0:o.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(m0),this.root.sharedNodes.clear()}}}function _3(t){t.updateLayout()}function x3(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?An(d=>{const h=o?n.measuredBox[d]:n.layoutBox[d],p=yn(h);h.min=i[d].min,h.max=h.min+p}):p1(s,n.layoutBox,i)&&An(d=>{const h=o?n.measuredBox[d]:n.layoutBox[d],p=yn(i[d]);h.max=h.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=Ns();$o(a,i,n.layoutBox);const l=Ns();o?$o(l,t.applyTransform(r,!0),n.measuredBox):$o(l,i,n.layoutBox);const c=!u1(a);let u=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:h,layout:p}=d;if(h&&p){const x=vt();Ko(x,n.layoutBox,h.layoutBox);const v=vt();Ko(v,i,p.layoutBox),d1(x,v)||(u=!0),d.options.layoutRoot&&(t.relativeTarget=v,t.relativeTargetOrigin=x,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeTargetChanged:u})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function y3(t){Uo&&Pr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function S3(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function M3(t){t.clearSnapshot()}function m0(t){t.clearMeasurements()}function E3(t){t.isLayoutDirty=!1}function T3(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function g0(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function w3(t){t.resolveTargetDelta()}function A3(t){t.calcProjection()}function C3(t){t.resetSkewAndRotation()}function b3(t){t.removeLeadSnapshot()}function v0(t,e,n){t.translate=ct(e.translate,0,n),t.scale=ct(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function _0(t,e,n,i){t.min=ct(e.min,n.min,i),t.max=ct(e.max,n.max,i)}function R3(t,e,n,i){_0(t.x,e.x,n.x,i),_0(t.y,e.y,n.y,i)}function P3(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const L3={duration:.45,ease:[.4,0,.1,1]},x0=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),y0=x0("applewebkit/")&&!x0("chrome/")?Math.round:_n;function S0(t){t.min=y0(t.min),t.max=y0(t.max)}function D3(t){S0(t.x),S0(t.y)}function p1(t,e,n){return t==="position"||t==="preserve-aspect"&&!Uw(f0(e),f0(n),.2)}function N3(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const I3=h1({attachResizeListener:(t,e)=>va(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),ju={current:void 0},m1=h1({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!ju.current){const t=new I3({});t.mount(window),t.setOptions({layoutScroll:!0}),ju.current=t}return ju.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),U3={pan:{Feature:Zw},drag:{Feature:qw,ProjectionNode:m1,MeasureLayout:a1}};function M0(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&st.postRender(()=>s(e,Ca(e)))}class F3 extends gr{mount(){const{current:e}=this.node;e&&(this.unmount=U2(e,n=>(M0(this.node,n,"Start"),i=>M0(this.node,i,"End"))))}unmount(){}}class O3 extends gr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Aa(va(this.node.current,"focus",()=>this.onFocus()),va(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function E0(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&st.postRender(()=>s(e,Ca(e)))}class k3 extends gr{mount(){const{current:e}=this.node;e&&(this.unmount=B2(e,n=>(E0(this.node,n,"Start"),(i,{success:r})=>E0(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Pf=new WeakMap,Xu=new WeakMap,B3=t=>{const e=Pf.get(t.target);e&&e(t)},z3=t=>{t.forEach(B3)};function V3({root:t,...e}){const n=t||document;Xu.has(n)||Xu.set(n,{});const i=Xu.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(z3,{root:t,...e})),i[r]}function H3(t,e,n){const i=V3(e);return Pf.set(t,n),i.observe(t),()=>{Pf.delete(t),i.unobserve(t)}}const G3={some:0,all:1};class W3 extends gr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:G3[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:u,onViewportLeave:d}=this.node.getProps(),h=c?u:d;h&&h(l)};return H3(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(j3(e,n))&&this.startObserver()}unmount(){}}function j3({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const X3={inView:{Feature:W3},tap:{Feature:k3},focus:{Feature:O3},hover:{Feature:F3}},Y3={layout:{ProjectionNode:m1,MeasureLayout:a1}},Lf={current:null},g1={current:!1};function $3(){if(g1.current=!0,!!ap)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Lf.current=t.matches;t.addListener(e),e()}else Lf.current=!1}const K3=[...Vy,Wt,ur],q3=t=>K3.find(zy(t)),T0=new WeakMap;function Z3(t,e,n){for(const i in e){const r=e[i],s=n[i];if(Xt(r))t.addValue(i,r);else if(Xt(s))t.addValue(i,ma(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,ma(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const w0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Q3{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Ip,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=oi.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,st.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Zc(n),this.isVariantNode=Kx(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in h){const x=h[p];l[p]!==void 0&&Xt(x)&&x.set(l[p],!1)}}mount(e){this.current=e,T0.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),g1.current||$3(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Lf.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){T0.delete(this.current),this.projection&&this.projection.unmount(),cr(this.notifyUpdate),cr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=Jr.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&st.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in eo){const n=eo[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):vt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<w0.length;i++){const r=w0[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=Z3(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=ma(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(ky(r)||Ry(r))?r=parseFloat(r):!q3(r)&&ur.test(n)&&(r=Uy(e,n)),this.setBaseTarget(e,Xt(r)?r.get():r)),Xt(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=pp(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Xt(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new bp),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class v1 extends Q3{constructor(){super(...arguments),this.KeyframeResolver=Hy}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Xt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function J3(t){return window.getComputedStyle(t)}class eA extends v1{constructor(){super(...arguments),this.type="html",this.renderInstance=ry}readValueFromInstance(e,n){if(Jr.has(n)){const i=Np(n);return i&&i.default||0}else{const i=J3(e),r=(ty(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return s1(e,n)}build(e,n,i){vp(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Sp(e,n,i)}}class tA extends v1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=vt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Jr.has(n)){const i=Np(n);return i&&i.default||0}return n=sy.has(n)?n:dp(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return ly(e,n,i)}build(e,n,i){_p(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){oy(e,n,i,r)}mount(e){this.isSVGTag=yp(e.tagName),super.mount(e)}}const nA=(t,e)=>hp(t)?new tA(e):new eA(e,{allowProjection:t!==xe.Fragment}),iA=b2({...Aw,...X3,...U3,...Y3},nA),nl=GE(iA);var _1={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},A0=qi.createContext&&qi.createContext(_1),rA=["attr","size","title"];function sA(t,e){if(t==null)return{};var n,i,r=oA(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)===-1&&{}.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function oA(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.indexOf(i)!==-1)continue;n[i]=t[i]}return n}function Tc(){return Tc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Tc.apply(null,arguments)}function C0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function wc(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?C0(Object(n),!0).forEach(function(i){aA(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function aA(t,e,n){return(e=lA(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lA(t){var e=cA(t,"string");return typeof e=="symbol"?e:e+""}function cA(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function x1(t){return t&&t.map((e,n)=>qi.createElement(e.tag,wc({key:n},e.attr),x1(e.child)))}function en(t){return e=>qi.createElement(uA,Tc({attr:wc({},t.attr)},e),x1(t.child))}function uA(t){var e=n=>{var{attr:i,size:r,title:s}=t,o=sA(t,rA),a=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),qi.createElement("svg",Tc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,o,{className:l,style:wc(wc({color:t.color||n.color},n.style),t.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),s&&qi.createElement("title",null,s),t.children)};return A0!==void 0?qi.createElement(A0.Consumer,null,n=>e(n)):e(_1)}function dA(t){return en({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(t)}function b0(t){return en({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(t)}function R0(t){return en({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(t)}function fA(t){return en({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(t)}function Ac(t){return en({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(t)}function y1(t){return en({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z"},child:[]}]})(t)}function P0(t){return en({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"},child:[]}]})(t)}function L0(t){return en({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(t)}function hA(t){return en({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"},child:[]}]})(t)}function pA(t){return en({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"},child:[]}]})(t)}function mA(t){return en({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"},child:[]}]})(t)}function gA(t){return en({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z"},child:[]}]})(t)}function vA(t){return en({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.778 5.943s-1.97-.13-5.327.92c-3.42 1.07-5.36 2.587-5.36 2.587s5.098-2.847 10.852-3.008zm7.351 3.095l.257-.017s-1.468-1.78-4.278-2.648c1.58.642 2.954 1.493 4.021 2.665zm.42.74c.039-.068.166.217.263.337.004.024.01.039-.045.027-.005-.025-.013-.032-.013-.032s-.135-.08-.177-.137c-.041-.057-.049-.157-.028-.195zm3.448 8.479s.312-3.578-5.31-4.403a18.277 18.277 0 0 0-2.524-.187c-4.506.06-4.67-5.197-1.275-5.462 1.407-.116 3.087.643 4.73 1.408-.007.204.002.385.136.552.134.168.648.35.813.445.164.094.691.43 1.014.85.07-.131.654-.512.654-.512s-.14.003-.465-.119c-.326-.122-.713-.49-.722-.511-.01-.022-.015-.055.06-.07.059-.049-.072-.207-.13-.265-.058-.058-.445-.716-.454-.73-.009-.016-.012-.031-.04-.05-.085-.027-.46.04-.46.04s-.575-.283-.774-.893c.003.107-.099.224 0 .469-.3-.127-.558-.344-.762-.88-.12.305 0 .499 0 .499s-.707-.198-.82-.85c-.124.293 0 .469 0 .469s-1.153-.602-3.069-.61c-1.283-.118-1.55-2.374-1.43-2.754 0 0-1.85-.975-5.493-1.406-3.642-.43-6.628-.065-6.628-.065s6.45-.31 11.617 1.783c.176.785.704 2.094.989 2.723-.815.563-1.733 1.092-1.876 2.97-.143 1.878 1.472 3.53 3.474 3.58 1.9.102 3.214.116 4.806.942 1.52.84 2.766 3.4 2.89 5.703.132-1.709-.509-5.383-3.5-6.498 4.181.732 4.549 3.832 4.549 3.832zM12.68 5.663l-.15-.485s-2.484-.441-5.822-.204C3.37 5.211 0 6.38 0 6.38s6.896-1.735 12.68-.717Z"},child:[]}]})(t)}function _A(t){return en({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(t)}function xA(t){return en({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"},child:[]}]})(t)}const yA=()=>{const t=xe.useRef(null);return xe.useEffect(()=>{const e=t.current;if(!e)return;const n=e.getContext("2d");if(!n)return;let i;const r="01",s=[],o=()=>{e.width=window.innerWidth,e.height=window.innerHeight;const l=Math.floor(window.innerWidth/18);s.length=l;for(let c=0;c<l;c+=1)s[c]=Math.random()*e.height},a=()=>{n.fillStyle="rgba(0, 0, 0, 0.15)",n.fillRect(0,0,e.width,e.height),n.fillStyle="rgba(56, 189, 248, 0.25)",n.font="18px monospace",s.forEach((l,c)=>{const u=r.charAt(Math.floor(Math.random()*r.length)),d=c*18;n.fillText(u,d,l),l>e.height+20||Math.random()>.98?s[c]=0:s[c]=l+20}),i=requestAnimationFrame(a)};return o(),window.addEventListener("resize",o),a(),()=>{window.removeEventListener("resize",o),cancelAnimationFrame(i)}},[]),D.jsx("canvas",{ref:t,className:"pointer-events-none fixed inset-0 h-full w-full opacity-50","aria-hidden":"true"})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kp="166",SA=0,D0=1,MA=2,S1=1,EA=2,gi=3,dr=0,cn=1,xi=2,sr=0,Gs=1,N0=2,I0=3,U0=4,TA=5,Nr=100,wA=101,AA=102,CA=103,bA=104,RA=200,PA=201,LA=202,DA=203,Df=204,Nf=205,NA=206,IA=207,UA=208,FA=209,OA=210,kA=211,BA=212,zA=213,VA=214,HA=0,GA=1,WA=2,Cc=3,jA=4,XA=5,YA=6,$A=7,M1=0,KA=1,qA=2,or=0,ZA=1,QA=2,JA=3,eC=4,tC=5,nC=6,iC=7,E1=300,no=301,io=302,If=303,Uf=304,eu=306,Ff=1e3,Br=1001,Of=1002,Ln=1003,rC=1004,il=1005,Wn=1006,Yu=1007,zr=1008,Di=1009,T1=1010,w1=1011,_a=1012,Bp=1013,Kr=1014,Mi=1015,ba=1016,zp=1017,Vp=1018,ro=1020,A1=35902,C1=1021,b1=1022,jn=1023,R1=1024,P1=1025,Ws=1026,so=1027,L1=1028,Hp=1029,D1=1030,Gp=1031,Wp=1033,Vl=33776,Hl=33777,Gl=33778,Wl=33779,kf=35840,Bf=35841,zf=35842,Vf=35843,Hf=36196,Gf=37492,Wf=37496,jf=37808,Xf=37809,Yf=37810,$f=37811,Kf=37812,qf=37813,Zf=37814,Qf=37815,Jf=37816,eh=37817,th=37818,nh=37819,ih=37820,rh=37821,jl=36492,sh=36494,oh=36495,N1=36283,ah=36284,lh=36285,ch=36286,sC=3200,oC=3201,I1=0,aC=1,Yi="",Qn="srgb",vr="srgb-linear",jp="display-p3",tu="display-p3-linear",bc="linear",it="srgb",Rc="rec709",Pc="p3",ns=7680,F0=519,lC=512,cC=513,uC=514,U1=515,dC=516,fC=517,hC=518,pC=519,O0=35044,k0="300 es",Ei=2e3,Lc=2001;class ho{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$u=Math.PI/180,uh=180/Math.PI;function Ra(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function rn(t,e,n){return Math.max(e,Math.min(n,t))}function mC(t,e){return(t%e+e)%e}function Ku(t,e,n){return(1-n)*t+n*e}function To(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function tn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,n,i,r,s,o,a,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],p=i[5],x=i[8],v=r[0],m=r[3],f=r[6],_=r[1],g=r[4],y=r[7],C=r[2],A=r[5],w=r[8];return s[0]=o*v+a*_+l*C,s[3]=o*m+a*g+l*A,s[6]=o*f+a*y+l*w,s[1]=c*v+u*_+d*C,s[4]=c*m+u*g+d*A,s[7]=c*f+u*y+d*w,s[2]=h*v+p*_+x*C,s[5]=h*m+p*g+x*A,s[8]=h*f+p*y+x*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,h=a*l-u*s,p=c*s-o*l,x=n*d+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=d*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=h*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=p*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(qu.makeScale(e,n)),this}rotate(e){return this.premultiply(qu.makeRotation(-e)),this}translate(e,n){return this.premultiply(qu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const qu=new Fe;function F1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Dc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function gC(){const t=Dc("canvas");return t.style.display="block",t}const B0={};function O1(t){t in B0||(B0[t]=!0,console.warn(t))}function vC(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const z0=new Fe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),V0=new Fe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rl={[vr]:{transfer:bc,primaries:Rc,toReference:t=>t,fromReference:t=>t},[Qn]:{transfer:it,primaries:Rc,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[tu]:{transfer:bc,primaries:Pc,toReference:t=>t.applyMatrix3(V0),fromReference:t=>t.applyMatrix3(z0)},[jp]:{transfer:it,primaries:Pc,toReference:t=>t.convertSRGBToLinear().applyMatrix3(V0),fromReference:t=>t.applyMatrix3(z0).convertLinearToSRGB()}},_C=new Set([vr,tu]),Qe={enabled:!0,_workingColorSpace:vr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!_C.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=rl[e].toReference,r=rl[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return rl[t].primaries},getTransfer:function(t){return t===Yi?bc:rl[t].transfer}};function js(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Zu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let is;class xC{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{is===void 0&&(is=Dc("canvas")),is.width=e.width,is.height=e.height;const i=is.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=is}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Dc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=js(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(js(n[i]/255)*255):n[i]=js(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yC=0;class k1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yC++}),this.uuid=Ra(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Qu(r[o].image)):s.push(Qu(r[o]))}else s=Qu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Qu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?xC.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let SC=0;class un extends ho{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Br,r=Br,s=Wn,o=zr,a=jn,l=Di,c=un.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:SC++}),this.uuid=Ra(),this.name="",this.source=new k1(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==E1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ff:e.x=e.x-Math.floor(e.x);break;case Br:e.x=e.x<0?0:1;break;case Of:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ff:e.y=e.y-Math.floor(e.y);break;case Br:e.y=e.y<0?0:1;break;case Of:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=E1;un.DEFAULT_ANISOTROPY=1;class Ct{constructor(e=0,n=0,i=0,r=1){Ct.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],x=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-v)<.01&&Math.abs(x-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+v)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(c+1)/2,y=(p+1)/2,C=(f+1)/2,A=(u+h)/4,w=(d+v)/4,b=(x+m)/4;return g>y&&g>C?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=w/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=b/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=w/s,r=b/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-x)*(m-x)+(d-v)*(d-v)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(m-x)/_,this.y=(d-v)/_,this.z=(h-u)/_,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MC extends ho{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new k1(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qr extends MC{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class B1 extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class EC extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],x=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=x,e[n+3]=v;return}if(d!==v||l!==h||c!==p||u!==x){let m=1-a;const f=l*h+c*p+u*x+d*v,_=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const C=Math.sqrt(g),A=Math.atan2(C,f*_);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const y=a*_;if(l=l*m+h*y,c=c*m+p*y,u=u*m+x*y,d=d*m+v*y,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[n]=a*x+u*d+l*p-c*h,e[n+1]=l*x+u*h+c*d-a*p,e[n+2]=c*x+u*p+a*h-l*d,e[n+3]=u*x-a*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"YXZ":this._x=h*u*d+c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"ZXY":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d-h*p*x;break;case"ZYX":this._x=h*u*d-c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d+h*p*x;break;case"YZX":this._x=h*u*d+c*p*x,this._y=c*p*d+h*u*x,this._z=c*u*x-h*p*d,this._w=c*u*d-h*p*x;break;case"XZY":this._x=h*u*d-c*p*x,this._y=c*p*d-h*u*x,this._z=c*u*x+h*p*d,this._w=c*u*d+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(H0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(H0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ju.copy(this).projectOnVector(e),this.sub(Ju)}reflect(e){return this.sub(Ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ju=new O,H0=new Pa;class La{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sl.copy(i.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),ol.subVectors(this.max,wo),rs.subVectors(e.a,wo),ss.subVectors(e.b,wo),os.subVectors(e.c,wo),Fi.subVectors(ss,rs),Oi.subVectors(os,ss),Sr.subVectors(rs,os);let n=[0,-Fi.z,Fi.y,0,-Oi.z,Oi.y,0,-Sr.z,Sr.y,Fi.z,0,-Fi.x,Oi.z,0,-Oi.x,Sr.z,0,-Sr.x,-Fi.y,Fi.x,0,-Oi.y,Oi.x,0,-Sr.y,Sr.x,0];return!ed(n,rs,ss,os,ol)||(n=[1,0,0,0,1,0,0,0,1],!ed(n,rs,ss,os,ol))?!1:(al.crossVectors(Fi,Oi),n=[al.x,al.y,al.z],ed(n,rs,ss,os,ol))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new O,new O,new O,new O,new O,new O,new O,new O],On=new O,sl=new La,rs=new O,ss=new O,os=new O,Fi=new O,Oi=new O,Sr=new O,wo=new O,ol=new O,al=new O,Mr=new O;function ed(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Mr.fromArray(t,s);const a=r.x*Math.abs(Mr.x)+r.y*Math.abs(Mr.y)+r.z*Math.abs(Mr.z),l=e.dot(Mr),c=n.dot(Mr),u=i.dot(Mr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const TC=new La,Ao=new O,td=new O;class Xp{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):TC.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ao.subVectors(e,this.center);const n=Ao.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ao,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ao.copy(e.center).add(td)),this.expandByPoint(Ao.copy(e.center).sub(td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new O,nd=new O,ll=new O,ki=new O,id=new O,cl=new O,rd=new O;class wC{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){nd.copy(e).add(n).multiplyScalar(.5),ll.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(nd);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ll),a=ki.dot(this.direction),l=-ki.dot(ll),c=ki.lengthSq(),u=Math.abs(1-o*o);let d,h,p,x;if(u>0)if(d=o*l-a,h=o*a-l,x=s*u,d>=0)if(h>=-x)if(h<=x){const v=1/u;d*=v,h*=v,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(nd).addScaledVector(ll,h),p}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,s){id.subVectors(n,e),cl.subVectors(i,e),rd.crossVectors(id,cl);let o=this.direction.dot(rd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ki.subVectors(this.origin,e);const l=a*this.direction.dot(cl.crossVectors(ki,cl));if(l<0)return null;const c=a*this.direction.dot(id.cross(ki));if(c<0||l+c>o)return null;const u=-a*ki.dot(rd);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,o,a,l,c,u,d,h,p,x,v,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,h,p,x,v,m)}set(e,n,i,r,s,o,a,l,c,u,d,h,p,x,v,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/as.setFromMatrixColumn(e,0).length(),s=1/as.setFromMatrixColumn(e,1).length(),o=1/as.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*d,x=a*u,v=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+x*c,n[5]=h-v*c,n[9]=-a*l,n[2]=v-h*c,n[6]=x+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,x=c*u,v=c*d;n[0]=h+v*a,n[4]=x*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-x,n[6]=v+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,x=c*u,v=c*d;n[0]=h-v*a,n[4]=-o*d,n[8]=x+p*a,n[1]=p+x*a,n[5]=o*u,n[9]=v-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*d,x=a*u,v=a*d;n[0]=l*u,n[4]=x*c-p,n[8]=h*c+v,n[1]=l*d,n[5]=v*c+h,n[9]=p*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,x=a*l,v=a*c;n[0]=l*u,n[4]=v-h*d,n[8]=x*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+x,n[10]=h-v*d}else if(e.order==="XZY"){const h=o*l,p=o*c,x=a*l,v=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+v,n[5]=o*u,n[9]=p*d-x,n[2]=x*d-p,n[6]=a*u,n[10]=v*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AC,e,CC)}lookAt(e,n,i){const r=this.elements;return hn.subVectors(e,n),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Bi.crossVectors(i,hn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Bi.crossVectors(i,hn)),Bi.normalize(),ul.crossVectors(hn,Bi),r[0]=Bi.x,r[4]=ul.x,r[8]=hn.x,r[1]=Bi.y,r[5]=ul.y,r[9]=hn.y,r[2]=Bi.z,r[6]=ul.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],p=i[13],x=i[2],v=i[6],m=i[10],f=i[14],_=i[3],g=i[7],y=i[11],C=i[15],A=r[0],w=r[4],b=r[8],T=r[12],S=r[1],L=r[5],H=r[9],V=r[13],$=r[2],K=r[6],j=r[10],W=r[14],N=r[3],Y=r[7],Z=r[11],oe=r[15];return s[0]=o*A+a*S+l*$+c*N,s[4]=o*w+a*L+l*K+c*Y,s[8]=o*b+a*H+l*j+c*Z,s[12]=o*T+a*V+l*W+c*oe,s[1]=u*A+d*S+h*$+p*N,s[5]=u*w+d*L+h*K+p*Y,s[9]=u*b+d*H+h*j+p*Z,s[13]=u*T+d*V+h*W+p*oe,s[2]=x*A+v*S+m*$+f*N,s[6]=x*w+v*L+m*K+f*Y,s[10]=x*b+v*H+m*j+f*Z,s[14]=x*T+v*V+m*W+f*oe,s[3]=_*A+g*S+y*$+C*N,s[7]=_*w+g*L+y*K+C*Y,s[11]=_*b+g*H+y*j+C*Z,s[15]=_*T+g*V+y*W+C*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],x=e[3],v=e[7],m=e[11],f=e[15];return x*(+s*l*d-r*c*d-s*a*h+i*c*h+r*a*p-i*l*p)+v*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*d+n*a*h+r*o*d-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],x=e[12],v=e[13],m=e[14],f=e[15],_=d*m*c-v*h*c+v*l*p-a*m*p-d*l*f+a*h*f,g=x*h*c-u*m*c-x*l*p+o*m*p+u*l*f-o*h*f,y=u*v*c-x*d*c+x*a*p-o*v*p-u*a*f+o*d*f,C=x*d*l-u*v*l-x*a*h+o*v*h+u*a*m-o*d*m,A=n*_+i*g+r*y+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=_*w,e[1]=(v*h*s-d*m*s-v*r*p+i*m*p+d*r*f-i*h*f)*w,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*f+i*l*f)*w,e[3]=(d*l*s-a*h*s-d*r*c+i*h*c+a*r*p-i*l*p)*w,e[4]=g*w,e[5]=(u*m*s-x*h*s+x*r*p-n*m*p-u*r*f+n*h*f)*w,e[6]=(x*l*s-o*m*s-x*r*c+n*m*c+o*r*f-n*l*f)*w,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*w,e[8]=y*w,e[9]=(x*d*s-u*v*s-x*i*p+n*v*p+u*i*f-n*d*f)*w,e[10]=(o*v*s-x*a*s+x*i*c-n*v*c-o*i*f+n*a*f)*w,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*w,e[12]=C*w,e[13]=(u*v*r-x*d*r+x*i*h-n*v*h-u*i*m+n*d*m)*w,e[14]=(x*a*r-o*v*r-x*i*l+n*v*l+o*i*m-n*a*m)*w,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,h=s*c,p=s*u,x=s*d,v=o*u,m=o*d,f=a*d,_=l*c,g=l*u,y=l*d,C=i.x,A=i.y,w=i.z;return r[0]=(1-(v+f))*C,r[1]=(p+y)*C,r[2]=(x-g)*C,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(h+f))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(x+g)*w,r[9]=(m-_)*w,r[10]=(1-(h+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=as.set(r[0],r[1],r[2]).length();const o=as.set(r[4],r[5],r[6]).length(),a=as.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],kn.copy(this);const c=1/s,u=1/o,d=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=u,kn.elements[5]*=u,kn.elements[6]*=u,kn.elements[8]*=d,kn.elements[9]*=d,kn.elements[10]*=d,n.setFromRotationMatrix(kn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ei){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,x;if(a===Ei)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Lc)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei){const l=this.elements,c=1/(n-e),u=1/(i-r),d=1/(o-s),h=(n+e)*c,p=(i+r)*u;let x,v;if(a===Ei)x=(o+s)*d,v=-2*d;else if(a===Lc)x=s*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const as=new O,kn=new xt,AC=new O(0,0,0),CC=new O(1,1,1),Bi=new O,ul=new O,hn=new O,G0=new xt,W0=new Pa;class ci{constructor(e=0,n=0,i=0,r=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-rn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-rn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return G0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(G0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return W0.setFromEuler(this),this.setFromQuaternion(W0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class z1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bC=0;const j0=new O,ls=new Pa,hi=new xt,dl=new O,Co=new O,RC=new O,PC=new Pa,X0=new O(1,0,0),Y0=new O(0,1,0),$0=new O(0,0,1),K0={type:"added"},LC={type:"removed"},cs={type:"childadded",child:null},sd={type:"childremoved",child:null};class Yt extends ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bC++}),this.uuid=Ra(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new O,n=new ci,i=new Pa,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Fe}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new z1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,n){return ls.setFromAxisAngle(e,n),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(X0,e)}rotateY(e){return this.rotateOnAxis(Y0,e)}rotateZ(e){return this.rotateOnAxis($0,e)}translateOnAxis(e,n){return j0.copy(e).applyQuaternion(this.quaternion),this.position.add(j0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(X0,e)}translateY(e){return this.translateOnAxis(Y0,e)}translateZ(e){return this.translateOnAxis($0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?dl.copy(e):dl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Co,dl,this.up):hi.lookAt(dl,Co,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),ls.setFromRotationMatrix(hi),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(K0),cs.child=e,this.dispatchEvent(cs),cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(LC),sd.child=e,this.dispatchEvent(sd),sd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(K0),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,RC),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,PC,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new O(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new O,pi=new O,od=new O,mi=new O,us=new O,ds=new O,q0=new O,ad=new O,ld=new O,cd=new O;class ti{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),pi.subVectors(i,n),od.subVectors(e,n);const o=Bn.dot(Bn),a=Bn.dot(pi),l=Bn.dot(od),c=pi.dot(pi),u=pi.dot(od),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-a*u)*h,x=(o*u-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(o,mi.y),l.addScaledVector(a,mi.z),l)}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),pi.subVectors(e,n),Bn.cross(pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Bn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ti.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ti.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;us.subVectors(r,i),ds.subVectors(s,i),ad.subVectors(e,i);const l=us.dot(ad),c=ds.dot(ad);if(l<=0&&c<=0)return n.copy(i);ld.subVectors(e,r);const u=us.dot(ld),d=ds.dot(ld);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(us,o);cd.subVectors(e,s);const p=us.dot(cd),x=ds.dot(cd);if(x>=0&&p<=x)return n.copy(s);const v=p*c-l*x;if(v<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(ds,a);const m=u*x-p*d;if(m<=0&&d-u>=0&&p-x>=0)return q0.subVectors(s,r),a=(d-u)/(d-u+(p-x)),n.copy(r).addScaledVector(q0,a);const f=1/(m+v+h);return o=v*f,a=h*f,n.copy(i).addScaledVector(us,o).addScaledVector(ds,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const V1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},fl={h:0,s:0,l:0};function ud(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=mC(e,1),n=rn(n,0,1),i=rn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ud(o,s,e+1/3),this.g=ud(o,s,e),this.b=ud(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,n=Qn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const i=V1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}copyLinearToSRGB(e){return this.r=Zu(e.r),this.g=Zu(e.g),this.b=Zu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return Qe.fromWorkingColorSpace(Gt.copy(this),e),Math.round(rn(Gt.r*255,0,255))*65536+Math.round(rn(Gt.g*255,0,255))*256+Math.round(rn(Gt.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Qn){Qe.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(fl);const i=Ku(zi.h,fl.h,n),r=Ku(zi.s,fl.s,n),s=Ku(zi.l,fl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Xe;Xe.NAMES=V1;let DC=0;class Da extends ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DC++}),this.uuid=Ra(),this.name="",this.type="Material",this.blending=Gs,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Df,this.blendDst=Nf,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Cc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=F0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(i.blending=this.blending),this.side!==dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Df&&(i.blendSrc=this.blendSrc),this.blendDst!==Nf&&(i.blendDst=this.blendDst),this.blendEquation!==Nr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Cc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==F0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class H1 extends Da{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=M1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new O,hl=new je;class ai{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=O0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return O1("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=To(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=tn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=To(n,this.array)),n}setX(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=To(n,this.array)),n}setY(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=To(n,this.array)),n}setZ(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=To(n,this.array)),n}setW(e,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=tn(n,this.array),i=tn(i,this.array),r=tn(r,this.array),s=tn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==O0&&(e.usage=this.usage),e}}class G1 extends ai{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class W1 extends ai{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class li extends ai{constructor(e,n,i){super(new Float32Array(e),n,i)}}let NC=0;const wn=new xt,dd=new Yt,fs=new O,pn=new La,bo=new La,Lt=new O;class _r extends ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NC++}),this.uuid=Ra(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(F1(e)?W1:G1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,n,i){return wn.makeTranslation(e,n,i),this.applyMatrix4(wn),this}scale(e,n,i){return wn.makeScale(e,n,i),this.applyMatrix4(wn),this}lookAt(e){return dd.lookAt(e),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new li(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new La);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xp);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];bo.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(pn.min,bo.min),pn.expandByPoint(Lt),Lt.addVectors(pn.max,bo.max),pn.expandByPoint(Lt)):(pn.expandByPoint(bo.min),pn.expandByPoint(bo.max))}pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(fs.fromBufferAttribute(e,c),Lt.add(fs)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let b=0;b<i.count;b++)a[b]=new O,l[b]=new O;const c=new O,u=new O,d=new O,h=new je,p=new je,x=new je,v=new O,m=new O;function f(b,T,S){c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,S),h.fromBufferAttribute(s,b),p.fromBufferAttribute(s,T),x.fromBufferAttribute(s,S),u.sub(c),d.sub(c),p.sub(h),x.sub(h);const L=1/(p.x*x.y-x.x*p.y);isFinite(L)&&(v.copy(u).multiplyScalar(x.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(L),a[b].add(v),a[T].add(v),a[S].add(v),l[b].add(m),l[T].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let b=0,T=_.length;b<T;++b){const S=_[b],L=S.start,H=S.count;for(let V=L,$=L+H;V<$;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const g=new O,y=new O,C=new O,A=new O;function w(b){C.fromBufferAttribute(r,b),A.copy(C);const T=a[b];g.copy(T),g.sub(C.multiplyScalar(C.dot(T))).normalize(),y.crossVectors(A,T);const L=y.dot(l[b])<0?-1:1;o.setXYZW(b,g.x,g.y,g.z,L)}for(let b=0,T=_.length;b<T;++b){const S=_[b],L=S.start,H=S.count;for(let V=L,$=L+H;V<$;V+=3)w(e.getX(V+0)),w(e.getX(V+1)),w(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let p=0,x=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let f=0;f<u;f++)h[x++]=c[p++]}return new ai(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _r,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Z0=new xt,Er=new wC,pl=new Xp,Q0=new O,hs=new O,ps=new O,ms=new O,fd=new O,ml=new O,gl=new je,vl=new je,_l=new je,J0=new O,ev=new O,tv=new O,xl=new O,yl=new O;class ni extends Yt{constructor(e=new _r,n=new H1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ml.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(fd.fromBufferAttribute(d,e),o?ml.addScaledVector(fd,u):ml.addScaledVector(fd.sub(n),u))}n.add(ml)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(s),Er.copy(e.ray).recast(e.near),!(pl.containsPoint(Er.origin)===!1&&(Er.intersectSphere(pl,Q0)===null||Er.origin.distanceToSquared(Q0)>(e.far-e.near)**2))&&(Z0.copy(s).invert(),Er.copy(e.ray).applyMatrix4(Z0),!(i.boundingBox!==null&&Er.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Er)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,v=h.length;x<v;x++){const m=h[x],f=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,C=g;y<C;y+=3){const A=a.getX(y),w=a.getX(y+1),b=a.getX(y+2);r=Sl(this,f,e,i,c,u,d,A,w,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=x,f=v;m<f;m+=3){const _=a.getX(m),g=a.getX(m+1),y=a.getX(m+2);r=Sl(this,o,e,i,c,u,d,_,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,v=h.length;x<v;x++){const m=h[x],f=o[m.materialIndex],_=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,C=g;y<C;y+=3){const A=y,w=y+1,b=y+2;r=Sl(this,f,e,i,c,u,d,A,w,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=x,f=v;m<f;m+=3){const _=m,g=m+1,y=m+2;r=Sl(this,o,e,i,c,u,d,_,g,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function IC(t,e,n,i,r,s,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===dr,a),l===null)return null;yl.copy(a),yl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(yl);return c<n.near||c>n.far?null:{distance:c,point:yl.clone(),object:t}}function Sl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,hs),t.getVertexPosition(l,ps),t.getVertexPosition(c,ms);const u=IC(t,e,n,i,hs,ps,ms,xl);if(u){r&&(gl.fromBufferAttribute(r,a),vl.fromBufferAttribute(r,l),_l.fromBufferAttribute(r,c),u.uv=ti.getInterpolation(xl,hs,ps,ms,gl,vl,_l,new je)),s&&(gl.fromBufferAttribute(s,a),vl.fromBufferAttribute(s,l),_l.fromBufferAttribute(s,c),u.uv1=ti.getInterpolation(xl,hs,ps,ms,gl,vl,_l,new je)),o&&(J0.fromBufferAttribute(o,a),ev.fromBufferAttribute(o,l),tv.fromBufferAttribute(o,c),u.normal=ti.getInterpolation(xl,hs,ps,ms,J0,ev,tv,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};ti.getNormal(hs,ps,ms,d.normal),u.face=d}return u}class Na extends _r{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new li(c,3)),this.setAttribute("normal",new li(u,3)),this.setAttribute("uv",new li(d,2));function x(v,m,f,_,g,y,C,A,w,b,T){const S=y/w,L=C/b,H=y/2,V=C/2,$=A/2,K=w+1,j=b+1;let W=0,N=0;const Y=new O;for(let Z=0;Z<j;Z++){const oe=Z*L-V;for(let Se=0;Se<K;Se++){const He=Se*S-H;Y[v]=He*_,Y[m]=oe*g,Y[f]=$,c.push(Y.x,Y.y,Y.z),Y[v]=0,Y[m]=0,Y[f]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(Se/w),d.push(1-Z/b),W+=1}}for(let Z=0;Z<b;Z++)for(let oe=0;oe<w;oe++){const Se=h+oe+K*Z,He=h+oe+K*(Z+1),G=h+(oe+1)+K*(Z+1),ne=h+(oe+1)+K*Z;l.push(Se,He,ne),l.push(He,G,ne),N+=6}a.addGroup(p,N,T),p+=N,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Kt(t){const e={};for(let n=0;n<t.length;n++){const i=oo(t[n]);for(const r in i)e[r]=i[r]}return e}function UC(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function j1(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const FC={clone:oo,merge:Kt};var OC=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kC=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fr extends Da{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OC,this.fragmentShader=kC,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=UC(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class X1 extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Vi=new O,nv=new je,iv=new je;class Rn extends X1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=uh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($u*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uh*2*Math.atan(Math.tan($u*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,n){return this.getViewBounds(e,nv,iv),n.subVectors(iv,nv)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan($u*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const gs=-90,vs=1;class BC extends Yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(gs,vs,e,n);r.layers=this.layers,this.add(r);const s=new Rn(gs,vs,e,n);s.layers=this.layers,this.add(s);const o=new Rn(gs,vs,e,n);o.layers=this.layers,this.add(o);const a=new Rn(gs,vs,e,n);a.layers=this.layers,this.add(a);const l=new Rn(gs,vs,e,n);l.layers=this.layers,this.add(l);const c=new Rn(gs,vs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Y1 extends un{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:no,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zC extends qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Y1(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Na(5,5,5),s=new fr({name:"CubemapFromEquirect",uniforms:oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:sr});s.uniforms.tEquirect.value=n;const o=new ni(r,s),a=n.minFilter;return n.minFilter===zr&&(n.minFilter=Wn),new BC(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const hd=new O,VC=new O,HC=new Fe;class Lr{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=hd.subVectors(i,n).cross(VC.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(hd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||HC.getNormalMatrix(e),r=this.coplanarPoint(hd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new Xp,Ml=new O;class Yp{constructor(e=new Lr,n=new Lr,i=new Lr,r=new Lr,s=new Lr,o=new Lr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],p=r[8],x=r[9],v=r[10],m=r[11],f=r[12],_=r[13],g=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-p,y-f).normalize(),i[1].setComponents(l+s,h+c,m+p,y+f).normalize(),i[2].setComponents(l+o,h+u,m+x,y+_).normalize(),i[3].setComponents(l-o,h-u,m-x,y-_).normalize(),i[4].setComponents(l-a,h-d,m-v,y-g).normalize(),n===Ei)i[5].setComponents(l+a,h+d,m+v,y+g).normalize();else if(n===Lc)i[5].setComponents(a,d,v,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){return Tr.center.set(0,0,0),Tr.radius=.7071067811865476,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ml.x=r.normal.x>0?e.max.x:e.min.x,Ml.y=r.normal.y>0?e.max.y:e.min.y,Ml.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $1(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function GC(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(t.bindBuffer(c,a),d.count===-1&&h.length===0&&t.bufferSubData(c,0,u),h.length!==0){for(let p=0,x=h.length;p<x;p++){const v=h[p];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class nu extends _r{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,h=n/l,p=[],x=[],v=[],m=[];for(let f=0;f<u;f++){const _=f*h-o;for(let g=0;g<c;g++){const y=g*d-s;x.push(y,-_,0),v.push(0,0,1),m.push(g/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const g=_+c*f,y=_+c*(f+1),C=_+1+c*(f+1),A=_+1+c*f;p.push(g,y,A),p.push(y,C,A)}this.setIndex(p),this.setAttribute("position",new li(x,3)),this.setAttribute("normal",new li(v,3)),this.setAttribute("uv",new li(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nu(e.width,e.height,e.widthSegments,e.heightSegments)}}var WC=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jC=`#ifdef USE_ALPHAHASH
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
#endif`,XC=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YC=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$C=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,KC=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qC=`#ifdef USE_AOMAP
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
#endif`,ZC=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QC=`#ifdef USE_BATCHING
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
#endif`,JC=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ib=`#ifdef USE_IRIDESCENCE
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
#endif`,rb=`#ifdef USE_BUMPMAP
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
#endif`,sb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hb=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,pb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mb=`vec3 transformedNormal = objectNormal;
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
#endif`,gb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_b=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Mb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tb=`#ifdef USE_ENVMAP
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
#endif`,wb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ab=`#ifdef USE_ENVMAP
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
#endif`,Cb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Lb=`#ifdef USE_GRADIENTMAP
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
}`,Db=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ib=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ub=`uniform bool receiveShadow;
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
#endif`,Fb=`#ifdef USE_ENVMAP
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
#endif`,Ob=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Bb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vb=`PhysicalMaterial material;
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
#endif`,Hb=`struct PhysicalMaterial {
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
}`,Gb=`
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
#endif`,Wb=`#if defined( RE_IndirectDiffuse )
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
#endif`,jb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$b=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jb=`#if defined( USE_POINTS_UV )
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
#endif`,eR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sR=`#ifdef USE_MORPHTARGETS
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
#endif`,oR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fR=`#ifdef USE_NORMALMAP
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
#endif`,hR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,gR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_R=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,xR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ER=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,TR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,CR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bR=`float getShadowMask() {
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
}`,RR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PR=`#ifdef USE_SKINNING
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
#endif`,LR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DR=`#ifdef USE_SKINNING
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
#endif`,NR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FR=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,OR=`#ifdef USE_TRANSMISSION
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
#endif`,kR=`#ifdef USE_TRANSMISSION
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
#endif`,BR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WR=`uniform sampler2D t2D;
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
}`,jR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,YR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$R=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KR=`#include <common>
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
}`,qR=`#if DEPTH_PACKING == 3200
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
	#endif
}`,ZR=`#define DISTANCE
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
}`,QR=`#define DISTANCE
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
}`,JR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tP=`uniform float scale;
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
}`,nP=`uniform vec3 diffuse;
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
}`,iP=`#include <common>
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
}`,rP=`uniform vec3 diffuse;
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
}`,sP=`#define LAMBERT
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
}`,oP=`#define LAMBERT
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
}`,aP=`#define MATCAP
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
}`,lP=`#define MATCAP
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
}`,cP=`#define NORMAL
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
}`,uP=`#define NORMAL
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
}`,dP=`#define PHONG
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
}`,fP=`#define PHONG
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
}`,hP=`#define STANDARD
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
}`,pP=`#define STANDARD
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
}`,mP=`#define TOON
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
}`,gP=`#define TOON
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
}`,vP=`uniform float size;
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
}`,_P=`uniform vec3 diffuse;
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
}`,xP=`#include <common>
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
}`,yP=`uniform vec3 color;
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
}`,SP=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,MP=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:WC,alphahash_pars_fragment:jC,alphamap_fragment:XC,alphamap_pars_fragment:YC,alphatest_fragment:$C,alphatest_pars_fragment:KC,aomap_fragment:qC,aomap_pars_fragment:ZC,batching_pars_vertex:QC,batching_vertex:JC,begin_vertex:eb,beginnormal_vertex:tb,bsdfs:nb,iridescence_fragment:ib,bumpmap_pars_fragment:rb,clipping_planes_fragment:sb,clipping_planes_pars_fragment:ob,clipping_planes_pars_vertex:ab,clipping_planes_vertex:lb,color_fragment:cb,color_pars_fragment:ub,color_pars_vertex:db,color_vertex:fb,common:hb,cube_uv_reflection_fragment:pb,defaultnormal_vertex:mb,displacementmap_pars_vertex:gb,displacementmap_vertex:vb,emissivemap_fragment:_b,emissivemap_pars_fragment:xb,colorspace_fragment:yb,colorspace_pars_fragment:Sb,envmap_fragment:Mb,envmap_common_pars_fragment:Eb,envmap_pars_fragment:Tb,envmap_pars_vertex:wb,envmap_physical_pars_fragment:Fb,envmap_vertex:Ab,fog_vertex:Cb,fog_pars_vertex:bb,fog_fragment:Rb,fog_pars_fragment:Pb,gradientmap_pars_fragment:Lb,lightmap_pars_fragment:Db,lights_lambert_fragment:Nb,lights_lambert_pars_fragment:Ib,lights_pars_begin:Ub,lights_toon_fragment:Ob,lights_toon_pars_fragment:kb,lights_phong_fragment:Bb,lights_phong_pars_fragment:zb,lights_physical_fragment:Vb,lights_physical_pars_fragment:Hb,lights_fragment_begin:Gb,lights_fragment_maps:Wb,lights_fragment_end:jb,logdepthbuf_fragment:Xb,logdepthbuf_pars_fragment:Yb,logdepthbuf_pars_vertex:$b,logdepthbuf_vertex:Kb,map_fragment:qb,map_pars_fragment:Zb,map_particle_fragment:Qb,map_particle_pars_fragment:Jb,metalnessmap_fragment:eR,metalnessmap_pars_fragment:tR,morphinstance_vertex:nR,morphcolor_vertex:iR,morphnormal_vertex:rR,morphtarget_pars_vertex:sR,morphtarget_vertex:oR,normal_fragment_begin:aR,normal_fragment_maps:lR,normal_pars_fragment:cR,normal_pars_vertex:uR,normal_vertex:dR,normalmap_pars_fragment:fR,clearcoat_normal_fragment_begin:hR,clearcoat_normal_fragment_maps:pR,clearcoat_pars_fragment:mR,iridescence_pars_fragment:gR,opaque_fragment:vR,packing:_R,premultiplied_alpha_fragment:xR,project_vertex:yR,dithering_fragment:SR,dithering_pars_fragment:MR,roughnessmap_fragment:ER,roughnessmap_pars_fragment:TR,shadowmap_pars_fragment:wR,shadowmap_pars_vertex:AR,shadowmap_vertex:CR,shadowmask_pars_fragment:bR,skinbase_vertex:RR,skinning_pars_vertex:PR,skinning_vertex:LR,skinnormal_vertex:DR,specularmap_fragment:NR,specularmap_pars_fragment:IR,tonemapping_fragment:UR,tonemapping_pars_fragment:FR,transmission_fragment:OR,transmission_pars_fragment:kR,uv_pars_fragment:BR,uv_pars_vertex:zR,uv_vertex:VR,worldpos_vertex:HR,background_vert:GR,background_frag:WR,backgroundCube_vert:jR,backgroundCube_frag:XR,cube_vert:YR,cube_frag:$R,depth_vert:KR,depth_frag:qR,distanceRGBA_vert:ZR,distanceRGBA_frag:QR,equirect_vert:JR,equirect_frag:eP,linedashed_vert:tP,linedashed_frag:nP,meshbasic_vert:iP,meshbasic_frag:rP,meshlambert_vert:sP,meshlambert_frag:oP,meshmatcap_vert:aP,meshmatcap_frag:lP,meshnormal_vert:cP,meshnormal_frag:uP,meshphong_vert:dP,meshphong_frag:fP,meshphysical_vert:hP,meshphysical_frag:pP,meshtoon_vert:mP,meshtoon_frag:gP,points_vert:vP,points_frag:_P,shadow_vert:xP,shadow_frag:yP,sprite_vert:SP,sprite_frag:MP},le={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Jn={basic:{uniforms:Kt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Kt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Kt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Kt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Kt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Kt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Kt([le.points,le.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Kt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Kt([le.common,le.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Kt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Kt([le.sprite,le.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Kt([le.common,le.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Kt([le.lights,le.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Jn.physical={uniforms:Kt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const El={r:0,b:0,g:0},wr=new ci,EP=new xt;function TP(t,e,n,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function x(_){let g=_.isScene===!0?_.background:null;return g&&g.isTexture&&(g=(_.backgroundBlurriness>0?n:e).get(g)),g}function v(_){let g=!1;const y=x(_);y===null?f(a,l):y&&y.isColor&&(f(y,1),g=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,g){const y=x(g);y&&(y.isCubeTexture||y.mapping===eu)?(u===void 0&&(u=new ni(new Na(1,1,1),new fr({name:"BackgroundCubeMaterial",uniforms:oo(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),wr.copy(g.backgroundRotation),wr.x*=-1,wr.y*=-1,wr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(EP.makeRotationFromEuler(wr)),u.material.toneMapped=Qe.getTransfer(y.colorSpace)!==it,(d!==y||h!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ni(new nu(2,2),new fr({name:"BackgroundMaterial",uniforms:oo(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(y.colorSpace)!==it,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function f(_,g){_.getRGB(El,j1(t)),i.buffers.color.setClear(El.r,El.g,El.b,g,o)}return{getClearColor:function(){return a},setClearColor:function(_,g=1){a.set(_),l=g,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,f(a,l)},render:v,addToRenderList:m}}function wP(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,L,H,V,$){let K=!1;const j=d(V,H,L);s!==j&&(s=j,c(s.object)),K=p(S,V,H,$),K&&x(S,V,H,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(S,L,H,V),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function d(S,L,H){const V=H.wireframe===!0;let $=i[S.id];$===void 0&&($={},i[S.id]=$);let K=$[L.id];K===void 0&&(K={},$[L.id]=K);let j=K[V];return j===void 0&&(j=h(l()),K[V]=j),j}function h(S){const L=[],H=[],V=[];for(let $=0;$<n;$++)L[$]=0,H[$]=0,V[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:V,object:S,attributes:{},index:null}}function p(S,L,H,V){const $=s.attributes,K=L.attributes;let j=0;const W=H.getAttributes();for(const N in W)if(W[N].location>=0){const Z=$[N];let oe=K[N];if(oe===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),Z===void 0||Z.attribute!==oe||oe&&Z.data!==oe.data)return!0;j++}return s.attributesNum!==j||s.index!==V}function x(S,L,H,V){const $={},K=L.attributes;let j=0;const W=H.getAttributes();for(const N in W)if(W[N].location>=0){let Z=K[N];Z===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const oe={};oe.attribute=Z,Z&&Z.data&&(oe.data=Z.data),$[N]=oe,j++}s.attributes=$,s.attributesNum=j,s.index=V}function v(){const S=s.newAttributes;for(let L=0,H=S.length;L<H;L++)S[L]=0}function m(S){f(S,0)}function f(S,L){const H=s.newAttributes,V=s.enabledAttributes,$=s.attributeDivisors;H[S]=1,V[S]===0&&(t.enableVertexAttribArray(S),V[S]=1),$[S]!==L&&(t.vertexAttribDivisor(S,L),$[S]=L)}function _(){const S=s.newAttributes,L=s.enabledAttributes;for(let H=0,V=L.length;H<V;H++)L[H]!==S[H]&&(t.disableVertexAttribArray(H),L[H]=0)}function g(S,L,H,V,$,K,j){j===!0?t.vertexAttribIPointer(S,L,H,$,K):t.vertexAttribPointer(S,L,H,V,$,K)}function y(S,L,H,V){v();const $=V.attributes,K=H.getAttributes(),j=L.defaultAttributeValues;for(const W in K){const N=K[W];if(N.location>=0){let Y=$[W];if(Y===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor)),Y!==void 0){const Z=Y.normalized,oe=Y.itemSize,Se=e.get(Y);if(Se===void 0)continue;const He=Se.buffer,G=Se.type,ne=Se.bytesPerElement,ue=G===t.INT||G===t.UNSIGNED_INT||Y.gpuType===Bp;if(Y.isInterleavedBufferAttribute){const de=Y.data,De=de.stride,Oe=Y.offset;if(de.isInstancedInterleavedBuffer){for(let ze=0;ze<N.locationSize;ze++)f(N.location+ze,de.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ze=0;ze<N.locationSize;ze++)m(N.location+ze);t.bindBuffer(t.ARRAY_BUFFER,He);for(let ze=0;ze<N.locationSize;ze++)g(N.location+ze,oe/N.locationSize,G,Z,De*ne,(Oe+oe/N.locationSize*ze)*ne,ue)}else{if(Y.isInstancedBufferAttribute){for(let de=0;de<N.locationSize;de++)f(N.location+de,Y.meshPerAttribute);S.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let de=0;de<N.locationSize;de++)m(N.location+de);t.bindBuffer(t.ARRAY_BUFFER,He);for(let de=0;de<N.locationSize;de++)g(N.location+de,oe/N.locationSize,G,Z,oe*ne,oe/N.locationSize*de*ne,ue)}}else if(j!==void 0){const Z=j[W];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(N.location,Z);break;case 3:t.vertexAttrib3fv(N.location,Z);break;case 4:t.vertexAttrib4fv(N.location,Z);break;default:t.vertexAttrib1fv(N.location,Z)}}}}_()}function C(){b();for(const S in i){const L=i[S];for(const H in L){const V=L[H];for(const $ in V)u(V[$].object),delete V[$];delete L[H]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const H in L){const V=L[H];for(const $ in V)u(V[$].object),delete V[$];delete L[H]}delete i[S.id]}function w(S){for(const L in i){const H=i[L];if(H[S.id]===void 0)continue;const V=H[S.id];for(const $ in V)u(V[$].object),delete V[$];delete H[S.id]}}function b(){T(),o=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function AP(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let x=0;x<d;x++)p+=u[x];n.update(p,i,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)o(c[x],u[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let x=0;for(let v=0;v<d;v++)x+=u[v];for(let v=0;v<h.length;v++)n.update(x,i,h[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function CP(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==jn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const w=A===ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Di&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Mi&&!w)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:f,maxVaryings:_,maxFragmentUniforms:g,vertexTextures:y,maxSamples:C}}function bP(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Lr,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||x===null||x.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,g=_*4;let y=f.clippingState||null;l.value=y,y=u(x,h,g,p);for(let C=0;C!==g;++C)y[C]=n[C];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,p,x){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,x!==!0||m===null){const f=p+v*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let g=0,y=p;g!==v;++g,y+=4)o.copy(d[g]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function RP(t){let e=new WeakMap;function n(o,a){return a===If?o.mapping=no:a===Uf&&(o.mapping=io),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===If||a===Uf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new zC(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class K1 extends X1{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Fs=4,rv=[.125,.215,.35,.446,.526,.582],Ir=20,pd=new K1,sv=new Xe;let md=null,gd=0,vd=0,_d=!1;const Dr=(1+Math.sqrt(5))/2,_s=1/Dr,ov=[new O(-Dr,_s,0),new O(Dr,_s,0),new O(-_s,0,Dr),new O(_s,0,Dr),new O(0,Dr,-_s),new O(0,Dr,_s),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class av{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(md,gd,vd),this._renderer.xr.enabled=_d,e.scissorTest=!1,Tl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===no||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:ba,format:jn,colorSpace:vr,depthBuffer:!1},r=lv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lv(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PP(s)),this._blurMaterial=LP(s,e,n)}return r}_compileMaterial(e){const n=new ni(this._lodPlanes[0],e);this._renderer.compile(n,pd)}_sceneToCubeUV(e,n,i,r){const a=new Rn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(sv),u.toneMapping=or,u.autoClear=!1;const p=new H1({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),x=new ni(new Na,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(sv),v=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const g=this._cubeSize;Tl(r,_*g,f>2?g:0,g,g),u.setRenderTarget(r),v&&u.render(x,a),u.render(e,a)}x.geometry.dispose(),x.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===no||e.mapping===io;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ni(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Tl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,pd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ov[(r-s-1)%ov.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new ni(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ir-1),v=s/x,m=isFinite(s)?1+Math.floor(u*v):Ir;m>Ir&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ir}`);const f=[];let _=0;for(let w=0;w<Ir;++w){const b=w/v,T=Math.exp(-b*b/2);f.push(T),w===0?_+=T:w<m&&(_+=2*T)}for(let w=0;w<f.length;w++)f[w]=f[w]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:g}=this;h.dTheta.value=x,h.mipInt.value=g-i;const y=this._sizeLods[r],C=3*y*(r>g-Fs?r-g+Fs:0),A=4*(this._cubeSize-y);Tl(n,C,A,3*y,2*y),l.setRenderTarget(n),l.render(d,pd)}}function PP(t){const e=[],n=[],i=[];let r=t;const s=t-Fs+1+rv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Fs?l=rv[o-t+Fs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,x=6,v=3,m=2,f=1,_=new Float32Array(v*x*p),g=new Float32Array(m*x*p),y=new Float32Array(f*x*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,b=A>2?0:-1,T=[w,b,0,w+2/3,b,0,w+2/3,b+1,0,w,b,0,w+2/3,b+1,0,w,b+1,0];_.set(T,v*x*A),g.set(h,m*x*A);const S=[A,A,A,A,A,A];y.set(S,f*x*A)}const C=new _r;C.setAttribute("position",new ai(_,v)),C.setAttribute("uv",new ai(g,m)),C.setAttribute("faceIndex",new ai(y,f)),e.push(C),r>Fs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function lv(t,e,n){const i=new qr(t,e,n);return i.texture.mapping=eu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Tl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function LP(t,e,n){const i=new Float32Array(Ir),r=new O(0,1,0);return new fr({name:"SphericalGaussianBlur",defines:{n:Ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$p(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function cv(){return new fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$p(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function uv(){return new fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function $p(){return`

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
	`}function DP(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===If||l===Uf,u=l===no||l===io;if(c||u){let d=e.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new av(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new av(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function NP(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&O1("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function IP(t,e,n,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const v=h.morphAttributes[x];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const x in p){const v=p[x];for(let m=0,f=v.length;m<f;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(d){const h=[],p=d.index,x=d.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let g=0,y=_.length;g<y;g+=3){const C=_[g+0],A=_[g+1],w=_[g+2];h.push(C,A,A,w,w,C)}}else if(x!==void 0){const _=x.array;v=x.version;for(let g=0,y=_.length/3-1;g<y;g+=3){const C=g+0,A=g+1,w=g+2;h.push(C,A,A,w,w,C)}}else return;const m=new(F1(h)?W1:G1)(h,1);m.version=v;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function UP(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,x){x!==0&&(t.drawElementsInstanced(i,p,s,h*o,x),n.update(p,i,x))}function u(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,x);let m=0;for(let f=0;f<x;f++)m+=p[f];n.update(m,i,1)}function d(h,p,x,v){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,v,0,x);let f=0;for(let _=0;_<x;_++)f+=p[_];for(let _=0;_<v.length;_++)n.update(f,i,v[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function FP(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function OP(t,e,n){const i=new WeakMap,r=new Ct;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==d){let S=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],g=a.morphAttributes.color||[];let y=0;x===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let C=a.attributes.position.count*y,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*A*4*d),b=new B1(w,C,A,d);b.type=Mi,b.needsUpdate=!0;const T=y*4;for(let L=0;L<d;L++){const H=f[L],V=_[L],$=g[L],K=C*A*4*L;for(let j=0;j<H.count;j++){const W=j*T;x===!0&&(r.fromBufferAttribute(H,j),w[K+W+0]=r.x,w[K+W+1]=r.y,w[K+W+2]=r.z,w[K+W+3]=0),v===!0&&(r.fromBufferAttribute(V,j),w[K+W+4]=r.x,w[K+W+5]=r.y,w[K+W+6]=r.z,w[K+W+7]=0),m===!0&&(r.fromBufferAttribute($,j),w[K+W+8]=r.x,w[K+W+9]=r.y,w[K+W+10]=r.z,w[K+W+11]=$.itemSize===4?r.w:1)}}h={count:d,texture:b,size:new je(C,A)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let x=0;for(let m=0;m<c.length;m++)x+=c[m];const v=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function kP(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class q1 extends un{constructor(e,n,i,r,s,o,a,l,c,u=Ws){if(u!==Ws&&u!==so)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ws&&(i=Kr),i===void 0&&u===so&&(i=ro),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Ln,this.minFilter=l!==void 0?l:Ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Z1=new un,dv=new q1(1,1),Q1=new B1,J1=new EC,eS=new Y1,fv=[],hv=[],pv=new Float32Array(16),mv=new Float32Array(9),gv=new Float32Array(4);function po(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=fv[r];if(s===void 0&&(s=new Float32Array(r),fv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function iu(t,e){let n=hv[e];n===void 0&&(n=new Int32Array(e),hv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function BP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function zP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function VP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function HP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function GP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;gv.set(i),t.uniformMatrix2fv(this.addr,!1,gv),Pt(n,i)}}function WP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;mv.set(i),t.uniformMatrix3fv(this.addr,!1,mv),Pt(n,i)}}function jP(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;pv.set(i),t.uniformMatrix4fv(this.addr,!1,pv),Pt(n,i)}}function XP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function YP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function $P(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function KP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function qP(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ZP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function QP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function JP(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function eL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(dv.compareFunction=U1,s=dv):s=Z1,n.setTexture2D(e||s,r)}function tL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||J1,r)}function nL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||eS,r)}function iL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Q1,r)}function rL(t){switch(t){case 5126:return BP;case 35664:return zP;case 35665:return VP;case 35666:return HP;case 35674:return GP;case 35675:return WP;case 35676:return jP;case 5124:case 35670:return XP;case 35667:case 35671:return YP;case 35668:case 35672:return $P;case 35669:case 35673:return KP;case 5125:return qP;case 36294:return ZP;case 36295:return QP;case 36296:return JP;case 35678:case 36198:case 36298:case 36306:case 35682:return eL;case 35679:case 36299:case 36307:return tL;case 35680:case 36300:case 36308:case 36293:return nL;case 36289:case 36303:case 36311:case 36292:return iL}}function sL(t,e){t.uniform1fv(this.addr,e)}function oL(t,e){const n=po(e,this.size,2);t.uniform2fv(this.addr,n)}function aL(t,e){const n=po(e,this.size,3);t.uniform3fv(this.addr,n)}function lL(t,e){const n=po(e,this.size,4);t.uniform4fv(this.addr,n)}function cL(t,e){const n=po(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function uL(t,e){const n=po(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function dL(t,e){const n=po(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function fL(t,e){t.uniform1iv(this.addr,e)}function hL(t,e){t.uniform2iv(this.addr,e)}function pL(t,e){t.uniform3iv(this.addr,e)}function mL(t,e){t.uniform4iv(this.addr,e)}function gL(t,e){t.uniform1uiv(this.addr,e)}function vL(t,e){t.uniform2uiv(this.addr,e)}function _L(t,e){t.uniform3uiv(this.addr,e)}function xL(t,e){t.uniform4uiv(this.addr,e)}function yL(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Z1,s[o])}function SL(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||J1,s[o])}function ML(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||eS,s[o])}function EL(t,e,n){const i=this.cache,r=e.length,s=iu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Q1,s[o])}function TL(t){switch(t){case 5126:return sL;case 35664:return oL;case 35665:return aL;case 35666:return lL;case 35674:return cL;case 35675:return uL;case 35676:return dL;case 5124:case 35670:return fL;case 35667:case 35671:return hL;case 35668:case 35672:return pL;case 35669:case 35673:return mL;case 5125:return gL;case 36294:return vL;case 36295:return _L;case 36296:return xL;case 35678:case 36198:case 36298:case 36306:case 35682:return yL;case 35679:case 36299:case 36307:return SL;case 35680:case 36300:case 36308:case 36293:return ML;case 36289:case 36303:case 36311:case 36292:return EL}}class wL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=rL(n.type)}}class AL{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=TL(n.type)}}class CL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const xd=/(\w+)(\])?(\[|\.)?/g;function vv(t,e){t.seq.push(e),t.map[e.id]=e}function bL(t,e,n){const i=t.name,r=i.length;for(xd.lastIndex=0;;){const s=xd.exec(i),o=xd.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){vv(n,c===void 0?new wL(a,t,e):new AL(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new CL(a),vv(n,d)),n=d}}}class Xl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);bL(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function _v(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const RL=37297;let PL=0;function LL(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function DL(t){const e=Qe.getPrimaries(Qe.workingColorSpace),n=Qe.getPrimaries(t);let i;switch(e===n?i="":e===Pc&&n===Rc?i="LinearDisplayP3ToLinearSRGB":e===Rc&&n===Pc&&(i="LinearSRGBToLinearDisplayP3"),t){case vr:case tu:return[i,"LinearTransferOETF"];case Qn:case jp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function xv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+LL(t.getShaderSource(e),o)}else return r}function NL(t,e){const n=DL(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function IL(t,e){let n;switch(e){case ZA:n="Linear";break;case QA:n="Reinhard";break;case JA:n="OptimizedCineon";break;case eC:n="ACESFilmic";break;case nC:n="AgX";break;case iC:n="Neutral";break;case tC:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function UL(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fo).join(`
`)}function FL(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function OL(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Fo(t){return t!==""}function yv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kL=/^[ \t]*#include +<([\w\d./]+)>/gm;function dh(t){return t.replace(kL,zL)}const BL=new Map;function zL(t,e){let n=Ue[e];if(n===void 0){const i=BL.get(e);if(i!==void 0)n=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dh(n)}const VL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mv(t){return t.replace(VL,HL)}function HL(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ev(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function GL(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===S1?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===EA?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function WL(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case no:case io:e="ENVMAP_TYPE_CUBE";break;case eu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jL(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case io:e="ENVMAP_MODE_REFRACTION";break}return e}function XL(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case M1:e="ENVMAP_BLENDING_MULTIPLY";break;case KA:e="ENVMAP_BLENDING_MIX";break;case qA:e="ENVMAP_BLENDING_ADD";break}return e}function YL(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function $L(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=GL(n),c=WL(n),u=jL(n),d=XL(n),h=YL(n),p=UL(n),x=FL(s),v=r.createProgram();let m,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Fo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(Fo).join(`
`),f.length>0&&(f+=`
`)):(m=[Ev(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fo).join(`
`),f=[Ev(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==or?"#define TONE_MAPPING":"",n.toneMapping!==or?Ue.tonemapping_pars_fragment:"",n.toneMapping!==or?IL("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,NL("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fo).join(`
`)),o=dh(o),o=yv(o,n),o=Sv(o,n),a=dh(a),a=yv(a,n),a=Sv(a,n),o=Mv(o),a=Mv(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===k0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===k0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const g=_+m+o,y=_+f+a,C=_v(r,r.VERTEX_SHADER,g),A=_v(r,r.FRAGMENT_SHADER,y);r.attachShader(v,C),r.attachShader(v,A),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(L){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(v).trim(),V=r.getShaderInfoLog(C).trim(),$=r.getShaderInfoLog(A).trim();let K=!0,j=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,C,A);else{const W=xv(r,C,"vertex"),N=xv(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+H+`
`+W+`
`+N)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(V===""||$==="")&&(j=!1);j&&(L.diagnostics={runnable:K,programLog:H,vertexShader:{log:V,prefix:m},fragmentShader:{log:$,prefix:f}})}r.deleteShader(C),r.deleteShader(A),b=new Xl(r,v),T=OL(r,v)}let b;this.getUniforms=function(){return b===void 0&&w(this),b};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,RL)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=PL++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=A,this}let KL=0;class qL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ZL(e),n.set(e,i)),i}}class ZL{constructor(e){this.id=KL++,this.code=e,this.usedTimes=0}}function QL(t,e,n,i,r,s,o){const a=new z1,l=new qL,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,S,L,H,V){const $=H.fog,K=V.geometry,j=T.isMeshStandardMaterial?H.environment:null,W=(T.isMeshStandardMaterial?n:e).get(T.envMap||j),N=W&&W.mapping===eu?W.image.height:null,Y=x[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Z=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,oe=Z!==void 0?Z.length:0;let Se=0;K.morphAttributes.position!==void 0&&(Se=1),K.morphAttributes.normal!==void 0&&(Se=2),K.morphAttributes.color!==void 0&&(Se=3);let He,G,ne,ue;if(Y){const Ye=Jn[Y];He=Ye.vertexShader,G=Ye.fragmentShader}else He=T.vertexShader,G=T.fragmentShader,l.update(T),ne=l.getVertexShaderID(T),ue=l.getFragmentShaderID(T);const de=t.getRenderTarget(),De=V.isInstancedMesh===!0,Oe=V.isBatchedMesh===!0,ze=!!T.map,ft=!!T.matcap,P=!!W,yt=!!T.aoMap,Ze=!!T.lightMap,et=!!T.bumpMap,Me=!!T.normalMap,St=!!T.displacementMap,Pe=!!T.emissiveMap,Ne=!!T.metalnessMap,R=!!T.roughnessMap,M=T.anisotropy>0,z=T.clearcoat>0,J=T.dispersion>0,te=T.iridescence>0,Q=T.sheen>0,Ee=T.transmission>0,ce=M&&!!T.anisotropyMap,me=z&&!!T.clearcoatMap,Ie=z&&!!T.clearcoatNormalMap,ie=z&&!!T.clearcoatRoughnessMap,pe=te&&!!T.iridescenceMap,Ve=te&&!!T.iridescenceThicknessMap,Re=Q&&!!T.sheenColorMap,ge=Q&&!!T.sheenRoughnessMap,Le=!!T.specularMap,ke=!!T.specularColorMap,at=!!T.specularIntensityMap,I=Ee&&!!T.transmissionMap,re=Ee&&!!T.thicknessMap,X=!!T.gradientMap,q=!!T.alphaMap,ae=T.alphaTest>0,Ae=!!T.alphaHash,Ge=!!T.extensions;let Mt=or;T.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Mt=t.toneMapping);const It={shaderID:Y,shaderType:T.type,shaderName:T.name,vertexShader:He,fragmentShader:G,defines:T.defines,customVertexShaderID:ne,customFragmentShaderID:ue,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&V._colorsTexture!==null,instancing:De,instancingColor:De&&V.instanceColor!==null,instancingMorph:De&&V.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:de===null?t.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:vr,alphaToCoverage:!!T.alphaToCoverage,map:ze,matcap:ft,envMap:P,envMapMode:P&&W.mapping,envMapCubeUVHeight:N,aoMap:yt,lightMap:Ze,bumpMap:et,normalMap:Me,displacementMap:h&&St,emissiveMap:Pe,normalMapObjectSpace:Me&&T.normalMapType===aC,normalMapTangentSpace:Me&&T.normalMapType===I1,metalnessMap:Ne,roughnessMap:R,anisotropy:M,anisotropyMap:ce,clearcoat:z,clearcoatMap:me,clearcoatNormalMap:Ie,clearcoatRoughnessMap:ie,dispersion:J,iridescence:te,iridescenceMap:pe,iridescenceThicknessMap:Ve,sheen:Q,sheenColorMap:Re,sheenRoughnessMap:ge,specularMap:Le,specularColorMap:ke,specularIntensityMap:at,transmission:Ee,transmissionMap:I,thicknessMap:re,gradientMap:X,opaque:T.transparent===!1&&T.blending===Gs&&T.alphaToCoverage===!1,alphaMap:q,alphaTest:ae,alphaHash:Ae,combine:T.combine,mapUv:ze&&v(T.map.channel),aoMapUv:yt&&v(T.aoMap.channel),lightMapUv:Ze&&v(T.lightMap.channel),bumpMapUv:et&&v(T.bumpMap.channel),normalMapUv:Me&&v(T.normalMap.channel),displacementMapUv:St&&v(T.displacementMap.channel),emissiveMapUv:Pe&&v(T.emissiveMap.channel),metalnessMapUv:Ne&&v(T.metalnessMap.channel),roughnessMapUv:R&&v(T.roughnessMap.channel),anisotropyMapUv:ce&&v(T.anisotropyMap.channel),clearcoatMapUv:me&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:ge&&v(T.sheenRoughnessMap.channel),specularMapUv:Le&&v(T.specularMap.channel),specularColorMapUv:ke&&v(T.specularColorMap.channel),specularIntensityMapUv:at&&v(T.specularIntensityMap.channel),transmissionMapUv:I&&v(T.transmissionMap.channel),thicknessMapUv:re&&v(T.thicknessMap.channel),alphaMapUv:q&&v(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Me||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!K.attributes.uv&&(ze||q),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:V.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Mt,decodeVideoTexture:ze&&T.map.isVideoTexture===!0&&Qe.getTransfer(T.map.colorSpace)===it,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===xi,flipSided:T.side===cn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&T.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function f(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)S.push(L),S.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(_(S,T),g(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function _(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function g(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),T.push(a.mask)}function y(T){const S=x[T.type];let L;if(S){const H=Jn[S];L=FC.clone(H.uniforms)}else L=T.uniforms;return L}function C(T,S){let L;for(let H=0,V=u.length;H<V;H++){const $=u[H];if($.cacheKey===S){L=$,++L.usedTimes;break}}return L===void 0&&(L=new $L(t,S,T,s),u.push(L)),L}function A(T){if(--T.usedTimes===0){const S=u.indexOf(T);u[S]=u[u.length-1],u.pop(),T.destroy()}}function w(T){l.remove(T)}function b(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:C,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:b}}function JL(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function e4(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Tv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function wv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,x,v,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:v,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function a(d,h,p,x,v,m){const f=o(d,h,p,x,v,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,x,v,m){const f=o(d,h,p,x,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(d,h){n.length>1&&n.sort(d||e4),i.length>1&&i.sort(h||Tv),r.length>1&&r.sort(h||Tv)}function u(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function t4(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new wv,t.set(i,[o])):r>=s.length?(o=new wv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function n4(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Xe};break;case"SpotLight":n={position:new O,direction:new O,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function i4(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let r4=0;function s4(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function o4(t){const e=new n4,n=i4(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new xt,o=new xt;function a(c){let u=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,x=0,v=0,m=0,f=0,_=0,g=0,y=0,C=0,A=0,w=0;c.sort(s4);for(let T=0,S=c.length;T<S;T++){const L=c[T],H=L.color,V=L.intensity,$=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=H.r*V,d+=H.g*V,h+=H.b*V;else if(L.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(L.sh.coefficients[j],V);w++}else if(L.isDirectionalLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const W=L.shadow,N=n.get(L);N.shadowIntensity=W.intensity,N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,i.directionalShadow[p]=N,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=L.shadow.matrix,_++}i.directional[p]=j,p++}else if(L.isSpotLight){const j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(H).multiplyScalar(V),j.distance=$,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,i.spot[v]=j;const W=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,W.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[v]=W.matrix,L.castShadow){const N=n.get(L);N.shadowIntensity=W.intensity,N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,i.spotShadow[v]=N,i.spotShadowMap[v]=K,y++}v++}else if(L.isRectAreaLight){const j=e.get(L);j.color.copy(H).multiplyScalar(V),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=j,m++}else if(L.isPointLight){const j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){const W=L.shadow,N=n.get(L);N.shadowIntensity=W.intensity,N.shadowBias=W.bias,N.shadowNormalBias=W.normalBias,N.shadowRadius=W.radius,N.shadowMapSize=W.mapSize,N.shadowCameraNear=W.camera.near,N.shadowCameraFar=W.camera.far,i.pointShadow[x]=N,i.pointShadowMap[x]=K,i.pointShadowMatrix[x]=L.shadow.matrix,g++}i.point[x]=j,x++}else if(L.isHemisphereLight){const j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(V),j.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[f]=j,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const b=i.hash;(b.directionalLength!==p||b.pointLength!==x||b.spotLength!==v||b.rectAreaLength!==m||b.hemiLength!==f||b.numDirectionalShadows!==_||b.numPointShadows!==g||b.numSpotShadows!==y||b.numSpotMaps!==C||b.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=x,i.hemi.length=f,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=y+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,b.directionalLength=p,b.pointLength=x,b.spotLength=v,b.rectAreaLength=m,b.hemiLength=f,b.numDirectionalShadows=_,b.numPointShadows=g,b.numSpotShadows=y,b.numSpotMaps=C,b.numLightProbes=w,i.version=r4++)}function l(c,u){let d=0,h=0,p=0,x=0,v=0;const m=u.matrixWorldInverse;for(let f=0,_=c.length;f<_;f++){const g=c[f];if(g.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(g.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(g.isRectAreaLight){const y=i.rectArea[x];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(g.width*.5,0,0),y.halfHeight.set(0,g.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(g.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(g.matrixWorld),y.position.applyMatrix4(m),h++}else if(g.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(g.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Av(t){const e=new o4(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function a4(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Av(t),e.set(r,[a])):s>=o.length?(a=new Av(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class l4 extends Da{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c4 extends Da{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const u4=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d4=`uniform sampler2D shadow_pass;
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
}`;function f4(t,e,n){let i=new Yp;const r=new je,s=new je,o=new Ct,a=new l4({depthPacking:oC}),l=new c4,c={},u=n.maxTextureSize,d={[dr]:cn,[cn]:dr,[xi]:xi},h=new fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:u4,fragmentShader:d4}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new _r;x.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ni(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=S1;let f=this.type;this.render=function(A,w,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),H=t.state;H.setBlending(sr),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const V=f!==gi&&this.type===gi,$=f===gi&&this.type!==gi;for(let K=0,j=A.length;K<j;K++){const W=A[K],N=W.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const Y=N.getFrameExtents();if(r.multiply(Y),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,N.mapSize.y=s.y)),N.map===null||V===!0||$===!0){const oe=this.type!==gi?{minFilter:Ln,magFilter:Ln}:{};N.map!==null&&N.map.dispose(),N.map=new qr(r.x,r.y,oe),N.map.texture.name=W.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const Z=N.getViewportCount();for(let oe=0;oe<Z;oe++){const Se=N.getViewport(oe);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),H.viewport(o),N.updateMatrices(W,oe),i=N.getFrustum(),y(w,b,N.camera,W,this.type)}N.isPointLightShadow!==!0&&this.type===gi&&_(N,b),N.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(T,S,L)};function _(A,w){const b=e.update(v);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new qr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,b,h,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,b,p,v,null)}function g(A,w,b,T){let S=null;const L=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=b.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=S.uuid,V=w.uuid;let $=c[H];$===void 0&&($={},c[H]=$);let K=$[V];K===void 0&&(K=S.clone(),$[V]=K,w.addEventListener("dispose",C)),S=K}if(S.visible=w.visible,S.wireframe=w.wireframe,T===gi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:d[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,b.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=t.properties.get(S);H.light=b}return S}function y(A,w,b,T,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===gi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const V=e.update(A),$=A.material;if(Array.isArray($)){const K=V.groups;for(let j=0,W=K.length;j<W;j++){const N=K[j],Y=$[N.materialIndex];if(Y&&Y.visible){const Z=g(A,Y,T,S);A.onBeforeShadow(t,A,w,b,V,Z,N),t.renderBufferDirect(b,null,V,Z,A,N),A.onAfterShadow(t,A,w,b,V,Z,N)}}}else if($.visible){const K=g(A,$,T,S);A.onBeforeShadow(t,A,w,b,V,K,null),t.renderBufferDirect(b,null,V,K,A,null),A.onAfterShadow(t,A,w,b,V,K,null)}}const H=A.children;for(let V=0,$=H.length;V<$;V++)y(H[V],w,b,T,S)}function C(A){A.target.removeEventListener("dispose",C);for(const b in c){const T=c[b],S=A.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}function h4(t){function e(){let I=!1;const re=new Ct;let X=null;const q=new Ct(0,0,0,0);return{setMask:function(ae){X!==ae&&!I&&(t.colorMask(ae,ae,ae,ae),X=ae)},setLocked:function(ae){I=ae},setClear:function(ae,Ae,Ge,Mt,It){It===!0&&(ae*=Mt,Ae*=Mt,Ge*=Mt),re.set(ae,Ae,Ge,Mt),q.equals(re)===!1&&(t.clearColor(ae,Ae,Ge,Mt),q.copy(re))},reset:function(){I=!1,X=null,q.set(-1,0,0,0)}}}function n(){let I=!1,re=null,X=null,q=null;return{setTest:function(ae){ae?ue(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(ae){re!==ae&&!I&&(t.depthMask(ae),re=ae)},setFunc:function(ae){if(X!==ae){switch(ae){case HA:t.depthFunc(t.NEVER);break;case GA:t.depthFunc(t.ALWAYS);break;case WA:t.depthFunc(t.LESS);break;case Cc:t.depthFunc(t.LEQUAL);break;case jA:t.depthFunc(t.EQUAL);break;case XA:t.depthFunc(t.GEQUAL);break;case YA:t.depthFunc(t.GREATER);break;case $A:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}X=ae}},setLocked:function(ae){I=ae},setClear:function(ae){q!==ae&&(t.clearDepth(ae),q=ae)},reset:function(){I=!1,re=null,X=null,q=null}}}function i(){let I=!1,re=null,X=null,q=null,ae=null,Ae=null,Ge=null,Mt=null,It=null;return{setTest:function(Ye){I||(Ye?ue(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(Ye){re!==Ye&&!I&&(t.stencilMask(Ye),re=Ye)},setFunc:function(Ye,ui,Kn){(X!==Ye||q!==ui||ae!==Kn)&&(t.stencilFunc(Ye,ui,Kn),X=Ye,q=ui,ae=Kn)},setOp:function(Ye,ui,Kn){(Ae!==Ye||Ge!==ui||Mt!==Kn)&&(t.stencilOp(Ye,ui,Kn),Ae=Ye,Ge=ui,Mt=Kn)},setLocked:function(Ye){I=Ye},setClear:function(Ye){It!==Ye&&(t.clearStencil(Ye),It=Ye)},reset:function(){I=!1,re=null,X=null,q=null,ae=null,Ae=null,Ge=null,Mt=null,It=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],p=null,x=!1,v=null,m=null,f=null,_=null,g=null,y=null,C=null,A=new Xe(0,0,0),w=0,b=!1,T=null,S=null,L=null,H=null,V=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,j=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(W)[1]),K=j>=1):W.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),K=j>=2);let N=null,Y={};const Z=t.getParameter(t.SCISSOR_BOX),oe=t.getParameter(t.VIEWPORT),Se=new Ct().fromArray(Z),He=new Ct().fromArray(oe);function G(I,re,X,q){const ae=new Uint8Array(4),Ae=t.createTexture();t.bindTexture(I,Ae),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<X;Ge++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(re,0,t.RGBA,1,1,q,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(re+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return Ae}const ne={};ne[t.TEXTURE_2D]=G(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=G(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=G(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=G(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ue(t.DEPTH_TEST),s.setFunc(Cc),et(!1),Me(D0),ue(t.CULL_FACE),yt(sr);function ue(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function de(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function De(I,re){return u[I]!==re?(t.bindFramebuffer(I,re),u[I]=re,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=re),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=re),!0):!1}function Oe(I,re){let X=h,q=!1;if(I){X=d.get(re),X===void 0&&(X=[],d.set(re,X));const ae=I.textures;if(X.length!==ae.length||X[0]!==t.COLOR_ATTACHMENT0){for(let Ae=0,Ge=ae.length;Ae<Ge;Ae++)X[Ae]=t.COLOR_ATTACHMENT0+Ae;X.length=ae.length,q=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,q=!0);q&&t.drawBuffers(X)}function ze(I){return p!==I?(t.useProgram(I),p=I,!0):!1}const ft={[Nr]:t.FUNC_ADD,[wA]:t.FUNC_SUBTRACT,[AA]:t.FUNC_REVERSE_SUBTRACT};ft[CA]=t.MIN,ft[bA]=t.MAX;const P={[RA]:t.ZERO,[PA]:t.ONE,[LA]:t.SRC_COLOR,[Df]:t.SRC_ALPHA,[OA]:t.SRC_ALPHA_SATURATE,[UA]:t.DST_COLOR,[NA]:t.DST_ALPHA,[DA]:t.ONE_MINUS_SRC_COLOR,[Nf]:t.ONE_MINUS_SRC_ALPHA,[FA]:t.ONE_MINUS_DST_COLOR,[IA]:t.ONE_MINUS_DST_ALPHA,[kA]:t.CONSTANT_COLOR,[BA]:t.ONE_MINUS_CONSTANT_COLOR,[zA]:t.CONSTANT_ALPHA,[VA]:t.ONE_MINUS_CONSTANT_ALPHA};function yt(I,re,X,q,ae,Ae,Ge,Mt,It,Ye){if(I===sr){x===!0&&(de(t.BLEND),x=!1);return}if(x===!1&&(ue(t.BLEND),x=!0),I!==TA){if(I!==v||Ye!==b){if((m!==Nr||g!==Nr)&&(t.blendEquation(t.FUNC_ADD),m=Nr,g=Nr),Ye)switch(I){case Gs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case N0:t.blendFunc(t.ONE,t.ONE);break;case I0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case U0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Gs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case N0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case I0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case U0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}f=null,_=null,y=null,C=null,A.set(0,0,0),w=0,v=I,b=Ye}return}ae=ae||re,Ae=Ae||X,Ge=Ge||q,(re!==m||ae!==g)&&(t.blendEquationSeparate(ft[re],ft[ae]),m=re,g=ae),(X!==f||q!==_||Ae!==y||Ge!==C)&&(t.blendFuncSeparate(P[X],P[q],P[Ae],P[Ge]),f=X,_=q,y=Ae,C=Ge),(Mt.equals(A)===!1||It!==w)&&(t.blendColor(Mt.r,Mt.g,Mt.b,It),A.copy(Mt),w=It),v=I,b=!1}function Ze(I,re){I.side===xi?de(t.CULL_FACE):ue(t.CULL_FACE);let X=I.side===cn;re&&(X=!X),et(X),I.blending===Gs&&I.transparent===!1?yt(sr):yt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),s.setFunc(I.depthFunc),s.setTest(I.depthTest),s.setMask(I.depthWrite),r.setMask(I.colorWrite);const q=I.stencilWrite;o.setTest(q),q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Pe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ue(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function et(I){T!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),T=I)}function Me(I){I!==SA?(ue(t.CULL_FACE),I!==S&&(I===D0?t.cullFace(t.BACK):I===MA?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),S=I}function St(I){I!==L&&(K&&t.lineWidth(I),L=I)}function Pe(I,re,X){I?(ue(t.POLYGON_OFFSET_FILL),(H!==re||V!==X)&&(t.polygonOffset(re,X),H=re,V=X)):de(t.POLYGON_OFFSET_FILL)}function Ne(I){I?ue(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function R(I){I===void 0&&(I=t.TEXTURE0+$-1),N!==I&&(t.activeTexture(I),N=I)}function M(I,re,X){X===void 0&&(N===null?X=t.TEXTURE0+$-1:X=N);let q=Y[X];q===void 0&&(q={type:void 0,texture:void 0},Y[X]=q),(q.type!==I||q.texture!==re)&&(N!==X&&(t.activeTexture(X),N=X),t.bindTexture(I,re||ne[I]),q.type=I,q.texture=re)}function z(){const I=Y[N];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(I){Se.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Se.copy(I))}function ge(I){He.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),He.copy(I))}function Le(I,re){let X=l.get(re);X===void 0&&(X=new WeakMap,l.set(re,X));let q=X.get(I);q===void 0&&(q=t.getUniformBlockIndex(re,I.name),X.set(I,q))}function ke(I,re){const q=l.get(re).get(I);a.get(re)!==q&&(t.uniformBlockBinding(re,q,I.__bindingPointIndex),a.set(re,q))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},N=null,Y={},u={},d=new WeakMap,h=[],p=null,x=!1,v=null,m=null,f=null,_=null,g=null,y=null,C=null,A=new Xe(0,0,0),w=0,b=!1,T=null,S=null,L=null,H=null,V=null,Se.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ue,disable:de,bindFramebuffer:De,drawBuffers:Oe,useProgram:ze,setBlending:yt,setMaterial:Ze,setFlipSided:et,setCullFace:Me,setLineWidth:St,setPolygonOffset:Pe,setScissorTest:Ne,activeTexture:R,bindTexture:M,unbindTexture:z,compressedTexImage2D:J,compressedTexImage3D:te,texImage2D:pe,texImage3D:Ve,updateUBOMapping:Le,uniformBlockBinding:ke,texStorage2D:Ie,texStorage3D:ie,texSubImage2D:Q,texSubImage3D:Ee,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:Re,viewport:ge,reset:at}}function Cv(t,e,n,i){const r=p4(i);switch(n){case C1:return t*e;case R1:return t*e;case P1:return t*e*2;case L1:return t*e/r.components*r.byteLength;case Hp:return t*e/r.components*r.byteLength;case D1:return t*e*2/r.components*r.byteLength;case Gp:return t*e*2/r.components*r.byteLength;case b1:return t*e*3/r.components*r.byteLength;case jn:return t*e*4/r.components*r.byteLength;case Wp:return t*e*4/r.components*r.byteLength;case Vl:case Hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Gl:case Wl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bf:case Vf:return Math.max(t,16)*Math.max(e,8)/4;case kf:case zf:return Math.max(t,8)*Math.max(e,8)/2;case Hf:case Gf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Xf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Yf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case $f:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case qf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Qf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Jf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case eh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case th:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case nh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ih:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case rh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case jl:case sh:case oh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case N1:case ah:return Math.ceil(t/4)*Math.ceil(e/4)*8;case lh:case ch:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function p4(t){switch(t){case Di:case T1:return{byteLength:1,components:1};case _a:case w1:case ba:return{byteLength:2,components:1};case zp:case Vp:return{byteLength:2,components:4};case Kr:case Bp:case Mi:return{byteLength:4,components:1};case A1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function m4(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,M){return p?new OffscreenCanvas(R,M):Dc("canvas")}function v(R,M,z){let J=1;const te=Ne(R);if((te.width>z||te.height>z)&&(J=z/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Q=Math.floor(J*te.width),Ee=Math.floor(J*te.height);d===void 0&&(d=x(Q,Ee));const ce=M?x(Q,Ee):d;return ce.width=Q,ce.height=Ee,ce.getContext("2d").drawImage(R,0,0,Q,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Q+"x"+Ee+")."),ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Ln&&R.minFilter!==Wn}function f(R){t.generateMipmap(R)}function _(R,M,z,J,te=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Q=M;if(M===t.RED&&(z===t.FLOAT&&(Q=t.R32F),z===t.HALF_FLOAT&&(Q=t.R16F),z===t.UNSIGNED_BYTE&&(Q=t.R8)),M===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.R8UI),z===t.UNSIGNED_SHORT&&(Q=t.R16UI),z===t.UNSIGNED_INT&&(Q=t.R32UI),z===t.BYTE&&(Q=t.R8I),z===t.SHORT&&(Q=t.R16I),z===t.INT&&(Q=t.R32I)),M===t.RG&&(z===t.FLOAT&&(Q=t.RG32F),z===t.HALF_FLOAT&&(Q=t.RG16F),z===t.UNSIGNED_BYTE&&(Q=t.RG8)),M===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(Q=t.RG8UI),z===t.UNSIGNED_SHORT&&(Q=t.RG16UI),z===t.UNSIGNED_INT&&(Q=t.RG32UI),z===t.BYTE&&(Q=t.RG8I),z===t.SHORT&&(Q=t.RG16I),z===t.INT&&(Q=t.RG32I)),M===t.RGB&&z===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),M===t.RGBA){const Ee=te?bc:Qe.getTransfer(J);z===t.FLOAT&&(Q=t.RGBA32F),z===t.HALF_FLOAT&&(Q=t.RGBA16F),z===t.UNSIGNED_BYTE&&(Q=Ee===it?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function g(R,M){let z;return R?M===null||M===Kr||M===ro?z=t.DEPTH24_STENCIL8:M===Mi?z=t.DEPTH32F_STENCIL8:M===_a&&(z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Kr||M===ro?z=t.DEPTH_COMPONENT24:M===Mi?z=t.DEPTH_COMPONENT32F:M===_a&&(z=t.DEPTH_COMPONENT16),z}function y(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Ln&&R.minFilter!==Wn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),w(M),M.isVideoTexture&&u.delete(M)}function A(R){const M=R.target;M.removeEventListener("dispose",A),T(M)}function w(R){const M=i.get(R);if(M.__webglInit===void 0)return;const z=R.source,J=h.get(z);if(J){const te=J[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(R),Object.keys(J).length===0&&h.delete(z)}i.remove(R)}function b(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const z=R.source,J=h.get(z);delete J[M.__cacheKey],o.memory.textures--}function T(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let te=0;te<M.__webglFramebuffer[J].length;te++)t.deleteFramebuffer(M.__webglFramebuffer[J][te]);else t.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)t.deleteFramebuffer(M.__webglFramebuffer[J]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=R.textures;for(let J=0,te=z.length;J<te;J++){const Q=i.get(z[J]);Q.__webglTexture&&(t.deleteTexture(Q.__webglTexture),o.memory.textures--),i.remove(z[J])}i.remove(R)}let S=0;function L(){S=0}function H(){const R=S;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),S+=1,R}function V(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function $(R,M){const z=i.get(R);if(R.isVideoTexture&&St(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(z,R,M);return}}n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+M)}function K(R,M){const z=i.get(R);if(R.version>0&&z.__version!==R.version){He(z,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+M)}function j(R,M){const z=i.get(R);if(R.version>0&&z.__version!==R.version){He(z,R,M);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+M)}function W(R,M){const z=i.get(R);if(R.version>0&&z.__version!==R.version){G(z,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+M)}const N={[Ff]:t.REPEAT,[Br]:t.CLAMP_TO_EDGE,[Of]:t.MIRRORED_REPEAT},Y={[Ln]:t.NEAREST,[rC]:t.NEAREST_MIPMAP_NEAREST,[il]:t.NEAREST_MIPMAP_LINEAR,[Wn]:t.LINEAR,[Yu]:t.LINEAR_MIPMAP_NEAREST,[zr]:t.LINEAR_MIPMAP_LINEAR},Z={[lC]:t.NEVER,[pC]:t.ALWAYS,[cC]:t.LESS,[U1]:t.LEQUAL,[uC]:t.EQUAL,[hC]:t.GEQUAL,[dC]:t.GREATER,[fC]:t.NOTEQUAL};function oe(R,M){if(M.type===Mi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Wn||M.magFilter===Yu||M.magFilter===il||M.magFilter===zr||M.minFilter===Wn||M.minFilter===Yu||M.minFilter===il||M.minFilter===zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,N[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,N[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,N[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Y[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Y[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Z[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ln||M.minFilter!==il&&M.minFilter!==zr||M.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Se(R,M){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const J=M.source;let te=h.get(J);te===void 0&&(te={},h.set(J,te));const Q=V(M);if(Q!==R.__cacheKey){te[Q]===void 0&&(te[Q]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,z=!0),te[Q].usedTimes++;const Ee=te[R.__cacheKey];Ee!==void 0&&(te[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&b(M)),R.__cacheKey=Q,R.__webglTexture=te[Q].texture}return z}function He(R,M,z){let J=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=t.TEXTURE_3D);const te=Se(R,M),Q=M.source;n.bindTexture(J,R.__webglTexture,t.TEXTURE0+z);const Ee=i.get(Q);if(Q.version!==Ee.__version||te===!0){n.activeTexture(t.TEXTURE0+z);const ce=Qe.getPrimaries(Qe.workingColorSpace),me=M.colorSpace===Yi?null:Qe.getPrimaries(M.colorSpace),Ie=M.colorSpace===Yi||ce===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ie=v(M.image,!1,r.maxTextureSize);ie=Pe(M,ie);const pe=s.convert(M.format,M.colorSpace),Ve=s.convert(M.type);let Re=_(M.internalFormat,pe,Ve,M.colorSpace,M.isVideoTexture);oe(J,M);let ge;const Le=M.mipmaps,ke=M.isVideoTexture!==!0,at=Ee.__version===void 0||te===!0,I=Q.dataReady,re=y(M,ie);if(M.isDepthTexture)Re=g(M.format===so,M.type),at&&(ke?n.texStorage2D(t.TEXTURE_2D,1,Re,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Re,ie.width,ie.height,0,pe,Ve,null));else if(M.isDataTexture)if(Le.length>0){ke&&at&&n.texStorage2D(t.TEXTURE_2D,re,Re,Le[0].width,Le[0].height);for(let X=0,q=Le.length;X<q;X++)ge=Le[X],ke?I&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ge.width,ge.height,pe,Ve,ge.data):n.texImage2D(t.TEXTURE_2D,X,Re,ge.width,ge.height,0,pe,Ve,ge.data);M.generateMipmaps=!1}else ke?(at&&n.texStorage2D(t.TEXTURE_2D,re,Re,ie.width,ie.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,pe,Ve,ie.data)):n.texImage2D(t.TEXTURE_2D,0,Re,ie.width,ie.height,0,pe,Ve,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ke&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,Re,Le[0].width,Le[0].height,ie.depth);for(let X=0,q=Le.length;X<q;X++)if(ge=Le[X],M.format!==jn)if(pe!==null)if(ke){if(I)if(M.layerUpdates.size>0){const ae=Cv(ge.width,ge.height,M.format,M.type);for(const Ae of M.layerUpdates){const Ge=ge.data.subarray(Ae*ae/ge.data.BYTES_PER_ELEMENT,(Ae+1)*ae/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,Ae,ge.width,ge.height,1,pe,Ge,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,ie.depth,pe,ge.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,Re,ge.width,ge.height,ie.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,ge.width,ge.height,ie.depth,pe,Ve,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,Re,ge.width,ge.height,ie.depth,0,pe,Ve,ge.data)}else{ke&&at&&n.texStorage2D(t.TEXTURE_2D,re,Re,Le[0].width,Le[0].height);for(let X=0,q=Le.length;X<q;X++)ge=Le[X],M.format!==jn?pe!==null?ke?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,ge.width,ge.height,pe,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,X,Re,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?I&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ge.width,ge.height,pe,Ve,ge.data):n.texImage2D(t.TEXTURE_2D,X,Re,ge.width,ge.height,0,pe,Ve,ge.data)}else if(M.isDataArrayTexture)if(ke){if(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,re,Re,ie.width,ie.height,ie.depth),I)if(M.layerUpdates.size>0){const X=Cv(ie.width,ie.height,M.format,M.type);for(const q of M.layerUpdates){const ae=ie.data.subarray(q*X/ie.data.BYTES_PER_ELEMENT,(q+1)*X/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,q,ie.width,ie.height,1,pe,Ve,ae)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,pe,Ve,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,ie.width,ie.height,ie.depth,0,pe,Ve,ie.data);else if(M.isData3DTexture)ke?(at&&n.texStorage3D(t.TEXTURE_3D,re,Re,ie.width,ie.height,ie.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,pe,Ve,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Re,ie.width,ie.height,ie.depth,0,pe,Ve,ie.data);else if(M.isFramebufferTexture){if(at)if(ke)n.texStorage2D(t.TEXTURE_2D,re,Re,ie.width,ie.height);else{let X=ie.width,q=ie.height;for(let ae=0;ae<re;ae++)n.texImage2D(t.TEXTURE_2D,ae,Re,X,q,0,pe,Ve,null),X>>=1,q>>=1}}else if(Le.length>0){if(ke&&at){const X=Ne(Le[0]);n.texStorage2D(t.TEXTURE_2D,re,Re,X.width,X.height)}for(let X=0,q=Le.length;X<q;X++)ge=Le[X],ke?I&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,pe,Ve,ge):n.texImage2D(t.TEXTURE_2D,X,Re,pe,Ve,ge);M.generateMipmaps=!1}else if(ke){if(at){const X=Ne(ie);n.texStorage2D(t.TEXTURE_2D,re,Re,X.width,X.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,pe,Ve,ie)}else n.texImage2D(t.TEXTURE_2D,0,Re,pe,Ve,ie);m(M)&&f(J),Ee.__version=Q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function G(R,M,z){if(M.image.length!==6)return;const J=Se(R,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const Q=i.get(te);if(te.version!==Q.__version||J===!0){n.activeTexture(t.TEXTURE0+z);const Ee=Qe.getPrimaries(Qe.workingColorSpace),ce=M.colorSpace===Yi?null:Qe.getPrimaries(M.colorSpace),me=M.colorSpace===Yi||Ee===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const Ie=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,pe=[];for(let q=0;q<6;q++)!Ie&&!ie?pe[q]=v(M.image[q],!0,r.maxCubemapSize):pe[q]=ie?M.image[q].image:M.image[q],pe[q]=Pe(M,pe[q]);const Ve=pe[0],Re=s.convert(M.format,M.colorSpace),ge=s.convert(M.type),Le=_(M.internalFormat,Re,ge,M.colorSpace),ke=M.isVideoTexture!==!0,at=Q.__version===void 0||J===!0,I=te.dataReady;let re=y(M,Ve);oe(t.TEXTURE_CUBE_MAP,M);let X;if(Ie){ke&&at&&n.texStorage2D(t.TEXTURE_CUBE_MAP,re,Le,Ve.width,Ve.height);for(let q=0;q<6;q++){X=pe[q].mipmaps;for(let ae=0;ae<X.length;ae++){const Ae=X[ae];M.format!==jn?Re!==null?ke?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,0,0,Ae.width,Ae.height,Re,Ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,Le,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,0,0,Ae.width,Ae.height,Re,ge,Ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae,Le,Ae.width,Ae.height,0,Re,ge,Ae.data)}}}else{if(X=M.mipmaps,ke&&at){X.length>0&&re++;const q=Ne(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,re,Le,q.width,q.height)}for(let q=0;q<6;q++)if(ie){ke?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,pe[q].width,pe[q].height,Re,ge,pe[q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Le,pe[q].width,pe[q].height,0,Re,ge,pe[q].data);for(let ae=0;ae<X.length;ae++){const Ge=X[ae].image[q].image;ke?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,0,0,Ge.width,Ge.height,Re,ge,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,Le,Ge.width,Ge.height,0,Re,ge,Ge.data)}}else{ke?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Re,ge,pe[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,Le,Re,ge,pe[q]);for(let ae=0;ae<X.length;ae++){const Ae=X[ae];ke?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,0,0,Re,ge,Ae.image[q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+q,ae+1,Le,Re,ge,Ae.image[q])}}}m(M)&&f(t.TEXTURE_CUBE_MAP),Q.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ne(R,M,z,J,te,Q){const Ee=s.convert(z.format,z.colorSpace),ce=s.convert(z.type),me=_(z.internalFormat,Ee,ce,z.colorSpace);if(!i.get(M).__hasExternalTextures){const ie=Math.max(1,M.width>>Q),pe=Math.max(1,M.height>>Q);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,Q,me,ie,pe,M.depth,0,Ee,ce,null):n.texImage2D(te,Q,me,ie,pe,0,Ee,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),Me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,te,i.get(z).__webglTexture,0,et(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,te,i.get(z).__webglTexture,Q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(R,M,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const J=M.depthTexture,te=J&&J.isDepthTexture?J.type:null,Q=g(M.stencilBuffer,te),Ee=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=et(M);Me(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,Q,M.width,M.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,Q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Q,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,R)}else{const J=M.textures;for(let te=0;te<J.length;te++){const Q=J[te],Ee=s.convert(Q.format,Q.colorSpace),ce=s.convert(Q.type),me=_(Q.internalFormat,Ee,ce,Q.colorSpace),Ie=et(M);z&&Me(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,me,M.width,M.height):Me(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ie,me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const J=i.get(M.depthTexture).__webglTexture,te=et(M);if(M.depthTexture.format===Ws)Me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(M.depthTexture.format===so)Me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function De(R){const M=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");de(M.__webglFramebuffer,R)}else if(z){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]=t.createRenderbuffer(),ue(M.__webglDepthbuffer[J],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),ue(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(R,M,z){const J=i.get(R);M!==void 0&&ne(J.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&De(R)}function ze(R){const M=R.texture,z=i.get(R),J=i.get(M);R.addEventListener("dispose",A);const te=R.textures,Q=R.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=M.version,o.memory.textures++),Q){z.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[ce]=[];for(let me=0;me<M.mipmaps.length;me++)z.__webglFramebuffer[ce][me]=t.createFramebuffer()}else z.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)z.__webglFramebuffer[ce]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ce=0,me=te.length;ce<me;ce++){const Ie=i.get(te[ce]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&Me(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ce=0;ce<te.length;ce++){const me=te[ce];z.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[ce]);const Ie=s.convert(me.format,me.colorSpace),ie=s.convert(me.type),pe=_(me.internalFormat,Ie,ie,me.colorSpace,R.isXRRenderTarget===!0),Ve=et(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,pe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,z.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),ue(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Q){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),oe(t.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)ne(z.__webglFramebuffer[ce][me],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else ne(z.__webglFramebuffer[ce],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(M)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ce=0,me=te.length;ce<me;ce++){const Ie=te[ce],ie=i.get(Ie);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),oe(t.TEXTURE_2D,Ie),ne(z.__webglFramebuffer,R,Ie,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),m(Ie)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,J.__webglTexture),oe(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)ne(z.__webglFramebuffer[me],R,M,t.COLOR_ATTACHMENT0,ce,me);else ne(z.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ce,0);m(M)&&f(ce),n.unbindTexture()}R.depthBuffer&&De(R)}function ft(R){const M=R.textures;for(let z=0,J=M.length;z<J;z++){const te=M[z];if(m(te)){const Q=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ee=i.get(te).__webglTexture;n.bindTexture(Q,Ee),f(Q),n.unbindTexture()}}}const P=[],yt=[];function Ze(R){if(R.samples>0){if(Me(R)===!1){const M=R.textures,z=R.width,J=R.height;let te=t.COLOR_BUFFER_BIT;const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(R),ce=M.length>1;if(ce)for(let me=0;me<M.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let me=0;me<M.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const Ie=i.get(M[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ie,0)}t.blitFramebuffer(0,0,z,J,0,0,z,J,te,t.NEAREST),l===!0&&(P.length=0,yt.length=0,P.push(t.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(P.push(Q),yt.push(Q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,yt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,P))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<M.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const Ie=i.get(M[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function et(R){return Math.min(r.maxSamples,R.samples)}function Me(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function St(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Pe(R,M){const z=R.colorSpace,J=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==vr&&z!==Yi&&(Qe.getTransfer(z)===it?(J!==jn||te!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=L,this.setTexture2D=$,this.setTexture2DArray=K,this.setTexture3D=j,this.setTextureCube=W,this.rebindTextures=Oe,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Me}function g4(t,e){function n(i,r=Yi){let s;const o=Qe.getTransfer(r);if(i===Di)return t.UNSIGNED_BYTE;if(i===zp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Vp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===A1)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===T1)return t.BYTE;if(i===w1)return t.SHORT;if(i===_a)return t.UNSIGNED_SHORT;if(i===Bp)return t.INT;if(i===Kr)return t.UNSIGNED_INT;if(i===Mi)return t.FLOAT;if(i===ba)return t.HALF_FLOAT;if(i===C1)return t.ALPHA;if(i===b1)return t.RGB;if(i===jn)return t.RGBA;if(i===R1)return t.LUMINANCE;if(i===P1)return t.LUMINANCE_ALPHA;if(i===Ws)return t.DEPTH_COMPONENT;if(i===so)return t.DEPTH_STENCIL;if(i===L1)return t.RED;if(i===Hp)return t.RED_INTEGER;if(i===D1)return t.RG;if(i===Gp)return t.RG_INTEGER;if(i===Wp)return t.RGBA_INTEGER;if(i===Vl||i===Hl||i===Gl||i===Wl)if(o===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Hl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kf||i===Bf||i===zf||i===Vf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===kf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===zf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hf||i===Gf||i===Wf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Hf||i===Gf)return o===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Wf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===jf||i===Xf||i===Yf||i===$f||i===Kf||i===qf||i===Zf||i===Qf||i===Jf||i===eh||i===th||i===nh||i===ih||i===rh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===jf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$f)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jf)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===th)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ih)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rh)return o===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jl||i===sh||i===oh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===jl)return o===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===N1||i===ah||i===lh||i===ch)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===jl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ah)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===lh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ch)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ro?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class v4 extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wl extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _4={type:"move"};class yd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_4)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new wl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const x4=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,y4=`
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

}`;class S4{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new fr({vertexShader:x4,fragmentShader:y4,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ni(new nu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class M4 extends ho{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,x=null;const v=new S4,m=n.getContextAttributes();let f=null,_=null;const g=[],y=[],C=new je;let A=null;const w=new Rn;w.layers.enable(1),w.viewport=new Ct;const b=new Rn;b.layers.enable(2),b.viewport=new Ct;const T=[w,b],S=new v4;S.layers.enable(1),S.layers.enable(2);let L=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ne=g[G];return ne===void 0&&(ne=new yd,g[G]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(G){let ne=g[G];return ne===void 0&&(ne=new yd,g[G]=ne),ne.getGripSpace()},this.getHand=function(G){let ne=g[G];return ne===void 0&&(ne=new yd,g[G]=ne),ne.getHandSpace()};function V(G){const ne=y.indexOf(G.inputSource);if(ne===-1)return;const ue=g[ne];ue!==void 0&&(ue.update(G.inputSource,G.frame,c||o),ue.dispatchEvent({type:G.type,data:G.inputSource}))}function $(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",K);for(let G=0;G<g.length;G++){const ne=y[G];ne!==null&&(y[G]=null,g[G].disconnect(ne))}L=null,H=null,v.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,_=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",$),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new qr(p.framebufferWidth,p.framebufferHeight,{format:jn,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,ue=null,de=null;m.depth&&(de=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?so:Ws,ue=m.stencil?ro:Kr);const De={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(De),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),_=new qr(h.textureWidth,h.textureHeight,{format:jn,type:Di,depthTexture:new q1(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(G){for(let ne=0;ne<G.removed.length;ne++){const ue=G.removed[ne],de=y.indexOf(ue);de>=0&&(y[de]=null,g[de].disconnect(ue))}for(let ne=0;ne<G.added.length;ne++){const ue=G.added[ne];let de=y.indexOf(ue);if(de===-1){for(let Oe=0;Oe<g.length;Oe++)if(Oe>=y.length){y.push(ue),de=Oe;break}else if(y[Oe]===null){y[Oe]=ue,de=Oe;break}if(de===-1)break}const De=g[de];De&&De.connect(ue)}}const j=new O,W=new O;function N(G,ne,ue){j.setFromMatrixPosition(ne.matrixWorld),W.setFromMatrixPosition(ue.matrixWorld);const de=j.distanceTo(W),De=ne.projectionMatrix.elements,Oe=ue.projectionMatrix.elements,ze=De[14]/(De[10]-1),ft=De[14]/(De[10]+1),P=(De[9]+1)/De[5],yt=(De[9]-1)/De[5],Ze=(De[8]-1)/De[0],et=(Oe[8]+1)/Oe[0],Me=ze*Ze,St=ze*et,Pe=de/(-Ze+et),Ne=Pe*-Ze;ne.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(Ne),G.translateZ(Pe),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert();const R=ze+Pe,M=ft+Pe,z=Me-Ne,J=St+(de-Ne),te=P*ft/M*R,Q=yt*ft/M*R;G.projectionMatrix.makePerspective(z,J,te,Q,R,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}function Y(G,ne){ne===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ne.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;v.texture!==null&&(G.near=v.depthNear,G.far=v.depthFar),S.near=b.near=w.near=G.near,S.far=b.far=w.far=G.far,(L!==S.near||H!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,H=S.far,w.near=L,w.far=H,b.near=L,b.far=H,w.updateProjectionMatrix(),b.updateProjectionMatrix(),G.updateProjectionMatrix());const ne=G.parent,ue=S.cameras;Y(S,ne);for(let de=0;de<ue.length;de++)Y(ue[de],ne);ue.length===2?N(S,w,b):S.projectionMatrix.copy(w.projectionMatrix),Z(G,S,ne)};function Z(G,ne,ue){ue===null?G.matrix.copy(ne.matrixWorld):(G.matrix.copy(ue.matrixWorld),G.matrix.invert(),G.matrix.multiply(ne.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ne.projectionMatrix),G.projectionMatrixInverse.copy(ne.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=uh*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(G){l=G,h!==null&&(h.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let oe=null;function Se(G,ne){if(u=ne.getViewerPose(c||o),x=ne,u!==null){const ue=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let de=!1;ue.length!==S.cameras.length&&(S.cameras.length=0,de=!0);for(let Oe=0;Oe<ue.length;Oe++){const ze=ue[Oe];let ft=null;if(p!==null)ft=p.getViewport(ze);else{const yt=d.getViewSubImage(h,ze);ft=yt.viewport,Oe===0&&(e.setRenderTargetTextures(_,yt.colorTexture,h.ignoreDepthValues?void 0:yt.depthStencilTexture),e.setRenderTarget(_))}let P=T[Oe];P===void 0&&(P=new Rn,P.layers.enable(Oe),P.viewport=new Ct,T[Oe]=P),P.matrix.fromArray(ze.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(ze.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(ft.x,ft.y,ft.width,ft.height),Oe===0&&(S.matrix.copy(P.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),de===!0&&S.cameras.push(P)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const Oe=d.getDepthInformation(ue[0]);Oe&&Oe.isValid&&Oe.texture&&v.init(e,Oe,r.renderState)}}for(let ue=0;ue<g.length;ue++){const de=y[ue],De=g[ue];de!==null&&De!==void 0&&De.update(de,ne,c||o)}oe&&oe(G,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),x=null}const He=new $1;He.setAnimationLoop(Se),this.setAnimationLoop=function(G){oe=G},this.dispose=function(){}}}const Ar=new ci,E4=new xt;function T4(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,j1(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,g,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,g):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===cn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===cn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f),g=_.envMap,y=_.envMapRotation;g&&(m.envMap.value=g,Ar.copy(y),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),m.envMapRotation.value.setFromMatrix4(E4.makeRotationFromEuler(Ar)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,g){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=g*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function w4(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,g){const y=g.program;i.uniformBlockBinding(_,y)}function c(_,g){let y=r[_.id];y===void 0&&(x(_),y=u(_),r[_.id]=y,_.addEventListener("dispose",m));const C=g.program;i.updateUBOMapping(_,C);const A=e.render.frame;s[_.id]!==A&&(h(_),s[_.id]=A)}function u(_){const g=d();_.__bindingPointIndex=g;const y=t.createBuffer(),C=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const g=r[_.id],y=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,w=y.length;A<w;A++){const b=Array.isArray(y[A])?y[A]:[y[A]];for(let T=0,S=b.length;T<S;T++){const L=b[T];if(p(L,A,T,C)===!0){const H=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let $=0;for(let K=0;K<V.length;K++){const j=V[K],W=v(j);typeof j=="number"||typeof j=="boolean"?(L.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,H+$,L.__data)):j.isMatrix3?(L.__data[0]=j.elements[0],L.__data[1]=j.elements[1],L.__data[2]=j.elements[2],L.__data[3]=0,L.__data[4]=j.elements[3],L.__data[5]=j.elements[4],L.__data[6]=j.elements[5],L.__data[7]=0,L.__data[8]=j.elements[6],L.__data[9]=j.elements[7],L.__data[10]=j.elements[8],L.__data[11]=0):(j.toArray(L.__data,$),$+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,g,y,C){const A=_.value,w=g+"_"+y;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{const b=C[w];if(typeof A=="number"||typeof A=="boolean"){if(b!==A)return C[w]=A,!0}else if(b.equals(A)===!1)return b.copy(A),!0}return!1}function x(_){const g=_.uniforms;let y=0;const C=16;for(let w=0,b=g.length;w<b;w++){const T=Array.isArray(g[w])?g[w]:[g[w]];for(let S=0,L=T.length;S<L;S++){const H=T[S],V=Array.isArray(H.value)?H.value:[H.value];for(let $=0,K=V.length;$<K;$++){const j=V[$],W=v(j),N=y%C;N!==0&&C-N<W.boundary&&(y+=C-N),H.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=W.storage}}}const A=y%C;return A>0&&(y+=C-A),_.__size=y,_.__cache={},this}function v(_){const g={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(g.boundary=4,g.storage=4):_.isVector2?(g.boundary=8,g.storage=8):_.isVector3||_.isColor?(g.boundary=16,g.storage=12):_.isVector4?(g.boundary=16,g.storage=16):_.isMatrix3?(g.boundary=48,g.storage=48):_.isMatrix4?(g.boundary=64,g.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),g}function m(_){const g=_.target;g.removeEventListener("dispose",m);const y=o.indexOf(g.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class A4{constructor(e={}){const{canvas:n=gC(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),x=new Int32Array(4);let v=null,m=null;const f=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=or,this.toneMappingExposure=1;const g=this;let y=!1,C=0,A=0,w=null,b=-1,T=null;const S=new Ct,L=new Ct;let H=null;const V=new Xe(0);let $=0,K=n.width,j=n.height,W=1,N=null,Y=null;const Z=new Ct(0,0,K,j),oe=new Ct(0,0,K,j);let Se=!1;const He=new Yp;let G=!1,ne=!1;const ue=new xt,de=new O,De=new Ct,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function ft(){return w===null?W:1}let P=i;function yt(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${kp}`),n.addEventListener("webglcontextlost",X,!1),n.addEventListener("webglcontextrestored",q,!1),n.addEventListener("webglcontextcreationerror",ae,!1),P===null){const U="webgl2";if(P=yt(U,E),P===null)throw yt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ze,et,Me,St,Pe,Ne,R,M,z,J,te,Q,Ee,ce,me,Ie,ie,pe,Ve,Re,ge,Le,ke,at;function I(){Ze=new NP(P),Ze.init(),Le=new g4(P,Ze),et=new CP(P,Ze,e,Le),Me=new h4(P),St=new FP(P),Pe=new JL,Ne=new m4(P,Ze,Me,Pe,et,Le,St),R=new RP(g),M=new DP(g),z=new GC(P),ke=new wP(P,z),J=new IP(P,z,St,ke),te=new kP(P,J,z,St),Ve=new OP(P,et,Ne),Ie=new bP(Pe),Q=new QL(g,R,M,Ze,et,ke,Ie),Ee=new T4(g,Pe),ce=new t4,me=new a4(Ze),pe=new TP(g,R,M,Me,te,h,l),ie=new f4(g,te,et),at=new w4(P,St,et,Me),Re=new AP(P,Ze,St),ge=new UP(P,Ze,St),St.programs=Q.programs,g.capabilities=et,g.extensions=Ze,g.properties=Pe,g.renderLists=ce,g.shadowMap=ie,g.state=Me,g.info=St}I();const re=new M4(g,P);this.xr=re,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=Ze.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ze.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(K,j,!1))},this.getSize=function(E){return E.set(K,j)},this.setSize=function(E,U,k=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=E,j=U,n.width=Math.floor(E*W),n.height=Math.floor(U*W),k===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(K*W,j*W).floor()},this.setDrawingBufferSize=function(E,U,k){K=E,j=U,W=k,n.width=Math.floor(E*k),n.height=Math.floor(U*k),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(S)},this.getViewport=function(E){return E.copy(Z)},this.setViewport=function(E,U,k,B){E.isVector4?Z.set(E.x,E.y,E.z,E.w):Z.set(E,U,k,B),Me.viewport(S.copy(Z).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(oe)},this.setScissor=function(E,U,k,B){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,U,k,B),Me.scissor(L.copy(oe).multiplyScalar(W).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(E){Me.setScissorTest(Se=E)},this.setOpaqueSort=function(E){N=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(pe.getClearColor())},this.setClearColor=function(){pe.setClearColor.apply(pe,arguments)},this.getClearAlpha=function(){return pe.getClearAlpha()},this.setClearAlpha=function(){pe.setClearAlpha.apply(pe,arguments)},this.clear=function(E=!0,U=!0,k=!0){let B=0;if(E){let F=!1;if(w!==null){const se=w.texture.format;F=se===Wp||se===Gp||se===Hp}if(F){const se=w.texture.type,fe=se===Di||se===Kr||se===_a||se===ro||se===zp||se===Vp,ve=pe.getClearColor(),_e=pe.getClearAlpha(),Ce=ve.r,be=ve.g,Te=ve.b;fe?(p[0]=Ce,p[1]=be,p[2]=Te,p[3]=_e,P.clearBufferuiv(P.COLOR,0,p)):(x[0]=Ce,x[1]=be,x[2]=Te,x[3]=_e,P.clearBufferiv(P.COLOR,0,x))}else B|=P.COLOR_BUFFER_BIT}U&&(B|=P.DEPTH_BUFFER_BIT),k&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",X,!1),n.removeEventListener("webglcontextrestored",q,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),ce.dispose(),me.dispose(),Pe.dispose(),R.dispose(),M.dispose(),te.dispose(),ke.dispose(),at.dispose(),Q.dispose(),re.dispose(),re.removeEventListener("sessionstart",Kn),re.removeEventListener("sessionend",qp),xr.stop()};function X(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=St.autoReset,U=ie.enabled,k=ie.autoUpdate,B=ie.needsUpdate,F=ie.type;I(),St.autoReset=E,ie.enabled=U,ie.autoUpdate=k,ie.needsUpdate=B,ie.type=F}function ae(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ae(E){const U=E.target;U.removeEventListener("dispose",Ae),Ge(U)}function Ge(E){Mt(E),Pe.remove(E)}function Mt(E){const U=Pe.get(E).programs;U!==void 0&&(U.forEach(function(k){Q.releaseProgram(k)}),E.isShaderMaterial&&Q.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,k,B,F,se){U===null&&(U=Oe);const fe=F.isMesh&&F.matrixWorld.determinant()<0,ve=nS(E,U,k,B,F);Me.setMaterial(B,fe);let _e=k.index,Ce=1;if(B.wireframe===!0){if(_e=J.getWireframeAttribute(k),_e===void 0)return;Ce=2}const be=k.drawRange,Te=k.attributes.position;let $e=be.start*Ce,ht=(be.start+be.count)*Ce;se!==null&&($e=Math.max($e,se.start*Ce),ht=Math.min(ht,(se.start+se.count)*Ce)),_e!==null?($e=Math.max($e,0),ht=Math.min(ht,_e.count)):Te!=null&&($e=Math.max($e,0),ht=Math.min(ht,Te.count));const pt=ht-$e;if(pt<0||pt===1/0)return;ke.setup(F,B,ve,k,_e);let dn,Ke=Re;if(_e!==null&&(dn=z.get(_e),Ke=ge,Ke.setIndex(dn)),F.isMesh)B.wireframe===!0?(Me.setLineWidth(B.wireframeLinewidth*ft()),Ke.setMode(P.LINES)):Ke.setMode(P.TRIANGLES);else if(F.isLine){let ye=B.linewidth;ye===void 0&&(ye=1),Me.setLineWidth(ye*ft()),F.isLineSegments?Ke.setMode(P.LINES):F.isLineLoop?Ke.setMode(P.LINE_LOOP):Ke.setMode(P.LINE_STRIP)}else F.isPoints?Ke.setMode(P.POINTS):F.isSprite&&Ke.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Ke.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))Ke.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const ye=F._multiDrawStarts,Ut=F._multiDrawCounts,qe=F._multiDrawCount,Un=_e?z.get(_e).bytesPerElement:1,es=Pe.get(B).currentProgram.getUniforms();for(let fn=0;fn<qe;fn++)es.setValue(P,"_gl_DrawID",fn),Ke.render(ye[fn]/Un,Ut[fn])}else if(F.isInstancedMesh)Ke.renderInstances($e,pt,F.count);else if(k.isInstancedBufferGeometry){const ye=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ut=Math.min(k.instanceCount,ye);Ke.renderInstances($e,pt,Ut)}else Ke.render($e,pt)};function It(E,U,k){E.transparent===!0&&E.side===xi&&E.forceSinglePass===!1?(E.side=cn,E.needsUpdate=!0,Ua(E,U,k),E.side=dr,E.needsUpdate=!0,Ua(E,U,k),E.side=xi):Ua(E,U,k)}this.compile=function(E,U,k=null){k===null&&(k=E),m=me.get(k),m.init(U),_.push(m),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),E!==k&&E.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const B=new Set;return E.traverse(function(F){const se=F.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){const ve=se[fe];It(ve,k,F),B.add(ve)}else It(se,k,F),B.add(se)}),_.pop(),m=null,B},this.compileAsync=function(E,U,k=null){const B=this.compile(E,U,k);return new Promise(F=>{function se(){if(B.forEach(function(fe){Pe.get(fe).currentProgram.isReady()&&B.delete(fe)}),B.size===0){F(E);return}setTimeout(se,10)}Ze.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Ye=null;function ui(E){Ye&&Ye(E)}function Kn(){xr.stop()}function qp(){xr.start()}const xr=new $1;xr.setAnimationLoop(ui),typeof self<"u"&&xr.setContext(self),this.setAnimationLoop=function(E){Ye=E,re.setAnimationLoop(E),E===null?xr.stop():xr.start()},re.addEventListener("sessionstart",Kn),re.addEventListener("sessionend",qp),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(U),U=re.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,U,w),m=me.get(E,_.length),m.init(U),_.push(m),ue.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),He.setFromProjectionMatrix(ue),ne=this.localClippingEnabled,G=Ie.init(this.clippingPlanes,ne),v=ce.get(E,f.length),v.init(),f.push(v),re.enabled===!0&&re.isPresenting===!0){const se=g.xr.getDepthSensingMesh();se!==null&&ru(se,U,-1/0,g.sortObjects)}ru(E,U,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(N,Y),ze=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,ze&&pe.addToRenderList(v,E),this.info.render.frame++,G===!0&&Ie.beginShadows();const k=m.state.shadowsArray;ie.render(k,E,U),G===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=v.opaque,F=v.transmissive;if(m.setupLights(),U.isArrayCamera){const se=U.cameras;if(F.length>0)for(let fe=0,ve=se.length;fe<ve;fe++){const _e=se[fe];Qp(B,F,E,_e)}ze&&pe.render(E);for(let fe=0,ve=se.length;fe<ve;fe++){const _e=se[fe];Zp(v,E,_e,_e.viewport)}}else F.length>0&&Qp(B,F,E,U),ze&&pe.render(E),Zp(v,E,U);w!==null&&(Ne.updateMultisampleRenderTarget(w),Ne.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(g,E,U),ke.resetDefaultState(),b=-1,T=null,_.pop(),_.length>0?(m=_[_.length-1],G===!0&&Ie.setGlobalState(g.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function ru(E,U,k,B){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||He.intersectsSprite(E)){B&&De.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ue);const fe=te.update(E),ve=E.material;ve.visible&&v.push(E,fe,ve,k,De.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||He.intersectsObject(E))){const fe=te.update(E),ve=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),De.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),De.copy(fe.boundingSphere.center)),De.applyMatrix4(E.matrixWorld).applyMatrix4(ue)),Array.isArray(ve)){const _e=fe.groups;for(let Ce=0,be=_e.length;Ce<be;Ce++){const Te=_e[Ce],$e=ve[Te.materialIndex];$e&&$e.visible&&v.push(E,fe,$e,k,De.z,Te)}}else ve.visible&&v.push(E,fe,ve,k,De.z,null)}}const se=E.children;for(let fe=0,ve=se.length;fe<ve;fe++)ru(se[fe],U,k,B)}function Zp(E,U,k,B){const F=E.opaque,se=E.transmissive,fe=E.transparent;m.setupLightsView(k),G===!0&&Ie.setGlobalState(g.clippingPlanes,k),B&&Me.viewport(S.copy(B)),F.length>0&&Ia(F,U,k),se.length>0&&Ia(se,U,k),fe.length>0&&Ia(fe,U,k),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Qp(E,U,k,B){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new qr(1,1,{generateMipmaps:!0,type:Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float")?ba:Di,minFilter:zr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));const se=m.state.transmissionRenderTarget[B.id],fe=B.viewport||S;se.setSize(fe.z,fe.w);const ve=g.getRenderTarget();g.setRenderTarget(se),g.getClearColor(V),$=g.getClearAlpha(),$<1&&g.setClearColor(16777215,.5),ze?pe.render(k):g.clear();const _e=g.toneMapping;g.toneMapping=or;const Ce=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),G===!0&&Ie.setGlobalState(g.clippingPlanes,B),Ia(E,k,B),Ne.updateMultisampleRenderTarget(se),Ne.updateRenderTargetMipmap(se),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Te=0,$e=U.length;Te<$e;Te++){const ht=U[Te],pt=ht.object,dn=ht.geometry,Ke=ht.material,ye=ht.group;if(Ke.side===xi&&pt.layers.test(B.layers)){const Ut=Ke.side;Ke.side=cn,Ke.needsUpdate=!0,Jp(pt,k,B,dn,Ke,ye),Ke.side=Ut,Ke.needsUpdate=!0,be=!0}}be===!0&&(Ne.updateMultisampleRenderTarget(se),Ne.updateRenderTargetMipmap(se))}g.setRenderTarget(ve),g.setClearColor(V,$),Ce!==void 0&&(B.viewport=Ce),g.toneMapping=_e}function Ia(E,U,k){const B=U.isScene===!0?U.overrideMaterial:null;for(let F=0,se=E.length;F<se;F++){const fe=E[F],ve=fe.object,_e=fe.geometry,Ce=B===null?fe.material:B,be=fe.group;ve.layers.test(k.layers)&&Jp(ve,U,k,_e,Ce,be)}}function Jp(E,U,k,B,F,se){E.onBeforeRender(g,U,k,B,F,se),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.transparent===!0&&F.side===xi&&F.forceSinglePass===!1?(F.side=cn,F.needsUpdate=!0,g.renderBufferDirect(k,U,B,F,E,se),F.side=dr,F.needsUpdate=!0,g.renderBufferDirect(k,U,B,F,E,se),F.side=xi):g.renderBufferDirect(k,U,B,F,E,se),E.onAfterRender(g,U,k,B,F,se)}function Ua(E,U,k){U.isScene!==!0&&(U=Oe);const B=Pe.get(E),F=m.state.lights,se=m.state.shadowsArray,fe=F.state.version,ve=Q.getParameters(E,F.state,se,U,k),_e=Q.getProgramCacheKey(ve);let Ce=B.programs;B.environment=E.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(E.isMeshStandardMaterial?M:R).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ce===void 0&&(E.addEventListener("dispose",Ae),Ce=new Map,B.programs=Ce);let be=Ce.get(_e);if(be!==void 0){if(B.currentProgram===be&&B.lightsStateVersion===fe)return tm(E,ve),be}else ve.uniforms=Q.getUniforms(E),E.onBeforeCompile(ve,g),be=Q.acquireProgram(ve,_e),Ce.set(_e,be),B.uniforms=ve.uniforms;const Te=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Te.clippingPlanes=Ie.uniform),tm(E,ve),B.needsLights=rS(E),B.lightsStateVersion=fe,B.needsLights&&(Te.ambientLightColor.value=F.state.ambient,Te.lightProbe.value=F.state.probe,Te.directionalLights.value=F.state.directional,Te.directionalLightShadows.value=F.state.directionalShadow,Te.spotLights.value=F.state.spot,Te.spotLightShadows.value=F.state.spotShadow,Te.rectAreaLights.value=F.state.rectArea,Te.ltc_1.value=F.state.rectAreaLTC1,Te.ltc_2.value=F.state.rectAreaLTC2,Te.pointLights.value=F.state.point,Te.pointLightShadows.value=F.state.pointShadow,Te.hemisphereLights.value=F.state.hemi,Te.directionalShadowMap.value=F.state.directionalShadowMap,Te.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Te.spotShadowMap.value=F.state.spotShadowMap,Te.spotLightMatrix.value=F.state.spotLightMatrix,Te.spotLightMap.value=F.state.spotLightMap,Te.pointShadowMap.value=F.state.pointShadowMap,Te.pointShadowMatrix.value=F.state.pointShadowMatrix),B.currentProgram=be,B.uniformsList=null,be}function em(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Xl.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function tm(E,U){const k=Pe.get(E);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function nS(E,U,k,B,F){U.isScene!==!0&&(U=Oe),Ne.resetTextureUnits();const se=U.fog,fe=B.isMeshStandardMaterial?U.environment:null,ve=w===null?g.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:vr,_e=(B.isMeshStandardMaterial?M:R).get(B.envMap||fe),Ce=B.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,be=!!k.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Te=!!k.morphAttributes.position,$e=!!k.morphAttributes.normal,ht=!!k.morphAttributes.color;let pt=or;B.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(pt=g.toneMapping);const dn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ke=dn!==void 0?dn.length:0,ye=Pe.get(B),Ut=m.state.lights;if(G===!0&&(ne===!0||E!==T)){const En=E===T&&B.id===b;Ie.setState(B,E,En)}let qe=!1;B.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Ut.state.version||ye.outputColorSpace!==ve||F.isBatchedMesh&&ye.batching===!1||!F.isBatchedMesh&&ye.batching===!0||F.isBatchedMesh&&ye.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&ye.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&ye.instancing===!1||!F.isInstancedMesh&&ye.instancing===!0||F.isSkinnedMesh&&ye.skinning===!1||!F.isSkinnedMesh&&ye.skinning===!0||F.isInstancedMesh&&ye.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&ye.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&ye.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&ye.instancingMorph===!1&&F.morphTexture!==null||ye.envMap!==_e||B.fog===!0&&ye.fog!==se||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Ie.numPlanes||ye.numIntersection!==Ie.numIntersection)||ye.vertexAlphas!==Ce||ye.vertexTangents!==be||ye.morphTargets!==Te||ye.morphNormals!==$e||ye.morphColors!==ht||ye.toneMapping!==pt||ye.morphTargetsCount!==Ke)&&(qe=!0):(qe=!0,ye.__version=B.version);let Un=ye.currentProgram;qe===!0&&(Un=Ua(B,U,F));let es=!1,fn=!1,su=!1;const Et=Un.getUniforms(),Ii=ye.uniforms;if(Me.useProgram(Un.program)&&(es=!0,fn=!0,su=!0),B.id!==b&&(b=B.id,fn=!0),es||T!==E){Et.setValue(P,"projectionMatrix",E.projectionMatrix),Et.setValue(P,"viewMatrix",E.matrixWorldInverse);const En=Et.map.cameraPosition;En!==void 0&&En.setValue(P,de.setFromMatrixPosition(E.matrixWorld)),et.logarithmicDepthBuffer&&Et.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Et.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),T!==E&&(T=E,fn=!0,su=!0)}if(F.isSkinnedMesh){Et.setOptional(P,F,"bindMatrix"),Et.setOptional(P,F,"bindMatrixInverse");const En=F.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Et.setValue(P,"boneTexture",En.boneTexture,Ne))}F.isBatchedMesh&&(Et.setOptional(P,F,"batchingTexture"),Et.setValue(P,"batchingTexture",F._matricesTexture,Ne),Et.setOptional(P,F,"batchingIdTexture"),Et.setValue(P,"batchingIdTexture",F._indirectTexture,Ne),Et.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&Et.setValue(P,"batchingColorTexture",F._colorsTexture,Ne));const ou=k.morphAttributes;if((ou.position!==void 0||ou.normal!==void 0||ou.color!==void 0)&&Ve.update(F,k,Un),(fn||ye.receiveShadow!==F.receiveShadow)&&(ye.receiveShadow=F.receiveShadow,Et.setValue(P,"receiveShadow",F.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Ii.envMap.value=_e,Ii.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(Ii.envMapIntensity.value=U.environmentIntensity),fn&&(Et.setValue(P,"toneMappingExposure",g.toneMappingExposure),ye.needsLights&&iS(Ii,su),se&&B.fog===!0&&Ee.refreshFogUniforms(Ii,se),Ee.refreshMaterialUniforms(Ii,B,W,j,m.state.transmissionRenderTarget[E.id]),Xl.upload(P,em(ye),Ii,Ne)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Xl.upload(P,em(ye),Ii,Ne),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Et.setValue(P,"center",F.center),Et.setValue(P,"modelViewMatrix",F.modelViewMatrix),Et.setValue(P,"normalMatrix",F.normalMatrix),Et.setValue(P,"modelMatrix",F.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const En=B.uniformsGroups;for(let au=0,sS=En.length;au<sS;au++){const nm=En[au];at.update(nm,Un),at.bind(nm,Un)}}return Un}function iS(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function rS(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,U,k){Pe.get(E.texture).__webglTexture=U,Pe.get(E.depthTexture).__webglTexture=k;const B=Pe.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=k===void 0,B.__autoAllocateDepthBuffer||Ze.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const k=Pe.get(E);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,k=0){w=E,C=U,A=k;let B=!0,F=null,se=!1,fe=!1;if(E){const _e=Pe.get(E);_e.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(P.FRAMEBUFFER,null),B=!1):_e.__webglFramebuffer===void 0?Ne.setupRenderTarget(E):_e.__hasExternalTextures&&Ne.rebindTextures(E,Pe.get(E.texture).__webglTexture,Pe.get(E.depthTexture).__webglTexture);const Ce=E.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(fe=!0);const be=Pe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(be[U])?F=be[U][k]:F=be[U],se=!0):E.samples>0&&Ne.useMultisampledRTT(E)===!1?F=Pe.get(E).__webglMultisampledFramebuffer:Array.isArray(be)?F=be[k]:F=be,S.copy(E.viewport),L.copy(E.scissor),H=E.scissorTest}else S.copy(Z).multiplyScalar(W).floor(),L.copy(oe).multiplyScalar(W).floor(),H=Se;if(Me.bindFramebuffer(P.FRAMEBUFFER,F)&&B&&Me.drawBuffers(E,F),Me.viewport(S),Me.scissor(L),Me.setScissorTest(H),se){const _e=Pe.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,_e.__webglTexture,k)}else if(fe){const _e=Pe.get(E.texture),Ce=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,_e.__webglTexture,k||0,Ce)}b=-1},this.readRenderTargetPixels=function(E,U,k,B,F,se,fe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){Me.bindFramebuffer(P.FRAMEBUFFER,ve);try{const _e=E.texture,Ce=_e.format,be=_e.type;if(!et.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-B&&k>=0&&k<=E.height-F&&P.readPixels(U,k,B,F,Le.convert(Ce),Le.convert(be),se)}finally{const _e=w!==null?Pe.get(w).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(E,U,k,B,F,se,fe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Pe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){Me.bindFramebuffer(P.FRAMEBUFFER,ve);try{const _e=E.texture,Ce=_e.format,be=_e.type;if(!et.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-B&&k>=0&&k<=E.height-F){const Te=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.bufferData(P.PIXEL_PACK_BUFFER,se.byteLength,P.STREAM_READ),P.readPixels(U,k,B,F,Le.convert(Ce),Le.convert(be),0),P.flush();const $e=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);await vC(P,$e,4);try{P.bindBuffer(P.PIXEL_PACK_BUFFER,Te),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,se)}finally{P.deleteBuffer(Te),P.deleteSync($e)}return se}}finally{const _e=w!==null?Pe.get(w).__webglFramebuffer:null;Me.bindFramebuffer(P.FRAMEBUFFER,_e)}}},this.copyFramebufferToTexture=function(E,U=null,k=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const B=Math.pow(2,-k),F=Math.floor(E.image.width*B),se=Math.floor(E.image.height*B),fe=U!==null?U.x:0,ve=U!==null?U.y:0;Ne.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,fe,ve,F,se),Me.unbindTexture()},this.copyTextureToTexture=function(E,U,k=null,B=null,F=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1],U=arguments[2],F=arguments[3]||0,k=null);let se,fe,ve,_e,Ce,be;k!==null?(se=k.max.x-k.min.x,fe=k.max.y-k.min.y,ve=k.min.x,_e=k.min.y):(se=E.image.width,fe=E.image.height,ve=0,_e=0),B!==null?(Ce=B.x,be=B.y):(Ce=0,be=0);const Te=Le.convert(U.format),$e=Le.convert(U.type);Ne.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const ht=P.getParameter(P.UNPACK_ROW_LENGTH),pt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),dn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ke=P.getParameter(P.UNPACK_SKIP_ROWS),ye=P.getParameter(P.UNPACK_SKIP_IMAGES),Ut=E.isCompressedTexture?E.mipmaps[F]:E.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Ut.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ut.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ve),P.pixelStorei(P.UNPACK_SKIP_ROWS,_e),E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,Ce,be,se,fe,Te,$e,Ut.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,Ce,be,Ut.width,Ut.height,Te,Ut.data):P.texSubImage2D(P.TEXTURE_2D,F,Ce,be,se,fe,Te,$e,Ut),P.pixelStorei(P.UNPACK_ROW_LENGTH,ht),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,dn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ke),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ye),F===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(E,U,k=null,B=null,F=0){E.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,B=arguments[1]||null,E=arguments[2],U=arguments[3],F=arguments[4]||0);let se,fe,ve,_e,Ce,be,Te,$e,ht;const pt=E.isCompressedTexture?E.mipmaps[F]:E.image;k!==null?(se=k.max.x-k.min.x,fe=k.max.y-k.min.y,ve=k.max.z-k.min.z,_e=k.min.x,Ce=k.min.y,be=k.min.z):(se=pt.width,fe=pt.height,ve=pt.depth,_e=0,Ce=0,be=0),B!==null?(Te=B.x,$e=B.y,ht=B.z):(Te=0,$e=0,ht=0);const dn=Le.convert(U.format),Ke=Le.convert(U.type);let ye;if(U.isData3DTexture)Ne.setTexture3D(U,0),ye=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Ne.setTexture2DArray(U,0),ye=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Ut=P.getParameter(P.UNPACK_ROW_LENGTH),qe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Un=P.getParameter(P.UNPACK_SKIP_PIXELS),es=P.getParameter(P.UNPACK_SKIP_ROWS),fn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,pt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,pt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,_e),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ce),P.pixelStorei(P.UNPACK_SKIP_IMAGES,be),E.isDataTexture||E.isData3DTexture?P.texSubImage3D(ye,F,Te,$e,ht,se,fe,ve,dn,Ke,pt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(ye,F,Te,$e,ht,se,fe,ve,dn,pt.data):P.texSubImage3D(ye,F,Te,$e,ht,se,fe,ve,dn,Ke,pt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ut),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,qe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Un),P.pixelStorei(P.UNPACK_SKIP_ROWS,es),P.pixelStorei(P.UNPACK_SKIP_IMAGES,fn),F===0&&U.generateMipmaps&&P.generateMipmap(ye),Me.unbindTexture()},this.initRenderTarget=function(E){Pe.get(E).__webglFramebuffer===void 0&&Ne.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ne.setTextureCube(E,0):E.isData3DTexture?Ne.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ne.setTexture2DArray(E,0):Ne.setTexture2D(E,0),Me.unbindTexture()},this.resetState=function(){C=0,A=0,w=null,Me.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===jp?"display-p3":"srgb",n.unpackColorSpace=Qe.workingColorSpace===tu?"display-p3":"srgb"}}class C4 extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Kp extends _r{constructor(e=1,n=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const a=[],l=[],c=[],u=[],d=new O,h=new O,p=new O,x=new O,v=new O,m=new O,f=new O;for(let g=0;g<=i;++g){const y=g/i*s*Math.PI*2;_(y,s,o,e,p),_(y+.01,s,o,e,x),m.subVectors(x,p),f.addVectors(x,p),v.crossVectors(m,f),f.crossVectors(v,m),v.normalize(),f.normalize();for(let C=0;C<=r;++C){const A=C/r*Math.PI*2,w=-n*Math.cos(A),b=n*Math.sin(A);d.x=p.x+(w*f.x+b*v.x),d.y=p.y+(w*f.y+b*v.y),d.z=p.z+(w*f.z+b*v.z),l.push(d.x,d.y,d.z),h.subVectors(d,p).normalize(),c.push(h.x,h.y,h.z),u.push(g/i),u.push(C/r)}}for(let g=1;g<=i;g++)for(let y=1;y<=r;y++){const C=(r+1)*(g-1)+(y-1),A=(r+1)*g+(y-1),w=(r+1)*g+y,b=(r+1)*(g-1)+y;a.push(C,A,b),a.push(A,w,b)}this.setIndex(a),this.setAttribute("position",new li(l,3)),this.setAttribute("normal",new li(c,3)),this.setAttribute("uv",new li(u,2));function _(g,y,C,A,w){const b=Math.cos(g),T=Math.sin(g),S=C/y*g,L=Math.cos(S);w.x=A*(2+L)*.5*b,w.y=A*(2+L)*T*.5,w.z=A*Math.sin(S)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kp(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class b4 extends Da{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=I1,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tS extends Yt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Sd=new xt,bv=new O,Rv=new O;class R4{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yp,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;bv.setFromMatrixPosition(e.matrixWorld),n.position.copy(bv),Rv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Rv),n.updateMatrixWorld(),Sd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sd),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class P4 extends R4{constructor(){super(new K1(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class L4 extends tS{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Yt.DEFAULT_UP),this.updateMatrix(),this.target=new Yt,this.shadow=new P4}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class D4 extends tS{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kp);const N4=()=>{const t=xe.useRef(null);return xe.useEffect(()=>{const e=t.current;if(!e)return;const n=new C4,i=new Rn(40,e.clientWidth/e.clientHeight,.1,1e3);i.position.set(0,0,4);const r=new A4({antialias:!0,alpha:!0});r.setPixelRatio(window.devicePixelRatio),r.setSize(e.clientWidth,e.clientHeight),e.appendChild(r.domElement);const s=new Kp(.9,.28,128,16),o=new b4({color:3900150,emissive:937106,metalness:.65,roughness:.15,transparent:!0,opacity:.85}),a=new ni(s,o);n.add(a);const l=new D4(6739967,.7),c=new L4(8141549,1.2);c.position.set(3,3,5),n.add(l,c);const u=()=>{i.aspect=e.clientWidth/e.clientHeight,i.updateProjectionMatrix(),r.setSize(e.clientWidth,e.clientHeight)};window.addEventListener("resize",u);let d;const h=()=>{a.rotation.x+=.003,a.rotation.y+=.004,r.render(n,i),d=requestAnimationFrame(h)};return h(),()=>{window.removeEventListener("resize",u),cancelAnimationFrame(d),r.dispose(),e.removeChild(r.domElement)}},[]),D.jsx("div",{ref:t,className:"pointer-events-none absolute inset-0 opacity-40"})},Pv=["CEH Certified","Founder of Shop By Me","Ethical Hacker","Frontend Developer","Security Specialist"],I4=[{label:"Labs Completed",value:"32+"},{label:"Security Challenges",value:"18+"},{label:"Projects Built",value:"12+"},{label:"Network Systems",value:"9+"}],U4=[{name:"Kali Linux",icon:vA,progress:95},{name:"Ethical Hacking",icon:Ac,progress:92},{name:"Penetration Testing",icon:fA,progress:90},{name:"Networking",icon:y1,progress:88},{name:"Linux",icon:gA,progress:94},{name:"Web Development",icon:P0,progress:90},{name:"React",icon:mA,progress:89},{name:"JavaScript",icon:_A,progress:91},{name:"Tailwind CSS",icon:pA,progress:86},{name:"Frontend Development",icon:P0,progress:88},{name:"Cyber Security",icon:Ac,progress:92},{name:"System Security",icon:xA,progress:87}],F4=[{title:"Shop By Me",description:"Modern online booking and digital commerce platform.",tags:["React","Tailwind","Security"],demo:"#projects",github:"https://github.com/"},{title:"Kariakoo Booking App",description:"Smart online booking application with modern UI.",tags:["React","API","UX"],demo:"#projects",github:"https://github.com/"},{title:"Network Configuration System",description:"Networking systems and IP camera configuration platform.",tags:["Network","Linux","Ops"],demo:"#projects",github:"https://github.com/"},{title:"Cybersecurity Dashboard",description:"Hacker-style security monitoring interface.",tags:["Three.js","Dashboard","Realtime"],demo:"#projects",github:"https://github.com/"}],O4=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Skills",href:"#skills"},{label:"Projects",href:"#projects"},{label:"Experience",href:"#experience"},{label:"Contact",href:"#contact"}];function k4(){const[t,e]=xe.useState(0),[n,i]=xe.useState(""),[r,s]=xe.useState(!0),[o,a]=xe.useState({x:0,y:0}),[l,c]=xe.useState({name:"",email:"",message:""}),[u,d]=xe.useState("idle");xe.useEffect(()=>{const v=window.setTimeout(()=>s(!1),1800);return()=>window.clearTimeout(v)},[]),xe.useEffect(()=>{let v=0;const m=Pv[t],f=window.setInterval(()=>{v<=m.length?(i(m.slice(0,v)),v+=1):(window.setTimeout(()=>{i(""),e(_=>(_+1)%Pv.length)},1200),window.clearInterval(f))},110);return()=>window.clearInterval(f)},[t]),xe.useEffect(()=>{const v=m=>{a({x:m.clientX,y:m.clientY})};return window.addEventListener("mousemove",v),()=>window.removeEventListener("mousemove",v)},[]);const h=v=>{const{name:m,value:f}=v.target;c(_=>({..._,[m]:f}))},p=v=>{if(v.preventDefault(),!l.name||!l.email||!l.message){d("error"),setTimeout(()=>d("idle"),3e3);return}const m="255624667100",f="adolphmlasani29@gmail.com",_=encodeURIComponent(`New Portfolio Contact: ${l.name}`),g=encodeURIComponent(`Name: ${l.name}
Email: ${l.email}

Message:
${l.message}`),y=encodeURIComponent(`Hi Adolph,

Name: ${l.name}
Email: ${l.email}

Message:
${l.message}`);window.open(`https://wa.me/${m}?text=${y}`,"_blank"),window.open(`mailto:${f}?subject=${_}&body=${g}`,"_blank"),d("success"),c({name:"",email:"",message:""}),setTimeout(()=>d("idle"),3e3)},x=xe.useMemo(()=>U4.map(v=>{const m=v.icon;return D.jsxs(nl.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.45,ease:"easeOut"},className:"group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 p-5 text-left shadow-cyber backdrop-blur-xl",children:[D.jsxs("div",{className:"flex items-center gap-4",children:[D.jsx("div",{className:"flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 transition duration-300 group-hover:bg-cyan-500/20",children:D.jsx(m,{className:"h-7 w-7"})}),D.jsxs("div",{children:[D.jsx("h3",{className:"text-lg font-semibold text-slate-100",children:v.name}),D.jsx("p",{className:"mt-1 text-sm text-slate-400",children:"Progress"})]})]}),D.jsx("div",{className:"mt-6 h-3 overflow-hidden rounded-full bg-slate-900/90",children:D.jsx(nl.div,{className:"h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500",initial:{width:0},whileInView:{width:`${v.progress}%`},viewport:{once:!0},transition:{duration:1.3,ease:"easeOut"}})}),D.jsxs("span",{className:"mt-3 block text-sm font-medium text-slate-300",children:[v.progress,"%"]})]},v.name)}),[]);return D.jsxs("div",{className:"relative min-h-screen overflow-x-hidden bg-cyber-900 text-slate-100",children:[D.jsx(yA,{}),r?D.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-cyber-900/95 backdrop-blur-xl",children:D.jsxs("div",{className:"flex flex-col items-center gap-6 text-center",children:[D.jsx("div",{className:"flex h-24 w-24 items-center justify-center rounded-full border border-cyan-400/30 bg-cyber-800 shadow-glow",children:D.jsx(Ac,{className:"h-10 w-10 text-cyan-300"})}),D.jsxs("div",{children:[D.jsx("p",{className:"text-sm uppercase tracking-[0.4em] text-cyan-300",children:"Initializing Security Core"}),D.jsx("h1",{className:"mt-4 text-4xl font-semibold text-white",children:"Loading Adolph Mlasani"})]})]})}):null,D.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.12),_transparent_20%)]"}),D.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.38),rgba(15,23,42,0.82))]","aria-hidden":"true"}),D.jsx("div",{className:"pointer-events-none fixed top-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 opacity-70"}),D.jsx("div",{className:"pointer-events-none fixed bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 opacity-60"}),D.jsx("nav",{className:"sticky top-0 z-40 border-b border-white/5 bg-cyber-900/80 backdrop-blur-xl",children:D.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm text-slate-300 sm:px-8",children:[D.jsx("a",{href:"#home",className:"font-semibold tracking-[0.2em] text-cyan-300",children:"ADOLPH"}),D.jsx("div",{className:"hidden items-center gap-6 md:flex",children:O4.map(v=>D.jsx("a",{href:v.href,className:"transition-colors duration-200 hover:text-cyan-300",children:v.label},v.href))}),D.jsxs("div",{className:"flex gap-3 text-cyan-300",children:[D.jsxs("a",{href:"https://linkedin.com/","aria-label":"LinkedIn",className:"transition hover:text-white",children:[" ",D.jsx(b0,{})," "]}),D.jsxs("a",{href:"https://github.com/","aria-label":"GitHub",className:"transition hover:text-white",children:[" ",D.jsx(R0,{})," "]}),D.jsxs("a",{href:"mailto:adolphmlasani29@gmail.com","aria-label":"Email",className:"transition hover:text-white",children:[" ",D.jsx(L0,{})," "]})]})]})}),D.jsxs("main",{className:"relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-8 sm:px-8",children:[D.jsxs("section",{id:"home",className:"relative flex min-h-[88vh] items-center overflow-hidden py-16",children:[D.jsx("div",{className:"absolute inset-0 opacity-20",children:D.jsx(N4,{})}),D.jsxs("div",{className:"relative z-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center",children:[D.jsxs("div",{className:"space-y-8",children:[D.jsxs("div",{className:"inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-300 shadow-cyber backdrop-blur-xl",children:[D.jsx("span",{className:"h-2 w-2 animate-pulse rounded-full bg-cyan-300"}),"Cyberpunk Command Center Online"]}),D.jsxs("div",{className:"space-y-4",children:[D.jsx("p",{className:"text-lg uppercase tracking-[0.35em] text-cyan-300/80",children:"Hi, I’m"}),D.jsx("h1",{className:"text-5xl font-semibold tracking-tight text-white sm:text-6xl",children:"ADOLPH MLASANI"}),D.jsx("p",{className:"max-w-2xl text-xl leading-relaxed text-slate-300",children:"Cyber Security Engineer & Frontend Developer building secure, futuristic digital experiences with neon precision."}),D.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-cyan-300",children:[D.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/5 px-3 py-2 text-sm backdrop-blur-xl",children:[D.jsx(Ac,{})," CEH Certified"]}),D.jsxs("span",{className:"inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/5 px-3 py-2 text-sm backdrop-blur-xl",children:[D.jsx(y1,{})," Shop By Me Founder"]})]})]}),D.jsxs("div",{className:"rounded-3xl border border-cyan-400/20 bg-slate-950/70 p-6 shadow-cyber backdrop-blur-xl",children:[D.jsx("p",{className:"mb-3 uppercase tracking-[0.28em] text-cyan-300/80",children:"Status"}),D.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-2xl font-semibold text-white",children:[D.jsx("span",{className:"text-cyan-300",children:n}),D.jsx("span",{className:"animate-pulse text-cyan-400",children:"|"})]})]}),D.jsxs("div",{className:"flex flex-wrap gap-4",children:[D.jsx("a",{href:"#projects",className:"rounded-3xl border border-cyan-300/20 bg-cyan-500/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200 transition duration-200 hover:bg-cyan-500/20 hover:text-white",children:"View Projects"}),D.jsx("a",{href:"#contact",className:"rounded-3xl border border-purple-300/20 bg-purple-500/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple-200 transition duration-200 hover:bg-purple-500/20 hover:text-white",children:"Contact Me"}),D.jsxs("a",{href:"/resume.pdf",className:"rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition duration-200 hover:brightness-110",children:[D.jsx(hA,{className:"mr-2 inline-block"})," Download CV"]})]})]}),D.jsxs("div",{className:"space-y-6",children:[D.jsxs(nl.div,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},className:"group relative mx-auto h-48 w-48 overflow-hidden rounded-full border-2 border-cyan-400/50 bg-slate-950/60 p-1 shadow-cyber",children:[D.jsx("div",{className:"absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/40 via-blue-500/30 to-purple-500/30 blur-lg opacity-80 group-hover:opacity-100 transition duration-300 rounded-full"}),D.jsxs("div",{className:"relative h-full w-full overflow-hidden rounded-full",children:[D.jsx("img",{src:"/images/profile.png",alt:"Adolph Mlasani - Cyber Security Engineer & Frontend Developer",className:"h-full w-full object-cover transition duration-300 group-hover:scale-110"}),D.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300"})]})]}),D.jsxs("div",{className:"group relative overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-slate-950/60 p-6 shadow-cyber backdrop-blur-2xl",children:[D.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-80"}),D.jsx("div",{className:"relative space-y-6",children:D.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:[{icon:b0,label:"LinkedIn",value:"Adolph_mlasani",href:"https://linkedin.com/"},{icon:R0,label:"GitHub",value:"github.com/adolph",href:"https://github.com/"},{icon:L0,label:"Email",value:"adolphmlasani29@gmail.com",href:"mailto:adolphmlasani29@gmail.com"},{icon:dA,label:"WhatsApp",value:"+255624667100",href:"https://wa.me/255624667100"}].map(v=>{const m=v.icon;return D.jsxs("a",{href:v.href,target:"_blank",rel:"noreferrer",className:"group flex items-center gap-3 rounded-3xl border border-slate-700/70 bg-slate-900/70 px-4 py-4 transition duration-200 hover:border-cyan-300/40 hover:bg-cyan-500/10",children:[D.jsx("span",{className:"flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 transition group-hover:bg-cyan-500/20",children:D.jsx(m,{className:"h-5 w-5"})}),D.jsxs("div",{children:[D.jsx("p",{className:"text-sm text-slate-400",children:v.label}),D.jsx("p",{className:"font-medium text-white",children:v.value})]})]},v.label)})})})]}),D.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:I4.map(v=>D.jsxs("div",{className:"rounded-3xl border border-cyan-400/10 bg-slate-950/80 p-5 shadow-glow backdrop-blur-xl",children:[D.jsx("div",{className:"text-sm uppercase tracking-[0.23em] text-cyan-300/80",children:v.label}),D.jsx("div",{className:"mt-3 text-3xl font-semibold text-white",children:v.value})]},v.label))})]})]})]}),D.jsxs("section",{id:"about",className:"space-y-8 py-16",children:[D.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[D.jsxs("div",{children:[D.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-cyan-300/80",children:"About"}),D.jsx("h2",{className:"mt-4 text-4xl font-semibold text-white",children:"Futuristic Glassmorphism Profile"})]}),D.jsx("div",{className:"rounded-full border border-cyan-400/10 bg-cyan-500/10 px-5 py-3 text-sm text-cyan-200 backdrop-blur-xl",children:"Cyber Security Engineer + Frontend Developer"})]}),D.jsxs("div",{className:"grid gap-6 lg:grid-cols-[1.8fr_1fr]",children:[D.jsx("div",{className:"rounded-[2rem] border border-cyan-400/15 bg-slate-950/70 p-8 shadow-cyber backdrop-blur-2xl",children:D.jsxs("div",{className:"space-y-6",children:[D.jsx("p",{className:"text-lg leading-8 text-slate-300",children:"Adolph Mlasani is a Cyber Security Engineer and Frontend Developer passionate about cybersecurity, ethical hacking, networking, and futuristic web experiences. Founder of Shop By Me and Certified Ethical Hacker (CEH), he has performed multiple cybersecurity labs, penetration testing exercises, and technical security challenges while building modern responsive interfaces and secure digital systems."}),D.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[D.jsxs("div",{className:"rounded-3xl border border-cyan-400/15 bg-cyber-800/85 p-5",children:[D.jsx("p",{className:"text-sm uppercase tracking-[0.25em] text-cyan-300/70",children:"Certification"}),D.jsx("h3",{className:"mt-3 text-xl font-semibold text-white",children:"Certified Ethical Hacker"})]}),D.jsxs("div",{className:"rounded-3xl border border-purple-400/15 bg-cyber-800/85 p-5",children:[D.jsx("p",{className:"text-sm uppercase tracking-[0.25em] text-purple-300/70",children:"Achievement"}),D.jsx("h3",{className:"mt-3 text-xl font-semibold text-white",children:"Real-world Security Challenges"})]})]})]})}),D.jsxs("div",{className:"space-y-4",children:[D.jsxs("div",{className:"rounded-[2rem] border border-cyan-400/15 bg-slate-950/70 p-6 shadow-cyber backdrop-blur-xl",children:[D.jsx("h3",{className:"text-lg font-semibold text-white",children:"Highlights"}),D.jsxs("ul",{className:"mt-4 space-y-3 text-slate-400",children:[D.jsx("li",{children:"• Founder of Shop By Me, building secure commerce workflows."}),D.jsx("li",{children:"• CEH certified with strong practical penetration testing experience."}),D.jsx("li",{children:"• Experienced in cybersecurity labs, networking, and secure frontend design."}),D.jsx("li",{children:"• Passionate about modern technology, security, and immersive digital experiences."})]})]}),D.jsxs("div",{className:"rounded-[2rem] border border-cyan-400/15 bg-cyan-500/10 p-6 shadow-glow backdrop-blur-xl",children:[D.jsx("h3",{className:"text-lg font-semibold text-white",children:"Cybersecurity Achievement"}),D.jsx("p",{className:"mt-3 text-slate-300",children:"Built an advanced hacker dashboard aesthetic with a cohesive command center vibe, blending neon pulse glow and matrix-inspired motion."})]})]})]})]}),D.jsxs("section",{id:"skills",className:"space-y-8 py-16",children:[D.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[D.jsxs("div",{children:[D.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-cyan-300/80",children:"Skills"}),D.jsx("h2",{className:"mt-4 text-4xl font-semibold text-white",children:"Cyberpunk Skill Set"})]}),D.jsx("div",{className:"rounded-full border border-purple-400/20 bg-purple-500/10 px-5 py-3 text-sm text-purple-200 backdrop-blur-xl",children:"Animated progress & interactive glow"})]}),D.jsx("div",{className:"grid gap-5 md:grid-cols-2 xl:grid-cols-3",children:x})]}),D.jsxs("section",{id:"projects",className:"space-y-8 py-16",children:[D.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[D.jsxs("div",{children:[D.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-cyan-300/80",children:"Projects"}),D.jsx("h2",{className:"mt-4 text-4xl font-semibold text-white",children:"Hacker-Style Portfolio Showcase"})]}),D.jsx("div",{className:"rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-3 text-sm text-cyan-200 backdrop-blur-xl",children:"Neon border glow & live demo UI"})]}),D.jsx("div",{className:"grid gap-6 lg:grid-cols-2",children:F4.map((v,m)=>D.jsxs(nl.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0,amount:.2},transition:{duration:.45,delay:.08*m},className:"relative overflow-hidden rounded-[2rem] border border-cyan-400/15 bg-slate-950/80 p-6 shadow-cyber backdrop-blur-2xl",children:[D.jsx("div",{className:"absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_18%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_20%)] opacity-70"}),D.jsxs("div",{className:"relative space-y-5",children:[D.jsxs("div",{className:"flex items-center justify-between gap-4",children:[D.jsxs("div",{children:[D.jsx("p",{className:"text-sm uppercase tracking-[0.25em] text-cyan-300/70",children:"Project"}),D.jsx("h3",{className:"mt-3 text-2xl font-semibold text-white",children:v.title})]}),D.jsx("div",{className:"rounded-3xl border border-blue-400/20 bg-blue-400/10 px-3 py-2 text-sm text-blue-200",children:"Active"})]}),D.jsx("p",{className:"text-slate-300",children:v.description}),D.jsx("div",{className:"flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-slate-400",children:v.tags.map(f=>D.jsx("span",{className:"rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-2",children:f},f))}),D.jsxs("div",{className:"grid gap-3 sm:grid-cols-2",children:[D.jsx("a",{href:v.demo,className:"inline-flex items-center justify-center rounded-3xl border border-cyan-300/20 bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20 hover:text-white",children:"Live Demo"}),D.jsx("a",{href:v.github,className:"inline-flex items-center justify-center rounded-3xl border border-purple-300/20 bg-purple-500/10 px-4 py-3 text-sm font-semibold text-purple-200 transition hover:bg-purple-500/20 hover:text-white",children:"GitHub"})]})]})]},v.title))})]}),D.jsxs("section",{id:"experience",className:"space-y-8 py-16",children:[D.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[D.jsxs("div",{children:[D.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-cyan-300/80",children:"Experience"}),D.jsx("h2",{className:"mt-4 text-4xl font-semibold text-white",children:"Secure Systems & Certifications"})]}),D.jsx("div",{className:"rounded-full border border-purple-400/20 bg-purple-500/10 px-5 py-3 text-sm text-purple-200 backdrop-blur-xl",children:"Terminal-inspired command logs"})]}),D.jsxs("div",{className:"grid gap-6 lg:grid-cols-3",children:[D.jsxs("div",{className:"rounded-[2rem] border border-cyan-400/15 bg-slate-950/80 p-6 shadow-cyber backdrop-blur-xl",children:[D.jsx("p",{className:"text-sm uppercase tracking-[0.25em] text-cyan-300/70",children:"Certification"}),D.jsx("h3",{className:"mt-4 text-2xl font-semibold text-white",children:"Certified Ethical Hacker (CEH)"}),D.jsx("p",{className:"mt-3 text-slate-400",children:"Global certification for ethical hackers and security specialists focused on attack strategies and defense techniques."})]}),D.jsxs("div",{className:"rounded-[2rem] border border-cyan-400/15 bg-slate-950/80 p-6 shadow-cyber backdrop-blur-xl",children:[D.jsx("p",{className:"text-sm uppercase tracking-[0.25em] text-cyan-300/70",children:"Experience"}),D.jsx("h3",{className:"mt-4 text-2xl font-semibold text-white",children:"Cybersecurity Labs"}),D.jsx("p",{className:"mt-3 text-slate-400",children:"Hands-on lab exercises in penetration testing, network defense, system hardening, and secure application workflows."})]}),D.jsxs("div",{className:"rounded-[2rem] border border-cyan-400/15 bg-slate-950/80 p-6 shadow-cyber backdrop-blur-xl",children:[D.jsx("p",{className:"text-sm uppercase tracking-[0.25em] text-cyan-300/70",children:"Specialties"}),D.jsx("h3",{className:"mt-4 text-2xl font-semibold text-white",children:"Networking & Frontend"}),D.jsx("p",{className:"mt-3 text-slate-400",children:"Practical experience with networking architecture, IP camera systems, secure web interfaces, and responsive UI engineering."})]})]})]}),D.jsxs("section",{id:"contact",className:"space-y-8 py-16",children:[D.jsxs("div",{className:"flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",children:[D.jsxs("div",{children:[D.jsx("p",{className:"text-sm uppercase tracking-[0.3em] text-cyan-300/80",children:"Contact"}),D.jsx("h2",{className:"mt-4 text-4xl font-semibold text-white",children:"Cyberpunk Communication Panel"})]}),D.jsx("div",{className:"rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-3 text-sm text-cyan-200 backdrop-blur-xl",children:"Neon glowing inputs & send action"})]}),D.jsxs("div",{className:"grid gap-6 lg:grid-cols-[1.2fr_0.8fr]",children:[D.jsx("div",{className:"rounded-[2rem] border border-cyan-400/15 bg-slate-950/80 p-8 shadow-cyber backdrop-blur-xl",children:D.jsxs("div",{className:"space-y-5",children:[D.jsx("p",{className:"text-slate-300",children:"Reach out through encrypted channels and futuristic UI interactions. Available for cybersecurity engagements, frontend collaborations, and high-impact security projects."}),D.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[D.jsxs("div",{className:"rounded-3xl border border-slate-700/80 bg-slate-900/70 p-5",children:[D.jsx("p",{className:"text-sm uppercase tracking-[0.25em] text-cyan-300/70",children:"WhatsApp"}),D.jsx("p",{className:"mt-2 text-lg text-white",children:"+255624667100"})]}),D.jsxs("div",{className:"rounded-3xl border border-slate-700/80 bg-slate-900/70 p-5",children:[D.jsx("p",{className:"text-sm uppercase tracking-[0.25em] text-cyan-300/70",children:"Email"}),D.jsx("p",{className:"mt-2 text-lg text-white",children:"adolphmlasani29@gmail.com"})]})]}),D.jsxs("div",{className:"rounded-3xl border border-slate-700/80 bg-slate-900/70 p-5",children:[D.jsx("p",{className:"text-sm uppercase tracking-[0.25em] text-cyan-300/70",children:"LinkedIn"}),D.jsx("p",{className:"mt-2 text-lg text-white",children:"Adolph_mlasani"})]})]})}),D.jsx("div",{className:"rounded-[2rem] border border-cyan-400/15 bg-slate-950/80 p-6 shadow-cyber backdrop-blur-xl",children:D.jsxs("form",{className:"space-y-5",onSubmit:p,children:[D.jsxs("div",{children:[D.jsx("label",{className:"mb-2 block text-sm uppercase tracking-[0.22em] text-cyan-300/80",children:"Name"}),D.jsx("input",{type:"text",name:"name",value:l.name,onChange:h,className:"w-full rounded-3xl border border-slate-700 bg-cyber-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/20",placeholder:"Your name",required:!0})]}),D.jsxs("div",{children:[D.jsx("label",{className:"mb-2 block text-sm uppercase tracking-[0.22em] text-cyan-300/80",children:"Email"}),D.jsx("input",{type:"email",name:"email",value:l.email,onChange:h,className:"w-full rounded-3xl border border-slate-700 bg-cyber-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-purple-400/60 focus:ring-2 focus:ring-purple-400/20",placeholder:"Your email",required:!0})]}),D.jsxs("div",{children:[D.jsx("label",{className:"mb-2 block text-sm uppercase tracking-[0.22em] text-cyan-300/80",children:"Message"}),D.jsx("textarea",{name:"message",value:l.message,onChange:h,rows:5,className:"w-full rounded-3xl border border-slate-700 bg-cyber-900/80 px-4 py-3 text-slate-100 outline-none transition focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/20",placeholder:"Tell me about your project",required:!0})]}),u==="success"&&D.jsx("div",{className:"rounded-3xl border border-green-400/30 bg-green-500/10 px-4 py-3 text-sm text-green-300",children:"✓ Message sent! Redirecting to WhatsApp and Email..."}),u==="error"&&D.jsx("div",{className:"rounded-3xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300",children:"✗ Please fill in all fields"}),D.jsx("button",{type:"submit",className:"inline-flex w-full items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-glow transition hover:brightness-105 disabled:opacity-50",children:"Send Message"})]})})]})]})]}),D.jsx("div",{className:"pointer-events-none fixed left-0 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/75 bg-cyan-400/20 blur-xl",style:{transform:`translate(${o.x}px, ${o.y}px)`}})]})}Md.createRoot(document.getElementById("root")).render(D.jsx(qi.StrictMode,{children:D.jsx(k4,{})}));
