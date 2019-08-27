webpackJsonp([53405171541913],{173:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=a(1),d=n(i),r=a(21),c=(n(r),a(18)),m=function(e){function t(a){s(this,t);var n=l(this,e.call(this,a));return n.onClickDepartment=function(e){n.props.props.history.push("/open-positions?d="+e)},n.state={},n}return o(t,e),t.prototype.render=function(){var e=this,t=[{label:"Engineering",imageLink:"../../images/careers/department/Engineering.png",departmentName:"engineering"},{label:"People & Culture",imageLink:"../../images/careers/department/people-and-culture.png",departmentName:"people-and-culture"},{label:"Science",imageLink:"../../images/careers/department/science.png",departmentName:"science"},{label:"Product",imageLink:"../../images/careers/department/product.png",departmentName:"product"},{label:"Program Management",imageLink:"../../images/careers/department/Productmanagement.png",departmentName:"program-management"},{label:"Design",imageLink:"../../images/careers/department/design.png",departmentName:"design"}];return d.default.createElement("section",{className:"pb-5"},d.default.createElement("h3",{className:void 0!==this.props.color?"text-center text-white neosans-regular font-xl-x my-5 text-white":"text-center text-success maison-bold Fmy-5 text-success"},"Choose a Department"),d.default.createElement("div",{className:"container px-0 pb-3 d-none d-md-block"},d.default.createElement("div",{className:"d-flex flex-row flex-wrap justify-content-center my-3 col-lg-9 col-md-12 mx-auto"},t.map(function(t,a){return d.default.createElement("div",{key:a,className:" col-md-4 col-6 text-center my-2  "},d.default.createElement(c.Link,{to:{pathname:"/all-open-positions",search:"?d="+t.departmentName},className:void 0!==e.props.color?"super-app-location px-4 scroll d-flex flex-column justify-content-center align-items-center":"career-department px-4 scroll d-flex flex-column justify-content-center align-items-center",style:{minHeight:"160px"}},d.default.createElement("div",null,d.default.createElement("img",{className:"img-fluid",src:t.imageLink}),d.default.createElement("p",{className:void 0!==e.props.color?"neosans-bold font-md text-uppercase my-1 text-white":"neosans-bold font-md text-uppercase my-1 text-dark"},t.label))))}))),d.default.createElement("div",{className:"d-md-none pt-4"},t.map(function(e,t){return d.default.createElement("div",{key:t},d.default.createElement(c.Link,{to:{pathname:"/all-open-positions",search:"?d="+e.departmentName},className:"roboto-bold font-md text-center text-dark d-block"},e.label),d.default.createElement("hr",null))})))},t}(i.Component);t.default=m,e.exports=t.default},21:function(e,t){e.exports={behindTheScenes:{heading:"Behind the Scenes",content:"We don’t have “office timings”. We’re not a 9-5 “job”. Leaders go only by reputation, not titles. Everyone codes. We believe leaders who code are better judges of technical skill in people. Leaders are 24 years old or 50. Our average age is 29. Age doesn’t define leadership.",video:"https://www.youtube.com/embed/2YdWTpw51sc"},advantages:{heading:"The Gojek Advantage",video:"https://www.youtube.com/embed/2YdWTpw51sc",data:[{id:"1",image:"../../images/advantages/employee-advantage-01.jpg",alt:"Gojek advantage",text:"We care for our people. Employees can claim upto $200 annually towards expenses related to health and wellness. This includes gym memberships, buying a cycle, saunas and massages, sports equipment etc..."},{id:"2",image:"../../images/advantages/employee-advantage-2.jpg",alt:"Gojek advantage",text:"We encourage reading. Employees can claim upto $100 on books purchased. We offer more for technical ones if required."},{id:"3",image:"../../images/advantages/employee-advantage-3.jpg",alt:"Gojek advantage",text:"Communicate. All broadband and mobile bills are reimbursed. We're after all a by-product of the mobile revolution!"},{id:"4",image:"../../images/advantages/employee-advantage-4.jpg",alt:"Gojek advantage",text:"Unlimited sick leaves - Because we trust our employees, because we have 18+ products and employees are micro-entrepreneurs owning the product."},{id:"5",image:"../../images/advantages/employee-advantage-05.jpg",alt:"Gojek advantage",text:"All employees are encouraged to travel to Jakarta to get a feel of the product, its use cases and understand what makes Gojek a verb in Indonesia"},{id:"6",image:"../../images/advantages/employee-advantage-6.jpg",alt:"Gojek advantage",text:"No office timings; the team collectively decides what works for them. No dress code, an atmosphere of independence in decision-making"}]},articles:{heading:"",text:"",captionHeading:"",data:[{id:"1",image:"../../images/careers/ask-for-code.png",link:"http://bit.ly/ArtofFullStack",type:"image",title:"Who is a Full Stack Engineer?",col:12,theme:"green"},{id:"2",image:"../../images/careers/full-stack-engineer.png",link:"https://blog.gojekengineering.com/why-we-ask-for-code-b276b45ea790",type:"image",title:"Why we ask for code",col:12,theme:"black"},{id:"3",image:"../../images/careers/recruiting-devs.png",link:"http://bit.ly/GOJEKRecProcess",type:"image",title:"FAQs: How we go about recruiting a developer",col:12,theme:"lightblue"}]},categories:{heading:"Build startups within a startup",content:"Working with Gojek means the chance to build something from scratch, the chance to make big decisions on products and people. We’re expanding across Southeast Asia and our Super App needs super people. At Gojek, Engineering is a first-class job and we’re committed to Open Source projects, Test Driven Development, Pair Programming and writing beautiful code. Our definition of rockstars are engineers, designers and Product Managers who want to craft an org that impacts Southeast Asia.",category:[{categoryId:"1",categoryName:"Engineering",openPositions:[{openPositionId:"1",openPositionName:"Full Stack Engineer",experience:"3-5 YEARS",openPositionContent:[{heading1:"What you will do",heading2:"Experience & Qualifications",content:[{id:1,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:2,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:3,data:"Proactively manage stakeholder communication related to deliverables, risks, changes and dependencies."},{id:4,data:"Translate business requirements into scalable and extensible design."},{id:5,data:"Communicate, collaborate and work effectively across distributed teams in a global environment."},{id:6,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:7,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:8,data:"Proactively manage stakeholder communication related to deliverables, risks, changes and dependencies."},{id:9,data:"Translate business requirements into scalable and extensible design."},{id:10,data:"Communicate, collaborate and work effectively across distributed teams in a global environment."}]}]},{openPositionId:"2",openPositionName:"Android Engineer",experience:"3-5 YEARS",openPositionContent:[{heading1:"What you will do",heading2:"Experience & Qualifications",content:[{id:1,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:2,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:3,data:"Proactively manage stakeholder communication related to deliverables, risks, changes and dependencies."},{id:4,data:"Translate business requirements into scalable and extensible design."},{id:5,data:"Communicate, collaborate and work effectively across distributed teams in a global environment."},{id:6,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:7,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:8,data:"Proactively manage stakeholder communication related to deliverables, risks, changes and dependencies."},{id:9,data:"Translate business requirements into scalable and extensible design."},{id:10,data:"Communicate, collaborate and work effectively across distributed teams in a global environment."}]}]},{openPositionId:"0",viewAllPosition:"View All Positions",link:"#"}]},{categoryId:"2",categoryName:"Category 2",openPositions:[]},{categoryId:"3",categoryName:"Category 3",openPositions:[{openPositionId:"1",openPositionName:"Full Stack Engineer",experience:"3-5 YEARS",openPositionContent:[{heading1:"What you will do",heading2:"Experience & Qualifications",content:[{id:1,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:2,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:3,data:"Proactively manage stakeholder communication related to deliverables, risks, changes and dependencies."},{id:4,data:"Translate business requirements into scalable and extensible design."},{id:5,data:"Communicate, collaborate and work effectively across distributed teams in a global environment."},{id:6,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:7,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:8,data:"Proactively manage stakeholder communication related to deliverables, risks, changes and dependencies."},{id:9,data:"Translate business requirements into scalable and extensible design."},{id:10,data:"Communicate, collaborate and work effectively across distributed teams in a global environment."}]}]},{openPositionId:"2",openPositionName:"Android Engineer",experience:"3-5 YEARS",openPositionContent:[{heading1:"What you will do",heading2:"Experience & Qualifications",content:[{id:1,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:2,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:3,data:"Proactively manage stakeholder communication related to deliverables, risks, changes and dependencies."},{id:7,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:8,data:"Proactively manage stakeholder communication related to deliverables, risks, changes and dependencies."},{id:9,data:"Translate business requirements into scalable and extensible design."},{id:10,data:"Communicate, collaborate and work effectively across distributed teams in a global environment."}]}]},{openPositionId:"3",openPositionName:"iOS Engineer",experience:"3-5 YEARS",openPositionContent:[{heading1:"What you will do",heading2:"Experience & Qualifications",content:[{id:1,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:2,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:3,data:"Proactively manage stakeholder communication related to deliverables, risks, changes and dependencies."},{id:4,data:"Translate business requirements into scalable and extensible design."},{id:5,data:"Communicate, collaborate and work effectively across distributed teams in a global environment."},{id:10,data:"Communicate, collaborate and work effectively across distributed teams in a global environment."}]}]},{openPositionId:"4",openPositionName:"Full Stack Engineer",experience:"3-5 YEARS",openPositionContent:[{heading1:"What you will do",heading2:"Experience & Qualifications",content:[{id:1,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:2,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:3,data:"Proactively manage stakeholder communication related to deliverables, risks, changes and dependencies."},{id:7,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:8,data:"Proactively manage stakeholder communication related to deliverables, risks, changes and dependencies."},{id:9,data:"Translate business requirements into scalable and extensible design."},{id:10,data:"Communicate, collaborate and work effectively across distributed teams in a global environment."}]}]},{openPositionId:"0",viewAllPosition:"View All Positions",link:"#"}]},{categoryId:"4",categoryName:"Category 4",openPositions:[{openPositionId:"1",openPositionName:"Full Stack Engineer",experience:"3-5 YEARS",openPositionContent:[{heading1:"What you will do",heading2:"Experience & Qualifications",content:[{id:1,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:2,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:3,data:"Proactively manage stakeholder communication related to deliverables, risks, changes and dependencies."},{id:4,data:"Translate business requirements into scalable and extensible design."},{id:5,data:"Communicate, collaborate and work effectively across distributed teams in a global environment."},{id:6,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:7,data:"Design and develop highly scalable, reliable and fault tolerant systems for one of the world’s fastest growing unicorns."},{id:8,data:"Proactively manage stakeholder communication related to deliverables, risks, changes and dependencies."},{id:9,data:"Translate business requirements into scalable and extensible design."},{id:10,data:"Communicate, collaborate and work effectively across distributed teams in a global environment."}]}]},{openPositionId:"0",viewAllPosition:"View All Positions",link:"#"}]}]},employeeStories:{heading:"At Gojek, we fail a lot.",text:"Failing is learning. If we’re not failing, we’re not doing it right. We have a cross-pollination of ideas from Singapore, Indonesia and India. Different cultures, different mindsets, unified in solving problems and learning along the way. And lastly, embrace chaos. You can’t build if you can’t expect the unexpected.",captionHeading:"Employee Stories",data:[{id:"1",employeeImage:"../../images/employee-stories/crystal.jpg",employeeName:"Crystal Widjaja",testimonial:"I'm actually blessed to be part of an org that has an innovative and inclusive culture. Our attitude is framed around solving difficult problems and inclusivity. This diversity of thought cuts across gender, ethnicities, and backgrounds allowing us to move fast and think different. I love that fact we are a very distributed and culturally dispersed team. I've witnessed interesting insights that I never would have without this diversity.",active:!0},{id:"2",employeeImage:"../../images/employee-stories/shobit.jpg",employeeName:"Shobhit Srivastava",testimonial:"Gojek is multiple startups in one. We have the equivalents of foodtech, fintech, ride-sharing, home services, logistics and more. Because of the sheer size and scale we operate in, it's unlike any other startup. You get to ideate with multiple teams, empowered to take critical product decisions and work with a team that has ingrained the philosophy of working with a 'lean engineering mindset’.",active:!1},{id:"3",employeeImage:"../../images/employee-stories/divya.jpg",employeeName:"Divya Jaisawal",testimonial:"I’ve had the freedom to experiment with new ideas at Gojek. In the process I’ve learnt to convert raw thoughts into shaping the end product. To be given this platform to experiment and learn with some of the brightest minds is an enticing opportunity. So much so, I love to talk about these experiences outside of work to friends and family alike - and that shows how rich the culture is.",active:!1}]}}},621:function(e,t,a){e.exports=a.p+"static/banner.50d4a4d6.mp4"},622:function(e,t,a){e.exports=a.p+"static/superApp-350-million.40f4012c.mp4"},623:function(e,t,a){e.exports=a.p+"static/superApp-5 Billion.b084bf57.mp4"},624:function(e,t,a){e.exports=a.p+"static/superApp-6600.5a63388d.mp4"},625:function(e,t,a){e.exports=a.p+"static/superApp-merchants.bab9b163.mp4"},626:function(e,t,a){e.exports=a.p+"static/superApp.19f6ff8a.mp4"},627:function(e,t,a){e.exports=a.p+"static/superapp-1-in.10774e97.mp4"},628:function(e,t,a){e.exports=a.p+"static/superapp-1-million.d4f47ac8.mp4"},629:function(e,t,a){e.exports=a.p+"static/superapp-16.5-million.443766f1.mp4"},630:function(e,t,a){e.exports=a.p+"static/superapp-first.ecff54ca.mp4"},631:function(e,t,a){e.exports=a.p+"static/superapp-market-share.ec8b9e16.mp4"},475:function(e,t){},378:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=a(1),d=n(i),r=a(13),c=a(621),m=n(c),u=a(626),p=n(u),f=a(624),g=n(f),h=a(631),b=n(h),v=a(629),y=n(v),w=a(623),E=n(w),x=a(625),k=n(x),N=a(622),P=n(N),j=a(627),A=n(j),I=a(628),S=n(I),C=a(630),W=n(C);a(475);var D=a(173),T=n(D),G=a(9),L=n(G),O=function(e){function t(){return s(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.componentWillMount=function(){"undefined"!=typeof localStorage&&localStorage.setItem("source","superapp")},t.prototype.render=function(){return d.default.createElement("div",{className:"first-section"},d.default.createElement(L.default,{title:"Gojek: SuperApp",description:"Gojek is a Super App. It's one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia's first and fastest growing unicorn building an on-demand empire.",url:"https://www.gojek.io"}),d.default.createElement("section",{id:"home"},d.default.createElement("div",{className:"d-none d-md-block embed-responsive embed-responsive-16by9 embed-video"},d.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},d.default.createElement("source",{src:m.default,type:"video/mp4"}))),d.default.createElement("div",{className:"d-block d-md-none"},d.default.createElement("img",{src:"../../images/superApp/superapp-banner-mobile.jpg",alt:"SuperApp",className:"img-fluid"}))),d.default.createElement("section",{className:"pt-0 pt-md-5 background",id:"super-app"},d.default.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-center align-items-center pt-0"},d.default.createElement("div",{className:"col-md-5 order-1 order-sm-1 pt-5 pt-md-0"},d.default.createElement("h2",{className:"section-sub-head text-center text-md-left mb-3 mb-md-0"},"What is a SUPER APP?"),d.default.createElement("h1",{className:"section-head text-center text-md-left"},"Gojek. A Super App.",d.default.createElement("br",null),"One App. Many use cases."),d.default.createElement("p",{className:"section-desc text-center text-md-left"},"A Super App is many apps within an umbrella app. It’s an Operating System that unbundles the tyranny of apps. It’s a portal to the internet for a mobile-first generation"),d.default.createElement("a",{className:"btn btn-success text-white btn-cta d-none d-md-block",target:"_blank",href:"https://blog.gojekengineering.com/what-is-a-super-app-4f2d889451e6"},"Read More")),d.default.createElement("div",{className:"col-md-5 order-2 order-sm-1 px-0"},d.default.createElement("div",{className:"embed-responsive embed-responsive-1by1 embed-video"},d.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},d.default.createElement("source",{src:p.default,type:"video/mp4"})))))),d.default.createElement("section",{id:"super",className:"mb-5"},d.default.createElement("div",{className:"row"},d.default.createElement("img",{src:"../../images/superApp/bg-1.svg",className:"test d-none d-md-block",alt:"background image"})),d.default.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-center align-items-center py-0 py-md-5 mt-0 pt-md-5 mx-0 pb-2 pb-5",id:"super-facts",style:{backgroundColor:"#559d49"}},d.default.createElement("div",{className:"col-md-5 ml-0 ml-md-5 px-0 px-md-3"},d.default.createElement("div",{className:"embed-responsive embed-responsive-1by1 embed-video"},d.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},d.default.createElement("source",{src:g.default,type:"video/mp4"})))),d.default.createElement("div",{className:"col-md-5 ml-0 ml-md-5 text-center text-md-left py-0 py-md-5"},d.default.createElement("h1",{className:"section-head pt-5 pt-md-0 text-white"}," ",d.default.createElement("span",{className:"section-numb font-weight-bold"},"1100x")),d.default.createElement("p",{className:"section-desc text-white"},"We have 18+ products from foodtech to fintech to hyper local delivery and massage services"),d.default.createElement("p",{className:"section-desc text-white"},"Our Total order volume growth has risen by 6,600x since we started."),d.default.createElement(r.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"scroll btn btn-light btn-cta text-success",offset:-50},"I want to work here!"))),d.default.createElement("div",null,d.default.createElement("img",{src:"../../images/superApp/bg-5.svg",className:"testLeft d-none d-md-block",alt:"background image"})),d.default.createElement("div",{className:"d-none d-md-block"},d.default.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-center align-items-center py-5"},d.default.createElement("div",{className:"col-md-5 mt-5 pl-5 pl-md-3"},d.default.createElement("h1",{className:"section-head"},d.default.createElement("span",{className:"section-numb font-weight-bold"},"$6.3")," ","Billion"),d.default.createElement("p",{className:"section-desc"},"The GoPay ecosystem processes $6.3 billion of annualised Gross Transaction Value."),d.default.createElement("p",{className:"section-desc"},"Gojek’s payments platform is the leading digital payments service in Indonesia"),d.default.createElement("p",{className:"section-desc"},d.default.createElement("strong",null,"Work with the startup empowering the digital economy")),d.default.createElement(r.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"scroll btn btn-success text-white btn-cta",offset:-50},"Count me in!")),d.default.createElement("div",{className:"col-md-5"},d.default.createElement("div",{className:"embed-responsive embed-responsive-1by1 embed-video"},d.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},d.default.createElement("source",{src:E.default,type:"video/mp4"})))))),d.default.createElement("div",{className:"text-white"},d.default.createElement("div",{className:"col-12 background d-block d-md-none px-0"},d.default.createElement("div",{className:"embed-responsive embed-responsive-16by9 embed-video mt-3"},d.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},d.default.createElement("source",{src:E.default,type:"video/mp4"})))),d.default.createElement("div",{className:"col-12 pb-0 pb-md-5 d-block d-md-none text-center"},d.default.createElement("h1",{className:"section-head text-body pt-5"},"$6.3 Billion"),d.default.createElement("p",{className:"section-desc"},"The GoPay ecosystem processes $6.3 billion of annualised Gross Transaction Value.",d.default.createElement("br",null),"Gojek’s payments platform is the leading digital payments service in Indonesia"),d.default.createElement("p",{className:"section-desc"},d.default.createElement("strong",null,"Work with the startup empowering the digital economy")),d.default.createElement(r.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"mt-4 scroll btn btn-success text-white btn-cta",offset:-50},"Count me in!")))),d.default.createElement("section",{className:"background"},d.default.createElement("div",{className:"background row mx-0"},d.default.createElement("div",{className:"col-md-12 px-0 px-md-0"},d.default.createElement("div",{className:"order-1 pt-0 "},d.default.createElement("div",{className:"embed-responsive embed-responsive-16by9 embed-video"},d.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},d.default.createElement("source",{src:y.default,type:"video/mp4"})))),d.default.createElement("div",{className:"order-2 order-sm-1 my-5 text-center text-md-left px-3 px-md-5 ml-md-5"},d.default.createElement("h1",{className:"section-head"},d.default.createElement("span",{className:"section-numb font-weight-bold"},"16.5")," ","Million Kilometer"),d.default.createElement("p",{className:"section-desc"},"We do 1.5x more daily rides than India’s largest taxi-sharing service.",d.default.createElement("br",null)," We cover 16.5 million km everyday. That’s 21 round trips to the moon and back."),d.default.createElement("p",{className:"section-desc"},d.default.createElement("strong",null,"Architect for the largest ride-sharing app.")),d.default.createElement(r.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"scroll btn btn-success text-white btn-cta mt-4",offset:-50},"How do I join?")))),d.default.createElement("div",null,d.default.createElement("img",{src:"../../images/superApp/bg-3.svg",className:"testr1 d-none d-md-block",alt:"background image"})),d.default.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-center align-items-center py-0 py-md-5 pb-4",style:{backgroundColor:"#559d49"}},d.default.createElement("div",{className:"col-md-5 ml-md-5 ml-0 px-0 pl-md-3"},d.default.createElement("div",{className:"embed-responsive embed-responsive-1by1 embed-video"},d.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},d.default.createElement("source",{src:b.default,type:"video/mp4"})))),d.default.createElement("div",{className:"col-md-5 pt-4 ml-md-5 ml-0 text-center text-md-left"},d.default.createElement("h1",{className:"section-head text-white pt-5 pt-md-0"},d.default.createElement("span",{className:"section-numb font-weight-bold"},"$2 ")," ","Billion"),d.default.createElement("p",{className:"section-desc text-white"},"GoFood processes $2 billion in annualised Gross Transaction Value, making it the largest food delivery service in Southeast Asia."),d.default.createElement("p",{className:"section-desc text-white"},d.default.createElement("strong",null,"Work with the fastest growing food-tech business in the world.")),d.default.createElement(r.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"scroll btn btn-light text-success btn-cta my-4 text-white",offset:-50},"Super interested!")))),d.default.createElement("section",{className:""},d.default.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-center align-items-center py-md-5 py-0"},d.default.createElement("div",{className:"col-md-5 order-2 order-sm-1 pb-5 pb-md-0 text-center text-md-left"},d.default.createElement("h1",{className:"section-head"},d.default.createElement("span",{className:"section-numb font-weight-bold"},"300,000+")," ","merchants"),d.default.createElement("p",{className:"section-desc"},"We have more than 300,000+ merchants on the GoFood platform."," "),d.default.createElement("p",{className:"section-desc"},"80% of these are small mom and pop shops that rely heavily on GoFood for revenues."),d.default.createElement("p",{className:"section-desc"},d.default.createElement("strong",null,"Code that creates jobs, opportunities, livelihoods")),d.default.createElement(r.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"btn btn-success text-white btn-cta mt-4",offset:-50},"Work with us")),d.default.createElement("div",{className:"col-md-5 order-1 px-0 pl-md-5"},d.default.createElement("div",{className:"embed-responsive embed-responsive-1by1 embed-video"},d.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},d.default.createElement("source",{src:k.default,type:"video/mp4"}))))),d.default.createElement("div",null,d.default.createElement("img",{src:"../../images/superApp/bg-4.svg",className:"testr2 d-none d-md-block",alt:"backgrounfd image"})),d.default.createElement("div",{className:"background fact-6",style:{backgroundColor:"#559d49",position:"relative"}},d.default.createElement("div",{className:"d-flex flex-column flex-md-row justify-content-center align-items-center py-0 py-md-5 pb-5"},d.default.createElement("div",{className:"col-md-5 ml-0 pl-md-5 px-0"},d.default.createElement("div",{className:"embed-responsive embed-responsive-1by1 embed-video px-0"},d.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},d.default.createElement("source",{src:P.default,type:"video/mp4"})))),d.default.createElement("div",{className:"col-md-5 ml-0 ml-md-5 text-center text-md-left px-md-5"},d.default.createElement("h1",{className:"section-head pt-5 pt-md-0 text-white"},d.default.createElement("span",{className:"section-numb font-weight-bold"},"350")," ","Million"),d.default.createElement("p",{className:"section-desc text-white"},"We process more than 350 million internal API calls every second."),d.default.createElement("p",{className:"section-desc text-white"},"Our 12 engineers manage a million drivers."),d.default.createElement("p",{className:"section-desc mb-0 text-white"},d.default.createElement("strong",null,"We automate anything that requires manual work.")),d.default.createElement(r.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"btn btn-light btn-cta text-success mt-5",offset:-50},"Help us automate better"))))),d.default.createElement("section",null,d.default.createElement("div",{className:"mt-5 row mx-0 background new-fact"},d.default.createElement("div",{className:"col-md-10 offset-md-1 px-0"},d.default.createElement("div",{className:"embed-responsive embed-responsive-16by9 embed-video d-md-block d-none"},d.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},d.default.createElement("source",{src:A.default,type:"video/mp4"}))),d.default.createElement("div",{className:"embed-responsive embed-responsive-1by1 embed-video d-block d-md-none"},d.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},d.default.createElement("source",{src:A.default,type:"video/mp4"}))),d.default.createElement("div",{className:"order-2 order-sm-1 my-5 col-md-10 offset-md-2 text-center text-md-left"
},d.default.createElement("h1",{className:"section-head"},d.default.createElement("span",{className:"section-numb font-weight-bold"},"1 "),"in"," ",d.default.createElement("span",{className:"section-numb font-weight-bold"},"2")," Have The",d.default.createElement("br",null),"Gojek Super App."),d.default.createElement("p",{className:"section-desc"},"Gojek has been downloaded more than 125 million times in Indonesia.",d.default.createElement("br",null)," One in two have it installed.",d.default.createElement("br",null),"To make this all work, we run one of the largest jruby, Java and go clusters in Asia."),d.default.createElement("p",{className:"section-desc"},d.default.createElement("strong",null,"Want to make big data look small, now is the chance.")),d.default.createElement(r.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"btn btn-success text-white btn-cta btn-cta-lg-text mt-4",offset:-50},"Make Data-driven decisions"))))),d.default.createElement("section",{className:""},d.default.createElement("div",{className:"background row mx-0"},d.default.createElement("div",{className:"pb-5 col-md-12 px-0"},d.default.createElement("div",{className:"order-1"},d.default.createElement("div",{className:"order-1"},d.default.createElement("div",{className:"embed-responsive embed-responsive-16by9 embed-video"},d.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},d.default.createElement("source",{src:S.default,type:"video/mp4"}))))),d.default.createElement("div",{className:"order-2 order-sm-1 mt-5 mb-md-5 text-center text-md-left pl-md-3 px-3 px-md-5 ml-md-5"},d.default.createElement("h1",{className:"section-head"},d.default.createElement("span",{className:"section-numb font-weight-bold"},"2")," ","Million+ drivers"),d.default.createElement("p",{className:"section-desc"},"We have two million registered drivers on our platform."),d.default.createElement("p",{className:"section-desc"}," ","Gojek has contributed about IDR 8.2 trillion annually to the Indonesian economy through the income of Driver Partners."," ",d.default.createElement("br",null),d.default.createElement("small",null,"*According to a study by the University of Indonesia.")),d.default.createElement(r.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"btn btn-success text-white btn-cta mt-3 text-uppercase",offset:-50},"Scale with us!")))),d.default.createElement("div",null,d.default.createElement("img",{src:"../../images/superApp/bg-3.svg",className:"testr1 d-none d-md-block",alt:"background image"}))),d.default.createElement("section",{id:"super-jobs",style:{backgroundColor:"#009a44"}},d.default.createElement("div",{className:"container py-5 text-center text-white"},d.default.createElement("div",{className:"spacer d-none d-md-block"}),d.default.createElement("h1",{className:"sr-only "},"Come help us build startups within a startup"),d.default.createElement("h2",{className:""},"Come help us build startups within a startup"),d.default.createElement("p",{className:"pt-2 pt-md-0"},"Not only is this extremely rewarding, it’s also immensely challenging."),d.default.createElement(r.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"btn btn-light btn-cta text-success d-inline-block d-md-none",offset:-50},"I want to work here!"),d.default.createElement(r.Link,{to:"super-jobs",spy:!0,smooth:!0,className:"btn btn-light text-success btn-cta d-none d-md-inline-block mt-1",offset:-50},"Work with us!")),d.default.createElement("h2",{className:"section-sub-head text-center mb-4 text-white mt-3"},"We have no dearth of Hard Technical Problems™, jobs below:"),d.default.createElement("div",{className:"pb-5"},d.default.createElement(T.default,{props:this.props,color:"text-white"}))),d.default.createElement("section",null,d.default.createElement("div",{className:"row mx-0 justify-content-center mt-md-5 mt-0"},d.default.createElement("div",{className:"col-md-8 text-align-center px-0"},d.default.createElement("div",{className:"embed-responsive embed-responsive-1by1 embed-video"},d.default.createElement("video",{width:"100%",height:"100%",autoPlay:!0,loop:!0,muted:!0},d.default.createElement("source",{src:W.default,type:"video/mp4"})))))),d.default.createElement("section",{className:"row mx-0 my-5 my-md-0",id:"super-blog"},d.default.createElement("div",{className:"col-12 text-center py-md-2"},d.default.createElement("h1",{className:"font-raleway text-center text-Black"},"But how do we do what we do?",d.default.createElement("br",null)),d.default.createElement("a",{className:"btn btn-success text-white btn-cta mb-5",href:"https://blog.gojekengineering.com/",target:"_blank"},"EVERYTHING GOJEK DOES"))))},t}(i.Component);t.default=O,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-superapp-js-7b1b96fb11bffdf9f062.js.map