<template>
    <div>
        <pm-user-item v-for="user in userList" :key="user.id" :user="user"></pm-user-item>
    </div>
</template>

<script>
    import UserItem from './UserItem.vue';

    export default {
        computed: {
            userList() {
                return this.$store.getters.usersModel;
            }
        },
        components: {
            'pm-user-item': UserItem
        },
        created() {
            this.$store.dispatch('refreshUsersModel');
        }
    }
</script>
