
import axios from 'axios';

export default class HomeService {

    getProfileModel() {
        console.log('Getting ProfileModel from API...');
        const mock = this.getMockProfileModel();
        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                console.log('ProfileModel fetched.');
                return mock;
            }, 1500);
            resolve(mock);
        });        
    };

    getProfileActivitiesModel() {
        console.log('Getting ProfileActivitiesModel from API...');

        setTimeout(() => {
            console.log('ProfileActivitiesModel fetched.');
            return this.getMockProfileActivitiesModel();
        }, 1500);
    };

    getProfileTasksModel() {
        console.log('Getting ProfileTasksModel frmo API...');

        setTimeout(() => {
            console.log('ProfileTasksModel fetched.');
            return this.getMockProfileTasksModel();
        }, 1500);
    }
    
    getMockProfileModel() {
        const profileModel = {
            userName: 'Krunoslav Sterle',
            userRole: 'Web Developer', 
            profileImage: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg',
            numberOfProjects: 5,
            numberOfTasks: 76
        };

        return profileModel;
    };

    getMockProfileActivitiesModel() {
        const activities = [
            {
                id: '1',
                description: 'John Doe has updated your role.',
                timestamp: '11:45',
                type: 'General'
            },
            {
                id: '2',
                description: 'You have completed task #4567.',
                timestamp: 'Yesterday',
                type: 'Info'
            },
            {
                id: '3',
                description: 'John Doe has updated the status of a task: #236 to: in progress.',
                timestamp: 'Yesterday',
                type: 'Warning'
            },
            {
                id: '4',
                description: 'John Doe has sent a new message to you.',
                timestamp: 'Friday',
                type: 'Alert'
            },
            {
                id: '5',
                description: 'John Doe has assigned task #546 to you.',
                timestamp: 'Monday',
                type: 'Alert'
            },
            {
                id: '6',
                description: 'You have completed task #4679.',
                timestamp: 'Monday',
                type: 'Info'
            },
            {
                id: '7',
                description: 'You have completed task #4699.',
                timestamp: 'Last Week',
                type: 'Info'
            }
        ];

        return activities;
    };

    getMockProfileTasksModel() {
        const tasks = [
            {
                id: '1',
                name: 'Implement caching',
                project: 'My First Project',
                status: 'New',
                dueDate: '23/7/2017'
            },
            {
                id: '2',
                name: 'Implement ddl on Profile page',
                project: 'Project 1',
                status: 'In Progress',
                dueDate: '23/7/2017'
            },
            {
                id: '3',
                name: 'Code optimization',
                project: 'Project 1',
                status: 'In Progress',
                dueDate: '23/7/2017'
            },
            {
                id: '4',
                name: 'Implement ddl on Profile page',
                project: 'Project 1',
                status: 'In Progress',
                dueDate: '23/7/2017'
            }
        ];

        return tasks;
    };
}