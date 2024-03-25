<template>
  <div>
    <h1>Hallo world!</h1>
    <MiracleBadge>
      <template #leading-icon>
        <span class="material-symbols-rounded">
          person
        </span>
      </template>
      Badge Label
      <template #trailing-icon>
        <span class="material-symbols-rounded">
          person
        </span>
      </template>
    </MiracleBadge>
  </div>
</template>

<script>
  import MiracleBadge from '../components/badge/Badge.vue'
  export default {
    components: {
      MiracleBadge
    }
  }
</script>

<style lang="scss" scoped>
</style>