// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('KubeJS Startup complete (Loaded startup scripts)')

ItemEvents.modification(event => {
    //Modify any item here
    event.modify("minecraft:potion", item => {item.setMaxStackSize(16)})
    event.modify("minecraft:splash_potion", item => {item.setMaxStackSize(16)})
    event.modify("minecraft:lingering_potion", item => {item.setMaxStackSize(16)})
})