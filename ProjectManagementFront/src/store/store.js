import Vue from 'vue';
import Vuex from 'vuex';

import HomeService from '../services/homeService.js';
const homeService = new HomeService();

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        profileModel: {},
        profileActivitiesModel: {},
        profileTasksModel: {}
    },
    mutations: {
        'SET_PROFILE_MODEL'(state, model) {
            state.profileModel = model;
        }
    },
    actions: {
        refreshProfileModel({commit, state}) {
            console.log('Refreshing ProfileModel');

            // Check if there is ProfileModel and it is in sync.
            if (!state.profileModel || !state.profileModel.inSync) {                
                homeService.getProfileModel()
                    .then((data) => {
                        data.inSync = true;
                        commit('SET_PROFILE_MODEL', data);
                    });
            }        
        }
    },
    getters: {
        profileModel: state => {
            return state.profileModel;
        }
    }
});