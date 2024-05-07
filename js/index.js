function init() {
    import('./common.header-menu.partial.js');
    import('./common.header-clock.js');
    import('./index.testimonials.js');
    import('./index.section-benefits.partial.js');
    import('./about_us.create_wines.js');
    import('./modal-window.js');
}

const totalPartials = document.querySelectorAll('[hx-trigger="load"], [data-hx-trigger="load"]').length;
let loadedPartialsCount = 0;

document.body.addEventListener('htmx:afterOnLoad', () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});