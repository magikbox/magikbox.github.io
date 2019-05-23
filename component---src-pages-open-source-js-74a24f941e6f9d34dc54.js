webpackJsonp([0x5e781b1133c2],{69:function(e,t){e.exports={data:{heading:"We take Open Source seriously",content:"Open Source Software is at the heart of GO-JEK. Without it, none of our achievements would have ever been possible. Today, we actively maintain a host of Free and Open Source Software projects as we understand their importance to the community. For a full list of our contributions, please checkout our GitHub.",projects:[{id:"1",name:"heimdall",link:"https://github.com/gojektech/heimdall",description:"An enhanced HTTP client for Go"},{id:"11",name:"ziggurat",link:"https://github.com/gojektech/ziggurat",description:"A stream processing framework to build stateless applications on Kafka"},{id:"3",name:"palantir",link:"https://github.com/gojektech/palantir",description:"Yet Another Go Config Library"},{id:"4",name:"proctor",link:"https://github.com/gojektech/proctor",description:"A Developer-Friendly Automation Orchestrator"},{id:"2",name:"valkyrie",link:"https://github.com/gojektech/valkyrie",description:"Go wrapper for handling zero or more errors"},{id:"5",name:"wrest",link:"https://github.com/gojektech/wrest",description:"A fluent, easy-to-use, object oriented Ruby HTTP/R..."},{id:"6",name:"statsd-docker",link:"https://github.com/gojektech/statsd-docker",description:"Dockerized version of StatsD with console backend."},{id:"7",name:"consul-envoy-xds",link:"https://github.com/gojektech/consul-envoy-xds",description:"Envoy XDS backed by Consul"},{id:"8",name:"probed",link:"https://github.com/gojektech/probed",description:"A unix daemon to perform health check on proxy bac..."},{id:"9",name:"kubehandler",link:"https://github.com/gojektech/palantir",description:"A framework for writing Kubernetes controllers"},{id:"10",name:"bulwark",link:"https://github.com/gojektech/bulwark",description:"Hystrix for Clojurists"}]}}},59:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=o(1),s=n(c),u=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data;return s.default.createElement("div",{className:"col-md-6 col-lg-5 rounded"},s.default.createElement("a",{className:"text-dark",title:e.name,href:e.link,target:"_blank"},s.default.createElement("div",{className:"card border-0 mb-4 flex-row opensource-card"},s.default.createElement("img",{className:"align-self-center p-3",src:"../images/open-source-projects/"+e.name+".png",alt:"logo img"}),s.default.createElement("div",{className:"card-body"},s.default.createElement("h3",{className:"raleway-bold mb-0 font-sm-l opensource-card-title text-capitalize"},e.name),s.default.createElement("p",{className:"opensource-card-description mb-auto roboto-regular",style:{color:"#686868"}},e.description)))))},t}(c.Component);t.default=u,e.exports=t.default},108:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=o(1),s=n(c),u=o(69),l=n(u),p=o(59),f=n(p),d=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=l.default.data.projects;return s.default.createElement("section",{className:"mt-5 bg-green first-section"},s.default.createElement("div",{className:"container pt-5"},s.default.createElement("h1",{className:"text-center text-white pl-0 raleway-bold font-xl-x"},"Open Source Projects"),s.default.createElement("p",{className:"text-center  text-white roboto-regular font-xs-l p-4 px-5"},l.default.data.content),s.default.createElement("div",{className:"row justify-content-md-center py-5"},e.map(function(e,t){return s.default.createElement(f.default,{data:e,key:t})}))))},t}(c.Component);t.default=d,e.exports=t.default},326:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var c=o(1),s=n(c),u=o(13),l=o(108),p=n(l),f=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return s.default.createElement("div",{className:"first-section"},s.default.createElement(u.Helmet,null,s.default.createElement("title",null,"Contributions by GOJEK towards free and open source software"),s.default.createElement("meta",{property:"og:title",content:"Contributions by GOJEK towards free and open source software"}),s.default.createElement("meta",{name:"twitter:title",content:"Contributions by GOJEK towards free and open source software"}),s.default.createElement("meta",{name:"description",content:"GOJEK understands and appreciates the value of free and open source software. Check out some of our contributions towards the community on our GitHub page."}),s.default.createElement("meta",{name:"twitter:description",content:"GOJEK understands and appreciates the value of free and open source software. Check out some of our contributions towards the community on our GitHub page."}),s.default.createElement("meta",{property:"og:description",content:"GOJEK understands and appreciates the value of free and open source software. Check out some of our contributions towards the community on our GitHub page."})),s.default.createElement(p.default,null))},t}(c.Component);t.default=f,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-open-source-js-74a24f941e6f9d34dc54.js.map