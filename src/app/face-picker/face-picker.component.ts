// face-picker.component.ts

import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from "@angular/core";
import { Subscription } from "rxjs";
import { faces } from "../cool-faces";
import { FacePickerService } from "./face-picker.service";

@Component({
  selector: "app-face-picker",
  template: `
    <div *ngIf="pickerVisible" class="face-picker">
      <div
        style="margin:auto;"
        *ngFor="let face of coolFaces"
        (click)="selectFace(face)"
      >
        {{ face }}
      </div>
    </div>
  `,
  styles: [
    `
      .face-picker {
        position: absolute;
        border: 1px solid #ccc;
        padding: 8px;
        z-index: 1000;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        display: grid;
        font-size: 15px !important;
        max-height: 10vh;
        overflow-y: scroll;
        overflow-x: hidden;
        max-width: 30vw;
        white-space: pre;
        left: 26%;
        bottom: 30%;
        background-color: black;
      }

      .face-picker div {
        cursor: pointer;
        margin-bottom: 4px;
        font-size: 15px;
        max-width: 120px;
        transition: background-color 0.3s ease;
      }

      .face-picker div:hover {
        background-color: #888888; /* Gray background on hover */
      }
    `,
  ],
})
export class FacePickerComponent implements OnInit, OnDestroy {
  @Output() faceSelected = new EventEmitter<string>();
  coolFaces = faces;
  private pickerVisibleSubscription: Subscription = new Subscription();
  pickerVisible: boolean = false;

  constructor(private facePickerService: FacePickerService) {}

  ngOnInit() {
    this.pickerVisibleSubscription =
      this.facePickerService.pickerVisible$.subscribe(
        (visible) => (this.pickerVisible = visible)
      );
  }

  ngOnDestroy() {
    this.pickerVisibleSubscription.unsubscribe();
  }

  selectFace(face: string) {
    this.faceSelected.emit(face);
    this.facePickerService.hidePicker();
  }
}
