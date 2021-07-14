(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{50:function(t,e,r){"use strict";r.r(e);var n=r(0),c=r(23),o=r.n(c),a=r(8),s=r(7),i=r(51),u=r(53),l=r(1),j=function(t){var e=t.userstory;return Object(l.jsx)("div",{className:"userstory",children:Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"User Story:"})," ",e.story," ",Object(l.jsx)("br",{}),Object(l.jsx)("b",{children:"Priority:"})," ",e.priority," ",Object(l.jsx)("br",{}),Object(l.jsx)("b",{children:"Status:"})," ",e.status]})})},d=function(t){var e=t.stories,r=t.deleteUserStory;return Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Product Backlog"}),Object(l.jsx)(i.a,{striped:!0,hover:!0,children:Object(l.jsx)("tbody",{children:e.map((function(t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:Object(l.jsx)(j,{userstory:t})}),Object(l.jsx)("td",{children:Object(l.jsx)(u.a,{variant:"danger",size:"lg",onClick:function(){return r(t.id)},children:"delete"})})]},t.id)}))})})]})},b=r(52),O=function(t){var e=t.createNewStory,r=Object(n.useState)(""),c=Object(s.a)(r,2),o=c[0],a=c[1],i=Object(n.useState)(99),j=Object(s.a)(i,2),d=j[0],O=j[1],h=Object(n.useState)("new"),y=Object(s.a)(h,2),p=y[0],f=y[1];return Object(l.jsxs)("div",{className:"addUserStoryForm",children:[Object(l.jsx)("h2",{children:"Add new User Story"}),Object(l.jsx)(b.a,{onSubmit:function(t){t.preventDefault(),e({story:o,priority:d,status:p}),a(""),O(99),f("new")},children:Object(l.jsxs)(b.a.Group,{children:[Object(l.jsx)(b.a.Label,{children:"User Story"}),Object(l.jsx)(b.a.Control,{id:"story-input",type:"text",name:"userstory",value:o,placeholder:"New user story",onChange:function(t){var e=t.target;return a(e.value)}}),Object(l.jsx)(b.a.Label,{children:"Priority"}),Object(l.jsx)(b.a.Control,{id:"priority-input",type:"number",name:"priority",value:d,placeholder:"Priority",onChange:function(t){var e=t.target;return O(e.value)}}),Object(l.jsx)(b.a.Label,{children:"Status"}),Object(l.jsx)(b.a.Control,{id:"status-input",type:"text",name:"status",value:p,placeholder:"Status",onChange:function(t){var e=t.target;return f(e.value)}}),Object(l.jsx)(u.a,{variant:"success",type:"submit",children:"Add new story"})]})})]})},h=function(t){var e=t.stories,r=t.updateUserStory,c=Object(n.useState)(""),o=Object(s.a)(c,2),a=o[0],i=o[1],j=Object(n.useState)(""),d=Object(s.a)(j,2),O=d[0],h=d[1],y=Object(n.useState)(""),p=Object(s.a)(y,2),f=p[0],x=p[1];return Object(l.jsxs)("div",{className:"addUserStoryForm",children:[Object(l.jsx)("h2",{children:"Modify User Story"}),Object(l.jsx)(b.a,{onSubmit:function(t){t.preventDefault();var n=e.filter((function(t){return t.story.toLowerCase()===a.toLowerCase()}));if(n[0]){var c=n[0].id;r(c,O,f)}else r(null,O,f);i(""),h(""),x("")},children:Object(l.jsxs)(b.a.Group,{children:[Object(l.jsx)(b.a.Label,{children:"User Story to modify"}),Object(l.jsx)(b.a.Control,{id:"modify-story-input",type:"text",name:"userstory",value:a,placeholder:"User Story to modify",onChange:function(t){var e=t.target;return i(e.value)}}),Object(l.jsx)(b.a.Label,{children:"New priority"}),Object(l.jsx)(b.a.Control,{id:"modify-priority-input",type:"number",name:"priority",value:O,placeholder:"New priority",onChange:function(t){var e=t.target;return h(e.value)}}),Object(l.jsx)(b.a.Label,{children:"New Status"}),Object(l.jsx)(b.a.Control,{id:"modify-status-input",type:"text",name:"status",value:f,placeholder:"New Status",onChange:function(t){var e=t.target;return x(e.value)}}),Object(l.jsx)(u.a,{variant:"success",type:"submit",children:"Update story"})]})})]})},y=r(9),p=r.n(y),f="/api/userstories",x=function(){return p.a.get(f).then((function(t){return t.data}))},v=function(t){return p.a.post(f,t)},g=function(t,e){return console.log("id:",t),console.log(e),console.log("".concat(f,"/").concat(t),e),p.a.put("".concat(f,"/").concat(t),e).then((function(t){return t.data}))},S=function(t){return p.a.delete("".concat(f,"/").concat(t)).then((function(t){return t.data}))},m=function(){var t=Object(n.useState)([]),e=Object(s.a)(t,2),r=e[0],c=e[1];Object(n.useEffect)((function(){x().then((function(t){c(t)}))}),[]);return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{children:"Scrum Tracker app"}),Object(l.jsx)(d,{stories:r,deleteUserStory:function(t){console.log("Story "+t+" will be removed..."),S(t).then((function(e){c(r.filter((function(e){return e.id!==t})))}))}}),Object(l.jsx)(O,{createNewStory:function(t){v(t).then((function(t){c(r.concat(t.data))}))}}),Object(l.jsx)(h,{stories:r,updateUserStory:function(t,e,n){if(console.log("id:",t),console.log("newPriority:",e),console.log("newStatus:",n),t){var o=r.find((function(e){return e.id===t})),s=Object(a.a)({},o);""===e&&""===n&&console.log("No changes made!"),""!==e&&""===n&&(console.log("Changing priority"),s=Object(a.a)(Object(a.a)({},o),{},{priority:e})),""===e&&""!==n&&(console.log("Changing status"),s=Object(a.a)(Object(a.a)({},o),{},{status:n})),""!==e&&""!==n&&(console.log("Changing priority and status"),s=Object(a.a)(Object(a.a)({},o),{},{status:n,priority:e})),g(t,s).then((function(e){console.log(e),c(r.map((function(r){return r.id!==t?r:e})))}))}}})]})};o.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.364cb072.chunk.js.map