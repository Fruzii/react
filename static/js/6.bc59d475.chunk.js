(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{238:function(t,e,s){"use strict";s.d(e,"b",(function(){return i})),s.d(e,"a",(function(){return n}));var i=function(t){if(!t)return"Required!"},n=function(t){return function(e){if(e&&e.length>t)return"Max length is ".concat(t)}}},239:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var i=s(3),n=s(236),r=s(2),a=s(240),c=s.n(a),o=function(t){return function(e){var s=e.input,a=e.meta,o=Object(n.a)(e,["input","meta"]),l=a.touched&&a.error;return Object(r.jsxs)("div",{className:"".concat(c.a.formControl," ").concat(l?c.a.error:""),children:[Object(r.jsx)(t,Object(i.a)(Object(i.a)({},s),o)),l&&Object(r.jsx)("span",{children:a.error})]})}}},240:function(t,e,s){t.exports={formControl:"FormControls_formControl__3WObq",error:"FormControls_error__teiEC"}},241:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var i=s(61);function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],i=!0,n=!1,r=void 0;try{for(var a,c=t[Symbol.iterator]();!(i=(a=c.next()).done)&&(s.push(a.value),!e||s.length!==e);i=!0);}catch(o){n=!0,r=o}finally{try{i||null==c.return||c.return()}finally{if(n)throw r}}return s}}(t,e)||Object(i.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},242:function(t,e,s){"use strict";e.a=s.p+"static/media/profile_default_pic.33564136.png"},244:function(t,e,s){},245:function(t,e,s){},246:function(t,e,s){},248:function(t,e,s){"use strict";var i=s(2),n=(s(244),s(58)),r=(s(245),s(246),""),a=function(t){return r="1"===t.active?"active":"",Object(i.jsxs)("div",{className:"post",children:[Object(i.jsxs)("div",{className:"post_top",children:[Object(i.jsx)("a",{href:"#s",className:"post_img",children:Object(i.jsx)("img",{src:t.img,alt:"",title:t.name})}),Object(i.jsx)("div",{className:"post_text",children:t.text})]}),Object(i.jsxs)("div",{className:"post_bottom",children:[Object(i.jsx)("button",{className:"post_like ".concat(r),children:Object(i.jsx)("img",{src:"",alt:""})}),Object(i.jsx)("span",{className:"post_like__count",children:t.likes})]})]})},c=s(0),o=s(110),l=s(111),u=s(238),p=s(239),f=Object(u.a)(30),j=Object(p.a)("input"),d=Object(l.a)({form:"MyPost"})((function(t){return Object(i.jsxs)("form",{onSubmit:t.handleSubmit,className:"posts_form",children:[Object(i.jsx)(o.a,{component:j,name:"text",type:"text",className:"posts_input",placeholder:"Your news...",validate:[f,u.b]}),Object(i.jsx)("button",{type:"submit",className:"posts_btn",children:"Send"})]})})),b=Object(c.memo)((function(t){var e=t.state.posts.map((function(t){return Object(i.jsx)(a,{id:t.id,img:t.img,name:t.name,text:t.text,likes:t.likes,active:t.active},t.id)}));return Object(i.jsx)("div",{className:"profile_item my_posts",children:Object(i.jsxs)("div",{className:"my_posts__inner",children:[Object(i.jsx)("div",{className:"posts_title profile_title",children:"My posts"}),Object(i.jsx)(d,{onSubmit:function(e){t.addPost(e.text)}}),Object(i.jsx)("div",{className:"posts",children:e})]})})})),h=s(16),m=Object(h.b)((function(t){return{state:t.profilePage}}),(function(t){return{addPost:function(e){t(Object(n.a)(e))}}}))(b),O=s(32),x=s(241),v=function(t){var e=Object(c.useState)(!1),s=Object(x.a)(e,2),n=s[0],r=s[1],a=Object(c.useState)(t.status),o=Object(x.a)(a,2),l=o[0],u=o[1];Object(c.useEffect)((function(){u(t.status)}),[t.status]);return Object(i.jsx)("div",{children:n?Object(i.jsx)("div",{className:"profile__status",onBlur:function(){r(!1),t.updateStatus(l)},children:Object(i.jsx)("input",{autoFocus:!0,type:"text",onChange:function(t){u(t.currentTarget.value)},value:l})}):Object(i.jsx)("div",{className:"profile__status",onDoubleClick:function(){t.isOwner&&r(!0)},children:Object(i.jsx)("span",{children:t.status?t.status:"Empty status"})})})},_=s(242);e.a=function(t){return t.state.profile?Object(i.jsxs)("div",{className:"profile",children:[Object(i.jsx)(v,{status:t.state.status,isOwner:t.isOwner,updateStatus:t.updateStatus}),Object(i.jsxs)("div",{className:"profile_inner profile_item",children:[Object(i.jsx)("img",{className:"avatar_img",src:t.state.profile.photos.large||_.a,alt:""}),Object(i.jsxs)("div",{className:"profile_info",children:[Object(i.jsxs)("div",{className:"profile_info_inner",children:[Object(i.jsx)("div",{className:"profile_name profile_title",children:t.state.profile.fullName}),Object(i.jsxs)("div",{className:"profile_info__item",children:["Looking for a job:",Object(i.jsx)("span",{children:t.state.profile.lookingForAJob?"Yes":"No"})]}),Object(i.jsxs)("div",{className:"profile_info__item",children:["Looking for a job description:",Object(i.jsx)("span",{children:t.state.profile.lookingForAJobDescription})]}),Object(i.jsxs)("div",{className:"profile_info__item",children:["About me:",Object(i.jsx)("span",{children:t.state.profile.aboutMe})]})]}),Object(i.jsxs)("div",{className:"profile_info_inner",children:[Object(i.jsxs)("div",{className:"profile_info__item",children:["Facebook:",Object(i.jsx)("a",{href:t.state.profile.contacts.facebook,children:Object(i.jsx)("span",{children:t.state.profile.contacts.facebook})})]}),Object(i.jsxs)("div",{className:"profile_info__item",children:["Website:",Object(i.jsx)("a",{href:t.state.profile.contacts.website,children:Object(i.jsx)("span",{children:t.state.profile.contacts.website})})]}),Object(i.jsxs)("div",{className:"profile_info__item",children:["VK:",Object(i.jsx)("a",{href:t.state.profile.contacts.vk,children:Object(i.jsx)("span",{children:t.state.profile.contacts.vk})})]}),Object(i.jsxs)("div",{className:"profile_info__item",children:["Twitter:",Object(i.jsx)("a",{href:t.state.profile.contacts.twitter,children:Object(i.jsx)("span",{children:t.state.profile.contacts.twitter})})]}),Object(i.jsxs)("div",{className:"profile_info__item",children:["Instagram:",Object(i.jsx)("a",{href:t.state.profile.contacts.instagram,children:Object(i.jsx)("span",{children:t.state.profile.contacts.instagram})})]}),Object(i.jsxs)("div",{className:"profile_info__item",children:["Youtube:",Object(i.jsx)("a",{href:t.state.profile.contacts.youtube,children:Object(i.jsx)("span",{children:t.state.profile.contacts.youtube})})]}),Object(i.jsxs)("div",{className:"profile_info__item",children:["Github:",Object(i.jsx)("a",{href:t.state.profile.contacts.github,children:Object(i.jsx)("span",{children:t.state.profile.contacts.github})})]}),Object(i.jsxs)("div",{className:"profile_info__item",children:["Main link:",Object(i.jsx)("a",{href:t.state.profile.contacts.mainLink,children:Object(i.jsx)("span",{children:t.state.profile.contacts.mainLink})})]})]})]})]}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&t.savePhoto(e.target.files[0])}})}),Object(i.jsx)(m,{})]}):Object(i.jsx)(O.a,{})}},333:function(t,e,s){"use strict";s.r(e);var i=s(35),n=s(33),r=s(37),a=s(36),c=s(2),o=s(0),l=s.n(o),u=s(248),p=s(58),f=s(16),j=s(6),d=s(21),b=s(32);function h(t,e){return t===e}function m(t,e,s){if(null===e||null===s||e.length!==s.length)return!1;for(var i=e.length,n=0;n<i;n++)if(!t(e[n],s[n]))return!1;return!0}function O(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"===typeof t}))){var s=e.map((function(t){return typeof t})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+s+"]")}return e}!function(t){for(var e=arguments.length,s=Array(e>1?e-1:0),i=1;i<e;i++)s[i-1]=arguments[i]}((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h,s=null,i=null;return function(){return m(e,s,arguments)||(i=t.apply(null,arguments)),s=arguments,i}}));var x=function(t){return t.auth.isAuth},v=function(t){Object(r.a)(s,t);var e=Object(a.a)(s);function s(){return Object(i.a)(this,s),e.apply(this,arguments)}return Object(n.a)(s,[{key:"getUserId",value:function(){var t=this.props.match.params.userId;return!t&&this.props.isAuth&&(t=this.props.authId),t}},{key:"componentDidMount",value:function(){this.props.setProfile(this.getUserId()),this.props.setUserStatus(this.getUserId())}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!==t.match.params.userId&&(this.props.setProfile(this.getUserId()),this.props.setUserStatus(this.getUserId()))}},{key:"render",value:function(){return this.props.match.params.userId||this.props.isAuth?this.props.state.isFetching?Object(c.jsx)(b.a,{}):Object(c.jsx)(u.a,{state:this.props.state,isOwner:!this.props.match.params.userId,setUserStatus:this.props.setUserStatus,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}):Object(c.jsx)(j.a,{to:"/login"})}}]),s}(l.a.Component),_={setProfile:p.d,setUserStatus:p.e,updateStatus:p.f,savePhoto:p.c};e.default=Object(d.d)(Object(f.b)((function(t){return{state:t.profilePage,authId:t.auth.id,isAuth:x(t)}}),_),j.f)(v)}}]);
//# sourceMappingURL=6.bc59d475.chunk.js.map