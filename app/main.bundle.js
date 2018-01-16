webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-quiz></app-quiz>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  padding: 0;\n  margin: 0; }\n  ul li {\n    display: inline-block;\n    list-style: none;\n    opacity: 0.3;\n    padding: 5px;\n    transition: all .2s linear;\n    min-width: 25px;\n    margin-right: 2px;\n    text-align: center; }\n    ul li.active {\n      opacity: 1;\n      background: #92A0AC; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__harmony__ = __webpack_require__("../../../../../src/app/harmony.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quiz_quiz_component__ = __webpack_require__("../../../../../src/app/quiz/quiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toggle_chunk_toggle_chunk_component__ = __webpack_require__("../../../../../src/app/toggle-chunk/toggle-chunk.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__task_task_component__ = __webpack_require__("../../../../../src/app/task/task.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__quiz_quiz_component__["a" /* QuizComponent */],
                __WEBPACK_IMPORTED_MODULE_5__toggle_chunk_toggle_chunk_component__["a" /* ToggleChunkComponent */],
                __WEBPACK_IMPORTED_MODULE_6__task_task_component__["a" /* TaskComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__harmony__["a" /* Harmony */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/harmony.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Harmony; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by felix on 01.03.17.
 */


var Harmony = (function () {
    function Harmony() {
        var _this = this;
        this.keys = [
            'C#', 'Db', 'D#', 'Eb', 'E#', 'Fb', 'F#', 'Gb', 'G#', 'Ab', 'A#', 'Bb', 'B#', 'Cb', 'C', 'D', 'E', 'F', 'G', 'A',
            'B'
        ];
        this.keys_sorted = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'E#', 'Fb', 'F',
            'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B', 'B#', 'Cb'];
        this.scales = [
            'ionisch',
            'dorisch',
            'phrygisch',
            'lydisch',
            'mixolydisch',
            'äolisch',
            'lokrisch'
        ];
        this.intervals = [
            ['Prime', 'verminderte Sekunde'],
            ['kleine Sekunde'],
            ['große Sekunde', 'vermindete Terz'],
            ['kleine Terz', 'übermäßige Sekunde'],
            ['große Terz', 'verminderte Quarte'],
            ['Quarte', 'übermäßige Terz'],
            ['Tritonus', 'übermaßige Quarte', 'verminderte Quinte'],
            ['Quinte', 'verminderte Sexte'],
            ['kleine Sexte', 'übermäßige Quinte'],
            ['große Sexte', 'verminderte Septime'],
            ['kleine Septime', 'übermäßige Sexte'],
            ['große Septime', 'verminderte Oktave'],
            ['Oktave', 'übermäßige Septime'],
            ['kleine None', 'übermäßige Oktave'],
            ['große None', 'verminderte Dezime'],
            ['kleine Dezime', 'übermäßige None'],
            ['große Dezime', 'verminderte Undezime'],
            ['Undezime', 'übermäßige Dezime'],
            ['verminderte Duodezime', 'übermäßige Undezime'],
            ['Duodezime', 'verminderte Tredezime'],
            ['kleine Tredezime', 'übermäßige Duodezime'],
            ['große Tredezime', 'verminderte Quartdezime'],
            ['kleine Quartdezime', 'übermäßige Tredezime'],
            ['große Quartdezime', 'verminderte Quintdezime'],
            ['Quintdezime', 'übermäßige Quartdezime'] // 8
        ];
        this.chords = {
            triads: ['', '-', '+', 'o'],
            sevenths: ['^7', '-7', '+7', 'h7', 'o7'],
            ninths: ['^9', '-9', '+9', 'h9', 'o7'],
            elevenths: ['^11', '-11', '+11', 'h11', 'o11']
        };
        this.tensions = ['b9', 'b11', 'b13', '#9', '#11', '#13'];
        this.notes = [
            ['C', 'B#'], ['C#', 'Db'], ['D'], ['Eb', 'D#'], ['E', 'Fb'], ['F', 'E#'], ['F#', 'Gb'], ['G'], ['Ab', 'G#'], ['A'],
            ['Bb', 'A#'], ['B', 'Cb']
        ];
        this.steps = ['1', 'b2', '2', 'b3', '3', '4', '#4', '5', 'b6', '6', 'b7', '7'];
        this.romans = ['I', 'bII', 'II', 'bIII', 'III', 'IV', '#IV', 'V', 'bVI', 'VI', 'bVII', 'VII'];
        this.circle = ['1', '4', '7', '3', '6', '2', '5'];
        this.circleProgressions = {
            'quintall dur': ['^7', '^7', 'h7', '-7', '-7', '-7', '7'],
            'quintall moll': ['-7', '-7', 'VII7', 'III^7', 'VI^7', 'IIh7', 'V7'],
        }; // TODO auto generate?
        this.filters = [
            {
                title: 'I IV',
                test: function (song) {
                    return _this.findProgression([{
                            symbol: '^7',
                            step: '1'
                        }, {
                            symbol: '^7',
                            step: '4'
                        }], song, true);
                }
            },
            {
                title: 'I IV VII',
                test: function (song) {
                    return _this.findProgression([{
                            symbol: '^7',
                            step: '1'
                        }, {
                            symbol: '^7',
                            step: '4'
                        }, {
                            symbol: 'h7',
                            step: '7'
                        }], song, true);
                }
            },
            {
                title: 'IV VII III',
                test: function (song) {
                    return _this.findProgression([{
                            symbol: '^7',
                            step: '4'
                        }, {
                            symbol: 'h7',
                            step: '7'
                        }, {
                            symbol: '-7',
                            step: '3'
                        }], song, true);
                }
            },
            {
                title: 'IV VII III VI',
                test: function (song) {
                    return _this.findProgression([{
                            symbol: '^7',
                            step: '4'
                        }, {
                            symbol: 'h7',
                            step: '7'
                        }, {
                            symbol: '-7',
                            step: '3'
                        }, {
                            symbol: '-7',
                            step: '6'
                        }], song, true);
                }
            },
            {
                title: 'IV VII III VI moll',
                test: function (song) {
                    return _this.findProgression([{
                            symbol: '-7',
                            step: '4'
                        }, {
                            symbol: '7',
                            step: 'b7'
                        }, {
                            symbol: '^7',
                            step: '3'
                        }, {
                            symbol: '^7',
                            step: 'b6'
                        }], song, true);
                }
            },
            {
                title: 'VII III VI',
                test: function (song) {
                    return _this.findProgression([{
                            symbol: 'h7',
                            step: '7'
                        }, {
                            symbol: '-7',
                            step: '3'
                        }, {
                            symbol: '-7',
                            step: '6'
                        }], song, true);
                }
            },
            {
                title: 'VII III VI II',
                test: function (song) {
                    return _this.findProgression([{
                            symbol: 'h7',
                            step: '7'
                        }, {
                            symbol: '-7',
                            step: '3'
                        }, {
                            symbol: '-7',
                            step: '6'
                        }, {
                            symbol: '-7',
                            step: '2'
                        }], song, true);
                }
            },
            {
                title: 'III VI II',
                test: function (song) {
                    return _this.findProgression([{
                            symbol: '-7',
                            step: '3'
                        }, {
                            symbol: '-7',
                            step: '6'
                        }, {
                            symbol: '-7',
                            step: '2'
                        }], song, true);
                }
            },
            {
                title: 'II V',
                test: function (song) {
                    return _this.findProgression([{
                            symbol: '-7',
                            step: '2'
                        }, {
                            symbol: '7',
                            step: '5'
                        }], song, true);
                }
            },
            {
                title: 'V I',
                test: function (song) {
                    return _this.findProgression([{
                            symbol: '7',
                            step: '5'
                        }, {
                            symbol: '^7',
                            step: '1'
                        }], song, true);
                }
            },
            {
                title: 'II V I',
                test: function (song) {
                    return _this.findProgression([{
                            symbol: '-7',
                            step: '2'
                        }, {
                            symbol: '7',
                            step: '5'
                        }, {
                            symbol: '^7',
                            step: '1'
                        }], song, true);
                }
            },
            {
                title: 'II V I moll',
                test: function (song) {
                    return _this.findProgression([{
                            symbol: 'h7',
                            step: '2'
                        }, {
                            symbol: '7',
                            step: '5'
                        }, {
                            symbol: '-7',
                            step: '1'
                        }], song, true);
                }
            }, {
                title: 'VI II V Turnaround',
                test: function (song) {
                    return _this.findProgression([{
                            symbol: '-7',
                            step: '6'
                        }, {
                            symbol: '-7',
                            step: '2'
                        }, {
                            symbol: '7',
                            step: '5'
                        }], song, true);
                }
            }, {
                title: 'VI II V I Turnaround',
                test: function (song) {
                    return _this.findProgression([{
                            symbol: '-7',
                            step: '6'
                        }, {
                            symbol: '-7',
                            step: '2'
                        }, {
                            symbol: '7',
                            step: '5'
                        }, {
                            symbol: '^7',
                            step: '1'
                        }], song, true);
                }
            }, {
                title: 'I VI II V Turnaround',
                test: function (song) {
                    return _this.findProgression([{
                            symbol: '^7',
                            step: '1'
                        }, {
                            symbol: '-7',
                            step: '6'
                        }, {
                            symbol: '-7',
                            step: '2'
                        }, {
                            symbol: '7',
                            step: '5'
                        }], song, true);
                }
            }, {
                title: 'I VI II V I Turnaround',
                test: function (song) {
                    return _this.findProgression([{
                            symbol: '^7',
                            step: '1'
                        }, {
                            symbol: '-7',
                            step: '6'
                        }, {
                            symbol: '-7',
                            step: '2'
                        }, {
                            symbol: '7',
                            step: '5'
                        }, {
                            symbol: '^7',
                            step: '1'
                        }], song, true);
                }
            }
        ];
        this.typeScales = {
            'minor': ['dorian', 'phrygian', ''],
            'major': ['ionian'],
            'dominant': ['mixolydian'],
            '6': [],
            'half diminished': [],
            'diminished': [],
            'augmented': []
        };
    }
    // TODO getChordDensity => chords/measures
    // TODO getChordVariety => number of different chords / total chords
    // TODO get root material => e.g. d-7 => c (as II), bb (as III), g (as VI)
    // derived from circle of fourth
    // TODO getChordSubstitutes => get chords with triad relatives
    // TODO render chart with different analysis curves, x = time
    // harmonic flow (chords per measure)
    // tension => (how many lead tones / tensions etc)
    Harmony.prototype.getRootCircle = function (chord) {
        console.log('get root circle', chord);
        var symbol = this.getChordSymbol(chord);
        var root = this.getChordRoot(chord);
    };
    Harmony.prototype.getChordRoot = function (chord) {
        return this.keys.reduce(function (root, key) {
            if (!root && chord.indexOf(key) !== -1) {
                root = key;
            }
            return root;
        }, null);
    };
    Harmony.prototype.hasRoot = function (chord, root) {
        if (Array.isArray(root)) {
            return this.hasRoot(chord, root[0]) || root.length === 1 || this.hasRoot(chord, root[1]);
        }
        return this.getChordRoot(chord).indexOf(root) !== -1;
    };
    Harmony.prototype.checkChord = function (chord, validation) {
        var res = true;
        if (validation.symbol) {
            res = res && validation.symbol === this.getChordSymbol(chord);
            /*
             if (res) {
             console.debug('chord: ', chord, 'symbol', validation.symbol);
             }*/
        }
        if (validation.step && validation.root) {
            // console.debug('root', validation.root, 'step', validation.step);
            validation.root = this.getStep(validation.root, validation.step);
            // console.debug('= base root', validation.root);
        }
        if (validation.root) {
            // console.debug(chord, ' has root ', validation.root);
            res = res && this.hasRoot(chord, validation.root);
            if (res) {
                // console.debug('passed!');
            }
            // console.debug('chord', chord, 'root', validation.root, res);
        }
        return res;
    };
    Harmony.prototype.getNoteIndex = function (note) {
        var step = Array.isArray(note) ? note : this.notes.find(function (s) {
            return s.indexOf(note) !== -1;
        });
        return this.notes.indexOf(step);
    };
    Harmony.prototype.getRelation = function (note, root) {
        var indices = [this.getNoteIndex(root), this.getNoteIndex(note)];
        var diff = (indices[1] + 12 - indices[0]) % 12;
        return {
            step: this.steps[diff],
            roman: this.romans[diff]
        };
    };
    Harmony.prototype.getStep = function (note, step) {
        step = step || '1';
        var index = this.getNoteIndex(note);
        var target = index + this.steps.indexOf(step);
        return this.notes[target % 12];
    };
    Harmony.prototype.complementaryStep = function (step) {
        return this.steps[this.steps.length - this.steps.indexOf(step)];
    };
    Harmony.prototype.getRomanStep = function (note, roman) {
        var index = this.getNoteIndex(note);
        var target = index + this.romans.indexOf(roman);
        return this.notes[target % 12];
    };
    // removes note from chord symbol
    Harmony.prototype.getChordSymbol = function (chord, keepTensions) {
        this.keys.forEach(function (key) {
            chord = chord.replace(key, '');
        });
        if (!keepTensions) {
            this.tensions.forEach(function (tension) {
                chord = chord.replace(tension, '');
            });
        }
        return chord;
    };
    Harmony.prototype.getChordTensions = function (chord) {
        var plain = chord;
        this.tensions.forEach(function (tension) {
            plain = plain.replace(tension, '');
        });
        return chord.replace(plain, '');
    };
    Harmony.prototype.getChordType = function (chord) {
        chord = this.getChordSymbol(chord);
        if (chord[0] === '-') {
            return 'minor';
        }
        else if (chord[0] === '^' || chord[0] === '2' || !chord[0]) {
            return 'major';
        }
        else if (chord[0] === '7' || chord[0] === '9' || chord.slice(0, 2) === '13' || chord.slice(0, 2) === '11') {
            return 'dominant';
        }
        else if (chord[0] === '6') {
            return '6';
        }
        else if (chord[0] === 'h') {
            return 'half diminished';
        }
        else if (chord[0] === 'o') {
            return 'diminished';
        }
        else if (chord[0] === '+') {
            return 'augmented';
        }
        else if (chord.indexOf('/') !== -1) {
            return '/';
        }
        return 'other';
        // TODO #11 b13 etc..
    };
    Harmony.prototype.getChords = function (song, compress) {
        return song.music.measures.reduce(function (chords, measure) {
            chords = chords.concat(measure);
            return chords;
        }, []).reduce(function (chords, chord) {
            if (!compress || !chords.length || chords[chords.length - 1] !== chord) {
                chords.push(chord);
            }
            return chords;
        }, []);
    };
    Harmony.prototype.getMetaChords = function (song) {
        var _this = this;
        return song.music.measures.map(function (measure) {
            return measure.map(function (chord) {
                var meta = {
                    chord: chord,
                    symbol: _this.getChordSymbol(chord),
                    root: _this.getChordRoot(chord),
                    type: _this.getChordType(chord),
                    tensions: _this.getChordTensions(chord),
                    scales: []
                };
                meta.scales = _this.typeScales[meta.type];
                return meta;
            });
        });
    };
    Harmony.prototype.findMetaProgression = function (progression, song, compress) {
        /*
         progression:
         [{
         symbol: '-7',
         step: '2'
         }, {
         symbol: '7',
         step: '5'
         }, {
         symbol: '^7',
         step: '1'
         }]
         */
        var measures = this.getMetaChords(song);
        var step = 0;
        var latestChord;
        measures.forEach(function (measure) {
            measure.map(function (metaChord) {
                if (compress && latestChord === metaChord.chord) {
                    return metaChord; // skip if same chord as last => harmonic redundancy
                }
                latestChord = metaChord.chord;
                if (metaChord.symbol === progression[step]) {
                    step += 1;
                    if (step === progression.length) {
                    }
                }
                else {
                    step = 0;
                }
                return metaChord;
            });
        });
    };
    Harmony.prototype.prepareProgression = function (progression, chord, step) {
        // determine root for current validation => relative to first chord
        if (step === 0) {
            progression.forEach(function (p) { return delete p.root; });
            progression[0].key = this.getStep(this.getChordRoot(chord), this.complementaryStep(progression[0].step));
        }
        else if (progression[step].step) {
            // use root of first chord validation
            progression[step].root = progression[0].key;
        }
    };
    Harmony.prototype.findProgression = function (progression, song, loop) {
        var _this = this;
        // TODO how to include the loop? add first chord to end?
        var chords = this.getChords(song, true);
        if (loop) {
            // add first chord to end to be able to detect e.g. II V => I
            chords.push(chords[0]);
        }
        return chords.reduce(function (match, chord, index) {
            _this.prepareProgression(progression, chord, match.step);
            var valid = _this.checkChord(chord, progression[match.step]);
            // validate chord, reset if no match
            if (!valid) {
                match.step = 0;
                _this.prepareProgression(progression, chord, match.step);
                valid = _this.checkChord(chord, progression[match.step]);
            }
            if (valid) {
                match.step += 1;
                if (match.step === progression.length) {
                    var position = index - match.step + 1;
                    match.instances.push({
                        position: position,
                        progression: chords.slice(position, position + progression.length)
                    });
                    match.score += 1;
                    match.step = 0; // reset step
                }
            }
            return match;
        }, {
            step: 0,
            chords: chords,
            instances: [],
            score: 0
        });
    };
    Harmony.prototype.randomItem = function (array, max) {
        if (max === void 0) { max = array.length; }
        max = Math.min(array.length, max);
        max = Math.max(0, max);
        return array[Math.floor(Math.random() * max)];
    };
    Harmony.prototype.randomNote = function () {
        return this.randomItem(this.keys);
    };
    Harmony.prototype.randomScale = function () {
        return this.randomNote() + ' ' + this.randomItem(this.scales);
    };
    Harmony.prototype.randomInterval = function (all, max) {
        if (all === void 0) { all = true; }
        if (max === void 0) { max = 12; }
        var interval = this.randomItem(this.intervals, max);
        var directions = ['aufwärts', 'abwärts'];
        return (all ? this.randomItem(interval) : interval[0]) + ' ' + this.randomItem(directions) + ' von ' + this.randomNote();
    };
    Harmony.prototype.randomChord = function (max, inversions) {
        if (max === void 0) { max = 2; }
        if (inversions === void 0) { inversions = true; }
        var type = this.randomItem(Object.keys(this.chords), max);
        var maxInversions = Object.keys(this.chords).indexOf(type) + 2;
        var inversion = Math.ceil(Math.random() * maxInversions);
        return this.randomNote() + this.randomItem(this.chords[type]) + (inversion > 1 ? ' => ' + inversion + '. Umkehrung' : '');
    };
    Harmony.prototype.randomRandom = function () {
        var random = [this.randomScale(), this.randomInterval(), this.randomChord()];
        return this.randomItem(random);
        // return this.randomChord();
    };
    Harmony = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Harmony);
    return Harmony;
}());



