(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{236:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(7);function c(e,t){if(null==e)return{};var n,c,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)n=i[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(3),c=n(236),o=n(2),i=n(244),a=n.n(i),u=function(e){return function(t){var n=t.input,i=t.meta,u=Object(c.a)(t,["input","meta"]),s=i.touched&&i.error;return Object(o.jsxs)("div",{className:"".concat(a.a.formControl," ").concat(s?a.a.error:""),children:[Object(o.jsx)(e,Object(r.a)(Object(r.a)({},n),u)),s&&Object(o.jsx)("span",{children:i.error})]})}}},243:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Required!"},c=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e)}}},244:function(e,t,n){e.exports={formControl:"FormControls_formControl__3WObq",error:"FormControls_error__teiEC"}},328:function(e,t,n){"use strict";n.r(t);var r=n(3),c=n(34),o=n(32),i=n(37),a=n(36),u=n(2),s=n(110),b=n(111),j=n(0),l=n.n(j),m=n(16),p=n(22),O=n(241),d=n(243),f=n(6),h=Object(O.a)("input"),x=Object(b.a)({form:"Login"})((function(e){return Object(u.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(u.jsx)("div",{children:Object(u.jsx)(s.a,{type:"text",placeholder:"Email",name:"email",component:h,validate:[d.b]})}),Object(u.jsx)("div",{children:Object(u.jsx)(s.a,{type:"password",placeholder:"Password",name:"password",component:h,validate:[d.b]})}),Object(u.jsxs)("div",{children:[Object(u.jsx)(s.a,{type:"checkbox",name:"rememberMe",id:"rememberMe",component:"input"}),Object(u.jsx)("label",{htmlFor:"rememberMe",children:"  Remember me"})]}),e.error&&Object(u.jsx)("div",{children:e.error}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"Login"})})]})})),v=function(e){return e.auth.isAuth?Object(u.jsx)(f.a,{to:"/profile"}):Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Login"}),Object(u.jsx)(x,{onSubmit:function(t){console.log(t),e.login(t)}})]})},y=function(e){Object(i.a)(n,e);var t=Object(a.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)(v,Object(r.a)({},this.props))}}]),n}(l.a.Component);t.default=Object(m.b)((function(e){return{auth:e.auth}}),{login:p.b})(y)}}]);
//# sourceMappingURL=6.6a50a259.chunk.js.map