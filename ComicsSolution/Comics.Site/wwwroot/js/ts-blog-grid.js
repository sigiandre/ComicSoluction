var $ = jQuery.noConflict();
var $grid = $('#blog-grid');
function grid_i()
{
    var t = $grid.attr("data-cols");
    if (t == "1") {
        var n = $grid.width();
        var r = 1;
        return r
    }
    if (t == "2") {
        var n = $grid.width();
        var r = 2;
        if (n < 480) r = 1;
        return r
    } else if (t == "3") {
        var n = $grid.width();
        var r = 3;
        if (n < 480) r = 1;
        else if (n >= 480 && n < 788) r = 2;
        else if (n >= 788 && n < 1160) r = 3;
        else if (n >= 1160) r = 3;
        return r
    } else if (t == "4") {
        var n = $grid.width();
        var r = 4;
        if (n < 480) r = 1;
        else if (n >= 480 && n < 788) r = 2;
        else if (n >= 788 && n < 1160) r = 3;
        else if (n >= 1160) r = 4;
        return r
    } else if (t == "5") {
        var n = $grid.width();
        var r = 5;
        if (n < 480) r = 1;
        else if (n >= 480 && n < 788) r = 2;
        else if (n >= 788 && n < 1160) r = 3;
        else if (n >= 1160) r = 5;
        return r
    } else if (t == "6") {
        var n = $grid.width();
        var r = 5;
        if (n < 480) r = 1;
        else if (n >= 480 && n < 788) r = 2;
        else if (n >= 788 && n < 1160) r = 3;
        else if (n >= 1160) r = 6;
        return r
    } else if (t == "7") {
        var n = $grid.width();
        var r = 5;
        if (n < 480) r = 1;
        else if (n >= 480 && n < 788) r = 2;
        else if (n >= 788 && n < 1160) r = 3;
        else if (n >= 1160) r = 8;
        return r
    }
}
    
function grid_s()
{
    var t = grid_i();
    var n = $grid.width();
    var r = n / t;
    r = Math.floor(r) - 4;
    $("#blog-grid .blog-item-masonry").each(function (t) {
        $(this).css({
            width: r + "px"
        });
    });
}

grid_s();
$(window).load(function () {
    setTimeout( function() { grid_s(); }, 1000 );
    
});

$(window).on("debouncedresize", function (e) {
    grid_s();
    
});

function _initSocialToggle_Grid()
{
    jQuery('.blog-item-masonry .social-togole').on( "click", function() {
        jQuery(this).parent().find('.group-share').toggle("slide", {direction:"right"}, 700);
    });
}

var grid_loading  = false;
function GridTSLoadMoreMSR(ielem, paging_design)
{

    var $spinner        = $('#ts-grid-layout .loader');
    var page            = parseInt($(ielem).attr('data-current-page')) + 1;
    var count_posts     = parseInt($(ielem).attr('data-count-posts'));
    var posts_per_page  = parseInt($(ielem).attr('data-posts-per-page'));
    var tspaging_design = $(ielem).attr('data-paging-design');
    var $style          = $(ielem).attr('data-style');
    var cat             = $(ielem).attr('data-category');
    var tag             = $(ielem).attr('data-tag');
    var s               = $(ielem).attr('data-s');
    var author          = $(ielem).attr('data-author');
    
    var $ids             = [];
    var $liPosts = $('#blog-grid li.blog-item');
    if ( $liPosts.length ) {
        $liPosts.each( function() {
            if ( $(this).attr( 'data-post-id' ) > 0 ) {
                $ids.push( $(this).attr( 'data-post-id' ) );
            }
        });
    }
    
    if ( parseInt( $('#ts-grid-layout .blog-item-masonry').length ) < count_posts )
    {
        $spinner.show();
        $(ielem).hide();
        
        $.ajax({
    		url: $grid.data('url'),
    		type: 'POST',
    		data: {'action': 'ts_get_masonry_items', 'author': author, 's' : s, 'tag' : tag, 'ts_cat' : cat, 'ids': $ids, 'page': page, 'posts_per_page': posts_per_page , 'ts_style': $style, 'ts_type': 'grid'},
    		dataType: 'html',
    		success: function( data )
    		{
    		    if ( paging_design == 'scroll') {
    		        grid_loading = false;
    		    }
                
    		    if ( data.length > 0 )
                {
        			$('#ts-grid-layout .blog-item-masonry:last').after(data);
                    
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
                    
    
                    grid_s();
                    _initSocialToggle_Grid();
                    if (paging_design == 'load_more') {
                        $(ielem).show();
                    }
                    
                    if (tspaging_design == 'masonry_load_more_number') {
                        $(ielem).find('.masonry_load_more_number').html('(' + $('#ts-grid-layout .blog-item-masonry').length + '/' + count_posts + ')');   
                    }
                    
                    $(ielem).attr('data-current-page', page);
                    if ( parseInt( $('#ts-grid-layout .blog-item-masonry').length ) >= count_posts )
                    {
                        if ( tspaging_design == 'masonry_load_more_number' ) {
                            $(ielem).html( 'THE END (' + count_posts + '/' + count_posts + ')' ).show();
                        } else {
                            $(ielem).html('THE END').show();
                        }
                        
                        if (paging_design == 'scroll') {
            		        grid_loading = true;
            		    }
                    }
                }
                $spinner.hide();
    		}
    	}).fail(function() {
    	   $spinner.hide();
           if ( paging_design == 'load_more') {
               $(ielem).show();
           }
                        
           if (paging_design == 'scroll') {
               grid_loading = true;
    	   }
    	});
    }
}

$(document).ready(function() {
    $('.ts-inav-slide a').hide();
    var btnLoadMoreGrid = $('#ts-grid-layout #ts-loadmore-items');
    if ( $('#ts-grid-layout #ts-loadmore-items').length > 0 )
    {
        btnLoadMoreGrid.click(function(){
            GridTSLoadMoreMSR('#ts-grid-layout #ts-loadmore-items', 'load_more');
        });
        
        if ( btnLoadMoreGrid.attr('data-paging-design') == 'masonry_infinite_scroll' )
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
                if( ( $(window).height() + $(window).scrollTop() >  $(document).height() - postionBottom - 250 ) && grid_loading == false)
                {
                    grid_loading = true;
                    GridTSLoadMoreMSR('#ts-grid-layout #ts-loadmore-items', 'scroll');
                }
            });
        }
    }
});