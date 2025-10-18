<script setup>
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import HeaderBar from './components/HeaderBar.vue'
import HorseList from './components/HorseList.vue'
import RaceTrack from './components/RaceTrack.vue'
import RaceInfo from './components/RaceInfo.vue'

const store = useStore()
const currentRace = ref(0)

const generateProgram = () => {
  store.commit('RESET_RACE')
  store.dispatch('generateProgram')
}

const toggleRace = () => {
  store.dispatch('toggleRace')
}

const startAllRaces = async () => {
  currentRace.value = 0

  for (let i = 0; i < store.getters.totalRaces; i++) {
    currentRace.value = i + 1

    await runSingleRace(store.getters.raceDistances[i])
    await new Promise((resolve) => setTimeout(resolve, 2000))
  }

}


const runSingleRace = (distance) => {
  return new Promise((resolve) => {
    store.commit('TOGGLE_RACE')
    const unsubscribe = store.subscribe((mutation, state) => {
      if (mutation.type === 'SET_RACE_RESULTS') {
        resolve()
        unsubscribe()
      }
    })
  })
}

// Finish
const onFinish = (rankedList) => {
  store.commit('SET_RACE_RESULTS', rankedList)
}

const horses = computed(() => store.getters.horses)
const raceHorses = computed(() => store.getters.raceHorses)
const raceRunning = computed(() => store.getters.raceRunning)
const allResults = computed(() => store.getters.allResults)
</script>

<template>
  <div class="app-layout">
    <HeaderBar @generate="generateProgram" @toggleRace="startAllRaces" />

    <main class="main-content">
      <HorseList :horses="horses" />
      <RaceTrack :raceHorses="raceHorses" :running="raceRunning" @finish="onFinish" />
      <RaceInfo :raceHorses="raceHorses" :results="allResults" />
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
