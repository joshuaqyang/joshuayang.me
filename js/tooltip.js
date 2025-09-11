function detectmob() {
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 || window.innerWidth < 480
 ){
    return true;
  }
 else {
    return false;
  }
}

console.log(window.innerWidth);

if (!detectmob()) {
  /*new UI for tooltips*/

  // document.getElementById('places-lived').style.display = 'block';

  $( function()
  {
      var targets = $( 'span' ),
          target  = false,
          tooltip = false,
          title   = false;

      targets.on( 'mouseenter', function()
      {
          target  = $( 'span' );
          let tip;
          tip = target.attr( 'title' );
          console.log("after: " + tip);
          tooltip = $( '<container id="tooltip"></container>' );

          tri_image = $( '<container class="tri_container"></container>' );

          tri_image2 = $( '<container class="tri_container2"></container>' );

          // alert("tip is: " + tip);
          if( !tip || tip == '' ) {
              return false;
          }

          target.removeAttr( 'title' );
          tooltip.css( 'opacity', 0 )
                 .html( tip )
                 .appendTo( 'body' );

          tri_image.css ('opacity', 0)
            .html('<div class="triangle bottom_left"></div>')
            .appendTo( 'body' );

          tri_image2.css ('opacity', 0)
            .html('<div class="triangle2 top_right"></div>')
            .appendTo( 'body' );

          var init_tooltip = function()
          {
              tooltip.css( 'max-width', ($(window).width() / 3 ) );
              tooltip.addClass( 'fixed-bottom' );

              tri_image.addClass( 'sticky-bottom' );
              tri_image2.addClass( 'sticky-bottom' );

              tri_image.css( { left: -10 } )
                     .animate( { left: '+=10', opacity: 1 }, 400 );

              tri_image2.css( { left: -10 } )
                     .animate( { left: '+=10', opacity: 1 }, 400 );

              tooltip.css( { left: 10, bottom: 20 } )
                     .animate( { left: '+=10', opacity: 1 }, 400 );

          };

          init_tooltip();
          // $( window ).resize( init_tooltip );

          var remove_tooltip = function()
          {

              tooltip.animate( { left: '-=10', opacity: 0 }, 300, function()
              {
                  $( 'container' ).remove();
              });

              tri_image.animate( { left: '-=10', opacity: 0 }, 300, function()
              {
                  $( '<div class="tri_container">' ).remove();
              });

              tri_image2.animate( { left: '-=10', opacity: 0 }, 300, function()
              {
                  $( '<div class="tri_container2">' ).remove();
              });

          };

          document.getElementById('tooltip').addEventListener("click", function() {
            remove_tooltip();
            target.attr( 'title', tip );
          });

          // target.on( 'mouseleave', remove_tooltip );
          // tooltip.on( 'click', remove_tooltip );
          // target.on( 'click', remove_tooltip );
      });
  });
}

else {

  document.getElementById("typewriter").style.width="60%";

  $( function()
  {
      var targets = $( 'span' ),
          target  = false,
          tooltip = false,
          title   = false;

      targets.on( 'mouseenter', function()
      {
          target  = $( 'span' );
          let tip;
          tip = target.attr( 'title' );
          console.log("after: " + tip);
          tooltip = $( '<container id="tooltip"></container>' );

          // alert("tip is: " + tip);
          if( !tip || tip == '' ) {
              return false;
          }

          target.removeAttr( 'title' );
          tooltip.css( 'opacity', 0 )
                 .html( tip )
                 .appendTo( 'body' );

          var init_tooltip = function()
          {
              tooltip.css( 'max-width', ($(window).width() - 50 ) );
              tooltip.addClass( 'fixed-bottom' );

              tooltip.css( { left: 10, bottom: 10 } )
                     .animate( { bottom: '+=10', opacity: 1 }, 400 );

          };

          init_tooltip();
          // $( window ).resize( init_tooltip );

          var remove_tooltip = function()
          {

              tooltip.animate( { bottom: '-=10', opacity: 0 }, 300, function()
              {
                  $( 'container' ).remove();
              });

          };

          document.getElementById('tooltip').addEventListener("click", function() {
            remove_tooltip();
            target.attr( 'title', tip );
          });

          // target.on( 'mouseleave', remove_tooltip );
          // tooltip.on( 'click', remove_tooltip );
          // target.on( 'click', remove_tooltip );
      });
  });
}
