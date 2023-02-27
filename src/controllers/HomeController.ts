import { Request, Response } from 'express';

import Locals from '../providers/Locals';

class Home {
    public static index(_req: Request, res: Response) {
        return res.json({
            message: Locals.config().name
        });
    }
}

export default Home;