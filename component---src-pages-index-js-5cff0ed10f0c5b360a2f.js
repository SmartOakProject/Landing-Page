(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{RLSC:function(e){e.exports=JSON.parse('{"data":{"allInternalPl":{"edges":[{"node":{"home":null}},{"node":{"home":{"header":{"alternative_id":1,"title":"asdadassdsadas","desc":"PL desc","btns":[{"btnType":"facebook","btnText":"zobacz projekt na facebooku","btnLink":"/"},{"btnType":"pageLink","btnText":"zobacz podstronę projektu","btnLink":"/"}]},"content":[{"alternative_id":2,"type":"video","title":"PL Title","desc":"PL desc","btns":[{"btnType":"facebook","btnText":"zobacz projekt na facebooku","btnLink":"/"},{"btnType":"pageLink","btnText":"zobacz podstronę projektu","btnLink":"/"}]},{"alternative_id":3,"type":"video","title":"PL Title","desc":"PL desc","btns":[{"btnType":"facebook","btnText":"zobacz projekt na facebooku","btnLink":"/"},{"btnType":"pageLink","btnText":"zobacz podstronę projektu","btnLink":"/"}]},{"alternative_id":4,"type":"video","title":"PL Title","desc":"PL desc","btns":[{"btnType":"facebook","btnText":"zobacz projekt na facebooku","btnLink":"/"},{"btnType":"pageLink","btnText":"zobacz podstronę projektu","btnLink":"/"}]},{"alternative_id":5,"type":"video","title":"PL Title","desc":"PL desc","btns":[{"btnType":"facebook","btnText":"zobacz projekt na facebooku","btnLink":"/"},{"btnType":"pageLink","btnText":"zobacz podstronę projektu","btnLink":"/"}]},{"alternative_id":6,"type":"video","title":"PL Title","desc":"PL desc","btns":[{"btnType":"facebook","btnText":"zobacz projekt na facebooku","btnLink":"/"},{"btnType":"pageLink","btnText":"zobacz podstronę projektu","btnLink":"/"}]},{"alternative_id":7,"type":"video","title":"PL Title","desc":"PL desc","btns":[{"btnType":"facebook","btnText":"zobacz projekt na facebooku","btnLink":"/"},{"btnType":"pageLink","btnText":"zobacz podstronę projektu","btnLink":"/"}]},{"alternative_id":8,"type":"video","title":"PL Title","desc":"PL desc","btns":[{"btnType":"facebook","btnText":"zobacz projekt na facebooku","btnLink":"/"},{"btnType":"pageLink","btnText":"zobacz podstronę projektu","btnLink":"/"}]},{"alternative_id":9,"type":"video","title":"PL Title","desc":"PL desc","btns":[{"btnType":"facebook","btnText":"zobacz projekt na facebooku","btnLink":"/"},{"btnType":"pageLink","btnText":"zobacz podstronę projektu","btnLink":"/"}]}]}}}]}}}')},RXBc:function(e,t,n){"use strict";n.r(t);var o=n("RLSC"),a=n("q1tI"),b=n.n(a),i=n("kCIJ"),c=n("Rnav"),d=n("Jbm5"),s=n("qCxG"),r=n("CN8t"),p=function(e,t){var n=[];return e.map((function(e){e.node[t]&&(n=e.node[t])})),n};t.default=function(){var e=o.data,t=Object(i.useIntl)();return console.log(p(e.allInternalPl.edges,"home")),b.a.createElement(b.a.Fragment,null,b.a.createElement(c.a,{page:"1"},b.a.createElement(d.a,{link:!0,title:t.formatMessage({id:"home.header.title"}),desc:t.formatMessage({id:"home.header.desc"}),btns:p(e.allInternalPl.edges,"home").header.btns,btnPath:"home.header.btns"})),p(e.allInternalPl.edges,"home").content.map((function(n,o){return b.a.createElement(s.a,{isBlack:o%2==0,videoSrc:"home-"+o,imgSrc:"dsadasd",title:t.formatMessage({id:"home.content."+o+".title"}),desc:t.formatMessage({id:"home.content."+o+".desc"}),z:o+1,isSecond:0===o,isLast:o===p(e.allInternalPl.edges,"home").content.length-1,btns:n.btns,btnPath:"home.content."+o+".btns"})})),b.a.createElement(r.a,{darkFooter:!0}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-5cff0ed10f0c5b360a2f.js.map