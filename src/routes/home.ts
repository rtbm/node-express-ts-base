import { RootRoute } from './root';
import { Request, Response, NextFunction, Router } from 'express';

class HomeRoute extends RootRoute {
  public static create = (router: Router) =>
    router.get('/', (req: Request, res: Response, next: NextFunction) => {
      new HomeRoute().index(req, res, next);
    });

  public index = (req: Request, res: Response, next: NextFunction) =>
    this.render(req, res, 'hello world!');

  constructor() {
    super();
  }
}

export { HomeRoute };
