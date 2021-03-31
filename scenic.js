/* load scripts in this file (link between engine and assets) */
//special rule script
system.load('script', 'script-asset-rules', '../assets/rules.js', system.dom.head)

// dummy objects
system.load('script', 'script-object-dummy-polygon', '../assets/objects/dummy-polygon.js', system.dom.head)
system.load('script', 'script-object-dummy-cube', '../assets/objects/dummy-cube.js', system.dom.head)
system.load('script', 'script-object-dummy-wall', '../assets/objects/dummy-wall.js', system.dom.head)
system.load('script', 'script-object-dummy-pushable', '../assets/objects/dummy-pushable.js', system.dom.head)
system.load('script', 'script-object-dummy-player', '../assets/objects/dummy-player.js', system.dom.head)
system.load('script', 'script-object-dummy-move-particle', '../assets/objects/dummy-move-particle.js', system.dom.head)
system.load('script', 'script-object-dummy-fire', '../assets/objects/dummy-fire.js', system.dom.head)
system.load('script', 'script-object-dummy-fire-particle', '../assets/objects/dummy-fire-particle.js', system.dom.head)

//scenes must be called after the objects
util.sleep(100).then(() => {system.load('script', 'script-scene-dummy-scene', '../assets/scenes/dummy-scene.js', system.dom.head)})

