/**JS Masonry**/
var $ = jQuery.noConflict();
var $masonry = $('#blog-masonry');
function TS_i()
{
    var t = $masonry.attr("data-cols");
    if (t == "1") {
        var n = $masonry.width();
        var r = 1;
        return r
    }
    if (t == "2") {
        var n = $masonry.width();
        var r = 2;
        if (n < 480) r = 1;
        return r
    } else if (t == "3") {
        var n = $masonry.width();
        var r = 3;
        if (n < 480) r = 1;
        else if (n >= 480 && n < 788) r = 2;
        else if (n >= 788 && n < 1160) r = 3;
        else if (n >= 1160) r = 3;
        return r
    } else if (t == "4") {
        var n = $masonry.width();
        var r = 4;
        if (n < 480) r = 1;
        else if (n >= 480 && n < 788) r = 2;
        else if (n >= 788 && n < 1160) r = 3;
        else if (n >= 1160) r = 4;
        return r
    } else if (t == "5") {
        var n = $masonry.width();
        var r = 5;
        if (n < 480) r = 1;
        else if (n >= 480 && n < 788) r = 2;
        else if (n >= 788 && n < 1160) r = 3;
        else if (n >= 1160) r = 5;
        return r
    } else if (t == "6") {
        var n = $masonry.width();
        var r = 5;
        if (n < 480) r = 1;
        else if (n >= 480 && n < 788) r = 2;
        else if (n >= 788 && n < 1160) r = 3;
        else if (n >= 1160) r = 6;
        return r
    } else if (t == "7") {
        var n = $masonry.width();
        var r = 5;
        if (n < 480) r = 1;
        else if (n >= 480 && n < 788) r = 2;
        else if (n >= 788 && n < 1160) r = 3;
        else if (n >= 1160) r = 8;
        return r
    }
}
    
function s()
{
    var t = TS_i();
    var n = $masonry.width();
    var r = n / t;
    r = Math.floor(r) - 0;
    $("#blog-masonry .blog-item-masonry").each(function (t) {
        $(this).css({
            width: r + "px"
        });
    });
}

function o()
{
    var t = TS_i();
    var n = $masonry.width();
    var r = n / t;
    r = Math.floor(r);
    return r
}

