webpackJsonp([53405171541913],{77:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var r=a(1),c=l(r),m=a(23),d=(l(m),a(24)),i=function(e){function t(a){n(this,t);var l=s(this,e.call(this,a));return l.onClickDepartment=function(e){l.props.props.history.push("/open-positions?d="+e)},l.state={},l}return o(t,e),t.prototype.render=function(){var e=this,t=[{label:"Engineering",imageLink:"../../images/careers/department/Engineering-new.png",departmentName:"engineering"},{label:"People & Culture",imageLink:"../../images/careers/department/people-and-culture-new.png",departmentName:"people-and-culture"},{label:"Science",imageLink:"../../images/careers/department/science-new.png",departmentName:"science"},{label:"Product",imageLink:"../../images/careers/department/product-new.png",departmentName:"product"},{label:"Program Management",imageLink:"../../images/careers/department/Productmanagement-new.png",departmentName:"program-management"},{label:"Design",imageLink:"../../images/careers/department/design-new.png",departmentName:"design"}];return c.default.createElement("section",{className:"pb-5"},c.default.createElement("h3",{className:void 0!==this.props.color?"text-center text-white neosans-regular font-xl-x my-5 text-white":"text-center text-success raleway-bold Fmy-5 text-success"},"Choose a Department"),c.default.createElement("div",{className:"container px-0 pb-3 d-none d-md-block"},c.default.createElement("div",{className:"d-flex flex-row flex-wrap justify-content-center my-3 col-lg-9 col-md-12 mx-auto"},t.map(function(t,a){return c.default.createElement("div",{key:a,className:" col-md-4 col-6 text-center my-2  "},c.default.createElement(d.Link,{to:{pathname:"/all-open-positions",search:"?d="+t.departmentName},className:void 0!==e.props.color?"super-app-location px-4 scroll d-flex flex-column justify-content-center align-items-center":"career-department px-4 scroll d-flex flex-column justify-content-center align-items-center",style:{minHeight:"150px"}},c.default.createElement("div",null,c.default.createElement("img",{className:"img-fluid",src:t.imageLink}),c.default.createElement("p",{className:void 0!==e.props.color?"neosans-bold font-md text-uppercase my-1 text-white":"neosans-bold font-md text-uppercase my-1 text-dark"},t.label))))}))),c.default.createElement("div",{className:"d-md-none pt-4"},t.map(function(e,t){return c.default.createElement("div",{key:t},c.default.createElement(d.Link,{to:{pathname:"/all-open-positions",search:"?d="+e.departmentName},className:"roboto-bold font-md text-center text-dark d-block"},e.label),c.default.createElement("hr",null))})))},t}(r.Component);t.default=i,e.exports=t.default},721:function(e,t,a){e.exports=a.p+"static/banner.50d4a4d6.mp4"},722:function(e,t,a){e.exports=a.p+"static/superApp-350-million.40f4012c.mp4"},723:function(e,t,a){e.exports=a.p+"static/superApp-5 Billion.b084bf57.mp4"},724:function(e,t,a){e.exports=a.p+"static/superApp-6600.5a63388d.mp4"},725:function(e,t,a){e.exports=a.p+"static/superApp-merchants.bab9b163.mp4"},726:function(e,t,a){e.exports=a.p+"static/superApp.19f6ff8a.mp4"},727:function(e,t,a){e.exports=a.p+"static/superapp-1-in.10774e97.mp4"},728:function(e,t,a){e.exports=a.p+"static/superapp-1-million.d4f47ac8.mp4"},729:function(e,t,a){e.exports=a.p+"static/superapp-16.5-million.443766f1.mp4"},730:function(e,t,a){e.exports=a.p+"static/superapp-first.ecff54ca.mp4"},731:function(e,t,a){e.exports=a.p+"static/superapp-market-share.ec8b9e16.mp4"},496:function(e,t){},399:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var r=a(1),c=l(r),m=a(10),d=a(18),i=a(721),u=l(i),p=a(726),f=l(p),b=a(724),h=l(b),E=a(731),g=l(E),v=a(729),y=l(v),N=a(723),x=l(N),w=a(725),k=l(w),O=a(722),j=l(O),P=a(727),A=l(P),I=a(728),G=l(I),S=a(730),L=l(S);a(496);var T=a(77),_=l(T),C=function(e){function t(){return n(this,t),s(this,e.apply(this,arguments))}return o(t,e),t.prototype.componentWillMount=function(){"undefined"!=typeof localStorage&&localStorage.setItem("source","superapp")},t.prototype.render=function(){return c.default.createElement("div",{className:"first-section"},c.default.createElement(m.Helmet,null,c.default.createElement("title",null,"GOJEK: SuperApp"),c.default.createElement("meta",{"data-react-helmet":"true",property:"og:title",content:"GOJEK: On-Demand Services for Transport, Payment, Food Delivery, etc."}),c.default.createElement("meta",{"data-react-helmet":"true",property:"og:title",content:"GOJEK: On-Demand Services for Transport, Payment, Food Delivery, etc."}),c.default.createElement("meta",{"data-react-helmet":"true",name:"twitter:title",content:"GOJEK: On-Demand Services for Transport, Payment, Food Delivery, etc."}),c.default.createElement("meta",{"data-react-helmet":"true",name:"description",content:"GOJEK is a Super App. It's one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia's first and fastest growing unicorn building an on-demand empire."}),c.default.createElement("meta",{"data-react-helmet":"true",name:"twitter:description",content:"GOJEK is a Super App. It's one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia's first and fastest growing unicorn building an on-demand empire."}),c.default.createElement("meta",{"data-react-helmet":"true",property:"og:description",content:"GOJEK is a Super App. It's one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia's first and fastest growing unicorn building an on-demand empire."})),c.default.createElement("section",{id:"home"},c.default.createElement("div",{className:"d-none d-md-block embed-responsive embed-responsive-16by9 embed-video"},c.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},c.default.createElement("source",{src:u.default,type:"video/mp4"}))),c.default.createElement("div",{className:"d-block d-md-none"},c.default.createElement("img",{src:"../../images/superApp/superapp-banner-mobile.jpg",alt:"SuperApp",className:"img-fluid"}))),c.default.createElement("section",{className:"pt-0 pt-md-5 background",id:"super-app"},c.default.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-center align-items-center pt-0"},c.default.createElement("div",{className:"col-md-5 order-1 order-sm-1 pt-5 pt-md-0"},c.default.createElement("h2",{className:"section-sub-head text-center text-md-left mb-3 mb-md-0"},"What is a SUPER APP?"),c.default.createElement("h1",{className:"section-head text-center text-md-left"},"GOJEK. A Super App.",c.default.createElement("br",null),"One App. Many use cases."),c.default.createElement("p",{className:"section-desc text-center text-md-left"},"A Super App is many apps within an umbrella app. It’s an Operating System that unbundles the tyranny of apps. It’s a portal to the internet for a mobile-first generation"),c.default.createElement("a",{className:"btn btn-success text-white btn-cta d-none d-md-block",target:"_blank",href:"https://blog.gojekengineering.com/what-is-a-super-app-4f2d889451e6"},"Read More")),c.default.createElement("div",{className:"col-md-5 order-2 order-sm-1 px-0"},c.default.createElement("div",{className:"embed-responsive embed-responsive-1by1 embed-video"},c.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},c.default.createElement("source",{src:f.default,type:"video/mp4"})))))),c.default.createElement("section",{id:"super",className:"mb-5"},c.default.createElement("div",{className:"row"},c.default.createElement("img",{src:"../../images/superApp/bg-1.svg",className:"test d-none d-md-block",alt:"background image"})),c.default.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-center align-items-center py-0 py-md-5 mt-0 pt-md-5 mx-0 pb-2 pb-5",id:"super-facts",style:{backgroundColor:"#559d49"}},c.default.createElement("div",{className:"col-md-5 ml-0 ml-md-5 px-0 px-md-3"},c.default.createElement("div",{className:"embed-responsive embed-responsive-1by1 embed-video"},c.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},c.default.createElement("source",{src:h.default,type:"video/mp4"})))),c.default.createElement("div",{className:"col-md-5 ml-0 ml-md-5 text-center text-md-left py-0 py-md-5"},c.default.createElement("h1",{className:"section-head pt-5 pt-md-0 text-white"}," ",c.default.createElement("span",{className:"section-numb font-weight-bold"},"6600x")),c.default.createElement("p",{className:"section-desc text-white"},"We have 18+ products from foodtech to fintech to hyper local delivery and massage services"),c.default.createElement("p",{className:"section-desc text-white"},"Our Total order volume growth has risen by 6,600x since we started."),c.default.createElement(d.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"scroll btn btn-light btn-cta text-success",offset:-50},"I want to work here!"))),c.default.createElement("div",null,c.default.createElement("img",{src:"../../images/superApp/bg-5.svg",className:"testLeft d-none d-md-block",alt:"background image"})),c.default.createElement("div",{className:"d-none d-md-block"},c.default.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-center align-items-center py-5"},c.default.createElement("div",{className:"col-md-5 mt-5 pl-5 pl-md-3"},c.default.createElement("h1",{className:"section-head"},c.default.createElement("span",{className:"section-numb font-weight-bold"},"$6.3")," ","Billion"),c.default.createElement("p",{className:"section-desc"},"The GO-PAY ecosystem processes $6.3 billion of annualised Gross Transaction Value."),c.default.createElement("p",{className:"section-desc"},"GOJEK’s payments platform is the leading digital payments service in Indonesia"),c.default.createElement("p",{className:"section-desc"},c.default.createElement("strong",null,"Work with the startup empowering the digital economy")),c.default.createElement(d.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"scroll btn btn-success text-white btn-cta",offset:-50},"Count me in!")),c.default.createElement("div",{className:"col-md-5"},c.default.createElement("div",{className:"embed-responsive embed-responsive-1by1 embed-video"},c.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},c.default.createElement("source",{src:x.default,type:"video/mp4"})))))),c.default.createElement("div",{className:"text-white"},c.default.createElement("div",{className:"col-12 background d-block d-md-none px-0"},c.default.createElement("div",{className:"embed-responsive embed-responsive-16by9 embed-video mt-3"},c.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},c.default.createElement("source",{src:x.default,type:"video/mp4"})))),c.default.createElement("div",{className:"col-12 pb-0 pb-md-5 d-block d-md-none text-center"},c.default.createElement("h1",{className:"section-head text-body pt-5"},"$6.3 Billion"),c.default.createElement("p",{className:"section-desc"},"The GO-PAY ecosystem processes $6.3 billion of annualised Gross Transaction Value.",c.default.createElement("br",null),"GOJEK’s payments platform is the leading digital payments service in Indonesia"),c.default.createElement("p",{className:"section-desc"},c.default.createElement("strong",null,"Work with the startup empowering the digital economy")),c.default.createElement(d.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"mt-4 scroll btn btn-success text-white btn-cta",offset:-50},"Count me in!")))),c.default.createElement("section",{className:"background"},c.default.createElement("div",{className:"background row mx-0"},c.default.createElement("div",{className:"col-md-12 px-0 px-md-0"},c.default.createElement("div",{className:"order-1 pt-0 "},c.default.createElement("div",{className:"embed-responsive embed-responsive-16by9 embed-video"},c.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},c.default.createElement("source",{src:y.default,type:"video/mp4"})))),c.default.createElement("div",{className:"order-2 order-sm-1 my-5 text-center text-md-left px-3 px-md-5 ml-md-5"},c.default.createElement("h1",{className:"section-head"},c.default.createElement("span",{className:"section-numb font-weight-bold"},"16.5")," ","Million Kilometer"),c.default.createElement("p",{className:"section-desc"},"We do 1.5x more daily rides than India’s largest taxi-sharing service.",c.default.createElement("br",null)," We cover 16.5 million km everyday. That’s 21 round trips to the moon and back."),c.default.createElement("p",{className:"section-desc"},c.default.createElement("strong",null,"Architect for the largest ride-sharing app.")),c.default.createElement(d.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"scroll btn btn-success text-white btn-cta mt-4",offset:-50},"How do I join?")))),c.default.createElement("div",null,c.default.createElement("img",{src:"../../images/superApp/bg-3.svg",className:"testr1 d-none d-md-block",alt:"background image"})),c.default.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-center align-items-center py-0 py-md-5 pb-4",style:{backgroundColor:"#559d49"}},c.default.createElement("div",{className:"col-md-5 ml-md-5 ml-0 px-0 pl-md-3"},c.default.createElement("div",{className:"embed-responsive embed-responsive-1by1 embed-video"},c.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},c.default.createElement("source",{src:g.default,type:"video/mp4"})))),c.default.createElement("div",{className:"col-md-5 pt-4 ml-md-5 ml-0 text-center text-md-left"},c.default.createElement("h1",{className:"section-head text-white pt-5 pt-md-0"},c.default.createElement("span",{className:"section-numb font-weight-bold"},"$2 ")," ","Billion"),c.default.createElement("p",{className:"section-desc text-white"},"GO-FOOD processes $2 billion in annualised Gross Transaction Value, making it the largest food delivery service in Southeast Asia."),c.default.createElement("p",{className:"section-desc text-white"},c.default.createElement("strong",null,"Work with the fastest growing food-tech business in the world.")),c.default.createElement(d.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"scroll btn btn-light text-success btn-cta my-4 text-white",offset:-50},"Super interested!")))),c.default.createElement("section",{className:""},c.default.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-center align-items-center py-md-5 py-0"},c.default.createElement("div",{className:"col-md-5 order-2 order-sm-1 pb-5 pb-md-0 text-center text-md-left"},c.default.createElement("h1",{className:"section-head"},c.default.createElement("span",{className:"section-numb font-weight-bold"},"300,000+")," ","merchants"),c.default.createElement("p",{className:"section-desc"},"We have more than 300,000+ merchants on the GO-FOOD platform."," "),c.default.createElement("p",{className:"section-desc"},"80% of these are small mom and pop shops that rely heavily on GO-FOOD for revenues."),c.default.createElement("p",{className:"section-desc"},c.default.createElement("strong",null,"Code that creates jobs, opportunities, livelihoods")),c.default.createElement(d.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"btn btn-success text-white btn-cta mt-4",offset:-50},"Work with us")),c.default.createElement("div",{className:"col-md-5 order-1 px-0 pl-md-5"},c.default.createElement("div",{className:"embed-responsive embed-responsive-1by1 embed-video"},c.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},c.default.createElement("source",{src:k.default,type:"video/mp4"}))))),c.default.createElement("div",null,c.default.createElement("img",{src:"../../images/superApp/bg-4.svg",className:"testr2 d-none d-md-block",alt:"backgrounfd image"})),c.default.createElement("div",{className:"background fact-6",style:{backgroundColor:"#559d49",position:"relative"}},c.default.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-center align-items-center py-0 py-md-5 pb-5"},c.default.createElement("div",{className:"col-md-5 ml-0 pl-md-5 px-0"},c.default.createElement("div",{className:"embed-responsive embed-responsive-1by1 embed-video px-0"},c.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},c.default.createElement("source",{src:j.default,type:"video/mp4"})))),c.default.createElement("div",{className:"col-md-5 ml-0 ml-md-5 text-center text-md-left px-md-5"},c.default.createElement("h1",{className:"section-head pt-5 pt-md-0 text-white"},c.default.createElement("span",{className:"section-numb font-weight-bold"},"350")," ","Million"),c.default.createElement("p",{className:"section-desc text-white"},"We process more than 350 million internal API calls every second."),c.default.createElement("p",{className:"section-desc text-white"},"Our 12 engineers manage a million drivers."),c.default.createElement("p",{className:"section-desc mb-0 text-white"},c.default.createElement("strong",null,"We automate anything that requires manual work.")),c.default.createElement(d.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"btn btn-light btn-cta text-success mt-5",offset:-50},"Help us automate better"))))),c.default.createElement("section",null,c.default.createElement("div",{className:"mt-5 row mx-0 background new-fact"},c.default.createElement("div",{className:"col-md-10 offset-md-1 px-0"},c.default.createElement("div",{className:"embed-responsive embed-responsive-16by9 embed-video d-md-block d-none"},c.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},c.default.createElement("source",{src:A.default,type:"video/mp4"}))),c.default.createElement("div",{className:"embed-responsive embed-responsive-1by1 embed-video d-block d-md-none"},c.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},c.default.createElement("source",{src:A.default,type:"video/mp4"}))),c.default.createElement("div",{className:"order-2 order-sm-1 my-5 col-md-10 offset-md-2 text-center text-md-left"},c.default.createElement("h1",{className:"section-head"},c.default.createElement("span",{className:"section-numb font-weight-bold"},"1 "),"in"," ",c.default.createElement("span",{className:"section-numb font-weight-bold"},"2")," Have The",c.default.createElement("br",null),"GOJEK Super App."),c.default.createElement("p",{className:"section-desc"},"GOJEK has been downloaded more than 125 million times in Indonesia.",c.default.createElement("br",null)," One in two have it installed.",c.default.createElement("br",null),"To make this all work, we run one of the largest jruby, Java and go clusters in Asia."),c.default.createElement("p",{className:"section-desc"},c.default.createElement("strong",null,"Want to make big data look small, now is the chance.")),c.default.createElement(d.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"btn btn-success text-white btn-cta btn-cta-lg-text mt-4",offset:-50},"Make Data-driven decisions"))))),c.default.createElement("section",{className:""},c.default.createElement("div",{className:"background row mx-0"},c.default.createElement("div",{className:"pb-5 col-md-12 px-0"},c.default.createElement("div",{className:"order-1"},c.default.createElement("div",{className:"order-1"},c.default.createElement("div",{className:"embed-responsive embed-responsive-16by9 embed-video"},c.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},c.default.createElement("source",{src:G.default,type:"video/mp4"}))))),c.default.createElement("div",{className:"order-2 order-sm-1 mt-5 mb-md-5 text-center text-md-left pl-md-3 px-3 px-md-5 ml-md-5"},c.default.createElement("h1",{className:"section-head"},c.default.createElement("span",{className:"section-numb font-weight-bold"},"2")," ","Million+ drivers"),c.default.createElement("p",{className:"section-desc"},"We have two million registered drivers on our platform."),c.default.createElement("p",{className:"section-desc"}," ","GOJEK has contributed about IDR 8.2 trillion annually to the Indonesian economy through the income of Driver Partners."," ",c.default.createElement("br",null),c.default.createElement("small",null,"*According to a study by the University of Indonesia.")),c.default.createElement(d.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"btn btn-success text-white btn-cta mt-3 text-uppercase",offset:-50},"Scale with us!")))),c.default.createElement("div",null,c.default.createElement("img",{src:"../../images/superApp/bg-3.svg",className:"testr1 d-none d-md-block",alt:"background image"}))),c.default.createElement("section",{id:"super-jobs",style:{backgroundColor:"#009a44"}},c.default.createElement("div",{className:"container py-5 text-center text-white"},c.default.createElement("div",{className:"spacer d-none d-md-block"}),c.default.createElement("h1",{className:"sr-only "},"Come help us build startups within a startup"),c.default.createElement("h2",{className:""},"Come help us build startups within a startup"),c.default.createElement("p",{className:"pt-2 pt-md-0"},"Not only is this extremely rewarding, it’s also immensely challenging."),c.default.createElement(d.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"btn btn-light btn-cta text-success d-inline-block d-md-none",offset:-50},"I want to work here!"),c.default.createElement(d.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"btn btn-light text-success btn-cta d-none d-md-inline-block mt-1",offset:-50},"Work with us!")),c.default.createElement("h2",{className:"section-sub-head text-center mb-4 text-white mt-3"},"We have no dearth of Hard Technical Problems™, jobs below:"),c.default.createElement("div",{className:"pb-5"},c.default.createElement(_.default,{props:this.props,color:"text-white"}))),c.default.createElement("section",null,c.default.createElement("div",{className:"row mx-0 justify-content-center mt-md-5 mt-0"},c.default.createElement("div",{className:"col-md-8 text-align-center px-0"},c.default.createElement("div",{className:"embed-responsive embed-responsive-1by1 embed-video"},c.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},c.default.createElement("source",{src:L.default,type:"video/mp4"})))))),c.default.createElement("section",{className:"row mx-0 my-5 my-md-0",id:"super-blog"},c.default.createElement("div",{className:"col-12 text-center py-md-2"},c.default.createElement("h1",{className:"font-raleway text-center text-Black"},"But how do we do what we do?",c.default.createElement("br",null)),c.default.createElement("a",{className:"btn btn-success text-white btn-cta mb-5",href:"https://blog.gojekengineering.com/",target:"_blank"},"EVERYTHING GOJEK DOES"))))},t}(r.Component);t.default=C,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-superapp-js-599da4b87478f7b18b51.js.map