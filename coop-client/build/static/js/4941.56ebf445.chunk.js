"use strict";(self.webpackChunkshopdunk=self.webpackChunkshopdunk||[]).push([[4941],{9544:function(e,n,t){var a,r,i=t(9439),o=t(168),c=t(2791),s=t(1134),l=t(2360),d=t(184),u=l.ZP.div(a||(a=(0,o.Z)(["\n  @keyframes loading {\n    to {\n      background-position-x: -30%;\n    }\n  }\n  .loader__filter__searchbar {\n    background-color: #ededed;\n    height: 62px;\n    border-radius: 7px;\n    width: 100%;\n  }\n  .cb_frm_box .loader__filter__searchbar {\n    background-color: #ededed;\n    background: linear-gradient(\n        100deg,\n        rgba(255, 255, 255, 0) 40%,\n        rgba(255, 255, 255, 0.5) 50%,\n        rgba(255, 255, 255, 0) 60%\n      )\n      #ededed;\n    background-size: 200% 100%;\n    background-position-x: 180%;\n    animation: 1s loading ease-in-out infinite;\n  }\n"]))),f=l.ZP.span(r||(r=(0,o.Z)(["\n  opacity: 0.7;\n"]))),m=function(e){var n=e.title,t=e.actions,a=e.onSubmit,r=e.onClear,o=e.colSize,l=void 0===o?3:o,m=e.expanded,h=void 0!==m&&m,g=(0,c.useState)(!0),_=(0,i.Z)(g,2),p=_[0],b=_[1],x=(0,s.Gc)(),v=(0,c.useState)(!0),Z=(0,i.Z)(v,2),N=Z[0],w=Z[1],j=(0,c.useState)(h),y=(0,i.Z)(j,2),C=y[0],k=y[1];(0,c.useEffect)((function(){setTimeout((function(){b(!1)}),[200])}),[]);var S=t.filter((function(e){return!e.hidden}));return(0,d.jsxs)(u,{className:"cb_search_box",children:[(0,d.jsxs)("h3",{className:"cb_title_search",children:[(0,d.jsx)("span",{children:n}),(0,d.jsx)("span",{className:"cb_close_search",onClick:function(){return w(!N)},children:(0,d.jsx)("i",{style:{cursor:"pointer"},className:"ti-angle-down"})})]}),N&&(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x.handleSubmit(a)(e)},children:[(0,d.jsx)("div",{className:"cb_row cb_mt_1 cb_mb_1 ",children:(C?S:S.slice(0,12/l)).map((function(e,n){var t=e.title,a=e.isRequired,r=e.component;return(0,d.jsx)("div",{className:"cb_col_".concat(l),children:(0,d.jsx)("div",{className:"cb_frm_box cb_h-100 ",children:p?(0,d.jsx)("div",{className:"loader__filter__searchbar"}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(f,{children:[t,a&&(0,d.jsx)("span",{className:"cb_red",children:"*"})]}),r]})})},"".concat(e.title).concat(n))}))}),!p&&(0,d.jsxs)("div",{className:"cb_row cb_align_items_center",children:[(0,d.jsx)("div",{className:"cb_col_6",children:S.length>12/l&&(0,d.jsx)("span",{onClick:function(){return k(!C)},className:"cb_btn_more_search",children:C?"\u1ea8n b\u1edbt":"T\xecm n\xe2ng cao"})}),(0,d.jsxs)("div",{className:"cb_col_6 cb_flex cb_justify_content_right cb_btn_group",children:[(0,d.jsx)("button",{id:"filter-search-bar-trigger",type:"submit",style:{display:"none"}}),(0,d.jsxs)("button",{id:"fitler_search_bar",className:"cb_btn cb_btn_success",style:{marginRight:"10px"},type:"button",onClick:x.handleSubmit(a),children:[(0,d.jsx)("span",{className:"ti-search"})," T\xecm ki\u1ebfm"]}),(0,d.jsx)("button",{type:"button",onClick:function(){x.reset({is_active:1}),r({})},className:"cb_btn_outline",children:"L\xe0m m\u1edbi"})]})]})]})]})};m.defaultProps={title:"",actions:[],onSubmit:function(){},onClear:function(){}},n.Z=m},9487:function(e,n,t){var a=t(1413),r=t(5987),i=t(2791),o=t(1134),c=t(5169),s=t(184),l=["field","validation","type","placeholder","className","disabled"],d=function(e){var n,t=e.field,d=e.validation,u=e.type,f=void 0===u?"text":u,m=e.placeholder,h=e.className,g=e.disabled,_=(0,r.Z)(e,l),p=(0,o.Gc)(),b=p.getFieldState(t,p.formState).error;i.useEffect((function(){p.register(t,d)}),[p,t,d]);return(0,s.jsxs)(i.Fragment,{children:[(0,s.jsx)("input",(0,a.Z)({type:f,placeholder:m,className:h,disabled:g,value:null!==(n=p.watch(t))&&void 0!==n?n:"",checked:("checkbox"===f||"radio"==f)&&Boolean(p.watch(t)),onChange:function(e){p.clearErrors(t),p.setValue(t,"checkbox"===f||"radio"===f?!!e.target.checked:e.target.value||null)},style:{lineHeight:1}},_)),b&&(0,s.jsx)(c.Z,{message:null===b||void 0===b?void 0:b.message})]})};d.defaultProps={type:"text",className:""},n.Z=d},4127:function(e,n,t){var a,r=t(1413),i=t(5987),o=t(168),c=t(2791),s=t(8107),l=t(7106),d=t(1753),u=t(1134),f=t(2360),m=t(5169),h=t(184),g=["list","loading","bordered","placeholder","className","disabled","field","validation","mode","allowClear","showSearch","defaultValue"],_=(0,f.ZP)(s.Z)(a||(a=(0,o.Z)(["\n  display: flex;\n  .ant-select-selector {\n    font-size: 15px !important;\n    width: 100%;\n    padding: 0 !important;\n    margin: 1.8px 0;\n  }\n  .ant-select-arrow .anticon:not(.ant-select-suffix) {\n    pointer-events: none;\n  }\n  .ant-select-selection-search {\n    width: 100%;\n    inset-inline-start: 0 !important;\n    inset-inline-end: 0 !important;\n  }\n  .ant-select-selection-item {\n    padding: ",";\n    color: black;\n  }\n  :where(.css-dev-only-do-not-override-1me4733).ant-select-multiple .ant-select-selection-item {\n    background: var(--mainColor);\n    color: var(--whiteColor);\n    font-size: 14px !important;\n    height: 26.5px;\n    padding-top: 1px;\n  }\n  :where(.css-dev-only-do-not-override-1me4733).ant-select-multiple .ant-select-selection-item-remove {\n    color: var(--whiteColor);\n    border-left: 1px solid;\n    padding-right: 3px;\n    padding-left: 7px;\n    font-weight: bold;\n  }\n"])),(function(e){return e.bordered?"0 7px!important":void 0})),p=function(e){return{id:e,value:e}},b=function(e){var n=e.list,t=void 0===n?[]:n,a=e.loading,o=e.bordered,s=void 0!==o&&o,f=e.placeholder,b=void 0===f?"--Ch\u1ecdn--":f,x=e.className,v=e.disabled,Z=void 0!==v&&v,N=e.field,w=e.validation,j=e.mode,y=void 0===j?null:j,C=e.allowClear,k=void 0!==C&&C,S=e.showSearch,P=void 0===S||S,T=e.defaultValue,E=(0,i.Z)(e,g),H=(0,u.Gc)(),B=H.getFieldState(N,H.formState).error;return c.useEffect((function(){H.register(N,w)}),[H,N,w]),(0,h.jsxs)(c.Fragment,{children:[(0,h.jsx)(_,(0,r.Z)({className:x,mode:y,suffixIcon:a?(0,h.jsx)(l.Z,{}):(0,h.jsx)(d.Z,{}),bordered:s,showSearch:P,allowClear:k,placeholder:b,optionFilterProp:"children",disabled:Z,filterOption:function(e,n){var t;return(null!==(t=null===n||void 0===n?void 0:n.label)&&void 0!==t?t:"").toLowerCase().includes(e.toLowerCase())},defaultValue:T,value:H.watch(N),options:t,removeIcon:function(){return"\xd7"},onChange:function(e){console.log("\ud83d\ude80 ~ value:",e),H.clearErrors(N),Array.isArray(e)?H.setValue(N,e.map(p)):H.setValue(N,e)}},E)),B&&(0,h.jsx)(m.Z,{message:null===B||void 0===B?void 0:B.message})]})};b.defaultValue={bordered:!1,loading:!1},n.Z=b},4941:function(e,n,t){t.r(n),t.d(n,{default:function(){return k}});var a=t(1413),r=t(9439),i=t(2791),o=t(1134),c=t(9544),s=t(9487),l=t(2027),d=t(5157),u=t(4127),f=t(9683),m=t(184),h=function(e){var n=e.onChange,t=(0,o.cI)(d.tS),h=(0,i.useState)([]),g=(0,r.Z)(h,2),_=g[0],p=g[1];return(0,i.useEffect)((function(){(0,f.FW)().then(p)}),[]),(0,m.jsx)(o.RV,(0,a.Z)((0,a.Z)({},t),{},{children:(0,m.jsx)(c.Z,{title:"T\xecm ki\u1ebfm",onSubmit:function(e){var t;e.search=null===(t=e.search)||void 0===t?void 0:t.trim(),n(e)},colSize:4,onClear:function(){return t.reset(d.tS),void n(d.tS)},actions:[{title:"T\u1eeb kh\xf3a",component:(0,m.jsx)(s.Z,{field:"search",placeholder:"Nh\u1eadp n\u1ed9i dung, m\xf4 t\u1ea3 qu\xe0 t\u1eb7ng",maxLength:250})},{title:"Ng\xe0y t\u1ea1o",component:(0,m.jsx)(l.Z,{allowClear:!0,fieldStart:"created_date_from",fieldEnd:"created_date_to",placeholder:["T\u1eeb ng\xe0y","\u0110\u1ebfn ng\xe0y"],format:"DD/MM/YYYY"})},{title:"\u0110\u01a1n v\u1ecb nh\u1eadn",component:(0,m.jsx)(u.Z,{allowClear:!0,field:"affiliate_unit_id",list:_||[]})}]})}))},g=t(4165),_=t(5861),p=t(9434),b=t(8356),x=t(1453),v=t(7544),Z=t(2152),N=t(2703),w=function(e){var n,t=e.loading,a=e.data,r=e.totalPages,o=e.itemsPerPage,c=e.page,s=e.totalItems,l=e.onChangePage,d=e.onRefresh,u=e.exportExcel,f=(0,p.I0)(),h=(0,Z.a)().user,w=(0,i.useMemo)((function(){return[{header:"STT",classNameHeader:"cb_text_center",classNameBody:"cb_text_center",formatter:function(e,n){return(0,m.jsx)("span",{className:"cb_text_wrap",children:n+1})}},{header:"\u0110\u01a1n v\u1ecb nh\u1eadn",classNameHeader:"cb_text_center",accessor:"affiliate_unit_name"},{header:"M\xe3 \u0111\u01a1n v\u1ecb nh\u1eadn",classNameHeader:"cb_text_center",accessor:"affiliate_unit_code"},{header:"T\u1ed5ng s\u1ed1 ti\u1ec1n qu\xe0",classNameHeader:"cb_text_center",classNameBody:"cb_text_right",formatter:function(e){var n;return(0,N.T4)(null===e||void 0===e||null===(n=e.gifts)||void 0===n?void 0:n.reduce((function(e,n){return e+n.gift_price*n.gift_quantity}),0),!0,".")}},{header:"Ng\u01b0\u1eddi t\u1eb7ng",classNameHeader:"cb_text_center",accessor:"giver_user_name"},{header:"Ng\u01b0\u1eddi \u0111\u1ec1 xu\u1ea5t",classNameHeader:"cb_text_center",accessor:"proposed_user_name"},{header:"Ng\xe0y t\u1eb7ng",accessor:"gift_date",classNameHeader:"cb_text_center",classNameBody:"cb_text_center"},{header:"Ng\u01b0\u1eddi t\u1ea1o",accessor:"created_fullname",classNameHeader:"cb_text_center",classNameBody:"cb_text_center"},{header:"Ng\xe0y t\u1ea1o",accessor:"created_at",classNameHeader:"cb_text_center",classNameBody:"cb_text_center"}]}),[]),j=(0,i.useCallback)((function(e){return(n=n||(0,_.Z)((0,g.Z)().mark((function e(n){return(0,g.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,x.Ee)(n);case 2:d();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}),[d]),y=(0,i.useMemo)((function(){return[{globalAction:!0,icon:"ti-export",type:"success",content:"Xu\u1ea5t excel",outline:!0,onClick:u},{globalAction:!0,icon:"ti-plus",type:"success",content:"Th\xeam m\u1edbi",onClick:function(){return window._$g.rdr("gift/add")},hidden:null===h||void 0===h?void 0:h.is_admin},{icon:"ti-write",color:"blue",title:"S\u1eeda",onClick:function(e){window._$g.rdr("gift/edit/".concat(null===e||void 0===e?void 0:e.gift_id))}},{icon:"ti-eye",color:"green",title:"Chi ti\u1ebft",onClick:function(e){window._$g.rdr("gift/detail/".concat(null===e||void 0===e?void 0:e.gift_id))}},{icon:"fi ti-trash",color:"red",title:"X\xf3a",hidden:function(e){return!h.is_admin&&e.created_username!==h.username},onClick:function(e,n){return f((0,b.SS)(["B\u1ea1n c\xf3 th\u1ef1c s\u1ef1 mu\u1ed1n x\xf3a?","B\u1ea1n s\u1ebd m\u1ea5t d\u1eef li\u1ec7u n\xe0y v\xe0 c\xe1c d\u1eef li\u1ec7u li\xean quan."],(function(){return j([e.gift_id])})))}}]}),[f,j,u]);return(0,m.jsx)(v.Z,{loading:t,columns:w,data:a,actions:y,totalPages:r,itemsPerPage:o,page:c,totalItems:s,onChangePage:l})},j=t(4238),y=t(2426),C=t.n(y),k=function(){var e=(0,i.useState)(j.Tb),n=(0,r.Z)(e,2),t=n[0],o=n[1],c=(0,i.useState)(j.U1),s=(0,r.Z)(c,2),l=s[0],d=s[1],u=(0,i.useState)(!0),f=(0,r.Z)(u,2),g=f[0],_=f[1],p=l.items,b=l.itemsPerPage,v=l.page,Z=l.totalItems,N=l.totalPages,y=(0,i.useCallback)((function(){_(!0),(0,x.gp)(t).then(d).finally((function(){_(!1)}))}),[t]);(0,i.useEffect)(y,[y]);return(0,m.jsxs)("div",{className:"cb_main_wrapp",children:[(0,m.jsx)(h,{onChange:function(e){o((function(n){return(0,a.Z)((0,a.Z)({},n),e)}))}}),(0,m.jsx)(w,{onChangePage:function(e){o((0,a.Z)((0,a.Z)({},t),{},{page:e}))},exportExcel:function(){(0,x.rD)(t).then((function(e){var n=window.URL.createObjectURL(new Blob([null===e||void 0===e?void 0:e.data])),t=document.createElement("a");t.href=n;var a=C()().format("DDMMYYYY");t.setAttribute("download","gift_".concat(a,".xlsx")),document.body.appendChild(t),t.click()})).catch((function(e){j.CF.error("L\u1ed7i xu\u1ea5t t\u1eadp tin.")}))},data:p,totalPages:N,itemsPerPage:b,page:v,totalItems:Z,loading:g,onRefresh:y})]})}},1453:function(e,n,t){t.d(n,{Ee:function(){return d},FO:function(){return c},Ue:function(){return s},Vx:function(){return l},gp:function(){return o},rD:function(){return u},uz:function(){return f}});var a=t(1413),r=t(3326),i="/gift",o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.Z.get(i,{params:e})},c=function(e){return r.Z.get("".concat(i,"/").concat(e))},s=function(e){return r.Z.post(i,e)},l=function(e){return r.Z.patch(i,e)},d=function(e){return r.Z.delete("".concat(i,"/").concat(e))},u=function(e){return r.Z.get("".concat(i,"/export-excel"),(0,a.Z)({params:e},{responseType:"blob"}))},f=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return r.Z.get(i+"/export-form/".concat(e),(0,a.Z)({params:n},{responseType:"blob"}))}}}]);
//# sourceMappingURL=4941.56ebf445.chunk.js.map