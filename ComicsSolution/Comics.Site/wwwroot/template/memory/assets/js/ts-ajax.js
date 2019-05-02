// JS For Ajax
if ( jQuery('.ts-nav-sliders a.nav-control').length > 0 )
{
    var working = false;
    var $button = jQuery('.ts-nav-sliders a.nav-control');
    $button.click(function(e) {
        
        e.preventDefault();
        var $this = jQuery(this);
        var $posttype = $this.attr("data-post");
        
        if ( $this.hasClass('active') ) {
            return false;
        }
        
        $button.removeClass('active');
        $this.addClass('active');
        
        var loader = jQuery('.ts-loader');
        loader.show();
        working = true;
        jQuery.ajax({
            type : 'POST',
            data : {'action' : 'ts_get_post_slider', 'type' : $posttype},
            url : ajax.url,
            dataType: 'html',
            success : function( response )
            {
                if( response )
                {
                    response = jQuery.trim( response );
                    
                    if( response != "" ) {
                        jQuery('#ts-post-features').html(response).fadeIn(3000, function(){loader.fadeOut();});
                    } else {
                        jQuery('#ts-post-features').html( '<div style="text-align: center; width: 100%;">No posts found!</div>' ).fadeIn(3000, function(){loader.fadeOut();});
                    }
                }
            }
        });
        
    });
}