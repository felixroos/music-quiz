
export class ToggleChunk {
    constructor(public label, public pool = [], public presets = [], public selection?, public defaultIndex = 0) {
        if (this.presets.length) {
            this.presets = [{
                label: 'Alle',
                filter: () => [].concat(this.pool.map(i => Array.isArray(i) ? i[defaultIndex] : i))
            }].concat(this.presets);
            if (this.presets.find(p => p.default)) {
                this.selection = this.renderPreset(this.presets.find(p => p.default));
            }
        }
        if (!this.selection) {
            this.selection = [].concat(this.pool.map(i => Array.isArray(i) ? i[defaultIndex] : i));
        }
    }

    containsSynonym(pool, synonyms) {
        if (!synonyms) {
            return;
        }
        return synonyms.reduce((match, synonym) => {
            return match || pool.indexOf(synonym) !== -1 ? synonym : false;
        }, false);
    }

    isActive(thing) {
        if (Array.isArray(thing)) {
            return this.containsSynonym(this.selection, thing);
        }
        return this.selection.indexOf(thing) !== -1;
    }

    items() {
        return this.selection.filter(i => !!i);
    }

    getItemLabel(item) {
        if (typeof item === 'string') {
            return item;
        }
        if (Array.isArray(item)) {
            return item[this.defaultIndex];
        }
    }

    toggle(thing, index) {
        if (Array.isArray(thing)) {
            this.selection[index] = !this.containsSynonym(this.selection, thing) ? thing[this.defaultIndex] : false;
        } else if (typeof thing === 'string') {
            this.selection[index] = !this.selection[index] ? thing : false;
        }
    }

    clear() {
        this.selection = [];
    }

    use(items) {
        this.selection = this.pool.map(i => items.indexOf(i) !== -1 ? i : false);
    }

    renderSynonyms(index) {
        return this.pool.map(item => {
            if (typeof item === 'string') {
                return this.selection.indexOf(item) !== -1 ? item : false;
            }
            if (this.containsSynonym(this.selection, item)) {
                return item[index];
            }
        }).filter(item => !!item);
    }

    renderPreset(preset) {
        if (!preset) {
            return;
        }
        if (preset.filter) {
            return preset.filter(this.pool);
        }
        if (preset.use) {
            return this.pool.map((i) => {
                if (typeof i === 'string') {
                    return preset.use.indexOf(i) !== -1 ? i : false;
                } else if (Array.isArray(i)) {
                    return this.containsSynonym(preset.use, i);
                }
            });
        }
    }

    usePreset(preset) {
        this.selection = this.renderPreset(preset);
    }

    isPresetActive(preset) {
        if (!preset) {
            return;
        }
        const toEqual = this.renderPreset(preset);
        return toEqual.reduce((equals, item, index) => {
            return equals && this.selection[index] === item;
        }, true) && toEqual.filter(i => !!i).length === this.selection.filter(i => !!i).length;
    }

    randomItems(n = 1, all = false) {
        this.use(this.randomize(n, all));
    }

    randomItem(selection = this.selection) {
        return this.randomize(1, selection)[0];
    }

    shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    randomize(n = 1, selection = this.selection) {
        return this.shuffle([].concat(selection.filter(i => !!i))).slice(0, n);
    }
}
