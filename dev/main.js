document.addEventListener('DOMContentLoaded', function() {

  /**
   * Resize Browser Window
   */

  window.addEventListener('resize', () => {
    document.querySelectorAll('.opened')
      .forEach(el => {
        el.classList.remove('opened')
      });
  });

  /**
   * Example
   */

  // (function() {
  //   const example = document.querySelector('.example');
  //
  //   if (!example) return;
  //   new Example(opt);
  // })();
});