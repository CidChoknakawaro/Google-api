import express,{ json, urlencoded } from 'express';
import config from './config.js';
import qa from './routers/qa.js';
import home from './routers/home.js';

function main() {
    const app = express()
    const host = config.app.host
    const port = config.app.port

    app.use(express.static('public'))
    app.use(json())
    app.use(urlencoded({ extended: true }))

    app.use('/', home)
    app.use('/q-and-a', qa)

    app.listen(port, () => {console.log(`Server is running on http://${host}:${port}`)})
}

main()