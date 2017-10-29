import SocketIoService from './Realtime/SocketIoService';
import SpaMiddleware from "./Middleware/SpaMiddleware";
import * as Express from 'express';
import { Router } from "express";
import * as path from 'path';
import * as Http from 'http';

class Server {
  app: Express.Application;
  io: SocketIoService; 
  server: Http.Server;

  constructor() {
    this.app = Express();
    this.server = new Http.Server(this.app);
    this.configMiddleware();
    this.configRoutes();
    
    this.io = new SocketIoService(this.server);
    this.server.listen(3000, () => console.log("listening"));
  }

  private configMiddleware() {
    this.app.use(Express.static(path.join(process.cwd(), "/dist/wwwroot")));
    this.app.use(SpaMiddleware.bind(this));
  }

  private configRoutes() {
    const router: Router = Express.Router();
    router.get("/", (req, res) => {
      res.sendFile("index.html");
    });
    this.app.use(router);
  }
}

new Server();
