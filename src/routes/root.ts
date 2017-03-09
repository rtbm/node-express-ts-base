import { Request, Response } from 'express';

class RootRoute {
  public render = (req: Request, res: Response, text: string) =>
    res.end(text);
}

export { RootRoute };
