<template>
  <div class="app-err">
    <h5><slot></slot></h5>
  </div>
</template>

<script>
export default {
  name: 'AppError',
};
</script>

<style lang="scss">
.app-err {
  color: var(--white-color);
  text-align: center;
  background-color: var(--purple-clor);
}
</style>
