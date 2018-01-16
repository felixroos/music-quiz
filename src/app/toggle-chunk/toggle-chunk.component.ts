import { Component, OnInit, Input } from '@angular/core';
import { ToggleChunk } from './toggle-chunk';
@Component({
  selector: 'app-toggle-chunk',
  templateUrl: './toggle-chunk.component.html',
  styleUrls: ['./toggle-chunk.component.scss']
})
export class ToggleChunkComponent implements OnInit {
  @Input() pool = [];
  @Input() selection;
  @Input() label = '';
  @Input() presets = [];
  @Input() preset;
  @Input() hidePresets: boolean;
  @Input() empty: boolean;

  expand = true;
  @Input() chunk;
  constructor() { }

  ngOnInit() {
    this.chunk = this.chunk || new ToggleChunk(this.label, this.pool, this.presets, this.selection);
    if (this.empty) {
      this.chunk.clear();
    }
    if (this.preset) {
      this.chunk.usePreset(this.preset);
    }
  }
}
