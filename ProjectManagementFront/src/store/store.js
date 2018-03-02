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
        },
        'SET_PROFILE_ACTIVITIES_MODEL'(state, model) {
            state.profileActivitiesModel = model;
        },
        'SET_PROFILE_TASKS_MODEL'(state, model) {
            state.profileTasksModel = model;
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
        },
        refreshProfileActivitiesModel({commit, state}) {
            console.log('Refreshing ProfileActivitiesModel');

            // Check if there is ProfileActivitiesModel and it is in sync.
            if (!state.profileActivitiesModel || !state.profileActivitiesModel.inSync) {                
                homeService.getProfileActivitiesModel()
                    .then((data) => {
                        data.inSync = true;
                        commit('SET_PROFILE_ACTIVITIES_MODEL', data);
                    });
            }   
        },
        refreshProfileTasksModel({commit, state}) {
            console.log('Refreshing ProfileTasksModel');

            // Check if there is ProfileTasksModel and it is in sync.
            if (!state.profileTasksModel || !state.profileTasksModel.inSync) {                
                homeService.getProfileTasksModel()
                    .then((data) => {
                        data.inSync = true;
                        commit('SET_PROFILE_TASKS_MODEL', data);
                    });
            }
        }
    },
    getters: {
        profileModel: state => {
            return state.profileModel;
        },
        profileActivitiesModel: state => {
            return state.profileActivitiesModel;
        },
        profileTasksModel: state => {
            return state.profileTasksModel;
        }
    }
});