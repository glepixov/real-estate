import{r as o,j as b,c as a,a as e,k as x,l as g,m as w,t as h,f as c,v as m,n as y,p as _,u as k,o as r}from"./index-D6er3wSj.js";const z={class:"min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50"},C={class:"max-w-md w-full space-y-8 relative z-10"},V={class:"bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 py-8 px-6 sm:px-10"},B={key:0,class:"rounded-md bg-red-50 p-4"},L={class:"flex"},M={class:"ml-3"},S={class:"text-sm font-medium text-red-800"},j={class:"mt-1"},N={class:"mt-1"},A=["disabled"],q={key:0},D={key:1,class:"flex items-center"},U={__name:"LoginPage",setup(E){const i=o(""),n=o(""),s=o(!1),l=o(null),p=b(),f=k(),v=async()=>{try{s.value=!0,l.value=null,await p.login(i.value,n.value),await f.push("/admin")}catch(u){l.value=u.message||"Ошибка входа. Проверьте данные и попробуйте снова."}finally{s.value=!1}};return(u,t)=>(r(),a("div",z,[t[7]||(t[7]=e("div",{class:"absolute inset-0 overflow-hidden pointer-events-none"},[e("div",{class:"absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full filter blur-3xl opacity-20 animate-float-slow"}),e("div",{class:"absolute top-1/3 right-1/4 w-80 h-80 bg-indigo-100 rounded-full filter blur-3xl opacity-20 animate-float-medium"}),e("div",{class:"absolute bottom-0 left-1/2 w-72 h-72 bg-purple-100 rounded-full filter blur-3xl opacity-20 animate-float-fast"})],-1)),e("div",C,[t[6]||(t[6]=x('<div class="text-center"><div class="mx-auto h-16 w-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg"><svg class="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0110 10 10 10 0 01-10 10A10 10 0 012 12 10 10 0 0112 2z"></path></svg></div><h2 class="mt-6 text-3xl font-extrabold text-gray-900"> Вход в систему </h2><p class="mt-2 text-sm text-gray-600"> Для доступа к панели управления </p></div>',1)),e("div",V,[e("form",{class:"space-y-6",onSubmit:g(v,["prevent"])},[l.value?(r(),a("div",B,[e("div",L,[t[2]||(t[2]=e("div",{class:"flex-shrink-0"},[e("svg",{class:"h-5 w-5 text-red-400",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"})])],-1)),e("div",M,[e("h3",S,h(l.value),1)])])])):w("",!0),e("div",null,[t[3]||(t[3]=e("label",{for:"email",class:"block text-sm font-medium text-gray-700"}," Email адрес ",-1)),e("div",j,[c(e("input",{id:"email","onUpdate:modelValue":t[0]||(t[0]=d=>i.value=d),name:"email",type:"email",autocomplete:"email",required:"",class:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"},null,512),[[m,i.value]])])]),e("div",null,[t[4]||(t[4]=e("label",{for:"password",class:"block text-sm font-medium text-gray-700"}," Пароль ",-1)),e("div",N,[c(e("input",{id:"password","onUpdate:modelValue":t[1]||(t[1]=d=>n.value=d),name:"password",type:"password",autocomplete:"current-password",required:"",class:"appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"},null,512),[[m,n.value]])])]),e("div",null,[e("button",{type:"submit",disabled:s.value,class:y(["w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200",{"opacity-50 cursor-not-allowed":s.value}])},[s.value?(r(),a("span",D,t[5]||(t[5]=[e("svg",{class:"animate-spin -ml-1 mr-2 h-4 w-4 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},[e("circle",{class:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor","stroke-width":"4"}),e("path",{class:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})],-1),_(" Вход... ")]))):(r(),a("span",q,"Войти"))],10,A)])],32)])])]))}};export{U as default};
