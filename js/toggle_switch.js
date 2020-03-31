$(function() {
  $('.layerSwitch').change(function() {
    //$('#console-event').html('Toggle: ' + $(this).prop('checked'));
    if ($(this).prop("checked")){ //從關閉變成打開
      alert("The "+ this.id + " Layer is Open.");
      //alert(this.id + " " +$(this).prop('checked'));
      // 打開此圖層的js
    }
    else{  //從打開變成關閉 
      alert("The "+ this.id + " Layer is Close.");
      // 關閉此圖層的js
    }
    
  })
})


function alerttest(){
  alert("test");
}