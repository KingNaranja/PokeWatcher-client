const config = require('./config.js')
 const store = require('./store.js')

const signUp = data => {
    
    return $.ajax ({
        url: config.apiUrl + '/sign-up',
        method: 'POST',
        data
    })
}

const signIn = data => {
    return $.ajax({
      url: config.apiUrl + '/sign-in',
      method: 'POST',
      data
    })
  }

const signOut = () => {
    let user = store.userData
    
    return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
        Authorization: 'Token token=' + user.token
    }
    })
}

const changePassword = data => {
    let user = store.userData

    return $.ajax({
      url: config.apiUrl + '/change-password',
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + user.token
      },
      data
    })
  }




  module.exports = {
    signUp,
    signIn,
    signOut,
    changePassword


  }