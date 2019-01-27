webpackJsonp([0x71509ca2c5c9],{291:function(e,t,a){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function s(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var m=a(1),o=s(m),d=a(6),i=a(22),f=(s(i),a(3)),u=l(f),p=function(e){function t(a){n(this,t);var l=c(this,e.call(this,a));return l.handleClick=l.handleClick.bind(l),l}return r(t,e),t.prototype.componentWillMount=function(){this.props.history.replace("/careers/"===this.props.location.pathname?"/careers":this.props.location.pathname)},t.prototype.handleClick=function(e){(0,i.navigateTo)({pathname:"/apply",state:{id:this.props.data.jobsJson.id,path:this.props.data.jobsJson.positionSlug,name:this.props.data.jobsJson.position,place:this.props.data.jobsJson.place,jobId:this.props.data.jobsJson.jobId,referer:void 0===this.props.location.state?"https://www.gojek.io/":this.props.location.state.referer}})},t.prototype.getTabHeading=function(e){switch(e){case"responsibilities":return"Responsibilities";case"experience":return"EXPERIENCE & SKILLS";case"about":return"About you";case"overview":return"Overview";case"expectations":return"Expectations";case"whatWillYouDo":return"What will you do";case"whatWillYouNeed":return"What will you need";case"whatWouldbeaBonus":return"What would be a bonus";case"projects":return"Projects you could work on";case"requirements":return"Requirements";default:return"About"}},t.prototype.render=function(){var e=this,t=void 0!==this.props.data?this.props.data.jobsJson:"";return""!==t&&"/careers/"!==this.props.location.pathname?o.default.createElement("div",null,o.default.createElement(d.Helmet,null,o.default.createElement("title",null," ",t.title," "),o.default.createElement("meta",{property:"og:title",content:t.title}),o.default.createElement("meta",{name:"twitter:title",content:t.title}),o.default.createElement("meta",{name:"description",content:t.metaDescription}),o.default.createElement("meta",{name:"twitter:description",content:t.metaDescription}),o.default.createElement("meta",{property:"og:description",content:t.metaDescription})),o.default.createElement("section",{className:"first-section"},o.default.createElement("img",{className:"img-fluid",src:"../../images/careers/job-illustration.png"})),o.default.createElement("section",{className:""},o.default.createElement("div",{className:"container py-5"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-lg-10 offset-lg-1"},o.default.createElement("h1",{className:"h2 font-xl text-left text-black raleway-extrabold font-xl text-black mb-1"},t.position),o.default.createElement("div",{className:"text-left"},o.default.createElement("button",{onClick:this.handleClick,target:"_blank",className:"text-center btn bg-green text-white raleway-bold text-uppercase my-1 font-md custom-btn"},"APPLY NOW")))))),o.default.createElement("section",{className:""},o.default.createElement("div",{className:"container"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-lg-10 offset-lg-1"},o.default.createElement("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist"},t.headings.map(function(t,a){return o.default.createElement("li",{className:"nav-item",key:a},o.default.createElement("a",{className:"nav-link jd-tab roboto-bold text-uppercase "+(0===a?"active":""),id:"#"+t+"-tab","data-toggle":"tab",href:"#"+t,role:"tab","aria-controls":""+t,"aria-selected":"true"},e.getTabHeading(t)))}),"fk0juf6"===t.jobId&&o.default.createElement("li",null,o.default.createElement("a",{className:"nav-link jd-tab roboto-bold text-uppercase ",id:"#platformSpecificRequirements-tab","data-toggle":"tab",href:"#platformSpecificRequirements",role:"tab","aria-controls":"platformSpecificRequirements","aria-selected":"true"}," Requirements"))))),o.default.createElement("div",{className:"tab-content",id:"myTabContent"},t.headings.map(function(e,a){return o.default.createElement("div",{key:a,className:"tab-pane fade show "+(0===a?"active":""),id:""+e,role:"tabpanel","aria-labelledby":e+"-tab"},o.default.createElement("section",{className:"roboto-regular"},o.default.createElement("div",{className:"container"},o.default.createElement("div",{className:"row justify-content-center"},o.default.createElement("div",{className:"col-lg-10"},o.default.createElement("div",{className:"row pt-4"},"fk019mp"===t.jobId&&"responsibilities"===e&&o.default.createElement("p",null,t.responsibilitiesOverview),"overview"!==e&&o.default.createElement("ul",{className:"text-green"},o.default.createElement("div",{className:"row"},t[e].map(function(a,l){return o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5",key:l},0===l&&"requirements"===e&&("fk0j3ij"===t.jobId||"fk0j3ix"===t.jobId)&&o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Your toolkit:"),o.default.createElement("ul",null,o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Microservices (HTTP & GRPC)")),o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Experience in Golang, Ruby, Clojure, Java (and a willingness to learn others).")),o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Postgresql")),o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Devops: Chef, Ansible, Docker, Kubernetes")),o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Rails, Javascript")),o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Kafka, Spark, Flink")))),o.default.createElement("li",{key:l,className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," ",a)))}))),"overview"===e&&o.default.createElement("div",{className:"col-12"},o.default.createElement("p",{className:"pl-3  \ttext-lg-left  font-sm"},t.overview),o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-md-6"},o.default.createElement("p",{className:"pl-3 font-sm  text-lg-left text-center "},t.rolesOverview," ")),o.default.createElement("div",{className:"col-md-6"},o.default.createElement("p",{className:"pl-3 font-sm  text-lg-left text-center "},t.scopeOverview," "))))),"fk019mp"!==t.jobId&&e+"Overview"!=""&&o.default.createElement("p",{className:"font-md text-dark"},t[e+"Overview"]))))))}),"fk0juf6"===t.jobId&&o.default.createElement("div",{className:"tab-pane fade show ",id:"platformSpecificRequirements",role:"tabpanel","aria-labelledby":"platformSpecificRequirements-tab"},o.default.createElement("section",{className:"roboto-regular"},o.default.createElement("div",{className:"container"},o.default.createElement("div",{className:"row justify-content-center"},o.default.createElement("div",{className:"col-lg-10"},o.default.createElement("div",{className:"row pt-4"},o.default.createElement("p",{className:"pl-4 text-green font-lg mb-0 font-weight-bold"},"Android"),o.default.createElement("ul",{className:"text-green"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Passionate about the Android ecosystem and the history and design principles behind it"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Experience with Kotlin and Android SDK"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Good understanding of architecture principles, code organisation and system design"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Deep knowledge of Android UI fundamentals and experience with graphics APIs (Canvas, Paint, PorterDuffModes etc)"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"},"Experience in creating custom views"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Ability to create UIs programatically or via XML"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Ability to write readable, testable, modular code"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Experience with commonly used popular Android libraries is a plus"))))),o.default.createElement("p",{className:"pl-4 text-green font-lg mb-0 font-weight-bold"},"iOS"),o.default.createElement("ul",{className:"text-green"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Passionate about the iOS/macOS ecosystem and appreciation for the design and programming principles behind them"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"},"Good understanding of architecture principles, code organisation and system design"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Experience in Swift programming, Cocoa, Xcode and the iOS SDK"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Deep knowledge of UIKit fundamentals. Bonus if you’ve worked with UIDynamics, SceneKit and QuartzCore"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"},"Ability to develop UIs programatically or via XIB"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Ability to write readable, testable, modular code"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"},"Experience with commonly used popular iOS libraries is a plus"))))),o.default.createElement("p",{className:"pl-4 text-green font-lg mb-0 font-weight-bold"},"Web"),o.default.createElement("ul",{className:"text-green"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Passionate about web frontend"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"},"Autodidact capable of learning slow and/or fast"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Strong understanding of foundational web technologies like HTML, CSS and JavaScript"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"},"Knowledge of how browsers work is essential"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"},"Extremely well versed with the JavaScript language in general along with transpiling tools like Babel, module bundlers like webpack, parcel"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Some experience with React and its ecosystem"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"},"Some experience with nodejs & npm"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"},"Strong web design skills"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"}," Strong documentation skills"))),o.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5"},o.default.createElement("li",{className:"py-2 font-md"},o.default.createElement("span",{className:"font-sm text-dark"},"Attention to detail")))))))))))))),o.default.createElement("section",{className:"bg-green roboto-regular mt-5"},o.default.createElement("div",{className:"container py-5"},o.default.createElement("h1",{className:"h2 font-xl  text-center text-white"},"Think you fit the bill?"),o.default.createElement("div",{className:"text-center "},o.default.createElement("button",{onClick:this.handleClick,target:"_blank",className:" text-center btn bg-white text-green raleway-bold text-uppercase my-1 font-md challenging-button custom-btn"},"APPLY NOW"))))):o.default.createElement("div",null,"here")},t}(o.default.Component);p.propTypes={data:u.shape({jobsJson:u.object.isRequired})},t.default=p;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-job-js-ef689bf99e2cd6477d09.js.map