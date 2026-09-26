import{a as c,S as u,i as l}from"./assets/vendor-CesYmgD5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();c.defaults.baseURL="https://pixabay.com/";function d(a){return c.get("api/",{params:{key:"57748887-33fc44c7a6eadcbc503de0d7e",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})}const o={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},p=new u(".gallery a",{captionsData:"alt",captionDelay:250});function f(a){const s=a.map(r=>`<li class="gallery-item">
  <a class="gallery-item" href="${r.largeImageURL}">
  <img src="${r.webformatURL}" alt="${r.tags}" />
</a>
  <div class="gallery-text-wrapper">
    <p class="likes"><span>Likes</span> ${r.likes}</p>
    <p class="likes"><span>Views</span> ${r.views}</p>
    <p class="likes"><span>Comments</span> ${r.comments}</p>
    <p class="likes"><span>Downloads</span> ${r.downloads}</p>
  </div>
</li>`).join("");o.gallery.insertAdjacentHTML("beforeend",s),p.refresh()}function m(){o.gallery.innerHTML=""}function y(){o.loader.classList.add("visible")}function g(){o.loader.classList.remove("visible")}o.form.addEventListener("submit",h);function h(a){a.preventDefault(),m();const s=a.currentTarget.elements["search-text"].value.trim();s!==""&&(y(),d(s).then(r=>{if(r.data.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}f(r.data.hits)}).catch(r=>{l.error({message:r.message,position:"topRight"})}).finally(()=>g()))}
//# sourceMappingURL=index.js.map
