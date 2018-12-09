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
	
	// delegated update diary event 
	$('#diary-log').on('click', '.update_btn', function(){
		// find diary data id 
		let updateId = event.target.dataset.id
		// store user's working diary
		store.userData.currentDiary = updateId	
	})

	// hides the user's diary
	$('#hide-all-entries').on('submit', events.onHideAllEntries)  
	

})
