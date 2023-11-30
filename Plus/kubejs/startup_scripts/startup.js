// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('KubeJS Startup complete (Loaded startup scripts)')

ItemEvents.modification(event => {
    //Potions stack
    event.modify("minecraft:potion", item => {item.setMaxStackSize(16)})
    event.modify("minecraft:splash_potion", item => {item.setMaxStackSize(16)})
    event.modify("minecraft:lingering_potion", item => {item.setMaxStackSize(16)})
    //Suspicious stew stacks
    event.modify("minecraft:suspicious_stew", item => {item.setMaxStackSize(16)})
    //Arrows burn
    event.modify("minecraft:arrow", item => {item.setBurnTime(100)})
})