(function($){

    $(document).ready(function(){

     "use strict";

    //POST IMAGE GALERY

     prettyPhoto();

     

     $('.post-gallery').each(function(){

        var _this = $(this);

        var _heightrow = 292;

        if( _this.parent().parent().hasClass('blog-item-masonry')){

          _heightrow = 140;

        }

        

        _this.justifiedGallery({

        rowHeight: _heightrow,

        fixedHeight: false,

        lastRow: 'justify',

        margins: 15,

        randomize: false,

        captionSettings:{ animationDuration: 500,

                          visibleOpacity: 0.89,

                          nonVisibleOpacity: 0.0 }

       })

     });

     



     $('#main_container').fitVids();     



     //POST SLIDE

     if($('.post-slide').length > 0)

     {

        $(".post-slide").each( function() {

              var $this = $(this);

              if ( !$this.hasClass( 'owl-carousel' ) )

              {

                  $this.owlCarousel({

                      autoPlay: 4000,

                      slideSpeed: 1000,

                      navigation: true,

                      pagination: false,

                      singleItem: true,

                      navigationText: ["prev","next"],

                   });

              }    

          });

     }

     

     //QUOTES SLIDE

      if ( $('.quotes-slide').length > 0 )

      {

        $(".quotes-slide").each( function() {

              var $this = $(this);

              if ( !$this.hasClass( 'owl-carousel' ) )

              {

                  $this.owlCarousel({

                        autoPlay: 4000,

                        slideSpeed: 1000,

                        navigation: false,

                        pagination: true,

                        singleItem: true,

                    });

              }    

          });

        

      }

      

      // Posts slider header grid.

      if ( $('.ts-grid-slider').length > 0 )

      {

        $('.ts-grid-slider').each( function() {

              var $this = $(this);

              if ( !$this.hasClass( 'owl-carousel' ) )

              {

                  $this.owlCarousel({

                      items: 1,

        			  autoPlay: 4000,

        			  slideSpeed: 1000,

        			  navigation: true,

        			  pagination: false,

        			  singleItem: true,

                      navigationText: ["<span class='slide-prev'></span>","<span class='slide-next'></span>"],

        			  itemsCustom: [[0, 1],[320,1], [480, 1], [768, 2], [992, 3], [1200, 3]]

                  });

              }

        });

      }

     

     

     //BACK TO TOP
     $('.back-to-top').on('click', function() {
        $('html, body').animate({scrollTop : 0},800);

            return false;
     });



      //TAB SLIDE POST
      if ( $( ".tab-list-post" ).length )
      {
          $( ".tab-list-post" ).each( function() {
              var $this = $(this);
              if ( !$this.hasClass( 'owl-carousel' ) )
              {
                  $this.owlCarousel({
                      autoPlay: 4000,
                      slideSpeed: 1000,
                      navigation: false,
                      pagination: false,
                      singleItem: false,
                      itemsCustom: [[0, 1],[320,1], [480, 1], [768, 2], [992, 3], [1200, 3]]
                  });
              }    
          });
      }

      //Gallery POST
      if ($(".blog-grallery").length > 0) {

    

          $(".blog-grallery").owlCarousel({

              autoPlay: 4000,

              slideSpeed: 1000,

              navigation: false,

              pagination: false,

              singleItem: false,

              itemsCustom: [[0, 1],[320,1], [480, 1], [768, 1], [992, 1], [1200, 1]]

          });

      }

      



      //TWEETS SLIDE

      if($('.twitter-slide').length > 0){

        $('.twitter-slide').owlCarousel({

            autoPlay: 4000,

            slideSpeed: 1000,

            navigation: false,

            pagination: true,

            singleItem: true,

        });

      }

      

      //Related post SLIDE

      if($('.list-post-relate').length > 0){

            $('.list-post-relate').owlCarousel({

              items: 3,

              autoPlay: 4000,

              slideSpeed: 1000,

              navigation: false,

              pagination: true,

              singleItem: false,

              itemsCustom: [[0, 1],[320,1], [480, 1], [768, 2], [992, 2], [1200, 3]]

          });

      }



      //Event countdown

      $('.countdown-event').each(function(){

          var _this = $(this);

          var _date = _this.attr('data-datecount');

          _this.countdown(_date, function(event) {

              var ts_day = event.strftime('%-D');

              var ts_hour = event.strftime('%-H');

              var ts_minute = event.strftime('%-M');

              var ts_second = event.strftime('%-S');

              _this.find('.day').html(ts_day);

              _this.find('.hour').html(ts_hour);

              _this.find('.minute').html(ts_minute);

              _this.find('.second').html(ts_second);

          });

      });



      //SEARCH BOX

      $('.header-search .search-togole').on( "click", function() {

          $('#ts-search-box').fadeIn('1000');

      })

       $('#ts-search-box .close-search, #ts-search-box .search-overlay').on( "click", function() {

          $('#ts-search-box').fadeOut('slow');

      })



      //SOCIAL BOX

      $('.head-socials .ts-social-togole').on( "click", function() {

          $('.ts-social-header').fadeIn('1000');

      })

       $('.ts-social-header .close-social, .ts-social-header .social-overlay').on( "click", function() {

          $('.ts-social-header').fadeOut('slow');

      })



      //MENU BAR
      $('.ts-togole-menu').on('click', function() {
          $(this).toggleClass('active');

          $('nav.main-menu').slideToggle(500)
      });


      //height blog list, config siderbar

      classresizeBloglist();

      resizeBloglist();

      TS_Change_Sidebar_Width();

      



      $(window).on("debouncedresize", function (e) {

          classresizeBloglist();

          resizeBloglist();

          TS_Change_Sidebar_Width();      

      });

      

      $(window).resize(function(){

          ts_update_toobar_position();   

      });



      //TOGOLE SOCIAL
      $('.blog_peronal_list .social-togole').on( "click", function() {
        $(this).parent().find('.group-share').animate({
          width: 'toggle'
        });

      });

      $('.blog-item-masonry .social-togole').on( "click", function() {
        $(this).parent().find('.group-share').animate({
          width: 'toggle'
        });
      });

     //TITLE WIDGET
     
     $('#main_container .widget h2.widgettitle, .widger-footer .widget h2.widgettitle').each(function(){
        $(this).wrap('<div class="title-widget"></div>');
     })

        
   

      $(window).load(function(){

        if ($('#wpadminbar').length){

            var heightB = $('#wpadminbar').outerHeight();

            $(".main-menu-2").sticky({ topSpacing: heightB });

        }else{

            $(".main-menu-2").sticky({ topSpacing: 0 });

        }

        ts_update_toobar_position();

      });



      //TAB

        $('.ts-horizontalTab').easyResponsiveTabs({

                type: 'default',

                width: 'auto',

                fit: true,

                animation: 'slide'

         });

        $('.ts-verticalTab').easyResponsiveTabs({

                type: 'vertical',

                fit: true

        });



        // Animated Bar

        jQuery('.animated').each(function(){

            jQuery(this).find('.animated-bar').animate({

                width:jQuery(this).attr('data-percent')

            },6000);

             jQuery(this).find('.animated-bar-style').animate({

                width:jQuery(this).attr('data-percent')

            },6000);

        });



        //MENU RESPONSIVE

        var touchDevice = (Modernizr.touch) ? true : false;

        if (touchDevice === true) {

             $('.ts-main-header').addClass('headerMobile').removeClass('headerMenu');

              $('.main-menu .menu-nav li').on('click', function() {
                  // $('.main-menu .menu-nav li').removeClass('show-submenu')

                  $(this).toggleClass('show-submenu');
              }); 
        }

        



        // JS For Socials

        if ( $('div').hasClass('ts-socials-style') )

        {

            var _social = $('.ts-socials-style');            

            _social.each(function(index, item) {

                var _this = $(this);

                if ( _this.hasClass('ts-socials-style-1') || _this.has('ts-socials-style-2') )

                {

                    var icon_color          = _this.attr('icon_color');

                    var icon_border_color   = _this.attr('icon_border_color');

                    var icon_bg_color       = _this.attr('icon_bg_color');

                    var icon_color_hover    = _this.attr('icon_color_hover');

                    var icon_bg_color_hover = _this.attr('icon_bg_color_hover');

                    

                    if ( icon_color  && _this.find('.list-socials > li a'))

                    {

                        if ( _this.hasClass('ts-socials-style-1') )

                        {

                            _this.find('.list-socials > li a').css({

                                "color": icon_color,

                                "border": "1px solid "+icon_border_color,

                                "background": icon_bg_color

                            });

                            _this.find('.list-socials > li a').on({
                              mouseenter: function() {
                                $(this).css({

                                        "color": icon_color_hover,

                                        "background": icon_bg_color_hover

                                    });
                              },
                              mouseleave : function() {
                                $(this).css({

                                        "color": icon_color,

                                        "background": icon_bg_color

                                    });
                              }
                            });

                        }

                        

                        if ( _this.hasClass('ts-socials-style-2') )

                        {

                            _this.find('.list-socials > li a').css({

                                "color": icon_color,

                                "background": icon_bg_color

                            });

                            _this.find('.list-socials > li a').on({
                              mouseenter: function() {
                                  $(this).css({

                                        "color": icon_color_hover,

                                        "background": "none",

                                        "border": "1px solid "+icon_color_hover

                                    });
                              },
                              mouseleave : function() {
                                  $(this).css({

                                        "color": icon_color,

                                        "background": icon_bg_color,

                                        "border": "1px solid "+icon_bg_color

                                    });
                              }
                            });

                        }

                    }

                    

                }

                

                if ( _this.has('ts-socials-style-3') )

                {

                    if ( _this.find('.list-socials > li a') )

                    {

                        var _itemSocial         = _this.find('.list-socials > li a');

                        _itemSocial.each(function(){

                            

                            var icon_color          = $(this).attr('icon_color');

                            var icon_bg_color       = $(this).attr('icon_bg_color');

                            var icon_color_hover    = $(this).attr('icon_color_hover');

                            var icon_bg_color_hover = $(this).attr('icon_bg_color_hover');

                            

                            $(this).css({

                                "color": icon_color,

                                "background": icon_bg_color,

                                "border": "1px solid "+icon_bg_color

                            });

                            $(this).on({
                              mouseenter: function() {
                                  $(this).css({

                                        "color": icon_color_hover,

                                        "background": icon_bg_color_hover,

                                        "border": "1px solid "+icon_bg_color_hover

                                    });
                              },
                              mouseleave : function() {
                                  $(this).css({

                                        "color": icon_color,

                                        "background": icon_bg_color,

                                        "border": "1px solid "+icon_bg_color

                                    });
                              }
                            });
                            

                        });

                    }

                }

                

            });

        }

        

        // JS For Divider

        if ( $('div').hasClass('divider') )

        {

            var _divider = $('.divider');

            _divider.each(function(){

               var _this = $(this);

               if ( _this.hasClass('ts-line') )

               {

                    _this.find('.divider-content').css({

                        "background": _this.attr("divider_color")

                   });

               }

               

               if ( _this.hasClass('ts-divider-text') ) {

                   $('head').append('<style type="text/css">.ts-divider-text > .divider-content::before, .ts-divider-text > .divider-content::after {border-bottom: 1px '+_this.attr("one_divider_type")+' '+_this.attr("divider_color")+'; border-color: '+_this.attr("divider_color")+';"</style>');

               }

               

               if ( _this.hasClass('ts-2line') ) {

                   _this.find('.divider-content').css({

                        "border-bottom": "1px solid " + _this.attr("divider_color"),

                        "border-top": "1px solid " + _this.attr("divider_color")

                   }); 

               }

               

               if ( _this.hasClass('ts-icon-tag') )

               {

                   $('head').append('<style type="text/css">.ts-icon-tag .divider-content::before, .ts-icon-tag .divider-content::after {border-bottom: 1px '+_this.attr("one_divider_type")+' '+_this.attr("divider_color")+'; border-color: '+_this.attr("divider_color")+';"</style>');

               }

               

               if ( _this.hasClass('ts-dotted') ) {

                   _this.find('.divider-content').css({

                         "border-bottom": "1px " + _this.attr("one_divider_type") + " " + _this.attr("divider_color")

                   }); 

               }

               

               if ( _this.hasClass('ts-icon-stag-2line') )

               {

                   $('head').append('<style type="text/css">.ts-icon-stag-2line .divider-content::before, .ts-icon-stag-2line .divider-content::after {border-bottom: 1px solid '+_this.attr("divider_color")+'; border-color: '+_this.attr("divider_color")+'; border-top: 1px solid '+_this.attr("divider_color")+';"</style>');

               }

               

                

            });

        }

        

         // Image Carousel

        if ( $(".ts-client-slide").length > 0 )

        {

            $(".ts-client-slide").owlCarousel({

                items: 3,

                autoPlay: 4000,

                slideSpeed: 1000,

                navigation: true,

                pagination: false,

                singleItem: false,

                navigationText: ["<span class='slide-prev'></span>","<span class='slide-next'></span>"],

                itemsCustom: [[0, 1],[320,2], [480, 2], [768, 4], [992, 4], [1200, 5]]

            });

        }



        // Notice & Text Boxed

        if ( $('.ts-notice-box h3').hasClass('notice-arrow') )

        {

            var _bg = $('.ts-notice-box h3.notice-arrow').attr('data-bg-color');

            $('head').append('<style type="text/css">.ts-notice-box h3.notice-arrow:before { border-top-color: '+_bg+'; border-bottom-color: '+_bg+'; border-right-color: '+_bg+';}</style>');

            $('head').append('<style type="text/css">.ts-notice-box h3.notice-arrow:after { border-top-color: '+_bg+'; border-bottom-color: '+_bg+'; border-left-color: '+_bg+';}</style>');

        }





        //Height list Blog and About Me

        

        var byRow = $('body').hasClass('page');

        $('.ts-about-me').each(function() {

            $(this).children('.ts-about').matchHeight({

                byRow: byRow

            });

        });

        $('.blog-item.blog-sticky').each(function() {

            $(this).children('.left-sticky,.sticky-rightcontent').matchHeight({

                byRow: byRow

            });

        });

                                        

        //Select shop

        if($('select.orderby, .summary.entry-summary select').length > 0){

            $('select.orderby, .summary.entry-summary select').chosen();

        }

        

        // Features Icon

        var $feature_style = $('.ts-feature-style');

        if ( $feature_style.length > 0 )

        {

            $feature_style.each( function()

            {

               var $this  = $(this);

               var $title = $this.find('.feature-title');

               var $icon  = $this.find('.feature-icon');

               $this.on({
                  mouseenter: function() {
                    if ( $title.length > 0 )

                       {

                           $title.css({

                               color: $title.attr('data-color-hover')

                           });

                       }

                       

                       if ( $icon.length > 0 )

                       {

                           $icon.css({

                               color: $icon.attr('data-color-hover')

                           });

                           

                           if ( $this.hasClass( 'ts-feature-style-2' ) )

                           {

                               $icon.css({

                                   background: $icon.attr('data-bg-color-hover')

                               });

                           }

                       }
                     },
                    mouseleave : function() {
                        if ( $title.length > 0 )

                       {

                           $title.css({

                               color: $title.attr('data-color')

                           });

                       }

                       

                       if ( $icon.length > 0 )

                       {

                           $icon.css({

                               color: $icon.attr('data-color')

                           });

                           

                           if ( $this.hasClass( 'ts-feature-style-2' ) )

                           {

                               $icon.css({

                                   background: $icon.attr('data-bg-color')

                               });

                           }

                       }
                    }
               });

            });

        }

        

        // Show / Hide GrowPop

        $(window).scroll(function()

        {

            if ( $('.ts-about-me').length > 0 )

            {

                var postionBottom = 0;

                if ( $( 'section.top-footer' ).length > 0 ) {

                    postionBottom += $( 'section.top-footer' ).eq(0).height();

                }

                

                var footerHeight = 0;

                if ( $( 'section.widger-footer' ).length > 0 ) {

                    postionBottom += $( 'section.widger-footer' ).eq(0).height();

                }

                

                var topFooterHeight = 0;

                if ( $( 'footer' ).length > 0 ) {

                    postionBottom += $( 'footer' ).eq(0).height();

                }

                

                var $top_footer = $('.ts-about-me').offset().top - $(window).height();

                

            

                var distanceTop = $('.ts-about-me').offset().top - $(window).height();

        		if ( $(window).scrollTop() > distanceTop && $(window).height() + $(window).scrollTop() <  $(document).height() - postionBottom - 250 ) {

        			$('.ts-inav-slide a').fadeIn(1000);

                } else {

                    $('.ts-inav-slide a').fadeOut(1000);

                }

                

            }

        });

        

        // Settings Front-End

        

        TS_Reset_Settings($);

        ts_update_toobar_position();

        

        function ts_update_toobar_position() {

            if ( $('#ts-toolbar').length ) {

                var toolbar_h = $('#ts-toolbar').height();

                var w_h = $(window).height();

                

                if ( toolbar_h > w_h ) {

                    $('#ts-toolbar').css({

                        'top': '5px',

                        'margin-top': ''

                    });

                    $('#ts-toolbar > div').css({

                        'max-height': (w_h - 10) + 'px',

                        'overflow-y': 'auto',

                        'overflow-x': 'visible'

                    });

                }

                else{

                    $('#ts-toolbar').css({

                        'top': '50%',

                        'margin-top': '-' + (toolbar_h/2) + 'px'

                    });

                    $('#ts-toolbar > div').css({

                        'max-height': '',

                        'overflow-y': '',

                        'overflow-x': ''

                    });

                }

                

            }

        }

        

        if ( $('#ts-toolbar').length )

        {

    		var handler = $('#ts-handler');

        handler.on('click', function(){
            $('#ts-toolbar').toggleClass('active');           

          handler.find('i').addClass('icon-spin');          

          setTimeout(function() {

            handler.find('i').removeClass('icon-spin');

          }, 800);
        });

    	}

        

        if ( $('#ts-pattern-area a').length )

        {

            var $pattern_item = $('#ts-pattern-area a');

            $pattern_item.on('click', function() {
                var $this = $(this);
               var $id = $(this).attr('id');
               if ( $id )
               {
                   for ( var i = 1; i <= $pattern_item.length; i++ )

                   {
                       $('body').removeClass('pattern' + i);
                   }
                   $id = $id.replace( "ts-", "");

                   $('body').addClass( $id ); 
               }
            });

        }

        

        if ( $('#ts-header-area a').length )

        {

            var $header_item = $('#ts-header-area a');

            $header_item.on('click', function() {
              var $this = $(this);

               var $id = $this.attr('id');

               if ( $id )

               {
                   var $index = $header_item.index( $this ) + 1;

                   for ( var i = 1; i <= $header_item.length; i++ ) {

                       $('header .main-header').removeClass('ts-header' + i);

                   }

                   $('header .main-header').addClass( 'ts-header' + $index );
               }
            });

        }

        

        if ( $('#ts-footer-area a').length )

        {

            var $footer_item = $('#ts-footer-area a');

            $footer_item.on('click', function() {
                var $this = $(this);

               var $id   = $this.attr('id');

               if ( $id )

               {

                   var $index = $footer_item.index( $this ) + 1;

                   for ( var i = 1; i <= $footer_item.length; i++ ) {

                       $('.widger-footer').removeClass('ts-footer' + i);

                   }

                   

                   $('.widger-footer').addClass( 'ts-footer' + $index );

               }
            });

        }

        

        if ( $('#ts-ireset a').length )

        {
            $('#ts-ireset a').on('click', function() {
                TS_Reset_Settings($);
            });
        }

        

        if ( $( '#ts-style-area a' ).length )

        {

            var $ts_style = $( '#ts-style-area a' );

            $ts_style.on('click', function() {
                var $this = $( this );

                var $link = $this.attr( 'data-style' );

                if ( $link )
                {

                    $( 'link#memoryajax-custom-css-css' ).attr( 'href', $link );

                }
            });

        }

    

        if ( $('#ts-toolbar .ts-color-style').length )
        {

            $('#ts-toolbar .ts-color-style').colorpicker();

            $('#ts-toolbar .ts-color-style').colorpicker().on('changeColor', function(ev){

				var $color = ev.color.toHex();
                $color = $color.replace('#', '');
                var $link = $(this).attr('data-style');
                if ( $link )
                {
                    $link += '&color=' + $color;
                    $( 'link#memoryajax-custom-css-css' ).attr( 'href', $link );
                }

			});

        }

        

        

        

        // Skill bar

        if ( $('.skillbar').length > 0 )

        {

            $('.skillbar').each(function(){

                $(this).find('.skillbar-bar').animate({

                    width:$(this).attr('data-percent')

                    

                }, 6000);

            });

        }

        

        // JS For Button Whene Hover

        if ( $('.ts-button-style').length )

        {

            var $button = $('.ts-button-style');

            $button.on({
              mouseenter: function() {
                  $(this).find('.text-button').css({

                        'background-color' : $(this).attr('data-bg-color-hover'),

                        'border-color' : $(this).attr('data-bg-color-hover')

                    });

                    $(this).find('a.ts-style-button').css({

                        'color' : $(this).attr('data-text-color-hover')

                    });
              },
              mouseleave: function() {
                  $(this).find('.text-button').css({

                        'background-color' : $(this).attr('data-bg-color'),

                        'border-color' : $(this).attr('data-boder-color')

                    });

                    $(this).find('a.ts-style-button').css({

                        'color' : $(this).attr('data-text-color')

                    });
              }

            }); 

        }

        

        


        $('[data-toggle="tooltip"]').tooltip();

        

        

        

        if ( $('.list-social-widget').length ) {

            

            var $list = $('.list-social-widget');

            $('.list-social-widget li a').css({

                'color': $list.attr('icon_color')

            });

            $('.list-social-widget li a').on({
              mouseenter: function() {

                    $(this).css({

                        'color': $list.attr('icon_color_hover'),

                        'background-color': $list.attr('icon_bg_color_hover')

                    });

                },

                mouseleave: function() {

                    $(this).css({

                        'color': $list.attr('icon_color'),

                        'background-color': $list.attr('icon_bg_color')

                    });

                }             
            });
            //icon_color_hover
        }
        
        // Call To Action
        var $btn_call_to_action = $('a.ts-call-button');
        if ($btn_call_to_action.length)
        {
            
            $btn_call_to_action.on({
              mouseenter : function() {
                  $(this).css({
                        'color': $(this).attr('data-text-color-hover'),
                        'background-color': $(this).attr('data-bg-color-hover'),
                        'border-color': $(this).attr('data-bg-color-hover')
                    });
              },
              mouseleave : function() {
                  $(this).css({
                        'color': $(this).attr('data-text-color'),
                        'background-color': $(this).attr('data-bg-color'),
                        'border-color': $(this).attr('data-boder-color')
                    });
              }
            });
        }
        
        
        // Header Overlay
        if ( $('.main-header .over-lay').length )
        {
            var $header = $('.main-header .over-lay');
            if ( $header.data('bg') ) {
                $header.css({
                    'background-color' : $header.data('bg')
                });
            }
        }

        

        

        

        

        

        

    });

})(jQuery);



