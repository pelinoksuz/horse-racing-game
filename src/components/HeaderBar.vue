<template>
  <header class="app-header">
    <h1 class="app-title">🏇 Horse Racing Simulation</h1>
    <div class="controls">
      <button @click="$emit('generate')">Generate Program</button>
      <button @click="$emit('toggleRace')">Start / Pause</button>
    </div>
  </header>
</template>

<script setup>
// Şimdilik event emit ediliyor
</script>

<style>
.app-header {
  background: var(--color-secondary);
  color: var(--color-text-light);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 8px var(--vt-c-divider-light-2);
}

.controls button {
  margin-right: 8px;
  background: var(--color-accent);
  color: var(--color-text-light);
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-weight: 600;
  cursor: pointer;
}

.controls button:hover {
  background: #0b5d56;
}
</style>
