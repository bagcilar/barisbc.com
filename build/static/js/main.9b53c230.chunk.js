(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{184:function(e,t){},214:function(e,t,a){e.exports=a(379)},219:function(e,t,a){},220:function(e,t,a){},224:function(e,t,a){},225:function(e,t,a){},226:function(e,t,a){},227:function(e,t,a){},379:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(48),c=a.n(o),i=(a(219),a(17)),l=a(18),s=a(20),m=a(19),u=a(21),h=a(387),d=a(390),p=a(204),f=(a(87),a(388)),g=(a(220),n.Component,a(224),n.Component,a(225),a(186)),v=a.n(g),b=(a(226),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ProjectsDiv"},r.a.createElement("div",{clasName:"ProjectList"},r.a.createElement("div",{style:{marginTop:"200px"},className:"graderSection"},r.a.createElement(f.a,{to:"/grader",className:"graderNav"},"Grader"),r.a.createElement("p",{style:{marginTop:"20px"}},"This is a simple application that allows users to enter their marks on components of a course. The application provides continuous feedback, calculates final grade, and lets users adjust their marks dynamically in order to determine the grades needed for a given final mark.")),r.a.createElement("div",{class:"ui divider"})))}}]),t}(n.Component)),E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"check back soon!"))}}]),t}(n.Component),k=a(81),y=a(187),w=a(31),S=a(51),j=a(385),O=a(384),C=(a(227),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleOpen=function(){return a.setState({showModal:!0})},a.handleClose=function(){return a.setState({showModal:!1})},a.state={components:[{name:"",weight:"",mark:""}],markingScheme:"percentage",showReport:!1,showModal:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"addClick",value:function(){this.setState(function(e){return{components:[].concat(Object(w.a)(e.components),[{name:"",weight:"",mark:""}])}})}},{key:"removeClick",value:function(e){var t=Object(w.a)(this.state.components);1!==t.length&&(t.splice(e,1),this.setState({components:t}))}},{key:"handleChange",value:function(e,t){var a=t.target,n=a.name,r=a.value,o=Object(w.a)(this.state.components);o[e]=Object(y.a)({},o[e],Object(k.a)({},n,r)),this.setState({components:o})}},{key:"setScheme",value:function(e){this.setState({markingScheme:e.target.value})}},{key:"createUI",value:function(){var e=this;return this.state.components.map(function(t,a){return r.a.createElement("div",{class:"ui form",key:a},r.a.createElement("div",{class:"inline fields",className:"UIComponents"},r.a.createElement("div",{class:"field"},r.a.createElement("input",{id:"nameField",type:"text",placeholder:"name",name:"name",value:t.name||"",onChange:e.handleChange.bind(e,a)})),r.a.createElement("div",{className:"WeightMarkInputs"},r.a.createElement("div",{class:"field"},r.a.createElement("input",{id:"weightField",className:"weightField",type:"number",placeholder:"weight",name:"weight",value:t.weight||"",onChange:e.handleChange.bind(e,a)})),r.a.createElement("div",{class:"field"},r.a.createElement("input",{id:"markField",type:"number",placeholder:e.state.markingScheme,name:"mark",value:t.mark||"",onChange:e.handleChange.bind(e,a)}))),r.a.createElement("button",{class:"ui inverted red button",id:"removeButton",onClick:e.removeClick.bind(e,a)},"remove")))})}},{key:"addResetButtons",value:function(){return r.a.createElement("div",{className:"AddResetButtons"},r.a.createElement("button",{className:"AddButton",class:"ui primary button",onClick:this.addClick.bind(this)},"add"),r.a.createElement("button",{className:"ResetButton",class:"ui grey button",onClick:this.reset.bind(this)},"reset"))}},{key:"output",value:function(){var e=this,t=this.report(),a=this.state.showReport;return r.a.createElement("div",{id:"outputFields",class:"ui segment"},r.a.createElement("div",null,r.a.createElement("p",null,"Final Mark: ",this.marker())),r.a.createElement("div",{class:"ui divider",id:"homePageUpperDivider"}),r.a.createElement("div",null,r.a.createElement("p",null,"Lost So Far: ",this.lostFeedback())),r.a.createElement("div",null,r.a.createElement("p",null,"Accumulated: ",this.accumulatedFeedback())),r.a.createElement("div",{class:"ui divider",id:"homePageUpperDivider"}),r.a.createElement("button",{id:"showReportButton",onClick:function(){return e.setState({showReport:!a})}},"Show Report"),a?r.a.createElement("div",{id:"reportSection"},r.a.createElement("p",null,"95%: ",t[0]),r.a.createElement("p",null,"90%: ",t[1]),r.a.createElement("p",null,"85%: ",t[2]),r.a.createElement("p",null,"90%: ",t[3]),r.a.createElement("p",null,"75%: ",t[4]),r.a.createElement("p",null,"70%: ",t[5]),r.a.createElement("p",null,"65%: ",t[6]),r.a.createElement("p",null,"60%: ",t[7]),r.a.createElement("p",null,"55%: ",t[8]),r.a.createElement("p",null,"50%: ",t[9])):null)}},{key:"selectScheme",value:function(){return r.a.createElement("div",{className:"schemeSelectors"},r.a.createElement("div",{id:"percentageRadio"},r.a.createElement("input",{onChange:this.setScheme.bind(this),type:"radio",name:"schemeRadioButton",value:" percentage",checked:"percentage"===this.state.markingScheme}),r.a.createElement("label",null,"Percentage")),r.a.createElement("div",{id:"markRadio"},r.a.createElement("input",{onChange:this.setScheme.bind(this),type:"radio",name:"schemeRadioButton",value:" mark",checked:"mark"===this.state.markingScheme}),r.a.createElement("label",null,"Mark")))}},{key:"reset",value:function(){var e=Object(w.a)(this.state.components);e.length>1&&e.splice(0,e.length-1),e[0].weight="",e[0].name="",e[0].mark="",this.setState({components:e})}},{key:"marker",value:function(){for(var e=Object(w.a)(this.state.components),t=0,a=0;a<e.length;a++)"percentage"===this.state.markingScheme?t+=e[a].weight/100*e[a].mark:t+=1*e[a].mark;return""===this.errorCheck()?Math.round(100*t)/100:null}},{key:"lostFeedback",value:function(){for(var e=Object(w.a)(this.state.components),t=0,a=0;a<e.length;a++)""!==e[a].weight&&""!==e[a].mark&&("percentage"===this.state.markingScheme?t+=e[a].weight-e[a].weight/100*e[a].mark:t+=e[a].weight-e[a].mark);return Math.round(100*t)/100}},{key:"accumulatedFeedback",value:function(){for(var e=Object(w.a)(this.state.components),t=0,a=0;a<e.length;a++)""!==e[a].weight&&""!==e[a].mark&&("percentage"===this.state.markingScheme?t+=e[a].weight/100*e[a].mark:t+=1*e[a].mark);return Math.round(100*t)/100}},{key:"report",value:function(){for(var e=Object(w.a)(this.state.components),t=this.accumulatedFeedback(),a=0,n=0,o=[],c=["-","-","-","-","-","-","-","-","-","-"],i=0;i<e.length;i++)""!==e[i].weight&&""===e[i].mark&&o.push(i),a+=1*e[i].weight;if(100!==a)n=100-a;else if(o.length>0)for(var l=0;l<o.length;l++)n+=1*e[o[l]].weight;if(100===a&&""!==this.errorCheck())for(var s,m=0,u=94.5;u>49;u-=5)s="percentage"===this.state.markingScheme?(u-t)/(n/100):u-t,c[m]=Math.round(100*s)/100,m++;for(var h=0;h<c.length;h++)c[h]<0&&(c[h]=r.a.createElement(S.a,{name:"checkmark"}));return c}},{key:"errorCheck",value:function(){for(var e="",t=this.state.components,a=0,n=0;n<t.length;n++)a+=parseFloat(t[n].weight);100!==a&&(e="totalWeight");for(var r=0;r<t.length;r++)""===t[r].weight||t[r].weight<1||t[r].weight>100?e="weightError":(""===t[r].mark||t[r].mark<0)&&(e="markError");return e}},{key:"modal",value:function(){return r.a.createElement(j.a,{trigger:r.a.createElement(O.a,{onClick:this.handleOpen},"Help"),open:this.state.showModal,onClose:this.handleClose,basic:!0,size:"small"},r.a.createElement(j.a.Content,null,r.a.createElement("p",null,"\u25cf Enter weights as percentages /100. The weights in total should equal 100"),r.a.createElement("p",null,"\u25cf When a weight and mark is added for a given component, you will be presented with continuous feedback"),r.a.createElement("p",null,"\u25cf When all weights and marks are added, the final mark will appear automatically"),r.a.createElement("p",null,"\u25cf If you press 'show report', you  will be presented with the performance necessary to obtain the specified grade points"),r.a.createElement("p",null,"\u25cf This function is available only when all weights have been entered and there are unmarked components"),r.a.createElement("p",null,"\u25cf The necessary performance is displayed as the average performance needed for the unmarked components")),r.a.createElement(j.a.Actions,null,r.a.createElement(O.a,{color:"green",onClick:this.handleClose,inverted:!0},r.a.createElement(S.a,{name:"checkmark"}),"Got it")))}},{key:"render",value:function(){return r.a.createElement("div",{className:"graderDiv"},r.a.createElement("div",{id:"UI",class:"ui segment"},r.a.createElement("div",{className:"UITop"},this.addResetButtons(),this.selectScheme()),this.createUI()),r.a.createElement("div",{className:"OutputSection"},this.output()),this.modal())}}]),t}(r.a.Component)),R=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"oops! page not found..."))}}]),t}(n.Component);a(184);var B={particles:{number:{value:100,density:{enable:!0,value_area:1e3}},size:{value:2,random:!0,anim:{speed:5,size_min:.3}},line_linked:{enable:!0},move:{random:!0,speed:1,out_mode:"out"}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}}}}},N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).greetingRef=r.a.createRef(),a.homeRef=r.a.createRef(),a.projectsRef=r.a.createRef(),a.aboutMeRef=r.a.createRef(),a.contactRef=r.a.createRef(),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"scroll",value:function(e){e===this.homeRef?(this.refs.homeSectionButton.style.color="brown",this.refs.projectsSectionButton.style.color="grey",this.refs.aboutMeSectionButton.style.color="grey",this.refs.contactSectionButton.style.color="grey"):e===this.projectsRef?(this.refs.homeSectionButton.style.color="grey",this.refs.projectsSectionButton.style.color="brown",this.refs.aboutMeSectionButton.style.color="grey",this.refs.contactSectionButton.style.color="grey"):e===this.aboutMeRef?(this.refs.homeSectionButton.style.color="grey",this.refs.projectsSectionButton.style.color="grey",this.refs.aboutMeSectionButton.style.color="brown",this.refs.contactSectionButton.style.color="grey"):e===this.contactRef?(this.refs.homeSectionButton.style.color="grey",this.refs.projectsSectionButton.style.color="grey",this.refs.aboutMeSectionButton.style.color="grey",this.refs.contactSectionButton.style.color="brown"):e===this.greetingRef&&document.getElementById("greetingSection"),e.current.scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"HomePage"},r.a.createElement("section",{ref:this.homeRef,className:"homeSection"},r.a.createElement(v.a,{className:"particles",params:B}),r.a.createElement("div",{className:"WelcomeMessageDiv"},r.a.createElement("p",{id:"timeGreeting",align:"center"},function(){var e="",t=(new Date).getHours();return t>=12&&t<=17?e="Good Afternoon!":t>=17&&t<=24?e="Good Evening!":t<=12&&(e="Good Morning!"),e}()),r.a.createElement("p",{id:"welcomeMessage",align:"center"}," welcome to ",r.a.createElement("span",{align:"center",id:"welcomeMessagePart2"},"barisbc.com")),r.a.createElement("button",{id:"startButton",onClick:function(){e.scroll(e.greetingRef)}},r.a.createElement("i",{class:"angle double down icon"})))),r.a.createElement("section",{className:"headerSection"},r.a.createElement("div",{className:"headerDiv"},r.a.createElement("button",{id:"homeSectionButton",ref:"homeSectionButton",onClick:function(){e.scroll(e.homeRef)}}," barisbc "),r.a.createElement("button",{id:"projectsSectionButton",ref:"projectsSectionButton",onClick:function(){e.scroll(e.projectsRef)}}," projects "),r.a.createElement("button",{id:"aboutMeSectionButton",ref:"aboutMeSectionButton",onClick:function(){e.scroll(e.aboutMeRef)}}," about me "),r.a.createElement("button",{id:"contactSectionButton",ref:"contactSectionButton",onClick:function(){e.scroll(e.contactRef)}}," contact "))),r.a.createElement("section",{ref:this.greetingRef,className:"greetingSection"},r.a.createElement("p",null,"This is the greeting section!")),r.a.createElement("section",{ref:this.projectsRef,className:"projectsSection"},r.a.createElement(b,null)),r.a.createElement("section",{ref:this.aboutMeRef,className:"aboutMeSection"},r.a.createElement("p",null,"This is the about me section!")),r.a.createElement("section",{ref:this.contactRef,className:"contactSection"},r.a.createElement("p",null,"This is the contact me section!")),r.a.createElement("section",{className:"footerSection"},r.a.createElement("p",null,"This is the footer section!")))}}]),t}(n.Component),M=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"content"},r.a.createElement(d.a,null,r.a.createElement(p.a,{path:"/",component:N,exact:!0}),r.a.createElement(p.a,{path:"/projects",component:b}),r.a.createElement(p.a,{path:"/grader",component:C}),r.a.createElement(p.a,{path:"/info",component:E}),r.a.createElement(p.a,{component:R})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},87:function(e,t,a){}},[[214,1,2]]]);
//# sourceMappingURL=main.9b53c230.chunk.js.map