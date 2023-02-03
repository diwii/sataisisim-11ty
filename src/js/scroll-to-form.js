function scrollToForm() {
    const serviceButtons = document.querySelectorAll('.service-request-button');

    for (let button of serviceButtons) {
        button.addEventListener('click', handleScrollToForm);
    }

    function handleScrollToForm() {
        if (!contactForm) {
            contactForm = document.getElementById('contact-form');
        }

        if (isInViewport(contactForm)) {
            contactForm.classList.add('outlined');

            setTimeout(() => {
                contactForm.classList.remove('outlined');
            }, 500)
        }

        contactForm.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
        });
    }
}

scrollToForm();


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
