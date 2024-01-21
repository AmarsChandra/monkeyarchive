  function getPath() {
    var numImages = 93; //this has to be the number of images we have, apparently can't just count idk why. So we need to change this whenever we add images.
    var pathNum = Math.floor(Math.random() * numImages) + 1;
    return `images/monkey${pathNum}.jpg`;
  }

  function appendImage() {
    var monkeyImage = document.createElement('img');
    monkeyImage.src = getPath();
    monkeyImage.classList.add('monkeyImage');
    monkeyContainer.appendChild(monkeyImage);
  }

  function handleScroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      appendImage();
    }
  }

  for (let i = 0; i < 20; i++) { 
    //starts you off with 20 images when page loads before you scroll
    appendImage();
  }

  window.addEventListener('scroll', handleScroll);