function _intSlides()
{
    if( $( '#blog-masonry .post-slide' ).length > 0 )
    {
        $('#blog-masonry .post-slide').each( function() {
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
}

function _intGallerys()
{
    if( $( '.post-gallery' ).length > 0 )
    {
        $('.post-gallery').each(function() {
            var _this      = $(this);
            if ( !_this.hasClass('justified-gallery')) {
                var _heightrow = 292;
                if( _this.parent().parent().hasClass( 'blog-item-masonry' ) ) {
                    _heightrow = 140;
                }
                _this.justifiedGallery({
                    rowHeight: _heightrow,
                    fixedHeight: false,
                    lastRow: 'justify',
                    margins: 15,
                    randomize: false,
                    captionSettings:{ animationDuration: 500, visibleOpacity: 0.89, nonVisibleOpacity: 0.0 }
                });
            }
        });
    }
}

function _initGalleryPhotos()
{
    $("a[rel^='galleryPhoto']").prettyPhoto({
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
    });
}

function _initSlideGallery() {
    _intSlides();
    _intGallerys();        
    _initGalleryPhotos();
}

function _initSocialToggle()
{
    jQuery('.blog-item-masonry .social-togole').on( "click", function() {
        jQuery(this).parent().find('.group-share').toggle("slide", {direction:"right"}, 700);
    });
}

s();

$(window).load(function () {
    s();
    $masonry.masonry({
        itemSelector: ".blog-item-masonry",
    });
});

$(window).on("debouncedresize", function (e) {
    s();
    $masonry.masonry({
        itemSelector: ".blog-item-masonry",
    });
});

var loading  = false;
function TSLoadMoreMSR(ielem, paging_design)
{

    var $spinner        = $('#ts-loadmore-masonry .loader');
    var page            = parseInt($(ielem).attr('data-current-page')) + 1;
    var count_posts     = parseInt($(ielem).attr('data-count-posts'));
    var posts_per_page  = parseInt($(ielem).attr('data-posts-per-page'));
    var tspaging_design = $(ielem).attr('data-paging-design');
    var $style          = $(ielem).attr( 'data-style' )
    
    if ( parseInt( $('#blog-masonry .blog-item-masonry').length ) < count_posts )
    {
        $(ielem).hide();
        $spinner.show();
    
        $.ajax({
    		url: $masonry.data('url'),
    		type: 'POST',
    		data: {'action': 'ts_get_masonry_items', 'page': page, 'posts_per_page': posts_per_page , 'ts_style': $style},
    		dataType: 'json',
    		success: function(data)
    		{
    		    if ( paging_design == 'scroll') {
    		        loading = false;
    		    }
                
    		    if ( data.length > 0 )
                {
                    $(ielem).attr('data-current-page', page);
                    var items = [];
        			for ( var c = 0; c < data.length; c++ )
        			{
        				var elem = document.createElement('div');
        				$(elem).attr('id', 'post-'+data[c].id);        				
        				$(elem).html(data[c].html);
                        $(elem).attr('class', $(elem).find('article').attr('class'));
                        $(elem).find('article').removeAttr('class');
        				items.push(elem);
        			}
                    
        			$masonry.append( items );
                    s();
                    $masonry.masonry( 'appended', items );
                    
                    var $author_post = jQuery('.author-post');
                    if ( jQuery( '.ts-show-avatar' ).length )
                    {
                        if( jQuery( '.ts-show-avatar' ).is(":checked") ) {
                            $author_post.show();
                            $('.blog-item').removeClass( 'ts_author_hide' );
                        } else {
                            $author_post.hide();
                            $('.blog-item').addClass( 'ts_author_hide' );
                        }
                    }
                    
                    _initSlideGallery();_initSocialToggle();
                    setTimeout( function() {
                        $('#main_container').fitVids();
                        s();
                        $masonry.masonry();
                        
                        if ( paging_design == 'load_more') {
                            $(ielem).show();
                        }
                        
                        if ( tspaging_design == 'masonry_load_more_number' ) {
                            $(ielem).find('.masonry_load_more_number').html('(' + $('.blog-item-masonry').length + '/' + count_posts + ')');   
                        }
                        
                    }, 5000 );
                    
                    if ( parseInt( $('.blog-item-masonry').length ) >= count_posts )
                    {
                        if ( tspaging_design == 'masonry_load_more_number' ) {
                            $(ielem).html( 'THE END (' + count_posts + '/' + count_posts + ')' ).show();
                        } else {
                            $(ielem).html('THE END').show();
                        }
                        
                        if (paging_design == 'scroll') {
            		        loading = true;
            		    }
                    }                
                }
                $spinner.hide();
    		}
    	}).fail(function() {
    	   $spinner.hide();           
           if (paging_design == 'load_more') {
               $(ielem).show();
           }
           if (paging_design == 'scroll') {
    	       loading = true;
    	   }
    	});
    }        
}

$(document).ready(function() {
    var btnLoadMore = $('#ts-blog-masonry #ts-loadmore-items');
    if ( $('#ts-blog-masonry #ts-loadmore-items').length > 0 )
    {
        btnLoadMore.click(function(){
            TSLoadMoreMSR('#ts-blog-masonry #ts-loadmore-items', 'load_more');
        });
        
        if ( btnLoadMore.attr('data-paging-design') == 'masonry_infinite_scroll' )
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
            
            $(window).scroll(function()
            {
                if( ( $(window).height() + $(window).scrollTop() >  $(document).height() - postionBottom - 250 ) && loading == false)
                {
                    loading = true;
                    TSLoadMoreMSR('#ts-blog-masonry #ts-loadmore-items', 'scroll');
                }
            });                        
        }
    }
});