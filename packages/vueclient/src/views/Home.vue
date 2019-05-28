<template>
  <div class="hello">
    Content in home
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// import { PipelineView } from 'livspace-pipeline';

@Component({
  components: {
    HelloWorld,
    // PipelineView
  },
})
export default class Home extends Vue {}
</script>
