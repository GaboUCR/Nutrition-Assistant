const express = require('express')
const app = express()
const csv = require('csv-parser')
const fs = require('fs')
const port = 3000

app.use(express.static('public'))

app.get('/meals', (req, res) => {
    let rawdata = fs.readFileSync('meals.json');
    let meals = JSON.parse(rawdata);
    res.json(meals.meals)
    res.end()
  })

app.get('/edibles', (req, res) => {
    let rawdata = fs.readFileSync('edibles.json');
    let edibles = JSON.parse(rawdata);
    res.json(edibles.edibles)
    res.end()
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// app.get('/re', (req, res) => {
//   let rawdata = fs.readFileSync('edibles.json');
//   let meals = JSON.parse(rawdata);
//   let nedibles = {"edibles":[]};

//   for (let i=0; i<meals.edibles.length; i++) {
//       meals.edibles[i].id = i;
//       nedibles.edibles.push(meals.edibles[i])

//   }

//   let data = JSON.stringify(nedibles);
//   fs.writeFileSync('nedibles.json', data);
//   // console.log(typeof meals)
//   res.json(meals.meals)
//   res.end()
// })