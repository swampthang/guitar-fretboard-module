/**
  * DEFAULTS
  * this.params = {
  *   myContainer:                'neck-container',  // string - The name of the DOM element in which the neckModule should be placed. Should be the string used in the selector and can be an id or a class placed on the DOM element. Must be unique.
  *   containerSelectorType:      'id',              // string - options=> 'id', 'class'
  *   showTitle:                  true,              // boolean - options=> true, false
  *   showScaleNotes:             true,              // boolean - options=> true, false
  *   showFretRange:              true,              // boolean - options=> true, false
  *   showFretRangeSelectors:     true,              // boolean - options=> true, false
  *   showKeySelectors:           true,              // boolean - options=> true, false
  *   showResetLink:              true,              // boolean - options=> true, false
  *   showChordButtons:           true,              // boolean - options=> true, false
  *   showNotesPerChordSelector:  true,              // boolean - options=> true, false
  *   showChordNameHeader:        true,              // boolean - options=> true, false
  *   showIntervalColorKey:       true,              // boolean - options=> true, false
  *   topfret:                    17,                // int - options=> 1-17
  *   lowfret:                    0,                 // int - options: 0-16
  *   scalesArray:                'majorScales',     // string - options=> 'majorScales', 'naturalMinorScales', 'harmonicMinorScales'
  *   rootNote:                   'C',               // string - options=> 'C', 'C#', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'
  *   showInitialChord:           false,             // boolean - options=> true, false
  *   initialChordInterval:       0,                 // int - options=> 1-7 - default to 0 which is no initial chord
  *   notesPerChord:              4                  // int - options=> 3-5
  *   allowFreeze:                false              // if set to true, a freeze and reset button are shown allowing you to freeze the settings and hide all controls
  *   toggleStringVisibility:     true               // if set to true, viewer will be able to toggle string viewability
  *   neckStyleClass:             ''                 // string - whatever is entered here will be a class name that is added to the container
  * };
  **/

