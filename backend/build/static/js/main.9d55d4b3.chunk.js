(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r(12),s=r.n(c),i=r(14),j=r(0),u=function(e){var t=e.userstory;return Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:t.story})})},o=function(e){var t=e.stories;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Scrum Tracker app"}),Object(j.jsx)("h2",{children:"Product Backlog"}),Object(j.jsx)("ul",{children:t.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsx)(u,{userstory:e})},e.id)}))})]})},d=r(13),a=r.n(d),b=function(){return a.a.get("/api/userstories").then((function(e){return e.data}))},h=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){b().then((function(e){c(e)}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Scrum Tracker app"}),Object(j.jsx)(o,{stories:r})]})};s.a.render(Object(j.jsx)(h,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.9d55d4b3.chunk.js.map