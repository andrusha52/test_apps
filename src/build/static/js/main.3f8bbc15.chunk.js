(this.webpackJsonpchart=this.webpackJsonpchart||[]).push([[0],{10:function(e,t,r){e.exports={divInput:"app_divInput__3tzWd",chart:"app_chart__mMBj8",divInput2:"app_divInput2__33G3E",chart2:"app_chart2__24aab"}},154:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(45),i=r.n(o),l=r(17),u=r(28),d=r.n(u),c=r(46),p=r(47),s=r(48),b=r(49),h=r(51),m=r(52),g=r(2),y=r(18);var f=function(e){var t=e.grlLine,r=e.grkLine,a=Object(g.a)(Array(80).keys()),o=[{x:0,y:0},{x:r[0]+10,y:r[0]},{x:r[1]+20,y:r[1]},{x:r[2]+30,y:r[2]},{x:r[3]+40,y:r[3]},{x:r[4]+50,y:r[4]},{x:r[5]+60,y:r[5]},{x:r[6]+70,y:r[6]}],i=[{x:0,y:0},{x:t[0]+10,y:t[0]},{x:t[1]+20,y:t[1]},{x:t[2]+30,y:t[2]},{x:t[3]+40,y:t[3]},{x:t[4]+50,y:t[4]},{x:t[5]+60,y:t[5]},{x:t[6]+70,y:t[6]}],l=(r.reduce((function(e,t){return e+=t}),0)/7).toFixed(2),u=Object(g.a)(Array(80).keys()).map((function(e){return Object({x:e,y:l})})),d={labels:Object(g.a)(a),datasets:[{label:"\u041b\u0438\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0438",fill:!1,lineTension:.1,backgroundColor:"rgba(255, 0, 0,0.5)",borderColor:"rgba(255, 0, 0,0.5)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(255, 0, 0,0.5)",pointHoverBorderColor:"rgba(255, 0, 0,0.5)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[].concat(o)},{label:"\u041a\u0430\u0440\u044c\u0435\u0440\u0430",fill:!1,lineTension:.1,backgroundColor:"rgba(0, 1, 255,0.5)",borderColor:"rgba(0, 1, 255,0.5)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(0, 1, 255,0.5)",pointHoverBorderColor:"rgba(0, 1, 255,0.5)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[].concat(i)},{label:"midl Line",fill:!1,lineTension:.1,backgroundColor:"rgba(0, 249, 0,0.5)",borderColor:"rgba(0, 249, 0,0.5)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(0, 249, 0,0.5)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(0, 249, 0,0.5)",pointHoverBorderColor:"rgba(0, 249, 0,0.5)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:Object(g.a)(u)}]};return n.a.createElement("div",{style:{width:2400,height:900,marginBottom:500}},n.a.createElement(y.a,{data:d}))};var v=function(e){var t=e.summaryValue;t=t.split("").map((function(e){return Number(e)}));var r=Object(g.a)(Array(80).keys()),a=[{x:0,y:0},{x:t[0]+10,y:t[0]},{x:t[1]+20,y:t[1]},{x:t[2]+30,y:t[2]},{x:t[3]+40,y:t[3]},{x:t[4]+50,y:t[4]},{x:t[5]+60,y:t[5]},{x:t[6]+70,y:t[6]}],o=(t.reduce((function(e,t){return e+=t}),0)/7).toFixed(2);console.log(o);var i=Object(g.a)(Array(80).keys()).map((function(e){return Object({x:e,y:o})})),l={labels:Object(g.a)(r),datasets:[{label:"MK",fill:!1,lineTension:.1,backgroundColor:"rgba(255, 0, 0,0.5)",borderColor:"rgba(255, 0, 0,0.5)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(255, 0, 0,0.5)",pointHoverBorderColor:"rgba(255, 0, 0,0.5)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[].concat(a)},{label:"midl Line",fill:!1,lineTension:.1,backgroundColor:"rgba(0, 249, 0,0.5)",borderColor:"rgba(0, 249, 0,0.5)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(0, 249, 0,0.5)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(0, 249, 0,0.5)",pointHoverBorderColor:"rgba(0, 249, 0,0.5)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:Object(g.a)(i)}]};return n.a.createElement("div",{style:{width:2400,height:900,marginBottom:500}},n.a.createElement(y.a,{data:l}))},C=r(10),k=r.n(C),B={data:"",month:"",year:"",dataArr:[],openChart:!1,GRK:"",GRL:"",mk:"",god:"",openChart2:!1,summaryValue:""},S=function(e){Object(m.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(s.a)(this,r);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state=Object(p.a)({},B),e.handeSubmit=function(){var t=Object(c.a)(d.a.mark((function t(r){var a,n,o,i,l,u;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),a=e.state,n=a.data,o=a.month,i=a.year,n=1===n.length?"0"+n:n,o=1===o.length?"0"+o:o,l=Number(n+o)*Number(i),console.log(l),u=6===(u=Number(o)*Number(n)*Number(i)).toString().length?u.toString()+"0":5===u.toString().length?u.toString()+"00":u.toString(),l=6===l.toString().length?l.toString()+"0":5===l.toString().length?l.toString()+"00":l.toString(),u=u.split("").map((function(e){return Number(e)})),l=l.split("").map((function(e){return Number(e)})),t.next=14,e.setState({GRL:u,GRK:l,openChart:!0});case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(b.a)(r,[{key:"handleChange",value:function(e,t){this.setState(Object(l.a)({},e,t.toString()))}},{key:"onClickBTN",value:function(e){e.preventDefault(),this.setState({GRL:"",GRK:"",openChart:!1,data:"",month:"",year:""})}},{key:"submitSecond",value:function(e){e.preventDefault();var t=this.state,r=t.god,a=t.mk,n=Number(a)*Number(r)*52;(n=n.toString()).length<7&&(n+="0").length<7&&(n+="0"),this.setState({summaryValue:n,openChart2:!0})}},{key:"onClickBTNSecond",value:function(e){e.preventDefault(),this.setState({mk:"",god:"",openChart2:!1,summaryValue:""})}},{key:"render",value:function(){var e=this,t=this.state,r=t.data,a=t.month,o=t.year,i=t.god,l=t.mk;return n.a.createElement("div",null,n.a.createElement("div",{className:k.a.divInput},n.a.createElement("form",{onSubmit:function(t){return e.handeSubmit(t)}},n.a.createElement("input",{type:"number",value:r,onChange:function(t){return e.handleChange("data",t.target.value)}}),n.a.createElement("input",{type:"number",value:a,onChange:function(t){return e.handleChange("month",t.target.value)}}),n.a.createElement("input",{type:"number",value:o,onChange:function(t){return e.handleChange("year",t.target.value)}}),n.a.createElement("button",{type:"submit"},"\u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c")),n.a.createElement("button",{onClick:function(t){return e.onClickBTN(t)}},"CLEAR ALL")),n.a.createElement("div",{id:"chart",className:k.a.chart},this.state.openChart&&n.a.createElement(f,{grkLine:this.state.GRL,grlLine:this.state.GRK})),n.a.createElement("div",null,n.a.createElement("form",{onSubmit:function(t){return e.submitSecond(t)},className:k.a.divInput2},n.a.createElement("p",null,"MK"),n.a.createElement("input",{placeholder:"MK",value:l,onChange:function(t){return e.handleChange("mk",t.target.value)}}),n.a.createElement("p",null,"\u0413\u041e\u0414"),n.a.createElement("input",{placeholder:"\u0433\u043e\u0434",valye:i,onChange:function(t){return e.handleChange("god",t.target.value)}}),n.a.createElement("button",{type:"submit"},"\u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c"),n.a.createElement("button",{onClick:function(t){return e.onClickBTNSecond(t)}},"CLEAR ALL")),this.state.openChart2&&n.a.createElement("div",{id:"chart",className:k.a.chart2},n.a.createElement(v,{summaryValue:this.state.summaryValue}))))}}]),r}(a.Component);i.a.render(n.a.createElement(S,null),document.getElementById("root"))},53:function(e,t,r){e.exports=r(154)}},[[53,1,2]]]);
//# sourceMappingURL=main.3f8bbc15.chunk.js.map