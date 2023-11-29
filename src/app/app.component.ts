import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { SocketService } from "./socket.service";
import { MessageModel } from "./models/message.model";
import { Subscription } from "rxjs";
import { faces } from "./cool-faces";
import { FacePickerService } from "./face-picker/face-picker.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit, OnDestroy {
  public messages: Array<MessageModel> = new Array<MessageModel>();
  public chatBox: string;
  public faces = faces;
  public audio: any;
  private pickerVisibleSubscription: Subscription = new Subscription();
  selectedTheme: "dark" | "light" = "dark";
  public constructor(
    private socket: SocketService,
    private facePickerService: FacePickerService
  ) {
    this.chatBox = "";
    this.audio = new Audio("../assets/typing.mp3");
    this.audio.loop = true;
    this.audio.volume = 0.5;
  }

  public ngOnInit() {
    this.socket.getEventListener().subscribe((event) => {
      console.log(event);
      if (event.type == "message") {
        let data = new MessageModel();
        if (event.data.sender) {
          data.sender = " > " + event.data.sender;
        } else {
          data.sender = "system";
        }

        data.text = event.data.content;
        data.color = event.data.color;
        this.messages.push(data);
      }
      if (event.type == "close") {
        this.messages.push({
          text: "[connection failed... ಥ_ಥ!! Retrying...]",
          color: "red",
          sender: "system",
        });
      }
      if (event.type == "open") {
        this.messages.push({
          text: "[Welcome to nekoChat!!! ૮₍ ˶ᵔ ᵕ ᵔ˶ ₎ა ]",
          color: "#03fc0b",
          sender: "system",
        });
        this.messages.push({
          text: "[connection established!!!... (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧]",
          color: "#03fc0b",
          sender: "system",
        });
      }
    });
  }

  public ngOnDestroy() {
    this.socket.close();
  }

  public send() {
    if (this.chatBox) {
      this.socket.send(this.chatBox);
      this.chatBox = "";
    }
  }

  showPicker() {
    this.facePickerService.showPicker();
  }

  hidePicker() {
    this.facePickerService.hidePicker();
  }

  playTypeSound() {
    console.log("started");
    this.audio.play();
  }

  stopTypeSound() {
    console.log("stopped");
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  selectTheme(theme: "dark" | "light") {
    this.selectedTheme = theme;
  }
}
