(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},22:function(e,t,a){e.exports=a(37)},28:function(e,t,a){},29:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),i=(a(28),a(3)),l=a(4),s=a(6),m=a(5),u=a(7),d=a(38),h=a(40),p=a(20),v=(a(14),a(39)),b=(a(29),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return"/"==window.location.pathname?r.a.createElement("div",{className:"HeaderDiv"},r.a.createElement("div",{className:"HeaderInnerDiv"},r.a.createElement(v.a,{to:"/",className:"HomeNav",style:{borderBottom:"1px solid",borderBottomColor:"red",paddingBottom:"1%"}},"Home"),r.a.createElement(v.a,{to:"/projects",className:"ProjectsNav"},"Projects"),r.a.createElement(v.a,{to:"/info",className:"InfoNav"},"Info"))):"/info"==window.location.pathname?r.a.createElement("div",{className:"HeaderDiv"},r.a.createElement("div",{className:"HeaderInnerDiv"},r.a.createElement(v.a,{to:"/",className:"HomeNav"},"Home"),r.a.createElement(v.a,{to:"/projects",className:"ProjectsNav"},"Projects"),r.a.createElement(v.a,{to:"/info",className:"InfoNav",style:{borderBottom:"1px solid",borderBottomColor:"red",paddingBottom:"1%"}},"Info"))):"/projects"==window.location.pathname||"/grader"==window.location.pathname?r.a.createElement("div",{className:"HeaderDiv"},r.a.createElement("div",{className:"HeaderInnerDiv"},r.a.createElement(v.a,{to:"/",className:"HomeNav"},"Home"),r.a.createElement(v.a,{to:"/projects",className:"ProjectsNav",style:{borderBottom:"1px solid",borderBottomColor:"red",paddingBottom:"1%"}},"Projects"),r.a.createElement(v.a,{to:"/info",className:"InfoNav"},"Info"))):void 0}}]),t}(n.Component)),f=(a(33),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"FooterDiv"},r.a.createElement("div",{className:"FooterInnerDiv"},r.a.createElement("a",{href:"https://github.com/bagcilar",className:"GitNav",target:"_blank"},"GitHub"),r.a.createElement("a",{href:"https://ca.linkedin.com/in/baris-bagcilar-361b42108",className:"LinkNav",target:"_blank"},"Linkedin")))}}]),t}(n.Component));a(34);var E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement("div",{className:"HomeUpperSection"},r.a.createElement("div",{className:"WelcomeMessageDiv"},r.a.createElement("p",{id:"timeGreeting",align:"center"},function(){var e="",t=(new Date).getHours();return t>=12&&t<=17?e="Good Afternoon!":t>=17&&t<=24?e="Good Evening!":t<=12&&(e="Good Morning!"),e}()),r.a.createElement("p",{id:"welcomeMessage",align:"center"},"welcome to barisbc.com"),r.a.createElement("div",{class:"ui divider",id:"homePageUpperDivider"}))),r.a.createElement("div",{className:"HomeLowerSection"},r.a.createElement("div",{className:"GreetingMessageDiv"},r.a.createElement("p",{id:"firstLine",align:"center"},"on this website, I host some projects created for learning purposes"),r.a.createElement("p",{id:"thirdLine",align:"center"},"stay tuned for more to come..."))))}}]),t}(n.Component),g=(a(35),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ProjectsDiv"},r.a.createElement("div",{clasName:"ProjectList"},r.a.createElement("div",{style:{marginTop:"200px"},className:"graderSection"},r.a.createElement(v.a,{to:"/grader",className:"graderNav"},"Grader"),r.a.createElement("p",{style:{marginTop:"20px"}},"This is a simple application that allows users to enter their marks on components of a course. The application provides continuous feedback, calculates final grade, and lets users adjust their marks dynamically in order to determine the grades needed for a given final mark.")),r.a.createElement("div",{class:"ui divider"})))}}]),t}(n.Component)),j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"check back soon!"))}}]),t}(n.Component),k=a(12),N=a(19),O=a(10),w=(a(36),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={components:[{name:"",weight:"",mark:""}]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"addClick",value:function(){this.setState(function(e){return{components:[].concat(Object(O.a)(e.components),[{name:"",weight:"",mark:""}])}})}},{key:"removeClick",value:function(e){var t=Object(O.a)(this.state.components);1!=t.length&&(t.splice(e,1),this.setState({components:t}))}},{key:"handleChange",value:function(e,t){var a=t.target,n=a.name,r=a.value,o=Object(O.a)(this.state.components);o[e]=Object(N.a)({},o[e],Object(k.a)({},n,r)),this.setState({components:o})}},{key:"createUI",value:function(){var e=this;return this.state.components.map(function(t,a){return r.a.createElement("div",{class:"ui form",key:a},r.a.createElement("div",{class:"inline fields",className:"UIComponents"},r.a.createElement("div",{class:"field"},r.a.createElement("input",{id:"nameField",type:"text",placeholder:"name",name:"name",value:t.name||"",onChange:e.handleChange.bind(e,a)})),r.a.createElement("div",{className:"WeightMarkInputs"},r.a.createElement("div",{class:"field"},r.a.createElement("input",{id:"weightField",className:"weightField",type:"number",placeholder:"weight",name:"weight",value:t.weight||"",onChange:e.handleChange.bind(e,a)})),r.a.createElement("div",{class:"field"},r.a.createElement("input",{id:"markField",type:"number",placeholder:"mark",name:"mark",value:t.mark||"",onChange:e.handleChange.bind(e,a)}))),r.a.createElement("button",{class:"ui inverted red button",id:"removeButton",onClick:e.removeClick.bind(e,a)},"remove")))})}},{key:"output",value:function(){return r.a.createElement("div",{className:"Output"},r.a.createElement("div",null,r.a.createElement("p",null,"Final Mark: ",this.marker())),r.a.createElement("div",null,r.a.createElement("p",null,"Lost So Far: ",this.lostFeedback())))}},{key:"reset",value:function(){var e=Object(O.a)(this.state.components);e.length>1&&e.splice(0,e.length-1),e[0].weight="",e[0].name="",e[0].mark="",this.setState({components:e})}},{key:"marker",value:function(){for(var e=Object(O.a)(this.state.components),t=0,a=0;a<e.length;a++)t+=e[a].weight/100*e[a].mark;return""==this.errorCheck()?Math.round(100*t)/100:null}},{key:"lostFeedback",value:function(){for(var e=Object(O.a)(this.state.components),t=0,a=0;a<e.length;a++)""!=e[a].weight&&""!=e[a].mark&&(t+=e[a].weight-e[a].weight/100*e[a].mark);return t}},{key:"errorCheck",value:function(){for(var e="",t=this.state.components,a=0,n=0;n<t.length;n++)a+=parseFloat(t[n].weight);100!=a&&(e="totalWeight");for(var r=0;r<t.length;r++)""==t[r].weight||t[r].weight<1||t[r].weight>100?e="weightError":(""==t[r].mark||t[r].mark<1)&&(e="markError");return e}},{key:"render",value:function(){return r.a.createElement("div",{className:"graderDiv"},r.a.createElement("div",{class:"ui segment"},this.output(),r.a.createElement("div",{className:"AddResetButtons"},r.a.createElement("button",{className:"AddButton",class:"ui primary button",onClick:this.addClick.bind(this)},"add"),r.a.createElement("button",{className:"ResetButton",class:"ui grey button",onClick:this.reset.bind(this)},"reset")),this.createUI()))}}]),t}(r.a.Component)),y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"oops! page not found..."))}}]),t}(n.Component),C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(b,null)),r.a.createElement("div",{className:"content"},r.a.createElement(h.a,null,r.a.createElement(p.a,{path:"/",component:E,exact:!0}),r.a.createElement(p.a,{path:"/projects",component:g}),r.a.createElement(p.a,{path:"/grader",component:w}),r.a.createElement(p.a,{path:"/info",component:j}),r.a.createElement(p.a,{component:y}))),r.a.createElement("div",null,r.a.createElement(f,null))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.d495d3a3.chunk.js.map