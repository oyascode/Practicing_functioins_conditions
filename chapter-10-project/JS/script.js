const images = document.querySelectorAll('img');

// for (let index = 0; index < images.length; index++) {
//   let imageSrc = images[index].getAttribute('src');
//   imageSrc = imageSrc.slice(0, -8);
//   console.log(imageSrc);
// }

// Practice for each instead to achieve same result

images.forEach(image => {
  let imageSrc = image.getAttribute('src');
  imageSrc = imageSrc.slice(0, -8)
  console.log(imageSrc);

  let dataType = image.getAttribute('data-type');
  console.log(dataType)
})