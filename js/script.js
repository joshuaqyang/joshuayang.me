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

$('#about-show').click(function(){ showAbout(); });

function showAbout() {
   document.getElementById('about-hr').style.display = "block";
   document.getElementById('about').style.display = "block";

   document.getElementById('portfolio-en').style.display = "none";
   document.getElementById('portfolio-en-hr-hidden').style.display = "none";

   document.getElementById('misc-hr').style.display = "none";
   document.getElementById('misc').style.display = "none";

   var aboutHiLite = document.getElementById("about-show");
   aboutHiLite.style.color = "#2f4858";

   var aboutHiLite = document.getElementById("portfolio-en-show");
   aboutHiLite.style.color = "#9fb3bf";

   var aboutHiLite = document.getElementById("misc-show");
   aboutHiLite.style.color = "#9fb3bf";
}

$('#portfolio-en-show').click(function(){ showPortfolioEn(); });

function showPortfolioEn() {
   document.getElementById('portfolio-en').style.display = "block";
   document.getElementById('portfolio-en-hr-hidden').style.display = "block";

   document.getElementById('about-hr').style.display = "none";
   document.getElementById('about').style.display = "none";

   document.getElementById('misc-hr').style.display = "none";
   document.getElementById('misc').style.display = "none";

   var aboutHiLite = document.getElementById("about-show");
   aboutHiLite.style.color = "#9fb3bf";

   var aboutHiLite = document.getElementById("portfolio-en-show");
   aboutHiLite.style.color = "#2f4858";

   var aboutHiLite = document.getElementById("misc-show");
   aboutHiLite.style.color = "#9fb3bf";
}

$('#misc-show').click(function(){ showMisc(); });

function showMisc() {
   document.getElementById('misc-hr').style.display = "block";
   document.getElementById('misc').style.display = "block";

   document.getElementById('about-hr').style.display = "none";
   document.getElementById('about').style.display = "none";

   document.getElementById('portfolio-en').style.display = "none";
   document.getElementById('portfolio-en-hr-hidden').style.display = "none";

   var aboutHiLite = document.getElementById("about-show");
   aboutHiLite.style.color = "#9fb3bf";

   var aboutHiLite = document.getElementById("portfolio-en-show");
   aboutHiLite.style.color = "#9fb3bf";

   var aboutHiLite = document.getElementById("misc-show");
   aboutHiLite.style.color = "#2f4858";
}

$('#portfolio-reportage-toggle').click(function(){ togglePortfolioReportage(); });

function togglePortfolioReportage() {
  if( $('#portfolio-reportage').css('display') == 'none' ) {
    document.getElementById('portfolio-reportage').style.display = "block";
    document.getElementById('portfolio-reportage-toggle').innerHTML = "[Reportage -]";
  }
  else {
    document.getElementById('portfolio-reportage').style.display = "none";
    document.getElementById('portfolio-reportage-toggle').innerHTML = "[Reportage +]";
  }
}

$('#portfolio-analysis-toggle').click(function(){ togglePortfolioAnalysis(); });

function togglePortfolioAnalysis() {
  if( $('#portfolio-analysis').css('display') == 'none' ) {
    document.getElementById('portfolio-analysis').style.display = "block";
    document.getElementById('portfolio-analysis-toggle').innerHTML = "[Analysis -]";
  }
  else {
    document.getElementById('portfolio-analysis').style.display = "none";
    document.getElementById('portfolio-analysis-toggle').innerHTML = "[Analysis +]";
  }
}

$('#portfolio-essays-toggle').click(function(){ togglePortfolioEssays(); });

function togglePortfolioEssays() {
  if( $('#portfolio-essays').css('display') == 'none' ) {
    document.getElementById('portfolio-essays').style.display = "block";
    document.getElementById('portfolio-essays-toggle').innerHTML = "[Essays and Reviews -]";
  }
  else {
    document.getElementById('portfolio-essays').style.display = "none";
    document.getElementById('portfolio-essays-toggle').innerHTML = "[Essays and Reviews +]";
  }
}

$('#portfolio-en-hide').click(function(){ hidePortfolioEn(); });

function hidePortfolioEn() {
   document.getElementById('portfolio-en').style.display = "none";
   document.getElementById('portfolio-en-hr-hidden').style.display = "none";
}

$('#language-toggle').click(function(){ changeLanguage(); });

function changeLanguage() {
  if( $('#english-ver').css('display') == 'block' ) {
    $(document).ready(function() {
        $('#language-toggle').text(function(i, oldText) {
            return oldText === '中文' ? 'EN' : oldText;
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
            return oldText === 'EN' ? '中文' : oldText;
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
