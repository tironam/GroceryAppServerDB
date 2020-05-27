const router = require('express').Router()
const db = require('../db')

router.get('/users/:username', (req, res) => {
  db.query('SELECT * FROM users WHERE ?', { username: req.params.username }, (err, data) => {
    if (err) { console.log(err) }
    let user = data[0]
    db.query('SELECT * FROM groceries WHERE ?', { userid: user.id }, (err, groceries) => {
      if (err) { console.log(err) }
      res.json({ user, groceries })
    })
  })
})

module.exports = router