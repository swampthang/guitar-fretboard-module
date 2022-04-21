var chordModule = (function() {

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
    noteMetaArray:            [],
    lhFingers:                [],
    stringDivs:               "",
    naturals:                 ('A','B','C','D','E','F','G'),
    accidentals:              ('A#','Bb','C#','Db','D#','Eb','F#','Gb','G#','Ab'),
    viewMode:                 "chord",
    notationData:             "",
    renderer:                 {},
    hideControls:             false,
    controlsHidden:           false,
    showLeftHandSetters:      false,
    chordFinderMode:          false,
    customMode:               false,
    currentChordIndex:        0,
    leftHandShowMode:         "noteNames",
    showIntervalColorKey:     false,
    strings: {
      1:  new Array('E','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb'),
      2:  new Array('B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#','D','D#','E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb'),
      3:  new Array('G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','E#,F','F#,Gb'),
      4:  new Array('D','D#,Eb','E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db'),
      5:  new Array('A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','E#,F','F#,Gb','G','G#,Ab'),
      6:  new Array('E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb','E,Fb','E#,F','F#,Gb','G','G#,Ab','A','A#,Bb','B,Cb','B#,C','C#,Db','D','D#,Eb')
    },
    majorScales: {
      'C':   new Array('C','D','E','F','G','A','B','Eb','Bb','Gb','G#','Db','D#','F#'),
      'F':   new Array('F','G','A','Bb','C','D','E','Ab','Eb','Cb','C#','Gb','G#','B'),
      'Bb':  new Array('Bb','C','D','Eb','F','G','A','Db','Ab','Fb','F#','Cb','C#','E'),
      'Eb':  new Array('Eb','F','G','Ab','Bb','C','D','Gb','Db','A','B','Fb','F#','A'),
      'Ab':  new Array('Ab','Bb','C','Db','Eb','F','G','Cb','Gb','D','E','A','B','D'),
      'Db':  new Array('Db','Eb','F','Gb','Ab','Bb','C','Fb','Cb','G','A','D','E','G'),
      'C#':  new Array('C#','D#','E#','F#','G#','A#','B#','E','B','G','A','D','E','G'),
      'Gb':  new Array('Gb','Ab','Bb','Cb','Db','Eb','F','A','Fb','C','D','G','A','C'),
      'F#':  new Array('F#','G#','A#','B','C#','D#','E#','A','E','C','D','G','A','B#'),
      'Cb':  new Array('Cb','Db','Eb','Fb','Gb','Ab','Bb','D','A','F','G','C','D','F'),
      'B':   new Array('B','C#','D#','E','F#','G#','A#','D','A','F','G','C','D','E#'),
      'E':   new Array('E','F#','G#','A','B','C#','D#','G','D','Bb','C','F','G','A#'),
      'A':   new Array('A','B','C#','D','E','F#','G#','C','G','Eb','E#','Bb','B#','D#'),
      'D':   new Array('D','E','F#','G','A','B','C#','F','C','Ab','A#','Eb','E#','G#'),
      'G':   new Array('G','A','B','C','D','E','F#','Bb','F','Db','D#','Ab','A#','C#')
    },
    // after major scale notes come altered notes - (7=>m3), (8=>b7), (9=>b5), (10=>#5), (11=>b9), (12=>#9), (13=>#11)
    chordTypes: {
      'major': {'symbol': '', 'selectName': 'Major', 'arrayPositions': [0,2,4], 'intervals': [1,3,5], 'basicType': 'major', 'scaleInterval': 1},
      '2': {'symbol': '2', 'selectName': '2', 'arrayPositions': [0,1,4], 'intervals': [1,2,5], 'basicType': 'major', 'scaleInterval': 1},
      '6': {'symbol': '6', 'selectName': '6', 'arrayPositions': [0,2,4,5], 'intervals': [1,3,5,6], 'basicType': 'major', 'scaleInterval': 1},
      'maj7': {'symbol': 'maj7', 'selectName': 'maj7', 'arrayPositions': [0,2,4,6], 'intervals': [1,3,5,7], 'basicType': 'major', 'scaleInterval': 1},
      'maj9': {'symbol': 'maj9', 'selectName': 'maj9', 'arrayPositions': [0,2,4,6,1], 'intervals': [1,3,5,7,9], 'basicType': 'major', 'scaleInterval': 1},
      'sus4': {'symbol': 'sus4', 'selectName': 'sus4', 'arrayPositions': [0,3,4], 'intervals': [1,4,5], 'basicType': 'major', 'scaleInterval': 1},
      'add9': {'symbol': 'add9', 'selectName': 'add9', 'arrayPositions': [0,1,2,4], 'intervals': [1,2,3,5], 'basicType': 'major', 'scaleInterval': 1},
      '11': {'symbol': '11', 'selectName': '11', 'arrayPositions': [0,3,4,8,1], 'intervals': [1,4,5,7,9], 'basicType': '', 'scaleInterval': 5},
      'maj13': {'symbol': 'maj13', 'selectName': 'maj13', 'arrayPositions': [0,2,4,6,1,5], 'intervals': [1,3,5,7,9,6], 'basicType': 'major', 'scaleInterval': 1},
      'minor': {'symbol': 'm', 'selectName': 'Minor', 'arrayPositions': [0,7,4], 'intervals': [1,3,5], 'basicType': 'minor', 'scaleInterval': 1},
      'm7': {'symbol': 'm7', 'selectName': 'm7', 'arrayPositions': [0,7,4,8], 'intervals': [1,3,5,7], 'basicType': 'minor', 'scaleInterval': 6},
      'm6': {'symbol': 'm6', 'selectName': 'm6', 'arrayPositions': [0,7,4,5], 'intervals': [1,3,5,6], 'basicType': 'minor', 'scaleInterval': 1},
      'm9': {'symbol': 'm9', 'selectName': 'm9', 'arrayPositions': [0,7,4,8,1], 'intervals': [1,3,5,7,9], 'basicType': 'minor', 'scaleInterval': 1},
      'm6/9': {'symbol': 'm6/9', 'selectName': 'm6/9', 'arrayPositions': [0,7,4,5,1], 'intervals': [1,3,5,6,9], 'basicType': 'minor', 'scaleInterval': 1},
      '7': {'symbol': '7', 'selectName': '7', 'arrayPositions': [0,2,4,8], 'intervals': [1,3,5,7], 'basicType': '', 'scaleInterval': 5},
      'm7b5': {'symbol': 'm7b5', 'selectName': 'm7b5', 'arrayPositions': [0,7,9,8], 'intervals': [1,3,5,7], 'basicType': '', 'scaleInterval': 7},
      // 'diminished': {'symbol': 'd', 'selectName': 'Diminished Triad', 'arrayPositions': [0,7,9], 'intervals': [1,3,5], 'basicType': 'diminished', 'scaleInterval': 7},
      'dim7': {'symbol': 'd7', 'selectName': 'dim7', 'arrayPositions': [0,7,9,5], 'intervals': [1,3,5,7], 'basicType': '', 'scaleInterval': 1},
      '9': {'symbol': '9', 'selectName': '9', 'arrayPositions': [0,2,4,8,1], 'intervals': [1,3,5,7,9], 'basicType': '', 'scaleInterval': 1},
      '7b5': {'symbol': '7b5', 'selectName': '7b5', 'arrayPositions': [0,2,9,8], 'intervals': [1,3,5,7], 'basicType': '', 'scaleInterval': 1},
      '7b5b9': {'symbol': '7b5b9', 'selectName': '7b5b9', 'arrayPositions': [0,2,9,8,11], 'intervals': [1,3,5,7,9], 'basicType': '', 'scaleInterval': 1},
      '7#5': {'symbol': '7#5', 'selectName': '7#5', 'arrayPositions': [0,2,10,8], 'intervals': [1,3,5,7], 'basicType': '', 'scaleInterval': 1},
      '7#5b9': {'symbol': '7#5b9', 'selectName': '7#5b9', 'arrayPositions': [0,2,10,8,11], 'intervals': [1,3,5,7,9], 'basicType': '', 'scaleInterval': 1},
      '7#9': {'symbol': '7#9', 'selectName': '7#9', 'arrayPositions': [0,2,4,8,12], 'intervals': [1,3,5,7,9], 'basicType': '', 'scaleInterval': 1}
    },
    chordFinderArr: {
      // string:[chord-interval,lh-finger-not-lowest-position,lh-finger-is-lowest-position]
      'major': [
        {6:[1,3,2],5:[3,2,1],4:[5,1,0],3:[1,1,0],2:[3,1,0],1:[1,4,3],'lowest':2},
        {6:[1,1,0],5:[5,3,2],4:[1,4,3],3:[3,2,1],2:[5,1,0],1:[1,1,0],'lowest':6},
        {6:[3,2,2],5:null,4:[1,1,0],3:[5,3,3],2:[1,4,4],1:null,'lowest':4},
        {6:null,5:null,4:[1,1,0],3:[5,2,1],2:[1,4,3],1:[3,3,2],'lowest':4},
        {6:null,5:[1,4,3],4:[3,3,2],3:[5,1,0],2:[1,2,1],1:[3,1,0],'lowest':3},
        {6:null,5:[1,1,0],4:[5,3,2],3:[1,3,1],2:[3,3,3],1:null,'lowest':5}
      ],
      '2': [
        {6:null,5:null,4:[1,1,0],3:[5,3,1],2:[1,4,3],1:[2,1,0],'lowest':4},
        {6:null,5:[1,1,0],4:[5,3,2],3:[1,4,3],2:[2,1,0],1:[5,1,0],'lowest':5},
        {6:null,5:[1,1,0],4:[5,2,1],3:[2,4,3],2:null,1:null,'lowest':5},
        {6:[1,2,1],5:[5,3,3],4:[1,4,4],3:[2,1,0],2:null,1:null,'lowest':3},
        {6:[1,1,0],5:[5,2,1],4:[2,4,4],3:null,2:null,1:null,'lowest':6},
        {6:null,5:null,4:[1,4,3],3:[2,1,0],2:[5,2,1],1:null,'lowest':3}
      ],
      '6': [
        {6:[1,1,0],5:[5,3,2],4:null,3:[3,2,1],2:[6,4,3],1:[1,1,0],'lowest':6},
        {6:null,5:null,4:[1,3,2],3:[3,2,1],2:[6,4,3],1:[1,1,0],'lowest':1},
        {6:null,5:null,4:[1,1,0],3:[5,3,2],2:[6,1,0],1:[3,4,3],'lowest':4},
        {6:null,5:[1,1,0],4:[5,3,1],3:[1,3,1],2:[3,3,1],1:[6,3,1],'lowest':5},
        {6:null,5:[1,4,3],4:[3,2,2],3:[6,3,1],2:[1,1,0],1:null,'lowest':2},
      ],
      'maj7': [
        {6:[1,1,1],5:null,4:[7,3,3],3:[3,4,4],2:[5,2,2],1:[7,1,0],'lowest':1},
        {6:[1,1,0],5:[5,4,3],4:[7,2,2],3:[3,3,3],2:null,1:null,'lowest':6},
        {6:[1,2,1],5:[5,4,3],4:null,3:[3,3,2],2:null,1:[7,1,0],'lowest':1},
        {6:[1,1,0],5:[5,3,2],4:null,3:[3,2,1],2:[7,4,4],1:null,'lowest':6},
        {6:null,5:null,4:[1,4,3],3:[3,3,2],2:[5,2,1],1:[7,1,0],'lowest':1},
        {6:[3,2,2],5:null,4:[1,1,0],3:[5,3,3],2:[7,4,4],1:null,'lowest':4},
        {6:[3,2,2],5:null,4:[1,1,0],3:[5,3,3],2:[7,3,3],1:[3,3,3],'lowest':4},
        {6:null,5:null,4:[1,1,0],3:[5,3,1],2:[7,3,1],1:[3,3,1],'lowest':4},
        {6:null,5:[1,4,3],4:[3,3,2],3:[5,1,0],2:[7,1,0],1:[3,1,0],'lowest':1},
        {6:null,5:[1,1,0],4:[5,3,2],3:[7,2,1],2:[3,4,3],1:[5,1,0],'lowest':1},
        {6:null,5:[1,1,0],4:[5,2,1],3:null,2:[3,3,2],1:[7,4,4],'lowest':5},
        {6:null,5:[1,1,0],4:[5,3,1],3:[1,3,1],2:[3,3,1],1:[7,4,4],'lowest':5}
      ],
      'maj9': [
        {6:[1,2,1],5:[5,4,3],4:[7,3,2],3:[9,1,0],2:null,1:null,'lowest':3},
        {6:[1,2,1],5:[3,1,0],4:[7,3,3],3:[9,1,0],2:null,1:null,'lowest':3},
        {6:[1,2,1],5:[3,1,0],4:[7,4,4],3:[9,1,0],2:[5,3,2],1:null,'lowest':3},
        {6:[1,2,2],5:[3,1,0],4:[7,4,4],3:[9,1,0],2:[5,3,3],1:[7,1,0],'lowest':3},
        {6:[1,2,1],5:null,4:[7,4,3],3:[9,1,0],2:[5,3,2],1:null,'lowest':3},
        {6:[1,1,0],5:[5,2,1],4:[9,4,3],3:[5,4,3],2:[7,4,3],1:null,'lowest':6},
        {6:null,5:[3,1,0],4:[1,4,3],3:[9,1,0],2:[5,2,1],1:[7,1,0],'lowest':5},
        {6:null,5:null,4:[1,4,3],3:[9,1,0],2:[5,2,1],1:[7,1,0],'lowest':3},
        {6:null,5:null,4:[1,1,0],3:[5,3,2],2:[7,4,3],1:[9,1,0],'lowest':4},
        {6:null,5:[1,2,2],4:[3,1,0],3:[7,4,4],2:[9,3,3],1:null,'lowest':4},
        {6:null,5:null,4:[5,2,1],3:[1,2,2],2:[9,1,0],1:[7,4,4],'lowest':2}
      ],
      'sus4': [
        {6:[1,1,0],5:[5,2,2],4:[1,3,3],3:[4,4,4],2:[5,1,0],1:[1,1,0],'lowest':6},
        {6:null,5:null,4:[1,3,3],3:[4,4,4],2:[5,1,0],1:[1,1,0],'lowest':2},
        {6:null,5:null,4:[1,1,0],3:[5,2,1],2:[1,4,3],1:[4,4,4],'lowest':4},
        {6:null,5:[1,1,0],4:[5,3,1],3:[1,3,1],2:[4,4,3],1:null,'lowest':5},
        {6:null,5:[1,1,0],4:[5,2,2],3:[1,3,3],2:[4,4,4],1:[5,1,0],'lowest':5},
        {6:null,5:[1,3,3],4:[4,4,4],3:[5,1,0],2:[1,2,1],1:null,'lowest':3},
        {6:[1,3,3],5:[4,3,3],4:[5,1,0],3:[1,1,0],2:null,1:null,'lowest':4}
      ],
      'add9': [
        {6:null,5:null,4:[1,3,2],3:[3,2,1],2:[5,1,0],1:[2,4,3],'lowest':2},
        {6:null,5:[1,4,3],4:[3,3,2],3:[5,1,0],2:[2,4,3],1:[3,1,0],'lowest':3},
        {6:[1,1,0],5:[5,3,2],4:[2,4,4],3:[3,2,1],2:[5,1,0],1:[1,1,0],'lowest':6},
        {6:null,5:[1,1,0],4:[5,2,1],3:[2,4,4],2:[3,3,2],1:[5,1,0],'lowest':5}
      ],
      '11': [
        {6:null,5:[1,1,0],4:[4,1,0],3:[7,1,0],2:[9,1,0],1:[5,1,0],'lowest':5},
        {6:[1,3,2],5:null,4:[7,4,3],3:[9,2,1],2:[4,1,0],1:null,'lowest':2},
        {6:[1,1,0],5:[5,2,2],4:[7,1,0],3:[4,3,3],2:[5,1,0],1:[9,4,4],'lowest':6},
        {6:null,5:null,4:[1,1,0],3:[4,1,0],2:[7,2,1],1:[9,1,0],'lowest':4},
        {6:null,5:[7,2,2],4:[9,1,0],3:[5,1,0],2:[1,3,3],1:[4,3,4],'lowest':4}
      ],
      'maj13': [
        {6:[1,1,0],5:null,4:[7,2,2],3:[3,3,2],2:[6,4,4],1:[9,4,4],'lowest':6},
        {6:null,5:[1,4,3],4:[9,1,0],3:[6,3,2],2:[7,1,0],1:[3,1,0],'lowest':4},
        {6:[1,2,2],5:[3,1,0],4:[6,1,0],3:[9,1,0],2:[5,3,3],1:[7,1,0],'lowest':5}
      ],
      'minor': [
        {6:null,5:[1,1,0],4:[5,3,2],3:[1,4,3],2:[3,2,1],1:[5,1,0],'lowest':5},
        {6:null,5:null,4:[5,2,1],3:[1,2,2],2:[3,1,0],1:[1,4,4],'lowest':2},
        {6:null,5:[3,2,2],4:[5,1,0],3:[1,1,0],2:null,1:null,'lowest':3},
        {6:[1,1,0],5:[5,3,2],4:[1,4,3],3:[3,1,0],2:[5,1,0],1:[1,1,0],'lowest':6},
        {6:null,5:null,4:[1,4,3],3:[3,1,0],2:[5,1,0],1:[1,1,0],'lowest':3},
        {6:null,5:null,4:null,3:[3,1,0],2:[5,1,0],1:[1,1,0],'lowest':3},
        {6:[3,2,2],5:null,4:[1,1,0],3:[5,3,3],2:[1,4,4],1:null,'lowest':4},
        {6:null,5:null,4:[1,1,0],3:[5,3,2],2:[1,4,3],1:[3,2,1],'lowest':4}
      ],
      'm7': [
        {6:[1,1,0],5:[5,3,2],4:[7,1,0],3:[3,1,0],2:[5,1,0],1:[1,1,0],'lowest':6},
        {6:[1,1,0],5:[5,2,2],4:[1,3,3],3:[3,1,0],2:[7,4,4],1:[1,1,0],'lowest':6},
        {6:null,5:null,4:[1,1,0],3:[5,4,2],2:[7,2,1],1:[3,3,1],'lowest':4},
        {6:null,5:[1,1,0],4:[5,3,2],3:[7,1,0],2:[3,2,1],1:[5,1,0],'lowest':5},
        {6:null,5:[1,1,0],4:[5,3,2],3:[7,1,0],2:[3,2,1],1:[7,4,4],'lowest':5}
      ],
      'm6': [
        {6:null,5:[1,1,0],4:[5,3,2],3:null,2:[3,2,1],1:[6,4,3],'lowest':5},
        {6:null,5:[3,2,1],4:[6,3,2],3:[1,1,0],2:[5,4,4],1:[1,4,4],'lowest':3},
        {6:null,5:[3,2,1],4:[6,3,2],3:[1,1,0],2:[5,4,4],1:null,'lowest':3},
        {6:null,5:null,4:[6,1,0],3:[3,3,1],2:[5,3,1],1:[1,3,1],'lowest':4},
        {6:[1,2,2],5:null,4:[6,1,0],3:[3,3,3],2:[5,3,3],1:[1,3,3],'lowest':4},
        {6:[1,1,0],5:[5,2,2],4:[1,3,3],3:[3,1,0],2:[6,4,4],1:[1,1,0],'lowest':6},
        {6:[3,2,1],5:[6,3,2],4:[1,1,0],3:[5,4,3],2:null,1:null,'lowest':4},
        {6:[3,2,1],5:[6,3,2],4:[1,1,0],3:[5,4,3],2:[6,1,0],1:null,'lowest':4},
        {6:null,5:null,4:[1,1,0],3:[5,4,3],2:[6,1,0],1:[3,2,1],'lowest':4},
        {6:null,5:[6,1,0],4:[3,3,2],3:[5,2,0],2:[1,4,3],1:null,'lowest':5},
        {6:null,5:null,4:[3,1,0],3:[6,2,1],2:[1,1,0],1:[5,4,4],'lowest':4},
        {6:null,5:[1,2,1],4:[5,4,3],3:[6,1,0],2:[3,3,2],1:null,'lowest':3}
      ],
      'm9': [
        {6:[1,1,0],5:[5,3,2],4:[7,1,0],3:[3,1,0],2:[5,1,0],1:[9,4,3],'lowest':6},
        {6:[1,1,0],5:[5,2,1],4:[9,4,3],3:[3,1,0],2:[5,1,0],1:[1,1,0],'lowest':6},
        {6:null,5:[1,2,2],4:[3,1,0],3:[7,3,3],2:[9,3,3],1:[5,3,3],'lowest':4},
        {6:null,5:null,4:[9,4,3],3:[3,1,0],2:[5,1,0],1:[1,1,0],'lowest':3},
        {6:null,5:null,4:[1,2,2],3:[3,1,0],2:[7,4,3],1:[9,3,2],'lowest':3},
        {6:null,5:[1,1,0],4:[5,3,2],3:[9,4,4],2:[3,2,1],1:[5,1,0],'lowest':5},
        {6:null,5:null,4:[5,2,1],3:[9,4,3],2:[3,1,0],1:[7,3,2],'lowest':2}
      ],
      'm6/9': [
        {6:[1,1,0],5:[5,2,1],4:[1,3,2],3:[3,1,0],2:[6,4,3],1:[9,4,4],'lowest':6},
        {6:[3,1,0],5:[6,2,1],4:[9,3,1],3:[5,3,1],2:[1,4,2],1:null,'lowest':6},
        {6:null,5:[6,1,0],4:[3,2,1],3:[5,1,0],2:[9,4,4],1:null,'lowest':5},
        {6:null,5:[6,1,0],4:[3,2,1],3:[5,1,0],2:[9,4,4],1:[5,4,4],'lowest':5},
        {6:null,5:[1,3,3],4:[3,1,0],3:[6,2,2],2:[9,4,4],1:[5,4,4],'lowest':4},
        {6:null,5:[3,1,0],4:[6,2,1],3:[9,2,1],2:[5,4,4],1:[1,4,4],'lowest':5}
      ],
      '7': [
        {6:[1,1,0],5:[5,3,2],4:[7,1,0],3:[3,2,1],2:[5,1,0],1:[1,1,0],'lowest':6},
        {6:[1,1,0],5:[5,3,2],4:[7,1,0],3:[3,2,1],2:[7,4,4],1:[1,1,0],'lowest':6},
        {6:[3,3,2],5:null,4:[1,1,0],3:[5,4,3],2:[7,2,1],1:null,'lowest':4},
        {6:null,5:null,4:[1,1,0],3:[5,3,2],2:[7,2,1],1:[3,4,3],'lowest':4},
        {6:[5,3,2],5:null,4:[3,2,1],3:[7,4,3],2:[1,1,0],1:null,'lowest':2},
        {6:null,5:null,4:[3,2,1],3:[7,3,3],2:[1,1,0],1:[5,4,4],'lowest':2, 'openPosAlt':[5,1,2]}, // openPosAlt[stringNumber, interval, leftHandFinger]
        {6:null,5:[1,1,0],4:[5,3,2],3:[7,1,0],2:[3,4,3],1:[5,1,0],'lowest':5},
        {6:null,5:[1,1,0],4:[5,3,1],3:[1,3,1],2:[3,3,1],1:[7,4,3],'lowest':5},
        {6:[7,2,1],5:null,4:[5,1,0],3:[1,1,0],2:[3,1,0],1:null,'lowest':4},
        {6:null,5:[3,2,2],4:[7,3,3],3:[1,1,0],2:[5,4,4],1:null,'lowest':3},
        {6:null,5:[3,2,2],4:[7,3,3],3:[1,1,0],2:[5,4,4],1:[1,4,4],'lowest':3},
        {6:[1,3,2],5:[3,2,1],4:[7,4,3],3:[1,1,0],2:[3,1,0],1:null,'lowest':2}
      ],
      'm7b5': [
        {6:[1,2,2],5:null,4:[7,3,3],3:[3,4,4],2:[5,1,0],1:null,'lowest':2},
        {6:[1,1,0],5:[5,2,1],4:[7,1,0],3:[3,1,0],2:[7,4,3],1:[3,4,4],'lowest':6},
        {6:null,5:[5,2,1],4:[1,3,2],3:[3,1,0],2:[7,4,3],1:null,'lowest':3},
        {6:null,5:null,4:[1,1,0],3:[5,3,1],2:[7,3,1],1:[3,3,1],'lowest':4},
        {6:[3,2,2],5:null,4:[1,1,0],3:[5,3,3],2:[7,3,3],1:[3,3,3],'lowest':4},
        {6:[3,1,0],5:[7,2,2],4:[3,3,3],3:[5,1,0],2:[1,4,4],1:[3,1,0],'lowest':6},
        {6:[5,2,1],5:[1,3,2],4:[3,1,0],3:[7,4,3],2:null,1:null,'lowest':4},
        {6:[5,2,1],5:[1,3,2],4:[3,1,0],3:[7,4,3],2:[1,1,0],1:null,'lowest':4},
        {6:null,5:null,4:[3,1,0],3:[7,4,3],2:[1,1,0],1:[5,2,1],'lowest':4},
        {6:null,5:[1,1,0],4:[5,3,2],3:[7,2,0],2:[3,4,3],1:null,'lowest':5},
        {6:null,5:null,4:[5,1,0],3:[1,2,1],2:[3,1,0],1:[7,4,4],'lowest':4},
        {6:null,5:[3,2,1],4:[7,4,3],3:[1,1,0],2:[5,3,2],1:null,'lowest':3}
      ],
      'dim7': [
        {6:[1,2,2],5:null,4:[7,1,0],3:[3,3,3],2:[5,1,0],1:null,'lowest':2},
        {6:null,5:[5,2,2],4:[1,3,2],3:[3,1,0],2:[7,4,3],1:null,'lowest':3},
        {6:null,5:null,4:[7,1,0],3:[3,3,2],2:[5,2,0],1:[1,4,3],'lowest':2},
        {6:[3,2,2],5:null,4:[1,1,0],3:[5,3,3],2:[7,1,0],1:null,'lowest':2},
        {6:null,5:[7,2,1],4:[3,3,2],3:[5,1,0],2:[1,4,3],1:null,'lowest':3},
        {6:null,5:null,4:[1,1,0],3:[5,3,2],2:[7,2,0],1:[3,4,3],'lowest':2},
        {6:[5,2,2],5:null,4:[3,1,0],3:[7,3,3],2:[1,1,0],1:null,'lowest':2},
        {6:null,5:[1,2,2],4:[5,3,2],3:[7,1,0],2:[3,4,3],1:null,'lowest':3},
        {6:null,5:null,4:[3,1,0],3:[7,3,2],2:[1,2,0],1:[5,4,3],'lowest':2}
      ],
      '9': [
        {6:null,5:[1,2,2],4:[3,1,0],3:[7,3,3],2:[9,3,3],1:[5,3,3],'lowest':4},
        {6:[7,2,1],5:[9,1,0],4:[9,1,0],3:[5,1,0],2:[1,1,0],1:null,'lowest':5},
        {6:[1,3,3],5:null,4:[7,4,4],3:[9,2,2],2:[3,1,0],1:null,'lowest':2},
        {6:null,5:[9,1,0],4:[7,4,3],3:[1,1,0],2:[3,1,0],1:null,'lowest':5},
        {6:[1,3,3],5:[9,1,0],4:[7,4,3],3:[1,1,0],2:[3,1,0],1:null,'lowest':5},
        {6:null,5:[3,1,0],4:[7,3,3],3:[9,2,0],2:[5,4,3],1:[1,4,3],'lowest':5},
        {6:[1,3,2],5:[3,1,0],4:[7,4,3],3:[9,2,0],2:null,1:null,'lowest':5},
        {6:[1,1,0],5:[5,3,2],4:[7,1,0],3:[3,2,1],2:[5,1,0],1:[9,4,3],'lowest':6},
        {6:[3,1,0],5:[7,2,2],4:[9,1,0],3:[5,1,0],2:null,1:null,'lowest':6},
        {6:[3,1,0],5:[7,2,2],4:[9,1,0],3:[5,1,0],2:[1,3,3],1:null,'lowest':6},
        {6:[3,1,0],5:[7,2,2],4:[9,1,0],3:[5,1,0],2:[1,3,3],1:[3,1,0],'lowest':6},
        {6:[3,1,0],5:[7,2,2],4:[9,1,0],3:[5,1,0],2:[1,3,3],1:[5,4,4],'lowest':6},
        {6:null,5:[7,2,2],4:[9,1,0],3:[5,1,0],2:[1,3,3],1:[3,1,0],'lowest':4},
      ],
      '7b5': [
        {6:[1,2,2],5:null,4:[7,3,3],3:[3,4,4],2:[5,1,0],1:null,'lowest':2},
        {6:[1,1,0],5:[5,2,1],4:[7,1,0],3:[3,3,2],2:null,1:null,'lowest':6},
        {6:null,5:[5,1,0],4:[1,2,1],3:[3,1,0],2:[7,4,3],1:null,'lowest':5},
        {6:null,5:null,4:[1,1,0],3:[5,2,1],2:[7,3,1],1:[3,4,3],'lowest':4},
        {6:null,5:[7,2,2],4:[3,4,4],3:[5,1,0],2:[1,3,3],1:null,'lowest':3},
        {6:null,5:[7,1,0],4:[3,3,2],3:null,2:[1,2,0],1:[5,4,3],'lowest':5},
        {6:[5,1,0],5:[1,3,2],4:[3,2,0],3:[7,4,3],2:null,1:null,'lowest':6},
        {6:null,5:[1,1,0],4:[5,2,1],3:[7,1,0],2:[3,4,3],1:null,'lowest':5},
        {6:null,5:null,4:[5,1,0],3:[1,2,1],2:[3,2,1],1:[7,4,3],'lowest':4},
        {6:null,5:[3,3,2],4:null,3:[1,1,0],2:[5,4,3],1:[7,2,1],'lowest':3},
        {6:null,5:[3,1,0],4:[7,3,2],3:null,2:[5,2,0],1:[1,4,3],'lowest':5}
      ],
      '7b5b9': [
        {6:[1,3,2],5:null,4:[7,4,3],3:[9,1,0],2:[5,2,1],1:null,'lowest':3},
        {6:null,5:null,4:[7,3,2],3:[9,1,0],2:[5,2,1],1:[1,4,3],'lowest':3},
        {6:null,5:null,4:[7,2,2],3:[3,3,3],2:[5,1,0],1:[9,4,4],'lowest':2},
        {6:[9,1,0],5:[5,1,0],4:[1,2,2],3:[3,1,0],2:[7,4,4],1:null,'lowest':6},
        {6:[3,2,2],5:[7,3,3],4:[9,1,0],3:[5,1,0],2:[1,4,4],1:null,'lowest':4},
        {6:null,5:null,4:[9,1,0],3:[5,1,0],2:[1,4,3],1:[3,2,2],'lowest':4},
        {6:null,5:[1,2,2],4:[3,1,0],3:[7,3,3],2:[9,1,0],1:[5,1,0],'lowest':4},
        {6:null,5:[9,1,0],4:[5,1,0],3:[1,2,1],2:[3,2,1],1:[7,4,3],'lowest':5},
      ],
      '7#5': [
        {6:[1,1,0],5:null,4:[7,2,0],3:[3,3,3],2:[5,4,4],1:null,'lowest':6},
        {6:null,5:null,4:[7,1,0],3:[3,3,2],2:[5,4,3],1:[1,2,0],'lowest':4},
        {6:null,5:[5,3,2],4:[1,2,1],3:[3,1,0],2:[7,4,3],1:null,'lowest':3},
        {6:[3,2,2],5:[7,3,3],4:[1,1,0],3:[5,4,4],2:null,1:null,'lowest':4},
        {6:null,5:[7,2,2],4:null,3:[5,3,3],2:[1,4,4],1:[3,1,0],'lowest':1},
        {6:null,5:[7,1,0],4:[3,2,1],3:[5,1,0],2:[1,1,0],1:null,'lowest':5},
        {6:[5,4,3],5:[1,2,2],4:[3,1,0],3:[7,3,3],2:null,1:null,'lowest':4},
        {6:null,5:[1,2,1],4:[3,1,0],3:[7,3,2],2:null,1:[5,4,3],'lowest':4},
        {6:null,5:null,4:[5,2,2],3:[1,1,0],2:[3,1,0],1:[7,3,3],'lowest':3},
        {6:[7,2,1],5:[3,4,3],4:[5,3,2],3:[1,1,0],2:null,1:null,'lowest':3}
      ],
      '7#5b9': [
        {6:[1,2,0],5:null,4:[7,3,1],3:[3,4,1],2:[5,4,1],1:[9,4,1],'lowest':6},
        {6:null,5:[5,3,2],4:[1,2,1],3:[3,1,0],2:[7,4,3],1:[9,1,0],'lowest':3},
      ],
      '7#9': [
        {6:[1,2,2],5:[3,1,0],4:[7,3,3],3:[9,4,4],2:null,1:null,'lowest':5},
        {6:[1,2,2],5:[3,1,0],4:[7,3,3],3:[9,3,3],2:[5,3,3],1:null,'lowest':5},
        {6:null,5:null,4:[1,2,2],3:[3,1,0],2:[7,4,4],1:[9,4,4],'lowest':3},
        {6:[3,1,0],5:[7,2,2],4:[9,3,2],3:[5,1,0],2:[1,4,4],1:null,'lowest':6},
        {6:null,5:[1,2,2],4:[3,1,0],3:[7,3,3],2:[9,4,4],1:null,'lowest':4},
        {6:null,5:null,4:[3,1,0],3:[7,2,1],2:[9,4,3],1:[5,3,2],'lowest':4},
        {6:null,5:[9,2,2],4:[5,1,0],3:[1,1,0],2:[3,1,0],1:[7,3,3],'lowest':4},
        {6:null,5:[3,1,0],4:[7,3,1],3:[9,3,1],2:[5,3,1],1:[1,3,1],'lowest':5},
        {6:null,5:[3,1,0],4:[7,3,1],3:[9,3,1],2:[5,3,1],1:null,'lowest':5},
      ]
    },
    noteOctaves: {
      1: new Array(5,8,20),
      2: new Array(4,1,13),
      3: new Array(4,5,17),
      4: new Array(4,10,22),
      5: new Array(3,3,15),
      6: new Array(3,8,20)
    },

    setChordNotes: function(root,type) 
    {
      this.rootnote = (root == undefined ? this.rootnote : root );
      this.chordtype = (type == undefined ? this.chordtype : type );
      root = this.rootnote;
      type = this.chordtype;

      this.scaleArr = this.majorScales[root];
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

    getSymbol: function(type) 
    {
      // debugger;
      return this.chordTypes[type]['symbol'];
    },

    getKey: function() 
    {
      var root = this.rootnote;
      var type = this.chordtype;
      var chordRoot = this.scale[root];
      var symbol = this.getSymbol;
    },

    preserveMetaData: function() 
    {
      if(this.container.find('.meta').length) {

        var metaData = "";
        this.container.find('.meta').each(function(){

          var paramName = $(this).attr('id');
          var paramVal = $(this).attr('data-content');

          // check for true/fase text and change to boolean value
          if(paramVal == "true") { paramVal = true; }
          if(paramVal == "false") { paramVal = false; }

          metaData += '<div class="meta" id="'+paramName+'" data-content="'+paramVal+'"></div>\n';

        });
        return metaData;
      } else {
        return null;
      }
    },

    preserveNoteMetaData: function() 
    {
      if(this.container.find('.notemeta').length) {
        var noteMetaArray = [];
        var noteMetaData = "";
        this.container.find('.notemeta').each(function(){

          var paramName = $(this).attr('id');
          var paramVal = $(this).attr('data-content');

          // check for true/fase text and change to boolean value
          if(paramVal == "true") { paramVal = true; }
          if(paramVal == "false") { paramVal = false; }
          noteMetaArray.push(paramName);
          noteMetaData += '<div class="notemeta" id="'+paramName+'" data-content="'+paramVal+'"></div>\n';

        });
        this.noteMetaArray = noteMetaArray;
        return noteMetaData;
      } else {
        return null;
      }
    },

    removeFingeringMetas: function()
    {
      for(var s=1; s<=6; s++) {
        this.wrapper.find(".meta#selector"+s).remove();
      }
    },

    filterByNoteMetaData: function() 
    {
      var notesShowing = this.notesInView(true);
      for(var s=1;s<=6;s++) {
        var thisStringNotes = notesShowing[s];
      
        for(var n=0; n<thisStringNotes.length;n++) {
          var thisNoteId = thisStringNotes[n].attr("id");
          
          if(this.noteMetaArray.indexOf(thisNoteId) == -1) {
            thisStringNotes[n].removeClass('on').addClass('off');
          }
        }
      }
    },

    buildNoteGrid: function() 
    {
      if(this.params.chordFinderMode) {
        this.stringDivs += buildBarreDiv();
      }
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
    },

    updateMaintitleDiv: function() 
    {
      var symbol = this.getSymbol(this.chordtype);
      this.wrapper.find('h2.chord-name').html(this.rootnote+((symbol != "") ? '<sup>'+symbol+'</sup>' : ""));
    },

    supAccidental: function(note) 
    {
      var noteLetter = note.charAt(0);
      var accidental = "<sup>"+note.charAt(1)+"</sup>";
      return noteLetter+accidental;
    },

    buildNoteDiv: function(note, s, f)
    {
      var noteHtml = note;
      if(note.indexOf('#') !== -1)
      {
        noteType = 'sharp';
        noteHtml = this.supAccidental(note);
      } else if(note.indexOf('b') !== -1) {
        noteType = 'flat';
        noteHtml = this.supAccidental(note);
      } else {
        noteType = 'natural';
      }
      string = 'string' + s;
      fret = 'fret' + f;
      stringDiv = "<div id='st"+s+"_"+f+"' notename='"+note+"' class='note "+string+" "+fret+" "+noteType+" f"+s+"_"+f+"'>"+noteHtml+"</div>";

      return stringDiv;

    },

    removeAllBarreDups: function()
    {
      this.wrapper.find('.barre-div').each(function(){
        $(this).remove();
      });
    },

    setBarreArrays: function() 
    {
      $('.barre-div').remove(); // reset
      var fingeringsArr = this.getChordFingerings();
      var fours = [], threes = [], twos = [], ones = [];
      // debugger;

      for ( var s=6; s>=1; s-- ) {
        var theFinger = fingeringsArr[s]['finger'];
        switch ( theFinger ) {
          case '4' :
            fours.push(fingeringsArr[s]['note']);
          break;
          case '3' :
            threes.push(fingeringsArr[s]['note']);
          break;
          case '2' :
            twos.push(fingeringsArr[s]['note']);
          break;
          case '1' :
            ones.push(fingeringsArr[s]['note']);
          break;
        }
      }

      if( fours.length > 1) { this.setBarre(fours); }
      if( threes.length > 1) { this.setBarre(threes); }
      if( twos.length > 1) { this.setBarre(twos); }
      if( ones.length > 1) { this.setBarre(ones); }

    },

    setBarre: function(noteGroup) 
    {
      /** widths: 
      *   2-note barre: 53px
      *   3-note barre: 81px
      *   4-note barre: 110px
      *   5-note barre: 137px
      *   6-note barre: 165px
      **/
      // debugger;
      var leftNote = noteGroup[0];
      var rightNote = noteGroup[noteGroup.length-1];
      var leftNoteString = this.getFretString(leftNote,'string');
      var rightNoteString = this.getFretString(rightNote,'string');
      var leftNoteFret = this.getFretString(leftNote,'fret');
      var rightNoteFret = this.getFretString(rightNote,'fret');
      var stringSpan = parseInt(leftNoteString-rightNoteString) + 1;
      var ps;
      var tp;
      var lft;
      var startNote;
      var rotateClass = "";
      var barreDiv = this.wrapper.find('.barre-div.master');
      var wd = 0;
      var divClass = "";
      switch ( stringSpan ) {
        case 2:
          divClass = "two-barre";
        break;
        case 3:
          divClass = "three-barre";
        break;
        case 4:
          divClass = "four-barre";
        break;
        case 5:
          divClass = "five-barre";
        break;
        case 6:
          divClass = "six-barre";
        break;
      }
      // need to calculate a percentage rotation for fret differences
      startNote = noteGroup[0];
      ps = startNote.position();
      tp = (ps.top - 1);
      lft = (ps.left - 1);
      if(rightNoteFret !== leftNoteFret) {
        // need to rotate the barre
        // $('.barre-div').addClass('rotate-minus-24');
        rotateClass = " rotate-minus-24";
        tp += 3;
        lft += 3;
      }
      tp += "px";
      lft += "px";

      this.wrapper.find('.vertical-neck-module').prepend('<div class="barre-div '+divClass+rotateClass+'" style="top: '+tp+'; left: '+lft+';"></div>');
    },

    getChordFingerings: function() 
    {
      var valsArr = {};

      for(var s=6;s>=1;s--) {
        valsArr[s] = [];
        valsArr[s]['finger'] = this.wrapper.find('.lh-selector-container#selector'+s+' select').val();
        var topPosition = parseInt(this.position)+4;

        for(var f=this.position;f<=topPosition;f++) {
          if(this.wrapper.find('.note.in-chord.string'+s+'.fret'+f).hasClass('on') && f > 0) {
            valsArr[s]['note'] = this.wrapper.find('.note.in-chord.on.string'+s+'.fret'+f);
          }
        }
      }

      return valsArr;

    },

    buildPositionSelectors: function(selected) 
    {
      var mode = ( selected == null ) ? 'Auto' : 'Custom';
      var selectors = '<div class="position-selector-holder">';
      selectors += ' <div class="mode-indicator">Mode: '+mode+'</div>';
      selectors += '  <select id="position-selectors">';
      selectors += '    <option value="">Set custom</option>';
      selectors += '    <option value="0"'+((selected == 0) ? ' selected' : '')+'>Open position</option>';
      selectors += '    <option value="1"'+((selected == 1) ? ' selected' : '')+'>1st position</option>';
      selectors += '    <option value="2"'+((selected == 2) ? ' selected' : '')+'>2nd position</option>';
      selectors += '    <option value="3"'+((selected == 3) ? ' selected' : '')+'>3rd position</option>';
      for(var p=4;p<=(this.totalFrets-5);p++) {
        selectors += '    <option value="'+p+'"'+((selected == p) ? ' selected' : '')+'>'+p+'th Position</option>';
      }
      selectors += '  </select>';
      selectors += '</div>';
      return selectors;
    },

    buildRootNoteSelectors: function(root) 
    {
      var selectors = '<div class="rootnote-selector-holder">';
      selectors += '  <select id="rootnote">';
      var selectorArr = ['C','G','D','A','E','B','F#','C#','F','Bb','Eb','Ab','Db','Gb','Cb'];
      for(var s=0;s<selectorArr.length;s++) {
        selectors += '    <option value="'+selectorArr[s]+'"'+((root == selectorArr[s]) ? " selected" : "")+'>'+selectorArr[s]+'</option>';
      }
      selectors += '  </select>';
      selectors += '</div>';
      return selectors;
    },

    buildChordTypeSelectors: function(type) 
    {
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
    },

    buildChord: function(root,type) 
    {
      var chordNotes = this.setChordNotes(root,type);
      this.wrapper.find('.note').hide().removeClass('in-chord on off int1 int2 int3 int4 int5 int6 int7 int9 int11').removeAttr('interval');
      for( var n=0; n<chordNotes.length; n++ ) {
        var theNote = chordNotes[n];
        var theInterval = this.intervalArr[n];
        this.wrapper.find(".note[notename='"+theNote+"']").show().addClass('in-chord on int'+theInterval).attr('interval',theInterval);
      }
      this.updateMaintitleDiv();
      this.updateMetaDivs('rootnote',root);
      this.updateMetaDivs('chordtype',type);
      
      if(this.preserveNoteMetaData() === null) {
        this.resetNoteMetas();
      }
      this.filterByNoteMetaData();
      this.createNotation();
    },

    replaceModuleInitScript: function(id) 
    {
      // debugger;
      // var snippet = '<div>\n  <script id="'+id+'" type="text/javascript">\n    function buildChordModule() {\n      var this_script = document.getElementById("'+id+'");\n      var container = chordIdManager.processScriptInstance(this_script);\n      var chordChartID = chordIdManager.setId(container);\n      chordModuleInit(chordChartID);\n    }\n    </script>\n  </div>';
      var snippet = '<div>\n  <script id="chordModuleScript" type="text/javascript">\n    function buildChordModule() {\n      var this_script = document.getElementById("chordModuleScript");\n      var container = chordIdManager.processScriptInstance(this_script);\n      var chordChartID = chordIdManager.setId(container);\n      chordModuleInit(chordChartID);\n    }\n    </script>\n  </div>';
      $('#divSnippets').find('.js-chord-module')[0].innerHTML = snippet;
      return snippet;
    },

    initParams: function() 
    {
      if( objectIsEmpty(this.params) ) {
        this.params = {
          container:                'chord-container',
          containerSelectorType:      'id',
          showIntervalColorKey:       false,
          totalFrets:                 22,
          rootnote:                   'C',
          toggleStringVisibility:     true,
          neckStyleClass:             "",
          position:                   0,
          viewMode:                   "chord",
          hideControls:               false,
          showLeftHandSetters:        true,
          chordFinderMode:            false
        };

        if(arguments !== undefined) {
          for ( var arg in arguments[0] ) {
            if( arguments[0].hasOwnProperty(arg)) {
              this.params[arg] = arguments[0][arg];
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

    },

    notesInView: function(showActiveOnly) 
    {
      var pos = parseInt(this.position);
      var topfret = pos + 4;
      if(pos == 0) { topfret = 5; } // if in open position, the top fret is still going to be the 5th fre
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
          if(showActiveOnly) {
            var checkNote = (this.wrapper.find('.f'+s+'_'+f).hasClass('in-chord') && this.wrapper.find('.f'+s+'_'+f).hasClass('on'));
          } else {
            var checkNote = (this.wrapper.find('.f'+s+'_'+f).hasClass('in-chord') && this.wrapper.find('.f'+s+'_'+f));
          }
          if(checkNote) {
            notesOnString[s][cnt]=this.wrapper.find('.f'+s+'_'+f+'.in-chord');
            cnt++;
          }
        }
      }

      return notesOnString;
    },

    allNotesInChord: function(showActiveOnly) 
    {
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
        for(var f=0; f<=this.params.totalFrets; f++) {
          if(showActiveOnly) {
            var checkNote = (this.wrapper.find('.f'+s+'_'+f).hasClass('in-chord') && this.wrapper.find('.f'+s+'_'+f).hasClass('on'));
          } else {
            var checkNote = (this.wrapper.find('.f'+s+'_'+f).hasClass('in-chord') && this.wrapper.find('.f'+s+'_'+f));
          }
          if(checkNote) {
            notesOnString[s][cnt]=this.wrapper.find('.f'+s+'_'+f+'.in-chord');
            cnt++;
          }
        }
      }

      return notesOnString;
    },

    toggleVisible: function(note) 
    {
      if(note.hasClass('on')) {
        note.addClass('off').removeClass('on');
      } else {
        note.addClass('on').removeClass('off');
      }

    },

    selectInversion: function() 
    {
      this.removeAllBarreDups();
      var chordArr = this.chordFinderArr[this.chordtype][this.currentChordIndex];
      
      this.removeCurrentNoteMetas();
      var pos = this.getChordFinderPosition(chordArr);
      this.switchPosition(pos);

      this.buildChord(this.rootnote,this.chordtype);
      this.updateMetaDivs('position',pos);
      this.createNotation();
      var allNotesInView = this.notesInView(false);
      for(var s = 1; s<=6; s++) {

        var stringNotesArr = allNotesInView[s];
        var theInt, intMatch, fingNum;

        for( var n=0; n<stringNotesArr.length; n++) {

          var theEl = stringNotesArr[n];
          if(chordArr[s] != null ) {
            theInt = theEl.attr('interval');
            intMatch = chordArr[s][0];

            if(theInt == intMatch) {
              fingNum = chordArr[s][1];
              if(pos == 0) {
                fingNum = chordArr[s][2];
              }
              this.wrapper.find('.lh-selectors .lh-selector-container#selector'+s+' select').val(fingNum);
              this.setLHFingerMetaTag("selector"+s,fingNum);
              if(!theEl.hasClass('on')) {
                this.toggleChordNote(theEl);
              }
            }
          } else {
            if(chordArr['openPosAlt'] !== undefined && pos == 0 && s == chordArr['openPosAlt'][0]) {
              // openPosAlt[stringNumber, interval, leftHandFinger]
              fingNum = chordArr['openPosAlt'][2];
              theInt = chordArr['openPosAlt'][1];
              theEl = this.wrapper.find('.note.string'+s+'[interval="'+theInt+'"]:first');
              this.wrapper.find('.lh-selectors .lh-selector-container#selector'+s+' select').val(fingNum);
              this.setLHFingerMetaTag("selector"+s,fingNum);
              if(!theEl.hasClass('on')) {
                this.toggleChordNote(theEl);
              }
            } else {
              // need to set all notes on this string to off
              theEl.removeClass('on').addClass('off');
              this.wrapper.find('.lh-selectors .lh-selector-container#selector'+s+' select').val('X');
              this.setLHFingerMetaTag("selector"+s,"x");
            }
            
          }
        }
      }
      this.createNotation();
      this.setBarreArrays();
      if( this.leftHandShowMode == "fingerings" )
      {
        this.setLeftHandMode(); // fingerings are the only mode requiring a change with each new inversion
      }
    },

    getChordFinderPosition: function(chordArr) 
    {
      var lowestString = chordArr['lowest'];
      var thisInt = chordArr[lowestString][0];
      var lowestNoteDiv = this.wrapper.find('.note.string'+lowestString+'[interval='+thisInt+']:first');
      var fretNumber = this.getFretString(lowestNoteDiv,'fret');
      return fretNumber;
    },

    toggleChordNote: function(noteElement) 
    {
      var string = this.getFretString(noteElement,"string");
      this.toggleNoteOnString(string,noteElement);
      this.createNotation();
      this.resetNoteMetas();
    },

    showIntervals: function()
    {
      var notes = this.allNotesInChord(false);
      for(var s=1; s<=6; s++) {
        for(var n=0; n<notes[s].length; n++) {
          var interval = notes[s][n].attr('interval');
          notes[s][n].html(interval);
        }
      }
      this.leftHandShowMode = "intervals";
    },

    showNoteNames: function()
    {
      var notes = this.allNotesInChord(false);
      for(var s=1; s<=6; s++) {
        for(var n=0; n<notes[s].length; n++) {
          var noteName = notes[s][n].attr('notename');
          notes[s][n].html(noteName);
        }
      }
      this.leftHandShowMode = "noteNames";
    },

    showFingerings: function()
    {
      var allNotesInView = this.notesInView(false);
      var chordArr = this.chordFinderArr[this.chordtype][this.currentChordIndex];
      var pos = this.getChordFinderPosition(chordArr);
      for(var s = 1; s<=6; s++) {

        var stringNotesArr = allNotesInView[s];
        var theInt, intMatch, fingNum;

        for( var n=0; n<stringNotesArr.length; n++) {

          var theEl = stringNotesArr[n];
          if(chordArr[s] != null ) 
          {
            theInt = theEl.attr('interval');
            intMatch = chordArr[s][0];

            if(theInt == intMatch) 
            {
              fingNum = chordArr[s][1];
              if(pos == 0) 
              {
                fingNum = chordArr[s][2];
              }
            }
            theEl.html(fingNum);
          } else {
            if(chordArr['openPosAlt'] !== undefined && pos == 0 && s == chordArr['openPosAlt'][0]) 
            {
              fingNum = chordArr['openPosAlt'][2];
              theInt = chordArr['openPosAlt'][1];
              theEl = this.wrapper.find('.note.string'+s+'[interval="'+theInt+'"]:first');
              theEl.html(fingNum);
            }
          }
        }
      }

      this.leftHandShowMode = "fingerings";
    },

    setLeftHandMode: function(mode)
    {
      var theMode = (mode !== undefined ) ? mode : this.leftHandShowMode;
      switch ( theMode ) {
        case "noteNames":
          this.showNoteNames();
          break;
        case "intervals":
          this.showIntervals();
          break;
        case "fingerings":
          this.showFingerings();
          break;
      }
    },

    incrementChord: function(dir) 
    {
      if(dir===undefined){dir="next";}
      var currentChordOptionsArr = this.chordFinderArr[this.chordtype];
      var lastIndex = currentChordOptionsArr.length-1;

      if(dir == 'prev') {
        if(this.currentChordIndex == 0) {
          this.currentChordIndex = lastIndex;
        } else {
          this.currentChordIndex--;
        }
      } else {
        if(this.currentChordIndex == lastIndex) {
          this.currentChordIndex = 0;
        } else {
          this.currentChordIndex++;
        }
      }
      this.updateMetaDivs('currentChordIndex', this.currentChordIndex);
      this.selectInversion();
    },

    setCustomChord: function() 
    {

      this.updateMetaDivs('position',this.position);

    },

    // might not need this - see metaDivContentValue()
    metaDivExists: function(metaId)
    {

      var wrapper = (objectIsEmpty(this.wrapper)) ? this.container.find('.vertical-neck-module-wrapper') : this.wrapper;
      if ( wrapper.find('.meta#'+metaId).length > 0 ) {
        return true;
      } else {
        return false;
      }
    },

    metaDivContentValue: function(metaId)
    {
      var wrapper = (objectIsEmpty(this.wrapper)) ? this.container.find('.vertical-neck-module-wrapper') : this.wrapper;
      if ( !wrapper.find('.meta#'+metaId).length > 0 || wrapper.find('.meta#'+metaId).data().content == "false" ) {
        return false;
      } else {
        return wrapper.find('.meta#'+metaId).data().content;
      }
    },

    initFirstChord: function() 
    {
      var customMetaValue = this.metaDivContentValue('customMode');
      if( !customMetaValue ) {
        var currentChordOptionsArr = this.chordFinderArr[this.chordtype];
        this.selectInversion();
      } else {
        this.setCustomChord();
      }
      this.checkControlStatusOnLoad();
    },

    initLayout: function() 
    {
      var container = this.container;
      var metaData = this.preserveMetaData();
      var noteMetaData = this.preserveNoteMetaData();
      var params = this.params;
      this.htmlPieces = "";
      this.htmlPieces += this.buildColorKeyDiv();
      // MAIN MODULE WRAPPER
      this.htmlPieces += openMainWrapper();
      this.htmlPieces += buildControlsToggler();
      this.htmlPieces += buildShowColorKeyToggler();
      this.htmlPieces += this.buildMaintitleDiv();

      if( this.params.chordFinderMode ) {
        this.htmlPieces += buildPrevNext();
      }
      // TOP
      this.htmlPieces += this.buildNoteIntervalViewToggler();
      this.htmlPieces += openTopDiv();
      this.htmlPieces += buildChordModuleDiv();

      if(metaData !== null) {
        this.htmlPieces += metaData;
      }

      if(noteMetaData !== null) {
        this.htmlPieces += noteMetaData;
      }

      // close mainModuleWrapper
      this.htmlPieces += closeDiv();

      if(params.showLeftHandSetters) {
        this.htmlPieces += this.buildLHFingersSelectors();
      }

      this.htmlPieces += buildVexTabContainer();
      this.htmlPieces += openChordControlsDiv();
      this.htmlPieces += createControlsHeader();
      this.htmlPieces += openSelectorsWrapper();
      this.htmlPieces += this.buildRootNoteSelectors(this.rootnote);
      this.htmlPieces += this.buildChordTypeSelectors(this.chordtype);

      var positionToSetSelected = null;
      var val = this.metaDivContentValue('customMode');
      if( val == true) {
        positionToSetSelected = this.metaDivContentValue('position');
      }
      this.htmlPieces += this.buildPositionSelectors(positionToSetSelected);

      // recyle the val var
      val = ( this.metaDivExists('viewMode') ) ? this.metaDivContentValue('viewMode') : this.viewMode;
      this.htmlPieces += buildViewModeToggle(val);
      this.htmlPieces += closeDiv();
      this.htmlPieces += closeDiv();
      container.html(this.htmlPieces);

      return this.htmlPieces;

    },

    initActions: function() 
    {
      var container = this.container;
      var that = this;
      var wrapper = this.wrapper = this.container.find('.vertical-neck-module-wrapper');

      if(that.params.currentChordIndex !== undefined) {
        that.currentChordIndex = that.params.currentChordIndex;
      } else {
        that.currentChordIndex = 0;
      }

      this.stringDivs = this.buildNoteGrid();
      // if(this.params.hideControls || this.metaDivExists('hideControls') == true) {
      //   wrapper.find('.controls-toggler .hide-controls').hide();
      //   this.hideControls();
      // } else {
      //   wrapper.find('.controls-toggler .show-controls').hide();
      //   // this.showControls();
      // }

      wrapper.find('.vertical-neck-module').html(this.stringDivs);

      wrapper.find('.selectors-wrapper #rootnote').change(function(){
        // debugger;
        that.removeCurrentNoteMetas();
        that.buildChord(this.value,that.chordtype);
        if(that.params.chordFinderMode) {
          that.currentChordIndex = 0;
          that.initFirstChord();
        }
      });

      wrapper.find('.left-hand-mode-selectors a').on('click', function(){
        var mode = $(this).attr('mode');
        that.setLeftHandMode(mode);
      });

      wrapper.find('.selectors-wrapper #chordtype').change(function(){
        that.removeCurrentNoteMetas();
        that.buildChord(that.rootnote,this.value);
        if(that.params.chordFinderMode) {
          that.currentChordIndex = 0;
          that.initFirstChord();
        }
      });

      wrapper.find('.selectors-wrapper #position-selectors').change(function(e){
        e.preventDefault();
        that.customMode = true;
        that.wrapper.find('.position-selector-holder .mode-indicator').html('Mode: Custom');
        that.removeCurrentNoteMetas();
        that.removeRemnants();
        var pos = $(this).val();
        that.switchPosition(pos);
        that.buildChord(that.rootnote,that.chordtype);
        that.updateMetaDivs('position',pos);
        that.createNotation();
      });

      wrapper.find('.selectors-wrapper .view-mode-selector').change(function(e){
        e.preventDefault();
        var mode = $(this).val();
        that.viewMode = mode;
        that.createNotation();
        that.resetNoteMetas();
      });

      if(this.params.chordFinderMode) {
        // set up the next and prev button actions for chords
        wrapper.find('.next-btn').click(function(e){
          e.preventDefault();
          that.updateMetaDivs('customMode', false);
          that.resetPositionSelector();
          that.incrementChord('next');
          that.updateMetaDivs('position',that.position);
        });
        wrapper.find('.prev-btn').click(function(e){
          e.preventDefault();
          that.updateMetaDivs('customMode', false);
          that.resetPositionSelector();
          that.incrementChord('prev');
          that.updateMetaDivs('position',that.position);
        });
      }

      wrapper.find('.controls-toggler span').click(function(){
        that.toggleControls();
      });

      wrapper.find('.color-key-toggler span').click(function(){
        that.toggleColorKey($(this).attr('class'));
      });

      wrapper.find('.note').click(function(){
        if(!$(this).hasClass('freeze')) {
          that.toggleChordNote($(this));
          // that.preserveNoteMetaData();
          that.resetNoteMetas();
        }
      wrapper.attr('contenteditable','false');
      });

      this.wrapper.find('.note').hide();
      this.buildChord();

      if(this.position > 0) {
        this.switchPosition(this.position);
        this.buildChord(this.rootnote,this.chordtype);
        this.updateMetaDivs('position',this.position);
        this.createNotation();
      }

      if(this.params.showLeftHandSetters) {
        // handle the data here
        wrapper.find('.lh-selector-container > select').change(function(){
          that.wrapper.find('.lh-selectors .lh-selector-container select').each(function(){
            var fingNum = $(this).val();
            var id = $(this).parent().attr('id');
            that.setLHFingerMetaTag(id,fingNum);
            that.setBarreArrays();
          });
          that.updateMetaDivs('position',that.position);
        });
      }

      this.updateMetaDivs('position',this.position);
      this.updateMetaDivs('rootnote',this.rootnote);
      this.updateMetaDivs('chordtype',this.chordtype);
      if(this.params.chordFinderMode !== undefined) {
        this.chordFinderMode = this.params.chordFinderMode;
      }
      this.updateMetaDivs('chordFinderMode', this.chordFinderMode);

      this.resetNoteMetas();

      var noteMetaData = this.preserveNoteMetaData();
      if(noteMetaData !== null) {
        this.filterByNoteMetaData();
      }

      // first see if the showIntervalColorKey param value was passed in
      if( this.params.showIntervalColorKey !== undefined ) 
      {
        this.showIntervalColorKey = this.params.showIntervalColorKey;
      }

      // then, if the metaDiv showIntervalColorKey exists, override the params value
      if( this.metaDivExists('showIntervalColorKey') )
      {
        this.showIntervalColorKey = this.metaDivContentValue('showIntervalColorKey');
      }

      if(this.showIntervalColorKey) {
        this.showColorKey();
      } else {
        this.hideColorKey();
      }

      this.createNotation();
      this.container.find('.chord-controls').draggable();
      this.wrapper.find('.note, .note sup').spellcheck = false;
      setTimeout(function(){
        that.wrapper.attr('contenteditable','false');
      },1000);
      

    },

    removeRemnants: function() 
    {
      this.wrapper.find('.barre-div').remove();
      this.wrapper.find('.lh-selector-container select').val('empty');
    },

    resetPositionSelector: function()
    {
      this.wrapper.find('select#position-selectors option').filter(":selected").prop("selected", false);
      this.wrapper.find('.position-selector-holder .mode-indicator').html('Mode: Auto');
    },

    updateMetaDivs: function(tagID, val) 
    {
      if(this.wrapper.find(".meta#"+tagID).length) {
        this.wrapper.find(".meta#"+tagID).attr('data-content',val);
      } else {
        this.wrapper.append("<div class='meta' id='"+tagID+"' data-content='"+val+"'>");
      }
    },

    updateNoteMetaDiv: function(tagID, val) 
    {
      if(this.wrapper.find(".notemeta#"+tagID).length) {
        this.wrapper.find(".notemeta#"+tagID).attr('data-content',val);
      } else {
        this.wrapper.append("<div class='notemeta' id='"+tagID+"' data-content='"+val+"'>");
      }
    },

    initChordMode: function() 
    {
      /**
      * set styles for chord mode
      * activate reset link/button on first note click
      * maybe create some sort of animating note background?
      * activate a hide-others or save chord-notes link/button
      */
      this.wrapper.find('.note.in-chord').addClass('pulse');
    },

    toggleViewMode: function() 
    {
      if(this.viewMode == "arpeggio") {
        this.viewMode = "chord";
      } else {
        this.viewMode = "arpeggio";
      }
      this.createNotation();
    },

    toggleNoteOnString: function(string,note) 
    {
      // TODO: need to turn on all notes when switching to arpeggio mode
      // if in chord mode turn off all other notes on this string except for
      // the note sent here
      // string = string-number
      // note = note element
      if(this.viewMode == 'chord' && note.hasClass('off')) {
        note.removeClass('off').addClass('on');
        var notesOnString = this.notesInView(true);
        var thisStringNotes = notesOnString[string];
        for (var n=0;n<thisStringNotes.length; n++) {

          if(thisStringNotes[n][0] != note[0]) {
            // turn these off
            thisStringNotes[n].removeClass('on').addClass('off');
          }
        }
        this.resetNoteMetas();
      } else {
        if(note.hasClass('on')) {
          var id = note.attr('id');
          this.removeNoteMeta(id);
        }
        this.toggleVisible(note);
      }
    },

    resetNoteMetas: function() 
    {
      this.removeCurrentNoteMetas();
      var notes = this.notesInView(true);
      for(var s=1; s<=6; s++) {
        for(var n=0; n<notes[s].length; n++) {
          if(notes[s][n].hasClass('in-chord') && notes[s][n].hasClass('on')) {
            var id = notes[s][n].attr('id');
            this.updateNoteMetaDiv(id,'in-chord on');
          }
        }
      }
    },

    removeCurrentNoteMetas: function() 
    {
      this.wrapper.find('.notemeta').remove();
    },

    removeNoteMeta: function(id) 
    {
      if($('.notemeta#'+id).length) {
        $('.notemeta#'+id).remove();
      }
    },

    processNoteName: function(noteName) 
    {
      if(noteName.indexOf('#') !== -1) {
        return noteName;
      }
      if(noteName.indexOf('b') !== -1) {
        return noteName.replace('b','@');
      }
      return "";
    },

    findOctave: function(string,fret) 
    {
      if(fret >= this.noteOctaves[string][2]) {
        // eg, string 5 fret 16
        return this.noteOctaves[string][0] + 2;
      }
      if(fret >= this.noteOctaves[string][1]) {
        // eg, string 2 fret 13
        return this.noteOctaves[string][0] + 1;
      }
      return this.noteOctaves[string][0];
    },

    getFretString: function(note,which) 
    {
      var id = note.attr('id');
      var positionArray = id.substr(2).split("_");
      if(which == "string") {
        return positionArray[0];
      } else {
        return positionArray[1];
      }
    },

    initVexFlow: function() 
    {
      // debugger;
      Vex.Flow.Artist.DEBUG = false;
      Vex.Flow.VexTab.DEBUG = false;
      var notationContainer = this.container.find('#chord-notation')[0];
      this.renderer = new Vex.Flow.Renderer(notationContainer,
        Vex.Flow.Renderer.Backends.CANVAS);

      this.container.find('#notation-data').change(function(){
        this.renderNotation();
      });

      this.renderNotation();
    },

    stackChordNotation: function(notes) 
    {
      var lastItem = notes[1].length-1;
      var lastEl = notes[1][lastItem]
      var chordStack = " :w (";

      for(var s=6; s>=1; s--) {

        for (var n=0; n<notes[s].length; n++) {

          var fret = this.getFretString(notes[s][n], 'fret');
          var string = this.getFretString(notes[s][n], 'string');
          var noteName = this.processNoteName(notes[s][n].attr('notename'));
          var octave = this.findOctave(string,fret);
          if(noteName !== "") {
            noteName += octave+"_";
          }
          if(notes[s][n] != lastEl) {

            if(n==0) {

              chordStack += noteName + fret + "/" + string + ".";
            } else {

              notes[s][n].addClass('off').removeClass('on');
            }

          } else {
     
            if(n==0) {

              chordStack += noteName + fret + "/" + string + ")";
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
    },

    buildArpeggioNotation: function(notes) 
    {
      var arpeggioNotes = "";
      for(var s=6; s>=1; s--) {
        for (var n=0; n<notes[s].length; n++) {
          var fret = this.getFretString(notes[s][n], 'fret');
          var string = this.getFretString(notes[s][n], 'string');
          var noteName = this.processNoteName(notes[s][n].attr('notename'));
          var octave = this.findOctave(string,fret);
          if(noteName !== "") {
            noteName += octave+"_";
          }
          arpeggioNotes += noteName + fret + "/" + string + " ";
        }
      }
      return arpeggioNotes;
    },

    createNotation: function() 
    {
      this.initVexFlow();
      var vextab = "options space=10\n tabstave notation=true\n ";
      vextab += "notes ";
      var notesOnString = this.notesInView(true);
      if(this.viewMode == 'arpeggio') {
        vextab += this.buildArpeggioNotation(notesOnString);
      } else {
        vextab += this.stackChordNotation(notesOnString);
      }
      
      this.notationData = vextab;
      var viewWidth = (this.viewMode == "arpeggio") ? 335 : 300;
      this.renderNotation(viewWidth);
    },

    renderNotation: function(width) 
    {
      artist = new Vex.Flow.Artist(10, 10, width, {scale: 0.8});
      vextab = new Vex.Flow.VexTab(artist);
      try {
        vextab.reset();
        artist.reset();
        vextab.parse(this.notationData);
        artist.render(this.renderer);
        $("#error").text("");
      } catch (e) {
        $("#error").html(e.message.replace(/[\n]/g, '<br/>'));
      }
    },

    switchPosition: function(pos) 
    {
      var classStr = this.wrapper.find('.vertical-neck-module-container > div').attr('class');
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
      if(this.customMode) {
        this.updateMetaDivs('customMode',true);
      }
    },

    toggleControls: function() 
    {
      // debugger;
      if(this.controlsHidden) {
        // show controls
        this.showControls();
      } else {
        // hide controls
        this.hideControls();
      }
    },

    showControls: function()
    {

      this.controlsHidden = false;
      this.updateMetaDivs('hideControls',false);
      this.wrapper.find('.controls').show();
      this.wrapper.find('.controls-toggler span.hide-controls').show();
      this.wrapper.find('.controls-toggler span.show-controls').hide();
      this.wrapper.find('.note.in-chord.on').removeClass('freeze');
      this.wrapper.find('.note.in-chord.off').removeClass('freeze');
    },

    hideControls: function()
    {

      this.controlsHidden = true;
      this.updateMetaDivs('hideControls',true);
      this.wrapper.find('.note.in-chord.on').addClass('freeze');
      this.wrapper.find('.note.in-chord.off').addClass('freeze');
      this.wrapper.find('.controls').hide();
      this.wrapper.find('.controls-toggler span.hide-controls').hide();
      this.wrapper.find('.controls-toggler span.show-controls').show();
    },

    toggleColorKey: function(theClass) 
    {
      if(theClass=='show-it') {
        // show interval-color-key
        this.showColorKey();
      } else {
        // hide interval-color-key
        this.hideColorKey();
      }
    },

    showColorKey: function()
    {
      this.container.find('.color-key-toggler span.show-it').hide();
      this.container.find('.color-key-toggler span.hide-it').show();
      this.showIntervalColorKey = true;
      this.updateMetaDivs('showIntervalColorKey', true);
      this.container.find('.guitar-creative-color-key#color_key').removeClass('hide-color-key').addClass('show-color-key');
    },

    hideColorKey: function()
    {
      this.container.find('.color-key-toggler span.show-it').show();
      this.container.find('.color-key-toggler span.hide-it').hide();
      this.showIntervalColorKey = false;
      this.updateMetaDivs('showIntervalColorKey', false);
      this.container.find('.guitar-creative-color-key#color_key').addClass('hide-color-key').removeClass('show-color-key');
    },

    checkControlStatusOnLoad: function()
    {
      // var wrapper = (objectIsEmpty(this.wrapper)) ? this.container.find('.vertical-neck-module-wrapper') : this.wrapper;
      if(this.params.hideControls || this.metaDivExists('hideControls') == true) {
        this.wrapper.find('.controls-toggler .hide-controls').hide();
        this.hideControls();
      } else {
        this.wrapper.find('.controls-toggler .show-controls').hide();
        // this.showControls();
      }
    },

    setLHFingerMetaTag: function(id,fingNum) 
    {
      // this.lhFingers
      this.lhFingers[id] = fingNum;
      this.updateMetaDivs(id,fingNum);
    },

    buildNoteIntervalViewToggler: function()
    {
      return "<div class='left-hand-mode-selectors'>Show: <a mode='intervals'>intervals</a> | <a mode='noteNames'>notes</a> | <a mode='fingerings'>fingerings</a></div>";

    },

    buildLHFingersSelectors: function() 
    {
      // this needs to be shown in live view so will need to use js and css to remove the mouseOver and click functions when Controls are set to hidden
      var selectors = "<div class='lh-selectors'><span>Left<br>Hand: </span>";
      for(var s=6;s>=1;s--) {
        selectors += "<div id='selector"+s+"' class='lh-selector-container'>" + this.buildLHFingerSelector(s) + closeDiv();
      }
      return selectors;
    },

    buildLHFingerSelector: function(s) 
    {
      var lhSelector = "<select><option class='empty'></option>";
      var selected;
      var selectedVal = "";
      var options = {
        0: new Array('X','xout'),
        1: new Array(1,'first'),
        2: new Array(2,'second'),
        3: new Array(3,'third'),
        4: new Array(4,'fourth'),
        5: new Array(0,'open-string')
      };
      for (i=0;i<=5;i++) {
        selected = false;
        var option = options[i];
        if(this.params['selector'+s]) { selectedVal = this.params['selector'+s]; selected = true; } // should be a val of either "X","1","2","3","4", or "0"
        if(selected && selectedVal == options[i][0]) {
          lhSelector += "<option finger='"+options[i][0]+"' value='"+options[i][0]+"' class='"+options[i][1]+"' selected>"+options[i][0]+"</option>";
        } else {
          lhSelector += "<option finger='"+options[i][0]+"' value='"+options[i][0]+"' class='"+options[i][1]+"'>"+options[i][0]+"</option>";
        }
      }
      lhSelector += "</select>";
      return lhSelector;
    }
  };

  var getCurrentPositionClassName = function(str) {
    var arr = str.split(" ");
    var positionClassName = "";
    if(arr.length > 1) {
      positionClassName = arr[1];
    }
    return positionClassName;
  };

  var buildVexTabContainer = function() {
    return '<div class="vextab-container">\n <canvas id="chord-notation"></canvas>\n <div id="error"></div>\n</div>';
  }

  var buildViewModeToggle = function(mode) {
    if(mode == "arpeggio") {
      return "<div>\n  <select class='view-mode-selector'>\n    <option value='arpeggio' selected>Arpeggio Mode</option>\n    <option value='chord'>Chord Mode</option>\n    </select>\n  </div>";
    } else {
      return "<div>\n  <select class='view-mode-selector'>\n    <option value='arpeggio'>Arpeggio Mode</option>\n    <option value='chord' selected>Chord Mode</option>\n    </select>\n  </div>";
    }
  }

  var buildPrevNext = function() {
    return "<div class='prev-next-btns controls'>\n  <button class='prev-btn'><i class='fi-arrow-left large'></i></button> <button class='next-btn'><i class='fi-arrow-right large'></i></button>\n  </div>";
  }

  var buildControlsToggler = function() {
    return "<div class='controls-toggler'>\n  <span class='show-controls'>Show controls</span>\n  <span class='hide-controls'>Hide controls</span>\n</div>";
  }

  var buildShowColorKeyToggler = function() {
    return "<div class='color-key-toggler'>\n  <span class='show-it'>Show color-key</span>\n  <span class='hide-it'>Hide color-key</span>\n</div>";
  }

  chord.buildMaintitleDiv = function() {
    var symbol = this.getSymbol(this.chordtype);
    return '<h2 class="chord-name">'+this.rootnote+((symbol != "") ? '<sup>'+symbol+'</sup>' : "")+'</h2>';
  };

  // COLOR KEY DISPLAY
  chord.buildColorKeyDiv = function() {
    var colorKeyDiv = '<div ';
    if(this.showIntervalColorKey) {
      colorKeyDiv += 'class="guitar-creative-color-key show-color-key" id="color_key">';
    } else {
      colorKeyDiv += 'class="guitar-creative-color-key hide-color-key" id="color_key">';
    }
    colorKeyDiv += '  <div id="color-key-wrapper">';
    colorKeyDiv += '    <h4>Color Key for chord note intervals</h4>';
    colorKeyDiv += '    <ul id="color-key">';
    colorKeyDiv += '        <li>';
    colorKeyDiv += '          <div class="int1">1</div>';
    colorKeyDiv += '        </li>';
    colorKeyDiv += '        <li>';
    colorKeyDiv += '          <div class="int3">3</div>';
    colorKeyDiv += '        </li>';
    colorKeyDiv += '        <li>';
    colorKeyDiv += '          <div class="int4">4</div>';
    colorKeyDiv += '        </li>';
    colorKeyDiv += '        <li>';
    colorKeyDiv += '          <div class="int5">5</div>';
    colorKeyDiv += '        </li>';
    colorKeyDiv += '        <li>';
    colorKeyDiv += '          <div class="int6">6</div>';
    colorKeyDiv += '        </li>';
    colorKeyDiv += '        <li>';
    colorKeyDiv += '          <div class="int7">7</div>';
    colorKeyDiv += '        </li>';
    colorKeyDiv += '        <li>';
    colorKeyDiv += '          <div class="int9">9</div>';
    colorKeyDiv += '        </li>';
    colorKeyDiv += '        <li>';
    colorKeyDiv += '          <div class="int11">11</div>';
    colorKeyDiv += '        </li>';
    colorKeyDiv += '        <li>';
    colorKeyDiv += '          <div class="int13">13</div>';
    colorKeyDiv += '        </li>';
    colorKeyDiv += '    </ul>';
    colorKeyDiv += '  </div>';
    colorKeyDiv += '</div>';

    return colorKeyDiv;
  };

  var openChordControlsDiv = function() {
    return "<div class='chord-controls controls'>";
  }

  var createControlsHeader = function(){
    return "<div class='controls-header gradient'>\n <h3>Controls</h3></div>";
  }

  var openSelectorsWrapper = function() {
    return "<div class='selectors-wrapper'>";
  }

  var openMainWrapper = function() {
    return '<div class="vertical-neck-module-wrapper" contenteditable="false">';
  }

  var openTopDiv = function() {
    return '<div class="vertical-neck-module-container open">';
  }

  var buildChordModuleDiv = function() {
    return '<div class="vertical-neck-module"></div>';
  }

  var buildBarreDiv = function() {
    return '<div class="barre-div"></div>';
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
