  // اختار عنصر النافبار القابل للفتح
  const navbarCollapse = document.querySelector('.navbar-collapse');

  window.addEventListener('scroll', () => {
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse && navbarCollapse.classList.contains('show')) {
      bsCollapse.hide(); // ← يقفل النافبار لما يحصل scroll
    }
  });