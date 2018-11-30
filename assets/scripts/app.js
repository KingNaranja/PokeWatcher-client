'use strict'

const events = require('./events.js')

$(() => {

  // auth events 
  $("#sign-up").on('submit', events.onSignUp)  
  $('#sign-in').on('submit', events.onSignIn)  
  $('#sign-out').on('submit', events.onSignOut) 
  $('#change-password').on('submit', events.onChangePassword) 
  $('#get-all-entries').on('submit', events.onGetAllEntries)  
  $('#pokemon-form').on('submit', events.createDiaryEntry)  



})
