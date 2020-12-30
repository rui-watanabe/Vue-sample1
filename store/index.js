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
  loginAction({ dispatch }, { email, password }) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log('成功')
        dispatch('setLoginAction')
      }).catch((error) => {
        alert(error)
      })
  },
  setLoginAction({ commit }) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        commit('setData', { uid: user.uid, email: user.email })
        commit('setLogin')
      }
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
