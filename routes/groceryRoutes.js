const router = require('express').Router()
const db = require('../db')

router.get('/grocers', (req, res) => {
  db.query('SELECT * FROM groceries', (err, groceries) => {
    if (err) { console.log(err) }
    res.json(groceries)
  })
})

router.post('/groceries', (req, res) => {
  db.query('INSERT INTO groceries SET ?', req.body, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})