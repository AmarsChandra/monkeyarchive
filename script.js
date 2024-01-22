  function getPath() {
    var numImages = 2094; //update this number every time images are added
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
