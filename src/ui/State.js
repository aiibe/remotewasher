import { writable } from 'svelte/store'

const isRunning = writable(false)
const modalOpen = writable(false)
const selectedMode = writable('Standard')
const timer = writable(45 * 60 * 1000) // ms

export { isRunning, modalOpen, selectedMode, timer }
