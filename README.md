Guitar Fretboard Module
=======================

A javascript module for creating multiple instances of interactive guitar fretboard diagrams showing scales and all chords in a given key.
EXAMPLES AND MORE INFO:
http://hotfrets.com/guitar-neck-module/

Directions
==========

File dependencies:
- Requires jquery. Example here uses - https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
- stylesheet uses google webfont Archivo Narrow: 400 and 700. Refer to the sample file attached for implementation.
- css/neckmodule.css
- images/blankneck.jpg
- js/neckmodule.js

Adding guitar fretboard modules to your web page
------------------------------------------------
After making sure you have added the above listed dependencies to your page, all that is required to display an interactive module on your page is one div and 2 lines of javascript/jquery.

Place a div inside the body of your page like this:
```<div id="neck-container"></div>```
Place the following script somewhere on the page, preferably just before the closing body tag:
```
var neck1 = Object.create(neckModule);
neck1.initLayout();
```
You can name the module anything you like. I just named it neck1.

The above will result in a fretboard daigram showing the notes from the C major scale and provide buttons to click for displaying each chord in that key.

There are several parameters that can be set. Here are the params that can be sent to each instance of the fretboard module along with the default values.


DEFAULTS
========
```
myContainer:                'neck-container',  // string - The name of the DOM element in which the neckModule should be placed. Should be the string used in the selector and can be an id or a class placed on the DOM element. Must be unique.
containerSelectorType:      'id',              // string - options=> 'id', 'className'
showTitle:                  true,              // boolean - options=> true, false
showScaleNotes:             true,              // boolean - options=> true, false
showFretRange:              true,              // boolean - options=> true, false
showResetLink:              true,              // boolean - options=> true, false
showChordButtons:           true,              // boolean - options=> true, false
showNotesPerChordSelector:  true,              // boolean - options=> true, false
showChordNameHeader:        true,              // boolean - options=> true, false
showIntervalColorKey:       true,              // boolean - options=> true, false
topfret:                    17,                // int - options=> 1-17
lowfret:                    0,                 // int - options: 0-16
scalesArray:                'majorScales',     // string - options=> 'majorScales', 'naturalMinorScales', 'harmonicMinorScales'
rootNote:                   'C',               // string - options=> 'C', 'C#', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'
showInitialChord:           false,             // boolean - options=> true, false
chordInterval:              0,                 // int - options=> 1-7
notesPerChord:              4                  // int - options=> 3-5
```
Sending limited params
======================
You can send any number of parameters. Anything you don't send will use the default values above.

Examples
--------

Showing 2 instances
-------------------

This instance sends a request for the key of E major and looks for a div with an id of 'neck-container' which is the default
```
var neck1 = Object.create(neckModule);
neck1.initLayout({rootNote: 'E'});
```

This instance sends a request for the key of G major and sets the container id to look for a div with id of 'g-major'
```
var neck2 = Object.create(neckModule);
neck2.initLayout({myContainer: 'g-major', rootNote: 'G'});
```

Showing an inital chord
-----------------------
```
var neck3 = Object.create(neckModule);
neck3.initLayout({
  myContainer: 'a-minor',
  rootNote: 'A',
  showInitialChord: true,
  chordInterval: 2,
  scalesArray: 'harmonicMinorScales'
});
 ```
The above will show the A harmonic minor scale but will initially select the 2nd note in that key which is Bdim.

[![Analytics](https://ga-beacon.appspot.com/UA-53439951-1/guitar-fretboard-module/readme)](https://github.com/igrigorik/ga-beacon)
