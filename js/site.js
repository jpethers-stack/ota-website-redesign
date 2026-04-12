/* Old Town Academy — site-wide JS (vanilla, no dependencies) */

(function () {
  'use strict';

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector('.nav-toggle');
  var panel  = document.querySelector('.nav-panel');
  if (!toggle || !panel) return;

  toggle.addEventListener('click', function () {
    var open = panel.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
  });

  /* Close on Escape */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && panel.classList.contains('open')) {
      panel.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
      document.body.style.overflow = '';
      toggle.focus();
    }
  });

  /* ---- Mobile dropdown accordions ---- */
  var items = panel.querySelectorAll('.nav-item > a');
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function (e) {
      var li = this.parentElement;
      if (li.querySelector('.dropdown')) {
        e.preventDefault();
        li.classList.toggle('open');
      }
    });
  }
})();
