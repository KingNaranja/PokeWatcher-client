const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
// const store = require('./store.js')


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

  const onGetAllEntries = event => {
      event.preventDefault()
      api.getAllEntries()
        .then(ui.fillDiary)
        
  }

  const createDiaryEntry = event => {
      event.preventDefault()
      const data = getFormFields(event.target)
      api.createEntry(data)
        .then(ui.diaryEntrySuccess)
        .catch(ui.diaryEntryFailure)
  }
  

  module.exports = {
    onSignUp,
    onSignIn, 
    onSignOut,
    onChangePassword,
    onGetAllEntries,
    createDiaryEntry

  }