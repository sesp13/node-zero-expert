import express from 'express';
import cors from 'cors';

import userRoutes from '../routes/user';

class Server {

  private app: express.Application;
  private port: String;
  private apiPaths = {
    users: '/api/users/'
  }

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "3000";

    //Middlewares
    this.middlewares();

    //Def routes
    this.routes();

  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //Lectura del body
    this.app.use(express.json());

    //Carpeta publica
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.apiPaths.users, userRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Sever running on port " + this.port);
    });
  }


}

//Por defecto exporto esta clase
export default Server;