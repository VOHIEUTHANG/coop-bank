"use strict";(self.webpackChunkshopdunk=self.webpackChunkshopdunk||[]).push([[2438],{655:function(e,n,t){var i,a=t(9439),r=t(168),l=t(2791),c=t(2360),o=t(184),s=c.ZP.span(i||(i=(0,r.Z)(["\n  transform: ",";\n  color: ",";\n"])),(function(e){return e.open?"rotate(180deg)":""}),(function(e){return e.open?"#333333":""}));n.Z=function(e){e.style;var n=e.title,t=e.children,i=e.id,r=e.isRequired,c=void 0!==r&&r,d=e.componentCustom,u=e.defaultOpen,f=void 0===u||u,h=(0,l.useState)(f),m=(0,a.Z)(h,2),p=m[0],b=m[1];return(0,o.jsx)(l.Fragment,{children:(0,o.jsx)("div",{id:i,className:"cb_items_frm",children:(0,o.jsxs)("div",{className:"cb_collapse ".concat(p?"cb_active":""),children:[!!n&&(0,o.jsxs)("div",{className:"cb_collapse_title",style:{width:"fit-content",gap:"5px"},children:[(0,o.jsx)(s,{open:p,className:"ti-angle-down",onClick:function(){b(!p)}}),(0,o.jsxs)("h3",{children:[n,c&&(0,o.jsx)("span",{className:"cb_red",children:"*"})]})]}),p&&(0,o.jsx)("div",{className:"cb_collapse_panel",children:t}),d&&d]})})})}},9257:function(e,n,t){var i,a=t(1413),r=t(5987),l=t(168),c=t(2791),o=t(1134),s=t(5169),d=t(2648),u=t(7892),f=t.n(u),h=t(2360),m=t(184),p=["field","validation","placeholder","disabled","style","format","bordered","allowClear"],b=(0,h.ZP)(d.Z)(i||(i=(0,l.Z)(["\n  .ant-picker-input input {\n    color: black !important;\n  }\n"])));n.Z=function(e){var n=e.field,t=e.validation,i=e.placeholder,l=e.disabled,d=void 0!==l&&l,u=e.style,h=e.format,v=e.bordered,g=e.allowClear,_=(0,r.Z)(e,p),x=(0,o.Gc)(),Z=x.getFieldState(n,x.formState).error;return c.useEffect((function(){x.register(n,t)}),[x,n,t]),(0,m.jsxs)(c.Fragment,{children:[(0,m.jsx)(b,(0,a.Z)({bordered:v,allowClear:g,disabled:d,placeholder:i,value:x.watch(n)?f()(x.watch(n),h):"",onChange:function(e,t){t?(x.clearErrors(n),x.setValue(n,t)):x.setValue(n,null)},format:h,style:u},_)),Z&&(0,m.jsx)(s.Z,{message:null===Z||void 0===Z?void 0:Z.message})]})}},9487:function(e,n,t){var i=t(1413),a=t(5987),r=t(2791),l=t(1134),c=t(5169),o=t(184),s=["field","validation","type","placeholder","className","disabled"],d=function(e){var n,t=e.field,d=e.validation,u=e.type,f=void 0===u?"text":u,h=e.placeholder,m=e.className,p=e.disabled,b=(0,a.Z)(e,s),v=(0,l.Gc)(),g=v.getFieldState(t,v.formState).error;r.useEffect((function(){v.register(t,d)}),[v,t,d]);return(0,o.jsxs)(r.Fragment,{children:[(0,o.jsx)("input",(0,i.Z)({type:f,placeholder:h,className:m,disabled:p,value:null!==(n=v.watch(t))&&void 0!==n?n:"",checked:("checkbox"===f||"radio"==f)&&Boolean(v.watch(t)),onChange:function(e){v.clearErrors(t),v.setValue(t,"checkbox"===f||"radio"===f?!!e.target.checked:e.target.value||null)},style:{lineHeight:1}},b)),g&&(0,o.jsx)(c.Z,{message:null===g||void 0===g?void 0:g.message})]})};d.defaultProps={type:"text",className:""},n.Z=d},7463:function(e,n,t){var i,a=t(1413),r=t(5987),l=t(168),c=t(2791),o=t(1134),s=t(5169),d=t(8597),u=t(2360),f=t(184),h=["field","validation","bordered","disabled"],m=(0,u.ZP)(d.Z)(i||(i=(0,l.Z)(["\n  .ant-input-number-group-addon {\n    border: ",";\n  }\n  .ant-input-number-input {\n    color: black !important;\n  }\n"])),(function(e){return e.bordered?"":"none"}));n.Z=function(e){var n=e.field,t=e.validation,i=e.bordered,l=void 0!==i&&i,d=e.disabled,u=(0,r.Z)(e,h),p=(0,o.Gc)(),b=p.getFieldState(n,p.formState).error;c.useEffect((function(){p.register(n,t)}),[p,n,t]);return(0,f.jsxs)(c.Fragment,{children:[(0,f.jsx)(m,(0,a.Z)({style:{width:"100%"},bordered:l,disabled:d,formatter:function(e){return e?"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,","):""},value:p.watch(n),placeholder:"0",parser:function(e){return e.replace(/\$\s?|(,*)/g,"")},onChange:function(e){p.clearErrors(n),p.setValue(n,e)},controls:!1},u)),b&&(0,f.jsx)(s.Z,{message:null===b||void 0===b?void 0:b.message})]})}},4127:function(e,n,t){var i,a=t(1413),r=t(5987),l=t(168),c=t(2791),o=t(8107),s=t(7106),d=t(1753),u=t(1134),f=t(2360),h=t(5169),m=t(184),p=["list","loading","bordered","placeholder","className","disabled","field","validation","mode","allowClear","showSearch","defaultValue"],b=(0,f.ZP)(o.Z)(i||(i=(0,l.Z)(["\n  display: flex;\n  .ant-select-selector {\n    font-size: 15px !important;\n    width: 100%;\n    padding: 0 !important;\n    margin: 1.8px 0;\n  }\n  .ant-select-arrow .anticon:not(.ant-select-suffix) {\n    pointer-events: none;\n  }\n  .ant-select-selection-search {\n    width: 100%;\n    inset-inline-start: 0 !important;\n    inset-inline-end: 0 !important;\n  }\n  .ant-select-selection-item {\n    padding: ",";\n    color: black;\n  }\n  :where(.css-dev-only-do-not-override-1me4733).ant-select-multiple .ant-select-selection-item {\n    background: var(--mainColor);\n    color: var(--whiteColor);\n    font-size: 14px !important;\n    height: 26.5px;\n    padding-top: 1px;\n  }\n  :where(.css-dev-only-do-not-override-1me4733).ant-select-multiple .ant-select-selection-item-remove {\n    color: var(--whiteColor);\n    border-left: 1px solid;\n    padding-right: 3px;\n    padding-left: 7px;\n    font-weight: bold;\n  }\n"])),(function(e){return e.bordered?"0 7px!important":void 0})),v=function(e){return{id:e,value:e}},g=function(e){var n=e.list,t=void 0===n?[]:n,i=e.loading,l=e.bordered,o=void 0!==l&&l,f=e.placeholder,g=void 0===f?"--Ch\u1ecdn--":f,_=e.className,x=e.disabled,Z=void 0!==x&&x,j=e.field,w=e.validation,y=e.mode,N=void 0===y?null:y,C=e.allowClear,k=void 0!==C&&C,q=e.showSearch,S=void 0===q||q,F=e.defaultValue,V=(0,r.Z)(e,p),M=(0,u.Gc)(),E=M.getFieldState(j,M.formState).error;return c.useEffect((function(){M.register(j,w)}),[M,j,w]),(0,m.jsxs)(c.Fragment,{children:[(0,m.jsx)(b,(0,a.Z)({className:_,mode:N,suffixIcon:i?(0,m.jsx)(s.Z,{}):(0,m.jsx)(d.Z,{}),bordered:o,showSearch:S,allowClear:k,placeholder:g,optionFilterProp:"children",disabled:Z,filterOption:function(e,n){var t;return(null!==(t=null===n||void 0===n?void 0:n.label)&&void 0!==t?t:"").toLowerCase().includes(e.toLowerCase())},defaultValue:F,value:M.watch(j),options:t,removeIcon:function(){return"\xd7"},onChange:function(e){console.log("\ud83d\ude80 ~ value:",e),M.clearErrors(j),Array.isArray(e)?M.setValue(j,e.map(v)):M.setValue(j,e)}},V)),E&&(0,m.jsx)(h.Z,{message:null===E||void 0===E?void 0:E.message})]})};g.defaultValue={bordered:!1,loading:!1},n.Z=g},3165:function(e,n,t){var i,a=t(5987),r=t(7762),l=t(1413),c=t(168),o=t(2791),s=t(43),d=t(1134),u=t(2703),f=t(4880),h=t(7106),m=t(8888),p=t(1488),b=(t(5266),t(2360)),v=t(184),g=["title","id","component","className"],_=b.ZP.div(i||(i=(0,c.Z)([""]))),x=(0,v.jsx)(h.Z,{style:{fontSize:24},spin:!0}),Z=function(e){var n=e.loading,t=e.detailForm,i=e.onSubmit,c=e.disabled,h=e.actions,b=e.noActions,Z=e.noSideBar,j=e.noPadding,w=e.style,y=e.customerClose,N=e.enableEditButton,C=void 0===N||N,k=(0,d.Gc)(),q=k.formState.isSubmitting,S=(0,f.TH)().pathname,F=(0,o.useMemo)((function(){var e;return null===S||void 0===S||null===(e=S.split("/"))||void 0===e?void 0:e[1]}),[S]),V=((0,o.useMemo)((function(){var e,n,t,i=p.Z.filter((function(e){return null===e||void 0===e?void 0:e.path.includes("/".concat(F,"/"))}));return{edit:null===i||void 0===i||null===(e=i.find((function(e){return null===e||void 0===e?void 0:e.path.includes("/edit")})))||void 0===e?void 0:e.function,add:null===i||void 0===i||null===(n=i.find((function(e){return null===e||void 0===e?void 0:e.path.includes("/add")})))||void 0===n?void 0:n.function,detail:null===i||void 0===i||null===(t=i.find((function(e){return null===e||void 0===e?void 0:e.path.includes("/detail")})))||void 0===t?void 0:t.function}}),[F]),(0,f.UO)()),M=n||q,E=(0,o.useMemo)((function(){var e,n;return null!==(e=null!==(n=V["".concat(F,"_id")])&&void 0!==n?n:null===V||void 0===V?void 0:V.id)&&void 0!==e?e:V[Object.keys(V).find((function(e){return e.includes("id")}))]}),[V,F]),T=(0,o.useMemo)((function(){return S.includes("/detail")||S.includes("/view")}),[S]),A=(0,o.useMemo)((function(){return S.includes("/add")}),[S]),R=(0,o.useMemo)((function(){return S.includes("/edit")}),[S]),Y=(0,f.k6)(),B=(0,u.Wh)((0,f.TH)().pathname)[0],G=function(){Y.push("".concat(B))},P=function(e){e.preventDefault(),Y.push("".concat(B,"/edit/").concat(E))},D=(0,o.useMemo)((function(){if(!b)return T?(0,v.jsxs)(v.Fragment,{children:[null===h||void 0===h?void 0:h.filter((function(e){return!e.hidden})).map((function(e,n){return(0,v.jsx)(m.Z,(0,l.Z)({className:"mr-2"},e),n)})),C&&(0,v.jsx)("button",{type:"button",className:"cb_btn_outline cb_btn_outline_success",onClick:P,children:"Ch\u1ec9nh s\u1eeda"})]}):A||R?(0,v.jsxs)(v.Fragment,{children:[null===h||void 0===h?void 0:h.filter((function(e){return!e.hidden})).map((function(e,n){return(0,v.jsx)(m.Z,(0,l.Z)({className:"mr-2"},e),n)})),(0,v.jsxs)("button",{type:"submit",className:"cb_btn cb_btn_success",children:[(0,v.jsx)("span",{className:"ti-check"}),"Ho\xe0n t\u1ea5t ",R?"ch\u1ec9nh s\u1eeda":"th\xeam m\u1edbi"]})]}):void 0}),[T,R,A,h,b]),H=(0,o.useMemo)((function(){if(!b)return(0,v.jsx)("button",{type:"button",className:"cb_btn_outline",onClick:null!==y&&void 0!==y?y:G,children:"\u0110\xf3ng"})}),[b]),O=(0,o.useMemo)((function(){var e;return null!==(e=(null!==t&&void 0!==t?t:[]).filter((function(e){return!e.hidden})))&&void 0!==e?e:[]}),[t]),I=(0,v.jsxs)(o.Fragment,{children:[(0,v.jsx)("div",{style:w,className:"cb_main_wrapp",children:(0,v.jsxs)("div",{className:"cb_row",children:[!Z&&(0,v.jsx)("div",{className:"cb_col_3",children:(0,v.jsx)("ul",{className:"cb_control_form",children:O.map((function(e,n){var t=!1;if(Boolean(null===e||void 0===e?void 0:e.fieldActive)){var i,a,l=(0,r.Z)(null!==(i=null===e||void 0===e?void 0:e.fieldActive)&&void 0!==i?i:[]);try{for(l.s();!(a=l.n()).done;){var c=a.value;if(0!==k.watch(c)&&!Boolean(k.watch(c))){t=!1;break}t=!0}}catch(o){l.e(o)}finally{l.f()}}else t=!0;return(0,v.jsx)("li",{onClick:function(){document.getElementById(n).scrollIntoView({block:"start",behavior:"smooth"})},children:(0,v.jsxs)("a",{className:t?"cb_active":"",children:[(0,v.jsx)("span",{className:"ti-check"})," ",null===e||void 0===e?void 0:e.title]})},n)}))})}),(0,v.jsx)("div",{className:"".concat(Z?"cb_col_12":"cb_col_9"," ").concat(j?"":"cb_pb_6"),children:(0,v.jsx)(s.Z,{spinning:M,indicator:x,children:(0,v.jsx)("div",{className:"cb_row",children:O.map((function(e,n){var t=e.title,i=e.id,r=e.component,o=e.className,s=(0,a.Z)(e,g);return(0,v.jsx)("span",{id:n,className:null!==o&&void 0!==o?o:"cb_col_12",children:r&&(0,v.jsx)(r,(0,l.Z)({id:i,title:t,disabled:c},s))},n)}))})})})]})}),!b&&!q&&(0,v.jsxs)(_,{className:"cb_btn_save cb_btn_group cb_flex cb_justify_content_right cb_align_items_center",children:[D,H]})]});return b?I:(0,v.jsx)("form",{onSubmit:k.handleSubmit(i),children:I})};Z.defaultProps={loading:!1,detailForm:{},onSubmit:function(){},disabled:!1,noActions:!1,enableEditButton:!0},n.Z=Z},2438:function(e,n,t){t.r(n),t.d(n,{default:function(){return R}});var i,a=t(1413),r=t(4165),l=t(5861),c=t(2791),o=t(3165),s=t(1134),d=t(4880),u=t(1453),f=t(9439),h=t(655),m=t(6503),p=t(4127),b=t(5653),v=t(9683),g=t(9257),_=t(9487),x=t(2152),Z=t(184),j=function(e){var n=e.disabled,t=e.title,i=e.id,a=(0,s.Gc)(),r=(0,c.useState)([]),l=(0,f.Z)(r,2),o=l[0],d=l[1],u=(0,c.useState)([]),j=(0,f.Z)(u,2),w=j[0],y=j[1],N=(0,x.a)().user;return(0,c.useEffect)((function(){(0,b.FW)().then(d),(0,v.FW)().then(y)}),[]),(0,c.useEffect)((function(){if(a.watch("affiliate_unit_id")){var e=null===w||void 0===w?void 0:w.find((function(e){return e.value===a.watch("affiliate_unit_id")}));e&&(a.setValue("affiliate_unit_code",e.affiliate_unit_code),a.setValue("affiliate_unit_address",e.affiliate_unit_address))}}),[a.watch("affiliate_unit_id"),w]),(0,Z.jsx)(h.Z,{title:t,id:i,children:(0,Z.jsxs)("div",{className:"cb_row",children:[(0,Z.jsx)("div",{className:"cb_col_6",children:(0,Z.jsx)(m.Z,{label:"\u0110\u01a1n v\u1ecb nh\u1eadn",isRequired:!0,disabled:n||N.is_admin,children:(0,Z.jsx)(p.Z,{allowClear:!0,disabled:n,field:"affiliate_unit_id",placeholder:"Ch\u1ecdn \u0111\u01a1n v\u1ecb nh\u1eadn",list:w||[],validation:{required:"\u0110\u01a1n v\u1ecb nh\u1eadn l\xe0 b\u1eaft bu\u1ed9c"}})})}),(0,Z.jsx)("div",{className:"cb_col_6",children:(0,Z.jsx)(m.Z,{label:"M\xe3 \u0111\u01a1n v\u1ecb nh\u1eadn",isRequired:!0,disabled:n,children:(0,Z.jsx)(_.Z,{allowClear:!0,disabled:n,field:"affiliate_unit_code"})})}),(0,Z.jsx)("div",{className:"cb_col_6",children:(0,Z.jsx)(m.Z,{label:"\u0110\u1ecba ch\u1ec9 qu\xe0 t\u1eb7ng",isRequired:!0,disabled:n,children:(0,Z.jsx)(_.Z,{allowClear:!0,disabled:n,field:"affiliate_unit_address"})})}),(0,Z.jsx)("div",{className:"cb_col_6",children:(0,Z.jsx)(m.Z,{label:"Ng\u01b0\u1eddi t\u1eb7ng",isRequired:!0,disabled:n,children:(0,Z.jsx)(p.Z,{allowClear:!0,disabled:n,field:"giver_user_id",placeholder:"Ch\u1ecdn ng\u01b0\u1eddi t\u1eb7ng",list:o||[],validation:{required:"Ng\u01b0\u1eddi t\u1eb7ng l\xe0 b\u1eaft bu\u1ed9c"}})})}),(0,Z.jsx)("div",{className:"cb_col_6",children:(0,Z.jsx)(m.Z,{label:"Ng\xe0y \u0111\u1ec1 ngh\u1ecb",isRequired:!0,disabled:n,children:(0,Z.jsx)(g.Z,{format:"DD/MM/YYYY",field:"proposed_date",placeholder:"dd/mm/yyyy",style:{width:"100%"},bordered:!1,allowClear:!0,validation:{required:"Ng\xe0y \u0111\u1ec1 ngh\u1ecb l\xe0 b\u1eaft bu\u1ed9c"}})})}),(0,Z.jsx)("div",{className:"cb_col_6",children:(0,Z.jsx)(m.Z,{label:"Ng\u01b0\u1eddi \u0111\u1ec1 ngh\u1ecb",isRequired:!0,disabled:n,children:(0,Z.jsx)(p.Z,{allowClear:!0,disabled:n,field:"proposed_user_id",placeholder:"Ch\u1ecdn ng\u01b0\u1eddi \u0111\u1ec1 ngh\u1ecb",list:o||[],validation:{required:"Ng\u01b0\u1eddi \u0111\u1ec1 ngh\u1ecb l\xe0 b\u1eaft bu\u1ed9c"}})})}),(0,Z.jsx)("div",{className:"cb_col_6",children:(0,Z.jsx)(m.Z,{label:"Ng\xe0y t\u1eb7ng qu\xe0",isRequired:!0,disabled:n,children:(0,Z.jsx)(g.Z,{format:"DD/MM/YYYY",field:"gift_date",placeholder:"dd/mm/yyyy",style:{width:"100%"},bordered:!1,allowClear:!0})})})]})})},w=t(7544),y=t(7463),N=t(2703),C=function(e){var n=e.disabled,t=e.title,i=(0,s.Gc)(),a=i.control,r=(0,s.Dq)({control:a,name:"gifts"}),l=r.remove,o=r.fields,d=r.append;console.log(o);var u=[{header:"STT",formatter:function(e,n){return n+1},classNameBody:"cb_text_center",classNameHeader:"cb_text_center"},{header:"T\xean ph\u1ea7n qu\xe0",classNameHeader:"cb_text_center",accessor:"gift_name",formatter:function(e,n){return(0,Z.jsx)(_.Z,{className:"cb_inp",field:"gifts.".concat(n,".gift_name"),placeholder:"Nh\u1eadp t\xean ph\u1ea7n qu\xe0",validation:{required:"T\xean ph\u1ea7n qu\xe0 l\xe0 b\u1eaft bu\u1ed9c"}})}},{header:"S\u1ed1 l\u01b0\u1ee3ng",classNameHeader:"cb_text_center",accessor:"gift_quantity",formatter:function(e,n){return(0,Z.jsx)(y.Z,{bordered:!0,field:"gifts.".concat(n,".gift_quantity"),placeholder:"Nh\u1eadp s\u1ed1 l\u01b0\u1ee3ng",validation:{min:{value:1,message:"Gi\xe1 tr\u1ecb ph\u1ea3i l\u1edbn h\u01a1n 0"},required:"S\u1ed1 l\u01b0\u1ee3ng l\xe0 b\u1eaft bu\u1ed9c"}})}},{header:"Gi\xe1 tr\u1ecb",classNameHeader:"cb_text_center",classNameBody:"cb_text_center",accessor:"representative_position",formatter:function(e,n){return(0,Z.jsx)(y.Z,{bordered:!0,field:"gifts.".concat(n,".gift_price"),placeholder:"Nh\u1eadp gi\xe1 tr\u1ecb",addonAfter:"VND",validation:{min:{value:1,message:"Gi\xe1 tr\u1ecb ph\u1ea3i l\u1edbn h\u01a1n 0"},required:"Gi\xe1 tr\u1ecb l\xe0 b\u1eaft bu\u1ed9c"}})}},{header:"Th\xe0nh ti\u1ec1n",classNameHeader:"cb_text_center",classNameBody:"cb_text_right",formatter:function(e,n){return(0,N.T4)(e.gift_price*e.gift_quantity)+" \u0111"}}],f=(0,c.useMemo)((function(){return[{globalAction:!0,icon:"ti-plus",type:"success",content:"Th\xeam ph\u1ea7n qu\xe0",onClick:function(){n||d({})}},{icon:"fi ti-trash",color:"red",disabled:n,onClick:function(e,t){n||l(t)}}]}),[]);return(0,Z.jsx)(h.Z,{title:t,isRequired:!0,children:(0,Z.jsx)("div",{className:"cb_col_12",children:(0,Z.jsx)(w.Z,{noSelect:!0,noPaging:!0,actions:f,columns:u,data:i.watch("gifts")||[]})})})},k=t(168),q=t(732),S=t(9286),F=t(4238),V=t(7996),M=t(2360).ZP.span(i||(i=(0,k.Z)(["\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2 ease;\n  &:hover {\n    background: rgba(0, 0, 0, 1);\n  }\n"]))),E=function(e){var n,t,i,a,o=e.disabled,d=e.title,u=e.id,f=(0,s.Gc)(),m=f.watch,p=(0,c.useCallback)((function(e){return f.watch(e)?(0,Z.jsxs)("div",{style:{width:"100%",height:"100%",position:"relative"},children:[(0,Z.jsx)(V.Z,{width:"100%",height:"100%",src:f.watch(e)}),(0,Z.jsx)(M,{onClick:function(){o||setTimeout((function(){f.setValue(e,null)}),100)},style:{visibility:o?"hidden":"visible"},children:(0,Z.jsx)(q.Z,{style:{fontSize:"16px",color:"white"}})})]}):(0,Z.jsx)("div",{style:{width:"100%",height:"100%",border:"1px dashed #ccc",borderRadius:"4px",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,Z.jsx)(S.Z,{})})}),[m("gift_image_1"),m("gift_image_2"),m("gift_image_3"),m("gift_image_4")]);return(0,Z.jsx)(h.Z,{title:d,id:u,children:(0,Z.jsxs)("div",{className:"cb_row",children:[(0,Z.jsx)("div",{className:"cb_col_12",children:(0,Z.jsxs)("div",{style:{display:"flex",gap:"15px"},children:[(0,Z.jsx)("div",{className:"cb_load_image cb_mb_2 cb_text_center",children:(0,Z.jsxs)("label",{className:"cb_choose_image",children:[!f.watch("gift_image_1")&&(0,Z.jsx)("input",{accept:"image/*",type:"file",onChange:function(e){return(n=n||(0,l.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,F.y3)(n.target.files[0]);case 2:t=e.sent,f.setValue("gift_image_1",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},disabled:o}),p("gift_image_1")]})}),(0,Z.jsx)("div",{className:"cb_load_image cb_mb_2 cb_text_center",children:(0,Z.jsxs)("label",{className:"cb_choose_image",children:[!f.watch("gift_image_2")&&(0,Z.jsx)("input",{accept:"image/*",type:"file",onChange:function(e){return(t=t||(0,l.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,F.y3)(n.target.files[0]);case 2:t=e.sent,f.setValue("gift_image_2",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},disabled:o}),p("gift_image_2")]})}),(0,Z.jsx)("div",{className:"cb_load_image cb_mb_2 cb_text_center",children:(0,Z.jsxs)("label",{className:"cb_choose_image",children:[!f.watch("gift_image_3")&&(0,Z.jsx)("input",{accept:"image/*",type:"file",onChange:function(e){return(i=i||(0,l.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,F.y3)(n.target.files[0]);case 2:t=e.sent,f.setValue("gift_image_3",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},disabled:o}),p("gift_image_3")]})}),(0,Z.jsx)("div",{className:"cb_load_image cb_mb_2 cb_text_center",children:(0,Z.jsxs)("label",{className:"cb_choose_image",children:[!f.watch("gift_image_4")&&(0,Z.jsx)("input",{accept:"image/*",type:"file",onChange:function(e){return(a=a||(0,l.Z)((0,r.Z)().mark((function e(n){var t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,F.y3)(n.target.files[0]);case 2:t=e.sent,f.setValue("gift_image_4",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)},disabled:o}),p("gift_image_4")]})})]})}),(0,Z.jsx)("div",{className:"cb_col_6"})]})})},T=t(2426),A=t.n(T),R=function(){var e,n=(0,s.cI)(),t=(0,d.TH)().pathname,i=(0,d.UO)().id,f=(0,c.useMemo)((function(){return t.includes("/detail")}),[t]),h=(0,c.useCallback)((function(){i?(0,u.FO)(i).then((function(e){n.reset(e)})):n.reset({is_active:1,is_system:0})}),[i,n]),m=[{title:"Th\xf4ng tin chung",id:"general-info",component:j,fieldActive:["gifts","giver_user_id","affiliate_unit_id"]},{id:"gift_list",title:"Danh qu\xe0 t\u1eb7ng",fieldActive:["gifts"],component:C},{title:"H\xecnh \u1ea3nh qu\xe0 t\u1eb7ng",id:"images",component:E,fieldActive:["gift_image_1"]}];(0,c.useEffect)(h,[h]);var p=[{icon:"ti-printer",submit:!1,content:"In gi\u1ea5y \u0111\u1ec1 ngh\u1ecb t\u1eb7ng qu\xe0",className:"cb_btn cb_btn_outline cb_btn_outline_success",onClick:function(){(0,u.uz)(i).then((function(e){var n=window.URL.createObjectURL(new Blob([null===e||void 0===e?void 0:e.data])),t=document.createElement("a");t.href=n;var i=A()().format("DDMMYYYY");t.setAttribute("download","gifts_".concat(i,".docx")),document.body.appendChild(t),t.click()})).catch((function(e){return(0,N.Y8)(e)}))}}];return(0,Z.jsx)(s.RV,(0,a.Z)((0,a.Z)({},n),{},{children:(0,Z.jsx)(o.Z,{actions:p,detailForm:m,onSubmit:function(t){return(e=e||(0,l.Z)((0,r.Z)().mark((function e(t){var a,l,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.gifts&&0!==(null===(a=t.gifts)||void 0===a?void 0:a.length)){e.next=2;break}return e.abrupt("return",F.CF.warning("Ph\u1ea7n qu\xe0 t\u1eb7ng l\xe0 b\u1eaft bu\u1ed9c !"));case 2:if(e.prev=2,!i){e.next=9;break}return e.next=6,(0,u.Vx)(t);case 6:l="Ch\u1ec9nh s\u1eeda",e.next=13;break;case 9:return e.next=11,(0,u.Ue)(t);case 11:l="Th\xeam m\u1edbi",n.reset({is_active:1,is_system:0});case 13:F.CF.success("".concat(l," th\xe0nh c\xf4ng !")),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),F.CF.error((null===(c=e.t0.message)||void 0===c?void 0:c.constructor)===Array?e.t0.message[0]:e.t0.message||"C\xf3 l\u1ed7i x\u1ea3y ra!");case 19:case"end":return e.stop()}}),e,null,[[2,16]])})))).apply(this,arguments)},disabled:f})}))}},1453:function(e,n,t){t.d(n,{Ee:function(){return d},FO:function(){return c},Ue:function(){return o},Vx:function(){return s},gp:function(){return l},rD:function(){return u},uz:function(){return f}});var i=t(1413),a=t(3326),r="/gift",l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.Z.get(r,{params:e})},c=function(e){return a.Z.get("".concat(r,"/").concat(e))},o=function(e){return a.Z.post(r,e)},s=function(e){return a.Z.patch(r,e)},d=function(e){return a.Z.delete("".concat(r,"/").concat(e))},u=function(e){return a.Z.get("".concat(r,"/export-excel"),(0,i.Z)({params:e},{responseType:"blob"}))},f=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a.Z.get(r+"/export-form/".concat(e),(0,i.Z)({params:n},{responseType:"blob"}))}},5653:function(e,n,t){t.d(n,{Cp:function(){return u},FO:function(){return l},FW:function(){return d},Ue:function(){return c},Vx:function(){return o},gp:function(){return r},xh:function(){return s}});var i=t(3326),a="/user",r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.Z.get(a,{params:e})},l=function(e){return i.Z.get("".concat(a,"/").concat(e))},c=function(e){return i.Z.post("auth/signup",e)},o=function(e){return i.Z.patch(a,e)},s=function(e){return i.Z.delete("".concat(a,"/").concat(e))},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.Z.get(a+"/options",{params:e})},u=function(e){return i.Z.patch(a+"/change-password",e)}}}]);
//# sourceMappingURL=2438.c47b84da.chunk.js.map