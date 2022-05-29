<template>
  <div
    class="alert alert-dismissible fade show"
    :class="'alert-' + type"
    role="alert"
  >
    <slot></slot>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      required: true,
      type: String,
    },
  },
};
</script>
