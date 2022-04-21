var vextab_parser=function(){function t(){this.yy={}}var e={trace:function(){},yy:{},symbols_:{error:2,e:3,maybe_vextab:4,EOF:5,vextab:6,stave:7,voice:8,maybe_options:9,stave_data:10,OPTIONS:11,options:12,TABSTAVE:13,STAVE:14,VOICE:15,stave_additions:16,TEXT:17,text:18,NOTES:19,notes:20,SLUR:21,WORD:22,"=":23,STR:24,",":25,lingo:26,line:27,chord:28,time:29,bar:30,"[":31,"]":32,tuplets:33,annotations:34,command:35,rest:36,"|":37,":":38,frets:39,maybe_decorator:40,"/":41,string:42,chord_line:43,".":44,"(":45,")":46,articulation:47,NUMBER:48,abc:49,_:50,timed_fret:51,time_values:52,maybe_dot:53,time_unit:54,maybe_slash:55,w:56,h:57,q:58,d:59,S:60,"-":61,s:62,t:63,T:64,b:65,p:66,v:67,V:68,u:69,"^":70,$:71,annotation_words:72,"!":73,COMMAND:74,"#":75,ABC:76,abc_accidental:77,accidental_type:78,"@":79,n:80,"~":81,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",11:"OPTIONS",13:"TABSTAVE",14:"STAVE",15:"VOICE",17:"TEXT",19:"NOTES",21:"SLUR",22:"WORD",23:"=",24:"STR",25:",",31:"[",32:"]",37:"|",38:":",41:"/",44:".",45:"(",46:")",48:"NUMBER",50:"_",56:"w",57:"h",58:"q",59:"d",60:"S",61:"-",62:"s",63:"t",64:"T",65:"b",66:"p",67:"v",68:"V",69:"u",70:"^",71:"$",73:"!",74:"COMMAND",75:"#",76:"ABC",79:"@",80:"n",81:"~"},productions_:[0,[3,2],[4,0],[4,1],[6,1],[6,2],[7,3],[7,2],[7,2],[8,1],[8,1],[8,1],[10,1],[10,2],[16,2],[16,2],[16,2],[9,0],[9,1],[12,3],[12,4],[18,1],[18,3],[20,1],[20,2],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[30,1],[30,3],[30,3],[30,3],[30,3],[30,3],[27,4],[43,1],[43,3],[28,4],[28,5],[39,1],[39,1],[39,4],[39,2],[39,4],[51,5],[51,1],[51,5],[51,8],[51,1],[51,4],[29,3],[52,2],[54,1],[54,1],[54,1],[54,1],[53,0],[53,1],[55,0],[55,1],[42,1],[47,1],[47,1],[47,1],[47,1],[47,1],[47,1],[47,1],[40,1],[40,1],[40,1],[40,1],[40,0],[33,3],[33,5],[34,3],[72,1],[72,3],[35,3],[36,2],[36,3],[36,4],[49,3],[77,1],[77,2],[77,1],[77,2],[77,1],[77,0],[78,0],[78,1]],performAction:function(t,e,s,i,n,r,a){var c=r.length-1;switch(n){case 1:return Vex.Flow.VexTab.DEBUG&&r[c-1]&&(console.log(r[c-1]),console.log(JSON.stringify(r[c-1],null," "))),r[c-1];case 2:this.$=null;break;case 3:this.$=r[c];break;case 4:this.$=[r[c]];break;case 5:this.$=[].concat(r[c-1],r[c]);break;case 6:this.$={element:r[c-2],options:r[c-1],notes:r[c].notes,text:r[c].text,_l:a[c-2].first_line,_c:a[c-2].first_column};break;case 7:this.$={element:r[c-1],options:r[c],_l:a[c-1].first_line,_c:a[c-1].first_column};break;case 8:this.$={element:"options",params:r[c],_l:a[c-1].first_line,_c:a[c-1].first_column};break;case 12:this.$=r[c];break;case 13:var h=[].concat(r[c-1].text,r[c].text),o=[].concat(r[c-1].notes,r[c].notes),l=[].concat(r[c-1].slurs,r[c].slurs);this.$={text:h,notes:o,slurs:l};break;case 14:this.$={text:r[c],notes:[],slurs:[]};break;case 15:this.$={notes:r[c],text:[],slurs:[]};break;case 16:this.$={slurs:r[c],notes:[],text:[]};break;case 17:this.$=null;break;case 18:this.$=r[c];break;case 19:this.$=[{key:r[c-2],value:r[c],_l:a[c-2].first_line,_c:a[c-2].first_column}];break;case 20:this.$=[].concat(r[c-3],[{key:r[c-2],value:r[c],_l:a[c-2].first_line,_c:a[c-2].first_column}]);break;case 21:this.$=[{text:r[c],_l:a[c].first_line,_c:a[c].first_column}];break;case 22:this.$=[].concat(r[c-2],{text:r[c],_l:a[c].first_line,_c:a[c].first_column});break;case 23:this.$=r[c];break;case 24:this.$=[].concat(r[c-1],r[c]);break;case 25:this.$=r[c];break;case 26:this.$=r[c];break;case 27:this.$=r[c];break;case 28:this.$=[{command:"bar",type:r[c],_l:a[c].first_line,_c:a[c].first_column}];break;case 29:this.$=[{command:"open_beam",_l:a[c].first_line,_c:a[c].first_column}];break;case 30:this.$=[{command:"close_beam",_l:a[c].first_line,_c:a[c].first_column}];break;case 31:this.$=[{command:"tuplet",params:r[c],_l:a[c].first_line,_c:a[c].first_column}];break;case 32:this.$=[{command:"annotations",params:r[c],_l:a[c].first_line,_c:a[c].first_column}];break;case 33:this.$=[{command:"command",params:r[c],_l:a[c].first_line,_c:a[c].first_column}];break;case 34:this.$=[{command:"rest",params:r[c]}];break;case 35:this.$="single";break;case 36:this.$="double";break;case 37:this.$="end";break;case 38:this.$="repeat-end";break;case 39:this.$="repeat-begin";break;case 40:this.$="repeat-both";break;case 41:_.extend(_.last(r[c-3]),{decorator:r[c-2]}),_.each(r[c-3],function(t){t.string=r[c]}),this.$=r[c-3];break;case 42:this.$=r[c];break;case 43:this.$=[].concat(r[c-2],r[c]);break;case 44:this.$=[{chord:r[c-2],decorator:r[c]}];break;case 45:this.$=[{chord:r[c-2],articulation:r[c-4],decorator:r[c]}];break;case 46:this.$=[{fret:r[c],_l:a[c].first_line,_c:a[c].first_column}];break;case 47:this.$=[{abc:r[c],_l:a[c].first_line,_c:a[c].first_column}];break;case 48:this.$=[{abc:r[c-3],octave:r[c-2],fret:r[c],_l:a[c-3].first_line,_c:a[c-3].first_column}];break;case 49:this.$=[_.extend(r[c],{articulation:r[c-1]})];break;case 50:_.extend(_.last(r[c-3]),{decorator:r[c-2]}),_.extend(r[c],{articulation:r[c-1]}),r[c-3].push(r[c]),this.$=r[c-3];break;case 51:this.$={time:r[c-3],dot:r[c-2],fret:r[c],_l:a[c-4].first_line,_c:a[c-4].first_column};break;case 52:this.$={fret:r[c],_l:a[c].first_line,_c:a[c].first_column};break;case 53:this.$={time:r[c-3],dot:r[c-2],abc:r[c]};break;case 54:this.$={time:r[c-6],dot:r[c-5],abc:r[c-3],octave:r[c-2],fret:r[c]};break;case 55:this.$={abc:r[c],_l:a[c].first_line,_c:a[c].first_column};break;case 56:this.$={abc:r[c-3],octave:r[c-2],fret:r[c],_l:a[c-3].first_line,_c:a[c-3].first_column};break;case 57:this.$={time:r[c-1],dot:r[c]};break;case 58:this.$=r[c-1]+r[c];break;case 59:this.$=r[c];break;case 60:this.$=r[c];break;case 61:this.$=r[c];break;case 62:this.$=r[c];break;case 63:this.$=!1;break;case 64:this.$=!0;break;case 65:this.$="";break;case 66:this.$="s";break;case 67:this.$=r[c];break;case 68:this.$="-";break;case 69:this.$="s";break;case 70:this.$="t";break;case 71:this.$="T";break;case 72:this.$="b";break;case 73:this.$="h";break;case 74:this.$="p";break;case 75:this.$="v";break;case 76:this.$="V";break;case 77:this.$="u";break;case 78:this.$="d";break;case 79:this.$=null;break;case 80:this.$={tuplet:r[c-1]};break;case 81:this.$={tuplet:r[c-3],notes:r[c-1]};break;case 82:this.$=r[c-1];break;case 83:this.$=[r[c]];break;case 84:this.$=[].concat(r[c-2],r[c]);break;case 85:this.$=r[c-1];break;case 86:this.$={position:0};break;case 87:this.$={position:r[c-1]};break;case 88:this.$={position:-1*r[c-1]};break;case 89:this.$={key:r[c-2],accidental:r[c-1],accidental_type:r[c]};break;case 90:this.$="#";break;case 91:this.$="##";break;case 92:this.$="b";break;case 93:this.$="bb";break;case 94:this.$="n";break;case 96:this.$=null;break;case 97:this.$="c"}},table:[{3:1,4:2,5:[2,2],6:3,7:4,8:5,11:[1,6],13:[1,7],14:[1,8],15:[1,9]},{1:[3]},{5:[1,10]},{5:[2,3],7:11,8:5,11:[1,6],13:[1,7],14:[1,8],15:[1,9]},{5:[2,4],11:[2,4],13:[2,4],14:[2,4],15:[2,4]},{5:[2,17],9:12,11:[2,17],12:13,13:[2,17],14:[2,17],15:[2,17],17:[2,17],19:[2,17],21:[2,17],22:[1,14]},{12:15,22:[1,14]},{5:[2,9],11:[2,9],13:[2,9],14:[2,9],15:[2,9],17:[2,9],19:[2,9],21:[2,9],22:[2,9]},{5:[2,10],11:[2,10],13:[2,10],14:[2,10],15:[2,10],17:[2,10],19:[2,10],21:[2,10],22:[2,10]},{5:[2,11],11:[2,11],13:[2,11],14:[2,11],15:[2,11],17:[2,11],19:[2,11],21:[2,11],22:[2,11]},{1:[2,1]},{5:[2,5],11:[2,5],13:[2,5],14:[2,5],15:[2,5]},{5:[2,7],10:16,11:[2,7],13:[2,7],14:[2,7],15:[2,7],16:17,17:[1,18],19:[1,19],21:[1,20]},{5:[2,18],11:[2,18],13:[2,18],14:[2,18],15:[2,18],17:[2,18],19:[2,18],21:[2,18],22:[1,21]},{23:[1,22]},{5:[2,8],11:[2,8],13:[2,8],14:[2,8],15:[2,8],22:[1,21]},{5:[2,6],11:[2,6],13:[2,6],14:[2,6],15:[2,6],16:23,17:[1,18],19:[1,19],21:[1,20]},{5:[2,12],11:[2,12],13:[2,12],14:[2,12],15:[2,12],17:[2,12],19:[2,12],21:[2,12]},{18:24,24:[1,25]},{20:26,23:[1,43],26:27,27:28,28:29,29:30,30:31,31:[1,32],32:[1,33],33:34,34:35,35:36,36:37,37:[1,42],38:[1,41],39:38,45:[1,39],47:40,48:[1,48],49:49,57:[1,55],61:[1,50],62:[1,51],63:[1,52],64:[1,53],65:[1,54],66:[1,56],70:[1,44],71:[1,45],73:[1,46],75:[1,47],76:[1,57]},{5:[2,17],9:58,11:[2,17],12:13,13:[2,17],14:[2,17],15:[2,17],17:[2,17],19:[2,17],21:[2,17],22:[1,14]},{23:[1,59]},{22:[1,60]},{5:[2,13],11:[2,13],13:[2,13],14:[2,13],15:[2,13],17:[2,13],19:[2,13],21:[2,13]},{5:[2,14],11:[2,14],13:[2,14],14:[2,14],15:[2,14],17:[2,14],19:[2,14],21:[2,14],25:[1,61]},{5:[2,21],11:[2,21],13:[2,21],14:[2,21],15:[2,21],17:[2,21],19:[2,21],21:[2,21],25:[2,21]},{5:[2,15],11:[2,15],13:[2,15],14:[2,15],15:[2,15],17:[2,15],19:[2,15],21:[2,15],23:[1,43],26:62,27:28,28:29,29:30,30:31,31:[1,32],32:[1,33],33:34,34:35,35:36,36:37,37:[1,42],38:[1,41],39:38,45:[1,39],47:40,48:[1,48],49:49,57:[1,55],61:[1,50],62:[1,51],63:[1,52],64:[1,53],65:[1,54],66:[1,56],70:[1,44],71:[1,45],73:[1,46],75:[1,47],76:[1,57]},{5:[2,23],11:[2,23],13:[2,23],14:[2,23],15:[2,23],17:[2,23],19:[2,23],21:[2,23],23:[2,23],31:[2,23],32:[2,23],37:[2,23],38:[2,23],45:[2,23],48:[2,23],57:[2,23],61:[2,23],62:[2,23],63:[2,23],64:[2,23],65:[2,23],66:[2,23],70:[2,23],71:[2,23],73:[2,23],75:[2,23],76:[2,23]},{5:[2,25],11:[2,25],13:[2,25],14:[2,25],15:[2,25],17:[2,25],19:[2,25],21:[2,25],23:[2,25],31:[2,25],32:[2,25],37:[2,25],38:[2,25],45:[2,25],48:[2,25],57:[2,25],61:[2,25],62:[2,25],63:[2,25],64:[2,25],65:[2,25],66:[2,25],70:[2,25],71:[2,25],73:[2,25],75:[2,25],76:[2,25]},{5:[2,26],11:[2,26],13:[2,26],14:[2,26],15:[2,26],17:[2,26],19:[2,26],21:[2,26],23:[2,26],31:[2,26],32:[2,26],37:[2,26],38:[2,26],45:[2,26],48:[2,26],57:[2,26],61:[2,26],62:[2,26],63:[2,26],64:[2,26],65:[2,26],66:[2,26],70:[2,26],71:[2,26],73:[2,26],75:[2,26],76:[2,26]},{5:[2,27],11:[2,27],13:[2,27],14:[2,27],15:[2,27],17:[2,27],19:[2,27],21:[2,27],23:[2,27],31:[2,27],32:[2,27],37:[2,27],38:[2,27],45:[2,27],48:[2,27],57:[2,27],61:[2,27],62:[2,27],63:[2,27],64:[2,27],65:[2,27],66:[2,27],70:[2,27],71:[2,27],73:[2,27],75:[2,27],76:[2,27]},{5:[2,28],11:[2,28],13:[2,28],14:[2,28],15:[2,28],17:[2,28],19:[2,28],21:[2,28],23:[2,28],31:[2,28],32:[2,28],37:[2,28],38:[2,28],45:[2,28],48:[2,28],57:[2,28],61:[2,28],62:[2,28],63:[2,28],64:[2,28],65:[2,28],66:[2,28],70:[2,28],71:[2,28],73:[2,28],75:[2,28],76:[2,28]},{5:[2,29],11:[2,29],13:[2,29],14:[2,29],15:[2,29],17:[2,29],19:[2,29],21:[2,29],23:[2,29],31:[2,29],32:[2,29],37:[2,29],38:[2,29],45:[2,29],48:[2,29],57:[2,29],61:[2,29],62:[2,29],63:[2,29],64:[2,29],65:[2,29],66:[2,29],70:[2,29],71:[2,29],73:[2,29],75:[2,29],76:[2,29]},{5:[2,30],11:[2,30],13:[2,30],14:[2,30],15:[2,30],17:[2,30],19:[2,30],21:[2,30],23:[2,30],31:[2,30],32:[2,30],37:[2,30],38:[2,30],45:[2,30],48:[2,30],57:[2,30],61:[2,30],62:[2,30],63:[2,30],64:[2,30],65:[2,30],66:[2,30],70:[2,30],71:[2,30],73:[2,30],75:[2,30],76:[2,30]},{5:[2,31],11:[2,31],13:[2,31],14:[2,31],15:[2,31],17:[2,31],19:[2,31],21:[2,31],23:[2,31],31:[2,31],32:[2,31],37:[2,31],38:[2,31],45:[2,31],48:[2,31],57:[2,31],61:[2,31],62:[2,31],63:[2,31],64:[2,31],65:[2,31],66:[2,31],70:[2,31],71:[2,31],73:[2,31],75:[2,31],76:[2,31]},{5:[2,32],11:[2,32],13:[2,32],14:[2,32],15:[2,32],17:[2,32],19:[2,32],21:[2,32],23:[2,32],31:[2,32],32:[2,32],37:[2,32],38:[2,32],45:[2,32],48:[2,32],57:[2,32],61:[2,32],62:[2,32],63:[2,32],64:[2,32],65:[2,32],66:[2,32],70:[2,32],71:[2,32],73:[2,32],75:[2,32],76:[2,32]},{5:[2,33],11:[2,33],13:[2,33],14:[2,33],15:[2,33],17:[2,33],19:[2,33],21:[2,33],23:[2,33],31:[2,33],32:[2,33],37:[2,33],38:[2,33],45:[2,33],48:[2,33],57:[2,33],61:[2,33],62:[2,33],63:[2,33],64:[2,33],65:[2,33],66:[2,33],70:[2,33],71:[2,33],73:[2,33],75:[2,33],76:[2,33]},{5:[2,34],11:[2,34],13:[2,34],14:[2,34],15:[2,34],17:[2,34],19:[2,34],21:[2,34],23:[2,34],31:[2,34],32:[2,34],37:[2,34],38:[2,34],45:[2,34],48:[2,34],57:[2,34],61:[2,34],62:[2,34],63:[2,34],64:[2,34],65:[2,34],66:[2,34],70:[2,34],71:[2,34],73:[2,34],75:[2,34],76:[2,34]},{40:63,41:[2,79],57:[2,79],59:[1,67],61:[2,79],62:[2,79],63:[2,79],64:[2,79],65:[2,79],66:[2,79],67:[1,64],68:[1,65],69:[1,66]},{27:69,39:38,43:68,47:70,48:[1,48],49:49,57:[1,55],61:[1,50],62:[1,51],63:[1,52],64:[1,53],65:[1,54],66:[1,56],76:[1,57]},{38:[1,73],45:[1,71],48:[1,74],49:75,51:72,76:[1,57]},{48:[1,78],52:76,54:77,56:[1,79],57:[1,80],58:[1,81]},{5:[2,35],11:[2,35],13:[2,35],14:[2,35],15:[2,35],17:[2,35],19:[2,35],21:[2,35],23:[2,35],31:[2,35],32:[2,35],37:[2,35],38:[2,35],45:[2,35],48:[2,35],57:[2,35],61:[2,35],62:[2,35],63:[2,35],64:[2,35],65:[2,35],66:[2,35],70:[2,35],71:[2,35],73:[2,35],75:[2,35],76:[2,35]},{37:[1,82],38:[1,83]},{48:[1,84]},{22:[1,86],72:85},{74:[1,87]},{48:[1,89],61:[1,90],75:[1,88]},{41:[2,46],57:[2,46],59:[2,46],61:[2,46],62:[2,46],63:[2,46],64:[2,46],65:[2,46],66:[2,46],67:[2,46],68:[2,46],69:[2,46]},{41:[2,47],48:[1,91],57:[2,47],59:[2,47],61:[2,47],62:[2,47],63:[2,47],64:[2,47],65:[2,47],66:[2,47],67:[2,47],68:[2,47],69:[2,47]},{38:[2,68],45:[2,68],48:[2,68],76:[2,68]},{38:[2,69],45:[2,69],48:[2,69],76:[2,69]},{38:[2,70],45:[2,70],48:[2,70],76:[2,70]},{38:[2,71],45:[2,71],48:[2,71],76:[2,71]},{38:[2,72],45:[2,72],48:[2,72],76:[2,72]},{38:[2,73],45:[2,73],48:[2,73],76:[2,73]},{38:[2,74],45:[2,74],48:[2,74],76:[2,74]},{41:[2,95],48:[2,95],57:[2,95],59:[2,95],61:[2,95],62:[2,95],63:[2,95],64:[2,95],65:[2,95],66:[2,95],67:[2,95],68:[2,95],69:[2,95],75:[1,93],77:92,79:[1,94],80:[1,95],81:[2,95]},{5:[2,16],11:[2,16],13:[2,16],14:[2,16],15:[2,16],17:[2,16],19:[2,16],21:[2,16]},{22:[1,96]},{5:[2,19],11:[2,19],13:[2,19],14:[2,19],15:[2,19],17:[2,19],19:[2,19],21:[2,19],22:[2,19]},{24:[1,97]},{5:[2,24],11:[2,24],13:[2,24],14:[2,24],15:[2,24],17:[2,24],19:[2,24],21:[2,24],23:[2,24],31:[2,24],32:[2,24],37:[2,24],38:[2,24],45:[2,24],48:[2,24],57:[2,24],61:[2,24],62:[2,24],63:[2,24],64:[2,24],65:[2,24],66:[2,24],70:[2,24],71:[2,24],73:[2,24],75:[2,24],76:[2,24]},{41:[1,98],47:99,57:[1,55],61:[1,50],62:[1,51],63:[1,52],64:[1,53],65:[1,54],66:[1,56]},{5:[2,75],11:[2,75],13:[2,75],14:[2,75],15:[2,75],17:[2,75],19:[2,75],21:[2,75],23:[2,75],31:[2,75],32:[2,75],37:[2,75],38:[2,75],41:[2,75],45:[2,75],48:[2,75],57:[2,75],61:[2,75],62:[2,75],63:[2,75],64:[2,75],65:[2,75],66:[2,75],70:[2,75],71:[2,75],73:[2,75],75:[2,75],76:[2,75]},{5:[2,76],11:[2,76],13:[2,76],14:[2,76],15:[2,76],17:[2,76],19:[2,76],21:[2,76],23:[2,76],31:[2,76],32:[2,76],37:[2,76],38:[2,76],41:[2,76],45:[2,76],48:[2,76],57:[2,76],61:[2,76],62:[2,76],63:[2,76],64:[2,76],65:[2,76],66:[2,76],70:[2,76],71:[2,76],73:[2,76],75:[2,76],76:[2,76]},{5:[2,77],11:[2,77],13:[2,77],14:[2,77],15:[2,77],17:[2,77],19:[2,77],21:[2,77],23:[2,77],31:[2,77],32:[2,77],37:[2,77],38:[2,77],41:[2,77],45:[2,77],48:[2,77],57:[2,77],61:[2,77],62:[2,77],63:[2,77],64:[2,77],65:[2,77],66:[2,77],70:[2,77],71:[2,77],73:[2,77],75:[2,77],76:[2,77]},{5:[2,78],11:[2,78],13:[2,78],14:[2,78],15:[2,78],17:[2,78],19:[2,78],21:[2,78],23:[2,78],31:[2,78],32:[2,78],37:[2,78],38:[2,78],41:[2,78],45:[2,78],48:[2,78],57:[2,78],61:[2,78],62:[2,78],63:[2,78],64:[2,78],65:[2,78],66:[2,78],70:[2,78],71:[2,78],73:[2,78],75:[2,78],76:[2,78]},{44:[1,101],46:[1,100]},{44:[2,42],46:[2,42]},{38:[1,73],48:[1,74],49:75,51:72,76:[1,57]},{27:69,39:38,43:102,47:70,48:[1,48],49:49,57:[1,55],61:[1,50],62:[1,51],63:[1,52],64:[1,53],65:[1,54],66:[1,56],76:[1,57]},{41:[2,49],57:[2,49],59:[2,49],61:[2,49],62:[2,49],63:[2,49],64:[2,49],65:[2,49],66:[2,49],67:[2,49],68:[2,49],69:[2,49]},{48:[1,78],52:103,54:77,56:[1,79],57:[1,80],58:[1,81]},{41:[2,52],57:[2,52],59:[2,52],61:[2,52],62:[2,52],63:[2,52],64:[2,52],65:[2,52],66:[2,52],67:[2,52],68:[2,52],69:[2,52]},{41:[2,55],48:[1,104],57:[2,55],59:[2,55],61:[2,55],62:[2,55],63:[2,55],64:[2,55],65:[2,55],66:[2,55],67:[2,55],68:[2,55],69:[2,55]},{5:[2,63],11:[2,63],13:[2,63],14:[2,63],15:[2,63],17:[2,63],19:[2,63],21:[2,63],23:[2,63],31:[2,63],32:[2,63],37:[2,63],38:[2,63],45:[2,63],48:[2,63],53:105,57:[2,63],59:[1,106],61:[2,63],62:[2,63],63:[2,63],64:[2,63],65:[2,63],66:[2,63],70:[2,63],71:[2,63],73:[2,63],75:[2,63],76:[2,63]},{5:[2,65],11:[2,65],13:[2,65],14:[2,65],15:[2,65],17:[2,65],19:[2,65],21:[2,65],23:[2,65],31:[2,65],32:[2,65],37:[2,65],38:[2,65],45:[2,65],48:[2,65],55:107,57:[2,65],59:[2,65],60:[1,108],61:[2,65],62:[2,65],63:[2,65],64:[2,65],65:[2,65],66:[2,65],70:[2,65],71:[2,65],73:[2,65],75:[2,65],76:[2,65]},{5:[2,59],11:[2,59],13:[2,59],14:[2,59],15:[2,59],17:[2,59],19:[2,59],21:[2,59],23:[2,59],31:[2,59],32:[2,59],37:[2,59],38:[2,59],45:[2,59],48:[2,59],57:[2,59],59:[2,59],60:[2,59],61:[2,59],62:[2,59],63:[2,59],64:[2,59],65:[2,59],66:[2,59],70:[2,59],71:[2,59],73:[2,59],75:[2,59],76:[2,59]},{5:[2,60],11:[2,60],13:[2,60],14:[2,60],15:[2,60],17:[2,60],19:[2,60],21:[2,60],23:[2,60],31:[2,60],32:[2,60],37:[2,60],38:[2,60],45:[2,60],48:[2,60],57:[2,60],59:[2,60],60:[2,60],61:[2,60],62:[2,60],63:[2,60],64:[2,60],65:[2,60],66:[2,60],70:[2,60],71:[2,60],73:[2,60],75:[2,60],76:[2,60]},{5:[2,61],11:[2,61],13:[2,61],14:[2,61],15:[2,61],17:[2,61],19:[2,61],21:[2,61],23:[2,61],31:[2,61],32:[2,61],37:[2,61],38:[2,61],45:[2,61],48:[2,61],57:[2,61],59:[2,61],60:[2,61],61:[2,61],62:[2,61],63:[2,61],64:[2,61],65:[2,61],66:[2,61],70:[2,61],71:[2,61],73:[2,61],75:[2,61],76:[2,61]},{5:[2,62],11:[2,62],13:[2,62],14:[2,62],15:[2,62],17:[2,62],19:[2,62],21:[2,62],23:[2,62],31:[2,62],32:[2,62],37:[2,62],38:[2,62],45:[2,62],48:[2,62],57:[2,62],59:[2,62],60:[2,62],61:[2,62],62:[2,62],63:[2,62],64:[2,62],65:[2,62],66:[2,62],70:[2,62],71:[2,62],73:[2,62],75:[2,62],76:[2,62]},{23:[1,110],37:[1,109],38:[1,111]},{37:[1,112],38:[1,113]},{25:[1,115],70:[1,114]},{25:[1,117],71:[1,116]},{25:[2,83],71:[2,83]},{73:[1,118]},{5:[2,86],11:[2,86],13:[2,86],14:[2,86],15:[2,86],17:[2,86],19:[2,86],21:[2,86],23:[2,86],31:[2,86],32:[2,86],37:[2,86],38:[2,86],45:[2,86],48:[2,86],57:[2,86],61:[2,86],62:[2,86],63:[2,86],64:[2,86],65:[2,86],66:[2,86],70:[2,86],71:[2,86],73:[2,86],75:[2,86],76:[2,86]},{75:[1,119]},{48:[1,120]},{50:[1,121]},{41:[2,96],48:[2,96],57:[2,96],59:[2,96],61:[2,96],62:[2,96],63:[2,96],64:[2,96],65:[2,96],66:[2,96],67:[2,96],68:[2,96],69:[2,96],78:122,81:[1,123]},{41:[2,90],48:[2,90],57:[2,90],59:[2,90],61:[2,90],62:[2,90],63:[2,90],64:[2,90],65:[2,90],66:[2,90],67:[2,90],68:[2,90],69:[2,90],75:[1,124],81:[2,90]},{41:[2,92],48:[2,92],57:[2,92],59:[2,92],61:[2,92],62:[2,92],63:[2,92],64:[2,92],65:[2,92],66:[2,92],67:[2,92],68:[2,92],69:[2,92],79:[1,125],81:[2,92]},{41:[2,94],48:[2,94],57:[2,94],59:[2,94],61:[2,94],62:[2,94],63:[2,94],64:[2,94],65:[2,94],66:[2,94],67:[2,94],68:[2,94],69:[2,94],81:[2,94]},{5:[2,20],11:[2,20],13:[2,20],14:[2,20],15:[2,20],17:[2,20],19:[2,20],21:[2,20],22:[2,20]},{5:[2,22],11:[2,22],13:[2,22],14:[2,22],15:[2,22],17:[2,22],19:[2,22],21:[2,22],25:[2,22]},{42:126,48:[1,127]},{38:[1,73],48:[1,74],49:75,51:128,76:[1,57]},{5:[2,79],11:[2,79],13:[2,79],14:[2,79],15:[2,79],17:[2,79],19:[2,79],21:[2,79],23:[2,79],31:[2,79],32:[2,79],37:[2,79],38:[2,79],40:129,45:[2,79],48:[2,79],57:[2,79],59:[1,67],61:[2,79],62:[2,79],63:[2,79],64:[2,79],65:[2,79],66:[2,79],67:[1,64],68:[1,65],69:[1,66],70:[2,79],71:[2,79],73:[2,79],75:[2,79],76:[2,79]},{27:130,39:38,47:70,48:[1,48],49:49,57:[1,55],61:[1,50],62:[1,51],63:[1,52],64:[1,53],65:[1,54],66:[1,56],76:[1,57]},{44:[1,101],46:[1,131]},{38:[2,63],53:132,59:[1,106]},{50:[1,133]},{5:[2,57],11:[2,57],13:[2,57],14:[2,57],15:[2,57],17:[2,57],19:[2,57],21:[2,57],23:[2,57],31:[2,57],32:[2,57],37:[2,57],38:[2,57],45:[2,57],48:[2,57],57:[2,57],61:[2,57],62:[2,57],63:[2,57],64:[2,57],65:[2,57],66:[2,57],70:[2,57],71:[2,57],73:[2,57],75:[2,57],76:[2,57]},{5:[2,64],11:[2,64],13:[2,64],14:[2,64],15:[2,64],17:[2,64],19:[2,64],21:[2,64],23:[2,64],31:[2,64],32:[2,64],37:[2,64],38:[2,64],45:[2,64],48:[2,64],57:[2,64],61:[2,64],62:[2,64],63:[2,64],64:[2,64],65:[2,64],66:[2,64],70:[2,64],71:[2,64],73:[2,64],75:[2,64],76:[2,64]},{5:[2,58],11:[2,58],13:[2,58],14:[2,58],15:[2,58],17:[2,58],19:[2,58],21:[2,58],23:[2,58],31:[2,58],32:[2,58],37:[2,58],38:[2,58],45:[2,58],48:[2,58],57:[2,58],59:[2,58],61:[2,58],62:[2,58],63:[2,58],64:[2,58],65:[2,58],66:[2,58],70:[2,58],71:[2,58],73:[2,58],75:[2,58],76:[2,58]},{5:[2,66],11:[2,66],13:[2,66],14:[2,66],15:[2,66],17:[2,66],19:[2,66],21:[2,66],23:[2,66],31:[2,66],32:[2,66],37:[2,66],38:[2,66],45:[2,66],48:[2,66],57:[2,66],59:[2,66],61:[2,66],62:[2,66],63:[2,66],64:[2,66],65:[2,66],66:[2,66],70:[2,66],71:[2,66],73:[2,66],75:[2,66],76:[2,66]},{5:[2,36],11:[2,36],13:[2,36],14:[2,36],15:[2,36],17:[2,36],19:[2,36],21:[2,36],23:[2,36],31:[2,36],32:[2,36],37:[2,36],38:[2,36],45:[2,36],48:[2,36],57:[2,36],61:[2,36],62:[2,36],63:[2,36],64:[2,36],65:[2,36],66:[2,36],70:[2,36],71:[2,36],73:[2,36],75:[2,36],76:[2,36]},{5:[2,37],11:[2,37],13:[2,37],14:[2,37],15:[2,37],17:[2,37],19:[2,37],21:[2,37],23:[2,37],31:[2,37],32:[2,37],37:[2,37],38:[2,37],45:[2,37],48:[2,37],57:[2,37],61:[2,37],62:[2,37],63:[2,37],64:[2,37],65:[2,37],66:[2,37],70:[2,37],71:[2,37],73:[2,37],75:[2,37],76:[2,37]},{5:[2,39],11:[2,39],13:[2,39],14:[2,39],15:[2,39],17:[2,39],19:[2,39],21:[2,39],23:[2,39],31:[2,39],32:[2,39],37:[2,39],38:[2,39],45:[2,39],48:[2,39],57:[2,39],61:[2,39],62:[2,39],63:[2,39],64:[2,39],65:[2,39],66:[2,39],70:[2,39],71:[2,39],73:[2,39],75:[2,39],76:[2,39]},{5:[2,38],11:[2,38],13:[2,38],14:[2,38],15:[2,38],17:[2,38],19:[2,38],21:[2,38],23:[2,38],31:[2,38],32:[2,38],37:[2,38],38:[2,38],45:[2,38],48:[2,38],57:[2,38],61:[2,38],62:[2,38],63:[2,38],64:[2,38],65:[2,38],66:[2,38],70:[2,38],71:[2,38],73:[2,38],75:[2,38],76:[2,38]},{5:[2,40],11:[2,40],13:[2,40],14:[2,40],15:[2,40],17:[2,40],19:[2,40],21:[2,40],23:[2,40],31:[2,40],32:[2,40],37:[2,40],38:[2,40],45:[2,40],48:[2,40],57:[2,40],61:[2,40],62:[2,40],63:[2,40],64:[2,40],65:[2,40],66:[2,40],70:[2,40],71:[2,40],73:[2,40],75:[2,40],76:[2,40]},{5:[2,80],11:[2,80],13:[2,80],14:[2,80],15:[2,80],17:[2,80],19:[2,80],21:[2,80],23:[2,80],31:[2,80],32:[2,80],37:[2,80],38:[2,80],45:[2,80],48:[2,80],57:[2,80],61:[2,80],62:[2,80],63:[2,80],64:[2,80],65:[2,80],66:[2,80],70:[2,80],71:[2,80],73:[2,80],75:[2,80],76:[2,80]},{48:[1,134]},{5:[2,82],11:[2,82],13:[2,82],14:[2,82],15:[2,82],17:[2,82],19:[2,82],21:[2,82],23:[2,82],31:[2,82],32:[2,82],37:[2,82],38:[2,82],45:[2,82],48:[2,82],57:[2,82],61:[2,82],62:[2,82],63:[2,82],64:[2,82],65:[2,82],66:[2,82],70:[2,82],71:[2,82],73:[2,82],75:[2,82],76:[2,82]},{22:[1,135]},{5:[2,85],11:[2,85],13:[2,85],14:[2,85],15:[2,85],17:[2,85],19:[2,85],21:[2,85],23:[2,85],31:[2,85],32:[2,85],37:[2,85],38:[2,85],45:[2,85],48:[2,85],57:[2,85],61:[2,85],62:[2,85],63:[2,85],64:[2,85],65:[2,85],66:[2,85],70:[2,85],71:[2,85],73:[2,85],75:[2,85],76:[2,85]},{5:[2,87],11:[2,87],13:[2,87],14:[2,87],15:[2,87],17:[2,87],19:[2,87],21:[2,87],23:[2,87],31:[2,87],32:[2,87],37:[2,87],38:[2,87],45:[2,87],48:[2,87],57:[2,87],61:[2,87],62:[2,87],63:[2,87],64:[2,87],65:[2,87],66:[2,87],70:[2,87],71:[2,87],73:[2,87],75:[2,87],76:[2,87]},{75:[1,136]},{48:[1,137]},{41:[2,89],48:[2,89],57:[2,89],59:[2,89],61:[2,89],62:[2,89],63:[2,89],64:[2,89],65:[2,89],66:[2,89],67:[2,89],68:[2,89],69:[2,89]},{41:[2,97],48:[2,97],57:[2,97],59:[2,97],61:[2,97],62:[2,97],63:[2,97],64:[2,97],65:[2,97],66:[2,97],67:[2,97],68:[2,97],69:[2,97]},{41:[2,91],48:[2,91],57:[2,91],59:[2,91],61:[2,91],62:[2,91],63:[2,91],64:[2,91],65:[2,91],66:[2,91],67:[2,91],68:[2,91],69:[2,91],81:[2,91]},{41:[2,93],48:[2,93],57:[2,93],59:[2,93],61:[2,93],62:[2,93],63:[2,93],64:[2,93],65:[2,93],66:[2,93],67:[2,93],68:[2,93],69:[2,93],81:[2,93]},{5:[2,41],11:[2,41],13:[2,41],14:[2,41],15:[2,41],17:[2,41],19:[2,41],21:[2,41],23:[2,41],31:[2,41],32:[2,41],37:[2,41],38:[2,41],44:[2,41],45:[2,41],46:[2,41],48:[2,41],57:[2,41],61:[2,41],62:[2,41],63:[2,41],64:[2,41],65:[2,41],66:[2,41],70:[2,41],71:[2,41],73:[2,41],75:[2,41],76:[2,41]},{5:[2,67],11:[2,67],13:[2,67],14:[2,67],15:[2,67],17:[2,67],19:[2,67],21:[2,67],23:[2,67],31:[2,67],32:[2,67],37:[2,67],38:[2,67],44:[2,67],45:[2,67],46:[2,67],48:[2,67],57:[2,67],61:[2,67],62:[2,67],63:[2,67],64:[2,67],65:[2,67],66:[2,67],70:[2,67],71:[2,67],73:[2,67],75:[2,67],76:[2,67]},{41:[2,50],57:[2,50],59:[2,50],61:[2,50],62:[2,50],63:[2,50],64:[2,50],65:[2,50],66:[2,50],67:[2,50],68:[2,50],69:[2,50]},{5:[2,44],11:[2,44],13:[2,44],14:[2,44],15:[2,44],17:[2,44],19:[2,44],21:[2,44],23:[2,44],31:[2,44],32:[2,44],37:[2,44],38:[2,44],45:[2,44],48:[2,44],57:[2,44],61:[2,44],62:[2,44],63:[2,44],64:[2,44],65:[2,44],66:[2,44],70:[2,44],71:[2,44],73:[2,44],75:[2,44],76:[2,44]},{44:[2,43],46:[2,43]},{5:[2,79],11:[2,79],13:[2,79],14:[2,79],15:[2,79],17:[2,79],19:[2,79],21:[2,79],23:[2,79],31:[2,79],32:[2,79],37:[2,79],38:[2,79],40:138,45:[2,79],48:[2,79],57:[2,79],59:[1,67],61:[2,79],62:[2,79],63:[2,79],64:[2,79],65:[2,79],66:[2,79],67:[1,64],68:[1,65],69:[1,66],70:[2,79],71:[2,79],73:[2,79],75:[2,79],76:[2,79]},{38:[1,139]},{48:[1,140]},{70:[1,141]},{25:[2,84],71:[2,84]},{5:[2,88],11:[2,88],13:[2,88],14:[2,88],15:[2,88],17:[2,88],19:[2,88],21:[2,88],23:[2,88],31:[2,88],32:[2,88],37:[2,88],38:[2,88],45:[2,88],48:[2,88],57:[2,88],61:[2,88],62:[2,88],63:[2,88],64:[2,88],65:[2,88],66:[2,88],70:[2,88],71:[2,88],73:[2,88],75:[2,88],76:[2,88]},{41:[2,48],57:[2,48],59:[2,48],61:[2,48],62:[2,48],63:[2,48],64:[2,48],65:[2,48],66:[2,48],67:[2,48],68:[2,48],69:[2,48]},{5:[2,45],11:[2,45],13:[2,45],14:[2,45],15:[2,45],17:[2,45],19:[2,45],21:[2,45],23:[2,45],31:[2,45],32:[2,45],37:[2,45],38:[2,45],45:[2,45],48:[2,45],57:[2,45],61:[2,45],62:[2,45],63:[2,45],64:[2,45],65:[2,45],66:[2,45],70:[2,45],71:[2,45],73:[2,45],75:[2,45],76:[2,45]},{48:[1,142],49:143,76:[1,57]},{41:[2,56],57:[2,56],59:[2,56],61:[2,56],62:[2,56],63:[2,56],64:[2,56],65:[2,56],66:[2,56],67:[2,56],68:[2,56],69:[2,56]},{5:[2,81],11:[2,81],13:[2,81],14:[2,81],15:[2,81],17:[2,81],19:[2,81],21:[2,81],23:[2,81],31:[2,81],32:[2,81],37:[2,81],38:[2,81],45:[2,81],48:[2,81],57:[2,81],61:[2,81],62:[2,81],63:[2,81],64:[2,81],65:[2,81],66:[2,81],70:[2,81],71:[2,81],73:[2,81],75:[2,81],76:[2,81]},{41:[2,51],57:[2,51],59:[2,51],61:[2,51],62:[2,51],63:[2,51],64:[2,51],65:[2,51],66:[2,51],67:[2,51],68:[2,51],69:[2,51]},{41:[2,53],48:[1,144],57:[2,53],59:[2,53],61:[2,53],62:[2,53],63:[2,53],64:[2,53],65:[2,53],66:[2,53],67:[2,53],68:[2,53],69:[2,53]},{50:[1,145]},{48:[1,146]},{41:[2,54],57:[2,54],59:[2,54],61:[2,54],62:[2,54],63:[2,54],64:[2,54],65:[2,54],66:[2,54],67:[2,54],68:[2,54],69:[2,54]}],defaultActions:{10:[2,1]},parseError:function(t,e){if(!e.recoverable)throw new Error(t);this.trace(t)},parse:function(t){function e(){var t;return t=s.lexer.lex()||_,"number"!=typeof t&&(t=s.symbols_[t]||t),t}var s=this,i=[0],n=[null],r=[],a=this.table,c="",h=0,o=0,l=0,u=2,_=1,y=r.slice.call(arguments,1);this.lexer.setInput(t),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});var b=this.lexer.yylloc;r.push(b);var p=this.lexer.options&&this.lexer.options.ranges;this.parseError="function"==typeof this.yy.parseError?this.yy.parseError:Object.getPrototypeOf(this).parseError;for(var f,m,k,g,d,$,x,v,S,E={};;){if(k=i[i.length-1],this.defaultActions[k]?g=this.defaultActions[k]:((null===f||"undefined"==typeof f)&&(f=e()),g=a[k]&&a[k][f]),"undefined"==typeof g||!g.length||!g[0]){var I="";S=[];for($ in a[k])this.terminals_[$]&&$>u&&S.push("'"+this.terminals_[$]+"'");I=this.lexer.showPosition?"Parse error on line "+(h+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+S.join(", ")+", got '"+(this.terminals_[f]||f)+"'":"Parse error on line "+(h+1)+": Unexpected "+(f==_?"end of input":"'"+(this.terminals_[f]||f)+"'"),this.parseError(I,{text:this.lexer.match,token:this.terminals_[f]||f,line:this.lexer.yylineno,loc:b,expected:S})}if(g[0]instanceof Array&&g.length>1)throw new Error("Parse Error: multiple actions possible at state: "+k+", token: "+f);switch(g[0]){case 1:i.push(f),n.push(this.lexer.yytext),r.push(this.lexer.yylloc),i.push(g[1]),f=null,m?(f=m,m=null):(o=this.lexer.yyleng,c=this.lexer.yytext,h=this.lexer.yylineno,b=this.lexer.yylloc,l>0&&l--);break;case 2:if(x=this.productions_[g[1]][1],E.$=n[n.length-x],E._$={first_line:r[r.length-(x||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(x||1)].first_column,last_column:r[r.length-1].last_column},p&&(E._$.range=[r[r.length-(x||1)].range[0],r[r.length-1].range[1]]),d=this.performAction.apply(E,[c,o,h,this.yy,g[1],n,r].concat(y)),"undefined"!=typeof d)return d;x&&(i=i.slice(0,2*-1*x),n=n.slice(0,-1*x),r=r.slice(0,-1*x)),i.push(this.productions_[g[1]][0]),n.push(E.$),r.push(E._$),v=a[i[i.length-2]][i[i.length-1]],i.push(v);break;case 3:return!0}}return!0}};Vex.L("Starting parser.");var s=function(){var t={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t){return this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t;var e=t.match(/(?:\r\n?|\n).*/g);return e?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,s=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e-1),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),s.length-1&&(this.yylineno-=s.length-1);var n=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:s?(s.length===i.length?this.yylloc.first_column:0)+i[i.length-s.length].length-s[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[n[0],n[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var s,i,n;if(this.options.backtrack_lexer&&(n={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(n.yylloc.range=this.yylloc.range.slice(0))),i=t[0].match(/(?:\r\n?|\n).*/g),i&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],s=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s)return s;if(this._backtrack){for(var r in n)this[r]=n[r];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var t,e,s,i;this._more||(this.yytext="",this.match="");for(var n=this._currentRules(),r=0;r<n.length;r++)if(s=this._input.match(this.rules[n[r]]),s&&(!e||s[0].length>e[0].length)){if(e=s,i=r,this.options.backtrack_lexer){if(t=this.test_match(s,n[r]),t!==!1)return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?(t=this.test_match(e,n[i]),t!==!1?t:!1):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t?t:this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){var t=this.conditionStack.length-1;return t>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules
},topState:function(t){return t=this.conditionStack.length-1-Math.abs(t||0),t>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(t,e,s,i){switch(s){case 0:return this.begin("notes"),19;case 1:return this.begin("options"),13;case 2:return this.begin("options"),14;case 3:return this.begin("options"),15;case 4:return this.begin("options"),11;case 5:return this.begin("text"),17;case 6:return this.begin("options"),21;case 7:return 22;case 8:return this.begin("annotations"),"$";case 9:return this.begin("notes"),"$";case 10:return 22;case 11:return this.begin("command"),"!";case 12:return this.begin("notes"),"!";case 13:return 74;case 14:return 24;case 15:return 41;case 16:return"+";case 17:return 38;case 18:return 23;case 19:return 45;case 20:return 46;case 21:return 31;case 22:return 32;case 23:return 70;case 24:return 25;case 25:return 37;case 26:return 44;case 27:return 75;case 28:return 79;case 29:return 65;case 30:return 62;case 31:return 57;case 32:return 66;case 33:return 63;case 34:return 64;case 35:return 61;case 36:return 50;case 37:return 67;case 38:return 68;case 39:return 69;case 40:return 59;case 41:return 48;case 42:return 58;case 43:return 56;case 44:return 57;case 45:return 59;case 46:return 60;case 47:return 76;case 48:return 80;case 49:return 81;case 50:this.begin("INITIAL");break;case 51:break;case 52:return 5;case 53:return"INVALID"}},rules:[/^(?:notes\b)/,/^(?:tabstave\b)/,/^(?:stave\b)/,/^(?:voice\b)/,/^(?:options\b)/,/^(?:text\b)/,/^(?:slur\b)/,/^(?:[^\s=]+)/,/^(?:[$])/,/^(?:[$])/,/^(?:[^,$]+)/,/^(?:[!])/,/^(?:[!])/,/^(?:[^!]+)/,/^(?:[^,\r\n]+)/,/^(?:\/)/,/^(?:\+)/,/^(?::)/,/^(?:=)/,/^(?:\()/,/^(?:\))/,/^(?:\[)/,/^(?:\])/,/^(?:\^)/,/^(?:,)/,/^(?:\|)/,/^(?:\.)/,/^(?:#)/,/^(?:@)/,/^(?:[b])/,/^(?:[s])/,/^(?:[h])/,/^(?:[p])/,/^(?:[t])/,/^(?:[T])/,/^(?:[-])/,/^(?:[_])/,/^(?:[v])/,/^(?:[V])/,/^(?:[u])/,/^(?:[d])/,/^(?:[0-9]+)/,/^(?:[q])/,/^(?:[w])/,/^(?:[h])/,/^(?:[d])/,/^(?:[S])/,/^(?:[A-GXLR])/,/^(?:[n])/,/^(?:[~])/,/^(?:[\r\n]+)/,/^(?:\s+)/,/^(?:$)/,/^(?:.)/],conditions:{notes:{rules:[8,11,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53],inclusive:!0},text:{rules:[14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,41,42,43,44,45,50,51,52,53],inclusive:!0},slur:{rules:[15,16,17,18,19,20,21,22,23,24,25,26,27,28,50,51,52,53],inclusive:!0},annotations:{rules:[9,10,15,16,17,18,19,20,21,22,23,24,25,26,27,28,50,51,52,53],inclusive:!0},options:{rules:[7,15,16,17,18,19,20,21,22,23,24,25,26,27,28,50,51,52,53],inclusive:!0},command:{rules:[12,13,15,16,17,18,19,20,21,22,23,24,25,26,27,28,50,51,52,53],inclusive:!0},INITIAL:{rules:[0,1,2,3,4,5,6,7,15,16,17,18,19,20,21,22,23,24,25,26,27,28,50,51,52,53],inclusive:!0}}};return t}();return e.lexer=s,t.prototype=e,e.Parser=t,new t}();"undefined"!=typeof require&&"undefined"!=typeof exports&&(exports.parser=vextab_parser,exports.Parser=vextab_parser.Parser,exports.parse=function(){return vextab_parser.parse.apply(vextab_parser,arguments)},exports.main=function(t){t[1]||(console.log("Usage: "+t[0]+" FILE"),process.exit(1));var e=require("fs").readFileSync(require("path").normalize(t[1]),"utf8");return exports.parser.parse(e)},"undefined"!=typeof module&&require.main===module&&exports.main(process.argv.slice(1)));/**
 * VexFlow TabDiv
 * Copyright Mohit Muthanna 2010 <mohit@muthanna.com>
 */
Vex.Flow.TabDiv = function (t, e) {
  var $ = jQuery.noConflict();
  arguments.length > 0 && this.init(t, e)
}, Vex.Flow.TabDiv.SEL = ".vex-tabdiv", Vex.Flow.TabDiv.ERROR_NOCANVAS = "<b>This browser does not support HTML5 Canvas</b><br/>Please use a modern browser such as <a href='http://google.com/chrome'>Google Chrome</a> or <a href='http://firefox.com'>Firefox</a>.", Vex.Flow.TabDiv.prototype.init = function (t, e) {
  var $ = jQuery.noConflict(); this.sel = t, this.code = $(t).text(), $(t).empty(), "static" == $(t).css("position") && $(t).css("position", "relative"), this.width = parseInt($(t).attr("width")) || 400, this.height = parseInt($(t).attr("height")) || 200, this.scale = parseFloat($(t).attr("scale")) || 1, "undefined" == typeof Raphael ? (this.canvas = $("<canvas></canvas>").addClass("vex-canvas"), $(t).append(this.canvas), this.renderer = new Vex.Flow.Renderer(this.canvas[0], Vex.Flow.Renderer.Backends.CANVAS)) : (this.canvas = $("<div></div>").addClass("vex-canvas"), $(t).append(this.canvas), this.renderer = new Vex.Flow.Renderer(this.canvas[0], Vex.Flow.Renderer.Backends.RAPHAEL)), this.ctx_sel = $(t).find(".vex-canvas"), this.renderer.resize(this.width, this.height), this.ctx = this.renderer.getContext(), this.ctx.setBackgroundFillStyle(this.ctx_sel.css("background-color")), this.ctx.scale(this.scale, this.scale), this.editor = $(t).attr("editor") || "", this.show_errors = $(t).attr("show-errors") || "", this.editor_width = $(t).attr("editor_width") || this.width, this.editor_height = $(t).attr("editor_height") || 200;
  var r = this;
  "true" == this.editor && (this.text_area = $("<textarea></textarea>").addClass("editor").val(this.code), this.editor_error = $("<div></div>").addClass("editor-error"), $(t).append($("<p/>")).append(this.editor_error), $(t).append($("<p/>")).append(this.text_area), this.text_area.width(this.editor_width), this.text_area.height(this.editor_height), this.text_area.keyup(function () {
    r.timeoutID && window.clearTimeout(r.timeoutID), r.timeoutID = window.setTimeout(function () {
      r.code != r.text_area.val() && (r.code = r.text_area.val(), r.redraw())
    }, 250)
  })), "true" == this.show_errors && (this.editor_error = $("<div></div>").addClass("editor-error"), $(t).append($("<p/>")).append(this.editor_error)), this.artist = new Vex.Flow.Artist(10, 0, this.width, {
    scale: this.scale
  }), this.parser = new Vex.Flow.VexTab(this.artist), Vex.Flow.Player && (opts = {}, e && (opts.soundfont_url = e.soundfont_url), this.player = new Vex.Flow.Player(this.artist, opts)), this.redraw()
}, Vex.Flow.TabDiv.prototype.redraw = function () {
  var t = this;
  return Vex.BM("Total render time: ", function () {
    t.parse(), t.draw()
  }), this
}, Vex.Flow.TabDiv.prototype.drawInternal = function () {
  return this.parser.isValid() ? this.artist.draw(this.renderer) : this
}, Vex.Flow.TabDiv.prototype.parseInternal = function () {
  try {
    this.artist.reset(), this.parser.reset(), this.parser.parse(this.code), this.editor_error.empty()
  } catch (t) {
    this.editor_error && (this.editor_error.empty(), this.editor_error.append($("<div></div>").addClass("text").html("Sucky VexTab: " + t.message)))
  }
  return this
}, Vex.Flow.TabDiv.prototype.parse = function () {
  var t = this;
  return Vex.BM("Parse time: ", function () {
    t.parseInternal()
  }), this
}, Vex.Flow.TabDiv.prototype.draw = function () {
  var t = this;
  return Vex.BM("Draw time: ", function () {
    t.drawInternal()
  }), this
}, Vex.Flow.TabDiv.start = function () {
  jQuery(Vex.Flow.TabDiv.SEL).each(function () {
    new Vex.Flow.TabDiv(this)
  })
}, jQuery(function ($) {
  Vex.Flow.TabDiv.SEL && Vex.Flow.TabDiv.start()
});
(function () {
  var t = [].slice,
    e = [].indexOf ||
  function (t) {
    for (var e = 0, n = this.length; n > e; e++) if (e in this && this[e] === t) return e;
    return -1
  };
  Vex.Flow.Artist = function () {
    function n(t, e, n, s) {
      this.x = t, this.y = e, this.width = n, this.options = {
        font_face: "Arial",
        font_size: 10,
        font_style: null,
        bottom_spacing: 20 + (Vex.Flow.Artist.NOLOGO ? 0 : 10),
        tab_stave_lower_spacing: 10,
        note_stave_lower_spacing: 0,
        scale: 1
      }, null != s && _.extend(this.options, s), this.reset()
    }
    var s, i, o, a, r, l, u, c;
    return n.DEBUG = !1, s = function () {
      var e;
      return e = 1 <= arguments.length ? t.call(arguments, 0) : [], Vex.Flow.Artist.DEBUG ? "undefined" != typeof console && null !== console ? console.log.apply(console, ["(Vex.Flow.Artist)"].concat(t.call(e))) : void 0 : void 0
    }, n.NOLOGO = !1, n.prototype.reset = function () {
      return this.tuning = new Vex.Flow.Tuning, this.key_manager = new Vex.Flow.KeyManager("C"), this.music_api = new Vex.Flow.Music, this.customizations = {
        "font-size": this.options.font_size,
        "font-face": this.options.font_face,
        "font-style": this.options.font_style,
        "annotation-position": "bottom",
        scale: this.options.scale,
        width: this.width,
        "stave-distance": 0,
        space: 0,
        player: "false",
        tempo: 120,
        instrument: "acoustic_grand_piano",
        accidentals: "standard",
        "tab-stems": "false",
        "tab-stem-direction": "up",
        "beam-rests": "true",
        "beam-stemlets": "true",
        "beam-middle-only": "false",
        "connector-space": 0
      }, this.staves = [], this.tab_articulations = [], this.stave_articulations = [], this.player_voices = [], this.last_y = this.y, this.current_duration = "q", this.current_clef = "treble", this.current_bends = {}, this.current_octave_shift = 0, this.bend_start_index = null, this.bend_start_strings = null, this.rendered = !1, this.renderer_context = null
    }, n.prototype.attachPlayer = function (t) {
      return this.player = t
    }, n.prototype.setOptions = function (t) {
      var n, i, o;
      s("setOptions: ", t), o = _.keys(this.customizations);
      for (n in t) {
        if (i = t[n], !(e.call(o, n) >= 0)) throw new Vex.RERR("ArtistError", "Invalid option '" + n + "'");
        this.customizations[n] = i
      }
      return this.last_y += parseInt(this.customizations.space, 10), "true" === this.customizations.player ? this.last_y += 15 : void 0
    }, n.prototype.getPlayerData = function () {
      return {
        voices: this.player_voices,
        context: this.renderer_context,
        scale: this.customizations.scale
      }
    }, c = function (t) {
      return "true" === t
    }, i = function (t, e, n, s, i, o) {
      var a, r, l, u, h, d, p, f, m, v, w, g, b, y, x, V, F, T, E, A, k, N, B, R, z;
      if (null != e && (b = e.stave), null != n && (v = n.stave), y = [], w = [], V = [], l = [], u = null, x = null, r = {
        beam_rests: c(i["beam-rests"]),
        show_stemlets: c(i["beam-stemlets"]),
        beam_middle_only: c(i["beam-middle-only"]),
        groups: o.beam_groups
      }, null != e) {
        for (f = e.voices.length > 1 ? !0 : !1, R = e.voices, p = T = 0, k = R.length; k > T; p = ++T) m = R[p], _.isEmpty(m) || (_.each(m, function (t) {
          return t.setStave(b)
        }), F = new Vex.Flow.Voice(Vex.Flow.TIME4_4).setMode(Vex.Flow.Voice.Mode.SOFT), F.addTickables(m), y.push(F), "true" === i["tab-stems"] && (r.stem_direction = f ? 0 === p ? 1 : -1 : "down" === i["tab-stem-direction"] ? -1 : 1, r.beam_rests = !1, l = l.concat(Vex.Flow.Beam.generateBeams(F.getTickables(), r))));
        u = b, x = b
      }
      if (r.beam_rests = c(i["beam-rests"]), null != n) {
        for (f = n.voices.length > 1 ? !0 : !1, z = n.voices, p = E = 0, N = z.length; N > E; p = ++E) m = z[p], _.isEmpty(m) || (g = 0 === p ? 1 : -1, _.each(m, function (t) {
          return t.setStave(v)
        }), F = new Vex.Flow.Voice(Vex.Flow.TIME4_4).setMode(Vex.Flow.Voice.Mode.SOFT), F.addTickables(m), w.push(F), f ? (r.stem_direction = g, l = l.concat(Vex.Flow.Beam.generateBeams(m, r))) : (r.stem_direction = null, l = l.concat(Vex.Flow.Beam.generateBeams(m, r))));
        u = v, x = v
      }
      for (A = 0, B = s.length; B > A; A++) m = s[A], _.isEmpty(m) || (_.each(m, function (t) {
        return t.setStave(x)
      }), F = new Vex.Flow.Voice(Vex.Flow.TIME4_4).setMode(Vex.Flow.Voice.Mode.SOFT), F.addTickables(m), V.push(F));
      return null != u ? (h = [], d = new Vex.Flow.Formatter, a = !1, null != e && (_.isEmpty(y) || d.joinVoices(y), h = y), null != n && (_.isEmpty(w) || d.joinVoices(w), h = h.concat(w), w.length > 1 && (a = !0)), _.isEmpty(s) || _.isEmpty(V) || (d.joinVoices(V), h = h.concat(V)), _.isEmpty(h) || d.formatToStave(h, u, {
        align_rests: a
      }), null != e && _.each(y, function (e) {
        return e.draw(t, b)
      }), null != n && _.each(w, function (e) {
        return e.draw(t, v)
      }), _.each(l, function (e) {
        return e.setContext(t).draw()
      }), _.isEmpty(s) || _.each(V, function (e) {
        return e.draw(t, x)
      }), null != e && null != n && new Vex.Flow.StaveConnector(n.stave, e.stave).setContext(t).draw(), null != n ? w : y) : void 0
    }, n.prototype.render = function (t) {
      var e, n, o, a, r, l, u, c, h, d, p, f, m, v, w, g;
      for (s("Render: ", this.options), this.closeBends(), t.resize(this.customizations.width * this.customizations.scale, (this.last_y + this.options.bottom_spacing) * this.customizations.scale), o = t.getContext(), o.scale(this.customizations.scale, this.customizations.scale), o.clear(), o.setFont(this.options.font_face, this.options.font_size, ""), this.renderer_context = o, a = function (t, e) {
        var n;
        return n = _.last(e), n instanceof Vex.Flow.BarNote ? (e.pop(), t.setEndBarType(n.getType())) : void 0
      }, v = this.staves, c = 0, p = v.length; p > c; c++) r = v[c], s("Rendering staves."), null != r.tab && a(r.tab, r.tab_notes), null != r.note && a(r.note, r.note_notes), null != r.tab && r.tab.setContext(o).draw(), null != r.note && r.note.setContext(o).draw(), r.tab_voices.push(r.tab_notes), r.note_voices.push(r.note_notes), l = i(o, null != r.tab ? {
        stave: r.tab,
        voices: r.tab_voices
      } : null, null != r.note ? {
        stave: r.note,
        voices: r.note_voices
      } : null, r.text_voices, this.customizations, {
        beam_groups: r.beam_groups
      }), this.player_voices.push(l);
      for (s("Rendering tab articulations."), w = this.tab_articulations, h = 0, f = w.length; f > h; h++) n = w[h], n.setContext(o).draw();
      for (s("Rendering note articulations."), g = this.stave_articulations, d = 0, m = g.length; m > d; d++) n = g[d], n.setContext(o).draw();
      return null != this.player && ("true" === this.customizations.player ? (this.player.setTempo(parseInt(this.customizations.tempo, 10)), this.player.setInstrument(this.customizations.instrument), this.player.render()) : this.player.removeControls()), this.rendered = !0, Vex.Flow.Artist.NOLOGO ? void 0 : (e = "vexflow.com", u = o.measureText(e).width, o.save(), o.setFont("Times", 10, "italic"), o.fillText(e, (this.customizations.width - u) / 2, this.last_y + 25), o.restore())
    }, n.prototype.isRendered = function () {
      return this.rendered
    }, n.prototype.draw = function (t) {
      return this.render(t)
    }, n.prototype.getNoteForFret = function (t, e) {
      var n, s, i, o, a, r, l, u;
      switch (l = this.tuning.getNoteForFret(t, e), u = Vex.Flow.keyProperties(l), r = this.key_manager.selectNote(u.key), n = null, this.customizations.accidentals) {
      case "standard":
        r.change && (n = null != r.accidental ? r.accidental : "n");
        break;
      case "cautionary":
        n = r.change ? null != r.accidental ? r.accidental : "n" : null != r.accidental ? r.accidental + "_c" : void 0;
        break;
      default:
        throw new Vex.RERR("ArtistError", "Invalid value for option 'accidentals': " + this.customizations.accidentals)
      }
      return s = r.note, i = u.octave, a = this.music_api.getNoteParts(u.key).root, o = this.music_api.getNoteParts(r.note).root, "b" === o && "c" === a ? i-- : "c" === o && "b" === a && i++, [s, i, n]
    }, n.prototype.getNoteForABC = function (t, e) {
      var n, s, i;
      return s = t.key, i = e, n = t.accidental, null != t.accidental_type && (n += "_" + t.accidental_type), [s, i, n]
    }, n.prototype.addStaveNote = function (t) {
      var e, n, s, i, o, a, r, l, u, c;
      for (i = {
        is_rest: !1,
        play_note: null
      }, _.extend(i, t), r = _.last(this.staves).note_notes, a = new Vex.Flow.StaveNote({
        keys: i.spec,
        duration: this.current_duration + (i.is_rest ? "r" : ""),
        clef: i.is_rest ? "treble" : this.current_clef,
        auto_stem: i.is_rest ? !1 : !0
      }), c = i.accidentals, n = l = 0, u = c.length; u > l; n = ++l) e = c[n], null != e && (o = e.split("_"), s = new Vex.Flow.Accidental(o[0]), o.length > 1 && "c" === o[1] && s.setAsCautionary(), a.addAccidental(n, s));
      return "d" === this.current_duration[this.current_duration.length - 1] && a.addDotToAll(), null != i.play_note && a.setPlayNote(i.play_note), r.push(a)
    }, n.prototype.addTabNote = function (t, e) {
      var n, s;
      return null == e && (e = null), s = _.last(this.staves).tab_notes, n = new Vex.Flow.TabNote({
        positions: t,
        duration: this.current_duration
      }, "true" === this.customizations["tab-stems"]), null != e && n.setPlayNote(e), s.push(n), "d" === this.current_duration[this.current_duration.length - 1] ? n.addDot() : void 0
    }, u = function (t, e) {
      return t + (e ? "d" : "")
    }, n.prototype.setDuration = function (t, e) {
      var n;
      return null == e && (e = !1), n = t.split(/\s+/), s("setDuration: ", n[0], e), this.current_duration = u(n[0], e)
    }, n.prototype.addBar = function (t) {
      var e, n, i;
      return s("addBar: ", t), this.closeBends(), this.key_manager.reset(), i = _.last(this.staves), e = Vex.Flow.Barline.type, t = function () {
        switch (t) {
        case "single":
          return e.SINGLE;
        case "double":
          return e.DOUBLE;
        case "end":
          return e.END;
        case "repeat-begin":
          return e.REPEAT_BEGIN;
        case "repeat-end":
          return e.REPEAT_END;
        case "repeat-both":
          return e.REPEAT_BOTH;
        default:
          return e.SINGLE
        }
      }(), n = (new Vex.Flow.BarNote).setType(t), i.tab_notes.push(n), null != i.note ? i.note_notes.push(n) : void 0
    }, l = function (t, e) {
      var n, s;
      return n = Vex.Flow.Bend.UP, s = "", parseInt(t, 10) > parseInt(e, 10) ? n = Vex.Flow.Bend.DOWN : s = function () {
        switch (Math.abs(e - t)) {
        case 1:
          return "1/2";
        case 2:
          return "Full";
        case 3:
          return "1 1/2";
        default:
          return "Bend to " + e
        }
      }(), {
        type: n,
        text: s
      }
    }, n.prototype.openBends = function (t, e, n, i) {
      var o, a, r, u, c, h, d, p, f, m, v, w, g, b;
      for (s("openBends", t, e, n, i), f = _.last(this.staves).tab_notes, p = t, d = n, _.isEmpty(this.current_bends) ? (this.bend_start_index = f.length - 2, this.bend_start_strings = n) : (p = f[this.bend_start_index], d = this.bend_start_strings), o = p.getPositions(), c = e.getPositions(), b = [], r = w = 0, g = d.length; g > w; r = ++w) u = d[r], h = i[r], a = t.getPositions()[n[r]], m = c[h], null == (v = this.current_bends)[u] && (v[u] = []), b.push(this.current_bends[u].push(l(a.fret, m.fret)));
      return b
    }, n.prototype.closeBends = function (t) {
      var e, n, i, o, a, r, l, u, c, h, d, p;
      if (null == t && (t = 1), null != this.bend_start_index) {
        s("closeBends(" + t + ")"), a = _.last(this.staves).tab_notes, d = this.current_bends;
        for (n in d) {
          for (r = d[n], i = [], l = 0, c = r.length; c > l; l++) e = r[l], i.push(e);
          a[this.bend_start_index].addModifier(new Vex.Flow.Bend(null, null, i), n)
        }
        for (p = a.slice(this.bend_start_index + 1, +(a.length - 2 + t) + 1 || 9e9), u = 0, h = p.length; h > u; u++) o = p[u], o.setGhost(!0);
        return this.current_bends = {}, this.bend_start_index = null
      }
    }, n.prototype.makeTuplets = function (t, e) {
      var n, i, o, a;
      if (s("makeTuplets", t, e), null == e && (e = t), _.last(this.staves).note) {
        if (i = _.last(this.staves).note_notes, a = _.last(this.staves).tab_notes, i.length < e) throw new Vex.RERR("ArtistError", "Not enough notes for tuplet");
        return n = new Vex.Flow.Tuplet(i.slice(i.length - e), {
          num_notes: t
        }), this.stave_articulations.push(n), o = new Vex.Flow.Tuplet(a.slice(a.length - e), {
          num_notes: t
        }), "true" === this.customizations["tab-stems"] ? this.tab_articulations.push(o) : void 0
      }
    }, o = function (t) {
      return t.match(/^\.fingering\/([^.]+)\./)
    }, n.prototype.makeFingering = function (t) {
      var e, n, s, i, a, r, l, u, c, h, d, _, p, f;
      if (h = o(t), e = Vex.Flow.Modifier.Position, a = [], i = [], null == h) return null;
      for (a = function () {
        var t, e, n, s;
        for (n = h[1].split(/-/), s = [], t = 0, e = n.length; e > t; t++) c = n[t], s.push(c.trim());
        return s
      }(), n = function () {
        return new Vex.RERR("ArtistError", "Bad fingering: " + h[1])
      }, p = 0, f = a.length; f > p; p++) {
        if (s = a[p], d = s.match(/(\d+):([ablr]):([fs]):([^-.]+)/), null == d) throw n();
        switch (l = parseInt(d[1], 10) - 1, _ = e.RIGHT, d[2]) {
        case "l":
          _ = e.LEFT;
          break;
        case "r":
          _ = e.RIGHT;
          break;
        case "a":
          _ = e.ABOVE;
          break;
        case "b":
          _ = e.BELOW
        }
        switch (r = null, u = d[4], d[3]) {
        case "s":
          r = new Vex.Flow.StringNumber(u).setPosition(_);
          break;
        case "f":
          r = new Vex.Flow.FretHandFinger(u).setPosition(_)
        }
        i.push({
          num: l,
          modifier: r
        })
      }
      return i
    }, r = function (t) {
      return t.match(/^\.stroke\/([^.]+)\./)
    }, n.prototype.makeStroke = function (t) {
      var e, n, s;
      if (n = r(t), e = Vex.Flow.Stroke.Type, s = null, null != n) {
        switch (n[1]) {
        case "bu":
          s = e.BRUSH_UP;
          break;
        case "bd":
          s = e.BRUSH_DOWN;
          break;
        case "ru":
          s = e.ROLL_UP;
          break;
        case "rd":
          s = e.ROLL_DOWN;
          break;
        case "qu":
          s = e.RASQUEDO_UP;
          break;
        case "qd":
          s = e.RASQUEDO_DOWN;
          break;
        default:
          throw new Vex.RERR("ArtistError", "Invalid stroke type: " + n[1])
        }
        return new Vex.Flow.Stroke(s)
      }
      return null
    }, a = function (t) {
      return t.match(/^\.(a[^\/]*)\/(t|b)[^.]*\./)
    }, n.prototype.makeScoreArticulation = function (t) {
      var e, n, s, i, o;
      return n = a(t), null != n ? (o = n[1], i = n[2], e = Vex.Flow.Modifier.Position, s = "t" === i ? e.ABOVE : e.BELOW, new Vex.Flow.Articulation(o).setPosition(s)) : null
    }, n.prototype.makeAnnotation = function (t) {
      var e, n, s, i, o, a, r, l, u;
      if (i = this.customizations["font-face"], o = this.customizations["font-size"], a = this.customizations["font-style"], n = this.customizations["annotation-position"], e = Vex.Flow.Annotation.VerticalJustify, s = "top" === n ? e.TOP : e.BOTTOM, l = function (t, e) {
        return null == e && (e = s), new Vex.Flow.Annotation(t).setFont(i, o, a).setVerticalJustification(e)
      }, u = t.match(/^\.([^-]*)-([^-]*)-([^.]*)\.(.*)/), null != u) return i = u[1], o = u[2], a = u[3], t = u[4], t ? l(t) : null;
      if (u = t.match(/^\.([^.]*)\.(.*)/), null != u) {
        switch (r = s, t = u[2], u[1]) {
        case "big":
          a = "bold", o = "14";
          break;
        case "italic":
        case "italics":
          i = "Times", a = "italic";
          break;
        case "medium":
          o = "12";
          break;
        case "top":
          r = e.TOP, this.customizations["annotation-position"] = "top";
          break;
        case "bottom":
          r = e.BOTTOM, this.customizations["annotation-position"] = "bottom"
        }
        return t ? l(t, r) : null
      }
      return l(t)
    }, n.prototype.addAnnotations = function (t) {
      var e, n, s, i, o, l, u, c, h, d, p, f, m, v, w, g, b, y, x, V, F, T;
      if (c = _.last(this.staves), h = c.note_notes, f = c.tab_notes, t.length > f.length) throw new Vex.RERR("ArtistError", "More annotations than note elements");
      if (c.tab) for (x = f.slice(f.length - t.length), o = m = 0, g = x.length; g > m; o = ++m) p = x[o], a(t[o]) ? (u = this.makeScoreArticulation(t[o]), p.addModifier(u, 0)) : r(t[o]) ? (d = this.makeStroke(t[o]), p.addModifier(d, 0)) : (e = this.makeAnnotation(t[o]), e && p.addModifier(this.makeAnnotation(t[o]), 0));
      else for (V = h.slice(h.length - t.length), o = v = 0, b = V.length; b > v; o = ++v) l = V[o], a(t[o]) || (e = this.makeAnnotation(t[o]), e && l.addAnnotation(0, this.makeAnnotation(t[o])));
      if (c.note) {
        for (F = h.slice(h.length - t.length), T = [], o = w = 0, y = F.length; y > w; o = ++w) if (l = F[o], u = this.makeScoreArticulation(t[o]), null != u && l.addArticulation(0, u), d = this.makeStroke(t[o]), null != d && l.addStroke(0, d), i = this.makeFingering(t[o]), null != i) try {
          T.push(function () {
            var t, e, n;
            for (n = [], t = 0, e = i.length; e > t; t++) s = i[t], n.push(l.addModifier(s.num, s.modifier));
            return n
          }())
        } catch (E) {
          throw n = E, new Vex.RERR("ArtistError", "Bad note number in fingering: " + t[o])
        } else T.push(void 0);
        return T
      }
    }, n.prototype.addTabArticulation = function (t, e, n, i, o) {
      var a;
      return s("addTabArticulations: ", t, e, n, i, o), "t" === t && n.addModifier(new Vex.Flow.Annotation("T").setVerticalJustification(Vex.Flow.Annotation.VerticalJustify.BOTTOM)), _.isEmpty(i) && _.isEmpty(o) ? void 0 : (a = null, "s" === t && (a = new Vex.Flow.TabSlide({
        first_note: e,
        last_note: n,
        first_indices: i,
        last_indices: o
      })), ("h" === t || "p" === t) && (a = new Vex.Flow.TabTie({
        first_note: e,
        last_note: n,
        first_indices: i,
        last_indices: o
      }, t.toUpperCase())), ("T" === t || "t" === t) && (a = new Vex.Flow.TabTie({
        first_note: e,
        last_note: n,
        first_indices: i,
        last_indices: o
      }, " ")), "b" === t && this.openBends(e, n, i, o), null != a ? this.tab_articulations.push(a) : void 0)
    }, n.prototype.addStaveArticulation = function (t, e, n, i, o) {
      var a;
      return s("addStaveArticulations: ", t, e, n, i, o), a = null, ("b" === t || "s" === t || "h" === t || "p" === t || "t" === t || "T" === t) && (a = new Vex.Flow.StaveTie({
        first_note: e,
        last_note: n,
        first_indices: i,
        last_indices: o
      })), null != a ? this.stave_articulations.push(a) : void 0
    }, n.prototype.getPreviousNoteIndex = function () {
      var t, e, n;
      for (n = _.last(this.staves).tab_notes, t = 2; t <= n.length;) {
        if (e = n[n.length - t], e instanceof Vex.Flow.TabNote) return n.length - t;
        t++
      }
      return -1
    }, n.prototype.addDecorator = function (t) {
      var e, n, i, o, a, r;
      return s("addDecorator: ", t), null != t ? (o = _.last(this.staves), a = o.tab_notes, i = o.note_notes, e = null, n = null, "v" === t && (e = new Vex.Flow.Vibrato), "V" === t && (e = (new Vex.Flow.Vibrato).setHarsh(!0)), "u" === t && (e = new Vex.Flow.Articulation("a|").setPosition(Vex.Flow.Modifier.Position.BOTTOM), n = new Vex.Flow.Articulation("a|").setPosition(Vex.Flow.Modifier.Position.BOTTOM)), "d" === t && (e = new Vex.Flow.Articulation("am").setPosition(Vex.Flow.Modifier.Position.BOTTOM), n = new Vex.Flow.Articulation("am").setPosition(Vex.Flow.Modifier.Position.BOTTOM)), null != e && _.last(a).addModifier(e, 0), null != n ? null != (r = _.last(i)) ? r.addArticulation(0, n) : void 0 : void 0) : void 0
    }, n.prototype.addArticulations = function (t) {
      var n, i, o, a, r, l, u, c, h, d, p, f, m, v, w, g, b, y, x, V;
      if (s("addArticulations: ", t), f = _.last(this.staves), v = f.tab_notes, m = f.note_notes, _.isEmpty(v) || _.isEmpty(t)) return this.closeBends(0), void 0;
      for (o = _.last(v), a = !1, V = ["b", "s", "h", "p", "t", "T", "v", "V"], y = 0, x = V.length; x > y; y++) g = V[y], l = function () {
        var e, s, i;
        for (i = [], r = e = 0, s = t.length; s > e; r = ++e) n = t[r], null != n && n === g && i.push(r);
        return i
      }(), _.isEmpty(l) || ("b" === g && (a = !0), h = this.getPreviousNoteIndex(), -1 === h ? (p = null, d = null) : (p = v[h], w = function () {
        var t, n, s, i;
        for (s = o.getPositions(), i = [], r = t = 0, n = s.length; n > t; r = ++t) u = s[r], e.call(l, r) >= 0 && i.push(u.str);
        return i
      }(), b = function () {
        var t, n, s, i, o;
        for (s = p.getPositions(), o = [], r = t = 0, n = s.length; n > t; r = ++t) c = s[r], i = c.str, e.call(w, i) >= 0 && o.push(c.str);
        return o
      }(), d = function () {
        var t, n, s, i, o;
        for (s = p.getPositions(), o = [], r = t = 0, n = s.length; n > t; r = ++t) u = s[r], i = u.str, e.call(b, i) >= 0 && o.push(r);
        return o
      }(), i = function () {
        var t, n, s, i, a;
        for (s = o.getPositions(), a = [], r = t = 0, n = s.length; n > t; r = ++t) u = s[r], i = u.str, e.call(b, i) >= 0 && a.push(r);
        return a
      }()), null != f.tab && this.addTabArticulation(g, p, o, d, i), null != f.note && this.addStaveArticulation(g, m[h], _.last(m), d, i));
      return a ? void 0 : this.closeBends(0)
    }, n.prototype.addRest = function (t) {
      var e, n, i;
      return s("addRest: ", t), this.closeBends(), 0 === t.position ? this.addStaveNote({
        spec: ["r/4"],
        accidentals: [],
        is_rest: !0
      }) : (e = this.tuning.getNoteForFret(2 * (parseInt(t.position, 10) + 5), 6), this.addStaveNote({
        spec: [e],
        accidentals: [],
        is_rest: !0
      })), i = _.last(this.staves).tab_notes, "true" === this.customizations["tab-stems"] ? (n = new Vex.Flow.StaveNote({
        keys: [e || "r/4"],
        duration: this.current_duration + "r",
        clef: "treble",
        auto_stem: !1
      }), "d" === this.current_duration[this.current_duration.length - 1] && n.addDot(0), i.push(n)) : i.push(new Vex.Flow.GhostNote(this.current_duration))
    }, n.prototype.addChord = function (t, e, n) {
      var i, o, a, r, l, u, c, h, d, p, f, m, v, w, g, b, y, x, V, F, T, E, A, k, N, B, R, z, O, S, P, M, I;
      if (!_.isEmpty(t)) {
        for (s("addChord: ", t), k = _.last(this.staves), A = [], V = [], a = [], l = [], d = [], N = [], p = [], b = 0, h = _.first(t).string, c = 0, B = 0, O = t.length; O > B; B++) {
          if (w = t[B], b++, (null != w.abc || w.string !== h) && (c = 0, h = w.string), null == A[c] && (A[c] = [], V[c] = [], a[c] = [], N[c] = [], l[c] = [], d[c] = []), P = [null, null, null], m = P[0], v = P[1], o = P[2], x = null, null != w.abc) y = null != w.octave ? w.octave : w.string, M = this.getNoteForABC(w.abc, y), m = M[0], v = M[1], o = M[2], i = null != o ? o.split("_")[0] : "", x = "" + m + i, null == w.fret && (w.fret = "X");
          else {
            if (null == w.fret) throw new Vex.RERR("ArtistError", "No note specified");
            I = this.getNoteForFret(w.fret, w.string), m = I[0], v = I[1], o = I[2], x = this.tuning.getNoteForFret(w.fret, w.string).split("/")[0]
          }
          F = parseInt(v, 10) + this.current_octave_shift, u = null != w.time ? {
            time: w.time,
            dot: w.dot
          } : null, A[c].push("" + m + "/" + v), V[c].push("" + x + "/" + F), a[c].push(o), N[c].push({
            fret: w.fret,
            str: w.string
          }), null != w.articulation && l[c].push(w.articulation), p[c] = u, null != w.decorator && (d[c] = w.decorator), c++
        }
        for (f = R = 0, S = A.length; S > R; f = ++R) E = A[f], T = this.current_duration, null != p[f] && this.setDuration(p[f].time, p[f].dot), this.addTabNote(N[f], V[f]), null != k.note && this.addStaveNote({
          spec: E,
          accidentals: a[f],
          play_note: V[f]
        }), this.addArticulations(l[f]), null != d[f] && this.addDecorator(d[f]);
        if (null != e) {
          for (r = [], g = z = 1; b >= 1 ? b >= z : z >= b; g = b >= 1 ? ++z : --z) r.push(e);
          this.addArticulations(r)
        }
        return null != n ? this.addDecorator(n) : void 0
      }
    }, n.prototype.addNote = function (t) {
      return this.addChord([t])
    }, n.prototype.addTextVoice = function () {
      return _.last(this.staves).text_voices.push([])
    }, n.prototype.setTextFont = function (t) {
      var e;
      return null != t && (e = t.match(/([^-]*)-([^-]*)-([^.]*)/), null != e) ? (this.customizations["font-face"] = e[1], this.customizations["font-size"] = parseInt(e[2], 10), this.customizations["font-style"] = e[3]) : void 0
    }, n.prototype.addTextNote = function (t, e, n, s, i) {
      var o, a, r, l, u, c, h, d;
      if (null == e && (e = 0), null == n && (n = "center"), null == s && (s = !0), null == i && (i = !1), d = _.last(this.staves).text_voices, _.isEmpty(d)) throw new Vex.RERR("ArtistError", "Can't add text note without text voice");
      return a = this.customizations["font-face"], r = this.customizations["font-size"], l = this.customizations["font-style"], u = function () {
        switch (n) {
        case "center":
          return Vex.Flow.TextNote.Justification.CENTER;
        case "left":
          return Vex.Flow.TextNote.Justification.LEFT;
        case "right":
          return Vex.Flow.TextNote.Justification.RIGHT;
        default:
          return Vex.Flow.TextNote.Justification.CENTER
        }
      }(), o = i ? "b" : this.current_duration, h = {
        text: t,
        duration: o,
        smooth: s,
        ignore_ticks: i,
        font: {
          family: a,
          size: r,
          weight: l
        }
      }, "#" === t[0] && (h.glyph = t.slice(1)), c = new Vex.Flow.TextNote(h).setLine(e).setJustification(u), _.last(d).push(c)
    }, n.prototype.addVoice = function (t) {
      var e;
      return this.closeBends(), e = _.last(this.staves), null == e ? this.addStave(t) : (_.isEmpty(e.tab_notes) || (e.tab_voices.push(e.tab_notes), e.tab_notes = []), _.isEmpty(e.note_notes) ? void 0 : (e.note_voices.push(e.note_notes), e.note_notes = []))
    }, n.prototype.addStave = function (t, e) {
      var n, i, o, a, r, l;
      o = {
        tuning: "standard",
        clef: "treble",
        key: "C",
        notation: "tabstave" === t ? "false" : "true",
        tablature: "stave" === t ? "false" : "true",
        strings: 6
      }, _.extend(o, e), s("addStave: ", t, o), r = null, i = null, a = this.x + this.customizations["connector-space"], l = 40, "true" === o.notation && (i = new Vex.Flow.Stave(a, this.last_y, this.customizations.width - 20).addClef(o.clef).addKeySignature(o.key), null != o.time && i.addTimeSignature(o.time), this.last_y += i.getHeight() + this.options.note_stave_lower_spacing + parseInt(this.customizations["stave-distance"], 10), l = i.getNoteStartX(), this.current_clef = o.clef), "true" === o.tablature && (r = new Vex.Flow.TabStave(a, this.last_y, this.customizations.width - 20).setNumLines(o.strings).addTabGlyph().setNoteStartX(l), this.last_y += r.getHeight() + this.options.tab_stave_lower_spacing), this.closeBends(), n = Vex.Flow.Beam.getDefaultBeamGroups(o.time), this.staves.push({
        tab: r,
        note: i,
        tab_voices: [],
        note_voices: [],
        tab_notes: [],
        note_notes: [],
        text_voices: [],
        beam_groups: n
      }), this.tuning.setTuning(o.tuning), this.key_manager.setKey(o.key)
    }, n.prototype.runCommand = function (t, e, n) {
      var i;
      switch (null == e && (e = 0), null == n && (n = 0), s("runCommand: ", t), i = t.split(/\s+/), i[0]) {
      case "octave-shift":
        return this.current_octave_shift = parseInt(i[1], 10), s("Octave shift: ", this.current_octave_shift);
      default:
        throw new Vex.RERR("ArtistError", "Invalid command '" + i[0] + "' at line " + e + " column " + n)
      }
    }, n
  }()
}).call(this);
(function () {
  var t = [].slice,
    e = [].indexOf ||
  function (t) {
    for (var e = 0, r = this.length; r > e; e++) if (e in this && this[e] === t) return e;
    return -1
  };
  Vex.Flow.VexTab = function () {
    function r(t) {
      this.artist = t, this.reset()
    }
    var a, s;
    return r.DEBUG = !1, a = function () {
      var e;
      return e = 1 <= arguments.length ? t.call(arguments, 0) : [], Vex.Flow.VexTab.DEBUG ? "undefined" != typeof console && null !== console ? console.log.apply(console, ["(Vex.Flow.VexTab)"].concat(t.call(e))) : void 0 : void 0
    }, s = function (t, e) {
      return new Vex.RERR("ParseError", "" + e + " in line " + t._l + " column " + t._c)
    }, r.prototype.reset = function () {
      return this.valid = !1, this.elements = !1
    }, r.prototype.isValid = function () {
      return this.valid
    }, r.prototype.getArtist = function () {
      return this.artist
    }, r.prototype.parseStaveOptions = function (t) {
      var r, a, n, i, o, u, l, c, h, p, d, f, m;
      if (l = {}, null == t) return l;
      for (i = null, h = 0, p = t.length; p > h; h++) switch (u = t[h], n = function (t) {
        return s(u, t)
      }, l[u.key] = u.value, u.key) {
      case "notation":
      case "tablature":
        if (i = u, "true" !== (d = u.value) && "false" !== d) throw n("'" + u.key + "' must be 'true' or 'false'");
        break;
      case "key":
        if (!_.has(Vex.Flow.keySignature.keySpecs, u.value)) throw n("Invalid key signature '" + u.value + "'");
        break;
      case "clef":
        if (r = ["treble", "bass", "tenor", "alto", "percussion", "none"], f = u.value, e.call(r, f) < 0) throw n("'clef' must be one of " + r.join(", "));
        break;
      case "voice":
        if (c = ["top", "bottom", "new"], m = u.value, e.call(c, m) < 0) throw n("'voice' must be one of " + c.join(", "));
        break;
      case "time":
        try {
          new Vex.Flow.TimeSignature(u.value)
        } catch (v) {
          throw a = v, n("Invalid time signature: '" + u.value + "'")
        }
        break;
      case "tuning":
        try {
          new Vex.Flow.Tuning(u.value)
        } catch (v) {
          throw a = v, n("Invalid tuning: '" + u.value + "'")
        }
        break;
      case "strings":
        if (o = parseInt(u.value), 4 > o || o > 8) throw n("Invalid number of strings: " + o);
        break;
      default:
        throw n("Invalid option '" + u.key + "'")
      }
      if ("false" === l.notation && "false" === l.tablature) throw s(i, "Both 'notation' and 'tablature' can't be invisible");
      return l
    }, r.prototype.parseCommand = function (t) {
      return "bar" === t.command && this.artist.addBar(t.type), "tuplet" === t.command && this.artist.makeTuplets(t.params.tuplet, t.params.notes), "annotations" === t.command && this.artist.addAnnotations(t.params), "rest" === t.command && this.artist.addRest(t.params), "command" === t.command ? this.artist.runCommand(t.params, t._l, t._c) : void 0
    }, r.prototype.parseChord = function (t) {
      return a("parseChord:", t), this.artist.addChord(_.map(t.chord, function (t) {
        return _.pick(t, "time", "dot", "fret", "abc", "octave", "string", "articulation", "decorator")
      }), t.articulation, t.decorator)
    }, r.prototype.parseFret = function (t) {
      return this.artist.addNote(_.pick(t, "time", "dot", "fret", "string", "articulation", "decorator"))
    }, r.prototype.parseABC = function (t) {
      return this.artist.addNote(_.pick(t, "time", "dot", "fret", "abc", "octave", "string", "articulation", "decorator"))
    }, r.prototype.parseStaveElements = function (t) {
      var e, r, s, n;
      for (a("parseStaveElements:", t), n = [], r = 0, s = t.length; s > r; r++) e = t[r], e.time && this.artist.setDuration(e.time, e.dot), e.command && this.parseCommand(e), e.chord && this.parseChord(e), e.abc ? n.push(this.parseABC(e)) : e.fret ? n.push(this.parseFret(e)) : n.push(void 0);
      return n
    }, r.prototype.parseStaveText = function (t) {
      var e, r, a, n, i, o, u, l, c, h, p, d;
      for (_.isEmpty(t) || this.artist.addTextVoice(), o = 0, i = "center", u = !0, n = null, e = function (t) {
        return function () {
          return t.artist.addTextNote("", 0, i, !1, !0)
        }
      }(this), a = function (t) {
        return function (e) {
          var r, a;
          a = !1, "|" === e[0] && (a = !0, e = e.slice(1));
          try {
            return t.artist.addTextNote(e, o, i, u, a)
          } catch (n) {
            throw r = n, s(l, "Bad text or duration. Did you forget a comma?" + r)
          }
        }
      }(this), d = [], h = 0, p = t.length; p > h; h++) if (l = t[h], c = l.text.trim(), c.match(/\.font=.*/)) n = c.slice(6), d.push(this.artist.setTextFont(n));
      else if (":" === c[0]) d.push(this.artist.setDuration(c));
      else if ("." === c[0]) switch (r = c.slice(1)) {
      case "center":
      case "left":
      case "right":
        d.push(i = r);
        break;
      case "strict":
        d.push(u = !1);
        break;
      case "smooth":
        d.push(u = !0);
        break;
      case "bar":
      case "|":
        d.push(e());
        break;
      default:
        d.push(o = parseInt(c.slice(1), 10))
      } else "|" === c ? d.push(e()) : "++" === c.slice(0, 2) ? d.push(this.artist.addTextVoice()) : d.push(a(c));
      return d
    }, r.prototype.generate = function () {
      var t, e, r, a, n, i, o, u, l, c, h;
      for (l = this.elements, h = [], n = 0, o = l.length; o > n; n++) switch (a = l[n], a.element) {
      case "stave":
      case "tabstave":
        this.artist.addStave(a.element, this.parseStaveOptions(a.options)), null != a.notes && this.parseStaveElements(a.notes), null != a.text ? h.push(this.parseStaveText(a.text)) : h.push(void 0);
        break;
      case "voice":
        this.artist.addVoice(this.parseStaveOptions(a.options)), null != a.notes && this.parseStaveElements(a.notes), null != a.text ? h.push(this.parseStaveText(a.text)) : h.push(void 0);
        break;
      case "options":
        for (r = {}, c = a.params, i = 0, u = c.length; u > i; i++) e = c[i], r[e.key] = e.value;
        try {
          h.push(this.artist.setOptions(r))
        } catch (p) {
          throw t = p, s(a, t.message)
        }
        break;
      default:
        throw s(a, "Invalid keyword '" + a.element + "'")
      }
      return h
    }, r.prototype.parse = function (t) {
      var e, r;
      if (vextab_parser.parseError = function (t, e) {
        throw a("VexTab parse error: ", t, e), t = "Unexpected text '" + e.text + "' at line " + e.loc.first_line + " column " + e.loc.first_column + ".", new Vex.RERR("ParseError", t)
      }, null == t) throw new Vex.RERR("ParseError", "No code");
      return a("Parsing:\n" + t), r = function () {
        var r, a, s, n;
        for (s = t.split(/\r\n|\r|\n/), n = [], r = 0, a = s.length; a > r; r++) e = s[r], n.push(e.trim());
        return n
      }(), this.elements = vextab_parser.parse(r.join("\n")), this.elements && (this.generate(), this.valid = !0), this.elements
    }, r
  }()
}).call(this);