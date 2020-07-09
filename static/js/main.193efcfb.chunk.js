(this["webpackJsonpdividend-tracker-ui"]=this["webpackJsonpdividend-tracker-ui"]||[]).push([[0],{118:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(31),s=a.n(i),o=a(10),l=a(11),c=a(14),d=a(13),u=a(33),m=a(20);var h=Object(m.b)({dividends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DIVIDENDS":return t.dividends;default:return e}}});var p=function(e){return function(e){return e.dividends}(e).reduce((function(e,t){return e+t.market_value.amount}),0)},v=a(4),f=a(3),E=a(34),g=a.n(E);function y(e){return e.isAuthenticated?r.a.createElement(f.a,{to:"/dashboard"}):r.a.createElement("div",{className:g.a.fullPage},r.a.createElement("div",{className:g.a.title},r.a.createElement("h1",null,"A Wealthsimple Trade Dividend Tracker"),r.a.createElement("p",null,"Keep scrolling for more details")),r.a.createElement("div",{className:g.a.fullPage},r.a.createElement("h2",null,"Tired of using a spreadsheet to track your portfolio?"),r.a.createElement("p",null,"If you've ever tried making a spreadsheet to track your portfolio and its dividends using Google Sheets or Excel, you're probably aware it can be unmaintainable and unreliable."),r.a.createElement("p",null,"Wealthsimple Trade users are often attracted to the platform for the $0 commission on trades, and the user-friendly interface. Users are willing to accept that the analytics provided by the platform (particularly for dividend growth investors) are lacking."),r.a.createElement("p",null,"Now you can have the best of both worlds! Buy and sell with Wealthsimple Trade, and use this tracker for complete and automatic analytics."),r.a.createElement(v.b,{to:"/login"},"Stop Using Spreadsheets Now"),r.a.createElement("h2",null,"An automatic dividend tracker"),r.a.createElement("p",null,"By logging in with your Wealthsimple credentials you will have access to automatic dividend tracking on all your holdings. You will have access to metrics such as dividend income over time, estimated dividend yield for your entire portfolio, and for each individual holding."),r.a.createElement("p",null,"In addition to dividend analytics, this tracker provides annual analytics tracking your portfolios average interest year over year, so you can be sure that your investments are performing as expected."),r.a.createElement(v.b,{to:"/login"},"Start Tracking Now"),r.a.createElement("h2",null,"Fully mobile and desktop compatible"),r.a.createElement("p",null,"Besides the lack of dividend analytics, one of the few drawbacks of Wealthsimple Trade is its lack of desktop compatibility. This application is fully available through any web browser, and is fully responsive for a fluid mobile and desktop experience."),r.a.createElement("p",null,"If you were so inclined, this dividend tracker could serve a your one stop shop for portfolio tracking."),r.a.createElement(v.b,{to:"/login"},"Log In")))}a(82);var b=a(25),_=a.n(b),k=a(16),w=a.n(k),D="https://wealthsimple-trade-dividends.herokuapp.com",I=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).login=function(e){e.preventDefault(),w.a.post("".concat(D,"/api/v1/login"),n.state.loginInfo).then((function(e){var t=e.data,a=t.tokens,r=t.userData;n.props.setAuthentication(a,r.first_name),sessionStorage.setItem("isAuthenticated","true"),sessionStorage.setItem("accessToken",a.access),sessionStorage.setItem("refreshToken",a.refresh),sessionStorage.setItem("firstName",r.first_name)}),(function(e){alert("Login unsuccessful");var t=n.state.loginInfo;t.password="",n.setState({loginInfo:t})}))},n.handleChange=function(e){var t=e.target.name,a=e.target.value,r=n.state.loginInfo;r[t]=a,n.setState({loginInfo:r})},n.state={loginInfo:{email:"",password:""}},n}return Object(l.a)(a,[{key:"render",value:function(){return this.props.isAuthenticated?r.a.createElement(f.a,{to:"/dashboard"}):r.a.createElement("div",{className:_.a.fullPage},r.a.createElement("h1",null,"Log In"),r.a.createElement("p",null,"Please use your Wealthsimple Trade credentials."),r.a.createElement("form",{className:_.a.loginForm,onSubmit:this.login},r.a.createElement("div",{className:_.a.formContent},r.a.createElement("input",{type:"email",name:"email",placeholder:"Email address",value:this.state.loginInfo.email,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",value:this.state.loginInfo.password,onChange:this.handleChange}),r.a.createElement("div",{className:_.a.submitWrapper},r.a.createElement("input",{type:"submit",value:"Sign In"})))))}}]),a}(r.a.Component),S=a(66),N=a.n(S),W=a(26),O=a.n(W);function A(e){return r.a.createElement("nav",{className:O.a.navBar},r.a.createElement("div",{className:O.a.navBarWrapper},r.a.createElement("span",null,r.a.createElement(v.b,{to:"/"},r.a.createElement("img",{className:O.a.logo,src:N.a,alt:"Wealthsimple Pink Logo"}))),r.a.createElement("div",{className:O.a.navBarLinkWrapper},e.isAuthenticated?r.a.createElement(r.a.Fragment,null,r.a.createElement(v.b,{to:"/dashboard"},r.a.createElement("span",null,"Dashboard")),"\xa0|\xa0",r.a.createElement(v.b,{to:"/logout"},r.a.createElement("span",null,"Logout"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(v.b,{to:"/"},r.a.createElement("span",null,"Home")),"\xa0|\xa0",r.a.createElement(v.b,{to:"/login"},r.a.createElement("span",null,"Log In"))))))}var j=a(67),C=a.n(j);function P(e){return r.a.createElement("div",{className:C.a.dashboardCard},r.a.createElement("h1",null,e.label),r.a.createElement("p",null,e.value))}var B=a(27),T=a.n(B),L=a(22),x=a(69),F=a.n(x),Y=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).sortDividends=function(){var t={date:["process_date",!1],"date-reverse":["process_date",!0],security:["symbol",!1],"security-reverse":["symbol",!0],dividend:["market_value.amount",!1],"dividend-reverse":["market_value.amount",!0]}[e.props.sortBy],a=t[1]?function(e,a){return"market_value.amount"!==t[0]?e[t[0]]===a[t[0]]?0:e[t[0]]>a[t[0]]?1:-1:e.market_value.amount===a.market_value.amount?0:e.market_value.amount>a.market_value.amount?1:-1}:function(e,a){return"market_value.amount"!==t[0]?e[t[0]]===a[t[0]]?0:e[t[0]]<a[t[0]]?1:-1:e.market_value.amount===a.market_value.amount?0:e.market_value.amount<a.market_value.amount?1:-1},n=e.props.dividends;return n.sort(a),n},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.sortDividends().map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,e.process_date),r.a.createElement("td",null,e.symbol),r.a.createElement("td",null,"$".concat(e.market_value.amount.toFixed(2))))}));return r.a.createElement("div",{className:F.a.tableWrapper},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Date"),r.a.createElement("th",null,"Security"),r.a.createElement("th",null,"Dividend"))),r.a.createElement("tbody",null,e)))}}]),a}(r.a.Component),R=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).resizeDashboardGraph=function(){var e=window.innerWidth>1300?1300:window.innerWidth,t={height:(window.innerHeight>1.5*e?1.5*e:window.innerHeight)-100,width:e-100};n.setState({viewPort:t})},n.projectDividend=function(e){var t=e.stock.symbol.replace(".","-"),a=e.quantity;w.a.post("".concat(D,"/api/v1/yield"),{ticker:t}).then((function(e){var t=e.data.dividend*a,r=n.state.projectedDividend;n.setState({projectedDividend:t+r})}))},n.parseDate=function(e){var t=parseInt(e.substring(0,4)),a=parseInt(e.substring(5,7));return{day:parseInt(e.substring(8,10)),month:a,year:t}},n.isDateWithinPastYear=function(e){var t=new Date,a=t.getFullYear(),n=t.getMonth()+1,r=t.getDate();if(a>e.year)return!0;if(a===e.year){if(n>e.month)return!0;if(n===e.month&&r>=e.day)return!0}return!1},n.getDividendIncome=function(e){var t=e.filter((function(e){return"dividend"===e.object&&n.isDateWithinPastYear(n.parseDate(e.process_date))})),a=t.reduce((function(e,t){return e+t.market_value.amount}),0);return n.setState({dividends:t,crunchDividends:n.crunchDividends(t)}),a},n.sendHistoryRequest=function(e){w.a.post("".concat(D,"/api/v1/history"),{tokens:n.props.tokens,accountID:e.id}).then((function(e){var t=e.data.results,a=t[t.length-1].equity_value.amount,r=n.state.totalEquityValue;n.setState({totalEquityValue:a+r})}))},n.crunchDividends=function(e){var t={};e.forEach((function(e){t[e.process_date]?t[e.process_date]=t[e.process_date]+e.market_value.amount:t[e.process_date]=e.market_value.amount}));var a=[];return Object.keys(t).forEach((function(e){var r=n.parseDate(e),i=new Date(r.year,r.month-1,r.day).getTime(),s=t[e];a.push({x:i,y:s})})),a},n.changeSortBy=function(e){n.setState({sortBy:e.target.value})},n.state={allActivities:[],dividendsWithinPastYear:0,totalEquityValue:0,projectedDividend:0,dividends:[],viewPort:{height:200,width:200},sortBy:"date",crunchDividends:[]},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.isAuthenticated&&(w.a.post("".concat(D,"/api/v1/activities"),this.props.tokens).then((function(t){var a=t.data.activities;e.setState({allActivities:a,dividendsWithinPastYear:e.getDividendIncome(a)})})),w.a.post("".concat(D,"/api/v1/accounts"),this.props.tokens).then((function(t){t.data.results.forEach(e.sendHistoryRequest)})),w.a.post("".concat(D,"/api/v1/positions"),this.props.tokens).then((function(t){t.data.results.forEach(e.projectDividend)})),window.addEventListener("resize",this.resizeDashboardGraph),this.resizeDashboardGraph())}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeDashboardGraph)}},{key:"render",value:function(){var e=this.state,t=e.dividendsWithinPastYear,a=e.projectedDividend,n=e.totalEquityValue,i=e.crunchDividends,s=a/n*100;return this.props.isAuthenticated?r.a.createElement("div",null,r.a.createElement("div",{className:T.a.dashboardWrapper},r.a.createElement("h1",null,"Welcome, ",this.props.userName),r.a.createElement("div",{className:T.a.dashboardCards},r.a.createElement(P,{label:"Dividend Income in the Past Year",value:"$".concat(t.toFixed(2))}),r.a.createElement(P,{label:"Estimated Current Yearly Dividend Income",value:"$".concat(a.toFixed(2))}),r.a.createElement(P,{label:"Estimated Current Dividend Yield",value:"".concat(s.toFixed(2),"%")})),r.a.createElement("h1",null,"Your payouts over the last year"),r.a.createElement("div",{className:T.a.dividendGraph},r.a.createElement(L.d,{xType:"time",width:this.state.viewPort.width,height:this.state.viewPort.height,margin:{bottom:75},animation:{duration:1e3}},r.a.createElement(L.a,null),r.a.createElement(L.c,{tickLabelAngle:-60,title:"Date"}),r.a.createElement(L.e,{title:"Dividend Amount"}),r.a.createElement(L.b,{data:i,color:"#cf698e",animation:{duration:1e3}}))),r.a.createElement("div",null,r.a.createElement("div",{className:T.a.sortingAndFiltering},r.a.createElement("label",null,"Sort by:"),r.a.createElement("select",{value:this.state.sortBy,onChange:this.changeSortBy,name:"sorting"},r.a.createElement("option",{value:"date"},"Date"),r.a.createElement("option",{value:"date-reverse"},"Date - Reverse"),r.a.createElement("option",{value:"security-reverse"},"Security"),r.a.createElement("option",{value:"security"},"Security - Reverse"),r.a.createElement("option",{value:"dividend"},"Dividend"),r.a.createElement("option",{value:"dividend-reverse"},"Dividend - Reverse"))),r.a.createElement(Y,{dividends:this.state.dividends,sortBy:this.state.sortBy})))):r.a.createElement(f.a,{to:"/login"})}}]),a}(r.a.Component),G=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.props.logout()}},{key:"render",value:function(){return r.a.createElement(f.a,{to:"/login"})}}]),a}(r.a.Component),V=(a(117),function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).setAuthentication=function(e,t){n.setState({isAuthenticated:!0,tokens:e,firstName:t})},n.logout=function(){sessionStorage.clear(),n.setState({isLoaded:!1,isAuthenticated:!1,tokens:{access:"",refresh:""},firstName:""})},n.state={isLoaded:!1,isAuthenticated:!1,tokens:{access:"",refresh:""},firstName:""},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e="true"===sessionStorage.getItem("isAuthenticated"),t=sessionStorage.getItem("accessToken"),a=sessionStorage.getItem("refreshToken"),n=sessionStorage.getItem("firstName");e&&t&&a&&n&&this.setState({isAuthenticated:e,tokens:{access:t,refresh:a},firstName:n}),this.setState({isLoaded:!0})}},{key:"render",value:function(){return r.a.createElement(v.a,{basename:"/dividend-tracker-ui/"},r.a.createElement(A,{isAuthenticated:this.state.isAuthenticated}),r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/login"},r.a.createElement(I,{isAuthenticated:this.state.isAuthenticated,setAuthentication:this.setAuthentication})),r.a.createElement(f.b,{path:"/dashboard"},r.a.createElement(R,{isAuthenticated:this.state.isAuthenticated,tokens:this.state.tokens,userName:this.state.firstName})),r.a.createElement(f.b,{path:"/logout"},r.a.createElement(G,{logout:this.logout})),r.a.createElement(f.b,{exact:!0,path:"/"},r.a.createElement(y,{isAuthenticated:this.state.isAuthenticated}))))}}]),a}(r.a.Component)),q=Object(u.b)((function(e){return{totalDividends:p(e)}}),(function(e){return{setDividendsInStore:function(t){e(function(e){return{type:"SET_DIVIDENDS",dividends:e}}(t))}}}))(V),M=Object(m.c)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u.a,{store:M},r.a.createElement(q,null))),document.getElementById("root"))},25:function(e,t,a){e.exports={fullPage:"styles_fullPage__2OXOy",loginForm:"styles_loginForm__Ib4R2",formContent:"styles_formContent__1KWL2",submitWrapper:"styles_submitWrapper__19puO"}},26:function(e,t,a){e.exports={navBar:"styles_navBar__3iC_i",navBarWrapper:"styles_navBarWrapper__2P72d",logo:"styles_logo__KwPl6",navBarLinkWrapper:"styles_navBarLinkWrapper__2JXNY"}},27:function(e,t,a){e.exports={dashboardCards:"styles_dashboardCards__3Xhnm",dashboardWrapper:"styles_dashboardWrapper__d1KFN",dividendGraph:"styles_dividendGraph__2OUCG"}},34:function(e,t,a){e.exports={fullPage:"styles_fullPage__39EEN",title:"styles_title__1IvRM",homePageWrapper:"styles_homePageWrapper__1fsE1",white:"styles_white__20Y93",pink:"styles_pink__2IF0a",image:"styles_image__2Wmaw"}},66:function(e,t,a){e.exports=a.p+"static/media/wealthsimple-pink.0c226a4a.png"},67:function(e,t,a){e.exports={dashboardCard:"styles_dashboardCard__MenSt"}},69:function(e,t,a){e.exports={tableWrapper:"styles_tableWrapper__NRA3C",sortingIcon:"styles_sortingIcon__3VL5J"}},72:function(e,t,a){e.exports=a(118)},82:function(e,t,a){}},[[72,1,2]]]);
//# sourceMappingURL=main.193efcfb.chunk.js.map