import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		count: 0,
		string: ``,
		state: "main",
		speed: 5,
		dark: true,
		index: 0,
	},
  getters: {
    // Add the `getField` getter to the
    // `getters` of your Vuex store instance.
    getField,
  },
	mutations: {
    updateField,
		add(state, payload) {
			// If we get a payload, add it to count
			// Else, just add one to count
			payload ? (state.count += payload) : state.count++;
		},
		subtract(state, payload) {
			payload ? (state.count -= payload) : state.count--;
		}
	},
	actions: {
		addThreeAsync({ commit }) {
			setTimeout(() => commit('add', 3), 3000);
		}
	}
});
