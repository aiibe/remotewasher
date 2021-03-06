import { writable } from 'svelte/store'

const power = writable(false)
const isRunning = writable(false)
const modalOpen = writable(false)
const selectedMode = writable('')
const timer = writable(0) // ms
const waterLevel = writable(550) // max 1200

export { isRunning, modalOpen, selectedMode, timer, power, waterLevel }
