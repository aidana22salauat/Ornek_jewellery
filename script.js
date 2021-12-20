
function big(element){
    element.style.fontSize = "30px";
    element.style.color = "grey";
}

function small(element){
    element.style.fontSize = "25px";
    element.style.color = "black";
   
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

var map;

DG.then(function () {
    map = DG.map('map', {
        center: [43.23, 76.89],
        zoom: 13
    });
    
    DG.marker([43.23, 76.89]).addTo(map).bindPopup('Розыбакиева 23Б');
});
var map;

DG.then(function () {
    map = DG.map('map1', {
        center: [51.16, 71.44],
        zoom: 13
    });
    
    DG.marker([51.16, 71.44]).addTo(map).bindPopup('Рамазан 85');
});

