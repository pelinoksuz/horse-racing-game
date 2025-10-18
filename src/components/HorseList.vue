<template>
  <aside class="horse-list">
    <h3>Horse List (1 - 10)</h3>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Condition</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="horse in horses"
          :key="horse.id"
          :style="{ backgroundColor: horse.color, color: getTextColor(horse.color) }"
        >
          <td>{{ horse.name }}</td>
          <td>{{ horse.condition }}</td>
        </tr>
      </tbody>
    </table>
  </aside>
</template>

<script setup>
defineProps({
  horses: Array,
})

const getTextColor = (bgColor) => {
  const darkColors = ['red', 'blue', 'green', 'purple', 'brown']
  return darkColors.includes(bgColor.toLowerCase()) ? 'white' : 'black'
}
</script>

<style scoped>
.horse-list {
  background: var(--color-primary);
  border-right: 2px solid var(--color-border);
  border-radius: 6px;
  padding: 12px;
  box-shadow: 0 2px 6px rgba(26, 34, 56, 0.15);
}

.horse-list h3 {
  color: var(--color-secondary);
  background: rgba(15, 118, 110, 0.1);
  border-left: 5px solid var(--color-accent);
  padding: 8px 10px;
  border-radius: 4px;
  font-weight: 600;
  padding: 10px;
  width: 220px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background: var(--color-secondary);
  color: var(--color-text-light);
  padding: 8px;
}

td {
  padding: 8px;
  border-bottom: 1px solid var(--color-border);
}
th,
td {
  padding: 5px;
  border: 1px solid #ccc;
  font-size: 13px;
  text-align: left;
}

tbody tr:hover {
  background: rgba(15, 118, 110, 0.08);
}
</style>
