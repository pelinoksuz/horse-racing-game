import { createStore } from 'vuex'

const horseNames = [
  'Şimşek',
  'Yıldırım',
  'Rüzgar',
  'Kıvılcım',
  'Kahraman',
  'Karaelmas',
  'Gümüş',
  'Alp',
  'Fırtına',
  'Parıltı',
  'Kartal',
  'Savaşçı',
  'Kumsal',
  'Ayaz',
  'Poyraz',
  'Şahika',
  'Efsane',
  'Kutup',
  'Gölgem',
  'Zafer',
]

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
        '#A7F3D0',
        '#99E9C5',
        '#7DD3FC',
        '#93C5FD',
        '#C7D2FE',
        '#E9D5FF',
        '#FBCFE8',
        '#F9A8D4',
        '#FDE68A',
        '#FEF3C7',
        '#FCD34D',
        '#FDBA74',
        '#FED7AA',
        '#BFDBFE',
        '#C4B5FD',
        '#E0F2F1',
        '#D1FAE5',
        '#E2E8F0',
        '#F1F5F9',
        '#FAFAF9',
      ]

      const newHorses = []

      for (let i = 1; i <= 20; i++) {
        const randomName = horseNames[Math.floor(Math.random() * horseNames.length)]
        const color = colors[(i - 1) % colors.length]

        newHorses.push({
          id: i,
          name: randomName,
          condition: Math.floor(Math.random() * 100) + 1, // 1–100 condition score range
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
