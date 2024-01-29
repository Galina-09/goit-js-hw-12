import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import icon from '../img/error.svg';

function showMessage(customMessage = '') {
  const errorMessage =
    customMessage || 'Sorry, there was an error fetching images.';
  iziToast.show({
    iconUrl: icon,
    theme: 'dark',
    message: errorMessage,
    messageSize: '16px',
    messageColor: 'white',
    backgroundColor: '#EF4040',
    position: 'topRight',
    timeout: 5000,
  });
}

export { showMessage };
