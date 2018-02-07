<template>
    <nav class="navbar navbar-default navbar-fixed-top pm-site-navbar" role="navigation">

        <!-- NAVBAR HEADER -->
        <div class="pm-navbar-header">
            <button type="button" class="navbar-toggle hamburger hamburger-close navbar-toggle-left hided unfolded" data-toggle="menubar">
                <span class="sr-only">Toggle navigation</span>
                <span class="hamburger-bar"></span>
            </button>
        </div>

        <!-- NAVBAR CONTAINER -->
        <div class="navbar-container container-fluid">
            <div class="nav">
                <ul class="nav navbar-toolbar navbar-left">
                    <li>
                        <a href="javascript:void(0)" title="Notifications" role="button">
                            <i class="glyphicon glyphicon-bell" aria-hidden="true"></i>
                        </a>
                    </li>

                    <li>
                        <a href="javascript:void(0)" title="Messages" role="button">
                            <i class="glyphicon glyphicon-envelope" aria-hidden="true"></i>
                        </a>
                    </li>
                </ul>

                <!-- NAVBAR RIGHT BUTTONS PANEL -->
                <div class="navbar-right pm-navbar-right">
                    <ul class="nav navbar-toolbar navbar-right navbar-toolbar-right">
                        <li>
                            <div class="button-group">
                                <button class="btn btn-sm btn-default btn-image" type="button">
                                    <img src="img/user.gif" class="">
                                    <span class="caret"></span>
                                </button>
                            </div>
                        </li>
                    </ul>

                    <ul class="nav navbar-toolbar navbar-right navbar-toolbar-right navbar-toolbar-group">
                    </ul>
                </div>

            </div>
        </div>
    </nav>
</template>

<style>
  
.navbar {
    border: none;
    -webkit-box-shadow: "0 2px 5px rgba(0, 0, 0, .02)";
    box-shadow: 0 2px 5px rgba(0,0,0,0.02);
    margin-bottom: 60px;
}

.pm-site-navbar {
    height: 60px;
    border: 0px;
}

.pm-navbar-header {
    width: 230px;
    float: left;
    background-color: #40454D;
    height: 60px;
}

.navbar-container {
    margin-left: 230px;
    background-color: #fff;
}

.nav.navbar-toolbar {
    padding-top: 13px;
    height: 34px;
}

.pm-navbar-right {
    float: right !important;
    margin-right: 45px;
}

.navbar-left>li>a {
    font-size: 5px;
}
.navbar-left>li>a:hover {
    background-color: transparent;
}

.navbar-toolbar-group {
    padding-right: 50px;
}

.navbar-toolbar>li {
    float: left;
}

.navbar-toolbar.navbar-left>li{
    padding-top: 5px;
    padding-left: 30px;
}

.navbar-toolbar>li>a {
    line-height: 2px;
    font-size: 22px;
    color: #76838f;
}

.nav>li>a {
    padding: 0;
}

.navbar-toolbar>li>a:hover {
    color: #6894B0;
    background-color: #FAFAFA;
}

.button-group {
    position: relative;
    display: inline-block;
    vertical-align: middle;       
}

.btn.btn-image {
    position: relative;
    padding-left: 40px;
    background-color: #f5f5f5;
    border-radius: 2px;
}

.btn.btn-image>img {

    position: absolute;
    top: 3px;
    left: 3px;
    display: block;
    width: 22px;
    height: 22px;
    border-radius: 2px;
}

</style>