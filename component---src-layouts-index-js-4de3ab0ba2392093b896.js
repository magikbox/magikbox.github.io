webpackJsonp([0x67ef26645b2a,60335399758886],{197:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Gojek Tech",description:"Gojek is a Super App. It’s one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia’s first and fastest growing unicorn building an on-demand empire.",siteUrl:"https://gojek.io",siteImage:"https://www.gojek.io/images/Go-Jek.png",twitter:"@gojektech"}}},layoutContext:{}}},319:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(1),o=n(r),i=a(359),s=n(i),c=a(197),u=n(c);t.default=function(e){return o.default.createElement(s.default,l({},e,u.default))},e.exports=t.default},565:function(e,t){e.exports=[{id:"1",name:"Home",link:"/",type:"link"},{id:"2",name:"About",link:"/about/",type:"link"},{id:"3",name:"Careers",link:"/careers",type:"link"},{id:"4",name:"News",link:"/news/",type:"link"},{id:"5",name:"Open Source",link:"/open-source/",type:"link"},{id:"5",name:"Blog",link:"#",type:"dropdown",options:[{id:"51",name:"Articles",link:"/articles"},{id:"52",name:"Videos",link:"/tech-videos"}]},{id:"7",name:"Contact",link:"/contact/",type:"link"},{id:"11",name:"NewsLetter ",link:"http://bit.ly/3182uQG",type:"externalLink"},{id:"10",name:"SuperApp",link:"/superapp/",type:"button"}]},334:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=a(1),s=n(i),c=a(72),u=(n(c),a(335)),p=n(u),d=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this,t=this.props.data;return s.default.createElement("nav",{className:"navbar fixed-top bg-white navbar-expand-lg navbar-light maison-bold text-uppercase px-4 py-2"},s.default.createElement("a",{className:"navbar-brand",href:"/"},s.default.createElement("img",{className:"header-logo-width",src:"../../images/gojek-logo.png",alt:"Gojek Logo",title:"Gojek"})),s.default.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarToggler","aria-controls":"navbarToggler","aria-expanded":"false","aria-label":"Toggle navigation"},s.default.createElement("span",{className:"navbar-toggler-icon"})),s.default.createElement("div",{className:"collapse navbar-collapse",id:"navbarToggler"},s.default.createElement("ul",{className:"navbar-nav ml-auto mt-2 mt-lg-0"},t.map(function(t,a){return s.default.createElement(p.default,{data:t,currentPage:e.props.currentPage,key:a})}))))},t}(i.Component);t.default=d,e.exports=t.default},335:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=a(1),s=n(i),c=a(15),u=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props,t=e.data,a=e.currentPage;return s.default.createElement("li",{className:"mx-2 header-menu nav-item "+("dropdown"===t.type&&"dropdown")+(a===t.link||~a.indexOf("/careers/")&&"Careers"===t.name||("/gojek-expansion/"===a||"/go-viet/"===a)&&"News"===t.name?" active":"")},"gomakeimpact"!==t.src&&"superapp"!==t.src&&("dropdown"===t.type?s.default.createElement(s.default.Fragment,null,s.default.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Blog"),s.default.createElement("div",{className:"dropdown-menu","aria-labelledby":"navbarDropdown"},t.options.map(function(e,t){return s.default.createElement("a",{key:t,className:"dropdown-item navbar-dropdown-item text-muted",href:e.link},e.name)}))):s.default.createElement("a",{className:"button"===t.type?"header-btn btn btn-success rounded-1 maison-bold green-apply-btn":"nav-link",href:t.link,target:"externalLink"===t.type?"_blank":null},t.name,a===t.link?s.default.createElement("span",{className:"sr-only"},"(current)"):"","externalLink"===t.type&&s.default.createElement("img",{width:"18px",className:"img-fluid pb-1",src:"../../../../images/logo-gif.gif"}))),("gomakeimpact"===t.src||"superapp"===t.src)&&s.default.createElement(c.Link,{to:t.link,spy:!0,smooth:!0,className:"nav-link text-success scroll",offset:-50},t.name))},t}(i.Component);t.default=u,e.exports=t.default},336:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=a(1),s=n(i),c=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){return s.default.createElement("footer",{className:"bg-black text-white py-5"},s.default.createElement("div",{className:"container"},s.default.createElement("div",{className:"row text-uppercase"},s.default.createElement("div",{className:"col-md-4"},s.default.createElement("a",{href:"/"},s.default.createElement("img",{width:"80%",src:"../../images/gojek-logo-footer.png",alt:"Gojek LOGO",title:"Gojek"}))),s.default.createElement("div",{className:"col-md-8"},s.default.createElement("div",{className:"row font-xs"},s.default.createElement("div",{className:"col-md-3 d-none d-md-block"},s.default.createElement("ul",{className:"list-unstyled"},s.default.createElement("li",{className:"pb-4"},s.default.createElement("a",{href:"/"},"Home")),s.default.createElement("li",{className:"pb-4"},s.default.createElement("a",{href:"/open-source/"},"Open Source")))),s.default.createElement("div",{className:"col-md-3 d-none d-md-block"},s.default.createElement("ul",{className:"list-unstyled"},s.default.createElement("li",{className:"pb-4"},s.default.createElement("a",{href:"/careers/"},"Careers")),s.default.createElement("li",{className:"pb-4"},s.default.createElement("a",{href:"/news/"},"News")))),s.default.createElement("div",{className:"col-md-2 d-none d-md-block font-xs"},s.default.createElement("ul",{className:"list-unstyled"},s.default.createElement("li",{className:"pb-4 "},s.default.createElement("a",{href:"/articles/"},"Blog")),s.default.createElement("li",{className:"pb-4 "},s.default.createElement("a",{href:"/contact/"},"Contact")))),s.default.createElement("div",{className:"col-md-4  d-none d-md-block px-0"},s.default.createElement("ul",{className:"list-unstyled"},s.default.createElement("li",{className:"pb-4 text-left mx-0 "},s.default.createElement("a",{className:"green-apply-btn btn btn-success maison-bold rounded-1 text-white px-lg-5 px-md-3",href:"/all-open-positions/"},"Open Positions"))))))),s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"col-md-4"},s.default.createElement("span",{className:"copyright-text"},"Connect with us on"),s.default.createElement("ul",{className:"list-inline"},s.default.createElement("li",{className:"list-inline-item"},s.default.createElement("a",{href:"https://www.facebook.com/gojektech ",target:"_blank"},s.default.createElement("i",{className:"fa fa-facebook-official","aria-hidden":"true"}))),s.default.createElement("li",{className:"list-inline-item"},s.default.createElement("a",{href:"https://twitter.com/gojektech ",target:"_blank"},s.default.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}))),s.default.createElement("li",{className:"list-inline-item"},s.default.createElement("a",{href:"https://www.linkedin.com/company/go-jek-india/ ",target:"_blank"},s.default.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"}))),s.default.createElement("li",{className:"list-inline-item"},s.default.createElement("a",{href:"https://www.instagram.com/gojek.tech/ ",target:"_blank"},s.default.createElement("i",{className:"fa fa-instagram","aria-hidden":"true"}))),s.default.createElement("li",{className:"list-inline-item"},s.default.createElement("a",{href:"https://www.youtube.com/channel/UCRQzgsSnYyxzhYGxLddKgEw/featured ",target:"_blank"},s.default.createElement("i",{className:"fa fa-youtube-play","aria-hidden":"true"}))))),s.default.createElement("div",{className:"col-md-8 text-md-right text-left font-xs"},s.default.createElement("span",{className:"invisible"},"Copyright text"),s.default.createElement("p",{className:"text-uppercase align-middle copyright-text"},s.default.createElement("strong",null,"© 2019 All rights reserved"))))))},t}(i.Component);t.default=c,e.exports=t.default},359:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var i=a(1),s=n(i),c=a(2),u=n(c),p=a(334),d=n(p),f=a(336),m=n(f),h=a(565),g=n(h);a(571);var b=a(9),y=n(b),E=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=this.props,a=t.location,n=t.children,l=(a.pathname.split("/careers/"),[{id:"1",name:"About us",link:"about",type:"link",src:"gomakeimpact"},{id:"2",name:"GoTroops",link:"goTroops",type:"link",src:"gomakeimpact"},{id:"3",name:"CAREERS",link:"jobs",type:"link",src:"gomakeimpact"}]),r=[{id:"1",name:"Super Home",link:"home",type:"link",src:"superapp"},{id:"2",name:"Super App",link:"super-app",type:"link",src:"superapp"},{id:"3",name:"Super Facts",link:"super-facts",type:"link",src:"superapp"},{id:"4",name:"Super Blog",link:"super-blog",type:"link",src:"superapp"},{id:"5",name:"Super Jobs",link:"super-jobs",type:"link",src:"superapp"}],o=!0;return s.default.createElement("div",null,s.default.createElement(y.default,{title:"Gojek",description:e.description,url:"https://www.gojek.io"}),"/gomakeimpact/"!==a.pathname&&"/superapp/"!==a.pathname&&s.default.createElement(d.default,{siteTitle:e.title,data:g.default,currentPage:a.pathname}),"/gomakeimpact/"===a.pathname&&s.default.createElement(d.default,{siteTitle:e.title,data:l,currentPage:a.pathname}),"/superapp/"===a.pathname&&s.default.createElement(d.default,{siteTitle:e.title,data:r,currentPage:a.pathname}),s.default.createElement("div",null,n()),o&&s.default.createElement(m.default,null))},t}(i.Component);E.propTypes={children:u.default.func},t.default=E;t.query="** extracted graphql fragment **"},571:function(e,t){}});
//# sourceMappingURL=component---src-layouts-index-js-4de3ab0ba2392093b896.js.map