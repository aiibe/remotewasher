import { writable } from 'svelte/store'

const isRunning = writable(false)
const waterWindow = writable(false)
const selectedMode = writable({ name: 'Standard', minutes: 45 })

export { isRunning, waterWindow, selectedMode }
