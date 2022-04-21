let chordsNeck, scalesNeck;
$(function(){
chordsNeck = Object.create(neckModule);
chordsNeck.initParams({
  myContainer: 'chords-container',
  rootNote: 'C',
  showInitialChord: true,
  showFretRangeSelectors: true,
  showResetLink: true,
  showNeckStyleSelectors: false,
  showScaleOnlyLink: false,
  showFretRange: true,
  chordInterval: 1,
  neckStyleClass: 'long-neck-default',
  totalFrets: 21,
  topfret: 21,
  lowfret:0,
  scalesArray: 'majorScales'
});
chordsNeck.initLayout();
chordsNeck.initActions();

scalesNeck = Object.create(neckModule);
scalesNeck.initParams({
  myContainer: 'scales-container',
  rootNote: 'C',
  showInitialChord: false,
  showFretRangeSelectors: true,
  showResetLink: false,
  showNeckStyleSelectors: false,
  showScaleOnlyLink: false,
  showFretRange: true,
  scaleOnlyMode: true,
  chordInterval: 1,
  neckStyleClass: 'long-neck-default',
  totalFrets: 21,
  topfret: 21,
  lowfret:0,
  scalesArray: 'majorScales'
});
scalesNeck.initLayout();
scalesNeck.initActions();

var colorKey = $('#color_key');
colorKey.detach();
$('#guitar-neck .guitar-module-main-wrapper').append(colorKey);
});