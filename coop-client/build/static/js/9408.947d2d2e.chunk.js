"use strict";(self.webpackChunkshopdunk=self.webpackChunkshopdunk||[]).push([[9408],{9544:function(e,n,t){var a,c,r=t(9439),s=t(168),i=t(2791),o=t(1134),l=t(2360),d=t(184),u=l.ZP.div(a||(a=(0,s.Z)(["\n  @keyframes loading {\n    to {\n      background-position-x: -30%;\n    }\n  }\n  .loader__filter__searchbar {\n    background-color: #ededed;\n    height: 62px;\n    border-radius: 7px;\n    width: 100%;\n  }\n  .cb_frm_box .loader__filter__searchbar {\n    background-color: #ededed;\n    background: linear-gradient(\n        100deg,\n        rgba(255, 255, 255, 0) 40%,\n        rgba(255, 255, 255, 0.5) 50%,\n        rgba(255, 255, 255, 0) 60%\n      )\n      #ededed;\n    background-size: 200% 100%;\n    background-position-x: 180%;\n    animation: 1s loading ease-in-out infinite;\n  }\n"]))),_=l.ZP.span(c||(c=(0,s.Z)(["\n  opacity: 0.7;\n"]))),m=function(e){var n=e.title,t=e.actions,a=e.onSubmit,c=e.onClear,s=e.colSize,l=void 0===s?3:s,m=e.expanded,h=void 0!==m&&m,b=(0,i.useState)(!0),f=(0,r.Z)(b,2),g=f[0],p=f[1],x=(0,o.Gc)(),v=(0,i.useState)(!0),N=(0,r.Z)(v,2),j=N[0],k=N[1],Z=(0,i.useState)(h),y=(0,r.Z)(Z,2),S=y[0],C=y[1];(0,i.useEffect)((function(){setTimeout((function(){p(!1)}),[200])}),[]);var w=t.filter((function(e){return!e.hidden}));return(0,d.jsxs)(u,{className:"cb_search_box",children:[(0,d.jsxs)("h3",{className:"cb_title_search",children:[(0,d.jsx)("span",{children:n}),(0,d.jsx)("span",{className:"cb_close_search",onClick:function(){return k(!j)},children:(0,d.jsx)("i",{style:{cursor:"pointer"},className:"ti-angle-down"})})]}),j&&(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x.handleSubmit(a)(e)},children:[(0,d.jsx)("div",{className:"cb_row cb_mt_1 cb_mb_1 ",children:(S?w:w.slice(0,12/l)).map((function(e,n){var t=e.title,a=e.isRequired,c=e.component;return(0,d.jsx)("div",{className:"cb_col_".concat(l),children:(0,d.jsx)("div",{className:"cb_frm_box cb_h-100 ",children:g?(0,d.jsx)("div",{className:"loader__filter__searchbar"}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(_,{children:[t,a&&(0,d.jsx)("span",{className:"cb_red",children:"*"})]}),c]})})},"".concat(e.title).concat(n))}))}),!g&&(0,d.jsxs)("div",{className:"cb_row cb_align_items_center",children:[(0,d.jsx)("div",{className:"cb_col_6",children:w.length>12/l&&(0,d.jsx)("span",{onClick:function(){return C(!S)},className:"cb_btn_more_search",children:S?"\u1ea8n b\u1edbt":"T\xecm n\xe2ng cao"})}),(0,d.jsxs)("div",{className:"cb_col_6 cb_flex cb_justify_content_right cb_btn_group",children:[(0,d.jsx)("button",{id:"filter-search-bar-trigger",type:"submit",style:{display:"none"}}),(0,d.jsxs)("button",{id:"fitler_search_bar",className:"cb_btn cb_btn_success",style:{marginRight:"10px"},type:"button",onClick:x.handleSubmit(a),children:[(0,d.jsx)("span",{className:"ti-search"})," T\xecm ki\u1ebfm"]}),(0,d.jsx)("button",{type:"button",onClick:function(){x.reset({is_active:1}),c({})},className:"cb_btn_outline",children:"L\xe0m m\u1edbi"})]})]})]})]})};m.defaultProps={title:"",actions:[],onSubmit:function(){},onClear:function(){}},n.Z=m},9487:function(e,n,t){var a=t(1413),c=t(5987),r=t(2791),s=t(1134),i=t(5169),o=t(184),l=["field","validation","type","placeholder","className","disabled"],d=function(e){var n,t=e.field,d=e.validation,u=e.type,_=void 0===u?"text":u,m=e.placeholder,h=e.className,b=e.disabled,f=(0,c.Z)(e,l),g=(0,s.Gc)(),p=g.getFieldState(t,g.formState).error;r.useEffect((function(){g.register(t,d)}),[g,t,d]);return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)("input",(0,a.Z)({type:_,placeholder:m,className:h,disabled:b,value:null!==(n=g.watch(t))&&void 0!==n?n:"",checked:("checkbox"===_||"radio"==_)&&Boolean(g.watch(t)),onChange:function(e){g.clearErrors(t),g.setValue(t,"checkbox"===_||"radio"===_?!!e.target.checked:e.target.value||null)},style:{lineHeight:1}},f)),p&&(0,o.jsx)(i.Z,{message:null===p||void 0===p?void 0:p.message})]})};d.defaultProps={type:"text",className:""},n.Z=d},9408:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var a=t(1413),c=t(9439),r=t(2791),s=t(1134),i=t(9544),o=t(9487),l=t(2027),d=t(6773),u=t(184),_=function(e){var n=e.onChange,t=(0,s.cI)(d.tS);return(0,u.jsx)(s.RV,(0,a.Z)((0,a.Z)({},t),{},{children:(0,u.jsx)(i.Z,{title:"T\xecm ki\u1ebfm",onSubmit:function(e){var t;e.search=null===(t=e.search)||void 0===t?void 0:t.trim(),n(e)},colSize:4,onClear:function(){return t.reset(d.tS),void n(d.tS)},actions:[{title:"T\u1eeb kh\xf3a",component:(0,u.jsx)(o.Z,{field:"search",placeholder:"Nh\u1eadp t\xean, s\u1ed1 \u0111i\u1ec7n tho\u1ea1i, s\u1ed1 c\u0103n c\u01b0\u1edbc c\xf4ng d\xe2n",maxLength:250})},{title:"Ng\xe0y t\u1ea1o",component:(0,u.jsx)(l.Z,{allowClear:!0,fieldStart:"created_date_from",fieldEnd:"created_date_to",placeholder:["T\u1eeb ng\xe0y","\u0110\u1ebfn ng\xe0y"],format:"DD/MM/YYYY"})}]})}))},m=t(4165),h=t(5861),b=t(9434),f=t(8356),g=t(5023),p=t(7544),x=t(2152),v=function(e){var n,t=e.loading,a=e.data,c=e.totalPages,s=e.itemsPerPage,i=e.page,o=e.totalItems,l=e.onChangePage,d=e.onRefresh,_=(0,x.a)().user,v=(0,b.I0)(),N=(0,r.useMemo)((function(){return[{header:"STT",classNameHeader:"cb_text_center",classNameBody:"cb_text_center",formatter:function(e,n){return(0,u.jsx)("span",{className:"cb_text_wrap",children:n+1})}},{header:"T\xean ng\u01b0\u1eddi \u0111\u1ea1i di\u1ec7n",classNameHeader:"cb_text_center",accessor:"representative_name"},{header:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",classNameHeader:"cb_text_center",accessor:"phone_number"},{header:"Ch\u1ee9c v\u1ee5",classNameHeader:"cb_text_center",accessor:"representative_position"},{header:"S\u1ed1 t\xe0i kho\u1ea3n ng\xe2n h\xe0ng",classNameHeader:"cb_text_center",accessor:"bank_number"},{header:"T\xean ng\xe2n h\xe0ng",classNameHeader:"cb_text_center",accessor:"bank_name"},{header:"C\u0103n c\u01b0\u1edbc c\xf4ng d\xe2n",classNameHeader:"cb_text_center",accessor:"id_number"},{header:"Ng\xe0y c\u1ea5p",classNameHeader:"cb_text_center",accessor:"id_issued_date"},{header:"Ng\xe0y t\u1ea1o",accessor:"created_at",classNameHeader:"cb_text_center",classNameBody:"cb_text_center"}]}),[]),j=(0,r.useCallback)((function(e){return(n=n||(0,h.Z)((0,m.Z)().mark((function e(n){return(0,m.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.LQ)(n);case 2:d();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}),[d]),k=(0,r.useMemo)((function(){return[{globalAction:!0,icon:"ti-plus",type:"success",content:"Th\xeam m\u1edbi",onClick:function(){return window._$g.rdr("representative/add")},hidden:null===_||void 0===_?void 0:_.is_admin},{icon:"ti-write",color:"blue",title:"S\u1eeda",onClick:function(e){window._$g.rdr("representative/edit/".concat(null===e||void 0===e?void 0:e.representative_id))}},{icon:"ti-eye",color:"green",title:"Chi ti\u1ebft",onClick:function(e){window._$g.rdr("representative/detail/".concat(null===e||void 0===e?void 0:e.representative_id))}},{icon:"fi ti-trash",color:"red",title:"X\xf3a",hidden:function(e){return!_.is_admin&&e.created_username!==_.username},onClick:function(e,n){return v((0,f.SS)(["B\u1ea1n c\xf3 th\u1ef1c s\u1ef1 mu\u1ed1n x\xf3a?","B\u1ea1n s\u1ebd m\u1ea5t d\u1eef li\u1ec7u n\xe0y v\xe0 c\xe1c d\u1eef li\u1ec7u li\xean quan."],(function(){return j([e.representative_id])})))}}]}),[v,j]);return(0,u.jsx)(p.Z,{loading:t,columns:N,data:a,actions:k,totalPages:c,itemsPerPage:s,page:i,totalItems:o,onChangePage:l})},N=t(4238),j=function(){var e=(0,r.useState)(N.Tb),n=(0,c.Z)(e,2),t=n[0],s=n[1],i=(0,r.useState)(N.U1),o=(0,c.Z)(i,2),l=o[0],d=o[1],m=(0,r.useState)(!0),h=(0,c.Z)(m,2),b=h[0],f=h[1],p=l.items,x=l.itemsPerPage,j=l.page,k=l.totalItems,Z=l.totalPages,y=(0,r.useCallback)((function(){f(!0),(0,g.gp)(t).then(d).finally((function(){f(!1)}))}),[t]);return(0,r.useEffect)(y,[y]),(0,u.jsxs)("div",{className:"cb_main_wrapp",children:[(0,u.jsx)(_,{onChange:function(e){s((function(n){return(0,a.Z)((0,a.Z)({},n),e)}))}}),(0,u.jsx)(v,{onChangePage:function(e){s((0,a.Z)((0,a.Z)({},t),{},{page:e}))},data:p,totalPages:Z,itemsPerPage:x,page:j,totalItems:k,loading:b,onRefresh:y})]})}}}]);
//# sourceMappingURL=9408.947d2d2e.chunk.js.map