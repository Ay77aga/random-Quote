let quote = document.querySelector('.quote'),
  say = document.querySelector('.say');
// get data from json file
fetch('https://type.fit/api/quotes')
  .then(rep => rep.json())
  .then(function(data) {
    console.log(data);

    // Get random number
    let random = Math.floor(Math.random() * (data.length - 1));

    // set quote in div
    quote.innerHTML = data[random].text;
    say.textContent = data[random].author;

    // randomly btn
    document.querySelector('button').onclick = function() {
      quote.innerHTML = '';
      this.classList.remove('anim');
      setTimeout(() => this.classList.add('anim'), 0);
      // make random number
      random = Math.floor(Math.random() * (data.length - 1));
      quote.innerHTML = data[random].text;
      say.textContent = data[random].author;
    }
  });