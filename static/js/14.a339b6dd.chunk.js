(this["webpackJsonpcoin-mercari-dashboard"]=this["webpackJsonpcoin-mercari-dashboard"]||[]).push([[14],{373:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(27),r=c(388),s=c(42);function a(e){var t=Object(r.a)();return function(){var c,r=Object(n.a)(e);if(t){var a=Object(n.a)(this).constructor;c=Reflect.construct(r,arguments,a)}else c=r.apply(this,arguments);return Object(s.a)(this,c)}}},376:function(e,t,c){"use strict";var n=c(12),r=c(13),s=c(35),a=c(97),o=c(1),i=c(2),l=c.n(i),j=c(399),u=c(400),d=c(65),b=c(6),h=["label","hideIcon","showIcon","visible","className","htmlFor","placeholder","iconSize","inputClassName","invalid"],m=Object(o.forwardRef)((function(e,t){var c,i=e.label,m=e.hideIcon,O=e.showIcon,p=e.visible,x=e.className,f=e.htmlFor,g=e.placeholder,y=e.iconSize,A=e.inputClassName,w=e.invalid,N=Object(a.a)(e,h),k=Object(o.useState)(p),C=Object(s.a)(k,2),v=C[0],S=C[1];return Object(b.jsxs)(o.Fragment,{children:[i?Object(b.jsx)(d.v,{className:"form-label",for:f,children:i}):null,Object(b.jsxs)(d.t,{className:l()((c={},Object(r.a)(c,x,x),Object(r.a)(c,"is-invalid",w),c)),children:[Object(b.jsx)(d.s,Object(n.a)(Object(n.a)({ref:t,invalid:w,type:!1===v?"password":"text",placeholder:g||"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7",className:l()(Object(r.a)({},A,A))},i&&f?{id:f}:{}),N)),Object(b.jsx)(d.u,{className:"cursor-pointer",onClick:function(){return S(!v)},children:function(){var e=y||14;return!1===v?m||Object(b.jsx)(j.a,{size:e}):O||Object(b.jsx)(u.a,{size:e})}()})]})]})}));t.a=m,m.defaultProps={visible:!1}},388:function(e,t,c){"use strict";function n(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}c.d(t,"a",(function(){return n}))},395:function(e,t,c){},396:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var n=c(27);function r(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(n.a)(e)););return e}function s(){return s="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,c){var n=r(e,t);if(n){var s=Object.getOwnPropertyDescriptor(n,t);return s.get?s.get.call(arguments.length<3?e:c):s.value}},s.apply(this,arguments)}},417:function(e,t,c){},426:function(e,t,c){},428:function(e,t,c){"use strict";c.d(t,"a",(function(){return o}));var n=c(27),r=c(50);var s=c(388);function a(e,t,c){return a=Object(s.a)()?Reflect.construct.bind():function(e,t,c){var n=[null];n.push.apply(n,t);var s=new(Function.bind.apply(e,n));return c&&Object(r.a)(s,c.prototype),s},a.apply(null,arguments)}function o(e){var t="function"===typeof Map?new Map:void 0;return o=function(e){if(null===e||(c=e,-1===Function.toString.call(c).indexOf("[native code]")))return e;var c;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,s)}function s(){return a(e,arguments,Object(n.a)(this).constructor)}return s.prototype=Object.create(e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),Object(r.a)(s,e)},o(e)}},798:function(e,t,c){"use strict";c.r(t);var n=c(35),r=c(1),s=c.n(r),a=c(65),o=c(757),i=c(0),l=c.n(i);function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n])}return e},j.apply(this,arguments)}function u(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)c=s[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)c=s[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}var d=Object(r.forwardRef)((function(e,t){var c=e.color,n=void 0===c?"currentColor":c,r=e.size,a=void 0===r?24:r,o=u(e,["color","size"]);return s.a.createElement("svg",j({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),s.a.createElement("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),s.a.createElement("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}))}));d.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},d.displayName="Lock";var b=d,h=c(6),m=function(e){var t=e.activeTab,c=e.toggleTab;return Object(h.jsxs)(a.B,{pills:!0,className:"mb-2",children:[Object(h.jsx)(a.C,{children:Object(h.jsxs)(a.D,{active:"1"===t,onClick:function(){return c("1")},children:[Object(h.jsx)(o.a,{size:18,className:"me-50"}),Object(h.jsx)("span",{className:"fw-bold",children:"Account"})]})}),Object(h.jsx)(a.C,{children:Object(h.jsxs)(a.D,{active:"2"===t,onClick:function(){return c("2")},children:[Object(h.jsx)(b,{size:18,className:"me-50"}),Object(h.jsx)("span",{className:"fw-bold",children:"Security"})]})})]})},O=c(391),p=c.n(O),x=(c(416),c(12)),f=c(437),g=c.n(f),y=c(2),A=c.n(y),w=c(371),N=c(443),k=c.n(N),C=(c(417),{confirmCheckbox:!1}),v=k()(g.a),S=function(){var e=Object(w.e)({defaultValues:C}),t=e.control,c=e.setError,n=e.handleSubmit,r=e.formState.errors;return Object(h.jsxs)(a.f,{children:[Object(h.jsx)(a.h,{className:"border-bottom",children:Object(h.jsx)(a.j,{tag:"h4",children:"Delete Account"})}),Object(h.jsxs)(a.g,{className:"py-2 my-25",children:[Object(h.jsxs)(a.a,{color:"warning",children:[Object(h.jsx)("h4",{className:"alert-heading",children:"Are you sure you want to delete your account?"}),Object(h.jsx)("div",{className:"alert-body fw-normal",children:"Once you delete your account, there is no going back. Please be certain."})]}),Object(h.jsxs)(a.q,{onSubmit:n((function(e){!0===e.confirmCheckbox?v.fire({title:"Are you sure?",text:"Are you sure you would like to deactivate your account?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ms-1"},buttonsStyling:!1}).then((function(e){e.value?v.fire({icon:"success",title:"Deleted!",text:"Your account has been deactivated.",customClass:{confirmButton:"btn btn-success"}}):e.dismiss===v.DismissReason.cancel&&v.fire({title:"Cancelled",text:"Deactivation Cancelled!!",icon:"error",customClass:{confirmButton:"btn btn-success"}})})):c("confirmCheckbox",{type:"manual"})})),children:[Object(h.jsxs)("div",{className:"form-check",children:[Object(h.jsx)(w.a,{control:t,name:"confirmCheckbox",render:function(e){var t=e.field;return Object(h.jsx)(a.s,Object(x.a)(Object(x.a)({},t),{},{type:"checkbox",id:"confirmCheckbox",checked:t.value,invalid:r.confirmCheckbox&&!0}))}}),Object(h.jsx)(a.v,{for:"confirmCheckbox",className:A()("form-check-label",{"text-danger":r&&r.confirmCheckbox}),children:"I confirm my account deactivation"}),r&&r.confirmCheckbox&&Object(h.jsx)(a.r,{children:"Please confirm that you want to delete account"})]}),Object(h.jsx)("div",{className:"mt-1",children:Object(h.jsx)(a.e,{color:"danger",children:"Deactivate Account"})})]})]})]})},I=function(){return Object(h.jsx)(r.Fragment,{children:Object(h.jsx)(S,{})})},Q=c(468),E=c(469),B=c(376),P=c(784),M=c(740),z=c(785),R=function(e){var t=e.setShow,c=e.setShowDetailModal,n=function(){t(!1),c(!1)};return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsx)("h1",{className:"text-center mb-2 pb-50",children:"Add Authenticator App"}),Object(h.jsx)("h4",{children:"Authenticator Apps"}),Object(h.jsx)("p",{children:"Using an authenticator app like Google Authenticator, Microsoft Authenticator, Authy, or 1Password, scan the QR code. It will generate a 6 digit code for you to enter below."}),Object(h.jsx)("div",{className:"d-flex justify-content-center my-2 py-50",children:Object(h.jsx)("img",{src:"data:image/png;base64,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",alt:"QR Code",className:"img-fluid",width:"122"})}),Object(h.jsxs)(a.a,{color:"warning",children:[Object(h.jsx)("h4",{className:"alert-heading",children:"ASDLKNASDA9AHS678dGhASD78AB"}),Object(h.jsx)("div",{className:"alert-body fw-normal",children:"If you having trouble using the QR code, select manual entry on your app"})]}),Object(h.jsxs)(a.G,{className:"gy-1",children:[Object(h.jsx)(a.k,{xs:12,children:Object(h.jsx)(a.s,{placeholder:"Enter authentication code"})}),Object(h.jsxs)(a.k,{className:"d-flex justify-content-end mt-2",xs:12,children:[Object(h.jsx)(a.e,{outline:!0,color:"secondary",className:"me-1",onClick:n,children:"Cancel"}),Object(h.jsxs)(a.e,{color:"primary",className:"me-1",onClick:n,children:[Object(h.jsx)("span",{className:"me-50",children:"Continue"}),Object(h.jsx)(P.a,{className:"rotate-rtl",size:14})]})]})]})]})},D=function(e){var t=e.setShow,c=e.setShowDetailModal,n=function(){t(!1),c(!1)};return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsx)("h1",{className:"text-center mb-2 pb-50",children:"Add your number"}),Object(h.jsx)("h4",{children:"Verify Your Mobile Number for SMS"}),Object(h.jsx)("p",{children:"Enter your mobile phone number with country code and we will send you a verification code."}),Object(h.jsxs)(a.G,{className:"gy-1 mt-1",children:[Object(h.jsx)(a.k,{xs:12,children:Object(h.jsx)(p.a,{className:"form-control",placeholder:"1 234 567 8900",options:{phone:!0,phoneRegionCode:"US"}})}),Object(h.jsxs)(a.k,{className:"d-flex justify-content-end mt-2",xs:12,children:[Object(h.jsx)(a.e,{outline:!0,color:"secondary",className:"me-1",onClick:n,children:"Cancel"}),Object(h.jsxs)(a.e,{color:"primary",className:"me-1",onClick:n,children:[Object(h.jsx)("span",{className:"me-50",children:"Continue"}),Object(h.jsx)(P.a,{className:"rotate-rtl",size:14})]})]})]})]})},J=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),c=t[0],s=t[1],o=Object(r.useState)("authApp"),i=Object(n.a)(o,2),l=i[0],j=i[1],u=Object(r.useState)(!1),d=Object(n.a)(u,2),b=d[0],m=d[1];return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsxs)(a.f,{children:[Object(h.jsx)(a.h,{className:"border-bottom",children:Object(h.jsx)(a.j,{tag:"h4",children:"Two-step verification"})}),Object(h.jsxs)(a.g,{className:"my-2 py-25",children:[Object(h.jsx)("p",{className:"fw-bolder",children:"Two factor authentication is not enabled yet."}),Object(h.jsxs)("p",{children:["Two-factor authentication adds an additional layer of security to your account by requiring ",Object(h.jsx)("br",{}),"more than just a password to log in. Learn more."]}),Object(h.jsx)(a.e,{color:"primary",onClick:function(){return s(!c)},children:"Enable two-factor authentication"})]})]}),Object(h.jsxs)(a.y,{isOpen:c,toggle:function(){return s(!c)},className:"modal-dialog-centered modal-lg",children:[Object(h.jsx)(a.A,{className:"bg-transparent",toggle:function(){return s(!c)}}),Object(h.jsxs)(a.z,{className:"pb-5 px-sm-5 mx-50",children:[Object(h.jsx)("h1",{className:"text-center mb-1",children:"Select Authentication Method"}),Object(h.jsxs)("p",{className:"text-center mb-3",children:["you also need to select a method by which the proxy",Object(h.jsx)("br",{}),"authenticates to the directory serve"]}),Object(h.jsxs)("div",{className:"custom-options-checkable",children:[Object(h.jsx)("input",{type:"radio",id:"authApp",name:"authType",checked:"authApp"===l,className:"custom-option-item-check",onChange:function(){return j("authApp")}}),Object(h.jsxs)("label",{htmlFor:"authApp",className:"custom-option-item d-flex align-items-center flex-column flex-sm-row px-3 py-2 mb-2",children:[Object(h.jsx)("span",{children:Object(h.jsx)(M.a,{className:"font-large-2 me-sm-2 mb-2 mb-sm-0"})}),Object(h.jsxs)("span",{children:[Object(h.jsx)("span",{className:"custom-option-item-title d-block h3",children:"Authenticator Apps"}),Object(h.jsx)("span",{className:"mt-75",children:"Get codes from an app like Google Authenticator, Microsoft Authenticator, Authy or 1Password."})]})]}),Object(h.jsx)("input",{type:"radio",id:"authSMS",name:"authType",checked:"authSMS"===l,className:"custom-option-item-check",onChange:function(){return j("authSMS")}}),Object(h.jsxs)("label",{htmlFor:"authSMS",className:"custom-option-item d-flex align-items-center flex-column flex-sm-row px-3 py-2 mb-2",children:[Object(h.jsx)("span",{children:Object(h.jsx)(z.a,{className:"font-large-2 me-sm-2 mb-2 mb-sm-0"})}),Object(h.jsxs)("span",{children:[Object(h.jsx)("span",{className:"custom-option-item-title d-block h3",children:"SMS"}),Object(h.jsx)("span",{className:"mt-75",children:"We will send a code via SMS if you need to use your backup login method."})]})]})]}),Object(h.jsxs)(a.e,{color:"primary",className:"float-end",onClick:function(){s(!1),m(!0)},children:[Object(h.jsx)("span",{className:"me-50",children:"Continue"}),Object(h.jsx)(P.a,{className:"rotate-rtl",size:14})]})]})]}),Object(h.jsxs)(a.y,{isOpen:b,toggle:function(){return m(!b)},className:"modal-dialog-centered modal-lg",children:[Object(h.jsx)(a.A,{className:"bg-transparent",toggle:function(){return m(!b)}}),Object(h.jsx)(a.z,{className:"pb-5 px-sm-5 mx-50",children:"authApp"===l?Object(h.jsx)(R,{setShow:s,setShowDetailModal:m}):Object(h.jsx)(D,{setShow:s,setShowDetailModal:m})})]})]})},F=function(e,t,c){return 0===t?"".concat(e," field is required"):t>0&&t<c?"".concat(e," must be at least ").concat(c," characters"):""},U={newPassword:"",currentPassword:"",retypeNewPassword:""},G=function(){var e=Q.a().shape({currentPassword:Q.c().min(8,(function(e){return F("Current Password",e.value.length,e.min)})).required(),newPassword:Q.c().min(8,(function(e){return F("New Password",e.value.length,e.min)})).required(),retypeNewPassword:Q.c().min(8,(function(e){return F("Retype New Password",e.value.length,e.min)})).required().oneOf([Q.b("newPassword"),null],"Passwords must match")}),t=Object(w.e)({defaultValues:U,resolver:Object(E.a)(e)}),c=t.control,n=t.handleSubmit,s=t.formState.errors;return Object(h.jsxs)(r.Fragment,{children:[Object(h.jsxs)(a.f,{children:[Object(h.jsx)(a.h,{className:"border-bottom",children:Object(h.jsx)(a.j,{tag:"h4",children:"Change Password"})}),Object(h.jsx)(a.g,{className:"pt-1",children:Object(h.jsxs)(a.q,{onSubmit:n((function(e){if(Object.values(e).every((function(e){return e.length>0})))return null;for(var t in e)0===e[t].length&&setError(t,{type:"manual"})})),children:[Object(h.jsx)(a.G,{children:Object(h.jsxs)(a.k,{sm:"6",className:"mb-1",children:[Object(h.jsx)(w.a,{control:c,id:"currentPassword",name:"currentPassword",render:function(e){var t=e.field;return Object(h.jsx)(B.a,Object(x.a)({label:"Current Password",htmlFor:"currentPassword",className:"input-group-merge",invalid:s.currentPassword&&!0},t))}}),s.currentPassword&&Object(h.jsx)(a.r,{className:"d-block",children:s.currentPassword.message})]})}),Object(h.jsxs)(a.G,{children:[Object(h.jsxs)(a.k,{sm:"6",className:"mb-1",children:[Object(h.jsx)(w.a,{control:c,id:"newPassword",name:"newPassword",render:function(e){var t=e.field;return Object(h.jsx)(B.a,Object(x.a)({label:"New Password",htmlFor:"newPassword",className:"input-group-merge",invalid:s.newPassword&&!0},t))}}),s.newPassword&&Object(h.jsx)(a.r,{className:"d-block",children:s.newPassword.message})]}),Object(h.jsxs)(a.k,{sm:"6",className:"mb-1",children:[Object(h.jsx)(w.a,{control:c,id:"retypeNewPassword",name:"retypeNewPassword",render:function(e){var t=e.field;return Object(h.jsx)(B.a,Object(x.a)({label:"Retype New Password",htmlFor:"retypeNewPassword",className:"input-group-merge",invalid:s.newPassword&&!0},t))}}),s.retypeNewPassword&&Object(h.jsx)(a.r,{className:"d-block",children:s.retypeNewPassword.message})]}),Object(h.jsxs)(a.k,{xs:12,children:[Object(h.jsx)("p",{className:"fw-bolder",children:"Password requirements:"}),Object(h.jsxs)("ul",{className:"ps-1 ms-25",children:[Object(h.jsx)("li",{className:"mb-50",children:"Minimum 8 characters long - the more, the better"}),Object(h.jsx)("li",{className:"mb-50",children:"At least one lowercase character"}),Object(h.jsx)("li",{children:"At least one number, symbol, or whitespace character"})]})]}),Object(h.jsxs)(a.k,{className:"mt-1",sm:"12",children:[Object(h.jsx)(a.e,{type:"submit",className:"me-1",color:"primary",children:"Save changes"}),Object(h.jsx)(a.e,{color:"secondary",outline:!0,children:"Cancel"})]})]})]})})]}),Object(h.jsx)(J,{})]})};c(395),c(426),t.default=function(){var e=Object(r.useState)("1"),t=Object(n.a)(e,2),c=t[0],s=t[1];return Object(h.jsx)(r.Fragment,{children:Object(h.jsx)(a.G,{children:Object(h.jsxs)(a.k,{xs:12,children:[Object(h.jsx)(m,{className:"mb-2",activeTab:c,toggleTab:function(e){s(e)}}),Object(h.jsxs)(a.H,{activeTab:c,children:[Object(h.jsx)(a.I,{tabId:"1",children:Object(h.jsx)(I,{})}),Object(h.jsx)(a.I,{tabId:"2",children:Object(h.jsx)(G,{})})]})]})})})}}}]);
//# sourceMappingURL=14.a339b6dd.chunk.js.map