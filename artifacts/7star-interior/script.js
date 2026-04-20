/* ============================================================
   7 Star Interior — Reusable Template Script
   Converted from React + Framer Motion to vanilla JavaScript
   ============================================================ */

(function () {
  'use strict';

  // ── DOM Ready ──
  document.addEventListener('DOMContentLoaded', function () {
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initContactForm();
    setFooterYear();
    loadBusinessData();
  });

  // ══════════════════════════════════════════════════════════
  // 1. NAVBAR SCROLL EFFECT
  // ══════════════════════════════════════════════════════════
  function initNavbar() {
    var navbar = document.getElementById('navbar');
    if (!navbar) return;

    function onScroll() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial check
  }

  // ══════════════════════════════════════════════════════════
  // 2. MOBILE MENU
  // ══════════════════════════════════════════════════════════
  var mobileMenuOpen = false;

  function initMobileMenu() {
    // Close menu on resize to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        closeMobileMenu();
      }
    });
  }

  window.toggleMobileMenu = function () {
    if (mobileMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  function openMobileMenu() {
    mobileMenuOpen = true;
    var menu = document.getElementById('mobile-menu');
    var menuIcon = document.getElementById('menu-icon');
    var closeIcon = document.getElementById('close-icon');
    if (menu) menu.classList.add('open');
    if (menuIcon) menuIcon.style.display = 'none';
    if (closeIcon) closeIcon.style.display = 'block';
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
    var menu = document.getElementById('mobile-menu');
    var menuIcon = document.getElementById('menu-icon');
    var closeIcon = document.getElementById('close-icon');
    if (menu) menu.classList.remove('open');
    if (menuIcon) menuIcon.style.display = 'block';
    if (closeIcon) closeIcon.style.display = 'none';
  }

  // ══════════════════════════════════════════════════════════
  // 3. SMOOTH SCROLL NAVIGATION
  // ══════════════════════════════════════════════════════════
  window.scrollToSection = function (id) {
    closeMobileMenu();
    var el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ══════════════════════════════════════════════════════════
  // 4. SCROLL ANIMATIONS (replaces Framer Motion)
  // ══════════════════════════════════════════════════════════
  function initScrollAnimations() {
    // Fade-in elements
    var fadeEls = document.querySelectorAll('.fade-in');
    // Stagger children
    var staggerContainers = document.querySelectorAll('.stagger-container');

    if (!('IntersectionObserver' in window)) {
      // Fallback: show everything immediately
      fadeEls.forEach(function (el) { el.classList.add('visible'); });
      staggerContainers.forEach(function (container) {
        container.querySelectorAll('.fade-in-child').forEach(function (child) {
          child.classList.add('visible');
        });
      });
      return;
    }

    // Observer for individual fade-in elements
    var fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '-80px 0px' });

    fadeEls.forEach(function (el) {
      fadeObserver.observe(el);
    });

    // Observer for stagger containers
    var staggerObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var children = entry.target.querySelectorAll('.fade-in-child');
          children.forEach(function (child, index) {
            setTimeout(function () {
              child.classList.add('visible');
            }, index * 100); // 100ms stagger
          });
          staggerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '-80px 0px' });

    staggerContainers.forEach(function (container) {
      staggerObserver.observe(container);
    });
  }

  // ══════════════════════════════════════════════════════════
  // 5. CONTACT FORM
  // ══════════════════════════════════════════════════════════
  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast('Request Submitted Successfully', 'Our team will contact you shortly to discuss your project.');
      form.reset();
    });
  }

  // ══════════════════════════════════════════════════════════
  // 6. TOAST NOTIFICATION
  // ══════════════════════════════════════════════════════════
  function showToast(title, message) {
    var container = document.getElementById('toast-container');
    if (!container) return;

    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<h4>' + escapeHtml(title) + '</h4><p>' + escapeHtml(message) + '</p>';
    container.appendChild(toast);

    // Remove after animation
    setTimeout(function () {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 3000);
  }

  // ══════════════════════════════════════════════════════════
  // 7. FOOTER YEAR
  // ══════════════════════════════════════════════════════════
  function setFooterYear() {
    var yearEl = document.getElementById('footer-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // ══════════════════════════════════════════════════════════
  // 8. BUSINESS DATA LOADER
  // ══════════════════════════════════════════════════════════
  function loadBusinessData() {
    fetch('data/business.json')
      .then(function (res) {
        if (!res.ok) throw new Error('Could not load business.json');
        return res.json();
      })
      .then(function (data) {
        applyBusinessData(data);
      })
      .catch(function (err) {
        // Silent fallback — HTML already has default content
        console.info('business.json not loaded, using inline defaults.', err.message);
      });
  }

  function applyBusinessData(data) {
    // ── Simple text bindings via data-bind attribute ──
    var bindings = document.querySelectorAll('[data-bind]');
    bindings.forEach(function (el) {
      var key = el.getAttribute('data-bind');
      var value = getNestedValue(data, key);
      if (value !== undefined && value !== null) {
        el.textContent = value;
      }
    });

    // ── Phone & WhatsApp links ──
    if (data.phone) {
      var phoneLink = document.getElementById('fab-phone');
      if (phoneLink) phoneLink.href = 'tel:' + data.phone;

      var heroCallBtn = document.getElementById('hero-call-btn');
      if (heroCallBtn) heroCallBtn.href = 'tel:' + data.phone;

      var contactPhone = document.getElementById('contact-phone');
      if (contactPhone) contactPhone.textContent = data.phone;

      var footerPhone = document.getElementById('footer-phone');
      if (footerPhone) footerPhone.textContent = data.phone;
    }

    if (data.whatsapp) {
      var waMsg = encodeURIComponent(data.whatsappMessage || 'Hi, I would like to discuss a project.');
      var waLink = document.getElementById('fab-whatsapp');
      if (waLink) waLink.href = 'https://wa.me/' + data.whatsapp + '?text=' + waMsg;

      var contactWa = document.getElementById('contact-whatsapp');
      if (contactWa) contactWa.textContent = '+' + data.whatsapp;
    }

    // ── Address ──
    if (data.address) {
      var contactAddr = document.getElementById('contact-address');
      if (contactAddr) contactAddr.textContent = data.address;

      var footerAddr = document.getElementById('footer-address');
      if (footerAddr) footerAddr.textContent = data.address;
    }

    // ── Email ──
    if (data.email) {
      var footerEmail = document.getElementById('footer-email');
      if (footerEmail) footerEmail.textContent = data.email;
    }

    // ── Footer description ──
    if (data.footerDescription) {
      var footerDesc = document.getElementById('footer-description');
      if (footerDesc) footerDesc.textContent = data.footerDescription;
    }

    // ── Page title ──
    if (data.businessName && data.city) {
      document.title = data.businessName + ' ' + data.city + ' — Premium Interior Design Studio';
    }
  }

  // ══════════════════════════════════════════════════════════
  // UTILITIES
  // ══════════════════════════════════════════════════════════
  function getNestedValue(obj, path) {
    return path.split('.').reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : undefined;
    }, obj);
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

})();
