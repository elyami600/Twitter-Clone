(this["webpackJsonpmy-clone-twitter"]=this["webpackJsonpmy-clone-twitter"]||[]).push([[0],{16:function(e,t,a){},24:function(e,t,a){e.exports=a(39)},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),l=a.n(s),c=(a(29),a(4)),o=a(5),i=a(7),m=a(6),u=a(8),h=(a(30),a(11)),d=a(13),p=(a(16),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState(Object(d.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.email,r=a.password;fetch("/tweet/login",{method:"post",body:JSON.stringify({email:n,password:r}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){localStorage.setItem("id",t.userId),e.forceUpdate()}))},e.state={email:"",password:""},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return localStorage.getItem("id")?r.a.createElement(h.a,{to:"/twitterPage"}):r.a.createElement("div",{className:"main-body"},r.a.createElement("header",{className:"image-bird"},"Image"),r.a.createElement("span",{className:"title-form"},"Log in to Twitter"),r.a.createElement("form",{className:"main-form",onSubmit:this.handleSubmit},r.a.createElement("input",{id:"user-email-input",type:"text",name:"email",placeholder:"Username",value:t,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{id:"user-password-input",type:"password",name:"password",placeholder:"Password",value:a,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("button",{className:"button-login"},"Log in")),r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("a",{href:"#"},"Forgot passwrod?  ")),r.a.createElement("span",null," . "),r.a.createElement("span",null," ",r.a.createElement("a",{href:"#"}," Sign up for Twitter"))))}}]),t}(r.a.Component)),g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(d.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,r=a.email,s=a.password;fetch("/tweet/createUser",{method:"post",body:JSON.stringify({username:n,email:r,password:s}),headers:{"Content-Type":"application/json"}}).then((function(t){e.setState({success:!0})}))},e.state={username:"",email:"",password:"",success:!1},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.password;return e.success?r.a.createElement(h.a,{to:"/signin"}):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-body"},r.a.createElement("header",{className:"image-bird"},"Image"),r.a.createElement("span",{className:"title-form"},"Join Twitter Today"),r.a.createElement("form",{className:"main-form",onSubmit:this.handleSubmit},r.a.createElement("input",{id:"user-name-input",type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{id:"user-email-input",type:"text",name:"email",value:a,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{id:"user-password-input",type:"password",name:"password",maxLength:"10",value:n,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("button",{className:"button-login"},"Sign up")),r.a.createElement("div",null,r.a.createElement("span",null,"By signing up, you agree to our Terms , Data Policy and Cookies Policy ."))))}}]),t}(r.a.Component),w=a(10),f=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"split left"},r.a.createElement("div",{className:"centered"},r.a.createElement("h4",null,"Follow your interests."),r.a.createElement("h4",null,"Hear what people are talking about."),r.a.createElement("h4",null,"Join the conversation."))),r.a.createElement("div",{className:"split right"},r.a.createElement("div",{className:"centered"},r.a.createElement("h1",null,"See what\u2019s happening in the world right now"),r.a.createElement("h4",null,"Join Twitter today."),r.a.createElement("nav",null,r.a.createElement("button",{className:"button-singUp"},r.a.createElement(w.b,{to:"/signup"},"Sign up")),r.a.createElement("br",null),r.a.createElement("button",{className:"button-logIn"},r.a.createElement(w.b,{to:"/signin"},"Log in"))))))}}]),t}(r.a.Component),E=(a(36),a(37),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(d.a)({},n,r))},e.handleSubmit=function(t){t.preventDefault();var a=e.state.textarea;fetch("/tweet/validation",{method:"post",body:JSON.stringify({id:a}),headers:{"Content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log(e)}))},e.handleCreateTweet=function(t){t.preventDefault();var a=e.state,n=a.id,r=a.tweetText;fetch("/tweet/createTweet",{method:"post",body:JSON.stringify({userId:n,tweetText:r}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){var a=e.state.tweets;a.splice(0,0,t.tweet),e.setState({tweets:a,tweetText:""})}))},e.getTweets=function(t){fetch("/tweet/tweets/".concat(t),{method:"get"}).then((function(e){return e.json()})).then((function(t){var a=t.tweets;e.setState({tweets:a})}))},e.logout=function(){localStorage.removeItem("id"),e.setState({isAuth:!1})},e.getUsers=function(t){fetch("/tweet/users/".concat(t),{method:"get"}).then((function(e){return e.json()})).then((function(t){var a=t.users;e.setState({users:a,searchTerm:""}),console.log(a)}))},e.handleEnter=function(t){if("Enter"===t.key){var a=e.state.searchTerm;e.getUsers(a)}},e.state={id:null,tweets:[],users:[],searchTerm:"",tweetText:"",searchTweet:"",isAuth:!0},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("id");e?(e=Number(e),this.setState({id:e}),this.getTweets(e)):this.setState({isAuth:!1})}},{key:"render",value:function(){var e=this.state,t=e.tweetText,a=e.searchTerm,n=e.isAuth,s=e.tweets,l=e.users;return n?r.a.createElement("div",null,r.a.createElement("div",{className:"display-search-user"},r.a.createElement("div",{className:"search-container"},r.a.createElement("input",{className:"search-tweeter",type:"text",name:"searchTerm",placeholder:"Search",value:a,onChange:this.handleChange,onKeyDown:this.handleEnter}),r.a.createElement("div",{className:"search-results"},l.map((function(e){return r.a.createElement("div",{className:"search-user",key:e.id},e.username)})))),r.a.createElement("button",{className:"button-logout",onClick:this.logout},"Log out")),r.a.createElement("div",{className:"main-tweet"},r.a.createElement("form",{className:"tweet-form",onSubmit:this.handleCreateTweet},r.a.createElement("textarea",{id:"twitte-text-area",name:"tweetText",placeholder:"What's happening?",cols:80,rows:8,value:t,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("button",{className:"button-tweet"},"Tweet")),r.a.createElement("div",{className:"post--your-tweet"},s.map((function(e){return r.a.createElement("div",{className:"post--your-tweet",key:e.id},r.a.createElement("span",{className:"tweet-username"},e.username),r.a.createElement("div",{className:"tweet-tweet"},e.tweet))}))))):r.a.createElement(h.a,{to:"/"})}}]),t}(r.a.Component)),b=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h.b,{path:"/",exact:!0,component:f}),r.a.createElement(h.b,{path:"/signup",component:g}),r.a.createElement(h.b,{path:"/signin",component:p}),r.a.createElement(h.b,{path:"/twitterPage",component:E}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w.a,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.c5883a80.chunk.js.map