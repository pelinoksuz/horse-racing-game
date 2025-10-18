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
  padding: 12px 24px;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 3px 8px rgba(26, 34, 56, 0.4);
}

.controls button {
  background: var(--color-accent);
  color: var(--color-text-light);
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.controls button:hover {
  background: #0b5d56;
}
</style>
