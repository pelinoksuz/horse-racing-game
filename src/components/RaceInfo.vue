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
          <tr v-for="n in 10" :key="n">
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
            <th>Position</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="n in 10" :key="n">
            <td>{{ n }}</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
    </div>
  </aside>
</template>

<script setup></script>

<style scoped>
.race-info {
  width: 25%;
  background: var(--color-primary);
  border-left: 2px solid var(--color-border);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.race-info table {
  width: 100%;
  border-collapse: collapse;
}
.race-info th,
.race-info td {
  border: 1px solid var(--color-border);
  padding: 3px;
  text-align: center;
}
.program h3 {
  background-color: var(--color-secondary);
  border-bottom: 2px solid var(--color-accent);
  color: var(--color-text-light);
  margin: 0;
  padding: 5px;
}
.results h3 {
  background-color: var(--color-secondary);
  border-bottom: 2px solid var(--color-accent);
  color: var(--color-text-light);
  margin: 0;
  padding: 5px;
}
</style>
