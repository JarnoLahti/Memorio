import { Server } from 'http';
import * as SocketIO from 'socket.io';

class SocketIoService {
  public io: SocketIO.Server;

  constructor(server: Server) {
    this.io = SocketIO(server);
    this.configListen();
  }

  private configListen(){
      this.io.on('connect', socket => {
        console.log("connected");
      });
  }
}

export default SocketIoService;
