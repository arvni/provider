import{j as t,a as l}from"./app-598c3492.js";import{F as p}from"./RenderFormField-09dd592b.js";import{A as u}from"./Actions-49ff8c7d.js";import{B as f}from"./Box-4ecef40b.js";import{G as o}from"./Grid-cde2aa95.js";const g=({send:e,action:i,onchange:r,children:n,sx:m=null,fields:s=[],actions:a=[]})=>t(f,{component:"form",onSubmit:e,method:"post",action:i,sx:m,onChange:r,children:l(o,{container:!0,direction:"column",spacing:2,alignItems:"center",justifyContent:"center",children:[s.map((c,d)=>t(o,{item:!0,sx:{width:"100%"},children:t(p,{field:c,onchange:r})},d)),n,t(o,{item:!0,xs:12,sx:{width:"100%"},children:t(u,{actions:a})})]})});export{g as O};