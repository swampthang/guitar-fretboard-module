var chordModule = (function() {
// IDEA! Maybe include a boolean - editorMode = true/false and not create the buttons, selectors, etc if editorMode == false
  var $ = jQuery.noConflict();

  var chord = {
    container:                {},
    containerSelectorType:    'id',
    wrapper:                  {},
    params:                   {},
    htmlPieces:               "",
    totalFrets:               22,
    rootnote:                 "C",
    chordtype:                "major",
    scaleArr:                 [],
    intervalArr:              [],
    typeArr:                  [],
    positionArr:              [],
    noteArr:                  [],
    stringDivs:               "",
    naturals:                 ('A','B','C','D','E','F','G'),
    accidentals:              ('A#','Bb','C#','Db','D#','Eb','F#','Gb','G#','Ab'),
    viewMode:                 "arpeggio",
    strings: {
      1:  new Array('E','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb'),
      2:  new Array('B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#','D','D#','E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb'),
      3:  new Array('G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','E#,F','F#,Gb'),
      4:  new Array('D','D#,Eb','E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db'),
      5:  new Array('A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','E#,F','F#,Gb','G','G#,Ab'),
      6:  new Array('E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb')
    },
    scales: {
      'C':   new Array('C','D','E','F','G','A','B','Eb','Bb','Gb','G#','Db','D#','F#'),
      'G':   new Array('G','A','B','C','D','E','F#','Bb','F','Db','D#','Ab','A#','C#'),
      'D':   new Array('D','E','F#','G','A','B','C#','F','C','Ab','A#','Eb','E#','G#'),
      'A':   new Array('A','B','C#','D','E','F#','G#','C','G','Eb','E#','Bb','B#','D#'),
      'E':   new Array('E','F#','G#','A','B','C#','D#','G','D','Bb','B#','F','G','A#'),
      'B':   new Array('B','C#','D#','E','F#','G#','A#','D','A','F','G','C','D','E#'),
      'F#':  new Array('F#','G#','A#','B','C#','D#','E#','A','E','C','D','G','A','B#'),
      'C#':  new Array('C#','D#','E#','F#','G#','A#','B#','E','B','G','A','D','E','G'),
      'F':   new Array('F','G','A','Bb','C','D','E','Ab','Eb','Cb','C#','Gb','G#','B'),
      'Bb':  new Array('Bb','C','D','Eb','F','G','A','Db','Ab','Fb','F#','Cb','C#','E'),
      'Eb':  new Array('Eb','F','G','Ab','Bb','C','D','Gb','Db','A','B','Fb','F#','A'),
      'Ab':  new Array('Ab','Bb','C','Db','Eb','F','G','Cb','Gb','D','E','A','B','D'),
      'Db':  new Array('Db','Eb','F','Gb','Ab','Bb','C','Fb','Cb','G','A','D','E','G'),
      'Gb':  new Array('Gb','Ab','Bb','Cb','Db','Eb','F','Bb','Fb','C','D','G','A','C'),
      'Cb':  new Array('Cb','Db','Eb','Fb','Gb','Ab','Bb','E','Bb','F','G','C','D','F')
    },
    // after major scale notes come altered notes - (7=>m3), (8=>b7), (9=>b5), (10=>#5), (11=>b9), (12=>#9), (13=>#11)
    chordTypes: {
      'major': {'symbol': '', 'selectName': 'Major Triad', 'arrayPositions': [0,2,4], 'intervals': [1,3,5]},
      'minor': {'symbol': 'm', 'selectName': 'Minor Triad', 'arrayPositions': [0,7,4], 'intervals': [1,3,5]},
      'diminished': {'symbol': 'd', 'selectName': 'Diminished Triad', 'arrayPositions': [0,7,9], 'intervals': [1,3,5]},
      'maj7': {'symbol': 'maj7', 'selectName': 'Major 7th', 'arrayPositions': [0,2,4,6], 'intervals': [1,3,5,7]},
      'min7': {'symbol': 'm7', 'selectName': 'Minor 7th', 'arrayPositions': [0,7,4,8], 'intervals': [1,3,5,7]},
      'dom7': {'symbol': '7', 'selectName': 'Dominant 7th', 'arrayPositions': [0,2,4,8], 'intervals': [1,3,5,7]},
      'min7b5': {'symbol': 'm7b5', 'selectName': 'Minor 7b5', 'arrayPositions': [0,7,9,8], 'intervals': [1,3,5,7]},
      'dim7': {'symbol': 'd7', 'selectName': 'Diminished 7th', 'arrayPositions': [0,7,9,5], 'intervals': [1,3,5,7]},
      'maj9': {'symbol': 'maj9', 'selectName': 'Major 9th', 'arrayPositions': [0,2,4,6,1], 'intervals': [1,3,5,7]},
      'min9': {'symbol': 'm9', 'selectName': 'Minor 9th', 'arrayPositions': [0,7,4,8,1], 'intervals': [1,3,5,7]},
      'dom9': {'symbol': '9', 'selectName': 'Dominant 9th', 'arrayPositions': [0,2,4,8,1], 'intervals': [1,3,5,7]},
      'dom7b5': {'symbol': '7b5', 'selectName': 'Dominant 7b5', 'arrayPositions': [0,2,9,8], 'intervals': [1,3,5,7]},
      'dom7b5b9': {'symbol': '7b5b9', 'selectName': 'Dominant 7b5b9', 'arrayPositions': [0,2,9,8,11], 'intervals': [1,3,5,7]},
      'dom7#5': {'symbol': '7#5', 'selectName': 'Dominant 7#5', 'arrayPositions': [0,2,10,8], 'intervals': [1,3,5,7]},
      'dom7#5b9': {'symbol': '7#5b9', 'selectName': 'Dominant 7#5b9', 'arrayPositions': [0,2,10,8,11], 'intervals': [1,3,5,7]},
    },
    setChordNotes: function(root,type) {

      this.rootnote = (root == undefined ? this.rootnote : root );
      this.chordtype = (type == undefined ? this.chordtype : type );
      root = this.rootnote;
      type = this.chordtype;

      this.scaleArr = this.scales[root];
      this.typeArr = this.chordTypes[type];
      this.intervalArr = this.typeArr['intervals'];
      this.positionArr = this.typeArr['arrayPositions'];
      this.noteArr = [];
      var symbol = this.typeArr['symbol'];
      for(var n=0; n<this.positionArr.length;n++) {
        this.noteArr.push(this.scaleArr[this.positionArr[n]]);
      }

      return this.noteArr;
    },
    getSymbol: function(type) {
      return this.chordTypes[type]['symbol'];
    }

  };

  chord.preserveMetaData = function() {

    if(this.container.find('.meta').length) {

      var metaData = "";
      this.container.find('.meta').each(function(){
        var paramName = $(this).attr('id');
        var paramVal = $(this).attr('data-content');
        // check for boolean
        if(paramVal == "true") { paramVal = true; }
        if(paramVal == "false") { paramVal = false; }
        metaData += '<div class="meta" id="'+paramName+'" data-content="'+paramVal+'"></div>\n';
      });
      return metaData;
    } else {
      return null;
    }
  };

  chord.buildNoteGrid = function() {
    var note;
    for(var s=1; s<=6; s++)
    {
        for (var f=0; f<=this.totalFrets; f++)
        {

            note = this.strings[s][f];

            if(note.indexOf(',' ) != -1)
            {
                this.pair = true;
                this.pairArr = note.split(',');

                for (var n=0; n<=1; n++)
                {
                    note = this.pairArr[n];
                    this.stringDivs += this.buildNoteDiv(note, s, f);
                }

            } else {
                this.stringDivs += this.buildNoteDiv(note, s, f);

            }

        }
    }
    return this.stringDivs;
  };

  chord.updateMaintitleDiv = function() {
    var symbol = this.getSymbol(this.chordtype);
    this.wrapper.find('h2.chord-name').html(this.rootnote+((symbol != "") ? '<sup>'+symbol+'</sup>' : ""));
  };

  chord.buildNoteDiv = function(note, s, f)
  {

    if(note.indexOf('#') !== -1)
    {
      noteType = 'sharp';
    } else if(note.indexOf('b') !== -1) {
      noteType = 'flat';
    } else {
      noteType = 'natural';
    }
    string = 'string' + s;
    fret = 'fret' + f;
    stringDiv = "<div id='st"+s+"_"+f+"' notename='"+note+"' class='note "+string+" "+fret+" "+noteType+" f"+s+"_"+f+"'>"+note+"</div>";

    return stringDiv;

  };

  chord.buildPositionSelectors = function(selected) {
    var selectors = '<div class="position-selector-holder">';
    selectors += '  <select id="position-selectors">';
    selectors += '    <option value="0"'+((selected == 0) ? " selected" : "")+'>Open position</option>';
    selectors += '    <option value="1"'+((selected == 1) ? " selected" : "")+'>1st position</option>';
    selectors += '    <option value="2"'+((selected == 2) ? " selected" : "")+'>2nd position</option>';
    selectors += '    <option value="3'+((selected == 3) ? " selected" : "")+'">3rd position</option>';
    for(var p=4;p<=(this.totalFrets-5);p++) {
      selectors += '    <option value="'+p+'"'+((selected == p) ? " selected" : "")+'>'+p+'th Position</option>';
    }
    selectors += '  </select>';
    selectors += '</div>';
    return selectors;
  };

  chord.buildRootNoteSelectors = function(root) {
    var selectors = '<div class="rootnote-selector-holder">';
    selectors += '  <select id="rootnote">';
    var selectorArr = ['C','G','D','A','E','B','F#','C#','F','Bb','Eb','Ab','Db','Gb','Cb'];
    for(var s=0;s<selectorArr.length;s++) {
      selectors += '    <option value="'+selectorArr[s]+'"'+((root == selectorArr[s]) ? " selected" : "")+'>'+selectorArr[s]+'</option>';
    }
    selectors += '  </select>';
    selectors += '</div>';
    return selectors;
  };

  chord.buildChordTypeSelectors = function(type) {
    var selectors = '<div class="chordtype-selector-holder">\n';
    selectors += '  <select id="chordtype">\n';
    for (var key in this.chordTypes) {
      if (this.chordTypes.hasOwnProperty(key)) {
        selectors += '    <option value="'+key+'"'+((type == key) ? " selected" : "")+'>'+this.chordTypes[key]['selectName']+'</option>\n';
      }
    }
    selectors += '  </select>\n';
    selectors += '</div>\n';
    return selectors;
  };

  chord.buildViewModeControls = function() {
    //  stopped here
  }

  chord.buildChord = function(root,type) {
    var chordNotes = this.setChordNotes(root,type);
    this.wrapper.find('.note').hide().removeClass('in-chord on off').removeAttr('interval');
    for( var n=0; n<chordNotes.length; n++ ) {
      var theNote = chordNotes[n];
      var theInterval = this.intervalArr[n];
      this.wrapper.find(".note[notename='"+theNote+"']").show().addClass('in-chord on').attr('interval',theInterval);
    }
    this.updateMaintitleDiv();
    this.updateMetaDivs('rootnote',root);
    this.updateMetaDivs('chordtype',type);
    this.createNotation();
  }

  chord.replaceModuleInitScript = function() {
    var snippet = '<div>\n  <script id="chordModuleScript" type="text/javascript">\n    function buildChordModule() {\n      var this_script = document.getElementById("chordModuleScript");\n      var container = chordIdManager.processScriptInstance(this_script);\n      var chordChartID = chordIdManager.setId(container);\n      chordModuleInit(chordChartID);\n    }\n    </script>\n  </div>';
    $('#divSnippets').find('.js-chord-module')[0].innerHTML = snippet;
    return snippet;
  }

  chord.initParams = function() {

    if( objectIsEmpty(this.params) ) {
      this.params = {
        container:                'chord-container',
        containerSelectorType:      'id',
        showIntervalColorKey:       true,
        totalFrets:                 22,
        rootnote:                   'C',
        toggleStringVisibility:     true,
        neckStyleClass:             "",
        position:                   0,
        viewMode:                   "arpeggio"
      };

      if(arguments !== undefined) {
        for ( name in arguments[0] ) {
          if( arguments[0].hasOwnProperty(name)) {
            this.params[name] = arguments[0][name];
          }
        }
        this.initialParams = this.params;
      }
    }

    var params = this.params;

    if(params.containerSelectorType == 'id') {
      this.container = $('#'+params.container);
    } else if(params.containerSelectorType == 'class') {
      this.container = $('.'+params.container);
    }

    this.totalFrets = params.totalFrets;
    this.rootnote = params.rootnote;
    this.chordtype = params.chordtype;
    this.position = params.position;
    this.viewMode = params.viewMode;

    if(params.neckStyleClass !== "") {
      this.container.addClass(params.neckStyleClass);
    }

  };

  chord.notesInView = function() {
    var pos = parseInt(this.position);
    var topfret = pos + 4;
    if(pos == 0) { topfret = 5; } // if in open position, the top fret is still going to be the 5th fret
    console.log(topfret);
    var notesOnString = [];
    notesOnString[6]=[];
    notesOnString[5]=[];
    notesOnString[4]=[];
    notesOnString[3]=[];
    notesOnString[2]=[];
    notesOnString[1]=[];

    for (var s=6; s>=1; s--) {
      // starts on 6th string
      var cnt = 0;
      for(var f=pos; f<=topfret; f++) {
        var checkNote = (this.wrapper.find('.f'+s+'_'+f).hasClass('in-chord') && this.wrapper.find('.f'+s+'_'+f).hasClass('on'));
        if(checkNote) {
          notesOnString[s][cnt]=this.wrapper.find('.f'+s+'_'+f+'.in-chord');
          cnt++;
        }
      }
    }

    return notesOnString;
  }

  chord.toggleVisible = function(note) {

    if(note.hasClass('on')) {
      note.addClass('off').removeClass('on');
    } else {
      note.addClass('on').removeClass('off');
    }

  }

  // chord.incrementChord = function() {
  //   var $ = jQuery;
  //   var notes = this.notesInView();
  //   // iterate through each combination of strings and notes (recursive function maybe?)
  //   this.wrapper.find('.note').hide();
  //   for(var s=1;s<=6;s++) {
  //     notes[s][0].show();
  //   }
  // }


  chord.initLayout = function() {

    var container = this.container;
    var metaData = this.preserveMetaData();
    var params = this.params;
    this.htmlPieces = "";

    // MAIN MODULE WRAPPER
    this.htmlPieces += openMainWrapper();

    this.htmlPieces += this.buildMaintitleDiv();

    // TOP
    this.htmlPieces += openTopDiv();

    this.htmlPieces += buildChordModuleDiv();
    
    if(metaData !== null) {
      this.htmlPieces += metaData;
    }

    // close mainModuleWrapper
    this.htmlPieces += closeDiv();
    this.htmlPieces += this.buildPositionSelectors(this.position);
    this.htmlPieces += this.buildChordTypeSelectors(this.chordtype);
    this.htmlPieces += this.buildRootNoteSelectors(this.rootnote);

    container.html(this.htmlPieces);

    return this.htmlPieces;

  };

  chord.initActions = function() {
    var container = this.container;
    var that = this;
    var wrapper = this.wrapper = this.container.find('.vertical-neck-module-wrapper');

    this.stringDivs = this.buildNoteGrid();

    wrapper.find('.vertical-neck-module').html(this.stringDivs);

    wrapper.find('#rootnote').change(function(){
      that.buildChord(this.value,that.chordtype);

    });

    wrapper.find('#chordtype').change(function(){
      that.buildChord(that.rootnote,this.value);
    });

    wrapper.find('#position-selectors').change(function(e){
      e.preventDefault();
      var pos = $(this).val();
      that.switchPosition(pos);
    });

    wrapper.find('.note').click(function(){
      console.log('ran toggleVisible');
      that.toggleVisible($(this));
      that.createNotation();
    });

    this.wrapper.find('.note').hide();
    this.buildChord();

    if(this.position > 0) {
      this.switchPosition(this.position);
    }

    this.updateMetaDivs('position',this.position);
    this.updateMetaDivs('rootnote',this.rootnote);
    this.updateMetaDivs('chordtype',this.chordtype);

    this.createNotation();

  };

  chord.updateMetaDivs = function(tagID, val) {
    if(this.wrapper.find(".meta#"+tagID).length) {
      this.wrapper.find(".meta#"+tagID).attr('data-content',val);
    } else {
      this.wrapper.append("<div class='meta' id='"+tagID+"' data-content='"+val+"'>");
    }
  }

  chord.initChordMode = function() {
  /**
    * set styles for chord mode
    * activate reset link/button on first note click
    * maybe create some sort of animating note background?
    * activate a hide-others or save chord-notes link/button
    */
    this.wrapper.find('.note.in-chord').addClass('pulse');
  }

  chord.stackChordNotation = function(notes) {

    var lastItem = notes[1].length-1;
    var lastEl = notes[1][lastItem];
    console.log(lastEl);
    var chordStack = " :w (";

    for(var s=6; s>=1; s--) {

      for (var n=0; n<notes[s].length; n++) {

        var id = notes[s][n].attr('id');
        var positionArray = id.substr(2).split("_");

        if(notes[s][n] != lastEl) {

          if(n==0) {

            chordStack += positionArray[1] + "/" + positionArray[0] + ".";

          } else {

            notes[s][n].addClass('off').removeClass('on');

          }

        } else {
          console.log('on lastEl');
          if(n==0) {

            chordStack += positionArray[1] + "/" + positionArray[0] + ")";
          
          } else {

            notes[s][n].addClass('off').removeClass('on');

          }

        }

      }
    }
    // doublecheck to be sure the string isn't gonna break
    if (chordStack.charAt(chordStack.length - 1) == ".") {
      chordStack = chordStack.slice(0,-1) + ')';
    }
    return chordStack;
  }

  chord.buildArpeggioNotation = function(notes) {
    var arpeggioNotes = "";
    for(var s=6; s>=1; s--) {
      for (var n=0; n<notes[s].length; n++) {
        var id = notes[s][n].attr('id');
        var positionArray = id.substr(2).split("_");
        arpeggioNotes += positionArray[1] + "/" + positionArray[0] + " ";
      }
    }
    return arpeggioNotes;
  }

  chord.createNotation = function() {
    var vextab = "options space=20\n tabstave notation=true\n ";
    vextab += "notes ";
    var notesOnString = this.notesInView();
    if(this.viewMode == 'arpeggio') {
      vextab += this.buildArpeggioNotation(notesOnString);
    } else {
      vextab += this.stackChordNotation(notesOnString);
    }
    
    notationData = vextab;
    render();
  }

  chord.switchPosition = function(pos) {
    var classStr = this.wrapper.find('.vertical-neck-module').attr('class');
    className = getCurrentPositionClassName(classStr);
    var moduleContainer = this.wrapper.find('.vertical-neck-module-container');
    var moduleDiv = this.wrapper.find('.vertical-neck-module');
    if(className !== "") {
      moduleDiv.removeClass(className);
    }
    moduleDiv.addClass('pos'+pos);
    if(pos == 0) {
      moduleContainer.addClass('open');
      this.wrapper.find('h2').removeClass('tight');
    } else {
      moduleContainer.removeClass('open');
      this.wrapper.find('h2').addClass('tight');
    }
    this.position = pos;
    this.buildChord(this.rootnote,this.chordtype);
    this.updateMetaDivs('position',pos);
    this.createNotation();
  }

  var getCurrentPositionClassName = function(str) {
    var arr = str.split(" ");
    var positionClassName = "";
    if(arr.length > 1) {
      positionClassName = arr[1];
    }
    return positionClassName;
  };

  chord.buildMaintitleDiv = function() {
    var symbol = this.getSymbol(this.chordtype);
    return '<h2 class="chord-name">'+this.rootnote+((symbol != "") ? '<sup>'+symbol+'</sup>' : "")+'</h2>';
  };

  var openMainWrapper = function() {
    return '<div class="vertical-neck-module-wrapper">';
  }

  var openTopDiv = function() {
    return '<div class="vertical-neck-module-container open">';
  }

  var buildChordModuleDiv = function() {
    return '<div class="vertical-neck-module"></div>';
  }

  var closeDiv = function() {
    return '</div>';
  }

  var objectIsEmpty = function(obj) {
    if (Object.keys(obj).length === 0) {
      return true;
    } else {
      return false;
    }
  }

  return chord;

})();
