"use strict";(self.webpackChunkshopdunk=self.webpackChunkshopdunk||[]).push([[452],{2452:function(t,n,e){e.r(n),e.d(n,{default:function(){return C}});var r=e(1413),a=e(9439),o=e(2791),c=e(1134),i=e(9544),u=e(9487),s=e(2027),l={search:"",created_date_from:null,created_date_to:null},d=e(184),f=function(t){var n=t.onChange,e=(0,c.cI)(l);return(0,d.jsx)(c.RV,(0,r.Z)((0,r.Z)({},e),{},{children:(0,d.jsx)(i.Z,{title:"T\xecm ki\u1ebfm",onSubmit:function(t){var e;t.search=null===(e=t.search)||void 0===e?void 0:e.trim(),n(t)},colSize:4,onClear:function(){return e.reset(l),void n(l)},actions:[{title:"T\u1eeb kh\xf3a",component:(0,d.jsx)(u.Z,{field:"search",placeholder:"Nh\u1eadp t\xean ph\xf2ng giao d\u1ecbch, s\u1ed1 \u0111i\u1ec7n tho\u1ea1i",maxLength:250})},{title:"Ng\xe0y t\u1ea1o",component:(0,d.jsx)(s.Z,{allowClear:!0,fieldStart:"created_date_from",fieldEnd:"created_date_to",placeholder:["T\u1eeb ng\xe0y","\u0110\u1ebfn ng\xe0y"],format:"DD/MM/YYYY"})}]})}))},m=e(4165),h=e(5861),g=e(9434),_=e(8356),p=e(734),x=e(7544),v=e(1640),Z=function(t){var n,e=t.loading,r=t.data,a=t.totalPages,c=t.itemsPerPage,i=t.page,u=t.totalItems,s=t.onChangePage,l=t.onRefresh,f=(0,g.I0)(),Z=(0,o.useMemo)((function(){return[{header:"STT",classNameHeader:"cb_text_center",classNameBody:"cb_text_center",formatter:function(t,n){return(0,d.jsx)("span",{className:"cb_text_wrap",children:n+1})}},{header:"T\xean ph\xf2ng giao d\u1ecbch",classNameHeader:"cb_text_center",accessor:"transaction_room_name"},{header:"\u0110\u1ecba ch\u1ec9",classNameHeader:"cb_text_center",accessor:"address"},{header:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",classNameHeader:"cb_text_center",classNameBody:"cb_text_center",formatter:function(t,n){var e;return(0,d.jsx)("span",{children:"".concat(null!==(e=t.phone_number_main)&&void 0!==e?e:""," ").concat(t.phone_number_sub?"- ".concat(t.phone_number_sub):"")})}},{header:"Ng\u01b0\u1eddi t\u1ea1o",classNameHeader:"cb_text_center",classNameBody:"cb_text_center",formatter:function(t,n){return(0,d.jsx)(v.Z,{placement:"right",title:"M\xe3 nh\xe2n vi\xean: ".concat(t.created_username),children:(0,d.jsx)("span",{children:t.created_fullname})})}},{header:"Ng\xe0y t\u1ea1o",accessor:"created_at",classNameHeader:"cb_text_center",classNameBody:"cb_text_center"}]}),[]),b=(0,o.useCallback)((function(t){return(n=n||(0,h.Z)((0,m.Z)().mark((function t(n){return(0,m.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.NA)(n);case 2:l();case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}),[l]),N=(0,o.useMemo)((function(){return[{globalAction:!0,icon:"ti-plus",type:"success",content:"Th\xeam m\u1edbi",onClick:function(){return window._$g.rdr("/transaction-room/add")}},{icon:"ti-write",color:"blue",title:"S\u1eeda",onClick:function(t){window._$g.rdr("/transaction-room/edit/".concat(null===t||void 0===t?void 0:t.transaction_room_id))}},{icon:"ti-eye",color:"green",title:"Chi ti\u1ebft",onClick:function(t){window._$g.rdr("/transaction-room/detail/".concat(null===t||void 0===t?void 0:t.transaction_room_id))}},{icon:"fi ti-trash",color:"red",title:"X\xf3a",onClick:function(t,n){return f((0,_.SS)(["B\u1ea1n c\xf3 th\u1ef1c s\u1ef1 mu\u1ed1n x\xf3a?","B\u1ea1n s\u1ebd m\u1ea5t d\u1eef li\u1ec7u n\xe0y v\xe0 c\xe1c d\u1eef li\u1ec7u li\xean quan."],(function(){return b([t.transaction_room_id])})))}}]}),[f,b]);return(0,d.jsx)(x.Z,{loading:e,columns:Z,data:r,actions:N,totalPages:a,itemsPerPage:c,page:i,totalItems:u,onChangePage:s})},b=e(9511),N=e(4238),C=function(){var t=(0,o.useState)(N.Tb),n=(0,a.Z)(t,2),e=n[0],c=n[1],i=(0,o.useState)(N.U1),u=(0,a.Z)(i,2),s=u[0],l=u[1],m=(0,o.useState)(!0),h=(0,a.Z)(m,2),g=h[0],_=h[1],p=s.items,x=s.itemsPerPage,v=s.page,C=s.totalItems,k=s.totalPages,P=(0,o.useCallback)((function(){_(!0),(0,b.gp)(e).then(l).finally((function(){_(!1)}))}),[e]);return(0,o.useEffect)(P,[P]),(0,d.jsxs)("div",{class:"cb_main_wrapp",children:[(0,d.jsx)(f,{onChange:function(t){c((function(n){return(0,r.Z)((0,r.Z)({},n),t)}))}}),(0,d.jsx)(Z,{onChangePage:function(t){c((0,r.Z)((0,r.Z)({},e),{},{page:t}))},data:p,totalPages:k,itemsPerPage:x,page:v,totalItems:C,loading:g,onRefresh:P})]})}},734:function(t,n,e){e.d(n,{FO:function(){return c},FW:function(){return l},NA:function(){return s},Ue:function(){return i},Vx:function(){return u},gp:function(){return o}});var r=e(3326),a="/branch",o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.Z.get(a,{params:t})},c=function(t){return r.Z.get("".concat(a,"/").concat(t))},i=function(t){return r.Z.post(a,t)},u=function(t){return r.Z.patch(a,t)},s=function(t){return r.Z.delete("".concat(a,"/").concat(t))},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.Z.get(a+"/options",{params:t})}},9511:function(t,n,e){e.d(n,{FO:function(){return c},FW:function(){return s},Ue:function(){return i},Vx:function(){return u},gp:function(){return o}});var r=e(3326),a="/transaction-room",o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.Z.get(a,{params:t})},c=function(t){return r.Z.get("".concat(a,"/").concat(t))},i=function(t){return r.Z.post(a,t)},u=function(t){return r.Z.patch(a,t)},s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.Z.get(a+"/options",{params:t})}}}]);
//# sourceMappingURL=452.a8870b30.chunk.js.map