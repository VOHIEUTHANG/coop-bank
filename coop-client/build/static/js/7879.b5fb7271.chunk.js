"use strict";(self.webpackChunkshopdunk=self.webpackChunkshopdunk||[]).push([[7879],{655:function(n,e,t){var i,l=t(9439),a=t(168),c=t(2791),o=t(2360),r=t(184),s=o.ZP.span(i||(i=(0,a.Z)(["\n  transform: ",";\n  color: ",";\n"])),(function(n){return n.open?"rotate(180deg)":""}),(function(n){return n.open?"#333333":""}));e.Z=function(n){n.style;var e=n.title,t=n.children,i=n.id,a=n.isRequired,o=void 0!==a&&a,d=n.componentCustom,u=n.defaultOpen,h=void 0===u||u,f=(0,c.useState)(h),v=(0,l.Z)(f,2),m=v[0],p=v[1];return(0,r.jsx)(c.Fragment,{children:(0,r.jsx)("div",{id:i,className:"cb_items_frm",children:(0,r.jsxs)("div",{className:"cb_collapse ".concat(m?"cb_active":""),children:[!!e&&(0,r.jsxs)("div",{className:"cb_collapse_title",style:{width:"fit-content",gap:"5px"},children:[(0,r.jsx)(s,{open:m,className:"ti-angle-down",onClick:function(){p(!m)}}),(0,r.jsxs)("h3",{children:[e,o&&(0,r.jsx)("span",{className:"cb_red",children:"*"})]})]}),m&&(0,r.jsx)("div",{className:"cb_collapse_panel",children:t}),d&&d]})})})}},8888:function(n,e,t){t.d(e,{Z:function(){return d}});var i=t(1413),l=t(5987),a=t(2791),c=t(184);var o=function(n){var e=n.isPage;return(0,c.jsx)("div",{className:"cb_loader ".concat(e?"page":"content"),children:(0,c.jsxs)("div",{className:"warpper",children:[(0,c.jsx)("div",{className:"inner"}),(0,c.jsx)("div",{className:"text",children:"LOADING"})]})})},r=["loading","disabled","submit","reset","type","outline","icon","content","onClick","style","table"],s=function(n){var e=n.loading,t=n.disabled,s=n.submit,d=n.reset,u=n.type,h=n.outline,f=n.icon,v=n.content,m=n.onClick,p=n.style,b=n.table,x=(0,l.Z)(n,r),_=(0,a.useMemo)((function(){return Boolean(d)?"reset":Boolean(s)?"submit":"button"}),[s,d]),j=(0,a.useMemo)((function(){return h?"cb_btn_outline cb_btn_outline_".concat(u):b?"cb_btn_table cb_".concat(u):"cb_btn cb_btn_".concat(u)}),[h,u]);return(0,c.jsx)(a.Fragment,{children:(0,c.jsxs)("button",{disabled:t,className:"".concat(j," ").concat(null!==x&&void 0!==x&&x.className?null===x||void 0===x?void 0:x.className:""),type:_,onClick:m,style:t?(0,i.Z)((0,i.Z)({},p),{},{opacity:.5,cursor:"default"}):p,children:[e&&(0,c.jsx)(o,{}),Boolean(f)?(0,c.jsx)("span",{className:f,style:{lineHeight:0}}):"",v]})})};s.defaultProps={type:"primary",disabled:!1,loading:!1,submit:!1,reset:!1,outline:!1,onClick:function(){}};var d=s},5169:function(n,e,t){var i,l=t(168),a=(t(2791),t(2360)),c=t(184),o=a.ZP.div(i||(i=(0,l.Z)(["\n  display: block;\n  width: 100%;\n  margin-top: 0.25rem;\n  font-size: 80%;\n  color: #f86c6b;\n"])));e.Z=function(n){var e=n.message;return(0,c.jsx)(o,{children:e})}},9487:function(n,e,t){var i=t(1413),l=t(5987),a=t(2791),c=t(1134),o=t(5169),r=t(184),s=["field","validation","type","placeholder","className","disabled"],d=function(n){var e,t=n.field,d=n.validation,u=n.type,h=void 0===u?"text":u,f=n.placeholder,v=n.className,m=n.disabled,p=(0,l.Z)(n,s),b=(0,c.Gc)(),x=b.getFieldState(t,b.formState).error;a.useEffect((function(){b.register(t,d)}),[b,t,d]);return(0,r.jsxs)(a.Fragment,{children:[(0,r.jsx)("input",(0,i.Z)({type:h,placeholder:f,className:v,disabled:m,value:null!==(e=b.watch(t))&&void 0!==e?e:"",checked:("checkbox"===h||"radio"==h)&&Boolean(b.watch(t)),onChange:function(n){b.clearErrors(t),b.setValue(t,"checkbox"===h||"radio"===h?!!n.target.checked:n.target.value||null)},style:{lineHeight:1}},p)),x&&(0,r.jsx)(o.Z,{message:null===x||void 0===x?void 0:x.message})]})};d.defaultProps={type:"text",className:""},e.Z=d},6503:function(n,e,t){var i,l,a,c=t(168),o=(t(2791),t(2360)),r=t(184),s=o.ZP.div(i||(i=(0,c.Z)(["\n  pointer-events: ",";\n"])),(function(n){return n.nonPoiner?"none":"auto"})),d=o.ZP.span(l||(l=(0,c.Z)(["\n  display: ",";\n"])),(function(n){var e;return null!==(e=n.display)&&void 0!==e?e:"block"})),u=o.ZP.span(a||(a=(0,c.Z)(["\n  opacity: 0.7;\n"])));e.Z=function(n){var e=n.className,t=n.label,i=n.hiddenLabel,l=void 0!==i&&i,a=n.isRequired,c=void 0!==a&&a,o=n.children,h=n.disabled,f=n.display,v=n.style,m=n.linkLabelHref,p=n.labelHref,b=n.isBlankHref,x=void 0===b||b;return(0,r.jsx)(s,{nonPoiner:h,className:e,children:(0,r.jsxs)("div",{className:"cb_frm_box ".concat(h?"cb_disable":""," ").concat("gray"===v?"cb_readonly":""),children:[!l&&(0,r.jsxs)(u,{children:[t," ",c&&(0,r.jsx)("span",{className:"cb_red",children:"*"}),(0,r.jsx)("a",{target:x?"_blank":"",href:m,children:p})]}),(0,r.jsx)(d,{display:f,disabled:h,children:o})]})})}},4127:function(n,e,t){var i,l=t(1413),a=t(5987),c=t(168),o=t(2791),r=t(8107),s=t(7106),d=t(1753),u=t(1134),h=t(2360),f=t(5169),v=t(184),m=["list","loading","bordered","placeholder","className","disabled","field","validation","mode","allowClear","showSearch","defaultValue"],p=(0,h.ZP)(r.Z)(i||(i=(0,c.Z)(["\n  display: flex;\n  .ant-select-selector {\n    font-size: 15px !important;\n    width: 100%;\n    padding: 0 !important;\n    margin: 1.8px 0;\n  }\n  .ant-select-arrow .anticon:not(.ant-select-suffix) {\n    pointer-events: none;\n  }\n  .ant-select-selection-search {\n    width: 100%;\n    inset-inline-start: 0 !important;\n    inset-inline-end: 0 !important;\n  }\n  .ant-select-selection-item {\n    padding: ",";\n    color: black;\n  }\n  :where(.css-dev-only-do-not-override-1me4733).ant-select-multiple .ant-select-selection-item {\n    background: var(--mainColor);\n    color: var(--whiteColor);\n    font-size: 14px !important;\n    height: 26.5px;\n    padding-top: 1px;\n  }\n  :where(.css-dev-only-do-not-override-1me4733).ant-select-multiple .ant-select-selection-item-remove {\n    color: var(--whiteColor);\n    border-left: 1px solid;\n    padding-right: 3px;\n    padding-left: 7px;\n    font-weight: bold;\n  }\n"])),(function(n){return n.bordered?"0 7px!important":void 0})),b=function(n){return{id:n,value:n}},x=function(n){var e=n.list,t=void 0===e?[]:e,i=n.loading,c=n.bordered,r=void 0!==c&&c,h=n.placeholder,x=void 0===h?"--Ch\u1ecdn--":h,_=n.className,j=n.disabled,g=void 0!==j&&j,Z=n.field,N=n.validation,y=n.mode,w=void 0===y?null:y,k=n.allowClear,C=void 0!==k&&k,F=n.showSearch,S=void 0===F||F,P=n.defaultValue,M=(0,a.Z)(n,m),V=(0,u.Gc)(),A=V.getFieldState(Z,V.formState).error;return o.useEffect((function(){V.register(Z,N)}),[V,Z,N]),(0,v.jsxs)(o.Fragment,{children:[(0,v.jsx)(p,(0,l.Z)({className:_,mode:w,suffixIcon:i?(0,v.jsx)(s.Z,{}):(0,v.jsx)(d.Z,{}),bordered:r,showSearch:S,allowClear:C,placeholder:x,optionFilterProp:"children",disabled:g,filterOption:function(n,e){var t;return(null!==(t=null===e||void 0===e?void 0:e.label)&&void 0!==t?t:"").toLowerCase().includes(n.toLowerCase())},defaultValue:P,value:V.watch(Z),options:t,removeIcon:function(){return"\xd7"},onChange:function(n){console.log("\ud83d\ude80 ~ value:",n),V.clearErrors(Z),Array.isArray(n)?V.setValue(Z,n.map(b)):V.setValue(Z,n)}},M)),A&&(0,v.jsx)(f.Z,{message:null===A||void 0===A?void 0:A.message})]})};x.defaultValue={bordered:!1,loading:!1},e.Z=x},3165:function(n,e,t){var i,l=t(5987),a=t(7762),c=t(1413),o=t(168),r=t(2791),s=t(43),d=t(1134),u=t(2703),h=t(4880),f=t(7106),v=t(8888),m=t(927),p=t(5266),b=t(2360),x=t(184),_=["title","id","component","className"],j=b.ZP.div(i||(i=(0,o.Z)([""]))),g=(0,x.jsx)(f.Z,{style:{fontSize:24},spin:!0}),Z=function(n){var e=n.loading,t=n.detailForm,i=n.onSubmit,o=n.disabled,f=n.actions,b=n.noActions,Z=n.noSideBar,N=n.noPadding,y=n.style,w=n.customerClose,k=(0,d.Gc)(),C=k.formState.isSubmitting,F=(0,h.TH)().pathname,S=(0,r.useMemo)((function(){var n;return null===F||void 0===F||null===(n=F.split("/"))||void 0===n?void 0:n[1]}),[F]),P=(0,r.useMemo)((function(){var n,e,t,i=m.Z.filter((function(n){return null===n||void 0===n?void 0:n.path.includes("/".concat(S,"/"))}));return{edit:null===i||void 0===i||null===(n=i.find((function(n){return null===n||void 0===n?void 0:n.path.includes("/edit")})))||void 0===n?void 0:n.function,add:null===i||void 0===i||null===(e=i.find((function(n){return null===n||void 0===n?void 0:n.path.includes("/add")})))||void 0===e?void 0:e.function,detail:null===i||void 0===i||null===(t=i.find((function(n){return null===n||void 0===n?void 0:n.path.includes("/detail")})))||void 0===t?void 0:t.function}}),[S]),M=(0,h.UO)(),V=e||C,A=(0,r.useMemo)((function(){var n,e;return null!==(n=null!==(e=M["".concat(S,"_id")])&&void 0!==e?e:null===M||void 0===M?void 0:M.id)&&void 0!==n?n:M[Object.keys(M).find((function(n){return n.includes("id")}))]}),[M,S]),q=(0,r.useMemo)((function(){return F.includes("/detail")||F.includes("/view")}),[F]),O=(0,r.useMemo)((function(){return F.includes("/add")}),[F]),T=(0,r.useMemo)((function(){return F.includes("/edit")}),[F]),B=(0,h.k6)(),H=(0,u.Wh)((0,h.TH)().pathname)[0],R=function(){B.push("".concat(H))},E=function(n){n.preventDefault(),B.push("".concat(H,"/edit/").concat(A))},I=(0,r.useMemo)((function(){if(!b)return q?(0,x.jsxs)(x.Fragment,{children:[null===f||void 0===f?void 0:f.filter((function(n){return!n.hidden})).map((function(n,e){return(0,x.jsx)(v.Z,(0,c.Z)({className:"mr-2"},n),e)})),(0,x.jsx)(p.Z,{permission:null===P||void 0===P?void 0:P.edit,children:(0,x.jsx)("button",{type:"button",className:"cb_btn_outline cb_btn_outline_success",onClick:E,children:"Ch\u1ec9nh s\u1eeda"})})]}):O||T?(0,x.jsxs)(x.Fragment,{children:[null===f||void 0===f?void 0:f.filter((function(n){return!n.hidden})).map((function(n,e){return(0,x.jsx)(v.Z,(0,c.Z)({className:"mr-2"},n),e)})),(0,x.jsx)(p.Z,{permission:T?null===P||void 0===P?void 0:P.edit:null===P||void 0===P?void 0:P.add,children:(0,x.jsxs)("button",{type:"submit",className:"cb_btn cb_btn_success",children:[(0,x.jsx)("span",{className:"ti-check"}),"Ho\xe0n t\u1ea5t ",T?"ch\u1ec9nh s\u1eeda":"th\xeam m\u1edbi"]})})]}):void 0}),[q,T,O,f,b]),L=(0,r.useMemo)((function(){if(!b)return(0,x.jsx)("button",{type:"button",className:"cb_btn_outline",onClick:null!==w&&void 0!==w?w:R,children:"\u0110\xf3ng"})}),[b]),U=(0,r.useMemo)((function(){var n;return null!==(n=(null!==t&&void 0!==t?t:[]).filter((function(n){return!n.hidden})))&&void 0!==n?n:[]}),[t]),W=(0,x.jsxs)(r.Fragment,{children:[(0,x.jsx)("div",{style:y,className:"cb_main_wrapp",children:(0,x.jsxs)("div",{className:"cb_row",children:[!Z&&(0,x.jsx)("div",{className:"cb_col_3",children:(0,x.jsx)("ul",{className:"cb_control_form",children:U.map((function(n,e){var t=!1;if(Boolean(null===n||void 0===n?void 0:n.fieldActive)){var i,l,c=(0,a.Z)(null!==(i=null===n||void 0===n?void 0:n.fieldActive)&&void 0!==i?i:[]);try{for(c.s();!(l=c.n()).done;){var o=l.value;if(0!==k.watch(o)&&!Boolean(k.watch(o))){t=!1;break}t=!0}}catch(r){c.e(r)}finally{c.f()}}else t=!0;return(0,x.jsx)("li",{onClick:function(){document.getElementById(e).scrollIntoView({block:"start",behavior:"smooth"})},children:(0,x.jsxs)("a",{className:t?"cb_active":"",children:[(0,x.jsx)("span",{className:"ti-check"})," ",null===n||void 0===n?void 0:n.title]})},e)}))})}),(0,x.jsx)("div",{className:"".concat(Z?"cb_col_12":"cb_col_9"," ").concat(N?"":"cb_pb_6"),children:(0,x.jsx)(s.Z,{spinning:V,indicator:g,children:(0,x.jsx)("div",{className:"cb_row",children:U.map((function(n,e){var t=n.title,i=n.id,a=n.component,r=n.className,s=(0,l.Z)(n,_);return(0,x.jsx)("span",{id:e,className:null!==r&&void 0!==r?r:"cb_col_12",children:a&&(0,x.jsx)(a,(0,c.Z)({id:i,title:t,disabled:o},s))},e)}))})})})]})}),!b&&!C&&(0,x.jsxs)(j,{className:"cb_btn_save cb_btn_group cb_flex cb_justify_content_right cb_align_items_center",children:[I,L]})]});return b?W:(0,x.jsx)("form",{onSubmit:k.handleSubmit(i),children:W})};Z.defaultProps={loading:!1,detailForm:{},onSubmit:function(){},disabled:!1,noActions:!1},e.Z=Z},5266:function(n,e,t){var i=t(621);e.Z=function(n){var e=(0,i.Z)(n).verify;return function(){var t=n.permission,i=n.any,l=void 0!==i&&i,a=n.children;if(!t)return"function"===typeof a?a(!0):a;for(var c=t?t instanceof Array?t:[t]:[],o=!!c.length,r=0;r<c.length;r++){var s=c[r],d=!0===e({function:s});if(d&&l){o=!0;break}o=o&&d}return!0===o?"function"===typeof a?a(!0===o):a:null}()}},7879:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var i,l=t(1413),a=t(4165),c=t(5861),o=t(2791),r=t(3165),s=t(1134),d=t(4880),u=t(5653),h=t(9439),f=t(168),v=t(655),m=t(6503),p=t(9487),b=t(2360),x=t(9782),_=t(7154),j=t(8272),g=t(4127),Z=t(9511),N=t(734),y=t(184),w=b.ZP.div(i||(i=(0,f.Z)(["\n  .ant-input-password {\n    border: none !important;\n    border-color: transparent !important;\n    box-shadow: none !important;\n    padding: 4px 0;\n  }\n"]))),k=function(n){var e,t=n.disabled,i=n.title,l=n.id,a=n.is_add,c=(0,s.Gc)(),r=(0,o.useState)([]),d=(0,h.Z)(r,2),u=d[0],f=d[1],b=(0,o.useState)([]),k=(0,h.Z)(b,2),C=k[0],F=k[1];return(0,o.useEffect)((function(){(0,N.FW)().then(f),(0,Z.FW)().then(F)}),[]),(0,y.jsx)(v.Z,{title:i,id:l,children:(0,y.jsxs)("div",{className:"cb_row",children:[(0,y.jsx)("div",{className:"cb_col_6",children:(0,y.jsx)(m.Z,{label:"M\xe3 nh\xe2n vi\xean",isRequired:!0,disabled:t||!a,children:(0,y.jsx)(p.Z,{type:"text",field:"username",placeholder:"Nh\u1eadp m\xe3 nh\xe2n vi\xean",validation:{required:"M\xe3 nh\xe2n vi\xean l\xe0 b\u1eaft bu\u1ed9c",min:{value:5,message:"T\xean \u0111\u0103ng nh\u1eadp \xedt nh\u1ea5t 5 k\xfd t\u1ef1"}}})})}),(0,y.jsx)("div",{className:"cb_col_6",children:(0,y.jsx)(m.Z,{disabled:t||!a,label:"M\u1eadt kh\u1ea9u",isRequired:!0,children:(0,y.jsx)(w,{children:(0,y.jsx)(x.Z.Password,{disabled:t||!a,placeholder:"*************",field:"password",autoComplete:!1,minLength:5,value:null!==(e=c.watch("password"))&&void 0!==e?e:"",iconRender:function(n){return n?(0,y.jsx)(_.Z,{}):(0,y.jsx)(j.Z,{})},onChange:function(n){c.setValue("password",n.target.value)}})})})}),(0,y.jsx)("div",{className:"cb_col_6",children:(0,y.jsx)(m.Z,{label:"T\xean nh\xe2n vi\xean",isRequired:!0,disabled:t,children:(0,y.jsx)(p.Z,{type:"text",field:"full_name",placeholder:"Nh\u1eadp t\xean nh\xe2n vi\xean",validation:{required:"T\xean nh\xe2n vi\xean l\xe0 b\u1eaft bu\u1ed9c"}})})}),(0,y.jsx)("div",{className:"cb_col_6",children:(0,y.jsx)(m.Z,{label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",disabled:t,children:(0,y.jsx)(p.Z,{type:"text",field:"phone_number",placeholder:"Nh\u1eadp S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"})})}),(0,y.jsx)("div",{className:"cb_col_6",children:(0,y.jsx)(m.Z,{label:"\u0110\u1ecba ch\u1ec9 email",disabled:t,children:(0,y.jsx)(p.Z,{type:"text",field:"email",placeholder:"Nh\u1eadp \u0111\u1ecba ch\u1ec9 email"})})}),(0,y.jsx)("div",{className:"cb_col_6",children:(0,y.jsx)(m.Z,{label:"Chi nh\xe1nh",isRequired:!0,disabled:t,children:(0,y.jsx)(g.Z,{allowClear:!0,disabled:t,field:"branch_id",placeholder:"Ch\u1ecdn chi nh\xe1nh",list:u,validation:{required:"Chi nh\xe1nh l\xe0 b\u1eaft bu\u1ed9c"}})})}),(0,y.jsx)("div",{className:"cb_col_6",children:(0,y.jsx)(m.Z,{label:"Ph\xf2ng giao d\u1ecbch",disabled:t,children:(0,y.jsx)(g.Z,{allowClear:!0,disabled:t,field:"transaction_room_id",placeholder:"Ch\u1ecdn Ph\xf2ng giao d\u1ecbch",list:C})})})]})})},C=t(4238),F=function(n){var e=n.disabled;return(0,y.jsx)(v.Z,{title:"Tr\u1ea1ng th\xe1i",id:"cb_mores",isRequired:!1,children:(0,y.jsx)("div",{className:"cb_row",children:(0,y.jsx)("div",{className:"cb_col_12",children:(0,y.jsx)("div",{className:"cb_frm_box",children:(0,y.jsxs)("div",{className:"cb_flex cb_align_items_center cb_lb_sex",children:[(0,y.jsxs)("label",{className:"cb_checkbox",children:[(0,y.jsx)(p.Z,{type:"checkbox",field:"is_active",disabled:e}),(0,y.jsx)("span",{}),"K\xedch ho\u1ea1t"]}),(0,y.jsxs)("label",{className:"cb_checkbox",children:[(0,y.jsx)(p.Z,{type:"checkbox",field:"is_admin",disabled:e}),(0,y.jsx)("span",{}),"Qu\u1ea3n tr\u1ecb vi\xean"]})]})})})})})},S=function(){var n,e=(0,s.cI)(),t=(0,d.TH)().pathname,i=(0,d.UO)().id,h=(0,o.useMemo)((function(){return t.includes("/detail")}),[t]),f=(0,o.useCallback)((function(){i?(0,u.FO)(i).then((function(n){e.reset(n)})):e.reset({is_active:!0})}),[i,e]),v=[{title:"Th\xf4ng tin nh\xe2n vi\xean",id:"user_id",component:k,fieldActive:["username","full_name"],is_add:!i},{title:"Tr\u1ea1ng th\xe1i",id:"status",component:F,fieldActive:null}];return(0,o.useEffect)(f,[f]),(0,y.jsx)(s.RV,(0,l.Z)((0,l.Z)({},e),{},{children:(0,y.jsx)(r.Z,{detailForm:v,onSubmit:function(t){return(n=n||(0,c.Z)((0,a.Z)().mark((function n(t){var l,c;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!i){n.next=7;break}return n.next=4,(0,u.Vx)(t);case 4:l="Ch\u1ec9nh s\u1eeda",n.next=11;break;case 7:return n.next=9,(0,u.Ue)(t);case 9:l="Th\xeam m\u1edbi",e.reset({is_active:!0});case 11:C.CF.success("".concat(l," th\xe0nh c\xf4ng !")),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),C.CF.error((null===(c=n.t0.message)||void 0===c?void 0:c.constructor)===Array?n.t0.message[0]:n.t0.message||"C\xf3 l\u1ed7i x\u1ea3y ra!");case 17:case"end":return n.stop()}}),n,null,[[0,14]])})))).apply(this,arguments)},disabled:h})}))}},734:function(n,e,t){t.d(e,{FO:function(){return c},FW:function(){return d},NA:function(){return s},Ue:function(){return o},Vx:function(){return r},gp:function(){return a}});var i=t(3326),l="/branch",a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.Z.get(l,{params:n})},c=function(n){return i.Z.get("".concat(l,"/").concat(n))},o=function(n){return i.Z.post(l,n)},r=function(n){return i.Z.patch(l,n)},s=function(n){return i.Z.delete("".concat(l,"/").concat(n))},d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.Z.get(l+"/options",{params:n})}},9511:function(n,e,t){t.d(e,{FO:function(){return c},FW:function(){return s},Ue:function(){return o},Vx:function(){return r},gp:function(){return a}});var i=t(3326),l="/transaction-room",a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.Z.get(l,{params:n})},c=function(n){return i.Z.get("".concat(l,"/").concat(n))},o=function(n){return i.Z.post(l,n)},r=function(n){return i.Z.patch(l,n)},s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.Z.get(l+"/options",{params:n})}},5653:function(n,e,t){t.d(e,{Cp:function(){return u},FO:function(){return c},FW:function(){return d},Ue:function(){return o},Vx:function(){return r},gp:function(){return a},xh:function(){return s}});var i=t(3326),l="/user",a=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.Z.get(l,{params:n})},c=function(n){return i.Z.get("".concat(l,"/").concat(n))},o=function(n){return i.Z.post("auth/signup",n)},r=function(n){return i.Z.patch(l,n)},s=function(n){return i.Z.delete("".concat(l,"/").concat(n))},d=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i.Z.get(l+"/options",{params:n})},u=function(n){return i.Z.patch(l+"/change-password",n)}}}]);
//# sourceMappingURL=7879.b5fb7271.chunk.js.map