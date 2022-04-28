import { neckModule } from "./neckmodule.js";

const chordsNeck = neckModule();
const scalesNeck = neckModule();

chordsNeck.initParams({
  myContainer: 'chords-container',
  rootNote: 'C',
  showInitialChord: true,
  showFretRangeSelectors: true,
  showResetLink: true,
  showNeckStyleSelectors: false,
  showScaleOnlyLink: true,
  showFretRange: true,
  chordInterval: 1,
  showIntervalColorKey: true,
  neckStyleClass: 'long-neck-default',
  totalFrets: 21,
  topfret: 21,
  lowfret:0,
  scalesArray: 'majorScales'
});
chordsNeck.initLayout();
chordsNeck.initActions();

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
