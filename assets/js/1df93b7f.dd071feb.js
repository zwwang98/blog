(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3237],{5318:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},891:function(e,t,n){"use strict";var o=n(5318);t.Z=void 0;var r=o(n(4938)),i=n(5893),a=(0,r.default)((0,i.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Email");t.Z=a},4938:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o.createSvgIcon}});var o=n(7074)},8169:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var o=n(7462),r=n(7294),i=n(3366),a=n(6010),l=n(5),c=n(8216),u=n(1539),s=n(9348),d=n(6594);function m(e){return(0,d.Z)("MuiSvgIcon",e)}(0,n(8959).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var f=n(5893);const p=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],v=(0,s.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t[`color${(0,c.Z)(n.color)}`],t[`fontSize${(0,c.Z)(n.fontSize)}`]]}})((({theme:e,ownerState:t})=>{var n,o,r,i,a,l,c,u,s,d,m,f,p,v,h,g,Z;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(n=e.transitions)||null==(o=n.create)?void 0:o.call(n,"fill",{duration:null==(r=e.transitions)||null==(i=r.duration)?void 0:i.shorter}),fontSize:{inherit:"inherit",small:(null==(a=e.typography)||null==(l=a.pxToRem)?void 0:l.call(a,20))||"1.25rem",medium:(null==(c=e.typography)||null==(u=c.pxToRem)?void 0:u.call(c,24))||"1.5rem",large:(null==(s=e.typography)||null==(d=s.pxToRem)?void 0:d.call(s,35))||"2.1875"}[t.fontSize],color:null!=(m=null==(f=(e.vars||e).palette)||null==(p=f[t.color])?void 0:p.main)?m:{action:null==(v=(e.vars||e).palette)||null==(h=v.action)?void 0:h.active,disabled:null==(g=(e.vars||e).palette)||null==(Z=g.action)?void 0:Z.disabled,inherit:void 0}[t.color]}})),h=r.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiSvgIcon"}),{children:r,className:s,color:d="inherit",component:h="svg",fontSize:g="medium",htmlColor:Z,inheritViewBox:b=!1,titleAccess:S,viewBox:w="0 0 24 24"}=n,z=(0,i.Z)(n,p),y=(0,o.Z)({},n,{color:d,component:h,fontSize:g,instanceFontSize:e.fontSize,inheritViewBox:b,viewBox:w}),x={};b||(x.viewBox=w);const R=(e=>{const{color:t,fontSize:n,classes:o}=e,r={root:["root","inherit"!==t&&`color${(0,c.Z)(t)}`,`fontSize${(0,c.Z)(n)}`]};return(0,l.Z)(r,m,o)})(y);return(0,f.jsxs)(v,(0,o.Z)({as:h,className:(0,a.Z)(R.root,s),ownerState:y,focusable:"false",color:Z,"aria-hidden":!S||void 0,role:S?"img":void 0,ref:t},x,z,{children:[r,S?(0,f.jsx)("title",{children:S}):null]}))}));h.muiName="SvgIcon";var g=h;function Z(e,t){const n=(n,r)=>(0,f.jsx)(g,(0,o.Z)({"data-testid":`${t}Icon`,ref:r},n,{children:e}));return n.muiName=g.muiName,r.memo(r.forwardRef(n))}},7074:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return r.Z},createChainedFunction:function(){return i},createSvgIcon:function(){return a.Z},debounce:function(){return l},deprecatedPropType:function(){return c},isMuiElement:function(){return d},ownerDocument:function(){return f},ownerWindow:function(){return p},requirePropFactory:function(){return v},setRef:function(){return h},unstable_ClassNameGenerator:function(){return E},unstable_useEnhancedEffect:function(){return g},unstable_useId:function(){return S},unsupportedProp:function(){return w},useControlled:function(){return z},useEventCallback:function(){return y.Z},useForkRef:function(){return x.Z},useIsFocusVisible:function(){return R.Z}});var o=n(1184),r=n(8216);var i=function(...e){return e.reduce(((e,t)=>null==t?e:function(...n){e.apply(this,n),t.apply(this,n)}),(()=>{}))},a=n(8169);var l=function(e,t=166){let n;function o(...o){clearTimeout(n),n=setTimeout((()=>{e.apply(this,o)}),t)}return o.clear=()=>{clearTimeout(n)},o};var c=function(e,t){return()=>null},u=n(7294),s=n.t(u,2);var d=function(e,t){return u.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)};function m(e){return e&&e.ownerDocument||document}var f=m;var p=function(e){return m(e).defaultView||window};n(7462);var v=function(e,t){return()=>null},h=n(7960).Z,g=n(6600).Z;let Z=0;const b=s.useId;var S=function(e){if(void 0!==b){const t=b();return null!=e?e:t}return function(e){const[t,n]=u.useState(e),o=e||t;return u.useEffect((()=>{null==t&&(Z+=1,n(`mui-${Z}`))}),[t]),o}(e)};var w=function(e,t,n,o,r){return null};var z=function({controlled:e,default:t,name:n,state:o="value"}){const{current:r}=u.useRef(void 0!==e),[i,a]=u.useState(t);return[r?e:i,u.useCallback((e=>{r||a(e)}),[])]},y=n(9327),x=n(8031),R=n(8791);const E={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),o.Z.configure(e)}}},4553:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var o=n(7294),r=n(8277),i=n(2263),a=n(3366),l=n(7462),c=n(6010),u=n(5),s=n(1796),d=n(9348),m=n(1539),f=n(9063),p=n(8216),v=n(6594);function h(e){return(0,v.Z)("MuiIconButton",e)}var g=(0,n(8959).Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Z=n(5893);const b=["edge","children","className","color","disabled","disableFocusRipple","size"],S=(0,d.ZP)(f.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"default"!==n.color&&t[`color${(0,p.Z)(n.color)}`],n.edge&&t[`edge${(0,p.Z)(n.edge)}`],t[`size${(0,p.Z)(n.size)}`]]}})((({theme:e,ownerState:t})=>(0,l.Z)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.active} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})),(({theme:e,ownerState:t})=>(0,l.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,l.Z)({color:(e.vars||e).palette[t.color].main},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,s.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${g.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})));var w=o.forwardRef((function(e,t){const n=(0,m.Z)({props:e,name:"MuiIconButton"}),{edge:o=!1,children:r,className:i,color:s="default",disabled:d=!1,disableFocusRipple:f=!1,size:v="medium"}=n,g=(0,a.Z)(n,b),w=(0,l.Z)({},n,{edge:o,color:s,disabled:d,disableFocusRipple:f,size:v}),z=(e=>{const{classes:t,disabled:n,color:o,edge:r,size:i}=e,a={root:["root",n&&"disabled","default"!==o&&`color${(0,p.Z)(o)}`,r&&`edge${(0,p.Z)(r)}`,`size${(0,p.Z)(i)}`]};return(0,u.Z)(a,h,t)})(w);return(0,Z.jsx)(S,(0,l.Z)({className:(0,c.Z)(z.root,i),centerRipple:!0,focusRipple:!f,disabled:d,ref:t,ownerState:w},g,{children:r}))})),z=n(8169),y=(0,z.Z)((0,Z.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub"),x=(0,z.Z)((0,Z.jsx)("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn"),R=n(891),E={color:"#2196f3"};function C(){var e=(0,i.Z)().siteConfig;return o.createElement("header",null,o.createElement("div",{className:"container"},o.createElement("h1",{className:"hero__title"},"Hello! I am ",o.createElement("span",{style:E},e.title)),o.createElement("p",{className:"hero__subtitle"},e.tagline),o.createElement(w,{href:"https://github.com/zwwang98"},o.createElement(y,null)),o.createElement(w,{href:"https://www.linkedin.com/in/zwwang/"},o.createElement(x,null)),o.createElement(w,{href:"mailto:ziweiwang630@gmail.com"},o.createElement(R.Z,null))))}function I(){var e=(0,i.Z)().siteConfig;return o.createElement(r.Z,{title:"Hello from "+e.title,description:"Description will go into a meta tag in <head />"},o.createElement(C,null))}}}]);