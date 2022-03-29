let quote = document.querySelector('.quote'),
  say = document.querySelector('.say');
// get data from json file
const getson = fetch('./quotes.json')
  .then(rep => rep.json())
  .then(function(data) {
    // Get random number
    let random = Math.floor(Math.random() * (data.length - 1));
    // set quote in div
    quote.innerHTML = data[random].quote;
    say.textContent = data[random].say;
    // randomly btn
    document.querySelector('button').onclick = function() {
      this.classList.remove('anim');
      quote.classList.remove('op');
      // make random number
      random = Math.floor(Math.random() * (data.length - 1));
      quote.innerHTML = data[random].quote;
      say.textContent = data[random].say;
      // toggle animation
      setTimeout(() => {
        this.classList.add('anim');;
        quote.classList.add('op');
      }, 0);
    }
  });