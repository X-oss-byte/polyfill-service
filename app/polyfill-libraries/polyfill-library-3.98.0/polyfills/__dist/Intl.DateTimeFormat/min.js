!function(e){"function"==typeof define&&define.amd?define(e):e()}(function(){"use strict";function e(e,a){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&a.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)a.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(r[t[n]]=e[t[n]]);return r}function a(e,a,r){var t=r.value;Object.defineProperty(e,a,{configurable:!0,enumerable:!1,writable:!0,value:t})}function r(e,a,r){if(void 0===r&&(r=Error),!e)throw new r(a)}function t(e,a){var r=e.length;switch(e[0]){case"G":return a.era=4===r?"long":5===r?"narrow":"short","{era}";case"y":case"Y":case"u":case"U":case"r":return a.year=2===r?"2-digit":"numeric","{year}";case"q":case"Q":throw new RangeError("`w/Q` (quarter) patterns are not supported");case"M":case"L":return a.month=["numeric","2-digit","short","long","narrow"][r-1],"{month}";case"w":case"W":throw new RangeError("`w/W` (week of year) patterns are not supported");case"d":return a.day=["numeric","2-digit"][r-1],"{day}";case"D":case"F":case"g":return a.day="numeric","{day}";case"E":return a.weekday=4===r?"long":5===r?"narrow":"short","{weekday}";case"e":return a.weekday=["numeric","2-digit","short","long","narrow","short"][r-1],"{weekday}";case"c":return a.weekday=["numeric",undefined,"short","long","narrow","short"][r-1],"{weekday}";case"a":case"b":case"B":return a.hour12=!0,"{ampm}";case"h":return a.hour=["numeric","2-digit"][r-1],a.hour12=!0,"{hour}";case"H":return a.hour=["numeric","2-digit"][r-1],"{hour}";case"K":return a.hour=["numeric","2-digit"][r-1],a.hour12=!0,"{hour}";case"k":return a.hour=["numeric","2-digit"][r-1],"{hour}";case"j":case"J":case"C":throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");case"m":return a.minute=["numeric","2-digit"][r-1],"{minute}";case"s":return a.second=["numeric","2-digit"][r-1],"{second}";case"S":case"A":return a.second="numeric","{second}";case"z":case"Z":case"O":case"v":case"V":case"X":case"x":return a.timeZoneName=r<4?"short":"long","{timeZoneName}"}return""}function n(e){switch(e){case"G":return"era";case"y":case"Y":case"u":case"U":case"r":return"year";case"M":case"L":return"month";case"d":case"D":case"F":case"g":return"day";case"a":case"b":case"B":return"ampm";case"h":case"H":case"K":case"k":return"hour";case"m":return"minute";case"s":case"S":case"A":return"second";default:throw new RangeError("Invalid range pattern token")}}function i(e,a){var r=[],n=e.replace(/'{2}/g,"{apostrophe}").replace(/'(.*?)'/g,function(e,a){return r.push(a),"$$"+(r.length-1)+"$$"}).replace(Ce,function(e){return t(e,a||{})});return r.length&&(n=n.replace(/\$\$(\d+)\$\$/g,function(e,a){return r[+a]}).replace(/\{apostrophe\}/g,"'")),[n.replace(/([\s\uFEFF\xA0])\{ampm\}([\s\uFEFF\xA0])/,"$1").replace("{ampm}","").replace(Ee,""),n]}function o(e,a,r,o){void 0===a&&(a=e);var c={pattern:"",pattern12:"",skeleton:e,rawPattern:a,rangePatterns:{},rangePatterns12:{}};if(r)for(var s in r){var f=n(s),d=r[s],m={patternParts:[]},h=i(d,m),g=h[0],p=h[1];c.rangePatterns[f]=pe(pe({},m),{patternParts:l(g)}),c.rangePatterns12[f]=pe(pe({},m),{patternParts:l(p)})}else if(o){var v=u(o);c.rangePatterns["default"]={patternParts:v},c.rangePatterns12["default"]={patternParts:v}}e.replace(Ce,function(e){return t(e,c)});var y=i(a),A=y[0],b=y[1];return c.pattern=A,c.pattern12=b,c}function u(e){return e.split(/(\{[0|1]\})/g).filter(Boolean).map(function(e){switch(e){case"{0}":return{source:"startRange",pattern:e};case"{1}":return{source:"endRange",pattern:e};default:return{source:"shared",pattern:e}}})}function l(e){for(var a,r=/\{(.*?)\}/g,t={},n=0;a=r.exec(e);){if(a[0]in t){n=a.index;break}t[a[0]]=a.index}return n?[{source:"startRange",pattern:e.slice(0,n)},{source:"endRange",pattern:e.slice(n)}]:[{source:"startRange",pattern:e}]}function c(e){return"numeric"===e||"2-digit"===e}function s(e,a){var r=0;e.hour12&&!a.hour12?r-=Ae:!e.hour12&&a.hour12&&(r-=be);for(var t=0,n=ye;t<n.length;t++){var i=n[t],o=e[i],u=a[i];if(o===undefined&&u!==undefined)r-=be;else if(o!==undefined&&u===undefined)r-=Ae;else if(o!==u)if(c(o)!==c(u))r-=we;else{var l=["2-digit","numeric","narrow","short","long"],s=l.indexOf(o),f=l.indexOf(u),d=Math.max(-2,Math.min(f-s,2));2===d?r-=De:1===d?r-=ke:-1===d?r-=Te:-2===d&&(r-=Se)}}return r}function f(e,a){var t=-Infinity,n=a[0];r(Array.isArray(a),"formats should be a list of things");for(var o=0,u=a;o<u.length;o++){var l=u[o],f=s(e,l);f>t&&(t=f,n=l)}var d=pe({},n),m={rawPattern:n.rawPattern};i(n.rawPattern,m);for(var h in d){var g=d[h],p=m[h],v=e[h];"minute"!==h&&"second"!==h&&(v&&(c(p)&&!c(v)||g!==v&&(m[h]=v)))}return m.pattern=d.pattern,m.pattern12=d.pattern12,m.skeleton=d.skeleton,m.rangePatterns=d.rangePatterns,m.rangePatterns12=d.rangePatterns12,m}function d(e){return Intl.getCanonicalLocales(e)}function m(e,a){var r=a.tzData,t=a.uppercaseLinks,n=e.toUpperCase(),i=Object.keys(r).reduce(function(e,a){return e[a.toUpperCase()]=a,e},{}),o=t[n]||i[n];return"Etc/UTC"===o||"Etc/GMT"===o?"UTC":o}function h(e,a){var t=-Infinity,n=a[0];r(Array.isArray(a),"formats should be a list of things");for(var i=0,o=a;i<o.length;i++){for(var u=o[i],l=0,c=0,s=ye;c<s.length;c++){var f=s[c],d=e[f],m=u[f];if(d===undefined&&m!==undefined)l-=be;else if(d!==undefined&&m===undefined)l-=Ae;else if(d!==m){var h=["2-digit","numeric","narrow","short","long"],g=h.indexOf(d),p=h.indexOf(m),v=Math.max(-2,Math.min(p-g,2));2===v?l-=De:1===v?l-=ke:-1===v?l-=Te:-2===v&&(l-=Se)}}l>t&&(t=l,n=u)}return pe({},n)}function g(e,a,t){var n,i;if(a!==undefined&&(r("full"===a||"long"===a||"medium"===a||"short"===a,"invalid timeStyle"),i=t.timeFormat[a]),e!==undefined&&(r("full"===e||"long"===e||"medium"===e||"short"===e,"invalid dateStyle"),n=t.dateFormat[e]),e!==undefined&&a!==undefined){var o={};for(var u in n)"pattern"!==u&&(o[u]=n[u]);for(var u in i)"pattern"!==u&&"pattern12"!==u&&(o[u]=i[u]);var l=t.dateTimeFormat[e],c=l.replace("{0}",i.pattern).replace("{1}",n.pattern);if(o.pattern=c,"pattern12"in i){var s=l.replace("{0}",i.pattern12).replace("{1}",n.pattern);o.pattern12=s}return o}return a!==undefined?i:(r(e!==undefined,"dateStyle should not be undefined"),n)}function p(e){if("symbol"==typeof e)throw TypeError("Cannot convert a Symbol value to a string");return String(e)}function v(e){if(e===undefined)return NaN;if(null===e)return 0;if("boolean"==typeof e)return e?1:0;if("number"==typeof e)return e;if("symbol"==typeof e||"bigint"==typeof e)throw new TypeError("Cannot convert symbol/bigint to number");return Number(e)}function y(e){var a=v(e);if(isNaN(a)||w(a,-0))return 0;if(isFinite(a))return a;var r=Math.floor(Math.abs(a));return a<0&&(r=-r),w(r,-0)?0:r}function A(e){return isFinite(e)?Math.abs(e)>864e14?NaN:y(e):NaN}function b(e){if(null==e)throw new TypeError("undefined/null cannot be converted to object");return Object(e)}function w(e,a){return Object.is?Object.is(e,a):e===a?0!==e||1/e==1/a:e!==e&&a!==a}function S(e){return new Array(e)}function D(e){return null===e?"Null":void 0===e?"Undefined":"function"==typeof e||"object"==typeof e?"Object":"number"==typeof e?"Number":"boolean"==typeof e?"Boolean":"string"==typeof e?"String":"symbol"==typeof e?"Symbol":"bigint"==typeof e?"BigInt":void 0}function T(e,a){return e-Math.floor(e/a)*a}function k(e){return Math.floor(e/Pe)}function C(e){return T(k(e)+4,7)}function E(e){return 365*(e-1970)+Math.floor((e-1969)/4)-Math.floor((e-1901)/100)+Math.floor((e-1601)/400)}function P(e){return Pe*E(e)}function I(e){for(var a=Math.ceil(e/Pe/366),r=a;P(r)<=e;)r++;return r-1}function M(e){return e%4!=0?365:e%100!=0?366:e%400!=0?365:366}function O(e){return k(e)-E(I(e))}function F(e){return 365===M(I(e))?0:1}function j(e){var a=O(e),r=F(e);if(a>=0&&a<31)return 0;if(a<59+r)return 1;if(a<90+r)return 2;if(a<120+r)return 3;if(a<151+r)return 4;if(a<181+r)return 5;if(a<212+r)return 6;if(a<243+r)return 7;if(a<273+r)return 8;if(a<304+r)return 9;if(a<334+r)return 10;if(a<365+r)return 11;throw new Error("Invalid time")}function L(e){var a=O(e),r=j(e),t=F(e);if(0===r)return a+1;if(1===r)return a-30;if(2===r)return a-58-t;if(3===r)return a-89-t;if(4===r)return a-119-t;if(5===r)return a-150-t;if(6===r)return a-180-t;if(7===r)return a-211-t;if(8===r)return a-242-t;if(9===r)return a-272-t;if(10===r)return a-303-t;if(11===r)return a-333-t;throw new Error("Invalid time")}function N(e){return T(Math.floor(e/Le),Ie)}function x(e){return T(Math.floor(e/je),Me)}function _(e){return T(Math.floor(e/Fe),Oe)}function z(e,a,r){var t,n=r[a];if(!n)return[0,!1];for(var i=0,o=0,u=!1;i<=n.length;i++)if(i===n.length||1e3*n[i][0]>e){t=n[i-1],o=t[2],u=t[3];break}return[1e3*o,u]}function Z(e,a,t,n){var i=n.tzData;r("Number"===D(e),"invalid time"),r("gregory"===a,"We only support Gregory calendar right now");var o=z(e,t,i),u=o[0],l=o[1],c=e+u,s=I(c);return{weekday:C(c),era:s<0?"BC":"AD",year:s,relatedYear:undefined,yearName:undefined,month:j(c),day:L(c),hour:N(c),minute:x(c),second:_(c),inDST:l,timeZoneOffset:u}}function U(e){return e<10?"0"+e:String(e)}function R(e,a,r,t){var n=Math.floor(r/6e4),i=Math.abs(n)%60,o=Math.floor(Math.abs(n)/60),u=a.split(";"),l=u[0],c=u[1],s="",f=r<0?c:l;return"long"===t?s=f.replace("HH",U(o)).replace("H",String(o)).replace("mm",U(i)).replace("m",String(i)):(i||o)&&(i||(f=f.replace(/:?m+/,"")),s=f.replace(/H+/,String(o)).replace(/m+/,String(i))),e.replace("{0}",s)}function B(e,a,r,t){var n=t.getInternalSlots,i=t.localeData,o=t.getDefaultTimeZone,u=t.tzData;r=A(r);var l=n(e),c=l.dataLocale,s=i[c],f=l.locale,d=Object.create(null);d.useGrouping=!1;var m=new Intl.NumberFormat(f,d),h=Object.create(null);h.minimumIntegerDigits=2,h.useGrouping=!1;for(var g=new Intl.NumberFormat(f,h),p=Z(r,l.calendar,l.timeZone,{tzData:u}),v=[],y=0,b=a;y<b.length;y++){var w=b[y],S=w.type;if("literal"===S)v.push({type:"literal",value:w.value});else if(ye.indexOf(S)>-1){var D="",T=l[S],k=p[S];"year"===S&&k<=0&&(k=1-k),"month"===S&&k++;var C=l.hourCycle;if("hour"!==S||"h11"!==C&&"h12"!==C||0===(k%=12)&&"h12"===C&&(k=12),"hour"===S&&"h24"===C&&0===k&&(k=24),"numeric"===T)D=m.format(k);else if("2-digit"===T)D=g.format(k),D.length>2&&(D=D.slice(D.length-2,D.length));else if("narrow"===T||"short"===T||"long"===T)if("era"===S)D=s[S][T][k];else if("timeZoneName"===S){var E=s.timeZoneName,P=s.gmtFormat,I=s.hourFormat,M=l.timeZone||o(),O=E[M];D=O&&O[T]?O[T][+p.inDST]:R(P,I,p.timeZoneOffset,T)}else D="month"===S?s.month[T][k-1]:s[S][T][k];v.push({type:S,value:D})}else if("ampm"===S){var k=p.hour,D=void 0;D=k>11?s.pm:s.am,v.push({type:"dayPeriod",value:D})}else if("relatedYear"===S){var k=p.relatedYear,D=m.format(k);v.push({type:"relatedYear",value:D})}else if("yearName"===S){var k=p.yearName,D=m.format(k);v.push({type:"yearName",value:D})}}return v}function H(e){for(var a=[],t=e.indexOf("{"),n=0,i=0,o=e.length;t<e.length&&t>-1;)n=e.indexOf("}",t),r(n>t,"Invalid pattern "+e),t>i&&a.push({type:"literal",value:e.substring(i,t)}),a.push({type:e.substring(t+1,n),value:undefined}),i=n+1,t=e.indexOf("{",i);return i<o&&a.push({type:"literal",value:e.substring(i,o)}),a}function K(e,a,r){if(a=A(a),isNaN(a))throw new RangeError("invalid time");return B(e,H((0,r.getInternalSlots)(e).pattern),a,r)}function G(e,a,r){for(var t=K(e,a,r),n="",i=0,o=t;i<o.length;i++){n+=o[i].value}return n}function W(e,a,r,t){if(a=A(a),isNaN(a))throw new RangeError("Invalid start time");if(r=A(r),isNaN(r))throw new RangeError("Invalid end time");for(var n,i=t.getInternalSlots,o=t.tzData,u=i(e),l=Z(a,u.calendar,u.timeZone,{tzData:o}),c=Z(r,u.calendar,u.timeZone,{tzData:o}),s=u.pattern,f=u.rangePatterns,d=!0,m=!1,h=0,g=Ne;h<g.length;h++){var p=g[h];if(d&&!m)if("ampm"===p){var v=l.hour,y=c.hour,b=f.ampm;(v>11&&y<11||v<11&&y>11)&&(d=!1),n!==undefined&&b===undefined&&(m=!0),n=b}else{var v=l[p],y=c[p],b=f[p];w(v,y)||(d=!1),n!==undefined&&b===undefined&&(m=!0),n=b}}if(d){for(var S=B(e,H(s),a,t),D=0,T=S;D<T.length;D++){var k=T[D];k.source="shared"}return S}var C=[];n===undefined&&(n=f["default"]);for(var E=0,P=n.patternParts;E<P.length;E++){var I=P[E],M=I.source,O=I.pattern,F=void 0;F="startRange"===M||"shared"===M?a:r;for(var j=H(O),L=B(e,j,F,t),N=0,x=L;N<x.length;N++){var k=x[N];k.source=M}C=C.concat(L)}return C}function J(e,a,r,t){for(var n=W(e,a,r,t),i="",o=0,u=n;o<u.length;o++){i+=u[o].value}return i}function Y(e,a,r,t){for(var n=W(e,a,r,t),i=new Array(0),o=0,u=n;o<u.length;o++){var l=u[o];i.push({type:l.type,value:l.value,source:l.source})}return i}function $(e,a,r){for(var t=K(e,a,r),n=S(0),i=0,o=t;i<o.length;i++){var u=o[i];n.push({type:u.type,value:u.value})}return n}function q(e,a,r){e=e===undefined?null:b(e),e=Object.create(e);var t=!0;if("date"===a||"any"===a)for(var n=0,i=["weekday","year","month","day"];n<i.length;n++){var o=i[n],u=e[o];u!==undefined&&(t=!1)}if("time"===a||"any"===a)for(var l=0,c=["hour","minute","second"];l<c.length;l++){var o=c[l],u=e[o];u!==undefined&&(t=!1)}if(e.dateStyle===undefined&&e.timeStyle===undefined||(t=!1),"date"===a&&e.timeStyle)throw new TypeError("Intl.DateTimeFormat date was required but timeStyle was included");if("time"===a&&e.dateStyle)throw new TypeError("Intl.DateTimeFormat time was required but dateStyle was included");if(t&&("date"===r||"all"===r))for(var s=0,f=["year","month","day"];s<f.length;s++){var o=f[s];e[o]="numeric"}if(t&&("time"===r||"all"===r))for(var d=0,m=["hour","minute","second"];d<m.length;d++){var o=m[d];e[o]="numeric"}return e}function V(e,a,r,t,n){var i=e[a];if(i!==undefined){if("boolean"!==r&&"string"!==r)throw new TypeError("invalid type");if("boolean"===r&&(i=Boolean(i)),"string"===r&&(i=p(i)),t!==undefined&&!t.filter(function(e){return e==i}).length)throw new RangeError(i+" is not within "+t.join(", "));return i}return n}function Q(e,a){for(var r=a;;){if(e.has(r))return r;var t=r.lastIndexOf("-");if(!~t)return undefined;t>=2&&"-"===r[t-2]&&(t-=2),r=r.slice(0,t)}}function X(e,a,r){for(var t={locale:""},n=0,i=a;n<i.length;n++){var o=i[n],u=o.replace(ve,""),l=Q(e,u);if(l)return t.locale=l,o!==u&&(t.extension=o.slice(u.length+1,o.length)),t}return t.locale=r(),t}function ee(e,a,r){var t={},n=new Set;e.forEach(function(e){var a=new Intl.Locale(e).minimize().toString();t[a]=e,n.add(a)});for(var i,o=0,u=a;o<u.length;o++){var l=u[o];if(i)break;var c=l.replace(ve,"");if(e.has(c)){i=c;break}if(n.has(c)){i=t[c];break}var s=new Intl.Locale(c),f=s.maximize().toString(),d=s.minimize().toString();if(n.has(d)){i=t[d];break}i=Q(n,f)}return{locale:i||r()}}function ae(e,a){r(2===a.length,"key must have 2 elements");var t=e.length,n="-"+a+"-",i=e.indexOf(n);if(-1!==i){for(var o=i+4,u=o,l=o,c=!1;!c;){var s=e.indexOf("-",l),f=void 0;f=-1===s?t-l:s-l,2===f?c=!0:-1===s?(u=t,c=!0):(u=s,l=s+1)}return e.slice(o,u)}return n="-"+a,i=e.indexOf(n),-1!==i&&i+3===t?"":undefined}function re(e,a,t,n,i,o){var u,l=t.localeMatcher;u="lookup"===l?X(e,a,o):ee(e,a,o);for(var c=u.locale,s={locale:"",dataLocale:c},f="-u",d=0,m=n;d<m.length;d++){var h=m[d];r(c in i,"Missing locale data for "+c);var g=i[c];r("object"==typeof g&&null!==g,"locale data "+h+" must be an object");var p=g[h];r(Array.isArray(p),"keyLocaleData for "+h+" must be an array");var v=p[0];r("string"==typeof v||null===v,"value must be string or null but got "+typeof v+" in key "+h);var y="";if(u.extension){var A=ae(u.extension,h);A!==undefined&&(""!==A?~p.indexOf(A)&&(v=A,y="-"+h+"-"+v):~A.indexOf("true")&&(v="true",y="-"+h))}if(h in t){var b=t[h];r("string"==typeof b||void 0===b||null===b,"optionsValue must be String, Undefined or Null"),~p.indexOf(b)&&b!==v&&(v=b,y="")}s[h]=v,f+=y}if(f.length>2){var w=c.indexOf("-x-");if(-1===w)c+=f;else{c=c.slice(0,w)+f+c.slice(w,c.length)}c=Intl.getCanonicalLocales(c)[0]}return s.locale=c,s}function te(e,a){var r=a.tzData,t=a.uppercaseLinks,n=e.toUpperCase();return new Set(Object.keys(r).map(function(e){return e.toUpperCase()})).has(n)||n in t}function ne(e){for(var a=0,r=["hour","minute","second"];a<r.length;a++){if(e[r[a]]!==undefined)return!0}return!1}function ie(e,a,t){return null==e&&(e=a),t!==undefined&&(t?e="h11"===a||"h23"===a?"h11":"h12":(r(!t,"hour12 must not be set"),e="h11"===a||"h23"===a?"h23":"h24")),e}function oe(e,a,t,n){var i=n.getInternalSlots,o=n.availableLocales,u=n.localeData,l=n.getDefaultLocale,c=n.getDefaultTimeZone,s=n.relevantExtensionKeys,p=n.tzData,v=n.uppercaseLinks,y=d(a),A=q(t,"any","date"),b=Object.create(null),w=V(A,"localeMatcher","string",["lookup","best fit"],"best fit");b.localeMatcher=w;var S=V(A,"calendar","string",undefined,undefined);if(S!==undefined&&!xe.test(S))throw new RangeError("Malformed calendar");var D=i(e);b.ca=S;var T=V(A,"numberingSystem","string",undefined,undefined);if(T!==undefined&&!xe.test(T))throw new RangeError("Malformed numbering system");b.nu=T;var k=V(A,"hour12","boolean",undefined,undefined),C=V(A,"hourCycle","string",["h11","h12","h23","h24"],undefined);k!==undefined&&(C=null),b.hc=C;var E=re(o,y,b,s,u,l);D.locale=E.locale,S=E.ca,D.calendar=S,D.hourCycle=E.hc,D.numberingSystem=E.nu;var P=E.dataLocale;D.dataLocale=P;var I=A.timeZone;if(I!==undefined){if(I=String(I),!te(I,{tzData:p,uppercaseLinks:v}))throw new RangeError("Invalid timeZoneName");I=m(I,{tzData:p,uppercaseLinks:v})}else I=c();D.timeZone=I,b=Object.create(null),b.weekday=V(A,"weekday","string",["narrow","short","long"],undefined),b.era=V(A,"era","string",["narrow","short","long"],undefined),b.year=V(A,"year","string",["2-digit","numeric"],undefined),b.month=V(A,"month","string",["2-digit","numeric","narrow","short","long"],undefined),b.day=V(A,"day","string",["2-digit","numeric"],undefined),b.hour=V(A,"hour","string",["2-digit","numeric"],undefined),b.minute=V(A,"minute","string",["2-digit","numeric"],undefined),b.second=V(A,"second","string",["2-digit","numeric"],undefined),b.timeZoneName=V(A,"timeZoneName","string",["short","long"],undefined);var M=u[P];r(!!M,"Missing locale data for "+P);var O=M.formats[S];if(!O)throw new RangeError('Calendar "'+S+'" is not supported. Try setting "calendar" to 1 of the following: '+Object.keys(M.formats).join(", "));w=V(A,"formatMatcher","string",["basic","best fit"],"best fit");var F=V(A,"dateStyle","string",["full","long","medium","short"],undefined);D.dateStyle=F;var j=V(A,"timeStyle","string",["full","long","medium","short"],undefined);D.timeStyle=j;var L;if(F===undefined&&j===undefined)if("basic"===w)L=h(b,O);else{if(ne(b)){var N=ie(D.hourCycle,M.hourCycle,k);b.hour12="h11"===N||"h12"===N}L=f(b,O)}else{for(var x=0,_=ye;x<_.length;x++){var z=_[x],Z=b[z];if(Z!==undefined)throw new TypeError("Intl.DateTimeFormat can't set option "+z+" when "+(F?"dateStyle":"timeStyle")+" is used")}L=g(F,j,M)}D.format=L;for(var z in b){var Z=L[z];Z!==undefined&&(D[z]=Z)}var U,R;if(D.hour!==undefined){var N=ie(D.hourCycle,M.hourCycle,k);D.hourCycle=N,"h11"===N||"h12"===N?(U=L.pattern12,R=L.rangePatterns12):(U=L.pattern,R=L.rangePatterns)}else D.hourCycle=undefined,U=L.pattern,R=L.rangePatterns;return D.pattern=U,D.rangePatterns=R,e}function ue(e,a){for(var r=[],t=0,n=a;t<n.length;t++){var i=n[t],o=i.replace(ve,""),u=Q(e,o);u&&r.push(u)}return r}function le(e,a,r){return r!==undefined&&(r=b(r),V(r,"localeMatcher","string",["lookup","best fit"],"best fit")),ue(e,a)}function ce(e){var a=_e.get(e);return a||(a=Object.create(null),_e.set(e,a)),a}function se(e){for(var a=e.abbrvs.split("|"),r=e.offsets.split("|").map(function(e){return parseInt(e,36)}),t=e.zones,n={},i=0,o=t;i<o.length;i++){var u=o[i],l=u.split("|"),c=l[0],s=l.slice(1);n[c]=s.map(function(e){return e.split(",")}).map(function(e){var t=e[0],n=e[1],i=e[2],o=e[3];return[""===t?-Infinity:parseInt(t,36),a[+n],r[+i],"1"===o]})}return n}function fe(){return!!new Intl.DateTimeFormat(undefined,{dateStyle:"short"}).resolvedOptions().dateStyle}function de(){return"dayPeriod"!==new Intl.DateTimeFormat("en",{hourCycle:"h11",hour:"numeric"}).formatToParts(0)[2].type}function me(e,a,r){return new Be(a,r).format(e)}function he(e,a,r){return new Be(a,q(r,"date","date")).format(e)}function ge(e,a,r){return new Be(a,q(r,"time","time")).format(e)}var pe=function(){return pe=Object.assign||function e(a){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(a[i]=r[i])}return a},pe.apply(this,arguments)},ve=/-u(?:-[0-9a-z]{2,8})+/gi,ye=["weekday","era","year","month","day","hour","minute","second","timeZoneName"],Ae=120,be=20,we=15,Se=8,De=6,Te=6,ke=3,Ce=/(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,Ee=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,Pe=864e5,Ie=24,Me=60,Oe=60,Fe=1e3,je=Fe*Oe,Le=je*Me,Ne=["era","year","month","day","ampm","hour","minute","second"],xe=/^[a-z0-9]{3,8}$/i,_e=new WeakMap,ze={"Africa/Asmera":"Africa/Nairobi","Africa/Timbuktu":"Africa/Abidjan","America/Argentina/ComodRivadavia":"America/Argentina/Catamarca","America/Atka":"America/Adak","America/Buenos_Aires":"America/Argentina/Buenos_Aires","America/Catamarca":"America/Argentina/Catamarca","America/Coral_Harbour":"America/Atikokan","America/Cordoba":"America/Argentina/Cordoba","America/Ensenada":"America/Tijuana","America/Fort_Wayne":"America/Indiana/Indianapolis","America/Godthab":"America/Nuuk","America/Indianapolis":"America/Indiana/Indianapolis","America/Jujuy":"America/Argentina/Jujuy","America/Knox_IN":"America/Indiana/Knox","America/Louisville":"America/Kentucky/Louisville","America/Mendoza":"America/Argentina/Mendoza","America/Montreal":"America/Toronto","America/Porto_Acre":"America/Rio_Branco","America/Rosario":"America/Argentina/Cordoba","America/Santa_Isabel":"America/Tijuana","America/Shiprock":"America/Denver","America/Virgin":"America/Port_of_Spain","Antarctica/South_Pole":"Pacific/Auckland","Asia/Ashkhabad":"Asia/Ashgabat","Asia/Calcutta":"Asia/Kolkata","Asia/Chongqing":"Asia/Shanghai","Asia/Chungking":"Asia/Shanghai","Asia/Dacca":"Asia/Dhaka","Asia/Harbin":"Asia/Shanghai","Asia/Kashgar":"Asia/Urumqi","Asia/Katmandu":"Asia/Kathmandu","Asia/Macao":"Asia/Macau","Asia/Rangoon":"Asia/Yangon","Asia/Saigon":"Asia/Ho_Chi_Minh","Asia/Tel_Aviv":"Asia/Jerusalem","Asia/Thimbu":"Asia/Thimphu","Asia/Ujung_Pandang":"Asia/Makassar","Asia/Ulan_Bator":"Asia/Ulaanbaatar","Atlantic/Faeroe":"Atlantic/Faroe","Atlantic/Jan_Mayen":"Europe/Oslo","Australia/ACT":"Australia/Sydney","Australia/Canberra":"Australia/Sydney","Australia/LHI":"Australia/Lord_Howe","Australia/NSW":"Australia/Sydney","Australia/North":"Australia/Darwin","Australia/Queensland":"Australia/Brisbane","Australia/South":"Australia/Adelaide","Australia/Tasmania":"Australia/Hobart","Australia/Victoria":"Australia/Melbourne","Australia/West":"Australia/Perth","Australia/Yancowinna":"Australia/Broken_Hill","Brazil/Acre":"America/Rio_Branco","Brazil/DeNoronha":"America/Noronha","Brazil/East":"America/Sao_Paulo","Brazil/West":"America/Manaus","Canada/Atlantic":"America/Halifax","Canada/Central":"America/Winnipeg","Canada/Eastern":"America/Toronto","Canada/Mountain":"America/Edmonton","Canada/Newfoundland":"America/St_Johns","Canada/Pacific":"America/Vancouver","Canada/Saskatchewan":"America/Regina","Canada/Yukon":"America/Whitehorse","Chile/Continental":"America/Santiago","Chile/EasterIsland":"Pacific/Easter",Cuba:"America/Havana",Egypt:"Africa/Cairo",Eire:"Europe/Dublin","Etc/UCT":"Etc/UTC","Europe/Belfast":"Europe/London","Europe/Tiraspol":"Europe/Chisinau",GB:"Europe/London","GB-Eire":"Europe/London","GMT+0":"Etc/GMT","GMT-0":"Etc/GMT",GMT0:"Etc/GMT",Greenwich:"Etc/GMT",Hongkong:"Asia/Hong_Kong",Iceland:"Atlantic/Reykjavik",Iran:"Asia/Tehran",Israel:"Asia/Jerusalem",Jamaica:"America/Jamaica",Japan:"Asia/Tokyo",Kwajalein:"Pacific/Kwajalein",Libya:"Africa/Tripoli","Mexico/BajaNorte":"America/Tijuana","Mexico/BajaSur":"America/Mazatlan","Mexico/General":"America/Mexico_City",NZ:"Pacific/Auckland","NZ-CHAT":"Pacific/Chatham",Navajo:"America/Denver",PRC:"Asia/Shanghai","Pacific/Johnston":"Pacific/Honolulu","Pacific/Ponape":"Pacific/Pohnpei","Pacific/Samoa":"Pacific/Pago_Pago","Pacific/Truk":"Pacific/Chuuk","Pacific/Yap":"Pacific/Chuuk",Poland:"Europe/Warsaw",Portugal:"Europe/Lisbon",ROC:"Asia/Taipei",ROK:"Asia/Seoul",Singapore:"Asia/Singapore",Turkey:"Europe/Istanbul",UCT:"Etc/UTC","US/Alaska":"America/Anchorage","US/Aleutian":"America/Adak","US/Arizona":"America/Phoenix","US/Central":"America/Chicago","US/East-Indiana":"America/Indiana/Indianapolis","US/Eastern":"America/New_York","US/Hawaii":"Pacific/Honolulu","US/Indiana-Starke":"America/Indiana/Knox","US/Michigan":"America/Detroit","US/Mountain":"America/Denver","US/Pacific":"America/Los_Angeles","US/Samoa":"Pacific/Pago_Pago",UTC:"Etc/UTC",Universal:"Etc/UTC","W-SU":"Europe/Moscow",Zulu:"Etc/UTC"},Ze=Object.keys(ze).reduce(function(e,a){return e[a.toUpperCase()]=ze[a],e},{}),Ue=["locale","calendar","numberingSystem","dateStyle","timeStyle","timeZone","hourCycle","weekday","era","year","month","day","hour","minute","second","timeZoneName"],Re={enumerable:!1,configurable:!0,get:function(){if("object"!=typeof this||!(this instanceof Be))throw TypeError("Intl.DateTimeFormat format property accessor called on incompatible receiver");var e=ce(this),a=this,r=e.boundFormat;if(r===undefined){r=function(e){var r;return r=e===undefined?Date.now():Number(e),G(a,r,{getInternalSlots:ce,localeData:Be.localeData,tzData:Be.tzData,getDefaultTimeZone:Be.getDefaultTimeZone})};try{Object.defineProperty(r,"name",{configurable:!0,enumerable:!1,writable:!1,value:""})}catch(t){}e.boundFormat=r}return r}};try{Object.defineProperty(Re.get,"name",{configurable:!0,enumerable:!1,writable:!1,value:"get format"})}catch(Ke){}var Be=function(e,a){if(!(this&&this instanceof Be))return new Be(e,a);oe(this,e,a,{tzData:Be.tzData,uppercaseLinks:Ze,availableLocales:Be.availableLocales,relevantExtensionKeys:Be.relevantExtensionKeys,getDefaultLocale:Be.getDefaultLocale,getDefaultTimeZone:Be.getDefaultTimeZone,getInternalSlots:ce,localeData:Be.localeData});var t=ce(this),n=t.dataLocale;r(Be.localeData[n]!==undefined,"Cannot load locale-dependent data for "+n+".")};a(Be,"supportedLocalesOf",{value:function Ge(e,a){return le(Be.availableLocales,d(e),a)}}),a(Be.prototype,"resolvedOptions",{value:function We(){if("object"!=typeof this||!(this instanceof Be))throw TypeError("Method Intl.DateTimeFormat.prototype.resolvedOptions called on incompatible receiver");for(var e=ce(this),a={},r=0,t=Ue;r<t.length;r++){var n=t[r],i=e[n];if("hourCycle"===n){var o="h11"===i||"h12"===i||"h23"!==i&&"h24"!==i&&undefined;o!==undefined&&(a.hour12=o)}ye.indexOf(n)>-1&&(e.dateStyle===undefined&&e.timeStyle===undefined||(i=undefined)),i!==undefined&&(a[n]=i)}return a}}),a(Be.prototype,"formatToParts",{value:function Je(e){return e=e===undefined?Date.now():v(e),$(this,e,{getInternalSlots:ce,localeData:Be.localeData,tzData:Be.tzData,getDefaultTimeZone:Be.getDefaultTimeZone})}}),a(Be.prototype,"formatRangeToParts",{value:function Ye(e,a){var r=this;if("object"!=typeof r)throw new TypeError;if(e===undefined||a===undefined)throw new TypeError("startDate/endDate cannot be undefined");return Y(r,v(e),v(a),{getInternalSlots:ce,localeData:Be.localeData,tzData:Be.tzData,getDefaultTimeZone:Be.getDefaultTimeZone})}}),a(Be.prototype,"formatRange",{value:function $e(e,a){var r=this;if("object"!=typeof r)throw new TypeError;if(e===undefined||a===undefined)throw new TypeError("startDate/endDate cannot be undefined");return J(r,v(e),v(a),{getInternalSlots:ce,localeData:Be.localeData,tzData:Be.tzData,getDefaultTimeZone:Be.getDefaultTimeZone})}});Be.__setDefaultTimeZone=function(e){if(e!==undefined){if(e=String(e),!te(e,{tzData:Be.tzData,uppercaseLinks:Ze}))throw new RangeError("Invalid timeZoneName");e=m(e,{tzData:Be.tzData,uppercaseLinks:Ze})}else e="UTC";Be.__defaultTimeZone=e},Be.relevantExtensionKeys=["nu","ca","hc"],Be.__defaultTimeZone="UTC",Be.getDefaultTimeZone=function(){return Be.__defaultTimeZone},Be.__addLocaleData=function qe(){for(var a=[],r=0;r<arguments.length;r++)a[r]=arguments[r];for(var t=0,n=a;t<n.length;t++){var i=n[t],u=i.data,l=i.locale;!function(a,r){var t=a.dateFormat,n=a.timeFormat,i=a.dateTimeFormat,u=a.formats,l=a.intervalFormats,c=e(a,["dateFormat","timeFormat","dateTimeFormat","formats","intervalFormats"]),s=pe(pe({},c),{dateFormat:{full:o(t.full),"long":o(t["long"]),medium:o(t.medium),"short":o(t["short"])},timeFormat:{full:o(n.full),"long":o(n["long"]),medium:o(n.medium),"short":o(n["short"])},dateTimeFormat:{full:o(i.full).pattern,"long":o(i["long"]).pattern,medium:o(i.medium).pattern,"short":o(i["short"]).pattern},formats:{}});for(var f in u)!function(e){s.formats[e]=Object.keys(u[e]).map(function(a){return o(a,u[e][a],l[a],l.intervalFormatFallback)})}(f);var d=new Intl.Locale(r).minimize().toString();Be.localeData[r]=Be.localeData[d]=s,Be.availableLocales.add(r),Be.availableLocales.add(d),Be.__defaultLocale||(Be.__defaultLocale=d)}(u,l)}},Object.defineProperty(Be.prototype,"format",Re),Be.__defaultLocale="",Be.localeData={},Be.availableLocales=new Set,Be.getDefaultLocale=function(){return Be.__defaultLocale},Be.polyfilled=!0,Be.tzData={},Be.__addTZData=function(e){Be.tzData=se(e)};try{"undefined"!=typeof Symbol&&Object.defineProperty(Be.prototype,Symbol.toStringTag,{value:"Intl.DateTimeFormat",writable:!1,enumerable:!1,configurable:!0}),Object.defineProperty(Be.prototype.constructor,"length",{value:1,writable:!1,enumerable:!1,configurable:!0})}catch(Ke){}(function He(){return!("DateTimeFormat"in Intl)||!("formatToParts"in Intl.DateTimeFormat.prototype)||de()||!fe()})()&&(a(Intl,"DateTimeFormat",{value:Be}),a(Date.prototype,"toLocaleString",{value:function Ve(e,a){return me(this,e,a)}}),a(Date.prototype,"toLocaleDateString",{value:function Qe(e,a){return he(this,e,a)}}),a(Date.prototype,"toLocaleTimeString",{value:function Xe(e,a){return ge(this,e,a)}}))});