import dotenv from "dotenv";
import path from "path";

import Log from "../middlewares/Log";
import Express from "./Express";

class App {
    public loadConfiguration(): void {
        Log.info('Loading Configuration...');
        dotenv.config({ path: path.join(__dirname, '../../.env') });
    }

    public loadServer(): void {
        Log.info('Loading Server...');

        Express.init();
    }
}

export default new App;