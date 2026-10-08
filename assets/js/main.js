/**
 * WINCHESTER PLACE MEN'S HAIRSTYLING
 * Main JavaScript Interactions & Real-Time Enhancements
 */

import { BUSINESS_DATA } from './business-data.js';

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initHoursHighlight();
  initActiveNavSpy();
  initCopyAddress();
  initCallAndInquiryInteractions();
});

/**
 * Enhanced Desktop & Mobile Call / Inquiry Handler
 * Provides seamless feedback on computer/desktop browsers where tel: protocol
 * might not have a configured handler, ensuring 100% of user clicks result in
 * immediate feedback, copy-to-clipboard, or a clear phone modal dialog.
 */
function initCallAndInquiryInteractions() {
  const modal = document.querySelector('#call-dialog-backdrop');
  const closeBtn = document.querySelector('#btn-close-call-dialog');
  const modalTitle = document.querySelector('#call-modal-title');
  const modalSubtitle = document.querySelector('#call-modal-service-subtitle');
  const copyBtn = document.querySelector('#modal-copy-btn');
  const copyBtnText = document.querySelector('#modal-copy-btn-text');

  // Detect if user is on a mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (window.innerWidth <= 768 && ('ontouchstart' in window));

  function showToast(message) {
    const toast = document.querySelector('#quick-toast');
    if (!toast) return;
    toast.textContent = message;
    toast.style.display = 'block';
    toast.classList.add('is-visible');
    setTimeout(() => {
      toast.classList.remove('is-visible');
      setTimeout(() => { toast.style.display = 'none'; }, 300);
    }, 3000);
  }

  function openCallDialog(serviceName = null) {
    if (!modal) return;
    if (serviceName) {
      if (modalTitle) modalTitle.textContent = `Inquire About ${serviceName}`;
      if (modalSubtitle) modalSubtitle.textContent = `Call 905-826-8622 for current ${serviceName.toLowerCase()} pricing and chair availability today.`;
    } else {
      if (modalTitle) modalTitle.textContent = 'Call Winchester Place';
      if (modalSubtitle) modalSubtitle.textContent = 'Barbershop inquiries, current wait times & haircuts.';
    }
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeCallDialog() {
    if (!modal) return;
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeCallDialog);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeCallDialog();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.style.display === 'flex') {
      closeCallDialog();
    }
  });

  // Modal Copy Button
  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('905-826-8622');
        if (copyBtnText) copyBtnText.textContent = 'Copied to Clipboard!';
        showToast('Phone number copied: 905-826-8622');
        setTimeout(() => {
          if (copyBtnText) copyBtnText.textContent = 'Copy 905-826-8622';
        }, 2500);
      } catch (err) {
        showToast('Call 905-826-8622');
      }
    });
  }

  // Intercept "Inquire" buttons on service cards
  const serviceInquireLinks = document.querySelectorAll('.service-call-link');
  serviceInquireLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const card = link.closest('.service-card');
      const serviceTitle = card ? card.querySelector('.service-name')?.textContent?.trim() : 'Service';
      
      if (!isMobile) {
        // On desktop, open modal dialog with context for the selected service
        e.preventDefault();
        openCallDialog(serviceTitle);
      }
    });
  });

  // Intercept desktop clicks on all other tel: links
  const allTelLinks = document.querySelectorAll('a[href^="tel:"]');
  allTelLinks.forEach(link => {
    // Avoid double attaching to service-call-link
    if (link.classList.contains('service-call-link')) return;

    link.addEventListener('click', (e) => {
      if (!isMobile) {
        // On computer, show the direct phone modal with copy and call options
        e.preventDefault();
        openCallDialog();
      }
    });
  });
}

/**
 * Mobile Navigation Drawer Toggle & Accessibility
 */
