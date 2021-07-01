<template>
  <PartsCPU v-if="type === 'cpu'" :componentData="componentData" />
  <PartsMotherboard
    v-else-if="type === 'motherboard'"
    :componentData="componentData"
  />
  <PartsMemory v-else-if="type === 'memory'" :componentData="componentData" />
  <PartsGPU v-else-if="type === 'gpu'" :componentData="componentData" />
  <PartsCase v-else-if="type === 'case'" :componentData="componentData" />
  <PartsCaseFan v-else-if="type === 'caseFan'" :componentData="componentData" />
  <PartsMonitor v-else-if="type === 'monitor'" :componentData="componentData" />
  <PartsPowerSupply
    v-else-if="type === 'powerSupply'"
    :componentData="componentData"
  />
  <PartsStorage v-else-if="type === 'storage'" :componentData="componentData" />
</template>

<script>
import PartsCPU from "./parts/PartsCPU.vue";
import PartsMotherboard from "./parts/PartsMotherboard.vue";
import PartsMemory from "./parts/PartsMemory.vue";
import PartsGPU from "./parts/PartsGPU.vue";
import PartsCase from "./parts/PartsCase.vue";
import PartsStorage from "./parts/PartsStorage.vue";
import PartsPowerSupply from "./parts/PartsPowerSupply.vue";
import PartsMonitor from "./parts/PartsMonitor.vue";
import PartsCaseFan from "./parts/PartsCaseFan.vue";

export default {
  name: "PickPartsComponent",
  props: ["componentData", "type"],
  components: {
    PartsCPU,
    PartsMotherboard,
    PartsMemory,
    PartsGPU,
    PartsCase,
    PartsStorage,
    PartsPowerSupply,
    PartsMonitor,
    PartsCaseFan,
  },
};
</script>

<style></style>
