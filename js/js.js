let headerSlogan = document.querySelector('.header_image__slogan'),
    h1 = headerSlogan.querySelector('h1'),
    p = headerSlogan.querySelector('p'),
    width = document.body.clientWidth;

h1.style.fontSize = width / 10 + 'px';
p.style.fontSize = width / 55 + 'px';

// h1.style.color = 'blue';