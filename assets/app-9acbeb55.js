import"./turbo.es2017-esm-a6b16222.js";document.addEventListener("turbo:load",(()=>{const e=(new Date).getHours(),t=document.getElementById("greeting");let n;n=e<12?"Good morning":e<18?"Good afternoon":"Good evening",t&&(t.innerHTML=n);const a=document.getElementById("name"),l=document.getElementById("age"),o=document.getElementById("saveUserName"),r=document.getElementById("saveUserAge");a&&(a.addEventListener("input",(e=>{o.addEventListener("click",(()=>{localStorage.setItem("le-username",e.target.value)}))})),a.value=localStorage.getItem("le-username")),l&&(l.addEventListener("input",(e=>{r.addEventListener("click",(()=>{localStorage.setItem("le-userage",e.target.value)}))})),l.value=localStorage.getItem("le-userage"));const g=(365*(70-localStorage.getItem("le-userage"))).toLocaleString(void 0,{maximumFractionDigits:2})+" days left";localStorage.getItem("le-userage")>70?document.getElementById("life-expectancy").innerText="You meet you life expectancy and yet your still alive be thankful everyday.":document.getElementById("life-expectancy").innerText=g??"16,425 days left",document.getElementById("le-username").innerText=localStorage.getItem("le-username")??"Mark Paul",document.getElementById("le-userage").innerText=localStorage.getItem("le-userage")+" years old"}));