<template>
    <div>
        <pm-header></pm-header>
        <pm-landing></pm-landing>
    </div>
</template>

<script>
  import Header from './Header.vue';
  import Landing from './Landing.vue';
  
  export default {
      components: {
          'pm-header': Header,
          'pm-landing': Landing,
      }
  }
</script>