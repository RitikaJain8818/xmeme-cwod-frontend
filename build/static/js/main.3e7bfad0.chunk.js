(this.webpackJsonpxmeme=this.webpackJsonpxmeme||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(4),s=c.n(a),i=(c(9),c(2)),l=(c(10),c(0));var o=function(){return Object(l.jsx)("div",{className:"loader"})};var j=function(e){var t=e.Loading,c=Object(n.useState)(void 0),r=Object(i.a)(c,2),a=r[0],s=r[1],j=Object(n.useState)(100),d=Object(i.a)(j,2),b=d[0],u=d[1],m=Object(n.useState)(!1),h=Object(i.a)(m,2),O=h[0],f=h[1],x=Object(n.useState)(!1),p=Object(i.a)(x,2),g=p[0],v=p[1],y=Object(n.useState)(""),N=Object(i.a)(y,2),S=N[0],w=N[1],C=Object(n.useState)(!1),L=Object(i.a)(C,2),k=L[0],F=(L[1],Object(n.useState)(!1)),M=Object(i.a)(F,2),E=M[0];return M[1],Object(n.useEffect)((function(){f(!0),fetch("".concat("https://ritikajain120600.pythonanywhere.com/","memes?limit=").concat(b),{method:"GET",redirect:"follow"}).then((function(e){return e.json()})).then((function(e){e.reverse(),s(e),f(!1)})).catch((function(e){return console.log("error",e)}))}),[t,b]),Object(n.useEffect)((function(){setTimeout((function(){w(""),v(!1)}),2e3)}),[k]),Object(l.jsx)("div",{class:"container",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"text-center",children:Object(l.jsxs)("p",{style:g?{color:"red",fontWeight:"bold"}:{color:"green",fontWeight:"bold"},children:[" ",S]})}),a?Object(l.jsx)(l.Fragment,{children:a.length>0?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"row",children:a.map((function(e,t){return Object(l.jsx)("div",{className:"col-lg- card",children:Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("div",{children:Object(l.jsx)("h5",{className:"card-title",children:e.name})}),Object(l.jsx)("p",{className:"card-text",children:e.caption}),Object(l.jsx)("img",{src:e.url,className:"card-img-top",alt:" Not available"})]})},t)}))}),"}"]}):Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"200px",flexDirection:"column",color:"#000",background:"#fff",borderRadius:"20px"},children:[Object(l.jsx)("p",{children:"No Memes uploaded"}),Object(l.jsxs)("p",{children:["(Be the first one to upload ",":)",")"]})]})}):Object(l.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"200px",background:"#fff",borderRadius:"20px",flexDirection:"column",overflow:"hidden"},children:[Object(l.jsx)(o,{}),Object(l.jsx)("br",{}),Object(l.jsx)("h3",{style:{overflow:"hidden"},children:"Loading..."})]}),Object(l.jsx)("br",{}),a&&a.length>0&&!E?Object(l.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){return u(b+100)},children:O?"Loading..":"Load More"})}):null]})})};var d=function(){return Object(l.jsx)("div",{className:"header_wrapper",children:Object(l.jsx)("p",{className:"header_text text-center",children:"Xmeme-Cwod"})})};var b=function(){return Object(l.jsx)("a",{href:"https://ritikajain120600.pythonanywhere.com/swagger-ui/",children:Object(l.jsx)("button",{className:"swagger_link",children:"Swagger UI"})})};var u=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(i.a)(a,2),o=s[0],u=s[1],m=Object(n.useState)(""),h=Object(i.a)(m,2),O=h[0],f=h[1],x=Object(n.useState)(!1),p=Object(i.a)(x,2),g=p[0],v=p[1],y=Object(n.useState)(!1),N=Object(i.a)(y,2),S=N[0],w=(N[1],Object(n.useState)("")),C=Object(i.a)(w,2),L=C[0],k=C[1];return Object(n.useEffect)((function(){setTimeout((function(){k("")}),2e3)}),[S,g]),Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)(d,{}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{style:{overflow:"hidden",color:"#fff"},children:"\xa0\xa0\xa0Upload Meme"}),Object(l.jsxs)("form",{className:"meme_form",onSubmit:function(e){e.preventDefault(),v(!0);var t=new Headers;t.append("Content-Type","application/json");var n={method:"POST",headers:t,body:JSON.stringify({name:c,caption:o,url:O}),redirect:"follow"};fetch("".concat("https://ritikajain120600.pythonanywhere.com/","memes"),n).then((function(e){return e.json()})).then((function(e){console.log(e),k("Uploaded Meme Successfully !!"),r(""),u(""),f(""),v(!1)})).catch((function(e){return console.log("error",e)}))},children:[Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"name",className:"form-label labelHeading",name:"name",children:"Meme Owner"}),Object(l.jsx)("input",{for:"name",type:"text",placeholder:"Enter your full name",className:"form-control",id:"name",required:!0,value:c,onChange:function(e){return r(e.target.value)}})]}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("label",{htmlFor:"caption",className:"form-label labelHeading",name:"caption",children:"Caption"}),Object(l.jsx)("input",{for:"caption",type:"text",placeholder:"Be creative with the caption",className:"form-control",id:"caption",required:!0,value:o,onChange:function(e){return u(e.target.value)}})]}),Object(l.jsx)("label",{htmlFor:"meme_url",className:"form-label labelHeading",name:"url",children:"Meme URL"}),Object(l.jsxs)("div",{className:"input-group mb-3",children:[Object(l.jsx)("input",{for:"url",type:"text",placeholder:"Enter URL of your meme here",className:"form-control ",id:"meme_url",required:!0,value:O,onChange:function(e){return f(e.target.value)}}),Object(l.jsx)("div",{className:"input-group-append",children:Object(l.jsx)("button",{type:"submit",className:"btn btn-success",children:g?"Loading...":"Submit Meme"})})]}),Object(l.jsx)("span",{style:S?{color:"red"}:{color:"green"},children:L})]})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{children:Object(l.jsx)(j,{Loading:g})}),Object(l.jsx)(b,{})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),m()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.3e7bfad0.chunk.js.map