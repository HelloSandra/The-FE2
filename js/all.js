$(document).ready(function(){
  //簽名or匯入
  $('.sign-import span').click(function(event){
    $(this).addClass('active').siblings().removeClass('active');
  })

  //筆的顏色
  $(".pen-color .color").click(function(event){
    $(this).addClass('active').siblings().removeClass('active');
  })
})