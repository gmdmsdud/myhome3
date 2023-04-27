(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[426],{1650:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/boards",function(){return r(2496)}])},2496:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return dt}});var n=r(5893),o=r(1399),i=r(6829);function s(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function a(){var t=s(["\n  width: 800px;\n  margin: 10px;\n"]);return a=function(){return t},t}function u(){var t=s(["\n  border-top: 2px solid gray;\n  margin-top: 20px;\n"]);return u=function(){return t},t}function c(){var t=s(["\n  border-bottom: 2px solid gray;\n"]);return c=function(){return t},t}function l(){var t=s(["\n  display: flex;\n  flex-direction: row;\n  height: 52px;\n  line-height: 52px;\n  border-bottom: 1px solid gray;\n\n  :hover {\n    color: blue;\n  }\n"]);return l=function(){return t},t}function d(){var t=s(["\n  width: 15%;\n  text-align: center;\n"]);return d=function(){return t},t}function h(){var t=s(["\n  width: 65%;\n  text-align: center;\n"]);return h=function(){return t},t}function f(){var t=s(["\n  width: 15%;\n  text-align: center;\n"]);return f=function(){return t},t}function p(){var t=s(["\n  width: 70%;\n  text-align: center;\n  cursor: pointer;\n\n  :hover {\n    color: blue;\n  }\n"]);return p=function(){return t},t}function v(){var t=s(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  padding-top: 30px;\n"]);return v=function(){return t},t}function b(){var t=s([""]);return b=function(){return t},t}function y(){var t=s(["\n  width: 171px;\n  height: 52px;\n  background-color: white;\n  border-radius: 15px;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  cursor: pointer;\n\n  :hover {\n    background-color: #f5f2fc;\n  }\n"]);return y=function(){return t},t}function g(){var t=s(["\n  color: ",";\n"]);return g=function(){return t},t}var w=i.Z.div(a()),x=i.Z.div(u()),O=i.Z.div(c()),k=i.Z.div(l()),P=i.Z.div(d()),m=i.Z.div(h()),C=i.Z.div(f()),j=i.Z.div(p()),S=i.Z.div(v()),Q=i.Z.img(b()),_=i.Z.button(y()),R=i.Z.span(g(),(function(t){return t.isMatched?"red":"black"})),D=r(7294);function E(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function Z(){var t=E(["\n  margin: 0px 50px;\n"]);return Z=function(){return t},t}function q(){var t=E(["\n  margin: 0px 10px;\n  color: ",";\n  font-weight: ",";\n  cursor: ",";\n"]);return q=function(){return t},t}i.Z.span(Z());var A=i.Z.span(q(),(function(t){return t.isActive?"blue":"black"}),(function(t){return t.isActive?"bold":"normal"}),(function(t){return t.isActive?"none":"pointer"}));function U(t){return(0,n.jsxs)("div",{children:[(0,n.jsx)(A,{onClick:t.onClickPrevPage,children:"<"}),new Array(10).fill(1).map((function(e,r){return t.startPage+r<=t.lastPage&&(0,n.jsx)(A,{onClick:t.onClickPage,id:String(t.startPage+r),isActive:t.startPage+r===t.activedPage,children:t.startPage+r},t.startPage+r)})),(0,n.jsx)(A,{onClick:t.onClickNextPage,children:">"})]})}function M(t){var e=(0,D.useState)(1),r=e[0],o=e[1],i=(0,D.useState)(1),s=i[0],a=i[1],u=null!=t.count?Math.ceil(t.count/10):0;return(0,n.jsx)(U,{startPage:r,lastPage:u,activedPage:s,onClickPage:function(e){var r=Number(e.currentTarget.id);a(r),t.refetch({page:r})},onClickPrevPage:function(){1!==r&&(o(r-10),a(r-10),t.refetch({page:r-10}))},onClickNextPage:function(){r+10<=u&&(o(r+10),a(r+10),t.refetch({page:r+10}))}})}var B=r(7632),H=r(1413),T={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M834.1 469.2A347.49 347.49 0 00751.2 354l-29.1-26.7a8.09 8.09 0 00-13 3.3l-13 37.3c-8.1 23.4-23 47.3-44.1 70.8-1.4 1.5-3 1.9-4.1 2-1.1.1-2.8-.1-4.3-1.5-1.4-1.2-2.1-3-2-4.8 3.7-60.2-14.3-128.1-53.7-202C555.3 171 510 123.1 453.4 89.7l-41.3-24.3c-5.4-3.2-12.3 1-12 7.3l2.2 48c1.5 32.8-2.3 61.8-11.3 85.9-11 29.5-26.8 56.9-47 81.5a295.64 295.64 0 01-47.5 46.1 352.6 352.6 0 00-100.3 121.5A347.75 347.75 0 00160 610c0 47.2 9.3 92.9 27.7 136a349.4 349.4 0 0075.5 110.9c32.4 32 70 57.2 111.9 74.7C418.5 949.8 464.5 959 512 959s93.5-9.2 136.9-27.3A348.6 348.6 0 00760.8 857c32.4-32 57.8-69.4 75.5-110.9a344.2 344.2 0 0027.7-136c0-48.8-10-96.2-29.9-140.9z"}}]},name:"fire",theme:"filled"},F=r(2135),N=function(t,e){return D.createElement(F.Z,(0,H.Z)((0,H.Z)({},t),{},{ref:e,icon:T}))};N.displayName="FireFilled";var I=D.forwardRef(N);function z(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function $(){var t=z(["\n  width: 776px;\n  height: 52px;\n  border-radius: 15px;\n  background-color: #f5f2fc;\n  padding: 0px 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]);return $=function(){return t},t}function V(){var t=z(["\n  color: #5729ff;\n  font-size: 30px;\n  cursor: pointer;\n\n  :hover {\n    color: red;\n  }\n"]);return V=function(){return t},t}function L(){var t=z(["\n  width: 100%;\n  height: 100%;\n  border: none;\n  outline: none;\n  background: none;\n  margin: 0px 20px;\n"]);return L=function(){return t},t}var K=i.Z.div($()),J=(0,i.Z)(I)(V()),W=i.Z.input(L());function G(t){return(0,n.jsxs)(K,{children:[(0,n.jsx)(J,{}),(0,n.jsx)(W,{placeholder:"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.",onChange:t.onChangeSearchbar})]})}var X=r(6486),Y=r.n(X);function tt(t){var e=Y().debounce((function(e){t.refetch({search:e,page:1}),t.refetchBoardsCount({search:e}),t.onChangeKeyword(e)}),1e3);return(0,n.jsx)(G,{onChangeSearchbar:function(t){e(t.target.value)}})}function et(t){var e;return(0,n.jsxs)(w,{children:[(0,n.jsx)(tt,{refetch:t.refetch,refetchBoardsCount:t.refetchBoardsCount,onChangeKeyword:t.onChangeKeyword}),(0,n.jsx)(x,{}),(0,n.jsxs)(k,{children:[(0,n.jsx)(P,{children:"ID"}),(0,n.jsx)(m,{children:"\uc81c\ubaa9"}),(0,n.jsx)(P,{children:"\uc791\uc131\uc790"}),(0,n.jsx)(P,{children:"\ub0a0\uc9dc"})]}),null===(e=t.data)||void 0===e?void 0:e.fetchBoards.map((function(e,r){return(0,n.jsxs)(k,{children:[(0,n.jsx)(C,{children:String(e._id).slice(-4).toUpperCase()}),(0,n.jsx)(j,{id:e._id,onClick:t.onClickMoveToBoardDetail,children:e.title.replaceAll(t.keyword,"@#$%".concat(t.keyword,"@#$%")).split("@#$%").map((function(e){return(0,n.jsx)(R,{isMatched:t.keyword===e,children:e},(0,B.Z)())}))}),(0,n.jsx)(C,{children:e.writer}),(0,n.jsx)(C,{children:(0,o._)(e.createdAt)})]},e._id)})),(0,n.jsx)(O,{}),(0,n.jsxs)(S,{children:[(0,n.jsx)(M,{refetch:t.refetch,count:t.count}),(0,n.jsxs)(_,{onClick:t.onClickMoveToBoardNew,children:[(0,n.jsx)(Q,{src:"/images/board/list/write.png"}),"\uac8c\uc2dc\ubb3c \ub4f1\ub85d\ud558\uae30"]})]})]})}var rt=r(7887),nt=r(7283);function ot(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function it(){var t=ot(["\n  query fetchBoards($page: Int, $search: String) {\n    fetchBoards(page: $page, search: $search) {\n      _id\n      writer\n      title\n      createdAt\n    }\n  }\n"]);return it=function(){return t},t}function st(){var t=ot(["\n  query fetchBoardsCount($search: String) {\n    fetchBoardsCount(search: $search)\n  }\n"]);return st=function(){return t},t}var at=(0,nt.Ps)(it()),ut=(0,nt.Ps)(st()),ct=r(1163);function lt(){var t=(0,ct.useRouter)(),e=(0,D.useState)(""),r=e[0],o=e[1],i=(0,rt.a)(at),s=i.data,a=i.refetch,u=(0,rt.a)(ut),c=u.data,l=u.refetch;return(0,n.jsx)(et,{data:s,onClickMoveToBoardNew:function(){t.push("/boards/new")},onClickMoveToBoardDetail:function(e){t.push("/boards/".concat(e.currentTarget.id))},refetch:a,refetchBoardsCount:l,count:null===c||void 0===c?void 0:c.fetchBoardsCount,keyword:r,onChangeKeyword:function(t){o(t)}})}function dt(){return(0,n.jsx)(lt,{})}},1399:function(t,e,r){"use strict";r.d(e,{_:function(){return n}});var n=function(t){var e=new Date(t),r=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),o=String(e.getDate()).padStart(2,"0");return"".concat(r,"-").concat(n,"-").concat(o)}},7632:function(t,e,r){"use strict";r.d(e,{Z:function(){return c}});var n={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let o;const i=new Uint8Array(16);function s(){if(!o&&(o="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!o))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(i)}const a=[];for(let l=0;l<256;++l)a.push((l+256).toString(16).slice(1));function u(t,e=0){return(a[t[e+0]]+a[t[e+1]]+a[t[e+2]]+a[t[e+3]]+"-"+a[t[e+4]]+a[t[e+5]]+"-"+a[t[e+6]]+a[t[e+7]]+"-"+a[t[e+8]]+a[t[e+9]]+"-"+a[t[e+10]]+a[t[e+11]]+a[t[e+12]]+a[t[e+13]]+a[t[e+14]]+a[t[e+15]]).toLowerCase()}var c=function(t,e,r){if(n.randomUUID&&!e&&!t)return n.randomUUID();const o=(t=t||{}).random||(t.rng||s)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,e){r=r||0;for(let t=0;t<16;++t)e[r+t]=o[t];return e}return u(o)}},7887:function(t,e,r){"use strict";r.d(e,{a:function(){return k}});var n=r(655),o=r(8964),i=r(7294),s=r.t(i,2),a=r(320),u=!1,c=s.useSyncExternalStore||function(t,e,r){var n=e();__DEV__&&!u&&n!==e()&&(u=!0,__DEV__&&o.kG.error("The result of getSnapshot should be cached to avoid an infinite loop"));var s=i.useState({inst:{value:n,getSnapshot:e}}),c=s[0].inst,d=s[1];return a.JC?i.useLayoutEffect((function(){Object.assign(c,{value:n,getSnapshot:e}),l(c)&&d({inst:c})}),[t,n,e]):Object.assign(c,{value:n,getSnapshot:e}),i.useEffect((function(){return l(c)&&d({inst:c}),t((function(){l(c)&&d({inst:c})}))}),[t]),n};function l(t){var e=t.value,r=t.getSnapshot;try{return e!==r()}catch(n){return!0}}var d=r(2152),h=r(4012),f=r(5317),p=r(990),v=r(1644),b=r(4692),y=r(6252),g=r(542),w=r(3712),x=r(1436),O=Object.prototype.hasOwnProperty;function k(t,e){return void 0===e&&(e=Object.create(null)),function(t,e){var r=(0,i.useRef)();r.current&&t===r.current.client&&e===r.current.query||(r.current=new P(t,e,r.current));var n=r.current,o=(0,i.useState)(0),s=(o[0],o[1]);return n.forceUpdate=function(){s((function(t){return t+1}))},n}((0,y.x)(e.client),t).useQuery(e)}var P=function(){function t(t,e,r){this.client=t,this.query=e,this.ssrDisabledResult=(0,g.J)({loading:!0,data:void 0,error:void 0,networkStatus:v.I.loading}),this.skipStandbyResult=(0,g.J)({loading:!1,data:void 0,error:void 0,networkStatus:v.I.ready}),this.toQueryResultCache=new(a.mr?WeakMap:Map),(0,b.Vp)(e,b.n_.Query);var n=r&&r.result,o=n&&n.data;o&&(this.previousData=o)}return t.prototype.forceUpdate=function(){__DEV__&&o.kG.warn("Calling default no-op implementation of InternalState#forceUpdate")},t.prototype.executeQuery=function(t){var e,r=this;t.query&&Object.assign(this,{query:t.query}),this.watchQueryOptions=this.createWatchQueryOptions(this.queryHookOptions=t);var n=this.observable.reobserveAsConcast(this.getObsQueryOptions());return this.previousData=(null===(e=this.result)||void 0===e?void 0:e.data)||this.previousData,this.result=void 0,this.forceUpdate(),new Promise((function(t){var e;n.subscribe({next:function(t){e=t},error:function(){t(r.toQueryResult(r.observable.getCurrentResult()))},complete:function(){t(r.toQueryResult(e))}})}))},t.prototype.useQuery=function(t){var e=this;this.renderPromises=(0,i.useContext)((0,f.K)()).renderPromises,this.useOptions(t);var r=this.useObservableQuery(),n=c((0,i.useCallback)((function(){if(e.renderPromises)return function(){};var t=function(){var t=e.result,n=r.getCurrentResult();t&&t.loading===n.loading&&t.networkStatus===n.networkStatus&&(0,d.D)(t.data,n.data)||e.setResult(n)},n=function(i){var s=r.last;o.unsubscribe();try{r.resetLastResults(),o=r.subscribe(t,n)}finally{r.last=s}if(!O.call(i,"graphQLErrors"))throw i;var a=e.result;(!a||a&&a.loading||!(0,d.D)(i,a.error))&&e.setResult({data:a&&a.data,error:i,loading:!1,networkStatus:v.I.error})},o=r.subscribe(t,n);return function(){return setTimeout((function(){return o.unsubscribe()}))}}),[r,this.renderPromises,this.client.disableNetworkFetches]),(function(){return e.getCurrentResult()}),(function(){return e.getCurrentResult()}));return this.unsafeHandlePartialRefetch(n),this.toQueryResult(n)},t.prototype.useOptions=function(e){var r,n=this.createWatchQueryOptions(this.queryHookOptions=e),o=this.watchQueryOptions;(0,d.D)(n,o)||(this.watchQueryOptions=n,o&&this.observable&&(this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(r=this.result)||void 0===r?void 0:r.data)||this.previousData,this.result=void 0)),this.onCompleted=e.onCompleted||t.prototype.onCompleted,this.onError=e.onError||t.prototype.onError,!this.renderPromises&&!this.client.disableNetworkFetches||!1!==this.queryHookOptions.ssr||this.queryHookOptions.skip?this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:this.result!==this.ssrDisabledResult&&this.result!==this.skipStandbyResult||(this.result=void 0):this.result=this.ssrDisabledResult},t.prototype.getObsQueryOptions=function(){var t=[],e=this.client.defaultOptions.watchQuery;return e&&t.push(e),this.queryHookOptions.defaultOptions&&t.push(this.queryHookOptions.defaultOptions),t.push((0,w.o)(this.observable&&this.observable.options,this.watchQueryOptions)),t.reduce(h.J)},t.prototype.createWatchQueryOptions=function(t){var e;void 0===t&&(t={});var r=t.skip,o=(t.ssr,t.onCompleted,t.onError,t.defaultOptions,(0,n._T)(t,["skip","ssr","onCompleted","onError","defaultOptions"])),i=Object.assign(o,{query:this.query});if(!this.renderPromises||"network-only"!==i.fetchPolicy&&"cache-and-network"!==i.fetchPolicy||(i.fetchPolicy="cache-first"),i.variables||(i.variables={}),r){var s=i.fetchPolicy,a=void 0===s?this.getDefaultFetchPolicy():s,u=i.initialFetchPolicy,c=void 0===u?a:u;Object.assign(i,{initialFetchPolicy:c,fetchPolicy:"standby"})}else i.fetchPolicy||(i.fetchPolicy=(null===(e=this.observable)||void 0===e?void 0:e.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return i},t.prototype.getDefaultFetchPolicy=function(){var t,e;return(null===(t=this.queryHookOptions.defaultOptions)||void 0===t?void 0:t.fetchPolicy)||(null===(e=this.client.defaultOptions.watchQuery)||void 0===e?void 0:e.fetchPolicy)||"cache-first"},t.prototype.onCompleted=function(t){},t.prototype.onError=function(t){},t.prototype.useObservableQuery=function(){var t=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=(0,i.useMemo)((function(){return{refetch:t.refetch.bind(t),reobserve:t.reobserve.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}}),[t]);var e=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&e&&(this.renderPromises.registerSSRObservable(t),t.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(t)),t},t.prototype.setResult=function(t){var e=this.result;e&&e.data&&(this.previousData=e.data),this.result=t,this.forceUpdate(),this.handleErrorOrCompleted(t)},t.prototype.handleErrorOrCompleted=function(t){var e=this;if(!t.loading){var r=this.toApolloError(t);Promise.resolve().then((function(){r?e.onError(r):t.data&&e.onCompleted(t.data)})).catch((function(t){__DEV__&&o.kG.warn(t)}))}},t.prototype.toApolloError=function(t){return(0,x.O)(t.errors)?new p.cA({graphQLErrors:t.errors}):t.error},t.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},t.prototype.toQueryResult=function(t){var e=this.toQueryResultCache.get(t);if(e)return e;var r=t.data,o=(t.partial,(0,n._T)(t,["data","partial"]));return this.toQueryResultCache.set(t,e=(0,n.pi)((0,n.pi)((0,n.pi)({data:r},o),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!e.error&&(0,x.O)(t.errors)&&(e.error=new p.cA({graphQLErrors:t.errors})),e},t.prototype.unsafeHandlePartialRefetch=function(t){!t.partial||!this.queryHookOptions.partialRefetch||t.loading||t.data&&0!==Object.keys(t.data).length||"cache-only"===this.observable.options.fetchPolicy||(Object.assign(t,{loading:!0,networkStatus:v.I.refetch}),this.observable.refetch())},t}()}},function(t){t.O(0,[662,18,774,888,179],(function(){return e=1650,t(t.s=e);var e}));var e=t.O();_N_E=e}]);