"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[193],{6193:function(s,e,n){n.r(e),n.d(e,{default:function(){return C}});var i=n(2807),a=n(8687),t={dialogs:"Dialogs_dialogs__zW-9Z",dialogsItems:"Dialogs_dialogsItems__TR29H",active:"Dialogs_active__KNb3a"},r=n(184),o=function(s){return(0,r.jsx)("div",{className:t.dialog,children:s.message})},d=n(1087),u=function(s){var e="/dialogs/"+s.id;return(0,r.jsx)("div",{className:t.dialog+""+t.active,children:(0,r.jsx)(d.OL,{to:e,children:s.name})})},l=n(2791),c=n(704),g=n(6139),m=n(7978),h=n(5304),f=n(435),j=function(s){return(0,r.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,r.jsx)("div",{children:(0,r.jsx)(g.Z,{component:m.gx,validate:[h.C,(0,h.D)(50)],name:"newMessageBody",placeholder:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"})}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{className:f.Z.button,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})},p=(0,c.Z)({form:"dialogAddMessageForm"})(j),v=function(s){var e=s.dialogsPage,n=e.dialogs.map((function(s){return(0,r.jsx)(u,{name:s.name,id:s.id},s.id)})),i=e.messages.map((function(s){return(0,r.jsx)(o,{message:s.message},s.id)}));return(0,r.jsxs)("div",{className:t.dialogs,children:[(0,r.jsx)("div",{className:t.dialogsItems,children:n}),(0,r.jsxs)("div",{className:t.messages,children:[(0,r.jsx)("div",{children:i}),(0,r.jsx)(p,{onSubmit:function(e){s.sendMessage(e.newMessageBody)}})]})]})},x=n(1413),_=n(5671),Z=n(3144),b=n(136),N=n(516),y=n(7689),k=function(s){return{isAuth:s.auth.isAuth}},C=(0,n(7781).qC)((0,a.$j)((function(s){return{dialogsPage:s.dialogsPage}}),(function(s){return{sendMessage:function(e){s((0,i.X)(e))}}})),(function(s){var e=function(e){(0,b.Z)(i,e);var n=(0,N.Z)(i);function i(){return(0,_.Z)(this,i),n.apply(this,arguments)}return(0,Z.Z)(i,[{key:"render",value:function(){return this.props.isAuth?(0,r.jsx)(s,(0,x.Z)({},this.props)):(0,r.jsx)(y.Fg,{to:"/login"})}}]),i}(l.Component);return(0,a.$j)(k)(e)}))(v)}}]);
//# sourceMappingURL=193.6dd0bce0.chunk.js.map