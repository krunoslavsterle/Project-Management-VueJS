<template>
    <div>
        <pm-dashboard-header></pm-dashboard-header>
        <pm-nav-menu></pm-nav-menu>
        <div class="page">
            <div class="page-content-header">
                <span class="breadcrumbs">
                    <span>Home</span>
                </span>
                <div class="header-content-right">
                    <!--Add btn here-->
                </div>
            </div>

            <div class="page-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
  import DashboardHeader from './DashboardHeader.vue';
  import NavigationMenu from './NavigationMenu.vue';

  export default {
      components: {
          'pm-dashboard-header': DashboardHeader,
          'pm-nav-menu': NavigationMenu
      }
 }
</script>
