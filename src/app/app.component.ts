import { Component, OnInit, OnDestroy } from "@angular/core";
import { SocketService } from "./socket.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit, OnDestroy {
  public messages: Array<any>;
  public chatBox: string;

  public constructor(private socket: SocketService) {
    this.messages = [];
    this.chatBox = "";
  }

  public ngOnInit() {
    this.socket.getEventListener().subscribe((event) => {
      if (event.type == "message") {
        let data = event.data.content;
        if (event.data.sender) {
          data = event.data.sender + ": " + data;
        }
        this.messages.push(data);
      }
      if (event.type == "close") {
        this.messages.push("/connection closed... ಥ_ಥ ");
      }
      if (event.type == "open") {
        this.messages.push("/connection established!!!... (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ");
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

  public isSystemMessage(message: string) {
    return message.startsWith("/")
      ? "<strong>" + message.substring(1) + "</strong>"
      : message;
  }
}
