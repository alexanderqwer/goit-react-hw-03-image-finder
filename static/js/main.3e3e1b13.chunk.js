(this.webpackJsonptaskreviewswidget=this.webpackJsonptaskreviewswidget||[]).push([[0],{22:function(e,t,a){e.exports={section:"Loader_section__14Mi9"}},23:function(e,t,a){},24:function(e,t,a){e.exports=a(69)},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),i=a(9),l=a(3),s=a(4),u=a(6),m=a(5),d=a(7),h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={input:""},a.handleOnChange=function(e){var t=e.target.value;a.setState({input:t})},a.handleOnSubmit=function(e){e.preventDefault(),(0,a.props.onSubmit)(a.state.input)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state.input;return r.a.createElement("header",{className:"Searchbar"},r.a.createElement("form",{className:"SearchForm",onSubmit:this.handleOnSubmit},r.a.createElement("button",{type:"submit",className:"SearchForm-button"},r.a.createElement("span",{className:"SearchForm-button-label"},"Search")),r.a.createElement("input",{onChange:this.handleOnChange,value:e,className:"SearchForm-input",type:"text",autoComplete:"off",placeholder:"Search images and photos"})))}}]),t}(n.Component),p=function(e){var t=e.data,a=e.onClick;return r.a.createElement("li",{className:"ImageGalleryItem",onClick:a,role:"presentation"},r.a.createElement("img",{src:t.webformatURL,alt:t.tags,id:t.id,className:"ImageGalleryItem-image"}))},f=function(e){var t=e.data,a=e.onClick;return r.a.createElement("ul",{className:"ImageGallery"},t.length>0&&t.map((function(e){return r.a.createElement(p,{data:e,key:e.id,onClick:a})})))},g=a(20),b=a.n(g),v=function(e){var t=e.query,a=e.page;return b.a.get("".concat("https://pixabay.com/api/","?q=").concat(t,"&page=").concat(a,"&key=").concat("14985899-5016e3437bf8e26429faea886","&image_type=photo&orientation=horizontal&per_page=12"))},y=a(8),E=a.n(y),O=function(e){var t=e.onClick;return r.a.createElement("div",{className:E.a.section},r.a.createElement("button",{className:E.a.Button,type:"button",onClick:t},"Loade more"))},k=a(21),S=a.n(k),C=(a(68),a(22)),j=a.n(C),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:j.a.section},r.a.createElement(S.a,{type:"Puff",color:"#00BFFF",height:100,width:100}))}}]),t}(r.a.Component),L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleKeyPressESC=function(e){var t=a.props.onClick;27===e.keyCode&&t()},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPressESC)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPressESC)}},{key:"render",value:function(){var e=this.props,t=e.onClick,a=e.children;return r.a.createElement("div",{className:"Overlay",onClick:t,role:"presentation"},r.a.createElement("div",{className:"Modal"},a))}}]),t}(n.Component),N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={allData:[],page:0,query:"",isLoading:!1,isModal:!1,idLargeImageURL:""},a.getDataByParams=function(e){var t=e.query,n=e.page,r=a.state.allData,o=n>1?document.documentElement.scrollHeight:0;return a.setState({isLoading:!0}),v({query:t,page:n}).then((function(e){var t=e.data;return a.setState({allData:[].concat(Object(i.a)(r),Object(i.a)(t.hits))})})).catch((function(e){return alert(e)})).finally((function(){a.setState({isLoading:!1}),window.scrollTo({top:o,behavior:"smooth"})}))},a.handleOnSubmit=function(e){a.setState({allData:[],query:e,page:1})},a.handleLoadeMore=function(){var e=a.state.page;a.setState({page:e+1})},a.openModal=function(e){a.setState({isModal:!0,idLargeImageURL:e.target.id})},a.closeModal=function(){a.setState({isModal:!1})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.page,r=a.query;t.page!==n&&this.getDataByParams({query:r,page:n})}},{key:"render",value:function(){var e=this.state,t=e.allData,a=e.isLoading,n=e.isModal,o=e.idLargeImageURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{onSubmit:this.handleOnSubmit}),r.a.createElement(f,{data:t,onClick:this.openModal}),a&&r.a.createElement(w,null),t.length>0&&r.a.createElement(O,{onClick:this.handleLoadeMore}),n&&r.a.createElement(L,{onClick:this.closeModal},r.a.createElement("img",{src:function(){var e=t.find((function(e){return e.id===Number(o)}));return n?e.largeImageURL:""}(),alt:""})))}}]),t}(n.Component),M=a(23),_=a.n(M);c.a.render(r.a.createElement(N,{className:_.a}),document.getElementById("root"))},8:function(e,t,a){e.exports={section:"Button_section__3Afmf",Button:"Button_Button__1xbt_"}}},[[24,1,2]]]);
//# sourceMappingURL=main.3e3e1b13.chunk.js.map