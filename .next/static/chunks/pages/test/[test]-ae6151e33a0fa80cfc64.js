_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[27],{"/tsD":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test/[test]",function(){return n("vlPu")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a,u=o(n("q1tI")),c=n("elyg"),f=n("nOHt"),s=new Map,i=window.IntersectionObserver,l={};var p=function(e,t){var n=a||(i?a=new i((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function d(e,t,n,r){(0,c.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var v=function(e){var t=!1!==e.prefetch,n=u.default.useState(),o=r(n,2),a=o[0],s=o[1],v=(0,f.useRouter)(),h=v&&v.pathname||"/",w=u.default.useMemo((function(){var t=(0,c.resolveHref)(h,e.href,!0),n=r(t,2),o=n[0],a=n[1];return{href:o,as:e.as?(0,c.resolveHref)(h,e.as):a||o}}),[h,e.href,e.as]),y=w.href,E=w.as;u.default.useEffect((function(){if(t&&i&&a&&a.tagName&&(0,c.isLocalURL)(y)&&!l[y+"%"+E])return p(a,(function(){d(v,y,E)}))}),[t,a,y,E,v]);var _=e.children,g=e.replace,b=e.shallow,m=e.scroll;"string"===typeof _&&(_=u.default.createElement("a",null,_));var L=u.Children.only(_),M={ref:function(e){e&&s(e),L&&"object"===typeof L&&L.ref&&("function"===typeof L.ref?L.ref(e):"object"===typeof L.ref&&(L.ref.current=e))},onClick:function(e){L.props&&"function"===typeof L.props.onClick&&L.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}(e,v,y,E,g,b,m)}};return t&&(M.onMouseEnter=function(e){(0,c.isLocalURL)(y)&&(L.props&&"function"===typeof L.props.onMouseEnter&&L.props.onMouseEnter(e),d(v,y,E,{priority:!0}))}),(e.passHref||"a"===L.type&&!("href"in L.props))&&(M.href=(0,c.addBasePath)((0,c.addLocale)(E,v&&v.locale,v&&v.defaultLocale))),u.default.cloneElement(L,M)};t.default=v},vlPu:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=n("nOHt"),u=n("YFqc"),c=n.n(u),f=o.a.createElement;t.default=function(){var e=Object(a.useRouter)().query.test;return f("div",null,f("h1",null,e),f(c.a,{href:"/"},f("a",null,"Home")),f(c.a,{href:"/stats"},f("a",null,"Stats")))}}},[["/tsD",0,1,2]]]);