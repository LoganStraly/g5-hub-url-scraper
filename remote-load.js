javascript:(function() {
    var rawFileUrl = 'https://raw.githubusercontent.com/LoganStraly/g5-hub-url-scraper/refs/heads/main/code.js';
    fetch(rawFileUrl)
        .then(response => response.text())
        .then(code => {
            eval(code);
        })
        .catch(error => console.error('Error fetching code:', error));
})();
