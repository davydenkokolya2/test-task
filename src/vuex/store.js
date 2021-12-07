import { createStore } from 'vuex'

export default createStore({
    state: {
        name: "",
        answer: []
    },
    mutations: {
        SET_ANSWER: (state, answer) => {
            state.answer = answer
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        
    },
    actions: {
        ADD_TO_ANSWER({ commit }, answer) {
            commit('SET_ANSWER', answer)
        },
        ADD_TO_NAME({ commit }, name) {
            commit('SET_NAME', name)
        },
       
    },
    getters: {
        NAME(state) {
            return state.name;
        },
        ANSWER(state) {
            return state.answer;
        }
    },

})

