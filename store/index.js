import firebase from '../plugins/firebase'

export const state = () => ({
  user: {
    uid: '',
    email: '',
    login: false
  }

})

export const getters = {
  getUser: state => state.user
}

export const actions = {
  loginAction({ commit }, payload) {
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(user => {
        console.log('成功')
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            commit('setData', { uid: user.uid, email: user.email })
            commit('setLogin')
          }
        })
      }).catch((error) => {
        alert(error)
      })
  }
}

export const mutations = {
  setData(state, payload) {
    state.user.uid = payload.uid
    state.user.email = payload.email
  },
  setLogin(state) {
    state.user.login = true
  }
}
