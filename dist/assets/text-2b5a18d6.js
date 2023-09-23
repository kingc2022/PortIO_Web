import{E as R,e as B,f as y,x as f,h as T,i as S,J as z,K as v,L as W,k as b,M as g,ay as w}from"./index-dd49acc8.js";const F={headerFontSize1:"30px",headerFontSize2:"22px",headerFontSize3:"18px",headerFontSize4:"16px",headerFontSize5:"16px",headerFontSize6:"16px",headerMargin1:"28px 0 20px 0",headerMargin2:"28px 0 20px 0",headerMargin3:"28px 0 20px 0",headerMargin4:"28px 0 18px 0",headerMargin5:"28px 0 18px 0",headerMargin6:"28px 0 18px 0",headerPrefixWidth1:"16px",headerPrefixWidth2:"16px",headerPrefixWidth3:"12px",headerPrefixWidth4:"12px",headerPrefixWidth5:"12px",headerPrefixWidth6:"12px",headerBarWidth1:"4px",headerBarWidth2:"4px",headerBarWidth3:"3px",headerBarWidth4:"3px",headerBarWidth5:"3px",headerBarWidth6:"3px",pMargin:"16px 0 16px 0",liMargin:".25em 0 0 0",olPadding:"0 0 0 2em",ulPadding:"0 0 0 2em"},M=e=>{const{primaryColor:o,textColor2:t,borderColor:i,lineHeight:n,fontSize:r,borderRadiusSmall:a,dividerColor:d,fontWeightStrong:C,textColor1:s,textColor3:l,infoColor:h,warningColor:c,errorColor:x,successColor:p,codeColor:m}=e;return Object.assign(Object.assign({},F),{aTextColor:o,blockquoteTextColor:t,blockquotePrefixColor:i,blockquoteLineHeight:n,blockquoteFontSize:r,codeBorderRadius:a,liTextColor:t,liLineHeight:n,liFontSize:r,hrColor:d,headerFontWeight:C,headerTextColor:s,pTextColor:t,pTextColor1Depth:s,pTextColor2Depth:t,pTextColor3Depth:l,pLineHeight:n,pFontSize:r,headerBarColor:o,headerBarColorPrimary:o,headerBarColorInfo:h,headerBarColorError:x,headerBarColorWarning:c,headerBarColorSuccess:p,textColor:t,textColor1Depth:s,textColor2Depth:t,textColor3Depth:l,textColorPrimary:o,textColorInfo:h,textColorSuccess:p,textColorWarning:c,textColorError:x,codeTextColor:t,codeColor:m,codeBorder:"1px solid #0000"})},k={name:"Typography",common:R,self:M},$=k,D=B("h",`
 font-size: var(--n-font-size);
 font-weight: var(--n-font-weight);
 margin: var(--n-margin);
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[y("&:first-child",{marginTop:0}),f("prefix-bar",{position:"relative",paddingLeft:"var(--n-prefix-width)"},[f("align-text",{paddingLeft:0},[y("&::before",{left:"calc(-1 * var(--n-prefix-width))"})]),y("&::before",`
 content: "";
 width: var(--n-bar-width);
 border-radius: calc(var(--n-bar-width) / 2);
 transition: background-color .3s var(--n-bezier);
 left: 0;
 top: 0;
 bottom: 0;
 position: absolute;
 `),y("&::before",{backgroundColor:"var(--n-bar-color)"})])]),H=Object.assign(Object.assign({},z.props),{type:{type:String,default:"default"},prefix:String,alignText:Boolean}),u=e=>T({name:`H${e}`,props:H,setup(o){const{mergedClsPrefixRef:t,inlineThemeDisabled:i}=S(o),n=z("Typography","-h",D,$,o,t),r=v(()=>{const{type:d}=o,{common:{cubicBezierEaseInOut:C},self:{headerFontWeight:s,headerTextColor:l,[g("headerPrefixWidth",e)]:h,[g("headerFontSize",e)]:c,[g("headerMargin",e)]:x,[g("headerBarWidth",e)]:p,[g("headerBarColor",d)]:m}}=n.value;return{"--n-bezier":C,"--n-font-size":c,"--n-margin":x,"--n-bar-color":m,"--n-bar-width":p,"--n-font-weight":s,"--n-text-color":l,"--n-prefix-width":h}}),a=i?W(`h${e}`,v(()=>o.type[0]),r,o):void 0;return{mergedClsPrefix:t,cssVars:i?void 0:r,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){var o;const{prefix:t,alignText:i,mergedClsPrefix:n,cssVars:r,$slots:a}=this;return(o=this.onRender)===null||o===void 0||o.call(this),b(`h${e}`,{class:[`${n}-h`,`${n}-h${e}`,this.themeClass,{[`${n}-h--prefix-bar`]:t,[`${n}-h--align-text`]:i}],style:r},a)}}),j=u("1");u("2");u("3");u("4");u("5");u("6");const L=B("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[f("strong",`
 font-weight: var(--n-font-weight-strong);
 `),f("italic",{fontStyle:"italic"}),f("underline",{textDecoration:"underline"}),f("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),V=Object.assign(Object.assign({},z.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),E=T({name:"Text",props:V,setup(e){const{mergedClsPrefixRef:o,inlineThemeDisabled:t}=S(e),i=z("Typography","-text",L,$,e,o),n=v(()=>{const{depth:a,type:d}=e,C=d==="default"?a===void 0?"textColor":`textColor${a}Depth`:g("textColor",d),{common:{fontWeightStrong:s,fontFamilyMono:l,cubicBezierEaseInOut:h},self:{codeTextColor:c,codeBorderRadius:x,codeColor:p,codeBorder:m,[C]:P}}=i.value;return{"--n-bezier":h,"--n-text-color":P,"--n-font-weight-strong":s,"--n-font-famliy-mono":l,"--n-code-border-radius":x,"--n-code-text-color":c,"--n-code-color":p,"--n-code-border":m}}),r=t?W("text",v(()=>`${e.type[0]}${e.depth||""}`),n,e):void 0;return{mergedClsPrefix:o,compitableTag:w(e,["as","tag"]),cssVars:t?void 0:n,themeClass:r==null?void 0:r.themeClass,onRender:r==null?void 0:r.onRender}},render(){var e,o,t;const{mergedClsPrefix:i}=this;(e=this.onRender)===null||e===void 0||e.call(this);const n=[`${i}-text`,this.themeClass,{[`${i}-text--code`]:this.code,[`${i}-text--delete`]:this.delete,[`${i}-text--strong`]:this.strong,[`${i}-text--italic`]:this.italic,[`${i}-text--underline`]:this.underline}],r=(t=(o=this.$slots).default)===null||t===void 0?void 0:t.call(o);return this.code?b("code",{class:n,style:this.cssVars},this.delete?b("del",null,r):r):this.delete?b("del",{class:n,style:this.cssVars},r):b(this.compitableTag||"span",{class:n,style:this.cssVars},r)}});export{E as N,j as a};
