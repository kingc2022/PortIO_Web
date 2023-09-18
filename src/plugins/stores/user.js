import {createStore} from 'vuex'
import createPersistedState from '../persistedstate'
import http from "../http.js";

export default createStore({
    plugins: [
        createPersistedState({
            key: 'user',
        }),
    ],
    state: {
        token: null,
        user: {
            "id": "",
            "name": "",
            "email": "",
            "email_verified_at": null,
            "auth_code": null,
            "traffic": "",
            "realnamed": "",
            "created_at": "",
            "updated_at": "",
        },
    },
    actions: {
        updateToken({commit}, token) {
            commit('updateToken', token)
        },
        updateUser({commit}, user) {
            commit('updateUser', user)
        },
        fetch({commit}) {
            http.get('/user').then(response => {
                commit('updateUser', response.data);
            });
        },
    },
    mutations: {
        updateToken(state, token) {
            state.token = token
        },
        updateUser(state, user) {
            state.user = user
        },
    },
})