webpackJsonp([0xae674455b0ea],{86:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=a(1),s=n(l),c=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=this.props.data,t="black"===e.theme?"#2a2b2b":"lightblue"===e.theme?"#99d3d8":"#009944",a={backgroundColor:t},n={maxWidth:"400px"};return s.default.createElement("div",{className:"bg-green d-flex align-items-stretch col-md-"+e.col,style:a},s.default.createElement("a",{href:e.link,target:"_blank",className:"link-decoration"},s.default.createElement("div",{className:"row py-3  align-items-center py-3"},s.default.createElement("div",{className:"image"===e.type?12===e.col?"col-md-6":"col-md-5":"col-md-8"},s.default.createElement("h5",{className:"p-5 text-white font-xl-l RaleWayBold"},e.title)),"image"===e.type&&s.default.createElement("div",{className:"col-md-6"},s.default.createElement("img",{style:n,src:e.image,alt:e.title,className:"col-md-12 img-fluid"})))))},t}(l.Component);t.default=c,e.exports=t.default},87:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s=a(1),c=n(s),u=a(16),d=n(u),p=a(48),f=n(p),m=a(86),h=n(m),g=a(88),y=n(g),b=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=f.default.articles,t={responsive:[{breakpoint:767,slidesToShow:1,slidesToScroll:1,mobileFirst:!0}]};return c.default.createElement("div",null,c.default.createElement("div",{className:"container pb-5 d-none d-md-block"},c.default.createElement("div",{className:"row raleway-bold"},e.data.map(function(e,t){return c.default.createElement(h.default,{data:e,key:t})}))),c.default.createElement(d.default,l({},t,{className:"d-md-none employee-stories justify-content-md-center pt-4 custom-controls-dark"}),e.data.map(function(e,t){return c.default.createElement(y.default,{data:e,key:t})})))},t}(s.Component);t.default=b,e.exports=t.default},88:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=a(1),s=n(l),c=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=this.props.data,t="black"===e.theme?"#2a2b2b":"lightblue"===e.theme?"#99d3d8":"#009944",a={backgroundColor:t,minHeight:"150px",fontSize:"30px"},n={verticalAlign:"middle"};return s.default.createElement("div",{className:"card rounded-0 border-0"},s.default.createElement("a",{href:e.link,target:"_blank",style:n},s.default.createElement("div",{className:"card-body  text-md-left text-center d-flex align-items-center justify-content-center",style:a},s.default.createElement("p",{className:"raleway-bold text-black font-lg text-white"},e.title))))},t}(l.Component);t.default=c,e.exports=t.default},48:function(e,t){e.exports={behindTheScenes:{heading:"Behind the Scenes",content:"We don’t have “office timings”. We’re not a 9-5 “job”. Leaders go only by reputation, not titles. Everyone codes. We believe leaders who code are better judges of technical skill in people. Leaders are 24 years old or 50. Our average age is 29. Age doesn’t define leadership.",video:"https://www.youtube.com/embed/2YdWTpw51sc"},advantages:{heading:"The GO-JEK Advantage",video:"https://www.youtube.com/embed/2YdWTpw51sc",data:[{id:"1",image:"../../images/advantages/employee-advantage-1.jpg",alt:"Go-JEK advantage",text:"We care for our people. Employees can claim upto $200 annually towards expenses related to health and wellness. This includes gym memberships, buying a cycle, saunas and massages, sports equipment etc..."},{id:"2",image:"../../images/advantages/employee-advantage-2.jpg",alt:"Go-JEK advantage",text:"We encourage reading. Employees can claim upto $100 on books purchased. We offer more for technical ones if required."},{id:"3",image:"../../images/advantages/employee-advantage-3.jpg",alt:"Go-JEK advantage",text:"Communicate. All broadband and mobile bills are reimbursed. We're after all a by-product of the mobile revolution!"},{id:"4",image:"../../images/advantages/employee-advantage-4.jpg",alt:"Go-JEK advantage",text:"Unlimited sick leaves - Because we trust our employees, because we have 18+ products and employees are micro-entrepreneurs owning the product."},{id:"5",image:"../../images/advantages/employee-advantage-5.jpg",alt:"Go-JEK advantage",text:"All employees are encouraged to travel to Jakarta to get a feel of the product, its use cases and understand what makes GO-JEK a verb in Indonesia"},{id:"6",image:"../../images/advantages/employee-advantage-6.jpg",alt:"Go-JEK advantage",text:"No office timings; the team collectively decides what works for them. No dress code, an atmosphere of independence in decision-making"}]},employeeStories:{heading:"At GO-JEK, we fail a lot.",text:"Failing is learning. If we’re not failing, we’re not doing it right. We have a cross-pollination of ideas from Singapore, Indonesia and India. Different cultures, different mindsets, unified in solving problems and learning along the way. And lastly, embrace chaos. You can’t build if you can’t expect the unexpected.",captionHeading:"Employee Stories",data:[{id:"1",employeeImage:"../../images/employee-stories/shobit.jpg",employeeName:"Shobhit Srivastava",testimonial:"GO-JEK is multiple startups in one. We have the equivalents of foodtech, fintech, ride-sharing, home services, logistics and more. Because of the sheer size and scale we operate in, it's unlike any other startup. You get to ideate with multiple teams, empowered to take critical product decisions and work with a team that has ingrained the philosophy of working with a 'lean engineering mindset’.",active:!0},{id:"2",employeeImage:"../../images/employee-stories/divya.jpg",employeeName:"Divya Jaisawal",testimonial:"I’ve had the freedom to experiment with new ideas at GO-JEK. In the process I’ve learnt to convert raw thoughts into shaping the end product. To be given this platform to experiment and learn with some of the brightest minds is an enticing opportunity. So much so, I love to talk about these experiences outside of work to friends and family alike - and that shows how rich the culture is.",active:!1},{id:"3",employeeImage:"../../images/employee-stories/crystal.jpg",employeeName:"Crystal Widjaja",testimonial:"I'm actually blessed to be part of an org that has an innovative and inclusive culture. Our attitude is framed around solving difficult problems and inclusivity. This diversity of thought cuts across gender, ethnicities, and backgrounds allowing us to move fast and think different. I love that fact we are a very distributed and culturally dispersed team. I've witnessed interesting insights that I never would have without this diversity.",active:!1}]},articles:{heading:"",text:"",captionHeading:"",data:[{id:"1",image:"../../images/careers/full-stack-engineer.png",link:"http://bit.ly/ArtofFullStack",type:"image",title:"Who is a Full Stack Engineer?",col:8,theme:"green"},{id:"2",image:"../../images/careers/full-stack-engineer.png",link:"https://blog.gojekengineering.com/why-we-ask-for-code-b276b45ea790",type:"text",title:"Why we ask for code",col:4,theme:"black"},{id:"3",image:"../../images/careers/recruiting-devs.png",link:"http://bit.ly/GOJEKRecProcess",type:"image",title:"FAQs: How we go about recruiting a developer",col:12,theme:"lightblue"}]}}},282:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=a(1),s=n(l),c=a(51),u=n(c),d=a(87),p=n(d),f=a(8),m=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){return s.default.createElement("div",null,s.default.createElement(f.Helmet,null,s.default.createElement("title",null," GO-JEK Tech")),s.default.createElement("section",{className:"first-section"},s.default.createElement("img",{className:"img-fluid",src:"/../images/job-description/thank-you-banner.png"})),s.default.createElement("section",null,s.default.createElement("div",{className:"d-flex flex-row flex-wrap justify-content-center py-5 align-items-center"},s.default.createElement("p",{className:"text-center font-xl raleway-bold text-black text-uppercase col-10"},"We have received your application!"),s.default.createElement("div",{className:"col-md-7 text-center roboto-regular"},s.default.createElement("p",null,"Thanks for taking the time to apply for our position. We appreciate your interest in GO-JEK."),s.default.createElement("p",null,"We're currently in the process of taking applications for this position. We will begin taking interviews on this position shortly. If you are selected to continue to the interview process, our human resources department will be in contact within 2-3 days."),s.default.createElement("p",null,"In the meantime, you can check out the links below for insight into our interview process.")))),s.default.createElement("section",{className:"gray-bg"},s.default.createElement(p.default,null)),s.default.createElement(u.default,{theme:"green",text:"Think you fit the bill?",btnText:"APPLY NOW",link:"/careers/"}))},t}(l.Component);t.default=m,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-thank-you-js-2a4bb6505147a55533f9.js.map