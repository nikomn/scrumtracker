(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{66:function(t,e,r){"use strict";r.r(e);var n=r(0),c=r(33),a=r.n(c),s=r(20),o=r.n(s),i=r(34),l=r(15),d=r(7),j=r(67),u=r(69),b=r(12),O=r(1),h=function(t){var e=t.userstory,r=t.backlogs,c=t.addStoryToSprintBacklog,a=Object(n.useState)(""),s=Object(d.a)(a,2),o=s[0],i=s[1];return Object(O.jsxs)("div",{className:"addToSprintBacklog",children:[Object(O.jsx)("h5",{children:"Add story to Sprint backlog"}),Object(O.jsxs)("form",{onSubmit:function(t){t.preventDefault(),c(e,o),i("")},children:[Object(O.jsxs)("select",{id:"dropdown",value:o,onChange:function(t){var e=t.target;return i(e.value)},children:[Object(O.jsx)("option",{value:"select sprint backlog",children:"select sprint backlog"}),r.map((function(t){return Object(O.jsx)("option",{value:t.id,children:t.name},t.id)}))]}),Object(O.jsx)("div",{children:Object(O.jsx)("button",{type:"submit",children:"Add to sprintbacklog"})})]})]})},p=r(68),x=function(t){var e=t.story,r=t.updateUserStory,c=Object(n.useState)(""),a=Object(d.a)(c,2),s=a[0],o=a[1],i=Object(n.useState)(""),l=Object(d.a)(i,2),j=l[0],b=l[1];return Object(O.jsxs)("div",{className:"addUserStoryForm",children:[Object(O.jsx)("h2",{children:"Modify User Story"}),Object(O.jsx)(p.a,{onSubmit:function(t){t.preventDefault(),r(e.id,s,j),o(""),b("")},children:Object(O.jsxs)(p.a.Group,{children:[Object(O.jsx)(p.a.Label,{children:"New priority"}),Object(O.jsx)(p.a.Control,{id:"modify-priority-input",type:"number",name:"priority",value:s,placeholder:"New priority",onChange:function(t){var e=t.target;return o(e.value)}}),Object(O.jsx)(p.a.Label,{children:"New Status"}),Object(O.jsx)(p.a.Control,{id:"modify-status-input",type:"text",name:"status",value:j,placeholder:"New Status",onChange:function(t){var e=t.target;return b(e.value)}}),Object(O.jsx)(u.a,{variant:"success",type:"submit",children:"Update story"})]})})]})},f=function(t){var e=t.userstory,r=t.backlogs,n=t.addStoryToSprintBacklog,c=t.updateUserStory,a=t.storyView;return e?Object(O.jsxs)("div",{className:"userstory",children:[Object(O.jsxs)("p",{children:[Object(O.jsx)("b",{children:"User Story:"})," ",e.story," ",Object(O.jsx)("br",{}),Object(O.jsx)("b",{children:"Priority:"})," ",e.priority," ",Object(O.jsx)("br",{}),Object(O.jsx)("b",{children:"Status:"})," ",e.status]}),Object(O.jsx)(h,{userstory:e,backlogs:r,addStoryToSprintBacklog:n}),null!==a?Object(O.jsx)("div",{children:Object(O.jsx)(x,{story:e,updateUserStory:c})}):""]}):null},y=function(t){var e=t.stories,r=t.deleteUserStory,n=t.backlogs,c=t.addStoryToSprintBacklog;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Product Backlog"}),Object(O.jsx)(j.a,{striped:!0,hover:!0,children:Object(O.jsx)("tbody",{children:e.map((function(t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)(f,{userstory:t,backlogs:n,addStoryToSprintBacklog:c,storyView:null})}),Object(O.jsxs)("td",{children:[Object(O.jsx)("p",{children:Object(O.jsx)(b.b,{to:"/userstories/".concat(t.id),className:"btn btn-success",children:"Info"})}),Object(O.jsx)("p",{children:Object(O.jsx)(u.a,{variant:"danger",onClick:function(){return r(t.id)},children:"delete"})})]})]},t.id)}))})})]})},g=function(t){var e=t.createSprintBacklog,r=Object(n.useState)(""),c=Object(d.a)(r,2),a=c[0],s=c[1];return Object(O.jsxs)("div",{className:"createSprintBacklog",children:[Object(O.jsx)("h2",{children:"Add new Sprint backlog"}),Object(O.jsx)(p.a,{onSubmit:function(t){t.preventDefault(),e({name:a}),s("")},children:Object(O.jsxs)(p.a.Group,{children:[Object(O.jsx)(p.a.Label,{children:"Name"}),Object(O.jsx)(p.a.Control,{id:"backlog-input",type:"text",name:"backlog",value:a,placeholder:"New Sprint backlog",onChange:function(t){var e=t.target;return s(e.value)}}),Object(O.jsx)(u.a,{variant:"success",type:"submit",children:"Create"})]})})]})},S=function(t){var e=t.backlogs,r=t.createSprintBacklog;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Sprint Backlogs"}),Object(O.jsx)(j.a,{striped:!0,hover:!0,children:Object(O.jsx)("tbody",{children:e.map((function(t){return Object(O.jsx)("tr",{children:Object(O.jsx)("td",{children:Object(O.jsx)(b.b,{to:"/sprintbacklogs/".concat(t.id),children:t.name})})},t.id)}))})}),Object(O.jsx)(g,{createSprintBacklog:r})]})},v=function(t){var e=t.createNewStory,r=Object(n.useState)(""),c=Object(d.a)(r,2),a=c[0],s=c[1],o=Object(n.useState)(99),i=Object(d.a)(o,2),l=i[0],j=i[1],b=Object(n.useState)("new"),h=Object(d.a)(b,2),x=h[0],f=h[1];return Object(O.jsxs)("div",{className:"addUserStoryForm",children:[Object(O.jsx)("h2",{children:"Add new User Story"}),Object(O.jsx)(p.a,{onSubmit:function(t){t.preventDefault(),e({story:a,priority:l,status:x}),s(""),j(99),f("new")},children:Object(O.jsxs)(p.a.Group,{children:[Object(O.jsx)(p.a.Label,{children:"User Story"}),Object(O.jsx)(p.a.Control,{id:"story-input",type:"text",name:"userstory",value:a,placeholder:"New user story",onChange:function(t){var e=t.target;return s(e.value)}}),Object(O.jsx)(p.a.Label,{children:"Priority"}),Object(O.jsx)(p.a.Control,{id:"priority-input",type:"number",name:"priority",value:l,placeholder:"Priority",onChange:function(t){var e=t.target;return j(e.value)}}),Object(O.jsx)(p.a.Label,{children:"Status"}),Object(O.jsx)(p.a.Control,{id:"status-input",type:"text",name:"status",value:x,placeholder:"Status",onChange:function(t){var e=t.target;return f(e.value)}}),Object(O.jsx)(u.a,{variant:"success",type:"submit",children:"Add new story"})]})})]})},k=r(14),m=r.n(k),w="/api/userstories",B=function(){return m.a.get(w).then((function(t){return t.data}))},N=function(t){return m.a.post(w,t)},C=function(t,e){return console.log("id:",t),console.log(e),console.log("".concat(w,"/").concat(t),e),m.a.put("".concat(w,"/").concat(t),e).then((function(t){return t.data}))},U=function(t){return m.a.delete("".concat(w,"/").concat(t)).then((function(t){return t.data}))},T="/api/sprintbacklogs",L=function(){return m.a.get(T).then((function(t){return t.data}))},A=function(t){return m.a.post(T,t)},D=function(t,e){return m.a.post("".concat(T,"/").concat(t,"/stories"),e).then((function(t){return t.data}))},P=r(6),V=function(t){var e=t.backlog,r=t.backlogs,n=t.addStoryToSprintBacklog,c=t.deleteUserStory;return e?Object(O.jsxs)("div",{children:[Object(O.jsxs)("h2",{children:["Sprint Backlog for ",e.name]}),Object(O.jsx)(j.a,{striped:!0,hover:!0,children:Object(O.jsx)("tbody",{children:e.userstories.map((function(t){return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:Object(O.jsx)(f,{userstory:t,backlogs:r,addStoryToSprintBacklog:n,storyView:null})}),Object(O.jsxs)("td",{children:[Object(O.jsx)("p",{children:Object(O.jsx)(b.b,{to:"/userstories/".concat(t.id),className:"btn btn-success",children:"Info"})}),Object(O.jsx)("p",{children:Object(O.jsx)(u.a,{variant:"danger",onClick:function(){return c(t.id)},children:"delete"})})]})]},t.id)}))})})]}):null},G=function(){var t=Object(n.useState)([]),e=Object(d.a)(t,2),r=e[0],c=e[1],a=Object(n.useState)([]),s=Object(d.a)(a,2),j=s[0],u=s[1];Object(n.useEffect)((function(){B().then((function(t){c(t)})),L().then((function(t){u(t)}))}),[]);var h=function(t){U(t).then((function(e){c(r.filter((function(e){return e.id!==t})))}))},p=function(){var t=Object(i.a)(o.a.mark((function t(e,r){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""===r){t.next=11;break}if((n=j.find((function(t){return t.id===r}))).userstories.find((function(t){return t.id===e.id}))){t.next=8;break}return t.next=5,D(r,e).then((function(t){console.log(t),u(j.map((function(e){return e.id!==r?e:t})))}));case 5:alert('Story "'+e.story+'" added to sprint backlog '+n.name),t.next=9;break;case 8:alert('Story "'+e.story+'" already in sprint backlog '+n.name);case 9:t.next=12;break;case 11:alert("Select backlog from the dropdown menu");case 12:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),x={padding:5},g=Object(P.f)("/sprintbacklogs/:id"),k=g?j.find((function(t){return t.id===g.params.id})):null,m=Object(P.f)("/userstories/:id"),w=m?r.find((function(t){return t.id===m.params.id})):null;return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(b.b,{style:x,to:"/",children:"product backlog"}),Object(O.jsx)(b.b,{style:x,to:"/sprintbacklogs",children:"sprint backlogs"})]}),Object(O.jsxs)(P.c,{children:[Object(O.jsx)(P.a,{path:"/sprintbacklogs/:id",children:Object(O.jsx)(V,{backlog:k,backlogs:j,addStoryToSprintBacklog:p,deleteUserStory:h})}),Object(O.jsx)(P.a,{path:"/userstories/:id",children:Object(O.jsx)(f,{userstory:w,backlogs:j,addStoryToSprintBacklog:p,updateUserStory:function(t,e,n){if(t){var a=r.find((function(e){return e.id===t})),s=Object(l.a)({},a);""!==e&&""===n&&(s=Object(l.a)(Object(l.a)({},a),{},{priority:e})),""===e&&""!==n&&(s=Object(l.a)(Object(l.a)({},a),{},{status:n})),""!==e&&""!==n&&(s=Object(l.a)(Object(l.a)({},a),{},{status:n,priority:e})),C(t,s).then((function(e){console.log(e),c(r.map((function(r){return r.id!==t?r:e})))}))}},storyView:""})}),Object(O.jsx)(P.a,{path:"/sprintbacklogs",children:Object(O.jsx)(S,{backlogs:j,createSprintBacklog:function(t){A(t).then((function(t){u(j.concat(t.data))}))}})}),Object(O.jsxs)(P.a,{path:"/",children:[Object(O.jsx)(y,{stories:r,deleteUserStory:h,backlogs:j,addStoryToSprintBacklog:p}),Object(O.jsx)(v,{createNewStory:function(t){N(t).then((function(t){c(r.concat(t.data))}))}})]})]})]})};a.a.render(Object(O.jsx)(b.a,{children:Object(O.jsx)(G,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.7ae35a05.chunk.js.map