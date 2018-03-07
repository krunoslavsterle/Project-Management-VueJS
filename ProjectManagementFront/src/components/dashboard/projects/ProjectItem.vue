<template>
    <div class="col-md-3">
            <div class="widget">
                <div class="block-project">
                    <a href="javascript:void(0);">{{ project.name }}</a>
                </div>
                <div class="block block-team text-center">
                    <ul>
                        <li v-for="user in project.users" :key="user.userName">
                            <img class="img-avatar img-sm" :src="user.profileImage">
                        </li>                                               
                    </ul>
                </div>

                <div class="block block-profile-footer">
                    <div class="row text-center">
                        <div class="col-xs-4">
                            <a href="javascript:void(0);" class="profile-link">
                                <h3>{{ project.numberOfTasks }}</h3>
                                <h5>Tasks</h5>
                            </a>
                        </div>
                        <div class="col-xs-4">
                            <a href="javascript:void(0);" class="profile-link">
                                <h3>{{ project.numberOfCompletedTasks }}</h3>
                                <h5>Completed</h5>
                            </a>
                        </div>
                        <div class="col-xs-4">
                            <a href="javascript:void(0);" class="profile-link profile-late">
                                <h3>{{ project.numberOfLateTasks }}</h3>
                                <h5>Late</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
    export default {
        props: ['project'],
    }
</script>
