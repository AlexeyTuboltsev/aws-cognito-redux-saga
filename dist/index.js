var $jscomp=$jscomp||{};$jscomp.scope={};$jscomp.ASSUME_ES5=!1;$jscomp.ASSUME_NO_NATIVE_MAP=!1;$jscomp.ASSUME_NO_NATIVE_SET=!1;$jscomp.defineProperty=$jscomp.ASSUME_ES5||"function"==typeof Object.defineProperties?Object.defineProperty:function(a,g,e){a!=Array.prototype&&a!=Object.prototype&&(a[g]=e.value)};$jscomp.getGlobal=function(a){return"undefined"!=typeof window&&window===a?a:"undefined"!=typeof global&&null!=global?global:a};$jscomp.global=$jscomp.getGlobal(this);$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};$jscomp.global.Symbol||($jscomp.global.Symbol=$jscomp.Symbol)};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(a){return $jscomp.SYMBOL_PREFIX+(a||"")+$jscomp.symbolCounter_++};
$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();var a=$jscomp.global.Symbol.iterator;a||(a=$jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&$jscomp.defineProperty(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return $jscomp.arrayIterator(this)}});$jscomp.initSymbolIterator=function(){}};$jscomp.arrayIterator=function(a){var g=0;return $jscomp.iteratorPrototype(function(){return g<a.length?{done:!1,value:a[g++]}:{done:!0}})};
$jscomp.iteratorPrototype=function(a){$jscomp.initSymbolIterator();a={next:a};a[$jscomp.global.Symbol.iterator]=function(){return this};return a};$jscomp.owns=function(a,g){return Object.prototype.hasOwnProperty.call(a,g)};$jscomp.polyfill=function(a,g,e,b){if(g){e=$jscomp.global;a=a.split(".");for(b=0;b<a.length-1;b++){var d=a[b];d in e||(e[d]={});e=e[d]}a=a[a.length-1];b=e[a];g=g(b);g!=b&&null!=g&&$jscomp.defineProperty(e,a,{configurable:!0,writable:!0,value:g})}};
$jscomp.polyfill("Object.assign",function(a){return a?a:function(a,e){for(var b=1;b<arguments.length;b++){var d=arguments[b];if(d)for(var m in d)$jscomp.owns(d,m)&&(a[m]=d[m])}return a}},"es6","es3");
(function(a,g){"object"===typeof exports&&"object"===typeof module?module.exports=g(require("aws-cognito-promises"),require("redux-saga/effects")):"function"===typeof define&&define.amd?define(["aws-cognito-promises","redux-saga/effects"],g):"object"===typeof exports?exports["aws-cognito-redux-saga"]=g(require("aws-cognito-promises"),require("redux-saga/effects")):a["aws-cognito-redux-saga"]=g(a["aws-cognito-promises"],a["redux-saga/effects"])})("undefined"!==typeof self?self:this,function(a,g){return function(a){function b(m){if(d[m])return d[m].exports;
var e=d[m]={i:m,l:!1,exports:{}};a[m].call(e.exports,e,e.exports,b);e.l=!0;return e.exports}var d={};b.m=a;b.c=d;b.d=function(a,d,e){b.o(a,d)||Object.defineProperty(a,d,{configurable:!1,enumerable:!0,get:e})};b.n=function(a){var d=a&&a.__esModule?function(){return a["default"]}:function(){return a};b.d(d,"a",d);return d};b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};b.p="";return b(b.s=3)}([function(a,b,d){Object.defineProperty(b,"__esModule",{value:!0});b.AUTH_INIT="AUTH_INIT";
b.AUTH_SET_STATE="AUTH_SET_STATE";b.AUTH_SIGN_UP="AUTH_SIGN_UP";b.AUTH_SIGN_IN="AUTH_SIGN_IN";b.AUTH_SIGN_OUT="AUTH_SIGN_OUT";b.AUTH_SIGNED_IN="AUTH_SIGNED_IN"},function(e,b){e.exports=a},function(a,b,d){Object.defineProperty(b,"__esModule",{value:!0});b.AUTH_UNKNOWN="AUTH_UNKNOWN";b.AUTH_SUCCESS="AUTH_SUCCESS";b.AUTH_FAIL="AUTH_FAIL"},function(a,b,d){a.exports=d(4)},function(a,b,d){Object.defineProperty(b,"__esModule",{value:!0});var e=d(5),g=d(1);d.n(g);var q=d(0),u=d(2),w=d(7);d.d(b,"config",function(){return g});
d.d(b,"sagas",function(){return e.a});d.d(b,"action",function(){return q});d.d(b,"state",function(){return u});d.d(b,"reducer",function(){return w})},function(a,b,d){function e(){function a(a,b){for(;;)switch(f){case 0:try{return f=3,{value:Object(h.call)(v.getSession),done:!1}}catch(z){f=1;break}case 3:try{if(void 0===b){f=4;break}f=-1;throw b;}catch(z){f=1;break}case 4:try{return c=v.config.getUser(),f=5,{value:Object(h.put)({type:l.AUTH_SET_STATE,payload:x({},y,{isSignedIn:n.AUTH_SUCCESS,isConfirmed:n.AUTH_SUCCESS,
info:c})}),done:!1}}catch(z){f=1;break}case 5:try{if(void 0===b){f=6;break}f=-1;throw b;}catch(z){f=1;break}case 6:try{f=2;break}catch(z){f=1;break}case 1:return f=7,{value:Object(h.put)({type:l.AUTH_SET_STATE,payload:x({},y,{error:{}})}),done:!1};case 7:if(void 0===b){f=8;break}f=-1;throw b;case 8:case 2:f=-1;default:return{value:void 0,done:!0}}}var f=0,c,b={next:function(c){return a(c,void 0)},throw:function(c){return a(void 0,c)},return:function(c){throw Error("Not yet implemented");}};$jscomp.initSymbolIterator();
b[Symbol.iterator]=function(){return this};return b}function g(a){function b(b,f){for(;;)switch(c){case 0:try{return c=3,{value:Object(h.call)(v.authRegister,a.payload.username,a.payload.password),done:!1}}catch(p){e=p;c=1;break}case 3:try{if(void 0===f){c=4;break}c=-1;throw f;}catch(p){e=p;c=1;break}case 4:try{return c=5,{value:Object(h.put)({type:l.AUTH_SET_STATE,payload:x({},y,{hasSignedUp:n.AUTH_SUCCESS})}),done:!1}}catch(p){e=p;c=1;break}case 5:try{if(void 0===f){c=6;break}c=-1;throw f;}catch(p){e=
p;c=1;break}case 6:try{c=2;break}catch(p){e=p;c=1;break}case 1:return d=e,c=7,{value:Object(h.put)({type:l.AUTH_SET_STATE,payload:x({},y,{error:d})}),done:!1};case 7:if(void 0===f){c=8;break}c=-1;throw f;case 8:case 2:c=-1;default:return{value:void 0,done:!0}}}var c=0,d,e,g={next:function(c){return b(c,void 0)},throw:function(c){return b(void 0,c)},return:function(c){throw Error("Not yet implemented");}};$jscomp.initSymbolIterator();g[Symbol.iterator]=function(){return this};return g}function q(){function a(a,
f){for(;;)switch(b){case 0:try{return b=3,{value:Object(h.call)(v.authSignOut),done:!1}}catch(t){d=t;b=1;break}case 3:try{if(void 0===f){b=4;break}b=-1;throw f;}catch(t){d=t;b=1;break}case 4:try{return b=5,{value:Object(h.put)({type:l.AUTH_SET_STATE,payload:{isSignedIn:n.AUTH_FAIL}}),done:!1}}catch(t){d=t;b=1;break}case 5:try{if(void 0===f){b=6;break}b=-1;throw f;}catch(t){d=t;b=1;break}case 6:try{b=2;break}catch(t){d=t;b=1;break}case 1:return c=d,b=7,{value:Object(h.put)({type:l.AUTH_SET_STATE,payload:{error:c,
isSignedIn:n.AUTH_FAIL}}),done:!1};case 7:if(void 0===f){b=8;break}b=-1;throw f;case 8:case 2:b=-1;default:return{value:void 0,done:!0}}}var b=0,c,d,e={next:function(b){return a(b,void 0)},throw:function(b){return a(void 0,b)},return:function(b){throw Error("Not yet implemented");}};$jscomp.initSymbolIterator();e[Symbol.iterator]=function(){return this};return e}function u(b){function a(a,f){for(;;)switch(c){case 0:try{q=b.payload;A=q.username;p=q.password;m=q.code;if(!m){c=3;break}c=4;return{value:Object(h.call)(v.confirmation,
A,m),done:!1}}catch(k){r=k;c=1;break}case 4:try{if(void 0===f){c=5;break}c=-1;throw f;}catch(k){r=k;c=1;break}case 5:case 3:try{return c=6,{value:Object(h.call)(v.authSignIn,A,p),done:!1}}catch(k){r=k;c=1;break}case 6:try{if(void 0===f){c=7;break}c=-1;throw f;}catch(k){r=k;c=1;break}case 7:try{return g=w=a,c=8,{value:Object(h.call)(v.getLocalUser),done:!1}}catch(k){r=k;c=1;break}case 8:try{if(void 0===f){c=9;break}c=-1;throw f;}catch(k){r=k;c=1;break}case 9:try{return g=e=a,c=10,{value:Object(h.put)({type:l.AUTH_SET_STATE,
payload:{isSignedIn:n.AUTH_SUCCESS,isConfirmed:n.AUTH_SUCCESS,info:g}}),done:!1}}catch(k){r=k;c=1;break}case 10:try{if(void 0===f){c=11;break}c=-1;throw f;}catch(k){r=k;c=1;break}case 11:try{c=2;break}catch(k){r=k;c=1;break}case 1:d=r;if("UserNotConfirmedException"!==d.code){c=12;break}c=14;return{value:Object(h.put)({type:l.AUTH_SET_STATE,payload:{isConfirmed:n.AUTH_FAIL,error:d}}),done:!1};case 14:if(void 0===f){c=15;break}c=-1;throw f;case 15:c=13;break;case 12:return c=16,{value:Object(h.put)({type:l.AUTH_SET_STATE,
payload:{isConfirmed:n.AUTH_SUCCESS,error:d}}),done:!1};case 16:if(void 0===f){c=17;break}c=-1;throw f;case 17:case 13:case 2:c=-1;default:return{value:void 0,done:!0}}}var c=0,d,e,g,w,m,p,A,q,r,u={next:function(b){return a(b,void 0)},throw:function(b){return a(void 0,b)},return:function(b){throw Error("Not yet implemented");}};$jscomp.initSymbolIterator();u[Symbol.iterator]=function(){return this};return u}function w(b){function a(b,a){for(;;)switch(c){case 0:return c=1,{value:Object(h.put)({type:l.AUTH_SET_STATE,
payload:x({},y)}),done:!1};case 1:if(void 0===a){c=2;break}c=-1;throw a;case 2:c=-1;default:return{value:void 0,done:!0}}}var c=0;b={next:function(b){return a(b,void 0)},throw:function(b){return a(void 0,b)},return:function(b){throw Error("Not yet implemented");}};$jscomp.initSymbolIterator();b[Symbol.iterator]=function(){return this};return b}b.a=function(){function b(b,c){for(;;)switch(a){case 0:return a=1,{value:Object(h.takeLatest)(l.AUTH_SIGN_UP,g),done:!1};case 1:if(void 0===c){a=2;break}a=
-1;throw c;case 2:return a=3,{value:Object(h.takeLatest)(l.AUTH_SIGN_IN,u),done:!1};case 3:if(void 0===c){a=4;break}a=-1;throw c;case 4:return a=5,{value:Object(h.takeLatest)(l.AUTH_SIGN_OUT,q),done:!1};case 5:if(void 0===c){a=6;break}a=-1;throw c;case 6:return a=7,{value:Object(h.takeLatest)(l.AUTH_SIGNED_IN,e),done:!1};case 7:if(void 0===c){a=8;break}a=-1;throw c;case 8:return a=9,{value:Object(h.takeLatest)(l.AUTH_INIT,w),done:!1};case 9:if(void 0===c){a=10;break}a=-1;throw c;case 10:a=-1;default:return{value:void 0,
done:!0}}}var a=0,c={next:function(a){return b(a,void 0)},throw:function(a){return b(void 0,a)},return:function(b){throw Error("Not yet implemented");}};$jscomp.initSymbolIterator();c[Symbol.iterator]=function(){return this};return c};var v=d(1);d.n(v);var h=d(6);d.n(h);var l=d(0),n=d(2),x=Object.assign||function(b){for(var a=1;a<arguments.length;a++){var c=arguments[a],d;for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(b[d]=c[d])}return b},y={info:{},error:{},isSignedIn:n.AUTH_UNKNOWN,isConfirmed:n.AUTH_UNKNOWN,
hasSignedUp:n.AUTH_UNKNOWN}},function(a,b){a.exports=g},function(a,b,d){Object.defineProperty(b,"__esModule",{value:!0});var e=d(0),g=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var d=arguments[b],e;for(e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};b.init=function(){return{type:e.AUTH_INIT,payload:{}}};b.signUp=function(a,b){return{type:e.AUTH_SIGN_UP,payload:{username:a,password:b}}};b.signIn=function(a,b,d){return{type:e.AUTH_SIGN_IN,payload:{username:a,
password:b,code:d}}};b.signOut=function(){return{type:e.AUTH_SIGN_OUT}};b.signedIn=function(){return{type:e.AUTH_SIGNED_IN}};a={};var q=(a[e.AUTH_SET_STATE]=function(a,b){return g({},a,b.payload)},a[e.AUTH_INIT]=function(a,b){return g({},a,b.payload)},a),u={};b.reducer=function(a,b){a=void 0===a?u:a;var d=q[b.type];return d?d(a,b):a}}])});
