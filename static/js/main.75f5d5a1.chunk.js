(this["webpackJsonppalindrome-check"]=this["webpackJsonppalindrome-check"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),r=n(4),c=n.n(r),o=(n(9),n(3)),s=(n(10),n(0));var d=function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)("Fill in the form and press the button to continue."),c=Object(o.a)(r,2),d=c[0],l=c[1],h={date:0,month:0,year:0};return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("header",{children:Object(s.jsx)("h1",{children:"Is your birthdate palindrome?"})}),Object(s.jsxs)("main",{children:[Object(s.jsxs)("div",{className:"input-div",children:[Object(s.jsx)("label",{htmlFor:"dob",children:"Enter your date of birth:"}),Object(s.jsx)("input",{type:"date",name:"dob",id:"dob",onChange:function(e){a(e.target.value)}})]}),Object(s.jsx)("button",{onClick:function(){var e=n.split("-");h.date=e[2],h.month=e[1],h.year=e[0],""===n?l("You need to enter a date first to continue."):!function(e){var t=!1;return e.forEach((function(e){e===e.split("").reverse().join("")&&(t=!0)})),t}(function(e){var t=e.month+e.date+e.year,n=e.month+e.date+e.year.slice(3,4),i=e.date+e.month+e.year.slice(3,4),a=e.date+e.month+e.year,r=e.year+e.month+e.date,c=e.year.slice(3,4)+e.month+e.date;return[t,n,i,a,r,c]}(h))?l("Nay! Your birthday is not a palindrome date."):l("Yay! Your birthday is a palindrome date.")},children:"Check"}),Object(s.jsx)("div",{className:"output-div",children:d})]}),Object(s.jsxs)("footer",{children:[Object(s.jsxs)("ul",{id:"social-media-tab",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"social-media-links",href:"https://github.com/iHarryD",children:"GitHub"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"social-media-links",href:"https://www.linkedin.com/in/prashant-kumar-a97251195/",children:"LinkedIn"})})]}),Object(s.jsxs)("p",{id:"portfolio-link",children:["Website created by"," ",Object(s.jsx)("a",{href:"https://iharryd.github.io/personal-portfolio/",children:"Harry"})]})]})]})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))};c.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),l()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.75f5d5a1.chunk.js.map