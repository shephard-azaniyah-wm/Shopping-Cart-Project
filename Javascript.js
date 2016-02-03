/**
 * Created by session1 on 1/28/16.
 */

jQuery(document).ready(function () {
    jQuery('.tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');


   jQuery('.tabs' + currentAttrValue).fadeIn(400).siblings ().hide;

        jQuery(this).parent('li').addClass ('active').siblings ().removeClass('active');

        e.preventDefault();

    });
});
