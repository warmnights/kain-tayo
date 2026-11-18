/* Silangan - mobile menu (hamburger) toggle.
   Opens/closes the navbar on small screens by adding or removing
   the "is-open" class on .navbar. */
   
(function () {
    var nav = document.querySelector('.navbar');
    var toggle = nav ? nav.querySelector('.navbar-toggle') : null;

    if (!nav || !toggle) {
        return;
    }

    function setOpen(open) {
        nav.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }

    // Button press: open or close
    toggle.addEventListener('click', function () {
        setOpen(!nav.classList.contains('is-open'));
    });

    // Escape key closes the menu and returns focus to the button
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && nav.classList.contains('is-open')) {
            setOpen(false);
            toggle.focus();
        }
    });

    // Clicking outside the navbar closes the menu
    document.addEventListener('click', function (event) {
        if (!nav.contains(event.target)) {
            setOpen(false);
        }
    });

    // Clicking a link closes the menu (useful for same-page links)
    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            setOpen(false);
        });
    });

    // Growing the window to desktop size resets the menu
    window.matchMedia('(min-width: 1081px)').addEventListener('change', function (event) {
        if (event.matches) {
            setOpen(false);
        }
    });
})();