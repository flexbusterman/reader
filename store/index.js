import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		count: 0,
		string: `sollicitudin nisl. Proin lorem metus, interdum eget magna quis, rhoncus euismod tortor. Praesent quis mi ac sapien aliquam fermentum eget aliquet augue. Praesent accumsan eget magna ut faucibus. Suspendisse at tellus auctor, posuere ex et, suscipit ipsum. Ut mauris magna, varius id iaculis non, fringilla vulputate leo.
Nullam eu scelerisque mi, non faucibus lorem. Duis maximus porttitor ultrices. Aenean elit est, fermentum vitae dignissim non, volutpat at dolor. Nunc magna mi, fringilla sit amet aliquam id, vulputate ultricies lorem. In iaculis sem auctor diam congue faucibus. Proin non est nulla. Suspendisse potenti. Fusce dui risus, imperdiet dictum gravida tempor, mattis mattis tortor. Duis ac nibh mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque placerat elit id viverra eleifend. Nullam ac enim venenatis, lacinia tellus sed, egestas magna. Aenean porta porta posuere. Vestibulum ullamcorper tincidunt ante, sit amet tincidunt erat posuere vitae. Sed venenatis bibendum velit, in luctus felis aliquam porta.
Fusce vulputate velit quis dui mattis placerat. In posuere felis est, facilisis consequat metus vestibulum eleifend. Fusce dapibus nibh ut dui ultrices eleifend. Aenean feugiat dolor vitae laoreet tempus. Sed sed nulla elementum, varius tellus vel, sollicitudin arcu. Praesent sed justo rhoncus, blandit mauris sed, dignissim lectus. Nam molestie, enim ut venenatis porta, metus neque egestas orci, eu blandit neque enim ac mi. Fusce ut dolor sodales, pellentesque nibh sit amet, mattis dui. Morbi egestas purus in sem tristique, eu eleifend ipsum viverra. Proin gravida dui nec mattis lacinia.
Cras eget blandit massa. Mauris sit amet tempor erat. Cras a varius elit. Proin lobortis, quam at imperdiet aliquet, sem nunc faucibus nisi, ac volutpat arcu magna vitae ligula. Nulla euismod nisi quis ante semper, id euismod urna efficitur. Aenean viverra urna enim. Donec et mattis odio. Etiam vehicula ultrices tellus. Integer justo lectus, maximus nec iaculis non, finibus eget sapien. Pellentesque euismod molestie arcu in lobortis. Aenean vel fringilla mi, vel aliquet dolor. Quisque suscipit imperdiet augue, at viverra felis rhoncus et. Nullam ligula orci, interdum sed dapibus ac, varius accumsan nibh.
		`,
		state: "main",
		speed: 1,
		dark: true,
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
