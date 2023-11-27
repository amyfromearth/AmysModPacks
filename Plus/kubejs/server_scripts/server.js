// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Server Ready (Loaded server scripts)')

//Recipes with item input 'chest' accept any item with tag 'chest'
ServerEvents.recipes(event => {
    event.replaceInput(
      { input: 'minecraft:chest' },
      'minecraft:chest',
      '#c:chest'
    )
  })
  
//Acacia sticks from This Rocks! mod drops itself
ServerEvents.blockLootTables(event => {
  event.addBlock('rocks:acacia_stick', table => {
    table.addPool(pool => {
      pool.addItem('rocks:acacia_stick')
    })
  })
})
//Andesite rock from This Rocks! mod drops itself
ServerEvents.blockLootTables(event => {
  event.addBlock('rocks:andesite_rock', table => {
    table.addPool(pool => {
      pool.addItem('rocks:andesite_rock')
    })
  })
})
//Bamboo stick from This Rocks! mod drops itself
ServerEvents.blockLootTables(event => {
  event.addBlock('rocks:bamboo_stick', table => {
    table.addPool(pool => {
      pool.addItem('rocks:bamboo_stick')
    })
  })
})
//Birch stick from This Rocks! mod drops itself
ServerEvents.blockLootTables(event => {
  event.addBlock('rocks:birch_stick', table => {
    table.addPool(pool => {
      pool.addItem('rocks:birch_stick')
    })
  })
})
//Cherry stick from This Rocks! mod drops itself
ServerEvents.blockLootTables(event => {
  event.addBlock('rocks:cherry_stick', table => {
    table.addPool(pool => {
      pool.addItem('rocks:cherry_stick')
    })
  })
})
//Dark oak stick from This Rocks! mod drops itself
ServerEvents.blockLootTables(event => {
  event.addBlock('rocks:dark_oak_stick', table => {
    table.addPool(pool => {
      pool.addItem('rocks:dark_oak_stick')
    })
  })
})
//Diorite rock from This Rocks! mod drops itself
ServerEvents.blockLootTables(event => {
  event.addBlock('rocks:diorite_rock', table => {
    table.addPool(pool => {
      pool.addItem('rocks:diorite_rock')
    })
  })
})
//End stone rock from This Rocks! mod drops itself
ServerEvents.blockLootTables(event => {
  event.addBlock('rocks:end_stone_rock', table => {
    table.addPool(pool => {
      pool.addItem('rocks:end_stone_rock')
    })
  })
})
//Granite rock from This Rocks! mod drops itself
ServerEvents.blockLootTables(event => {
  event.addBlock('rocks:granite_rock', table => {
    table.addPool(pool => {
      pool.addItem('rocks:granite_rock')
    })
  })
})
//Jungle stick from This Rocks! mod drops itself
ServerEvents.blockLootTables(event => {
  event.addBlock('rocks:jungle_stick', table => {
    table.addPool(pool => {
      pool.addItem('rocks:jungle_stick')
    })
  })
})
//Mangrove stick from This Rocks! mod drops itself
ServerEvents.blockLootTables(event => {
  event.addBlock('rocks:mangrove_stick', table => {
    table.addPool(pool => {
      pool.addItem('rocks:mangrove_stick')
    })
  })
})
//Netherrack rock from This Rocks! mod drops itself
ServerEvents.blockLootTables(event => {
  event.addBlock('rocks:netherrack_rock', table => {
    table.addPool(pool => {
      pool.addItem('rocks:netherrack_rock')
    })
  })
})
//Oak stick from This Rocks! mod drops itself
ServerEvents.blockLootTables(event => {
  event.addBlock('rocks:oak_stick', table => {
    table.addPool(pool => {
      pool.addItem('rocks:oak_stick')
    })
  })
})
//Pinecone from This Rocks! mod drops itself
ServerEvents.blockLootTables(event => {
  event.addBlock('rocks:pinecone', table => {
    table.addPool(pool => {
      pool.addItem('rocks:pinecone')
    })
  })
})
//Rock from This Rocks! mod drops itself
ServerEvents.blockLootTables(event => {
  event.addBlock('rocks:rock', table => {
    table.addPool(pool => {
      pool.addItem('rocks:rock')
    })
  })
})
//Spruce stick from This Rocks! mod drops itself
ServerEvents.blockLootTables(event => {
  event.addBlock('rocks:spruce_stick', table => {
    table.addPool(pool => {
      pool.addItem('rocks:spruce_stick')
    })
  })
})
