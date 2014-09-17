var idMaganager = {

    classNameText: "hotfrets-guitar-module",

    idPrefixText: "guitar-module-container-",

    processScriptInstance: function(this_script) {
      var div= document.createElement('div');
      div.className = "temp";
      this_script.parentNode.insertBefore(div, this_script);
      var container = div.parentNode;
      div.remove;
      return container;
    },

    setId: function(container) {
      if($("#"+container.id).length == 0) {
        var newID = this.findNextAvailableID();
        container.id = newID;
      }
      container.appendChild(document.createTextNode('Hello, my ID is '+container.id));
    },

    classCounter: function() {
      if($('.'+this.classNameText).length > 0) {
        var numModules = $('.'+this.classNameText).length;
        return numModules;
      } else {
        return 0;
      }
    },

    getNextIDNum: function(n) {
      n++;
      return n;
    },

    idExists: function(id) {
      var elementExists = document.getElementById(id);
      if(elementExists) {
        return true;
      } else {
        return false;
      }
    },

    buildNewID: function() {
      var n = 1;
      do {
        var newID = this.idPrefixText + n;
        n++;
      }
      while (this.idExists(newID));
      return newID;
    },

    findNextAvailableID: function() {
      var newID = this.buildNewID();
      return newID;
    }
  }

var $ = jQuery;

var necks = {};

$(function(){
  $('.guitar-module-main-wrapper').each(function(){

    var container = $(this).parent();
    var containerID = container.attr('id');

    if($(this).find('.meta').length) {

      necks[containerID] = Object.create(neckModule);

      var presetParams = {};
      $(this).find('.meta').each(function(){
        var paramName = $(this).attr('id');
        var paramVal = $(this).attr('data-content');
        // check for boolean
        if(paramVal == "true") { paramVal = true; }
        if(paramVal == "false") { paramVal = false; }
        presetParams[paramName] = paramVal;
      });

      necks[containerID].initParams(presetParams);

      necks[containerID].initLayout();

      necks[containerID].initActions();

    }
  });
});

