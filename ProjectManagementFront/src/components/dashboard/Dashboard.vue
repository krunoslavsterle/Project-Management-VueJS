<template>
    <div>
        <pm-dashboard-header></pm-dashboard-header>
        <pm-nav-menu></pm-nav-menu>
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