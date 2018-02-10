<template>
    <div class="site-menubar">
        <div class="site-menubar-body">
            <ul class="nav-menu">
                <router-link to="/dashboard" :class="{'nav-item-active': isHome}" tag="li"><a><i class="glyphicon glyphicon-home"></i><span>Home</span></a></router-link>
                <router-link to="/dashboard/projects" :class="{'nav-item-active': isProjects}" tag="li"><a><i class="glyphicon glyphicon-th-large"></i><span>Projects</span></a></router-link>
                <router-link to="/dashboard/users" activeClass="nav-item-active" tag="li"><a><i class="glyphicon glyphicon-user"></i><span>Users</span></a></router-link>
               
               <template v-if="isProjectGroup">
                   <hr />
                    <router-link to="/dashboard/projects/12345/overview" :class="{'nav-item-active': $route.name === 'ProjectOverview'}" tag="li"><a><i class="glyphicon glyphicon-stats"></i><span>Overview</span></a></router-link>
                    <router-link to="/dashboard/projects/12345/timeline" :class="{'nav-item-active': $route.name === 'ProjectTimeline'}" tag="li"><a><i class="glyphicon glyphicon-time"></i><span>Timeline</span></a></router-link>
                    <router-link to="/dashboard/projects/12345/tasks" :class="{'nav-item-active': $route.name === 'ProjectTasks'}" tag="li"><a><i class="glyphicon glyphicon-tasks"></i><span>Tasks</span></a></router-link>
                    <router-link to="/dashboard/projects/12345/team" :class="{'nav-item-active': $route.name === 'ProjectTeam'}" tag="li"><a><i class="glyphicon glyphicon-user"></i><span>Team</span></a></router-link>
               </template>               
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        isHome() {
            return this.$route.fullPath === '/dashboard';
        },        
        isProjectGroup() {
            return this.$route.meta.group === 'Project';
        },
        isProjects() {
            return this.$route.name === 'Projects';
        }
    }
}

</script>

<style>

.nav-menu {
    margin-top: 20px;
    padding: 0;
    list-style: none;
    font-size: 18px;
    color: #646464;
}
.nav-menu>li>a {
    display: block;
    padding: 10px 20px;
    color: rgba(255,255,255,0.5);
}
.nav-menu>li>a:hover {
    text-decoration: none;
    background-color: #232a32;;
}
.nav-menu>li>a:hover .glyphicon{
    color: #f8f8f8;
}
.nav-item-active .glyphicon,
.nav-item-active>a>span {
    color: #f8f8f8;
}

.nav-menu>li>a>i {
    display: inline-block;
    min-width: 14px;
    margin-right: 15px;
    color: rgba(255,255,255,0.2);
}

.site-menubar {
    width: 230px;
    position: fixed;
    top: 60px;
    height: calc(100% - 60px);
    background: #2c343f;
    color: rgba(163,175,183,.9);
    font-family: Roboto,sans-serif;
    box-shadow: 0 2px 4px rgba(0,0,0,.08);
}

.site-menubar-body {
    position: relative;
    height: calc(100% - 76px);
}

.site-menubar-footer {
    width: 230px;
    position: fixed;
    bottom: 0;
    display: block;
    background: red;
}

.site-menubar-footer>a {
    font-size: 16px;
    float: left;
    width: 33.3333%;
    height: 76px;
    padding: 26px 0;
    color: #76838f;
    text-align: center;
    background-color: #21292e;
}

.site-menubar-footer>a:hover {
    background-color: #161B1F;
}

</style>