import express from 'express'
import helmet from 'helmet'
import logger from 'morgan'
import {router} from './route/index.js'
export const app = express()


// Use the morgan logger
if (process.env.NODE_ENV !== 'test') {
    app.use(logger('dev', {immediate: true}))
}

// Use helmet as a basic protection layer
app.use(helmet())


// Be more silent
app.disable('x-powered-by')

// Use the public folder for static resources
// app.use(express.static('public'))

// Use the public folder for static resources
app.use(express.static('../client/dist/'))

// Middleware to parse JSON data as part of the body
app.use(express.json())

// Redirect from the server's root to the client's /home
// app.get('/', (req, res) => {
//     res.redirect('http://localhost:5173/home');
// });


// Mount the routes
app.use('/', router)

app.use((req, res, next) => {
    res.sendFile('index.html', { root: '../client/dist' }, (err) => {
        if (err) {
            next(err)
        }
    })
})