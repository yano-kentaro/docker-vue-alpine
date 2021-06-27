<template>
  <f7-page name="schedule">
    <Calendar />
  </f7-page>
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