/***/ }),

/***/ "../../../../../src/app/quiz/quiz.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"divided menu\">\n  <li *ngFor=\"let task of tasks\" [class.active]=\"isActive(task)\">\n    <a (click)=\"setTask(task)\">{{task.label}}</a>\n  </li>\n  <li [class.active]=\"showSettings\">\n    <a (click)=\"showSettings=!showSettings\">Einstellungen</a>\n  </li>\n</ul>\n<app-task [task]=\"task\"></app-task>\n<ul [hidden]=\"!showSettings\" class=\"menu\">\n  <app-toggle-chunk [chunk]=\"chunks.notes\"></app-toggle-chunk>\n  <app-toggle-chunk [chunk]=\"chunks.scales\"></app-toggle-chunk>\n  <app-toggle-chunk [chunk]=\"chunks.intervals\"></app-toggle-chunk>\n  <app-toggle-chunk [chunk]=\"chunks.directions\"></app-toggle-chunk>\n  <app-toggle-chunk [chunk]=\"chunks.inversions\"></app-toggle-chunk>\n  <app-toggle-chunk [chunk]=\"chunks.steps\"></app-toggle-chunk>\n  <app-toggle-chunk [chunk]=\"chunks.triads\"></app-toggle-chunk>\n  <app-toggle-chunk [chunk]=\"chunks.sevenths\"></app-toggle-chunk>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/quiz/quiz.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/quiz/quiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__harmony__ = __webpack_require__("../../../../../src/app/harmony.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_chunk_chunks__ = __webpack_require__("../../../../../src/app/toggle-chunk/chunks.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_tasks__ = __webpack_require__("../../../../../src/app/task/tasks.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizComponent = (function () {
    function QuizComponent(harmony) {
        this.harmony = harmony;
        this.chunks = __WEBPACK_IMPORTED_MODULE_2__toggle_chunk_chunks__["a" /* chunks */];
        this.tasks = __WEBPACK_IMPORTED_MODULE_3__task_tasks__["a" /* tasks */];
        this.showSettings = false;
    }
    QuizComponent.prototype.isActive = function (task) {
        return this.task === task;
    };
    QuizComponent.prototype.setTask = function (task) {
        this.task = task;
        task.ask();
    };
    QuizComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-quiz',
            template: __webpack_require__("../../../../../src/app/quiz/quiz.component.html"),
            styles: [__webpack_require__("../../../../../src/app/quiz/quiz.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__harmony__["a" /* Harmony */]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task/task.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"task\">\n  <h1>{{task.question}}</h1>\n  <!-- <app-toggle-chunk *ngFor=\"let pool of task.pools\" [pool]=\"pool\" [empty]=\"true\" [hidePresets]=\"true\"></app-toggle-chunk> -->\n  <ul>\n    <li>\n      <a (click)=\"nextQuestion()\">Weiter</a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/task/task.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task__ = __webpack_require__("../../../../../src/app/task/task.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_chunk_toggle_chunk_component__ = __webpack_require__("../../../../../src/app/toggle-chunk/toggle-chunk.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TaskComponent = (function () {
    function TaskComponent() {
    }
    TaskComponent.prototype.ngOnInit = function () { };
    TaskComponent.prototype.nextQuestion = function () {
        if (this.task) {
            this.task.ask();
            this.chunks.toArray().forEach(function (component) {
                component.chunk.clear();
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__task__["a" /* Task */])
    ], TaskComponent.prototype, "task", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_2__toggle_chunk_toggle_chunk_component__["a" /* ToggleChunkComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* QueryList */])
    ], TaskComponent.prototype, "chunks", void 0);
    TaskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-task',
            template: __webpack_require__("../../../../../src/app/task/task.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TaskComponent);
    return TaskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task/task.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Task; });
var Task = (function () {
    function Task(label, generator, pools) {
        this.label = label;
        this.generator = generator;
        this.pools = pools.map(function (pool) { return [].concat(pool); });
    }
    Task.prototype.ask = function () {
        this.question = this.generator();
    };
    return Task;
}());



/***/ }),

/***/ "../../../../../src/app/task/tasks.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tasks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__ = __webpack_require__("../../../../../src/app/toggle-chunk/chunks.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task__ = __webpack_require__("../../../../../src/app/task/task.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggle_chunk_toggle_chunk__ = __webpack_require__("../../../../../src/app/toggle-chunk/toggle-chunk.ts");



function randomChain(b, indices) {
    return b.reduce(function (results, current, i) {
        var preset = results.length ? current.presets.find(function (p) { return p.label === results[0]; }) : null;
        results.unshift(preset ? current.randomItem(current.renderPreset(preset)) :
            current.randomItem(indices ? current.renderSynonyms(indices[i]) : current.selection)); // with indices, you can shift the default index for a chunk (e.g. moll instead of -)
        return results;
    }, []);
}
function randomString(input) {
    return input.map(function (element) { return element instanceof __WEBPACK_IMPORTED_MODULE_2__toggle_chunk_toggle_chunk__["a" /* ToggleChunk */] ? element.randomItem() : element; }).join('') + '?';
}
var tasks = [
    new __WEBPACK_IMPORTED_MODULE_1__task__["a" /* Task */]('Intervalle', function () {
        return randomString([__WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes, ' ', __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].intervals, ' ', __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].directions]);
    }, []),
    new __WEBPACK_IMPORTED_MODULE_1__task__["a" /* Task */]('Interval bestimmen', function () {
        return randomString(['Interval von ', __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes, ' nach ', __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes]);
    }, []),
    new __WEBPACK_IMPORTED_MODULE_1__task__["a" /* Task */]('Töne von Skalen', function () {
        return randomString(['Töne von ', __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes, ' ', __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].scales]);
    }, []),
    new __WEBPACK_IMPORTED_MODULE_1__task__["a" /* Task */]('Vorzeichen von Skalen', function () {
        return randomString(['Vorzeichen von ', __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes, ' ', __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].scales]);
    }, []),
    new __WEBPACK_IMPORTED_MODULE_1__task__["a" /* Task */]('Mollparallelen', function () {
        return randomString(['Mollparallele von ', __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes]);
    }, []),
    new __WEBPACK_IMPORTED_MODULE_1__task__["a" /* Task */]('Stufe in Skala', function () {
        var results = randomChain([__WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].scales, __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].steps]);
        var note = __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes.randomItem();
        return results[0] + " in " + note + " " + results[1];
    }, [__WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes.pool]),
    new __WEBPACK_IMPORTED_MODULE_1__task__["a" /* Task */]('Stufe in Dreiklang', function () {
        var results = randomChain([__WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].triads, __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].steps], [0, 1]);
        var note = __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes.randomItem();
        return results[0] + " in " + note + results[1];
    }, [__WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes.pool]),
    new __WEBPACK_IMPORTED_MODULE_1__task__["a" /* Task */]('Stufe in Vierklang', function () {
        var results = randomChain([__WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].sevenths, __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].steps]);
        var note = __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes.randomItem();
        return results[0] + " in " + note + results[1];
    }, [__WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes.pool]),
    new __WEBPACK_IMPORTED_MODULE_1__task__["a" /* Task */]('Dreiklang', function () {
        var i = __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].inversions;
        var note = __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes.randomItem();
        var triad = __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].triads.randomItem(__WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].triads.renderSynonyms(0));
        var inversion = i.randomItem(i.renderPreset(i.presets.find(function (p) { return p.label === 'Dreiklang'; })));
        return "" + note + triad + " " + inversion;
    }, [__WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes.pool, __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes.pool, __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes.pool]),
    new __WEBPACK_IMPORTED_MODULE_1__task__["a" /* Task */]('Dreiklang mit tiefstem Ton', function () {
        var i = __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].inversions;
        var note = __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes.randomItem();
        var triad = __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].triads.randomItem();
        var inversion = i.randomItem(i.renderPreset(i.presets.find(function (p) { return p.label === 'Dreiklang'; })));
        return triad + " " + inversion + ", tiefster Ton " + note;
    }, [__WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes.pool, __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes.pool, __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes.pool]),
    new __WEBPACK_IMPORTED_MODULE_1__task__["a" /* Task */]('Vierklang', function () {
        var i = __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].inversions;
        var note = __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes.randomItem();
        var seventh = __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].sevenths.randomItem();
        var inversion = i.randomItem(i.renderPreset(i.presets.find(function (p) { return p.label === 'Vierklang'; })));
        return "" + note + seventh + " " + inversion;
    }, [__WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes.pool, __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes.pool, __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes.pool, __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_chunks__["a" /* chunks */].notes.pool])
];


