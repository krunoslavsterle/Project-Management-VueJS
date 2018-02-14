<template>
    <div class="col-md-3">
            <div class="widget">
                <div class="block block-profile">
                    <img class="img-avatar" :src="profile.img">
                    <h3>{{ profile.name }}</h3>
                </div>

                <div class="block block-profile-role">
                    <h3>{{ profile.role }}</h3>
                </div>
                <div class="block block-profile-footer">
                    <div class="row text-center">
                        <div class="col-xs-6">
                            <h3>{{ profile.projectsNumber }}</h3>
                            <h5>Projects</h5>
                        </div>
                        <div class="col-xs-6">
                            <h3>{{ profile.tasksNumber }}</h3>
                            <h5>Tasks</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        data() {
            return {
                profile: {
                    name: 'Krunoslav Šterle',
                    role: 'Web Developer',
                    projectsNumber: 25,
                    tasksNumber: 176,
                    img: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg'
                }
            }
        }
    }
</script>
