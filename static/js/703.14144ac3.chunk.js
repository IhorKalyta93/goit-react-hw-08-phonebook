"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[703],{703:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(942),r=n(413),s=n(439),c={button:"ContactForm_button__eSwX9",form:"ContactForm_form__dhl+T",lable:"ContactForm_lable__W7bCm"},o=n(791),u=n(434),i=n(52),l=function(e){return e.contacts.contacts.items},m=function(e){return e.contacts.filter},d=function(e){return e.contacts.contacts.isLoading},b=function(e){return e.contacts.contacts.error},f=n(184),h=function(){var e=(0,o.useState)({name:"",number:""}),t=(0,s.Z)(e,2),n=t[0],m=t[1],d=(0,u.I0)(),b=(0,u.v9)(l),h=function(e){var t=e.currentTarget,n=t.name,s=t.value;m((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},n,s))}))};return(0,f.jsx)("div",{children:(0,f.jsxs)("form",{className:c.form,onSubmit:function(e){e.preventDefault();var t=b.map((function(e){return e.name}));t.includes(n.name)?alert("".concat(n.name," is already in contacts.")):d((0,i.uK)({name:n.name,number:n.number})),m({name:"",number:""})},children:[(0,f.jsxs)("label",{className:c.lable,children:["Name",(0,f.jsx)("input",{className:c.inputContact,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:n.name,onChange:h})]}),(0,f.jsxs)("label",{className:c.lable,children:["Number",(0,f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:n.number,onChange:h})]}),(0,f.jsx)("button",{type:"submit",className:c.button,children:"Add contact"})]})})},p="ContactList_list__csErn",_="ContactList_item__EZYHO",v="ContactList_remove__eupmf",x=function(){var e=(0,u.I0)(),t=(0,u.v9)(l),n=(0,u.v9)(m),a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return(0,f.jsx)("ul",{className:p,children:a.map((function(t){var n=t.id,a=t.name,r=t.number;return(0,f.jsxs)("li",{className:_,children:[a+": "+r,(0,f.jsx)("button",{type:"button",className:v,onClick:function(){return e((0,i.GK)(n))},children:"Delete"})]},n)}))})},C="Filter_label__vEd1E",j=n(538),N=function(){var e=(0,u.I0)();return(0,f.jsxs)("label",{className:C,children:["Find contacts by name",(0,f.jsx)("input",{type:"text",onChange:function(t){var n=t.currentTarget.value.toLowerCase();e((0,j.sO)(n))}})]})},y=function(){var e=(0,u.I0)(),t=(0,u.v9)(d),n=(0,u.v9)(b);return(0,o.useEffect)((function(){e((0,i.yF)())}),[e]),(0,f.jsxs)("div",{style:{margin:"0 auto",width:"333px"},children:[(0,f.jsx)("h2",{children:"Phonebook"}),(0,f.jsx)(h,{}),(0,f.jsx)("h2",{children:"Contacts"}),(0,f.jsx)(N,{}),!t&&!n&&(0,f.jsx)(x,{})]})}}}]);
//# sourceMappingURL=703.14144ac3.chunk.js.map