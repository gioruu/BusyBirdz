import{a as n,j as e}from"./client-DQoH7txC.js";import{c as t,a}from"./index-8uE27Id7.js";const o=t({method:"GET"}).handler(a(c,"c_3l4eib","$$function0")),d=function(){const{destination:s}=n.useLoaderData();return e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:[e.jsxs("header",{className:"destination-hero mb-8",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:s.name}),e.jsx("img",{src:s.image,alt:s.name,className:"w-full h-96 object-cover rounded-lg"})]}),e.jsxs("section",{className:"destination-details mb-8",children:[e.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold",children:"Duration"}),e.jsx("p",{children:s.duration})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold",children:"Difficulty"}),e.jsx("p",{className:"capitalize",children:s.difficulty})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold",children:"Price"}),e.jsxs("p",{children:["$",s.price]})]})]}),e.jsx("p",{className:"text-lg",children:s.description})]}),e.jsxs("section",{className:"booking-widget bg-gray-50 p-6 rounded-lg",children:[e.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Book This Trip"}),e.jsx("button",{type:"button",className:"bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700",children:"Check Availability"})]})]})},m=async({params:i})=>{const s=await o({params:i});if(!s)throw new Error("Destination not found");return{destination:s}};function c(i){}export{c as $$function0,d as component,m as loader};