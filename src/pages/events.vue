<template>
  <!-- 测试属性
    events: Object
  -->
  <div>
    <ve-line :data="chartData" :events="events"></ve-line>
  </div>
</template>

<script>
import { LINE_DATA } from "./data";
export default {
  data() {
    this.events = {
      click(v) {
        // console.log("v", v);
      }
    };
    return {
      chartData: LINE_DATA
    };
  },
  mounted() {
    // console.log(LINE_DATA)
  },
};
</script>
