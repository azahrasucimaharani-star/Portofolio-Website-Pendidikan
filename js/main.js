document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-button');
  const navList = document.querySelector('.nav-list');
  const brand = document.querySelector('.brand');
  const backTop = document.querySelector('.back-top');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  if (currentPage === 'index.html') brand?.setAttribute('aria-current', 'page');
  document.querySelectorAll('.nav-link').forEach((link) => {
    if (link.getAttribute('href') === currentPage) link.setAttribute('aria-current', 'page');
  });

  const setMenu = (open) => {
    if (!menuButton || !navList) return;
    navList.classList.toggle('open', open);
    header?.classList.toggle('menu-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Tutup menu utama' : 'Buka menu utama');
  };

  menuButton?.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  navList?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenu(false);
      menuButton?.focus();
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1088) setMenu(false);
  });

  const onScroll = () => {
    header?.classList.toggle('scrolled', window.scrollY > 24);
    backTop?.classList.toggle('show', window.scrollY > 520);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  backTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
  });

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

    document.querySelectorAll('[data-count]').forEach((element) => {
      const countObserver = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        const end = Number(element.dataset.count);
        if (reduceMotion.matches) {
          element.textContent = end.toLocaleString('id-ID');
          countObserver.disconnect();
          return;
        }
        let value = 0;
        const step = Math.max(1, Math.ceil(end / 35));
        const tick = () => {
          value = Math.min(end, value + step);
          element.textContent = value.toLocaleString('id-ID');
          if (value < end) window.requestAnimationFrame(tick);
        };
        tick();
        countObserver.disconnect();
      });
      countObserver.observe(element);
    });
  } else {
    document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
  }

  document.querySelectorAll('.contact-form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = form.querySelector('[role="alert"]');
      const invalidField = form.querySelector(':invalid');
      if (invalidField) {
        invalidField.setAttribute('aria-invalid', 'true');
        message.textContent = 'Lengkapi bidang yang masih kosong dan periksa kembali format email.';
        invalidField.focus();
        return;
      }
      message.textContent = 'Formulir belum terhubung ke layanan pengiriman. Hubungi info@undn.ac.id untuk mengirim pesan.';
    });
  });

  const galleryItems = document.querySelectorAll('.gallery-item');
  if (galleryItems.length) {
    const dialog = document.createElement('dialog');
    dialog.className = 'lightbox-dialog';
    dialog.setAttribute('aria-label', 'Pratinjau foto galeri');
    dialog.innerHTML = '<button class="lightbox-close" type="button" aria-label="Tutup pratinjau">Tutup</button><img alt="">';
    document.body.append(dialog);
    const preview = dialog.querySelector('img');
    const closeButton = dialog.querySelector('.lightbox-close');

    galleryItems.forEach((item) => {
      item.addEventListener('click', () => {
        const source = item.querySelector('img');
        preview.src = source.currentSrc || source.src;
        preview.alt = source.alt;
        dialog.showModal();
        closeButton.focus();
      });
    });

    closeButton.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) dialog.close();
    });
  }
});
