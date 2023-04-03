import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

const throttled = throttle(assignValueToLocalStorage, 1000);

player.on('timeupdate', throttled);

function assignValueToLocalStorage(data) {
  return localStorage.setItem('videoplayer-current-time', data.seconds);
}

const currentTime = localStorage.getItem('videoplayer-current-time');

const parsedTime = JSON.parse(currentTime);
if (parsedTime) {
  player.setCurrentTime(parsedTime);
}
