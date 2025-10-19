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
        <tr v-for="horse in horses" :key="horse.id" :style="{ backgroundColor: horse.color }">
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
</script>

<style scoped>
.horse-list {
  background: var(--color-primary);
  border-right: 4px solid var(--color-border);
  border-radius: 8px;
  padding: 16px;
}

.horse-list h3 {
  color: var(--color-secondary);
  background: rgba(15, 118, 110, 0.1);
  border-left: 8px solid var(--color-accent);
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 600;
  padding: 8px;
  width: 220px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background: var(--color-secondary);
  color: var(--color-text-light);
  font-size: 16px;
}

td {
  font-size: 12px;
  color: var(--vt-c-text-light-1);
}

th,
td {
  padding: 4px;
  border: 4px solid var(--vt-c-divider-light-2);
  text-align: left;
}

tbody tr:hover {
  background: rgba(15, 118, 110, 0.08);
}
</style>
