<template>
  <div class="schedule">
    <Calendar />
  </div>
</template>

<script>
import Calendar from '@/components/Calendar.vue'

export default {
  name: 'Schedule',
  components: {
    Calendar
  }
}
</script>