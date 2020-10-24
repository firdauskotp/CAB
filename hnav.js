const navSlide = () => {
    const hamicon = document.querySelector('.hamicon');
    const nav = document.querySelector('.nlink');

    hamicon.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        console.log('test')
    });
}

navSlide();