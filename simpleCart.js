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


simpleCart({
    option1: "value" ,
    option2: "value2"
});

simpleCart({
    cartColumns: [
        { attr: "name" , label: "Name" } ,
        { attr: "price" , label: "Price", view: 'currency' } ,
        { view: "decrement" , label: false , text: "-" } ,
        { attr: "quantity" , label: "Qty" } ,
        { view: "increment" , label: false , text: "+" } ,
        { attr: "total" , label: "SubTotal", view: 'currency' } ,
        { view: "remove" , text: "Remove" , label: false }
    ]
});

