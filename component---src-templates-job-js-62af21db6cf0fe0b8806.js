webpackJsonp([0x71509ca2c5c9],{302:function(e,t,a){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function n(e){return e&&e.__esModule?e:{default:e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var o=a(1),m=n(o),d=a(8),i=a(20),f=(n(i),a(3)),u=l(f),p=function(e){function t(a){s(this,t);var l=r(this,e.call(this,a));return l.handleClick=l.handleClick.bind(l),l}return c(t,e),t.prototype.handleClick=function(e){(0,i.navigateTo)({pathname:"/apply",state:{id:this.props.data.jobsJson.id,path:this.props.data.jobsJson.positionSlug,name:this.props.data.jobsJson.position,place:this.props.data.jobsJson.place,jobId:this.props.data.jobsJson.jobId,referer:void 0===this.props.location.state?"https://www.gojek.io/":this.props.location.state.referer}})},t.prototype.getTabHeading=function(e){switch(e){case"responsibilities":return"Responsibilities";case"experience":return"EXPERIENCE & SKILLS";case"about":return"About you";case"overview":return"Overview";case"expectations":return"Expectations";case"whatWillYouDo":return"What will you do";case"whatWillYouNeed":return"What will you need";case"whatWouldbeaBonus":return"What would be a bonus";case"projects":return"Projects you could work on";case"requirements":return"Requirements";case"rolesOverview":return"About the role";default:return"About"}},t.prototype.componentWillMount=function(){"undefined"!=typeof localStorage&&localStorage.setItem("source","gojek.io/gomakeimpact")},t.prototype.render=function(){var e=this,t=this.props.data.jobsJson;if(""!==t.overview){var a=t.overview.split("|"),l=[];a.forEach(function(e,t){l.push(m.default.createElement("p",{key:t},e))})}if(""!==t.rolesOverview){var n=t.rolesOverview.split("|"),s=[];n.forEach(function(e,t){s.push(m.default.createElement("p",{key:t},e))})}return m.default.createElement("div",null,m.default.createElement(d.Helmet,null,m.default.createElement("title",null," ",t.title," "),m.default.createElement("meta",{property:"og:title",content:t.title}),m.default.createElement("meta",{name:"twitter:title",content:t.title}),m.default.createElement("meta",{name:"description",content:t.metaDescription}),m.default.createElement("meta",{name:"twitter:description",content:t.metaDescription}),m.default.createElement("meta",{property:"og:description",content:t.metaDescription})),m.default.createElement("section",{className:"first-section"},m.default.createElement("img",{className:"img-fluid",src:"../../images/careers/job-illustration.png"})),m.default.createElement("section",{className:""},m.default.createElement("div",{className:"container py-5"},m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-lg-10 offset-lg-1"},m.default.createElement("h1",{className:"h2 font-xl text-left text-black raleway-extrabold font-xl text-black mb-1"},t.position),m.default.createElement("div",{className:"text-left"},m.default.createElement("button",{onClick:this.handleClick,target:"_blank",className:"text-center btn bg-green text-white raleway-bold text-uppercase my-1 font-md custom-btn"},"APPLY NOW")))))),m.default.createElement("section",{className:""},m.default.createElement("div",{className:"container"},m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-lg-10 offset-lg-1"},m.default.createElement("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist"},t.headings.map(function(t,a){return m.default.createElement("li",{className:"nav-item",key:a},m.default.createElement("a",{className:"nav-link jd-tab roboto-bold text-uppercase "+(0===a?"active":""),id:"#"+t+"-tab","data-toggle":"tab",href:"#"+t,role:"tab","aria-controls":""+t,"aria-selected":"true"},e.getTabHeading(t)))}),("fk0jsih"===t.jobId||"fk0jxwt"===t.jobId||"fk0jzel"===t.jobId||"fk0jzei"===t.jobId||"fk0jze8"===t.jobId)&&m.default.createElement("li",null,m.default.createElement("a",{className:"nav-link jd-tab roboto-bold text-uppercase ",id:"#requirements-tab","data-toggle":"tab",href:"#requirements",role:"tab","aria-controls":"requirements","aria-selected":"true"}," ","Requirements")),"fk0jq8a"===t.jobId&&m.default.createElement("li",null,m.default.createElement("a",{className:"nav-link jd-tab roboto-bold text-uppercase",id:"#experience-tab","data-toggle":"tab",href:"#experience-tab",role:"tab","aria-controls":"experience","aria-selected":"true"},"Relevant Past Experiences")),"fk0jq8a"===t.jobId&&m.default.createElement("li",null,m.default.createElement("a",{className:"nav-link jd-tab roboto-bold text-uppercase",id:"#skills-tab","data-toggle":"tab",href:"#skills-tab",role:"tab","aria-controls":"skills","aria-selected":"true"},"Skills")),"fk0juf6"===t.jobId&&m.default.createElement("li",null,m.default.createElement("a",{className:"nav-link jd-tab roboto-bold text-uppercase active",id:"#JobDescription-tab","data-toggle":"tab",href:"#JobDescription",role:"tab","aria-controls":"JobDescription","aria-selected":"true"}," ","Job Description")),"fk0jdwu"===t.jobId&&m.default.createElement("li",null,m.default.createElement("a",{className:"nav-link jd-tab roboto-bold text-uppercase",id:"#qualification-tab","data-toggle":"tab",href:"#qualification-tab",role:"tab","aria-controls":"qualification","aria-selected":"true"},"Qualifications")),"fk0jdwu"===t.jobId&&m.default.createElement("li",null,m.default.createElement("a",{className:"nav-link jd-tab roboto-bold text-uppercase",id:"#lookingFor-tab","data-toggle":"tab",href:"#lookingFor-tab",role:"tab","aria-controls":"lookingFor","aria-selected":"true"},"What we’re looking for"))))),m.default.createElement("div",{className:"tab-content",id:"myTabContent"},t.headings.map(function(e,a){return m.default.createElement("div",{key:a,className:"tab-pane fade show "+(0===a?"active":""),id:""+e,role:"tabpanel","aria-labelledby":e+"-tab"},m.default.createElement("section",{className:"roboto-regular"},m.default.createElement("div",{className:"container"},m.default.createElement("div",{className:"row justify-content-center"},m.default.createElement("div",{className:"col-lg-10"},m.default.createElement("div",{className:"row pt-4"},"fk019mp"===t.jobId&&"responsibilities"===e&&m.default.createElement("p",null,t.responsibilitiesOverview),"overview"!==e&&"rolesOverview"!==e&&m.default.createElement("ul",{className:"text-green"},m.default.createElement("div",{className:"row"},t[e].map(function(a,l){return m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5",key:l},0===l&&"requirements"===e&&("fk0j3ij"===t.jobId||"fk0j3ix"===t.jobId)&&m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Your toolkit:"),m.default.createElement("ul",null,m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Microservices (HTTP & GRPC)")),m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Experience in Golang, Ruby, Clojure, Java (and a willingness to learn others).")),m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Postgresql")),m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Devops: Chef, Ansible, Docker, Kubernetes")),m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Rails, Javascript")),m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Kafka, Spark, Flink")))),m.default.createElement("li",{key:l,className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ",a)))})))),"overview"===e&&m.default.createElement("div",{className:"col-12"},l),"rolesOverview"===e&&m.default.createElement("div",{className:"col-12"},s),"fk019mp"!==t.jobId&&e+"Overview"!=""&&m.default.createElement("p",{className:"font-md text-dark"},t[e+"Overview"]),"rolesOverview"===e&&"fk0jdwu"===t.jobId&&m.default.createElement("section",{className:"roboto-regular"},m.default.createElement("div",{className:"container"},m.default.createElement("div",{className:"row justify-content-center"},m.default.createElement("div",{className:"col-12"},m.default.createElement("div",{className:"row "},m.default.createElement("p",null,"As the first Program Manager for GOJEK’s Financial and Accounting Platform team, you will play a critical role in driving operational rigor, in order to grow a team from its inception stages to stable execution. You will be responsible for implementing and operationalizing Financial and Accounting systems across all GOJEK offices in Indonesia, India, Vietnam, Thailand and Singapore. You will work closely with the CFO office and a product development team to design future-proof processes and systems that can be easily scaled to any new countries and branch offices. You will also be the single point of contact between the execution team, cross-functional stakeholders, and external vendors. It will be your responsibility to lead coordination and unblock all parties involved in order to prioritize, schedule and deliver on time. These are not strictly back-office objectives, your work will fundamentally improve the ability of company leadership to make financially sound business decisions and for the rest of the organization to be able to run efficiently without productivity-blocking manual policies and processes."),m.default.createElement("p",null," ","The role will be based out of Jakarta (preferred) or Singapore, and you will be working closely with the offices of both the CFO and CTO."),m.default.createElement("h4",{className:"font-weight-bold"},"RESPONSIBILITIES"),m.default.createElement("ul",{className:"text-green"},m.default.createElement("div",{className:"row"},t.responsibilities.map(function(e,t){return m.default.createElement("div",{key:t,className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ",e)))})))))))))))))}),"fk0jq8a"===t.jobId&&m.default.createElement("div",{className:"tab-pane fade show",id:"experience-tab",role:"tabpanel","aria-labelledby":"experience-tab"},m.default.createElement("section",{className:"roboto-regular"},m.default.createElement("div",{className:"container"},m.default.createElement("div",{className:"row justify-content-center"},m.default.createElement("div",{className:"col-lg-10 row pt-4"},m.default.createElement("ul",{className:"text-green"},m.default.createElement("div",{className:"row"},t.experience.map(function(e,t){return m.default.createElement("div",{key:t,className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ",e)))})))))))),"fk0jq8a"===t.jobId&&m.default.createElement("div",{className:"tab-pane fade show",id:"skills-tab",role:"tabpanel","aria-labelledby":"skills-tab"},m.default.createElement("section",{className:"roboto-regular"},m.default.createElement("div",{className:"container"},m.default.createElement("div",{className:"row justify-content-center"},m.default.createElement("div",{className:"col-lg-10 row pt-4"},m.default.createElement("ul",{className:"text-green"},m.default.createElement("div",{className:"row"},t.expectations.map(function(e,t){return m.default.createElement("div",{key:t,className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ",e)))})))))))),"fk0juf6"===t.jobId&&m.default.createElement("div",{className:"tab-pane fade show active",id:"JobDescription",role:"tabpanel","aria-labelledby":"JobDescription-tab"},m.default.createElement("section",{className:"roboto-regular"},m.default.createElement("div",{className:"container"},m.default.createElement("div",{className:"row justify-content-center"},m.default.createElement("div",{className:"col-lg-10"},m.default.createElement("div",{className:"row pt-4"},m.default.createElement("p",{className:"pl-4 text-green font-lg mb-0 font-weight-bold"},"What Will You Do"),m.default.createElement("ul",{className:"text-green"},m.default.createElement("div",{className:"row"},t.whatWillYouDo.map(function(e,t){return m.default.createElement("div",{key:t,className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ",e)))})))),m.default.createElement("div",{className:"row pt-4"},m.default.createElement("p",{className:"pl-4 text-green font-lg mb-0 font-weight-bold"},"What we are looking for"),m.default.createElement("ul",{className:"text-green"},m.default.createElement("div",{className:"row"},t.whatWillYouNeed.map(function(e,t){return m.default.createElement("div",{key:t,className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ",e)))})))),m.default.createElement("div",{className:"row pt-4"},m.default.createElement("p",{className:"pl-4 text-green font-lg mb-0 font-weight-bold"},"What Would be a Bonus"),m.default.createElement("ul",{className:"text-green"},m.default.createElement("div",{className:"row"},t.whatWouldbeaBonus.map(function(e,t){return m.default.createElement("div",{key:t,className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ",e)))})))),m.default.createElement("div",{className:"row pt-4"},m.default.createElement("p",{className:"pl-4 text-green font-lg-x mb-0 font-weight-bold"},"Platform Specific Requirements"),m.default.createElement("p",{className:"pl-4 pt-4 font-lg mb-0 font-weight-bold col-12"},"Android"),m.default.createElement("ul",{className:"text-green"},m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Passionate about the Android ecosystem and the history and design principles behind it"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Experience with Kotlin and Android SDK"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Good understanding of architecture principles, code organisation and system design"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Deep knowledge of Android UI fundamentals and experience with graphics APIs (Canvas, Paint, PorterDuffModes etc)"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Experience in creating custom views"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Ability to create UIs programatically or via XML"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Ability to write readable, testable, modular code"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Experience with commonly used popular Android libraries is a plus")))))),m.default.createElement("div",{className:"row "},m.default.createElement("p",{className:"pl-4 pt-4 font-lg mb-0 font-weight-bold col-12"},"iOS"),m.default.createElement("ul",{className:"text-green"},m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Passionate about the iOS/macOS ecosystem and appreciation for the design and programming principles behind them"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Good understanding of architecture principles, code organisation and system design"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Experience in Swift programming, Cocoa, Xcode and the iOS SDK"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Deep knowledge of UIKit fundamentals. Bonus if you’ve worked with UIDynamics, SceneKit and QuartzCore"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Ability to develop UIs programatically or via XIB"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Ability to write readable, testable, modular code"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Experience with commonly used popular iOS libraries is a plus")))))),m.default.createElement("div",{className:"row "},m.default.createElement("p",{className:"pl-4 pt-4 font-lg mb-0 font-weight-bold col-12"},"Web"),m.default.createElement("ul",{className:"text-green"},m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Passionate about web frontend"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Autodidact capable of learning slow and/or fast"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Strong understanding of foundational web technologies like HTML, CSS and JavaScript"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Knowledge of how browsers work is essential"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Extremely well versed with the JavaScript language in general along with transpiling tools like Babel, module bundlers like webpack, parcel"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Some experience with React and its ecosystem"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Some experience with nodejs & npm"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Strong web design skills"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Strong documentation skills"))),m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Attention to detail"))))))))))),"fk0jxwt"===t.jobId&&m.default.createElement("div",{className:"tab-pane fade show ",id:"requirements",role:"tabpanel","aria-labelledby":"requirements-tab"},m.default.createElement("section",{className:"roboto-regular"},m.default.createElement("div",{className:"container"},m.default.createElement("div",{className:"row justify-content-center"},m.default.createElement("div",{className:"col-lg-10"},m.default.createElement("div",{className:"row pt-4"},m.default.createElement("p",{className:"pl-4 text-green font-lg mb-0 font-weight-bold"},"Mandatory"),m.default.createElement("ul",{className:"text-green"},m.default.createElement("div",{className:"row"},t.requirements.map(function(e,t){return m.default.createElement("div",{key:t,className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ",e)))})))),m.default.createElement("div",{className:"row pt-4"},m.default.createElement("p",{className:"pl-4 text-green font-lg mb-0 font-weight-bold"},"Nice to have"),m.default.createElement("ul",{className:"text-green"},m.default.createElement("div",{className:"row"},t.whatWillYouDo.map(function(e,t){return m.default.createElement("div",{key:t,className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ",e)))}))))))))),"fk0jsih"===t.jobId&&m.default.createElement("div",{className:"tab-pane fade show ",id:"requirements",role:"tabpanel","aria-labelledby":"requirements-tab"},m.default.createElement("section",{className:"roboto-regular"},m.default.createElement("div",{className:"container"},m.default.createElement("div",{className:"row justify-content-center"},m.default.createElement("div",{className:"col-lg-10"},m.default.createElement("div",{className:"row pt-4"},m.default.createElement("p",{className:"pl-4 text-green font-lg mb-0 font-weight-bold"},"Mandatory"),m.default.createElement("ul",{className:"text-green"},m.default.createElement("div",{className:"row"},t.requirements.map(function(e,t){return m.default.createElement("div",{key:t,className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ",e)))})))),m.default.createElement("div",{className:"row pt-4"},m.default.createElement("p",{className:"pl-4 text-green font-lg mb-0 font-weight-bold"},"Nice to Have"),m.default.createElement("ul",{className:"text-green"},m.default.createElement("div",{className:"row"},t.responsibilities.map(function(e,t){return m.default.createElement("div",{key:t,className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ",e)))}))))))))),"fk0jdwu"===t.jobId&&m.default.createElement("div",{className:"tab-pane fade show",id:"qualification-tab",role:"tabpanel","aria-labelledby":"qualification-tab"},m.default.createElement("section",{className:"roboto-regular"},m.default.createElement("div",{className:"container"},m.default.createElement("div",{className:"row justify-content-center"},m.default.createElement("div",{className:"col-lg-10  pt-4"},m.default.createElement("h5",{className:"font-weight-bold"},"REQUIRED QUALIFICATIONS"),m.default.createElement("ul",{className:"text-green"},m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-12  pr-5"},m.default.createElement("li",{className:"font-sm text-green"},m.default.createElement("span",{className:"font-md text-dark"},"Experience with Finance and or accounting systems")),m.default.createElement("li",{className:"font-sm text-green"},m.default.createElement("span",{className:"font-md text-dark"},"BA/BS degree or equivalent practical experience")),m.default.createElement("li",{className:"font-sm text-green"},m.default.createElement("span",{className:"font-md text-dark"},"5+ years of experience in cross-functional project or program management")),m.default.createElement("li",{className:"font-sm text-green"},m.default.createElement("span",{className:"font-md text-dark"},"3+ years of experience working with software engineering and data teams")),m.default.createElement("li",{className:"font-sm text-green"},m.default.createElement("span",{className:"font-md text-dark"},"Fluent in English")))))),m.default.createElement("div",{className:"col-lg-10 pt-4"},m.default.createElement("h5",{className:"font-weight-bold"},"PREFERRED QUALIFICATIONS"),m.default.createElement("ul",{className:"text-green"},m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-12  pr-5"},m.default.createElement("li",{className:"font-sm text-green"},m.default.createElement("span",{className:"font-md text-dark"},"Experience in change management for multiple functions and geographies")),m.default.createElement("li",{className:"font-sm text-green"},m.default.createElement("span",{className:"font-md text-dark"},"Experience implementing ERP and/or financial software systems and integrations e.g. NetSuite,SAP Hana, SAP Concur, Workday")),m.default.createElement("li",{className:"font-sm text-green"},m.default.createElement("span",{className:"font-md text-dark"},"Familiar with data and ETL technologies e.g. Kafka")),m.default.createElement("li",{className:"font-sm text-green"},m.default.createElement("span",{className:"font-md text-dark"},"Bilingual in English and Bahasa Indonesia")))))))))),"fk0jdwu"===t.jobId&&m.default.createElement("div",{className:"tab-pane fade show",id:"lookingFor-tab",role:"tabpanel","aria-labelledby":"lookingFor-tab"},m.default.createElement("section",{className:"roboto-regular"},m.default.createElement("div",{className:"container"},m.default.createElement("div",{className:"row justify-content-center"},m.default.createElement("div",{className:"col-lg-10"},m.default.createElement("div",{className:"row pt-4"},m.default.createElement("ul",{className:"text-green"},t.expectations.map(function(e,t){return m.default.createElement("div",{key:t,className:"row"},m.default.createElement("div",{className:"col-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark font-weight-bold"}," ",e.split("|")[0]),m.default.createElement("span",{className:"font-sm text-dark"}," ",e.split("|")[1]))))})))))))),("fk0jzel"===t.jobId||"fk0jzei"===t.jobId||"fk0jze8"===t.jobId)&&m.default.createElement("div",{className:"tab-pane fade show",id:"requirements",role:"tabpanel","aria-labelledby":"requirements-tab"},m.default.createElement("section",{className:"roboto-regular"},m.default.createElement("div",{className:"container"},m.default.createElement("div",{className:"row justify-content-center"},m.default.createElement("div",{className:"col-lg-10"},m.default.createElement("div",{className:"row pt-4"},m.default.createElement("ul",{className:"text-green"},m.default.createElement("div",{className:"row"},m.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ","Your toolkit:"),m.default.createElement("ul",{className:"text-green"},m.default.createElement("li",{className:"font-sm text-dark"},"Microservices (HTTP & GRPC)"),m.default.createElement("li",{className:"font-sm text-dark"},"Experience in Golang, Ruby, Clojure, Java (and a willingness to learn others)."),m.default.createElement("li",{className:"font-sm text-dark"},"Postgresql"),m.default.createElement("li",{className:"font-sm text-dark"},"Devops: Chef, Ansible, Docker, Kubernetes"),m.default.createElement("li",{className:"font-sm text-dark"},"Rails, Javascript"),m.default.createElement("li",{className:"font-sm text-dark"},"Kafka, Spark, Flink")))),t.requirements.map(function(e,t){return m.default.createElement("div",{key:t,className:"col-md-6 col-sm-12  pr-5"},m.default.createElement("li",{className:"py-2 font-md"},m.default.createElement("span",{className:"font-sm text-dark"}," ",e)))})))))))))))),m.default.createElement("section",{className:"bg-green roboto-regular mt-5"},m.default.createElement("div",{className:"container py-5"},m.default.createElement("h1",{className:"h2 font-xl  text-center text-white"},"Think you fit the bill?"),m.default.createElement("div",{className:"text-center "},m.default.createElement("button",{onClick:this.handleClick,target:"_blank",className:" text-center btn bg-white text-green raleway-bold text-uppercase my-1 font-md challenging-button custom-btn"},"APPLY NOW")))))},t}(m.default.Component);p.propTypes={data:u.shape({jobsJson:u.object.isRequired})},t.default=p;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-job-js-62af21db6cf0fe0b8806.js.map