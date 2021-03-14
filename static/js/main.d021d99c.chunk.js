(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__loXdW",imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__SvIQc"}},13:function(e,t,a){e.exports={overlay:"Modal_overlay__Pvoao",modal:"Modal_modal__2_-Us"}},14:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__1MJLY",modalImg:"ImageGallery_modalImg__12wwX"}},17:function(e,t,a){e.exports={errorWrapper:"ErrorSearch_errorWrapper__lDQwS"}},18:function(e,t,a){e.exports={loadMoreBtn:"LoadMoreBtn_loadMoreBtn__1oa8h"}},24:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(9),c=a.n(o),s=(a(24),a(3)),i=a(4),l=a(6),u=a(5),h=a(19),m=a(7),d=a.n(m),p=a(1),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleQueryChange=function(t){e.setState({query:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){var a=e.state.query;t.preventDefault(),""!==a.trim()?(e.props.onSubmit(a),e.setState({query:""})):h.a.error("Please, enter search query.")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("header",{className:d.a.searchbar,children:Object(p.jsxs)("form",{className:d.a.searchForm,onSubmit:this.handleSubmit,children:[Object(p.jsx)("button",{type:"submit",className:d.a.searchFormBtn,children:Object(p.jsx)("span",{className:d.a.searchFormBtnLabel,children:"Search"})}),Object(p.jsx)("input",{className:d.a.searchFormInput,type:"text",value:e,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleQueryChange})]})})})}}]),a}(r.Component),j=a(8),f=a.n(j),b=a(11),y=a(15);var v={fetchImg:function(e,t){var a="".concat("https://pixabay.com/api","/?image_type=photo&orientation=horizontal&q=").concat(e,"&page=").concat(t,"&per_page=12&key=").concat("19835867-453b8f011636e79a7f079d8e7");return fetch(a).then((function(e){return e.ok?e.json():Promise.reject(new Error("Oops! Nothing found"))}))}},O=a(12),_=a.n(O);function x(e){var t=e.src,a=e.alt,r=e.url,n=e.openModal;return Object(p.jsx)("li",{className:_.a.imageGalleryItem,children:Object(p.jsx)("img",{src:t,alt:a,className:_.a.imageGalleryItemImage,onClick:function(){return n({url:r,alt:a})}})})}var w=a(16),I=a.n(w),S=(a(47),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(p.jsx)(I.a,{type:"ThreeDots",color:"#df4e78",height:80,width:80,timeout:3e3})}}]),a}(r.Component)),k=a(17),C=a.n(k);function M(e){var t=e.message;return Object(p.jsx)("div",{className:C.a.errorWrapper,role:"alert",children:Object(p.jsx)("p",{children:t})})}var F=a(18),B=a.n(F);function L(e){var t=e.handleLoadMore;return Object(p.jsx)("button",{type:"button",className:B.a.loadMoreBtn,onClick:function(){return t()},children:"Load more"})}var N=a(13),G=a.n(N),Q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(p.jsx)("div",{className:G.a.overlay,onClick:this.handleBackdropClick,children:Object(p.jsx)("div",{className:G.a.modal,children:this.props.children})})}}]),a}(r.Component),D=a(14),P=a.n(D),q=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={images:[],page:1,error:null,showModal:!1,modalImgProps:{url:"",alt:""},status:"idle"},e.fetchImages=function(t){var a=e.state.page;v.fetchImg(t,a).then((function(t){var a=t.hits;if(0===a.length)return Promise.reject(new Error("Oops! Nothing found"));e.setState((function(e){return{images:[].concat(Object(y.a)(e.images),Object(y.a)(a)),status:"resolved"}}))})).catch((function(t){return e.setState({error:t,status:"rejected"})}))},e.incrementPage=function(){e.setState((function(e){return{page:e.page+1}}))},e.reset=function(){e.setState({page:1,images:[]})},e.scrollDown=function(){setTimeout((function(){window.scrollTo({top:document.body.scrollHeight,left:0,behavior:"smooth"})}),1e3)},e.handleLoadBtnClick=Object(b.a)(f.a.mark((function t(){var a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.searchQuery,t.next=3,e.incrementPage();case 3:e.fetchImages(a),e.scrollDown();case 5:case"end":return t.stop()}}),t)}))),e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.handleImgClick=function(t){e.setState({modalImgProps:t}),e.toggleModal()},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(b.a)(f.a.mark((function e(t){var a,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.searchQuery,r=this.props.searchQuery,a===r){e.next=7;break}return e.next=5,this.reset();case 5:this.setState({status:"pending"}),this.fetchImages(r);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.images,r=t.error,n=t.status,o=t.showModal,c=this.state.modalImgProps,s=c.url,i=c.alt;return"idle"===n?Object(p.jsx)("div",{}):"pending"===n?Object(p.jsx)(S,{}):"rejected"===n?Object(p.jsx)(M,{message:r.message}):"resolved"===n?Object(p.jsxs)(p.Fragment,{children:[o&&Object(p.jsx)(Q,{onClose:this.toggleModal,children:Object(p.jsx)("img",{src:s,alt:i,className:P.a.modalImg})}),Object(p.jsx)("ul",{className:P.a.imageGallery,children:a.map((function(t){var a=t.id,r=t.webformatURL,n=t.tags,o=t.largeImageURL;return Object(p.jsx)(x,{src:r,url:o,alt:n,openModal:e.handleImgClick},a)}))}),Object(p.jsx)(L,{handleLoadMore:this.handleLoadBtnClick})]}):void 0}}]),a}(r.Component),E=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={searchQuery:""},e.handleSearchFormSubmit=function(t){e.setState({searchQuery:t})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.searchQuery;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(g,{onSubmit:this.handleSearchFormSubmit}),Object(p.jsx)(q,{searchQuery:e})]})}}]),a}(r.Component);c.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("root"))},7:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__396r4",searchForm:"Searchbar_searchForm__3mw4s",searchFormBtn:"Searchbar_searchFormBtn__17P9g",searchFormBtnLabel:"Searchbar_searchFormBtnLabel__1fyv_",searchFormInput:"Searchbar_searchFormInput__2QTea"}}},[[48,1,2]]]);
//# sourceMappingURL=main.d021d99c.chunk.js.map