(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{157:function(e,t,n){"use strict";n.r(t);var a=n(25),r=(n(55),n(162)),c=function(e){var t=e.className,n=e.children,a=document.createElement("table");return a.className="table"+(t?" "+t:""),n&&a.appendChild(n),a},i=function(e){var t=void 0===e?{}:e,n=t.className,a=t.children,r=document.createElement("thead");return n&&(r.className=n),a&&r.appendChild(a),r},d=function(e){var t=(void 0===e?{}:e).children,n=document.createElement("tbody");return t&&n.appendChild(t),n},o=function(e){var t=(void 0===e?{}:e).children,n=document.createElement("tr");return t&&n.appendChild(t),n},u=function(e){var t=void 0===e?{}:e,n=t.type,a=void 0===n?"td":n,r=t.align,c=void 0===r?"left":r,i=t.className,d=t.value,o=document.createElement(a),u=["center"===c?"text-center":"",i].filter((function(e){return e})).join(" ");return u&&(o.className=u),o.textContent=d,o},l=(n(56),function(e){var t=e.type,n=e.id,a=e.className,r=e.children,c=document.createElement("button");c.setAttribute("type","button"),t&&(c.dataset.type=t),(n||0===n)&&(c.dataset.id=n);var i=["icon-button",t,a].filter((function(e){return e})).join(" ");return c.className=i,r&&c.appendChild(r),c}),s=function(e){var t=document.createElement("span");return t.className="material-icons",t.textContent=e,t},p=n(49),h=n(4),f=n(10),v={NOTES_INIT:"notes/init",MODE_ARCHIVED:"mode/archived",NOTE_CREATE:"note/create",NOTE_UPDATE:"note/update",NOTE_DELETE:"note/delete",NOTE_ARCHIVE:"note/archive",NOTE_UNARCHIVE:"note/unarchive"},b=(n(57),function(e){var t=e.className,n=e.children,a=document.createElement("div");return a.className="avatar"+(t?" "+t:""),n&&a.appendChild(n),a}),m=function(e,t){return e.filter((function(e){return e.id===t}))[0]},y=function(e){switch(e){case"Task":return b({children:s("shopping_cart"),className:"mx-auto"});case"Random Thought":return b({children:s("psychology"),className:"mx-auto"});case"Idea":return b({children:s("lightbulb"),className:"mx-auto"});case"Quote":return b({children:s("format_quote"),className:"mx-auto"});default:return null}},E=function(e,t){return e.map((function(e){return e.id!==t.id?e:Object.assign({},e,t)}))},O=function(e,t){return e.filter((function(e){return e.id!==t}))},g=function(e,t){switch(void 0===e&&(e={}),t.type){case v.NOTES_INIT:return Object.assign({},e,{notes:t.payload});case v.MODE_ARCHIVED:return Object.assign({},e,{modeArchived:t.payload});case v.NOTE_CREATE:return Object.assign({},e,{notes:(r=e.notes,c=t.payload,i=[].concat(r),i.push(c),i)});case v.NOTE_UPDATE:return Object.assign({},e,{notes:E(e.notes,t.payload)});case v.NOTE_DELETE:return Object.assign({},e,{notes:O(e.notes,t.payload)});case v.NOTE_ARCHIVE:var n=m(e.notes,t.payload);return Object.assign({},e,{notes:E(e.notes,Object.assign({},n,{archived:!0}))});case v.NOTE_UNARCHIVE:var a=m(e.notes,t.payload);return Object.assign({},e,{notes:E(e.notes,Object.assign({},a,{archived:!1}))});default:return e}var r,c,i};function C(e,t,n){!function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(e,t),t.set(e,n)}var T=new WeakMap,N=new WeakMap,j=new WeakMap,w=new(function(){function e(e,t){void 0===t&&(t={}),C(this,T,{writable:!0,value:null}),C(this,N,{writable:!0,value:null}),C(this,j,{writable:!0,value:[]}),Object(f.a)(this,T,e),Object(f.a)(this,N,t)}var t=e.prototype;return t.dispatch=function(e){var t=this;Object(f.a)(this,N,Object(h.a)(this,T).call(this,Object(h.a)(this,N),e)),Object(h.a)(this,j).forEach((function(e){return e(Object(h.a)(t,N))}))},t.subscribe=function(e){var t=this;return Object(h.a)(this,j).push(e),function(){Object(f.a)(t,j,Object(h.a)(t,j).filter((function(t){return t!==e})))}},Object(p.a)(e,[{key:"state",get:function(){return Object(h.a)(this,N)}}]),e}())(g,{notes:[],modeArchived:!1}),x=function(e){return{type:v.MODE_ARCHIVED,payload:e}},A=n(163),_=document.querySelector("#createNoteModal"),k=new a.a(_),I=document.querySelector("#createNoteModal form"),D=I.querySelectorAll("input[type=text], select, textarea"),M=function(e){e.preventDefault();var t,n=Array.from(D).reduce((function(e,t){var n,a=t.name,r=t.value,c=void 0===r?"":r;return Object.assign({},e,((n={})[a]=c,n))}),{}),a=function(e){if(!e){for(var t=[],n=/(?:\d{1,2}\/\d{1,2}\/\d{4})|(?:\d{1,2}\-\d{1,2}\-\d{4})|(?:\d{1,2}\.\d{1,2}\.\d{4})/g,a=null;null!==(a=n.exec(e));)t.push(a[0]);return t.map((function(e){return Date.parse(e)?new Date(e):null})).filter((function(e){return e}))}}(n.content);n.id?w.dispatch((t=Object.assign({dates:a},n),{type:v.NOTE_UPDATE,payload:t})):w.dispatch(function(e){return{type:v.NOTE_CREATE,payload:e}}(Object.assign({},n,{id:Object(A.a)(),created:new Date,dates:a}))),k.hide()};_.addEventListener("show.bs.modal",(function(e){!function(e){var t=m(w.state.notes,e);t&&D.forEach((function(e){var n;e.value=null!==(n=t[e.name])&&void 0!==n?n:""}))}(e.relatedTarget.dataset.id)})),_.addEventListener("hide.bs.modal",(function(){D.forEach((function(e){e.value=""}))}));var R=function(){I.addEventListener("submit",M)},S=document.querySelector("#app"),q="edit",Z="archive",H="unarchive",L="delete",V="toggle-archive",U="toggle-active",P="toggle-delete",W=[{text:"Name",align:"left"},{text:"Created",align:"left"},{text:"Category"},{text:"Content"},{text:"Dates"}],B=function(e){var t=i(),n=o(),a=u();n.appendChild(a),W.forEach((function(e){var t=e.text,a=e.align,r=u({type:"th",align:a,value:t});n.appendChild(r)}));var r=u({align:"center"});return r.appendChild(function(e){return l({type:e?U:V,children:s(e?"unarchive":"archive")})}(e)),r.appendChild(l({type:P,children:s("delete")})),n.appendChild(r),t.appendChild(n),t},J=function(e,t){var n=d();return t.forEach((function(e){var t=e.id,a=e.name,c=e.created,i=e.category,d=e.content,p=e.dates,h=e.archived,f=o(),v=Object(r.a)(c,"MMMM dd, yyyy"),b=null==p?void 0:p.map((function(e){return Object(r.a)(e,"M/d/yyyy")})).join(", "),m=y(i),E=u();E.appendChild(m),f.appendChild(E),Object.values({name:a,created:v,category:i,content:d,dates:b}).forEach((function(e){var t=u({value:e});f.appendChild(t)}));var O=u();O.appendChild(l({type:q,id:t,children:s("edit")})),O.appendChild(function(e,t){return l({type:e?H:Z,id:t,children:s(e?"unarchive":"archive")})}(h,t)),O.appendChild(l({type:L,id:t,children:s("delete")})),f.appendChild(O),n.appendChild(f)})),n},Q=function(e){var t=e.target,n=t.dataset,a=n.type,r=n.id;switch(a){case q:k.show(t);break;case Z:w.dispatch({type:v.NOTE_ARCHIVE,payload:r});break;case H:w.dispatch(function(e){return{type:v.NOTE_UNARCHIVE,payload:e}}(r));break;case L:w.dispatch(function(e){return{type:v.NOTE_DELETE,payload:e}}(r));break;case V:w.dispatch(x(!0));break;case U:w.dispatch(x(!1));break;case P:console.log("Opps!")}},G=function(e){var t=e.notes,n=void 0===t?[]:t,a=e.modeArchived,r=void 0!==a&&a,i=n.filter((function(e){var t=e.archived;return(void 0!==t&&t)===r})),d=document.querySelector("#listNotes");d&&(d.removeEventListener("click",Q),d.remove());var o=B(r);(d=c({className:"table-striped table-hover",children:o})).setAttribute("id","listNotes");var u=J(0,i);d.appendChild(u),S.appendChild(d),S.appendChild(btnCreateNote),d.addEventListener("click",Q)},z=document.querySelector("#app"),F=[{text:"Note Category"},{text:"Active"},{text:"Archived"}],Y=function(e,t){var n,a=(n=t,e.reduce((function(e,t){var a,r=Object.assign({},e);return(r[t[n]]=null!==(a=r[t[n]])&&void 0!==a?a:[]).push(t),r}),{}));return Object.entries(a).sort((function(e,t){var n=e[1].length;return t[1].length-n}))},K=function(e){var t=e.notes,n=Y(void 0===t?[]:t,"category"),a=document.querySelector("#summaryNotes");if(!a){var r=function(){var e=i(),t=o(),n=u();return t.appendChild(n),F.forEach((function(e){var n=e.text,a=e.align,r=u({type:"th",align:a,value:n});t.appendChild(r)})),e.appendChild(t),e}();(a=c({className:"table-striped table-hover mt-3",children:r})).setAttribute("id","summaryNotes")}var l=document.querySelector("#summaryNotes > tbody");null==l||l.remove();var s=function(e){var t=d();return e.forEach((function(e){var n=e[0],a=e[1],r=o(),c=y(n),i=u();i.appendChild(c),r.appendChild(i),r.appendChild(u({value:n}));var d=a.filter((function(e){return!e.archived})).length;r.appendChild(u({value:d})),r.appendChild(u({value:a.length-d})),t.appendChild(r)})),t}(n);a.appendChild(s),z.appendChild(a)},X=n(0),$=Object(X.d)().shape({id:Object(X.e)().required(),archived:Object(X.b)(),name:Object(X.e)().required(),created:Object(X.c)().required(),category:Object(X.e)().required(),content:Object(X.e)(),dates:Object(X.a)().ensure().of(Object(X.c)())}),ee=Object(X.a)().ensure().of($),te=n(53);w.subscribe(G),w.subscribe(K);var ne=ee.cast(te);w.dispatch({type:v.NOTES_INIT,payload:ne}),R()},53:function(e){e.exports=JSON.parse('[{"id":"317c3069-8bf5-47f0-9d9e-3aa932652fe2","name":"Shopping list","created":"2021-10-10T00:00:00.000Z","category":"Task","content":"Tomatoes, bread","dates":null},{"id":"f2c0586f-cf6c-40d5-9156-6f8fbd29453d","name":"The theory of evolut...","created":"2021-10-09T00:00:00.000Z","category":"Random Thought","content":"The evolution...","dates":null},{"id":"08f6100d-3edf-4897-b76e-872722ebd252","name":"New Feature","created":"2021-10-08T00:00:00.000Z","category":"Idea","content":"Implement new 10/6/2021, 10/8/2021","dates":["2021-10-06T00:00:00.000Z","2021-10-08T00:00:00.000Z"]},{"id":"b6934dd5-5bbe-4666-87f3-89eef2bd8274","name":"William Gadies","created":"2021-10-07T00:00:00.000Z","category":"Quote","content":"Power dosn\'t co...","dates":null},{"id":"95edccbd-79a2-41b6-9e4a-d29c73f8c42a","name":"Books","created":"2021-10-06T00:00:00.000Z","category":"Task","content":"The Learn Startup","dates":null},{"id":"d574d378-83a2-42e0-b362-033edcd215fa","archived":true,"name":"Call Billy","created":"2021-10-05T00:00:00.000Z","category":"Task","content":"Call Billy","dates":null},{"id":"005c1ec6-0a8c-4ab4-9778-98bf5f4c8347","archived":true,"name":"GYM","created":"2021-04-10T00:00:00.000Z","category":"Task","content":"Pool","dates":null},{"id":"5539984c-005f-4ccc-83d1-16f2d804110a","archived":true,"name":"Text","created":"2021-10-07T00:00:00.000Z","category":"Quote","content":"Text text text","dates":null}]')},54:function(e,t,n){e.exports=n(157)},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){}},[[54,1,2]]]);
//# sourceMappingURL=app.f253136c.js.map