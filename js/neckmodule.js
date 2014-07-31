/**
  * DEFAULTS
  * this.params = {
  *   myContainer:                'neck-container',  // string - The name of the DOM element in which the neckModule should be placed. Should be the string used in the selector and can be an id or a class placed on the DOM element. Must be unique.
  *   containerSelectorType:      'id',              // string - options=> 'id', 'className'
  *   showTitle:                  true,              // boolean - options=> true, false
  *   showScaleNotes:             true,              // boolean - options=> true, false
  *   showFretRange:              true,              // boolean - options=> true, false
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
  *   chordInterval:              0,                 // int - options=> 1-7
  *   notesPerChord:              4                  // int - options=> 3-5
  * };
  **/
var neckModule = (function() {

  var neck = {
    myContainer:            {},
    containerSelectorType:  'id',
    params:                 {},
    htmlPieces:             '',
    total_frets:            17,
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
    s:                      1,
    f:                      0,
    topfret:                17,
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

  neck.build_chord_buttons = function () {

    var symbol_num = parseInt(this.notesPerChord) + 2; // this will change if we go beyond 9th chords in the chordsArray
    var cnt = 0;
    var that = this;

    this.myContainer.find('.chordButton').each(function() {
      var id = $(this).attr('scaleInt');
      $(this).html(that.currentScale[cnt]+that.currentChordsArr[id][symbol_num]);
      var symb = that.currentChordsArr[id][symbol_num];
      cnt++;
    });

  };

  neck.deactivateChordbuttons = function() {
    this.myContainer.find('#chordButtons .chordButton').each(function(){
      $(this).removeClass('active');
    });
  };

  neck.buildNoteDiv = function(note, s, f)
  {

    if(note.indexOf('#') != -1)
    {
      noteType = 'sharp';
    } else if(note.indexOf('b') != -1) {
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
    this.myContainer.find('.chord_in_key').hide();
    this.myContainer.find('#color_key').hide();
    this.myContainer.find('.showing').hide();
    this.myContainer.find('.notesPerChord').hide();
  }

  neck.show_chord_divs = function() {
    this.myContainer.find('.chord_in_key').show();
    this.myContainer.find('#color_key').show();
    this.myContainer.find('.showing').show();
    this.myContainer.find('.notesPerChord').show();
  }


  neck.changeScale = function(rootNote)
  {

    this.showingChord = false;
    this.currentKey = rootNote;
    this.currentScale = this[this.params.scalesArray][this.params.rootNote];
    this.currentChordsArr = this.chordsArr;
    this.myContainer.find('#main_title').html('Key of '+this.currentKey);

    this.doScale();

  }

  neck.changeNatMinorScale = function(rootNote)
  {

    this.showingChord = false;
    this.currentKey = rootNote;
    console.log('rootNote in changeNatMinorScale method: '+rootNote);
    this.currentScale = this.naturalMinorScales[rootNote];
    this.currentChordsArr = this.naturalMinorChordsArr;
    this.myContainer.find('#main_title').html('Key of '+ this.currentKey + ' natural minor');

    this.doScale();

  }

  neck.changeHarmMinorScale = function(rootNote)
  {

    this.showingChord = false;
    this.currentKey = rootNote;
    this.currentScale = this.harmonicMinorScales[rootNote];
    this.currentChordsArr = this.harmonicMinorChordsArr;
    this.myContainer.find('#main_title').html('Key of '+this.currentKey + ' harmonic minor');
  
    this.doScale();

  }

  neck.doScale = function()
  {

    this.myContainer.find('#chord_instructions').show();
    this.myContainer.find('.note').removeClass('red blue green pink gray yellow');
    this.myContainer.find('.note').hide();
    this.hide_chord_divs();
    this.build_chord_buttons();
    this.notesOfKey = '<ul><li>Scale notes: </li>';
    for ( var s=0; s<this.currentScale.length; s++ )
    {
      this.notesOfKey += '<li>' + this.currentScale[s] + '</li>';
    }
    this.notesOfKey += '</ul>';
    this.myContainer.find('#keyNotes').html(this.notesOfKey);
    // for testing 
    this.myContainer.find('#info').html('lowfret: '+this.lowfret+' - topfret: '+this.topfret);
    for(var i=0; i<this.currentScale.length; i++)
    {
      var theNote = this.currentScale[i];
      for ( var f=this.lowfret; f<=this.topfret; f++ )
      {
        this.myContainer.find(".note[notename='"+theNote+"'].fret"+f).show();
      }

    }
  }

  neck.showChord = function(interval)
  {
    this.showingChord = true;
    this.myContainer.find('#chord_instructions').hide();
    this.myContainer.find('.note').removeClass('red blue green pink gray yellow');
    this.currentInterval = interval;
    var noteSelectArr = this.currentChordsArr[interval];
    var chordType = "";
    this.show_chord_divs();
    // hide all note divs
    this.myContainer.find('.note').removeClass('red blue green');
    // this.myContainer.find('.note').hide();
    this.myContainer.find('.note').addClass('muted');

    switch (this.notesPerChord) {
      case 3:
        chordType = noteSelectArr[5];
        this.myContainer.find('.showing').html('Showing basic chords which are 3-note chords.');
      break;
      case 4:
        chordType = noteSelectArr[6];
        this.myContainer.find('.showing').html('Showing 7th chords which are 4-note chords.');
      break;
      case 5:
        chordType = noteSelectArr[7];
        this.myContainer.find('.showing').html('Showing 9th chords which are 5-note chords.');
      break;
    }


    for(var n=0; n<this.notesPerChord; n++)
    {

      var theInt = noteSelectArr[n];
      var theNote = this.currentScale[theInt];

      switch (n)
      {
        case 0:
        var chordRoot = theNote;
        this.myContainer.find(".note[notename='"+theNote+"']").addClass('gray').removeClass('muted');
        break;

        case 1:
        this.myContainer.find(".note[notename='"+theNote+"']").addClass('red').removeClass('muted');
        break;

        case 2:
        this.myContainer.find(".note[notename='"+theNote+"']").addClass('blue').removeClass('muted');
        break;

        case 3:
        this.myContainer.find(".note[notename='"+theNote+"']").addClass('green').removeClass('muted');
        break;

        case 4:
        this.myContainer.find(".note[notename='"+theNote+"']").addClass('yellow').removeClass('muted');
        break;
      }

      //alert(theNote);
      for ( var f=this.lowfret; f<=this.topfret; f++ )
      {
        this.myContainer.find(".note[notename='"+theNote+"'].fret"+f).show();
      }
    }

    // this.myContainer.find('#title').html(chordRoot + chordType);
    this.myContainer.find('.chord_in_key').html(" (the " + interval + " chord)");

  }

  neck.setNotesPerChord = function(num)
  {
    this.notesPerChord = num;
    // console.log(num);
    this.build_chord_buttons();
    this.showChord(this.currentInterval);

  }

  neck.setHighFret = function(top)
  {
    if(parseInt(top) > parseInt(this.lowfret))
    {
      this.topfret = parseInt(top);
    } else {
      alert('Oops! You chose a highest fret number that is lower than the lower fret number. Please reselect.');
    }

    if(!this.cropping) {this.cropping = true;}
    if(this.showingChord)
    {
      this.showChord(this.intval);
    } else {
      this.doScale();
    }

  }

  neck.setLowFret = function(bottom)
  {
    if(parseInt(bottom) < parseInt(this.topfret))
    {
      this.lowfret = parseInt(bottom);
    } else {
      alert('Oops! You chose a lowest fret number that is higher than the upper fret number. Please reselect.');
    }
    if(!this.cropping) {this.cropping = true;}
    if(this.showingChord)
    {
      this.showChord(this.intval);
    } else {
      this.doScale();
    }
  }

  neck.buildNoteGrid = function() {
    var note;
    for(var s=1; s<=6; s++)
    {
        for (var f=0; f<=this.total_frets; f++)
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
  }

  neck.isolateChord = function(intval) {
    this.intval = intval;
    
    if(this.params.showChordButtons) {
      this.deactivateChordbuttons();
      var el = this.myContainer.find('.chordButton[scaleint="'+intval+'"]');
      el.addClass('active');
    }

    this.showChord(this.intval);

    if(this.params.showNotesPerChordSelector) {
      this.myContainer.find('.notesPerChord').show();
    }

    if(this.params.showChordNameHeader) {
      // stuff the chord name into the h2 above the guitar neck instance
      var symbol_num = parseInt(this.notesPerChord) + 2; // this will change if we go beyond 9th chords in the chordsArray
      console.log(this.currentScale);
      var chordName = this.currentScale[intval-1]+this.currentChordsArr[this.currentInterval][symbol_num];
      this.myContainer.find('.chord-name').html(chordName);
      console.log('ran showChordNameHeader');
    }
  }

  neck.writeChordName = function(chordName) {
    this.myContainer.find('.chordNameHeaderDiv').html(chordName);

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

      // FRET RANGER
      var buildFretRangeInfoDiv = function() {
        var infoDiv = '<div id="info"></div>';

        return infoDiv;
      }

      // CHORD NAME
      var buildChordNameHeaderDiv = function() {
        var chordNameHeaderDiv = '<h2 class="chord-name"></h2>';

        return chordNameHeaderDiv;
      }

    // CLOSE TOP LEFT
    var closeTopLeftDiv = function() {
      topLeftDivClose = '</div>';

      return topLeftDivClose;
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
        colorKeyDiv += '          <div class="gray">1</div>';
        colorKeyDiv += '        </td>';
        colorKeyDiv += '        <td>';
        colorKeyDiv += '          <div class="red">3</div>';
        colorKeyDiv += '        </td>';
        colorKeyDiv += '        <td>';
        colorKeyDiv += '          <div class="blue">5</div>';
        colorKeyDiv += '        </td>';
        colorKeyDiv += '        <td>';
        colorKeyDiv += '          <div class="green">7</div>';
        colorKeyDiv += '        </td>';
        colorKeyDiv += '        <td>';
        colorKeyDiv += '          <div class="yellow">9</div>';
        colorKeyDiv += '        </td>';
        colorKeyDiv += '      </tr>';
        colorKeyDiv += '    </table>';
        colorKeyDiv += '  </div>';
        colorKeyDiv += '</div>';

        return colorKeyDiv;
      }


    // CLOSE TOP RIGHT
    var closeTopRighttDiv = function() {
      topRightDivClose = '</div>';

      return topRightDivClose;
    }

  var closeTopDiv = function() {
    topDivClose = '</div>';

    return topDivClose;
  }

  var buildNeckModuleDiv = function() {
    var neckModuleDiv = '<div class="neckmodule"></div>';

    return neckModuleDiv;
  }

  var openControlsDiv = function() {
    // all the subsequent stuff gets injected into here so this has to be created first!
    var controlsDiv = '<div id="controls">';

    return controlsDiv;
  }

  var closeControlsDiv = function() {
    return '</div>';
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

  neck.initLayout = function() {

    if( objectIsEmpty(this.params) ) {
      this.params = {
        myContainer:                'neck-container',
        containerSelectorType:      'id',
        showTitle:                  true,
        showScaleNotes:             true,
        showFretRange:              true,
        showResetLink:              true,
        showChordButtons:           true,
        showNotesPerChordSelector:  true,
        showChordNameHeader:        true,
        showIntervalColorKey:       true,
        topfret:                    17,
        lowfret:                    0,
        scalesArray:                'majorScales',
        rootNote:                   'C',
        showInitialChord:           false,
        chordInterval:              1,
        notesPerChord:              3
      };

      if(arguments !== undefined) {
        for ( name in arguments[0] ) {
          if( arguments[0].hasOwnProperty(name)) {
            this.params[name] = arguments[0][name];
          }
        }
      }
    }

    var params = this.params;

    console.log(params.containerSelectorType);
    if(params.containerSelectorType == 'id') {
      this.myContainer = $('#'+params.myContainer);
    } else if(params.containerSelectorType == 'className') {
      this.myContainer = $('.'+params.myContainer);
    }
    
    this.topfret = params.topfret;
    this.lowfret = params.lowfret;
    this.currentScale = this[params.scalesArray][params.rootNote];
    this.currentKey = params.rootNote;

    this.htmlPieces = "";

    if(params.showTitle) {
      this.htmlPieces += buildMaintitleDiv();
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

        if(params.showChordNameHeader) {
          this.htmlPieces += buildChordNameHeaderDiv();
        }

      this.htmlPieces += closeTopLeftDiv();

      this.htmlPieces += openTopRighttDiv();

        if(params.showNotesPerChordSelector) {
          this.htmlPieces += buildNotesPerChordSelectorDiv();
        }

        if(params.showIntervalColorKey) {
          this.htmlPieces += buildColorKeyDiv();
        }

      this.htmlPieces += closeTopRighttDiv();

    this.htmlPieces += closeTopDiv();

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
  
    this.htmlPieces += closeControlsDiv();

    var el = this.myContainer;
    el.html(this.htmlPieces);

    this.initActions();

    if(params.showInitialChord) {
      this.notesPerChord = params.notesPerChord;
      this.intval = params.chordInterval;
      this.isolateChord(this.intval);
      this.setNotesPerChord(this.notesPerChord);
    }

    return this.htmlPieces;

  }

  neck.initActions = function() {

    var container = this.myContainer;
    var that = this;
    this.stringDivs = this.buildNoteGrid();
    container.find('.neckmodule').html(this.stringDivs);
    container.find('.notesPerChord').hide();

    container.find('.chordButton').click(function(){
      that.handleChordButtonClick($(this));
    });

    container.find('.notesPerChord a').click(function(e){
      e.preventDefault();
      var chordType = $(this).attr('ctype');
      that.setNotesPerChord(chordType);
      that.isolateChord(that.intval);
    });

    if(this.params.showResetLink) {
      $('.reset-link').click(function(e){
        e.preventDefault();
        that.initLayout();
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
      console.log('scalesArray: '+this.params.scalesArray);
      break;

      case 'harmonicMinorScales' :
      this.currentChordsArr = this.harmonicMinorChordsArr;
      this.changeHarmMinorScale(this.currentKey);
      break;

    }

  }

  var returnThis = function() {
    var that = this;
    return that;
  }

  neck.getObj = function() {
    var objCopy = returnThis();
    return objCopy;
  }

  var objectIsEmpty = function(obj) {
    if (Object.keys(obj).length === 0) {
      return true;
    } else {
      return false;
    }
  }

  var resetNeck = function() {
    this.initLayout();
  }

  return neck;

})();

function neckCopy (neckObj, container) {
  var that = neckObj;
  // that.neck.params = neckObj.neck.params;
  that.myContainer = container;
  return that;
}