
function searchLayer() {
  var input, filter, ul, li, i, layername;
    input = document.getElementById("LayerInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("mapsearchLayer");
    li = ul.getElementsByTagName("li");
    
    for (i = 0; i < li.length; i++) {
    layername = li[i].getElementsByClassName("mapLayerForSearch")[0];
        if (layername.innerHTML.toUpperCase().indexOf(filter) > -1) { //有找到
          // console.log("find");
          li[i].style.display="";
          li[i].parentElement.parentElement.style.display=""; //最外面的layer list要打開
        } else { // 沒找到
          li[i].style.display="none";
          // console.log("not find");
        }
    }
}
