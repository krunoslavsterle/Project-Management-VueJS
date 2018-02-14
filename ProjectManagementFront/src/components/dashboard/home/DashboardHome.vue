<template>
    <div>
        <!-- Profile widget -->
        <pm-profile></pm-profile>

        <div class="col-md-9">
                <div class="widget profile-activity">
                    <ul class="nav nav-tabs nav-tabs-line" data-plugin="nav-tabs" role="tablist">

                        <li :class="{active: isActivityTab}">
                            <a href="javascript:void(0)" @click="isActivityTab = true">Activities</a>
                        </li>

                        <li :class="{active: !isActivityTab}">
                            <a href="javascript:void(0)" @click="isActivityTab = false">Tasks</a>
                        </li>
                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane" :class="{active: isActivityTab}">
                            <pm-profile-activity></pm-profile-activity>
                        </div>

                        <div class="tab-pane" :class="{active: !isActivityTab}">
                            <pm-profile-tasks></pm-profile-tasks>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    import Profile from './Profile.vue';
    import ProfileActivity from './ProfileActivity.vue';
    import ProfileTasks from './ProfileTasks.vue';

    export default {
        data() {
            return {
                isActivityTab: true
            }
        },
        components: {
            'pm-profile': Profile,
            'pm-profile-activity': ProfileActivity,
            'pm-profile-tasks': ProfileTasks
        }
    }
</script>
