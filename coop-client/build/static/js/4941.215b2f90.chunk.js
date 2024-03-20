"use strict";(self.webpackChunkshopdunk=self.webpackChunkshopdunk||[]).push([[4941],{9544:function(e,n,t){var a,r,o=t(9439),i=t(168),c=t(2791),l=t(1134),s=t(2360),d=t(184),u=s.ZP.div(a||(a=(0,i.Z)(["\n  @keyframes loading {\n    to {\n      background-position-x: -30%;\n    }\n  }\n  .loader__filter__searchbar {\n    background-color: #ededed;\n    height: 62px;\n    border-radius: 7px;\n    width: 100%;\n  }\n  .cb_frm_box .loader__filter__searchbar {\n    background-color: #ededed;\n    background: linear-gradient(\n        100deg,\n        rgba(255, 255, 255, 0) 40%,\n        rgba(255, 255, 255, 0.5) 50%,\n        rgba(255, 255, 255, 0) 60%\n      )\n      #ededed;\n    background-size: 200% 100%;\n    background-position-x: 180%;\n    animation: 1s loading ease-in-out infinite;\n  }\n"]))),f=s.ZP.span(r||(r=(0,i.Z)(["\n  opacity: 0.7;\n"]))),m=function(e){var n=e.title,t=e.actions,a=e.onSubmit,r=e.onClear,i=e.colSize,s=void 0===i?3:i,m=e.expanded,h=void 0!==m&&m,p=(0,c.useState)(!0),g=(0,o.Z)(p,2),b=g[0],v=g[1],_=(0,l.Gc)(),x=(0,c.useState)(!0),Z=(0,o.Z)(x,2),w=Z[0],j=Z[1],y=(0,c.useState)(h),N=(0,o.Z)(y,2),C=N[0],k=N[1];(0,c.useEffect)((function(){setTimeout((function(){v(!1)}),[200])}),[]);var S=t.filter((function(e){return!e.hidden}));return(0,d.jsxs)(u,{className:"cb_search_box",children:[(0,d.jsxs)("h3",{className:"cb_title_search",children:[(0,d.jsx)("span",{children:n}),(0,d.jsx)("span",{className:"cb_close_search",onClick:function(){return j(!w)},children:(0,d.jsx)("i",{style:{cursor:"pointer"},className:"ti-angle-down"})})]}),w&&(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),_.handleSubmit(a)(e)},children:[(0,d.jsx)("div",{className:"cb_row cb_mt_1 cb_mb_1 ",children:(C?S:S.slice(0,12/s)).map((function(e,n){var t=e.title,a=e.isRequired,r=e.component;return(0,d.jsx)("div",{className:"cb_col_".concat(s),children:(0,d.jsx)("div",{className:"cb_frm_box cb_h-100 ",children:b?(0,d.jsx)("div",{className:"loader__filter__searchbar"}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(f,{children:[t,a&&(0,d.jsx)("span",{className:"cb_red",children:"*"})]}),r]})})},"".concat(e.title).concat(n))}))}),!b&&(0,d.jsxs)("div",{className:"cb_row cb_align_items_center",children:[(0,d.jsx)("div",{className:"cb_col_6",children:S.length>12/s&&(0,d.jsx)("span",{onClick:function(){return k(!C)},className:"cb_btn_more_search",children:C?"\u1ea8n b\u1edbt":"T\xecm n\xe2ng cao"})}),(0,d.jsxs)("div",{className:"cb_col_6 cb_flex cb_justify_content_right cb_btn_group",children:[(0,d.jsx)("button",{id:"filter-search-bar-trigger",type:"submit",style:{display:"none"}}),(0,d.jsxs)("button",{id:"fitler_search_bar",className:"cb_btn cb_btn_success",style:{marginRight:"10px"},type:"button",onClick:_.handleSubmit(a),children:[(0,d.jsx)("span",{className:"ti-search"})," T\xecm ki\u1ebfm"]}),(0,d.jsx)("button",{type:"button",onClick:function(){_.reset({is_active:1}),r({})},className:"cb_btn_outline",children:"L\xe0m m\u1edbi"})]})]})]})]})};m.defaultProps={title:"",actions:[],onSubmit:function(){},onClear:function(){}},n.Z=m},5169:function(e,n,t){var a,r=t(168),o=(t(2791),t(2360)),i=t(184),c=o.ZP.div(a||(a=(0,r.Z)(["\n  display: block;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #f86c6b;\n"])));n.Z=function(e){var n=e.message;return(0,i.jsx)(c,{children:n})}},2027:function(e,n,t){var a,r=t(1413),o=t(5987),i=t(168),c=t(2791),l=t(1134),s=t(2648),d=t(7892),u=t.n(d),f=t(2360),m=t(5169),h=t(184),p=["fieldStart","fieldEnd","validation","placeholder","disabled","style","format","bordered","allowClear"],g=s.Z.RangePicker,b=f.ZP.div(a||(a=(0,i.Z)(["\n  .ant-picker-input > input::placeholder {\n    opacity: 0.7;\n  }\n"]))),v=function(e){var n=e.fieldStart,t=e.fieldEnd,a=e.validation,i=e.placeholder,s=e.disabled,d=void 0!==s&&s,f=e.style,v=e.format,_=e.bordered,x=void 0!==_&&_,Z=e.allowClear,w=(0,o.Z)(e,p),j=(0,l.Gc)(),y=j.getFieldState(n,j.formState).error,N=j.getFieldState(t,j.formState).error,C=(0,c.useMemo)((function(){return null!==y&&void 0!==y?y:N}),[y,N]);return c.useEffect((function(){j.register(n,a),j.register(t,a)}),[j,n,t,a]),(0,h.jsxs)(b,{children:[(0,h.jsx)(g,(0,r.Z)({bordered:x,allowClear:Z,disabled:d,minDate:new Date,placeholder:i,value:j.watch(n)||j.watch(t)?[u()(j.watch(n),v),u()(j.watch(t),v)]:"",onChange:function(e,a){e?(j.clearErrors(n),j.clearErrors(t),j.setValue(n,a[0]),j.setValue(t,a[1])):(j.setValue(n,""),j.setValue(t,""))},format:v,style:(0,r.Z)({width:"100%"},f)},w)),C&&(0,h.jsx)(m.Z,{message:null===C||void 0===C?void 0:C.message})]})};v.defaultProps={},n.Z=v},9487:function(e,n,t){var a=t(1413),r=t(5987),o=t(2791),i=t(1134),c=t(5169),l=t(184),s=["field","validation","type","placeholder","className","disabled"],d=function(e){var n,t=e.field,d=e.validation,u=e.type,f=void 0===u?"text":u,m=e.placeholder,h=e.className,p=e.disabled,g=(0,r.Z)(e,s),b=(0,i.Gc)(),v=b.getFieldState(t,b.formState).error;o.useEffect((function(){b.register(t,d)}),[b,t,d]);return(0,l.jsxs)(o.Fragment,{children:[(0,l.jsx)("input",(0,a.Z)({type:f,placeholder:m,className:h,disabled:p,value:null!==(n=b.watch(t))&&void 0!==n?n:"",checked:("checkbox"===f||"radio"==f)&&Boolean(b.watch(t)),onChange:function(e){b.clearErrors(t),b.setValue(t,"checkbox"===f||"radio"===f?!!e.target.checked:e.target.value||null)},style:{lineHeight:1}},g)),v&&(0,l.jsx)(c.Z,{message:null===v||void 0===v?void 0:v.message})]})};d.defaultProps={type:"text",className:""},n.Z=d},4127:function(e,n,t){var a,r=t(1413),o=t(5987),i=t(168),c=t(2791),l=t(8107),s=t(7106),d=t(1753),u=t(1134),f=t(2360),m=t(5169),h=t(184),p=["list","loading","bordered","placeholder","className","disabled","field","validation","mode","allowClear","showSearch","defaultValue"],g=(0,f.ZP)(l.Z)(a||(a=(0,i.Z)(["\n  display: flex;\n  .ant-select-selector {\n    font-size: 15px !important;\n    width: 100%;\n    padding: 0 !important;\n    margin: 1.8px 0;\n  }\n  .ant-select-arrow .anticon:not(.ant-select-suffix) {\n    pointer-events: none;\n  }\n  .ant-select-selection-search {\n    width: 100%;\n    inset-inline-start: 0 !important;\n    inset-inline-end: 0 !important;\n  }\n  .ant-select-selection-item {\n    padding: ",";\n    color: black;\n  }\n  :where(.css-dev-only-do-not-override-1me4733).ant-select-multiple .ant-select-selection-item {\n    background: var(--mainColor);\n    color: var(--whiteColor);\n    font-size: 14px !important;\n    height: 26.5px;\n    padding-top: 1px;\n  }\n  :where(.css-dev-only-do-not-override-1me4733).ant-select-multiple .ant-select-selection-item-remove {\n    color: var(--whiteColor);\n    border-left: 1px solid;\n    padding-right: 3px;\n    padding-left: 7px;\n    font-weight: bold;\n  }\n"])),(function(e){return e.bordered?"0 7px!important":void 0})),b=function(e){return{id:e,value:e}},v=function(e){var n=e.list,t=void 0===n?[]:n,a=e.loading,i=e.bordered,l=void 0!==i&&i,f=e.placeholder,v=void 0===f?"--Ch\u1ecdn--":f,_=e.className,x=e.disabled,Z=void 0!==x&&x,w=e.field,j=e.validation,y=e.mode,N=void 0===y?null:y,C=e.allowClear,k=void 0!==C&&C,S=e.showSearch,P=void 0===S||S,E=e.defaultValue,V=(0,o.Z)(e,p),F=(0,u.Gc)(),T=F.getFieldState(w,F.formState).error;return c.useEffect((function(){F.register(w,j)}),[F,w,j]),(0,h.jsxs)(c.Fragment,{children:[(0,h.jsx)(g,(0,r.Z)({className:_,mode:N,suffixIcon:a?(0,h.jsx)(s.Z,{}):(0,h.jsx)(d.Z,{}),bordered:l,showSearch:P,allowClear:k,placeholder:v,optionFilterProp:"children",disabled:Z,filterOption:function(e,n){var t;return(null!==(t=null===n||void 0===n?void 0:n.label)&&void 0!==t?t:"").toLowerCase().includes(e.toLowerCase())},defaultValue:E,value:F.watch(w),options:t,removeIcon:function(){return"\xd7"},onChange:function(e){console.log("\ud83d\ude80 ~ value:",e),F.clearErrors(w),Array.isArray(e)?F.setValue(w,e.map(b)):F.setValue(w,e)}},V)),T&&(0,h.jsx)(m.Z,{message:null===T||void 0===T?void 0:T.message})]})};v.defaultValue={bordered:!1,loading:!1},n.Z=v},4941:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var a=t(1413),r=t(9439),o=t(2791),i=t(1134),c=t(9544),l=t(9487),s=t(2027),d=t(5157),u=t(4127),f=t(9683),m=t(184),h=function(e){var n=e.onChange,t=(0,i.cI)(d.tS),h=(0,o.useState)([]),p=(0,r.Z)(h,2),g=p[0],b=p[1];return(0,o.useEffect)((function(){(0,f.FW)().then(b)}),[]),(0,m.jsx)(i.RV,(0,a.Z)((0,a.Z)({},t),{},{children:(0,m.jsx)(c.Z,{title:"T\xecm ki\u1ebfm",onSubmit:function(e){var t;e.search=null===(t=e.search)||void 0===t?void 0:t.trim(),n(e)},colSize:4,onClear:function(){return t.reset(d.tS),void n(d.tS)},actions:[{title:"T\u1eeb kh\xf3a",component:(0,m.jsx)(l.Z,{field:"search",placeholder:"Nh\u1eadp n\u1ed9i dung, m\xf4 t\u1ea3 qu\xe0 t\u1eb7ng",maxLength:250})},{title:"Ng\xe0y t\u1ea1o",component:(0,m.jsx)(s.Z,{allowClear:!0,fieldStart:"created_date_from",fieldEnd:"created_date_to",placeholder:["T\u1eeb ng\xe0y","\u0110\u1ebfn ng\xe0y"],format:"DD/MM/YYYY"})},{title:"\u0110\u01a1n v\u1ecb nh\u1eadn",component:(0,m.jsx)(u.Z,{allowClear:!0,field:"affiliate_unit_id",list:g||[]})}]})}))},p=t(4165),g=t(5861),b=t(9434),v=t(8356),_=t(1453),x=t(7544),Z=t(2152),w=function(e){var n,t=e.loading,a=e.data,r=e.totalPages,i=e.itemsPerPage,c=e.page,l=e.totalItems,s=e.onChangePage,d=e.onRefresh,u=e.exportExcel,f=(0,b.I0)(),h=(0,Z.a)().user,w=(0,o.useMemo)((function(){return[{header:"STT",classNameHeader:"cb_text_center",classNameBody:"cb_text_center",formatter:function(e,n){return(0,m.jsx)("span",{className:"cb_text_wrap",children:n+1})}},{header:"\u0110\u01a1n v\u1ecb nh\u1eadn",classNameHeader:"cb_text_center",accessor:"affiliate_unit_name"},{header:"Ng\u01b0\u1eddi t\u1eb7ng",classNameHeader:"cb_text_center",accessor:"giver_user_name"},{header:"Ng\u01b0\u1eddi \u0111\u1ec1 xu\u1ea5t",classNameHeader:"cb_text_center",accessor:"proposed_user_name"},{header:"Ng\xe0y t\u1eb7ng",accessor:"gift_date",classNameHeader:"cb_text_center",classNameBody:"cb_text_center"},{header:"Ng\u01b0\u1eddi t\u1ea1o",accessor:"created_fullname",classNameHeader:"cb_text_center",classNameBody:"cb_text_center"},{header:"Ng\xe0y t\u1ea1o",accessor:"created_at",classNameHeader:"cb_text_center",classNameBody:"cb_text_center"}]}),[]),j=(0,o.useCallback)((function(e){return(n=n||(0,g.Z)((0,p.Z)().mark((function e(n){return(0,p.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,_.Ee)(n);case 2:d();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}),[d]),y=(0,o.useMemo)((function(){return[{globalAction:!0,icon:"fi fi-rr-inbox-out",type:"success",content:"Xu\u1ea5t excel",outline:!0,onClick:u},{globalAction:!0,icon:"ti-plus",type:"success",content:"Th\xeam m\u1edbi",onClick:function(){return window._$g.rdr("gift/add")},hidden:null===h||void 0===h?void 0:h.is_admin},{icon:"ti-write",color:"blue",title:"S\u1eeda",onClick:function(e){window._$g.rdr("gift/edit/".concat(null===e||void 0===e?void 0:e.gift_id))}},{icon:"ti-eye",color:"green",title:"Chi ti\u1ebft",onClick:function(e){window._$g.rdr("gift/detail/".concat(null===e||void 0===e?void 0:e.gift_id))}},{icon:"fi ti-trash",color:"red",title:"X\xf3a",onClick:function(e,n){return f((0,v.SS)(["B\u1ea1n c\xf3 th\u1ef1c s\u1ef1 mu\u1ed1n x\xf3a?","B\u1ea1n s\u1ebd m\u1ea5t d\u1eef li\u1ec7u n\xe0y v\xe0 c\xe1c d\u1eef li\u1ec7u li\xean quan."],(function(){return j([e.gift_id])})))}}]}),[f,j,u]);return(0,m.jsx)(x.Z,{loading:t,columns:w,data:a,actions:y,totalPages:r,itemsPerPage:i,page:c,totalItems:l,onChangePage:s})},j=t(4238),y=t(2426),N=t.n(y),C=function(){var e=(0,o.useState)(j.Tb),n=(0,r.Z)(e,2),t=n[0],i=n[1],c=(0,o.useState)(j.U1),l=(0,r.Z)(c,2),s=l[0],d=l[1],u=(0,o.useState)(!0),f=(0,r.Z)(u,2),p=f[0],g=f[1],b=s.items,v=s.itemsPerPage,x=s.page,Z=s.totalItems,y=s.totalPages,C=(0,o.useCallback)((function(){g(!0),(0,_.gp)(t).then(d).finally((function(){g(!1)}))}),[t]);(0,o.useEffect)(C,[C]);return(0,m.jsxs)("div",{className:"cb_main_wrapp",children:[(0,m.jsx)(h,{onChange:function(e){i((function(n){return(0,a.Z)((0,a.Z)({},n),e)}))}}),(0,m.jsx)(w,{onChangePage:function(e){i((0,a.Z)((0,a.Z)({},t),{},{page:e}))},exportExcel:function(){(0,_.rD)(t).then((function(e){var n=window.URL.createObjectURL(new Blob([null===e||void 0===e?void 0:e.data])),t=document.createElement("a");t.href=n;var a=N()().format("DDMMYYYY");t.setAttribute("download","gift_".concat(a,".xlsx")),document.body.appendChild(t),t.click()})).catch((function(e){j.CF.error("L\u1ed7i xu\u1ea5t t\u1eadp tin.")}))},data:b,totalPages:y,itemsPerPage:v,page:x,totalItems:Z,loading:p,onRefresh:C})]})}},9683:function(e,n,t){t.d(n,{Ee:function(){return d},FO:function(){return c},FW:function(){return u},Ue:function(){return l},Vx:function(){return s},gp:function(){return i},uz:function(){return f}});var a=t(1413),r=t(3326),o="/affiliate-unit",i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.Z.get(o,{params:e})},c=function(e){return r.Z.get("".concat(o,"/").concat(e))},l=function(e){return r.Z.post(o,e)},s=function(e){return r.Z.patch(o,e)},d=function(e){return r.Z.delete("".concat(o,"/").concat(e))},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.Z.get(o+"/options",{params:e})},f=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.Z.get(o+"/export-form/".concat(e),(0,a.Z)({params:n},{responseType:"blob"}))}},1453:function(e,n,t){t.d(n,{Ee:function(){return d},FO:function(){return c},Ue:function(){return l},Vx:function(){return s},gp:function(){return i},rD:function(){return u},uz:function(){return f}});var a=t(1413),r=t(3326),o="/gift",i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.Z.get(o,{params:e})},c=function(e){return r.Z.get("".concat(o,"/").concat(e))},l=function(e){return r.Z.post(o,e)},s=function(e){return r.Z.patch(o,e)},d=function(e){return r.Z.delete("".concat(o,"/").concat(e))},u=function(e){return r.Z.get("".concat(o,"/export-excel"),(0,a.Z)({params:e},{responseType:"blob"}))},f=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.Z.get(o+"/export-form/".concat(e),(0,a.Z)({params:n},{responseType:"blob"}))}}}]);
//# sourceMappingURL=4941.215b2f90.chunk.js.map