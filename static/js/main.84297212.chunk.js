(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){},15:function(t,e,a){},16:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),o=a(2),r=a.n(o),i=(a(14),a(3)),c=a(4),l=a(6),u=a(5),k=a(7),m=(a(15),function(t){function e(t){var a;return Object(i.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).AddTask=function(){return a.setState({tasks:a.state.tasks+1})},a.RemoveTask=function(){return a.state.tasks>0?a.setState({tasks:a.state.tasks-1}):a.setState({tasks:0})},a.ClearAll=function(){return a.setState({tasks:0})},a.state={tasks:0},a}return Object(k.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=[];if(this.state.tasks>0)for(var e=0;e<this.state.tasks;e++)t.push(e+1);return s.a.createElement("div",{className:"App"},s.a.createElement("button",{onClick:this.AddTask},"Add"),s.a.createElement("button",{onClick:this.RemoveTask},"Remove"),s.a.createElement("button",{onClick:this.ClearAll},"Clear"),this.state.tasks>0?t.map(function(t){return s.a.createElement("li",{key:t},"Task number ",t)}):null)}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,a){t.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.84297212.chunk.js.map