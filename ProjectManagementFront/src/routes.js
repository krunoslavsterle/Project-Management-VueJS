import Home from './components/home/Home.vue';
import Dashboard from './components/dashboard/Dashboard.vue';
import DashboardHome from './components/dashboard/Home.vue';
import Projects from './components/dashboard/projects/Projects.vue';
import Users from './components/dashboard/users/Users.vue';
import ProjectOverview from './components/dashboard/projects/ProjectOverview.vue';

export const routes = [
    {
        path: '/', 
        component: Home
    },
    {
        path: '/dashboard',     
        components: {
            default: Dashboard,
        },
        children: [
            {
                path: '',
                alias: 'dashboard-home',
                component: DashboardHome,
                name: 'DashboardHome',
                meta: {
                    description: 'Dashboard Home'
                }
            },
            {
                path: 'projects',
                alias: 'dashboard-projects',
                component: Projects,
                name: 'Projects',
                meta: {
                    description: 'List of Projects'
                }
            },
            {
                path: 'projects/:projectId/overview',
                alias: 'project-overview',
                component: ProjectOverview,
                name: 'ProjectOverview',
                meta: {
                    description: 'ProjectOverview',
                    group: 'Project'
                }
            },
            {
                path: 'users',
                alias: 'dashboard-users',
                component: Users,
                name: 'Users',
                meta: {
                    description: 'List of Users'
                  }
            }
        ]
    }
]