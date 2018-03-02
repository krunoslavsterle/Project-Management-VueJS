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
                <tr v-for="task in profileTasksModel" :key="task.id">
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
        computed: {
            profileTasksModel() {
                return this.$store.getters.profileTasksModel;
            }
        },
        created() {
            this.$store.dispatch('refreshProfileTasksModel');
        }
    }
</script>