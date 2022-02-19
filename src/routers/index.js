const express = require('express')
const User = require('../models/Users')
const router = express.Router()
const path = require('path');


// Welcome Page
router.get('/', (req, res) => res.render('index'));


// Avatar Page
router.get('/register',(req, res) => {
  res.sendFile(path.join(__dirname+'../../../templates/views/register.html'));
})

//Register
router.post('/register', (req, res) => {
  const ip = req.ip
  const { user1 } = req.body;
  //console.log(user1)
  if (!user1) {
    res.render('index')
  } else {
    const newUser = new User({
      ip,
      user1
    })
    newUser
    .save()
    .then(() => {
      console.log("success")
      
      res.render('single', {
        user1
      })
    })
  }

  
});



//post request to save number
//Register
router.post('/single-number', (req, res) => {
  const ip = req.ip
  const { user1, phone } = req.body;
  //console.log(user1)
  if (!user1 || !phone) {
    res.render('index')
  } else {
    User.findOneAndUpdate({ user1 },{ phone }).then(user => {

      res.redirect('/');
    })
  }

  
});






//generating couple

//route request for couple character
router.post('/gen-couple', (req, res) => {
  //console.log(user1)

  res.sendFile(path.join(__dirname+'../../../templates/views/register-couple.html'));
});


//Registering other half
router.post('/register-couple', (req, res) => {


  const ip = req.ip
  const { user2 } = req.body;
  //console.log(user1)
  if (!user2) {
    res.render('index')
  } else {
    const newUser = new User({
      ip,
      user2
    })
    newUser
    .save()
    .then(() => {
      console.log("success")
      
      res.render('couple', {
        user2
      })
    })
  }


  
});









// single API
//  router.get('/single',(req, res) => {
//  res.render('single')
//})


module.exports = router;