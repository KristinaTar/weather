(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{24:function(e,t,r){},29:function(e,t,r){},32:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(10),o=r.n(c),i=(r(24),function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,35)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),c(e),o(e)}))}),u=r(7),s=r(17),p=r(9),f=r.n(p),b=r(13),j=r(2),h="SET_USER_LOCATION",d="SET_WEATHER_DATA",g="CHANGE_TEMP",m={userLocation:{long:0,lat:0},city:"",temperature:0,icon:""},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(j.a)(Object(j.a)({},e),{},{userLocation:t.userLocation});case d:return Object(j.a)(Object(j.a)({},e),{},{icon:t.icon,temperature:t.temperature,city:t.city});case g:return Object(j.a)(Object(j.a)({},e),{},{temperature:t.newTemperature});default:return e}},O=Object(u.b)({weatherReducer:l}),v=Object(u.d)(O,Object(u.c)(Object(u.a)(s.a))),w=r(19),x=(r(29),r(34)),y=r(1);var T=function(e){return Object(y.jsx)("div",{className:"App",style:{background:e.color},children:Object(y.jsxs)("div",{style:{textAlign:"center"},children:[Object(y.jsx)("img",{src:e.icon,alt:"Weather icon"})," ",Object(y.jsx)("br",{}),e.temp>0?"+"+Math.round(e.temp):Math.round(e.temp),Object(y.jsx)("br",{}),"-10",Object(y.jsx)(x.a.Range,{style:{maxWidth:"60%",width:"300px",margin:"5px"},value:2.5*e.temp+25,onChange:function(t){e.setNewTemperature((t.target.value-25)/2.5)}}),"+30 ",Object(y.jsx)("br",{}),Object(y.jsx)("div",{children:e.city})]})})},E="#00ffff",A="#fff700",C="#ff8c00",L=-10,N=10;function R(e,t,r,n,a){var c=(r-t)/(a-n);return c*e+(t-c*n)}function I(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}var k=Object(u.c)(Object(w.a)((function(e){return{icon:e.weatherReducer.icon,temperature:e.weatherReducer.temperature,city:e.weatherReducer.city}}),{getWeatherData:function(){return function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:navigator.geolocation.getCurrentPosition(function(){var e=Object(b.a)(f.a.mark((function e(r){var n,a,c,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.coords.latitude,a=r.coords.longitude,t({type:h,userLocation:{lat:n,long:a}}),"2aea7457683524468f",e.next=6,fetch("http://api.openweathermap.org/data/2.5/weather?lat=".concat(n,"&lon=").concat(a,"&appid=0e43ba82fc9cae").concat("2aea7457683524468f"));case 6:return c=e.sent,e.next=9,c.json();case 9:o=e.sent,t((i="http://openweathermap.org/img/wn/".concat(o.weather[0].icon,"@2x.png"),u=o.main.temp-273.15,s=o.name,{type:d,icon:i,temperature:u,city:s}));case 11:case"end":return e.stop()}var i,u,s}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},setNewTemperature:function(e){return{type:g,newTemperature:e}}}))((function(e){Object(n.useEffect)((function(){e.getWeatherData()}),[]);var t=function(e){var t=I(E),r=I(A),n=I(C);if(e<=L)return E;if(e==N)return A;if(e>=30)return C;if(e<N){var a=R(e,t.r,r.r,L,N),c=R(e,t.g,r.g,L,N),o=R(e,t.b,r.b,L,N);return"rgb(".concat(a,",").concat(c,",").concat(o,")")}if(e>N){var i=R(e,r.r,n.r,N,30),u=R(e,r.g,n.g,N,30),s=R(e,r.b,n.b,N,30);return"rgb(".concat(i,",").concat(u,",").concat(s,")")}}(e.temperature);return Object(y.jsx)(T,{icon:e.icon,temp:e.temperature,city:e.city,setNewTemperature:e.setNewTemperature,color:t})}));r(31);o.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(k,{store:v})}),document.getElementById("root")),i()}},[[32,1,2]]]);
//# sourceMappingURL=main.fe84640d.chunk.js.map