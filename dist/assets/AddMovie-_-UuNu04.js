import{u as T,r as t,j as e,B as P,a as U}from"./index-DxVKGPRw.js";/* empty css            */import{T as L}from"./index-Dv4jy6Gk.js";function E(){const p=T(),[l,j]=t.useState(),[i,y]=t.useState(""),[n,N]=t.useState(""),[d,b]=t.useState(""),[o,S]=t.useState(""),[c,g]=t.useState(""),[u,C]=t.useState(""),[m,F]=t.useState(""),[h,A]=t.useState(""),[v,x]=t.useState(!1),w=new Date().getFullYear(),R=Array.from({length:w-1980+1},(s,a)=>1980+a),q=s=>{const a=s.target.value;!isNaN(Number(a))&&Number(a)>=0&&Number(a)<=5?g(a):a===""&&g("")},D=async s=>{if(s.preventDefault(),!i||!n||!d||!o||!c||!u||!m||!h||!l){alert("Please fill in all fields.");return}x(!0);const a=new FileReader;a.readAsDataURL(l),a.onloadend=async()=>{const r={id:new Date().getTime(),name:i,year:m,summary:h,director:n,hours:d,minutes:o,rating:c,actors:u,poster:a.result};try{(await fetch(`${U}/movies`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})).ok?(alert("Movie added successfully!"),p("/movies")):alert("Failed to add the movie. Please try again.")}catch(f){console.error("Error adding movie:",f),alert("An error occurred while adding the movie.")}finally{x(!1)}},a.onerror=()=>{x(!1),alert("Failed to process the image.")}};return e.jsxs("div",{className:"add",children:[e.jsxs("div",{className:"head",children:[e.jsx("p",{className:"add-title",children:"Add a movie"}),e.jsx(L,{size:40,onClick:()=>p("/movies")})]}),e.jsxs("form",{onSubmit:D,children:[e.jsxs("div",{className:"fields",children:[e.jsxs("div",{className:"feild",children:[e.jsxs("label",{htmlFor:"title",children:["Title ",e.jsx("span",{style:{color:"red"},children:"*"})]}),e.jsx("input",{type:"text",id:"title",required:!0,value:i,onChange:s=>y(s.target.value)})]}),e.jsxs("div",{className:"feild",children:[e.jsxs("label",{htmlFor:"director",children:["Director ",e.jsx("span",{style:{color:"red"},children:"*"})]}),e.jsx("input",{type:"text",id:"director",required:!0,value:n,onChange:s=>N(s.target.value)})]}),e.jsxs("div",{className:"feild display",children:[e.jsxs("label",{htmlFor:"display",children:["Display Duration ",e.jsx("span",{style:{color:"red"},children:"*"})]}),e.jsxs("div",{className:"duration-inputs",children:[e.jsx("input",{type:"number",placeholder:"Hours",min:"0",id:"hours",required:!0,value:d,onChange:s=>b(s.target.value)}),e.jsx("input",{className:"input2",type:"number",placeholder:"Minutes",min:"0",max:"59",id:"minutes",required:!0,value:o,onChange:s=>S(s.target.value)})]})]}),e.jsxs("div",{className:"feild",children:[e.jsxs("label",{htmlFor:"rating",children:["Rating (0-5) ",e.jsx("span",{style:{color:"red"},children:"*"})]}),e.jsx("input",{type:"text",id:"rating",required:!0,value:c,onChange:q})]}),e.jsxs("div",{className:"feild",children:[e.jsxs("label",{htmlFor:"actors",children:["Actors ",e.jsx("span",{style:{color:"red"},children:"*"})]}),e.jsx("input",{type:"text",id:"actors",required:!0,value:u,onChange:s=>C(s.target.value)})]}),e.jsxs("div",{className:"feild",children:[e.jsxs("label",{htmlFor:"year",children:["Year ",e.jsx("span",{style:{color:"red"},children:"*"})]}),e.jsxs("select",{id:"year",required:!0,value:m,onChange:s=>F(s.target.value),children:[e.jsx("option",{value:"",disabled:!0,children:"Select a year"}),R.map(s=>e.jsx("option",{value:s,children:s},s))]})]}),e.jsxs("div",{className:"feild summary",children:[e.jsxs("label",{htmlFor:"summary",children:["Summary ",e.jsx("span",{style:{color:"red"},children:"*"})]}),e.jsx("textarea",{rows:4,id:"summary",required:!0,value:h,onChange:s=>A(s.target.value)})]}),e.jsx("button",{className:"btn",type:"submit",disabled:v,children:v?"Adding...":"Add"})]}),e.jsxs("div",{className:"add-img",children:[e.jsxs("p",{children:["Poster ",e.jsx("span",{style:{color:"red"},children:"*"})]}),l?e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"image-container",children:e.jsx("img",{src:URL.createObjectURL(l),alt:"Poster Preview",className:"full-container-image"})}),e.jsx("label",{className:"change-label",htmlFor:"file",children:"If you want to change"}),e.jsx("input",{id:"file",type:"file",accept:"image/*",onChange:s=>{var r;const a=(r=s.target.files)==null?void 0:r[0];a&&j(a)}})]}):e.jsxs("div",{children:[e.jsx("label",{htmlFor:"file",children:e.jsx(P,{size:100})}),e.jsx("input",{id:"file",type:"file",accept:"image/*",onChange:s=>{var r;const a=(r=s.target.files)==null?void 0:r[0];a&&j(a)}})]})]})]})]})}export{E as default};