function TS_Toggle_Social()

{

    jQuery('.blog_peronal_list .social-togole').on( "click", function() {
        jQuery(this).parent().find('.group-share').animate({
          width: 'toggle'
        });

    });

    

    jQuery('.blog-item-masonry .social-togole').on( "click", function() {
        jQuery(this).parent().find('.group-share').animate({
          width: 'toggle'
        });

    });

}
    var widthDev = $(window).width();
    if ((widthDev < 1200) && (widthDev >= 768)) {

        $('.menu-nav li').on('click', function() {
            //$('.menu-nav li').removeClass('ts_hover')
            //$(this).addClass('ts_hover');
            $(this).toggleClass('ts_hover');
        });
    
    }else if(widthDev<=767){
        $('.menu-nav li').on('click', function() {
            $(this).toggleClass('ts_hover');
        });

    }else{
        $('#menu-main-menu').addClass('ts-menu-destop');
    }


function TS_Change_Sidebar_Width()
{   
    var $widthWindow            = jQuery(window).outerWidth();
    var $container              = jQuery('#main_container .container');
    var $sidebar                = jQuery('#sidebar');
    var $inner_container        = jQuery('#inner-container');
    var $site_width             = jQuery('input.ts-isite-width');
    var $sidebar_width          = jQuery('input.ts-isidebar-width');
    var $single_container       = jQuery('#single-post .container');
    var $single_sidebar         = jQuery('#sidebar-right');
    var $single_inner_container = jQuery('#single-post .page-ct');
    
    if($widthWindow > 991)
    {
        if ( $container.length && $site_width.length )
        {
        	if ( parseInt($site_width.val()) > 0 )
        	{
        		var $site_width_tmp = parseInt($site_width.val());
        		$container.css({
        			width: $site_width.val() + 'px',
        			'max-width':'100%'
        		});
                
                $sidebar_width_tmp = 0;
        		if ( $sidebar.length && parseInt($sidebar_width.val()) > 0 )
        		{
        			$sidebar_width_tmp = parseInt($sidebar_width.val());                                                
        			$sidebar_width_tmp = Math.round( ( $sidebar_width_tmp / $site_width_tmp ) * 100 );
        			$sidebar.css({
        				width: $sidebar_width_tmp + '%'
        			});
        		}
                
        		var main_width_tmp = 100 - $sidebar_width_tmp;
        		if ( $inner_container.length ) {
        			$inner_container.css({
        				width: main_width_tmp + '%'
        			});
        		}
        	}
        }
        
        if ( $single_container.length && $site_width.length )
        {
        	if ( parseInt($site_width.val()) > 0 )
        	{
        		var $site_width_tmp = parseInt($site_width.val());
        		$single_container.css({
        			width: $site_width.val() + 'px',
        			'max-width':'100%'
        		});
                
        		$sidebar_width_tmp = 0;
        		if ( $single_sidebar.length && parseInt($sidebar_width.val()) > 0 )
        		{
        			$sidebar_width_tmp = parseInt($sidebar_width.val());                                                
        			$sidebar_width_tmp = Math.round( ( $sidebar_width_tmp / $site_width_tmp ) * 100 );
        			$single_sidebar.css({
        				width: $sidebar_width_tmp + '%'
        			});
        		}
                
        		var main_width_tmp = 100 - $sidebar_width_tmp;
        		if ( $single_inner_container.length )
                {
        			$single_inner_container.css({
        				width: main_width_tmp + '%'
        			});
        		}
        	}
        }
    }
    else
    {
        $container.attr('style','');
        $sidebar.attr('style','');
        $inner_container.attr('style','');
        $single_container.attr('style','');
        $single_sidebar.attr('style','');
        $single_inner_container.attr('style','');
    }
}

