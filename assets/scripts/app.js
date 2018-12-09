'use strict'

const events = require('./events.js')
const store = require('./store.js')


$(() => {

	// auth events 
	$("#sign-up").on('submit', events.onSignUp) 
	$('#sign-in').on('submit', events.onSignIn)  
	$('#sign-out').on('submit', events.onSignOut) 
	$('#change-password').on('submit', events.onChangePassword) 
	$('#get-all-entries').on('submit', events.onGetAllEntries)  
	$('#pokemon-form').on('submit', events.createDiaryEntry)
	$('#diary-log').on('click','.delete-entry', events.onDeleteEntry)

	$('#diary-log').on('submit', '.updateEntry', events.onUpdateEntry)
	
	$('#diary-log').on('click', '.update_btn', function(){

		let updateId = event.target.dataset.id
		console.log(event.target.dataset.id)

		store.userData.currentDiary = updateId
		
	})


})
