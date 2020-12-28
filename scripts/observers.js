let targets = document.querySelectorAll('.card');

targets.forEach(card => {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      let sibling = card.nextElementSibling || card.previousElementSibling;

      if(entry.intersectionRatio >= 0.95) {
        card.style = `box-shadow: 5px 5px 10px 0 #888; transform: translate(-10px, -10px)`;
        if(card.parentNode.classList == 'advertiser') sibling.style = `box-shadow: 5px 5px 10px 0 #888; transform: translate(-10px, -10px)`;
      }
      else {
        card.style = 'box-shadow: none;';
        if(card.parentNode.classList == 'advertiser') sibling.style = 'box-shadow: none;';
      }
    });
  }, { threshold: createThresholds() });

  observer.observe(card);
});

function createThresholds() {
  let thresholds = [];
  
  for(let i = 0; i < 1; i += 0.01) {
    thresholds.push(i);
  }
  
  return thresholds;
}
