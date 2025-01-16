(()=>{"use strict";var e,t={271:()=>{const e=window.wp.blocks,t=window.React;function r(e){var t,a,l="";if("string"==typeof e||"number"==typeof e)l+=e;else if("object"==typeof e)if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(a=r(e[t]))&&(l&&(l+=" "),l+=a)}else for(a in e)e[a]&&(l&&(l+=" "),l+=a);return l}const a=function(){for(var e,t,a=0,l="",n=arguments.length;a<n;a++)(e=arguments[a])&&(t=r(e))&&(l&&(l+=" "),l+=t);return l},l=window.wp.i18n,n=window.wp.blockEditor,o=window.wp.components;var i,c;function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},m.apply(null,arguments)}const s=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"boldblocks/breadcrumb-block","title":"Breadcrumb Block","category":"theme","description":"A simple breadcrumb trail block that supports JSON-LD structured data","keywords":["breadcrumb","navigation","menu","link"],"attributes":{"gap":{"type":"string","default":".4em"},"separator":{"type":"string","default":"/"},"hideHomePage":{"type":"boolean","default":false},"hideCurrentPage":{"type":"boolean","default":false},"homeText":{"type":"string","default":""}},"supports":{"html":false,"anchor":true,"ariaLabel":true,"align":["wide","full"],"color":{"background":true,"text":true,"gradients":true,"link":true},"spacing":{"margin":["top","bottom"],"padding":true,"__experimentalDefaultControls":{"margin":true,"padding":true}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":false},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontStyle":true,"__experimentalFontWeight":true,"__experimentalLetterSpacing":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalDefaultControls":{"fontSize":true,"lineHeight":true,"fontAppearance":true,"textTransform":true},"interactivity":{"clientNavigation":true}}},"textdomain":"breadcrumb-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');(0,e.registerBlockType)(s,{icon:function(e){return t.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 256 256"},e),i||(i=t.createElement("rect",{width:256,height:256,fill:"#d20962",ry:33.703})),c||(c=t.createElement("g",{fill:"#fff",strokeWidth:1.093},t.createElement("path",{d:"M142.502 139.779 69.19 214.875c-8.639 8.863-22.173 1.66-22.173-11.79V52.892a13.373 15.658 0 0 1 22.187-11.79l73.286 75.096a13.373 15.658 0 0 1 0 23.58z"}),t.createElement("path",{fillRule:"evenodd",d:"M126.28 38.641a6.032 7.032 0 0 1 8.542 0l72.39 84.382a6.032 7.032 0 0 1 0 9.957l-72.39 84.382a6.04 7.04 0 0 1-8.542-9.957l68.13-79.403-68.13-79.403a6.032 7.032 0 0 1 0-9.958"}))))},edit:function({attributes:{gap:e,separator:r,hideHomePage:i,hideCurrentPage:c,homeText:m},setAttributes:s,isSelected:u}){const d=[{label:"/",value:"/"},{label:(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",width:"1em",height:"1em",viewBox:"0 0 16 16"},(0,t.createElement)("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})),value:'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="1em" height="1em" viewBox="0 0 16 16">\n      <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>\n    </svg>'},{label:(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",width:"1em",height:"1em",viewBox:"0 0 16 16"},(0,t.createElement)("path",{fillRule:"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"})),value:'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="1em" height="1em" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>'},{label:(0,t.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",width:"1em",height:"1em",viewBox:"0 0 16 16"},(0,t.createElement)("path",{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"})),value:'<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="1em" height="1em" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>\n    </svg>'}];return(0,t.createElement)(t.Fragment,null,u&&(0,t.createElement)(t.Fragment,null,(0,t.createElement)(n.InspectorControls,null,(0,t.createElement)(o.PanelBody,{title:(0,l.__)("Block settings","breadcrumb-block")},(0,t.createElement)("div",{className:"breadrumb-setings"},(0,t.createElement)(o.__experimentalUnitControl,{label:(0,l.__)("Gap","breadcrumb-block"),value:e,onChange:e=>s({gap:e})}),(0,t.createElement)("div",{className:"toggle-group-control"},(0,t.createElement)(o.BaseControl,{className:"toggle-group-control__label",label:(0,l.__)("Separator","breadcrumb-block")}),(0,t.createElement)(o.ButtonGroup,{"aria-label":(0,l.__)("Separator icon","breadcrumb-block")},d.map((({label:e,value:a,disabled:l=!1})=>(0,t.createElement)(o.Button,{key:a,isSmall:!0,variant:a===r?"primary":void 0,onClick:()=>s({separator:a}),style:{verticalAlign:"top"},disabled:l},e))))),(0,t.createElement)(o.ToggleControl,{label:(0,l.__)("Hide the home page","breadcrumb-block"),checked:i,onChange:e=>s({hideHomePage:e})}),!i&&(0,t.createElement)(o.TextControl,{label:(0,l.__)("Custom home text","breadcrumb-block"),value:m,onChange:e=>s({homeText:e}),help:(0,l.__)("Input a custom home text. Leave it blank to use the default text.","breadcrumb-block")}),(0,t.createElement)(o.ToggleControl,{label:(0,l.__)("Hide current page","breadcrumb-block"),checked:c,onChange:e=>s({hideCurrentPage:e})}))))),(0,t.createElement)("div",{...(0,n.useBlockProps)({style:{"--bb--crumb-gap":e},className:a({"hide-current-page":c,"hide-home-page":i})})},(0,t.createElement)("nav",{role:"navigation","aria-label":"breadcrumb",className:"breadcrumb"},(0,t.createElement)("ol",{className:"breadcrumb-items"},(0,t.createElement)("li",{className:"breadcrumb-item breadcrumb-item--home"},(0,t.createElement)("a",{href:"#"},(0,t.createElement)("span",{className:"breadcrumb-item-name"},m||(0,l.__)("Home","breadcrumb-block"))),(0,t.createElement)("span",{className:"sep",dangerouslySetInnerHTML:{__html:r}})),(0,t.createElement)("li",{className:"breadcrumb-item breadcrumb-item--parent"},(0,t.createElement)("a",{href:"#"},(0,t.createElement)("span",{className:"breadcrumb-item-name"},(0,l.__)("Parent page","breadcrumb-block"))),(0,t.createElement)("span",{className:"sep",dangerouslySetInnerHTML:{__html:r}})),(0,t.createElement)("li",{className:"breadcrumb-item breadcrumb-item--current"},(0,t.createElement)("span",{className:"breadcrumb-item-name"},(0,l.__)("Current page","breadcrumb-block")))))))}})}},r={};function a(e){var l=r[e];if(void 0!==l)return l.exports;var n=r[e]={exports:{}};return t[e](n,n.exports,a),n.exports}a.m=t,e=[],a.O=(t,r,l,n)=>{if(!r){var o=1/0;for(s=0;s<e.length;s++){r=e[s][0],l=e[s][1],n=e[s][2];for(var i=!0,c=0;c<r.length;c++)(!1&n||o>=n)&&Object.keys(a.O).every((e=>a.O[e](r[c])))?r.splice(c--,1):(i=!1,n<o&&(o=n));if(i){e.splice(s--,1);var m=l();void 0!==m&&(t=m)}}return t}n=n||0;for(var s=e.length;s>0&&e[s-1][2]>n;s--)e[s]=e[s-1];e[s]=[r,l,n]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var l,n,o=r[0],i=r[1],c=r[2],m=0;if(o.some((t=>0!==e[t]))){for(l in i)a.o(i,l)&&(a.m[l]=i[l]);if(c)var s=c(a)}for(t&&t(r);m<o.length;m++)n=o[m],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(s)},r=self.webpackChunkbreadcrumb_block=self.webpackChunkbreadcrumb_block||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var l=a.O(void 0,[350],(()=>a(271)));l=a.O(l)})();