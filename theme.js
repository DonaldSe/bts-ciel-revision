// BTS CIEL — Theme manager (dark/light)
(function(){
  const KEY = 'bts-ciel-theme';
  const root = document.documentElement;
  
  // Load saved theme or default to light
  function applyTheme(t){
    root.setAttribute('data-theme', t);
    try { localStorage.setItem(KEY, t); } catch(e){}
  }
  
  function getTheme(){
    try {
      return localStorage.getItem(KEY) || 'light';
    } catch(e){
      return 'light';
    }
  }
  
  // Apply on load (before paint to avoid flash)
  applyTheme(getTheme());
  
  // Expose toggle function
  window.toggleTheme = function(){
    const cur = root.getAttribute('data-theme') || 'light';
    applyTheme(cur === 'dark' ? 'light' : 'dark');
  };
})();
