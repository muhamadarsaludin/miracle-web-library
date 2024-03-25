import { useSlots } from "vue";

export default {
  data() {
    return {
      slots: useSlots()
    }
  },   
}