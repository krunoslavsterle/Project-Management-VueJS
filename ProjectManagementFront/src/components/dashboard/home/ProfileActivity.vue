<template>
                            
    <ul class="list-group">
        <li v-for="activity in activities" :key="activity.id" class="list-group-item">
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
        data() {
            return {
                activities: [
                    {
                        id: '1',
                        description: 'John Doe has updated your role.',
                        timestamp: '11:45',
                        type: 'General'
                    },
                    {
                        id: '2',
                        description: 'You have completed task #4567.',
                        timestamp: 'Yesterday',
                        type: 'Info'
                    },
                    {
                        id: '3',
                        description: 'John Doe has updated the status of a task: #236 to: in progress.',
                        timestamp: 'Yesterday',
                        type: 'Warning'
                    },
                    {
                        id: '4',
                        description: 'John Doe has sent a new message to you.',
                        timestamp: 'Friday',
                        type: 'Alert'
                    },
                    {
                        id: '5',
                        description: 'John Doe has assigned task #546 to you.',
                        timestamp: 'Monday',
                        type: 'Alert'
                    },
                    {
                        id: '6',
                        description: 'You have completed task #4679.',
                        timestamp: 'Monday',
                        type: 'Info'
                    },
                    {
                        id: '7',
                        description: 'You have completed task #4699.',
                        timestamp: 'Last Week',
                        type: 'Info'
                    }
                ]
            }
        }
    }
</script>
