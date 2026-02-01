
document.addEventListener('DOMContentLoaded', () => {
    // Copy Address Functionality
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(btn => {
        btn.addEventListener('click', async () => {
            const address = btn.getAttribute('data-address');

            try {
                await navigator.clipboard.writeText(address);

                // Visual feedback
                const originalHtml = btn.innerHTML;

                // Remove existing icon and text, add checkmark
                btn.innerHTML = '<span>✓</span> Copied!';
                btn.classList.add('btn-success');
                btn.classList.remove('btn-light');

                setTimeout(() => {
                    btn.innerHTML = originalHtml;
                    btn.classList.remove('btn-success');
                    btn.classList.add('btn-light');
                }, 2000);

            } catch (err) {
                console.error('Failed to copy text: ', err);
                alert('Failed to copy address. Please copy manually.');
            }
        });
    });

    // Mobile Menu is handled by Bootstrap (collapse.js), so we don't need custom toggle code here.

    // Smooth scroll is also handled by CSS scroll-behavior usually, or Bootstrap scrollspy. 
    // However, for explicit anchor clicks to scroll smoothly if scroll-behavior: smooth isn't enough or weird with nav height:
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Account for fixed navbar height
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Copy Address Functionality
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(btn => {
        btn.addEventListener('click', async () => {
            const address = btn.getAttribute('data-address');

            try {
                await navigator.clipboard.writeText(address);

                // Visual feedback
                const originalHtml = btn.innerHTML;

                // Remove existing icon and text, add checkmark
                btn.innerHTML = '<span>✓</span> Copied!';
                btn.classList.add('btn-success');
                btn.classList.remove('btn-light');

                setTimeout(() => {
                    btn.innerHTML = originalHtml;
                    btn.classList.remove('btn-success');
                    btn.classList.add('btn-light');
                }, 2000);

            } catch (err) {
                console.error('Failed to copy text: ', err);
                alert('Failed to copy address. Please copy manually.');
            }
        });
    });

    // Mobile Menu is handled by Bootstrap (collapse.js), so we don't need custom toggle code here.

    // Smooth scroll is also handled by CSS scroll-behavior usually, or Bootstrap scrollspy.
    // However, for explicit anchor clicks to scroll smoothly if scroll-behavior: smooth isn't enough or weird with nav height:
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Account for fixed navbar height
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                    bsCollapse.hide();
                }
            }
        });
    });
});

