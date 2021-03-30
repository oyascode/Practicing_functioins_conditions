const images = document.querySelectorAll('img');

const sizes = {
  showcase: "100vw",
  reason: "(max-width: 799px) 100vw, 372px",
  feature: "(max-width: 799px) 100vw, 558px",
  story: "(max-width: 799px) 100vw, 670px",
}


//   console.log(imageSrc);
// }

// Practice for each instead to achieve same result

function makeSrcSet(imageSrc) {
  let markUp = [];
  let width = 400;

  for (let index = 0; index < 5; index++) {
    markUp[index] = imageSrc + "-" + width + ".jpg " + width + "w";
    width += 400;
  }

  return markUp.join();
}
// images.forEach(image => {
//   let imageSrc = image.getAttribute('src');
//   imageSrc = imageSrc.slice(0, -8);
for (let index = 0; index < images.length; index++) {
  let imageSrc = images[index].getAttribute('src');
  imageSrc = imageSrc.slice(0, -8);
  let srcSet = makeSrcSet(imageSrc);
  images[index].setAttribute("srcSet", srcSet);

  let dataType = images[index].getAttribute('data-type');
  let browserSizes = sizes[dataType];
  images[index].setAttribute("sizes", browserSizes);
  
}