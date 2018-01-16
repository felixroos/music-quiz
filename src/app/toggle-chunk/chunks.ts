import { ToggleChunk } from '../toggle-chunk/toggle-chunk';
import { Harmony } from '../harmony';
const harmony = new Harmony();
const intervals = harmony.intervals.map(interval => interval[0]).slice(0, 12);

export const chunks = {
    notes: new ToggleChunk('Noten', harmony.keys_sorted, [
        {
            label: 'Wichtigste',
            filter: (notes) => {
                return notes.map(note => [
                    'C#', 'D#', 'E#', 'Gb', 'A#', 'B#', 'Cb', 'Fb'
                ].indexOf(note) === -1 ? note : false);
            },
            default: true
        },
        {
            label: 'Gerade',
            filter: (notes) => {
                return notes.filter(note => note.length === 1);
            }
        },
        {
            label: 'Keine Verwechslungen',
            filter: (notes) => {
                return notes.map(note => [
                    'E#', 'Fb', 'B#', 'Cb'
                ].indexOf(note) === -1 ? note : false);
            }
        },
        {
            label: 'Flats',
            filter: (notes) => {
                return notes.map(note => note.indexOf('b') !== -1 ? note : false);
            },
        },
        {
            label: 'Sharps',
            filter: (notes) => {
                return notes.map(note => note.indexOf('#') !== -1 ? note : false);
            }
        }]),
    scales: new ToggleChunk('Skalen', harmony.scales, [
        {
            label: 'Dur',
            use: ['lydisch', 'ionisch', 'mixolydisch']
        },
        {
            label: 'Moll',
            use: ['dorisch', 'äolisch', 'phrygisch', 'lokrisch']
        }
    ]),
    directions: new ToggleChunk('Richtungen', ['nach oben', 'nach unten']),
    intervals: new ToggleChunk('Intervalle', intervals, [
        {
            label: 'Ohne Prime',
            filter: (items) => items.map(interval => interval !== 'Prime' ? interval : false),
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
    inversions: new ToggleChunk('Umkehrungen', ['Grundstellung', '1. Umkehrung', '2. Umkehrung', '3. Umkehrung'], [
        {
            label: 'Dreiklang',
            use: ['Grundstellung', '1. Umkehrung', '2. Umkehrung']
        },
        {
            label: 'Vierklang',
            use: ['Grundstellung', '1. Umkehrung', '2. Umkehrung', '3. Umkehrung']
        }
    ]),
    steps: new ToggleChunk('Stufen', [
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
    triads: new ToggleChunk('Dreiklänge', [['^', 'dur'], ['-', 'moll'], ['+', 'übermäßig'], ['o', 'vermindert']], [], null, 1),
    sevenths: new ToggleChunk('Vierklänge', ['^7', '7', '-7', '+7', 'h7', 'o7'])
};
