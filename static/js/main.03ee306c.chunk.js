(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,n){e.exports=n(75)},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),o=n.n(c),s=n(16),u=n(2),i=n(37),l=n(19),p=n(17),m=n(3),d=n.n(m),f=n(10),h=n(38),b=n.n(h).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/tasks"}).url||"https://tasks-server-test.herokuapp.com/api"}),v=function(){return function(){var e=Object(f.a)(d.a.mark(function e(t){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b("/tasks");case 2:n=e.sent,t({type:"FETCH_TASKS",payload:n.data});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},g=Object(u.b)(null,{showLogin:function(){return{type:"SHOW_LOGIN"}}})(function(e){return r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement(l.b,{to:"/",className:"item"},"App"),r.a.createElement("div",{className:"right menu"},r.a.createElement(l.b,{to:"/tasks/create",className:"item"},"New Task"),r.a.createElement(l.b,{to:"/tasks/list",className:"item"},"Tasks"),r.a.createElement("button",{onClick:e.showLogin,className:"item",style:{outline:"none",cursor:"pointer"}},"Login")))}),O=n(18),k=n(11),E=n(12),y=n(14),j=n(13),w=n(15),C=function(e){function t(){var e,n;Object(k.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(y.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={done:!1},n.handleChange=function(e){n.setState({done:e.target.checked})},n.handleTaskClick=function(){n.setState({done:!n.state.done})},n.handleDeleteClick=function(e){e.stopPropagation(),n.props.deleteTask(n.props.id)},n}return Object(w.a)(t,e),Object(E.a)(t,[{key:"renderHelper",value:function(){var e=this;return this.state.done?r.a.createElement("span",null,r.a.createElement("del",null,this.props.text),r.a.createElement("button",{onClick:function(t){return e.handleDeleteClick(t)}},"Delete")):this.props.text}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{padding:"10px"},onClick:function(){return e.handleTaskClick()}},r.a.createElement("input",{type:"checkbox",checked:this.state.done,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("span",{style:{marginLeft:"10px"}},this.renderHelper()))}}]),t}(r.a.Component),N=Object(u.b)(function(e){return e},{deleteTask:function(e){return function(){var t=Object(f.a)(d.a.mark(function t(n){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.delete("/tasks?id=".concat(e));case 2:v()(n);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(C),x=function(e){function t(){return Object(k.a)(this,t),Object(y.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.fetchTasks();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderTasks",value:function(){return this.props.tasks.map(function(e){return r.a.createElement(N,{key:e._id,id:e._id,subject:e.subject,text:e.text})})}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:"200px",overflowY:"auto"}},this.renderTasks())}}]),t}(r.a.Component),S=Object(u.b)(function(e){return e},{fetchTasks:v})(x),L=function(e){function t(){var e,n;Object(k.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(y.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={text:""},n.onFormSubmit=function(){var e=Object(f.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.props.createTask(n.state.text),n.setState({text:""}),t.preventDefault();case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.onChange=function(e){n.setState(Object(O.a)({},e.target.name,e.target.value))},n}return Object(w.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("form",{method:"post",className:"ui form",onSubmit:function(t){return e.onFormSubmit(t)}},r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("input",{placeholder:"Reminder",name:"text",onChange:function(t){return e.onChange(t)},value:this.state.text})),r.a.createElement("button",{className:"ui button",type:"submit"},"Submit"))))}}]),t}(r.a.Component),I=Object(u.b)(function(e){return e},{createTask:function(e){return function(){var t=Object(f.a)(d.a.mark(function t(n){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.post("/tasks",{text:e});case 2:v()(n);case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(L),T=(n(74),Object(u.b)(null,{hideLogin:function(){return{type:"HIDE_LOGIN"}}})(function(e){return r.a.createElement("div",{id:"modal_container",className:"modal-background",onClick:function(t){return function(e,t){"modal_container"===e.target.id&&t.hideLogin()}(t,e)}},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h3",null,e.title)),r.a.createElement("hr",null),r.a.createElement("div",{className:"modal-body"},e.body)))})),_=function(e){function t(){var e,n;Object(k.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(y.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(c)))).state={username:"",password:""},n.loginBody=function(){return r.a.createElement("div",{style:{margin:"0 10px"}},r.a.createElement("form",{onSubmit:function(e){return n.onLoginClick(e)},className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Username",r.a.createElement("input",{type:"text",name:"username",placeholder:"username",value:n.state.username,onChange:function(e){return n.onInputChange(e)}}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Password",r.a.createElement("input",{type:"password",name:"password",placeholder:"password",onChange:function(e){return n.onInputChange(e)},value:n.state.password}))),r.a.createElement("button",{type:"submit",className:"ui button"},"Submit"),r.a.createElement("span",null,n.props.loginStatus.status)))},n.onLoginClick=function(e){e.preventDefault(),n.props.login(n.state.username,n.state.password)},n.onInputChange=function(e){n.setState(Object(O.a)({},e.target.name,e.target.value))},n}return Object(w.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return console.log("props: "+JSON.stringify(this.props)),r.a.createElement(T,{title:"Login",body:this.loginBody()})}}]),t}(r.a.Component),D=Object(u.b)(function(e){return console.log("state "+JSON.stringify(e)),e},{login:function(e,t){return function(){var n=Object(f.a)(d.a.mark(function n(a){var r,c;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r="",n.next=3,b("/login?user=".concat(e,"&password=").concat(t)).catch(function(e){r="bad username/password"});case 3:c=n.sent,a(c?{type:"LOGIN_SUCCESS",payload:r="you are now logged in"}:{type:"LOGIN_FAIL",payload:r});case 5:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}})(_),A=Object(u.b)(function(e){return e})(function(e){return r.a.createElement("div",{className:"ui container"},r.a.createElement(l.a,null,r.a.createElement(g,null),r.a.createElement(p.a,{path:"/tasks/list",exact:!0,component:S}),r.a.createElement(p.a,{path:"/tasks/create",exact:!0,component:I}),e.loginStatus.showLogin&&r.a.createElement(D,null)))}),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TASKS":return t.payload;default:return e}},H=n(22),F={showLogin:!1},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_LOGIN":return Object(H.a)({},e,{showLogin:!0});case"HIDE_LOGIN":return Object(H.a)({},e,{showLogin:!1});case"LOGIN_FAIL":case"LOGIN_SUCCESS":return Object(H.a)({},e,{status:t.payload});default:return e}},J=Object(s.c)({tasks:G,loginStatus:U});o.a.render(r.a.createElement(u.a,{store:Object(s.d)(J,Object(s.a)(i.a))},r.a.createElement(A,null)),document.querySelector("#root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.03ee306c.chunk.js.map