/***/ }),

/***/ "../../../../../src/app/toggle-chunk/chunks.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return chunks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_toggle_chunk__ = __webpack_require__("../../../../../src/app/toggle-chunk/toggle-chunk.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__harmony__ = __webpack_require__("../../../../../src/app/harmony.ts");


var harmony = new __WEBPACK_IMPORTED_MODULE_1__harmony__["a" /* Harmony */]();
var intervals = harmony.intervals.map(function (interval) { return interval[0]; }).slice(0, 12);
var chunks = {
    notes: new __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_toggle_chunk__["a" /* ToggleChunk */]('Noten', harmony.keys_sorted, [
        {
            label: 'Wichtigste',
            filter: function (notes) {
                return notes.map(function (note) { return [
                    'C#', 'D#', 'E#', 'Gb', 'A#', 'B#', 'Cb', 'Fb'
                ].indexOf(note) === -1 ? note : false; });
            },
            default: true
        },
        {
            label: 'Gerade',
            filter: function (notes) {
                return notes.filter(function (note) { return note.length === 1; });
            }
        },
        {
            label: 'Keine Verwechslungen',
            filter: function (notes) {
                return notes.map(function (note) { return [
                    'E#', 'Fb', 'B#', 'Cb'
                ].indexOf(note) === -1 ? note : false; });
            }
        },
        {
            label: 'Flats',
            filter: function (notes) {
                return notes.map(function (note) { return note.indexOf('b') !== -1 ? note : false; });
            },
        },
        {
            label: 'Sharps',
            filter: function (notes) {
                return notes.map(function (note) { return note.indexOf('#') !== -1 ? note : false; });
            }
        }
    ]),
    scales: new __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_toggle_chunk__["a" /* ToggleChunk */]('Skalen', harmony.scales, [
        {
            label: 'Dur',
            use: ['lydisch', 'ionisch', 'mixolydisch']
        },
        {
            label: 'Moll',
            use: ['dorisch', 'äolisch', 'phrygisch', 'lokrisch']
        }
    ]),
    directions: new __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_toggle_chunk__["a" /* ToggleChunk */]('Richtungen', ['nach oben', 'nach unten']),
    intervals: new __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_toggle_chunk__["a" /* ToggleChunk */]('Intervalle', intervals, [
        {
            label: 'Ohne Prime',
            filter: function (items) { return items.map(function (interval) { return interval !== 'Prime' ? interval : false; }); },
            default: true
        },
        {
            label: 'Dur',
            use: ['Prime', 'große Sekunde', 'große Terz', 'Quarte', 'Quinte', 'große Sexte', 'große Septime'],
        },
        {
            label: 'Moll',
            use: ['Prime', 'kleine Sekunde', 'kleine Terz', 'Quarte', 'Quinte', 'kleine Sexte', 'kleine Septime']
        }
    ]),
    inversions: new __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_toggle_chunk__["a" /* ToggleChunk */]('Umkehrungen', ['Grundstellung', '1. Umkehrung', '2. Umkehrung', '3. Umkehrung'], [
        {
            label: 'Dreiklang',
            use: ['Grundstellung', '1. Umkehrung', '2. Umkehrung']
        },
        {
            label: 'Vierklang',
            use: ['Grundstellung', '1. Umkehrung', '2. Umkehrung', '3. Umkehrung']
        }
    ]),
    steps: new __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_toggle_chunk__["a" /* ToggleChunk */]('Stufen', [
        '1',
        ['b2', 'b9'],
        ['2', '9'],
        'b3',
        '3',
        ['4', '11'],
        ['#4', '#11', 'b5'],
        '5',
        ['b13', '#5'],
        '13',
        'b7',
        '7'
    ], [
        {
            label: 'lydisch',
            use: ['1', '9', '3', '#11', '5', '13', '7']
        },
        {
            label: 'ionisch',
            use: ['1', '9', '3', '11', '5', '13', '7']
        },
        {
            label: 'mixolydisch',
            use: ['1', '9', '3', '11', '5', '13', 'b7']
        },
        {
            label: 'dorisch',
            use: ['1', '9', 'b3', '11', '5', '13', 'b7']
        },
        {
            label: 'äolisch',
            use: ['1', '9', 'b3', '11', '5', 'b6', 'b7']
        },
        {
            label: 'phrygisch',
            use: ['1', 'b9', 'b3', '11', '5', 'b6', 'b7']
        },
        {
            label: 'lokrisch',
            use: ['1', 'b9', 'b3', '11', 'b5', 'b13', 'b7']
        },
        {
            label: '^',
            use: ['1', '3', '5']
        },
        {
            label: '-',
            use: ['1', 'b3', '5']
        },
        {
            label: '+',
            use: ['1', '3', '#5']
        },
        {
            label: 'o',
            use: ['1', 'b3', 'b5']
        },
        {
            label: '^7',
            use: ['1', '3', '5', '7']
        },
        {
            label: '7',
            use: ['1', '3', '5', 'b7']
        },
        {
            label: '-7',
            use: ['1', 'b3', '5', 'b7']
        },
        {
            label: '+7',
            use: ['1', '3', '#5', 'b7']
        },
        {
            label: 'h7',
            use: ['1', 'b3', 'b5', 'b7']
        },
        {
            label: 'o7',
            use: ['1', 'b3', 'b5', '13']
        },
    ]),
    triads: new __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_toggle_chunk__["a" /* ToggleChunk */]('Dreiklänge', [['^', 'dur'], ['-', 'moll'], ['+', 'übermäßig'], ['o', 'vermindert']], [], null, 1),
    sevenths: new __WEBPACK_IMPORTED_MODULE_0__toggle_chunk_toggle_chunk__["a" /* ToggleChunk */]('Vierklänge', ['^7', '7', '-7', '+7', 'h7', 'o7'])
};


