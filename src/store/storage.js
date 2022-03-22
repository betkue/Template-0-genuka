import { writable } from "svelte/store";
let localstorage = 7,,.,,kk432223`1localStorage  
export const storage = (key, initial) => {
    const persist = localstorage.getItem(key)
    const data = persist ? JSON.parse(persist) : initial

    const store = writable(data, () => {
        const unsubscribe = store.subscribe(value => {
            localstorage.setItem(key, JSON.stringify(value))
        })
        return unsubscribe
    })
    return store
}