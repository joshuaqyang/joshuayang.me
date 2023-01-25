$('#favbooks-show').click(function(){ showFavBooks(); });

function showFavBooks() {
   document.getElementById('favbooks').style.display = "block";
   document.getElementById('favbooks-hr-hidden').style.display = "block";
}

$('#favbooks-hide').click(function(){ hideFavBooks(); });

function hideFavBooks() {
   document.getElementById('favbooks').style.display = "none";
   document.getElementById('favbooks-hr-hidden').style.display = "none";
}

$('#language-toggle').click(function(){ changeLanguage(); });

function changeLanguage() {
  if( $('#english-ver').css('display') == 'block' ) {
    $(document).ready(function() {
        $('#language-toggle').text(function(i, oldText) {
            return oldText === '中文版' ? 'English version' : oldText;
            /*
            if (oldText === 'Details.') {
              return 'TL;DR';
            }
            else {
              return oldText;
            }
            */
        });
    });
    document.getElementById('english-ver').style.display = "none";
    document.getElementById('chinese-ver').style.display = "block";
  } else if( $('#english-ver').css('display') == 'none' ) {
    $(document).ready(function() {
        $('#language-toggle').text(function(i, oldText) {
            return oldText === 'English version' ? '中文版' : oldText;
        });
    });
    document.getElementById('chinese-ver').style.display = "none";
    document.getElementById('english-ver').style.display = "block";
  }
}

function flashHover() {
  setTimeout(() => { document.getElementById('nameHover').style.background = "#cccccc"; }, 300);
  setTimeout(() => { document.getElementById('nameHover').style.removeProperty('background'); }, 600);
  setTimeout(() => { document.getElementById('nameHover').style.background = "#cccccc"; }, 900);
  setTimeout(() => { document.getElementById('nameHover').style.removeProperty('background'); }, 1200);
  setTimeout(() => { document.getElementById('nameHover').style.background = "#cccccc"; }, 1500);
  setTimeout(() => { document.getElementById('nameHover').style.removeProperty('background'); }, 1800);
}

$('#details-show').click(function(){ showDetails(); });

function showDetails() {
  if( $('#shown-content').css('display') == 'block' ) {
    $(document).ready(function() {
        $('#details-show').text(function(i, oldText) {
            return oldText === 'Details.' ? 'TL;DR' : oldText;
            /*
            if (oldText === 'Details.') {
              return 'TL;DR';
            }
            else {
              return oldText;
            }
            */
        });
    });
    document.getElementById('shown-content').style.display = "none";
    document.getElementById('details').style.display = "block";
    document.getElementById('details-hr-hidden').style.display = "block";
  } else if( $('#shown-content').css('display') == 'none' ) {
    $(document).ready(function() {
        $('#details-show').text(function(i, oldText) {
            return oldText === 'TL;DR' ? 'Details.' : oldText;
        });
    });
    document.getElementById('shown-content').style.display = "block";
    document.getElementById('details').style.display = "none";
    document.getElementById('details-hr-hidden').style.display = "none";
  }
}
