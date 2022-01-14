(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{12:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return c}));var a=n(86),r=n.n(a).a.create({withCredentials:!0,headers:{"API-KEY":"d5a8efc5-06e3-4d92-8ee5-0a418bb65f53"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),i={getUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(t,"&count=").concat(e)).then((function(t){return t.data}))},followUser:function(t){return r.post("follow/".concat(t))},unfollowUser:function(t){return r.delete("follow/".concat(t))}},s={me:function(){return r.get("auth/me").then((function(t){return t.data}))},login:function(t){return r.post("auth/login",{password:t.password,email:t.email,rememberMe:t.rememberMe}).then((function(t){return t.data}))},logout:function(){return r.delete("auth/login").then((function(t){return t.data}))}},c={getProfile:function(t){return r.get("profile/"+t).then((function(t){return t}))},getUserStatus:function(t){return r.get("profile/status/"+t).then((function(t){return t.data}))},updateUserStatus:function(t){return r.put("profile/status",{status:t}).then((function(t){return t.data}))}}},142:function(t,e,n){},143:function(t,e,n){},149:function(t,e,n){},150:function(t,e,n){},170:function(t,e,n){},174:function(t,e,n){},22:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"d",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return p}));var a=n(3),r=n(46),i=n(12),s="SET_USER_AUTH",c={id:null,email:null,login:null,isAuth:!1},u=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:return Object(a.a)(Object(a.a)({},t),e.data);default:return t}},o=function(t,e,n,a){return{type:s,data:{id:t,email:e,login:n,isAuth:a}}},l=function(){return function(t){return i.a.me().then((function(e){if(0===e.resultCode){var n=e.data,a=n.id,r=n.email,i=n.login;t(o(a,r,i,!0))}}))}},d=function(t){return function(e){i.a.login(t).then((function(t){0===t.resultCode?e(l()):e(Object(r.a)("Login",{_error:"".concat(t.messages)}))}))}},p=function(){return function(t){i.a.logout().then((function(e){0===e.resultCode&&t(o(null,null,null,!1))}))}}},235:function(t,e,n){"use strict";n.r(e);var a=n(2),r=n(0),i=n.n(r),s=n(33),c=n.n(s),u=(n(142),n(143),n(34)),o=n(32),l=n(37),d=n(36),p=n(11),O=n(6),g=n(16),j=(n(149),n(150),n(25)),m=n.n(j),f=n(44),h=n(3),A=n(22),b="INITIALIZED_SUCCESSES",x={initialized:!1},S=n(35),N=function(t){return function(e){return Object(a.jsx)(r.Suspense,{fallback:Object(a.jsx)(S.a,{}),children:Object(a.jsx)(t,Object(h.a)({},e))})}},E=n.p+"static/media/facebook-app-symbol.5c2f6a9d.svg",D=(n(170),function(t){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"header__inner",children:[Object(a.jsx)("img",{className:"logo",src:E,alt:""}),Object(a.jsx)("div",{className:"login__wrapper",children:Object(a.jsx)("div",{className:"login",children:t.state.isAuth?Object(a.jsxs)("div",{children:[Object(a.jsx)(p.b,{to:"/profile",children:Object(a.jsx)("span",{style:{marginRight:"10px"},children:t.state.login})}),Object(a.jsx)("span",{style:{cursor:"pointer"},onClick:t.logout,children:"Logout"})]}):Object(a.jsx)("div",{children:Object(a.jsx)(p.b,{to:"/login",children:Object(a.jsx)("span",{children:"Login"})})})})})]})})})}),B=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(a.jsx)(D,Object(h.a)({},this.props))}}]),n}(i.a.Component),y={setUserAuth:A.d,logout:A.c},I=Object(g.b)((function(t){return{state:t.auth}}),y)(B),H=(n(174),Object(g.b)((function(t){return{userId:t.auth.id,isAuth:t.auth.isAuth}}))((function(t){return Object(a.jsxs)("nav",{className:"nav",children:[Object(a.jsx)(p.b,{className:"nav_link",to:"/profile",children:"Profile"}),Object(a.jsx)(p.b,{className:"nav_link",to:"/users",children:"Users"}),Object(a.jsx)(p.b,{className:"nav_link",to:"/dialogs",children:"Messages"}),Object(a.jsx)(p.b,{className:"nav_link",to:"/news",children:"News"}),Object(a.jsx)(p.b,{className:"nav_link",to:"/music",children:"Music"}),Object(a.jsx)(p.b,{className:"nav_link",to:"/settings",children:"Settings"})]})}))),q=i.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,331))})),Q=i.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,332))})),T=i.a.lazy((function(){return Promise.all([n.e(5),n.e(7)]).then(n.bind(null,333))})),F=i.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,328))})),C=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initialize()}},{key:"render",value:function(){return this.props.initialized?Object(a.jsx)(p.a,{children:Object(a.jsxs)("div",{className:"app-wrapper",children:[Object(a.jsx)(I,{}),Object(a.jsxs)("div",{className:"app-container container",children:[Object(a.jsx)(H,{}),Object(a.jsxs)("div",{className:"app-wrapper__content",children:[Object(a.jsx)(O.b,{path:"/profile/:userId?",render:N(q)}),Object(a.jsx)(O.b,{path:"/dialogs",render:N(Q)}),Object(a.jsx)(O.b,{path:"/users",render:N(T)}),Object(a.jsx)(O.b,{path:"/login",render:N(F)}),Object(a.jsx)("footer",{children:"Footer"})]})]})]})}):Object(a.jsx)(S.a,{})}}]),n}(i.a.Component),V={initialize:function(){return function(){var t=Object(f.a)(m.a.mark((function t(e){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(Object(A.d)());case 2:n=t.sent,Promise.all([n]),e({type:b});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},G=Object(g.b)((function(t){return{initialized:t.app.initialized}}),V)(C),L=function(t){t&&t instanceof Function&&n.e(9).then(n.bind(null,329)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,s=e.getTTFB;n(t),a(t),r(t),i(t),s(t)}))},k=n(21),U=n(62),v=n(76),P=n(83),w=n(82),X=n(87),W=Object(k.c)({profilePage:U.b,dialogsPage:v.b,usersPage:P.e,auth:A.a,form:w.a,app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return Object(h.a)(Object(h.a)({},t),{},{initialized:!0});default:return t}}}),R=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||k.d,J=Object(k.e)(W,R(Object(k.a)(X.a)));window.store=J;var M=J;c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(g.a,{store:M,children:Object(a.jsx)(G,{})})}),document.getElementById("root")),L()},31:function(t,e,n){"use strict";e.a="data:image/jpeg;base64,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"},35:function(t,e,n){"use strict";var a=n(2),r=n(54),i=n.n(r);e.a=function(){return Object(a.jsx)("div",{className:i.a.preloader,children:Object(a.jsx)("div",{className:i.a.spinner})})}},54:function(t,e,n){t.exports={preloader:"Preloader_preloader__276y-",spinner:"Preloader_spinner__28raC",spin:"Preloader_spin__ymTis"}},62:function(t,e,n){"use strict";n.d(e,"b",(function(){return p})),n.d(e,"a",(function(){return O})),n.d(e,"c",(function(){return m})),n.d(e,"d",(function(){return f})),n.d(e,"e",(function(){return h}));var a=n(20),r=n(3),i=n(31),s=n(12),c="ADD-POST",u="SET_USER_PROFILE",o="SET_USER_STATUS",l="TOGGLE_IS_FETCHING",d={posts:[{id:"1",name:"Baby Yoda",img:i.a,text:"post11111",likes:"48",active:"1"},{id:"2",name:"Andriy R",text:"post2",likes:"10",active:"0"},{id:"3",name:"Vlad V",text:"post1",likes:"8",active:"1"},{id:"4",name:"Bogdan Demchuk",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum minus a, iste quaerat assumenda magnam tempore, ipsam suscipit aliquam culpa illo. Quos facilis similique minima quis numquam et at.",likes:"4",active:"0"},{id:"5",name:"sfx",text:"post1",likes:"0",active:"0"}],profile:null,status:"",isFetching:!1},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case c:var n=t.posts.length+1,s={id:n,name:"Baby Yoda",img:i.a,text:e.text,likes:"0",active:"0"},p=Object(r.a)({},t);return p.posts=Object(a.a)(t.posts),p.posts.push(s),p;case u:return Object(r.a)(Object(r.a)({},t),{},{profile:e.text});case o:return Object(r.a)(Object(r.a)({},t),{},{status:e.text});case l:return Object(r.a)(Object(r.a)({},t),{},{isFetching:e.isFetching});default:return t}},O=function(t){return{type:c,text:t}},g=function(t){return{type:o,text:t}},j=function(t){return{type:l,isFetching:t}},m=function(t){return function(e){e(j(!0)),s.b.getProfile(t).then((function(t){var n;e((n=t.data,{type:u,text:n})),e(j(!1))}))}},f=function(t){return function(e){s.b.getUserStatus(t).then((function(t){e(g(t))}))}},h=function(t){return function(e){s.b.updateUserStatus(t).then((function(n){0===n.resultCode&&e(g(t))}))}}},76:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return l}));var a=n(20),r=n(3),i=n(31),s="ADD-MESSAGE",c={dialog:[{id:"1",message:"sadadasassa"},{id:"2",message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum minus a, iste quaerat assumenda magnam tempore, ipsam suscipit aliquam culpa illo. Quos facilis similique minima quis numquam et at"},{id:"3",message:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic earum minus a, iste quaerat assumenda magnam tempore, ipsam suscipit aliquam culpa illo. Quos facilis similique minima quis numquam et at",author:"me"},{id:"4",message:"fords 11111"},{id:"5",message:"sfx"},{id:"6",message:"asdfa fgnghf"},{id:"7",message:"asdfa fgnghf",author:"me"},{id:"8",message:"asdfa fgnghf"}],contact:[{id:"1",name:"Baby Yoda",img:i.a},{id:"2",name:"Andriy R"},{id:"3",name:"Vlad V"},{id:"4",name:"Bogdan Demchuk"},{id:"5",name:"sfx"},{id:"6",name:"asdfa fgnghf"},{id:"7",name:"asdfa fgnghf"},{id:"8",name:"asdfa fgnghf"}]},u=function(t,e){var n={id:t.dialog.length+1,message:e,author:"me"};return Object(r.a)(Object(r.a)({},t),{},{dialog:[].concat(Object(a.a)(t.dialog),[n])})},o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:return u(t,e.message);default:return t}},l=function(t){return{type:s,message:t}}},83:function(t,e,n){"use strict";n.d(e,"e",(function(){return h})),n.d(e,"c",(function(){return S})),n.d(e,"b",(function(){return D})),n.d(e,"a",(function(){return y})),n.d(e,"d",(function(){return I}));var a=n(25),r=n.n(a),i=n(44),s=n(20),c=n(3),u=n(12),o=function(t,e,n,a){return t.map((function(t){return t[n]===e?Object(c.a)(Object(c.a)({},t),a):t}))},l="FOLLOW",d="UNFOLLOW",p="SET_USERS",O="SET_CURRENT_PAGE",g="SET_TOTAL_COUNT",j="TOGGLE_IS_FETCHING",m="FOLLOWING_IN_PROGRESS",f={users:[],totalUsersCount:0,pageSize:10,currentPage:1,isFetching:!1,isFollowingInProgress:[]},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return Object(c.a)(Object(c.a)({},t),{},{users:o(t.users,e.userId,"id",{followed:!0})});case d:return Object(c.a)(Object(c.a)({},t),{},{users:o(t.users,e.userId,"id",{followed:!1})});case p:return Object(c.a)(Object(c.a)({},t),{},{users:Object(s.a)(e.users)});case O:return Object(c.a)(Object(c.a)({},t),{},{currentPage:e.page});case g:return Object(c.a)(Object(c.a)({},t),{},{totalUsersCount:e.number});case j:return Object(c.a)(Object(c.a)({},t),{},{isFetching:e.isFetching});case m:return e.isFetching?Object(c.a)(Object(c.a)({},t),{},{isFollowingInProgress:[].concat(Object(s.a)(t.isFollowingInProgress),[e.userId])}):Object(c.a)(Object(c.a)({},t),{},{isFollowingInProgress:t.isFollowingInProgress.filter((function(t){return t!==e.userId}))});default:return t}},A=function(t){return{type:l,userId:t}},b=function(t){return{type:d,userId:t}},x=function(t){return{type:p,users:t}},S=function(t){return{type:O,page:t}},N=function(t){return{type:j,isFetching:t}},E=function(t,e){return{type:m,isFetching:t,userId:e}},D=function(t,e){return function(n){n(S(t)),n(x([])),n(N(!0)),u.c.getUsers(t,e).then((function(t){var e;n(x(t.items)),n((e=t.totalCount,{type:g,number:e})),n(N(!1))}))}},B=function(){var t=Object(i.a)(r.a.mark((function t(e,n,a,i){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(E(!0,n)),t.next=3,a(n);case 3:0===t.sent.data.resultCode&&e(i(n)),e(E(!1,n));case 6:case"end":return t.stop()}}),t)})));return function(e,n,a,r){return t.apply(this,arguments)}}(),y=function(t){return function(e){B(e,t,u.c.followUser,A)}},I=function(t){return function(e){B(e,t,u.c.unfollowUser,b)}}}},[[235,2,3]]]);
//# sourceMappingURL=main.915e5dc5.chunk.js.map