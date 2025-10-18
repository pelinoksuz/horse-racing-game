import { createStore } from 'vuex'

export default createStore({
  state: {
    horses: [],
    raceRunning: false,
  },

  mutations: {
    SET_HORSES(state, horses) {
      state.horses = horses
    },
    TOGGLE_RACE(state) {
      state.raceRunning = !state.raceRunning
    },
  },

  actions: {
    generateProgram({ commit }) {
      const colors = [
        '#A7F3D0', // soft mint
        '#99E9C5', // mint green
        '#7DD3FC', // light blue
        '#93C5FD', // sky blue
        '#C7D2FE', // soft indigo
        '#E9D5FF', // lavender
        '#FBCFE8', // pink
        '#F9A8D4', // light rose
        '#FDE68A', // light yellow
        '#FEF3C7', // pale cream
        '#FCD34D', // amber
        '#FDBA74', // soft orange
        '#FED7AA', // peach
        '#BFDBFE', // baby blue
        '#C4B5FD', // pastel violet
        '#E0F2F1', // light teal (theme tone)
        '#D1FAE5', // soft green
        '#E2E8F0', // neutral gray
        '#F1F5F9', // light gray-blue
        '#FAFAF9', // off-white
      ]

      const newHorses = []

      for (let i = 1; i <= 20; i++) {
        const color = colors[(i - 1) % colors.length] // renkleri sırayla kullan (görsel uyum sağlar)

        newHorses.push({
          id: i,
          name: `Horse ${i}`,
          condition: Math.floor(Math.random() * 60) + 40, // 40–100 arası kondisyon
          color,
        })
      }

      commit('SET_HORSES', newHorses)
    },
    toggleRace({ commit }) {
      commit('TOGGLE_RACE')
    },
  },

  getters: {
    horses: (state) => state.horses,
    raceRunning: (state) => state.raceRunning,
  },
})
