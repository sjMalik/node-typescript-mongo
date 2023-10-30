import dotenv from 'dotenv';

const result = dotenv.config();
if (result.error) {
    dotenv.config({ path: '.env' })
}

import { app } from './app';

app.listen(app.get('port'), (): void => {
    console.log(`Express server started @ http://localhost:${app.get('port')}`);
})