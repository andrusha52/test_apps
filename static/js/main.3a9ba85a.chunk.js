(this.webpackJsonpchart=this.webpackJsonpchart||[]).push([[0],{14:function(e,t,r){e.exports={divInput:"app_divInput__16kPj",chart:"app_chart__A2UFI",divInput2:"app_divInput2__2xwih",chart2:"app_chart2__1DJdt"}},154:function(e,t,r){e.exports={btn:"App_btn__1zgTy"}},155:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(49),i=r.n(o),l=r(6),u=r(7),d=r(8),c=r(9),s=r(21),p=r(32),b=r.n(p),h=r(50),m=r(51),g=r(2),y=r(22);var f=function(e){var t=e.grlLine,r=e.grkLine,n=Object(g.a)(Array(81).keys()),o=[{x:0,y:0},{x:r[0]+10,y:r[0]},{x:r[1]+20,y:r[1]},{x:r[2]+30,y:r[2]},{x:r[3]+40,y:r[3]},{x:r[4]+50,y:r[4]},{x:r[5]+60,y:r[5]},{x:r[6]+70,y:r[6]}],i=[{x:0,y:0},{x:t[0]+10,y:t[0]},{x:t[1]+20,y:t[1]},{x:t[2]+30,y:t[2]},{x:t[3]+40,y:t[3]},{x:t[4]+50,y:t[4]},{x:t[5]+60,y:t[5]},{x:t[6]+70,y:t[6]}],l=(t.reduce((function(e,t){return e+=t}),0)/7).toFixed(2),u=Object(g.a)(Array(80).keys()).map((function(e){return Object({x:e,y:l})})),d={labels:Object(g.a)(n),datasets:[{label:"\u041b\u0438\u043d\u0438\u044f \u0436\u0438\u0437\u043d\u0438",fill:!1,lineTension:.1,backgroundColor:"rgba(255, 0, 0,0.5)",borderColor:"rgba(255, 0, 0,0.5)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(255, 0, 0,0.5)",pointHoverBorderColor:"rgba(255, 0, 0,0.5)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[].concat(o)},{label:"\u041a\u0430\u0440\u044c\u0435\u0440\u0430",fill:!1,lineTension:.1,backgroundColor:"rgba(0, 1, 255,0.5)",borderColor:"rgba(0, 1, 255,0.5)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(0, 1, 255,0.5)",pointHoverBorderColor:"rgba(0, 1, 255,0.5)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[].concat(i)},{label:"midl Line",fill:!1,lineTension:.1,backgroundColor:"rgba(0, 249, 0,0.5)",borderColor:"rgba(0, 249, 0,0.5)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(0, 249, 0,0.5)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(0, 249, 0,0.5)",pointHoverBorderColor:"rgba(0, 249, 0,0.5)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:Object(g.a)(u)}]};return a.a.createElement("div",{style:{width:2400,height:600,marginBottom:500}},a.a.createElement(y.a,{data:d}))};var v=function(e){var t=e.summaryValue;t=t.split("").map((function(e){return Number(e)}));var r=Object(g.a)(Array(80).keys()),n=[{x:0,y:0},{x:t[0]+10,y:t[0]},{x:t[1]+20,y:t[1]},{x:t[2]+30,y:t[2]},{x:t[3]+40,y:t[3]},{x:t[4]+50,y:t[4]},{x:t[5]+60,y:t[5]},{x:t[6]+70,y:t[6]}],o=(t.reduce((function(e,t){return e+=t}),0)/7).toFixed(2),i=Object(g.a)(Array(80).keys()).map((function(e){return Object({x:e,y:o})})),l={labels:Object(g.a)(r),datasets:[{label:"MK",fill:!1,lineTension:.1,backgroundColor:"rgba(255, 0, 0,0.5)",borderColor:"rgba(255, 0, 0,0.5)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(255, 0, 0,0.5)",pointHoverBorderColor:"rgba(255, 0, 0,0.5)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[].concat(n)},{label:"midl Line",fill:!1,lineTension:.1,backgroundColor:"rgba(0, 249, 0,0.5)",borderColor:"rgba(0, 249, 0,0.5)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(0, 249, 0,0.5)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(0, 249, 0,0.5)",pointHoverBorderColor:"rgba(0, 249, 0,0.5)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:Object(g.a)(i)}]};return a.a.createElement("div",{style:{width:2400,height:600,marginBottom:500}},a.a.createElement(y.a,{data:l}))},C=r(14),k=r.n(C),B={data:"",month:"",year:"",dataArr:[],openChart:!1,GRK:"",GRL:"",mk:"",god:"",openChart2:!1,summaryValue:""},S=function(e){Object(c.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state=Object(m.a)({},B),e.handeSubmit=function(){var t=Object(h.a)(b.a.mark((function t(r){var n,a,o,i,l,u;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.preventDefault(),n=e.state,a=n.data,o=n.month,i=n.year,a=1===a.length?"0"+a:a,o=1===o.length?"0"+o:o,l=Number(a+o)*Number(i),u=6===(u=Number(o)*Number(a)*Number(i)).toString().length?u.toString()+"0":5===u.toString().length?u.toString()+"00":u.toString(),l=6===l.toString().length?l.toString()+"0":5===l.toString().length?l.toString()+"00":l.toString(),u=u.split("").map((function(e){return Number(e)})),l=l.split("").map((function(e){return Number(e)})),t.next=13,e.setState({GRL:u,GRK:l,openChart:!0});case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(u.a)(r,[{key:"handleChange",value:function(e,t){this.setState(Object(s.a)({},e,t.toString()))}},{key:"onClickBTN",value:function(e){e.preventDefault(),this.setState({GRL:"",GRK:"",openChart:!1,data:"",month:"",year:""})}},{key:"submitSecond",value:function(e){e.preventDefault();var t=this.state,r=t.god,n=t.mk,a=Number(n)*Number(r)*52;(a=a.toString()).length<7&&(a+="0").length<7&&(a+="0"),this.setState({summaryValue:a,openChart2:!0})}},{key:"onClickBTNSecond",value:function(e){e.preventDefault(),this.setState({mk:"",god:"",openChart2:!1,summaryValue:""})}},{key:"render",value:function(){var e=this,t=this.state,r=t.data,n=t.month,o=t.year,i=t.god,l=t.mk;return a.a.createElement("div",null,a.a.createElement("div",{className:k.a.divInput},a.a.createElement("form",{onSubmit:function(t){return e.handeSubmit(t)}},a.a.createElement("input",{type:"number",value:r,onChange:function(t){return e.handleChange("data",t.target.value)}}),a.a.createElement("input",{type:"number",value:n,onChange:function(t){return e.handleChange("month",t.target.value)}}),a.a.createElement("input",{type:"number",value:o,onChange:function(t){return e.handleChange("year",t.target.value)}}),a.a.createElement("button",{type:"submit"},"\u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c")),a.a.createElement("button",{onClick:function(t){return e.onClickBTN(t)}},"CLEAR ALL")),a.a.createElement("div",{id:"chart",className:k.a.chart},this.state.openChart&&a.a.createElement(f,{grkLine:this.state.GRL,grlLine:this.state.GRK})),a.a.createElement("div",null,a.a.createElement("form",{onSubmit:function(t){return e.submitSecond(t)},className:k.a.divInput2},a.a.createElement("p",null,"MK"),a.a.createElement("input",{placeholder:"MK",value:l,onChange:function(t){return e.handleChange("mk",t.target.value)}}),a.a.createElement("p",null,"\u0413\u041e\u0414"),a.a.createElement("input",{placeholder:"\u0433\u043e\u0434",valye:i,onChange:function(t){return e.handleChange("god",t.target.value)}}),a.a.createElement("button",{type:"submit"},"\u043f\u043e\u0441\u0447\u0438\u0442\u0430\u0442\u044c"),a.a.createElement("button",{onClick:function(t){return e.onClickBTNSecond(t)}},"CLEAR ALL")),this.state.openChart2&&a.a.createElement("div",{id:"chart",className:k.a.chart2},a.a.createElement(v,{summaryValue:this.state.summaryValue}))))}}]),r}(n.Component),x=(n.Component,r(154),function(e){Object(c.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={slide:!0},e}return Object(u.a)(r,[{key:"changeSlide",value:function(){this.setState({slide:!this.state.slide})}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(S,null))}}]),r}(n.Component));i.a.render(a.a.createElement(x,null),document.getElementById("root"))},53:function(e,t,r){e.exports=r(155)}},[[53,1,2]]]);
//# sourceMappingURL=main.3a9ba85a.chunk.js.map