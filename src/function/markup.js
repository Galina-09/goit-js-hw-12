export function createMarkup(hits) {
  return hits
    .map(
      ({
        comments,
        downloads,
        largeImageURL,
        likes,
        webformatURL,
        tags,
        views,
      }) =>
        `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}">
          <ul class="gallery-item-description">
            <li>Likes: ${likes}</li>
            <li>Views: ${views}</li>
            <li>Downloads: ${downloads}</li>
            <li>Comments: ${comments}</li>
          </ul>
        </a>
      </li>`
    )
    .join('');
}
