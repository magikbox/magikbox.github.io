(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{157:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});a(185),a(95);var n=a(42),r=a.n(n),l=a(8),o=a.n(l),i=a(0),c=a.n(i),s=a(180),m=a(182),d=a(327),p=a.n(d),u=a(246),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleSubmit=function(e){e.preventDefault(),e.preventDefault();var t=!1,n=document.getElementsByClassName("needs-validation");if(Array.prototype.filter.call(n,function(a){!1===a.checkValidity()?(e.preventDefault(),e.stopPropagation(),a.classList.add("was-validated"),t=!1):(a.classList.add("was-validated"),t=!0)}),t){a.setState({loading:!0});var r={fields:[{key:"candidate_first_name",value:a.state.firstName},{key:"candidate_last_name",value:a.state.lastName},{key:"candidate_email",value:a.state.email},{key:"candidate_phone",value:a.state.phone},{key:"how_did_you_hear_about_us",value:a.state.sourceFrom},{key:"preferred_location",value:a.state.location},{key:"github_profile",value:a.state.githubLink},{key:"expected_salary",value:a.state.experience},{key:"resume",value:{encoded_data:a.state.resume.split(",").slice(-1)[0],file_name:a.state.fileLabel}}],source:a.props.location.state.referer};console.log("Payload",r)}},a.state={firstName:"",lastName:"",email:"",phone:"",loaded:"",experience:"",resume:"",location:"",githubLink:"",sourceFrom:"",fileLabel:"Please upload your resume",loading:!1,error:!1,errorMessage:""},a.handleChange=a.handleChange.bind(r()(a)),a.onFileChange=a.onFileChange.bind(r()(a)),a}o()(t,e);var a=t.prototype;return a.handleChange=function(e){var t;this.setState(((t={})[e.target.name]=e.target.value,t))},a.onFileChange=function(e,t){var a=this,n=t||e.target.files[0],r=new FileReader;this.setState({loaded:!1}),this.setState({fileLabel:e.target.files[0].name}),r.onload=function(e){a.setState({resume:r.result,loaded:!0})},r.readAsDataURL(n)},a.render=function(){var e=this.props.data.jobsJson,t=e.description,a=e.lists,n=e.categories,r=e.text,l=e.descriptionPlain,o=e.id;return c.a.createElement(s.a,{location:this.props.location},c.a.createElement(m.a,{title:r,description:l}),c.a.createElement("div",{className:"container first-section"},c.a.createElement("div",{className:"d-flex flex-row flex-wrap pb-5 mt-5"},c.a.createElement("div",{id:o,name:o,className:"col-md-12  mt-5  col-12 col-md-6 mt-4 mb-0 px-2"},c.a.createElement("div",{className:" scroll  d-flex flex-column flex-wrap justify-content-center careers-position careers-position-unhighlight border-success pt-3"},c.a.createElement("h6",{className:" px-4 roboto-regular font-sm text-dark "},r),c.a.createElement("div",{className:"d-flex flex-row flex-wrap roboto-black font-xs text-uppercase"},c.a.createElement("span",{className:"pl-4  text-green col-"},n.location),c.a.createElement("span",{className:"pl-4  text-black col-"},n.team)),c.a.createElement("div",null,c.a.createElement("div",{className:"pl-4 pt-3"},c.a.createElement("div",{className:"row justify-content-between align-items-center pl-2"},c.a.createElement("a",{rel:"noopener noreferrer",href:"#apply-form",className:"apply btn btn-success px-5 apply  my-2"},"APPLY NOW"),c.a.createElement("div",{className:"d-none d-md-block"},Object(u.b)(this.props.data.jobsJson))),c.a.createElement("div",{className:"py-5 my-5 py-md-2 my-md-0"},c.a.createElement("p",{className:"  roboto-bold text-black font-sm"},"Overview"),c.a.createElement("div",{className:" description-font text-dark col-12 pl-1"},p()(t)),c.a.createElement("div",{className:""},a.map(function(e,t){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",{className:"pt-3 roboto-bold text-black font-sm"},e.text),c.a.createElement("ul",{className:"pl-3 mb-3"},p()(e.content)))}))),c.a.createElement("div",{className:"d-block text-center"})),c.a.createElement("div",{className:"container",id:"apply-form"},c.a.createElement("h4",{className:"text-center text-green font-weight-bold text-uppercase"},"Apply"),c.a.createElement("form",{className:"needs-validation",noValidate:!0,method:"POST",onSubmit:this.handleSubmit},c.a.createElement("div",{className:"d-flex flex-row flex-wrap justify-content-around"},c.a.createElement("div",{className:"col-md-5 col-12"},c.a.createElement("input",{type:"text",className:"form-control border-top-0 border-left-0 border-right-0  rounded-0",id:"full-name",placeholder:"Full name *",required:!0,onChange:this.handleChange,name:"full-name"}),c.a.createElement("div",{className:"invalid-feedback"},"* Required")),c.a.createElement("div",{className:"col-md-5 col-12"},c.a.createElement("input",{type:"email",className:"form-control border-top-0 border-left-0 border-right-0  rounded-0",id:"email",placeholder:"Email *",required:!0,onChange:this.handleChange,name:"email"}),c.a.createElement("div",{className:"invalid-feedback"},"Invalid Email."))),c.a.createElement("div",{className:"d-flex flex-row flex-wrap justify-content-around mt-md-5 mt-sm-0"},c.a.createElement("div",{className:"col-md-5 col-12"},c.a.createElement("input",{type:"tel",className:"form-control border-top-0 border-left-0 border-right-0  rounded-0",id:"phone",placeholder:"Phone *",pattern:"[0-9+?]*",onChange:this.handleChange,name:"phone",required:!0}),c.a.createElement("div",{className:"invalid-feedback"},"Invalid phone.")),c.a.createElement("div",{className:"col-md-5 col-12"},c.a.createElement("input",{type:"text",className:"form-control border-top-0 border-left-0 border-right-0  rounded-0",id:"current-company",placeholder:"Current Company *",onChange:this.handleChange,name:"current-company",required:!0}))),c.a.createElement("div",{className:"d-flex flex-row flex-wrap justify-content-center py-5",id:"drop_zone"},c.a.createElement("div",{className:"col-11 drag-and-drop border border-success mx-3"},c.a.createElement("p",{className:"text-muted text-center py-2"}," ","Resume/CV *",c.a.createElement("br",null)," ",c.a.createElement("small",null,"Allowed formats are (doc, txt, html, htm, rtf, docx, odt, pdf)"),c.a.createElement("p",{className:"mb-0"},this.state.fileLabel)),c.a.createElement("div",{className:"pb-1 text-center"},c.a.createElement("p",{id:"dragFileName"}),c.a.createElement("input",{required:!0,className:"d-none form-control-file",type:"file",name:"resume",id:"resume",onChange:this.onFileChange}),c.a.createElement("label",{className:"btn btn-success mt-1 px-5 text-white font-weight-bold ",htmlFor:"resume"},"Browse"),c.a.createElement("div",{className:"invalid-feedback"},"*Required")))),c.a.createElement("div",{className:"d-flex flex-row flex-wrap justify-content-around"},c.a.createElement("div",{className:"col-md-10 px-0"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 mb-md-3"},c.a.createElement("h4",{className:"text-center text-green text-uppercase"},"Links")),c.a.createElement("div",{className:"col-4 pl-0"},c.a.createElement("input",{type:"text",className:"form-control border-top-0 border-left-0 border-right-0  rounded-0",id:"linkedin-url",placeholder:"LinkedIn URL",onChange:this.handleChange,name:"linkedin-url",required:!0}),c.a.createElement("div",{className:"invalid-feedback"},"Invalid phone.")),c.a.createElement("div",{className:"col-4"},c.a.createElement("input",{type:"text",className:"form-control border-top-0 border-left-0 border-right-0  rounded-0",id:"github-url",placeholder:"GitHub URL",onChange:this.handleChange,name:"github-url",required:!0})),c.a.createElement("div",{className:"col-4 pr-0"},c.a.createElement("input",{type:"text",className:"form-control border-top-0 border-left-0 border-right-0  rounded-0",id:"portfolio-url",placeholder:"Portfolio URL",onChange:this.handleChange,name:"portfolio-url",required:!0}))))),c.a.createElement("div",{className:"d-flex flex-row flex-wrap justify-content-center my-md-5 mt-sm-0"},c.a.createElement("div",{className:"col-12 mb-3 px-0"},c.a.createElement("h4",{className:"text-center text-green"},"ADDITIONAL INFO")),c.a.createElement("div",{className:"col-md-10 px-0"},c.a.createElement("div",{className:"row mt-md-3"},c.a.createElement("div",{className:"col-md-6 pl-0"},c.a.createElement("select",{className:"form-control border-top-0 border-left-0 border-right-0  rounded-0",id:"preferred-location",required:!0,onChange:this.handleChange,name:"preferred-location"},c.a.createElement("option",{value:""},"Select Work Authorisation *"),c.a.createElement("option",{value:"I am authorised to work for any employer in the\r country in which this position is based"},"I am authorised to work for any employer in the country in which this position is based"),c.a.createElement("option",{value:"I require /will require Gojek's sponsorship to get\r work work authorisation in the country in which\r this position is based (e.g. H-1B, EP, etc.)"},"I require /will require Gojek's sponsorship to get work work authorisation in the country in which this position is based (e.g. H-1B, EP, etc.)"),c.a.createElement("option",{value:"My status to work in the country in which this\r position is unknown"},"My status to work in the country in which this position is unknown")),c.a.createElement("div",{className:"invalid-feedback"},"Required")),c.a.createElement("div",{className:"col-md-6 pr-0"},c.a.createElement("select",{className:"form-control border-top-0 border-left-0 border-right-0  rounded-0",id:"preferred-location",required:!0,onChange:this.handleChange,name:"location"},c.a.createElement("option",{value:""},"You heard about us on *"),c.a.createElement("option",{value:"gojek.io"},"gojek.io"),c.a.createElement("option",{value:"Gojek Employee"},"Gojek Employee"),c.a.createElement("option",{value:"Advertisements"},"Advertisements"),c.a.createElement("option",{value:"Blog"},"Blog"),c.a.createElement("option",{value:"Conference & Meetups"},"Conference & Meetups"),c.a.createElement("option",{value:"Social Media"},"Social Media"),c.a.createElement("option",{value:"SuperApp Ads"},"SuperApp Ads"),c.a.createElement("option",{value:"LinkedIn"},"LinkedIn"),c.a.createElement("option",{value:"Glassdoor"},"Glassdoor"),c.a.createElement("option",{value:"Job Board"},"Job Board"),c.a.createElement("option",{value:"Campus Events"},"Campus Events"),c.a.createElement("option",{value:"Word Of Mouth"},"Word Of Mouth"),c.a.createElement("option",{value:"Others"},"Others")),c.a.createElement("div",{className:"invalid-feedback"},"Required"))),c.a.createElement("div",{className:"row mt-md-4"},c.a.createElement("div",{className:"col-md-6 pl-0"},c.a.createElement("input",{type:"text",className:"form-control border-top-0 border-left-0 border-right-0  rounded-0",id:"referrel",placeholder:"Referral Email",pattern:"[0-9+?]*",onChange:this.handleChange,name:"referrel",required:!0}),c.a.createElement("small",{className:"text-green"},"If its a referral from a Gojek Employee, please state their name or official email ID of the Employee"))),c.a.createElement("div",{className:"row mt-md-4"},c.a.createElement("div",{className:"col-md-6 pl-0"},c.a.createElement("textarea",{className:"form-control border-top-0 border-left-0 border-right-0  rounded-0",id:"about-you",placeholder:"Tell us what makes you a good fit for this role *",onChange:this.handleChange,name:"about-you",required:!0}),c.a.createElement("small",{className:"text-green"},"Say something that will catch our eye!")),c.a.createElement("div",{className:"col-md-6 pr-0"},c.a.createElement("textarea",{className:"form-control border-top-0 border-left-0 border-right-0  rounded-0",id:"cover-letter",placeholder:"Additional information",onChange:this.handleChange,name:"cover-letter",required:!0}),c.a.createElement("small",{className:"text-green"},"Add a cover letter or anything else you want to share."))))),c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{type:"submit",className:"apply btn btn-success px-5 apply mb-3"},"Submit "))))))))))},t}(c.a.Component);t.default=h;var f="1818521300"},178:function(e){e.exports={data:{site:{siteMetadata:{title:"GO-JEK TECH",description:"GO-JEK is a Super App. It’s one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia’s first and fastest growing unicorn building an on-demand empire.",siteUrl:"https://gojek.io",siteImage:"https://www.gojek.io/images/Go-Jek.png",twitter:"@gojektech"}}}}},179:function(e){e.exports=[{id:"1",name:"Home",link:"/",type:"link"},{id:"2",name:"About",link:"/about/",type:"link"},{id:"3",name:"Careers",link:"/careers",type:"link"},{id:"4",name:"News",link:"/news/",type:"link"},{id:"5",name:"Open Source",link:"/open-source/",type:"link"},{id:"6",name:"Blog",link:"#",type:"dropdown",options:[{id:"51",name:"Articles",link:"/articles"},{id:"52",name:"Videos",link:"/tech-videos"}]},{id:"7",name:"Contact",link:"/contact/",type:"link"},{id:"11",name:"NewsLetter ",link:"http://bit.ly/3182uQG",type:"externalLink"},{id:"10",name:"SuperApp",link:"/superapp/",type:"button"}]},180:function(e,t,a){"use strict";var n=a(178),r=a(0),l=a.n(r),o=a(5),i=a.n(o),c=a(177),s=a.n(c),m=(a(187),a(8)),d=a.n(m),p=function(e){function t(){return e.apply(this,arguments)||this}return d()(t,e),t.prototype.render=function(){return l.a.createElement("footer",{className:"bg-black text-white py-5"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row text-uppercase"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("a",{href:"/"},l.a.createElement("img",{width:"80%",src:"../../images/gojek-logo-footer.png",alt:"Gojek Logo",title:"Gojek"}))),l.a.createElement("div",{className:"col-md-8"},l.a.createElement("div",{className:"row font-xs"},l.a.createElement("div",{className:"col-md-3 d-none d-md-block"},l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",{className:"pb-4"},l.a.createElement("a",{href:"/"},"Home")),l.a.createElement("li",{className:"pb-4"},l.a.createElement("a",{href:"/open-source/"},"Open Source")))),l.a.createElement("div",{className:"col-md-3 d-none d-md-block"},l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",{className:"pb-4"},l.a.createElement("a",{href:"/careers/"},"Careers")),l.a.createElement("li",{className:"pb-4"},l.a.createElement("a",{href:"/news/"},"News")))),l.a.createElement("div",{className:"col-md-2 d-none d-md-block font-xs"},l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",{className:"pb-4 "},l.a.createElement("a",{href:"/articles/"},"Blog")),l.a.createElement("li",{className:"pb-4 "},l.a.createElement("a",{href:"/contact/"},"Contact")))),l.a.createElement("div",{className:"col-md-4  d-none d-md-block px-0"},l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",{className:"pb-4 text-left mx-0 "},l.a.createElement("a",{className:"green-apply-btn btn btn-success maison-bold rounded-1 text-white px-lg-5 px-md-3",href:"/all-open-positions/"},"Open Positions"))))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-4"},l.a.createElement("span",{className:"copyright-text"},"Connect with us on"),l.a.createElement("ul",{className:"list-inline"},l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://www.facebook.com/gojektech",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fa fa-facebook-official","aria-hidden":"true"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://twitter.com/gojektech",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://www.linkedin.com/company/go-jek-india/",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://www.instagram.com/gojek.tech/",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fa fa-instagram","aria-hidden":"true"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{href:"https://www.youtube.com/channel/UCRQzgsSnYyxzhYGxLddKgEw/featured",rel:"noopener noreferrer",target:"_blank"},l.a.createElement("i",{className:"fa fa-youtube-play","aria-hidden":"true"}))))),l.a.createElement("div",{className:"col-md-8 text-md-right text-left font-xs"},l.a.createElement("span",{className:"invisible"},"Copyright text"),l.a.createElement("p",{className:"text-uppercase align-middle copyright-text"},l.a.createElement("strong",null,"© 2019 All rights reserved"))))))},t}(r.Component),u=(a(185),a(184),a(435)),h=a(436),f=a(437),E=a(438),b=a(439),g=a(440),v=a(441),N=a(448),w=a(449),y=a(442),k=a(443),x=function(e){var t=e.data,a=e.currentPage,n=Object(r.useState)(!1),o=n[0],i=n[1];return console.log("currentPage",a),l.a.createElement("div",null,l.a.createElement(u.a,{color:"light",light:!0,expand:"md",className:"navbar fixed-top bg-white navbar-expand-lg navbar-light maison-bold text-uppercase px-4 py-2"},l.a.createElement(h.a,{href:"/"},l.a.createElement("img",{className:"header-logo-width",src:"../../images/gojek-logo.png",alt:"Gojek Logo",title:"Gojek"})),l.a.createElement(f.a,{onClick:function(){return i(!o)}}),l.a.createElement(E.a,{isOpen:o,navbar:!0},l.a.createElement(b.a,{className:"ml-auto",navbar:!0},t.map(function(e,t){return l.a.createElement("div",{key:t},"externalLink"===e.type&&l.a.createElement(g.a,{key:t,className:"mx-2 header-menu"},l.a.createElement(v.a,{href:e.link,className:"nav-link maison-bold"},e.name,l.a.createElement("img",{width:"18px",className:"img-fluid pb-1",src:"../../../../images/logo-gif.gif",alt:"Gojek - Subscribe to newsletter"}))),"dropdown"===e.type?l.a.createElement(N.a,{nav:!0,inNavbar:!0,className:"mx-2 header-menu nav-item"},l.a.createElement(w.a,{nav:!0,caret:!0,className:"nav-link custom-nav-link maison-bold "+("/articles"===a||"/tech-videos"===a?"active":"")},"Blog"),l.a.createElement(y.a,{right:!0,className:"dropdown-menu custom-dropdown"},e.options.map(function(e,t){return l.a.createElement(k.a,{key:t,className:"dropdown-item navbar-dropdown-item text-muted",tag:"a",href:e.link},e.name)}))):("link"===e.type||"button"===e.type)&&l.a.createElement(g.a,{key:t,className:"mx-2 header-menu "+(a===e.link||~a.indexOf("/careers/")&&"Careers"===e.name||("/gojek-expansion/"===a||"/go-viet/"===a)&&"News"===e.name?"active":"")},l.a.createElement(v.a,{href:e.link,className:"button"===e.type?"header-btn btn btn-success rounded-1 green-apply-btn text-white maison-bold":"nav-link maison-bold"},e.name)))})))))},C=a(179),j=function(e){var t=e.children,a=e.location,r=n.data.site.siteMetadata;return l.a.createElement("div",null,l.a.createElement(s.a,null,l.a.createElement("title",null,"Gojek"),l.a.createElement("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),l.a.createElement("meta",{name:"description",content:r.description}),l.a.createElement("meta",{name:"twitter:card",content:"summary"}),l.a.createElement("meta",{name:"twitter:site",content:r.twitter}),l.a.createElement("meta",{name:"twitter:title",content:r.title}),l.a.createElement("meta",{name:"twitter:description",content:r.description}),l.a.createElement("meta",{name:"twitter:image",content:r.siteImage}),l.a.createElement("meta",{property:"og:title",content:r.title}),l.a.createElement("meta",{property:"og:type",content:"website"}),l.a.createElement("meta",{property:"og:url",content:r.siteUrl}),l.a.createElement("meta",{property:"og:image",content:r.siteImage}),l.a.createElement("meta",{property:"og:description",content:r.description}),l.a.createElement("link",{rel:"shortcut icon",href:"/../images/favicon.ico",type:"image/x-icon "}),l.a.createElement("link",{rel:"icon",href:"/../images/favicon.ico",type:"image/x-icon"})),"/gomakeimpact/"!==a.pathname&&"/superapp/"!==a.pathname&&l.a.createElement(x,{siteTitle:r.title,data:C,currentPage:a.pathname}),"/gomakeimpact/"===a.pathname&&l.a.createElement(x,{siteTitle:r.title,data:[{id:"1",name:"About us",link:"about",type:"link",src:"gomakeimpact"},{id:"2",name:"GO-TROOPS",link:"goTroops",type:"link",src:"gomakeimpact"},{id:"3",name:"CAREERS",link:"jobs",type:"link",src:"gomakeimpact"}],currentPage:a.pathname}),"/superapp/"===a.pathname&&l.a.createElement(x,{siteTitle:r.title,data:[{id:"1",name:"Super Home",link:"home",type:"link",src:"superapp"},{id:"2",name:"Super App",link:"super-app",type:"link",src:"superapp"},{id:"3",name:"Super Facts",link:"super-facts",type:"link",src:"superapp"},{id:"4",name:"Super Blog",link:"super-blog",type:"link",src:"superapp"},{id:"5",name:"Super Jobs",link:"super-jobs",type:"link",src:"superapp"}],currentPage:a.pathname}),l.a.createElement("div",null,t),l.a.createElement(p,null))};j.propTypes={children:i.a.node.isRequired};t.a=j},182:function(e,t,a){"use strict";var n=a(183),r=a(0),l=a.n(r),o=a(5),i=a.n(o),c=a(177),s=a.n(c);function m(e){var t=e.description,a=e.title,r=n.data.site;return l.a.createElement(s.a,{title:a,titleTemplate:"%s | "+r.siteMetadata.title,meta:[{name:"description",content:t},{property:"og:title",content:a},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:t},{name:"twitter:title",content:a},{name:"twitter:description",content:t}]})}m.propTypes={title:i.a.string.isRequired},t.a=m},183:function(e){e.exports={data:{site:{siteMetadata:{title:"GO-JEK TECH"}}}}},246:function(e,t,a){"use strict";a.d(t,"b",function(){return p});a(96),a(95);var n=a(8),r=a.n(n),l=a(0),o=a.n(l),i=a(19),c=a(444),s=a(445),m=a(446),d=a(447),p=function(e){return o.a.createElement("div",{className:"dropdown pr-5"},o.a.createElement("button",{className:"btn btn-outline-success dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},o.a.createElement("i",{className:"fa fa-share-alt"}),"   Share Job"),"undefined"!=typeof window&&void 0!==e&&o.a.createElement("div",{className:"dropdown-menu py-0","aria-labelledby":"dropdownMenuButton"},o.a.createElement(c.a,{url:window.location.href,quote:e.text},o.a.createElement("button",{className:"px-3 border-focus-none dropdown-item text-left btn  btn-block b-0 text-primary bg-white"},o.a.createElement("i",{className:" fa fa-facebook-f "}),"  Facebook")),o.a.createElement(s.a,{url:window.location.href,quote:e.text},o.a.createElement("button",{className:"px-3 border-focus-none dropdown-item text-left btn o btn-block text-info bg-white"},o.a.createElement("i",{className:" fa fa-twitter "}),"  Twitter")),o.a.createElement(m.a,{url:window.location.href,quote:e.text},o.a.createElement("button",{className:"px-3 border-focus-none dropdown-item text-left btn  btn-block text-success bg-white"},o.a.createElement("i",{className:" fa fa-whatsapp "}),"  Whatsapp")),o.a.createElement(d.a,{url:window.location.href,quote:e.text},o.a.createElement("button",{className:"px-3 border-focus-none  dropdown-item text-left btn  btn-block text-info bg-white"},o.a.createElement("i",{className:" fa fa-telegram "}),"  Telegram"))))},u=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).getCurrentWidth=function(){var e=null;return"undefined"!=typeof window&&(e=window.screen.width),e},t.getCurrentHeight=function(){var e=null;return"undefined"!=typeof window&&(e=window.screen.height),e},t.onClickCloseModal=function(e,t){e.stopPropagation(),Object(i.navigate)("/careers/"+t.id)},t}return r()(t,e),t.prototype.render=function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"d-flex flex-row flex-wrap pb-5"},this.props.jobsData.map(function(t,a){return o.a.createElement("div",{id:t.node.id,name:t.node.id,key:a,className:"col-12 col-md-6 mt-4 mb-0 px-2 col-lg-4"},o.a.createElement("div",{onClick:function(){Object(i.navigate)("/careers/"+t.node.id)},style:{minHeight:e.getCurrentWidth()>=768?"95px":"90px",borderRadius:"10px"},className:" scroll  d-flex flex-column flex-wrap justify-content-center careers-position careers-position-unhighlight"},o.a.createElement("h6",{className:" px-4 roboto-regular font-sm text-dark "},t.node.text),o.a.createElement("div",{className:"d-flex flex-row flex-wrap roboto-black font-xs text-uppercase"},o.a.createElement("span",{className:"pl-4  text-green  col-"},t.node.categories.location),o.a.createElement("span",{className:"pl-4  text-black  col-"},t.node.categories.team)),e.props.location.search.split("=")[3]===t.node.id&&o.a.createElement("div",null,o.a.createElement("div",{className:"pl-4 pt-3"},o.a.createElement("div",{className:"row justify-content-between align-items-center pl-4"}),o.a.createElement("div",{className:"d-block text-center"})))))}),0===this.props.jobsData.length&&o.a.createElement("h6",{className:"maison-bold mx-auto font-xl-l"},"No Results Found")))},t}(l.Component);t.a=u}}]);
//# sourceMappingURL=component---src-templates-job-js-1f52ef68368bbcd4e0d1.js.map