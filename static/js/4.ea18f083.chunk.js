(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{238:function(t,e,s){"use strict";s.d(e,"b",(function(){return i})),s.d(e,"a",(function(){return n}));var i=function(t){if(!t)return"Required!"},n=function(t){return function(e){if(e&&e.length>t)return"Max length is ".concat(t)}}},239:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var i=s(3),n=s(236),c=s(2),a=s(240),r=s.n(a),o=function(t){return function(e){var s=e.input,a=e.meta,o=Object(n.a)(e,["input","meta"]),l=a.touched&&a.error;return Object(c.jsxs)("div",{className:"".concat(r.a.formControl," ").concat(l?r.a.error:""),children:[Object(c.jsx)(t,Object(i.a)(Object(i.a)({},s),o)),l&&Object(c.jsx)("span",{children:a.error})]})}}},240:function(t,e,s){t.exports={formControl:"FormControls_formControl__3WObq",error:"FormControls_error__teiEC"}},241:function(t,e,s){"use strict";s.d(e,"a",(function(){return n}));var i=s(61);function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],i=!0,n=!1,c=void 0;try{for(var a,r=t[Symbol.iterator]();!(i=(a=r.next()).done)&&(s.push(a.value),!e||s.length!==e);i=!0);}catch(o){n=!0,c=o}finally{try{i||null==r.return||r.return()}finally{if(n)throw c}}return s}}(t,e)||Object(i.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},242:function(t,e,s){"use strict";e.a=s.p+"static/media/profile_default_pic.33564136.png"},244:function(t,e,s){},245:function(t,e,s){},246:function(t,e,s){},248:function(t,e,s){"use strict";var i=s(2),n=(s(244),s(58)),c=(s(245),s(246),""),a=function(t){return c="1"===t.active?"active":"",Object(i.jsxs)("div",{className:"post",children:[Object(i.jsxs)("div",{className:"post_top",children:[Object(i.jsx)("a",{href:"#s",className:"post_img",children:Object(i.jsx)("img",{src:t.img,alt:"",title:t.name})}),Object(i.jsx)("div",{className:"post_text",children:t.text})]}),Object(i.jsxs)("div",{className:"post_bottom",children:[Object(i.jsx)("button",{className:"post_like ".concat(c),children:Object(i.jsx)("img",{src:"",alt:""})}),Object(i.jsx)("span",{className:"post_like__count",children:t.likes})]})]})},r=s(0),o=s(110),l=s(111),j=s(238),u=s(239),d=Object(j.a)(30),b=Object(u.a)("input"),f=Object(l.a)({form:"MyPost"})((function(t){return Object(i.jsxs)("form",{onSubmit:t.handleSubmit,className:"posts_form",children:[Object(i.jsx)(o.a,{component:b,name:"text",type:"text",className:"posts_input",placeholder:"Your news...",validate:[d,j.b]}),Object(i.jsx)("button",{type:"submit",className:"posts_btn",children:"Send"})]})})),m=Object(r.memo)((function(t){var e=t.state.posts.map((function(t){return Object(i.jsx)(a,{id:t.id,img:t.img,name:t.name,text:t.text,likes:t.likes,active:t.active},t.id)}));return Object(i.jsx)("div",{className:"profile_item my_posts",children:Object(i.jsxs)("div",{className:"my_posts__inner",children:[Object(i.jsx)("div",{className:"posts_title profile_title",children:"My posts"}),Object(i.jsx)(f,{onSubmit:function(e){t.addPost(e.text)}}),Object(i.jsx)("div",{className:"posts",children:e})]})})})),p=s(16),O=Object(p.b)((function(t){return{state:t.profilePage}}),(function(t){return{addPost:function(e){t(Object(n.a)(e))}}}))(m),h=s(32),x=s(241),_=function(t){var e=Object(r.useState)(!1),s=Object(x.a)(e,2),n=s[0],c=s[1],a=Object(r.useState)(t.status),o=Object(x.a)(a,2),l=o[0],j=o[1];Object(r.useEffect)((function(){j(t.status)}),[t.status]);return Object(i.jsx)("div",{children:n?Object(i.jsx)("div",{className:"profile__status",onBlur:function(){c(!1),t.updateStatus(l)},children:Object(i.jsx)("input",{autoFocus:!0,type:"text",onChange:function(t){j(t.currentTarget.value)},value:l})}):Object(i.jsx)("div",{className:"profile__status",onDoubleClick:function(){t.isOwner&&c(!0)},children:Object(i.jsx)("span",{children:t.status?t.status:"Empty status"})})})},g=s(242);e.a=function(t){return t.state.profile?Object(i.jsxs)("div",{className:"profile",children:[Object(i.jsx)(_,{status:t.state.status,isOwner:t.isOwner,updateStatus:t.updateStatus}),Object(i.jsxs)("div",{className:"profile_inner profile_item",children:[Object(i.jsx)("img",{className:"avatar_img",src:t.state.profile.photos.large||g.a,alt:""}),Object(i.jsxs)("div",{className:"profile_info",children:[Object(i.jsxs)("div",{className:"profile_info_inner",children:[Object(i.jsx)("div",{className:"profile_name profile_title",children:t.state.profile.fullName}),Object(i.jsxs)("div",{className:"profile_info__item",children:["Looking for a job:",Object(i.jsx)("span",{children:t.state.profile.lookingForAJob?"Yes":"No"})]}),Object(i.jsxs)("div",{className:"profile_info__item",children:["Looking for a job description:",Object(i.jsx)("span",{children:t.state.profile.lookingForAJobDescription})]}),Object(i.jsxs)("div",{className:"profile_info__item",children:["About me:",Object(i.jsx)("span",{children:t.state.profile.aboutMe})]})]}),Object(i.jsxs)("div",{className:"profile_info_inner",children:[Object(i.jsxs)("div",{className:"profile_info__item",children:["Facebook:",Object(i.jsx)("a",{href:t.state.profile.contacts.facebook,children:Object(i.jsx)("span",{children:t.state.profile.contacts.facebook})})]}),Object(i.jsxs)("div",{className:"profile_info__item",children:["Website:",Object(i.jsx)("a",{href:t.state.profile.contacts.website,children:Object(i.jsx)("span",{children:t.state.profile.contacts.website})})]}),Object(i.jsxs)("div",{className:"profile_info__item",children:["VK:",Object(i.jsx)("a",{href:t.state.profile.contacts.vk,children:Object(i.jsx)("span",{children:t.state.profile.contacts.vk})})]}),Object(i.jsxs)("div",{className:"profile_info__item",children:["Twitter:",Object(i.jsx)("a",{href:t.state.profile.contacts.twitter,children:Object(i.jsx)("span",{children:t.state.profile.contacts.twitter})})]}),Object(i.jsxs)("div",{className:"profile_info__item",children:["Instagram:",Object(i.jsx)("a",{href:t.state.profile.contacts.instagram,children:Object(i.jsx)("span",{children:t.state.profile.contacts.instagram})})]}),Object(i.jsxs)("div",{className:"profile_info__item",children:["Youtube:",Object(i.jsx)("a",{href:t.state.profile.contacts.youtube,children:Object(i.jsx)("span",{children:t.state.profile.contacts.youtube})})]}),Object(i.jsxs)("div",{className:"profile_info__item",children:["Github:",Object(i.jsx)("a",{href:t.state.profile.contacts.github,children:Object(i.jsx)("span",{children:t.state.profile.contacts.github})})]}),Object(i.jsxs)("div",{className:"profile_info__item",children:["Main link:",Object(i.jsx)("a",{href:t.state.profile.contacts.mainLink,children:Object(i.jsx)("span",{children:t.state.profile.contacts.mainLink})})]})]})]})]}),Object(i.jsx)("div",{children:Object(i.jsx)("input",{type:"file",onChange:function(e){e.target.files.length&&t.savePhoto(e.target.files[0])}})}),Object(i.jsx)(O,{})]}):Object(i.jsx)(h.a,{})}},312:function(t,e,s){},332:function(t,e,s){"use strict";s.r(e);var i=s(16),n=s(2),c=(s(248),s(312),s(12)),a=function(t){return Object(n.jsxs)(c.b,{to:"/dialogs/".concat(t.id),className:"dialogs_inner__item",children:[Object(n.jsx)("div",{className:"post_img dialog_img",children:Object(n.jsx)("img",{src:t.img,alt:""})}),Object(n.jsx)("div",{className:"post_text",children:t.name})]})},r=function(t){return t.state.contact.map((function(t){return Object(n.jsx)(a,{id:t.id,img:t.img,name:t.name},t.id)}))},o=s(76),l=s.p+"static/media/send.4638400f.svg",j=s(6),u=(s(0),s(110)),d=s(111),b=function(t){var e="";return"me"===t.author&&(e="right"),Object(n.jsx)("div",{className:"dialog ".concat(e),children:Object(n.jsx)("div",{className:"message",children:t.message})})},f=Object(d.a)({form:"addMessageForm"})((function(t){return Object(n.jsxs)("form",{onSubmit:t.handleSubmit,className:"dialog_form",children:[Object(n.jsx)(u.a,{name:"message",type:"text",className:"dialog_input",component:"input"}),Object(n.jsx)("button",{className:"dialog_input__btn",children:Object(n.jsx)("img",{src:l,alt:"",className:""})})]})})),m=function(t){var e=t.state.dialog.map((function(t){return Object(n.jsx)(b,{id:t.id,message:t.message,author:t.author},t.id)}));return Object(n.jsxs)("div",{className:"dialog_area",children:[Object(n.jsxs)("div",{className:"dialog_area__inner",children:[Object(n.jsx)(j.b,{path:"/dialogs/1",render:function(){return e}}),Object(n.jsx)(j.b,{path:"/dialogs/2",render:function(){return"sagdsaf"}})]}),Object(n.jsx)(f,{onSubmit:function(e){t.addMessage(e.message)}})]})},p=Object(i.b)((function(t){return{state:t.dialogsPage}}),(function(t){return{addMessage:function(e){t(Object(o.a)(e))}}}))(m),O=function(t){return Object(n.jsxs)("div",{className:"dialogs",children:[Object(n.jsxs)("div",{className:"dialogs_inner",children:[Object(n.jsx)("div",{className:"dialogs_title profile_title",children:"Dialogs"}),Object(n.jsx)(r,{state:t.state})]}),Object(n.jsx)(p,{})]})},h=s(3),x=function(t){return{isAuth:t.auth.isAuth}};e.default=Object(i.b)((function(t){return{state:t.dialogsPage}}))(function(t){var e=function(e){return e.isAuth?Object(n.jsx)(t,Object(h.a)({},e)):Object(n.jsx)(j.a,{to:"/login"})};return e=Object(i.b)(x)(e)}(O))}}]);
//# sourceMappingURL=4.ea18f083.chunk.js.map