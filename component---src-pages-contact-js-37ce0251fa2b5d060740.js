(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{322:function(e,t,a){"use strict";a.r(t);var r=a(1),o=a.n(r),n=a(306),i=a(303),m=a(304),l=a(2),c=l.c.p.withConfig({displayName:"Item__ItemText",componentId:"sc-1ok416u-0"})(["margin:4px 0;"]),s=l.c.a.withConfig({displayName:"Item__ItemMail",componentId:"sc-1ok416u-1"})(["color:#007bff;text-decoration:none;background-color:transparent;&:hover{color:#0056b3;text-decoration:underline;}"]);function p(e){var t=e.title,a=e.phoneNumber,r=e.email;return o.a.createElement("div",null,o.a.createElement(c,null,t),o.a.createElement(c,null,a),o.a.createElement(s,{href:"mailto:"+r},r))}var d=l.c.div.withConfig({displayName:"Form__FormWrapper",componentId:"rvhhm2-0"})(["width:100%;"]),u=l.c.button.withConfig({displayName:"Form__Btn",componentId:"rvhhm2-1"})(["background-color:#fff;cursor:pointer;color:#606060;border:0.1rem solid #999;text-align:center;display:block;width:100%;font-size:14px;padding:1rem 2rem;border-radius:3px;&:hover{color:#3e3e3e;border:0.1rem solid #000;box-shadow:0px 0px 2px 0px rgba(0,0,0,0.804);transition:all 0.3s ease;}"]),h=l.c.p.withConfig({displayName:"Form__Heading",componentId:"rvhhm2-2"})(["margin-bottom:25px;font-size:19px;font-weight:300;text-align:center;"]),g=l.c.textarea.withConfig({displayName:"Form__TextArea",componentId:"rvhhm2-3"})(["font-size:1.4rem;padding:1rem 2rem;width:100%;margin-bottom:2.5rem;border-radius:3px;color:#606060;border:0.1rem solid #999;outline:none;resize:none;font-family:inherit;transition:all 0.2s;height:20rem;&:focus{color:#3e3e3e;border:0.1rem solid #000 !important;}"]),f=l.c.input.withConfig({displayName:"Form__EmailInput",componentId:"rvhhm2-4"})(["font-size:1.4rem;padding:1rem 2rem;width:100%;margin-bottom:2rem;border-radius:3px;color:#606060;border:0.1rem solid #999;outline:none;resize:none;font-family:inherit;transition:all 0.2s;&:focus{color:#3e3e3e;border:0.1rem solid #000 !important;}"]),b=l.c.label.withConfig({displayName:"Form__EmailLabel",componentId:"rvhhm2-5"})(["display:block;color:#c91630;font-size:1.4rem;padding-bottom:1rem;"]),w=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).send=function(e){/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(a.state.email).toLowerCase())?a.setState({email:"",message:"",error:!1}):a.setState({error:!0})},a.state={email:"",message:"",error:!1},a}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this;return o.a.createElement(d,null,o.a.createElement(h,null,"Nie wiesz do kogo się zwrócić? Zapraszamy do kontaktu."),o.a.createElement(b,{htmlFor:"email-form"},this.state.error?"Nieprawidłowy adres e-mail":""),o.a.createElement(f,{id:"email-from",type:"email",placeholder:"Twój e-mail",value:this.state.email,onChange:function(t){return e.setState({email:t.target.value})},style:{border:this.state.error?"1px solid #c91630":"1px solid #999"}}),o.a.createElement(g,{value:this.state.message,onChange:function(t){return e.setState({message:t.target.value})},placeholder:"Jak możemy pomóc?"}),o.a.createElement(u,{className:"sent",onClick:this.send},"Wyślij"))},r}(r.Component),x=[{title:"NeuroN Foundation",phoneNumber:"+48 514 438 369‬‬",email:"contact@neuronfoundation.com"},{title:"New Neuropsychiatry",phoneNumber:"+48 795 553 121",email:"institut@newneuropsychiatry.com"},{title:"NeuroN Direction",phoneNumber:"+48 797 620 025",email:"office@neurondirection.com"},{title:"Oakes Innovate",phoneNumber:"‭+48 889 222 988‬",email:"office@oakesinnovate.com"},{title:"NTV Channel",phoneNumber:"+48 514 438 369‬‬",email:"channel@neurontv.com"},{title:"Oakes Clinic",phoneNumber:"+48 889 222 988",email:"office@oakesclinic.com"},{title:"Oak Atlantis",phoneNumber:"+48 889 222 988",email:"nation@oakatlantis.com"},{title:"Media i współpraca",phoneNumber:"+48 889 222 988‬",email:"media@smartoakproject.com"},{title:"Pomoc techniczna",phoneNumber:"+48 516 003 690",email:"help@smartoakproject.com"}],N=l.c.div.withConfig({displayName:"Contact__ContactWrapper",componentId:"sc-16to3dp-0"})(["display:grid;grid-template-columns:repeat(2,1fr);grid-gap:10rem;margin:8rem 10rem;@media screen and (max-width:950px){grid-template-columns:1fr;grid-auto-flow:dense;grid-gap:5rem;}@media screen and (max-width:600px){margin:5rem 2rem;margin-top:3rem;}"]),y=l.c.div.withConfig({displayName:"Contact__ContactItems",componentId:"sc-16to3dp-1"})(["display:grid;grid-template-columns:repeat(2,1fr);grid-row-gap:25px;@media screen and (max-width:900px){grid-template-columns:repeat(3,1fr);grid-column-gap:25px;margin:0 auto;}@media screen and (max-width:790px){grid-template-columns:repeat(2,1fr);}@media screen and (max-width:600px){grid-template-columns:1fr;}"]);function v(){return o.a.createElement(N,null,o.a.createElement(y,null,x.map((function(e){return o.a.createElement(p,{title:e.title,phoneNumber:e.phoneNumber,email:e.email})}))),o.a.createElement(w,null))}var _=a(305),E=a(86);t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,null),o.a.createElement(_.a,null),o.a.createElement(n.a,null),o.a.createElement(E.a,null),o.a.createElement(v,null),o.a.createElement(i.a,null))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-37ce0251fa2b5d060740.js.map