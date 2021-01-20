<template>
  <div>
    <n-stepper/>
    <router-view></router-view>
  </div>
</template>

<script>
import NStepper from '@/components/NStepper'

export default {
  components: {
    NStepper
  },
}
</script>