function initMobileNavigation() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !drawer) return;

  function toggleMenu(show) {
    const isExpanded = show !== undefined ? show : toggleBtn.getAttribute('aria-expanded') !== 'true';
    toggleBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    drawer.classList.toggle('is-open', isExpanded);
    
    // Toggle menu icon
    const iconOpen = toggleBtn.querySelector('.icon-hamburger');
    const iconClose = toggleBtn.querySelector('.icon-close');
    if (iconOpen && iconClose) {
      iconOpen.style.display = isExpanded ? 'none' : 'block';
      iconClose.style.display = isExpanded ? 'block' : 'none';
    }
  }

  toggleBtn.addEventListener('click', () => toggleMenu());

  // Close when clicking any nav link inside drawer
  navLinks.forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });

  // Close when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      toggleMenu(false);
      toggleBtn.focus();
    }
  });

  // Close if clicking outside header
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('is-open')) {
      const header = document.querySelector('.site-header');
      if (header && !header.contains(e.target)) {
        toggleMenu(false);
      }
    }
  });
}

/**
 * Highlights today's day in the Hours schedule table
 * and updates the live status pill based on Eastern Time (Mississauga)
 */
function initHoursHighlight() {
  try {
    // Current time in America/Toronto timezone
    const now = new Date();
    const estDateString = now.toLocaleString('en-US', { timeZone: 'America/Toronto' });
    const estDate = new Date(estDateString);
    
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayName = dayNames[estDate.getDay()];
    const currentHours = estDate.getHours();
    const currentMinutes = estDate.getMinutes();
    const currentTimeVal = currentHours + (currentMinutes / 60);

    // Highlight row in table
    const rows = document.querySelectorAll('.hours-row[data-day]');
    rows.forEach(row => {
      const rowDay = row.getAttribute('data-day');
      if (rowDay === currentDayName) {
        row.classList.add('is-today');
        const dayLabel = row.querySelector('.hours-day');
        if (dayLabel && !dayLabel.querySelector('.today-tag')) {
          const tag = document.createElement('span');
          tag.className = 'today-tag';
          tag.textContent = 'Today';
          dayLabel.appendChild(tag);
        }
      }
    });

    // Update status badge if element exists
    const statusPill = document.querySelector('#live-status-pill');
    if (!statusPill) return;

    // Confirmed schedule logic:
    // Tue-Fri: 9:00 AM - 7:00 PM (9.0 to 19.0)
    // Sat: 8:00 AM - 5:00 PM (8.0 to 17.0)
    // Sun & Mon: Closed
    let statusText = 'Closed Today';
    let statusClass = 'closed';

    if (currentDayName === 'Tuesday' || currentDayName === 'Wednesday' || currentDayName === 'Thursday' || currentDayName === 'Friday') {
      if (currentTimeVal >= 9.0 && currentTimeVal < 19.0) {
        statusText = 'Open Today until 7:00 PM';
        statusClass = 'open';
      } else {
        statusText = 'Closed for the day';
        statusClass = 'closed';
      }
    } else if (currentDayName === 'Saturday') {
      if (currentTimeVal >= 8.0 && currentTimeVal < 17.0) {
        statusText = 'Open Today until 5:00 PM';
        statusClass = 'open';
      } else {
        statusText = 'Closed for the day';
        statusClass = 'closed';
      }
    } else {
      // Monday or Sunday
      statusText = 'Closed Today (Walk-ins Tue–Sat)';
      statusClass = 'closed';
    }

    statusPill.className = `live-status-pill ${statusClass}`;
    statusPill.innerHTML = `<span class="pulse-dot"></span><span>${statusText}</span>`;
  } catch (err) {
    console.warn('Could not compute local Eastern timezone hours:', err);
  }
}

/**
 * Active navigation link on scroll
 */
function initActiveNavSpy() {
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.desktop-nav .nav-link');

  if (!sections.length || !desktopLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        desktopLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  });

  sections.forEach(sec => observer.observe(sec));
}

/**
 * Address copy helper
 */
function initCopyAddress() {
  const copyBtn = document.querySelector('#btn-copy-address');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', async () => {
    const textToCopy = BUSINESS_DATA.location.fullAddress;
    try {
      await navigator.clipboard.writeText(textToCopy);
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = `<span>Address Copied!</span>`;
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
      }, 2500);
    } catch (e) {
      console.warn('Clipboard write error', e);
    }
  });
}
