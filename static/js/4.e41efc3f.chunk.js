(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{236:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s(7);function r(t,e){if(null==t)return{};var s,r,i=Object(n.a)(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)s=c[r],e.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(i[s]=t[s])}return i}},241:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s(63);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],n=!0,r=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(n=(c=a.next()).done)&&(s.push(c.value),!e||s.length!==e);n=!0);}catch(o){r=!0,i=o}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return s}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},242:function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"a",(function(){return r}));var n=function(t){if(!t)return"Required!"},r=function(t){return function(e){if(e&&e.length>t)return"Max length is ".concat(t)}}},243:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var n=s(3),r=s(236),i=s(2),c=s(244),a=s.n(c),o=function(t){return function(e){var s=e.input,c=e.meta,o=Object(r.a)(e,["input","meta"]),l=c.touched&&c.error;return Object(i.jsxs)("div",{className:"".concat(a.a.formControl," ").concat(l?a.a.error:""),children:[Object(i.jsx)(t,Object(n.a)(Object(n.a)({},s),o)),l&&Object(i.jsx)("span",{children:c.error})]})}}},244:function(t,e,s){t.exports={formControl:"FormControls_formControl__3WObq",error:"FormControls_error__teiEC"}},249:function(t,e,s){"use strict";e.a=s.p+"static/media/profile_default_pic.33564136.png"},266:function(t,e,s){},267:function(t,e,s){},268:function(t,e,s){},331:function(t,e,s){"use strict";s.r(e);var n=s(34),r=s(32),i=s(37),c=s(36),a=s(2),o=s(0),l=s.n(o),u=(s(266),s(62)),f=(s(267),s(268),""),p=function(t){return f="1"===t.active?"active":"",Object(a.jsxs)("div",{className:"post",children:[Object(a.jsxs)("div",{className:"post_top",children:[Object(a.jsx)("a",{href:"#s",className:"post_img",children:Object(a.jsx)("img",{src:t.img,alt:"",title:t.name})}),Object(a.jsx)("div",{className:"post_text",children:t.text})]}),Object(a.jsxs)("div",{className:"post_bottom",children:[Object(a.jsx)("button",{className:"post_like ".concat(f),children:Object(a.jsx)("img",{src:"",alt:""})}),Object(a.jsx)("span",{className:"post_like__count",children:t.likes})]})]})},j=s(110),d=s(111),b=s(242),h=s(243),m=Object(b.a)(30),O=Object(h.a)("input"),x=Object(d.a)({form:"MyPost"})((function(t){return Object(a.jsxs)("form",{onSubmit:t.handleSubmit,className:"posts_form",children:[Object(a.jsx)(j.a,{component:O,name:"text",type:"text",className:"posts_input",placeholder:"Your news...",validate:[m,b.b]}),Object(a.jsx)("button",{type:"submit",className:"posts_btn",children:"Send"})]})})),_=Object(o.memo)((function(t){var e=t.state.posts.map((function(t){return Object(a.jsx)(p,{id:t.id,img:t.img,name:t.name,text:t.text,likes:t.likes,active:t.active},t.id)}));return Object(a.jsx)("div",{className:"profile_item my_posts",children:Object(a.jsxs)("div",{className:"my_posts__inner",children:[Object(a.jsx)("div",{className:"posts_title profile_title",children:"My posts"}),Object(a.jsx)(x,{onSubmit:function(e){t.addPost(e.text)}}),Object(a.jsx)("div",{className:"posts",children:e})]})})})),v=s(16),g=Object(v.b)((function(t){return{state:t.profilePage}}),(function(t){return{addPost:function(e){t(Object(u.a)(e))}}}))(_),y=s(35),N=s(241),k=function(t){var e=Object(o.useState)(!1),s=Object(N.a)(e,2),n=s[0],r=s[1],i=Object(o.useState)(t.status),c=Object(N.a)(i,2),l=c[0],u=c[1];Object(o.useEffect)((function(){u(t.status)}),[t.status]);return Object(a.jsx)("div",{children:n?Object(a.jsx)("div",{className:"profile__status",onBlur:function(){r(!1),t.updateStatus(l)},children:Object(a.jsx)("input",{autoFocus:!0,type:"text",onChange:function(t){u(t.currentTarget.value)},value:l})}):Object(a.jsx)("div",{className:"profile__status",onDoubleClick:function(){return r(!0)},children:Object(a.jsx)("span",{children:t.status?t.status:"change status"})})})},S=s(249),w=function(t){return t.state.profile?Object(a.jsxs)("div",{className:"profile",children:[Object(a.jsx)(k,{status:t.state.status,updateStatus:t.updateStatus}),Object(a.jsxs)("div",{className:"profile_inner profile_item",children:[Object(a.jsx)("img",{className:"avatar_img",src:t.state.profile.photos.large?t.state.profile.photos.large:S.a,alt:""}),Object(a.jsxs)("div",{className:"profile_info",children:[Object(a.jsxs)("div",{className:"profile_info_inner",children:[Object(a.jsx)("div",{className:"profile_name profile_title",children:t.state.profile.fullName}),Object(a.jsxs)("div",{className:"profile_info__item",children:["Looking for a job:",Object(a.jsx)("span",{children:t.state.profile.lookingForAJob?"Yes":"No"})]}),Object(a.jsxs)("div",{className:"profile_info__item",children:["Looking for a job description:",Object(a.jsx)("span",{children:t.state.profile.lookingForAJobDescription})]}),Object(a.jsxs)("div",{className:"profile_info__item",children:["About me:",Object(a.jsx)("span",{children:t.state.profile.aboutMe})]})]}),Object(a.jsxs)("div",{className:"profile_info_inner",children:[Object(a.jsxs)("div",{className:"profile_info__item",children:["Facebook:",Object(a.jsx)("a",{href:t.state.profile.contacts.facebook,children:Object(a.jsx)("span",{children:t.state.profile.contacts.facebook})})]}),Object(a.jsxs)("div",{className:"profile_info__item",children:["Website:",Object(a.jsx)("a",{href:t.state.profile.contacts.website,children:Object(a.jsx)("span",{children:t.state.profile.contacts.website})})]}),Object(a.jsxs)("div",{className:"profile_info__item",children:["VK:",Object(a.jsx)("a",{href:t.state.profile.contacts.vk,children:Object(a.jsx)("span",{children:t.state.profile.contacts.vk})})]}),Object(a.jsxs)("div",{className:"profile_info__item",children:["Twitter:",Object(a.jsx)("a",{href:t.state.profile.contacts.twitter,children:Object(a.jsx)("span",{children:t.state.profile.contacts.twitter})})]}),Object(a.jsxs)("div",{className:"profile_info__item",children:["Instagram:",Object(a.jsx)("a",{href:t.state.profile.contacts.instagram,children:Object(a.jsx)("span",{children:t.state.profile.contacts.instagram})})]}),Object(a.jsxs)("div",{className:"profile_info__item",children:["Youtube:",Object(a.jsx)("a",{href:t.state.profile.contacts.youtube,children:Object(a.jsx)("span",{children:t.state.profile.contacts.youtube})})]}),Object(a.jsxs)("div",{className:"profile_info__item",children:["Github:",Object(a.jsx)("a",{href:t.state.profile.contacts.github,children:Object(a.jsx)("span",{children:t.state.profile.contacts.github})})]}),Object(a.jsxs)("div",{className:"profile_info__item",children:["Main link:",Object(a.jsx)("a",{href:t.state.profile.contacts.mainLink,children:Object(a.jsx)("span",{children:t.state.profile.contacts.mainLink})})]})]})]})]}),Object(a.jsx)(g,{})]}):Object(a.jsx)(y.a,{})},I=s(6),A=s(21);function U(t,e){return t===e}function P(t,e,s){if(null===e||null===s||e.length!==s.length)return!1;for(var n=e.length,r=0;r<n;r++)if(!t(e[r],s[r]))return!1;return!0}function C(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var s=e.map((function(t){return typeof t})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+s+"]")}return e}!function(t){for(var e=arguments.length,s=Array(e>1?e-1:0),n=1;n<e;n++)s[n-1]=arguments[n]}((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:U,s=null,n=null;return function(){return P(e,s,arguments)||(n=t.apply(null,arguments)),s=arguments,n}}));var F=function(t){return t.auth.isAuth},M=function(t){Object(i.a)(s,t);var e=Object(c.a)(s);function s(){return Object(n.a)(this,s),e.apply(this,arguments)}return Object(r.a)(s,[{key:"getUserId",value:function(){var t=this.props.match.params.userId;return!t&&this.props.isAuth&&(t=this.props.authId),t}},{key:"componentDidMount",value:function(){this.props.setProfile(this.getUserId()),this.props.setUserStatus(this.getUserId())}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!==t.match.params.userId&&(this.props.setProfile(this.getUserId()),this.props.setUserStatus(this.getUserId()))}},{key:"render",value:function(){return this.props.match.params.userId||this.props.isAuth?this.props.state.isFetching?Object(a.jsx)(y.a,{}):Object(a.jsx)(w,{state:this.props.state,setUserStatus:this.props.setUserStatus,updateStatus:this.props.updateStatus}):Object(a.jsx)(I.a,{to:"/login"})}}]),s}(l.a.Component),E={setProfile:u.c,setUserStatus:u.d,updateStatus:u.e};e.default=Object(A.d)(Object(v.b)((function(t){return{state:t.profilePage,authId:t.auth.id,isAuth:F(t)}}),E),I.f)(M)}}]);
//# sourceMappingURL=4.e41efc3f.chunk.js.map