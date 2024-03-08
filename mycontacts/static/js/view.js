$(document).ready(function() {
	// Test for placeholder support
    // $.support.placeholder = (function(){
    //     var i = document.createElement('input');
    //     return 'placeholder' in i;
    // })();


        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
            
            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");

            if (e.type == 'blur') {
                if( $this.val() != '' ) {                    
                    $parent.addClass('js-unhighlight-label');
                }
            } 
            if (e.type == 'focus') {
                if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
            }
        });
    } 
});