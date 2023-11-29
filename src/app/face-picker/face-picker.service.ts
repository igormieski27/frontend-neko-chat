import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FacePickerService {
  private pickerVisibleSubject = new BehaviorSubject<boolean>(false);
  pickerVisible$ = this.pickerVisibleSubject.asObservable();

  showPicker() {
    if (this.pickerVisible$) {
      this.pickerVisibleSubject.next(true);
    }
  }

  hidePicker() {
    this.pickerVisibleSubject.next(false);
  }
}
