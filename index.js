const words = new URLSearchParams(window.location.search); 
const rating= words.get('rating');
const element = document.getElementById("rating").innerHTML = rating;
