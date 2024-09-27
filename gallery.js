document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery ul');
    const items = document.querySelectorAll('.gallery ul li');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.classList.remove('inactive', 'prev', 'next');
            if (i === index) {
                item.classList.remove('inactive');
            } else if (i === (index - 1 + items.length) % items.length) {
                item.classList.add('prev');
            } else if (i === (index + 1) % items.length) {
                item.classList.add('next');
            } else {
                item.classList.add('inactive');
            }
        });
    }

    function handleScroll(event) {
        if (event.deltaY > 0) {
            currentIndex = (currentIndex + 1) % items.length;
        } else {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
        }
        showItem(currentIndex);
    }

    window.addEventListener('wheel', handleScroll);
    showItem(currentIndex); // Initiales Setzen des ersten Elements
});