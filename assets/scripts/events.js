const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('./store.js')



const onSignUp = event => {
	// prevents submit button from refreshing the page
	event.preventDefault() 
	
	let data = getFormFields(event.target)
	
	api.signUp(data)
		.then(ui.signUpSuccess) // if successfull
		.catch(ui.signUpFailure) // if failure
}   

const onSignIn = event => {
	event.preventDefault() 
	 

	let data = getFormFields(event.target)
	api.signIn(data)
		.then(ui.signInSuccess)
		.catch(ui.signInFailure) 
}

const onSignOut = event => {
	event.preventDefault()
	api.signOut()
		.then(ui.signOutSuccess)
		.catch(ui.signOutFailure)
	}

	const onChangePassword = event => {
	event.preventDefault()
	const data = getFormFields(event.target)
	api.changePassword(data)
		.then(ui.changePasswordSuccess)
		.catch(ui.changePasswordFailure)
	}

	

	const createDiaryEntry = event => {
		event.preventDefault()
		const data = getFormFields(event.target)
		api.createEntry(data)
		.then(ui.diaryEntrySuccess)
		.catch(ui.diaryEntryFailure)
	}
	
	const onDeleteEntry = event => {
		// event.preventDefault()
		const diaryID = $(event.target).closest('section').data('id')
		// console.log(diaryID)
		api.deleteEntry(diaryID)
			.then(ui.deleteEntrySuccess)
			.catch(ui.deleteEntryFailure)
			
			

	}

	const onUpdateEntry = event => {
		event.preventDefault()
		console.log('this button was clicked', event.target)

		const data = getFormFields(event.target)
		console.log(data)

		// get and assign diary entry id 
		const diaryID = store.userData.currentDiary
		console.log(store.userData.currentDiary)

		// send request then update ui
		api.updateEntry(data,diaryID)
			.then(ui.updateEntrySuccess)
			
			

	}

	const onGetAllEntries = event => {
		event.preventDefault()
		$('#diary-log').show('fast')
		api.getAllEntries()
		.then(ui.fillDiary)
		
	}

	// hide the diary entries 
	const onHideAllEntries = (event) => {
		event.preventDefault()
		// finds user's diary entries
		let current_diaries = store.userData.diaries

		// if user is not reading any diaries,
		if (current_diaries) {
			$('#diary-log').hide('fast')
			current_diaries = null
			
		
		} 
		
	}


	module.exports = {
	onSignUp,
	onSignIn, 
	onSignOut,
	onChangePassword,
	onGetAllEntries,
	createDiaryEntry,
	onDeleteEntry,
	onUpdateEntry,
	onHideAllEntries
	}