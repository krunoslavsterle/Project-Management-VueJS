<template>
                            
    <ul class="list-group">
        <li v-for="activity in profileActivitiesModel" :key="activity.id" class="list-group-item">
            <div class="row">                
                <div class="col-xs-10">
                    <i :class="getClassByType(activity.type)"></i>{{ activity.description }} 
                </div>
                <div class="col-xs-2">
                    {{ activity.timestamp }}
                </div>
            </div>
        </li>          
    </ul>

</template>

<script>
    export default {
        methods: {
            getClassByType(activityType) {
                if (activityType === 'General') {
                    return 'glyphicon glyphicon-tag activity-icon color-general';
                } else if (activityType === 'Info') {
                    return 'glyphicon glyphicon-flag activity-icon color-info';
                } else if (activityType === 'Warning') {
                    return 'glyphicon glyphicon-bell activity-icon color-warning';
                } else if (activityType === 'Alert') {
                    return 'glyphicon glyphicon-flash activity-icon color-alert';
                }
            }
        }, 
        computed: {
            profileActivitiesModel() {
                return this.$store.getters.profileActivitiesModel;
            }
        },
        created() {
            this.$store.dispatch('refreshProfileActivitiesModel');
        }
        
    }
</script>
