$(document).ready(function(){
    $('ul.semana li a:first').addClass('active');
    $('.dias article').hide();
    $('.dias article:first').show();

    $('ul.semana li a').click(function(){
        $('ul.semana li a').removeClass('active');
        $(this).addClass('active');
        $('.dias article').hide();

        var activeTab = $(this).attr('href');
        $(activeTab).show();
        return false;
    });
});