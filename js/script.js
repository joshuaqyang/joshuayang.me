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
