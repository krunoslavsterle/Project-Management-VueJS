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
                const pm = this.$store.getters.projectsModel;
                console.log(pm);
                return pm;
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
