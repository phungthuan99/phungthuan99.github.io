$(document).ready(function(){
    $('.link-with-me').on('click', function(){
        $('.with-me').show();
        $('.portfolio').hide();
        $('.works').hide();
        $('.social-network').hide();
    });
    $('.link-portfolio').on('click', function(){
        $('.portfolio').show();
        $('.with-me').hide();
        $('.works').hide();
        $('.social-network').hide();
    });
    $('.link-works').on('click', function(){
        $('.works').show();
        $('.portfolio').hide();
        $('.with-me').hide();
        $('.social-network').hide();
    });
    $('.link-social-network').on('click', function(){
        $('.social-network').show();
        $('.portfolio').hide();
        $('.works').hide();
        $('.with-me').hide();
    });
})