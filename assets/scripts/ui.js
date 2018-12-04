const store = require('./store.js') 
const config = require('./config.js')
const showDiariesTemplate = require('./templates/diary-listing.handlebars')

const getTodaysEntry = () => {
	let user = store.userData

	return $.ajax({
		url: config.apiUrl + '/diaries-today',
		method: 'GET',
		headers: {
			Authorization: 'Token token=' + user.token
		}
		})
	
  }

const toggle = () => {
	$('#message').toggle()
// hide response after 2 seconds 
	setTimeout(()=>{
		$('#message').toggle()
		},2000)
}


const addResponse = (message) => {
	// updates page with user status
	$('#message').text(message)
	
}


const signUpSuccess = data => {
	
	//attach success class to our status message 
	$('#message').removeClass()
	$('#message').addClass('success')

	// success response
	addResponse('You Signed In Successfully!')
	toggle()

	
	
}

const signUpFailure = () => {
	
	//attach failure to our status message 
	$('#message').removeClass()
	$('#message').addClass('#failure')
	// failure response message
	addResponse('Error on sign-up')
	toggle()
}


const signInSuccess = data => {
	store.userData = data.user

	
	//attach success class to our status message 
	$('#message').removeClass()
	$('#message').addClass('#success')
	// success response 
	addResponse('Thanks for logging in!')
	// Once user is online, the user can view his diary 
	$('.diary').toggle()

	// hide the sign-up fieldset
	$('#sign-up').toggle()
	$('#sign-in').toggle()
	$('#sign-out').toggle("slow")
	$('#change-password').toggle("slow")

	toggle()
	// put todays entries on the user page
	getTodaysEntry().done(fillDiary)


}

const signInFailure = () => {
	
	//attach failure to our status message 
	$('#message').removeClass()
	$('#message').addClass('#failure')
	// failure response 
	addResponse('Error in sign-up')
	toggle()
}


const signOutSuccess = () => {
	store.userData = null
	$('#message').removeClass()
	$('#message').addClass('success')
	addResponse('Signed out successfully')

	// return back to initital view 
	$('#sign-up').toggle('slow')
	$('#sign-in').toggle('slow')
	$('#sign-out').toggle()
	$('#change-password').toggle()

	
	$('.diary').hide()
	toggle()
  }

const signOutFailure = () => {

	$('#message').removeClass()
	$('#message').addClass('failure')
// console.error('signOutFailure ran. Error is :', error)

	addResponse('Error on sign out')
	toggle()
}

const changePasswordSuccess = () => {
	addResponse('Password changed successfully!')

	$('#message').removeClass()
	$('#message').addClass('success')
	toggle()

}

const changePasswordFailure = () => {
	addResponse('Failed to change password. Try Again.')

	$('#message').removeClass()
	$('#message').addClass('failure')
	toggle()

}

const fillDiary = data => {
	console.log(data)
	let showDiaryHtml = showDiariesTemplate({ diaries: data.diaries })
	$('#diary-log').html(showDiaryHtml)

}


const diaryEntrySuccess = () => {
	addResponse('Successfully created a new entry!')
	toggle()

}

const diaryEntryFailure = () => {
	addResponse('Failed to create a new entry. Try Again?')
	toggle()
		
}

const deleteEntrySuccess = (data) => {
	addResponse('Your entry was deleted')
	toggle()
	// update diary log entries 
	let showDiaryHtml = showDiariesTemplate({ diaries: data.diaries })
	$('#diary-log').html(showDiaryHtml)
	
}

const deleteEntryFailure = () => {
	addResponse('Unable to delete entry. Try Again?')
	toggle()

}

module.exports = {
	toggle,
	addResponse,
	signUpSuccess,
	signUpFailure,
	signInSuccess,
	signInFailure,
	signOutSuccess,
	signOutFailure,
	changePasswordSuccess,
	changePasswordFailure,
	fillDiary, 
	getTodaysEntry,
	diaryEntrySuccess,
	diaryEntryFailure,
	deleteEntrySuccess,
	deleteEntryFailure
	


}