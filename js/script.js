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
