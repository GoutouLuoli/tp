(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-base64"],{"02fe":function(t,r,e){"use strict";e.r(r);var n=e("6cc7"),i=e("f9f1");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(r,t,(function(){return i[t]}))}(o);e("0e92");var a=e("828b"),u=Object(a["a"])(i["default"],n["b"],n["c"],!1,null,"68ba405c",null,!1,n["a"],void 0);r["default"]=u.exports},"0e92":function(t,r,e){"use strict";var n=e("7ae1"),i=e.n(n);i.a},"10ab":function(t,r,e){"use strict";r.byteLength=function(t){var r=f(t),e=r[0],n=r[1];return 3*(e+n)/4-n},r.toByteArray=function(t){var r,e,n=f(t),a=n[0],u=n[1],s=new o(function(t,r,e){return 3*(r+e)/4-e}(0,a,u)),c=0,h=u>0?a-4:a;for(e=0;e<h;e+=4)r=i[t.charCodeAt(e)]<<18|i[t.charCodeAt(e+1)]<<12|i[t.charCodeAt(e+2)]<<6|i[t.charCodeAt(e+3)],s[c++]=r>>16&255,s[c++]=r>>8&255,s[c++]=255&r;2===u&&(r=i[t.charCodeAt(e)]<<2|i[t.charCodeAt(e+1)]>>4,s[c++]=255&r);1===u&&(r=i[t.charCodeAt(e)]<<10|i[t.charCodeAt(e+1)]<<4|i[t.charCodeAt(e+2)]>>2,s[c++]=r>>8&255,s[c++]=255&r);return s},r.fromByteArray=function(t){for(var r,e=t.length,i=e%3,o=[],a=0,u=e-i;a<u;a+=16383)o.push(h(t,a,a+16383>u?u:a+16383));1===i?(r=t[e-1],o.push(n[r>>2]+n[r<<4&63]+"==")):2===i&&(r=(t[e-2]<<8)+t[e-1],o.push(n[r>>10]+n[r>>4&63]+n[r<<2&63]+"="));return o.join("")};for(var n=[],i=[],o="undefined"!==typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,s=a.length;u<s;++u)n[u]=a[u],i[a.charCodeAt(u)]=u;function f(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");-1===e&&(e=r);var n=e===r?0:4-e%4;return[e,n]}function c(t){return n[t>>18&63]+n[t>>12&63]+n[t>>6&63]+n[63&t]}function h(t,r,e){for(var n,i=[],o=r;o<e;o+=3)n=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),i.push(c(n));return i.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},"12e3":function(t,r,e){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
var n=e("10ab"),i=e("ba37"),o=e("b0e4");function a(){return s.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function u(t,r){if(a()<r)throw new RangeError("Invalid typed array length");return s.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r),t.__proto__=s.prototype):(null===t&&(t=new s(r)),t.length=r),t}function s(t,r,e){if(!s.TYPED_ARRAY_SUPPORT&&!(this instanceof s))return new s(t,r,e);if("number"===typeof t){if("string"===typeof r)throw new Error("If encoding is specified then the first argument must be a string");return h(this,t)}return f(this,t,r,e)}function f(t,r,e,n){if("number"===typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!==typeof ArrayBuffer&&r instanceof ArrayBuffer?function(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n);s.TYPED_ARRAY_SUPPORT?(t=r,t.__proto__=s.prototype):t=l(t,r);return t}(t,r,e,n):"string"===typeof r?function(t,r,e){"string"===typeof e&&""!==e||(e="utf8");if(!s.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|d(r,e);t=u(t,n);var i=t.write(r,e);i!==n&&(t=t.slice(0,i));return t}(t,r,e):function(t,r){if(s.isBuffer(r)){var e=0|p(r.length);return t=u(t,e),0===t.length?t:(r.copy(t,0,0,e),t)}if(r){if("undefined"!==typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!==typeof r.length||function(t){return t!==t}(r.length)?u(t,0):l(t,r);if("Buffer"===r.type&&o(r.data))return l(t,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}function c(t){if("number"!==typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function h(t,r){if(c(r),t=u(t,r<0?0:0|p(r)),!s.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function l(t,r){var e=r.length<0?0:0|p(r.length);t=u(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function p(t){if(t>=a())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a().toString(16)+" bytes");return 0|t}function d(t,r){if(s.isBuffer(t))return t.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!==typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return F(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return N(t).length;default:if(n)return F(t).length;r=(""+r).toLowerCase(),n=!0}}function g(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if(e>>>=0,r>>>=0,e<=r)return"";t||(t="utf8");while(1)switch(t){case"hex":return T(this,r,e);case"utf8":case"utf-8":return U(this,r,e);case"ascii":return x(this,r,e);case"latin1":case"binary":return P(this,r,e);case"base64":return B(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return C(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function v(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function y(t,r,e,n,i){if(0===t.length)return-1;if("string"===typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"===typeof r&&(r=s.from(r,n)),s.isBuffer(r))return 0===r.length?-1:w(t,r,e,n,i);if("number"===typeof r)return r&=255,s.TYPED_ARRAY_SUPPORT&&"function"===typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):w(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function w(t,r,e,n,i){var o,a=1,u=t.length,s=r.length;if(void 0!==n&&(n=String(n).toLowerCase(),"ucs2"===n||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;a=2,u/=2,s/=2,e/=2}function f(t,r){return 1===a?t[r]:t.readUInt16BE(r*a)}if(i){var c=-1;for(o=e;o<u;o++)if(f(t,o)===f(r,-1===c?0:o-c)){if(-1===c&&(c=o),o-c+1===s)return c*a}else-1!==c&&(o-=o-c),c=-1}else for(e+s>u&&(e=u-s),o=e;o>=0;o--){for(var h=!0,l=0;l<s;l++)if(f(t,o+l)!==f(r,l)){h=!1;break}if(h)return o}return-1}function b(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n),n>i&&(n=i)):n=i;var o=r.length;if(o%2!==0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var a=0;a<n;++a){var u=parseInt(r.substr(2*a,2),16);if(isNaN(u))return a;t[e+a]=u}return a}function A(t,r,e,n){return V(F(r,t.length-e),t,e,n)}function m(t,r,e,n){return V(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function E(t,r,e,n){return m(t,r,e,n)}function _(t,r,e,n){return V(N(r),t,e,n)}function R(t,r,e,n){return V(function(t,r){for(var e,n,i,o=[],a=0;a<t.length;++a){if((r-=2)<0)break;e=t.charCodeAt(a),n=e>>8,i=e%256,o.push(i),o.push(n)}return o}(r,t.length-e),t,e,n)}function B(t,r,e){return 0===r&&e===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(r,e))}function U(t,r,e){e=Math.min(t.length,e);var n=[],i=r;while(i<e){var o,a,u,s,f=t[i],c=null,h=f>239?4:f>223?3:f>191?2:1;if(i+h<=e)switch(h){case 1:f<128&&(c=f);break;case 2:o=t[i+1],128===(192&o)&&(s=(31&f)<<6|63&o,s>127&&(c=s));break;case 3:o=t[i+1],a=t[i+2],128===(192&o)&&128===(192&a)&&(s=(15&f)<<12|(63&o)<<6|63&a,s>2047&&(s<55296||s>57343)&&(c=s));break;case 4:o=t[i+1],a=t[i+2],u=t[i+3],128===(192&o)&&128===(192&a)&&128===(192&u)&&(s=(15&f)<<18|(63&o)<<12|(63&a)<<6|63&u,s>65535&&s<1114112&&(c=s))}null===c?(c=65533,h=1):c>65535&&(c-=65536,n.push(c>>>10&1023|55296),c=56320|1023&c),n.push(c),i+=h}return function(t){var r=t.length;if(r<=4096)return String.fromCharCode.apply(String,t);var e="",n=0;while(n<r)e+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return e}(n)}r.Buffer=s,r.SlowBuffer=function(t){+t!=t&&(t=0);return s.alloc(+t)},r.INSPECT_MAX_BYTES=50,s.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"===typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(r){return!1}}(),r.kMaxLength=a(),s.poolSize=8192,s._augment=function(t){return t.__proto__=s.prototype,t},s.from=function(t,r,e){return f(null,t,r,e)},s.TYPED_ARRAY_SUPPORT&&(s.prototype.__proto__=Uint8Array.prototype,s.__proto__=Uint8Array,"undefined"!==typeof Symbol&&Symbol.species&&s[Symbol.species]===s&&Object.defineProperty(s,Symbol.species,{value:null,configurable:!0})),s.alloc=function(t,r,e){return function(t,r,e,n){return c(r),r<=0?u(t,r):void 0!==e?"string"===typeof n?u(t,r).fill(e,n):u(t,r).fill(e):u(t,r)}(null,t,r,e)},s.allocUnsafe=function(t){return h(null,t)},s.allocUnsafeSlow=function(t){return h(null,t)},s.isBuffer=function(t){return!(null==t||!t._isBuffer)},s.compare=function(t,r){if(!s.isBuffer(t)||!s.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},s.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(t,r){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return s.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=s.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var a=t[e];if(!s.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(n,i),i+=a.length}return n},s.byteLength=d,s.prototype._isBuffer=!0,s.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)v(this,r,r+1);return this},s.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)v(this,r,r+3),v(this,r+1,r+2);return this},s.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)v(this,r,r+7),v(this,r+1,r+6),v(this,r+2,r+5),v(this,r+3,r+4);return this},s.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?U(this,0,t):g.apply(this,arguments)},s.prototype.equals=function(t){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===s.compare(this,t)},s.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},s.prototype.compare=function(t,r,e,n,i){if(!s.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(r>>>=0,e>>>=0,n>>>=0,i>>>=0,this===t)return 0;for(var o=i-n,a=e-r,u=Math.min(o,a),f=this.slice(n,i),c=t.slice(r,e),h=0;h<u;++h)if(f[h]!==c[h]){o=f[h],a=c[h];break}return o<a?-1:a<o?1:0},s.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},s.prototype.indexOf=function(t,r,e){return y(this,t,r,e,!0)},s.prototype.lastIndexOf=function(t,r,e){return y(this,t,r,e,!1)},s.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"===typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return b(this,t,r,e);case"utf8":case"utf-8":return A(this,t,r,e);case"ascii":return m(this,t,r,e);case"latin1":case"binary":return E(this,t,r,e);case"base64":return _(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function x(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function P(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function T(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=z(t[o]);return i}function C(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function S(t,r,e){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function I(t,r,e,n,i,o){if(!s.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function Y(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function M(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function O(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function k(t,r,e,n,o){return o||O(t,0,e,4),i.write(t,r,e,n,23,4),e+4}function L(t,r,e,n,o){return o||O(t,0,e,8),i.write(t,r,e,n,52,8),e+8}s.prototype.slice=function(t,r){var e,n=this.length;if(t=~~t,r=void 0===r?n:~~r,t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),r<0?(r+=n,r<0&&(r=0)):r>n&&(r=n),r<t&&(r=t),s.TYPED_ARRAY_SUPPORT)e=this.subarray(t,r),e.__proto__=s.prototype;else{var i=r-t;e=new s(i,void 0);for(var o=0;o<i;++o)e[o]=this[o+t]}return e},s.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||S(t,r,this.length);var n=this[t],i=1,o=0;while(++o<r&&(i*=256))n+=this[t+o]*i;return n},s.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||S(t,r,this.length);var n=this[t+--r],i=1;while(r>0&&(i*=256))n+=this[t+--r]*i;return n},s.prototype.readUInt8=function(t,r){return r||S(t,1,this.length),this[t]},s.prototype.readUInt16LE=function(t,r){return r||S(t,2,this.length),this[t]|this[t+1]<<8},s.prototype.readUInt16BE=function(t,r){return r||S(t,2,this.length),this[t]<<8|this[t+1]},s.prototype.readUInt32LE=function(t,r){return r||S(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},s.prototype.readUInt32BE=function(t,r){return r||S(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},s.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||S(t,r,this.length);var n=this[t],i=1,o=0;while(++o<r&&(i*=256))n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*r)),n},s.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||S(t,r,this.length);var n=r,i=1,o=this[t+--n];while(n>0&&(i*=256))o+=this[t+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*r)),o},s.prototype.readInt8=function(t,r){return r||S(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},s.prototype.readInt16LE=function(t,r){r||S(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},s.prototype.readInt16BE=function(t,r){r||S(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},s.prototype.readInt32LE=function(t,r){return r||S(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},s.prototype.readInt32BE=function(t,r){return r||S(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},s.prototype.readFloatLE=function(t,r){return r||S(t,4,this.length),i.read(this,t,!0,23,4)},s.prototype.readFloatBE=function(t,r){return r||S(t,4,this.length),i.read(this,t,!1,23,4)},s.prototype.readDoubleLE=function(t,r){return r||S(t,8,this.length),i.read(this,t,!0,52,8)},s.prototype.readDoubleBE=function(t,r){return r||S(t,8,this.length),i.read(this,t,!1,52,8)},s.prototype.writeUIntLE=function(t,r,e,n){if(t=+t,r|=0,e|=0,!n){var i=Math.pow(2,8*e)-1;I(this,t,r,e,i,0)}var o=1,a=0;this[r]=255&t;while(++a<e&&(o*=256))this[r+a]=t/o&255;return r+e},s.prototype.writeUIntBE=function(t,r,e,n){if(t=+t,r|=0,e|=0,!n){var i=Math.pow(2,8*e)-1;I(this,t,r,e,i,0)}var o=e-1,a=1;this[r+o]=255&t;while(--o>=0&&(a*=256))this[r+o]=t/a&255;return r+e},s.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||I(this,t,r,1,255,0),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},s.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||I(this,t,r,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):Y(this,t,r,!0),r+2},s.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||I(this,t,r,2,65535,0),s.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):Y(this,t,r,!1),r+2},s.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||I(this,t,r,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):M(this,t,r,!0),r+4},s.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||I(this,t,r,4,4294967295,0),s.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):M(this,t,r,!1),r+4},s.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);I(this,t,r,e,i-1,-i)}var o=0,a=1,u=0;this[r]=255&t;while(++o<e&&(a*=256))t<0&&0===u&&0!==this[r+o-1]&&(u=1),this[r+o]=(t/a>>0)-u&255;return r+e},s.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);I(this,t,r,e,i-1,-i)}var o=e-1,a=1,u=0;this[r+o]=255&t;while(--o>=0&&(a*=256))t<0&&0===u&&0!==this[r+o+1]&&(u=1),this[r+o]=(t/a>>0)-u&255;return r+e},s.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||I(this,t,r,1,127,-128),s.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},s.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||I(this,t,r,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):Y(this,t,r,!0),r+2},s.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||I(this,t,r,2,32767,-32768),s.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):Y(this,t,r,!1),r+2},s.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||I(this,t,r,4,2147483647,-2147483648),s.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):M(this,t,r,!0),r+4},s.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||I(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),s.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):M(this,t,r,!1),r+4},s.prototype.writeFloatLE=function(t,r,e){return k(this,t,r,!0,e)},s.prototype.writeFloatBE=function(t,r,e){return k(this,t,r,!1,e)},s.prototype.writeDoubleLE=function(t,r,e){return L(this,t,r,!0,e)},s.prototype.writeDoubleBE=function(t,r,e){return L(this,t,r,!1,e)},s.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!s.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},s.prototype.fill=function(t,r,e,n){if("string"===typeof t){if("string"===typeof r?(n=r,r=0,e=this.length):"string"===typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!==typeof n)throw new TypeError("encoding must be a string");if("string"===typeof n&&!s.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"===typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"===typeof t)for(o=r;o<e;++o)this[o]=t;else{var a=s.isBuffer(t)?t:F(new s(t,n).toString()),u=a.length;for(o=0;o<e-r;++o)this[o+r]=a[o%u]}return this};var D=/[^+\/0-9A-Za-z-_]/g;function z(t){return t<16?"0"+t.toString(16):t.toString(16)}function F(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],a=0;a<n;++a){if(e=t.charCodeAt(a),e>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(a+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function N(t){return n.toByteArray(function(t){if(t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(D,""),t.length<2)return"";while(t.length%4!==0)t+="=";return t}(t))}function V(t,r,e,n){for(var i=0;i<n;++i){if(i+e>=r.length||i>=t.length)break;r[i+e]=t[i]}return i}}).call(this,e("0ee4"))},1878:function(t,r,e){"use strict";var n=e("9839"),i=e("7ddb").exportTypedArrayStaticMethod,o=e("b32e");i("from",o,n)},"642a":function(t,r,e){var n=e("c86c");r=n(!1),r.push([t.i,".container > .header[data-v-68ba405c]{background-color:#f6f6f6;display:flex;justify-content:space-between;align-items:center;padding:%?30?%}.container > .header .tool[data-v-68ba405c]{font-size:%?38?%}.container > .header .desc[data-v-68ba405c]{font-size:%?20?%}.container .computed-wrapper[data-v-68ba405c]{background-color:#3d4457;padding:%?40?% %?16?%}.container .computed-wrapper .input-area[data-v-68ba405c]{background-color:#f6f6f6;padding:%?16?%}.container .computed-wrapper .input-area .header[data-v-68ba405c]{font-size:%?28?%;display:flex;justify-content:space-between}.container .computed-wrapper .input-area .header .clear[data-v-68ba405c]{font-size:%?30?%;color:red;background-color:#fff;padding:%?6?% %?30?%;border-radius:%?12?%}.container .computed-wrapper .input-area .input-textarea[data-v-68ba405c]{margin:%?20?% 0;width:100%;padding:%?20?%;box-sizing:border-box;color:#fff;background-color:#bdc2cd}.container .computed-wrapper .input-area .btns[data-v-68ba405c]{display:flex}.container .computed-wrapper .input-area .btns uni-button[data-v-68ba405c]{display:inline-block;margin:0 %?10?% 0 0;font-size:%?28?%;padding:%?0?% %?40?%;color:#fff;background-color:#2a92d4}.container .computed-wrapper .result-area[data-v-68ba405c]{background-color:#f6f6f6;padding:%?16?%;margin-top:%?60?%}.container .computed-wrapper .result-area .header[data-v-68ba405c]{font-size:%?28?%;display:flex;justify-content:space-between}.container .computed-wrapper .result-area .header .copy[data-v-68ba405c]{color:#fff;background-color:#0fc4f3;padding:%?6?% %?30?%;border-radius:%?12?%;font-size:%?30?%}.container .computed-wrapper .result-area .input-textarea[data-v-68ba405c]{margin:%?20?% 0;width:100%;padding:%?20?%;box-sizing:border-box;color:#fff;background-color:#bdc2cd}.container .computed-wrapper .algorithm-introduction[data-v-68ba405c]{background-color:#f6f6f6;display:flex;justify-content:center;flex-direction:column;padding:%?20?%;margin-top:%?70?%;font-size:%?34?%;text-align:center}.container .computed-wrapper .algorithm-introduction .desc[data-v-68ba405c]{background:#f6f6f6;padding:10px;text-align:left;font-size:%?30?%}",""]),t.exports=r},"6cc7":function(t,r,e){"use strict";e.d(r,"b",(function(){return n})),e.d(r,"c",(function(){return i})),e.d(r,"a",(function(){}));var n=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"header"},[e("v-uni-view",{staticClass:"tool"},[t._v("Base64")]),e("v-uni-view",{staticClass:"desc"},[e("v-uni-view",[t._v("您的数据不会外泄")]),e("v-uni-view",[t._v("计算过程完全在本机运行")])],1)],1),e("v-uni-view",{staticClass:"computed-wrapper"},[e("v-uni-view",{staticClass:"input-area"},[e("v-uni-view",{staticClass:"header"},[e("v-uni-view",{staticClass:"context"},[t._v("请输入文本数据")]),e("v-uni-view",{staticClass:"clear",on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.cleanInput.apply(void 0,arguments)}}},[t._v("清空")])],1),e("v-uni-textarea",{staticClass:"input-textarea",attrs:{maxlength:"-1"},model:{value:t.base64Value,callback:function(r){t.base64Value=r},expression:"base64Value"}}),e("v-uni-view",{staticClass:"btns"},[e("v-uni-button",{on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.decodeBase64.apply(void 0,arguments)}}},[t._v("解码")]),e("v-uni-button",{on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.encodeBase64.apply(void 0,arguments)}}},[t._v("编码")])],1)],1),e("v-uni-view",{staticClass:"result-area"},[e("v-uni-view",{staticClass:"header"},[e("v-uni-view",{staticClass:"context"},[t._v("加密结果")]),e("v-uni-view",{staticClass:"copy",attrs:{"data-clipboard-target":"#tool-result"},on:{click:function(r){arguments[0]=r=t.$handleEvent(r),t.copyResult.apply(void 0,arguments)}}},[t._v("复制")])],1),e("v-uni-textarea",{staticClass:"input-textarea",attrs:{disabled:!0,maxlength:"-1"},model:{value:t.result,callback:function(r){t.result=r},expression:"result"}})],1),e("v-uni-view",{staticClass:"algorithm-introduction"},[e("v-uni-view",[t._v("算法介绍")]),e("v-uni-view",{staticClass:"desc"},[t._v("Base64是网络上最常见的用于传输8Bit字节码的编码方式之一，Base64就是一种基于64个可打印字符来表示二进制数据的方法。 可查看RFC2045～RFC2049，上面有MIME的详细规范。 Base64编码是从二进制到字符的过程，可用于在HTTP环境下传递较长的标识信息。")])],1)],1)],1)},i=[]},7266:function(t,r,e){"use strict";(function(t){Object.defineProperty(r,"__esModule",{value:!0}),r.version=r.utob=r.toUint8Array=r.toBase64=r.isValid=r.fromUint8Array=r.fromBase64=r.extendUint8Array=r.extendString=r.extendBuiltins=r.encodeURL=r.encodeURI=r.encode=r.decode=r.btou=r.btoaPolyfill=r.btoa=r.atobPolyfill=r.atob=r.VERSION=r.Base64=void 0,e("c9b5"),e("15d1"),e("d5c6"),e("5a56"),e("f074"),e("f7a5"),e("bf0f"),e("2797"),e("1878"),e("4db2"),e("c976"),e("4d8f"),e("7b97"),e("668a"),e("c5b7"),e("8ff5"),e("2378"),e("641a"),e("64e0"),e("cce3"),e("efba"),e("d009"),e("bd7d"),e("7edd"),e("d798"),e("f547"),e("5e54"),e("b60a"),e("8c18"),e("12973"),e("f991"),e("198e"),e("8557"),e("63b1"),e("1954"),e("1cf1"),e("5c47"),e("a1c1"),e("7a76"),e("ab80"),e("aa9c"),e("0506"),e("fd3c"),e("6a54");r.version="3.7.5";r.VERSION="3.7.5";var n="function"===typeof atob,i="function"===typeof btoa,o="function"===typeof t,a="function"===typeof TextDecoder?new TextDecoder:void 0,u="function"===typeof TextEncoder?new TextEncoder:void 0,s=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),f=function(t){var r={};return t.forEach((function(t,e){return r[t]=e})),r}(s),c=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,h=String.fromCharCode.bind(String),l="function"===typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):function(t){return new Uint8Array(Array.prototype.slice.call(t,0))},p=function(t){return t.replace(/=/g,"").replace(/[+\/]/g,(function(t){return"+"==t?"-":"_"}))},d=function(t){return t.replace(/[^A-Za-z0-9\+\/]/g,"")},g=function(t){for(var r,e,n,i,o="",a=t.length%3,u=0;u<t.length;){if((e=t.charCodeAt(u++))>255||(n=t.charCodeAt(u++))>255||(i=t.charCodeAt(u++))>255)throw new TypeError("invalid character found");r=e<<16|n<<8|i,o+=s[r>>18&63]+s[r>>12&63]+s[r>>6&63]+s[63&r]}return a?o.slice(0,a-3)+"===".substring(a):o};r.btoaPolyfill=g;var v=i?function(t){return btoa(t)}:o?function(r){return t.from(r,"binary").toString("base64")}:g;r.btoa=v;var y=o?function(r){return t.from(r).toString("base64")}:function(t){for(var r=[],e=0,n=t.length;e<n;e+=4096)r.push(h.apply(null,t.subarray(e,e+4096)));return v(r.join(""))},w=function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r?p(y(t)):y(t)};r.fromUint8Array=w;var b=function(t){if(t.length<2){var r=t.charCodeAt(0);return r<128?t:r<2048?h(192|r>>>6)+h(128|63&r):h(224|r>>>12&15)+h(128|r>>>6&63)+h(128|63&r)}r=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return h(240|r>>>18&7)+h(128|r>>>12&63)+h(128|r>>>6&63)+h(128|63&r)},A=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,m=function(t){return t.replace(A,b)};r.utob=m;var E=o?function(r){return t.from(r,"utf8").toString("base64")}:u?function(t){return y(u.encode(t))}:function(t){return v(m(t))},_=function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return r?p(E(t)):E(t)};r.encode=r.toBase64=_;var R=function(t){return _(t,!0)};r.encodeURL=r.encodeURI=R;var B=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,U=function(t){switch(t.length){case 4:var r=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),e=r-65536;return h(55296+(e>>>10))+h(56320+(1023&e));case 3:return h((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return h((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},x=function(t){return t.replace(B,U)};r.btou=x;var P=function(t){if(t=t.replace(/\s+/g,""),!c.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(3&t.length));for(var r,e,n,i="",o=0;o<t.length;)r=f[t.charAt(o++)]<<18|f[t.charAt(o++)]<<12|(e=f[t.charAt(o++)])<<6|(n=f[t.charAt(o++)]),i+=64===e?h(r>>16&255):64===n?h(r>>16&255,r>>8&255):h(r>>16&255,r>>8&255,255&r);return i};r.atobPolyfill=P;var T=n?function(t){return atob(d(t))}:o?function(r){return t.from(r,"base64").toString("binary")}:P;r.atob=T;var C=o?function(r){return l(t.from(r,"base64"))}:function(t){return l(T(t).split("").map((function(t){return t.charCodeAt(0)})))},S=function(t){return C(Y(t))};r.toUint8Array=S;var I=o?function(r){return t.from(r,"base64").toString("utf8")}:a?function(t){return a.decode(C(t))}:function(t){return x(T(t))},Y=function(t){return d(t.replace(/[-_]/g,(function(t){return"-"==t?"+":"/"})))},M=function(t){return I(Y(t))};r.decode=r.fromBase64=M;var O=function(t){if("string"!==typeof t)return!1;var r=t.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(r)||!/[^\s0-9a-zA-Z\-_]/.test(r)};r.isValid=O;var k=function(t){return{value:t,enumerable:!1,writable:!0,configurable:!0}},L=function(){var t=function(t,r){return Object.defineProperty(String.prototype,t,k(r))};t("fromBase64",(function(){return M(this)})),t("toBase64",(function(t){return _(this,t)})),t("toBase64URI",(function(){return _(this,!0)})),t("toBase64URL",(function(){return _(this,!0)})),t("toUint8Array",(function(){return S(this)}))};r.extendString=L;var D=function(){var t=function(t,r){return Object.defineProperty(Uint8Array.prototype,t,k(r))};t("toBase64",(function(t){return w(this,t)})),t("toBase64URI",(function(){return w(this,!0)})),t("toBase64URL",(function(){return w(this,!0)}))};r.extendUint8Array=D;var z=function(){L(),D()};r.extendBuiltins=z;var F={version:"3.7.5",VERSION:"3.7.5",atob:T,atobPolyfill:P,btoa:v,btoaPolyfill:g,fromBase64:M,toBase64:_,encode:_,encodeURI:R,encodeURL:R,utob:m,btou:x,decode:M,isValid:O,fromUint8Array:w,toUint8Array:S,extendString:L,extendUint8Array:D,extendBuiltins:z};r.Base64=F}).call(this,e("12e3").Buffer)},"7ae1":function(t,r,e){var n=e("642a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("967d").default;i("51c7b13e",n,!0,{sourceMap:!1,shadowMode:!1})},8576:function(t,r,e){"use strict";e("6a54"),Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var n=e("7266"),i={data:function(){return{base64Value:"",result:""}},onShareAppMessage:function(){qq.showShareMenu({showShareItems:["qq","qzone","wechatFriends","wechatMoment"]})},methods:{decodeBase64:function(){if(""!==this.base64Value)try{this.result=n.Base64.decode(this.base64Value)}catch(t){alert("error: "+t.message)}else uni.showToast({title:"请输入需解码的文本",icon:"none"})},encodeBase64:function(){if(""!==this.base64Value)try{this.result=n.Base64.encode(this.base64Value)}catch(t){alert("error: "+t.message)}else uni.showToast({title:"请输入需编码的文本",icon:"none"})},cleanInput:function(){this.base64Value=""},copyResult:function(){var t=this;uni.setClipboardData({data:this.result,success:function(){console.log("success",t.result)}})}}};r.default=i},b0e4:function(t,r){var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}},ba37:function(t,r){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
r.read=function(t,r,e,n,i){var o,a,u=8*i-n-1,s=(1<<u)-1,f=s>>1,c=-7,h=e?i-1:0,l=e?-1:1,p=t[r+h];for(h+=l,o=p&(1<<-c)-1,p>>=-c,c+=u;c>0;o=256*o+t[r+h],h+=l,c-=8);for(a=o&(1<<-c)-1,o>>=-c,c+=n;c>0;a=256*a+t[r+h],h+=l,c-=8);if(0===o)o=1-f;else{if(o===s)return a?NaN:1/0*(p?-1:1);a+=Math.pow(2,n),o-=f}return(p?-1:1)*a*Math.pow(2,o-n)},r.write=function(t,r,e,n,i,o){var a,u,s,f=8*o-i-1,c=(1<<f)-1,h=c>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,d=n?1:-1,g=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,a=c):(a=Math.floor(Math.log(r)/Math.LN2),r*(s=Math.pow(2,-a))<1&&(a--,s*=2),r+=a+h>=1?l/s:l*Math.pow(2,1-h),r*s>=2&&(a++,s/=2),a+h>=c?(u=0,a=c):a+h>=1?(u=(r*s-1)*Math.pow(2,i),a+=h):(u=r*Math.pow(2,h-1)*Math.pow(2,i),a=0));i>=8;t[e+p]=255&u,p+=d,u/=256,i-=8);for(a=a<<i|u,f+=i;f>0;t[e+p]=255&a,p+=d,a/=256,f-=8);t[e+p-d]|=128*g}},f9f1:function(t,r,e){"use strict";e.r(r);var n=e("8576"),i=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(r,t,(function(){return n[t]}))}(o);r["default"]=i.a}}]);