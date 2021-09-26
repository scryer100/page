var index=0;
var divContent=$('.list2 > div');
// $('#List .phone-list > div').click(function (){
//     alert()
//     var clickIndex=$(this).index();
//     $(this).style.color='blue';
// })
$("#List .phone-list > div").click(function() {
    $(this).addClass('curr').siblings().removeClass('curr');
    var index = $(this).index();
    number = index;
    $('#List .phone-list > div').children('a').css('color','#848484');
    $(this).children('a').css('color','#344356');
    $('.list2 > div').hide();
    $('.list2 > div:eq(' + index + ')').show();
});