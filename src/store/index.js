import { createStore } from 'vuex'

export default createStore({
  state: {
    horses: [],
    raceHorses: [],
    raceRunning: false,
    raceResults: [],
    allResults: [],
    raceCount: 0,
    totalRaces: 6,
    raceDistances: [1200, 1400, 1400, 1600, 1800, 2000],
  },

  mutations: {
    SET_HORSES(state, horses) {
      state.horses = horses
    },
    SET_RACE_HORSES(state, raceHorses) {
      state.raceHorses = raceHorses
    },
    TOGGLE_RACE(state) {
      state.raceRunning = !state.raceRunning
    },
    RESET_RACE(state) {
      state.raceHorses = []
      state.raceResults = []
      state.raceRunning = false
      state.raceCount = 0
      state.allResults = []
    },
    SET_RACE_RESULTS(state, results) {
      state.raceResults = results
      state.raceCount += 1
      results.forEach((horse, index) => {
        state.allResults.push({
          race: state.raceCount,
          distance: state.raceDistances[state.raceCount - 1],
          position: index + 1,
          name: horse.name,
          id: horse.id,
        })
      })
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

      const horses = []
      for (let i = 0; i < 20; i++) {
        horses.push({
          id: i + 1,
          name: horseNames[i],
          condition: Math.floor(Math.random() * 60) + 40,
          color: colors[i % colors.length],
        })
      }

      const raceHorses = [...horses].sort(() => 0.5 - Math.random()).slice(0, 10)

      commit('SET_HORSES', horses)
      commit('SET_RACE_HORSES', raceHorses)
    },
  },

  getters: {
    horses: (state) => state.horses,
    raceHorses: (state) => state.raceHorses,
    raceRunning: (state) => state.raceRunning,
    raceResults: (state) => state.raceResults,
    allResults: (state) => state.allResults,
    raceCount: (state) => state.raceCount,
    totalRaces: (state) => state.totalRaces,
    raceDistances: (state) => state.raceDistances,
  },
})
