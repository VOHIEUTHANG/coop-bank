"use strict";(self.webpackChunkshopdunk=self.webpackChunkshopdunk||[]).push([[9319],{655:function(e,n,i){var l,t=i(9439),o=i(168),a=i(2791),s=i(2360),r=i(184),c=s.ZP.span(l||(l=(0,o.Z)(["\n  transform: ",";\n  color: ",";\n"])),(function(e){return e.open?"rotate(180deg)":""}),(function(e){return e.open?"#333333":""}));n.Z=function(e){e.style;var n=e.title,i=e.children,l=e.id,o=e.isRequired,s=void 0!==o&&o,d=e.componentCustom,u=e.defaultOpen,v=void 0===u||u,f=(0,a.useState)(v),m=(0,t.Z)(f,2),h=m[0],p=m[1];return(0,r.jsx)(a.Fragment,{children:(0,r.jsx)("div",{id:l,className:"cb_items_frm",children:(0,r.jsxs)("div",{className:"cb_collapse ".concat(h?"cb_active":""),children:[!!n&&(0,r.jsxs)("div",{className:"cb_collapse_title",style:{width:"fit-content",gap:"5px"},children:[(0,r.jsx)(c,{open:h,className:"ti-angle-down",onClick:function(){p(!h)}}),(0,r.jsxs)("h3",{children:[n,s&&(0,r.jsx)("span",{className:"cb_red",children:"*"})]})]}),h&&(0,r.jsx)("div",{className:"cb_collapse_panel",children:i}),d&&d]})})})}},5169:function(e,n,i){var l,t=i(168),o=(i(2791),i(2360)),a=i(184),s=o.ZP.div(l||(l=(0,t.Z)(["\n  display: block;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #f86c6b;\n"])));n.Z=function(e){var n=e.message;return(0,a.jsx)(s,{children:n})}},9257:function(e,n,i){var l,t=i(1413),o=i(5987),a=i(168),s=i(2791),r=i(1134),c=i(5169),d=i(2648),u=i(7892),v=i.n(u),f=i(2360),m=i(184),h=["field","validation","placeholder","disabled","style","format","bordered","allowClear"],p=(0,f.ZP)(d.Z)(l||(l=(0,a.Z)(["\n  .ant-picker-input input {\n    color: black !important;\n  }\n"])));n.Z=function(e){var n=e.field,i=e.validation,l=e.placeholder,a=e.disabled,d=void 0!==a&&a,u=e.style,f=e.format,b=e.bordered,x=e.allowClear,g=(0,o.Z)(e,h),_=(0,r.Gc)(),j=_.getFieldState(n,_.formState).error;return s.useEffect((function(){_.register(n,i)}),[_,n,i]),(0,m.jsxs)(s.Fragment,{children:[(0,m.jsx)(p,(0,t.Z)({bordered:b,allowClear:x,disabled:d,placeholder:l,value:_.watch(n)?v()(_.watch(n),f):"",onChange:function(e,i){i?(_.clearErrors(n),_.setValue(n,i)):_.setValue(n,null)},format:f,style:u},g)),j&&(0,m.jsx)(c.Z,{message:null===j||void 0===j?void 0:j.message})]})}},9487:function(e,n,i){var l=i(1413),t=i(5987),o=i(2791),a=i(1134),s=i(5169),r=i(184),c=["field","validation","type","placeholder","className","disabled"],d=function(e){var n,i=e.field,d=e.validation,u=e.type,v=void 0===u?"text":u,f=e.placeholder,m=e.className,h=e.disabled,p=(0,t.Z)(e,c),b=(0,a.Gc)(),x=b.getFieldState(i,b.formState).error;o.useEffect((function(){b.register(i,d)}),[b,i,d]);return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("input",(0,l.Z)({type:v,placeholder:f,className:m,disabled:h,value:null!==(n=b.watch(i))&&void 0!==n?n:"",checked:("checkbox"===v||"radio"==v)&&Boolean(b.watch(i)),onChange:function(e){b.clearErrors(i),b.setValue(i,"checkbox"===v||"radio"===v?!!e.target.checked:e.target.value||null)},style:{lineHeight:1}},p)),x&&(0,r.jsx)(s.Z,{message:null===x||void 0===x?void 0:x.message})]})};d.defaultProps={type:"text",className:""},n.Z=d},6503:function(e,n,i){var l,t,o,a=i(168),s=(i(2791),i(2360)),r=i(184),c=s.ZP.div(l||(l=(0,a.Z)(["\n  pointer-events: ",";\n"])),(function(e){return e.nonPoiner?"none":"auto"})),d=s.ZP.span(t||(t=(0,a.Z)(["\n  display: ",";\n"])),(function(e){var n;return null!==(n=e.display)&&void 0!==n?n:"block"})),u=s.ZP.span(o||(o=(0,a.Z)(["\n  opacity: 0.7;\n  color: #19376d;\n  font-weight: bold;\n"])));n.Z=function(e){var n=e.className,i=e.label,l=e.hiddenLabel,t=void 0!==l&&l,o=e.isRequired,a=void 0!==o&&o,s=e.children,v=e.disabled,f=e.display,m=e.style,h=e.linkLabelHref,p=e.labelHref,b=e.isBlankHref,x=void 0===b||b;return(0,r.jsx)(c,{nonPoiner:v,className:n,children:(0,r.jsxs)("div",{className:"cb_frm_box ".concat(v?"cb_disable":""," ").concat("gray"===m?"cb_readonly":""),children:[!t&&(0,r.jsxs)(u,{children:[i," ",a&&(0,r.jsx)("span",{className:"cb_red",children:"*"}),(0,r.jsx)("a",{target:x?"_blank":"",href:h,children:p})]}),(0,r.jsx)(d,{display:f,disabled:v,children:s})]})})}},5563:function(e,n,i){var l=i(2791),t=i(1134),o=i(5169),a=i(184);n.Z=function(e){var n=e.field,i=e.validation,s=e.className,r=e.disabled,c=void 0!==r&&r,d=e.list,u=e.custom,v=void 0!==u&&u,f=e.style,m=e.onChange,h=(0,t.Gc)(),p=h.getFieldState(n,h.formState).error;return l.useEffect((function(){h.register(n,i)}),[h,n,i]),(0,a.jsx)(l.Fragment,{children:(0,a.jsxs)("div",{className:v?"cb_flex cb_align_items_center cb_lb_sex":"cb_flex cb_align_items_center cb_lb_sex cb_sex_group ",children:[(d||[]).map((function(e,i){return(0,a.jsx)(l.Fragment,{children:(0,a.jsxs)("label",{className:"cb_radio",style:f,children:[(0,a.jsx)("input",{type:"radio",name:n,id:e.key,className:s,disabled:c,checked:h.watch(n)==e.value,onChange:function(i){h.clearErrors(n),h.setValue(n,e.value),"function"===typeof m&&m(e.value)}}),(0,a.jsx)("span",{}),e.img?(0,a.jsx)("img",{style:{width:"50px",height:"50px",borderRadius:"10px",marginRight:"3px",border:"1px solid rgba(0,0,0,0.08)"},src:e.img,alt:"logo"}):null,e.label]})},i)})),p&&(0,a.jsx)(o.Z,{message:null===p||void 0===p?void 0:p.message})]})})}},4127:function(e,n,i){var l,t=i(1413),o=i(5987),a=i(168),s=i(2791),r=i(8107),c=i(7106),d=i(1753),u=i(1134),v=i(2360),f=i(5169),m=i(184),h=["list","loading","bordered","placeholder","className","disabled","field","validation","mode","allowClear","showSearch","defaultValue"],p=(0,v.ZP)(r.Z)(l||(l=(0,a.Z)(["\n  display: flex;\n  .ant-select-selector {\n    font-size: 15px !important;\n    width: 100%;\n    padding: 0 !important;\n    margin: 1.8px 0;\n  }\n  .ant-select-arrow .anticon:not(.ant-select-suffix) {\n    pointer-events: none;\n  }\n  .ant-select-selection-search {\n    width: 100%;\n    inset-inline-start: 0 !important;\n    inset-inline-end: 0 !important;\n  }\n  .ant-select-selection-item {\n    padding: ",";\n    color: black;\n  }\n  :where(.css-dev-only-do-not-override-1me4733).ant-select-multiple .ant-select-selection-item {\n    background: var(--mainColor);\n    color: var(--whiteColor);\n    font-size: 14px !important;\n    height: 26.5px;\n    padding-top: 1px;\n  }\n  :where(.css-dev-only-do-not-override-1me4733).ant-select-multiple .ant-select-selection-item-remove {\n    color: var(--whiteColor);\n    border-left: 1px solid;\n    padding-right: 3px;\n    padding-left: 7px;\n    font-weight: bold;\n  }\n"])),(function(e){return e.bordered?"0 7px!important":void 0})),b=function(e){return{id:e,value:e}},x=function(e){var n=e.list,i=void 0===n?[]:n,l=e.loading,a=e.bordered,r=void 0!==a&&a,v=e.placeholder,x=void 0===v?"--Ch\u1ecdn--":v,g=e.className,_=e.disabled,j=void 0!==_&&_,Z=e.field,y=e.validation,w=e.mode,N=void 0===w?null:w,k=e.allowClear,C=void 0!==k&&k,S=e.showSearch,F=void 0===S||S,P=e.defaultValue,V=(0,o.Z)(e,h),E=(0,u.Gc)(),M=E.getFieldState(Z,E.formState).error;return s.useEffect((function(){E.register(Z,y)}),[E,Z,y]),(0,m.jsxs)(s.Fragment,{children:[(0,m.jsx)(p,(0,t.Z)({className:g,mode:N,suffixIcon:l?(0,m.jsx)(c.Z,{}):(0,m.jsx)(d.Z,{}),bordered:r,showSearch:F,allowClear:C,placeholder:x,optionFilterProp:"children",disabled:j,filterOption:function(e,n){var i;return(null!==(i=null===n||void 0===n?void 0:n.label)&&void 0!==i?i:"").toLowerCase().includes(e.toLowerCase())},defaultValue:P,value:E.watch(Z),options:i,removeIcon:function(){return"\xd7"},onChange:function(e){console.log("\ud83d\ude80 ~ value:",e),E.clearErrors(Z),Array.isArray(e)?E.setValue(Z,e.map(b)):E.setValue(Z,e)}},V)),M&&(0,m.jsx)(f.Z,{message:null===M||void 0===M?void 0:M.message})]})};x.defaultValue={bordered:!1,loading:!1},n.Z=x},3165:function(e,n,i){var l,t=i(5987),o=i(7762),a=i(1413),s=i(168),r=i(2791),c=i(43),d=i(1134),u=i(2703),v=i(4880),f=i(7106),m=i(8888),h=i(927),p=i(5266),b=i(2360),x=i(184),g=["title","id","component","className"],_=b.ZP.div(l||(l=(0,s.Z)([""]))),j=(0,x.jsx)(f.Z,{style:{fontSize:24},spin:!0}),Z=function(e){var n=e.loading,i=e.detailForm,l=e.onSubmit,s=e.disabled,f=e.actions,b=e.noActions,Z=e.noSideBar,y=e.noPadding,w=e.style,N=e.customerClose,k=(0,d.Gc)(),C=k.formState.isSubmitting,S=(0,v.TH)().pathname,F=(0,r.useMemo)((function(){var e;return null===S||void 0===S||null===(e=S.split("/"))||void 0===e?void 0:e[1]}),[S]),P=(0,r.useMemo)((function(){var e,n,i,l=h.Z.filter((function(e){return null===e||void 0===e?void 0:e.path.includes("/".concat(F,"/"))}));return{edit:null===l||void 0===l||null===(e=l.find((function(e){return null===e||void 0===e?void 0:e.path.includes("/edit")})))||void 0===e?void 0:e.function,add:null===l||void 0===l||null===(n=l.find((function(e){return null===e||void 0===e?void 0:e.path.includes("/add")})))||void 0===n?void 0:n.function,detail:null===l||void 0===l||null===(i=l.find((function(e){return null===e||void 0===e?void 0:e.path.includes("/detail")})))||void 0===i?void 0:i.function}}),[F]),V=(0,v.UO)(),E=n||C,M=(0,r.useMemo)((function(){var e,n;return null!==(e=null!==(n=V["".concat(F,"_id")])&&void 0!==n?n:null===V||void 0===V?void 0:V.id)&&void 0!==e?e:V[Object.keys(V).find((function(e){return e.includes("id")}))]}),[V,F]),H=(0,r.useMemo)((function(){return S.includes("/detail")||S.includes("/view")}),[S]),A=(0,r.useMemo)((function(){return S.includes("/add")}),[S]),B=(0,r.useMemo)((function(){return S.includes("/edit")}),[S]),G=(0,v.k6)(),z=(0,u.Wh)((0,v.TH)().pathname)[0],I=function(){G.push("".concat(z))},L=function(e){e.preventDefault(),G.push("".concat(z,"/edit/").concat(M))},O=(0,r.useMemo)((function(){if(!b)return H?(0,x.jsxs)(x.Fragment,{children:[null===f||void 0===f?void 0:f.filter((function(e){return!e.hidden})).map((function(e,n){return(0,x.jsx)(m.Z,(0,a.Z)({className:"mr-2"},e),n)})),(0,x.jsx)(p.Z,{permission:null===P||void 0===P?void 0:P.edit,children:(0,x.jsx)("button",{type:"button",className:"cb_btn_outline cb_btn_outline_success",onClick:L,children:"Ch\u1ec9nh s\u1eeda"})})]}):A||B?(0,x.jsxs)(x.Fragment,{children:[null===f||void 0===f?void 0:f.filter((function(e){return!e.hidden})).map((function(e,n){return(0,x.jsx)(m.Z,(0,a.Z)({className:"mr-2"},e),n)})),(0,x.jsx)(p.Z,{permission:B?null===P||void 0===P?void 0:P.edit:null===P||void 0===P?void 0:P.add,children:(0,x.jsxs)("button",{type:"submit",className:"cb_btn cb_btn_success",children:[(0,x.jsx)("span",{className:"ti-check"}),"Ho\xe0n t\u1ea5t ",B?"ch\u1ec9nh s\u1eeda":"th\xeam m\u1edbi"]})})]}):void 0}),[H,B,A,f,b]),R=(0,r.useMemo)((function(){if(!b)return(0,x.jsx)("button",{type:"button",className:"cb_btn_outline",onClick:null!==N&&void 0!==N?N:I,children:"\u0110\xf3ng"})}),[b]),q=(0,r.useMemo)((function(){var e;return null!==(e=(null!==i&&void 0!==i?i:[]).filter((function(e){return!e.hidden})))&&void 0!==e?e:[]}),[i]),T=(0,x.jsxs)(r.Fragment,{children:[(0,x.jsx)("div",{style:w,className:"cb_main_wrapp",children:(0,x.jsxs)("div",{className:"cb_row",children:[!Z&&(0,x.jsx)("div",{className:"cb_col_3",children:(0,x.jsx)("ul",{className:"cb_control_form",children:q.map((function(e,n){var i=!1;if(Boolean(null===e||void 0===e?void 0:e.fieldActive)){var l,t,a=(0,o.Z)(null!==(l=null===e||void 0===e?void 0:e.fieldActive)&&void 0!==l?l:[]);try{for(a.s();!(t=a.n()).done;){var s=t.value;if(0!==k.watch(s)&&!Boolean(k.watch(s))){i=!1;break}i=!0}}catch(r){a.e(r)}finally{a.f()}}else i=!0;return(0,x.jsx)("li",{onClick:function(){document.getElementById(n).scrollIntoView({block:"start",behavior:"smooth"})},children:(0,x.jsxs)("a",{className:i?"cb_active":"",children:[(0,x.jsx)("span",{className:"ti-check"})," ",null===e||void 0===e?void 0:e.title]})},n)}))})}),(0,x.jsx)("div",{className:"".concat(Z?"cb_col_12":"cb_col_9"," ").concat(y?"":"cb_pb_6"),children:(0,x.jsx)(c.Z,{spinning:E,indicator:j,children:(0,x.jsx)("div",{className:"cb_row",children:q.map((function(e,n){var i=e.title,l=e.id,o=e.component,r=e.className,c=(0,t.Z)(e,g);return(0,x.jsx)("span",{id:n,className:null!==r&&void 0!==r?r:"cb_col_12",children:o&&(0,x.jsx)(o,(0,a.Z)({id:l,title:i,disabled:s},c))},n)}))})})})]})}),!b&&!C&&(0,x.jsxs)(_,{className:"cb_btn_save cb_btn_group cb_flex cb_justify_content_right cb_align_items_center",children:[O,R]})]});return b?T:(0,x.jsx)("form",{onSubmit:k.handleSubmit(l),children:T})};Z.defaultProps={loading:!1,detailForm:{},onSubmit:function(){},disabled:!1,noActions:!1},n.Z=Z}}]);
//# sourceMappingURL=9319.d0dfe7cb.chunk.js.map