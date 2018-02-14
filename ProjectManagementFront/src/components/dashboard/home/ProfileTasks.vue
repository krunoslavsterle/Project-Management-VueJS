<template>
    <div class="table-responsive">
        <table class="table table-striped list-group-tasks">
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Project</td>
                    <td>Status</td>
                    <td>Due Date</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="task in tasks" :key="task.id">
                    <td>{{ task.name }}</td>
                    <td>{{ task.project }}</td>
                    <td>{{ task.status }}</td>
                    <td>{{ task.dueDate }}</td>
                    <td><a href="javascript:void(0)">View</a></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tasks: [
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
                ]
            }
        }
    }
</script>