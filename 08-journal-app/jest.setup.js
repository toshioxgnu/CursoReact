// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
import 'setimmediate';
import { getEnviroments } from './helpers/getEnviroments';

require('dotenv').config({
    path: '.env.test'
});

jest.mock('./helpers/getEnviroments', () => ({
    getEnviroments: () => ({ ...process.env })
} ))