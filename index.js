const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.get('/', (request, response) => {
    response.send('hello')
})

app.get('/students', (request, response) => {
    let pageData = {
        students: ['Ujwala', 'Upasana', 'Tatiana', 'Patty O', 'Patty M', 'Caleb']
    }
    response.render('students', pageData)
})

app.listen(1337, () => {
    console.log('LEEEEEROYYYY')
})