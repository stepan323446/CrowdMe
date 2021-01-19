$(function()
{
    $('.info-item_i').slideUp(0);
    $('.info-item_i.active').slideDown(0);

    $('.info-tabs__menu li').click(function(e)
    {
        e.preventDefault();
        let obj = e;
        /*
        $('.info-tabs__menu li').removeClass('active');
        $('.info-item_i').removeClass('active');
        $('.info-tabs__num').removeClass('active');

        $(this).addClass('active');
        $(this).find('.info-tabs__num').addClass('active');
        
        $($(this).children('a').attr('href')).addClass('active'); 
        */
       $('.info-tabs__menu li').removeClass('active');
       $('.info-tabs__num').removeClass('active');
       

       $(this).addClass('active');
        $(this).find('.info-tabs__num').addClass('active');

        $('.info-item_i').slideUp(500);
        $($(this).children('a').attr('href')).slideDown(500);
    });
});