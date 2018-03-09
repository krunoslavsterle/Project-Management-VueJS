<template>
    <div>
        <pm-project-item v-for="project in projectList" :key="project.id" :project="project"></pm-project-item>
    </div>
</template>

<script>
    import ProjectItem from './ProjectItem.vue';

    export default {   
        computed: {
            projectList() {
                return this.$store.getters.projectsModel;
            }
        },  
        components: {
            'pm-project-item': ProjectItem
        },
        created() {
            this.$store.dispatch('refreshProjectsModel');
        }
    }
</script>
