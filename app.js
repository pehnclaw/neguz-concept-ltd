/* ==========================================================================
   NEGUZ CONCEPT LTD - Interactive Logic & State Management
   Project: High-End Dual-Themed Interior Architecture & Fit-Out Platform
   Location: Abuja, Nigeria
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initMobileMenu();
  initSplitSliders();
  initLeadWizard();
  initWhatsAppDirectLinks();
  initPortfolioFilters();
});

/* --------------------------------------------------------------------------
   1. Theme Management (Mode A: Dark Luxury / Mode B: Minimal Editorial)
   -------------------------------------------------------------------------- */
function initThemeToggle() {
  const toggleBtns = document.querySelectorAll('#themeToggleBtn, #mobileThemeToggleBtn');

  // Load saved theme or default to 'dark'
  const savedTheme = localStorage.getItem('neguz_theme') || 'dark';
  applyTheme(savedTheme);

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('neguz_theme', theme);

    const icons = document.querySelectorAll('.theme-icon');
    const headerTexts = document.querySelectorAll('.theme-text');
    const mobileTexts = document.querySelectorAll('.theme-text-mobile');

    icons.forEach(icon => {
      if (theme === 'dark') {
        icon.innerHTML = `<svg viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
      } else {
        icon.innerHTML = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
      }
    });

    headerTexts.forEach(txt => {
      txt.textContent = theme === 'dark' ? 'Dark Luxury' : 'Minimal Editorial';
    });

    mobileTexts.forEach(txt => {
      txt.textContent = theme === 'dark' ? 'Switch to Minimal Theme' : 'Switch to Dark Luxury';
    });
  }
}

/* --------------------------------------------------------------------------
   2. Mobile Menu Drawer Toggle & Smooth Scroll Routing
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileNavDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-drawer-consult-btn');

  if (!mobileBtn || !drawer) return;

  mobileBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    drawer.classList.toggle('open');
    const isOpen = drawer.classList.contains('open');
    mobileBtn.innerHTML = isOpen 
      ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
      : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.includes('#') && targetId.split('#')[1].length > 0) {
        const hash = '#' + targetId.split('#')[1];
        const targetEl = document.querySelector(hash);
        if (targetEl) {
          e.preventDefault();
          drawer.classList.remove('open');
          mobileBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

/* --------------------------------------------------------------------------
   3. Before & After Interactive Split Sliders (Mouse & Touch Responsive)
   -------------------------------------------------------------------------- */
function initSplitSliders() {
  const sliders = document.querySelectorAll('.split-slider-wrapper');

  sliders.forEach(slider => {
    const beforeImg = slider.querySelector('.slider-img-before');
    const handle = slider.querySelector('.slider-handle');
    let isDragging = false;

    if (!beforeImg || !handle) return;

    const onMove = (clientX) => {
      if (!isDragging) return;
      const rect = slider.getBoundingClientRect();
      let x = clientX - rect.left;
      if (x < 0) x = 0;
      if (x > rect.width) x = rect.width;
      const percentage = (x / rect.width) * 100;
      beforeImg.style.width = `${percentage}%`;
      handle.style.left = `${percentage}%`;
    };

    handle.addEventListener('mousedown', () => { isDragging = true; });
    window.addEventListener('mouseup', () => { isDragging = false; });
    window.addEventListener('mousemove', (e) => onMove(e.clientX));

    handle.addEventListener('touchstart', () => { isDragging = true; }, { passive: true });
    window.addEventListener('touchend', () => { isDragging = false; });
    window.addEventListener('touchmove', (e) => {
      if (isDragging && e.touches.length > 0) {
        onMove(e.touches[0].clientX);
      }
    }, { passive: true });
  });
}

/* --------------------------------------------------------------------------
   4. Portfolio Gallery Filtering Logic
   -------------------------------------------------------------------------- */
function initPortfolioFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-item-card');

  if (filterBtns.length === 0 || portfolioCards.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.dataset.filter;

      portfolioCards.forEach(card => {
        if (filterValue === 'all' || card.dataset.category === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. Interactive Lead Qualification Wizard Logic
   -------------------------------------------------------------------------- */
function initLeadWizard() {
  let currentStep = 1;
  const totalSteps = 4;
  
  const leadData = {
    space: '',
    requirements: [],
    location: '',
    phase: ''
  };

  const prevBtn = document.getElementById('wizardPrevBtn');
  const nextBtn = document.getElementById('wizardNextBtn');
  const progressSteps = document.querySelectorAll('.progress-step');

  if (!nextBtn) return;

  document.querySelectorAll('.option-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const input = card.querySelector('input');
      if (!input) return;

      const step = card.closest('.wizard-step-content').dataset.step;

      if (input.type === 'radio') {
        const groupCards = card.closest('.options-grid').querySelectorAll('.option-card');
        groupCards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        input.checked = true;

        if (step === '1') leadData.space = input.value;
        if (step === '3') leadData.location = input.value;
        if (step === '4') leadData.phase = input.value;
      } else if (input.type === 'checkbox') {
        if (e.target !== input) {
          input.checked = !input.checked;
        }
        card.classList.toggle('selected', input.checked);
        
        const selectedChecks = Array.from(card.closest('.options-grid').querySelectorAll('input[type="checkbox"]:checked')).map(i => i.value);
        leadData.requirements = selectedChecks;
      }
    });
  });

  nextBtn.addEventListener('click', () => {
    if (currentStep < totalSteps) {
      currentStep++;
      updateWizardUI();
    } else {
      submitLeadToWhatsApp(leadData);
    }
  });

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateWizardUI();
      }
    });
  }

  function updateWizardUI() {
    document.querySelectorAll('.wizard-step-content').forEach(step => {
      step.classList.remove('active');
    });
    const activeContent = document.querySelector(`.wizard-step-content[data-step="${currentStep}"]`);
    if (activeContent) activeContent.classList.add('active');

    progressSteps.forEach((pStep, index) => {
      pStep.classList.toggle('active', index < currentStep);
    });

    if (prevBtn) prevBtn.style.visibility = currentStep === 1 ? 'hidden' : 'visible';
    nextBtn.textContent = currentStep === totalSteps ? 'Consult via WhatsApp' : 'Next Step';
  }
}

function submitLeadToWhatsApp(data) {
  const phone = '2348115251461';
  const space = data.space || 'Not specified';
  const reqs = data.requirements.length > 0 ? data.requirements.join(', ') : 'General fit-out';
  const location = data.location || 'Abuja';
  const phase = data.phase || 'Initial planning';

  const message = `Hello Neguz Concept Ltd, I have completed your online project assessment:%0A%0A` +
    `• Space Typology: ${encodeURIComponent(space)}%0A` +
    `• Services Needed: ${encodeURIComponent(reqs)}%0A` +
    `• Location: ${encodeURIComponent(location)}%0A` +
    `• Project Phase: ${encodeURIComponent(phase)}%0A%0A` +
    `I would like to schedule a formal architectural consultation.`;

  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

/* --------------------------------------------------------------------------
   6. Direct Service WhatsApp Routing Matrix
   -------------------------------------------------------------------------- */
function initWhatsAppDirectLinks() {
  const phone = '2348115251461';

  const routeMap = {
    'hero-wa': 'Hello%20Neguz%20Concept%20Ltd%2C%20I%20viewed%20your%20website%20and%20would%20like%20to%20consult%20on%20an%20interior%20finishing%20project%20in%20Abuja.',
    'pop-wa': 'Hello%20Neguz%20Concept%2C%20I%20am%20interested%20in%20Advanced%20POP%20Ceiling%20Engineering%20%26%20Screeding%20services.',
    'console-wa': 'Hello%20Neguz%20Concept%2C%20I%20want%20to%20order%20a%20Custom%20Wall%20Panel%20%26%20TV%20Console%20design%20for%20my%20living%20room.',
    'cinema-wa': 'Hello%20Neguz%20Concept%2C%20I%20am%20interested%20in%20setting%20up%20a%20Bespoke%20Home%20Cinema.%20Kindly%20provide%20pricing%20tiers.'
  };

  Object.keys(routeMap).forEach(id => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(`https://wa.me/${phone}?text=${routeMap[id]}`, '_blank');
      });
    }
  });
}
