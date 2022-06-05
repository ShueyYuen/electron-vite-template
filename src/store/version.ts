import { defineStore } from 'pinia'

const useStore = defineStore('version', {
  state: () => ({
    major: 0,
    minor: 1,
    patch: 3,
  }),
  getters: {
    version(state) {
      return `${state.major}.${state.minor}.${state.patch}`;
    }
  },
  actions: {
    increment() {
      this.patch++
    }
  }
})

export default useStore

