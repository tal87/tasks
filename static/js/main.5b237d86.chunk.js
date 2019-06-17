(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,n){e.exports=n(76)},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(22),o=n.n(s),c=n(17),i=n(2),u=n(37),l=n(19),p=n(18),m=n(3),d=n.n(m),f=n(15),h=n(38),g=n.n(h).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/tasks"}).url||"http://localhost:5000/api"}),b=function(){return{type:"SHOW_LOGIN"}},E=function(e){return function(){var t=Object(f.a)(d.a.mark(function t(n){var a;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e||(e=""),t.next=3,g("/tasks?user=".concat(e));case 3:a=t.sent,n({type:"FETCH_TASKS",payload:a.data});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},v=Object(i.b)(function(e){return e},{showLogin:b,logout:function(){return function(e){e(E("")),e({type:"LOGOUT"})}}})(function(e){return r.a.createElement("div",{className:"ui secondary pointing menu"},r.a.createElement(l.b,{to:"/",className:"item"},"App"),r.a.createElement("div",{className:"right menu"},r.a.createElement(l.b,{to:"/tasks/create",className:"item"},"New Task"),r.a.createElement(l.b,{to:"/tasks/list",className:"item"},"Tasks"),function(e){return e.loginStatus.user&&e.loginStatus.user.isLoggedIn?r.a.createElement("button",{onClick:e.logout,className:"item",style:{outline:"none",cursor:"pointer"}},"Logout"):r.a.createElement("button",{onClick:e.showLogin,className:"item",style:{outline:"none",cursor:"pointer"}},"Login/Register")}(e)))}),k=n(16),y=n(9),O=n(10),w=n(12),C=n(11),S=n(13),j=(n(74),function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(w.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={done:!1,editMode:!1,users:[]},n.handleChange=function(e){n.setState({done:e.target.checked})},n.handleDeleteClick=function(e){e.stopPropagation(),n.props.deleteTask(n.props.id,n.props.loginStatus.user.id)},n.onShareChange=function(e){n.setState({users:e.target.value.split(",")})},n}return Object(S.a)(t,e),Object(O.a)(t,[{key:"handleTaskClick",value:function(){this.setState({done:!this.state.done})}},{key:"handleEditClick",value:function(e){e.stopPropagation(),this.setState({editMode:!0})}},{key:"renderHelper",value:function(){var e=this;return this.state.done?r.a.createElement("span",null,r.a.createElement("del",null,this.props.text),r.a.createElement("button",{onClick:function(t){return e.handleDeleteClick(t)}},"Delete")):this.props.text}},{key:"renderEditor",value:function(){var e=this;if(this.state.editMode)return r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Share task with....",value:this.state.users.join(","),onChange:function(t){return e.onShareChange(t)}}),r.a.createElement("button",{onClick:function(){return e.props.shareTask(e.state.users)}},"Done"))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"task",style:{padding:"10px"},onClick:function(){return e.handleTaskClick()}},r.a.createElement("input",{type:"checkbox",checked:this.state.done,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("span",{style:{marginLeft:"10px"}},this.renderHelper(),r.a.createElement("button",{className:"btnEdit",onClick:function(t){return e.handleEditClick(t)}},"Edit")),this.renderEditor())}}]),t}(r.a.Component)),N=Object(i.b)(function(e){return e},{deleteTask:function(e,t){return function(){var n=Object(f.a)(d.a.mark(function n(a){return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.delete("/tasks?id=".concat(e));case 2:E(t)(a);case 3:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}})(j),L=function(e){function t(){return Object(y.a)(this,t),Object(w.a)(this,Object(C.a)(t).apply(this,arguments))}return Object(S.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){var e=Object(f.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.props.fetchTasks(this.props.loginStatus.user.id);case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleTaskShare",value:function(e,t){this.props.shareTask(e,t)}},{key:"renderTasks",value:function(){var e=this;return this.props.tasks.map(function(t){return r.a.createElement(N,{key:t._id,id:t._id,subject:t.subject,text:t.text,shareTask:function(n){return e.handleTaskShare(t,n)}})})}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:"200px",overflowY:"auto"}},this.renderTasks())}}]),t}(r.a.Component),x=Object(i.b)(function(e){return e},{fetchTasks:E,shareTask:function(e,t){return function(){var n=Object(f.a)(d.a.mark(function n(a){return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.put("/tasks",{task:e,users:t});case 2:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}})(L),I=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(w.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(r)))).state={text:""},n.onFormSubmit=function(e){n.props.createTask(n.props.loginStatus.user.id,n.state.text),n.setState({text:""}),e.preventDefault()},n.onChange=function(e){n.setState(Object(k.a)({},e.target.name,e.target.value))},n}return Object(S.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement("form",{method:"post",className:"ui form",onSubmit:function(t){return e.onFormSubmit(t)}},r.a.createElement("div",{className:"two fields"},r.a.createElement("div",{className:"field"},r.a.createElement("input",{placeholder:"Reminder",name:"text",onChange:function(t){return e.onChange(t)},value:this.state.text})),r.a.createElement("button",{className:"ui button",type:"submit"},"Submit"))))}}]),t}(r.a.Component),T=Object(i.b)(function(e){return e},{createTask:function(e,t){return function(){var n=Object(f.a)(d.a.mark(function n(a){return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.post("/tasks",{text:t,id:e});case 2:E(e)(a);case 3:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()}})(I),R=(n(75),Object(i.b)(null,{hideLogin:function(){return{type:"HIDE_LOGIN"}}})(function(e){return r.a.createElement("div",{id:"modal_container",className:"modal-background",onClick:function(t){return function(e,t){"modal_container"===e.target.id&&t.hideLogin()}(t,e)}},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h3",null,e.title)),r.a.createElement("hr",null),r.a.createElement("div",{className:"modal-body"},e.body)))})),_=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(w.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(s)))).state={username:"",password:""},n.loginBody=function(){return r.a.createElement("div",{style:{margin:"0 10px"}},r.a.createElement("form",{onSubmit:function(e){return n.onLoginClick(e)},className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Email",r.a.createElement("input",{type:"text",name:"username",placeholder:"email",value:n.state.username,onChange:function(e){return n.onInputChange(e)}}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Password",r.a.createElement("input",{type:"password",name:"password",placeholder:"password",onChange:function(e){return n.onInputChange(e)},value:n.state.password}))),r.a.createElement("button",{type:"submit",className:"ui button"},"Submit"),r.a.createElement("button",{onClick:function(e){return n.onRegisterClick(e)}},"Register"),n.props.loginStatus.status&&r.a.createElement("div",{className:"ui red message"},r.a.createElement("i",{class:"close icon"}),r.a.createElement("i",{className:"exclamation circle icon"}),n.props.loginStatus.status)))},n.onRegisterClick=function(e){e.preventDefault(),n.props.showRegister()},n.onLoginClick=function(e){e.preventDefault(),n.props.login(n.state.username,n.state.password)},n.onInputChange=function(e){n.setState(Object(k.a)({},e.target.name,e.target.value))},n}return Object(S.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return console.log("props: "+JSON.stringify(this.props)),r.a.createElement(R,{title:"Login",body:this.loginBody()})}}]),t}(r.a.Component),G=Object(i.b)(function(e){return console.log("state "+JSON.stringify(e)),e},{login:function(e,t){return function(){var n=Object(f.a)(d.a.mark(function n(a){var r,s;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r="",n.next=3,g("/login?user=".concat(e,"&password=").concat(t)).catch(function(e){r=e.response.data});case 3:(s=n.sent)?(a({payload:s.data.id,type:"LOGIN_SUCCESS"}),a(E(s.data.id))):a({type:"LOGIN_FAIL",payload:r});case 5:case"end":return n.stop()}},n)}));return function(e){return n.apply(this,arguments)}}()},showRegister:function(){return{type:"SHOW_REGISTER"}}})(_),D=function(e){function t(){var e,n;Object(y.a)(this,t);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(n=Object(w.a)(this,(e=Object(C.a)(t)).call.apply(e,[this].concat(s)))).state={username:"",password:"",fname:"",lname:""},n.registerBody=function(){return r.a.createElement("div",{style:{margin:"0 10px"}},r.a.createElement("form",{onSubmit:function(e){return n.onRegisterClick(e)},className:"ui form"},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"First Name",r.a.createElement("input",{type:"text",name:"fname",placeholder:"First Name",value:n.state.fname,onChange:function(e){return n.onInputChange(e)}})),r.a.createElement("label",null,"Last Name",r.a.createElement("input",{type:"text",name:"lname",placeholder:"Last Name",value:n.state.lname,onChange:function(e){return n.onInputChange(e)}})),r.a.createElement("label",null,"Email",r.a.createElement("input",{type:"text",name:"username",placeholder:"email",value:n.state.username,onChange:function(e){return n.onInputChange(e)}}))),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Password",r.a.createElement("input",{type:"password",name:"password",placeholder:"password",onChange:function(e){return n.onInputChange(e)},value:n.state.password}))),r.a.createElement("button",{type:"submit",className:"ui button"},"Submit"),r.a.createElement("span",null,n.props.loginStatus.status),r.a.createElement("button",{onClick:function(e){return n.onLoginClick(e)}},"Login")))},n.onRegisterClick=function(e){e.preventDefault();var t={username:n.state.username,password:n.state.password,firstName:n.state.fname,lastName:n.state.lname};n.props.register({data:t})},n.onLoginClick=function(e){e.preventDefault(),n.props.showLogin()},n.onInputChange=function(e){n.setState(Object(k.a)({},e.target.name,e.target.value))},n}return Object(S.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){return console.log("props: "+JSON.stringify(this.props)),r.a.createElement(R,{title:"Register",body:this.registerBody()})}}]),t}(r.a.Component),A=Object(i.b)(function(e){return console.log("state "+JSON.stringify(e)),e},{showLogin:b,register:function(e){return function(){var t=Object(f.a)(d.a.mark(function t(n){var a,r;return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a="",t.next=3,g.post("/register",e).catch(function(e){a="bad username/password"});case 3:(r=t.sent)?(n({payload:r.data.id,type:"LOGIN_SUCCESS"}),n(E(r.data.id))):n({type:"REGISTER_FAIL",payload:a});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()}})(D),H=Object(i.b)(function(e){return e})(function(e){return r.a.createElement("div",{className:"ui container"},r.a.createElement(l.a,null,r.a.createElement(v,null),r.a.createElement(p.a,{path:"/tasks/list",exact:!0,component:x}),r.a.createElement(p.a,{path:"/tasks/create",exact:!0,component:T}),e.loginStatus.showLogin&&r.a.createElement(G,null),e.loginStatus.showRegister&&r.a.createElement(A,null)))}),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_TASKS":return t.payload;default:return e}},U=n(28),J={showLogin:!1,user:{isLoggedIn:!1,id:""}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_LOGIN":return{showLogin:!0};case"HIDE_LOGIN":return{showLogin:!1};case"LOGIN_FAIL":return Object(U.a)({},e,{status:t.payload});case"LOGIN_SUCCESS":return{showLogin:!1,user:{isLoggedIn:!0,id:t.payload}};case"LOGOUT":return Object(U.a)({},e,{user:{isLoggedIn:!1,id:""}});case"SHOW_REGISTER":return{showRegister:!0};default:return e}},P=Object(c.c)({tasks:F,loginStatus:B});o.a.render(r.a.createElement(i.a,{store:Object(c.d)(P,Object(c.a)(u.a))},r.a.createElement(H,null)),document.querySelector("#root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.5b237d86.chunk.js.map