"use strict";var bottom=document.querySelector(".bottom"),loadIcon=document.querySelector(".loadIcon"),time=5,allowNewRequest=!0;window.addEventListener("scroll",function(){var e=window.pageYOffset,t=bottom.offsetTop;e>=t/2&&allowNewRequest===!0&&!function(){allowNewRequest=!1,loadIcon.classList.remove("hide");var e=new XMLHttpRequest;e.open("GET","../alphaAPI/showImage.php?time="+time+"&type=image"),e.send(),e.onreadystatechange=function(){4==e.readyState&&200==e.status&&!function(){var t=e.response;t=JSON.parse(t);var a=t[t.length-1].max;t=t,time!=a?(!function(){for(var e=0;e<t.length-1;e++){time++,allowNewRequest=!0;var a=document.createElement("div"),s=document.createElement("img"),n=document.createElement("a"),o=document.createElement("p"),d=document.createElement("form"),i=document.createElement("input"),l=document.createElement("input");a.className="assets image",a.appendChild(n),n.setAttribute("href","https://codepenassets.ml/"+t[e].orgURL),n.setAttribute("target","_blank"),n.appendChild(s),s.setAttribute("src","https://codepenassets.ml/"+t[e].orgURL),a.appendChild(o),o.textContent="https://codepenassets.ml?"+t[e].newURL,a.appendChild(d),d.appendChild(i),d.appendChild(l),d.setAttribute("action","removeImage.php"),d.className="removeImage",d.setAttribute("method","POST"),i.className="fa fa-times",i.setAttribute("value","Remove"),i.setAttribute("type","submit"),l.setAttribute("type","hidden"),l.setAttribute("value",t[e].newURL),l.setAttribute("name","id"),document.querySelector(".showAssets").appendChild(a)}}(),loadIcon.classList.add("hide")):loadIcon.classList.add("hide")}()}}()});
