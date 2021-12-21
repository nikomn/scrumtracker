(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{66:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(34),a=n.n(c),s=n(18),o=n(8),i=n.n(o),u=n(15),d=n(6),j=n(67),l=n(69),b=n(14),p=n(0),h=function(t){var e=t.userstory,n=t.backlogs,c=t.addStoryToSprintBacklog,a=Object(r.useState)(""),s=Object(d.a)(a,2),o=s[0],i=s[1];return Object(p.jsxs)("div",{className:"addToSprintBacklog",children:[Object(p.jsx)("h5",{children:"Add story to Sprint backlog"}),Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c(e,o),i("")},children:[Object(p.jsxs)("select",{id:"dropdown",value:o,onChange:function(t){var e=t.target;return i(e.value)},children:[Object(p.jsx)("option",{value:"select sprint backlog",children:"select sprint backlog"}),n.map((function(t){return Object(p.jsx)("option",{value:t.id,children:t.name},t.id)}))]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"submit",children:"Add to sprintbacklog"})})]})]})},O=n(68),x=function(t){var e=t.story,n=t.updateUserStory,c=Object(r.useState)(e.priority),a=Object(d.a)(c,2),s=a[0],o=a[1],i=Object(r.useState)(e.status),u=Object(d.a)(i,2),j=u[0],b=u[1],h=Object(r.useState)(e.storypoints),x=Object(d.a)(h,2),f=x[0],y=x[1];return Object(p.jsxs)("div",{className:"addUserStoryForm",children:[Object(p.jsx)("h2",{children:"Modify User Story"}),Object(p.jsx)(O.a,{onSubmit:function(t){t.preventDefault(),n(e.id,s,j,f),o(""),y(0)},children:Object(p.jsxs)(O.a.Group,{children:[Object(p.jsx)(O.a.Label,{children:"New priority"}),Object(p.jsx)(O.a.Control,{id:"modify-priority-input",type:"number",name:"priority",value:s,placeholder:"New priority",onChange:function(t){var e=t.target;return o(e.value)}}),Object(p.jsx)(O.a.Label,{children:"New storypoints"}),Object(p.jsx)(O.a.Control,{id:"modify-storypoint-input",type:"number",name:"storypoints",value:f,placeholder:"New storypoints",onChange:function(t){var e=t.target;return y(e.value)}}),Object(p.jsx)("div",{children:"New Status"}),"story"===e.type?Object(p.jsx)("p",{children:Object(p.jsxs)("select",{id:"modify-status-dropdown",value:j,onChange:function(t){var e=t.target;return b(e.value)},children:[Object(p.jsx)("option",{value:"new",children:"new"}),Object(p.jsx)("option",{value:"planned",children:"planned"}),Object(p.jsx)("option",{value:"done",children:"done"})]})}):Object(p.jsx)("p",{children:Object(p.jsxs)("select",{id:"modify-status-dropdown",value:j,onChange:function(t){var e=t.target;return b(e.value)},children:[Object(p.jsx)("option",{value:"waiting",children:"waiting"}),Object(p.jsx)("option",{value:"doing",children:"doing"}),Object(p.jsx)("option",{value:"done",children:"done"})]})}),Object(p.jsx)(l.a,{variant:"success",type:"submit",children:"Update story"})]})})]})},f=function(t){var e=t.task;return e?Object(p.jsx)("div",{className:"task",children:Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"Task:"})," ",e.name," ",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Status:"})," ",e.status]})}):null},y=function(t){var e=t.createNewTask,n=t.story,c=Object(r.useState)(""),a=Object(d.a)(c,2),s=a[0],o=a[1],i=Object(r.useState)("waiting"),u=Object(d.a)(i,2),j=u[0],b=u[1];return Object(p.jsxs)("div",{className:"addTaskForm",children:[Object(p.jsx)("h2",{children:"Add new Task"}),Object(p.jsx)(O.a,{onSubmit:function(t){t.preventDefault(),e({name:s,status:j},n),o(""),b("waiting")},children:Object(p.jsxs)(O.a.Group,{children:[Object(p.jsx)(O.a.Label,{children:"Name"}),Object(p.jsx)(O.a.Control,{id:"task-input",type:"text",name:"task",value:s,placeholder:"New task",onChange:function(t){var e=t.target;return o(e.value)}}),Object(p.jsx)("div",{children:"Status"}),Object(p.jsx)("p",{children:Object(p.jsxs)("select",{id:"task-status-dropdown",value:j,onChange:function(t){var e=t.target;return b(e.value)},children:[Object(p.jsx)("option",{value:"waiting",children:"waiting"}),Object(p.jsx)("option",{value:"doing",children:"doing"}),Object(p.jsx)("option",{value:"done",children:"done"})]})}),Object(p.jsx)(l.a,{variant:"success",type:"submit",children:"Add new task"})]})})]})},v=function(t){var e=t.comment;return e?Object(p.jsx)("div",{className:"comment",children:Object(p.jsxs)("p",{children:[Object(p.jsxs)("b",{children:[e.date,":"]})," ",e.commentText]})}):null},m=function(t){var e=t.createNewComment,n=t.story,c=Object(r.useState)(""),a=Object(d.a)(c,2),s=a[0],o=a[1];return Object(p.jsxs)("div",{className:"addCommentForm",children:[Object(p.jsx)("h2",{children:"Add new Comment"}),Object(p.jsx)(O.a,{onSubmit:function(t){t.preventDefault(),e({commentText:s},n),o("")},children:Object(p.jsxs)(O.a.Group,{children:[Object(p.jsx)(O.a.Label,{children:"Comment"}),Object(p.jsx)(O.a.Control,{id:"comment-input",type:"text",name:"comment",value:s,placeholder:"New comment",onChange:function(t){var e=t.target;return o(e.value)}}),Object(p.jsx)(l.a,{variant:"success",type:"submit",children:"Add new comment"})]})})]})},g=function(t){var e=t.userstory,n=t.backlogs,r=t.addStoryToSprintBacklog,c=t.updateUserStory,a=t.storyView,s=t.addTaskToStory,o=t.addCommentToStory;return e?Object(p.jsx)("div",{className:"userstory",children:null!==a?Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:e.story}),Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"User Story:"})," ",e.story," ",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Priority:"})," ",e.priority," ",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Storypoints:"})," ",e.storypoints," ",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Status:"})," ",e.status]}),Object(p.jsx)(x,{story:e,updateUserStory:c}),Object(p.jsx)("h2",{children:"Technical tasks"}),Object(p.jsx)(j.a,{striped:!0,hover:!0,children:Object(p.jsx)("tbody",{children:e.tasks.map((function(t){return Object(p.jsx)("tr",{children:Object(p.jsx)("td",{children:Object(p.jsx)(f,{task:t})})},t.id)}))})}),Object(p.jsx)(y,{createNewTask:s,story:e.id}),Object(p.jsx)("h2",{children:"Comments"}),Object(p.jsx)(j.a,{striped:!0,hover:!0,children:Object(p.jsx)("tbody",{children:e.comments.map((function(t){return Object(p.jsx)("tr",{children:Object(p.jsx)("td",{children:Object(p.jsx)(v,{comment:t})})},t.id)}))})}),Object(p.jsx)(m,{createNewComment:o,story:e.id})]}):Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"User Story:"})," ",e.story," ",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Priority:"})," ",e.priority," ",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Storypoints:"})," ",e.storypoints," ",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Status:"})," ",e.status]}),Object(p.jsx)(h,{userstory:e,backlogs:n,addStoryToSprintBacklog:r})]})}):null},S=function(t){var e=t.stories,n=t.deleteUserStory,r=t.backlogs,c=t.addStoryToSprintBacklog,a=e.filter((function(t){return"story"===t.type}));return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Product Backlog"}),Object(p.jsx)(j.a,{striped:!0,hover:!0,children:Object(p.jsx)("tbody",{children:a.map((function(t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)(g,{userstory:t,backlogs:r,addStoryToSprintBacklog:c,storyView:null})}),Object(p.jsxs)("td",{children:[Object(p.jsx)("p",{children:Object(p.jsx)(b.b,{to:"/userstories/".concat(t.id),className:"btn btn-success",children:"Info"})}),Object(p.jsx)("p",{children:Object(p.jsx)(l.a,{variant:"danger",onClick:function(){return n(t.id)},children:"delete"})})]})]},t.id)}))})})]})},k=function(t){var e=t.createSprintBacklog,n=Object(r.useState)(""),c=Object(d.a)(n,2),a=c[0],s=c[1];return Object(p.jsxs)("div",{className:"createSprintBacklog",children:[Object(p.jsx)("h2",{children:"Add new Sprint backlog"}),Object(p.jsx)(O.a,{onSubmit:function(t){t.preventDefault(),e({name:a}),s("")},children:Object(p.jsxs)(O.a.Group,{children:[Object(p.jsx)(O.a.Label,{children:"Name"}),Object(p.jsx)(O.a.Control,{id:"backlog-input",type:"text",name:"backlog",value:a,placeholder:"New Sprint backlog",onChange:function(t){var e=t.target;return s(e.value)}}),Object(p.jsx)(l.a,{variant:"success",type:"submit",children:"Create"})]})})]})},w=function(t){var e=t.backlogs,n=t.createSprintBacklog;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Sprint Backlogs"}),Object(p.jsx)(j.a,{striped:!0,hover:!0,children:Object(p.jsx)("tbody",{children:e.map((function(t){return Object(p.jsx)("tr",{children:Object(p.jsx)("td",{children:Object(p.jsx)(b.b,{to:"/sprintbacklogs/".concat(t.id),children:t.name})})},t.id)}))})}),Object(p.jsx)(k,{createSprintBacklog:n})]})},C=function(t){var e=t.createNewStory,n=Object(r.useState)(""),c=Object(d.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(99),i=Object(d.a)(o,2),u=i[0],j=i[1],b=Object(r.useState)(0),h=Object(d.a)(b,2),x=h[0],f=h[1],y=Object(r.useState)("new"),v=Object(d.a)(y,2),m=v[0],g=v[1];return Object(p.jsxs)("div",{className:"addUserStoryForm",children:[Object(p.jsx)("h2",{children:"Add new User Story"}),Object(p.jsx)(O.a,{onSubmit:function(t){t.preventDefault(),e({story:a,priority:u,storypoints:x,status:m,type:"story"}),s(""),j(99),f(0),g("new")},children:Object(p.jsxs)(O.a.Group,{children:[Object(p.jsx)(O.a.Label,{children:"User Story"}),Object(p.jsx)(O.a.Control,{id:"story-input",type:"text",name:"userstory",value:a,placeholder:"New user story",onChange:function(t){var e=t.target;return s(e.value)}}),Object(p.jsx)(O.a.Label,{children:"Priority"}),Object(p.jsx)(O.a.Control,{id:"priority-input",type:"number",name:"priority",value:u,placeholder:"Priority",onChange:function(t){var e=t.target;return j(e.value)}}),Object(p.jsx)(O.a.Label,{children:"Storypoints"}),Object(p.jsx)(O.a.Control,{id:"storypoint-input",type:"number",name:"storypoints",value:x,placeholder:"Storypoints",onChange:function(t){var e=t.target;return f(e.value)}}),Object(p.jsx)("div",{children:"Status"}),Object(p.jsx)("p",{children:Object(p.jsxs)("select",{id:"status-dropdown",value:m,onChange:function(t){var e=t.target;return g(e.value)},children:[Object(p.jsx)("option",{value:"new",children:"new"}),Object(p.jsx)("option",{value:"planned",children:"planned"}),Object(p.jsx)("option",{value:"done",children:"done"})]})}),Object(p.jsx)(l.a,{variant:"success",type:"submit",children:"Add new story"})]})})]})},N=function(t){var e=t.handleLogin,n=Object(r.useState)(""),c=Object(d.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(""),i=Object(d.a)(o,2),u=i[0],j=i[1];return Object(p.jsxs)("div",{className:"addTaskForm",children:[Object(p.jsx)("h2",{children:"Login"}),Object(p.jsx)(O.a,{onSubmit:function(t){t.preventDefault(),alert("logging in..."),e(a,u),s(""),j("")},children:Object(p.jsxs)(O.a.Group,{children:[Object(p.jsx)(O.a.Label,{children:"Username"}),Object(p.jsx)(O.a.Control,{id:"username-input",type:"text",name:"username",value:a,onChange:function(t){var e=t.target;return s(e.value)}}),Object(p.jsx)(O.a.Label,{children:"Password"}),Object(p.jsx)(O.a.Control,{id:"password-input",type:"password",name:"pasword",value:u,onChange:function(t){var e=t.target;return j(e.value)}}),Object(p.jsx)(l.a,{variant:"success",type:"submit",children:"Login"})]})})]})},T=n(11),U=n.n(T),B="/api/userstories",A=null,L=function(){return U.a.get(B).then((function(t){return t.data}))},D=function(t){var e={headers:{Authorization:A}};return U.a.post(B,t,e)},P=function(t,e){var n={headers:{Authorization:A}};return console.log("id:",t),console.log(e),console.log("".concat(B,"/").concat(t),e),U.a.put("".concat(B,"/").concat(t),e,n).then((function(t){return t.data}))},z=function(t){var e={headers:{Authorization:A}};return U.a.delete("".concat(B,"/").concat(t),e).then((function(t){return t.data}))},G=function(t,e){var n={headers:{Authorization:A}};return U.a.post("".concat(B,"/").concat(t,"/tasks"),e,n).then((function(t){return t.data}))},F=function(t,e){var n={headers:{Authorization:A}};return U.a.post("".concat(B,"/").concat(t,"/comments"),e,n).then((function(t){return t.data}))},I=function(t){A="bearer ".concat(t)},M="/api/sprintbacklogs",J=null,V=function(){return U.a.get(M).then((function(t){return t.data}))},E=function(t){var e={headers:{Authorization:J}};return U.a.post(M,t,e)},q=function(t,e){var n={headers:{Authorization:J}};return U.a.post("".concat(M,"/").concat(t,"/stories"),e,n).then((function(t){return t.data}))},H=function(t){J="bearer ".concat(t)},K={login:function(){var t=Object(u.a)(i.a.mark((function t(e){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,U.a.post("/api/login",e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Q=n(7),R=function(t){var e=t.backlog,n=t.createMaintenanceStory,c=Object(r.useState)(""),a=Object(d.a)(c,2),s=a[0],o=a[1],j=Object(r.useState)(99),b=Object(d.a)(j,2),h=b[0],x=b[1],f=Object(r.useState)("new"),y=Object(d.a)(f,2),v=y[0],m=y[1],g=function(){var t=Object(u.a)(i.a.mark((function t(r){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.preventDefault(),n({story:s,priority:h,storypoints:0,status:v,type:"other"},e),o(""),x(99),m("new");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"addUserStoryForm",children:[Object(p.jsx)("h2",{children:"Add maintenance story"}),Object(p.jsx)(O.a,{onSubmit:g,children:Object(p.jsxs)(O.a.Group,{children:[Object(p.jsx)(O.a.Label,{children:"User Story"}),Object(p.jsx)(O.a.Control,{id:"story-input",type:"text",name:"userstory",value:s,placeholder:"New user story",onChange:function(t){var e=t.target;return o(e.value)}}),Object(p.jsx)(O.a.Label,{children:"Priority"}),Object(p.jsx)(O.a.Control,{id:"priority-input",type:"number",name:"priority",value:h,placeholder:"Priority",onChange:function(t){var e=t.target;return x(e.value)}}),Object(p.jsx)("div",{children:"Status"}),Object(p.jsx)("p",{children:Object(p.jsxs)("select",{id:"status-dropdown",value:v,onChange:function(t){var e=t.target;return m(e.value)},children:[Object(p.jsx)("option",{value:"new",children:"new"}),Object(p.jsx)("option",{value:"planned",children:"planned"}),Object(p.jsx)("option",{value:"done",children:"done"})]})}),Object(p.jsx)(l.a,{variant:"success",type:"submit",children:"Add new story"})]})})]})},W=function(t){var e=t.backlog,n=t.backlogs,r=t.addStoryToSprintBacklog,c=t.deleteUserStory,a=t.createMaintenanceStory;return e?Object(p.jsxs)("div",{children:[Object(p.jsxs)("h2",{children:["Sprint Backlog for ",e.name]}),Object(p.jsx)(j.a,{striped:!0,hover:!0,children:Object(p.jsx)("tbody",{children:e.userstories.map((function(t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)(g,{userstory:t,backlogs:n,addStoryToSprintBacklog:r,storyView:null})}),Object(p.jsxs)("td",{children:[Object(p.jsx)("p",{children:Object(p.jsx)(b.b,{to:"/userstories/".concat(t.id),className:"btn btn-success",children:"Info"})}),Object(p.jsx)("p",{children:Object(p.jsx)(l.a,{variant:"danger",onClick:function(){return c(t.id)},children:"delete"})})]})]},t.id)}))})}),Object(p.jsx)(R,{backlog:e,createMaintenanceStory:a})]}):null},X=function(){var t=Object(r.useState)([]),e=Object(d.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)([]),o=Object(d.a)(a,2),j=o[0],l=o[1],h=Object(r.useState)(null),O=Object(d.a)(h,2),x=O[0],f=O[1];Object(r.useEffect)((function(){L().then((function(t){c(t)})),V().then((function(t){l(t)}))}),[]),Object(r.useEffect)((function(){var t=window.localStorage.getItem("loggedScrumtrackerappUser");if(t){var e=JSON.parse(t);f(e),I(e.token),H(e.token)}}),[]);var y=function(){var t=Object(u.a)(i.a.mark((function t(e,n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,K.login({username:e,password:n});case 3:r=t.sent,window.localStorage.setItem("loggedScrumtrackerappUser",JSON.stringify(r)),f(r),I(r.token),H(r.token),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),alert("wrong credentials");case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}(),v=function(){var t=Object(u.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(e).then((function(t){c(n.concat(t.data))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(){var t=Object(u.a)(i.a.mark((function t(e,r){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(e).then((function(t){c(n.concat(t.data)),T(t.data,r.id)}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),k=function(t){z(t).then((function(e){c(n.filter((function(e){return e.id!==t})))}))},T=function(){var t=Object(u.a)(i.a.mark((function t(e,n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(e),""===n){t.next=13;break}if(r=j.find((function(t){return t.id===n})),console.log(r),r.userstories.find((function(t){return t.id===e.id}))){t.next=10;break}return t.next=7,q(n,e).then((function(t){l(j.map((function(e){return e.id!==n?e:t})))}));case 7:alert('Story "'+e.story+'" added to sprint backlog '+r.name),t.next=11;break;case 10:alert('Story "'+e.story+'" already in sprint backlog '+r.name);case 11:t.next=14;break;case 13:alert("Select backlog from the dropdown menu");case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),U=function(){var t=Object(u.a)(i.a.mark((function t(e,r){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.find((function(t){return t.id===r})),t.next=3,G(r,e).then((function(t){c(n.map((function(e){return e.id!==r?e:t})))}));case 3:alert('Task "'+e.name+'" added to story '+a.story);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),B=function(){var t=Object(u.a)(i.a.mark((function t(e,r){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.find((function(t){return t.id===r})),t.next=3,F(r,e).then((function(t){c(n.map((function(e){return e.id!==r?e:t})))}));case 3:alert('Comment "'+e.commentText+'" added to story '+a.story);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),A={padding:5},M=Object(Q.f)("/sprintbacklogs/:id"),J=M?j.find((function(t){return t.id===M.params.id})):null,R=Object(Q.f)("/userstories/:id"),X=R?n.find((function(t){return t.id===R.params.id})):null;return null===x?Object(p.jsx)(N,{handleLogin:y}):Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(b.b,{style:A,to:"/",children:"product backlog"}),Object(p.jsx)(b.b,{style:A,to:"/sprintbacklogs",children:"sprint backlogs"}),Object(p.jsx)("button",{type:"button",className:"btn btn-outline-primary",onClick:function(){window.localStorage.clear(),f(null)},children:"Logout"})]}),Object(p.jsxs)(Q.c,{children:[Object(p.jsx)(Q.a,{path:"/sprintbacklogs/:id",children:Object(p.jsx)(W,{backlog:J,backlogs:j,addStoryToSprintBacklog:T,deleteUserStory:k,createMaintenanceStory:m})}),Object(p.jsx)(Q.a,{path:"/userstories/:id",children:Object(p.jsx)(g,{userstory:X,backlogs:j,addStoryToSprintBacklog:T,updateUserStory:function(t,e,r,a){if(t){var o=n.find((function(e){return e.id===t})),i={priority:o.priority,storypoints:o.storypoints,status:o.status};i.priority!==e&&(i=Object(s.a)(Object(s.a)({},i),{},{priority:e})),i.storypoints!==a&&(i=Object(s.a)(Object(s.a)({},i),{},{storypoints:a})),i.status!==r&&(i=Object(s.a)(Object(s.a)({},i),{},{status:r})),P(t,i).then((function(e){console.log(e),c(n.map((function(n){return n.id!==t?n:e})))}))}},storyView:"",addTaskToStory:U,addCommentToStory:B})}),Object(p.jsx)(Q.a,{path:"/sprintbacklogs",children:Object(p.jsx)(w,{backlogs:j,createSprintBacklog:function(t){E(t).then((function(t){l(j.concat(t.data))}))}})}),Object(p.jsxs)(Q.a,{path:"/",children:[Object(p.jsx)(S,{stories:n,deleteUserStory:k,backlogs:j,addStoryToSprintBacklog:T}),Object(p.jsx)(C,{createNewStory:v})]})]})]})};a.a.render(Object(p.jsx)(b.a,{children:Object(p.jsx)(X,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.6651e89c.chunk.js.map