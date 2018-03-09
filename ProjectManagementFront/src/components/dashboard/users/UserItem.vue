<template>
    <div class="col-md-4">
        <div class="widget">
            <div class="block">
                <img class="img-avatar img-xl pull-left" :src="user.profileImage">
                <div class="user-widget-div">
                    <div class="user-widget-title">
                        <span>{{ user.userName }}</span>
                    </div>
                    <div class="user-widget-body">
                        <span>{{ user.userRole }}</span><br />
                        <span>{{ user.email }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['user'],
    }
</script>