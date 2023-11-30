import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class SocketService {
  private socket: WebSocket;
  private listener: EventEmitter<any> = new EventEmitter();

  public constructor() {
    this.socket = new WebSocket(
      "ws://backend-neko-bitter-darkness-2830-cool-river-1440.fly.dev/ws"
    );
    this.socket.onopen = (event) => {
      this.listener.emit({ type: "open", data: event });
    };
    this.socket.onclose = (event) => {
      this.listener.emit({ type: "close", data: event });
    };
    this.socket.onmessage = (event) => {
      this.listener.emit({ type: "message", data: JSON.parse(event.data) });
    };
  }

  public send(data: string) {
    this.socket.send(data);
  }

  public close() {
    this.socket.close();
  }

  public getEventListener() {
    return this.listener;
  }
}
