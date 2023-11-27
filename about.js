// 引入header
fetch('./Header.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('header').innerHTML = html;
    });

// 引入AboutUs-Banner
fetch('./AboutUs-Banner.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('AboutUs-Banner').innerHTML = html;
    });

// 引入Container
fetch('./Container.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('Container').innerHTML = html;
    });
// 引入footer
fetch('./Footer.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('footer').innerHTML = html;
    });