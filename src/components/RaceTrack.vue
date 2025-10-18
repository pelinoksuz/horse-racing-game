<template>
  <section class="race-track">
    <div v-for="n in 10" :key="n" class="lane">
      <div class="lane-number">{{ n }}</div>
      <div class="horse-icon">🐎</div>
    </div>
    <div class="finish-line">FINISH</div>
  </section>
</template>

<script setup></script>

<style scoped>
.race-track {
  width: 80%;
  position: relative;
  background: linear-gradient(90deg, #e0f2f1 0%, #cce8e6 100%);
  border-left: 4px solid var(--color-accent);
  border-right: 4px solid var(--color-accent);
}
.lane {
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px dashed var(--color-border);
}
.lane-number {
  width: 40px;
  background: var(--color-secondary);
  color: var(--color-text-light);
  text-align: center;
}
.horse-icon {
  position: absolute;
  left: 100px;
  font-size: 28px;
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
