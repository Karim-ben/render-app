const hEl=document.querySelector('h1');

hEl.addEventListener('click', function (e) {
    e.target.classList.toggle('active');
});