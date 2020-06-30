export const registerPostFetch = user => {
    return dispatch => {
        return fetch('http://localhost:3001/api/users', {
            method: "POST",
            headers : {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({user})
        })
          .then(response => response.json())
          .then(data => {
              if (data.token) {
                  localStorage.setItem('jwt', data.token)
                  dispatch(loginUser(data.user))
                  return true
              }
          })
    }
}

export const loginPostFetch = user => {
    return dispatch => {
        return fetch('http://localhost:3001/api/users/login', {
            method: "POST",
            headers : {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({user})
        })
          .then(response => response.json())
          .then(data => {
              if (data.token) {
                  localStorage.setItem('jwt', data.token)
                  dispatch(loginUser(data.user))
              }
          })
    }
}

export const authPostFetch = () => {
    return dispatch => {
        const token = localStorage.jwt;
        return token && fetch('http://localhost:3001/api/users/auth', {
            method: "GET",
            headers : {
                'Authorization': `Bearer ${token}`,
                Accept: 'application/json',
            },
        })
          .then(response => response.json())
          .then(data => {
              if (data._id) {
                  dispatch(loginUser(data))
                  return true
              }
          })
    }
}

const loginUser = userObj => ({
    type: 'LOGIN_USER',
    playload: userObj,
    isLogin : true
})

export const comeWebinar = () => ({
    type: 'WEBINAR_COME',
    //user: userObj,
})