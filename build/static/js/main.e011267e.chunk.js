(this.webpackJsonptaskreviewswidget=this.webpackJsonptaskreviewswidget||[]).push([[0],{22:function(e,t,a){e.exports={section:"Loader_section__14Mi9"}},23:function(e,t,a){},25:function(e,t,a){e.exports=a(70)},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),i=a(9),l=a(3),s=a(4),u=a(6),m=a(5),d=a(7),h=a(24),p={input:""},f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={input:""},a.handleOnChange=function(e){var t=e.target.value;a.setState({input:t})},a.handleOnSubmit=function(e){e.preventDefault(),(0,a.props.onSubmit)(a.state.input),a.setState(Object(h.a)({},p))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.input;return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm",onSubmit:this.handleOnSubmit},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{onChange:this.handleOnChange,value:e,className:"SearchForm-input",type:"text",autoComplete:"off",placeholder:"Search images and photos"})))}}]),t}(n.Component),g=function(e){var t=e.data,a=e.onClick;return r.a.createElement("li",{className:"ImageGalleryItem",onClick:a,role:"presentation"},r.a.createElement("img",{src:t.webformatURL,alt:t.tags,id:t.id,className:"ImageGalleryItem-image"}))},b=function(e){var t=e.data,a=e.onClick;return r.a.createElement("ul",{className:"ImageGallery"},t.length>0&&t.map((function(e){return r.a.createElement(g,{data:e,key:e.id,onClick:a})})))},y=a(20),v=a.n(y),E=function(e){var t=e.query,a=e.page;return v.a.get("".concat("https://pixabay.com/api/","?q=").concat(t,"&page=").concat(a,"&key=").concat("14985899-5016e3437bf8e26429faea886","&image_type=photo&orientation=horizontal&per_page=12"))},O=a(8),k=a.n(O),S=function(e){var t=e.onClick;return r.a.createElement("div",{className:k.a.section},r.a.createElement("button",{className:k.a.Button,type:"button",onClick:t},"Loade more"))},C=a(21),j=a.n(C),w=(a(69),a(22)),L=a.n(w),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:L.a.section},r.a.createElement(j.a,{type:"Puff",color:"#00BFFF",height:100,width:100}))}}]),t}(r.a.Component),M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleKeyPressESC=function(e){var t=a.props.onClick;27===e.keyCode&&t()},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPressESC)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPressESC)}},{key:"render",value:function(){var e=this.props,t=e.onClick,a=e.children;return r.a.createElement("div",{className:"Overlay",onClick:t,role:"presentation"},r.a.createElement("div",{className:"Modal"},a))}}]),t}(n.Component),_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={allData:[],page:0,query:"",isLoading:!1,isModal:!1,idLargeImageURL:""},a.getDataByParams=function(e){var t=e.query,n=e.page,r=a.state.allData,o=n>1?document.documentElement.scrollHeight:0;return a.setState({isLoading:!0}),E({query:t,page:n}).then((function(e){var t=e.data;return a.setState({allData:[].concat(Object(i.a)(r),Object(i.a)(t.hits))})})).catch((function(e){return alert(e)})).finally((function(){a.setState({isLoading:!1}),window.scrollTo({top:o,behavior:"smooth"})}))},a.handleOnSubmit=function(e){a.setState({allData:[],query:e,page:1})},a.handleLoadeMore=function(){var e=a.state.page;a.setState({page:e+1})},a.openModal=function(e){a.setState({isModal:!0,idLargeImageURL:e.target.id})},a.closeModal=function(){a.setState({isModal:!1})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.page,r=a.query;t.page===n&&t.query===r||""!==r&&this.getDataByParams({query:r,page:n})}},{key:"render",value:function(){var e=this.state,t=e.allData,a=e.isLoading,n=e.isModal,o=e.idLargeImageURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,{onSubmit:this.handleOnSubmit}),r.a.createElement(b,{data:t,onClick:this.openModal}),a&&r.a.createElement(N,null),t.length>0&&r.a.createElement(S,{onClick:this.handleLoadeMore}),n&&r.a.createElement(M,{onClick:this.closeModal},r.a.createElement("img",{src:function(){var e=t.find((function(e){return e.id===Number(o)}));return n?e.largeImageURL:""}(),alt:""})))}}]),t}(n.Component),D=a(23),I=a.n(D);c.a.render(r.a.createElement(_,{className:I.a}),document.getElementById("root"))},8:function(e,t,a){e.exports={section:"Button_section__3Afmf",Button:"Button_Button__1xbt_"}}},[[25,1,2]]]);
//# sourceMappingURL=main.e011267e.chunk.js.map