import{i as M,S as w}from"./assets/vendor-9310f15c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();function h(r){return r.map(({comments:s,downloads:i,largeImageURL:n,likes:e,webformatURL:o,tags:c,views:L})=>`<li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${o}" alt="${c}">
          <ul class="gallery-item-description">
            <li>Likes: ${e}</li>
            <li>Views: ${L}</li>
            <li>Downloads: ${i}</li>
            <li>Comments: ${s}</li>
          </ul>
        </a>
      </li>`).join("")}const v="https://pixabay.com/api/",S="41864490-ab1aa9c4772cfd6b871252eca";function m({query:r,page:s=1,per_page:i}){return axios.get(`${v}?key=${S}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&`,{params:{per_page:i,page:s}}).then(({data:n})=>n)}const q="/goit-js-hw-12/assets/error-5b075f14.svg";function d(r=""){const s=r||"Sorry, there was an error fetching images.";M.show({iconUrl:q,theme:"dark",message:s,messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:5e3})}const g=document.querySelector(".loader");function f(){setTimeout(()=>{g.style.display="none"},500)}function y(){g.style.display="block"}function p(){window.scrollBy({top:2*document.querySelector(".gallery-item").getBoundingClientRect().height,behavior:"smooth"})}const t={searchForm:document.querySelector(".search-form"),imageList:document.querySelector(".gallery"),btnMore:document.querySelector(".load-btn")},b=new w(".gallery-item a",{captionsData:"alt",captionDelay:250}),a={query:"",page:1,maxPage:0,per_page:40},l="is-hidden";t.searchForm.addEventListener("submit",k);async function k(r){r.preventDefault(),t.imageList.innerHTML="",a.page=1;const s=r.currentTarget;if(a.query=s.elements.query.value.trim(),y(),!!a.query)try{const{hits:i,totalHits:n}=await m(a);a.maxPage=Math.ceil(n/a.per_page),t.imageList.insertAdjacentHTML("beforeend",h(i)),b.refresh(),i.length===0?(d("Sorry, there are no images matching your search query. Please, try again!"),t.btnMore.classList.add(l)):i.length>0&&i.length!==n?(t.btnMore.classList.remove(l),t.btnMore.addEventListener("click",u)):(t.btnMore.classList.add(l),d("We're sorry, but you've reached the end of search results."))}catch{d("Sorry, there is a problem with connection with the server.")}finally{f(),s.reset(),p()}}async function u(){a.page+=1,y(),t.btnMore.disabled=!0;try{const{hits:r}=await m(a);t.imageList.insertAdjacentHTML("beforeend",h(r)),b.refresh(),r.length>0?(t.btnMore.classList.remove(l),t.btnMore.addEventListener("click",u)):(t.btnMore.classList.add(l),d("We're sorry, but you've reached the end of search results."))}catch{d("Sorry, there is a problem with connection with the server.")}finally{f(),t.btnMore.disabled=!1,a.page===a.maxPage&&(t.btnMore.classList.add(l),t.btnMore.removeEventListener("click",u)),p()}}
//# sourceMappingURL=commonHelpers.js.map
