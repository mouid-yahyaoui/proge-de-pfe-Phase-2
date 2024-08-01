function changeImage(src) {
    document.getElementById('mainImage').src = src;
}
const havarElements = document.querySelectorAll('.havar');
havarElements.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('active');
  });
});