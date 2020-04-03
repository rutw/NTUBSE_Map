$(function() {
  $('.layerSwitch').change(function() {
    //$('#console-event').html('Toggle: ' + $(this).prop('checked'));
    if ($(this).prop("checked")){ //從關閉變成打開
      //alert("The "+ this.id + " Layer is Open.");
      //alert(this.id + " " +$(this).prop('checked'));
      // 打開此圖層的js
      let id=this.id;
      $.getJSON($(this).attr("id")+".geojson",function(data){
        geojsonlayer=L.geoJson(data);  
        geojsonlayer.addTo(mymap);
        myLayer.set(id,geojsonlayer);
      });

    }
    else{  //從打開變成關閉 
      //alert("The "+ this.id + " Layer is Close.");
      myLayer.get(this.id).remove();
      myLayer.set(this.id,null);
    }
  })
})


function alerttest(){
  alert("test");
}