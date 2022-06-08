let quote = document.querySelector('.quote'),
  say = document.querySelector('.say');
const API = 'https://raw.githubusercontent.com/Ay77aga/random-Quote/cf6e56a5ece189a79b45bb03b8b824d06d34eabc/quotes.json';
// get data from json file
fetch(API)
  .then(rep => rep.json())
  .then(function(data) {
    // console.log(data);

    // Get random number
    let random = Math.floor(Math.random() * (data.length - 1));

    // set quote in div
    quote.innerHTML = data[random].quote;
    say.textContent = data[random].say;

    // randomly btn
    document.querySelector('button').onclick = function() {
      quote.innerHTML = '';
      quote.classList.remove('active');
      this.classList.remove('anim');
      setTimeout(() => {
        this.classList.add('anim');
        quote.classList.add('active');
      }, 0);
      // make random number
      random = Math.floor(Math.random() * (data.length - 1));
      quote.innerHTML = data[random].quote;
      say.textContent = data[random].say;
    }
  });