(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"/assets/imgs/ace.jpg",clicked:!1},{id:2,image:"/assets/imgs/brook.jpg",clicked:!1},{id:3,image:"/assets/imgs/chopper.png",clicked:!1},{id:4,image:"/assets/imgs/frankie.jpg",clicked:!1},{id:5,image:"/assets/imgs/luffy.png",clicked:!1},{id:6,image:"/assets/imgs/nami.jpg",clicked:!1},{id:7,image:"/assets/imgs/robin.jpg",clicked:!1},{id:8,image:"/assets/imgs/sanji.jpg",clicked:!1},{id:9,image:"/assets/imgs/shanks.jpg",clicked:!1},{id:10,image:"/assets/imgs/trafalgar.jpg",clicked:!1},{id:11,image:"/assets/imgs/ussop.jpg",clicked:!1},{id:12,image:"/assets/imgs/zoro.jpg",clicked:!1}]},,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),i=a.n(r),s=(a(14),a(4)),o=a(5),l=a(7),m=a(6),d=a(8),u=function(e){return c.a.createElement("nav",{className:"navbar navbar-light bg-light",to:"/"},c.a.createElement("div",null,c.a.createElement("ul",{className:"navbar-nav"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("a",{href:"/clicky-game/"},e.title)),c.a.createElement("li",{className:"nav-item"},"Score- Top: ",e.topScore),c.a.createElement("li",{className:"nav-item"},"Current: ",e.newScore),c.a.createElement("li",{className:"nav-item"},e.correctIncorrect))))},g=function(e){return c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",null,"Click on an image to earn points, but don't click on any more than once!"))},h=a(1),f=(a(16),function(e){return console.log(e),c.a.createElement("div",{className:"card",key:e.id,onClick:function(){return e.handleClick(e.id)}},c.a.createElement("img",{className:"card-img-top",style:e.styles,src:e.image,alt:"Card img cap"}))}),p=(a(18),a(20),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).styles={width:150,height:150},a.state={Friends:h,topScore:0,currentScore:0,correctIncorrect:"",clicked:[]},a.styles={width:150,height:150},a.randomShuffle=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e},a.handleIncrement=function(){var e=a.state.currentScore+1;a.setState({currentScore:e,correctIncorrect:"You guessed correctly!"}),e>=a.state.topScore?a.setState({topScore:e,currentScore:e}):12===e&&a.setState({correctIncorrect:"You win!"}),a.handleShuffle()},a.handleReset=function(){a.handleShuffle()},a.handleShuffle=function(){var e=a.randomShuffle(h);a.setState({Friends:e})},a.handleClick=function(e){-1===a.state.clicked.indexOf(e)?(a.handleIncrement(),a.setState({clicked:a.state.clicked.concat(e)})):(a.setState({currentScore:0,topScore:a.state.topScore,correctIncorrect:"You guessed incorrectly!",clicked:[]}),a.handleReset())},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(u,{title:"One Piece Clicky Game",topScore:this.state.topScore,score:this.state.currentScore,correctIncorrect:this.state.correctIncorrect}),c.a.createElement(g,null),c.a.createElement(p,null,this.state.Friends.map(function(t){return c.a.createElement(f,{handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,image:t.image,id:t.id,key:t.id,style:e.styles})})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.0b4e4ab2.chunk.js.map