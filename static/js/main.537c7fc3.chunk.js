(this.webpackJsonpvipstickers=this.webpackJsonpvipstickers||[]).push([[0],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(0),r=n.n(a),o=n(2),c=n(55),i=n.n(c),l=function(e){var t=e.phoneNumber,n=e.onChangePhoneNumber,a=e.editStatus,c=e.editPhoneNumber;return r.a.createElement(o.h,{style:{margin:10}},r.a.createElement(o.m,null,r.a.createElement(o.e,null,r.a.createElement(o.h,{style:{marginBottom:5,marginTop:5}},r.a.createElement(o.h,{style:{marginBottom:5,marginTop:5}},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 QIWI \u041a\u043e\u0448\u0435\u043b\u044c\u043a\u0430"),r.a.createElement(o.h,{style:{display:"flex",alignItems:"center",flexDirection:"row"}},r.a.createElement(o.h,{style:{flexGrow:10}},r.a.createElement(o.o,{value:t,onChange:function(e){return n(e)},type:"text",disabled:!a})),r.a.createElement(o.h,{style:{flexGrow:.5,marginLeft:25}},r.a.createElement(i.a,{fill:"green",onClick:function(){return c("edit")}})))),r.a.createElement(o.h,{style:{marginBottom:5,marginTop:10}},r.a.createElement(o.m,{separator:"show"},r.a.createElement(o.d,{style:{backgroundColor:"green",color:"white"},onClick:function(){return c("save")},mode:"commerce",size:"xl",stretched:!0},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c")),r.a.createElement(o.m,null,r.a.createElement(o.h,{style:{marginTop:10,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",whiteSpace:"pre-wrap"}},"\u041d\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0432\u0430\u043c\u0438 \u043d\u043e\u043c\u0435\u0440, \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u0438\u0445\u043e\u0434\u0438\u0442\u044c \u0432\u044b\u043f\u043b\u0430\u0442\u044b."))))))}},117:function(e,t){},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(7),r=n(0),o=n.n(r),c=n(2),i=(n(55),n(25)),l=n(23).a.callMethod,s=function(e){e.onChangeAction;var t=e.openModalWithdrawMoney,n=e.formatDate,s=Object(r.useState)(""),m=Object(a.a)(s,2),u=m[0],d=m[1],g=Object(r.useState)(0),p=Object(a.a)(g,2),f=p[0],h=p[1],E=Object(r.useState)(0),b=Object(a.a)(E,2),y=b[0],k=b[1],v=Object(r.useState)([]),w=Object(a.a)(v,2),S=w[0],j=w[1],C=Object(r.useState)(0),O=Object(a.a)(C,2),T=O[0],x=O[1],A=Object(r.useState)(0),I=Object(a.a)(A,2);I[0],I[1];function N(){l("getStatsForGroup").then((function(e){var t=e.message;console.log("getStatsForGroup",t),console.log("message.groupName",t.groupName),d(t.groupName),h(t.amountToday),k(t.amountAllTime),j(t.donations),x(t.groupBalance)}))}Object(r.useEffect)((function(){N()}),[]);var D=S.map((function(e,t){var a="https://vk.com/id"+e.userId;return o.a.createElement(i.b,{key:t,id:t+1,senderUrl:a,amount:e.amount,senderPhoto:e.userPhotoURL,createdAt:e.createdAt,formatDate:n})}));return o.a.createElement(o.a.Fragment,null,D.length?o.a.createElement(c.h,{style:{margin:10}},o.a.createElement(c.e,null,o.a.createElement(c.h,null,o.a.createElement(c.m,{separator:"show"},o.a.createElement(c.h,{style:{marginBottom:5,marginTop:5,marginLeft:15}},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043f\u043e \u0433\u0440\u0443\u043f\u043f\u0435:"),o.a.createElement(c.h,{style:{marginBottom:5,marginTop:5,marginLeft:15}},u)),o.a.createElement(c.m,{separator:"show"},o.a.createElement(c.h,{style:{marginBottom:5,marginTop:5,marginLeft:15}},"\u0411\u0430\u043b\u0430\u043d\u0441: ",T," \u0440\u0443\u0431")),o.a.createElement(c.m,{separator:"show"},o.a.createElement(c.h,{style:{marginBottom:5,marginTop:5,marginLeft:15}},"\u041f\u0440\u0438\u0431\u044b\u043b\u044c"),o.a.createElement(c.h,{style:{marginBottom:5,marginTop:5,marginLeft:15}},"\u0417\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f: ",f," \u0440\u0443\u0431"),o.a.createElement(c.h,{style:{marginBottom:5,marginTop:5,marginLeft:15}},"\u0417\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043c\u044f: ",y," \u0440\u0443\u0431"),o.a.createElement(c.h,{style:{display:"flex",alignItems:"center",justifyContent:"start",flexDirection:"row"}},o.a.createElement(c.d,{size:"m",onClick:N,style:{marginBottom:5,marginTop:5,marginLeft:15,backgroundColor:"green",color:"white",borderRadius:"6px",width:"160px"}},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"),o.a.createElement(c.d,{size:"m",onClick:t,style:{marginBottom:5,marginTop:5,marginLeft:15,backgroundColor:"#3F8AE0",color:"white",borderRadius:"6px",width:"160px"}},"\u0412\u044b\u0432\u0435\u0441\u0442\u0438"))),D.length?D:o.a.createElement(c.h,{style:{whiteSpace:"pre-wrap",marginLeft:15,marginTop:5}},"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043a\u0443\u043f\u043e\u043a \u0438\u0437 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f")))):o.a.createElement("div",{className:"spinner"},o.a.createElement(c.y,{size:"large",style:{marginTop:90}})))}},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(7),r=n(0),o=n.n(r),c=n(2),i=(n(55),n(25)),l=n(23).a.callMethod,s=function(e){var t=e.go,n=e.getIdGroup,s=e.formatDate,m=Object(r.useState)([]),u=Object(a.a)(m,2),d=(u[0],u[1],Object(r.useState)(0)),g=Object(a.a)(d,2),p=g[0],f=g[1],h=Object(r.useState)(0),E=Object(a.a)(h,2),b=E[0],y=E[1],k=Object(r.useState)([]),v=Object(a.a)(k,2),w=v[0],S=v[1];function j(){l("getStatsForGroups").then((function(e){var t=e.message;f(t.amountToday),y(t.amountAllTime),S(t.groups)}))}Object(r.useEffect)((function(){j()}),[]);var C=w.map((function(e,a){var r="https://vk.com/club"+e.groupId;return o.a.createElement(i.a,{key:a,id:a+1,go:t,groupUrl:r,groupId:e.groupId,profitToday:e.amountToday,profitAllTime:e.amountAllTime,name:e.groupName,photo:e.groupPhotoURL,formatDate:s,donations:e.donations,getIdGroup:n})}));return o.a.createElement(o.a.Fragment,null,C.length?o.a.createElement(c.h,{style:{margin:10}},o.a.createElement(c.e,null,o.a.createElement(c.h,null,o.a.createElement(c.m,{separator:"show"},o.a.createElement(c.h,{style:{marginBottom:5,marginTop:5,marginLeft:15}},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043f\u043e \u0432\u0441\u0435\u043c \u0433\u0440\u0443\u043f\u043f\u0430\u043c:")),o.a.createElement(c.m,{separator:"show"},o.a.createElement(c.h,{style:{marginBottom:5,marginTop:5,marginLeft:15}},"\u041f\u0440\u0438\u0431\u044b\u043b\u044c"),o.a.createElement(c.h,{style:{marginBottom:5,marginTop:5,marginLeft:15}},"\u0417\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f: ",p," \u0440\u0443\u0431"),o.a.createElement(c.h,{style:{marginBottom:5,marginTop:5,marginLeft:15}},"\u0417\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043c\u044f: ",b," \u0440\u0443\u0431"),o.a.createElement(c.d,{size:"m",onClick:j,style:{marginBottom:5,marginTop:5,marginLeft:15,backgroundColor:"green",color:"white",borderRadius:"6px",width:"160px"}},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435")),o.a.createElement(c.h,null,C)))):o.a.createElement("div",{className:"spinner"},o.a.createElement(c.y,{size:"large",style:{marginTop:90}})))}},134:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(0),r=n.n(a),o=function(e){var t=e.icon;return r.a.createElement("img",{src:t,width:90,height:90,style:{marginTop:10,marginRight:20,marginBottom:10}})}},197:function(e,t,n){e.exports=n(341)},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(80),r=n.n(a),o=n(149),c=n(150),i=n(151),l=n(76),s=n.n(l),m=function(){function e(){Object(c.a)(this,e),this.socket=null}return Object(i.a)(e,null,[{key:"createConnection",value:function(){return e.socket&&e.socket.close(),e.socket=s()("https://one-digitalspace.ru",{path:"/stickers/socket",query:document.location.search.slice(1),reconnectionAttempts:1,transports:["websocket"]}),e.socket}},{key:"callMethod",value:function(){var t=Object(o.a)(r.a.mark((function t(n){var a,o,c=arguments;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=c.length>1&&void 0!==c[1]?c[1]:{},o=e.socket){t.next=4;break}return t.abrupt("return",Promise.resolve({status:"denied",message:"\u0421\u043e\u043a\u0435\u0442 \u043d\u0435 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d"}));case 4:return t.abrupt("return",new Promise((function(e){o.emit(n,a,(function(t){return e(t)}))})));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),e}(),u=[{id:7,price:99,className:"iconSliderNaruto"},{id:6,price:39,className:"iconSliderSimpsons"},{id:4,price:39,className:"iconSliderJoker"},{id:3,price:39,className:"iconSliderOno"},{id:2,price:39,className:"iconSliderMatrix"}]},25:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"e",(function(){return g}));var a=n(0),r=n.n(a),o=n(2),c=function(e){var t=e.id,n=e.price,a=e.openModalStickers,c=e.className;return r.a.createElement(o.h,{id:t,onClick:function(){return a(n,t)},className:c})},i=n(33),l=function(e){var t=e.id,n=e.name,a=e.price,c=e.icon,l=e.authorId,s=e.authorName,m=(e.description,e.amount,e.openModalStickers),u=(e.openPaymentSystem,e.qiwiPay);e.fetchedUser;return r.a.createElement(o.w,{before:r.a.createElement(o.h,{id:t,onClick:function(){return m(a,t)}},r.a.createElement(i.StickerPackIcon,{icon:c})),description:r.a.createElement(r.a.Fragment,null,r.a.createElement(o.h,{style:{display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"start",marginTop:5,marginBottom:5,padding:0}},r.a.createElement(o.p,{href:"https://vk.com/id".concat(l),target:"_blank"},s)),r.a.createElement(o.d,{size:"m",onClick:function(){return u(a,t)},style:{backgroundColor:"green",color:"white",borderRadius:"6px",width:"120px"}},"\u041a\u0443\u043f\u0438\u0442\u044c \u0437\u0430 ",a," \u20bd"))},n)},s=(n(340),n(77)),m=n.n(s),u=(n(23),function(e){var t=e.senderUrl,n=e.amount,a=(e.senderName,e.senderPhoto),c=e.createdAt,i=e.formatDate;return r.a.createElement(o.e,{before:a?r.a.createElement(o.p,{href:t,target:"_blank"},r.a.createElement(o.c,{src:a})):r.a.createElement(o.c,{src:"https://vk.com/images/camera_200.png"}),description:r.a.createElement(o.h,{style:{marginLeft:20}},r.a.createElement(o.h,{style:{color:"green"}},"+ ",n," \u0440\u0443\u0431")),asideContent:r.a.createElement(o.h,{style:{marginTop:"-16px",display:"flex",justifyContent:"end",flexDirection:"row",alignItems:"end",fontSize:"10px"}},i(c))},r.a.createElement(o.h,{style:{marginBottom:"5px",paddingLeft:"15px",display:"flex",justifyContent:"start",flexDirection:"row",alignItems:"center",fontSize:"16px"}},r.a.createElement(o.h,null,r.a.createElement(m.a,{fill:"green"})),r.a.createElement(o.h,{style:{marginTop:4,marginLeft:4}},"\u041f\u043e\u043a\u0443\u043f\u043a\u0430")))}),d=(n(45),function(e){var t=e.groupUrl,n=e.groupId,a=e.profitToday,c=e.profitAllTime,i=e.name,l=e.photo,s=(e.go,e.getIdGroup);return r.a.createElement(o.e,{before:t?r.a.createElement(o.p,{href:t,target:"_blank"},r.a.createElement(o.c,{src:l})):r.a.createElement(o.c,{src:"https://vk.com/images/camera_200.png"}),description:r.a.createElement(r.a.Fragment,null,r.a.createElement(o.h,{style:{display:"flex",alignItems:"start",flexDirection:"column",justifyContent:"center",marginTop:5,marginBottom:5,marginLeft:18,padding:0}},r.a.createElement(o.h,{style:{marginBottom:8}},"\u0417\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f: ",a," \u0440\u0443\u0431"),r.a.createElement(o.h,{style:{marginBottom:8}},"\u0417\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043c\u044f: ",c," \u0440\u0443\u0431")),r.a.createElement(o.h,{style:{marginLeft:18}},r.a.createElement(o.d,{id:n,size:"m",onClick:function(){return s(n)},stretched:!0,style:{backgroundColor:"green",color:"white",borderRadius:"6px"}},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430")))},r.a.createElement(o.h,{style:{marginTop:4,marginLeft:20}},i))}),g=function(e){var t=e.renderDataStickersAll;return r.a.createElement(o.h,null,t.length?r.a.createElement(o.h,{style:{paddingLeft:10,paddingRight:10}},t):r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},r.a.createElement(o.y,{size:"large",style:{marginTop:20}})))}},287:function(e,t,n){},288:function(e,t,n){},289:function(e,t,n){},290:function(e,t,n){},33:function(e,t,n){"use strict";var a=n(116);n.d(t,"Form",(function(){return a.a}));var r=n(117);n.o(r,"Statistics")&&n.d(t,"Statistics",(function(){return r.Statistics})),n.o(r,"StatisticsGroups")&&n.d(t,"StatisticsGroups",(function(){return r.StatisticsGroups})),n.o(r,"StickerPackIcon")&&n.d(t,"StickerPackIcon",(function(){return r.StickerPackIcon}));var o=n(118);n.d(t,"Statistics",(function(){return o.a}));var c=n(133);n.d(t,"StatisticsGroups",(function(){return c.a}));var i=n(134);n.d(t,"StickerPackIcon",(function(){return i.a}))},337:function(e,t){},341:function(e,t,n){"use strict";n.r(t);n(198),n(224),n(226),n(227),n(229),n(230),n(231),n(232),n(233),n(234),n(235),n(236),n(238),n(239),n(240),n(241),n(242),n(243),n(244),n(245),n(246),n(247),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266);var a=n(0),r=n.n(a),o=n(135),c=n.n(o),i=n(24),l=n.n(i),s=n(7),m=n(2),u=(n(285),n(78)),d=n.n(u),g=(n(286),n(79)),p=n.n(g),f=n(44),h=n.n(f),E=n(148),b=n.n(E),y=(n(287),n(288),n(289),n(290),n(45)),k=n(23),v=k.a.callMethod,w=k.a.createConnection(),S=function(){var e=Object(a.useState)(!0),t=Object(s.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(!1),i=Object(s.a)(c,2),u=i[0],g=i[1],f=Object(a.useState)(!1),E=Object(s.a)(f,2),k=E[0],S=E[1],j=Object(a.useState)("shop"),C=Object(s.a)(j,2),O=C[0],T=C[1],x=Object(a.useState)(null),A=Object(s.a)(x,2),I=A[0],N=A[1],D=Object(a.useState)(r.a.createElement(m.v,{size:"large"})),P=Object(s.a)(D,2),B=P[0],L=P[1],F=Object(a.useState)(!1),G=Object(s.a)(F,2),M=(G[0],G[1],Object(a.useState)(null)),R=Object(s.a)(M,2),z=R[0],W=R[1],_=Object(a.useState)(null),U=Object(s.a)(_,2),V=U[0],q=U[1],K=Object(a.useState)(!1),Q=Object(s.a)(K,2),X=Q[0],J=Q[1],H=Object(a.useState)(0),Y=Object(s.a)(H,2),Z=(Y[0],Y[1],Object(a.useState)(0)),$=Object(s.a)(Z,2),ee=($[0],$[1],Object(a.useState)([])),te=Object(s.a)(ee,2),ne=te[0],ae=te[1],re=Object(a.useState)(0),oe=Object(s.a)(re,2),ce=oe[0],ie=oe[1];function le(){o(!0),J(!1),w.open()}function se(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"green";z||W(r.a.createElement(m.x,{duration:"7000",layout:"horizontal",onClose:function(){return W(null)},before:r.a.createElement(m.c,{size:24,style:{backgroundColor:t}},"green"===t?r.a.createElement(h.a,{fill:"#fff",width:14,height:14}):r.a.createElement(b.a,{fill:"#fff",width:14,height:14}))},e))}Object(a.useEffect)((function(){l.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var r=document.createAttribute("scheme");r.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(r)}}))}),[]),Object(a.useEffect)((function(){l.a.subscribe((function(e){switch(e.detail.type){case"VKWebAppViewHide":w.close(),o(!0);break;case"VKWebAppViewRestore":w.open(),o(!1)}})),l.a.send("VKWebAppGetUserInfo").then((function(e){N(e),window.userId=e.id,L(null)})),window.addEventListener("popstate",(function(e){return e.preventDefault()&void T("shop")}))}),[]),Object(a.useEffect)((function(){var e=new URLSearchParams(document.location.search);e.has("vk_viewer_group_role")&&"admin"===e.get("vk_viewer_group_role")&&g(!0),[236908027,73606509].includes(+e.get("vk_user_id"))&&(g(!0),S(!0)),w.on("multisession",(function(){J(!0),q(null)})),w.on("disconnect",(function(){o(!1)}))}),[]),Object(a.useEffect)((function(){v("getStatsForGroups").then((function(e){var t=e.message;ae(t.groups)}))}),[]);var me=function(e,t,n){return r.a.createElement(m.h,{className:"divSpinner"},r.a.createElement(m.h,{className:"div"},e),r.a.createElement(m.h,{className:"div"},r.a.createElement(m.f,{onClick:t},n)))};var ue=function(e){T(e.currentTarget.dataset.to),console.log("123")};return r.a.createElement(m.g,{isWebView:!0},r.a.createElement(m.i,{tabbar:r.a.createElement(m.z,null,r.a.createElement(m.A,{onClick:ue,"data-to":"shop",text:"\u0421\u0442\u0438\u043a\u0435\u0440\u044b"},"shop"===O?r.a.createElement(d.a,{fill:"green"}):r.a.createElement(d.a,null)),I&&r.a.createElement(r.a.Fragment,null,u?r.a.createElement(m.A,{onClick:function(){return T("profile")},"data-to":"profile",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},"profile"===O?r.a.createElement(p.a,{fill:"green"}):r.a.createElement(p.a,null)):""))},r.a.createElement(m.D,{activePanel:O,popout:B,modal:V},r.a.createElement(y.c,{id:"shop",fetchedUser:I,go:ue,stub:me,openAlert:se,snackbar:z,setActiveModal:q,openPaymentSystem:function(e,t){q(null),L(r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{onClose:function(){return L(null)}},r.a.createElement(m.b,{autoclose:!0,onClick:function(){return function(e,t){l.a.sendPromise("VKWebAppOpenPayForm",{app_id:7448001,action:"pay-to-group",params:{amount:+t,group_id:194979339}}).catch((function(e){console.log(e)}))}(0,t)}},"\u041e\u043f\u043b\u0430\u0442\u0438\u0442\u044c \u0447\u0435\u0440\u0435\u0437 VK Pay"))))},qiwiPay:function(e,t){l.a.sendPromise("VKWebAppAllowMessagesFromGroup",{group_id:194979339}).then((function(n){window.QiwiCheckout.createInvoice({publicKey:"48e7qUxn9T7RyYE1MVZswX1FRSbE6iyCj2gCRwwF3Dnh5XrasNTx3BGPiMsyXQFNKQhvukniQG8RTVhYm3iP6eNeguoXyC99Aq22J8SZPKNgc2WqKx64qaPHePwqThccSrj3HPYcWtCAAb4y8zT5JD6kUUSyJK1sVaG2XrP9hXNzXzo5zVD2iWC9o81QD",amount:e,comment:"stickers ".concat(window.userId," ").concat(t)}).then((function(e){console.log("qiwi",e)})).catch((function(e){console.log("QIWI ERROR:",e)}))})).catch((function(e){q(null),se("\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u0435 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u041b\u0421, \u0442\u0443\u0434\u0430 \u043c\u044b \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u043c \u0441\u0442\u0438\u043a\u0435\u0440\u044b \u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u043a\u0443\u043f\u043a\u0438","red")}))},connectTwoDevices:X,socketReconnect:le,AddToCommunity:function(e){l.a.send("VKWebAppAddToCommunity",{}).then((function(e){console.log(" AddToCommunity res",e)})).catch((function(e){console.log(" AddToCommunity err",e)}))},isConnected:n}),r.a.createElement(y.b,{id:"profile",go:ue,fetchedUser:I,openAlert:se,snackbar:z,connectTwoDevices:X,socketReconnect:le,isSuperAdmin:k,setActiveModal:q,isConnected:n,stub:me,getIdGroup:function(e){ie(e),T("group-info-statistic")},formatDate:function(e){var t=(e=new Date(1e3*e)).getDate();t<10&&(t="0"+t);var n=e.getMonth()+1;n<10&&(n="0"+n);var a=e.getFullYear()%100;a<10&&(a="0"+a);var r=e.getHours();r<10&&(r="0"+r);var o=e.getMinutes();return o<10&&(o="0"+o),"".concat(t,".").concat(n,".").concat(a," ").concat(r,":").concat(o)}}),r.a.createElement(y.a,{id:"group-info-statistic",go:ue,openAlert:se,snackbar:z,connectTwoDevices:X,socketReconnect:le,stub:me,targetGroup:ce,groups:ne}))))};l.a.send("VKWebAppInit"),c.a.render(r.a.createElement(S,null),document.getElementById("root"))},45:function(e,t,n){"use strict";n.d(t,"c",(function(){return g})),n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return E}));var a=n(7),r=n(0),o=n.n(r),c=(n(69),n(2)),i=n(25),l=n(23),s=n(33),m=function(e){e.targetId;var t=e.setActiveModal,n=e.id,a=e.name,r=e.price,i=e.icon,l=e.author,m=e.description,u=e.stickersCount,d=e.qiwiPay;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.r,{activeModal:"modal"},o.a.createElement(c.q,{id:"modal",onClose:function(){return t(null)},header:"\u041d\u0430\u0431\u043e\u0440 \u0441\u0442\u0438\u043a\u0435\u0440\u043e\u0432",caption:o.a.createElement(o.a.Fragment,null,o.a.createElement(c.w,{before:o.a.createElement(s.StickerPackIcon,{icon:i}),description:o.a.createElement(c.h,{style:{display:"flex",alignItems:"start",flexDirection:"column",justifyContent:"center"}},o.a.createElement(c.p,{style:{marginBottom:10},href:"https://vk.com/kirill_1131",target:"_blank"},l))},o.a.createElement(c.h,{style:{display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"start",marginTop:5,marginBottom:5,padding:0}},a)),o.a.createElement(c.h,{style:{display:"flex",alignItems:"start",justifyContent:"start",flexDirection:"column"}},o.a.createElement(c.h,null," ",m),o.a.createElement(c.h,{style:{marginBottom:10}},"\u041a\u043e\u043b-\u0432\u043e \u0441\u0442\u0438\u043a\u0435\u0440\u043e\u0432 \u0432 \u043f\u0430\u043a\u0435: ",u)),o.a.createElement(c.d,{style:{backgroundColor:"green",color:"white"},onClick:function(){return d(r,n)},mode:"commerce",size:"xl",stretched:!0},"\u041a\u0443\u043f\u0438\u0442\u044c"))})),") )}")},u=function(e){var t=e.setActiveModal,n=e.onChangeAction,a=e.withdrawal;return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.r,{activeModal:"withdraw-money"},o.a.createElement(c.q,{id:"withdraw-money",onClose:function(){return t(null)},header:"\u0412\u044b\u0432\u043e\u0434 \u0441\u0440\u0435\u0434\u0441\u0442\u0432",caption:o.a.createElement(o.a.Fragment,null,o.a.createElement(c.k,null,o.a.createElement(c.o,{top:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0441\u0443\u043c\u043c\u0443 \u0434\u043b\u044f \u0432\u044b\u0432\u043e\u0434\u0430",placeholder:"50",onChange:function(e){return n(e,"withdrawalAmount")},type:"text"}))),actions:[{title:"\u0412\u044b\u0432\u0435\u0441\u0442\u0438",mode:"commerce",action:function(){a()}}]})),") )}")},d=l.a.callMethod,g=function(e){var t=e.id,n=e.stub,s=e.snackbar,u=e.setActiveModal,g=(e.openPaymentSystem,e.qiwiPay),p=e.connectTwoDevices,f=e.socketReconnect,h=e.AddToCommunity,E=e.isConnected,b=Object(r.useState)("all-stickers"),y=Object(a.a)(b,2),k=y[0],v=y[1],w=Object(r.useState)(1),S=Object(a.a)(w,2),j=S[0],C=S[1],O=Object(r.useState)([]),T=Object(a.a)(O,2),x=T[0],A=T[1];function I(e,t){var n=x.find((function(e){return e.id===+t})),a=n.name,r=n.author,c=n.description,i=n.tags,l=n.icon,s=n.stickersCount;console.log("openModalStickers price",e),console.log("openModalStickers id",t),u(o.a.createElement(m,{id:t,name:a,price:e,icon:l,author:r,description:c,tags:i,stickersCount:s,setActiveModal:u,qiwiPay:g}))}function N(e){v(e),window.scrollTo(0,0),D("all-stickers"===e?[]:[e])}function D(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return d("getStickerPacks",{tags:e}).then((function(e){var t=e.message;A(t),console.log("getAllStickers message",t),console.log("getAllStickers dataStickers",x)}))}Object(r.useEffect)((function(){D()}),[]);var P=x.map((function(e,t){return o.a.createElement(i.d,{key:t,id:e.id,name:e.name,authorId:e.authorId,authorName:e.authorName,description:e.description,price:e.price,icon:e.icon,amount:e.amount,openModalStickers:I,qiwiPay:g})})),B=l.b.map((function(e,t){return o.a.createElement(i.c,{key:t,id:e.id,price:e.price,className:e.className,openModalStickers:I})}));return o.a.createElement(c.s,{id:t,separator:!1},p?n("\u0412\u044b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u043b\u0438\u0441\u044c \u0441 2 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 ",f,"\u041f\u0435\u0440\u0435\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f"):o.a.createElement(o.a.Fragment,null,E?o.a.createElement(o.a.Fragment,null,o.a.createElement(c.u,{left:o.a.createElement(c.h,{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row"}},o.a.createElement(c.h,{onClick:h,style:{backgroundColor:"green",borderRadius:"9px",marginLeft:"10px",fontSize:"14px",height:"28px",width:"140px",color:"white",display:"flex",alignItems:"center",justifyContent:"center",userSelect:"none"}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0433\u0440\u0443\u043f\u043f\u0443"),o.a.createElement(c.d,{style:{backgroundColor:"#3F8AE0",borderRadius:"9px",marginLeft:"10px",width:"80px",height:"28px"},mode:"primary",size:"m",href:"https://vk.me/kirill_1131",target:"_blank"},"\u0410\u0432\u0442\u043e\u0440\u0430\u043c"))}),o.a.createElement(o.a.Fragment,null,P.length?o.a.createElement(o.a.Fragment,null,o.a.createElement(c.l,{timeout:"2000",slideIndex:j,onChange:function(e){return C(e)},slideWidth:"360px",align:"center",style:{height:"190px",marginTop:"10px"}},B),o.a.createElement(c.n,null,o.a.createElement(c.h,{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexDirection:"row",margin:10,userSelect:"none"}},o.a.createElement(c.h,{onClick:function(){return N("all-stickers")},className:"all-stickers"===k?"tabGreen":"tabWhite"},"\u0412\u0441\u0435"),o.a.createElement(c.h,{onClick:function(){return N("anime")},className:"anime"===k?"tabGreen":"tabWhite"},"\u0410\u043d\u0438\u043c\u0435"),o.a.createElement(c.h,{onClick:function(){return N("cartoons")},className:"cartoons"===k?"tabGreen":"tabWhite"},"\u041c\u0443\u043b\u044c\u0442\u0438\u043a\u0438"),o.a.createElement(c.h,{onClick:function(){return N("films")},className:"films"===k?"tabGreen":"tabWhite"},"\u0424\u0438\u043b\u044c\u043c\u044b"),o.a.createElement(c.h,{onClick:function(){return N("tv-series")},className:"tv-series"===k?"tabGreen":"tabWhite"},"\u0421\u0435\u0440\u0438\u0430\u043b\u044b"))),o.a.createElement(o.a.Fragment,null,"all-stickers"===k?o.a.createElement(o.a.Fragment,null,P.length?o.a.createElement(c.h,{style:{paddingLeft:10,paddingRight:10}},P):o.a.createElement("div",{className:"spinner"},o.a.createElement(c.y,{size:"large",style:{marginTop:20}}))):"","anime"===k?o.a.createElement(i.e,{renderDataStickersAll:P}):"","cartoons"===k?o.a.createElement(i.e,{renderDataStickersAll:P}):"","films"===k?o.a.createElement(i.e,{renderDataStickersAll:P}):"","tv-series"===k?o.a.createElement(i.e,{renderDataStickersAll:P}):"",s)):o.a.createElement("div",{className:"spinner"},o.a.createElement(c.y,{size:"large",style:{marginTop:20}})))):n("\u041f\u0440\u043e\u0432\u043e\u0434\u044f\u0442\u0441\u044f \u0442\u0435\u0445. \u0440\u0430\u0431\u043e\u0442\u044b",f,"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c")))},p=l.a.callMethod,f=function(e){var t=e.id,n=e.go,i=(e.networkStatus,e.stub),l=e.snackbar,m=e.openAlert,d=e.connectTwoDevices,g=e.socketReconnect,f=e.isSuperAdmin,h=e.setActiveModal,E=e.isConnected,b=e.getIdGroup,y=e.formatDate,k=0,v=Object(r.useState)("home"),w=Object(a.a)(v,2),S=w[0],j=w[1],C=Object(r.useState)("+7"),O=Object(a.a)(C,2),T=O[0],x=O[1],A=Object(r.useState)(!1),I=Object(a.a)(A,2),N=I[0],D=I[1];function P(e){switch(e){case"home":case"statistics":case"statistics-groups":j(e),window.scrollTo(0,0)}}function B(e,t){var n=+e.target.value.trim();switch(t){case"withdrawalAmount":console.log(n),k=n}}function L(){p("withdrawal",{amount:k}).then((function(e){var t=e.message,n=e.status;h(null),m(t,"denied"===n?"red":"green")}))}Object(r.useEffect)((function(){p("getQiwiAccount").then((function(e){var t=e.status,n=e.message;"success"===t?x(n):m(n,"red")}))}),[]);return o.a.createElement(c.s,{id:t,separator:!1},o.a.createElement(c.u,null,"VIP \u0421\u0442\u0438\u043a\u0435\u0440\u044b"),d?i("\u0412\u044b \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u043b\u0438\u0441\u044c \u0441 2 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 ",g,"\u041f\u0435\u0440\u0435\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u044c\u0441\u044f"):o.a.createElement(o.a.Fragment,null,E?o.a.createElement(o.a.Fragment,null,o.a.createElement(c.j,{vertical:"top",filled:!0},o.a.createElement(c.B,null,o.a.createElement(c.C,{onClick:function(){return P("home")},selected:"home"===S},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),o.a.createElement(c.C,{onClick:function(){return P("statistics")},selected:"statistics"===S},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430"),f?o.a.createElement(c.C,{onClick:function(){return P("statistics-groups")},selected:"statistics-groups"===S},"\u0412\u0441\u0435 \u0433\u0440\u0443\u043f\u043f\u044b"):"")),o.a.createElement(o.a.Fragment,null,"home"===S?o.a.createElement(c.h,{style:{marginTop:55}},o.a.createElement(s.Form,{phoneNumber:T,onChangePhoneNumber:function(e){var t=e.target.value.trim();x(t),console.log("phoneNumber",T)},editStatus:N,editPhoneNumber:function(e){switch(e){case"edit":D(!0);break;case"save":D(!1),p("changeQiwiAccount",{qiwiAccount:T}).then((function(e){var t=e.message,n=e.status;m(t,"denied"===n?"red":"green")}))}}})):"","statistics"===S?o.a.createElement(c.h,{style:{marginTop:55}},o.a.createElement(s.Statistics,{onChangeAction:B,openModalWithdrawMoney:function(){h(o.a.createElement(u,{onChangeAction:B,setActiveModal:h,withdrawal:L}))},formatDate:y})):"","statistics-groups"===S?o.a.createElement(c.h,{style:{marginTop:55}},o.a.createElement(s.StatisticsGroups,{go:n,getIdGroup:b,formatDate:y})):""),l):i("\u041f\u0440\u043e\u0432\u043e\u0434\u044f\u0442\u0441\u044f \u0442\u0435\u0445. \u0440\u0430\u0431\u043e\u0442\u044b",g,"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c")))},h=l.a.callMethod,E=function(e){var t=e.id,n=e.go,l=(e.stub,e.snackbar,e.openAlert,e.connectTwoDevices,e.socketReconnect,e.targetGroup),s=e.groups,m=Object(r.useState)(""),u=Object(a.a)(m,2),d=u[0],g=u[1],p=Object(r.useState)(0),f=Object(a.a)(p,2),E=f[0],b=f[1],y=Object(r.useState)(0),k=Object(a.a)(y,2),v=k[0],w=k[1],S=Object(r.useState)([]),j=Object(a.a)(S,2),C=j[0],O=j[1],T=Object(r.useState)(0),x=Object(a.a)(T,2),A=x[0],I=x[1],N=Object(r.useState)(0),D=Object(a.a)(N,2),P=(D[0],D[1],{});function B(e){var t=(e=new Date(1e3*e)).getDate();t<10&&(t="0"+t);var n=e.getMonth()+1;n<10&&(n="0"+n);var a=e.getFullYear()%100;a<10&&(a="0"+a);var r=e.getHours();r<10&&(r="0"+r);var o=e.getMinutes();return o<10&&(o="0"+o),t+"."+n+"."+a+" "+r+":"+o}Object(r.useEffect)((function(){var e=s.find((function(e){return e.groupId===l}));P=e,console.log("GroupInfoStatistic infoGroup",P),console.log("GroupInfoStatistic infoGroup",P.donations),O(P.donations),g(P.groupName),b(P.amountToday),w(P.amountAllTime),O(P.donations),I(P.groupBalance)}),[]);var L=C.map((function(e,t){var n="https://vk.com/id"+e.userId;return o.a.createElement(i.b,{key:t,id:t+1,senderUrl:n,amount:e.amount,senderPhoto:e.userPhotoURL,createdAt:e.createdAt,formatDate:B})}));return o.a.createElement(c.s,{id:t,separator:!1},o.a.createElement(c.u,{left:o.a.createElement(c.t,{onClick:n,"data-to":"profile"})},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043f\u043e \u0433\u0440\u0443\u043f\u043f\u0435"),o.a.createElement(o.a.Fragment,null,o.a.createElement(c.h,{style:{margin:10}},o.a.createElement(c.e,null,o.a.createElement(c.h,null,o.a.createElement(c.m,{separator:"show"},o.a.createElement(c.h,{style:{marginBottom:5,marginTop:5,marginLeft:15}},"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043f\u043e \u0433\u0440\u0443\u043f\u043f\u0435:"),o.a.createElement(c.h,{style:{marginBottom:5,marginTop:5,marginLeft:15}},d)),o.a.createElement(c.m,{separator:"show"},o.a.createElement(c.h,{style:{marginBottom:5,marginTop:5,marginLeft:15}},"\u0411\u0430\u043b\u0430\u043d\u0441: ",A," \u0440\u0443\u0431")),o.a.createElement(c.m,{separator:"show"},o.a.createElement(c.h,{style:{marginBottom:5,marginTop:5,marginLeft:15}},"\u041f\u0440\u0438\u0431\u044b\u043b\u044c"),o.a.createElement(c.h,{style:{marginBottom:5,marginTop:5,marginLeft:15}},"\u0417\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f: ",E," \u0440\u0443\u0431"),o.a.createElement(c.h,{style:{marginBottom:5,marginTop:5,marginLeft:15}},"\u0417\u0430 \u0432\u0441\u0435 \u0432\u0440\u0435\u043c\u044f: ",v," \u0440\u0443\u0431")),o.a.createElement(c.m,{separator:"show"},o.a.createElement(c.h,{style:{display:"flex",alignItems:"center",justifyContent:"start",flexDirection:"row"}},o.a.createElement(c.d,{size:"m",onClick:function(){h("getStatsForGroup").then((function(e){var t=e.message;console.log("getStatsForGroup",t),console.log("message.groupName",t.groupName),g(t.groupName),b(t.amountToday),w(t.amountAllTime),O(t.donations),I(t.groupBalance)}))},style:{marginBottom:5,marginTop:5,marginLeft:15,backgroundColor:"green",color:"white",borderRadius:"6px",width:"160px"}},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435"))),L.length?L:o.a.createElement(c.h,{style:{whiteSpace:"pre-wrap",marginLeft:15,marginTop:5}},"\u0417\u0434\u0435\u0441\u044c \u0431\u0443\u0434\u0435\u0442 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043e\u043a\u0443\u043f\u043e\u043a \u0438\u0437 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"))))))}}},[[197,1,2]]]);
//# sourceMappingURL=main.537c7fc3.chunk.js.map