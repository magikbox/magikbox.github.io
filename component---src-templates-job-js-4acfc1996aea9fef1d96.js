webpackJsonp([0x71509ca2c5c9],{320:function(e,t,a){"use strict";function l(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var c=a(1),i=n(c),u=a(9),d=a(63),m=(n(d),a(6)),f=l(m),p=function(e){function t(a){r(this,t);var l=s(this,e.call(this,a));return l.handleClick=l.handleClick.bind(l),l}return o(t,e),t.prototype.handleClick=function(e){(0,d.navigateTo)({pathname:"/apply",state:{id:this.props.data.jobsJson.id,path:this.props.data.jobsJson.positionSlug,name:this.props.data.jobsJson.position,place:this.props.data.jobsJson.place,jobId:this.props.data.jobsJson.jobId}})},t.prototype.getTabHeading=function(e){switch(e){case"responsibilities":return"Responsibilities";case"experience":return"EXPERIENCE & SKILLS";case"about":return"About you";case"overview":return"Overview";case"expectations":return"Expectations";case"whatWillYouDo":return"What will you do";case"whatWillYouNeed":return"What will you need";case"whatWouldbeaBonus":return"What would be a bonus";default:return"About"}},t.prototype.render=function(){var e=this,t=this.props.data.jobsJson;return i.default.createElement("div",null,i.default.createElement(u.Helmet,null,i.default.createElement("title",null," GO-JEK Tech Job Description ")),i.default.createElement("section",{className:""},i.default.createElement("img",{className:"img-fluid",src:"../../images/careers/job-illustration.png"})),i.default.createElement("section",{className:""},i.default.createElement("div",{className:"container py-5"},i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col-lg-10 offset-lg-1"},i.default.createElement("h1",{className:"h2 font-xl text-left text-black raleway-extrabold font-xl text-black mb-1"},t.position),i.default.createElement("div",{className:"text-left"},i.default.createElement("button",{onClick:this.handleClick,target:"_blank",className:"text-center btn bg-green text-white raleway-bold text-uppercase my-1 font-md custom-btn"},"APPLY NOW")))))),i.default.createElement("section",{className:""},i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col-lg-10 offset-lg-1"},i.default.createElement("ul",{className:"nav nav-tabs",id:"myTab",role:"tablist"},t.headings.map(function(t,a){return i.default.createElement("li",{className:"nav-item",key:a},i.default.createElement("a",{className:"nav-link jd-tab roboto-bold text-uppercase "+(0===a?"active":""),id:"#"+t+"-tab","data-toggle":"tab",href:"#"+t,role:"tab","aria-controls":""+t,"aria-selected":"true"},e.getTabHeading(t)))})))),i.default.createElement("div",{className:"tab-content",id:"myTabContent"},t.headings.map(function(e,a){return i.default.createElement("div",{key:a,className:"tab-pane fade show "+(0===a?"active":""),id:""+e,role:"tabpanel","aria-labelledby":e+"-tab"},i.default.createElement("section",{className:"roboto-regular"},i.default.createElement("div",{className:"container"},i.default.createElement("div",{className:"row justify-content-center"},i.default.createElement("div",{className:"col-lg-10"},i.default.createElement("div",{className:"row pt-4"},"fk019mp"===t.jobId&&"responsibilities"===e&&i.default.createElement("p",null,t.responsibilitiesOverview),"overview"!==e&&i.default.createElement("ul",{className:"text-green"},i.default.createElement("div",{className:"row"},t[e].map(function(e,t){return i.default.createElement("div",{className:"col-md-6 col-sm-12  pr-5",key:t},i.default.createElement("li",{key:t,className:"py-2 font-md"},i.default.createElement("span",{className:"font-sm text-dark"}," ",e)))}))),"overview"===e&&i.default.createElement("div",{className:"col-12"},i.default.createElement("p",{className:"pl-3  \ttext-lg-left \r font-sm"},t.overview),i.default.createElement("div",{className:"row"},i.default.createElement("div",{className:"col-md-6"},i.default.createElement("p",{className:"pl-3 font-sm  text-lg-left text-center "},t.rolesOverview," ")),i.default.createElement("div",{className:"col-md-6"},i.default.createElement("p",{className:"pl-3 font-sm  text-lg-left text-center "},t.scopeOverview," "))))),"fk019mp"!==t.jobId&&e+"Overview"!=""&&i.default.createElement("p",{className:"font-md text-dark"},t[e+"Overview"]))))))})))),i.default.createElement("section",{className:"bg-green roboto-regular mt-5"},i.default.createElement("div",{className:"container py-5"},i.default.createElement("h1",{className:"h2 font-xl  text-center text-white"},"Think you fit the bill?"),i.default.createElement("div",{className:"text-center "},i.default.createElement("button",{onClick:this.handleClick,target:"_blank",className:" text-center btn bg-white text-green raleway-bold text-uppercase my-1 font-md challenging-button custom-btn"},"APPLY NOW")))))},t}(i.default.Component);p.propTypes={data:f.shape({jobsJson:f.object.isRequired})},t.default=p;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-job-js-4acfc1996aea9fef1d96.js.map