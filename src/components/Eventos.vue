<template>
  <div id="app">
    <calendar
      :first-day="1"
      :all-events="events"
      :canAddEvent="true"
      :canDeleteEvent="true"
      @eventAdded="eventAdded"
      @eventDeleted="eventDeleted"
    ></calendar>
  </div>
</template>

<script>
import { Calendar } from "vue-bootstrap4-calendar";
export default {
  name: "app",
  data() {
    return {
      events: []
    };
  },
  components: {
    Calendar
  },
  methods: {
    eventAdded(event) {
      this.events.push(event);
    },
    eventDeleted(event) {
      this.events.splice(this.events.indexOf(event), 1);
    }
  },
  mounted() {
    let me = this;
    setTimeout(function() {
      me.events = [
        {
          id: 1,
          title: "Descanso",
          description: "Dia descanso",
          color: "card-info card-inverse",
          date: new Date("2019-10-07")
        },
        {
          id: 1,
          title: "Diplomado",
          description: "Presentacion proyecto",
          color: "card-info card-inverse",
          date: new Date()
        }
      ];
    }, 1000);
  }
};
</script>