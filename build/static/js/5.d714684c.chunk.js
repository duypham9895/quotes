(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{178:function(e,t,n){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},182:function(e,t,n){"use strict";n.r(t);var c=n(5),s=n(0),o=n(2),u=n(11),i=n(178),a=n.n(i),r=n(3),j=function(e){var t=e.quote,n=t||{},c=n.text,s=n.author;return t?Object(r.jsxs)("figure",{className:a.a.quote,children:[Object(r.jsx)("p",{children:c}),Object(r.jsx)("figcaption",{children:s})]}):Object(r.jsx)("p",{children:"No quote found!"})},d=n(93),b=n(24),l=n(25),f=n(26);t.default=function(){var e=Object(o.p)().quoteId,t=Object(o.n)(),n=Object(s.useState)(!1),i=Object(c.a)(n,2),a=i[0],O=i[1],h=Object(l.a)(f.e,!0),x=h.sendRequest,p=h.data,m=h.status;h.error;Object(s.useEffect)((function(){x(e)}),[e,x]),Object(s.useEffect)((function(){if(!a)return t("/quotes/".concat(e))}),[a,e,t]);return"pending"===m?Object(r.jsx)(b.a,{isLoading:!0}):p?Object(r.jsxs)(s.Fragment,{children:[Object(r.jsx)("h1",{children:"Quote Detail Page"}),Object(r.jsx)(j,{quote:p}),Object(r.jsx)("div",{className:"centered",children:Object(r.jsx)(u.b,{to:"comments",className:"btn--flat",onClick:function(){O((function(e){return!e}))},children:a?"Hidden Comments":"View Comments"})}),Object(r.jsx)(o.b,{})]}):Object(r.jsx)(d.a,{})}},93:function(e,t,n){"use strict";var c=n(11),s=n(94),o=n.n(s),u=n(3);t.a=function(){return Object(u.jsxs)("div",{className:o.a["no-quotes"],children:[Object(u.jsx)("p",{children:"No quotes found!"}),Object(u.jsx)(c.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})}},94:function(e,t,n){e.exports={"no-quotes":"NoQuotesFound_no-quotes__22USv"}}}]);
//# sourceMappingURL=5.d714684c.chunk.js.map