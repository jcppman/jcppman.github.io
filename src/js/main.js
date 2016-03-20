;(function(){

  var topbar = document.getElementById('topbar'),
    theme = document.getElementById('theme');

  Stickyfill.add(topbar);
  theme.addEventListener('click', function(event){
    var target = event.target, theme;
    if(target){
      setTheme(document.body, target.getAttribute('data-theme'));
    }
  });

  function setTheme(ele, theme){
    // dirty but whoooo cares
    if(theme === 'dark'){
      ele.classList.add('dark');
    } else {
      ele.classList.remove('dark');
    }
  }

})();
