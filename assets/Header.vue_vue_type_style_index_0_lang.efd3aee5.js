import{X as p,d as m,Y as u,l as d,o as f,c as g,b as n,g as t,j as s,t as i,f as h,h as v}from"./index.50ffbe4b.js";import{_ as x}from"./Search.vue_vue_type_script_setup_true_lang.03ad0a33.js";import{_ as C}from"./Fullscreen.vue_vue_type_script_setup_true_lang.b974afce.js";import{_ as I}from"./Language.vue_vue_type_script_setup_true_lang.0372edb8.js";import{_ as $}from"./UserInfo.vue_vue_type_style_index_0_lang.6a6b0b58.js";function B(c){const{t:o}=p();return{t:e=>e?!e.includes(".")&&!c?e:o(e):""}}const N={class:"header-content"},V={class:"logo"},w=h(" \xA0 "),A={class:"operation-area"},y=m({__name:"Header",setup(c){const{t:o}=B(),a=u(),e=d({get:()=>a.getIsCollapse,set:r=>{a.setIsCollapse(r)}});function l(){e.value=!e.value}return(r,F)=>{const _=v("eli-svg-icon");return f(),g("div",N,[n("div",V,[t(_,{name:"logo",width:"120px",height:"28px"}),w,t(_,{onClick:l,name:s(e)?"menu-fold":"menu-unfold",width:"20px",height:"20px"},null,8,["name"])]),n("div",A,[t(s(x)),t(s(C)),t(s(I)),t(s($)),n("span",null,i(s(o)("common.searchText")),1),n("span",null,i(s(o)("routes.system.charts.googleMap")),1)])])}}});export{y as _,B as u};
