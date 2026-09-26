import{S as c,a as n,i as u}from"./assets/vendor-CesYmgD5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},d=new c(".gallery a",{captionsData:"alt",captionDelay:250});function f(a){const r=a.map(s=>`<li class="gallery-item">
  <a class="gallery-item" href="${s.largeImageURL}">
  <img src="${s.webformatURL}" alt="${s.tags}" />
</a>
  <div class="gallery-text-wrapper">
    <p class="likes"><span>Likes</span> ${s.likes}</p>
    <p class="likes"><span>Views</span> ${s.views}</p>
    <p class="likes"><span>Comments</span> ${s.comments}</p>
    <p class="likes"><span>Downloads</span> ${s.downloads}</p>
  </div>
</li>`).join("");o.gallery.insertAdjacentHTML("beforeend",r),d.refresh()}function p(){o.gallery.innerHTML=""}function m(){o.loader.classList.add("visible")}function y(){o.loader.classList.remove("visible")}n.defaults.baseURL="https://pixabay.com/";function g(a){return n.get("api/",{params:{key:"57748887-33fc44c7a6eadcbc503de0d7e",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>{if(r.data.hits.length===0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(r.data.hits)}).catch(r=>console.log(r)).finally(()=>y())}o.form.addEventListener("submit",h);function h(a){a.preventDefault(),p();const r=a.currentTarget.elements["search-text"].value;r.trim()!==""&&(m(),g(r))}
//# sourceMappingURL=index.js.map
