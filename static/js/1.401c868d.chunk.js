webpackJsonp([1],{178:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function A(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),l=t.n(a),s=t(2),c=t(186),d=t(187),u=t(49),g=t(48),p=t(216),m=t.n(p),h=t(18),b=t(7),B=t(9),C=t(218),f=t.n(C),_=t(219),w=t.n(_),k=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),v=function(e){function n(){var e,t,A,a;i(this,n);for(var l=arguments.length,s=Array(l),d=0;d<l;d++)s[d]=arguments[d];return t=A=o(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(s))),A.state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},A.inputChangedHandler=function(e,n){var t=Object.assign({},A.state.controls,r({},n,Object.assign({},A.state.controls[n],{value:e.target.value,valid:Object(c.a)(e.target.value,A.state.controls[n].validation),touched:!0})));A.setState({controls:t})},A.submitHandler=function(e){e.preventDefault(),A.props.onAuth(A.state.controls.email.value,A.state.controls.password.value,A.state.isSignup)},A.switchAuthModeHandler=function(){A.setState(function(e){return{isSignup:!e.isSignup}})},a=t,o(A,a)}return A(n,e),k(n,[{key:"componentDidMount",value:function(){this.props.touchingFlower||"/"===this.props.authRedirect||this.props.onSetRedirectPath()}},{key:"render",value:function(){var e=this,n=[];for(var t in this.state.controls)n.push({id:t,config:this.state.controls[t]});var r=n.map(function(n){return l.a.createElement(d.a,{key:n.id,elementType:n.config.elementType,elementConfig:n.config.elementConfig,value:n.config.value,invalid:!n.config.valid,shouldValidate:n.config.validation,touched:n.config.touched,changed:function(t){return e.inputChangedHandler(t,n.id)}})});this.props.loading&&(r=l.a.createElement(g.a,null));var i=null;this.props.error&&(i=l.a.createElement("p",{className:m.a.Error},this.props.error.message));var o=null;return this.props.isAuthenticated&&(o=l.a.createElement(B.c,{to:this.props.authRedirect})),l.a.createElement(s.a,null,l.a.createElement("div",{className:m.a.full},l.a.createElement("div",{className:m.a.bgvideo},l.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,className:m.a.bgvideo__content},l.a.createElement("source",{src:w.a,type:"video/mp4"}),l.a.createElement("source",{src:w.a,type:"video/webm"}),"Your browser does not support... :(")),l.a.createElement("div",{className:m.a.Auth},l.a.createElement("div",{className:m.a.Upper},l.a.createElement("img",{src:f.a,alt:"Buy Flower"}),l.a.createElement("p",null,l.a.createElement("span",null,"FLAT 5% OFF + FREE SHIPPING "),"On your first Order")),l.a.createElement("h3",{className:m.a.Heading},this.state.isSignup?"SIGNUP Form":" Login Form"),o,i,l.a.createElement("form",{onSubmit:this.submitHandler},r,l.a.createElement(u.a,{btnType:"Success"},"SUBMIT")),l.a.createElement(u.a,{clicked:this.switchAuthModeHandler,btnType:"Danger"},this.state.isSignup?"Already User? Click to SIGNIN":"New User? Click to SIGNUP"))))}}]),n}(a.Component),x=function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,touchingFlower:e.flowerValley.touchingFlowers,authRedirect:e.auth.authRedirect}},E=function(e){return{onAuth:function(n,t,r){return e(h.b(n,t,r))},onSetRedirectPath:function(){return e(h.i("/"))}}};n.default=Object(b.b)(x,E)(v)},186:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r=function(e,n){var t=!0;if(n.required&&(t=""!==e.trim()&&t),n.minLength&&(t=e.length>=n.minLength&&t),n.maxLength&&(t=e.length<=n.maxLength&&t),n.isEmail){t=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&t}if(n.isNumeric){t=/^\d+$/.test(e)&&t}return t}},187:function(e,n,t){"use strict";var r=t(0),i=t.n(r),o=t(188),A=t.n(o),a=function(e){var n=null,t=[A.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&t.push(A.a.Invalid),e.elementType){case"input":n=i.a.createElement("input",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":n=i.a.createElement("textarea",Object.assign({className:t.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":n=i.a.createElement("select",{className:t.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:n=i.a.createElement("input",Object.assign({className:A.a.InputElement},e.elementConfig,{value:e.value,onChange:e.changed}))}return i.a.createElement("div",{className:A.a.Input},i.a.createElement("label",{className:A.a.Label},e.label),n)};n.a=a},188:function(e,n,t){var r=t(189);"string"===typeof r&&(r=[[e.i,r,""]]);var i={hmr:!1};i.transform=void 0;t(175)(r,i);r.locals&&(e.exports=r.locals)},189:function(e,n,t){n=e.exports=t(174)(!0),n.push([e.i,".Input__Input__1VROp{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;padding:10px;font-size:2rem}.Input__Label__1tOSX{margin-bottom:10px;font-weight:700;display:block;font-size:1.2rem}.Input__InputElement__3TB0k{background-color:#fff;outline:none;font:inherit;padding:6px 10px;border:1px solid #ccc;width:100%;display:block;-webkit-box-sizing:border-box;box-sizing:border-box}.Input__InputElement__3TB0k:focus{background-color:#e0ffff;outline:none}.Input__Invalid__38X2d{background-color:#f7897d;border:1px solid red}","",{version:3,sources:["C:/Users/sikorgao/Software/react/flowers-valley/src/components/UI/Input/Input.css"],names:[],mappings:"AACA,qBACI,WAAY,AACZ,8BAA+B,AACvB,sBAAuB,AAC/B,aAAc,AACd,cAAgB,CAEnB,AACD,qBACI,mBAAoB,AACpB,gBAAkB,AAClB,cAAe,AACf,gBAAkB,CAErB,AAED,4BACI,sBAAwB,AACxB,aAAc,AACd,aAAa,AACb,iBAAkB,AAClB,sBAAuB,AACvB,WAAY,AACZ,cAAe,AACf,8BAA+B,AACvB,qBAAuB,CAClC,AACD,kCACI,yBAA4B,AAC5B,YAAc,CACjB,AACD,uBACI,yBAAqC,AACrC,oBAAsB,CACzB",file:"Input.css",sourcesContent:["\r\n.Input{\r\n    width: 100%;;\r\n    -webkit-box-sizing: border-box;;\r\n            box-sizing: border-box;\r\n    padding: 10px;\r\n    font-size: 2rem;\r\n\r\n}\r\n.Label{\r\n    margin-bottom: 10px;\r\n    font-weight: bold;\r\n    display: block;\r\n    font-size: 1.2rem;\r\n\r\n}\r\n\r\n.InputElement{\r\n    background-color: white;\r\n    outline: none;\r\n    font:inherit;\r\n    padding: 6px 10px;\r\n    border: 1px solid #ccc;\r\n    width: 100%;\r\n    display: block;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n.InputElement:focus{\r\n    background-color: lightcyan;\r\n    outline: none;\r\n}\r\n.Invalid{\r\n    background-color: rgb(247, 137, 125);\r\n    border: 1px solid red;\r\n}"],sourceRoot:""}]),n.locals={Input:"Input__Input__1VROp",Label:"Input__Label__1tOSX",InputElement:"Input__InputElement__3TB0k",Invalid:"Input__Invalid__38X2d"}},216:function(e,n,t){var r=t(217);"string"===typeof r&&(r=[[e.i,r,""]]);var i={hmr:!1};i.transform=void 0;t(175)(r,i);r.locals&&(e.exports=r.locals)},217:function(e,n,t){n=e.exports=t(174)(!0),n.push([e.i,".Auth__full__3bhbE{grid-column:1/-1;height:94vh;position:relative;padding:0;overflow:auto}.Auth__bgvideo__AgklJ{position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;opacity:.6;overflow:hidden}.Auth__bgvideo__content__3xXX_{height:100%;width:100%;-o-object-fit:cover;object-fit:cover}.Auth__Upper__2QrQM{background-image:-webkit-gradient(linear,left top,right top,from(#ece0d9),to(#eedac0));background-image:-webkit-linear-gradient(left,#ece0d9,#eedac0);background-image:-o-linear-gradient(left,#ece0d9,#eedac0);background-image:linear-gradient(90deg,#ece0d9,#eedac0);height:15rem;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}.Auth__Upper__2QrQM img{width:50%;height:100%;position:absolute;left:0;border-radius:10px;overflow:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden}.Auth__Upper__2QrQM p{position:absolute;top:1.4rem;right:0;font-size:1.4rem;width:45%;max-height:75%;margin:3rem 0 1rem;-ms-flex-item-align:center;align-self:center;padding-right:2rem;color:#442b01;line-height:2.3rem}.Auth__Upper__2QrQM p span{font-size:2.6rem;font-weight:900}.Auth__Auth__1TInt{text-align:center;-webkit-box-shadow:0 2px 3px #ccc;box-shadow:0 2px 3px #ccc;border:1px solid #eee;-webkit-box-sizing:border-box;box-sizing:border-box;width:45rem;max-height:60rem;margin:5rem auto 0;background-color:#f5f5f5}@media (max-width:520px){.Auth__Auth__1TInt{width:auto}.Auth__Upper__2QrQM p{position:absolute;top:1rem;right:0;font-size:1rem;width:45%;max-height:75%;-ms-flex-item-align:center;align-self:center;padding-right:.7rem;color:#633d05;line-height:1.7rem}.Auth__Upper__2QrQM p span{font-size:2rem;font-weight:900}}.Auth__Heading__1HV5l{font-size:3.1rem;text-transform:uppercase;font-weight:900;letter-spacing:1px;background-image:-webkit-gradient(linear,right top,left top,from(#f5cd78),to(#4e3706));background-image:-webkit-linear-gradient(right,#f5cd78,#4e3706);background-image:-o-linear-gradient(right,#f5cd78,#4e3706);background-image:linear-gradient(270deg,#f5cd78,#4e3706);display:inline-block;-webkit-background-clip:text;color:transparent;-webkit-transition:all .2s;-o-transition:all .2s;transition:all .2s;margin-bottom:1.5rem;margin-top:1.5rem}.Auth__Heading__1HV5l:hover{-webkit-transform:skewX(15deg) skewY(-2deg) scale(1.1);-ms-transform:skewX(15deg) skewY(-2deg) scale(1.1);transform:skewX(15deg) skewY(-2deg) scale(1.1);text-shadow:.5rem 1rem 2rem rgba(#4e3706,.8)}.Auth__Error__25GIB{color:#b11e1e;text-transform:capitalize!important;font-size:1.8rem;font-weight:700;font-style:italic}.Auth__Auth__1TInt>button{border:none;width:20rem}","",{version:3,sources:["C:/Users/sikorgao/Software/react/flowers-valley/src/containers/Auth/Auth.css"],names:[],mappings:"AAAA,mBACI,iBAAoB,AACpB,YAAa,AACb,kBAAmB,AACnB,UAAY,AACZ,aAAe,CAClB,AACD,sBACI,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,WAAY,AACZ,WAAY,AACZ,eAAiB,CACpB,AAEG,+BACI,YAAa,AACb,WAAY,AACZ,oBAAqB,AAClB,gBAAkB,CACxB,AAEL,oBACI,uFAAqH,AACrH,+DAA0F,AAC1F,0DAAqF,AACrF,wDAAsF,AACtF,aAAc,AACd,8BAA+B,AACvB,sBAAuB,AAC/B,iBAAmB,CAEtB,AACD,wBACI,UAAW,AACX,YAAa,AACb,kBAAmB,AAEnB,OAAQ,AAER,mBAAoB,AACpB,gBAAiB,AACjB,mCAAoC,AAC5B,0BAA4B,CACvC,AACD,sBAEI,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,iBAAkB,AAClB,UAAW,AACX,eAAgB,AAChB,mBAAoB,AACpB,2BAA4B,AAC5B,kBAAmB,AACnB,mBAAoB,AACpB,cAAsB,AACtB,kBAAoB,CACvB,AACD,2BACI,iBAAkB,AAClB,eAAiB,CACpB,AACD,mBAEI,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,sBAAuB,AACvB,8BAA+B,AACvB,sBAAuB,AAC/B,YAAa,AACb,iBAAkB,AAClB,mBAAoB,AACpB,wBAA6B,CAEhC,AAED,yBACI,mBACI,UAAY,CACf,AACD,sBAEI,kBAAmB,AACnB,SAAU,AACV,QAAS,AACT,eAAgB,AAChB,UAAW,AACX,eAAgB,AAEhB,2BAA4B,AAC5B,kBAAmB,AACnB,oBAAqB,AACrB,cAAsB,AACtB,kBAAoB,CACvB,AACD,2BACI,eAAgB,AAChB,eAAiB,CACpB,CACJ,AAGD,sBACI,iBAAkB,AAClB,yBAA0B,AAC1B,gBAAiB,AACjB,mBAAoB,AACpB,uFAA4F,AAC5F,gEAAmE,AACnE,2DAA8D,AAC9D,yDAA6D,AAC7D,qBAAsB,AACtB,6BAA8B,AAC9B,kBAAmB,AACnB,2BAA4B,AAC5B,sBAAuB,AACvB,mBAAoB,AACpB,qBAAsB,AACtB,iBAAmB,CACtB,AACD,4BACI,uDAAyD,AACrD,mDAAqD,AACjD,+CAAiD,AACzD,4CAAgD,CACnD,AAED,oBACI,cAAwB,AACxB,oCAAsC,AACtC,iBAAkB,AAClB,gBAAiB,AACjB,iBAAmB,CACtB,AAED,0BACI,YAAa,AACb,WAAa,CAChB",file:"Auth.css",sourcesContent:[".full{\r\n    grid-column: 1 / -1;\r\n    height: 94vh;\r\n    position: relative;\r\n    padding:  0;\r\n    overflow: auto;\r\n}\r\n.bgvideo {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: -1;\r\n    opacity: .6;\r\n    overflow: hidden;\r\n}\r\n    \r\n    .bgvideo__content {\r\n        height: 100%;\r\n        width: 100%;\r\n        -o-object-fit: cover;\r\n           object-fit: cover;\r\n    }\r\n\r\n.Upper{\r\n    background-image: -webkit-gradient(linear,  left top, right top,  from(rgb(236, 224, 217)), to(rgb(238, 218, 192)) );\r\n    background-image: -webkit-linear-gradient(left,  rgb(236, 224, 217), rgb(238, 218, 192) );\r\n    background-image: -o-linear-gradient(left,  rgb(236, 224, 217), rgb(238, 218, 192) );\r\n    background-image: linear-gradient(to right,  rgb(236, 224, 217), rgb(238, 218, 192) );\r\n    height: 15rem;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    position: relative;\r\n\r\n}\r\n.Upper img{\r\n    width: 50%;\r\n    height: 100%;\r\n    position: absolute;\r\n    /* top: 1rem; */\r\n    left: 0;\r\n    /* margin-top: 0; */\r\n    border-radius: 10px;\r\n    overflow: hidden;\r\n    -webkit-backface-visibility: hidden;\r\n            backface-visibility: hidden;\r\n}\r\n.Upper p \r\n{\r\n    position: absolute;\r\n    top: 1.4rem;\r\n    right: 0;\r\n    font-size: 1.4rem;\r\n    width: 45%;\r\n    max-height: 75%;\r\n    margin: 3rem 0 1rem;\r\n    -ms-flex-item-align: center;\r\n    align-self: center;\r\n    padding-right: 2rem;\r\n    color: rgb(68, 43, 1);\r\n    line-height: 2.3rem;\r\n}\r\n.Upper p span{\r\n    font-size: 2.6rem;\r\n    font-weight: 900;\r\n}\r\n.Auth {\r\n\r\n    text-align: center;\r\n    -webkit-box-shadow: 0 2px 3px #ccc;\r\n            box-shadow: 0 2px 3px #ccc;\r\n    border: 1px solid #eee;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    width: 45rem;\r\n    max-height: 60rem;\r\n    margin: 5rem auto 0;\r\n    background-color: whitesmoke;\r\n\r\n}\r\n\r\n@media (max-width: 520px) {\r\n    .Auth{\r\n        width: auto;\r\n    }\r\n    .Upper p \r\n    {\r\n        position: absolute;\r\n        top: 1rem;\r\n        right: 0;\r\n        font-size: 1rem;\r\n        width: 45%;\r\n        max-height: 75%;\r\n        /* margin: 3rem 0 1rem; */\r\n        -ms-flex-item-align: center;\r\n        align-self: center;\r\n        padding-right: .7rem;\r\n        color: rgb(99, 61, 5);\r\n        line-height: 1.7rem;\r\n    }\r\n    .Upper p span{\r\n        font-size: 2rem;\r\n        font-weight: 900;\r\n    }\r\n}\r\n\r\n\r\n.Heading{\r\n    font-size: 3.1rem;\r\n    text-transform: uppercase;\r\n    font-weight: 900;\r\n    letter-spacing: 1px;\r\n    background-image: -webkit-gradient(linear, right top, left top, from(#f5cd78), to(#4e3706));\r\n    background-image: -webkit-linear-gradient(right, #f5cd78, #4e3706);\r\n    background-image: -o-linear-gradient(right, #f5cd78, #4e3706);\r\n    background-image: linear-gradient(to left, #f5cd78, #4e3706);\r\n    display: inline-block;\r\n    -webkit-background-clip: text;\r\n    color: transparent;\r\n    -webkit-transition: all .2s;\r\n    -o-transition: all .2s;\r\n    transition: all .2s;\r\n    margin-bottom: 1.5rem;\r\n    margin-top: 1.5rem;\r\n}\r\n.Heading:hover{\r\n    -webkit-transform: skewX(15deg) skewY(-2deg)  scale(1.1);\r\n        -ms-transform: skewX(15deg) skewY(-2deg)  scale(1.1);\r\n            transform: skewX(15deg) skewY(-2deg)  scale(1.1);\r\n    text-shadow: .5rem 1rem 2rem rgba(#4e3706, 0.8);\r\n}\r\n\r\n.Error{\r\n    color: rgb(177, 30, 30);\r\n    text-transform: capitalize !important;\r\n    font-size: 1.8rem;\r\n    font-weight: 700;\r\n    font-style: italic;\r\n}\r\n\r\n.Auth > button{\r\n    border: none;\r\n    width: 20rem;\r\n}"],sourceRoot:""}]),n.locals={full:"Auth__full__3bhbE",bgvideo:"Auth__bgvideo__AgklJ",bgvideo__content:"Auth__bgvideo__content__3xXX_",Upper:"Auth__Upper__2QrQM",Auth:"Auth__Auth__1TInt",Heading:"Auth__Heading__1HV5l",Error:"Auth__Error__25GIB"}},218:function(e,n,t){e.exports=t.p+"static/media/login.6cdd9858.jpg"},219:function(e,n,t){e.exports=t.p+"static/media/ywllow.9bd981ff.mp4"}});
//# sourceMappingURL=1.401c868d.chunk.js.map