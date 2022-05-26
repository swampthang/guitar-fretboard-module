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
  *   topfret:                    17,                // int - options=> 1-21
  *   lowfret:                    0,                 // int - options: 0-20
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

let $ = jQuery.noConflict();

function neckModule() {

  return {
    myContainer: {},
    containerSelectorType: 'id',
    wrapper: {},
    params: {},
    htmlPieces: '',
    totalFrets: 21,
    webAudArr: [],
    showingChord: false,
    cropping: false,
    intval: 0,
    naturals: ('A', 'B', 'C', 'D', 'E', 'F', 'G'),
    accidentals: ('A#', 'Bb', 'C#', 'Db', 'D#', 'Eb', 'F#', 'Gb', 'G#', 'Ab'),
    stringDivs: "",
    audioArr: [],
    fret: "",
    string: "",
    note: "",
    noteType: "",
    notesPerChord: 3,
    allowFreeze: false,
    s: 1,
    f: 0,
    topfret: 21,
    lowfret: 0,
    pair: false,
    pairArr: [],
    currentScale: [],
    currentScaleType: "",
    currentChordsArr: [],
    currentKey: "",
    currentInterval: "",
    notesOfKey: "",
    toggleStringVisibility: true,
    neckStyleClass: "long-neck-default",
    replaceInitSnippet: false,
    controlsHidden: false,
    hideControls: false,
    showingPentatonic: false,
    soundTrigger: 'click',
    strings: {
      1: ['E', 'E#,F', 'F#,Gb', 'G', 'G#,Ab', 'A', 'A#,Bb', 'B,Cb', 'B#,C', 'C#,Db', 'D', 'D#,Eb', 'E,Fb', 'E#,F', 'F#,Gb', 'G', 'G#,Ab', 'A', 'A#,Bb', 'B,Cb', 'B#,C', 'C#,Db'],
      2: ['B,Cb', 'B#,C', 'C#,Db', 'D', 'D#,Eb', 'E,Fb', 'F', 'F#,Gb', 'G', 'G#,Ab', 'A', 'A#,Bb', 'B,Cb', 'B#,C', 'C#', 'D', 'D#', 'E,Fb', 'E#,F', 'F#,Gb', 'G', 'G#,Ab'],
      3: ['G', 'G#,Ab', 'A', 'A#,Bb', 'B,Cb', 'B#,C', 'C#,Db', 'D', 'D#,Eb', 'E,Fb', 'F', 'F#,Gb', 'G', 'G#,Ab', 'A', 'A#,Bb', 'B,Cb', 'B#,C', 'C#,Db', 'D', 'D#,Eb', 'E,Fb'],
      4: ['D', 'D#,Eb', 'E,Fb', 'F', 'F#,Gb', 'G', 'G#,Ab', 'A', 'A#,Bb', 'B,Cb', 'B#,C', 'C#,Db', 'D', 'D#,Eb', 'E,Fb', 'F', 'F#,Gb', 'G', 'G#,Ab', 'A', 'A#,Bb', 'B,Cb'],
      5: ['A', 'A#,Bb', 'B,Cb', 'B#,C', 'C#,Db', 'D', 'D#,Eb', 'E,Fb', 'E#,F', 'F#,Gb', 'G', 'G#,Ab', 'A', 'A#,Bb', 'B,Cb', 'B#,C', 'C#,Db', 'D', 'D#,Eb', 'E,Fb', 'E#,F', 'F#,Gb'],
      6: ['E,Fb', 'E#,F', 'F#,Gb', 'G', 'G#,Ab', 'A', 'A#,Bb', 'B,Cb', 'B#,C', 'C#,Db', 'D', 'D#,Eb', 'E,Fb', 'E#,F', 'F#,Gb', 'G', 'G#,Ab', 'A', 'A#,Bb', 'B,Cb', 'B#,C', 'C#,Db']
    },
    sounds: {
      1: ['E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5', 'Gb5', 'G5', 'Ab5', 'A5', 'Bb5', 'B5', 'C6', 'Db6'],
      2: ['B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5', 'Db5', 'D5', 'Eb5', 'E5', 'F5', 'Gb5', 'G5', 'Ab5'],
      3: ['G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4', 'C5', 'Db5', 'D5', 'Eb5', 'E5'],
      4: ['D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4', 'G4', 'Ab4', 'A4', 'Bb4', 'B4'],
      5: ['A2', 'Bb2', 'B2', 'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4', 'Db4', 'D4', 'Eb4', 'E4', 'F4', 'Gb4'],
      6: ['E2', 'F2', 'Gb2', 'G2', 'Ab2', 'A2', 'Bb2', 'B2', 'C3', 'Db3', 'D3', 'Eb3', 'E3', 'F3', 'Gb3', 'G3', 'Ab3', 'A3', 'Bb3', 'B3', 'C4', 'Db4']
    },
    majorScales: {
      'C': ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
      'G': ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
      'D': ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
      'A': ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
      'E': ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
      'B': ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
      'F#': ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'E#'],
      'C#': ['C#', 'D#', 'E#', 'F#', 'G#', 'A#', 'B#'],
      'F': ['F', 'G', 'A', 'Bb', 'C', 'D', 'E'],
      'Bb': ['Bb', 'C', 'D', 'Eb', 'F', 'G', 'A'],
      'Eb': ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'],
      'Ab': ['Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'],
      'Db': ['Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb', 'C'],
      'Gb': ['Gb', 'Ab', 'Bb', 'Cb', 'Db', 'Eb', 'F'],
      'Cb': ['Cb', 'Db', 'Eb', 'Fb', 'Gb', 'Ab', 'Bb']
    },
    naturalMinorScales: {
      'A': ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      'E': ['E', 'F#', 'G', 'A', 'B', 'C', 'D'],
      'B': ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'],
      'F#': ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E'],
      'C#': ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B'],
      'G#': ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#'],
      'D#': ['D#', 'E#', 'F#', 'G#', 'A#', 'B', 'C#'],
      'A#': ['A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'G#'],
      'F': ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'],
      'C': ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'Bb'],
      'G': ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F'],
      'D': ['D', 'E', 'F', 'G', 'A', 'Bb', 'C'],
      'Bb': ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'Ab'],
      'Eb': ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'Cb', 'Db'],
      'Ab': ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Fb', 'Gb']
    },
    harmonicMinorScales: {
      'A': ['A', 'B', 'C', 'D', 'E', 'F', 'G#'],
      'E': ['E', 'F#', 'G', 'A', 'B', 'C', 'D#'],
      'B': ['B', 'C#', 'D', 'E', 'F#', 'G', 'A#'],
      'F#': ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E#'],
      'C#': ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B#'],
      'G#': ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'G'],
      'D#': ['D#', 'E#', 'F#', 'G#', 'A#', 'B', 'D'],
      'A#': ['A#', 'B#', 'C#', 'D#', 'E#', 'F#', 'A'],
      'F': ['F', 'G', 'Ab', 'Bb', 'C', 'Db', 'E'],
      'C': ['C', 'D', 'Eb', 'F', 'G', 'Ab', 'B'],
      'G': ['G', 'A', 'Bb', 'C', 'D', 'Eb', 'F#'],
      'D': ['D', 'E', 'F', 'G', 'A', 'Bb', 'C#'],
      'Bb': ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'A'],
      'Eb': ['Eb', 'F', 'Gb', 'Ab', 'Bb', 'Cb', 'D'],
      'Ab': ['Ab', 'Bb', 'Cb', 'Db', 'Eb', 'Fb', 'G']
    },
    chordsArr: {
      '1': [0, 2, 4, 6, 1, '', '<sup>maj7</sup>', '<sup>maj9</sup>'],
      '2': [1, 3, 5, 0, 2, '<sup>m</sup>', '<sup>m7</sup>', '<sup>m9</sup>'],
      '3': [2, 4, 6, 1, 3, '<sup>m</sup>', '<sup>m7</sup>', '<sup>m7b9</sup>'],
      '4': [3, 5, 0, 2, 4, '', '<sup>maj7</sup>', '<sup>maj9</sup>'],
      '5': [4, 6, 1, 3, 5, '', '7', '9'],
      '6': [5, 0, 2, 4, 6, '<sup>m</sup>', '<sup>m7</sup>', '<sup>m9</sup>'],
      '7': [6, 1, 3, 5, 0, '<sup>dim</sup>', '<sup>m7b5</sup>', '<sup>m7b5b9</sup>']
    },
    naturalMinorChordsArr: {
      '1': [0, 2, 4, 6, 1, '<sup>m</sup>', '<sup>m7</sup>', '<sup>m9</sup>'],
      '2': [1, 3, 5, 0, 2, '<sup>dim</sup>', '<sup>m7b5</sup>', '<sup>m7b5b9</sup>'],
      '3': [2, 4, 6, 1, 3, '', '<sup>maj7</sup>', '<sup>maj9</sup>'],
      '4': [3, 5, 0, 2, 4, '<sup>m</sup>', '<sup>m7</sup>', '<sup>m9</sup>'],
      '5': [4, 6, 1, 3, 5, '<sup>m</sup>', '<sup>m7</sup>', '<sup>m7b9</sup>'],
      '6': [5, 0, 2, 4, 6, '', '<sup>maj7</sup>', '<sup>maj9</sup>'],
      '7': [6, 1, 3, 5, 0, '', '7', '9']
    },
    harmonicMinorChordsArr: {
      '1': [0, 2, 4, 6, 1, '<sup>m</sup>', '<sup>mMaj7</sup>', '<sup>m9#7</sup>'],
      '2': [1, 3, 5, 0, 2, '<sup>dim</sup>', '<sup>m7b5</sup>', '<sup>m7b5b9</sup>'],
      '3': [2, 4, 6, 1, 3, 'aug', '<sup>maj7#5</sup>', '<sup>maj9#5</sup>'],
      '4': [3, 5, 0, 2, 4, '<sup>m</sup>', '<sup>m7</sup>', '<sup>m9</sup>'],
      '5': [4, 6, 1, 3, 5, '<sup></sup>', '<sup>7</sup>', '<sup>7b9</sup>'],
      '6': [5, 0, 2, 4, 6, '', '<sup>maj7</sup>', '<sup>minMaj7</sup>'],
      '7': [6, 1, 3, 5, 0, '<sup>dim</sup>', '<sup>dim7</sup>', '<sup>dim7b9</sup>']
    },


    // MODULE METHODS **************************************************************************************************** //
    build_chord_buttons() {
      let symbol_num = parseInt(this.notesPerChord) + 2; // this will change if we go beyond 9th chords in the chordsArray
      let cnt = 0;
      let that = this;

      this.wrapper.find('.chordButton').each(function () {
        let id = $(this).attr('scaleInt');
        $(this).html(that.currentScale[cnt] + that.currentChordsArr[id][symbol_num]);
        let symb = that.currentChordsArr[id][symbol_num];
        cnt++;
      });
    },

    deactivateChordbuttons() {
      this.wrapper.find('.chord-buttons .chordButton').each(function () {
        $(this).removeClass('active');
      });
    },

    hideChordButtons() {
      this.wrapper.find('.chord-buttons').hide();
      this.wrapper.find('.chord-instructions').hide();

    },

    buildNoteDiv(note, s, f) {

      let noteType;

      if (note.indexOf('#') !== -1) {
        noteType = 'sharp';
      } else if (note.indexOf('b') !== -1) {
        noteType = 'flat';
      } else {
        noteType = 'natural';
      }
      let string = 'string' + s;
      let fret = 'fret' + f;

      let stringDiv = document.createElement('div');
      stringDiv.setAttribute('id', `st_${s}_${f}`);
      stringDiv.setAttribute('notename', note);
      stringDiv.className = `note ${string} ${fret} ${noteType} f${s}_${f}`;
      stringDiv.innerText = note;

      return stringDiv;
    },

    hide_chord_divs() {
      this.wrapper.find('.chord_in_key').hide();
      this.wrapper.find('#color_key').hide();
      this.wrapper.find('.showing').hide();
      this.wrapper.find('.notes-per-chord-wrapper').hide();
    },

    show_chord_divs() {
      this.wrapper.find('.chord_in_key').show();
      this.wrapper.find('#color_key').show();
      this.wrapper.find('.showing').show();
      this.wrapper.find('.notes-per-chord-wrapper').show();
      this.wrapper.find('.chord_instructions').show();
    },

    getVisibleNotes() {

      return this.myContainer[0].querySelectorAll('.neckmodule .in-scale:not(.muted)');
    },

    changeScale(rootNote) {

      if (this.params.scaleOnlyMode && this.showingPentatonic) {
        this.revertPentatonic();
      }

      let wasShowingChord = this.showingChord;
      this.showingChord = false;
      let select = this.wrapper.find('#minorScaleSelector');
      select.val($('option:first', select).val());
      select = this.wrapper.find('#harMinorScaleSelector');
      select.val($('option:first', select).val());
      this.currentKey = rootNote;
      this.currentScale = this[this.params.scalesArray][rootNote];
      this.currentScaleType = 'major';
      this.currentChordsArr = this.chordsArr;

      if (this.params.scaleOnlyMode) {
        this.wrapper.find('.main-title').html(this.currentKey + ' major scale');
      } else {
        this.wrapper.find('.main-title').html('Key of ' + this.currentKey);
      }

      this.updateMetaDivs("rootNote", rootNote);
      this.updateMetaDivs("scalesArray", "majorScales");

      this.doScale();

      if (wasShowingChord) {
        this.isolateChord(this.intval);
      }
    },

    attachSound(note) {

    },

    changeNatMinorScale(rootNote) {

      if (this.params.scaleOnlyMode && this.showingPentatonic) {
        this.revertPentatonic();
      }

      let wasShowingChord = this.showingChord;
      this.showingChord = false;
      let select = this.wrapper.find('#scaleSelector');
      select.val($('option:first', select).val());
      select = this.wrapper.find('#harMinorScaleSelector');
      select.val($('option:first', select).val());
      this.currentKey = rootNote;
      this.currentScale = this.naturalMinorScales[rootNote];
      this.currentScaleType = 'natural minor';
      this.currentChordsArr = this.naturalMinorChordsArr;
      if (this.params.scaleOnlyMode) {
        this.wrapper.find('.main-title').html(this.currentKey + ' natural minor scale');
      } else {
        this.wrapper.find('.main-title').html('Key of ' + this.currentKey + ' natural minor');
      }
      this.updateMetaDivs("rootNote", rootNote);
      this.updateMetaDivs("scalesArray", "naturalMinorScales");

      this.doScale();

      if (wasShowingChord) {
        this.isolateChord(this.intval);
      }
    },

    changeHarmMinorScale(rootNote) {

      if (this.params.scaleOnlyMode && this.showingPentatonic) {
        this.revertPentatonic();
      }

      let wasShowingChord = this.showingChord;
      this.showingChord = false;
      this.currentKey = rootNote;
      this.currentScale = this.harmonicMinorScales[rootNote];
      this.currentScaleType = 'harmonic minor';
      this.currentChordsArr = this.harmonicMinorChordsArr;
      if (this.params.scaleOnlyMode) {
        this.wrapper.find('.main-title').html(this.currentKey + ' harmonic minor scale');
      } else {
        this.wrapper.find('.main-title').html('Key of ' + this.currentKey + ' harmonic minor');
      }
      this.updateMetaDivs("rootNote", rootNote);
      this.updateMetaDivs("scalesArray", "harmonicMinorScales");

      this.doScale();

      if (wasShowingChord) {
        this.isolateChord(this.intval);
      }
    },

    doScale() {

      this.wrapper.find('.chord-instructions').show();
      this.wrapper.find('.note').removeClass('int-3 int-5 int-7 int-11 int-1 int-9 in-scale');
      this.wrapper.find('.note').hide();
      // this.hide_chord_divs();
      if (!this.params.scaleOnlyMode) {
        this.build_chord_buttons();
      } else {
        this.hide_chord_divs();
      }
      this.notesOfKey = '<ul><li>Scale notes: </li>';
      for (var s = 0; s < this.currentScale.length; s++) {
        this.notesOfKey += '<li>' + this.currentScale[s] + '</li>';
      }
      this.notesOfKey += '</ul>';
      this.wrapper.find('#keyNotes').html(this.notesOfKey);
      // for testing
      this.wrapper.find('#info').html('lowfret: ' + this.lowfret + ' - topfret: ' + this.topfret);
      if (!this.showScaleNotes) {
        this.wrapper.find('.note').addClass('muted');
      }
      for (var i = 0; i < this.currentScale.length; i++) {
        var theNote = this.currentScale[i];
        for (var f = this.lowfret; f <= this.topfret; f++) {

          this.wrapper.find(".note[notename='" + theNote + "'].fret" + f).show().addClass('in-scale').removeClass('muted');
        }
      }
    },

    resetToScale() {
      this.wrapper.find('.note').removeClass('muted');
      this.showingChord = false;
      this.wrapper.find('.chord-name').html('');
      this.wrapper.find('.chordButton').removeClass('active');
      this.wrapper.find('.meta#notesPerChord').remove();
      this.wrapper.find('.meta#currentInterval').remove();
      this.wrapper.find('.meta#showInitialChord').remove();
      this.wrapper.find('.meta#chordInterval').remove();
      this.doScale();
    },

    muteNotes(noteArr) {
      for (var n = 0; n < noteArr.length; n++) {
        noteArr[n].addClass('muted');
      }
    },

    unMuteNotes(noteArr) {
      for (var n = 0; n < noteArr.length; n++) {
        noteArr[n].removeClass('muted');
      }
    },

    getPentaExcludes() {

      let excludes = [], int4, int7;

      switch (this.currentScaleType) {
        case 'major':
          int4 = 3;
          int7 = 6;
          break;
        case 'natural minor':
          int4 = 1;
          int7 = 5;
          break;
        case 'harmonic minor':
          int4 = 1;
          int7 = 5;
          break;
      }
      excludes.push(int4);
      excludes.push(int7);
      return excludes;
    },

    pentaButtonToggler() {
      if (this.showingPentatonic) {
        this.revertPentatonic();
      } else {
        this.convertToPentatonic();
      }
    },

    convertToPentatonic() {
      let int4,
        int7,
        el4,
        el7,
        noteArr = [],
        excludes = this.getPentaExcludes();

      int4 = excludes[0];
      int7 = excludes[1];

      el4 = this.wrapper.find('.note[notename="' + this.currentScale[int4] + '"]');
      el7 = this.wrapper.find('.note[notename="' + this.currentScale[int7] + '"]');
      noteArr.push(el4);
      noteArr.push(el7);
      this.muteNotes(noteArr);
      this.wrapper.find('#keyNotes li:contains("' + this.currentScale[int4] + '")').hide();
      this.wrapper.find('#keyNotes li:contains("' + this.currentScale[int7] + '")').hide();
      this.wrapper.find('.main-title').html(this.currentKey + ' ' + this.currentScaleType + ' pentatonic scale');
      this.wrapper.find('.pentatonic-btn').text("Revert to full scale");
      this.showingPentatonic = true;
    },

    revertPentatonic() {
      let int4,
        int7,
        el4,
        el7,
        noteArr = [],
        excludes = this.getPentaExcludes();

      int4 = excludes[0];
      int7 = excludes[1];

      el4 = this.wrapper.find('.note[notename="' + this.currentScale[int4] + '"]');
      el7 = this.wrapper.find('.note[notename="' + this.currentScale[int7] + '"]');
      noteArr.push(el4);
      noteArr.push(el7);
      this.unMuteNotes(noteArr);
      this.wrapper.find('#keyNotes li:contains("' + this.currentScale[int4] + '")').show();
      this.wrapper.find('#keyNotes li:contains("' + this.currentScale[int7] + '")').show();
      this.wrapper.find('.main-title').html(this.currentKey + ' ' + this.currentScaleType + ' scale');
      this.wrapper.find('.pentatonic-btn').text("Convert to pentatonic");
      this.showingPentatonic = false;
    },

    showChord(interval) {

      this.showingChord = true;
      // this.wrapper.find('.chord-instructions').hide();
      this.wrapper.find('.note').removeClass('int-3 int-5 int-7 int-11 int-1 int-9');
      this.currentInterval = interval;
      let noteSelectArr = this.currentChordsArr[interval];
      let chordType = "";
      this.show_chord_divs();
      // hide all note divs
      this.wrapper.find('.note').removeClass('int-3 int-5 int-7');
      this.wrapper.find('.note').addClass('muted'); // set transparency rather than hiding the other scale notes
      this.updateMetaDivs("notesPerChord", this.notesPerChord);

      for (let n = 0; n < this.notesPerChord; n++) {

        let theInt = noteSelectArr[n];
        let theNote = this.currentScale[theInt];

        switch (n) {
          case 0:
            // var chordRoot = theNote;
            this.wrapper.find(".note[notename='" + theNote + "']").addClass('int-1').removeClass('muted').show();
            break;

          case 1:
            this.wrapper.find(".note[notename='" + theNote + "']").addClass('int-3').removeClass('muted').show();
            break;

          case 2:
            this.wrapper.find(".note[notename='" + theNote + "']").addClass('int-5').removeClass('muted').show();
            break;

          case 3:
            this.wrapper.find(".note[notename='" + theNote + "']").addClass('int-7').removeClass('muted').show();
            break;

          case 4:
            this.wrapper.find(".note[notename='" + theNote + "']").addClass('int-9').removeClass('muted').show();
            break;
        }

      }

      this.hideNotesOutOfRange();
      this.resetHiddenStrings();

      this.wrapper.find('.chord_in_key').html(" (the " + interval + " chord)");

      this.updateMetaDivs("currentInterval", interval);
      this.updateMetaDivs("showInitialChord", true);
    },

    resetHiddenStrings() {
      for (let s = 1; s <= 6; s++) {
        if (this.wrapper.find('.in-scale.string' + s).hasClass('hidden')) {
          this.wrapper.find('.in-scale.string' + s).hide();
        }
      }
    },

    hideNotesOutOfRange() {
      for (let f = 0; f < this.lowfret; f++) {
        this.wrapper.find(".note.fret" + f).hide();
      }

      for (let f = (parseInt(this.topfret) + 1); f <= this.totalFrets; f++) {
        this.wrapper.find(".note.fret" + f).hide();
      }
    },

    setNotesPerChord(num) {
      this.notesPerChord = num;
      this.build_chord_buttons();
      this.showChord(this.currentInterval);
      this.updateMetaDivs('notesPerChord', num);
    },

    setHighFret(top) {
      if (top > this.lowfret) {

        this.topfret = top;
        this.updateMetaDivs("topfret", this.topfret);

      } else {
        alert('Oops! You chose a highest fret number that is lower than the lower fret number. Please reselect.');
      }

      if (!this.cropping) {
        this.cropping = true;
      }
      this.doScale();
      if (this.showingChord) {
        this.showChord(this.intval);
      }

    },

    setLowFret(bottom) {
      if (bottom < parseInt(this.topfret)) {
        this.lowfret = bottom;
        this.updateMetaDivs("lowfret", this.lowfret);

      } else {
        alert('Oops! You chose a lowest fret number that is higher than the upper fret number. Please reselect.');
      }
      if (!this.cropping) {
        this.cropping = true;
      }
      this.doScale();
      if (this.showingChord) {
        this.showChord(this.intval);
      }
    },

    toggleShowHideString(stringNumber, el) {

      if (this.wrapper.find('.in-scale.string' + stringNumber).hasClass('hidden')) {
        this.wrapper.find('.in-scale.string' + stringNumber).show().removeClass('hidden').removeClass('muted');
        this.wrapper.find('.meta#hideString' + stringNumber).remove();
        el.removeClass('off');
      } else {
        this.wrapper.find('.in-scale.string' + stringNumber).hide().addClass('hidden').addClass('muted');
        this.updateMetaDivs('hideString' + stringNumber, stringNumber);
        el.addClass('off');
      }
    },

    buildNoteGrid(notesContainer) {
      var note;
      for (var s = 1; s <= 6; s++) {
        for (var f = 0; f <= this.totalFrets; f++) {

          note = this.strings[s][f];
          let noteDiv;

          if (note.indexOf(',') != -1) {
            this.pair = true;
            this.pairArr = note.split(',');

            for (var n = 0; n <= 1; n++) {
              note = this.pairArr[n];
              noteDiv = this.buildNoteDiv(note, s, f);
              notesContainer[0].append(noteDiv);
              this.setNoteClickListener(noteDiv, s, f);
            }
          } else {
            noteDiv = this.buildNoteDiv(note, s, f);
            notesContainer[0].append(noteDiv);
            this.setNoteClickListener(noteDiv, s, f);
          }
        }
      }
      // return this.stringDivs;
    },

    handleChordButtonClick(el) {
      this.intval = el.attr('scaleInt');
      this.isolateChord(this.intval);
      // add or update the active chord metadata
      this.updateMetaDivs('chordInterval', this.intval);
    },

    isolateChord(intval) {
      this.intval = intval;

      if (this.params.showChordButtons) {
        this.deactivateChordbuttons();
        var el = this.wrapper.find('.chordButton[scaleint="' + intval + '"]');
        el.addClass('active').removeClass('muted');
        this.params.chordInterval = intval;
      }

      this.showChord(this.intval);

      if (this.params.showNotesPerChordSelector) {
        this.wrapper.find('.notes-per-chord-wrapper').show();
      }

      if (this.params.showChordNameHeader) { // stuff the chord name into the h2 above the guitar neck instance
        var symbol_num = parseInt(this.notesPerChord) + 2; // this will change if we go beyond 9th chords in the chordsArray
        var chordName = this.currentScale[intval - 1] + this.currentChordsArr[this.currentInterval][symbol_num];
        this.wrapper.find('.chord-name').html(chordName);
      }
    },

    setScaleOnlyMode() {
      this.resetToScale();
      this.hideChordButtons();
    },

    // FRET RANGE SELECTORS
    buildFretRangeSelectors() {

      var fretRangeSelectors = '<div class="controller" id="fretselectors">Set lowest fret:';
      fretRangeSelectors += ' <select id="lowfret">';
      for (var i = 0; i < this.totalFrets; i++) {
        if (this.lowfret == i) {
          fretRangeSelectors += '   <option value="' + i + '" selected="selected">' + i + '</option>';
        } else {
          fretRangeSelectors += '   <option value="' + i + '">' + i + '</option>';
        }
      }
      fretRangeSelectors += ' </select>';
      fretRangeSelectors += 'Set highest fret: ';
      fretRangeSelectors += ' <select id="highfret">'
      for (var i = 1; i <= this.totalFrets; i++) {
        if (this.topfret == i) {
          fretRangeSelectors += '   <option value="' + i + '" selected="selected">' + i + '</option>';
        } else {
          fretRangeSelectors += '   <option value="' + i + '">' + i + '</option>';
        }
      }
      fretRangeSelectors += ' </select>';
      fretRangeSelectors += '</div>';

      return fretRangeSelectors;
    },

    // KEY SELECTORS
    buildKeySelectors() {
      var keySelectors = '<div class="changeKey controller info-display-div"><h4>Select key:</h4>';
      keySelectors += ' <select id="scaleSelector">';
      keySelectors += '   <option value="">Major...</option>';
      for (var key in this.majorScales) {
        if (key === 'length' || !this.majorScales.hasOwnProperty(key))
          continue;

        keySelectors += '<option value="' + key + '">' + key + ' major</option>';
      }
      keySelectors += ' </select>';

      keySelectors += ' <select id="minorScaleSelector">';
      keySelectors += '   <option value="">Natural minor...</option>';
      for (var key in this.naturalMinorScales) {
        if (key === 'length' || !this.naturalMinorScales.hasOwnProperty(key))
          continue;

        keySelectors += '<option value="' + key + '">' + key + ' minor</option>';
      }
      keySelectors += ' </select>';

      keySelectors += ' <select id="harMinorScaleSelector">';
      keySelectors += '   <option value="">Harmonic minor...</option>';
      for (var key in this.harmonicMinorScales) {
        if (key === 'length' || !this.harmonicMinorScales.hasOwnProperty(key))
          continue;

        keySelectors += '<option value="' + key + '">' + key + ' harmonic minor</option>';
      }
      keySelectors += ' </select>';
      keySelectors += '</div>';

      return keySelectors;
    },

    buildScaleOnlyLink() {
      return '<div class="scale-only-link-wrapper"><a class="refresh-scale-link" href="#">Show scale only</a></div>';
    },

    updateMetaDivs(tagID, val) {
      if (this.wrapper.find(".meta#" + tagID).length) {
        this.wrapper.find(".meta#" + tagID).attr('data-content', val);
      } else {
        this.wrapper.append("<div class='meta' id='" + tagID + "' data-content='" + val + "'>");
      }
    },

    removeMetaDivs() {
      this.wrapper.find('.meta').remove();
    },

    freezeSettings() { // console.log(this.params);
    },

    getObj() {
      var objCopy = returnThis();
      return objCopy;
    },

    writeChordName(chordName) {
      this.wrapper.find('.chordNameHeaderDiv').html(chordName);
    },

    resetNeck() {
      this.initLayout(this.initialParams);
    },

    initParams() {

      if (Object.keys(this.params).length === 0) {
        this.params = {
          myContainer: 'neck-container',
          containerSelectorType: 'id',
          showTitle: true,
          showScaleNotes: true,
          showFretRange: true,
          showFretRangeSelectors: true,
          showKeySelectors: true,
          showScaleOnlyLink: true,
          showResetLink: true,
          showChordButtons: true,
          showNotesPerChordSelector: true,
          showChordNameHeader: true,
          showIntervalColorKey: true,
          showNeckStyleSelectors: true,
          scaleOnlyMode: false,
          totalFrets: 21,
          topfret: 21,
          lowfret: 0,
          scalesArray: 'majorScales',
          rootNote: 'C',
          showInitialChord: false,
          chordInterval: 0,
          notesPerChord: 3,
          toggleStringVisibility: true,
          neckStyleClass: "long-neck-default",
          replaceInitScript: false,
          hideControls: false
        };

        if (arguments !== undefined) {
          for (name in arguments[0]) {
            if (arguments[0].hasOwnProperty(name)) {
              this.params[name] = arguments[0][name];
            }
          }
          // console.log(this.params);
          this.initialParams = this.params;
        }
      }

      var params = this.params;

      if (params.containerSelectorType == 'id') {
        this.myContainer = $('#' + params.myContainer);
      } else if (params.containerSelectorType == 'class') {
        this.myContainer = $('.' + params.myContainer);
      }

      this.topfret = params.topfret;
      this.lowfret = params.lowfret;
      this.totalFrets = params.totalFrets;

      if (params.topfret > this.totalFrets) {
        this.topfret = this.totalFrets;
      }

      this.currentScale = this[params.scalesArray][params.rootNote];
      this.currentKey = params.rootNote;
      this.currentChordsArr = this.chordsArr;
      this.wrapper = this.myContainer.find('.guitar-module-main-wrapper');
      if (params.neckStyleClass !== "") {
        this.myContainer.addClass(params.neckStyleClass);
      }

    },

    preserveMetaData() {

      if (this.myContainer.find('.meta').length) {

        var metaData = "";
        this.myContainer.find('.meta').each(function () {
          var paramName = $(this).attr('id');
          var paramVal = $(this).attr('data-content');
          // check for boolean
          if (paramVal == "true") {
            paramVal = true;
          }
          if (paramVal == "false") {
            paramVal = false;
          }
          metaData += '<div class="meta" id="' + paramName + '" data-content="' + paramVal + '"></div>\n';
        });
        return metaData;
      } else {
        return null;
      }
    },

    initLayout() {

      var params = this.params;

      this.htmlPieces = "";

      // MAIN MODULE WRAPPER
      this.htmlPieces += this.openMainWrapper();

      this.htmlPieces += this.buildControlsToggler();

      if (params.showTitle) {
        this.htmlPieces += this.buildMaintitleDiv(params);
      }

      if (params.scaleOnlyMode) {
        this.htmlPieces += this.buildPentatonicConvertButton();
      }

      if (params.showKeySelectors) {
        this.htmlPieces += this.buildKeySelectors();
      }

      if (params.showScaleOnlyLink) {
        this.htmlPieces += this.buildScaleOnlyLink();
      }

      // TOP
      this.htmlPieces += this.openTopDiv();

      // TOP LEFT
      this.htmlPieces += this.openTopLeftDiv();

      if (params.showScaleNotes) {
        this.htmlPieces += this.buildScaleNotesDiv();
      }

      if (params.showFretRange) {
        this.htmlPieces += this.buildFretRangeInfoDiv();
      }

      if (params.showFretRangeSelectors) {
        this.htmlPieces += this.buildFretRangeSelectors();
      }

      // if (params.showChordNameHeader) {
      //   this.htmlPieces += buildChordNameHeaderDiv();
      // }
      // close topLeftDiv
      this.htmlPieces += this.closeDiv();

      // TOP RIGHT
      this.htmlPieces += this.openTopRighttDiv();

      if (params.showNotesPerChordSelector) {
        this.htmlPieces += this.buildNotesPerChordSelectorDiv();
      }

      if (params.showIntervalColorKey) {
        this.htmlPieces += this.buildColorKeyDiv();
      }
      // close topRightDiv
      this.htmlPieces += this.closeDiv();
      // close topDiv
      this.htmlPieces += this.closeDiv();

      this.htmlPieces += this.buildNeckModuleDiv();

      if (params.showChordButtons && !params.scaleOnlyMode) {
        this.htmlPieces += this.buildChordInstructionsDiv();
      }

      this.htmlPieces += this.openControlsDiv();

      if (params.showResetLink) {
        this.htmlPieces += this.buildResetLink();
      }

      if (params.showChordButtons) {
        this.htmlPieces += this.buildChordButtonsDiv();
      }
      // console.log(params.showNeckStyleSelectors);
      if (params.showNeckStyleSelectors) {
        this.htmlPieces += this.buildNeckStyleSelector();
      }

      // close controlsDiv
      this.htmlPieces += this.closeDiv();

      var metaData = this.preserveMetaData();

      if (metaData !== null) {
        this.htmlPieces += metaData;
      }

      // this.initActions();

      if (params.showInitialChord) {
        this.notesPerChord = params.notesPerChord;
        this.intval = params.chordInterval;
        this.isolateChord(this.intval);
        this.setNotesPerChord(this.notesPerChord);
      }

      // close mainModuleWrapper
      this.htmlPieces += this.closeDiv();

      var el = this.myContainer;
      el.html(this.htmlPieces);

      return this.htmlPieces;

    },

    setNoteClickListener(note, s, f) {
      const soundFile = this.sounds[s][f] + '.mp3';
      const audio = new Audio(`./assets/sounds/nylon/${soundFile}`);
      note.setAttribute('snd', soundFile);
      this.webAudArr.push(audio);
      note.addEventListener('click', () => {
        if (note.classList.contains('muted')) return;
        for (let aud of this.webAudArr) {
          aud.currentTime = 0;
          aud.pause();
        }
        audio.play();
      })
      note.addEventListener('mouseover', () => {
        if (note.classList.contains('muted')) return;
        if (!this.myContainer.find('.sound-trigger-options input')[0].checked) return;
        for (let aud of this.webAudArr) {
          aud.currentTime = 0;
          aud.pause();
        }
        audio.play();
      })
    },

    replaceModuleInitScript(id) { // console.log("id: "+id);
      return '<div><script id="neckModuleScript" type="text/javascript">\n    function buildModule() {\n      var this_script = document.getElementById("neckModuleScript");\n      var container = idMaganager.processScriptInstance(this_script);\n      var neckID = idMaganager.setId(container);\n      neckModuleInit(neckID);\n    }\n    </script></div>';
      // $('.js-module')[0].innerHTML = snippet;
    },

    createSoundTriggerOptions(wrapper) {
      const container = document.createElement('div');
      container.className = 'sound-trigger-options';
      const cb = document.createElement('input');
      cb.setAttribute('type', 'checkbox');
      const rnd = Math.random() * 1000;
      cb.setAttribute('id', `trigger-on-mouseover-${rnd}`);
      const lbl = document.createElement('label');
      lbl.setAttribute('for', `trigger-on-mouseover-${rnd}`);
      lbl.innerText = 'Play sounds on mouse-over.';
      container.append(lbl);
      container.append(cb);
      wrapper.append(container);
    },

    buildRandomRiff() {
      let notes = document.querySelectorAll('.note')
    },

    initActions() { // debugger;
      let container = this.myContainer;
      let wrapper = this.wrapper = container.find('.guitar-module-main-wrapper');
      let that = this;

      this.buildNoteGrid(wrapper.find('.neckmodule'));

      this.createSoundTriggerOptions(wrapper);

      let togglers = this.buildStringViewTogglers();
      wrapper.find('.neckmodule').append(togglers);

      wrapper.find('.notes-per-chord-wrapper').hide();

      wrapper.find('.chordButton').click(function () {
        that.handleChordButtonClick($(this));
      });

      wrapper.find('.notesPerChord a').click(function (e) {
        e.preventDefault();
        that.wrapper.find('.notesPerChord a').removeClass('active');
        $(this).addClass('active');
        var chordType = $(this).attr('ctype');
        that.setNotesPerChord(chordType); // <-- showChord runs here
        that.isolateChord(that.intval); // <-- showChord runs here
      });

      if (this.params.showResetLink) {
        $('.reset-link').click(function (e) {
          e.preventDefault();
          that.removeMetaDivs();
          that.initLayout();
        });
      }

      if (this.params.toggleStringVisibility) {
        wrapper.find('.string-togglers li').each(function () {
          $(this).click(function () {
            var stringNumber = $(this).attr('string');
            that.toggleShowHideString(stringNumber, $(this));
          });
        });
      }

      wrapper.find('.controls-toggler span').click(function () {
        that.toggleControls();
      });

      if (this.params.showKeySelectors) {
        wrapper.find('.changeKey #scaleSelector').change(function () {
          that.changeScale(this.value);
        });
        wrapper.find('.changeKey #minorScaleSelector').change(function () {
          that.changeNatMinorScale(this.value);
        });
        wrapper.find('.changeKey #harMinorScaleSelector').change(function () {
          that.changeHarmMinorScale(this.value);
        });
        wrapper.find('.refresh-scale-link').click(function (e) {
          e.preventDefault();
          that.resetToScale();
        });
      }

      if (this.params.showFretRangeSelectors) {
        wrapper.find('#fretselectors #lowfret').change(function () {
          that.setLowFret(parseInt(this.value));
        });
        wrapper.find('#fretselectors #highfret').change(function () {
          that.setHighFret(parseInt(this.value));
        });
      }

      switch (this.params.scalesArray) {

        case 'majorScales':
          this.currentChordsArr = this.chordsArr;
          this.changeScale(this.currentKey);
          break;

        case 'naturalMinorScales':
          this.currentChordsArr = this.naturalMinorChordsArr;
          this.changeNatMinorScale(this.currentKey);
          break;

        case 'harmonicMinorScales':
          this.currentChordsArr = this.harmonicMinorChordsArr;
          this.changeHarmMinorScale(this.currentKey);
          break;

      }

      this.updateMetaDivs('scalesArray', this.params.scalesArray);
      this.updateMetaDivs('myContainer', this.myContainer.attr('id'));
      this.updateMetaDivs('totalFrets', this.totalFrets);
      this.updateMetaDivs('topfret', this.topfret);
      this.updateMetaDivs('lowfret', this.lowfret);

      this.initStringDisplay();

      if (this.params.hideControls) {
        wrapper.find('.controls-toggler .hide-controls').hide();
        this.toggleControls();
      } else {
        wrapper.find('.controls-toggler .show-controls').hide();
      }
      // debugger;
      this.wrapper.find('.neckstyle-selector li').click(function () {
        that.switchNeckStyle($(this));
      });

      if (this.params.scaleOnlyMode) {
        this.setScaleOnlyMode();
        this.wrapper.find('button.pentatonic-btn').click(function () {
          that.pentaButtonToggler();
        });
      }

    },

    initStringDisplay() { // ran on initActions();
      for (var s = 1; s <= 6; s++) {
        if (this.wrapper.find('#hideString' + s).length) {
          var el = this.wrapper.find('.string-togglers li[string=' + s + ']');
          this.toggleShowHideString(s, el);
        }
      }
    },

    toggleControls() { // debugger;
      if (this.controlsHidden) { // show controls
        this.controlsHidden = false;
        this.updateMetaDivs('hideControls', false);
        this.wrapper.find('.controller').show();
        this.wrapper.find('.controls-toggler span.hide-controls').show();
        this.wrapper.find('.controls-toggler span.show-controls').hide();
      } else { // hide controls
        this.controlsHidden = true;
        this.updateMetaDivs('hideControls', true);
        this.wrapper.find('.controller').hide();
        this.wrapper.find('.controls-toggler span.hide-controls').hide();
        this.wrapper.find('.controls-toggler span.show-controls').show();
      }

    },

    switchNeckStyle(el) {
      var selector = el.attr('class');
      this.myContainer.removeAttr('class');
      switch (selector) {
        case 'neck-f':
          this.neckStyleClass = 'long-neck-f';
          this.myContainer.addClass(this.neckStyleClass);
          break;
        case 'neck-g':
          this.neckStyleClass = 'long-neck-g';
          this.myContainer.addClass(this.neckStyleClass);
          break;
        case 'neck-default':
          this.neckStyleClass = 'long-neck-default';
          this.myContainer.addClass(this.neckStyleClass);
          break;
      }
    },
    // }
    // END MODULE METHODS ********************************************************* \\


    // DISPLAY BUILDERS ******************************************************************************** //

    openMainWrapper() {
      return '<div class="guitar-module-main-wrapper">';
    },

    buildControlsToggler() {
      return "<div class='controls-toggler'>\n  <span class='show-controls'>Show Controls</span>\n  <span class='hide-controls'>Hide Controls</span>\n</div>";
    },

    buildMaintitleDiv(params) {
      if (params.showChordNameHeader) {
        return `
      <div class="container">
        <div class="main-title info-display-div"></div>
        <h2 class="chord-name"></h2>
      </div>`;
      } else {
        return '<div class="main-title info-display-div"></div>';
      }
    },

    buildPentatonicConvertButton() {
      return '<button class="pentatonic-btn">Convert to pentatonic</button>';
    },

    // TOP DIV BUILDER
    openTopDiv() {
      return '<div class="top-wrapper info-display-div">';
    },
    // TOP LEFT BUILDER
    openTopLeftDiv() {
      return '<div class="top-left">';
    },

    // SCALE NOTES
    buildScaleNotesDiv() {
      return '<div id="keyNotes"></div>';
    },

    // FRET RANGE DISPLAY
    buildFretRangeInfoDiv() {
      return '<div class="controller" id="info"></div>';
    },

    // CHORD NAME
    buildChordNameHeaderDiv() {
      return '<h2 class="chord-name"></h2>';
    },

    // TOP RIGHT BUILDER
    openTopRighttDiv() {
      return '<div class="top-right">';
    },

    // NOTES PER CHORD SELECTOR
    buildNotesPerChordSelectorDiv() {

      var notesPerChordSelectorDiv = '<div class="controller notes-per-chord-wrapper">';
      var btnArr = {
        0: {
          'ctype': 3,
          'label': 'basic chords'
        },
        1: {
          'ctype': 4,
          'label': '7th chords'
        },
        2: {
          'ctype': 5,
          'label': '9th chords'
        }
      };

      for (var n = 0; n <= 2; n++) {
        var thisArr = btnArr[n];
        var activeClass = "";
        if (this.params.notesPerChord == thisArr['ctype']) {
          activeClass = " active";
        }
        notesPerChordSelectorDiv += ' <div class="notesPerChord">\n<a class="notes-per-chord-button' + activeClass + '" ctype="' + thisArr['ctype'] + '" href="#">' + thisArr['label'] + '</a>\n </div>';
      }
      notesPerChordSelectorDiv += '</div>';
      return notesPerChordSelectorDiv;
    },

    // COLOR KEY DISPLAY
    buildColorKeyDiv() {
      var colorKeyDiv = '<div id="color_key">';
      colorKeyDiv += '  <div id="color-key-wrapper">';
      colorKeyDiv += '    <h4>Color Key for chord note intervals</h4>';
      colorKeyDiv += '    <ul id="color-key">';
      colorKeyDiv += '        <li>';
      colorKeyDiv += '          <div class="int-1">1</div>';
      colorKeyDiv += '        </li>';
      colorKeyDiv += '        <li>';
      colorKeyDiv += '          <div class="int-3">3</div>';
      colorKeyDiv += '        </li>';
      colorKeyDiv += '        <li>';
      colorKeyDiv += '          <div class="int-5">5</div>';
      colorKeyDiv += '        </li>';
      colorKeyDiv += '        <li>';
      colorKeyDiv += '          <div class="int-7">7</div>';
      colorKeyDiv += '        </li>';
      colorKeyDiv += '        <li>';
      colorKeyDiv += '          <div class="int-9">9</div>';
      colorKeyDiv += '        </li>';
      colorKeyDiv += '    </ul>';
      colorKeyDiv += '  </div>';
      colorKeyDiv += '</div>';

      return colorKeyDiv;
    },


    closeDiv() {
      return '</div>';
    },

    buildNeckModuleDiv() {
      return '<div class="nm-container"><div class="neckmodule"></div></div>';
    },

    buildStringViewTogglers() {
      var stringViewTogglersDiv = '<div class="string-togglers controller">';
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
    },

    openControlsDiv() { // all the subsequent stuff gets injected into here so this has to be created first!
      return '<div class="controller info-display-div chord-buttons">';
    },

    buildChordInstructionsDiv() {
      return '  <div class="controller info-display-div chord-instructions">Use buttons below to display corresponding chord notes</div>';
    },

    buildResetLink() {
      return '<p class="reset-link controller"><a href="#">Reset guitar neck to initially loaded view</a></p>';
    },

    buildChordButtonsDiv() {

      var chordButtonsDiv = '  <div class="button-wrapper controller">';
      chordButtonsDiv += '    <div class="chordButton" scaleInt="1">Cmaj7</div>';
      chordButtonsDiv += '    <div class="chordButton" scaleInt="2">Dm7</div>';
      chordButtonsDiv += '    <div class="chordButton" scaleInt="3">Em7</div>';
      chordButtonsDiv += '    <div class="chordButton" scaleInt="4">Fmaj7</div>';
      chordButtonsDiv += '    <div class="chordButton" scaleInt="5">G7</div>';
      chordButtonsDiv += '    <div class="chordButton" scaleInt="6">Am7</div>';
      chordButtonsDiv += '    <div class="chordButton" scaleInt="7">Bm7b5</div>';
      chordButtonsDiv += '  </div>';

      return chordButtonsDiv;
    },

    buildNeckStyleSelector() {
      return "<div class='neckstyle-selector'>\n  <ul>\n    <li class='neck-default'></li>\n    <li class='neck-g'></li>\n    <li class='neck-f'></li>\n  </ul>\n</div>";
    },

    returnThis() {
      var that = this;
      return that;
    },

    objectIsEmpty(obj) {
      if (Object.keys(obj).length === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
}

export { neckModule }