/***/ }),

/***/ "../../../../../src/app/toggle-chunk/toggle-chunk.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3 *ngIf=\"chunk.label\">{{chunk.items().length}} / {{chunk.pool.length}} {{chunk.label}}</h3>\n  <ul class=\"presets\" [hidden]=\"hidePresets\">\n    <li *ngFor=\"let preset of chunk.presets\" (click)=\"chunk.usePreset(preset)\" [class.active]=\"chunk.isPresetActive(preset)\">\n      {{preset?.label}}\n    </li>\n  </ul>\n  <div>\n    <ul>\n      <li *ngFor=\"let item of chunk.pool;let i = index\" (click)=\"chunk.toggle(item, i)\" [class.active]=\"chunk.isActive(item)\">\n        {{chunk.getItemLabel(item)}}\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/toggle-chunk/toggle-chunk.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host div ul {\n  padding: 0;\n  margin: 0; }\n  :host div ul li {\n    display: inline-block;\n    list-style: none;\n    opacity: 0.3;\n    padding: 5px;\n    transition: all .2s linear;\n    min-width: 25px;\n    min-height: 25px;\n    margin-right: 2px;\n    text-align: center;\n    cursor: pointer;\n    margin: 1px; }\n    :host div ul li.active {\n      opacity: 1;\n      background: #CBB885; }\n  :host div ul.presets li.active {\n    background: #A1998A; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/toggle-chunk/toggle-chunk.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleChunkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggle_chunk__ = __webpack_require__("../../../../../src/app/toggle-chunk/toggle-chunk.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToggleChunkComponent = (function () {
    function ToggleChunkComponent() {
        this.pool = [];
        this.label = '';
        this.presets = [];
        this.expand = true;
    }
    ToggleChunkComponent.prototype.ngOnInit = function () {
        this.chunk = this.chunk || new __WEBPACK_IMPORTED_MODULE_1__toggle_chunk__["a" /* ToggleChunk */](this.label, this.pool, this.presets, this.selection);
        if (this.empty) {
            this.chunk.clear();
        }
        if (this.preset) {
            this.chunk.usePreset(this.preset);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ToggleChunkComponent.prototype, "pool", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ToggleChunkComponent.prototype, "selection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ToggleChunkComponent.prototype, "label", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ToggleChunkComponent.prototype, "presets", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ToggleChunkComponent.prototype, "preset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ToggleChunkComponent.prototype, "hidePresets", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ToggleChunkComponent.prototype, "empty", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ToggleChunkComponent.prototype, "chunk", void 0);
    ToggleChunkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-toggle-chunk',
            template: __webpack_require__("../../../../../src/app/toggle-chunk/toggle-chunk.component.html"),
            styles: [__webpack_require__("../../../../../src/app/toggle-chunk/toggle-chunk.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToggleChunkComponent);
    return ToggleChunkComponent;
}());



/***/ }),

/***/ "../../../../../src/app/toggle-chunk/toggle-chunk.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleChunk; });
var ToggleChunk = (function () {
    function ToggleChunk(label, pool, presets, selection, defaultIndex) {
        if (pool === void 0) { pool = []; }
        if (presets === void 0) { presets = []; }
        if (defaultIndex === void 0) { defaultIndex = 0; }
        var _this = this;
        this.label = label;
        this.pool = pool;
        this.presets = presets;
        this.selection = selection;
        this.defaultIndex = defaultIndex;
        if (this.presets.length) {
            this.presets = [{
                    label: 'Alle',
                    filter: function () { return [].concat(_this.pool.map(function (i) { return Array.isArray(i) ? i[defaultIndex] : i; })); }
                }].concat(this.presets);
            if (this.presets.find(function (p) { return p.default; })) {
                this.selection = this.renderPreset(this.presets.find(function (p) { return p.default; }));
            }
        }
        if (!this.selection) {
            this.selection = [].concat(this.pool.map(function (i) { return Array.isArray(i) ? i[defaultIndex] : i; }));
        }
    }
    ToggleChunk.prototype.containsSynonym = function (pool, synonyms) {
        if (!synonyms) {
            return;
        }
        return synonyms.reduce(function (match, synonym) {
            return match || pool.indexOf(synonym) !== -1 ? synonym : false;
        }, false);
    };
    ToggleChunk.prototype.isActive = function (thing) {
        if (Array.isArray(thing)) {
            return this.containsSynonym(this.selection, thing);
        }
        return this.selection.indexOf(thing) !== -1;
    };
    ToggleChunk.prototype.items = function () {
        return this.selection.filter(function (i) { return !!i; });
    };
    ToggleChunk.prototype.getItemLabel = function (item) {
        if (typeof item === 'string') {
            return item;
        }
        if (Array.isArray(item)) {
            return item[this.defaultIndex];
        }
    };
    ToggleChunk.prototype.toggle = function (thing, index) {
        if (Array.isArray(thing)) {
            this.selection[index] = !this.containsSynonym(this.selection, thing) ? thing[this.defaultIndex] : false;
        }
        else if (typeof thing === 'string') {
            this.selection[index] = !this.selection[index] ? thing : false;
        }
    };
    ToggleChunk.prototype.clear = function () {
        this.selection = [];
    };
    ToggleChunk.prototype.use = function (items) {
        this.selection = this.pool.map(function (i) { return items.indexOf(i) !== -1 ? i : false; });
    };
    ToggleChunk.prototype.renderSynonyms = function (index) {
        var _this = this;
        return this.pool.map(function (item) {
            if (typeof item === 'string') {
                return _this.selection.indexOf(item) !== -1 ? item : false;
            }
            if (_this.containsSynonym(_this.selection, item)) {
                return item[index];
            }
        }).filter(function (item) { return !!item; });
    };
    ToggleChunk.prototype.renderPreset = function (preset) {
        var _this = this;
        if (!preset) {
            return;
        }
        if (preset.filter) {
            return preset.filter(this.pool);
        }
        if (preset.use) {
            return this.pool.map(function (i) {
                if (typeof i === 'string') {
                    return preset.use.indexOf(i) !== -1 ? i : false;
                }
                else if (Array.isArray(i)) {
                    return _this.containsSynonym(preset.use, i);
                }
            });
        }
    };
    ToggleChunk.prototype.usePreset = function (preset) {
        this.selection = this.renderPreset(preset);
    };
    ToggleChunk.prototype.isPresetActive = function (preset) {
        var _this = this;
        if (!preset) {
            return;
        }
        var toEqual = this.renderPreset(preset);
        return toEqual.reduce(function (equals, item, index) {
            return equals && _this.selection[index] === item;
        }, true) && toEqual.filter(function (i) { return !!i; }).length === this.selection.filter(function (i) { return !!i; }).length;
    };
    ToggleChunk.prototype.randomItems = function (n, all) {
        if (n === void 0) { n = 1; }
        if (all === void 0) { all = false; }
        this.use(this.randomize(n, all));
    };
    ToggleChunk.prototype.randomItem = function (selection) {
        if (selection === void 0) { selection = this.selection; }
        return this.randomize(1, selection)[0];
    };
    ToggleChunk.prototype.shuffle = function (a) {
        for (var i = a.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [a[j], a[i]], a[i] = _a[0], a[j] = _a[1];
        }
        return a;
        var _a;
    };
    ToggleChunk.prototype.randomize = function (n, selection) {
        if (n === void 0) { n = 1; }
        if (selection === void 0) { selection = this.selection; }
        return this.shuffle([].concat(selection.filter(function (i) { return !!i; }))).slice(0, n);
    };
    return ToggleChunk;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map