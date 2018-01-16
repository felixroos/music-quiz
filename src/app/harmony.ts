/**
 * Created by felix on 01.03.17.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class Harmony {

  constructor() {
  }

  public keys = [
    'C#', 'Db', 'D#', 'Eb', 'E#', 'Fb', 'F#', 'Gb', 'G#', 'Ab', 'A#', 'Bb', 'B#', 'Cb', 'C', 'D', 'E', 'F', 'G', 'A',
    'B'];

  public keys_sorted = ['C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'E#', 'Fb', 'F',
    'F#', 'Gb', 'G', 'G#', 'Ab', 'A', 'A#', 'Bb', 'B', 'B#', 'Cb'];

  public scales = [
    'ionisch',
    'dorisch',
    'phrygisch',
    'lydisch',
    'mixolydisch',
    'äolisch',
    'lokrisch'
  ];

  public intervals = [
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
    ['kleine None', 'übermäßige Oktave'], // b2
    ['große None', 'verminderte Dezime'], // 2
    ['kleine Dezime', 'übermäßige None'], // b3
    ['große Dezime', 'verminderte Undezime'], // 3
    ['Undezime', 'übermäßige Dezime'], // 4
    ['verminderte Duodezime', 'übermäßige Undezime'], // #4 / b5
    ['Duodezime', 'verminderte Tredezime'], // 5
    ['kleine Tredezime', 'übermäßige Duodezime'], // b6
    ['große Tredezime', 'verminderte Quartdezime'], // 6,
    ['kleine Quartdezime', 'übermäßige Tredezime'], // b7
    ['große Quartdezime', 'verminderte Quintdezime'], // 7
    ['Quintdezime', 'übermäßige Quartdezime'] // 8
  ];

  public chords = {
    triads: ['', '-', '+', 'o'],
    sevenths: ['^7', '-7', '+7', 'h7', 'o7'],
    ninths: ['^9', '-9', '+9', 'h9', 'o7'],
    elevenths: ['^11', '-11', '+11', 'h11', 'o11']
  };

  public tensions = ['b9', 'b11', 'b13', '#9', '#11', '#13'];

  public notes = [
    ['C', 'B#'], ['C#', 'Db'], ['D'], ['Eb', 'D#'], ['E', 'Fb'], ['F', 'E#'], ['F#', 'Gb'], ['G'], ['Ab', 'G#'], ['A'],
    ['Bb', 'A#'], ['B', 'Cb']];
  public steps = ['1', 'b2', '2', 'b3', '3', '4', '#4', '5', 'b6', '6', 'b7', '7'];
  public romans = ['I', 'bII', 'II', 'bIII', 'III', 'IV', '#IV', 'V', 'bVI', 'VI', 'bVII', 'VII'];

  public circle = ['1', '4', '7', '3', '6', '2', '5'];
  public circleProgressions = {
    'quintall dur': ['^7', '^7', 'h7', '-7', '-7', '-7', '7'],
    'quintall moll': ['-7', '-7', 'VII7', 'III^7', 'VI^7', 'IIh7', 'V7'],
  }; // TODO auto generate?

  public filters = [
    {
      title: 'I IV',
      test: (song) => {
        return this.findProgression([{
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
      test: (song) => {
        return this.findProgression([{
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
      test: (song) => {
        return this.findProgression([{
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
      test: (song) => {
        return this.findProgression([{
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
      test: (song) => {
        return this.findProgression([{
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
      test: (song) => {
        return this.findProgression([{
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
      test: (song) => {
        return this.findProgression([{
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
      test: (song) => {
        return this.findProgression([{
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
      test: (song) => {
        return this.findProgression([{
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
      test: (song) => {
        return this.findProgression([{
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
      test: (song) => {
        return this.findProgression([{
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
      test: (song) => {
        return this.findProgression([{
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
      test: (song) => {
        return this.findProgression([{
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
      test: (song) => {
        return this.findProgression([{
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
      test: (song) => {
        return this.findProgression([{
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
      test: (song) => {
        return this.findProgression([{
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

  // TODO getChordDensity => chords/measures
  // TODO getChordVariety => number of different chords / total chords
  // TODO get root material => e.g. d-7 => c (as II), bb (as III), g (as VI)
  // derived from circle of fourth
  // TODO getChordSubstitutes => get chords with triad relatives
  // TODO render chart with different analysis curves, x = time
  // harmonic flow (chords per measure)
  // tension => (how many lead tones / tensions etc)

  public getRootCircle(chord) {
    console.log('get root circle', chord);
    const symbol = this.getChordSymbol(chord);
    const root = this.getChordRoot(chord);
  }

  public getChordRoot(chord) {
    return this.keys.reduce(function (root, key) {
      if (!root && chord.indexOf(key) !== -1) {
        root = key;
      }
      return root;
    }, null);
  }

  public hasRoot(chord, root) { // TODO strict mode without enharmonics?
    if (Array.isArray(root)) {
      return this.hasRoot(chord, root[0]) || root.length === 1 || this.hasRoot(chord, root[1]);
    }
    return this.getChordRoot(chord).indexOf(root) !== -1;
  }

  public checkChord(chord, validation) {
    let res = true;
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
  }

  public getNoteIndex(note) {
    const step = Array.isArray(note) ? note : this.notes.find((s) => {
      return s.indexOf(note) !== -1;
    });
    return this.notes.indexOf(step);
  }

  public getRelation(note, root) {
    const indices = [this.getNoteIndex(root), this.getNoteIndex(note)];
    const diff = (indices[1] + 12 - indices[0]) % 12;
    return {
      step: this.steps[diff],
      roman: this.romans[diff]
    };
  }

  public getStep(note, step?) {
    step = step || '1';
    const index = this.getNoteIndex(note);
    const target = index + this.steps.indexOf(step);
    return this.notes[target % 12];
  }

  public complementaryStep(step) {
    return this.steps[this.steps.length - this.steps.indexOf(step)];
  }

  public getRomanStep(note, roman) {
    const index = this.getNoteIndex(note);
    const target = index + this.romans.indexOf(roman);
    return this.notes[target % 12];
  }

  // removes note from chord symbol
  public getChordSymbol(chord, keepTensions?) {
    this.keys.forEach((key) => {
      chord = chord.replace(key, '');
    });
    if (!keepTensions) {
      this.tensions.forEach((tension) => {
        chord = chord.replace(tension, '');
      });
    }
    return chord;
  }

  public getChordTensions(chord) {
    let plain = chord;
    this.tensions.forEach((tension) => {
      plain = plain.replace(tension, '');
    });
    return chord.replace(plain, '');
  }

  public getChordType(chord) {
    chord = this.getChordSymbol(chord);
    if (chord[0] === '-') {
      return 'minor';
    } else if (chord[0] === '^' || chord[0] === '2' || !chord[0]) {
      return 'major';
    } else if (chord[0] === '7' || chord[0] === '9' || chord.slice(0, 2) === '13' || chord.slice(0, 2) === '11') {
      return 'dominant';
    } else if (chord[0] === '6') {
      return '6';
    } else if (chord[0] === 'h') {
      return 'half diminished';
    } else if (chord[0] === 'o') {
      return 'diminished';
    } else if (chord[0] === '+') {
      return 'augmented';
    } else if (chord.indexOf('/') !== -1) {
      return '/';
    }
    return 'other';
    // TODO #11 b13 etc..
  }

  typeScales = {
    'minor': ['dorian', 'phrygian', ''],
    'major': ['ionian'],
    'dominant': ['mixolydian'],
    '6': [],
    'half diminished': [],
    'diminished': [],
    'augmented': []
  };

  getChords(song, compress?) {
    return song.music.measures.reduce((chords, measure) => {
      chords = chords.concat(measure);
      return chords;
    }, []).reduce((chords, chord) => {
      if (!compress || !chords.length || chords[chords.length - 1] !== chord) {
        chords.push(chord);
      }
      return chords;
    }, []);
  }

  public getMetaChords(song) {
    return song.music.measures.map((measure) => {
      return measure.map((chord) => {
        const meta = {
          chord: chord,
          symbol: this.getChordSymbol(chord),
          root: this.getChordRoot(chord),
          type: this.getChordType(chord),
          tensions: this.getChordTensions(chord),
          scales: []
        };
        meta.scales = this.typeScales[meta.type];
        return meta;
      });
    });
  }

  public findMetaProgression(progression, song, compress?) {
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

    const measures = this.getMetaChords(song);
    let step = 0;
    let latestChord;
    measures.forEach((measure) => {
      measure.map((metaChord) => {
        if (compress && latestChord === metaChord.chord) {
          return metaChord; // skip if same chord as last => harmonic redundancy
        }
        latestChord = metaChord.chord;
        if (metaChord.symbol === progression[step]) {
          step += 1;
          if (step === progression.length) {

          }
        } else {
          step = 0;
        }
        return metaChord;
      });
    });
  }

  public prepareProgression(progression, chord, step) {
    // determine root for current validation => relative to first chord
    if (step === 0) { // first chord
      progression.forEach((p) => delete p.root);
      progression[0].key = this.getStep(this.getChordRoot(chord), this.complementaryStep(progression[0].step));
    } else if (progression[step].step) {
      // use root of first chord validation
      progression[step].root = progression[0].key;
    }
  }

  public findProgression(progression, song, loop?) {
    // TODO how to include the loop? add first chord to end?
    const chords = this.getChords(song, true);

    if (loop) {
      // add first chord to end to be able to detect e.g. II V => I
      chords.push(chords[0]);
    }
    return chords.reduce((match, chord, index) => {
      this.prepareProgression(progression, chord, match.step);
      let valid = this.checkChord(chord, progression[match.step]);
      // validate chord, reset if no match
      if (!valid) { // if not valid=> check if beginning of new progression
        match.step = 0;
        this.prepareProgression(progression, chord, match.step);
        valid = this.checkChord(chord, progression[match.step]);
      }
      if (valid) { // match!
        match.step += 1;
        if (match.step === progression.length) { // is progression fully matched?
          const position = index - match.step + 1;
          match.instances.push({ // push progression instance
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
  }

  public randomItem(array: Array<any>, max: number = array.length): any {
    max = Math.min(array.length, max);
    max = Math.max(0, max);
    return array[Math.floor(Math.random() * max)];
  }

  public randomNote(): string {
    return this.randomItem(this.keys);
  }

  public randomScale(): string {
    return this.randomNote() + ' ' + this.randomItem(this.scales);
  }

  public randomInterval(all: boolean = true, max: number = 12): string {
    const interval = this.randomItem(this.intervals, max);
    const directions = ['aufwärts', 'abwärts'];
    return (all ? this.randomItem(interval) : interval[0]) + ' ' + this.randomItem(directions) + ' von ' + this.randomNote();
  }

  public randomChord(max: number = 2, inversions: boolean = true) {
    const type = this.randomItem(Object.keys(this.chords), max);
    const maxInversions = Object.keys(this.chords).indexOf(type) + 2;
    const inversion = Math.ceil(Math.random() * maxInversions);
    return this.randomNote() + this.randomItem(this.chords[type]) + (inversion > 1 ? ' => ' + inversion + '. Umkehrung' : '');
  }

  public randomRandom(): string {
    const random = [this.randomScale(), this.randomInterval(), this.randomChord()];
    return this.randomItem(random);
    // return this.randomChord();
  }
}
