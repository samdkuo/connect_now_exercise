(this["webpackJsonpconnect-now-exercise"]=this["webpackJsonpconnect-now-exercise"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),i=n.n(r),s=(n(44),n(17)),o=n(5),l=(n(45),n(11)),d=(n(46),n(1)),j=function(e){var t=e.children,n=a.useState(0),c=Object(l.a)(n,2),r=c[0],i=c[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{children:Object(d.jsx)("nav",{className:"App-header",children:[{name:"video games",back:"video",link:""},{name:"contact",back:"contact",link:"contact"}].map((function(e,t){return Object(d.jsxs)("div",{className:"app-link",children:[Object(d.jsx)("p",{className:"link-back ".concat(r===t?"visible":""),children:e.back.toUpperCase()}),Object(d.jsx)(s.b,{className:"link",to:"connect_now_exercise/".concat(e.link),onClick:function(){return i(t)},children:e.name.toUpperCase()})]},t)}))})}),t]})},u=(n(53),function(){return Object(d.jsx)("main",{className:"contact-main",children:Object(d.jsxs)("div",{className:"contact",children:[Object(d.jsx)("h4",{id:"contact-title",children:"get in touch".toUpperCase()}),Object(d.jsx)("p",{id:"contact-summary",children:"Tempus quam pellentesque nec nam aliquam. Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis. Tristique sollicitudin nibh sit amet commodo nulla facilisi."}),Object(d.jsxs)("form",{className:"form contact-form",children:[Object(d.jsx)("h5",{children:"Contact Form"}),Object(d.jsxs)("label",{id:"name-label",children:["Name ",Object(d.jsx)("em",{className:"blue",children:"*"})]}),Object(d.jsx)("input",{id:"name-input",type:"text",required:!0}),Object(d.jsxs)("label",{id:"email-label",children:["Email Address ",Object(d.jsx)("em",{className:"blue",children:"*"})]}),Object(d.jsx)("input",{id:"email-input",type:"email",required:!0}),Object(d.jsxs)("label",{id:"message-label",children:["Message ",Object(d.jsx)("em",{className:"blue",children:"*"})]}),Object(d.jsx)("textarea",{id:"message-input",required:!0,rows:3}),Object(d.jsx)("button",{id:"contact-button",type:"submit",children:"Send"})]})]})})}),m=n(14),b=n(12),x=(n(54),n(35)),h=n.n(x),O=n(36),f=n.n(O),p=n(80),g=n(24),v=function(e){var t=e.game;return Object(d.jsxs)("article",{className:"game-card",children:[Object(d.jsx)("div",{className:"game-image"}),Object(d.jsxs)("div",{className:"game-content",children:[Object(d.jsx)("h4",{className:"game-name",children:t.name}),Object(d.jsx)("p",{className:"game-date",children:"Release Date: ".concat(function(e){var t=new Date(e),n=t.getDay()+1,a=1===n.toString().length?"0".concat(n):n,c=t.getMonth()+1,r=1===c.toString().length?"0".concat(c):c,i=t.getFullYear();return"".concat(a,"/").concat(r,"/").concat(i)}(t.first_release_date))}),Object(d.jsx)("div",{className:"game-summary",children:Object(d.jsx)(f.a,{line:3,element:"span",truncateText:"\u2026",text:t.summary})})]}),Object(d.jsx)("div",{className:"game-rating",children:Object(d.jsx)("p",{children:(+t.rating/10).toFixed(0)})})]})},_=function(){var e=a.useState([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=a.useState([]),i=Object(l.a)(r,2),s=i[0],o=i[1],j=["Release Date","Score","Name"],u=a.useState(!0),x=Object(l.a)(u,2),O=x[0],f=x[1],_=a.useState({name:"",score:"",order:0}),N=Object(l.a)(_,2),k=N[0],w=N[1];a.useEffect((function(){h.a.get("https://public.connectnow.org.uk/applicant-test/").then((function(e){c(e.data.sort((function(e,t){return t.first_release_date-e.first_release_date}))),o(e.data.sort((function(e,t){return t.first_release_date-e.first_release_date})))}))}),[]);var C=function(e,t){var n=k.order,a=O,c=[];switch(t&&(n=+t.target.name,w(Object(b.a)(Object(b.a)({},k),{},{order:n}))),null!=e&&(a=e),n){case 0:c=a?s.sort((function(e,t){return t.first_release_date-e.first_release_date})):s.sort((function(e,t){return e.first_release_date-t.first_release_date}));break;case 1:c=a?s.sort((function(e,t){return t.rating-e.rating})):s.sort((function(e,t){return e.rating-t.rating}));break;case 2:c=a?s.sort((function(e,t){return e.name.toLowerCase()>t.name.toLowerCase()?1:-1})):s.sort((function(e,t){return e.name.toLowerCase()<t.name.toLowerCase()?1:-1}));break;default:c=s.sort((function(e,t){return t.first_release_date-e.first_release_date}))}o(c)};return Object(d.jsxs)("main",{className:"filter-main",children:[Object(d.jsx)("div",{className:"form",children:Object(d.jsxs)("form",{className:"filter-form",onSubmit:function(){return!1},children:[Object(d.jsx)("h4",{id:"filter-heading",children:"Filter Results"}),Object(d.jsx)("label",{id:"name-label",children:"Name [contains]"}),Object(d.jsx)("input",{id:"name-input",type:"text",name:"name",value:k.name,placeholder:"Text String",onChange:function(e){var t=e.target.name,a=e.target.value.toLowerCase();o(n.filter((function(e){return e.name.toLowerCase().includes(a)}))),w(Object(b.a)(Object(b.a)({},k),{},Object(m.a)({},t,a)))}}),Object(d.jsx)("label",{id:"score-label",children:"Minimum Score"}),Object(d.jsx)("input",{id:"score-input",type:"number",name:"score",value:k.score,placeholder:"1-10",onChange:function(e){var t=e.target.name,a=e.target.value.toLowerCase();o(n.filter((function(e){return(+e.rating/10).toFixed(0)>=+a}))),w(Object(b.a)(Object(b.a)({},k),{},Object(m.a)({},t,a)))}}),Object(d.jsx)("label",{id:"order-label",children:"Order By"}),Object(d.jsxs)("div",{id:"order-input",children:[Object(d.jsx)("button",{id:"icon-button",type:"button",onClick:function(){return f(e=!O),void C(e);var e},children:O?Object(d.jsx)(g.b,{}):Object(d.jsx)(g.a,{})}),Object(d.jsxs)(p.a,{onSelect:C,children:[Object(d.jsx)(p.a.Toggle,{variant:"success",id:"filter-dropdown",children:j[k.order]}),Object(d.jsx)(p.a.Menu,{id:"dropdown-menu",children:j.map((function(e,t){return Object(d.jsx)(p.a.Item,{style:{display:+t===+k.order?"none":"block"},name:t,children:e},t)}))})]})]}),Object(d.jsx)("button",{id:"clear-button",type:"reset",onClick:function(){o(n),w({name:"",score:"",order:0})},children:"Clear"})]})}),Object(d.jsx)("section",{className:"game-container",children:s.map((function(e,t){return Object(d.jsx)(v,{game:e},t)}))})]})};n(74);var N=function(){return Object(d.jsx)(s.a,{children:Object(d.jsx)(j,{children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/connect_now_exercise",component:_}),Object(d.jsx)(o.a,{exact:!0,path:"/connect_now_exercise/contact",component:u})]})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),k()}},[[75,1,2]]]);
//# sourceMappingURL=main.e96051b5.chunk.js.map