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

<style>
/* PAGE */
.page {
    margin-left: 230px;
    min-height: calc(100% - 44px);
    background: #f5f5f5;
    position: relative;
}
.page-content-header {
    margin: 10px 30px 10px 30px;

}
.page-content-header .header-content-right {
    float: right;
}

.breadcrumbs {
   line-height: 30px;
}
.page-content {
    padding: 0px 30px 30px 30px;
    margin-right: auto;
    margin-left: auto;    
}

/* WIDGETS */
.widget {
    border-radius: 3px;
    background-color: #fff;
    margin-bottom: 30px;
    position: relative;
}

.widget-shadow {
    box-shadow: 0 1px 1px rgba(0,0,0,.05);
}

.widget-header {
    background-color: #fff;
    border-radius: 3px 3px 0 0;
}

.block {
    padding: 20px 20px;
}

.block-profile {
    text-align: center;
    padding-top: 40px;
}
.block-profile>h3 {
    font-size: 23px;
    font-weight: 600;
    color: #5a7391;
    padding-top: 15px;
}
.img-avatar {
    display: inline-block !important;
    border-radius: 50%;
    width: 96px;
    height: 96px;
    vertical-align: middle;
}
.block-profile-role {
    text-align: center;
    padding-bottom: 25px;
    padding-top: 25px;
    background-color: #f9f9f9;
}

.block-profile-role>h3 {
    font-size: 16px;
    font-weight: 600;
    color: #5a7391;
    margin: 0;
}

.block-profile-footer {
    font-size: 25px;
    padding-bottom: 15px;
    padding-top: 15px;
}

.block-header {
    padding-top: 4px;
    padding-bottom: 4px;
    background-color: #f9f9f9;
}
.block-header-title {
    font-size: 15px;
    color: #797979 !important;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-transform: uppercase;
}
.block-header-link {
    margin-top: 10px;
    font-size: 15px;
    color: #999999;
}
.block-header-link>a {
    color: #999999;
}
.block-project {
    text-align: center;
}
.block-project>h3 {
    font-size: 23px;
    font-weight: 600;
    color: #5a7391;
}
.block-project-chart {
    border-radius: 50%;
    height: 230px;
    width: 230px;
    margin: auto;
    vertical-align: middle;
    margin-top: 30px;
}

.profile-activity {
    padding: 30px 30px;
}

.list-group {
    padding-left: 0;
    padding-top: 10px;
    margin-bottom: 20px;    
    
}
.list-group-item {
    border-color: transparent;
    border-bottom: 1px solid #e4eaec;
    margin-bottom: 0px;
}
.list-group-tasks {
    padding-left: 0;
    margin-top: 20px;
    margin-bottom: 20px;    
    
}

.activity-icon {
    
    padding: 10px;
    margin-right: 15px;
    color: white;
}

.color-warning {
    background-color: #F1C40F;
}
.color-alert {
    background-color: #ed6b75;
}
.color-general {
    background-color: #bac3d0;
}
.color-info {
    background-color: #36c6d3;
}
.color-success {
    background-color: #46be8a;
}

.text-center {
    text-align: center;
}
.datepicker-container {
    z-index: 1151 !important;
}
.table-striped>tbody>tr>td {
    border: 0;
    vertical-align: middle;
    font-size: 14px;
    padding-top: 15px;
    padding-bottom: 15px;
}

.table-striped>tbody>tr:nth-child(odd)>td,
.table-striped>tbody>tr:nth-child(odd)>th {
	background-color: #fcfdfd;
}
</style>
