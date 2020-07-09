import t,{useCallback as r,useMemo as e}from"react";import n from"anchorme";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var o=function(){return(o=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(t[o]=r[o]);return t}).apply(this,arguments)};function a(t,r){var e={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&r.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(e[n[o]]=t[n[o]])}return e}var i=/^((file:\/\/\/)|(https?:|ftps?:)\/\/|(mailto:))/i,l=function(t){return function(t){return i.test(t)}(t)?"":n.validate.email(t)?"mailto:":"http://"},u=function(r){var e=r.href,n=a(r,["href"]),i=l(e);return t.createElement("a",o({},n,{href:""+i+e}),e)},c=t.memo((function(i){var l=i.children,c=a(i,["children"]),f=l,s=r((function(){var r=n.list(f);if(0===r.length)return f;var e=[],a=0;return r.forEach((function(r,i){r.start>a&&e.push(f.substring(a,r.start)),e.push(n.validate.url(r.string)?t.createElement(u,o({},c,{key:i,href:r.string})):r.string),a=r.end})),f.length>a&&e.push(f.substring(a)),1===e.length?e[0]:e}),[f,c]),p=e((function(){return s()}),[s]);return t.createElement(t.Fragment,null,p)}));export{c as Anchorme};
