<template>
  <div class="panel">
    <div class="header">
      <slot name="header" />
    </div>
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Panel"
};
</script>

<style lang="less">
.panel {
  width: 100%;
  border-radius: 4px;
  .header {
    padding: 10px;
    background-color: #f6f6f6;
    color: #51585c;
  }
  .content {
    padding: 10px;
    background-color: white;
  }
}
</style>
