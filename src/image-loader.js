const $dir = 'dist/';
const $list = [
  'browser.png', 
  'coidroid.png',
  'email.png',
  'folder.png',
  'github.png',
  'gmma.png',
  'google.png',
  'info.png',
  'lgh.png',
  'logo.png',
  'lotto.png',
  'power.png',
  'poweroff.png',
  'refresh.png',
  'start.png',
  'terminal.png'
];

$list.forEach((path, index) => {
  new Image().src = $dir + path;
});

export default $list