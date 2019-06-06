(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,n){e.exports=n(75)},74:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(23),o=n.n(c),s=n(16),u=n(2),i=n(37),l=n(19),p=n(17),m=n(5),d=n.n(m),f=n(15),h=n(38),b=n.n(h).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/tasks"}).url||"http://localhost:5000/api"}),g=function(e){return function(){var t=Object(f.a)(d.a.mark(function t(n){var a;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e||(e=""),t.next=3,b("/tasks?user=".concat(e));case 3:a=t.sent,n({type:"FETCH_TASKS",payload:a.data});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},O=Object(u.b)(function(e){return e},{showLogin:function(){return{type:"SHOW_LOGIN"}},logout:function(){return{type:"LOGOUT"}}})(function(e){return r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement(l.b,{to:"/",className:"item"},"App"),r.a.createElement("div",{className:"right menu"},r.a.createElement(l.b,{to:"/tasks/create",className:"item"},"New Task"),r.a.createElement(l.b,{to:"/tasks/list",className:"item"},"Tasks"),function(e){return e.loginStatus.user.isLoggedIn?r.a.createElement("button",{onClick:e.logout,className:"item",style:{outline:"none",cursor:"pointer"}},"Logout"):r.a.createElement("button",{onClick:e.showLogin,className:"item",style:{outline:"none",cursor:"pointer"}},"Login")}(e)))}),v=n(18),E=n(10),y=n(11),k=n(13),j=n(12),w=n(14),L=function(e){function t(){var e,n;Object(E.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(k.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={done:!1},n.handleChange=function(e){n.setState({done:e.target.checked})},n.handleTaskClick=function(){n.setState({done:!n.state.done})},n.handleDeleteClick=function(e){e.stopPropagation(),n.props.deleteTask(n.props.id,n.props.loginStatus.user.id)},n}return Object(w.a)(t,e),Object(y.a)(t,[{key:"renderHelper",value:function(){var e=this;return this.state.done?r.a.createElement("span",null,r.a.createElement("del",null,this.props.text),r.a.createElement("button",{onClick:function(t){return e.handleDeleteClick(t)}},"Delete")):this.props.text}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{style:{padding:"10px"},onClick:function(){return e.handleTaskClick()}},r.a.createElement("input",{type:"checkbox",checked:this.state.done,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("span",{style:{marginLeft:"10px"}},this.renderHelper()))}}]),t}(r.a.Component),C=Object(u.b)(function(e){return e},{deleteTask:function(e,t){return function(){var n=Object(f.a)(d.a.mark(function n(a){return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.delete("/tasks?id=".concat(e));case 2:g(t)(a);case 3:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}})(L),N=function(e){function t(){return Object(E.a)(this,t),Object(k.a)(this,Object(j.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.fetchTasks(this.props.loginStatus.user.id);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderTasks",value:function(){return this.props.tasks.map(function(e){return r.a.createElement(C,{key:e._id,id:e._id,subject:e.subject,text:e.text})})}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:"200px",overflowY:"auto"}},this.renderTasks())}}]),t}(r.a.Component),S=Object(u.b)(function(e){return e},{fetchTasks:g})(N),x=function(e){function t(){var e,n;Object(E.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(k.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(r)))).state={text:""},n.onFormSubmit=function(e){n.props.createTask(n.props.loginStatus.user.id,n.state.text),n.setState({text:""}),e.preventDefault()},n.onChange=function(e){n.setState(Object(v.a)({},e.target.name,e.target.value))},n}return Object(w.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(S,null),r.a.createElement("form",{method:"post",className:"ui form",onSubmit:function(t){return e.onFormSubmit(t)}},r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("input",{placeholder:"Reminder",name:"text",onChange:function(t){return e.onChange(t)},value:this.state.text})),r.a.createElement("button",{className:"ui button",type:"submit"},"Submit"))))}}]),t}(r.a.Component),I=Object(u.b)(function(e){return e},{createTask:function(e,t){return function(){var n=Object(f.a)(d.a.mark(function n(a){return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b.post("/tasks",{text:t,id:e});case 2:g(e)(a);case 3:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}})(x),T=(n(74),Object(u.b)(null,{hideLogin:function(){return{type:"HIDE_LOGIN"}}})(function(e){return r.a.createElement("div",{id:"modal_container",className:"modal-background",onClick:function(t){return function(e,t){"modal_container"===e.target.id&&t.hideLogin()}(t,e)}},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h3",null,e.title)),r.a.createElement("hr",null),r.a.createElement("div",{className:"modal-body"},e.body)))})),_=function(e){function t(){var e,n;Object(E.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=Object(k.a)(this,(e=Object(j.a)(t)).call.apply(e,[this].concat(c)))).state={username:"",password:""},n.loginBody=function(){return r.a.createElement("div",{style:{margin:"0 10px"}},r.a.createElement("form",{onSubmit:function(e){return n.onLoginClick(e)},className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Username",r.a.createElement("input",{type:"text",name:"username",placeholder:"username",value:n.state.username,onChange:function(e){return n.onInputChange(e)}}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Password",r.a.createElement("input",{type:"password",name:"password",placeholder:"password",onChange:function(e){return n.onInputChange(e)},value:n.state.password}))),r.a.createElement("button",{type:"submit",className:"ui button"},"Submit"),r.a.createElement("span",null,n.props.loginStatus.status)))},n.onLoginClick=function(e){e.preventDefault(),n.props.login(n.state.username,n.state.password)},n.onInputChange=function(e){n.setState(Object(v.a)({},e.target.name,e.target.value))},n}return Object(w.a)(t,e),Object(y.a)(t,[{key:"render",value:function(){return console.log("props: "+JSON.stringify(this.props)),r.a.createElement(T,{title:"Login",body:this.loginBody()})}}]),t}(r.a.Component),G=Object(u.b)(function(e){return console.log("state "+JSON.stringify(e)),e},{login:function(e,t){return function(){var n=Object(f.a)(d.a.mark(function n(a){var r,c;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r="",n.next=3,b("/login?user=".concat(e,"&password=").concat(t)).catch(function(e){r="bad username/password"});case 3:c=n.sent,a(c?{payload:c.data.id,type:"LOGIN_SUCCESS"}:{type:"LOGIN_FAIL",payload:r});case 5:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}})(_),D=Object(u.b)(function(e){return e})(function(e){return r.a.createElement("div",{className:"ui container"},r.a.createElement(l.a,null,r.a.createElement(O,null),r.a.createElement(p.a,{path:"/tasks/list",exact:!0,component:S}),r.a.createElement(p.a,{path:"/tasks/create",exact:!0,component:I}),e.loginStatus.showLogin&&r.a.createElement(G,null)))}),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TASKS":return t.payload;default:return e}},H=n(20),U={showLogin:!1,user:{isLoggedIn:!1,id:""}},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_LOGIN":return Object(H.a)({},e,{showLogin:!0});case"HIDE_LOGIN":return Object(H.a)({},e,{showLogin:!1});case"LOGIN_FAIL":return Object(H.a)({},e,{status:t.payload});case"LOGIN_SUCCESS":return Object(H.a)({},e,{showLogin:!1,user:{isLoggedIn:!0,id:t.payload}});case"LOGOUT":return Object(H.a)({},e,{user:{isLoggedIn:!1,id:""}});default:return e}},J=Object(s.c)({tasks:A,loginStatus:F});o.a.render(r.a.createElement(u.a,{store:Object(s.d)(J,Object(s.a)(i.a))},r.a.createElement(D,null)),document.querySelector("#root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.f7af170a.chunk.js.map