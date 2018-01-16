import { chunks } from '../toggle-chunk/chunks';
import { Task } from './task';
import { ToggleChunk } from '../toggle-chunk/toggle-chunk';

function randomChain(b: ToggleChunk[], indices?: number[]) { // resolves a chain of blocks. uses preset with label of last blocks result
    return b.reduce((results, current, i): ToggleChunk[] => {
        const preset = results.length ? current.presets.find(p => p.label === results[0]) : null;
        results.unshift(preset ? current.randomItem(current.renderPreset(preset)) :
            current.randomItem(indices ? current.renderSynonyms(indices[i]) : current.selection)
        ); // with indices, you can shift the default index for a chunk (e.g. moll instead of -)
        return results;
    }, []);
}

function randomString(input: (ToggleChunk | string)[]) {
    return input.map(element => element instanceof ToggleChunk ? element.randomItem() : element).join('') + '?';
}

export const tasks = [
    new Task('Intervalle', () => {
        return randomString([chunks.notes, ' ', chunks.intervals, ' ', chunks.directions]);
    }, []),
    new Task('Interval bestimmen', () => {
        return randomString(['Interval von ', chunks.notes, ' nach ', chunks.notes]);
    }, []),
    new Task('Töne von Skalen', () => {
        return randomString(['Töne von ', chunks.notes, ' ', chunks.scales]);
    }, []),
    new Task('Vorzeichen von Skalen', () => {
        return randomString(['Vorzeichen von ', chunks.notes, ' ', chunks.scales]);
    }, []),
    new Task('Mollparallelen', () => {
        return randomString(['Mollparallele von ', chunks.notes]);
    }, []),
    new Task('Stufe in Skala', () => {
        const results = randomChain([chunks.scales, chunks.steps]);
        const note = chunks.notes.randomItem();
        return `${results[0]} in ${note} ${results[1]}`;
    }, [chunks.notes.pool]),
    new Task('Stufe in Dreiklang', () => {
        const results = randomChain([chunks.triads, chunks.steps], [0, 1]);
        const note = chunks.notes.randomItem();
        return `${results[0]} in ${note}${results[1]}`;
    }, [chunks.notes.pool]),
    new Task('Stufe in Vierklang', () => {
        const results = randomChain([chunks.sevenths, chunks.steps]);
        const note = chunks.notes.randomItem();
        return `${results[0]} in ${note}${results[1]}`;
    }, [chunks.notes.pool]),
    new Task('Dreiklang', () => {
        const i = chunks.inversions;
        const note = chunks.notes.randomItem();
        const triad = chunks.triads.randomItem(chunks.triads.renderSynonyms(0));
        const inversion = i.randomItem(i.renderPreset(i.presets.find(p => p.label === 'Dreiklang')));
        return `${note}${triad} ${inversion}`;
    }, [chunks.notes.pool, chunks.notes.pool, chunks.notes.pool]),
    new Task('Dreiklang mit tiefstem Ton', () => {
        const i = chunks.inversions;
        const note = chunks.notes.randomItem();
        const triad = chunks.triads.randomItem();
        const inversion = i.randomItem(i.renderPreset(i.presets.find(p => p.label === 'Dreiklang')));
        return `${triad} ${inversion}, tiefster Ton ${note}`;
    }, [chunks.notes.pool, chunks.notes.pool, chunks.notes.pool]),
    new Task('Vierklang', () => {
        const i = chunks.inversions;
        const note = chunks.notes.randomItem();
        const seventh = chunks.sevenths.randomItem();
        const inversion = i.randomItem(i.renderPreset(i.presets.find(p => p.label === 'Vierklang')));
        return `${note}${seventh} ${inversion}`;
    }, [chunks.notes.pool, chunks.notes.pool, chunks.notes.pool, chunks.notes.pool])
];
