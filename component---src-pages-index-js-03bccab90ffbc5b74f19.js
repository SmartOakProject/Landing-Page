(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{297:function(e,t,n){"use strict";n.r(t);n(13);var a=n(308),o=n(1),r=n.n(o),i=n(6),c=n(282),s=n(137),u=n(281),l=n(80),d=n(278),A=n(280),f=n(279),m=n(283),p=n(180),b=n(309),T=n(2),g=n(69);var h=new g.a,E=T.c.div.withConfig({displayName:"Cookie__Container",componentId:"sc-1xv54bt-0"})(["width:100vw;position:fixed;bottom:0;left:0;background-color:#151515;z-index:12312312312;display:flex;justify-content:center;align-items:center;transition:all 0.5s;padding:1.5rem;"]),y=T.c.p.withConfig({displayName:"Cookie__Text",componentId:"sc-1xv54bt-1"})(["color:#fff;margin-right:2rem;"]),w=T.c.button.withConfig({displayName:"Cookie__Btn",componentId:"sc-1xv54bt-2"})(["background-color:transparent;display:inline-flex;align-items:center;text-decoration:none;color:#fff;outline:none;border:0.1rem solid #fff;padding:0.5rem;border-radius:3px;font-size:1.4rem;text-transform:uppercase;cursor:pointer;transition:all 0.3s ease;:hover{background-color:#555555;}"]),S=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).state={isVisible:!1},t.onButtonClick=function(){h.set("cookieConsent_status",!0,{path:"/"}),t.setState({isVisible:!1})},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){h.get("cookieConsent_status")||this.setState({isVisible:!0})},o.render=function(){return this.state.isVisible?r.a.createElement(E,null,r.a.createElement(y,null,"Ta strona korzysta z ciasteczek aby świadczyć usługi na najwyższym poziomie. Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie."),r.a.createElement(w,{onClick:this.onButtonClick},"Zgoda")):null},a}(o.Component);var z=T.c.div.withConfig({displayName:"UnderScroll__Scroll",componentId:"sc-19gepxx-0"})(["height:100vh;width:1vw;position:fixed;bottom:0;right:0;background-color:red;border-left:1px solid #f1f1f1;"]);o.Component;var P=new g.a,k=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).checkLanguage=function(e,t,n,a,o){var r=P.get("language");return console.log(r),"PL"===r?e:"ENG"===r?t:"DE"===r?n:"FR"===r?a:"ES"===r?o:e},n.onLanguageChange=function(){n.setState({change:!n.state.change})},n.state={change:!0,lang:""},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentWillMount=function(){var e=P.get("language");console.log(e),this.setState({lang:e})},o.render=function(){var e=this.props.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null),r.a.createElement(b.Helmet,null,r.a.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,maximum-scale=1, shrink-to-fit=no,user-scalable=no,minimal-ui,viewport-fit=cover"}),r.a.createElement("title",null,"Home"),r.a.createElement("script",{dangerouslySetInnerHTML:{__html:'\n                    document.addEventListener("touchmove",\n                    function(e) {\n                      e.preventDefault();\n                    }, { passive: false }\n                  );\n'}})),r.a.createElement(A.a,null),r.a.createElement(u.a,{changeLang:this.onLanguageChange}),r.a.createElement(l.a,null),r.a.createElement(c.a,{page:"1"},r.a.createElement(s.a,{logo:!0,link:!0,text:this.checkLanguage("Chcesz zostać jednym z naszych wolontariuszy albo dołączyć do grona e-wolontariuszy? Przejdź do zakładki „Pobierz” i utwórz konto w Smart Oak ERP System. Niebawem skontaktuje się z tobą nasz koordynator i wszystko wytłumaczy. Dzięki swojej działalności pomożesz wielu ludziom na całym świecie. To jeszcze nigdy nie było takie proste!","To system przeznaczony dla osób biorących aktywny udział w rozwoju Smart Oak Project, służący do zarządzania nim. Choć jesteśmy z różnych części świata, nasz system ERP z rozbudowanym komunikatorem umożliwia nam pozostanie ze sobą w stałym kontakcie. Po co się ograniczać? Na co dzień Smart Oak System pomaga nam w prowadzeniu szkoleń, ","To system przeznaczony dla osób biorących aktywny udział w rozwoju Smart Oak Project, służący do zarządzania nim. Choć jesteśmy z różnych części świata, nasz system ERP z rozbudowanym komunikatorem umożliwia nam pozostanie ze sobą w stałym kontakcie. Po co się ograniczać? Na co dzień Smart Oak System pomaga nam w prowadzeniu szkoleń,","frTitle","esTitle"),title:"NeuroN Foundation",color:"white"})),r.a.createElement(m.a,{logo:!1,color:"black",videoSrc:"home-1",imgSrc:e.home1.childImageSharp.fluid,text:"Chcesz zostać jednym z naszych wolontariuszy albo dołączyć do grona e-wolontariuszy? Przejdź do zakładki „Pobierz” i utwórz konto w Smart Oak ERP System. Niebawem skontaktuje się z tobą nasz koordynator i wszystko wytłumaczy. Dzięki swojej działalności pomożesz wielu ludziom na całym świecie. To jeszcze nigdy nie było takie proste!",title:"NeuroN Foundation",textColor:"black",z:"3",secondText:!0}),r.a.createElement(m.a,{logo:!0,color:"white",videoSrc:"home-2",imgSrc:e.home2.childImageSharp.fluid,text:"To system przeznaczony dla osób biorących aktywny udział w rozwoju Smart Oak Project, służący do zarządzania nim. Choć jesteśmy z różnych części świata, nasz system ERP z rozbudowanym komunikatorem umożliwia nam pozostanie ze sobą w stałym kontakcie. Po co się ograniczać? Na co dzień Smart Oak System pomaga nam w prowadzeniu szkoleń, ",title:"New Neuropsychiatry",textColor:"white",z:"4",thirdText:!0}),r.a.createElement(m.a,{logo:!1,color:"black",videoSrc:"home-3",imgSrc:e.home3.childImageSharp.fluid,text:"Chcesz zostać jednym z naszych wolontariuszy albo dołączyć do grona e-wolontariuszy? Przejdź do zakładki „Pobierz” i utwórz konto w Smart Oak ERP System. Niebawem skontaktuje się z tobą nasz koordynator i wszystko wytłumaczy. Dzięki swojej działalności pomożesz wielu ludziom na całym świecie. To jeszcze nigdy nie było takie proste!",title:"iMundus",textColor:"black",z:"5"}),r.a.createElement(m.a,{logo:!0,color:"white",videoSrc:"home-4",imgSrc:e.home4.childImageSharp.fluid,text:"To system przeznaczony dla osób biorących aktywny udział w rozwoju Smart Oak Project, służący do zarządzania nim. Choć jesteśmy z różnych części świata, nasz system ERP z rozbudowanym komunikatorem umożliwia nam pozostanie ze sobą w stałym kontakcie. Po co się ograniczać? Na co dzień Smart Oak System pomaga nam w prowadzeniu szkoleń, ",title:"Oakes Innovate",textColor:"white",z:"6"}),r.a.createElement(m.a,{logo:!1,color:"black",videoSrc:"home-5",imgSrc:e.home5.childImageSharp.fluid,text:"Chcesz zostać jednym z naszych wolontariuszy albo dołączyć do grona e-wolontariuszy? Przejdź do zakładki „Pobierz” i utwórz konto w Smart Oak ERP System. Niebawem skontaktuje się z tobą nasz koordynator i wszystko wytłumaczy. Dzięki swojej działalności pomożesz wielu ludziom na całym świecie. To jeszcze nigdy nie było takie proste!",title:"NMedia",textColor:"black",z:"7"}),r.a.createElement(m.a,{logo:!0,color:"white",videoSrc:"home-6",imgSrc:e.home6.childImageSharp.fluid,text:"To system przeznaczony dla osób biorących aktywny udział w rozwoju Smart Oak Project, służący do zarządzania nim. Choć jesteśmy z różnych części świata, nasz system ERP z rozbudowanym komunikatorem umożliwia nam pozostanie ze sobą w stałym kontakcie. Po co się ograniczać? Na co dzień Smart Oak System pomaga nam w prowadzeniu szkoleń, ",title:"Oakes Clinic",textColor:"white",z:"8"}),r.a.createElement(m.a,{logo:!1,color:"black",videoSrc:"home-7",imgSrc:e.home7.childImageSharp.fluid,text:"Chcesz zostać jednym z naszych wolontariuszy albo dołączyć do grona e-wolontariuszy? Przejdź do zakładki „Pobierz” i utwórz konto w Smart Oak ERP System. Niebawem skontaktuje się z tobą nasz koordynator i wszystko wytłumaczy. Dzięki swojej działalności pomożesz wielu ludziom na całym świecie. To jeszcze nigdy nie było takie proste!",title:"Oak Atlantis",textColor:"black",z:"9"}),r.a.createElement(m.a,{z:"10",style:{height:"auto"},isLast:!0},r.a.createElement(p.a,{color:"white",logo:!0,videoSrc:"home-8",imgSrc:e.home8.childImageSharp.fluid,text:"Dzięki naszej platformie wszyscy uczestnicy projektu mogą się wspierać i nieustannie od siebie uczyć. Osobom szczególnie zaangażowanym wystawiamy dokumenty referencyjne, proponujemy staż albo zatrudnienie, a nawet zapraszamy do współpracy przy komercyjnych częściach projektu.",title:"NeuroN Currency",textColor:"white",isLast:!0}),r.a.createElement(d.a,{isHomepage:!0})),r.a.createElement(S,null))},a}(r.a.Component);t.default=function(e){return r.a.createElement(i.StaticQuery,{query:"4087456168",render:function(t){var n=t.data;return r.a.createElement(k,Object.assign({data:n},e))},data:a})}},300:function(e,t,n){n(108),n(32),n(24),n(12),n(45),n(46),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var a=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},o=(t.VALID_TAG_NAMES=Object.keys(a).map((function(e){return a[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(o).reduce((function(e,t){return e[o[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[a.NOSCRIPT,a.SCRIPT,a.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},308:function(e){e.exports=JSON.parse('{"data":{"home1":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACV0lEQVQoz32SW0iTYRjHFwoKRUJ21cGRGWWRRCek+2hl3kRYejG08Co7XAVGF+WwSLoqUrBEsrSECjRSZ3SVh2xzk82dPMxNd/ym0NzBOQ+/vu+TSkP9w8P78Lzv//+cXgUbYHl5ec35v78RFKuJ65mEeDyG0ahf993qmCy4WeY/8bb2Nk7mn8ZkNm9ateT/rXBxcZGlpSUS8wnmk/OEZ8MkEgnic3HetjSz/1AuFquFSDRCNBplYWGBSGRW5sZiMZkjVyiJSDAMGfD6vAzoBgiFQnR/+0o4HMY54aTtczvnCwvxeD3o9D/x+X0IoSC9/T0yt1PbwZR3cq1gU3MT+kE9ze9bxEqsNL55LQt3dWv58OkjJWo1Y+NjfOnswDXppqevl5eNr2RuVbUGu8P2b4aR6CzZB3M4qzonngcoKr7KLuVeap7WoLpYwLFTJ1Dm5HDzzm1y845Sef8eFbcqOJx3BPOwiZT0dDSPq1YEpdklk0kqbpRTWXmXsjI1Gs1Drl0vpbX1HdXVD1BmK0nbthVVwQVKii9TX19HzZNHqNXFOEbsnMk/TkND7Yqg9CUkmMRMxiEjvX3fMRj0dGk75RbNFhMZmTtQpKSwOyuLF7XP8Qd8mExD9P9YmWFd3TNxvpPiAudQhMO/5M0J0wKhmZC8BLfbhcvtRBCCMjF73x5SU7ewM3M72u4OAkEfY84RMaGDoBBAN6iTFzozM40iEPQTFE0QL/x+D54pN66JcZzOUUZG7Uy4xikvvUJGmoKiSyqxRStW2zAWmxmb3SL7o+I7h+jbRfsN5gXecjcsoaUAAAAASUVORK5CYII=","aspectRatio":1.795031055900621,"src":"/Landing-Page/static/e042a40dc6c2e56d835511b13450e74b/afabf/home-1.png","srcSet":"/Landing-Page/static/e042a40dc6c2e56d835511b13450e74b/c0bbd/home-1.png 400w,\\n/Landing-Page/static/e042a40dc6c2e56d835511b13450e74b/a54c6/home-1.png 800w,\\n/Landing-Page/static/e042a40dc6c2e56d835511b13450e74b/afabf/home-1.png 1156w","sizes":"(max-width: 1156px) 100vw, 1156px"}}},"home2":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABv0lEQVQoz42S30tTARTH771blHOb5jZ/7G6Q0422OZZ6e3BJpissCdHasi6oLIywEA0ZQjmILHpICxTC4Q+IRj8exIcSJpKhGAWGL4KCYS/56P/wcboeeki8D+fpfM/3nO/3ewRBEDisjEV+CrztmP0PsIRGMHjuYanqxa6omb502Nz/ycxWGUvgPs5oGiWxTv3YDuHxXXw9P7EFOjnp9P3FikcTSno9puJzeG5/4dLrP0Sm17jy5D2tL1JEP+xwumuOQv9lBFHSdqHuuBlDqUrN0CYds79ILC/wZust6uRXWqY2qXu5javpMaJWydIxI2Z3Gyb3TXyRZ1TcTXPr1Wfi6UXUj9uUxeaRzzSjyyjR7KGxNJohlhEkK3mVjyhrGia5luThynfcaorymkZtHu7LMFlOYQ3eIbe4gXxniOruGVzNE1R1TlDb847ziR9U1oeyeOkIQp0oYDDZKKl7Tr4nhu3sABeGNlBiSey1Twn3zWXCSeNwydrfRtTncqLkIjmOduRrK3j7fuPtXqawOs710VWUSH8WqzXlAw8dYfICgxQ1fsLesoTjxjcKgnGCvatcHUzhVpTscvEfyaKOPcMrJUlGw3nTAAAAAElFTkSuQmCC","aspectRatio":1.963380281690141,"src":"/Landing-Page/static/0e1b83c6f5c317b9a713d4b2054be7ca/c8bd7/home-2.png","srcSet":"/Landing-Page/static/0e1b83c6f5c317b9a713d4b2054be7ca/c0bbd/home-2.png 400w,\\n/Landing-Page/static/0e1b83c6f5c317b9a713d4b2054be7ca/a54c6/home-2.png 800w,\\n/Landing-Page/static/0e1b83c6f5c317b9a713d4b2054be7ca/c8bd7/home-2.png 1600w,\\n/Landing-Page/static/0e1b83c6f5c317b9a713d4b2054be7ca/8bc52/home-2.png 2400w,\\n/Landing-Page/static/0e1b83c6f5c317b9a713d4b2054be7ca/ca90f/home-2.png 2788w","sizes":"(max-width: 1600px) 100vw, 1600px"}}},"home3":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAByElEQVQoz3WSTU8TURSG57f5D9y4MS5cmOhC0p0fcQeV1Ggimk4oiLGdgoE0lZJYBWwkqW3CR8EWOiVMnTv3zrQ0RuNPeLwz/aBoWbyZe+ec9z3nvPcY0pNcBSUVgR8gXIn4IekEHTr67gnvSo7hK59JCIU816Nc3iOZWiHx3OT92gbHjSa9815UbBLPCAOT4KuAWq2OZS1hvVuksF5kfu418ek49fox3U53Is9QSh+UGlXsfxV/fv3m3Dnh00aBfK5AMZ8jt5zh/lSM2RcpfvZ6I1siDHQMX14IDkU9ndht73J2UOHlSoWnSyXMdJFX6U1uxmaYepjQdgh8bcu4WCSowtmlP+ou8H0c/QAne5tsl7ZYyB+yXfX58MXh3vQy12494vGTOEoXvZhooKFxqcMwIHRl56zN0cF3MqufmUmuM5/9ymyywPW7CW7cfkA2nY3yQgxFL40s9UFKGf0QQuC6LnbrlHKlwbddQcoqMbfwkTuxZ8QTJs2mHeUJvT5qyI1E5aDDfxCaHXrUsk/Z2dlndW0L07R4+yZDo97ox4X8nyejDsf2SPbbDxe37bSxdSdHtUOqlWqEUKxlt7QlTpQz/pBKc6XGX6CzsOFqDpKPAAAAAElFTkSuQmCC","aspectRatio":2.0028129395218004,"src":"/Landing-Page/static/0da8f9c12d099bfe57c97a8a70ec3eb6/c8bd7/home-3.png","srcSet":"/Landing-Page/static/0da8f9c12d099bfe57c97a8a70ec3eb6/c0bbd/home-3.png 400w,\\n/Landing-Page/static/0da8f9c12d099bfe57c97a8a70ec3eb6/a54c6/home-3.png 800w,\\n/Landing-Page/static/0da8f9c12d099bfe57c97a8a70ec3eb6/c8bd7/home-3.png 1600w,\\n/Landing-Page/static/0da8f9c12d099bfe57c97a8a70ec3eb6/8bc52/home-3.png 2400w,\\n/Landing-Page/static/0da8f9c12d099bfe57c97a8a70ec3eb6/05ada/home-3.png 2848w","sizes":"(max-width: 1600px) 100vw, 1600px"}}},"home4":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABiklEQVQoz32SvU7DMBSFbefHTp2fpk2VtmpICQXUQiUGfsTAwMIKE0JCZUBIsPEGPAHPwcrOyx1unBRCVTocxTf3+svxcRhjPhgLSOGap4KttpEcLqB6d9CDMzAZo9qznNOkFskjSZJ5GazAIjPYiwssXj9w/PQJOXiDN77H5PwWlkj/gRLQ5iNaJDWkgnHeMe5Optd4mD2XX0WWjTAp5rR24ARZw8AS2jJ7mCcmcHhBRaduxATsmiPsR1d4OXlHf+sIrtODbiWIohy2s9WANV0S0GI5LOMyNDBWwkqHPIbLhni//MJ899G4lOkBdvZu4LrjNQ51naNxFlUN46xTHzlEqgo85i9UT6lnQUbj31nWXsn9B+g3LiKGsBJI2YdwUpx2LzAL98AEg6cjBP05lJdB6hxKDSFE3LjQH6BuWG/DImCsdhHJMXw3gWW78KSiY0pI5VOWVIddUg7B2ytAVQJbf6xLPkBqFSazTeJulfNfYMky1KVLH1oMYTN3A4xXErr+M5YZUnRc4xsPPeM0yuaySQAAAABJRU5ErkJggg==","aspectRatio":2.0042492917847023,"src":"/Landing-Page/static/bf7804fa77c05e9d2f55bcf363106a8d/c8bd7/home-4.png","srcSet":"/Landing-Page/static/bf7804fa77c05e9d2f55bcf363106a8d/c0bbd/home-4.png 400w,\\n/Landing-Page/static/bf7804fa77c05e9d2f55bcf363106a8d/a54c6/home-4.png 800w,\\n/Landing-Page/static/bf7804fa77c05e9d2f55bcf363106a8d/c8bd7/home-4.png 1600w,\\n/Landing-Page/static/bf7804fa77c05e9d2f55bcf363106a8d/8bc52/home-4.png 2400w,\\n/Landing-Page/static/bf7804fa77c05e9d2f55bcf363106a8d/82ba2/home-4.png 2830w","sizes":"(max-width: 1600px) 100vw, 1600px"}}},"home5":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAACoElEQVQoz12S60uTURzH93dE9Cp6lZBdKEKILi/0RRe7E0WlYCKamKthNu3i5tylibppka40l9OW254555pW00iLorQoY7rUsHW3Up9pzk/P043owIfze3H48P2ecxSTU7NMTs3wa5eYnOXL1xhiDIKBIKaS0+jPFhMOj9DTc59q8wUaTaU462wE2m/hF4LotAZqL1bT7vWimBbnEP9BFs4Drhtuktcmcsemo89exW2vG09bJy7reW6XZ/Gw9SrR1x8Yf/WGslIjKcmb2JG6BYUYixOTmYkjz3JKeel1ZRxISeJRs4X7dguPg204XX6uVkpJSjMYvNPFu+g3oqMfKNWaWJqQwOIli1HIoj+IEtPTc3yXIvZ1+BCMx3nhuchAk4VIKECzU6BAWcSZvGPozpmwVtkoP19DTk4+pwrVmMsr/hNKCackYVwSqvPz0GTu5KVXEjZUMXjTx2B4FG9bgEBnCMHrl2RmDHo9lopKHtzro6W5RRbO/00nxuR5/mdlTfEZMnenELp0mlBtGZGBAT5NiExIzEq34hN8JK1dw5rVq9i3ZzuZGels27b5l1D8TUw6GBl7z4P+MHZXF06rhtAVDU1GFYLHx1AkSmR4jFcj42QfzWXX7r1S3RyUSiUFJ5So1QXyo8wzLTEXh3v9wxjr2zHYvKgM9QQcl3npv8IzoZaG+ibq3L30PokQHhpj/6E01q3fwMHDhzl2XIVOV0KJ9qz0bX4Lp8Q4VkcQTZ0Ps70TtdWNw+Hibc91+oMCFvtN9A1d1Hof8nwoSlr6EVasXPmz8tbUVJTFhaiKTqKQRTNS1dE3n9Fe8lBY0YKhPoCpsROtrYNuwcW1JjdGx12qW3sxO7p5OvyRysoaFixcxPLEZWzcsJ6s3DyysrP5AYvXZ5IX/MTiAAAAAElFTkSuQmCC","aspectRatio":2.0549927641099854,"src":"/Landing-Page/static/b7c73bdbabc3172379b56bb333100aa5/c8bd7/home-5.png","srcSet":"/Landing-Page/static/b7c73bdbabc3172379b56bb333100aa5/c0bbd/home-5.png 400w,\\n/Landing-Page/static/b7c73bdbabc3172379b56bb333100aa5/a54c6/home-5.png 800w,\\n/Landing-Page/static/b7c73bdbabc3172379b56bb333100aa5/c8bd7/home-5.png 1600w,\\n/Landing-Page/static/b7c73bdbabc3172379b56bb333100aa5/8bc52/home-5.png 2400w,\\n/Landing-Page/static/b7c73bdbabc3172379b56bb333100aa5/9b362/home-5.png 2840w","sizes":"(max-width: 1600px) 100vw, 1600px"}}},"home6":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB90lEQVQoz42S3UuTYRyG9+rrNvZRQWmJI8oKOwn6oMzFFnNTm7ZNK43J3k232QpN5mpUoEuzsZG4TUJJ1NAIggoPgkGFhQc76GAVBEEHEQT1d1y92zoQI/Xg5nq+uPjd8CgUCgWbxe66Qvj2Ij2hCaRgEo8/zmUphvNSGEubl2rD/uI7URQL3EgmFNkqC28OP8Xfn5EzRbc/wUXPXWytQdrPtnDsaD1VNbVoddu2JnR1RYiMvcJ3fRZvKE23bwxrk5sOcyMjzc2cOHQAlW4Hu/cYNhYKQknYaLIzn1wiGblP1BPk6vk2fOZTSGeOM2A20nBw79YqC395eF8NcbeLyAVZdM7KaKCPuFciYGnAb6rHfqSWyl3b0en1m1UuRaPX0NXZic1mJZFI8SH/g0f3EoTtZvwtFux11ZysM+BwONcIhRLLxDJUGiUVahGlTLVWXbxrdXbwbHmF7LtPrOZ/MpOZY6RHYtDRhNdqYiAUIhKO/DthQViQiapyRGW5vK4onu+sqmQl943c598sv8nzOvedmYlpxkIBEuNJojfu0NtzbZ1Q+E9lnZb2DjepzGOy77+Q+/iLt6tfWZxekCedJT05R3gwhiQNFX7GOoGwJvL+tNFIoK+f6K04o6MPGI5NMjv3gpfPszycmieVWiKTfsJQeBxfb5Q/je1H1pysZaYAAAAASUVORK5CYII=","aspectRatio":1.991584852734923,"src":"/Landing-Page/static/7834ffd3258465d2bfab11d04e0a2d19/c8bd7/home-6.png","srcSet":"/Landing-Page/static/7834ffd3258465d2bfab11d04e0a2d19/c0bbd/home-6.png 400w,\\n/Landing-Page/static/7834ffd3258465d2bfab11d04e0a2d19/a54c6/home-6.png 800w,\\n/Landing-Page/static/7834ffd3258465d2bfab11d04e0a2d19/c8bd7/home-6.png 1600w,\\n/Landing-Page/static/7834ffd3258465d2bfab11d04e0a2d19/8bc52/home-6.png 2400w,\\n/Landing-Page/static/7834ffd3258465d2bfab11d04e0a2d19/9b362/home-6.png 2840w","sizes":"(max-width: 1600px) 100vw, 1600px"}}},"home7":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAACJ0lEQVQoz22R7UtTYRjG97f0YhAUvUHhli3GxFlnW6PhXqqtNra0MVjMYoTpyiysb2UsmKLBjCgLc2gRBfWhpuEmJL2Yww/lPrRcYi7cOc/Z1XOec7YZdR8ung/3c37PfV+XiogETESAIFCtP6kIkftSifQs8SXwVJVidyoMKhURBQYrQ8T/SiyLKP4u4uWL5wxWqXR6GtnsFxkq8IwhSUWUF2ZnUljIfkL+Rx6Li9+Q/55DeuoV1kpr7Idgqxe917rx7GkSQ4P9MDTpMTX5lgGliasTSpfZi6nX6IkEwR3SQ1O/D2e8DjwYHmS9Mv3id27juN0KyxEj1LRvMnEoFJb+WbsKnJ/7iGj7aYTbXHDZDqNJV4/HI/erKz4ZfYTI+RCCAT/0Oi38fg9dkae+isq6hEklBSBVLvcVHrcN17tCuBg6iQP792J8fKwKTI6N4pizBRxnwMZNG9AV7VD8q8FkIJGBy8sFXI1GEL/VA7fTArPRgHlq+sqvFawWVzGcGEKL1QK1Wo26LXWIxfr+DkRUgLyy8uz7DFx2M9oDLpiaD2LPru1Ipd6w3sJCFt2XOtDq88Bus8LINSORuCsHUk1Y8bACzExPwueyYuBmJzrP+bFj22b0x2OsN/LwHvXvLNwnHHDYjqKxUYeJiWQtYUJqE1ZCmfv8AeGgFwN9l3Eh7MPunVvhOeVE4ecSbvReQaDNC61WA4uZQ0ODBunMu3UTykBeIPgDjb2OkNTUbcMAAAAASUVORK5CYII=","aspectRatio":2.0256776034236803,"src":"/Landing-Page/static/17f5b38bf8a0a1044972e5de55276aab/8d431/home-7.png","srcSet":"/Landing-Page/static/17f5b38bf8a0a1044972e5de55276aab/c0bbd/home-7.png 400w,\\n/Landing-Page/static/17f5b38bf8a0a1044972e5de55276aab/a54c6/home-7.png 800w,\\n/Landing-Page/static/17f5b38bf8a0a1044972e5de55276aab/8d431/home-7.png 1420w","sizes":"(max-width: 1420px) 100vw, 1420px"}}},"home8":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAB7UlEQVQoz22SuW8TQRSHLdvxrmf2SHxsdkF2wMHWhphgHOdCWEYWSSCksCPAIHEUljgkDgkkQIiChobUoaVACBrKCNHT8AfQ0vCHfIzX6wOL4ml2Zt587/d+byMyIQlCkwi1Cs1Q36Po7ZPqvJBzOFstsFDw1JlEn1L3uqlyTAzNHOZHAkgI7SUOIH2wiR6XrC7l6VwusXwyw+32Irf2aliGrQoZGCFU6kYQfaA2HsZQZe+BKSz2Nk/Q2fWpnXJoXfT5/vU19bUFYhENM2n9X2Ff5ahVU1XuVffSaW62y7S2i1yoF7h0vsjLh00Wix6JmAzy+gr7KiNyrGU51mo8JtCiCV40z/CkVaWxcYSy79BYzbNSnsW2TJJa6GMYhj7h4UBdUgFLrsu97XUOulu87zbZOZ2jUclR8T28zDRCKoAYwQYqI8mxdnvrjDGDZWe4vrbEx/ttuucqPNpZ58ayz+H+M17dvYJUvmWzDrY5HQ5jDDhUFwItYWPIaXzPpT4/x/FMmtKsQ9lz+Pz2Ab++HbDbqKErkG3aCh5OWp8AikHL4WAS6nfJp1JsHHOZz6RwheDd42v8+fmF/ed3iEbjqrAZAOUk8J9Jh0ZPKeDVqs/K3FFsaeEakqedTX7/+MThhze42RSaLoY+igBo8xewSwn+xu3uEQAAAABJRU5ErkJggg==","aspectRatio":2.0014104372355432,"src":"/Landing-Page/static/bb000cb28d21b02d0af3ed5726245cfb/bdcda/home-8.png","srcSet":"/Landing-Page/static/bb000cb28d21b02d0af3ed5726245cfb/c0bbd/home-8.png 400w,\\n/Landing-Page/static/bb000cb28d21b02d0af3ed5726245cfb/a54c6/home-8.png 800w,\\n/Landing-Page/static/bb000cb28d21b02d0af3ed5726245cfb/bdcda/home-8.png 1419w","sizes":"(max-width: 1419px) 100vw, 1419px"}}}}}')},309:function(e,t,n){n(73),n(107),n(32),n(24),n(12),n(45),n(25),n(29),n(21),n(18),n(5),n(13),t.__esModule=!0,t.Helmet=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=d(n(1)),i=d(n(35)),c=d(n(310)),s=d(n(312)),u=n(313),l=n(300);function d(e){return e&&e.__esModule?e:{default:e}}function A(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}var f,m,p,b=(0,c.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),T=(f=b,p=m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,s.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case l.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,r=e.newChildProps,i=e.nestedChildren;return a({},o,((t={})[n.type]=[].concat(o[n.type]||[],[a({},r,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,r=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(o.type){case l.TAG_NAMES.TITLE:return a({},r,((t={})[o.type]=c,t.titleAttributes=a({},i),t));case l.TAG_NAMES.BODY:return a({},r,{bodyAttributes:a({},i)});case l.TAG_NAMES.HTML:return a({},r,{htmlAttributes:a({},i)})}return a({},r,((n={})[o.type]=a({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=a({},t);return Object.keys(e).forEach((function(t){var o;n=a({},n,((o={})[t]=e[t],o))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,a={};return r.default.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,r=o.children,i=A(o,["children"]),c=(0,u.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,r),e.type){case l.TAG_NAMES.LINK:case l.TAG_NAMES.META:case l.TAG_NAMES.NOSCRIPT:case l.TAG_NAMES.SCRIPT:case l.TAG_NAMES.STYLE:a=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:c,nestedChildren:r});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:r})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=A(e,["children"]),o=a({},n);return t&&(o=this.mapChildrenToProps(t,o)),r.default.createElement(f,o)},o(t,null,[{key:"canUseDOM",set:function(e){f.canUseDOM=e}}]),t}(r.default.Component),m.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=f.peek,m.rewind=function(){var e=f.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},p);T.renderStatic=T.rewind,t.Helmet=T,t.default=T},310:function(e,t,n){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n(18),n(46),n(34),n(21),n(5);var o=n(1),r=a(o),i=a(n(311));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(a){if("function"!=typeof a)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function d(){u=e(l.map((function(e){return e.props}))),A.canUseDOM?t(u):n&&(u=n(u))}var A=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var c=o.prototype;return c.shouldComponentUpdate=function(e){return!i(e,this.props)},c.componentWillMount=function(){l.push(this),d()},c.componentDidUpdate=function(){d()},c.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),d()},c.render=function(){return r.createElement(a,this.props)},o}(o.Component);return c(A,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(a)+")"),c(A,"canUseDOM",s),A}}},311:function(e,t,n){n(36),n(32),n(24),n(12),n(45),e.exports=function(e,t,n,a){var o=n?n.call(a,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var r=Object.keys(e),i=Object.keys(t);if(r.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),s=0;s<r.length;s++){var u=r[s];if(!c(u))return!1;var l=e[u],d=t[u];if(!1===(o=n?n.call(a,l,d,u):void 0)||void 0===o&&l!==d)return!1}return!0}},312:function(e,t,n){"use strict";n(34),n(138),n(47),n(58),n(142),n(32),n(24),n(12),n(45),n(73);var a=Array.isArray,o=Object.keys,r=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,s,u,l=a(t),d=a(n);if(l&&d){if((s=t.length)!=n.length)return!1;for(c=s;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(l!=d)return!1;var A=t instanceof Date,f=n instanceof Date;if(A!=f)return!1;if(A&&f)return t.getTime()==n.getTime();var m=t instanceof RegExp,p=n instanceof RegExp;if(m!=p)return!1;if(m&&p)return t.toString()==n.toString();var b=o(t);if((s=b.length)!==o(n).length)return!1;for(c=s;0!=c--;)if(!r.call(n,b[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=s;0!=c--;)if(!("_owner"===(u=b[c])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},313:function(e,t,n){(function(e){n(107),n(33),n(81),n(25),n(73),n(18),n(32),n(24),n(12),n(45),n(74),n(46),n(108),n(20),n(13),n(41),n(22),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=s(n(1)),i=s(n(110)),c=n(300);function s(e){return e&&e.__esModule?e:{default:e}}var u,l=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=b(e,c.TAG_NAMES.TITLE),n=b(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var a=b(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||a||void 0},A=function(e){return b(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},f=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return o({},e,t)}),{})},m=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var a=Object.keys(n),o=0;o<a.length;o++){var r=a[o].toLowerCase();if(-1!==e.indexOf(r)&&n[r])return t.concat(n)}return t}),[])},p=function(e,t,n){var o={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&y("Helmet: "+e+' should be of type "Array". Instead found type "'+a(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n=void 0,r=Object.keys(e),i=0;i<r.length;i++){var s=r[i],u=s.toLowerCase();-1===t.indexOf(u)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(s)||s!==c.TAG_PROPERTIES.INNER_HTML&&s!==c.TAG_PROPERTIES.CSS_TEXT&&s!==c.TAG_PROPERTIES.ITEM_PROP||(n=s)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return o[n]||(o[n]={}),a[n]||(a[n]={}),!o[n][l]&&(a[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var r=Object.keys(a),s=0;s<r.length;s++){var u=r[s],l=(0,i.default)({},o[u],a[u]);o[u]=l}return e}),[]).reverse()},b=function(e,t){for(var n=e.length-1;n>=0;n--){var a=e[n];if(a.hasOwnProperty(t))return a[t]}return null},T=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){T(e)}),0)}),g=function(e){return clearTimeout(e)},h="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||T:e.requestAnimationFrame||T,E="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||g:e.cancelAnimationFrame||g,y=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},w=null,S=function(e,t){var n=e.baseTag,a=e.bodyAttributes,o=e.htmlAttributes,r=e.linkTags,i=e.metaTags,s=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,d=e.styleTags,A=e.title,f=e.titleAttributes;k(c.TAG_NAMES.BODY,a),k(c.TAG_NAMES.HTML,o),P(A,f);var m={baseTag:R(c.TAG_NAMES.BASE,n),linkTags:R(c.TAG_NAMES.LINK,r),metaTags:R(c.TAG_NAMES.META,i),noscriptTags:R(c.TAG_NAMES.NOSCRIPT,s),scriptTags:R(c.TAG_NAMES.SCRIPT,l),styleTags:R(c.TAG_NAMES.STYLE,d)},p={},b={};Object.keys(m).forEach((function(e){var t=m[e],n=t.newTags,a=t.oldTags;n.length&&(p[e]=n),a.length&&(b[e]=m[e].oldTags)})),t&&t(),u(e,p,b)},z=function(e){return Array.isArray(e)?e.join(""):e},P=function(e,t){void 0!==e&&document.title!==e&&(document.title=z(e)),k(c.TAG_NAMES.TITLE,t)},k=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var a=n.getAttribute(c.HELMET_ATTRIBUTE),o=a?a.split(","):[],r=[].concat(o),i=Object.keys(t),s=0;s<i.length;s++){var u=i[s],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var d=r.indexOf(u);-1!==d&&r.splice(d,1)}for(var A=r.length-1;A>=0;A--)n.removeAttribute(r[A]);o.length===r.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},R=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),a=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(a),r=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var a in t)if(t.hasOwnProperty(a))if(a===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(a===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[a]?"":t[a];n.setAttribute(a,s)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):r.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),r.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:r}},C=function(e){return Object.keys(e).reduce((function(t,n){var a=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+a:a}),"")},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},O=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(a={key:e})[c.HELMET_ATTRIBUTE]=!0,o=v(n,a),[r.default.createElement(c.TAG_NAMES.TITLE,o,e)];var e,n,a,o},toString:function(){return function(e,t,n,a){var o=C(n),r=z(t);return o?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+">"+l(r,a)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+l(r,a)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return v(t)},toString:function(){return C(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var a,o=((a={key:n})[c.HELMET_ATTRIBUTE]=!0,a);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var a=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:a}}else o[n]=t[e]})),r.default.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,a){var o=Object.keys(a).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var o=void 0===a[t]?t:t+'="'+l(a[t],n)+'"';return e?e+" "+o:o}),""),r=a.innerHTML||a.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+o+(i?"/>":">"+r+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){w&&E(w),e.defer?w=h((function(){S(e,(function(){w=null}))})):(S(e),w=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,a=e.encode,o=e.htmlAttributes,r=e.linkTags,i=e.metaTags,s=e.noscriptTags,u=e.scriptTags,l=e.styleTags,d=e.title,A=void 0===d?"":d,f=e.titleAttributes;return{base:O(c.TAG_NAMES.BASE,t,a),bodyAttributes:O(c.ATTRIBUTE_NAMES.BODY,n,a),htmlAttributes:O(c.ATTRIBUTE_NAMES.HTML,o,a),link:O(c.TAG_NAMES.LINK,r,a),meta:O(c.TAG_NAMES.META,i,a),noscript:O(c.TAG_NAMES.NOSCRIPT,s,a),script:O(c.TAG_NAMES.SCRIPT,u,a),style:O(c.TAG_NAMES.STYLE,l,a),title:O(c.TAG_NAMES.TITLE,{title:A,titleAttributes:f},a)}},t.reducePropsToState=function(e){return{baseTag:m([c.TAG_PROPERTIES.HREF],e),bodyAttributes:f(c.ATTRIBUTE_NAMES.BODY,e),defer:b(e,c.HELMET_PROPS.DEFER),encode:b(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:f(c.ATTRIBUTE_NAMES.HTML,e),linkTags:p(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:p(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:p(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:A(e),scriptTags:p(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:p(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:f(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=h,t.warn=y}).call(this,n(141))}}]);
//# sourceMappingURL=component---src-pages-index-js-03bccab90ffbc5b74f19.js.map