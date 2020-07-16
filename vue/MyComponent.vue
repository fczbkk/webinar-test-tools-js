<template>
  <div>
    {{ greeting }} world
    <ChildComponent />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'
export default {
  components: {
    ChildComponent
  },
  data () {
    return {
      greeting: 'hello'
    }
  }
}
</script>
