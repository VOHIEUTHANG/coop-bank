"use strict";(self.webpackChunkshopdunk=self.webpackChunkshopdunk||[]).push([[1779],{9257:function(e,i,n){var t,a=n(1413),l=n(5987),d=n(168),r=n(2791),c=n(1134),s=n(5169),o=n(2648),u=n(7892),_=n.n(u),h=n(2360),b=n(184),f=["field","validation","placeholder","disabled","style","format","bordered","allowClear"],v=(0,h.ZP)(o.Z)(t||(t=(0,d.Z)(["\n  .ant-picker-input input {\n    color: black !important;\n  }\n"])));i.Z=function(e){var i=e.field,n=e.validation,t=e.placeholder,d=e.disabled,o=void 0!==d&&d,u=e.style,h=e.format,m=e.bordered,p=e.allowClear,g=(0,l.Z)(e,f),x=(0,c.Gc)(),y=x.getFieldState(i,x.formState).error;return r.useEffect((function(){x.register(i,n)}),[x,i,n]),(0,b.jsxs)(r.Fragment,{children:[(0,b.jsx)(v,(0,a.Z)({bordered:m,allowClear:p,disabled:o,placeholder:t,value:x.watch(i)?_()(x.watch(i),h):"",onChange:function(e,n){n?(x.clearErrors(i),x.setValue(i,n)):x.setValue(i,null)},format:h,style:u},g)),y&&(0,b.jsx)(s.Z,{message:null===y||void 0===y?void 0:y.message})]})}},5563:function(e,i,n){var t=n(2791),a=n(1134),l=n(5169),d=n(184);i.Z=function(e){var i=e.field,n=e.validation,r=e.className,c=e.disabled,s=void 0!==c&&c,o=e.list,u=e.custom,_=void 0!==u&&u,h=e.style,b=e.onChange,f=(0,a.Gc)(),v=f.getFieldState(i,f.formState).error;return t.useEffect((function(){f.register(i,n)}),[f,i,n]),(0,d.jsx)(t.Fragment,{children:(0,d.jsxs)("div",{className:_?"cb_flex cb_align_items_center cb_lb_sex":"cb_flex cb_align_items_center cb_lb_sex cb_sex_group ",children:[(o||[]).map((function(e,n){return(0,d.jsx)(t.Fragment,{children:(0,d.jsxs)("label",{className:"cb_radio",style:h,children:[(0,d.jsx)("input",{type:"radio",name:i,id:e.key,className:r,disabled:s,checked:f.watch(i)==e.value,onChange:function(n){f.clearErrors(i),f.setValue(i,e.value),"function"===typeof b&&b(e.value)}}),(0,d.jsx)("span",{}),e.img?(0,d.jsx)("img",{style:{width:"50px",height:"50px",borderRadius:"10px",marginRight:"3px",border:"1px solid rgba(0,0,0,0.08)"},src:e.img,alt:"logo"}):null,e.label]})},n)})),v&&(0,d.jsx)(l.Z,{message:null===v||void 0===v?void 0:v.message})]})})}},3829:function(e,i,n){var t=n(1134),a=n(2791),l=n(1694),d=n.n(l),r=n(5169),c=n(184);i.Z=function(e){var i,n=e.field,l=e.validation,s=e.placeholder,o=e.disabled,u=e.className,_=e.style,h=e.rows,b=(0,t.Gc)(),f=b.getFieldState(n,b.formState).error;return a.useEffect((function(){b.register(n,l)}),[b,n,l]),(0,c.jsxs)(a.Fragment,{children:[(0,c.jsx)("textarea",{style:_,rows:h,className:d()(null!==u&&void 0!==u?u:"form-control",{"is-invalid":f}),disabled:o,placeholder:s,value:null!==(i=b.watch(n))&&void 0!==i?i:"",onChange:function(e){b.clearErrors(n),b.setValue(n,e.target.value)}}),f&&(0,c.jsx)(r.Z,{message:null===f||void 0===f?void 0:f.message})]})}},1779:function(e,i,n){n.r(i),n.d(i,{default:function(){return H}});var t,a,l=n(1413),d=n(4165),r=n(5861),c=n(9439),s=n(2791),o=n(3165),u=n(1134),_=n(4880),h=n(2932),b=n(655),f=n(6503),v=n(9487),m=n(9257),p=n(7463),g=n(2703),x=n(184),y=function(e){var i=e.disabled,n=e.title,t=e.id,a=e.isAdd,l=(0,u.Gc)(),d=l.watch,r=l.setValue,c=(0,s.useCallback)((function(){d("total_money")&&d("loan_money")&&a&&r("funds_money",d("total_money")-d("loan_money"))}),[d("loan_money"),d("total_money"),a]);(0,s.useEffect)(c,[c]);var o=(0,s.useCallback)((function(){if(d("period_count")>0&&d("first_period_money")>0&&d("loan_money")>0&&a){var e=d("loan_money")-d("first_period_money")*(d("period_count")-1);l.setValue("last_period_money",e>0?e:0)}}),[d("period_count"),d("first_period_money"),d("loan_money"),a]);return(0,s.useEffect)(o,[o]),console.log(),(0,x.jsx)(b.Z,{title:n,id:t,children:(0,x.jsxs)("div",{className:"cb_row",children:[(0,x.jsx)("div",{className:"cb_col_6",children:(0,x.jsx)(f.Z,{label:"Ng\xe0y h\u1ee3p \u0111\u1ed3ng",isRequired:!0,disabled:i,children:(0,x.jsx)(m.Z,{format:"DD/MM/YYYY",field:"contract_date",placeholder:"dd/mm/yyyy",style:{width:"100%"},bordered:!1,allowClear:!0,validation:{required:"Ng\xe0y h\u1ee3p \u0111\u1ed3ng l\xe0 b\u1eaft bu\u1ed9c"}})})}),(0,x.jsx)(f.Z,{label:"S\u1ed1 h\u1ee3p \u0111\u1ed3ng",isRequired:!0,className:"cb_col_6",disabled:i,children:(0,x.jsx)(v.Z,{field:"contract_number",placeholder:"Nh\u1eadp s\u1ed1 h\u1ee3p \u0111\u1ed3ng",validation:{required:"S\u1ed1 h\u1ee3p \u0111\u1ed3ng l\xe0 b\u1eaft bu\u1ed9c"}})}),(0,x.jsx)(f.Z,{label:"M\u1ee5c \u0111\xedch vay v\u1ed1n",isRequired:!0,className:"cb_col_6",disabled:i,children:(0,x.jsx)(v.Z,{field:"loan_purpose",placeholder:"Nh\u1eadp m\u1ee5c \u0111\xedch vay v\u1ed1n",validation:{required:"M\u1ee5c \u0111\xedch vay v\u1ed1n l\xe0 b\u1eaft bu\u1ed9c"}})}),(0,x.jsx)("div",{className:"cb_col_6",children:(0,x.jsx)(f.Z,{label:"L\xe3i su\u1ea5t",isRequired:!0,disabled:i,children:(0,x.jsx)(p.Z,{field:"interest_rate",placeholder:"Nh\u1eadp m\u1ee9c l\xe3i su\u1ea5t",addonAfter:"%",validation:{min:{value:0,message:"Gi\xe1 tr\u1ecb ph\u1ea3i l\u1edbn h\u01a1n 0"},max:{value:100,message:"Gi\xe1 tr\u1ecb ph\u1ea3i nh\u1ecf h\u01a1n 100"},required:"M\u1ee9c l\xe3i su\u1ea5t l\xe0 b\u1eaft bu\u1ed9c"}})})}),(0,x.jsx)(f.Z,{label:"T\u1ed5ng nhu c\u1ea7u s\u1eed d\u1ee5ng",isRequired:!0,className:"cb_col_6",disabled:i,children:(0,x.jsx)(p.Z,{field:"total_money",addonAfter:"VND",validation:{required:"T\u1ed5ng nhu c\u1ea7u s\u1eed d\u1ee5ng l\xe0 b\u1eaft bu\u1ed9c"}})}),(0,x.jsx)(f.Z,{label:"T\u1ed5ng s\u1ed1 ti\u1ec1n c\u1ea7n vay",isRequired:!0,className:"cb_col_6",disabled:i,children:(0,x.jsx)(p.Z,{field:"loan_money",addonAfter:"VND",validation:{required:"T\u1ed5ng s\u1ed1 ti\u1ec1n c\u1ea7n vay l\xe0 b\u1eaft bu\u1ed9c"}})}),(0,x.jsx)(f.Z,{label:"V\u1ed1n t\u1ef1 c\xf3",isRequired:!0,className:"cb_col_6",disabled:i,children:(0,x.jsx)(p.Z,{field:"funds_money",addonAfter:"VND",validation:{required:"V\u1ed1n t\u1ef1 c\xf3 l\xe0 b\u1eaft bu\u1ed9c"}})}),(0,x.jsx)(f.Z,{label:"T\u1ef7 l\u1ec7 tr\xean t\u1ed5ng nhu c\u1ea7u",isRequired:!0,className:"cb_col_6",disabled:!0,children:(0,x.jsx)(v.Z,{value:"".concat((0,g.T4)(d("funds_money")||0)," / ").concat((0,g.T4)(d("total_money"))," = ").concat(Math.round(d("funds_money")/d("total_money")*100)||0,"%")})}),(0,x.jsx)("div",{className:"cb_col_6",children:(0,x.jsx)(f.Z,{label:"S\u1ed1 th\xe1ng tr\u1ea3 g\xf3p",isRequired:!0,disabled:i,children:(0,x.jsx)(p.Z,{field:"month_count",placeholder:"Nh\u1eadp s\u1ed1 th\xe1ng tr\u1ea3 g\xf3p",addonAfter:"th\xe1ng",validation:{min:{value:1,message:"Gi\xe1 tr\u1ecb ph\u1ea3i l\u1edbn h\u01a1n 0"},max:{value:500,message:"Gi\xe1 tr\u1ecb ph\u1ea3i nh\u1ecf h\u01a1n 500"},required:"S\u1ed1 th\xe1ng tr\u1ea3 g\xf3p l\xe0 b\u1eaft bu\u1ed9c"}})})}),(0,x.jsx)("div",{className:"cb_col_6",children:(0,x.jsx)(f.Z,{label:"S\u1ed1 k\u1ef3 tr\u1ea3 g\xf3p",isRequired:!0,disabled:i,children:(0,x.jsx)(p.Z,{field:"period_count",placeholder:"Nh\u1eadp s\u1ed1 k\u1ef3 tr\u1ea3 g\xf3p",addonAfter:"k\u1ef3",validation:{min:{value:1,message:"Gi\xe1 tr\u1ecb ph\u1ea3i l\u1edbn h\u01a1n 0"},max:{value:500,message:"Gi\xe1 tr\u1ecb ph\u1ea3i nh\u1ecf h\u01a1n 1000"},required:"S\u1ed1 th\xe1ng tr\u1ea3 g\xf3p l\xe0 b\u1eaft bu\u1ed9c"}})})}),(0,x.jsx)("div",{className:"cb_col_6",children:(0,x.jsx)(f.Z,{label:"Ng\xe0y b\u1eaft \u0111\u1ea7u",isRequired:!0,disabled:i,children:(0,x.jsx)(m.Z,{format:"DD/MM/YYYY",field:"start_date",placeholder:"dd/mm/yyyy",style:{width:"100%"},bordered:!1,allowClear:!0,validation:{required:"Ng\xe0y b\u1eaft \u0111\u1ea7u l\xe0 b\u1eaft bu\u1ed9c"}})})}),(0,x.jsx)("div",{className:"cb_col_6",children:(0,x.jsx)(f.Z,{label:"Ng\xe0y k\u1ebft th\xfac",isRequired:!0,disabled:i,children:(0,x.jsx)(m.Z,{format:"DD/MM/YYYY",field:"end_date",placeholder:"dd/mm/yyyy",style:{width:"100%"},bordered:!1,allowClear:!0,validation:{required:"Ng\xe0y k\u1ebft th\xfac l\xe0 b\u1eaft bu\u1ed9c"}})})}),(0,x.jsx)(f.Z,{label:"S\u1ed1 ti\u1ec1n k\u1ef3 \u0111\u1ea7u",isRequired:!0,className:"cb_col_6",disabled:i,children:(0,x.jsx)(p.Z,{field:"first_period_money",addonAfter:"VND",validation:{required:"S\u1ed1 ti\u1ec1n k\u1ef3 \u0111\u1ea7u l\xe0 b\u1eaft bu\u1ed9c"}})}),(0,x.jsx)(f.Z,{label:"S\u1ed1 ti\u1ec1n k\u1ef3 cu\u1ed1i",isRequired:!0,className:"cb_col_6",disabled:i,children:(0,x.jsx)(p.Z,{field:"last_period_money",addonAfter:"VND",validation:{required:"S\u1ed1 ti\u1ec1n k\u1ef3 cu\u1ed1i l\xe0 b\u1eaft bu\u1ed9c"}})}),(0,x.jsx)("div",{className:"cb_col_6",children:(0,x.jsx)(f.Z,{label:"Ng\xe0y tr\u1ea3 ti\u1ec1n \u0111\u1ea7u ti\xean",isRequired:!0,disabled:i,children:(0,x.jsx)(m.Z,{format:"DD/MM/YYYY",field:"first_pay_date",placeholder:"dd/mm/yyyy",style:{width:"100%"},bordered:!1,allowClear:!0,validation:{required:"Ng\xe0y tr\u1ea3 ti\u1ec1n \u0111\u1ea7u ti\xean l\xe0 b\u1eaft bu\u1ed9c"}})})}),(0,x.jsx)(f.Z,{label:"S\u1ed1 t\xe0i kho\u1ea3n vay",isRequired:!0,className:"cb_col_6",disabled:i,children:(0,x.jsx)(v.Z,{field:"loan_bank_number",placeholder:"Nh\u1eadp m\u1ee5c s\u1ed1 t\xe0i kho\u1ea3n vay",validation:{required:"S\u1ed1 t\xe0i kho\u1ea3n vay l\xe0 b\u1eaft bu\u1ed9c"}})})]})})},j=n(4127),Z=n(7072),N=n(3829),k=function(e){var i=e.disabled,n=e.title,t=e.id,a=e.isAdd,d=(0,u.Gc)(),r=d.watch,o=d.setValue,_=(0,s.useState)([]),h=(0,c.Z)(_,2),m=h[0],g=h[1];return(0,s.useEffect)((function(){(0,Z.FW)().then(g)}),[]),(0,s.useEffect)((function(){var e=r("individual_id");if(e){var i=null===m||void 0===m?void 0:m.find((function(i){return i.value===e})),n=(null===i||void 0===i?void 0:i.export_data)&&JSON.parse(null===i||void 0===i?void 0:i.export_data);if(!i)return;a?n?d.reset((0,l.Z)((0,l.Z)((0,l.Z)({},d.getValues()),n),{},{affiliate_unit_name:i.affiliate_unit_name,affiliate_unit_code:i.affiliate_unit_code,individual_code:i.individual_code,individual_position:i.individual_position})):(o("individual_bank_number",i.individual_bank_number),o("individual_cic",i.individual_cic),o("individual_cic_rank",i.individual_cic_rank),o("individual_cic_score",i.individual_cic_score),o("declared_total_income",i.total_income),o("paid_date",i.paid_date),o("affiliate_unit_name",i.affiliate_unit_name),o("affiliate_unit_code",i.affiliate_unit_code),o("individual_code",i.individual_code),o("individual_position",i.individual_position)):(o("affiliate_unit_name",i.affiliate_unit_name),o("affiliate_unit_code",i.affiliate_unit_code),o("individual_code",i.individual_code),o("individual_position",i.individual_position))}}),[m,r("individual_id"),a]),(0,x.jsx)(b.Z,{title:n,id:t,children:(0,x.jsxs)("div",{className:"cb_row",children:[(0,x.jsx)(f.Z,{label:"T\xean kh\xe1ch h\xe0ng",isRequired:!0,className:"cb_col_6",disabled:!a,children:(0,x.jsx)(j.Z,{field:"individual_id",list:m,validation:{required:"T\xean kh\xe1ch h\xe0ng l\xe0 b\u1eaft bu\u1ed9c"}})}),(0,x.jsx)("div",{className:"cb_col_6",children:(0,x.jsx)(f.Z,{label:"T\xean \u0111\u01a1n v\u1ecb",isRequired:!0,disabled:!0,children:(0,x.jsx)(v.Z,{type:"text",field:"affiliate_unit_name"})})}),(0,x.jsx)("div",{className:"cb_col_6",children:(0,x.jsx)(f.Z,{label:"M\xe3 kh\xe1ch h\xe0ng",isRequired:!0,disabled:!0,children:(0,x.jsx)(v.Z,{type:"text",field:"individual_code"})})}),(0,x.jsx)("div",{className:"cb_col_6",children:(0,x.jsx)(f.Z,{label:"M\xe3 \u0111\u01a1n v\u1ecb",isRequired:!0,disabled:!0,children:(0,x.jsx)(v.Z,{type:"text",field:"affiliate_unit_code"})})}),(0,x.jsx)("div",{className:"cb_col_6",children:(0,x.jsx)(f.Z,{label:"\u0110i\u1ec3m XHTD",isRequired:!0,disabled:i,children:(0,x.jsx)(p.Z,{field:"individual_cic_score",addonAfter:"\u0111i\u1ec3m",placeholder:"Nh\u1eadp th\xf4ng tin \u0111i\u1ec3m XHTD",validation:{required:"\u0110i\u1ec3m XHTD l\xe0 b\u1eaft bu\u1ed9c"}})})}),(0,x.jsx)("div",{className:"cb_col_6",children:(0,x.jsx)(f.Z,{label:"H\u1ea1ng t\xedn d\u1ee5ng",disabled:i,isRequired:!0,children:(0,x.jsx)(v.Z,{type:"text",field:"individual_cic_rank",placeholder:"Nh\u1eadp th\xf4ng tin h\u1ea1ng t\xedn d\u1ee5ng",validation:{required:"H\u1ea1ng t\xedn d\u1ee5ng l\xe0 b\u1eaft bu\u1ed9c"}})})}),(0,x.jsx)("div",{className:"cb_col_6",children:(0,x.jsx)(f.Z,{label:"Th\xf4ng tin CIC",isRequired:!0,disabled:i,children:(0,x.jsx)(N.Z,{field:"individual_cic",placeholder:"Nh\u1eadp th\xf4ng tin t\xedn d\u1ee5ng CIC",validation:{required:"Th\xf4ng tin CIC l\xe0 b\u1eaft bu\u1ed9c"}})})}),(0,x.jsx)("div",{className:"cb_col_6",children:(0,x.jsx)(f.Z,{label:"Ch\u1ee9c v\u1ee5",isRequired:!0,disabled:!0,children:(0,x.jsx)(v.Z,{type:"text",field:"individual_position"})})}),(0,x.jsx)("div",{className:"cb_col_6",children:(0,x.jsx)(f.Z,{label:"T\u1ed5ng thu nh\u1eadp khai b\xe1o",disabled:i,isRequired:!0,children:(0,x.jsx)(p.Z,{field:"declared_total_income",addonAfter:"VN\u0110",placeholder:"Nh\u1eadp t\u1ed5ng thu nh\u1eadp",validation:{required:"T\u1ed5ng thu nh\u1eadp l\xe0 b\u1eaft bu\u1ed9c"}})})}),(0,x.jsx)("div",{className:"cb_col_6",children:(0,x.jsx)(f.Z,{label:"T\u1ed5ng thu nh\u1eadp th\u1ea9m \u0111\u1ecbnh",disabled:i,isRequired:!0,children:(0,x.jsx)(p.Z,{field:"estimated_total_income",addonAfter:"VN\u0110",placeholder:"Nh\u1eadp t\u1ed5ng thu nh\u1eadp th\u1ea9m \u0111\u1ecbnh",validation:{required:"T\u1ed5ng thu nh\u1eadp th\u1ea9m \u0111\u1ecbnh l\xe0 b\u1eaft bu\u1ed9c"}})})}),(0,x.jsx)("div",{className:"cb_col_6",children:(0,x.jsx)(f.Z,{label:"Ng\xe0y tr\u1ea3 ti\u1ec1n h\xe0ng th\xe1ng",isRequired:!0,disabled:i,children:(0,x.jsx)(p.Z,{field:"paid_date",validation:{min:{value:1,message:"Ng\xe0y nh\u1ecf nh\u1ea5t l\xe0 ng\xe0y 1"},max:{value:28,message:"Ng\xe0y l\u1edbn nh\u1ea5t l\xe0 ng\xe0y 28"},required:"Ng\xe0y tr\u1ea3 ti\u1ec1n h\xe0ng th\xe1ng l\xe0 b\u1eaft bu\u1ed9c"}})})})]})})},C=n(5563),R=n(7758),T=function(e){var i=e.disabled,n=e.title,t=e.id;return(0,x.jsx)(b.Z,{title:n,id:t,children:(0,x.jsx)("div",{className:"cb_row",children:(0,x.jsx)(f.Z,{label:"\u0110i\u1ec1u ki\u1ec7n vay v\u1ed1n",isRequired:!0,className:"cb_col_12",disabled:i,children:(0,x.jsx)(C.Z,{field:"is_qualified",list:[{label:"\u0110\u1ee7 \u0111i\u1ec1u ki\u1ec7n vay v\u1ed1n",value:R.rG.QUALIFIED},{label:"Kh\xf4ng \u0111\u1ee7 \u0111i\u1ec1u ki\u1ec7n vay v\u1ed1n",value:R.rG.UNQUALIFIED}]})})})})},q=n(4238),A=n(168),S=n(43),E=n(2426),I=n.n(E),w=n(9938),O=n(2360),V=n(7544),M=n(7992),D=n(4220),G=n(9170),F=n(2152),P=O.ZP.div(t||(t=(0,A.Z)(["\n  margin-bottom: 10px;\n  .cb_row.cb_mt_2.cb_mb_2.cb_align_items_center {\n    margin: 0;\n  }\n"]))),Y=O.ZP.div(a||(a=(0,A.Z)(["\n  .cb_radio {\n    color: #19376d;\n    font-weight: 500;\n  }\n"])));var U=function(e){var i,n=e.closeModal,t=e.contractId,a=e.refreshData,o=(0,F.a)().user,_=(0,G._)("COOP_BANK",[]),v=(0,c.Z)(_,2),m=v[0],p=v[1],y=null===m||void 0===m?void 0:m.find((function(e){return e.contract_id===t&&e.username===o.username})),j=(0,u.cI)({defaultValues:{export_type:(null===y||void 0===y?void 0:y.export_type)||w.Cx.CUSTOMER_SURVEY_FORM}}),Z=j.handleSubmit,N=(0,s.useState)(!1),k=(0,c.Z)(N,2),R=k[0],T=k[1],A=(0,s.useState)([]),E=(0,c.Z)(A,2),O=E[0],U=E[1],H=(0,s.useMemo)((function(){if(y&&(null===O||void 0===O?void 0:O.length)>0){var e=O.find((function(e){return e.bank_representative_id===y.bank_representative_id}));if(e)return[e]}return(null===O||void 0===O?void 0:O.length)>0?[O[0]]:[]}),[y,O]);(0,s.useEffect)((function(){(0,M.fM)().then(U)}),[]);var L=function(e){return(i=i||(0,r.Z)((0,d.Z)().mark((function e(i){var l;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i.bank_representative_id||!((null===O||void 0===O?void 0:O.length)>0)){e.next=2;break}return e.abrupt("return",q.CF.warning("Vui l\xf2ng ch\u1ecdn ng\u01b0\u1eddi \u0111\u1ea1i di\u1ec7n !"));case 2:l=w.aX.find((function(e){return e.value===i.export_type})),T(!0),(0,h.uz)(t,i).then((function(e){n(!1),a();var i=window.URL.createObjectURL(new Blob([null===e||void 0===e?void 0:e.data])),t=document.createElement("a");t.href=i;var d=I()().format("DDMMYYYY");t.setAttribute("download","".concat(l.file_name,"_").concat(d,".docx")),document.body.appendChild(t),t.click()})).catch((function(e){return(0,g.Y8)(e)})).finally((function(){return T(!1)})),y?(y.export_type=i.export_type,y.bank_representative_id=i.bank_representative_id,p(m)):p(null===m||void 0===m?void 0:m.concat({export_type:i.export_type,contract_id:t,bank_representative_id:i.bank_representative_id,username:o.username}));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)},B=[{header:"T\xean ng\u01b0\u1eddi \u0111\u1ea1i di\u1ec7n",classNameHeader:"cb_text_center",accessor:"bank_representative_name"},{header:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i",classNameHeader:"cb_text_center",accessor:"phone_number"},{header:"Ch\u1ee9c v\u1ee5",classNameHeader:"cb_text_center",classNameBody:"cb_text_center",formatter:function(e,i){var n;return(0,x.jsx)("span",{children:(null===(n=D.ji.find((function(i){return i.value===e.bank_representative_position})))||void 0===n?void 0:n.label)||"Kh\xf4ng x\xe1c \u0111\u1ecbnh"})}},{header:"C\u0103n c\u01b0\u1edbc c\xf4ng d\xe2n",classNameHeader:"cb_text_center",accessor:"id_number"}];return(0,x.jsx)(u.RV,(0,l.Z)((0,l.Z)({},j),{},{children:(0,x.jsx)("div",{children:(0,x.jsx)("div",{className:"cb_modal cb_modal_open ",id:"cb_calculate_modal",children:(0,x.jsxs)("div",{className:"cb_modal_container cb_w900",children:[(0,x.jsxs)("div",{className:"cb_title_modal",children:[(0,x.jsxs)("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[R&&(0,x.jsx)(S.Z,{}),(0,x.jsx)("h3",{children:"Th\xf4ng tin xu\u1ea5t bi\u1ec3u m\u1eabu"})]}),(0,x.jsx)("span",{className:"cb_close_modal fi fi-rr-cross-small",onClick:function(){return n(!1)}})]}),(0,x.jsx)(Y,{className:"cb_main_modal",children:(0,x.jsx)(b.Z,{children:(0,x.jsxs)("div",{className:"cb_row",children:[(null===O||void 0===O?void 0:O.length)>0&&(0,x.jsxs)(s.Fragment,{children:[(0,x.jsx)("span",{style:{marginLeft:"6px"},children:" Ch\u1ecdn ng\u01b0\u1eddi \u0111\u1ea1i di\u1ec7n ph\xf2ng giao d\u1ecbch"}),(0,x.jsx)("div",{className:"cb_col_12",children:(0,x.jsx)(P,{children:(0,x.jsx)(V.Z,{defaultDataSelect:H,uniqueSelect:!0,onChangeSelect:function(e){var i;j.setValue("bank_representative_id",null===e||void 0===e||null===(i=e[0])||void 0===i?void 0:i.bank_representative_id)},hiddenDeleteClick:!0,noSelect:!1,noPaging:!0,actions:[],columns:B,data:O})})})]}),(0,x.jsx)(f.Z,{label:"In c\xe1c bi\u1ec3u m\u1eabu",isRequired:!0,className:"cb_col_12",children:(0,x.jsx)(C.Z,{style:{marginBottom:"10px",marginTop:"2px",width:"33%"},custom:!0,field:"export_type",list:w.aX,validation:{required:"Lo\u1ea1i gi\u1ea5y t\u1edd l\xe0 b\u1eaft bu\u1ed9c"}})})]})})}),(0,x.jsxs)("div",{className:"cb_footer_modal cb_flex cb_justify_content_right cb_align_items_center",style:{position:"sticky",bottom:0,left:0,right:0,background:"white",paddingBottom:"20px",boxShadow:"0 -10px 20px 0px rgba(212, 161, 161, 0.25)"},children:[(0,x.jsx)("button",{type:"button",className:"cb_btn cb_btn_danger",onClick:function(){return n(!1)},children:"H\u1ee7y"}),(0,x.jsxs)("button",{type:"button",className:"cb_btn  cb_btn_success",onClick:function(){if(!R)return Z(L).apply(void 0,arguments)},children:[(0,x.jsx)("span",{className:"ti-printer"})," Xu\u1ea5t"]})]})]})})})}))},H=function(){var e,i=(0,u.cI)(),n=(0,s.useState)(!1),t=(0,c.Z)(n,2),a=t[0],b=t[1],f=(0,s.useState)(!1),v=(0,c.Z)(f,2),m=v[0],p=v[1],g=(0,_.TH)().pathname,j=(0,_.UO)().id,Z=(0,s.useMemo)((function(){return g.includes("/detail")}),[g]),N=(0,s.useCallback)((function(){j?(0,h.FO)(j).then((function(e){i.reset((0,l.Z)((0,l.Z)({},e),{},{affiliate_unit_name:i.getValues("affiliate_unit_name"),affiliate_unit_code:i.getValues("affiliate_unit_code"),individual_code:i.getValues("individual_code"),individual_position:i.getValues("individual_position")}))})):i.reset({is_qualified:1})}),[j,i,m]),C=[{title:"Th\xf4ng tin kh\xe1ch h\xe0ng",id:"customer-info",component:k,fieldActive:["individual_id","individual_bank_number","individual_cic_score","individual_cic_rank","individual_cic"],isAdd:!j},{title:"Th\xf4ng h\u1ed3 s\u01a1 vay v\u1ed1n",id:"contract-info",component:y,fieldActive:["individual_id","contract_number","loan_purpose","total_money","loan_money","interest_rate","month_count"],isAdd:!j},{title:"Tr\u1ea1ng th\xe1i h\u1ee3p \u0111\u1ed3ng",id:"contract-status",component:T,fieldActive:["is_qualified"]}];(0,s.useEffect)(N,[N]);var R=[{icon:"ti-printer",submit:!1,content:"In bi\u1ec3u m\u1eabu",className:"cb_btn cb_btn_outline cb_btn_outline_success",hidden:!j,onClick:function(){b((function(e){return!e}))}}];return(0,x.jsxs)(u.RV,(0,l.Z)((0,l.Z)({},i),{},{children:[(0,x.jsx)(o.Z,{actions:R,detailForm:C,onSubmit:function(n){return(e=e||(0,r.Z)((0,d.Z)().mark((function e(n){var t,a;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!j){e.next=7;break}return e.next=4,(0,h.Vx)(n);case 4:t="Ch\u1ec9nh s\u1eeda",e.next=11;break;case 7:return e.next=9,(0,h.Ue)(n);case 9:t="Th\xeam m\u1edbi",i.reset({is_active:1,is_system:0});case 11:q.CF.success("".concat(t," th\xe0nh c\xf4ng !")),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),q.CF.error((null===(a=e.t0.message)||void 0===a?void 0:a.constructor)===Array?e.t0.message[0]:e.t0.message||"C\xf3 l\u1ed7i x\u1ea3y ra!");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)},disabled:Z}),a&&(0,x.jsx)(U,{closeModal:b,refreshData:function(){p((function(e){return!e}))},contractId:j})]}))}},9938:function(e,i,n){n.d(i,{Cx:function(){return a},aX:function(){return l},tS:function(){return t}});var t={search:"",created_date_from:null,created_date_to:null},a={CASH_RECEIPT:1,BANK_RECEIPT:2,DEBIT_RECEIPT:3,CUSTOMER_SURVEY_FORM:4,CONTRACT:5,APPRAISAL_REPORT:6,ACCOUNT_OPENING:7,AUTHORIZATION_FORM:8,SERVICE_REGISTRATION:9,CAPITAL_INSPECTOIN:10,DIGITAL_CONTRACT:11},l=[{value:a.CUSTOMER_SURVEY_FORM,label:"Phi\u1ebfu kh\u1ea3o s\xe1t kh\xe1ch h\xe0ng",file_name:"phieu_khao_sat_khach_hang"},{value:a.APPRAISAL_REPORT,label:"T\u1edd tr\xecnh th\u1ea9m \u0111\u1ecbnh",file_name:"to_trinh_tham_dinh"},{value:a.CONTRACT,label:"H\u1ee3p \u0111\u1ed3ng cho vay",file_name:"hop_dong_cho_vay"},{value:a.DEBIT_RECEIPT,label:"Gi\u1ea5y nh\u1eadn n\u1ee3",file_name:"giay_nhan_no"},{value:a.BANK_RECEIPT,label:"Gi\u1ea5y \u1ee7y nhi\u1ec7m chi",file_name:"giay_uy_nhiem_chi"},{value:a.CASH_RECEIPT,label:"Gi\u1ea5y thu ti\u1ec1n m\u1eb7t",file_name:"giay_thu_tien_mat"},{value:a.ACCOUNT_OPENING,label:"Gi\u1ea5y m\u1edf t\xe0i kho\u1ea3n",file_name:"giay_mo_tai_khoan"},{value:a.DIGITAL_CONTRACT,label:"H\u1ee3p \u0111\u1ed3ng ki\xeam \u0111\u0103ng k\xfd NH s\u1ed1",file_name:"hop_dong_ngan_hang_so"},{value:a.AUTHORIZATION_FORM,label:"Gi\u1ea5y \u1ee7y quy\u1ec1n",file_name:"giay_uy_quyen"},{value:a.SERVICE_REGISTRATION,label:"Gi\u1ea5y \u0111\u0103ng k\xfd d\u1ecbch v\u1ee5",file_name:"giay_dang_ky_dich_vu"},{value:a.CAPITAL_INSPECTOIN,label:"Gi\u1ea5y ki\u1ec3m tra s\u1eed d\u1ee5ng v\u1ed1n",file_name:"giay_kiem_tra_su_dung_von"}]},7992:function(e,i,n){n.d(i,{FO:function(){return d},Tf:function(){return s},Ue:function(){return r},Vx:function(){return c},fM:function(){return o},gp:function(){return l}});var t=n(3326),a="/bank-representative",l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.Z.get(a,{params:e})},d=function(e){return t.Z.get("".concat(a,"/").concat(e))},r=function(e){return t.Z.post(a,e)},c=function(e){return t.Z.patch(a,e)},s=function(e){return t.Z.delete("".concat(a,"/").concat(e))},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.Z.get(a+"/list-by-user",{params:e})}},2932:function(e,i,n){n.d(i,{FO:function(){return r},Ue:function(){return c},Vx:function(){return s},gp:function(){return d},qq:function(){return o},uz:function(){return u}});var t=n(1413),a=n(3326),l="/contract",d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a.Z.get(l,{params:e})},r=function(e){return a.Z.get("".concat(l,"/").concat(e))},c=function(e){return a.Z.post(l,e)},s=function(e){return a.Z.patch(l,e)},o=function(e){return a.Z.delete("".concat(l,"/").concat(e))},u=function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a.Z.get(l+"/export-form/".concat(e),(0,t.Z)({params:i},{responseType:"blob"}))}},7072:function(e,i,n){n.d(i,{FO:function(){return d},FW:function(){return o},On:function(){return s},Ue:function(){return r},Vx:function(){return c},gp:function(){return l}});var t=n(3326),a="/individual",l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.Z.get(a,{params:e})},d=function(e){return t.Z.get("".concat(a,"/").concat(e))},r=function(e){return t.Z.post(a,e)},c=function(e){return t.Z.patch(a,e)},s=function(e){return t.Z.delete("".concat(a,"/").concat(e))},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.Z.get(a+"/options",{params:e})}}}]);
//# sourceMappingURL=1779.24409595.chunk.js.map