import{i as L,S as M}from"./assets/vendor-9310f15c.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();function m(r){return r.map(({comments:s,downloads:a,largeImageURL:n,likes:e,webformatURL:o,tags:c,views:b})=>`<li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${o}" alt="${c}">
          <ul class="gallery-item-description">
            <li>Likes: ${e}</li>
            <li>Views: ${b}</li>
            <li>Downloads: ${a}</li>
            <li>Comments: ${s}</li>
          </ul>
        </a>
      </li>`).join("")}const w="https://pixabay.com/api/",v="41864490-ab1aa9c4772cfd6b871252eca";function h({query:r,page:s=1,per_page:a}){return axios.get(`${w}?key=${v}&q=${r}&image_type=photo&orientation=horizontal&safesearch=true&`,{params:{per_page:a,page:s}}).then(({data:n})=>n)}const S="/goit-js-hw-12/assets/error-5b075f14.svg";function d(r=""){const s=r||"Sorry, there was an error fetching images.";L.show({iconUrl:S,theme:"dark",message:s,messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:5e3})}const g=document.querySelector(".loader");function f(){setTimeout(()=>{g.style.display="none"},500)}function y(){g.style.display="block"}function p(){window.scrollBy({top:2*document.querySelector(".gallery-item").getBoundingClientRect().height,behavior:"smooth"})}const t={searchForm:document.querySelector(".search-form"),imageList:document.querySelector(".gallery"),btnMore:document.querySelector(".load-btn")},q=new M(".gallery-item a",{captionsData:"alt",captionDelay:250}),i={query:"",page:1,maxPage:0,per_page:40},l="is-hidden";t.searchForm.addEventListener("submit",k);async function k(r){r.preventDefault(),t.imageList.innerHTML="",i.page=1;const s=r.currentTarget;if(i.query=s.elements.query.value.trim(),y(),!!i.query)try{const{hits:a,totalHits:n}=await h(i);i.maxPage=Math.ceil(n/i.per_page),t.imageList.insertAdjacentHTML("beforeend",m(a)),a.length===0?(d("Sorry, there are no images matching your search query. Please, try again!"),t.btnMore.classList.add(l)):a.length>0&&a.length!==n?(t.btnMore.classList.remove(l),t.btnMore.addEventListener("click",u)):(t.btnMore.classList.add(l),d("We're sorry, but you've reached the end of search results."))}catch{d("Sorry, there is a problem with connection with the server.")}finally{f(),s.reset(),p()}}async function u(){i.page+=1,y(),t.btnMore.disabled=!0;try{const{hits:r}=await h(i);t.imageList.insertAdjacentHTML("beforeend",m(r)),r.length>0?(t.btnMore.classList.remove(l),t.btnMore.addEventListener("click",u)):(t.btnMore.classList.add(l),d("We're sorry, but you've reached the end of search results."))}catch(r){handleError(r)}finally{f(),t.btnMore.disabled=!1,i.page===i.maxPage&&(t.btnMore.classList.add(l),t.btnMore.removeEventListener("click",u)),p(),q.refresh()}}
//# sourceMappingURL=commonHelpers.js.map