var neckModule = (function() {

  var $ = jQuery.noConflict();

  var neck = {
    myContainer:            {},
    containerSelectorType:  'id',
    wrapper:                {},
    params:                 {},
    htmlPieces:             '',
    totalFrets:            20,
    majorScales:            new Array(),
    naturalMinorScales:     new Array(),
    harmonicMinorScales:    new Array(),
    showingChord:           false,
    cropping:               false,
    intval:                 0,
    naturals:               ('A','B','C','D','E','F','G'),
    accidentals:            ('A#','Bb','C#','Db','D#','Eb','F#','Gb','G#','Ab'),
    stringDivs:             "",
    audioArr:               new Array(),
    fret:                   "",
    string:                 "",
    note:                   "",
    noteType:               "",
    notesPerChord:          3,
    allowFreeze:            false,
    s:                      1,
    f:                      0,
    topfret:                20,
    lowfret:                0,
    pair:                   false,
    pairArr:                new Array(),
    currentScale:           new Array(),
    chordsArr:              new Array(),
    naturalMinorChordsArr:  new Array(),
    harmonicMinorChordsArr: new Array(),
    currentChordsArr:       new Array(),
    currentKey:             "",
    currentInterval:        "",
    notesOfKey:             "",
    toggleStringVisibility: true,
    neckStyleClass:         "",
    replaceInitSnippet:     false,
    strings: {
      1:  new Array('E','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db'),
      2:  new Array('B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#','D','D#','E,Fb','E#,F','F#,Gb','G','G#,Ab'),
      3:  new Array('G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb'),
      4:  new Array('D','D#,Eb','E,Fb','F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb'),
      5:  new Array('A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','E#,F','F#,Gb'),
      6:  new Array('E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db')
    },
    majorScales: {
      'C':   new Array('C','D','E','F','G','A','B'),
      'G':   new Array('G','A','B','C','D','E','F#'),
      'D':   new Array('D','E','F#','G','A','B','C#'),
      'A':   new Array('A','B','C#','D','E','F#','G#'),
      'E':   new Array('E','F#','G#','A','B','C#','D#'),
      'B':   new Array('B','C#','D#','E','F#','G#','A#'),
      'F#':  new Array('F#','G#','A#','B','C#','D#','E#'),
      'C#':  new Array('C#','D#','E#','F#','G#','A#','B#'),
      'F':   new Array('F','G','A','Bb','C','D','E'),
      'Bb':  new Array('Bb','C','D','Eb','F','G','A'),
      'Eb':  new Array('Eb','F','G','Ab','Bb','C','D'),
      'Ab':  new Array('Ab','Bb','C','Db','Eb','F','G'),
      'Db':  new Array('Db','Eb','F','Gb','Ab','Bb','C'),
      'Gb':  new Array('Gb','Ab','Bb','Cb','Db','Eb','F'),
      'Cb':  new Array('Cb','Db','Eb','Fb','Gb','Ab','Bb')
    },
    naturalMinorScales: {
      'A':    new Array('A','B','C','D','E','F','G'),
      'E':    new Array('E','F#','G','A','B','C','D'),
      'B':    new Array('B','C#','D','E','F#','G','A'),
      'F#':   new Array('F#','G#','A','B','C#','D','E'),
      'C#':   new Array('C#','D#','E','F#','G#','A','B'),
      'G#':   new Array('G#','A#','B','C#','D#','E','F#'),
      'D#':   new Array('D#','E#','F#','G#','A#','B','C#'),
      'A#':   new Array('A#','B#','C#','D#','E#','F#','G#'),
      'F':    new Array('F','G','Ab','Bb','C','Db','Eb'),
      'C':    new Array('C','D','Eb','F','G','Ab','Bb'),
      'G':    new Array('G','A','Bb','C','D','Eb','F'),
      'D':    new Array('D','E','F','G','A','Bb','C'),
      'Bb':   new Array('Bb','C','Db','Eb','F','Gb','Ab'),
      'Eb':   new Array('Eb','F','Gb','Ab','Bb','Cb','Db'),
      'Ab':   new Array('Ab','Bb','Cb','Db','Eb','Fb','Gb')
    },
    harmonicMinorScales: {
      'A':   new Array('A','B','C','D','E','F','G#'),
      'E':   new Array('E','F#','G','A','B','C','D#'),
      'B':   new Array('B','C#','D','E','F#','G','A#'),
      'F#':  new Array('F#','G#','A','B','C#','D','E#'),
      'C#':  new Array('C#','D#','E','F#','G#','A','B#'),
      'G#':  new Array('G#','A#','B','C#','D#','E','G'),
      'D#':  new Array('D#','E#','F#','G#','A#','B','D'),
      'A#':  new Array('A#','B#','C#','D#','E#','F#','A'),
      'F':   new Array('F','G','Ab','Bb','C','Db','E'),
      'C':   new Array('C','D','Eb','F','G','Ab','B'),
      'G':   new Array('G','A','Bb','C','D','Eb','F#'),
      'D':   new Array('D','E','F','G','A','Bb','C#'),
      'Bb':  new Array('Bb','C','Db','Eb','F','Gb','A'),
      'Eb':  new Array('Eb','F','Gb','Ab','Bb','Cb','D'),
      'Ab':  new Array('Ab','Bb','Cb','Db','Eb','Fb','G')
    },
    chordsArr: {
      '1':   new Array(0,2,4,6,1,'','<sup>maj7</sup>','<sup>maj9</sup>'),
      '2':   new Array(1,3,5,0,2,'<sup>m</sup>','<sup>m7</sup>','<sup>m9</sup>'),
      '3':   new Array(2,4,6,1,3,'<sup>m</sup>','<sup>m7</sup>','<sup>m7b9</sup>'),
      '4':   new Array(3,5,0,2,4,'','<sup>maj7</sup>','<sup>maj9</sup>'),
      '5':   new Array(4,6,1,3,5,'','7','9'),
      '6':   new Array(5,0,2,4,6,'<sup>m</sup>','<sup>m7</sup>','<sup>m9</sup>'),
      '7':   new Array(6,1,3,5,0,'<sup>dim</sup>','<sup>m7b5</sup>','<sup>m7b5b9</sup>')
    },
    naturalMinorChordsArr: {
      '1':   new Array(0,2,4,6,1,'<sup>m</sup>','<sup>m7</sup>','<sup>m9</sup>'),
      '2':   new Array(1,3,5,0,2,'<sup>dim</sup>','<sup>m7b5</sup>','<sup>m7b5b9</sup>'),
      '3':   new Array(2,4,6,1,3,'','<sup>maj7</sup>','<sup>maj9</sup>'),
      '4':   new Array(3,5,0,2,4,'<sup>m</sup>','<sup>m7</sup>','<sup>m9</sup>'),
      '5':   new Array(4,6,1,3,5,'<sup>m</sup>','<sup>m7</sup>','<sup>m7b9</sup>'),
      '6':   new Array(5,0,2,4,6,'','<sup>maj7</sup>','<sup>maj9</sup>'),
      '7':   new Array(6,1,3,5,0,'','7','9')
    },
    harmonicMinorChordsArr: {
      '1':  new Array(0,2,4,6,1,'<sup>m</sup>','<sup>mMaj7</sup>','<sup>m9#7</sup>'),
      '2':  new Array(1,3,5,0,2,'<sup>dim</sup>','<sup>m7b5</sup>','<sup>m7b5b9</sup>'),
      '3':  new Array(2,4,6,1,3,'aug','<sup>maj7#5</sup>','<sup>maj9#5</sup>'),
      '4':  new Array(3,5,0,2,4,'<sup>m</sup>','<sup>m7</sup>','<sup>m9</sup>'),
      '5':  new Array(4,6,1,3,5,'<sup></sup>','<sup>7</sup>','<sup>7b9</sup>'),
      '6':  new Array(5,0,2,4,6,'','<sup>maj7</sup>','<sup>maj9</sup>'),
      '7':  new Array(6,1,3,5,0,'<sup>dim</sup>','<sup>dim7</sup>','<sup>dim7b9</sup>')
    }
  };


// MODULE METHODS **************************************************************************************************** //
  neck.build_chord_buttons = function () {

    var symbol_num = parseInt(this.notesPerChord) + 2; // this will change if we go beyond 9th chords in the chordsArray
    var cnt = 0;
    var that = this;

    this.wrapper.find('.chordButton').each(function() {
      var id = $(this).attr('scaleInt');
      $(this).html(that.currentScale[cnt]+that.currentChordsArr[id][symbol_num]);
      var symb = that.currentChordsArr[id][symbol_num];
      cnt++;
    });

  };

  neck.deactivateChordbuttons = function() {
    this.wrapper.find('#chordButtons .chordButton').each(function(){
      $(this).removeClass('active');
    });
  };

  neck.buildNoteDiv = function(note, s, f)
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

  }

  neck.hide_chord_divs = function() {
    this.wrapper.find('.chord_in_key').hide();
    this.wrapper.find('#color_key').hide();
    this.wrapper.find('.showing').hide();
    this.wrapper.find('.notesPerChord').hide();
  }

  neck.show_chord_divs = function() {
    this.wrapper.find('.chord_in_key').show();
    this.wrapper.find('#color_key').show();
    this.wrapper.find('.showing').show();
    this.wrapper.find('.notesPerChord').show();
  }


  neck.changeScale = function(rootNote)
  {

    var wasShowingChord = (this.showingChord) ? true : false;
    this.showingChord = false;
    var select = this.wrapper.find('#minorScaleSelector');
    select.val($('option:first', select).val());
    select = this.wrapper.find('#harMinorScaleSelector');
    select.val($('option:first', select).val());
    this.currentKey = rootNote;
    this.currentScale = this[this.params.scalesArray][rootNote];
    this.currentChordsArr = this.chordsArr;
    this.wrapper.find('#main_title').html('Key of '+this.currentKey);

    this.updateMetaDivs("rootNote",rootNote);
    this.updateMetaDivs("scalesArray","majorScales");

    this.doScale();

    if(wasShowingChord) {
      this.isolateChord(this.intval);
    }

  }

  neck.changeNatMinorScale = function(rootNote)
  {

    var wasShowingChord = (this.showingChord) ? true : false;
    this.showingChord = false;
    var select = this.wrapper.find('#scaleSelector');
    select.val($('option:first', select).val());
    select = this.wrapper.find('#harMinorScaleSelector');
    select.val($('option:first', select).val());
    this.currentKey = rootNote;
    this.currentScale = this.naturalMinorScales[rootNote];
    this.currentChordsArr = this.naturalMinorChordsArr;
    this.wrapper.find('#main_title').html('Key of '+ this.currentKey + ' natural minor');

    this.updateMetaDivs("rootNote",rootNote);
    this.updateMetaDivs("scalesArray","naturalMinorScales");

    this.doScale();

    if(wasShowingChord) {
      this.isolateChord(this.intval);
    }

  }

  neck.changeHarmMinorScale = function(rootNote)
  {

    var wasShowingChord = (this.showingChord) ? true : false;
    this.showingChord = false;
    this.currentKey = rootNote;
    this.currentScale = this.harmonicMinorScales[rootNote];
    this.currentChordsArr = this.harmonicMinorChordsArr;
    this.wrapper.find('#main_title').html('Key of '+this.currentKey + ' harmonic minor');

    this.updateMetaDivs("rootNote",rootNote);
    this.updateMetaDivs("scalesArray","harmonicMinorScales");
  
    this.doScale();

    if(wasShowingChord) {
      this.isolateChord(this.intval);
    }

  }

  neck.doScale = function()
  {

    this.wrapper.find('#chord_instructions').show();
    this.wrapper.find('.note').removeClass('int-3 int-5 int-7 int-11 int-1 int-9 in-scale');
    this.wrapper.find('.note').hide();
    this.hide_chord_divs();
    this.build_chord_buttons();
    this.notesOfKey = '<ul><li>Scale notes: </li>';
    for ( var s=0; s<this.currentScale.length; s++ )
    {
      this.notesOfKey += '<li>' + this.currentScale[s] + '</li>';
    }
    this.notesOfKey += '</ul>';
    this.wrapper.find('#keyNotes').html(this.notesOfKey);
    // for testing 
    this.wrapper.find('#info').html('lowfret: '+this.lowfret+' - topfret: '+this.topfret);
    for(var i=0; i<this.currentScale.length; i++)
    {
      var theNote = this.currentScale[i];
      for ( var f=this.lowfret; f<=this.topfret; f++ )
      {

        this.wrapper.find(".note[notename='"+theNote+"'].fret"+f).show().addClass('in-scale');
      }
    }
  }

  neck.resetToScale = function() {
    $('.note').removeClass('muted');
    this.showingChord = false;
    $('.chord-name').html('');
    $('.chordButton').removeClass('active');
    this.doScale();
  }

  neck.showChord = function(interval)
  {
    this.showingChord = true;
    this.wrapper.find('#chord_instructions').hide();
    this.wrapper.find('.note').removeClass('int-3 int-5 int-7 int-11 int-1 int-9');
    this.currentInterval = interval;
    var noteSelectArr = this.currentChordsArr[interval];
    var chordType = "";
    this.show_chord_divs();
    // hide all note divs
    this.wrapper.find('.note').removeClass('int-3 int-5 int-7');
    // this.wrapper.find('.note').hide();
    this.wrapper.find('.note').addClass('muted'); // set transparency rather than hiding the other scale notes
    
    this.notesPerChord = parseInt(this.notesPerChord);

    switch (this.notesPerChord) {
      case 3:
        chordType = noteSelectArr[5];
        this.wrapper.find('.showing').html('Showing basic chords (3-note chords)');
      break;
      case 4:
        chordType = noteSelectArr[6];
        this.wrapper.find('.showing').html('Showing 7th chords (4-note chords)');
      break;
      case 5:
        chordType = noteSelectArr[7];
        this.wrapper.find('.showing').html('Showing 9th chords (5-note chords)');
      break;
    }

    this.updateMetaDivs("notesPerChord",this.notesPerChord);

    for(var n=0; n<this.notesPerChord; n++)
    {

      var theInt = noteSelectArr[n];
      var theNote = this.currentScale[theInt];

      switch (n)
      {
        case 0:
        var chordRoot = theNote;
        this.wrapper.find(".note[notename='"+theNote+"']").addClass('int-1').removeClass('muted').show();
        break;

        case 1:
        this.wrapper.find(".note[notename='"+theNote+"']").addClass('int-3').removeClass('muted').show();
        break;

        case 2:
        this.wrapper.find(".note[notename='"+theNote+"']").addClass('int-5').removeClass('muted').show();
        break;

        case 3:
        this.wrapper.find(".note[notename='"+theNote+"']").addClass('int-7').removeClass('muted').show();
        break;

        case 4:
        this.wrapper.find(".note[notename='"+theNote+"']").addClass('int-9').removeClass('muted').show();
        break;
      }

    }

    this.hideNotesOutOfRange();
    this.resetHiddenStrings();

    this.wrapper.find('.chord_in_key').html(" (the " + interval + " chord)");

    this.updateMetaDivs("currentInterval",interval);
    this.updateMetaDivs("showInitialChord",true);

  }

  neck.resetHiddenStrings = function() {
    for(var s=1; s<=6; s++) {
      if(this.wrapper.find('.in-scale.string'+s).hasClass('hidden')) {
        this.wrapper.find('.in-scale.string'+s).hide();
      }
    }
  }

  neck.hideNotesOutOfRange = function() {
    for ( var f=0; f<this.lowfret; f++ )
    {
      this.wrapper.find(".note.fret"+f).hide();
    }

    for ( var f=(parseInt(this.topfret)+1); f<=this.totalFrets; f++ )
    {
      this.wrapper.find(".note.fret"+f).hide();
    }
  }

  neck.setNotesPerChord = function(num)
  {
    this.notesPerChord = num;
  
    this.build_chord_buttons();
    this.showChord(this.currentInterval);
    this.updateMetaDivs('notesPerChord',num);

  }

  neck.setHighFret = function(top)
  {
    if(parseInt(top) > parseInt(this.lowfret))
    {

      this.topfret = parseInt(top);
      this.updateMetaDivs("topfret",this.topfret);

    } else {
      alert('Oops! You chose a highest fret number that is lower than the lower fret number. Please reselect.');
    }

    if(!this.cropping) {this.cropping = true;}
    this.doScale();
    if(this.showingChord)
    {
      this.showChord(this.intval);
    }

  }

  neck.setLowFret = function(bottom)
  {
    if(parseInt(bottom) < parseInt(this.topfret))
    {
      console.log(bottom);
      this.lowfret = parseInt(bottom);
      this.updateMetaDivs("lowfret",this.lowfret);

    } else {
      alert('Oops! You chose a lowest fret number that is higher than the upper fret number. Please reselect.');
    }
    if(!this.cropping) {this.cropping = true;}
    this.doScale();
    if(this.showingChord)
    {
      this.showChord(this.intval);
    }
  }

  neck.toggleShowHideString = function(stringNumber,el) {

    if(this.wrapper.find('.in-scale.string'+stringNumber).hasClass('hidden')) {
      this.wrapper.find('.in-scale.string'+stringNumber).show().removeClass('hidden');
      this.wrapper.find('.meta#hideString'+stringNumber).remove();
      el.removeClass('off');
    } else {
      this.wrapper.find('.in-scale.string'+stringNumber).hide().addClass('hidden');
      this.updateMetaDivs('hideString'+stringNumber,stringNumber);
      el.addClass('off');
    }

  }

  neck.buildNoteGrid = function() {
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
  }

  neck.handleChordButtonClick = function(el) {
    this.intval = el.attr('scaleInt');
    this.isolateChord(this.intval);
    // add or update the active chord metadata
    this.updateMetaDivs('chordInterval',this.intval);
  }

  neck.isolateChord = function(intval) {
    this.intval = intval;
    
    if(this.params.showChordButtons) {
      this.deactivateChordbuttons();
      var el = this.wrapper.find('.chordButton[scaleint="'+intval+'"]');
      el.addClass('active');
      this.params.chordInterval = intval;
    }

    this.showChord(this.intval);

    if(this.params.showNotesPerChordSelector) {
      this.wrapper.find('.notesPerChord').show();
    }

    if(this.params.showChordNameHeader) {
      // stuff the chord name into the h2 above the guitar neck instance
      var symbol_num = parseInt(this.notesPerChord) + 2; // this will change if we go beyond 9th chords in the chordsArray
      var chordName = this.currentScale[intval-1]+this.currentChordsArr[this.currentInterval][symbol_num];
      this.wrapper.find('.chord-name').html(chordName);
    }
  }

  // FRET RANGE SELECTORS
  neck.buildFretRangeSelectors = function() {

    var fretRangeSelectors = '<div id="fretselectors">Set lowest fret:';
    fretRangeSelectors += ' <select id="lowfret">';
    for ( var i=0; i<this.totalFrets; i++ )
    {
      if(this.lowfret == i) { 
        fretRangeSelectors += '   <option value="'+i+'" selected="selected">'+i+'</option>';
      } else {
        fretRangeSelectors += '   <option value="'+i+'">'+i+'</option>';
      }
    }
    fretRangeSelectors += ' </select>';
    fretRangeSelectors += 'Set highest fret: ';
    fretRangeSelectors += ' <select id="highfret">'
    for ( var i=1; i<=this.totalFrets; i++ )
    {
      if(this.topfret == i) { 
        fretRangeSelectors += '   <option value="'+i+'" selected="selected">'+i+'</option>';
      } else {
        fretRangeSelectors += '   <option value="'+i+'">'+i+'</option>';
      }
    }
    fretRangeSelectors += ' </select>';
    fretRangeSelectors += '</div>';

    return fretRangeSelectors;
  }

  // KEY SELECTORS
  neck.buildKeySelectors = function() {
    var keySelectors = '<div id="changeKey">Select key: ';
    keySelectors += ' <select id="scaleSelector">';
    keySelectors += '   <option value="">Major...</option>';
    for (var key in this.majorScales) {
      if (key === 'length' || !this.majorScales.hasOwnProperty(key)) continue;
      keySelectors += '<option value="'+key+'">'+key+' major</option>';
    }
    keySelectors += ' </select>';

    keySelectors += ' <select id="minorScaleSelector">';
    keySelectors += '   <option value="">Natural minor...</option>';
    for (var key in this.naturalMinorScales) {
      if (key === 'length' || !this.naturalMinorScales.hasOwnProperty(key)) continue;
      keySelectors += '<option value="'+key+'">'+key+' minor</option>';
    }
    keySelectors += ' </select>';

    keySelectors += ' <select id="harMinorScaleSelector">';
    keySelectors += '   <option value="">Harmonic minor...</option>';
    for (var key in this.harmonicMinorScales) {
      if (key === 'length' || !this.harmonicMinorScales.hasOwnProperty(key)) continue;
      keySelectors += '<option value="'+key+'">'+key+' harmonic minor</option>';
    }
    keySelectors += ' </select>';

    keySelectors += ' <a class="refresh-scale-link" href="#">Scale only</a>';
    keySelectors += '</div>';

    return keySelectors;
  }

  neck.updateMetaDivs = function(tagID, val) {
    if(this.wrapper.find(".meta#"+tagID).length) {
      this.wrapper.find(".meta#"+tagID).attr('data-content',val);
    } else {
      this.wrapper.append("<div class='meta' id='"+tagID+"' data-content='"+val+"'>");
    }
  }

  neck.removeMetaDivs = function() {
    this.wrapper.find('.meta').remove();
  }

  neck.freezeSettings = function() {
    console.log(this.params);
  }

  neck.getObj = function() {
    var objCopy = returnThis();
    return objCopy;
  }

  neck.writeChordName = function(chordName) {
    this.wrapper.find('.chordNameHeaderDiv').html(chordName);
  }

  neck.resetNeck = function() {
    this.initLayout(this.initialParams);
  }

  neck.initParams = function() {

    if( objectIsEmpty(this.params) ) {
      this.params = {
        myContainer:                'neck-container',
        containerSelectorType:      'id',
        showTitle:                  true,
        showScaleNotes:             true,
        showFretRange:              true,
        showFretRangeSelectors:     true,
        showKeySelectors:           true,
        showResetLink:              true,
        showChordButtons:           true,
        showNotesPerChordSelector:  true,
        showChordNameHeader:        true,
        showIntervalColorKey:       true,
        totalFrets:                 21,
        topfret:                    21,
        lowfret:                    0,
        scalesArray:                'majorScales',
        rootNote:                   'C',
        showInitialChord:           false,
        chordInterval:              0,
        notesPerChord:              3,
        toggleStringVisibility:     true,
        neckStyleClass:             "",
        replaceInitScript:          false
      };

      if(arguments !== undefined) {
        for ( name in arguments[0] ) {
          if( arguments[0].hasOwnProperty(name)) {
            this.params[name] = arguments[0][name];
          }
        }
        // console.log(this.params);
        this.initialParams = this.params;
      }
    }

    var params = this.params;

    if(params.containerSelectorType == 'id') {
      this.myContainer = $('#'+params.myContainer);
    } else if(params.containerSelectorType == 'class') {
      this.myContainer = $('.'+params.myContainer);
    }

    this.topfret = params.topfret;
    this.lowfret = params.lowfret;
    this.totalFrets = params.totalFrets;

    if(params.topfret > this.totalFrets) {
      this.topfret = this.totalFrets;
    }
    
    this.currentScale = this[params.scalesArray][params.rootNote];
    this.currentKey = params.rootNote;
    this.currentChordsArr = this.chordsArr;
    this.wrapper = this.myContainer.find('.guitar-module-main-wrapper');
    if(params.neckStyleClass !== "") {
      this.myContainer.addClass(params.neckStyleClass);
    }

  }

  neck.preserveMetaData = function() {

    if(this.myContainer.find('.meta').length) {

      var metaData = "";
      this.myContainer.find('.meta').each(function(){
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
  }

  neck.initLayout = function() {

    var metaData = this.preserveMetaData();

    var params = this.params;

    this.htmlPieces = "";

  // MAIN MODULE WRAPPER
  this.htmlPieces += openMainWrapper();

    if(params.showTitle) {
      this.htmlPieces += buildMaintitleDiv();
    }

    if(params.showKeySelectors) {
      this.htmlPieces += this.buildKeySelectors();
    }

    // TOP
    this.htmlPieces += openTopDiv();

      // TOP LEFT
      this.htmlPieces += openTopLeftDiv();

        if(params.showScaleNotes) {
          this.htmlPieces += buildScaleNotesDiv();
        }

        if(params.showFretRange) {
          this.htmlPieces += buildFretRangeInfoDiv();
        }

        if(params.showFretRangeSelectors) {
          this.htmlPieces += this.buildFretRangeSelectors();
        }

        if(params.showChordNameHeader) {
          this.htmlPieces += buildChordNameHeaderDiv();
        }
      // close topLeftDiv
      this.htmlPieces += closeDiv();

      // TOP RIGHT
      this.htmlPieces += openTopRighttDiv();

        if(params.showNotesPerChordSelector) {
          this.htmlPieces += buildNotesPerChordSelectorDiv();
        }

        if(params.showIntervalColorKey) {
          this.htmlPieces += buildColorKeyDiv();
        }
      // close topRightDiv
      this.htmlPieces += closeDiv();
    // close topDiv
    this.htmlPieces += closeDiv();

    this.htmlPieces += buildNeckModuleDiv();
    
    if(params.showChordButtons) {
      this.htmlPieces += buildChordInstructionsDiv();
    }

    this.htmlPieces += openControlsDiv();

    if(params.showResetLink) {
      this.htmlPieces += buildResetLink();
    }

    if(params.showChordButtons) {
      this.htmlPieces += buildChordButtonsDiv();
    }
    
    // close controlsDiv
    this.htmlPieces += closeDiv();
    if(metaData !== null) {
      this.htmlPieces += metaData;
    }

    // this.initActions();

    if(params.showInitialChord) {
      this.notesPerChord = params.notesPerChord;
      this.intval = params.chordInterval;
      this.isolateChord(this.intval);
      this.setNotesPerChord(this.notesPerChord);
    }

    // close mainModuleWrapper
    this.htmlPieces += closeDiv();

    var el = this.myContainer;
    el.html(this.htmlPieces);

    return this.htmlPieces;

  }

  neck.replaceModuleInitScript = function(id) {
    var snippet = '<div><script id="neckModuleScript" type="text/javascript">\n    function buildModule() {\n      var this_script = document.getElementById("neckModuleScript");\n      var container = idMaganager.processScriptInstance(this_script);\n      console.log(container);\n      var neckID = idMaganager.setId(container);\n      neckModuleInit(neckID);\n    }\n    </script></div>';
    $('.js-module')[0].innerHTML = snippet;
    return snippet;
  }

  neck.initActions = function() {

    var container = this.myContainer;
    wrapper = this.wrapper = container.find('.guitar-module-main-wrapper');
    var that = this;
    this.stringDivs = this.buildNoteGrid();
    wrapper.find('.neckmodule').html(this.stringDivs);
    var togglers = buildStringViewTogglers();
    wrapper.find('.neckmodule').append(togglers);

    wrapper.find('.notesPerChord').hide();

    wrapper.find('.chordButton').click(function(){
      that.handleChordButtonClick($(this));
    });

    wrapper.find('.notesPerChord a').click(function(e){
      e.preventDefault();
      var chordType = $(this).attr('ctype');
      that.setNotesPerChord(chordType);
      that.isolateChord(that.intval);
    });

    if(this.params.showResetLink) {
      $('.reset-link').click(function(e){
        e.preventDefault();
        that.removeMetaDivs();
        that.initLayout();
      });
    }

    if(this.params.toggleStringVisibility) {
      wrapper.find('.string-togglers li').each(function() {
        $(this).click(function(){
          var stringNumber = $(this).attr('string');
          that.toggleShowHideString(stringNumber,$(this));
        });
      });
    }

    if(this.params.showKeySelectors) {
      wrapper.find('#changeKey #scaleSelector').change(function(){
        that.changeScale(this.value);
      });
      wrapper.find('#changeKey #minorScaleSelector').change(function(){
        that.changeNatMinorScale(this.value);
      });
      wrapper.find('#changeKey #harMinorScaleSelector').change(function(){
        that.changeHarmMinorScale(this.value);
      });
      wrapper.find('.refresh-scale-link').click(function(e){
        e.preventDefault();
        that.resetToScale();
      });
    }

    if(this.params.showFretRangeSelectors) {
      wrapper.find('#fretselectors #lowfret').change(function(){
        that.setLowFret(this.value);
      });
      wrapper.find('#fretselectors #highfret').change(function(){
        that.setHighFret(this.value);
      });
    }

    switch(this.params.scalesArray) {

      case 'majorScales' :
      this.currentChordsArr = this.chordsArr;
      this.changeScale(this.currentKey);
      break;

      case 'naturalMinorScales' :
      this.currentChordsArr = this.naturalMinorChordsArr;
      this.changeNatMinorScale(this.currentKey);
      break;

      case 'harmonicMinorScales' :
      this.currentChordsArr = this.harmonicMinorChordsArr;
      this.changeHarmMinorScale(this.currentKey);
      break;

    }

    this.updateMetaDivs('scalesArray',this.params.scalesArray);
    this.updateMetaDivs('myContainer', this.myContainer.attr('id'));
    this.updateMetaDivs('totalFrets', this.totalFrets);
    this.updateMetaDivs('topfret', this.topfret);
    this.updateMetaDivs('lowfret', this.lowfret);

  }

// END MODULE METHODS ********************************************************* \\


// DISPLAY BUILDERS ******************************************************************************** //

  var openMainWrapper = function() {
    var mainWrapper = '<div class="guitar-module-main-wrapper">';

    return mainWrapper;
  }

  var buildMaintitleDiv = function() {
    var mainTitleDiv = '<div id="main_title"></div>';

    return mainTitleDiv;
  }

  // TOP DIV BUILDER
  var openTopDiv = function() {
    topDivStart = '<div class="top-wrapper">';

    return topDivStart;
  }
    // TOP LEFT BUILDER
    var openTopLeftDiv = function() {
      topLeftDivStart = '<div class="top-left">';

      return topLeftDivStart;
    }

      // SCALE NOTES
      var buildScaleNotesDiv = function() {
        var scaleNotesDiv = '<div id="keyNotes"></div>';
        return scaleNotesDiv;
      }

      // FRET RANGE DISPLAY
      var buildFretRangeInfoDiv = function() {
        var infoDiv = '<div id="info"></div>';

        return infoDiv;
      }

      // CHORD NAME
      var buildChordNameHeaderDiv = function() {
        var chordNameHeaderDiv = '<h2 class="chord-name"></h2>';

        return chordNameHeaderDiv;
      }

    // TOP RIGHT BUILDER
    var openTopRighttDiv = function() {
      topRightDivStart = '<div class="top-right">';

      return topRightDivStart;
    }

      // NOTES PER CHORD SELECTOR
      var buildNotesPerChordSelectorDiv = function() {

        var notesPerChordSelectorDiv = '<div>';
        notesPerChordSelectorDiv += ' <div class="showing"></div>';
        notesPerChordSelectorDiv += ' <div class="notesPerChord">Show <a ctype="3" href="#">basic chords</a>, <a ctype="4" href="#">7th chords</a> or <a ctype="5" href="#">9th chords</a>.</div>';
        notesPerChordSelectorDiv += '</div>';

        return notesPerChordSelectorDiv;
      }

      // COLOR KEY DISPLAY
      var buildColorKeyDiv = function() {
        var colorKeyDiv = '<div id="color_key">';
        colorKeyDiv += '  <div id="color-key-wrapper">';
        colorKeyDiv += '    <h4>Color Key for chord note intervals</h4>';
        colorKeyDiv += '    <table id="color-key">';
        colorKeyDiv += '      <tr>';
        colorKeyDiv += '        <td>';
        colorKeyDiv += '          <div class="int-1">1</div>';
        colorKeyDiv += '        </td>';
        colorKeyDiv += '        <td>';
        colorKeyDiv += '          <div class="int-3">3</div>';
        colorKeyDiv += '        </td>';
        colorKeyDiv += '        <td>';
        colorKeyDiv += '          <div class="int-5">5</div>';
        colorKeyDiv += '        </td>';
        colorKeyDiv += '        <td>';
        colorKeyDiv += '          <div class="int-7">7</div>';
        colorKeyDiv += '        </td>';
        colorKeyDiv += '        <td>';
        colorKeyDiv += '          <div class="int-9">9</div>';
        colorKeyDiv += '        </td>';
        colorKeyDiv += '      </tr>';
        colorKeyDiv += '    </table>';
        colorKeyDiv += '  </div>';
        colorKeyDiv += '</div>';

        return colorKeyDiv;
      }


  var closeDiv = function() {
    divCloser = '</div>';

    return divCloser;
  }

  var buildNeckModuleDiv = function() {
    var neckModuleDiv = '<div class="neckmodule"></div>';

    return neckModuleDiv;
  }

  var buildStringViewTogglers = function() {
    var stringViewTogglersDiv = '<div class="string-togglers">';
    stringViewTogglersDiv += '  <ul>';
    stringViewTogglersDiv += '    <li string="1"></li>';
    stringViewTogglersDiv += '    <li string="2"></li>';
    stringViewTogglersDiv += '    <li string="3"></li>';
    stringViewTogglersDiv += '    <li string="4"></li>';
    stringViewTogglersDiv += '    <li string="5"></li>';
    stringViewTogglersDiv += '    <li string="6"></li>';
    stringViewTogglersDiv += '  </ul>';
    stringViewTogglersDiv += '</div>';

    return stringViewTogglersDiv;
  }

  var openControlsDiv = function() {
    // all the subsequent stuff gets injected into here so this has to be created first!
    var controlsDiv = '<div id="controls">';

    return controlsDiv;
  }

  var buildChordInstructionsDiv = function() {
    var chordInstructionsDiv = '  <div id="chord_instructions">Use buttons below to display corresponding chord notes</div>';

    return chordInstructionsDiv;
  }

  var buildResetLink = function() {
    var resetLink = '<p class="reset-link"><a href="#">Reset guitar neck to initially loaded view</a></p>';

    return resetLink;
  }

  var buildChordButtonsDiv = function() {    
    
    var chordButtonsDiv = '  <div id="chordButtons">';
    chordButtonsDiv += '    <div class="chordButton" scaleInt="1">Cmaj7</div>';
    chordButtonsDiv += '    <div class="chordButton" scaleInt="2">Dm7</div>';
    chordButtonsDiv += '    <div class="chordButton" scaleInt="3">Em7</div>';
    chordButtonsDiv += '    <div class="chordButton" scaleInt="4">Fmaj7</div>';
    chordButtonsDiv += '    <div class="chordButton" scaleInt="5">G7</div>';
    chordButtonsDiv += '    <div class="chordButton" scaleInt="6">Am7</div>';
    chordButtonsDiv += '    <div class="chordButton" scaleInt="7">Bm7b5</div>';
    chordButtonsDiv += '  </div>';

   return chordButtonsDiv;
  }

  var returnThis = function() {
    var that = this;
    return that;
  }

  var objectIsEmpty = function(obj) {
    if (Object.keys(obj).length === 0) {
      return true;
    } else {
      return false;
    }
  }

  return neck;

})();

function neckCopy (neckObj) {
  console.log(neckObj.params);
}
