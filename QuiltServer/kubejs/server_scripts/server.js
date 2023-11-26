// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Server Ready (Loaded server scripts)')

ServerEvents.recipes(event => {
    event.replaceInput(
      { input: 'minecraft:chest' },
      'minecraft:chest',
      '#c:chest'
    )
  })
  