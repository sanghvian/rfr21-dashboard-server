(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{183:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),s=a.n(n),r=a(66),i=a.n(r),l=(a(78),a.p+"static/media/ather.8f960213.png"),o=a(71);function d(){return Object(c.jsxs)(o.a.div,{initial:{y:-200,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2,duration:.4,type:"spring",stiffness:120,damping:10,mass:.2},className:"navbar",children:[Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)("img",{src:l,alt:"Ather"})}),Object(c.jsxs)("div",{className:"brand",children:[Object(c.jsx)("span",{className:"text dash",children:"DASH"}),Object(c.jsx)("span",{className:"text",children:"BOARD"})]}),Object(c.jsxs)("div",{className:"navLinks",children:[Object(c.jsx)("a",{href:"/",children:"Dash"}),Object(c.jsx)("a",{href:"/profile",children:"Profile"}),Object(c.jsx)("a",{href:"/about",children:"About"})]})]})}var j=a(4),u=a(67),h=a(19),b="SET_X_DETAILS",m="SET_GRAPH_DETAILS",O="energy",p=Object(u.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{idRqst:["EV20201"],dateRqst:["01/01/2020","28/12/2020"],timeRqst:["00:00:00","23:59:59"],plotRqst:O},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(h.a)(Object(h.a)({},e),{},{idRqst:t.payload.idRqst,dateRqst:t.payload.dateRqst,timeRqst:t.payload.timeRqst});case m:return Object(h.a)(Object(h.a)({},e),{},{plotRqst:t.payload.graph});default:return e}}));function x(){var e=function(e){e.preventDefault(),console.log("Form was just submitted");var a=t(O,v,A,E,Z,P,"/","date"),c=t(z,Y,J,$,ce,ie,":","time"),n={idRqst:[r,d],dateRqst:a,timeRqst:c};p.dispatch(function(e){return{type:b,payload:e}}(n))},t=function(e,t,a,c,n,s,r,i){switch(i){case"date":return""===a&&(a="01"),""===n&&(n="01"),""===c&&(c="12"),""===s&&(s="28"),["".concat(n).concat(r).concat(a).concat(r).concat(e),"".concat(s).concat(r).concat(c).concat(r).concat(t)];case"time":return""===e&&(e="00"),""===t&&(t="23"),""===a&&(a="00"),""===c&&(c="59"),""===n&&(n="00"),""===s&&(s="59"),["".concat(e).concat(r).concat(a).concat(r).concat(n),"".concat(t).concat(r).concat(c).concat(r).concat(s)];default:return 0}},a=Object(n.useState)(""),s=Object(j.a)(a,2),r=s[0],i=s[1],l=Object(n.useState)(""),o=Object(j.a)(l,2),d=o[0],u=o[1],h=Object(n.useState)(""),m=Object(j.a)(h,2),O=m[0],x=m[1],f=Object(n.useState)(""),g=Object(j.a)(f,2),v=g[0],N=g[1],y=Object(n.useState)(""),w=Object(j.a)(y,2),A=w[0],S=w[1],I=Object(n.useState)(""),R=Object(j.a)(I,2),E=R[0],T=R[1],k=Object(n.useState)(""),V=Object(j.a)(k,2),Z=V[0],G=V[1],M=Object(n.useState)(""),F=Object(j.a)(M,2),P=F[0],L=F[1],C=Object(n.useState)(""),W=Object(j.a)(C,2),z=W[0],X=W[1],U=Object(n.useState)(""),D=Object(j.a)(U,2),Y=D[0],q=D[1],B=Object(n.useState)(""),H=Object(j.a)(B,2),J=H[0],Q=H[1],K=Object(n.useState)(""),_=Object(j.a)(K,2),$=_[0],ee=_[1],te=Object(n.useState)(""),ae=Object(j.a)(te,2),ce=ae[0],ne=ae[1],se=Object(n.useState)(""),re=Object(j.a)(se,2),ie=re[0],le=re[1];return Object(c.jsxs)("div",{className:"input-form",children:[Object(c.jsx)("h2",{children:"Input Details"}),Object(c.jsxs)("form",{onSubmit:function(t){return e(t)},className:"form",children:[Object(c.jsxs)("div",{className:"date-duration",children:[Object(c.jsx)("label",{htmlFor:"date-duration",className:"form-label",children:"Select Day, Date, Time"}),Object(c.jsxs)("p",{className:"input-info",children:["The vehicle data will be analyzed, averaged and graphed as per the specified day, month or year time interval. ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{})," Eg : Between 1/2/2020 and 3/2/2020 "]}),Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"YEAR"}),Object(c.jsx)("th",{children:"MONTH"}),Object(c.jsx)("th",{children:"DAY"})]})}),Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{children:[Object(c.jsx)("p",{children:"Enter the start and end year in YYYY format"}),Object(c.jsx)("input",{onChange:function(e){x(e.target.value)},value:O,required:!0,type:"number",min:"2001",max:"2020",name:"start-year",id:"start-year",className:"form-input",placeholder:"Eg : 2019"}),Object(c.jsx)("input",{onChange:function(e){N(e.target.value)},value:v,required:!0,type:"number",min:"2001",max:"2020",name:"end-year",id:"end-year",className:"form-input",placeholder:"Eg : 2020"})]}),Object(c.jsxs)("td",{children:[Object(c.jsx)("p",{children:"Enter the start and end month in MM format"}),Object(c.jsx)("input",{onChange:function(e){S(e.target.value)},value:A,type:"number",min:"1",max:"12",name:"start-month",id:"start-month",className:"form-input",placeholder:"Eg : 02"}),Object(c.jsx)("input",{onChange:function(e){T(e.target.value)},value:E,type:"number",min:"1",max:"12",name:"end-month",id:"end-month",className:"form-input",placeholder:"Eg : 03"})]}),Object(c.jsxs)("td",{children:[Object(c.jsx)("p",{children:"Enter the start and end day in DD format"}),Object(c.jsx)("input",{onChange:function(e){G(e.target.value)},value:Z,type:"number",min:"1",max:"28",name:"start-day",id:"start-day",className:"form-input",placeholder:"Eg : 01"}),Object(c.jsx)("input",{onChange:function(e){L(e.target.value)},value:P,type:"number",min:"1",max:"28",name:"end-day",id:"end-day",className:"form-input",placeholder:"Eg : 18"})]})]})})]})]}),Object(c.jsxs)("div",{className:"vehicle-id",children:[Object(c.jsx)("label",{htmlFor:"vehicle-id",className:"form-label",children:"Select Vehicle(s)"}),Object(c.jsx)("p",{className:"input-info",children:"Enter start and end vehicle IDs of the range of vehicles that you wish to evaluate "}),Object(c.jsxs)("div",{className:"vehicle-inputs",children:[Object(c.jsx)("label",{htmlFor:"start-vehicle-id",className:"form-label",children:"Set Start Vehicle ID"}),Object(c.jsx)("label",{htmlFor:"end-vehicle-id",className:"form-label",children:"Set End Vehicle ID"}),Object(c.jsx)("input",{onChange:function(e){i(e.target.value)},value:r,required:!0,type:"text",name:"start-vehicle-id",id:"start-vehicle-id",className:"form-input",placeholder:"Eg : EV20201"}),Object(c.jsx)("input",{onChange:function(e){u(e.target.value)},value:d,required:!0,type:"text",name:"end-vehicle-id",id:"end-vehicle-id",className:"form-input",placeholder:"Eg : EV20203"})]}),Object(c.jsxs)("p",{className:"input-info",children:[" ",Object(c.jsx)("br",{})," Eg : For range = EV20201, EV20202, EV20203 ",Object(c.jsx)("br",{}),"Start Vehicle ID = EV20201 ",Object(c.jsx)("br",{})," End Vehicle ID = EV20203 "]})]}),Object(c.jsxs)("div",{className:"time-duration",children:[Object(c.jsx)("p",{className:"form-label",children:"Select Time Duration"}),Object(c.jsxs)("p",{className:"input-info",children:["Given a day, the data can be visualized differently as per different time intervals. For date durations bigger than day, entire day's data will be returned ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{})," Eg : Between 14:30:30 and 15:30:00 on 13/12/2020 "]}),Object(c.jsxs)("table",{children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"HOUR"}),Object(c.jsx)("th",{children:"MINUTE"}),Object(c.jsx)("th",{children:"SECOND"})]})}),Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsxs)("td",{children:[Object(c.jsx)("p",{children:"Enter the start and end hour in HH format"}),Object(c.jsx)("input",{onChange:function(e){X(e.target.value)},value:z,type:"number",min:"01",max:"24",name:"start-hr",id:"start-hr",className:"form-input",placeholder:"Eg : 02"}),Object(c.jsx)("input",{onChange:function(e){q(e.target.value)},value:Y,type:"number",min:"01",max:"24",name:"end-hr",id:"end-hr",className:"form-input",placeholder:"Eg : 16"})]}),Object(c.jsxs)("td",{children:[Object(c.jsx)("p",{children:"Enter the start and end minute in MM format"}),Object(c.jsx)("input",{onChange:function(e){Q(e.target.value)},value:J,type:"number",min:"1",max:"60",name:"start-min",id:"start-min",className:"form-input",placeholder:"Eg : 02"}),Object(c.jsx)("input",{onChange:function(e){ee(e.target.value)},value:$,type:"number",min:"1",max:"60",name:"end-min",id:"end-min",className:"form-input",placeholder:"Eg : 03"})]}),Object(c.jsxs)("td",{children:[Object(c.jsx)("p",{children:"Enter the start and end second in SS format"}),Object(c.jsx)("input",{onChange:function(e){ne(e.target.value)},value:ce,type:"number",min:"1",max:"60",name:"start-sec",id:"start-sec",className:"form-input",placeholder:"Eg : 01"}),Object(c.jsx)("input",{onChange:function(e){le(e.target.value)},value:ie,type:"number",min:"1",max:"60",name:"end-sec",id:"end-sec",className:"form-input",placeholder:"Eg : 18"})]})]})})]})]}),Object(c.jsxs)("div",{className:"submit-n-err",children:[Object(c.jsx)("div",{className:"error-box",children:"This is where errors will be shown"}),Object(c.jsx)("button",{type:"submit",className:"submit-btn",children:"Submit"})]})]})]})}var f=a(22),g=a(24),v=a(8),N=a.n(v),y=a(9),w=function(){var e=Object(y.a)(N.a.mark((function e(t){var a,c,n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(p.getState()),a=JSON.stringify(t),e.prev=2,e.next=5,fetch("".concat("https://rfr-21-dashboard.herokuapp.com/","/api"),{method:"POST",headers:{"Content-Type":"application/json"},body:a});case 5:return c=e.sent,e.next=8,c.json();case 8:return n=e.sent,e.abrupt("return",n);case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}();var A=s.a.createContext(),S=function(){return Object(n.useContext)(A)};function I(e){var t=e.children,a=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(j.a)(s,2),i=r[0],l=r[1],o={labels:a,datasets:i},d=function(){var e=Object(y.a)(N.a.mark((function e(t){var a,n,s,r,i,d,u;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("I am about to make a query....."),a=t.idRqst,n=t.plotRqst,s=Object(j.a)(a,2),r=s[0],i=s[1],e.next=5,w(t);case 5:d=e.sent,u=Array.from(d),console.log(u),c(u.map((function(e){return e.xaxis}))),r===i?(l([{label:"".concat(n," vs time"),borderColor:"#30FF00",backgroundColor:"#30FF00",data:u.map((function(e){return e.mean}))}]),console.log(o)):l([{label:"Minimum",borderColor:"#30FF00",backgroundColor:"#30FF00",data:u.map((function(e){return e.min}))},{label:"Maximum",borderColor:"#47d7ff",backgroundColor:"#47d7ff",data:u.map((function(e){return e.max}))},{label:"Mean",borderColor:"#4747ff",backgroundColor:"#4747ff",data:u.map((function(e){return e.mean}))}]);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return p.subscribe((function(){var e=p.getState();d(e)}))})),o}();return Object(c.jsx)(A.Provider,{value:a,children:t})}function R(){var e=S();return Object(c.jsx)("div",{className:"chart-container",children:Object(c.jsx)(g.Line,{className:"the-actual-chart",data:e,height:500,width:1025,options:{maintainAspectRatio:!1}})})}function E(){var e=function(e){console.log(e),p.dispatch({type:m,payload:{graph:e}})};return Object(c.jsxs)("div",{className:"graph-container",children:[Object(c.jsx)("h2",{children:"GRAPH"}),Object(c.jsxs)("table",{className:"graph-info",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{className:"left-top",children:"Meaning"}),Object(c.jsx)("th",{children:"Y-Axis"}),Object(c.jsx)("th",{className:"right-top",children:"X-Axis"})]})}),Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Indicates battery charge remaining over time"}),Object(c.jsx)("td",{children:"SOC (State of charge)"}),Object(c.jsx)("td",{children:"Time"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Indicates energy gained while braking over time"}),Object(c.jsx)("td",{children:"E Regen"}),Object(c.jsx)("td",{children:"Time"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Indicates temperature of battery over time"}),Object(c.jsx)("td",{children:"Battery temp"}),Object(c.jsx)("td",{children:"Time"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Indicates energy consumed over time"}),Object(c.jsx)("td",{children:"E cons"}),Object(c.jsx)("td",{children:"Time"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Indicates distance travelled over time"}),Object(c.jsx)("td",{children:"Dist travelled"}),Object(c.jsx)("td",{children:"Time"})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{className:"left-bottom",children:"Indicates number of charging, discharging events over time"}),Object(c.jsx)("td",{children:"Discharge cycles"}),Object(c.jsx)("td",{className:"right-bottom",children:"Time"})]})]})]}),Object(c.jsxs)("div",{className:"graph",children:[Object(c.jsxs)("div",{className:"graph-plot section-1",children:[Object(c.jsx)("h3",{children:"Graph Plot"}),Object(c.jsx)("div",{className:"canvas-container",children:Object(c.jsx)(R,{})})]}),Object(c.jsxs)("div",{className:"graph-options section-2",children:[Object(c.jsx)("h3",{children:"Choose a graph"}),Object(c.jsxs)("div",{className:"choose-graph",children:[Object(c.jsxs)("button",{onClick:function(){return e("soc")},className:"graph-btn",children:[Object(c.jsx)(f.a,{icon:"bolt"}),"\xa0 SOC ",Object(c.jsx)("span",{children:"VS"})," time"]}),Object(c.jsxs)("button",{onClick:function(){return e("temperature")},className:"graph-btn",children:[Object(c.jsx)(f.a,{icon:"car-battery"}),"\xa0 Battery temp ",Object(c.jsx)("span",{children:"VS"})," time"]}),Object(c.jsxs)("button",{onClick:function(){return e("regen")},className:"graph-btn",children:[Object(c.jsx)(f.a,{icon:"atom"}),"\xa0 E Regen ",Object(c.jsx)("span",{children:"VS"})," time"]}),Object(c.jsxs)("button",{onClick:function(){return e("distance")},className:"graph-btn",children:[Object(c.jsx)(f.a,{icon:"directions"}),"\xa0 Dist travelled ",Object(c.jsx)("span",{children:"VS"})," time "]}),Object(c.jsxs)("button",{onClick:function(){return e(O)},className:"graph-btn",children:[Object(c.jsx)(f.a,{icon:"battery-half"}),"\xa0 Energy cons ",Object(c.jsx)("span",{children:"VS"})," time "]}),Object(c.jsxs)("button",{onClick:function(){return e("charging")},className:"graph-btn",children:[Object(c.jsx)(f.a,{icon:"spinner"}),"\xa0 Discharge cycles ",Object(c.jsx)("span",{children:"VS"})," time"]})]})]})]})]})}function T(){var e=S();return Object(c.jsx)("div",{className:"chart-container",children:Object(c.jsx)(g.Bar,{className:"the-actual-chart",data:e,height:300,width:800,options:{maintainAspectRatio:!1}})})}function k(){var e=S();return Object(c.jsx)("div",{className:"chart-container",children:Object(c.jsx)(g.Radar,{className:"the-actual-chart",data:e,height:325,width:800,options:{maintainAspectRatio:!1,legend:{display:!1}}})})}function V(){return Object(c.jsxs)("div",{className:"conclusion",children:[Object(c.jsx)("h2",{children:"CONCLUSION"}),Object(c.jsxs)("div",{className:"graph-conclude",children:[Object(c.jsxs)("div",{className:"graph-plot section-2",children:[Object(c.jsx)("h3",{children:"Analysis"}),Object(c.jsx)("div",{className:"canvas-container",children:Object(c.jsx)(k,{})})]}),Object(c.jsxs)("div",{className:"graph-plot section-1",children:[Object(c.jsx)("h3",{children:"Result"}),Object(c.jsx)("div",{className:"canvas-container",children:Object(c.jsx)(T,{})})]})]})]})}var Z=a(18);function G(){return Object(c.jsxs)("div",{className:"footer",children:["The Dashboard Project. By ",Object(c.jsx)("a",{className:"by-rfr",target:"_blank",rel:"noreferrer",href:Z.a.url,children:" \xa0 Raftar Formula Racing, IIT Madras "})]})}var M=a(23);function F(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d,{}),Object(c.jsx)(x,{}),Object(c.jsxs)(I,{children:[Object(c.jsx)(E,{}),Object(c.jsx)(V,{})]}),Object(c.jsx)(G,{})]})}Z.c.add(M.d,M.b,M.f,M.e,M.a,M.c);var P=a(185),L=a(69),C=(a(179),L.a.initializeApp({apiKey:"AIzaSyDYcXQgPeCCIgXPRGDmZGDS8oy2K2MQcfg",authDomain:"rfr21-dashboard-auth.firebaseapp.com",projectId:"rfr21-dashboard-auth",storageBucket:"rfr21-dashboard-auth.appspot.com",messagingSenderIdL:"522423065115",appId:"1:522423065115:web:cce12ab2b5afae705576be"})),W=C.auth(),z=s.a.createContext(),X=function(){return Object(n.useContext)(z)};function U(e){var t=e.children,a=Object(n.useState)(),s=Object(j.a)(a,2),r=s[0],i=s[1],l=Object(n.useState)(!0),o=Object(j.a)(l,2),d=o[0],u=o[1],h={currentUser:r,signup:function(e,t){return W.createUserWithEmailAndPassword(e,t)},login:function(e,t){return W.signInWithEmailAndPassword(e,t)},updateEmail:function(e){return W.updateEmail(e)},updatePassword:function(e){return r.updatePassword(e)},passwordReset:function(e){return r.sendPasswordResetEmail(e)},logout:function(){return W.signOut()}};return Object(n.useEffect)((function(){return W.onAuthStateChanged((function(e){i(e),u(!1)}))}),[]),Object(c.jsx)(z.Provider,{value:h,children:!d&&t})}var D=a(7),Y=a(11);function q(e){var t=e.children;return Object(c.jsx)("div",{className:"full-auth-container",children:Object(c.jsx)("div",{className:"auth-container",children:t})})}var B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAACWCAYAAAGkxCpKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIxLTAxLTA4VDE3OjQ4OjM1KzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMS0wMS0wOFQxNzo1MjoxNyswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wMS0wOFQxNzo1MjoxNyswNTozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgcGhvdG9zaG9wOkhpc3Rvcnk9IjIwMjEtMDEtMDhUMTc6NDk6MzYrMDU6MzAmI3g5O0ZpbGUgYXRoZXIyLnBuZyBvcGVuZWQmI3hBOzIwMjEtMDEtMDhUMTc6NTI6MTcrMDU6MzAmI3g5O0ZpbGUgQzpcVXNlcnNcYW5raXRcRGVza3RvcFxQcmdTY3JcV2ViRGV2XFNjcmlwdHNcV2ViLURldmVsb3BtZW50LVByb2plY3RzXEZ1bGwgU3RhY2sgUHJvamVjdHNccmZyLTIxLWRhc2hib2FyZFxjbGllbnRcc3JjXGltZ1xhdGhlcjIucG5nIHNhdmVkJiN4QTsiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OWI0ZWMxNGEtNGM3Ny01NDQ0LThkZDktZTExZTliM2YwOTVhIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjliNGVjMTRhLTRjNzctNTQ0NC04ZGQ5LWUxMWU5YjNmMDk1YSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjliNGVjMTRhLTRjNzctNTQ0NC04ZGQ5LWUxMWU5YjNmMDk1YSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OWI0ZWMxNGEtNGM3Ny01NDQ0LThkZDktZTExZTliM2YwOTVhIiBzdEV2dDp3aGVuPSIyMDIxLTAxLTA4VDE3OjQ4OjM1KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+kAk5uwAAEmpJREFUeJztnU9IHFccx7/j9mA9CBGFmlaqbWoOVdtLmoaQ0g0kuIX2EEsLXrx4TCAXPSgEtLcaUOhJLaU5RHqIUhpwyy6YtlKUkoO7EYp7cUHqwm607IK7C3V5PThj9s/8ee/Nmzczu/uBgdTu/N7v/eY3v/dn3vs9EEJgdu3t7RGNxcVFYvZbhRCCakqlEgkEAjV/r0Kp+YOOsFrplEJbbAqquKdF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",H=a.p+"static/media/black-spinner.696cd6cc.gif";function J(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),s=X().signup,r=Object(n.useState)(""),i=Object(j.a)(r,2),l=i[0],o=i[1],d=Object(n.useState)(!1),u=Object(j.a)(d,2),h=u[0],b=u[1],m=Object(D.g)(),O=function(){var c=Object(y.a)(N.a.mark((function c(n){return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(n.preventDefault(),console.log("Form was just submitted !"),t.current.value===a.current.value){c.next=4;break}return c.abrupt("return",o("Passwords do not match"));case 4:return c.prev=4,o(""),b(!0),c.next=9,s(e.current.value,t.current.value);case 9:m.push("/"),c.next=16;break;case 12:c.prev=12,c.t0=c.catch(4),console.log(c.t0.message),o("Failed to create an account for you");case 16:b(!1);case 17:case"end":return c.stop()}}),c,null,[[4,12]])})));return function(e){return c.apply(this,arguments)}}();return Object(c.jsxs)(q,{children:[Object(c.jsxs)("div",{className:"form-container",children:[Object(c.jsxs)("div",{className:"auth-heading",children:[Object(c.jsx)("img",{src:B,alt:"ather-logo"}),Object(c.jsx)("h2",{children:"Sign Up"})]}),l&&Object(c.jsx)("p",{className:"danger",children:l}),Object(c.jsxs)("form",{onSubmit:O,children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email"}),Object(c.jsx)("input",{type:"email",id:"email",ref:e,required:!0}),Object(c.jsx)("label",{htmlFor:"password",children:"Password"}),Object(c.jsx)("input",{type:"password",id:"password",ref:t,required:!0}),Object(c.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(c.jsx)("input",{type:"password",id:"confirmPassword",ref:a,required:!0}),Object(c.jsx)(P.a,{disabled:h,className:"authen-button",type:"submit",children:h?Object(c.jsx)("img",{alt:"ather-logo",src:H,style:{height:"16px",width:"16px"}}):"Submit"})]})]}),Object(c.jsxs)("div",{className:"alternate-auth",children:["Already have an account ? ",Object(c.jsx)(Y.b,{className:"alternate-auth-link",to:"/login",children:"Login"})]})]})}function Q(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=X().login,s=Object(n.useState)(""),r=Object(j.a)(s,2),i=r[0],l=r[1],o=Object(n.useState)(!1),d=Object(j.a)(o,2),u=d[0],h=d[1],b=Object(D.g)(),m=function(){var c=Object(y.a)(N.a.mark((function c(n){return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n.preventDefault(),c.prev=1,l(""),h(!0),c.next=6,a(e.current.value,t.current.value);case 6:console.log("Login Successful !"),b.push("/"),c.next=14;break;case 10:c.prev=10,c.t0=c.catch(1),console.log(c.t0.message),l("Failed to log you in");case 14:h(!1);case 15:case"end":return c.stop()}}),c,null,[[1,10]])})));return function(e){return c.apply(this,arguments)}}();return Object(c.jsxs)(q,{children:[Object(c.jsxs)("div",{className:"form-container",children:[Object(c.jsxs)("div",{className:"auth-heading",children:[Object(c.jsx)("img",{src:B,alt:"ather-logo"}),Object(c.jsx)("h2",{children:"Login"})]}),i&&Object(c.jsx)("p",{className:"danger",children:i}),Object(c.jsxs)("form",{onSubmit:m,children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email"}),Object(c.jsx)("input",{type:"email",id:"email",ref:e,required:!0}),Object(c.jsx)("label",{htmlFor:"password",children:"Password"}),Object(c.jsx)("input",{type:"password",id:"password",ref:t,required:!0}),Object(c.jsx)(P.a,{disabled:u,className:"authen-button",type:"submit",children:u?Object(c.jsx)("img",{alt:"ather-logo",src:H,style:{height:"16px",width:"16px"}}):"Submit"})]})]}),Object(c.jsxs)("div",{className:"alternate-auth",children:["Don't have an account ? ",Object(c.jsx)(Y.b,{className:"alternate-auth-link",to:"/signup",children:"Sign Up"}),Object(c.jsx)(Y.b,{style:{display:"block",marginTop:"1rem"},className:"alternate-auth-link",to:"/forgot-password",children:"Forgot Password"})]})]})}function K(){var e=Object(n.useRef)(),t=X().resetPassword,a=Object(n.useState)(""),s=Object(j.a)(a,2),r=s[0],i=s[1],l=Object(n.useState)(!1),o=Object(j.a)(l,2),d=o[0],u=o[1],h=function(){var a=Object(y.a)(N.a.mark((function a(c){return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,i(""),u(!0),a.next=6,t(e.current.value);case 6:console.log("Login Successful !"),i("Password reset email sent"),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(1),console.log(a.t0.message),i("Failed to reset password");case 14:u(!1);case 15:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}();return Object(c.jsxs)(q,{children:[Object(c.jsxs)("form",{className:"form-container",children:[Object(c.jsxs)("div",{className:"auth-heading",children:[Object(c.jsx)("img",{src:B,alt:"ather-logo"}),Object(c.jsx)("h2",{children:"Password Reset"})]}),r&&Object(c.jsx)("p",{className:"danger",children:r}),Object(c.jsxs)("form",{onSubmit:h,children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email"}),Object(c.jsx)("input",{type:"email",input:"email",ref:e,required:!0}),Object(c.jsx)(P.a,{disabled:d,className:"authen-button",type:"submit",children:d?Object(c.jsx)("img",{alt:"ather-logo",src:H,style:{height:"16px",width:"16px"}}):"Submit"})]})]}),Object(c.jsxs)("div",{className:"alternate-auth",children:["Need an account ? ",Object(c.jsx)(Y.b,{className:"alternate-auth-link",to:"/signup",children:"Sign Up."})]})]})}var _=a(72);function $(e){var t=e.component,a=Object(_.a)(e,["component"]),n=X().currentUser;return Object(c.jsx)(D.b,Object(h.a)(Object(h.a)({},a),{},{render:function(e){return n?Object(c.jsx)(t,Object(h.a)({},e)):Object(c.jsx)(D.a,{to:"/login"})}}))}function ee(){var e=Object(n.useState)(),t=Object(j.a)(e,2),a=t[0],s=t[1],r=X(),i=r.logout,l=r.currentUser,o=Object(D.g)(),d=function(){var e=Object(y.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,i();case 4:o.push("/login"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),s("Failed to log you out"),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)(q,{children:Object(c.jsxs)("div",{className:"form-container",children:[Object(c.jsxs)("div",{className:"auth-heading",children:[Object(c.jsx)("img",{src:B,alt:"ather-logo"}),Object(c.jsx)("h2",{children:"Profile"})]}),a&&Object(c.jsx)("p",{className:"danger",children:a}),l&&Object(c.jsxs)("h2",{style:{width:"100%",textAlign:"center",fontSize:"1.4rem",padding:"2rem 1rem"},children:["Email : ",l.email]}),Object(c.jsx)(P.a,{className:"authen-button",to:"/login",variant:"link",onClick:d,children:"Logout"}),Object(c.jsx)(P.a,{className:"authen-button",style:{marginTop:"2rem"},to:"/update-profile",variant:"link",onClick:function(){o.push("/update-profile")},children:"Update Profile"}),Object(c.jsx)(P.a,{className:"authen-button",style:{marginTop:"2rem"},to:"/",variant:"link",onClick:function(){o.push("/")},children:"Back to Dashboard"})]})})}function te(){var e=Object(n.useRef)(),t=Object(n.useRef)(),a=Object(n.useRef)(),s=X(),r=s.currentUser,i=s.updateEmail,l=s.updatePassword,o=Object(n.useState)(""),d=Object(j.a)(o,2),u=d[0],h=d[1],b=Object(n.useState)(!1),m=Object(j.a)(b,2),O=m[0],p=m[1],x=Object(D.g)(),f=function(){var c=Object(y.a)(N.a.mark((function c(n){var s;return N.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(n.preventDefault(),console.log("Form was just submitted !"),t.current.value===a.current.value){c.next=4;break}return c.abrupt("return",h("Passwords do not match"));case 4:s=[],e.current.value!==r.email&&s.push(i(e.current.value)),t.current.value&&s.push(l(t.current.value)),s.all(s).then((function(){x.push("/")})).catch((function(e){console.log(e),h("Failed to update account")}));try{h(""),p(!0),x.push("/")}catch(u){console.log(u.message),h("Failed to create an account for you")}p(!1);case 10:case"end":return c.stop()}}),c)})));return function(e){return c.apply(this,arguments)}}();return Object(c.jsxs)(q,{children:[Object(c.jsxs)("div",{className:"form-container",children:[Object(c.jsxs)("div",{className:"auth-heading",children:[Object(c.jsx)("img",{src:B,alt:"ather-logo"}),Object(c.jsx)("h2",{children:"Update Profile"})]}),u&&Object(c.jsx)("p",{className:"danger",children:u}),Object(c.jsxs)("form",{onSubmit:f,children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email"}),Object(c.jsx)("input",{type:"email",id:"email",ref:e,required:!0}),Object(c.jsx)("label",{htmlFor:"password",children:"Password"}),Object(c.jsx)("input",{placeholder:"Leave blank to keep the same",type:"password",id:"password",ref:t,required:!0}),Object(c.jsx)("label",{htmlFor:"password",children:"Confirm Password"}),Object(c.jsx)("input",{placeholder:"Leave blank to keep the same",type:"password",id:"password",ref:a,required:!0}),Object(c.jsx)(P.a,{disabled:O,className:"authen-button",type:"submit",children:O?Object(c.jsx)("img",{alt:"spinner",src:H,style:{height:"16px",width:"16px"}}):"Submit"})]})]}),Object(c.jsx)("div",{className:"alternate-auth",children:Object(c.jsx)(Y.b,{className:"alternate-auth-link",to:"/",children:"Cancel"})})]})}function ae(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(d,{}),Object(c.jsx)("div",{children:"The data that is used for testing the Dashboard was generated using the velocity data that we collected using a sensor data acquisition tool. This velocity data using the sensors of the phone as we went for drives. This data is then logged and was converted to the suitable format so that the postgreSQL database could be updated. Using the velocity data, further more information such as acceleration and other parameters were determined. For producing data for parameters such as battery voltage and SOC, we used random initial conditions complying with the general physical constraints of real life usage. The power usage was calculated using the acceleration data. The mass of the vehicle combined with the driver was assumed to be 100 kg for the calculation. The regenerative braking efficiency was assumed to be 0.45 throughout for simplification. All these manipulations were done because in the current situation we cannot collect data using the traditional method of driving an EV and logging data from it. All the generated data was made consistent with the real life situations. Charging and Discharging parameters were manually added to the data file. Later this data is transferred to the Remote postgreSQL database using TCP IP protocol whenever the data logger (our mobile phones in this case for testing purposes) is connected through the internet with a bandwidth suiting atleast 100 kbps is available. The data was collected for 3 days, for 3 different vehicle IDs, and for each day data for about 9 minutes was generated. The data collection frequency was set to 1Hz for ease. This frequency can also be made higher, but this would not affect the system in any way. MATLAB codes and filters were used to remove and eliminate the outliers from the collected data."})]})}var ce=function(){return Object(c.jsx)(Y.a,{children:Object(c.jsx)(U,{children:Object(c.jsxs)(D.d,{children:[Object(c.jsx)($,{exact:!0,path:"/",component:F}),Object(c.jsx)($,{exact:!0,path:"/about",component:ae}),Object(c.jsx)($,{exact:!0,path:"/profile",component:ee}),Object(c.jsx)($,{exact:!0,path:"/update-profile",component:te}),Object(c.jsx)(D.b,{exact:!0,path:"/signup",component:J}),Object(c.jsx)(D.b,{exact:!0,path:"/login",component:Q}),Object(c.jsx)(D.b,{exact:!0,path:"/forgot-password",component:K})]})})})};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(ce,{})}),document.getElementById("root"))},78:function(e,t,a){}},[[183,1,2]]]);
//# sourceMappingURL=main.7ec00601.chunk.js.map