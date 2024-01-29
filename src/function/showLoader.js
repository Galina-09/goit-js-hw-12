const loader = document.querySelector('.loader');
function hideLoader() {
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);
}

function showLoader() {
  loader.style.display = 'block';
}

export { hideLoader, showLoader };
