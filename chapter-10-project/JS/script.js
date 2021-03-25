const images = document.querySelectorAll('img');

for (let index = 0; index < images.length; index++) {
  let imageSrc = images[index].getAttribute('src');
  imageSrc = imageSrc.slice(0, -8);
  console.log(imageSrc)
}