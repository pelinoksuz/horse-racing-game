<script setup>
import HeaderBar from './components/HeaderBar.vue'
import HorseList from './components/HorseList.vue'
import RaceTrack from './components/RaceTrack.vue'
import RaceInfo from './components/RaceInfo.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const horses = computed(() => store.getters.horses)

const generateProgram = () => {
  store.dispatch('generateProgram')
}

const toggleRace = () => {
  store.dispatch('toggleRace')
}
</script>

<template>
  <div class="app-layout">
    <HeaderBar
      @generate="generateProgram"
      @toggleRace="toggleRace"
    />

    <main class="main-content">
      <HorseList :horses="horses" />
      <RaceTrack />
      <RaceInfo />
    </main>
  </div>
</template>


<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  display: flex;
  flex: 1;
  justify-content: space-between;
  width: 100%;
}
</style>
