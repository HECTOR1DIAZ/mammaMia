
var rating = 1;

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }


document.querySelector(".btn-star").addEventListener('click', function(){
document.querySelector(".recipe-rating").textContent = rating;
rating++;


});


