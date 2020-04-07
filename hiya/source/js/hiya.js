$(document).ready(function(){
    pjaxLoad();
    $('.bMenuTitle').on('click',function(){
        $(this).children('.oneLevelList').slideDown("fast");
        $(this).siblings().children('.oneLevelList').slideUp("fast");
    })
});
function pjaxLoad(){
  $(document).pjax('#menuDiv a', '#post', {fragment:'#post', timeout:8000});
  
}