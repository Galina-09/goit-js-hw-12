import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createMarkup } from './function/markup';
import { getImage } from './services/api';
import { showMessage } from './function/showMessage';
import { showLoader, hideLoader } from './function/showLoader';
import { scrollBy } from './function/scroolBy';

const refs = {
  searchForm: document.querySelector('.search-form'),
  imageList: document.querySelector('.gallery'),
  btnMore: document.querySelector('.load-btn'),
};

const gallery = new SimpleLightbox('.gallery-item a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const queryParams = {
  query: '',
  page: 1,
  maxPage: 0,
  per_page: 40,
};
const hiddenClass = 'is-hidden';

refs.searchForm.addEventListener('submit', handleSearch);

async function handleSearch(event) {
  event.preventDefault();
  refs.imageList.innerHTML = '';
  queryParams.page = 1;
  const form = event.currentTarget;
  queryParams.query = form.elements.query.value.trim();
  showLoader();
  if (!queryParams.query) {
    return;
  }
  try {
    const { hits, totalHits } = await getImage(queryParams);
    queryParams.maxPage = Math.ceil(totalHits / queryParams.per_page);
    //refs.imageList.innerHTML += createMarkup(hits);
    refs.imageList.insertAdjacentHTML('beforeend', createMarkup(hits));
    gallery.refresh();
    if (hits.length === 0) {
      showMessage(
        'Sorry, there are no images matching your search query. Please, try again!'
      );
      refs.btnMore.classList.add(hiddenClass);
    } else if (hits.length > 0 && hits.length !== totalHits) {
      refs.btnMore.classList.remove(hiddenClass);
      refs.btnMore.addEventListener('click', handleLoadMore);
    } else {
      refs.btnMore.classList.add(hiddenClass);
      showMessage("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    showMessage('Sorry, there is a problem with connection with the server.');
  } finally {
    hideLoader();
    form.reset();
    scrollBy();
  }
}

async function handleLoadMore() {
  queryParams.page += 1;
  showLoader();
  refs.btnMore.disabled = true;
  try {
    const { hits } = await getImage(queryParams);

    refs.imageList.insertAdjacentHTML('beforeend', createMarkup(hits));
    gallery.refresh();
    if (hits.length > 0) {
      refs.btnMore.classList.remove(hiddenClass);
      refs.btnMore.addEventListener('click', handleLoadMore);
    } else {
      refs.btnMore.classList.add(hiddenClass);
      showMessage("We're sorry, but you've reached the end of search results.");
    }
  } catch (error) {
    showMessage('Sorry, there is a problem with connection with the server.');
  } finally {
    hideLoader();
    refs.btnMore.disabled = false;
    if (queryParams.page === queryParams.maxPage) {
      showMessage("We're sorry, but you've reached the end of search results.");
      refs.btnMore.classList.add(hiddenClass);
      refs.btnMore.removeEventListener('click', handleLoadMore);
    }
    scrollBy();
  }
}