function TS_ShowAvatar(elem)
{
    var $author_post = jQuery('.author-post');
    if ( jQuery( elem ).is(":checked") ) {
        $author_post.show();
        $('.blog-item').removeClass( 'ts_author_hide' );
    } else {
        $author_post.hide();
        $('.blog-item').addClass( 'ts_author_hide' );
    }
}


function TS_Reset_Settings($)

{

    if ( $('#ts-pattern-area a').length )

    {

        var $pattern_item = $('#ts-pattern-area a');

        for ( var i = 1; i <= $pattern_item.length; i++ )

        {

            if ( $('body').hasClass( 'pattern' + i ) ) {

                $('body').removeClass( 'pattern' + i );

            }

        }

    }

    

    if ( $('#ts-header-area a').length )

    {

        var $header_item = $('#ts-header-area a');

        for ( var i = 1; i <= $header_item.length; i++ )

        {

            if ( $('header .main-header').hasClass( 'ts-header' + i ) ) {

                $('header .main-header').removeClass( 'ts-header' + i );

            }

        }

    }

    

    if ( $('#ts-footer-area a').length )

    {

        var $footer_item = $('#ts-footer-area a');

        for ( var i = 1; i <= $footer_item.length; i++ )

        {

            if ( $('.widger-footer').hasClass( 'ts-footer' + i ) ) {

                $('.widger-footer').removeClass( 'ts-footer' + i );

            }

        }

    }

    

    // if ( $( 'link#memoryajax-custom-css-css' ).length ) {

    //     $( 'link#memoryajax-custom-css-css' ).attr( 'href', '' );

    // }

    

    if ( $('#ts-toolbar .ts-color-style i').length ) {

        $('#ts-toolbar .ts-color-style i').attr('style', '');

    }

    

    

    if ( $('#ts-toolbar .ts-color-style').length ) {

        $('#ts-toolbar .ts-color-style .form-control').val( $('#ts-toolbar .ts-color-style').data('default-color') );

        

        $('#ts-toolbar .ts-color-style .input-group-addon i').css({

           'background-color':  $('#ts-toolbar .ts-color-style').data('default-color')

        });

    }

    

    

    var $container       = jQuery('#main_container .container');

    var $sidebar         = jQuery('#sidebar');

    var $inner_container = jQuery('#inner-container');

    

    var $single_container       = jQuery('#single-post .container');

    var $single_sidebar         = jQuery('#sidebar-right');

    var $single_inner_container = jQuery('#single-post .page-ct');

    

    $container.attr('style','');

    $sidebar.attr('style','');

    $inner_container.attr('style','');

    

    $single_container.attr('style','');

    $single_sidebar.attr('style','');

    $single_inner_container.attr('style','');

    
    // Author (Show/Hide)
    var $author_avatar = jQuery('.ts-author-config .ts-show-avatar');
    var $author_post   = jQuery('.author-post');
    if ( $author_avatar.length && $author_post.length)
    {
        if ( $author_avatar.attr( "data-author-display") == "show" ) {
            $author_post.show();
            $('.blog-item').removeClass( 'ts_author_hide' );
        } else {
            $author_post.hide();
            $('.blog-item').addClass( 'ts_author_hide' );
        }
    }
    

   

}



