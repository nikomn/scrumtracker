(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{66:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n(34),a=n.n(c),s=n(18),o=n(8),i=n.n(o),j=n(17),d=n(6),u=n(67),l=n(69),b=n(13),p=n(0),h=function(t){var e=t.userstory,n=t.backlogs,c=t.addStoryToSprintBacklog,a=Object(r.useState)(""),s=Object(d.a)(a,2),o=s[0],i=s[1];return Object(p.jsxs)("div",{className:"addToSprintBacklog",children:[Object(p.jsx)("h5",{children:"Add story to Sprint backlog"}),Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c(e,o),i("")},children:[Object(p.jsxs)("select",{id:"dropdown",value:o,onChange:function(t){var e=t.target;return i(e.value)},children:[Object(p.jsx)("option",{value:"select sprint backlog",children:"select sprint backlog"}),n.map((function(t){return Object(p.jsx)("option",{value:t.id,children:t.name},t.id)}))]}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{type:"submit",children:"Add to sprintbacklog"})})]})]})},O=n(68),x=function(t){var e=t.story,n=t.updateUserStory,c=Object(r.useState)(""),a=Object(d.a)(c,2),s=a[0],o=a[1],i=Object(r.useState)(e.status),j=Object(d.a)(i,2),u=j[0],b=j[1],h=Object(r.useState)(0),x=Object(d.a)(h,2),y=x[0],f=x[1];return Object(p.jsxs)("div",{className:"addUserStoryForm",children:[Object(p.jsx)("h2",{children:"Modify User Story"}),Object(p.jsx)(O.a,{onSubmit:function(t){t.preventDefault(),n(e.id,s,u,y),o(""),f(0)},children:Object(p.jsxs)(O.a.Group,{children:[Object(p.jsx)(O.a.Label,{children:"New priority"}),Object(p.jsx)(O.a.Control,{id:"modify-priority-input",type:"number",name:"priority",value:s,placeholder:"New priority",onChange:function(t){var e=t.target;return o(e.value)}}),Object(p.jsx)(O.a.Label,{children:"New storypoints"}),Object(p.jsx)(O.a.Control,{id:"modify-storypoint-input",type:"number",name:"storypoints",value:y,placeholder:"New storypoints",onChange:function(t){var e=t.target;return f(e.value)}}),Object(p.jsx)("div",{children:"New Status"}),"story"===e.type?Object(p.jsx)("p",{children:Object(p.jsxs)("select",{id:"modify-status-dropdown",value:u,onChange:function(t){var e=t.target;return b(e.value)},children:[Object(p.jsx)("option",{value:"new",children:"new"}),Object(p.jsx)("option",{value:"planned",children:"planned"}),Object(p.jsx)("option",{value:"done",children:"done"})]})}):Object(p.jsx)("p",{children:Object(p.jsxs)("select",{id:"modify-status-dropdown",value:u,onChange:function(t){var e=t.target;return b(e.value)},children:[Object(p.jsx)("option",{value:"waiting",children:"waiting"}),Object(p.jsx)("option",{value:"doing",children:"doing"}),Object(p.jsx)("option",{value:"done",children:"done"})]})}),Object(p.jsx)(l.a,{variant:"success",type:"submit",children:"Update story"})]})})]})},y=function(t){var e=t.task;return e?Object(p.jsx)("div",{className:"task",children:Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"Task:"})," ",e.name," ",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Status:"})," ",e.status]})}):null},f=function(t){var e=t.createNewTask,n=t.story,c=Object(r.useState)(""),a=Object(d.a)(c,2),s=a[0],o=a[1],i=Object(r.useState)("new"),j=Object(d.a)(i,2),u=j[0],b=j[1];return Object(p.jsxs)("div",{className:"addTaskForm",children:[Object(p.jsx)("h2",{children:"Add new Task"}),Object(p.jsx)(O.a,{onSubmit:function(t){t.preventDefault(),e({name:s,status:u},n),o(""),b("new")},children:Object(p.jsxs)(O.a.Group,{children:[Object(p.jsx)(O.a.Label,{children:"Name"}),Object(p.jsx)(O.a.Control,{id:"task-input",type:"text",name:"task",value:s,placeholder:"New task",onChange:function(t){var e=t.target;return o(e.value)}}),Object(p.jsx)("div",{children:"Status"}),Object(p.jsx)("p",{children:Object(p.jsxs)("select",{id:"task-status-dropdown",value:u,onChange:function(t){var e=t.target;return b(e.value)},children:[Object(p.jsx)("option",{value:"waiting",children:"waiting"}),Object(p.jsx)("option",{value:"doing",children:"doing"}),Object(p.jsx)("option",{value:"done",children:"done"})]})}),Object(p.jsx)(l.a,{variant:"success",type:"submit",children:"Add new task"})]})})]})},v=function(t){var e=t.comment;return e?Object(p.jsx)("div",{className:"comment",children:Object(p.jsxs)("p",{children:[Object(p.jsxs)("b",{children:[e.date,":"]})," ",e.commentText]})}):null},m=function(t){var e=t.createNewComment,n=t.story,c=Object(r.useState)(""),a=Object(d.a)(c,2),s=a[0],o=a[1];return Object(p.jsxs)("div",{className:"addCommentForm",children:[Object(p.jsx)("h2",{children:"Add new Comment"}),Object(p.jsx)(O.a,{onSubmit:function(t){t.preventDefault(),e({commentText:s},n),o("")},children:Object(p.jsxs)(O.a.Group,{children:[Object(p.jsx)(O.a.Label,{children:"Comment"}),Object(p.jsx)(O.a.Control,{id:"comment-input",type:"text",name:"comment",value:s,placeholder:"New comment",onChange:function(t){var e=t.target;return o(e.value)}}),Object(p.jsx)(l.a,{variant:"success",type:"submit",children:"Add new task"})]})})]})},g=function(t){var e=t.userstory,n=t.backlogs,r=t.addStoryToSprintBacklog,c=t.updateUserStory,a=t.storyView,s=t.addTaskToStory,o=t.addCommentToStory;return e?Object(p.jsx)("div",{className:"userstory",children:null!==a?Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:e.story}),Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"User Story:"})," ",e.story," ",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Priority:"})," ",e.priority," ",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Storypoints:"})," ",e.storypoints," ",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Status:"})," ",e.status]}),Object(p.jsx)(x,{story:e,updateUserStory:c}),Object(p.jsx)("h2",{children:"Technical tasks"}),Object(p.jsx)(u.a,{striped:!0,hover:!0,children:Object(p.jsx)("tbody",{children:e.tasks.map((function(t){return Object(p.jsx)("tr",{children:Object(p.jsx)("td",{children:Object(p.jsx)(y,{task:t})})},t.id)}))})}),Object(p.jsx)(f,{createNewTask:s,story:e.id}),Object(p.jsx)("h2",{children:"Comments"}),Object(p.jsx)(u.a,{striped:!0,hover:!0,children:Object(p.jsx)("tbody",{children:e.comments.map((function(t){return Object(p.jsx)("tr",{children:Object(p.jsx)("td",{children:Object(p.jsx)(v,{comment:t})})},t.id)}))})}),Object(p.jsx)(m,{createNewComment:o,story:e.id})]}):Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"User Story:"})," ",e.story," ",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Priority:"})," ",e.priority," ",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Storypoints:"})," ",e.storypoints," ",Object(p.jsx)("br",{}),Object(p.jsx)("b",{children:"Status:"})," ",e.status]}),Object(p.jsx)(h,{userstory:e,backlogs:n,addStoryToSprintBacklog:r})]})}):null},S=function(t){var e=t.stories,n=t.deleteUserStory,r=t.backlogs,c=t.addStoryToSprintBacklog,a=e.filter((function(t){return"story"===t.type}));return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Product Backlog"}),Object(p.jsx)(u.a,{striped:!0,hover:!0,children:Object(p.jsx)("tbody",{children:a.map((function(t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)(g,{userstory:t,backlogs:r,addStoryToSprintBacklog:c,storyView:null})}),Object(p.jsxs)("td",{children:[Object(p.jsx)("p",{children:Object(p.jsx)(b.b,{to:"/userstories/".concat(t.id),className:"btn btn-success",children:"Info"})}),Object(p.jsx)("p",{children:Object(p.jsx)(l.a,{variant:"danger",onClick:function(){return n(t.id)},children:"delete"})})]})]},t.id)}))})})]})},k=function(t){var e=t.createSprintBacklog,n=Object(r.useState)(""),c=Object(d.a)(n,2),a=c[0],s=c[1];return Object(p.jsxs)("div",{className:"createSprintBacklog",children:[Object(p.jsx)("h2",{children:"Add new Sprint backlog"}),Object(p.jsx)(O.a,{onSubmit:function(t){t.preventDefault(),e({name:a}),s("")},children:Object(p.jsxs)(O.a.Group,{children:[Object(p.jsx)(O.a.Label,{children:"Name"}),Object(p.jsx)(O.a.Control,{id:"backlog-input",type:"text",name:"backlog",value:a,placeholder:"New Sprint backlog",onChange:function(t){var e=t.target;return s(e.value)}}),Object(p.jsx)(l.a,{variant:"success",type:"submit",children:"Create"})]})})]})},w=function(t){var e=t.backlogs,n=t.createSprintBacklog;return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Sprint Backlogs"}),Object(p.jsx)(u.a,{striped:!0,hover:!0,children:Object(p.jsx)("tbody",{children:e.map((function(t){return Object(p.jsx)("tr",{children:Object(p.jsx)("td",{children:Object(p.jsx)(b.b,{to:"/sprintbacklogs/".concat(t.id),children:t.name})})},t.id)}))})}),Object(p.jsx)(k,{createSprintBacklog:n})]})},C=function(t){var e=t.createNewStory,n=Object(r.useState)(""),c=Object(d.a)(n,2),a=c[0],s=c[1],o=Object(r.useState)(99),i=Object(d.a)(o,2),j=i[0],u=i[1],b=Object(r.useState)(0),h=Object(d.a)(b,2),x=h[0],y=h[1],f=Object(r.useState)("new"),v=Object(d.a)(f,2),m=v[0],g=v[1];return Object(p.jsxs)("div",{className:"addUserStoryForm",children:[Object(p.jsx)("h2",{children:"Add new User Story"}),Object(p.jsx)(O.a,{onSubmit:function(t){t.preventDefault(),e({story:a,priority:j,storypoints:x,status:m,type:"story"}),s(""),u(99),y(0),g("new")},children:Object(p.jsxs)(O.a.Group,{children:[Object(p.jsx)(O.a.Label,{children:"User Story"}),Object(p.jsx)(O.a.Control,{id:"story-input",type:"text",name:"userstory",value:a,placeholder:"New user story",onChange:function(t){var e=t.target;return s(e.value)}}),Object(p.jsx)(O.a.Label,{children:"Priority"}),Object(p.jsx)(O.a.Control,{id:"priority-input",type:"number",name:"priority",value:j,placeholder:"Priority",onChange:function(t){var e=t.target;return u(e.value)}}),Object(p.jsx)(O.a.Label,{children:"Storypoints"}),Object(p.jsx)(O.a.Control,{id:"storypoint-input",type:"number",name:"storypoints",value:x,placeholder:"Storypoints",onChange:function(t){var e=t.target;return y(e.value)}}),Object(p.jsx)("div",{children:"Status"}),Object(p.jsx)("p",{children:Object(p.jsxs)("select",{id:"status-dropdown",value:m,onChange:function(t){var e=t.target;return g(e.value)},children:[Object(p.jsx)("option",{value:"new",children:"new"}),Object(p.jsx)("option",{value:"planned",children:"planned"}),Object(p.jsx)("option",{value:"done",children:"done"})]})}),Object(p.jsx)(l.a,{variant:"success",type:"submit",children:"Add new story"})]})})]})},N=n(14),T=n.n(N),B="/api/userstories",U=function(){return T.a.get(B).then((function(t){return t.data}))},A=function(t){return T.a.post(B,t)},L=function(t,e){return console.log("id:",t),console.log(e),console.log("".concat(B,"/").concat(t),e),T.a.put("".concat(B,"/").concat(t),e).then((function(t){return t.data}))},D=function(t){return T.a.delete("".concat(B,"/").concat(t)).then((function(t){return t.data}))},P=function(t,e){return T.a.post("".concat(B,"/").concat(t,"/tasks"),e).then((function(t){return t.data}))},G=function(t,e){return T.a.post("".concat(B,"/").concat(t,"/comments"),e).then((function(t){return t.data}))},F="/api/sprintbacklogs",M=function(){return T.a.get(F).then((function(t){return t.data}))},V=function(t){return T.a.post(F,t)},I=function(t,e){return T.a.post("".concat(F,"/").concat(t,"/stories"),e).then((function(t){return t.data}))},E=n(7),J=function(t){var e=t.backlog,n=t.createMaintenanceStory,c=Object(r.useState)(""),a=Object(d.a)(c,2),s=a[0],o=a[1],u=Object(r.useState)(99),b=Object(d.a)(u,2),h=b[0],x=b[1],y=Object(r.useState)("new"),f=Object(d.a)(y,2),v=f[0],m=f[1],g=function(){var t=Object(j.a)(i.a.mark((function t(r){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r.preventDefault(),n({story:s,priority:h,storypoints:0,status:v,type:"other"},e),o(""),x(99),m("new");case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"addUserStoryForm",children:[Object(p.jsx)("h2",{children:"Add maintenance story"}),Object(p.jsx)(O.a,{onSubmit:g,children:Object(p.jsxs)(O.a.Group,{children:[Object(p.jsx)(O.a.Label,{children:"User Story"}),Object(p.jsx)(O.a.Control,{id:"story-input",type:"text",name:"userstory",value:s,placeholder:"New user story",onChange:function(t){var e=t.target;return o(e.value)}}),Object(p.jsx)(O.a.Label,{children:"Priority"}),Object(p.jsx)(O.a.Control,{id:"priority-input",type:"number",name:"priority",value:h,placeholder:"Priority",onChange:function(t){var e=t.target;return x(e.value)}}),Object(p.jsx)("div",{children:"Status"}),Object(p.jsx)("p",{children:Object(p.jsxs)("select",{id:"status-dropdown",value:v,onChange:function(t){var e=t.target;return m(e.value)},children:[Object(p.jsx)("option",{value:"new",children:"new"}),Object(p.jsx)("option",{value:"planned",children:"planned"}),Object(p.jsx)("option",{value:"done",children:"done"})]})}),Object(p.jsx)(l.a,{variant:"success",type:"submit",children:"Add new story"})]})})]})},q=function(t){var e=t.backlog,n=t.backlogs,r=t.addStoryToSprintBacklog,c=t.deleteUserStory,a=t.createMaintenanceStory;return e?Object(p.jsxs)("div",{children:[Object(p.jsxs)("h2",{children:["Sprint Backlog for ",e.name]}),Object(p.jsx)(u.a,{striped:!0,hover:!0,children:Object(p.jsx)("tbody",{children:e.userstories.map((function(t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:Object(p.jsx)(g,{userstory:t,backlogs:n,addStoryToSprintBacklog:r,storyView:null})}),Object(p.jsxs)("td",{children:[Object(p.jsx)("p",{children:Object(p.jsx)(b.b,{to:"/userstories/".concat(t.id),className:"btn btn-success",children:"Info"})}),Object(p.jsx)("p",{children:Object(p.jsx)(l.a,{variant:"danger",onClick:function(){return c(t.id)},children:"delete"})})]})]},t.id)}))})}),Object(p.jsx)(J,{backlog:e,createMaintenanceStory:a})]}):null},z=function(){var t=Object(r.useState)([]),e=Object(d.a)(t,2),n=e[0],c=e[1],a=Object(r.useState)([]),o=Object(d.a)(a,2),u=o[0],l=o[1];Object(r.useEffect)((function(){U().then((function(t){c(t)})),M().then((function(t){l(t)}))}),[]);var h=function(){var t=Object(j.a)(i.a.mark((function t(e){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e).then((function(t){c(n.concat(t.data))}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(j.a)(i.a.mark((function t(e,r){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e).then((function(t){c(n.concat(t.data)),y(t.data,r.id)}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),x=function(t){D(t).then((function(e){c(n.filter((function(e){return e.id!==t})))}))},y=function(){var t=Object(j.a)(i.a.mark((function t(e,n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(e),""===n){t.next=13;break}if(r=u.find((function(t){return t.id===n})),console.log(r),r.userstories.find((function(t){return t.id===e.id}))){t.next=10;break}return t.next=7,I(n,e).then((function(t){l(u.map((function(e){return e.id!==n?e:t})))}));case 7:alert('Story "'+e.story+'" added to sprint backlog '+r.name),t.next=11;break;case 10:alert('Story "'+e.story+'" already in sprint backlog '+r.name);case 11:t.next=14;break;case 13:alert("Select backlog from the dropdown menu");case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),f=function(){var t=Object(j.a)(i.a.mark((function t(e,r){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.find((function(t){return t.id===r})),t.next=3,P(r,e).then((function(t){c(n.map((function(e){return e.id!==r?e:t})))}));case 3:alert('Task "'+e.name+'" added to story '+a.story);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),v=function(){var t=Object(j.a)(i.a.mark((function t(e,r){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.find((function(t){return t.id===r})),t.next=3,G(r,e).then((function(t){c(n.map((function(e){return e.id!==r?e:t})))}));case 3:alert('Comment "'+e.commentText+'" added to story '+a.story);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),m={padding:5},k=Object(E.f)("/sprintbacklogs/:id"),N=k?u.find((function(t){return t.id===k.params.id})):null,T=Object(E.f)("/userstories/:id"),B=T?n.find((function(t){return t.id===T.params.id})):null;return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(b.b,{style:m,to:"/",children:"product backlog"}),Object(p.jsx)(b.b,{style:m,to:"/sprintbacklogs",children:"sprint backlogs"})]}),Object(p.jsxs)(E.c,{children:[Object(p.jsx)(E.a,{path:"/sprintbacklogs/:id",children:Object(p.jsx)(q,{backlog:N,backlogs:u,addStoryToSprintBacklog:y,deleteUserStory:x,createMaintenanceStory:O})}),Object(p.jsx)(E.a,{path:"/userstories/:id",children:Object(p.jsx)(g,{userstory:B,backlogs:u,addStoryToSprintBacklog:y,updateUserStory:function(t,e,r,a){if(t){var o=n.find((function(e){return e.id===t})),i=Object(s.a)({},o);""!==e&&""===r&&(i=Object(s.a)(Object(s.a)({},o),{},{priority:e,storypoints:a})),""===e&&""!==r&&(i=Object(s.a)(Object(s.a)({},o),{},{status:r,storypoints:a})),""!==e&&""!==r&&(i=Object(s.a)(Object(s.a)({},o),{},{status:r,priority:e,storypoints:a})),L(t,i).then((function(e){console.log(e),c(n.map((function(n){return n.id!==t?n:e})))}))}},storyView:"",addTaskToStory:f,addCommentToStory:v})}),Object(p.jsx)(E.a,{path:"/sprintbacklogs",children:Object(p.jsx)(w,{backlogs:u,createSprintBacklog:function(t){V(t).then((function(t){l(u.concat(t.data))}))}})}),Object(p.jsxs)(E.a,{path:"/",children:[Object(p.jsx)(S,{stories:n,deleteUserStory:x,backlogs:u,addStoryToSprintBacklog:y}),Object(p.jsx)(C,{createNewStory:h})]})]})]})};a.a.render(Object(p.jsx)(b.a,{children:Object(p.jsx)(z,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.cabae953.chunk.js.map