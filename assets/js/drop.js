var neckModules = [];

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    console.log(ev);
    var data = ev.dataTransfer.getData("Text");

    console.log(data);
    makeNeck(data);
    ev.target.appendChild(document.getElementById(data));
}

function makeNeck(id) {
  var $ = jQuery.noConflict();
  var idArr = id.split('_');
  var rootNote = idArr[0];
  var scaleType = idArr[1];
  var divId = ('neck_'+id).toLowerCase();
  console.log(divId);
  var newDiv = "<div id='"+divId+"'></div>";
  $('#container').append(newDiv);
  neckModules[divId] = Object.create(neckModule);
  neckModules[divId].initLayout({rootNote: rootNote, myContainer: divId});
}