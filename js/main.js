document.addEventListener('DOMContentLoaded', () => {
  // Theme: follow the device setting by default, then remember an explicit choice.
  const root = document.documentElement;
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const themeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const themeKey = 'recbay-theme';

  const readStoredTheme = () => {
    try {
      const value = localStorage.getItem(themeKey);
      return value === 'light' || value === 'dark' ? value : null;
    } catch {
      return null;
    }
  };

  const systemTheme = () => themeQuery.matches ? 'dark' : 'light';

  const syncThemeUi = theme => {
    if (themeToggle) {
      const isDark = theme === 'dark';
      themeToggle.hidden = false;
      themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
      themeToggle.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    }
    if (themeMeta) themeMeta.setAttribute('content', theme === 'dark' ? '#101010' : '#f7f4ec');
  };

  const applyTheme = (theme, persist = false) => {
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;
    if (persist) {
      try { localStorage.setItem(themeKey, theme); } catch {}
    }
    syncThemeUi(theme);
  };

  applyTheme(readStoredTheme() || systemTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
    });

    const handleSystemTheme = event => {
      if (!readStoredTheme()) applyTheme(event.matches ? 'dark' : 'light');
    };
    if (typeof themeQuery.addEventListener === 'function') {
      themeQuery.addEventListener('change', handleSystemTheme);
    } else if (typeof themeQuery.addListener === 'function') {
      themeQuery.addListener(handleSystemTheme);
    }
  }

  // Start muted loops explicitly — some browsers defer attribute autoplay.
  // Respect reduced-motion and data-saving preferences: hold the poster instead.
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const saveData = navigator.connection && navigator.connection.saveData;
  document.querySelectorAll('video[autoplay]').forEach(video => {
    if (reduceMotion || saveData) {
      video.autoplay = false;
      video.pause();
      return;
    }
    video.muted = true;
    const start = () => {
      const played = video.play();
      if (played && typeof played.catch === 'function') played.catch(() => {});
    };
    if (video.readyState >= 2) start();
    else video.addEventListener('canplay', start, { once: true });
  });

  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('is-open', !isOpen);
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation');
        nav.classList.remove('is-open');
      });
    });
  }

  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const filterButtons = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-category]');
  filterButtons.forEach(button => {
    button.setAttribute('aria-pressed', button.classList.contains('active') ? 'true' : 'false');
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach(item => {
        const isActive = item === button;
        item.classList.toggle('active', isActive);
        item.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });
      cards.forEach(card => {
        card.hidden = filter !== 'all' && card.dataset.category !== filter;
      });
    });
  });

  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-hint') || document.querySelector('#form-status');
  if (form) {
    const showStatus = (message, type = 'default') => {
      if (!status) return;
      status.textContent = message;
      status.classList.remove('is-success', 'is-error');
      if (type === 'success') status.classList.add('is-success');
      if (type === 'error') status.classList.add('is-error');
    };
    const submitButton = form.querySelector('.form-submit');
    const originalButtonLabel = submitButton ? submitButton.innerHTML : '';

    form.addEventListener('submit', async event => {
      event.preventDefault();
      showStatus('');
      submitButton.disabled = true;

      // Honeypot: any value means a bot filled the hidden field — reject silently.
      const honeypot = form.elements['botcheck'];
      if (honeypot && honeypot.value.trim() !== '') {
        submitButton.disabled = false;
        return;
      }

      // Privacy consent is required.
      const consent = form.elements['privacy-consent'];
      if (consent && !consent.checked) {
        showStatus('Please accept the privacy consent before sending.');
        consent.focus();
        submitButton.disabled = false;
        return;
      }

      if (!form.checkValidity()) {
        form.reportValidity();
        submitButton.disabled = false;
        return;
      }

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: new FormData(form)
        });

        const result = await response.json().catch(() => null);
        if (response.ok && (!result || result.success !== false)) {
          form.reset();
          showStatus('Thank you — your inquiry has been sent. We’ll respond shortly.', 'success');
        } else {
          showStatus('The inquiry could not be sent. Please try again or email us directly.', 'error');
        }
      } catch {
        showStatus('The inquiry could not be sent. Please try again or email us directly.', 'error');
      } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonLabel;
      }
    });
  }

  // About hero — one-time entrance + ambient drift
  const aboutHero = document.querySelector('.about-hero');
  if (aboutHero) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const saveData = navigator.connection && navigator.connection.saveData;

    if (prefersReducedMotion || saveData) {
      aboutHero.classList.add('about-hero--static');
    } else {
      aboutHero.classList.add('about-hero--animate');
      aboutHero.classList.add('about-hero--drift');
    }
  }

  // Showreel — poster-first, click-to-play. The video is only requested on demand.
  document.querySelectorAll('[data-reel]').forEach(reel => {
    const poster = reel.querySelector('[data-reel-poster]');
    const playButton = reel.querySelector('[data-reel-play]');
    const video = reel.querySelector('[data-reel-video]');
    if (!poster || !playButton || !video) return;

    const showPoster = () => {
      video.hidden = true;
      poster.hidden = false;
    };

    playButton.addEventListener('click', () => {
      poster.hidden = true;
      video.hidden = false;
      const played = video.play();
      if (played && typeof played.catch === 'function') {
        played.catch(() => showPoster());
      }
    });

    // If no source can play, fall back to the poster instead of a dead frame.
    video.addEventListener('error', showPoster);
  });

  // Keep no-js fallbacks active until every enhancement has initialized.
  document.documentElement.classList.remove('no-js');
});
