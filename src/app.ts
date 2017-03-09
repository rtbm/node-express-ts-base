import * as express from 'express';
import { HomeRoute } from './routes/home';

const PORT = process.env.PORT || 8080;

class Server {
  public app: express.Application;

  public static bootstrap = () => {
    return new Server();
  };

  constructor() {
    this.app = express();
    this.routes();

    this.app.listen(PORT, () =>
      console.log(`Listening at ${PORT}`));
  }

  private routes = () => {
    const router: express.Router = express.Router();
    HomeRoute.create(router);
    this.app.use(router);
  };
}

Server.bootstrap();
