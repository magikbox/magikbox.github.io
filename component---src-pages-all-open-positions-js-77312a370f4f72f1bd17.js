(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{174:function(e,t,a){"use strict";a.r(t);a(297),a(40),a(99),a(98),a(102),a(101);var n=a(42),l=a.n(n),r=a(8),s=a.n(r),o=a(0),i=a.n(o),c=a(185),p=(a(300),a(43),a(421)),m=a(310),d=a.n(m),u=(a(181),function(e){var t=e.job;return i.a.createElement("div",{className:"py-5 my-5 py-md-2 my-md-0"},i.a.createElement("div",{className:"pt-5 d-md-none"},O(t)),i.a.createElement("p",{className:"  roboto-bold text-black font-sm"},"Overview"),i.a.createElement("div",{className:" description-font text-dark col-12 pl-1"},d()(t.description)),void 0!==t.lists[0]&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"pt-3 roboto-bold text-black font-sm"},"Responsibilities"),i.a.createElement("div",{className:" description-font text-dark col-12 pl-0"},i.a.createElement("ul",{className:"pl-3"},i.a.createElement("div",{className:" job-points"},d()(t.lists[0].content))))),void 0!==t.lists[0]&&i.a.createElement(i.a.Fragment,null,i.a.createElement("p",{className:"pt-3 roboto-bold text-black font-sm"},"Experience"),i.a.createElement("div",{className:" description-font text-dark col-12 pl-0 pb-5 pb-md-0"},i.a.createElement("ul",{className:"pl-3"},i.a.createElement("div",{className:" job-points"},d()(t.lists[1].content))))))}),f=a(207),g=a(423),h=a(424),b=a(425),E=a(426),x=a(427),N=a(428),v=a(429),w=a(430),y=a(19),k=a(184),S=k.Element,j=k.scroller,O=function(e){return i.a.createElement("div",{className:"d-flex flex-row pr-md-5 pr-2 align-items-center justify-content-end justify-content-md-start"},i.a.createElement("p",{className:"mb-0 font-weight-bold"},"Share:  "),i.a.createElement(g.a,{className:"pl-1 border-focus-none",url:window.location.href,quote:e.text},i.a.createElement(h.a,{size:32,round:!0})),i.a.createElement(b.a,{className:"pl-1 border-focus-none",url:window.location.href,quote:e.text},i.a.createElement(E.a,{size:32,round:!0})),i.a.createElement(x.a,{className:"pl-1 border-focus-none",url:window.location.href,quote:e.text},i.a.createElement(N.a,{size:32,round:!0})),i.a.createElement(v.a,{className:"pl-1 border-focus-none",url:window.location.href,quote:e.text},i.a.createElement(w.a,{size:32,round:!0})))},T=function(e){function t(t){var a;return(a=e.call(this,t)||this).getCurrentWidth=function(){var e=null;return"undefined"!=typeof window&&(e=window.screen.width),e},a.getCurrentHeight=function(){var e=null;return"undefined"!=typeof window&&(e=window.screen.height),e},a.onClickCloseModal=function(e,t,n){console.log("props rom postcard",n),e.stopPropagation(),Object(y.navigate)("/all-open-positions?d="+Object(f.a)(t.categories.department)+"&t="+Object(f.a)(t.categories.team)),a.setState({visible:!1})},a.state={visible:!0},a}return s()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement("div",null,i.a.createElement("div",{className:"d-flex flex-row flex-wrap pb-5"},this.props.jobsData.map(function(t,a){return i.a.createElement(S,{id:t.id,name:t.id,key:a,className:(e.props.location.search.split("=")[3]===t.id?"col-md-12":"col-lg-4")+"   col-12 col-md-6 mt-4 mb-0 px-2"},e.props.location.search.split("=")[3]===t.id&&e.getCurrentWidth()<768?i.a.createElement(p.a,{style:{width:e.getCurrentWidth().toString(),height:e.getCurrentHeight().toString()},className:"sdvsdv",open:e.state.visible||e.props.location.search.split("=")[3]===t.id,onClose:function(){},center:!0},i.a.createElement("div",{style:{maxHeight:e.getCurrentHeight(),overflowY:"scroll"},className:"charan"},e.props.location.search.split("=")[3]===t.id&&i.a.createElement("div",{className:""},i.a.createElement("div",{style:{top:"55px",left:"0",zIndex:"99",boxShadow:"1px 7px 14px -5px rgba(0,0,0,.32)"},className:"w-100 position-fixed bg-white py-4 "},i.a.createElement("div",{className:"d-flex flex-row "},i.a.createElement("h6",{className:" px-4 roboto-regular font-md  text-dark "},t.text),i.a.createElement("i",{onClick:function(a){return e.onClickCloseModal(a,t)},className:"fa scroll ml-auto pr-4 fa-minus fa-2x pt-1 mt-auto text-green "})),i.a.createElement("div",{className:"d-flex flex-row flex-wrap roboto-black font-xs text-uppercase"},i.a.createElement("span",{className:"pl-4  text-green  col-"},t.categories.location),i.a.createElement("span",{className:"pl-4  text-black  col-"},t.categories.team))),i.a.createElement("div",{className:"pl-4 pt-5"},i.a.createElement(u,{job:t})),i.a.createElement("div",{style:{bottom:"0",left:"0",zIndex:"99"},className:"w-100 bg-green py-4 text-center position-fixed  raleway-bold font-sm"},i.a.createElement("a",{rel:"noopener noreferrer",className:"text-white",target:"_blank",href:t.hostedUrl+"/apply?lever-source[]="+("undefined"!=typeof localStorage?localStorage.getItem("source"):"gojek.io")},"APPLY FOR THIS JOB"," "))))):i.a.createElement("div",{onClick:function(){e.props.triggerParentUpdate(t.text,t.descriptionPlain),e.props.location.search.split("=")[3]===t.id&&3!==e.props.location.search.split("=").length||Object(y.navigate)("/all-open-positions?d="+Object(f.a)(t.categories.department)+"&t="+Object(f.a)(t.categories.team)+"&p="+t.id),e.setState({visible:!0}),e.props.location.search.split("=")[3]!==t.id&&e.getCurrentWidth()>480&&j.scrollTo(t.id,{smooth:"easeInOutQuint",offset:-200})},style:{minHeight:e.getCurrentWidth()>=768?"95px":"90px",borderRadius:"10px"},className:" scroll  d-flex flex-column flex-wrap justify-content-center careers-position careers-position-unhighlight "+(e.props.location.search.split("=")[3]===t.id?"border-success pt-3":"")},e.props.location.search.split("=")[3]===t.id&&i.a.createElement("i",{onClick:function(a){a.stopPropagation(),Object(y.navigate)("/all-open-positions?d="+Object(f.a)(t.categories.department)+"&t="+Object(f.a)(t.categories.team)),e.setState({visible:!1})},className:"fa scroll ml-auto pr-5 fa-minus  mt-auto text-green "}),i.a.createElement("h6",{className:" px-4 roboto-regular font-sm text-dark "},t.text),i.a.createElement("div",{className:"d-flex flex-row flex-wrap roboto-black font-xs text-uppercase"},i.a.createElement("span",{className:"pl-4  text-green  col-"},t.categories.location),i.a.createElement("span",{className:"pl-4  text-black  col-"},t.categories.team)),e.props.location.search.split("=")[3]===t.id&&i.a.createElement("div",null,i.a.createElement("div",{className:"pl-4 pt-3"},i.a.createElement("div",{className:"row justify-content-between align-items-center pl-4"},i.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:t.hostedUrl+"/apply?lever-source[]="+("undefined"!=typeof localStorage?localStorage.getItem("source"):"gojek.io"),className:"apply btn btn-success px-5 apply  my-2"},"APPLY NOW"),i.a.createElement("div",{className:"d-none d-md-block"},O(t))),i.a.createElement(u,{job:t}),i.a.createElement("div",{className:"d-block text-center"})),i.a.createElement("div",{className:"w-100 text-center"},i.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:t.hostedUrl+"/apply?lever-source[]="+("undefined"!=typeof localStorage?localStorage.getItem("source"):"gojek.io"),className:"apply btn btn-success px-5 apply col-6 col-md-4  my-5"},"APPLY FOR THIS JOB"," ")))))}),0===this.props.jobsData.length&&i.a.createElement("h6",{className:"raleway-bold mx-auto font-xl-l"},"No Results Found")))},t}(o.Component),C=a(223),D=a.n(C),A=(a(64),function(e){function t(t){var a;return(a=e.call(this,t)||this).getShuffledData=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e},a.state={teamIndex:0},a}return s()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement("div",{className:"py-4"},i.a.createElement("div",{className:"d-none d-md-block"},i.a.createElement("div",{className:"d-flex flex-row flex-wrap px-2"},this.props.teams.map(function(t,a){return i.a.createElement(y.Link,{to:"/all-open-positions?d="+e.props.location.search.split("=")[1].split("&")[0]+"&t="+Object(f.a)(t.teamName),onClick:function(){return e.setState({teamIndex:a})},replace:!0,key:a,className:"roboto-black font-sm pt-3 pr-5  "+(void 0===(e.props.location.search.split("=")[2]&&e.props.location.search.split("=")[2].split("&")[0])&&0===a?"text-success":e.props.location.search.split("=")[2]&&e.props.location.search.split("=")[2].split("&")[0]===Object(f.a)(t.teamName)?"text-success":"text-dark")},i.a.createElement("span",{style:{borderBottom:void 0===(e.props.location.search.split("=")[2]&&e.props.location.search.split("=")[2].split("&")[0])&&0===a?"2px solid #3ca745":e.props.location.search.split("=")[2]&&e.props.location.search.split("=")[2].split("&")[0]===Object(f.a)(t.teamName)?"2px solid #3ca745":"2px solid transparent"}},t.teamName))}))),i.a.createElement("div",{className:"d-md-none col-12 px-2"},i.a.createElement("p",{className:"mb-0 font-sm raleway-bold text-black"},"TEAM:"),i.a.createElement("div",{className:"dropdown position-relative"},i.a.createElement("button",{style:{boxShadow:"none",borderBottom:"2px solid #009944"},className:"btn text-green px-0 pb-1 pt-2 btn-block bg-white dropdown-toggle custom-dropdown text-left neosans-regular font-md  text-uppercase",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},void 0===(this.props.location.search.split("=")[2]&&this.props.location.search.split("=")[2].split("&")[0])?this.props.teams[0].teamName.replace(/-/g," "):this.props.location.search.split("=")[2]&&this.props.location.search.split("=")[2].split("&")[0].replace(/-/g," ")),i.a.createElement("i",{className:"fa fa-chevron-down position-absolute text-green",style:{right:"0px",top:"8px"}}),i.a.createElement("div",{className:"dropdown-menu w-100","aria-labelledby":"dropdownMenuButton"},this.props.teams.map(function(t,a){return i.a.createElement(y.Link,{key:a,className:"dropdown-item text-uppercase font-md pl-3",to:"/all-open-positions?d="+e.props.location.search.split("=")[1].split("&")[0]+"&t="+Object(f.a)(t.teamName)},t.teamName)})))),this.props.teams.map(function(t,a){return void 0===(e.props.location.search.split("=")[2]&&e.props.location.search.split("=")[2].split("&")[0])&&0===a?i.a.createElement(T,Object.assign({},e.props,{key:a,jobsData:e.props.teams[0].data})):e.props.location.search.split("=")[2]&&e.props.location.search.split("=")[2].split("&")[0]===Object(f.a)(t.teamName)&&i.a.createElement(T,Object.assign({},e.props,{key:a,jobsData:e.props.teams[a].data}))}))},t}(o.Component)),L=a(184).Element,P=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).getTeamsFromURL=function(){var e=t.props.location.search.split("=")[1].split("&")[0];return t.props.reformatedData.filter(function(t,a){if(Object(f.a)(t.deptName)===e)return t})[0].teams},t}return s()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement("div",null,this.props.reformatedData.map(function(t,a){return i.a.createElement(i.a.Fragment,{key:a},i.a.createElement(L,{id:Object(f.a)(t.deptName),name:Object(f.a)(t.deptName),key:a},i.a.createElement("div",{className:"d-flex flex-row flex-wrap align-items-center justify-content-between pl-0 pr-2"},i.a.createElement(y.Link,{to:"/all-open-positions"+(""===e.props.location.search?"?d="+Object(f.a)(t.deptName):e.props.location.search.split("&")[0].split("=")[1]===Object(f.a)(t.deptName)?"":"?d="+Object(f.a)(t.deptName)),state:{teams:t.teams},className:"col-md-10 col-6 px-2",replace:!0},i.a.createElement("div",null,i.a.createElement("p",{className:"raleway-bold font-xl-l mb-0 "+(Object(f.a)(t.deptName)===e.props.location.search.split("&")[0].split("=")[1]?"text-black":"text-muted")+" "},t.deptName))),i.a.createElement("div",{className:" col- mb-3 mb-md-0"},i.a.createElement("span",{className:"text-green roboto-bold "},t.openings+" ","Openings",i.a.createElement(y.Link,{to:"/all-open-positions"+(Object(f.a)(t.deptName)===e.props.location.search.split("&")[0].split("=")[1]?"":"?d="+Object(f.a)(t.deptName)),className:"scroll d-md-none"},Object(f.a)(t.deptName)===e.props.location.search.split("&")[0].split("=")[1]?i.a.createElement("i",{style:{fontSize:"20px"},className:"fa pl-5 fa-minus pt-3 mt-auto text-green"}):i.a.createElement("i",{style:{fontSize:"20px"},className:"fa pl-5  fa-plus pt-3 mt-auto text-green"})))))),Object(f.a)(t.deptName)===e.props.location.search.split("&")[0].split("=")[1]&&i.a.createElement(A,Object.assign({},e.props,{departmentSelected:e.props.departmentSelected,teams:e.getTeamsFromURL()})),i.a.createElement("hr",null))}))},t}(o.Component),I=a(180),G=a(256),F=a(184),H=F.animateScroll,J=F.scroller,R=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleScroll=function(){"undefined"!=typeof window&&(window.pageYOffset>50?a.setState({scrollTop:" d-block "}):a.setState({scrollTop:" d-none "}))},a.getShuffledData=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e},a.getTeamsbyDepartment=function(e){for(var t=[],n=[],l=0;l<e.length;l++){var r=0;t.includes(e[l].categories.team)&&(r+=1),0===r&&t.push(e[l].categories.team)}return t.map(function(t,l){n.push({teamName:t,data:a.getShuffledData(e.filter(function(e,a){if(e.categories.team===t)return e}))})}),n},a.getFilterdata=function(e){var t=[];return t.push(e.data.filter(function(e,t){if(""!==e.description&&0!==e.lists.length&&e.lists&&e.lists[0]&&""!==e.lists[0].content&&e.lists&&e.lists[1]&&""!==e.lists[1].content&&!["Digital","Finance","Strategic Finance","Community","Legal","Government Relations","Expansion","Growth","Accounting and Finance","Business Operations - Community","Marketplace","International Operations - Expansion","Business operations - Growth","Marketing and Communications - Digital"].includes(e.categories.team)&&!["b8984973-1b9a-410d-9366-4fe0cc17c954","df136a0b-932d-41e9-80ae-106d20554445"].includes(e.id)&&!["Corporate","University"].includes(e.categories.department))return e})),{data:t[0]}},a.getPositions=function(e,t,n){a.setState({jobsData:n,departments:e,places:t,positions:e.map(function(e,t){return n.data.filter(function(t,a){if(t.categories.department===e)return t})})},function(){a.setState({reformatedData:a.getReformatedData(a.state.positions)},function(){window.location.search.split("&")[2]&&window.location.search.split("&")[2].split("=")[1]?J.scrollTo(""+window.location.search.split("&")[2].split("=")[1],{smooth:"easeInOutQuint",offset:-100}):J.scrollTo(""+window.location.search.split("=")[1],{smooth:"easeInOutQuint",offset:-100})})})},a.getReformatedData=function(e){for(var t=[],n=0;n<e.length;n++)0!==e[n].length&&t.push({deptName:e[n][0].categories.department,openings:e[n].length,teams:a.getTeamsbyDepartment(e[n])});return t},a.getLocationAndDepartment=function(e,t){var n=[{label:"All",value:"All"}];return a.state[e].map(function(e,t){n.push({label:e,value:e})}),i.a.createElement(i.a.Fragment,null,i.a.createElement(G.a,{className:"basic-single    btn-block bg-white dropdown-toggle custom-dropdown text-left neosans-regular   ",classNamePrefix:"select",defaultValue:{label:a.state[t],value:a.state[t]},onChange:function(e){var n;return a.setState(((n={})[t]=e.value,n))},isClearable:!1,isSearchable:!0,name:"color",options:n}))},a.getAfterSearchPositions=function(){return 0!==a.state.jobsData.length&&a.state.jobsData.data.filter(function(e,t){if(e.text.toLowerCase().includes(a.state.inputText.toLowerCase())&&("All"===a.state.departmentSelected||a.state.departmentSelected===e.categories.department)&&("All"===a.state.placeSelected||a.state.placeSelected===e.categories.location))return e})},a.state={filters:!1,departments:[],teams:[],positions:[],jobsData:[],locationName:"All",scrollTop:"d-none ",inputText:"",places:[],placeSelected:"All",departmentSelected:"All",reformatedData:[],siteTitle:"GOJEK Careers: Check out the current job openings at GOJEK Tech",siteDescription:"GOJEK is hiring the best and brightest of tech minds to build one of the world's most versatile and agile on-demand service apps."},a.updateTitleAndDescription=a.updateTitleAndDescription.bind(l()(a)),a}s()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;"undefined"!=typeof window&&window.addEventListener("scroll",this.handleScroll);var t=this.state.departments,a=this.state.places;D.a.get("https://api.lever.co/v0/postings/gojek?mode=json").then(function(n){for(var l=0;l<n.data.length;l++){var r=0,s=0;t.includes(n.data[l].categories.department)&&(r+=1),a.includes(n.data[l].categories.location)&&(s+=1),0===r&&t.push(n.data[l].categories.department),0===s&&a.push(n.data[l].categories.location)}e.getPositions(t,a,e.getFilterdata(n))})},a.updateTitleAndDescription=function(e,t){console.log("title",e),console.log("description",t),this.setState({siteTitle:e,siteDescription:t})},a.render=function(){var e=this;return i.a.createElement(I.a,{location:this.props.location},i.a.createElement(c.Helmet,{title:this.state.siteTitle,titleTemplate:"%s | "+this.state.siteTitle,meta:[{name:"description",content:this.state.siteDescription},{property:"og:title",content:this.state.siteTitle},{property:"og:description",content:this.state.siteDescription},{property:"og:type",content:"website"},{name:"twitter:card",content:this.state.siteDescription},{name:"twitter:title",content:this.state.siteTitle},{name:"twitter:description",content:this.state.siteDescription}]}),i.a.createElement("div",{className:"first-section"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",{className:"text-center text-black font-xl-x raleway-bold pt-5"},""===this.state.inputText&&"All"===this.state.placeSelected&&"All"===this.state.departmentSelected?"All Open Positions":"Search Results"),i.a.createElement("p",{onClick:function(){return e.setState(function(e){return{filters:!e.filters}})},className:"d-md-none text-green roboto-bold font-md pl-2"},i.a.createElement("i",{className:"fa fa-filter"})," Filters"),this.state.filters&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"col-md-3 col-12 px-2 pt-3 pt-md-0  "}," ",i.a.createElement("p",{className:"roboto-bold text-uppercase mb-1"},"Location:"),this.getLocationAndDepartment("places","placeSelected")),i.a.createElement("div",{className:"col-md-3 col-12 px-2 pt-3 pt-md-0  "}," ",i.a.createElement("p",{className:"roboto-bold text-uppercase mb-1"},"Department:"),this.getLocationAndDepartment("departments","departmentSelected"))),i.a.createElement("div",{className:"d-flex flex-row flex-wrap pb-5 pt-3"},i.a.createElement("div",{className:"col-md-6 col-12 px-2  pt-md-0 "},i.a.createElement("p",{className:"roboto-bold text-uppercase mb-1"},"Search:"),i.a.createElement("div",{className:"position-relative"},i.a.createElement("input",{onChange:function(t){return e.setState({inputText:t.target.value})},style:{height:"38px"},type:"text",name:"keyword",value:this.state.inputText,className:"form-control py-4 py-md-2 custom-search",id:"keyword",placeholder:"eg.. Android Engineer",autoComplete:"off"}),i.a.createElement("i",{className:"fa fa-search position-absolute text-green",style:{right:"10px",top:"11px"}}))),i.a.createElement("div",{className:"col-md-3 col-12 pl-0 pt-3 pt-md-0  d-none d-md-block"}," ",i.a.createElement("p",{className:"roboto-bold text-uppercase mb-1"},"Location:"),this.getLocationAndDepartment("places","placeSelected")),i.a.createElement("div",{className:"col-md-3 col-12 pl-0 pr-2 pt-3 pt-md-0  d-none d-md-block"}," ",i.a.createElement("p",{className:"roboto-bold text-uppercase mb-1"},"Department:"),this.getLocationAndDepartment("departments","departmentSelected"))),0===this.state.reformatedData.length&&i.a.createElement("div",{className:"d-flex flex-row justify-content-center align-items-center",style:{height:"50vh"}},i.a.createElement("i",{className:"fa text-green fa-spinner fa-2x fa-spin"})," ",i.a.createElement("p",{className:"font-xl-l raleway-bold mb-0"},"Loading...")," "),""===this.state.inputText&&"All"===this.state.placeSelected&&"All"===this.state.departmentSelected?i.a.createElement("div",{style:{minHeight:"50vh"}},i.a.createElement(P,Object.assign({triggerParentUpdate:this.updateTitleAndDescription,departmentSelected:this.state.departmentSelected},this.props,{reformatedData:this.state.reformatedData}))):i.a.createElement("div",{style:{minHeight:"50vh"}},i.a.createElement("div",{className:"d-flex flex-row flex-wrap d-md-none"},"All"!==this.state.placeSelected&&i.a.createElement("p",{className:"roboto-bold mb-0 font-md"},"Location:",this.state.placeSelected),"All"!==this.state.departmentSelected&&i.a.createElement("p",{className:"roboto-bold mb-0 ml-auto font-md"},"Department:",this.state.departmentSelected)),i.a.createElement("hr",null),i.a.createElement("div",{className:"d-flex flex-row flex-wrap align-items-center px-2"}," ",""!==this.state.inputText.trimLeft()&&i.a.createElement("h6",{className:"raleway-bold font-xl-l"},"'",this.state.inputText,"'"),i.a.createElement("p",{className:"text-green ml-auto"},this.getAfterSearchPositions().length+" ","Openings")),i.a.createElement(T,Object.assign({},this.props,{jobsData:this.getAfterSearchPositions()})))),i.a.createElement("div",{className:" scrolltop  "},i.a.createElement("div",{className:"scroll-icon position-absolute scroll  text-secondary"},i.a.createElement("i",{onClick:function(){H.scrollToTop()},className:this.state.scrollTop+" fa fa-2x fa-arrow-circle-up"})))))},t}(o.Component);t.default=R},178:function(e){e.exports={data:{site:{siteMetadata:{title:"GO-JEK TECH",description:"GO-JEK is a Super App. It’s one app for ordering food, commuting, digital payments, shopping, hyper-local delivery, getting a massage and two dozen services. It is Indonesia’s first and fastest growing unicorn building an on-demand empire.",siteUrl:"https://gojek.io",siteImage:"https://www.gojek.io/images/Go-Jek.png",twitter:"@gojektech"}}}}},179:function(e){e.exports=[{id:"1",name:"Home",link:"/",type:"link"},{id:"2",name:"About",link:"/about/",type:"link"},{id:"3",name:"Careers",link:"/careers",type:"link"},{id:"4",name:"News",link:"/news/",type:"link"},{id:"5",name:"Open Source",link:"/open-source/",type:"link"},{id:"6",name:"Blog",link:"/blog/",type:"link"},{id:"7",name:"Contact",link:"/contact/",type:"link"},{id:"10",name:"SuperApp",link:"/superapp/",type:"button"}]},180:function(e,t,a){"use strict";var n=a(178),l=a(0),r=a.n(l),s=a(1),o=a.n(s),i=a(185),c=a.n(i),p=(a(187),function(){return r.a.createElement("footer",{className:"bg-black text-white py-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row text-uppercase"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:"../../images/gojek-logo-footer.png",alt:"GOJEK LOGO",title:"GOJEK"}))),r.a.createElement("div",{className:"col-md-8"},r.a.createElement("div",{className:"row font-xs"},r.a.createElement("div",{className:"col-md-3 d-none d-md-block"},r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",{className:"pb-4"},r.a.createElement("a",{href:"/"},"Home")),r.a.createElement("li",{className:"pb-4"},r.a.createElement("a",{href:"/open-source/"},"Open Source")))),r.a.createElement("div",{className:"col-md-3 d-none d-md-block"},r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",{className:"pb-4"},r.a.createElement("a",{href:"/careers/"},"Careers")),r.a.createElement("li",{className:"pb-4"},r.a.createElement("a",{href:"/news/"},"News")))),r.a.createElement("div",{className:"col-md-2 d-none d-md-block font-xs"},r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",{className:"pb-4 "},r.a.createElement("a",{href:"/blog/"},"Blog")),r.a.createElement("li",{className:"pb-4 "},r.a.createElement("a",{href:"/contact/"},"Contact")))),r.a.createElement("div",{className:"col-md-4  d-none d-md-block px-0"},r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",{className:"pb-4 text-left mx-0 "},r.a.createElement("a",{className:"green-apply-btn btn btn-success raleway-bold rounded-1 text-white px-lg-5 px-md-3",href:"/all-open-positions/"},"Open Positions"))))))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4"},r.a.createElement("span",{className:"copyright-text"},"Connect with us on"),r.a.createElement("ul",{className:"list-inline"},r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://www.facebook.com/gojektech ",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-facebook-official","aria-hidden":"true"}))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://twitter.com/gojektech ",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://www.linkedin.com/company/go-jek-india/ ",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"}))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://www.instagram.com/gojek.tech/ ",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-instagram","aria-hidden":"true"}))),r.a.createElement("li",{className:"list-inline-item"},r.a.createElement("a",{href:"https://www.youtube.com/channel/UCRQzgsSnYyxzhYGxLddKgEw/featured ",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-youtube-play","aria-hidden":"true"}))))),r.a.createElement("div",{className:"col-md-8 text-md-right text-left font-xs"},r.a.createElement("span",{className:"invisible"},"Copyright text"),r.a.createElement("p",{className:"text-uppercase align-middle copyright-text"},r.a.createElement("strong",null,"© 2019 All rights reserved"))))))}),m=(a(186),a(183),a(184)),d=function(e){var t=e.data,a=e.currentPage;return r.a.createElement("li",{className:"mx-2 header-menu nav-item "+(a===t.link||~a.indexOf("/careers/")&&"Careers"===t.name||("/gojek-expansion/"===a||"/go-viet/"===a)&&"News"===t.name?"active":"")},"gomakeimpact"!==t.src&&"superapp"!==t.src&&r.a.createElement("a",{className:"button"===t.type?"header-btn btn btn-success rounded-1 raleway-bold green-apply-btn":"nav-link",href:t.link},t.name,a===t.link?r.a.createElement("span",{className:"sr-only"},"(current)"):""),("gomakeimpact"===t.src||"superapp"===t.src)&&r.a.createElement(m.Link,{to:t.link,spy:!0,smooth:!0,className:"nav-link text-success scroll",offset:-50},t.name))},u=function(e){var t=e.data;return r.a.createElement("nav",{className:"navbar fixed-top bg-white navbar-expand-lg navbar-light raleway-bold text-uppercase px-4 py-2"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("img",{className:"header-logo-width",src:"../../images/gojek-logo.png",alt:"GOJEK Logo",title:"GOJEK"})),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarToggler","aria-controls":"navbarToggler","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarToggler"},r.a.createElement("ul",{className:"navbar-nav ml-auto mt-2 mt-lg-0"},t.map(function(t,a){return r.a.createElement(d,{data:t,currentPage:e.currentPage,key:a})}))))},f=a(179),g=function(e){var t=e.children,a=e.location,l=n.data.site.siteMetadata;return r.a.createElement("div",null,r.a.createElement(c.a,null,r.a.createElement("title",null,"GOJEK"),r.a.createElement("meta",{content:"yes",name:"apple-mobile-web-app-capable"}),r.a.createElement("meta",{name:"description",content:l.description}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:site",content:l.twitter}),r.a.createElement("meta",{name:"twitter:title",content:l.title}),r.a.createElement("meta",{name:"twitter:description",content:l.description}),r.a.createElement("meta",{name:"twitter:image",content:l.siteImage}),r.a.createElement("meta",{property:"og:title",content:l.title}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:url",content:l.siteUrl}),r.a.createElement("meta",{property:"og:image",content:l.siteImage}),r.a.createElement("meta",{property:"og:description",content:l.description}),r.a.createElement("link",{rel:"shortcut icon",href:"/../images/favicon.ico",type:"image/x-icon "}),r.a.createElement("link",{rel:"icon",href:"/../images/favicon.ico",type:"image/x-icon"})),"/gomakeimpact/"!==a.pathname&&"/superapp/"!==a.pathname&&r.a.createElement(u,{siteTitle:l.title,data:f,currentPage:a.pathname}),"/gomakeimpact/"===a.pathname&&r.a.createElement(u,{siteTitle:l.title,data:[{id:"1",name:"About us",link:"about",type:"link",src:"gomakeimpact"},{id:"2",name:"GO-TROOPS",link:"goTroops",type:"link",src:"gomakeimpact"},{id:"3",name:"CAREERS",link:"jobs",type:"link",src:"gomakeimpact"}],currentPage:a.pathname}),"/superapp/"===a.pathname&&r.a.createElement(u,{siteTitle:l.title,data:[{id:"1",name:"Super Home",link:"home",type:"link",src:"superapp"},{id:"2",name:"Super App",link:"super-app",type:"link",src:"superapp"},{id:"3",name:"Super Facts",link:"super-facts",type:"link",src:"superapp"},{id:"4",name:"Super Blog",link:"super-blog",type:"link",src:"superapp"},{id:"5",name:"Super Jobs",link:"super-jobs",type:"link",src:"superapp"}],currentPage:a.pathname}),r.a.createElement("div",null,t),r.a.createElement(p,null))};g.propTypes={children:o.a.node.isRequired};t.a=g},181:function(e,t,a){"use strict";var n=a(182),l=a(0),r=a.n(l),s=a(1),o=a.n(s),i=a(96);function c(e){var t=e.description,a=e.title,l=n.data.site;return r.a.createElement(i.HelmetProvider,null,r.a.createElement(i.Helmet,{title:a,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:t},{property:"og:title",content:a},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:t},{name:"twitter:title",content:a},{name:"twitter:description",content:t}]}))}c.propTypes={title:o.a.string.isRequired},t.a=c},182:function(e){e.exports={data:{site:{siteMetadata:{title:"GO-JEK TECH"}}}}},207:function(e,t,a){"use strict";a.d(t,"a",function(){return n});a(64),a(98);var n=function(e){for(var t=e.split(""),a="",n=0;n<t.length;n++)" "===t[n]||","===t[n]?a+="-":"&"===t[n]?a+="-and-":a+=t[n];return a.replace(/ /g,"").toLowerCase()}}}]);
//# sourceMappingURL=component---src-pages-all-open-positions-js-77312a370f4f72f1bd17.js.map