"use strict";(self.webpackChunkshopdunk=self.webpackChunkshopdunk||[]).push([[2959],{4655:function(t,e,n){n.d(e,{Z:function(){return w}});var o=n(9439),r=n(2791),i=n(4164),a=n(4937),c=(n(632),n(8834)),u=r.createContext(null),s=n(3433),l=n(1605),f=[];var d,h=n(5561);function v(t){var e=t.match(/^(.*)px$/),n=Number(null===e||void 0===e?void 0:e[1]);return Number.isNaN(n)?function(t){if("undefined"===typeof document)return 0;if(t||void 0===d){var e=document.createElement("div");e.style.width="100%",e.style.height="200px";var n=document.createElement("div"),o=n.style;o.position="absolute",o.top="0",o.left="0",o.pointerEvents="none",o.visibility="hidden",o.width="200px",o.height="150px",o.overflow="hidden",n.appendChild(e),document.body.appendChild(n);var r=e.offsetWidth;n.style.overflow="scroll";var i=e.offsetWidth;r===i&&(i=n.clientWidth),document.body.removeChild(n),d=r-i}return d}():n}var p="rc-util-locker-".concat(Date.now()),m=0;function g(t){var e=!!t,n=r.useState((function(){return m+=1,"".concat(p,"_").concat(m)})),i=(0,o.Z)(n,1)[0];(0,l.Z)((function(){if(e){var t=function(t){if("undefined"===typeof document||!t||!(t instanceof Element))return{width:0,height:0};var e=getComputedStyle(t,"::-webkit-scrollbar"),n=e.width,o=e.height;return{width:v(n),height:v(o)}}(document.body).width,n=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth;(0,h.hq)("\nhtml body {\n  overflow-y: hidden;\n  ".concat(n?"width: calc(100% - ".concat(t,"px);"):"","\n}"),i)}else(0,h.jL)(i);return function(){(0,h.jL)(i)}}),[e,i])}var b=!1;var y=function(t){return!1!==t&&((0,a.Z)()&&t?"string"===typeof t?document.querySelector(t):"function"===typeof t?t():t:null)};var w=r.forwardRef((function(t,e){var n=t.open,d=t.autoLock,h=t.getContainer,v=(t.debug,t.autoDestroy),p=void 0===v||v,m=t.children,w=r.useState(n),E=(0,o.Z)(w,2),x=E[0],_=E[1],Z=x||n;r.useEffect((function(){(p||n)&&_(n)}),[n,p]);var k=r.useState((function(){return y(h)})),M=(0,o.Z)(k,2),C=M[0],A=M[1];r.useEffect((function(){var t=y(h);A(null!==t&&void 0!==t?t:null)}));var R=function(t,e){var n=r.useState((function(){return(0,a.Z)()?document.createElement("div"):null})),i=(0,o.Z)(n,1)[0],c=r.useRef(!1),d=r.useContext(u),h=r.useState(f),v=(0,o.Z)(h,2),p=v[0],m=v[1],g=d||(c.current?void 0:function(t){m((function(e){return[t].concat((0,s.Z)(e))}))});function b(){i.parentElement||document.body.appendChild(i),c.current=!0}function y(){var t;null===(t=i.parentElement)||void 0===t||t.removeChild(i),c.current=!1}return(0,l.Z)((function(){return t?d?d(b):b():y(),y}),[t]),(0,l.Z)((function(){p.length&&(p.forEach((function(t){return t()})),m(f))}),[p]),[i,g]}(Z&&!C),P=(0,o.Z)(R,2),O=P[0],S=P[1],L=null!==C&&void 0!==C?C:O;g(d&&n&&(0,a.Z)()&&(L===O||L===document.body));var D=null;m&&(0,c.Yr)(m)&&e&&(D=m.ref);var N=(0,c.x1)(D,e);if(!Z||!(0,a.Z)()||void 0===C)return null;var z,H=!1===L||("boolean"===typeof z&&(b=z),b),T=m;return e&&(T=r.cloneElement(m,{ref:N})),r.createElement(u.Provider,{value:S},H?T:(0,i.createPortal)(T,L))}))},273:function(t,e,n){n.d(e,{Z:function(){return Y}});var o=n(1413),r=n(9439),i=n(5987),a=n(4655),c=n(1694),u=n.n(c),s=n(1143),l=n(4304),f=n(4129),d=n(3739),h=n(509),v=n(1605),p=n(3786),m=n(2791),g=n(4164),b=m.createContext(null);function y(t){return t?Array.isArray(t)?t:[t]:[]}var w=n(2386);function E(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(arguments.length>2?arguments[2]:void 0)?t[0]===e[0]:t[0]===e[0]&&t[1]===e[1]}function x(t,e,n,o){return e||(n?{motionName:"".concat(t,"-").concat(n)}:o?{motionName:o}:null)}function _(t){return t.ownerDocument.defaultView}function Z(t){for(var e=[],n=null===t||void 0===t?void 0:t.parentElement,o=["hidden","scroll","clip","auto"];n;){var r=_(n).getComputedStyle(n);[r.overflowX,r.overflowY,r.overflow].some((function(t){return o.includes(t)}))&&e.push(n),n=n.parentElement}return e}function k(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Number.isNaN(t)?e:t}function M(t){return k(parseFloat(t),0)}function C(t,e){var n=(0,o.Z)({},t);return(e||[]).forEach((function(t){if(!(t instanceof HTMLBodyElement||t instanceof HTMLHtmlElement)){var e=_(t).getComputedStyle(t),o=e.overflow,r=e.overflowClipMargin,i=e.borderTopWidth,a=e.borderBottomWidth,c=e.borderLeftWidth,u=e.borderRightWidth,s=t.getBoundingClientRect(),l=t.offsetHeight,f=t.clientHeight,d=t.offsetWidth,h=t.clientWidth,v=M(i),p=M(a),m=M(c),g=M(u),b=k(Math.round(s.width/d*1e3)/1e3),y=k(Math.round(s.height/l*1e3)/1e3),w=(d-h-m-g)*b,E=(l-f-v-p)*y,x=v*y,Z=p*y,C=m*b,A=g*b,R=0,P=0;if("clip"===o){var O=M(r);R=O*b,P=O*y}var S=s.x+C-R,L=s.y+x-P,D=S+s.width+2*R-C-A-w,N=L+s.height+2*P-x-Z-E;n.left=Math.max(n.left,S),n.top=Math.max(n.top,L),n.right=Math.min(n.right,D),n.bottom=Math.min(n.bottom,N)}})),n}function A(t){var e="".concat(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0),n=e.match(/^(.*)\%$/);return n?t*(parseFloat(n[1])/100):parseFloat(e)}function R(t,e){var n=e||[],o=(0,r.Z)(n,2),i=o[0],a=o[1];return[A(t.width,i),A(t.height,a)]}function P(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return[t[0],t[1]]}function O(t,e){var n,o=e[0],r=e[1];return n="t"===o?t.y:"b"===o?t.y+t.height:t.y+t.height/2,{x:"l"===r?t.x:"r"===r?t.x+t.width:t.x+t.width/2,y:n}}function S(t,e){var n={t:"b",b:"t",l:"r",r:"l"};return t.map((function(t,o){return o===e?n[t]||"c":t})).join("")}var L=n(3433);n(7750);var D=n(5314);var N=n(7462),z=n(8568),H=n(8834);function T(t){var e=t.prefixCls,n=t.align,o=t.arrow,r=t.arrowPos,i=o||{},a=i.className,c=i.content,s=r.x,l=void 0===s?0:s,f=r.y,d=void 0===f?0:f,h=m.useRef();if(!n||!n.points)return null;var v={position:"absolute"};if(!1!==n.autoArrow){var p=n.points[0],g=n.points[1],b=p[0],y=p[1],w=g[0],E=g[1];b!==w&&["t","b"].includes(b)?"t"===b?v.top=0:v.bottom=0:v.top=d,y!==E&&["l","r"].includes(y)?"l"===y?v.left=0:v.right=0:v.left=l}return m.createElement("div",{ref:h,className:u()("".concat(e,"-arrow"),a),style:v},c)}function W(t){var e=t.prefixCls,n=t.open,o=t.zIndex,r=t.mask,i=t.motion;return r?m.createElement(z.ZP,(0,N.Z)({},i,{motionAppear:!0,visible:n,removeOnLeave:!0}),(function(t){var n=t.className;return m.createElement("div",{style:{zIndex:o},className:u()("".concat(e,"-mask"),n)})})):null}var B=m.memo((function(t){return t.children}),(function(t,e){return e.cache}));var j=m.forwardRef((function(t,e){var n=t.popup,i=t.className,a=t.prefixCls,c=t.style,l=t.target,f=t.onVisibleChanged,d=t.open,h=t.keepDom,p=t.onClick,g=t.mask,b=t.arrow,y=t.arrowPos,w=t.align,E=t.motion,x=t.maskMotion,_=t.forceRender,Z=t.getPopupContainer,k=t.autoDestroy,M=t.portal,C=t.zIndex,A=t.onMouseEnter,R=t.onMouseLeave,P=t.onPointerEnter,O=t.ready,S=t.offsetX,L=t.offsetY,D=t.offsetR,j=t.offsetB,F=t.onAlign,V=t.onPrepare,Y=t.stretch,I=t.targetWidth,X=t.targetHeight,q="function"===typeof n?n():n,G=d||h,Q=(null===Z||void 0===Z?void 0:Z.length)>0,$=m.useState(!Z||!Q),J=(0,r.Z)($,2),K=J[0],U=J[1];if((0,v.Z)((function(){!K&&Q&&l&&U(!0)}),[K,Q,l]),!K)return null;var tt="auto",et={left:"-1000vw",top:"-1000vh",right:tt,bottom:tt};if(O||!d){var nt=w.points,ot=w._experimental,rt=null===ot||void 0===ot?void 0:ot.dynamicInset,it=rt&&"r"===nt[0][1],at=rt&&"b"===nt[0][0];it?(et.right=D,et.left=tt):(et.left=S,et.right=tt),at?(et.bottom=j,et.top=tt):(et.top=L,et.bottom=tt)}var ct={};return Y&&(Y.includes("height")&&X?ct.height=X:Y.includes("minHeight")&&X&&(ct.minHeight=X),Y.includes("width")&&I?ct.width=I:Y.includes("minWidth")&&I&&(ct.minWidth=I)),d||(ct.pointerEvents="none"),m.createElement(M,{open:_||G,getContainer:Z&&function(){return Z(l)},autoDestroy:k},m.createElement(W,{prefixCls:a,open:d,zIndex:C,mask:g,motion:x}),m.createElement(s.Z,{onResize:F,disabled:!d},(function(t){return m.createElement(z.ZP,(0,N.Z)({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:_,leavedClassName:"".concat(a,"-hidden")},E,{onAppearPrepare:V,onEnterPrepare:V,visible:d,onVisibleChanged:function(t){var e;null===E||void 0===E||null===(e=E.onVisibleChanged)||void 0===e||e.call(E,t),f(t)}}),(function(n,r){var s=n.className,l=n.style,f=u()(a,s,i);return m.createElement("div",{ref:(0,H.sQ)(t,e,r),className:f,style:(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({"--arrow-x":"".concat(y.x||0,"px"),"--arrow-y":"".concat(y.y||0,"px")},et),ct),l),{},{boxSizing:"border-box",zIndex:C},c),onMouseEnter:A,onMouseLeave:R,onPointerEnter:P,onClick:p},b&&m.createElement(T,{prefixCls:a,arrow:b,arrowPos:y,align:w}),m.createElement(B,{cache:!d},q))}))})))}));var F=m.forwardRef((function(t,e){var n=t.children,o=t.getTriggerDOMNode,r=(0,H.Yr)(n),i=m.useCallback((function(t){(0,H.mH)(e,o?o(t):t)}),[o]),a=(0,H.x1)(i,n.ref);return r?m.cloneElement(n,{ref:a}):n})),V=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];var Y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a.Z,e=m.forwardRef((function(e,n){var a=e.prefixCls,c=void 0===a?"rc-trigger-popup":a,M=e.children,A=e.action,N=void 0===A?"hover":A,z=e.showAction,H=e.hideAction,T=e.popupVisible,W=e.defaultPopupVisible,B=e.onPopupVisibleChange,Y=e.afterPopupVisibleChange,I=e.mouseEnterDelay,X=e.mouseLeaveDelay,q=void 0===X?.1:X,G=e.focusDelay,Q=e.blurDelay,$=e.mask,J=e.maskClosable,K=void 0===J||J,U=e.getPopupContainer,tt=e.forceRender,et=e.autoDestroy,nt=e.destroyPopupOnHide,ot=e.popup,rt=e.popupClassName,it=e.popupStyle,at=e.popupPlacement,ct=e.builtinPlacements,ut=void 0===ct?{}:ct,st=e.popupAlign,lt=e.zIndex,ft=e.stretch,dt=e.getPopupClassNameFromAlign,ht=e.alignPoint,vt=e.onPopupClick,pt=e.onPopupAlign,mt=e.arrow,gt=e.popupMotion,bt=e.maskMotion,yt=e.popupTransitionName,wt=e.popupAnimation,Et=e.maskTransitionName,xt=e.maskAnimation,_t=e.className,Zt=e.getTriggerDOMNode,kt=(0,i.Z)(e,V),Mt=et||nt||!1,Ct=m.useState(!1),At=(0,r.Z)(Ct,2),Rt=At[0],Pt=At[1];(0,v.Z)((function(){Pt((0,p.Z)())}),[]);var Ot=m.useRef({}),St=m.useContext(b),Lt=m.useMemo((function(){return{registerSubPopup:function(t,e){Ot.current[t]=e,null===St||void 0===St||St.registerSubPopup(t,e)}}}),[St]),Dt=(0,h.Z)(),Nt=m.useState(null),zt=(0,r.Z)(Nt,2),Ht=zt[0],Tt=zt[1],Wt=(0,d.Z)((function(t){(0,l.S)(t)&&Ht!==t&&Tt(t),null===St||void 0===St||St.registerSubPopup(Dt,t)})),Bt=m.useState(null),jt=(0,r.Z)(Bt,2),Ft=jt[0],Vt=jt[1],Yt=(0,d.Z)((function(t){(0,l.S)(t)&&Ft!==t&&Vt(t)})),It=m.Children.only(M),Xt=(null===It||void 0===It?void 0:It.props)||{},qt={},Gt=(0,d.Z)((function(t){var e,n,o=Ft;return(null===o||void 0===o?void 0:o.contains(t))||(null===(e=(0,f.A)(o))||void 0===e?void 0:e.host)===t||t===o||(null===Ht||void 0===Ht?void 0:Ht.contains(t))||(null===(n=(0,f.A)(Ht))||void 0===n?void 0:n.host)===t||t===Ht||Object.values(Ot.current).some((function(e){return(null===e||void 0===e?void 0:e.contains(t))||t===e}))})),Qt=x(c,gt,wt,yt),$t=x(c,bt,xt,Et),Jt=m.useState(W||!1),Kt=(0,r.Z)(Jt,2),Ut=Kt[0],te=Kt[1],ee=null!==T&&void 0!==T?T:Ut,ne=(0,d.Z)((function(t){void 0===T&&te(t)}));(0,v.Z)((function(){te(T||!1)}),[T]);var oe=m.useRef(ee);oe.current=ee;var re=(0,d.Z)((function(t){(0,g.flushSync)((function(){ee!==t&&(ne(t),null===B||void 0===B||B(t))}))})),ie=m.useRef(),ae=function(){clearTimeout(ie.current)},ce=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;ae(),0===e?re(t):ie.current=setTimeout((function(){re(t)}),1e3*e)};m.useEffect((function(){return ae}),[]);var ue=m.useState(!1),se=(0,r.Z)(ue,2),le=se[0],fe=se[1];(0,v.Z)((function(t){t&&!ee||fe(!0)}),[ee]);var de=m.useState(null),he=(0,r.Z)(de,2),ve=he[0],pe=he[1],me=m.useState([0,0]),ge=(0,r.Z)(me,2),be=ge[0],ye=ge[1],we=function(t){ye([t.clientX,t.clientY])},Ee=function(t,e,n,i,a,c,u){var s=m.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:a[i]||{}}),f=(0,r.Z)(s,2),h=f[0],p=f[1],g=m.useRef(0),b=m.useMemo((function(){return e?Z(e):[]}),[e]),y=m.useRef({});t||(y.current={});var E=(0,d.Z)((function(){if(e&&n&&t){var s,f,d,h=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:it,o=W.x+t,r=W.y+e,i=o+G,a=r+q,c=Math.max(o,n.left),u=Math.max(r,n.top),s=Math.min(i,n.right),l=Math.min(a,n.bottom);return Math.max(0,(s-c)*(l-u))},v=function(){wt=W.y+Lt,Et=wt+q,xt=W.x+St,_t=xt+G},m=e,g=m.ownerDocument,E=_(m).getComputedStyle(m),x=E.width,Z=E.height,M=E.position,A=m.style.left,L=m.style.top,D=m.style.right,N=m.style.bottom,z=(0,o.Z)((0,o.Z)({},a[i]),c),H=g.createElement("div");if(null===(s=m.parentElement)||void 0===s||s.appendChild(H),H.style.left="".concat(m.offsetLeft,"px"),H.style.top="".concat(m.offsetTop,"px"),H.style.position=M,H.style.height="".concat(m.offsetHeight,"px"),H.style.width="".concat(m.offsetWidth,"px"),m.style.left="0",m.style.top="0",m.style.right="auto",m.style.bottom="auto",Array.isArray(n))d={x:n[0],y:n[1],width:0,height:0};else{var T=n.getBoundingClientRect();d={x:T.x,y:T.y,width:T.width,height:T.height}}var W=m.getBoundingClientRect(),B=g.documentElement,j=B.clientWidth,F=B.clientHeight,V=B.scrollWidth,Y=B.scrollHeight,I=B.scrollTop,X=B.scrollLeft,q=W.height,G=W.width,Q=d.height,$=d.width,J={left:0,top:0,right:j,bottom:F},K={left:-X,top:-I,right:V-X,bottom:Y-I},U=z.htmlRegion,tt="visible",et="visibleFirst";"scroll"!==U&&U!==et&&(U=tt);var nt=U===et,ot=C(K,b),rt=C(J,b),it=U===tt?rt:ot,at=nt?rt:it;m.style.left="auto",m.style.top="auto",m.style.right="0",m.style.bottom="0";var ct=m.getBoundingClientRect();m.style.left=A,m.style.top=L,m.style.right=D,m.style.bottom=N,null===(f=m.parentElement)||void 0===f||f.removeChild(H);var ut=k(Math.round(G/parseFloat(x)*1e3)/1e3),st=k(Math.round(q/parseFloat(Z)*1e3)/1e3);if(0===ut||0===st||(0,l.S)(n)&&!(0,w.Z)(n))return;var lt=z.offset,ft=z.targetOffset,dt=R(W,lt),ht=(0,r.Z)(dt,2),vt=ht[0],pt=ht[1],mt=R(d,ft),gt=(0,r.Z)(mt,2),bt=gt[0],yt=gt[1];d.x-=bt,d.y-=yt;var wt,Et,xt,_t,Zt=z.points||[],kt=(0,r.Z)(Zt,2),Mt=kt[0],Ct=P(kt[1]),At=P(Mt),Rt=O(d,Ct),Pt=O(W,At),Ot=(0,o.Z)({},z),St=Rt.x-Pt.x+vt,Lt=Rt.y-Pt.y+pt,Dt=h(St,Lt),Nt=h(St,Lt,rt),zt=O(d,["t","l"]),Ht=O(W,["t","l"]),Tt=O(d,["b","r"]),Wt=O(W,["b","r"]),Bt=z.overflow||{},jt=Bt.adjustX,Ft=Bt.adjustY,Vt=Bt.shiftX,Yt=Bt.shiftY,It=function(t){return"boolean"===typeof t?t:t>=0};v();var Xt=It(Ft),qt=At[0]===Ct[0];if(Xt&&"t"===At[0]&&(Et>at.bottom||y.current.bt)){var Gt=Lt;qt?Gt-=q-Q:Gt=zt.y-Wt.y-pt;var Qt=h(St,Gt),$t=h(St,Gt,rt);Qt>Dt||Qt===Dt&&(!nt||$t>=Nt)?(y.current.bt=!0,Lt=Gt,pt=-pt,Ot.points=[S(At,0),S(Ct,0)]):y.current.bt=!1}if(Xt&&"b"===At[0]&&(wt<at.top||y.current.tb)){var Jt=Lt;qt?Jt+=q-Q:Jt=Tt.y-Ht.y-pt;var Kt=h(St,Jt),Ut=h(St,Jt,rt);Kt>Dt||Kt===Dt&&(!nt||Ut>=Nt)?(y.current.tb=!0,Lt=Jt,pt=-pt,Ot.points=[S(At,0),S(Ct,0)]):y.current.tb=!1}var te=It(jt),ee=At[1]===Ct[1];if(te&&"l"===At[1]&&(_t>at.right||y.current.rl)){var ne=St;ee?ne-=G-$:ne=zt.x-Wt.x-vt;var oe=h(ne,Lt),re=h(ne,Lt,rt);oe>Dt||oe===Dt&&(!nt||re>=Nt)?(y.current.rl=!0,St=ne,vt=-vt,Ot.points=[S(At,1),S(Ct,1)]):y.current.rl=!1}if(te&&"r"===At[1]&&(xt<at.left||y.current.lr)){var ie=St;ee?ie+=G-$:ie=Tt.x-Ht.x-vt;var ae=h(ie,Lt),ce=h(ie,Lt,rt);ae>Dt||ae===Dt&&(!nt||ce>=Nt)?(y.current.lr=!0,St=ie,vt=-vt,Ot.points=[S(At,1),S(Ct,1)]):y.current.lr=!1}v();var ue=!0===Vt?0:Vt;"number"===typeof ue&&(xt<rt.left&&(St-=xt-rt.left-vt,d.x+$<rt.left+ue&&(St+=d.x-rt.left+$-ue)),_t>rt.right&&(St-=_t-rt.right-vt,d.x>rt.right-ue&&(St+=d.x-rt.right+ue)));var se=!0===Yt?0:Yt;"number"===typeof se&&(wt<rt.top&&(Lt-=wt-rt.top-pt,d.y+Q<rt.top+se&&(Lt+=d.y-rt.top+Q-se)),Et>rt.bottom&&(Lt-=Et-rt.bottom-pt,d.y>rt.bottom-se&&(Lt+=d.y-rt.bottom+se)));var le=W.x+St,fe=le+G,de=W.y+Lt,he=de+q,ve=d.x,pe=ve+$,me=d.y,ge=me+Q,be=(Math.max(le,ve)+Math.min(fe,pe))/2-le,ye=(Math.max(de,me)+Math.min(he,ge))/2-de;null===u||void 0===u||u(e,Ot);var we=ct.right-W.x-(St+W.width),Ee=ct.bottom-W.y-(Lt+W.height);p({ready:!0,offsetX:St/ut,offsetY:Lt/st,offsetR:we/ut,offsetB:Ee/st,arrowX:be/ut,arrowY:ye/st,scaleX:ut,scaleY:st,align:Ot})}})),x=function(){p((function(t){return(0,o.Z)((0,o.Z)({},t),{},{ready:!1})}))};return(0,v.Z)(x,[i]),(0,v.Z)((function(){t||x()}),[t]),[h.ready,h.offsetX,h.offsetY,h.offsetR,h.offsetB,h.arrowX,h.arrowY,h.scaleX,h.scaleY,h.align,function(){g.current+=1;var t=g.current;Promise.resolve().then((function(){g.current===t&&E()}))}]}(ee,Ht,ht?be:Ft,at,ut,st,pt),xe=(0,r.Z)(Ee,11),_e=xe[0],Ze=xe[1],ke=xe[2],Me=xe[3],Ce=xe[4],Ae=xe[5],Re=xe[6],Pe=xe[7],Oe=xe[8],Se=xe[9],Le=xe[10],De=function(t,e,n,o){return m.useMemo((function(){var r=y(null!==n&&void 0!==n?n:e),i=y(null!==o&&void 0!==o?o:e),a=new Set(r),c=new Set(i);return t&&(a.has("hover")&&(a.delete("hover"),a.add("click")),c.has("hover")&&(c.delete("hover"),c.add("click"))),[a,c]}),[t,e,n,o])}(Rt,N,z,H),Ne=(0,r.Z)(De,2),ze=Ne[0],He=Ne[1],Te=ze.has("click"),We=He.has("click")||He.has("contextMenu"),Be=(0,d.Z)((function(){le||Le()}));!function(t,e,n,o,r){(0,v.Z)((function(){if(t&&e&&n){var i=function(){o(),r()},a=n,c=Z(e),u=Z(a),s=_(a),l=new Set([s].concat((0,L.Z)(c),(0,L.Z)(u)));return l.forEach((function(t){t.addEventListener("scroll",i,{passive:!0})})),s.addEventListener("resize",i,{passive:!0}),o(),function(){l.forEach((function(t){t.removeEventListener("scroll",i),s.removeEventListener("resize",i)}))}}}),[t,e,n])}(ee,Ft,Ht,Be,(function(){oe.current&&ht&&We&&ce(!1)})),(0,v.Z)((function(){Be()}),[be,at]),(0,v.Z)((function(){!ee||null!==ut&&void 0!==ut&&ut[at]||Be()}),[JSON.stringify(st)]);var je=m.useMemo((function(){var t=function(t,e,n,o){for(var r=n.points,i=Object.keys(t),a=0;a<i.length;a+=1){var c,u=i[a];if(E(null===(c=t[u])||void 0===c?void 0:c.points,r,o))return"".concat(e,"-placement-").concat(u)}return""}(ut,c,Se,ht);return u()(t,null===dt||void 0===dt?void 0:dt(Se))}),[Se,dt,ut,c,ht]);m.useImperativeHandle(n,(function(){return{forceAlign:Be}}));var Fe=m.useState(0),Ve=(0,r.Z)(Fe,2),Ye=Ve[0],Ie=Ve[1],Xe=m.useState(0),qe=(0,r.Z)(Xe,2),Ge=qe[0],Qe=qe[1],$e=function(){if(ft&&Ft){var t=Ft.getBoundingClientRect();Ie(t.width),Qe(t.height)}};function Je(t,e,n,o){qt[t]=function(r){var i;null===o||void 0===o||o(r),ce(e,n);for(var a=arguments.length,c=new Array(a>1?a-1:0),u=1;u<a;u++)c[u-1]=arguments[u];null===(i=Xt[t])||void 0===i||i.call.apply(i,[Xt,r].concat(c))}}(0,v.Z)((function(){ve&&(Le(),ve(),pe(null))}),[ve]),(Te||We)&&(qt.onClick=function(t){var e;oe.current&&We?ce(!1):!oe.current&&Te&&(we(t),ce(!0));for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];null===(e=Xt.onClick)||void 0===e||e.call.apply(e,[Xt,t].concat(o))}),function(t,e,n,o,i,a,c,u){var s=m.useRef(t),l=m.useRef(!1);s.current!==t&&(l.current=!0,s.current=t),m.useEffect((function(){var t=(0,D.Z)((function(){l.current=!1}));return function(){D.Z.cancel(t)}}),[t]),m.useEffect((function(){if(e&&o&&(!i||a)){var t=function(){var t=!1;return[function(e){var n=e.target;t=c(n)},function(e){var n=e.target;l.current||!s.current||t||c(n)||u(!1)}]},d=t(),h=(0,r.Z)(d,2),v=h[0],p=h[1],m=t(),g=(0,r.Z)(m,2),b=g[0],y=g[1],w=_(o);w.addEventListener("mousedown",v,!0),w.addEventListener("click",p,!0),w.addEventListener("contextmenu",p,!0);var E=(0,f.A)(n);return E&&(E.addEventListener("mousedown",b,!0),E.addEventListener("click",y,!0),E.addEventListener("contextmenu",y,!0)),function(){w.removeEventListener("mousedown",v,!0),w.removeEventListener("click",p,!0),w.removeEventListener("contextmenu",p,!0),E&&(E.removeEventListener("mousedown",b,!0),E.removeEventListener("click",y,!0),E.removeEventListener("contextmenu",y,!0))}}}),[e,n,o,i,a])}(ee,We,Ft,Ht,$,K,Gt,ce);var Ke,Ue,tn=ze.has("hover"),en=He.has("hover");tn&&(Je("onMouseEnter",!0,I,(function(t){we(t)})),Je("onPointerEnter",!0,I,(function(t){we(t)})),Ke=function(){(ee||le)&&ce(!0,I)},ht&&(qt.onMouseMove=function(t){var e;null===(e=Xt.onMouseMove)||void 0===e||e.call(Xt,t)})),en&&(Je("onMouseLeave",!1,q),Je("onPointerLeave",!1,q),Ue=function(){ce(!1,q)}),ze.has("focus")&&Je("onFocus",!0,G),He.has("focus")&&Je("onBlur",!1,Q),ze.has("contextMenu")&&(qt.onContextMenu=function(t){var e;oe.current&&He.has("contextMenu")?ce(!1):(we(t),ce(!0)),t.preventDefault();for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];null===(e=Xt.onContextMenu)||void 0===e||e.call.apply(e,[Xt,t].concat(o))}),_t&&(qt.className=u()(Xt.className,_t));var nn=(0,o.Z)((0,o.Z)({},Xt),qt),on={};["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"].forEach((function(t){kt[t]&&(on[t]=function(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];null===(e=nn[t])||void 0===e||e.call.apply(e,[nn].concat(o)),kt[t].apply(kt,o)})}));var rn=m.cloneElement(It,(0,o.Z)((0,o.Z)({},nn),on)),an={x:Ae,y:Re},cn=mt?(0,o.Z)({},!0!==mt?mt:{}):null;return m.createElement(m.Fragment,null,m.createElement(s.Z,{disabled:!ee,ref:Yt,onResize:function(){$e(),Be()}},m.createElement(F,{getTriggerDOMNode:Zt},rn)),m.createElement(b.Provider,{value:Lt},m.createElement(j,{portal:t,ref:Wt,prefixCls:c,popup:ot,className:u()(rt,je),style:it,target:Ft,onMouseEnter:Ke,onMouseLeave:Ue,onPointerEnter:Ke,zIndex:lt,open:ee,keepDom:le,onClick:vt,mask:$,motion:Qt,maskMotion:$t,onVisibleChanged:function(t){fe(!1),Le(),null===Y||void 0===Y||Y(t)},onPrepare:function(){return new Promise((function(t){$e(),pe((function(){return t}))}))},forceRender:tt,autoDestroy:Mt,getPopupContainer:U,align:Se,arrow:cn,arrowPos:an,ready:_e,offsetX:Ze,offsetY:ke,offsetR:Me,offsetB:Ce,onAlign:Be,stretch:ft,targetWidth:Ye/Pe,targetHeight:Ge/Oe})))}));return e}(a.Z)},9464:function(t,e,n){n.d(e,{m:function(){return c}});var o=function(){return{height:0,opacity:0}},r=function(t){return{height:t.scrollHeight,opacity:1}},i=function(t){return{height:t?t.offsetHeight:0}},a=function(t,e){return!0===(null===e||void 0===e?void 0:e.deadline)||"height"===e.propertyName},c=function(t,e,n){return void 0!==n?n:"".concat(t,"-").concat(e)};e.Z=function(){return{motionName:"".concat(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ant","-motion-collapse"),onAppearStart:o,onEnterStart:o,onAppearActive:r,onEnterActive:r,onLeaveStart:i,onLeaveActive:o,onAppearEnd:a,onEnterEnd:a,onLeaveEnd:a,motionDeadline:500}}},11:function(t,e,n){n.d(e,{BR:function(){return s},ri:function(){return u}});var o=n(4942),r=n(1694),i=n.n(r),a=(n(5501),n(2791)),c=a.createContext(null),u=function(t,e){var n=a.useContext(c),r=a.useMemo((function(){var r;if(!n)return"";var a=n.compactDirection,c=n.isFirstItem,u=n.isLastItem,s="vertical"===a?"-vertical-":"-";return i()("".concat(t,"-compact").concat(s,"item"),(r={},(0,o.Z)(r,"".concat(t,"-compact").concat(s,"first-item"),c),(0,o.Z)(r,"".concat(t,"-compact").concat(s,"last-item"),u),(0,o.Z)(r,"".concat(t,"-compact").concat(s,"item-rtl"),"rtl"===e),r))}),[t,e,n]);return{compactSize:null===n||void 0===n?void 0:n.compactSize,compactDirection:null===n||void 0===n?void 0:n.compactDirection,compactItemClassnames:r}},s=function(t){var e=t.children;return a.createElement(c.Provider,{value:null},e)}},8303:function(t,e,n){n.d(e,{R:function(){return r}});var o=n(4942),r=function(t,e,n,r){var i,a=arguments.length>4&&void 0!==arguments[4]&&arguments[4]?"&":"";return i={},(0,o.Z)(i,"\n      ".concat(a).concat(t,"-enter,\n      ").concat(a).concat(t,"-appear\n    "),Object.assign(Object.assign({},function(t){return{animationDuration:t,animationFillMode:"both"}}(r)),{animationPlayState:"paused"})),(0,o.Z)(i,"".concat(a).concat(t,"-leave"),Object.assign(Object.assign({},function(t){return{animationDuration:t,animationFillMode:"both"}}(r)),{animationPlayState:"paused"})),(0,o.Z)(i,"\n      ".concat(a).concat(t,"-enter").concat(t,"-enter-active,\n      ").concat(a).concat(t,"-appear").concat(t,"-appear-active\n    "),{animationName:e,animationPlayState:"running"}),(0,o.Z)(i,"".concat(a).concat(t,"-leave").concat(t,"-leave-active"),{animationName:n,animationPlayState:"running",pointerEvents:"none"}),i}},1143:function(t,e,n){n.d(e,{Z:function(){return V}});var o=n(7462),r=n(2791),i=n(5501),a=(n(632),n(1413)),c=n(8834),u=n(4304),s=function(){if("undefined"!==typeof Map)return Map;function t(t,e){var n=-1;return t.some((function(t,o){return t[0]===e&&(n=o,!0)})),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var n=t(this.__entries__,e),o=this.__entries__[n];return o&&o[1]},e.prototype.set=function(e,n){var o=t(this.__entries__,e);~o?this.__entries__[o][1]=n:this.__entries__.push([e,n])},e.prototype.delete=function(e){var n=this.__entries__,o=t(n,e);~o&&n.splice(o,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var n=0,o=this.__entries__;n<o.length;n++){var r=o[n];t.call(e,r[1],r[0])}},e}()}(),l="undefined"!==typeof window&&"undefined"!==typeof document&&window.document===document,f="undefined"!==typeof n.g&&n.g.Math===Math?n.g:"undefined"!==typeof self&&self.Math===Math?self:"undefined"!==typeof window&&window.Math===Math?window:Function("return this")(),d="function"===typeof requestAnimationFrame?requestAnimationFrame.bind(f):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)};var h=["top","right","bottom","left","width","height","size","weight"],v="undefined"!==typeof MutationObserver,p=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var n=!1,o=!1,r=0;function i(){n&&(n=!1,t()),o&&c()}function a(){d(i)}function c(){var t=Date.now();if(n){if(t-r<2)return;o=!0}else n=!0,o=!1,setTimeout(a,e);r=t}return c}(this.refresh.bind(this),20)}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,n=e.indexOf(t);~n&&e.splice(n,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){l&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),v?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){l&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,n=void 0===e?"":e;h.some((function(t){return!!~n.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),m=function(t,e){for(var n=0,o=Object.keys(e);n<o.length;n++){var r=o[n];Object.defineProperty(t,r,{value:e[r],enumerable:!1,writable:!1,configurable:!0})}return t},g=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||f},b=Z(0,0,0,0);function y(t){return parseFloat(t)||0}function w(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce((function(e,n){return e+y(t["border-"+n+"-width"])}),0)}function E(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return b;var o=g(t).getComputedStyle(t),r=function(t){for(var e={},n=0,o=["top","right","bottom","left"];n<o.length;n++){var r=o[n],i=t["padding-"+r];e[r]=y(i)}return e}(o),i=r.left+r.right,a=r.top+r.bottom,c=y(o.width),u=y(o.height);if("border-box"===o.boxSizing&&(Math.round(c+i)!==e&&(c-=w(o,"left","right")+i),Math.round(u+a)!==n&&(u-=w(o,"top","bottom")+a)),!function(t){return t===g(t).document.documentElement}(t)){var s=Math.round(c+i)-e,l=Math.round(u+a)-n;1!==Math.abs(s)&&(c-=s),1!==Math.abs(l)&&(u-=l)}return Z(r.left,r.top,c,u)}var x="undefined"!==typeof SVGGraphicsElement?function(t){return t instanceof g(t).SVGGraphicsElement}:function(t){return t instanceof g(t).SVGElement&&"function"===typeof t.getBBox};function _(t){return l?x(t)?function(t){var e=t.getBBox();return Z(0,0,e.width,e.height)}(t):E(t):b}function Z(t,e,n,o){return{x:t,y:e,width:n,height:o}}var k=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Z(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=_(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),M=function(t,e){var n=function(t){var e=t.x,n=t.y,o=t.width,r=t.height,i="undefined"!==typeof DOMRectReadOnly?DOMRectReadOnly:Object,a=Object.create(i.prototype);return m(a,{x:e,y:n,width:o,height:r,top:n,right:e+o,bottom:r+n,left:e}),a}(e);m(this,{target:t,contentRect:n})},C=function(){function t(t,e,n){if(this.activeObservations_=[],this.observations_=new s,"function"!==typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=n}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof g(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new k(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!==typeof Element&&Element instanceof Object){if(!(t instanceof g(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new M(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),A="undefined"!==typeof WeakMap?new WeakMap:new s,R=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=p.getInstance(),o=new C(e,n,this);A.set(this,o)};["observe","unobserve","disconnect"].forEach((function(t){R.prototype[t]=function(){var e;return(e=A.get(this))[t].apply(e,arguments)}}));var P="undefined"!==typeof f.ResizeObserver?f.ResizeObserver:R,O=new Map;var S=new P((function(t){t.forEach((function(t){var e,n=t.target;null===(e=O.get(n))||void 0===e||e.forEach((function(t){return t(n)}))}))}));var L=n(5671),D=n(3144),N=n(136),z=n(8557),H=function(t){(0,N.Z)(n,t);var e=(0,z.Z)(n);function n(){return(0,L.Z)(this,n),e.apply(this,arguments)}return(0,D.Z)(n,[{key:"render",value:function(){return this.props.children}}]),n}(r.Component),T=r.createContext(null);function W(t,e){var n=t.children,o=t.disabled,i=r.useRef(null),s=r.useRef(null),l=r.useContext(T),f="function"===typeof n,d=f?n(i):n,h=r.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),v=!f&&r.isValidElement(d)&&(0,c.Yr)(d),p=v?d.ref:null,m=r.useMemo((function(){return(0,c.sQ)(p,i)}),[p,i]),g=function(){return(0,u.Z)(i.current)||(0,u.Z)(s.current)};r.useImperativeHandle(e,(function(){return g()}));var b=r.useRef(t);b.current=t;var y=r.useCallback((function(t){var e=b.current,n=e.onResize,o=e.data,r=t.getBoundingClientRect(),i=r.width,c=r.height,u=t.offsetWidth,s=t.offsetHeight,f=Math.floor(i),d=Math.floor(c);if(h.current.width!==f||h.current.height!==d||h.current.offsetWidth!==u||h.current.offsetHeight!==s){var v={width:f,height:d,offsetWidth:u,offsetHeight:s};h.current=v;var p=u===Math.round(i)?i:u,m=s===Math.round(c)?c:s,g=(0,a.Z)((0,a.Z)({},v),{},{offsetWidth:p,offsetHeight:m});null===l||void 0===l||l(g,t,o),n&&Promise.resolve().then((function(){n(g,t)}))}}),[]);return r.useEffect((function(){var t,e,n=g();return n&&!o&&(t=n,e=y,O.has(t)||(O.set(t,new Set),S.observe(t)),O.get(t).add(e)),function(){return function(t,e){O.has(t)&&(O.get(t).delete(e),O.get(t).size||(S.unobserve(t),O.delete(t)))}(n,y)}}),[i.current,o]),r.createElement(H,{ref:s},v?r.cloneElement(d,{ref:m}):d)}var B=r.forwardRef(W);function j(t,e){var n=t.children;return("function"===typeof n?[n]:(0,i.Z)(n)).map((function(n,i){var a=(null===n||void 0===n?void 0:n.key)||"".concat("rc-observer-key","-").concat(i);return r.createElement(B,(0,o.Z)({},t,{key:a,ref:0===i?e:void 0}),n)}))}var F=r.forwardRef(j);F.Collection=function(t){var e=t.children,n=t.onBatchResize,o=r.useRef(0),i=r.useRef([]),a=r.useContext(T),c=r.useCallback((function(t,e,r){o.current+=1;var c=o.current;i.current.push({size:t,element:e,data:r}),Promise.resolve().then((function(){c===o.current&&(null===n||void 0===n||n(i.current),i.current=[])})),null===a||void 0===a||a(t,e,r)}),[n,a]);return r.createElement(T.Provider,{value:c},e)};var V=F},5501:function(t,e,n){n.d(e,{Z:function(){return i}});var o=n(2791),r=n(7441);function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=[];return o.Children.forEach(t,(function(t){(void 0!==t&&null!==t||e.keepEmpty)&&(Array.isArray(t)?n=n.concat(i(t)):(0,r.isFragment)(t)&&t.props?n=n.concat(i(t.props.children,e)):n.push(t))})),n}},2386:function(t,e){e.Z=function(t){if(!t)return!1;if(t instanceof Element){if(t.offsetParent)return!0;if(t.getBBox){var e=t.getBBox(),n=e.width,o=e.height;if(n||o)return!0}if(t.getBoundingClientRect){var r=t.getBoundingClientRect(),i=r.width,a=r.height;if(i||a)return!0}}return!1}},509:function(t,e,n){var o;n.d(e,{Z:function(){return u}});var r=n(9439),i=n(1413),a=n(2791);var c=0;function u(t){var e=a.useState("ssr-id"),u=(0,r.Z)(e,2),s=u[0],l=u[1],f=(0,i.Z)({},o||(o=n.t(a,2))).useId,d=null===f||void 0===f?void 0:f();return a.useEffect((function(){if(!f){var t=c;c+=1,l("rc_unique_".concat(t))}}),[]),t||(d||s)}},3786:function(t,e){e.Z=function(){if("undefined"===typeof navigator||"undefined"===typeof window)return!1;var t=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null===t||void 0===t?void 0:t.substr(0,4))}}}]);
//# sourceMappingURL=2959.e0b53f1f.chunk.js.map