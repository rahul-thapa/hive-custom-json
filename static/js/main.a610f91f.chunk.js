(this.webpackJsonpv1=this.webpackJsonpv1||[]).push([[0],{22:function(e,t,s){},23:function(e,t,s){},28:function(e,t,s){"use strict";s.r(t);var n=s(5),r=s(0),a=s.n(r),o=s(11),i=s.n(o),c=(s(22),s.p,s(23),s(15)),u=s(12),h=s(13),d=s(16),p=s(14),m=s(30),l=s(32),v=s(31),y=s(33),f={current_id:1,requests:{},handshake_callback:null,requestHandshake:function(e){this.handshake_callback=e,this.dispatchCustomEvent("swHandshake_hive","")},requestVerifyKey:function(e,t,s,n,r){var a={type:"decode",username:e,message:t,method:s,rpc:r};this.dispatchCustomEvent("swRequest_hive",a,n)},requestSignBuffer:function(e,t,s,n,r){var a={type:"signBuffer",username:e,message:t,method:s,rpc:r};this.dispatchCustomEvent("swRequest_hive",a,n)},requestAddAccountAuthority:function(e,t,s,n,r,a){var o={type:"addAccountAuthority",username:e,authorizedUsername:t,role:s,weight:n,method:"Active",rpc:a};this.dispatchCustomEvent("swRequest_hive",o,r)},requestRemoveAccountAuthority:function(e,t,s,n,r){var a={type:"removeAccountAuthority",username:e,authorizedUsername:t,role:s,method:"Active",rpc:r};this.dispatchCustomEvent("swRequest_hive",a,n)},requestAddKeyAuthority:function(e,t,s,n,r,a){var o={type:"addKeyAuthority",username:e,authorizedKey:t,weight:n,role:s,method:"Active",rpc:a};this.dispatchCustomEvent("swRequest_hive",o,r)},requestRemoveKeyAuthority:function(e,t,s,n,r){var a={type:"removeKeyAuthority",username:e,authorizedKey:t,role:s,method:"Active",rpc:r};this.dispatchCustomEvent("swRequest_hive",a,n)},requestBroadcast:function(e,t,s,n,r){var a={type:"broadcast",username:e,operations:t,method:s,rpc:r};this.dispatchCustomEvent("swRequest_hive",a,n)},requestSignTx:function(e,t,s,n,r){var a={type:"signTx",username:e,tx:t,method:s,rpc:r};this.dispatchCustomEvent("swRequest_hive",a,n)},requestSignedCall:function(e,t,s,n,r,a){console.log("getting request");var o={type:"signedCall",username:e,method:t,params:s,typeWif:n,rpc:a};console.log(o),this.dispatchCustomEvent("swRequest_hive",o,r)},requestPost:function(e,t,s,n,r,a,o,i,c,u){var h={type:"post",username:e,title:t,body:s,parent_perm:n,parent_username:r,json_metadata:a,permlink:o,comment_options:i,rpc:u};this.dispatchCustomEvent("swRequest_hive",h,c)},requestVote:function(e,t,s,n,r,a){var o={type:"vote",username:e,permlink:t,author:s,weight:n,rpc:a};this.dispatchCustomEvent("swRequest_hive",o,r)},requestCustomJson:function(e,t,s,n,r,a,o){var i={type:"custom",username:e,id:t,method:s,json:n,display_msg:r,rpc:o};this.dispatchCustomEvent("swRequest_hive",i,a)},requestTransfer:function(e,t,s,n,r,a){var o=arguments.length>6&&void 0!==arguments[6]&&arguments[6],i=arguments.length>7?arguments[7]:void 0,c={type:"transfer",username:e,to:t,amount:s,memo:n,enforce:o,currency:r,rpc:i};this.dispatchCustomEvent("swRequest_hive",c,a)},requestSendToken:function(e,t,s,n,r,a,o){var i={type:"sendToken",username:e,to:t,amount:s,memo:n,currency:r,rpc:o};this.dispatchCustomEvent("swRequest_hive",i,a)},requestDelegation:function(e,t,s,n,r,a){var o={type:"delegation",username:e,delegatee:t,amount:s,unit:n,rpc:a};this.dispatchCustomEvent("swRequest_hive",o,r)},requestWitnessVote:function(e,t,s,n,r){var a={type:"witnessVote",username:e,witness:t,vote:s,rpc:r};this.dispatchCustomEvent("swRequest_hive",a,n)},requestProxy:function(e,t,s,n){console.log(e,t);var r={type:"proxy",username:e,proxy:t,rpc:n};this.dispatchCustomEvent("swRequest_hive",r,s)},requestPowerUp:function(e,t,s,n,r){var a={type:"powerUp",username:e,recipient:t,steem:s,rpc:r};this.dispatchCustomEvent("swRequest_hive",a,n)},requestPowerDown:function(e,t,s,n){var r={type:"powerDown",username:e,steem_power:t,rpc:n};this.dispatchCustomEvent("swRequest_hive",r,s)},requestCreateClaimedAccount:function(e,t,s,n,r,a,o,i){var c={type:"createClaimedAccount",username:e,new_account:t,owner:s,active:n,posting:r,memo:a,rpc:i};this.dispatchCustomEvent("swRequest_hive",c,o)},requestCreateProposal:function(e,t,s,n,r,a,o,i,c,u){var h={type:"createProposal",username:e,receiver:t,subject:s,permlink:n,start:a,end:o,daily_pay:r,extensions:i,rpc:u};this.dispatchCustomEvent("swRequest_hive",h,c)},requestRemoveProposal:function(e,t,s,n,r){var a={type:"removeProposal",username:e,proposal_ids:t,extensions:s,rpc:r};this.dispatchCustomEvent("swRequest_hive",a,n)},requestUpdateProposalVote:function(e,t,s,n,r,a){var o={type:"updateProposalVote",username:e,proposal_ids:t,approve:s,extensions:n,rpc:a};this.dispatchCustomEvent("swRequest_hive",o,r)},dispatchCustomEvent:function(e,t,s){this.requests[this.current_id]=s,t=Object.assign({request_id:this.current_id},t),document.dispatchEvent(new CustomEvent(e,{detail:t})),this.current_id++}};window.addEventListener("message",(function(e){if(e.source==window)if(e.data.type&&"hive_keychain_response"==e.data.type){var t=e.data.response;t&&t.request_id&&f.requests[t.request_id]&&(f.requests[t.request_id](t),delete f.requests[t.request_id])}else e.data.type&&"hive_keychain_handshake"==e.data.type&&f.handshake_callback&&f.handshake_callback()}),!1);var j=f,q=function(e){Object(d.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(u.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={},e.onChangeHandler=function(t){var s={};s[t.target.name]=t.target.value,e.setState(Object(c.a)({},s))},e.onSubmitHandler=function(t){t.preventDefault(),j.requestCustomJson(e.state.username,e.state.id,e.state.key,e.state.json,"Doing stuff")},e}return Object(h.a)(s,[{key:"render",value:function(){var e=this;return Object(n.jsxs)(m.a,{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh"},children:[Object(n.jsxs)("div",{style:{marginTop:"10px"},children:[Object(n.jsx)("h2",{children:"Interface to broadcast custom json operations on the Hive blockchain."}),Object(n.jsx)("p",{className:"text-muted",children:"Note: Requires keychain extension."})]}),Object(n.jsx)(l.a,{style:{padding:"10px"},children:Object(n.jsxs)(v.a,{className:"mt-3",children:[Object(n.jsxs)(v.a.Group,{controlId:"formBasicEmail",children:[Object(n.jsx)(v.a.Label,{children:"Username"}),Object(n.jsx)(v.a.Control,{onChange:function(t){return e.onChangeHandler(t)},type:"text",name:"username",placeholder:"Username"})]}),Object(n.jsxs)(v.a.Group,{controlId:"formBasicEmail",children:[Object(n.jsx)(v.a.Label,{children:"JSON ID"}),Object(n.jsx)(v.a.Control,{onChange:function(t){return e.onChangeHandler(t)},type:"text",name:"id",placeholder:"ssc-mainnet-hive"})]}),Object(n.jsxs)(v.a.Group,{controlId:"formBasicEmail",children:[Object(n.jsx)(v.a.Label,{children:"Key"}),Object(n.jsx)(v.a.Control,{onChange:function(t){return e.onChangeHandler(t)},type:"text",name:"key",placeholder:"active/posting"})]}),Object(n.jsxs)(v.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(n.jsx)(v.a.Label,{children:"JSON"}),Object(n.jsx)(v.a.Control,{onChange:function(t){return e.onChangeHandler(t)},as:"textarea",name:"json",rows:3})]}),Object(n.jsx)(y.a,{onClick:this.onSubmitHandler,children:"Submit"})]})}),Object(n.jsxs)("p",{children:["Built by ",Object(n.jsx)("a",{href:"http://peakd.com/@rahul.stan",children:"@rahul.stan"})," "]})]})}}]),s}(r.Component);var C=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(q,{})})},b=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,34)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;s(e),n(e),r(e),a(e),o(e)}))};s(27);i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(C,{})}),document.getElementById("root")),b()}},[[28,1,2]]]);
//# sourceMappingURL=main.a610f91f.chunk.js.map