// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Server Ready (Loaded server scripts)')

//Recipes
//Recipes with item input 'chest' accept any item with tag 'chest'
ServerEvents.recipes(event => {
    event.replaceInput(
      { input: 'minecraft:chest' },
      'minecraft:chest',
      '#c:wooden_chest'
    )
//Remove mod provided recipe for backpack
    event.remove({id:'umu_backpack:backpack'})
//Backpack uses items found in overworld from multiple mods
  event.shaped('umu_backpack:backpack', [
    'WNW',
    'RLR',
    'WBW'
  ], {
    B: 'minecraft:bundle',
    L: 'minecraft:leather_chestplate',
    N: 'create:brass_nugget',
    R: 'farmersdelight:rope',
    W: '#minecraft:wool'
  })
})
//Loot tables
//Acacia sticks from This Rocks! mod drops itself
ServerEvents.blockLootTables(event => {
  event.addBlock('rocks:acacia_stick', table => {
    table.addPool(pool => {
      pool.addItem('rocks:acacia_stick')
    })
  })
//Andesite rock from This Rocks! mod drops itself
  event.addBlock('rocks:andesite_rock', table => {
    table.addPool(pool => {
      pool.addItem('rocks:andesite_rock')
    })
  })
//Bamboo stick from This Rocks! mod drops itself
  event.addBlock('rocks:bamboo_stick', table => {
    table.addPool(pool => {
      pool.addItem('rocks:bamboo_stick')
    })
  })
//Birch stick from This Rocks! mod drops itself
  event.addBlock('rocks:birch_stick', table => {
    table.addPool(pool => {
      pool.addItem('rocks:birch_stick')
    })
  })
//Cherry stick from This Rocks! mod drops itself
  event.addBlock('rocks:cherry_stick', table => {
    table.addPool(pool => {
      pool.addItem('rocks:cherry_stick')
    })
  })
//Dark oak stick from This Rocks! mod drops itself
  event.addBlock('rocks:dark_oak_stick', table => {
    table.addPool(pool => {
      pool.addItem('rocks:dark_oak_stick')
    })
  })
//Diorite rock from This Rocks! mod drops itself
  event.addBlock('rocks:diorite_rock', table => {
    table.addPool(pool => {
      pool.addItem('rocks:diorite_rock')
    })
  })
//End stone rock from This Rocks! mod drops itself
  event.addBlock('rocks:end_stone_rock', table => {
    table.addPool(pool => {
      pool.addItem('rocks:end_stone_rock')
    })
  })
//Granite rock from This Rocks! mod drops itself
  event.addBlock('rocks:granite_rock', table => {
    table.addPool(pool => {
      pool.addItem('rocks:granite_rock')
    })
  })
//Jungle stick from This Rocks! mod drops itself
  event.addBlock('rocks:jungle_stick', table => {
    table.addPool(pool => {
      pool.addItem('rocks:jungle_stick')
    })
  })
//Mangrove stick from This Rocks! mod drops itself
  event.addBlock('rocks:mangrove_stick', table => {
    table.addPool(pool => {
      pool.addItem('rocks:mangrove_stick')
    })
  })
//Netherrack rock from This Rocks! mod drops itself
  event.addBlock('rocks:netherrack_rock', table => {
    table.addPool(pool => {
      pool.addItem('rocks:netherrack_rock')
    })
  })
//Oak stick from This Rocks! mod drops itself
  event.addBlock('rocks:oak_stick', table => {
    table.addPool(pool => {
      pool.addItem('rocks:oak_stick')
    })
  })
//Pinecone from This Rocks! mod drops itself
  event.addBlock('rocks:pinecone', table => {
    table.addPool(pool => {
      pool.addItem('rocks:pinecone')
    })
  })
//Rock from This Rocks! mod drops itself
  event.addBlock('rocks:rock', table => {
    table.addPool(pool => {
      pool.addItem('rocks:rock')
    })
  })
//Spruce stick from This Rocks! mod drops itself
  event.addBlock('rocks:spruce_stick', table => {
    table.addPool(pool => {
      pool.addItem('rocks:spruce_stick')
    })
  })
})
//Tags
//Add #c:raw_fishes tag to modded bass
ServerEvents.tags('item', event => {
  event.add('c:raw_fishes', 'naturalist:bass')
//Add #c:raw_fishes tag to modded catfish
  event.add('c:raw_fishes', 'naturalist:catfish')
//Add #c:raw_fishes tag to modded anglerfish
  event.add('c:raw_fishes', 'wildlife:raw_anglerfish')
//Add #c:raw_fishes tag to modded bettafish
  event.add('c:raw_fishes', 'wildlife:raw_bettafish')
//Add #c:raw_fishes tag to modded bluegill
  event.add('c:raw_fishes', 'wildlife:raw_bluegill')
//Add #c:raw_fishes tag to modded catfish
  event.add('c:raw_fishes', 'wildlife:raw_catfish')
//Add #c:raw_fishes tag to modded goldfish
  event.add('c:raw_fishes', 'wildlife:raw_goldfish')
//Add #c:raw_fishes tag to modded koi
  event.add('c:raw_fishes', 'wildlife:raw_koi')
//Add #c:raw_fishes tag to modded rainbow trout
  event.add('c:raw_fishes', 'wildlife:raw_rainbow_trout')
//Add #c:cooked_fishes tag to modded bass
  event.add('c:cooked_fishes', 'naturalist:cooked_bass')
//Add #c:cooked_fishes tag to modded catfish
  event.add('c:cooked_fishes', 'naturalist:cooked_catfish')
//Add #c:cooked_fishes tag to modded anglerfish
  event.add('c:cooked_fishes', 'wildlife:cooked_anglerfish')
//Add #c:cooked_fishes tag to modded bettafish
  event.add('c:cooked_fishes', 'wildlife:cooked_bettafish')
//Add #c:cooked_fishes tag to modded bluegill
  event.add('c:cooked_fishes', 'wildlife:cooked_bluegill')
//Add #c:cooked_fishes tag to modded catfish
  event.add('c:cooked_fishes', 'wildlife:cooked_catfish')
//Add #c:cooked_fishes tag to modded goldfish
  event.add('c:cooked_fishes', 'wildlife:cooked_goldfish')
//Add #c:cooked_fishes tag to modded koi
  event.add('c:cooked_fishes', 'wildlife:cooked_koi')
//Add #c:cooked_fishes tag to modded rainbow trout
  event.add('c:cooked_fishes', 'wildlife:cooked_rainbow_trout')
})
