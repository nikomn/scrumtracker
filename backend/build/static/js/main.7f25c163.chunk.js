(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(t,e,n){"use strict";n.r(e);var r=n(2),c=n(14),s=n.n(c),o=n(3),u=n(0),i=function(t){var e=t.userstory;return Object(u.jsx)("div",{className:"userstory",children:Object(u.jsx)("p",{children:e.story})})},j=function(t){var e=t.stories;return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Product Backlog"}),Object(u.jsx)("ul",{children:e.map((function(t){return Object(u.jsx)("li",{children:Object(u.jsx)(i,{userstory:t})},t.id)}))})]})},a=function(t){var e=t.createNewStory,n=Object(r.useState)(""),c=Object(o.a)(n,2),s=c[0],i=c[1];return Object(u.jsx)("div",{className:"addUserStoryForm",children:Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({story:s}),i("")},children:[Object(u.jsx)("label",{children:"User Story"}),Object(u.jsx)("input",{type:"text",value:s,onChange:function(t){var e=t.target;return i(e.value)}}),Object(u.jsx)("button",{type:"submit",children:"Add new story"})]})})},d=n(5),b=n.n(d),l="/api/userstories",O=function(){return b.a.get(l).then((function(t){return t.data}))},f=function(t){return b.a.post(l,t)},h=function(){var t=Object(r.useState)([]),e=Object(o.a)(t,2),n=e[0],c=e[1];Object(r.useEffect)((function(){O().then((function(t){c(t)}))}),[]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Scrum Tracker app"}),Object(u.jsx)(j,{stories:n}),Object(u.jsx)(a,{createNewStory:function(t){f(t).then((function(t){c(n.concat(t.data))}))}})]})};s.a.render(Object(u.jsx)(h,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.7f25c163.chunk.js.map