async function getDogPhoto() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await res.json();
  console.log(data);
}

getDogPhoto();
