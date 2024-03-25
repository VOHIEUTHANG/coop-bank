"use strict";(self.webpackChunkshopdunk=self.webpackChunkshopdunk||[]).push([[9408],{9544:function(e,n,t){var a,r,c=t(9439),i=t(168),s=t(2791),o=t(1134),l=t(2360),d=t(184),u=l.ZP.div(a||(a=(0,i.Z)(["\n  @keyframes loading {\n    to {\n      background-position-x: -30%;\n    }\n  }\n  .loader__filter__searchbar {\n    background-color: #ededed;\n    height: 62px;\n    border-radius: 7px;\n    width: 100%;\n  }\n  .cb_frm_box .loader__filter__searchbar {\n    background-color: #ededed;\n    background: linear-gradient(\n        100deg,\n        rgba(255, 255, 255, 0) 40%,\n        rgba(255, 255, 255, 0.5) 50%,\n        rgba(255, 255, 255, 0) 60%\n      )\n      #ededed;\n    background-size: 200% 100%;\n    background-position-x: 180%;\n    animation: 1s loading ease-in-out infinite;\n  }\n"]))),f=l.ZP.span(r||(r=(0,i.Z)(["\n  opacity: 0.7;\n"]))),h=function(e){var n=e.title,t=e.actions,a=e.onSubmit,r=e.onClear,i=e.colSize,l=void 0===i?3:i,h=e.expanded,m=void 0!==h&&h,_=(0,s.useState)(!0),b=(0,c.Z)(_,2),g=b[0],p=b[1],v=(0,o.Gc)(),x=(0,s.useState)(!0),Z=(0,c.Z)(x,2),j=Z[0],k=Z[1],N=(0,s.useState)(m),y=(0,c.Z)(N,2),S=y[0],w=y[1];(0,s.useEffect)((function(){setTimeout((function(){p(!1)}),[200])}),[]);var C=t.filter((function(e){return!e.hidden}));return(0,d.jsxs)(u,{className:"cb_search_box",children:[(0,d.jsxs)("h3",{className:"cb_title_search",children:[(0,d.jsx)("span",{children:n}),(0,d.jsx)("span",{className:"cb_close_search",onClick:function(){return k(!j)},children:(0,d.jsx)("i",{style:{cursor:"pointer"},className:"ti-angle-down"})})]}),j&&(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v.handleSubmit(a)(e)},children:[(0,d.jsx)("div",{className:"cb_row cb_mt_1 cb_mb_1 ",children:(S?C:C.slice(0,12/l)).map((function(e,n){var t=e.title,a=e.isRequired,r=e.component;return(0,d.jsx)("div",{className:"cb_col_".concat(l),children:(0,d.jsx)("div",{className:"cb_frm_box cb_h-100 ",children:g?(0,d.jsx)("div",{className:"loader__filter__searchbar"}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(f,{children:[t,a&&(0,d.jsx)("span",{className:"cb_red",children:"*"})]}),r]})})},"".concat(e.title).concat(n))}))}),!g&&(0,d.jsxs)("div",{className:"cb_row cb_align_items_center",children:[(0,d.jsx)("div",{className:"cb_col_6",children:C.length>12/l&&(0,d.jsx)("span",{onClick:function(){return w(!S)},className:"cb_btn_more_search",children:S?"\u1ea8n b\u1edbt":"T\xecm n\xe2ng cao"})}),(0,d.jsxs)("div",{className:"cb_col_6 cb_flex cb_justify_content_right cb_btn_group",children:[(0,d.jsx)("button",{id:"filter-search-bar-trigger",type:"submit",style:{display:"none"}}),(0,d.jsxs)("button",{id:"fitler_search_bar",className:"cb_btn cb_btn_success",style:{marginRight:"10px"},type:"button",onClick:v.handleSubmit(a),children:[(0,d.jsx)("span",{className:"ti-search"})," T\xecm ki\u1ebfm"]}),(0,d.jsx)("button",{type:"button",onClick:function(){v.reset({is_active:1}),r({})},className:"cb_btn_outline",children:"L\xe0m m\u1edbi"})]})]})]})]})};h.defaultProps={title:"",actions:[],onSubmit:function(){},onClear:function(){}},n.Z=h},5169:function(e,n,t){var a,r=t(168),c=(t(2791),t(2360)),i=t(184),s=c.ZP.div(a||(a=(0,r.Z)(["\n  display: block;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #f86c6b;\n"])));n.Z=function(e){var n=e.message;return(0,i.jsx)(s,{children:n})}},2027:function(e,n,t){var a,r=t(1413),c=t(5987),i=t(168),s=t(2791),o=t(1134),l=t(2648),d=t(7892),u=t.n(d),f=t(2360),h=t(5169),m=t(184),_=["fieldStart","fieldEnd","validation","placeholder","disabled","style","format","bordered","allowClear"],b=l.Z.RangePicker,g=f.ZP.div(a||(a=(0,i.Z)(["\n  .ant-picker-input > input::placeholder {\n    opacity: 0.7;\n  }\n"]))),p=function(e){var n=e.fieldStart,t=e.fieldEnd,a=e.validation,i=e.placeholder,l=e.disabled,d=void 0!==l&&l,f=e.style,p=e.format,v=e.bordered,x=void 0!==v&&v,Z=e.allowClear,j=(0,c.Z)(e,_),k=(0,o.Gc)(),N=k.getFieldState(n,k.formState).error,y=k.getFieldState(t,k.formState).error,S=(0,s.useMemo)((function(){return null!==N&&void 0!==N?N:y}),[N,y]);return s.useEffect((function(){k.register(n,a),k.register(t,a)}),[k,n,t,a]),(0,m.jsxs)(g,{children:[(0,m.jsx)(b,(0,r.Z)({bordered:x,allowClear:Z,disabled:d,minDate:new Date,placeholder:i,value:k.watch(n)||k.watch(t)?[u()(k.watch(n),p),u()(k.watch(t),p)]:"",onChange:function(e,a){e?(k.clearErrors(n),k.clearErrors(t),k.setValue(n,a[0]),k.setValue(t,a[1])):(k.setValue(n,""),k.setValue(t,""))},format:p,style:(0,r.Z)({width:"100%"},f)},j)),S&&(0,m.jsx)(h.Z,{message:null===S||void 0===S?void 0:S.message})]})};p.defaultProps={},n.Z=p},9487:function(e,n,t){var a=t(1413),r=t(5987),c=t(2791),i=t(1134),s=t(5169),o=t(184),l=["field","validation","type","placeholder","className","disabled"],d=function(e){var n,t=e.field,d=e.validation,u=e.type,f=void 0===u?"text":u,h=e.placeholder,m=e.className,_=e.disabled,b=(0,r.Z)(e,l),g=(0,i.Gc)(),p=g.getFieldState(t,g.formState).error;c.useEffect((function(){g.register(t,d)}),[g,t,d]);return(0,o.jsxs)(c.Fragment,{children:[(0,o.jsx)("input",(0,a.Z)({type:f,placeholder:h,className:m,disabled:_,value:null!==(n=g.watch(t))&&void 0!==n?n:"",checked:("checkbox"===f||"radio"==f)&&Boolean(g.watch(t)),onChange:function(e){g.clearErrors(t),g.setValue(t,"checkbox"===f||"radio"===f?!!e.target.checked:e.target.value||null)},style:{lineHeight:1}},b)),p&&(0,o.jsx)(s.Z,{message:null===p||void 0===p?void 0:p.message})]})};d.defaultProps={type:"text",className:""},n.Z=d},9408:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var a=t(1413),r=t(9439),c=t(2791),i=t(1134),s=t(9544),o=t(9487),l=t(2027),d=t(6773),u=t(184),f=function(e){var n=e.onChange,t=(0,i.cI)(d.tS);return(0,u.jsx)(i.RV,(0,a.Z)((0,a.Z)({},t),{},{children:(0,u.jsx)(s.Z,{title:"T\xecm ki\u1ebfm",onSubmit:function(e){var t;e.search=null===(t=e.search)||void 0===t?void 0:t.trim(),n(e)},colSize:4,onClear:function(){return t.reset(d.tS),void n(d.tS)},actions:[{title:"T\u1eeb kh\xf3a",component:(0,u.jsx)(o.Z,{field:"search",placeholder:"Nh\u1eadp t\xean, s\u1ed1 \u0111i\u1ec7n tho\u1ea1i, s\u1ed1 c\u0103n c\u01b0\u1edbc c\xf4ng d\xe2n",maxLength:250})},{title:"Ng\xe0y t\u1ea1o",component:(0,u.jsx)(l.Z,{allowClear:!0,fieldStart:"created_date_from",fieldEnd:"created_date_to",placeholder:["T\u1eeb ng\xe0y","\u0110\u1ebfn ng\xe0y"],format:"DD/MM/YYYY"})}]})}))},h=t(4165),m=t(5861),_=t(9434),b=t(8356),g=t(5023),p=t(7544),v=function(e){var n,t=e.loading,a=e.data,r=e.totalPages,i=e.itemsPerPage,s=e.page,o=e.totalItems,l=e.onChangePage,f=e.onRefresh,v=(0,_.I0)(),x=(0,c.useMemo)((function(){return[{header:"STT",classNameHeader:"cb_text_center",classNameBody:"cb_text_center",formatter:function(e,n){return(0,u.jsx)("span",{className:"cb_text_wrap",children:n+1})}},{header:"T\xean ng\u01b0\u1eddi \u0111\u1ea1i di\u1ec7n",classNameHeader:"cb_text_center",accessor:"representative_name"},{header:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",classNameHeader:"cb_text_center",accessor:"phone_number"},{header:"Ch\u1ee9c v\u1ee5",classNameHeader:"cb_text_center",formatter:function(e,n){var t;return(0,u.jsx)("span",{children:(null===(t=d.ji.find((function(n){return n.value===e.representative_position})))||void 0===t?void 0:t.label)||"Kh\xf4ng x\xe1c \u0111\u1ecbnh"})}},{header:"S\u1ed1 t\xe0i kho\u1ea3n ng\xe2n h\xe0ng",classNameHeader:"cb_text_center",accessor:"bank_number"},{header:"T\xean ng\xe2n h\xe0ng",classNameHeader:"cb_text_center",accessor:"bank_name"},{header:"C\u0103n c\u01b0\u1edbc c\xf4ng d\xe2n",classNameHeader:"cb_text_center",accessor:"id_number"},{header:"Ng\xe0y c\u1ea5p",classNameHeader:"cb_text_center",accessor:"id_issued_date"},{header:"Ng\xe0y t\u1ea1o",accessor:"created_at",classNameHeader:"cb_text_center",classNameBody:"cb_text_center"}]}),[]),Z=(0,c.useCallback)((function(e){return(n=n||(0,m.Z)((0,h.Z)().mark((function e(n){return(0,h.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.LQ)(n);case 2:f();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}),[f]),j=(0,c.useMemo)((function(){return[{globalAction:!0,icon:"ti-plus",type:"success",content:"Th\xeam m\u1edbi",onClick:function(){return window._$g.rdr("representative/add")}},{icon:"ti-write",color:"blue",title:"S\u1eeda",onClick:function(e){window._$g.rdr("representative/edit/".concat(null===e||void 0===e?void 0:e.representative_id))}},{icon:"ti-eye",color:"green",title:"Chi ti\u1ebft",onClick:function(e){window._$g.rdr("representative/detail/".concat(null===e||void 0===e?void 0:e.representative_id))}},{icon:"fi ti-trash",color:"red",title:"X\xf3a",onClick:function(e,n){return v((0,b.SS)(["B\u1ea1n c\xf3 th\u1ef1c s\u1ef1 mu\u1ed1n x\xf3a?","B\u1ea1n s\u1ebd m\u1ea5t d\u1eef li\u1ec7u n\xe0y v\xe0 c\xe1c d\u1eef li\u1ec7u li\xean quan."],(function(){return Z([e.representative_id])})))}}]}),[v,Z]);return(0,u.jsx)(p.Z,{loading:t,columns:x,data:a,actions:j,totalPages:r,itemsPerPage:i,page:s,totalItems:o,onChangePage:l})},x=t(4238),Z=function(){var e=(0,c.useState)(x.Tb),n=(0,r.Z)(e,2),t=n[0],i=n[1],s=(0,c.useState)(x.U1),o=(0,r.Z)(s,2),l=o[0],d=o[1],h=(0,c.useState)(!0),m=(0,r.Z)(h,2),_=m[0],b=m[1],p=l.items,Z=l.itemsPerPage,j=l.page,k=l.totalItems,N=l.totalPages,y=(0,c.useCallback)((function(){b(!0),(0,g.gp)(t).then(d).finally((function(){b(!1)}))}),[t]);return(0,c.useEffect)(y,[y]),(0,u.jsxs)("div",{className:"cb_main_wrapp",children:[(0,u.jsx)(f,{onChange:function(e){i((function(n){return(0,a.Z)((0,a.Z)({},n),e)}))}}),(0,u.jsx)(v,{onChangePage:function(e){i((0,a.Z)((0,a.Z)({},t),{},{page:e}))},data:p,totalPages:N,itemsPerPage:Z,page:j,totalItems:k,loading:_,onRefresh:y})]})}},5023:function(e,n,t){t.d(n,{FO:function(){return i},LQ:function(){return l},Ue:function(){return s},Vx:function(){return o},gp:function(){return c}});var a=t(3326),r="/representative",c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.Z.get(r,{params:e})},i=function(e){return a.Z.get("".concat(r,"/").concat(e))},s=function(e){return a.Z.post(r,e)},o=function(e){return a.Z.patch(r,e)},l=function(e){return a.Z.delete("".concat(r,"/").concat(e))}}}]);
//# sourceMappingURL=9408.6e53f710.chunk.js.map