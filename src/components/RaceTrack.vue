<template>
  <section class="race-track">
    <div
      v-for="(horse, index) in raceHorses"
      :key="index"
      class="lane"
      :style="{ backgroundColor: horse.color }"
    >
      <div class="lane-number">{{ index + 1 }}</div>
      <div class="horse-section">
        <i class="horse-icon" :style="{ left: horsePositions[index] + '%', color: horse.color }"
          >🐎</i
        >

        <h3 class="horse-name">{{ horse.name }}</h3>
      </div>
    </div>

    <!-- Boş satırlar (henüz generate edilmediyse) -->
    <div v-for="n in 10 - raceHorses.length" :key="'empty-' + n" class="lane empty">
      <div class="lane-number">{{ raceHorses.length + n }}</div>
    </div>

    <div class="finish-line">FINISH</div>
  </section>
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue'

const props = defineProps({
  raceHorses: Array,
  running: Boolean,
})

const emit = defineEmits(['finish'])

const horsePositions = ref(Array(10).fill(0))
const finishedHorses = ref([])
let raceInterval = null

watch(
  () => props.running,
  (running) => {
    if (running) startRace()
    else stopRace()
  },
)

function startRace() {
  finishedHorses.value = []
  horsePositions.value = Array(10).fill(0)
  raceInterval = setInterval(() => {
    horsePositions.value = horsePositions.value.map((pos, i) => {
      const speed = Math.random() * 2 + 0.5
      const newPos = Math.min(pos + speed, 100)

      if (newPos >= 100 && !finishedHorses.value.includes(props.raceHorses[i])) {
        finishedHorses.value.push(props.raceHorses[i])

        if (finishedHorses.value.length === props.raceHorses.length) {
          stopRace()
          emit('finish', finishedHorses.value)
        }
      }

      return newPos
    })
  }, 100)
}

function stopRace() {
  clearInterval(raceInterval)
}

onUnmounted(stopRace)
</script>

<style scoped>
.race-track {
  width: 80%;
  position: relative;
  background: linear-gradient(90deg, #e0f2f1 0%, #cce8e6 100%);
  border-left: 4px solid var(--color-accent);
  border-right: 4px solid var(--color-accent);
  border-radius: 8px;
}

.lane {
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 1px dashed var(--color-border);
  font-weight: 600;
}

.lane-number {
  width: 40px;
  background: var(--color-secondary);
  color: var(--color-text-light);
  text-align: center;
}

.horse-section {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 24px;
}

.horse-icon {
  position: absolute;
  font-size: 32px;
  transform: scaleX(-1);
  transition: left 0.2s linear;
}

.horse-name {
  font-size: 16px;
  font-weight: 600;
  color: #33333383;
  margin-left: 80px; 
}

.empty {
  background: repeating-linear-gradient(45deg, #f3f3f3, #f3f3f3 10px, #ffffff 10px, #ffffff 20px);
}

.finish-line {
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  border-left: 3px solid var(--color-accent);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: var(--color-accent);
  font-weight: bold;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-size: 18px;
  letter-spacing: 2px;
  padding-top: 80px;
}
</style>
