"use strict";(self.webpackChunkshopdunk=self.webpackChunkshopdunk||[]).push([[4872],{9544:function(e,n,t){var a,r,i=t(9439),c=t(168),o=t(2791),l=t(1134),s=t(2360),d=t(184),u=s.ZP.div(a||(a=(0,c.Z)(["\n  @keyframes loading {\n    to {\n      background-position-x: -30%;\n    }\n  }\n  .loader__filter__searchbar {\n    background-color: #ededed;\n    height: 62px;\n    border-radius: 7px;\n    width: 100%;\n  }\n  .cb_frm_box .loader__filter__searchbar {\n    background-color: #ededed;\n    background: linear-gradient(\n        100deg,\n        rgba(255, 255, 255, 0) 40%,\n        rgba(255, 255, 255, 0.5) 50%,\n        rgba(255, 255, 255, 0) 60%\n      )\n      #ededed;\n    background-size: 200% 100%;\n    background-position-x: 180%;\n    animation: 1s loading ease-in-out infinite;\n  }\n"]))),f=s.ZP.span(r||(r=(0,c.Z)(["\n  opacity: 0.7;\n"]))),_=function(e){var n=e.title,t=e.actions,a=e.onSubmit,r=e.onClear,c=e.colSize,s=void 0===c?3:c,_=e.expanded,m=void 0!==_&&_,h=(0,o.useState)(!0),g=(0,i.Z)(h,2),b=g[0],p=g[1],v=(0,l.Gc)(),x=(0,o.useState)(!0),C=(0,i.Z)(x,2),Z=C[0],N=C[1],j=(0,o.useState)(m),k=(0,i.Z)(j,2),S=k[0],y=k[1];(0,o.useEffect)((function(){setTimeout((function(){p(!1)}),[200])}),[]);var w=t.filter((function(e){return!e.hidden}));return(0,d.jsxs)(u,{className:"cb_search_box",children:[(0,d.jsxs)("h3",{className:"cb_title_search",children:[(0,d.jsx)("span",{children:n}),(0,d.jsx)("span",{className:"cb_close_search",onClick:function(){return N(!Z)},children:(0,d.jsx)("i",{style:{cursor:"pointer"},className:"ti-angle-down"})})]}),Z&&(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v.handleSubmit(a)(e)},children:[(0,d.jsx)("div",{className:"cb_row cb_mt_1 cb_mb_1 ",children:(S?w:w.slice(0,12/s)).map((function(e,n){var t=e.title,a=e.isRequired,r=e.component;return(0,d.jsx)("div",{className:"cb_col_".concat(s),children:(0,d.jsx)("div",{className:"cb_frm_box cb_h-100 ",children:b?(0,d.jsx)("div",{className:"loader__filter__searchbar"}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(f,{children:[t,a&&(0,d.jsx)("span",{className:"cb_red",children:"*"})]}),r]})})},"".concat(e.title).concat(n))}))}),!b&&(0,d.jsxs)("div",{className:"cb_row cb_align_items_center",children:[(0,d.jsx)("div",{className:"cb_col_6",children:w.length>12/s&&(0,d.jsx)("span",{onClick:function(){return y(!S)},className:"cb_btn_more_search",children:S?"\u1ea8n b\u1edbt":"T\xecm n\xe2ng cao"})}),(0,d.jsxs)("div",{className:"cb_col_6 cb_flex cb_justify_content_right cb_btn_group",children:[(0,d.jsx)("button",{id:"filter-search-bar-trigger",type:"submit",style:{display:"none"}}),(0,d.jsxs)("button",{id:"fitler_search_bar",className:"cb_btn cb_btn_success",style:{marginRight:"10px"},type:"button",onClick:v.handleSubmit(a),children:[(0,d.jsx)("span",{className:"ti-search"})," T\xecm ki\u1ebfm"]}),(0,d.jsx)("button",{type:"button",onClick:function(){v.reset({is_active:1}),r({})},className:"cb_btn_outline",children:"L\xe0m m\u1edbi"})]})]})]})]})};_.defaultProps={title:"",actions:[],onSubmit:function(){},onClear:function(){}},n.Z=_},5169:function(e,n,t){var a,r=t(168),i=(t(2791),t(2360)),c=t(184),o=i.ZP.div(a||(a=(0,r.Z)(["\n  display: block;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #f86c6b;\n"])));n.Z=function(e){var n=e.message;return(0,c.jsx)(o,{children:n})}},2027:function(e,n,t){var a,r=t(1413),i=t(5987),c=t(168),o=t(2791),l=t(1134),s=t(2648),d=t(7892),u=t.n(d),f=t(2360),_=t(5169),m=t(184),h=["fieldStart","fieldEnd","validation","placeholder","disabled","style","format","bordered","allowClear"],g=s.Z.RangePicker,b=f.ZP.div(a||(a=(0,c.Z)(["\n  .ant-picker-input > input::placeholder {\n    opacity: 0.7;\n  }\n"]))),p=function(e){var n=e.fieldStart,t=e.fieldEnd,a=e.validation,c=e.placeholder,s=e.disabled,d=void 0!==s&&s,f=e.style,p=e.format,v=e.bordered,x=void 0!==v&&v,C=e.allowClear,Z=(0,i.Z)(e,h),N=(0,l.Gc)(),j=N.getFieldState(n,N.formState).error,k=N.getFieldState(t,N.formState).error,S=(0,o.useMemo)((function(){return null!==j&&void 0!==j?j:k}),[j,k]);return o.useEffect((function(){N.register(n,a),N.register(t,a)}),[N,n,t,a]),(0,m.jsxs)(b,{children:[(0,m.jsx)(g,(0,r.Z)({bordered:x,allowClear:C,disabled:d,minDate:new Date,placeholder:c,value:N.watch(n)||N.watch(t)?[u()(N.watch(n),p),u()(N.watch(t),p)]:"",onChange:function(e,a){e?(N.clearErrors(n),N.clearErrors(t),N.setValue(n,a[0]),N.setValue(t,a[1])):(N.setValue(n,""),N.setValue(t,""))},format:p,style:(0,r.Z)({width:"100%"},f)},Z)),S&&(0,m.jsx)(_.Z,{message:null===S||void 0===S?void 0:S.message})]})};p.defaultProps={},n.Z=p},9487:function(e,n,t){var a=t(1413),r=t(5987),i=t(2791),c=t(1134),o=t(5169),l=t(184),s=["field","validation","type","placeholder","className","disabled"],d=function(e){var n,t=e.field,d=e.validation,u=e.type,f=void 0===u?"text":u,_=e.placeholder,m=e.className,h=e.disabled,g=(0,r.Z)(e,s),b=(0,c.Gc)(),p=b.getFieldState(t,b.formState).error;i.useEffect((function(){b.register(t,d)}),[b,t,d]);return(0,l.jsxs)(i.Fragment,{children:[(0,l.jsx)("input",(0,a.Z)({type:f,placeholder:_,className:m,disabled:h,value:null!==(n=b.watch(t))&&void 0!==n?n:"",checked:("checkbox"===f||"radio"==f)&&Boolean(b.watch(t)),onChange:function(e){b.clearErrors(t),b.setValue(t,"checkbox"===f||"radio"===f?!!e.target.checked:e.target.value||null)},style:{lineHeight:1}},g)),p&&(0,l.jsx)(o.Z,{message:null===p||void 0===p?void 0:p.message})]})};d.defaultProps={type:"text",className:""},n.Z=d},4872:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var a=t(1413),r=t(9439),i=t(2791),c=t(1134),o=t(9544),l=t(9487),s=t(2027),d=t(5682),u=t(184),f=function(e){var n=e.onChange,t=(0,c.cI)(d.tS);return(0,u.jsx)(c.RV,(0,a.Z)((0,a.Z)({},t),{},{children:(0,u.jsx)(o.Z,{title:"T\xecm ki\u1ebfm",onSubmit:function(e){var t;e.search=null===(t=e.search)||void 0===t?void 0:t.trim(),n(e)},colSize:4,onClear:function(){return t.reset(d.tS),void n(d.tS)},actions:[{title:"T\u1eeb kh\xf3a",component:(0,u.jsx)(l.Z,{field:"search",placeholder:"Nh\u1eadp h\u1ecd t\xean, s\u1ed1 \u0111i\u1ec7n tho\u1ea1i, s\u1ed1 CCCD",maxLength:250})},{title:"Ng\xe0y t\u1ea1o",component:(0,u.jsx)(s.Z,{allowClear:!0,fieldStart:"created_date_from",fieldEnd:"created_date_to",placeholder:["T\u1eeb ng\xe0y","\u0110\u1ebfn ng\xe0y"],format:"DD/MM/YYYY"})}]})}))},_=t(4165),m=t(5861),h=t(9434),g=t(8356),b=t(9683),p=t(7544),v=function(e){var n,t=e.loading,a=e.data,r=e.totalPages,c=e.itemsPerPage,o=e.page,l=e.totalItems,s=e.onChangePage,d=e.onRefresh,f=(0,h.I0)(),v=(0,i.useMemo)((function(){return[{header:"STT",classNameHeader:"cb_text_center",classNameBody:"cb_text_center",formatter:function(e,n){return(0,u.jsx)("span",{className:"cb_text_wrap",children:n+1})}},{header:"T\xean ng\u01b0\u1eddi \u0111\u01a1n v\u1ecb",classNameHeader:"cb_text_center",accessor:"affiliate_unit_name"},{header:"M\xe3 \u0111\u01a1n v\u1ecb",classNameHeader:"cb_text_center",accessor:"affiliate_unit_code"},{header:"\u0110\u1ecba ch\u1ec9 \u0111\u01a1n v\u1ecb",classNameHeader:"cb_text_center",accessor:"affiliate_unit_address"},{header:"C\u1ea5p \u0111\u01a1n v\u1ecb",classNameHeader:"cb_text_center",accessor:"affiliate_unit_level"},{header:"Ng\u01b0\u1eddi t\u1ea1o",accessor:"created_fullname",classNameHeader:"cb_text_center",classNameBody:"cb_text_center"},{header:"Ng\xe0y t\u1ea1o",accessor:"created_at",classNameHeader:"cb_text_center",classNameBody:"cb_text_center"}]}),[]),x=(0,i.useCallback)((function(e){return(n=n||(0,m.Z)((0,_.Z)().mark((function e(n){return(0,_.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,b.Ee)(n);case 2:d();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}),[d]),C=(0,i.useMemo)((function(){return[{globalAction:!0,icon:"ti-plus",type:"success",content:"Th\xeam m\u1edbi",onClick:function(){return window._$g.rdr("affiliate-unit/add")}},{icon:"ti-write",color:"blue",title:"S\u1eeda",onClick:function(e){window._$g.rdr("affiliate-unit/edit/".concat(null===e||void 0===e?void 0:e.affiliate_unit_id))}},{icon:"ti-eye",color:"green",title:"Chi ti\u1ebft",onClick:function(e){window._$g.rdr("affiliate-unit/detail/".concat(null===e||void 0===e?void 0:e.affiliate_unit_id))}},{icon:"fi ti-trash",color:"red",title:"X\xf3a",onClick:function(e,n){return f((0,g.SS)(["B\u1ea1n c\xf3 th\u1ef1c s\u1ef1 mu\u1ed1n x\xf3a?","B\u1ea1n s\u1ebd m\u1ea5t d\u1eef li\u1ec7u n\xe0y v\xe0 c\xe1c d\u1eef li\u1ec7u li\xean quan."],(function(){return x([e.affiliate_unit_id])})))}}]}),[f,x]);return(0,u.jsx)(p.Z,{loading:t,columns:v,data:a,actions:C,totalPages:r,itemsPerPage:c,page:o,totalItems:l,onChangePage:s})},x=t(4238),C=function(){var e=(0,i.useState)(x.Tb),n=(0,r.Z)(e,2),t=n[0],c=n[1],o=(0,i.useState)(x.U1),l=(0,r.Z)(o,2),s=l[0],d=l[1],_=(0,i.useState)(!0),m=(0,r.Z)(_,2),h=m[0],g=m[1],p=s.items,C=s.itemsPerPage,Z=s.page,N=s.totalItems,j=s.totalPages,k=(0,i.useCallback)((function(){g(!0),(0,b.gp)(t).then(d).finally((function(){g(!1)}))}),[t]);return(0,i.useEffect)(k,[k]),(0,u.jsxs)("div",{className:"cb_main_wrapp",children:[(0,u.jsx)(f,{onChange:function(e){c((function(n){return(0,a.Z)((0,a.Z)({},n),e)}))}}),(0,u.jsx)(v,{onChangePage:function(e){c((0,a.Z)((0,a.Z)({},t),{},{page:e}))},data:p,totalPages:j,itemsPerPage:C,page:Z,totalItems:N,loading:h,onRefresh:k})]})}},5682:function(e,n,t){t.d(n,{Cx:function(){return r},aX:function(){return i},tS:function(){return a}});var a={search:"",created_date_from:null,created_date_to:null},r={AFFILATE_CONTRACT:1,SERVICE_CONTRACT:2,ASSIGN_PAY:3,PERIODICAL_CHECK:4},i=[{value:r.AFFILATE_CONTRACT,label:"H\u1ee3p \u0111\u1ed3ng li\xean k\u1ebft",file_name:"hop_dong_lien_ket"},{value:r.SERVICE_CONTRACT,label:"H\u1ee3p \u0111\u1ed3ng d\u1ecbch v\u1ee5",file_name:"hop_dong_dich_vu"},{value:r.ASSIGN_PAY,label:"Gi\u1ea5y c\u1eed ng\u01b0\u1eddi tr\u1ea3 ti\u1ec1n",file_name:"giay_cu_nguoi_tra_tien"},{value:r.PERIODICAL_CHECK,label:"Ki\u1ec3m tra s\u1eed d\u1ee5ng v\u1ed1n",file_name:"giay_kiem_tra_su_dung_von"}]},9683:function(e,n,t){t.d(n,{Ee:function(){return d},FO:function(){return o},FW:function(){return u},Ue:function(){return l},Vx:function(){return s},gp:function(){return c},uz:function(){return f}});var a=t(1413),r=t(3326),i="/affiliate-unit",c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.Z.get(i,{params:e})},o=function(e){return r.Z.get("".concat(i,"/").concat(e))},l=function(e){return r.Z.post(i,e)},s=function(e){return r.Z.patch(i,e)},d=function(e){return r.Z.delete("".concat(i,"/").concat(e))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.Z.get(i+"/options",{params:e})},f=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.Z.get(i+"/export-form/".concat(e),(0,a.Z)({params:n},{responseType:"blob"}))}}}]);
//# sourceMappingURL=4872.14d8cbb8.chunk.js.map