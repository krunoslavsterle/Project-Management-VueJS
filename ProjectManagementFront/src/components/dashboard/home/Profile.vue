<template>
    <div class="col-md-3">
            <div class="widget">
                <div class="block block-profile">
                    <img class="img-avatar img-lg" :src="profileModel.profileImage">
                    <h3>{{ profileModel.userName }}</h3>
                </div>

                <div class="block block-profile-role">
                    <h3>{{ profileModel.userRole }}</h3>
                </div>
                <div class="block block-profile-footer">
                    <div class="row text-center">
                        <div class="col-xs-6">
                            <h3>{{ profileModel.numberOfProjects }}</h3>
                            <h5>Projects</h5>
                        </div>
                        <div class="col-xs-6">
                            <h3>{{ profileModel.numberOfTasks }}</h3>
                            <h5>Tasks</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            profileModel() {
                return this.$store.getters.profileModel;
            }
        }, 
        created() {
            this.$store.dispatch('refreshProfileModel');
        }
    }
</script>