function prettyPhoto($) {



    "use strict";



    jQuery("a[rel^='galleryPhoto']").prettyPhoto({



        animation_speed: 'normal',



        slideshow: false,



        autoplay_slideshow: false,



        opacity: 0.80,



        show_title: true,



        allow_resize: true,



        horizontal_padding: 0,



        default_width: 650,



        default_height: 400,



        counter_separator_label: '/',



        theme: 'pp_default',



        hideflash: false,



        wmode: 'opaque',



        autoplay: true,



        modal: false,



        overlay_gallery: false,



        keyboard_shortcuts: true,



        deeplinking: false,



        social_tools: false



    })



}



function resizeBloglist(){

  var widthList = jQuery('.ts-blog.blog_peronal_list').outerWidth();

  if(widthList > 480){

    jQuery('.blog_peronal_list .blog-item').each(function(){

      var _heightL = jQuery(this).find('.blog-item-left').outerHeight() - 10;

      jQuery(this).find('.blog-item-right article').css("min-height",_heightL);

    })

  }



}

function classresizeBloglist(){

  var widthList = jQuery('.ts-blog.blog_peronal_list').outerWidth();

  var _this = jQuery('.ts-blog.blog_peronal_list');

  if(widthList > 750){

    _this.removeClass('bloglist-size2 bloglist-size3 bloglist-size4');

    _this.addClass('bloglist-size1');

  }else if( widthList > 600 && widthList <= 750){

    _this.removeClass('bloglist-size1 bloglist-size3 bloglist-size4' );

    _this.addClass('bloglist-size2');

  }else if( widthList > 480 && widthList <= 600){

    _this.removeClass('bloglist-size1 bloglist-size4 bloglist-size2');

    _this.addClass('bloglist-size3');

  }else if( widthList < 480){

    _this.removeClass('bloglist-size1 bloglist-size2 bloglist-size3');

    _this.addClass('bloglist-size4');

  }

}



/** Mailchimp **/

function sendmailchimp(elem)

{                    

	jQuery.ajax({

		type : "post",

		data : jQuery(elem).serialize(),

		url : jQuery(elem).attr("action"),

		success : function (resp){

			jQuery(elem).find(".ts-message").removeClass("ajax-loading");

            jQuery(elem).find(".ts-message").html(resp);

		}

	}).fail(function(err) {

        jQuery(elem).find(".ts-message").removeClass("ajax-loading");

	});

}

//







