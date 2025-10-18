<template>
  <aside class="race-info">
    <div class="program">
      <h3>Program</h3>
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(horse, index) in raceHorses" :key="horse.id">
            <td>{{ index + 1 }}</td>
            <td>{{ horse.name }}</td>
          </tr>

          <tr v-if="!raceHorses.length" v-for="n in 10" :key="'empty-' + n">
            <td>{{ n }}</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="results">
      <h3>Results</h3>
      <table>
        <thead>
          <tr>
            <th>Race</th>
            <th>Distance</th>
            <th>Position</th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="result in results" :key="result.race + '-' + result.position">
            <td>{{ result.race }}</td>
            <td>{{ result.distance }} m</td>
            <td>{{ result.position }}</td>
            <td :class="{ winner: result.position === 1 }">
              {{ result.position === 1 ? '🏆 ' : '' }}{{ result.name }}
            </td>
          </tr>

          <tr v-if="!results.length">
            <td colspan="4" style="color: #999">No results yet</td>
          </tr>
        </tbody>
      </table>
    </div>
  </aside>
</template>

<script setup>
defineProps({
  raceHorses: {
    type: Array,
    default: () => [],
  },
  results: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped>
.race-info {
  width: 25%;
  background: var(--color-primary);
  border-left: 2px solid var(--color-border);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 8px;
  overflow: hidden;
}

/* Tablo genel yapısı */
.race-info table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
}

/* Sticky başlık */
.race-info thead th {
  position: sticky;
  top: 0;
  background: var(--color-secondary);
  color: var(--color-text-light);
  border-bottom: 2px solid var(--color-accent);
  z-index: 2;
  padding: 8px;
  font-weight: 600;
}

/* Scroll için kap */
.results {
  flex: 1;
  max-height: 380px; /* tablo yüksekliği */
  overflow-y: auto;
  border: 1px solid var(--color-border);
  border-radius: 6px;
}

/* Satır stilleri */
.race-info td {
  border: 1px solid var(--color-border);
  padding: 6px;
  text-align: center;
  font-size: 14px;
  background: #ffffffa1;
}

.race-info tbody tr:nth-child(even) {
  background-color: rgba(15, 118, 110, 0.08);
}

/* Başlık alanı */
.results h3 {
  background-color: var(--color-secondary);
  border-bottom: 2px solid var(--color-accent);
  color: var(--color-text-light);
  margin: 0;
  padding: 8px;
  border-radius: 4px 4px 0 0;
  position: sticky;
  top: 0;
  z-index: 3;
}

/* Scrollbar tasarımı */
.results::-webkit-scrollbar {
  width: 8px;
}
.results::-webkit-scrollbar-thumb {
  background-color: var(--color-accent);
  border-radius: 4px;
}
.results::-webkit-scrollbar-thumb:hover {
  background-color: #0b5d56;
}

.winner {
  font-weight: bold;
  color: var(--color-accent);
}
</style>
