let groups = document.querySelectorAll('.project-group');

let games = ['unblocked-slope', 'best-dino-game', 'breakout', 'bubble-popper', 'clicker-game', 'Dino-Game', 'flappy-bird', 'game-testing', 'HonkMaster89', 'platformer', 'pong', 'slot-machine', 'snake-2', 'Snake-Game', 'tetris', 'Toby', 'Bomberman'];

let jsProjects = ['clock-2', 'balls-moving-on-click', 'bouncing-balls', 'cave-generation', 'clock', 'combo-lock', 'factoring', 'false-3d', 'bouncing-square', 'first-dino-game', 'grid', 'maze-generator', 'nexus-particles', 'noise-generator', 'ray-casting', 'recursive-backtracker', 'scrolling-tile-map', 'sound', 'three-js', 'tile-map', 'translator', 'Typewriting', 'triangle-fractal', 'mandelbrot-set'];

let websites =['login-page', 'other-buttons', 'acordian-menu', 'animated-bg-gradient', 'anudderlySmartCow-site', 'cool-buttons', 'DOG\'s-site', 'drop-menu', 'glitch-effect', 'login-screen', 'moch-website', 'navagation-bar', 'navbars', 'shrink-and-grow', 'the-louis-site', 'unblockable-games', 'website-practice'];

addList(games, 0, 'games');
addList(jsProjects, 1, 'js-projects');
addList(websites, 2, 'websites');

function addList(ary, groupNum, aryName) {
  ary.forEach(index => {
    let linkName = index;
    switch(linkName) {
      case 'anudderlySmartCow-site':
        linkName = 'anudderlySmartCow-site (my-previous-website)';
        break;

      case 'the-louis-site':
        linkName = 'the-louis-site (my-first-website)';
        break;

      case 'grid':
        linkName = 'cool-grid';
        break;

      case 'three-js':
        linkName = '3d-shapes';
        break;

      case 'game-testing':
        linkName = 'cave-game';
        break;
        
      case 'recursive-backtracker':
        linkName = 'recursive-maze-generator';
        break;
        
      case 'unblocked-slope':
        linkName = 'unblocked-slope(not by me)';
        break;  
    }

    groups[groupNum].innerHTML += `<a href="./assets/projects/${aryName}/${index}/index.html"><h3>${linkName}</h3></a>`;
  });
}
