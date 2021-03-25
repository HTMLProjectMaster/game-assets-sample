//item.layer('layer-dummy-particle')
system.call(
	new dummyPlayer(
		{
			x: window.innerWidth / 2 - 50,
			y: window.innerHeight / 2 - 50
		},
		'white', 'dummy',
		'Dummy Player',
		75,
		util.rng(2**31)
	),
	'layer-dummy'
)
system.call(
	new dummyFire(
		{
			x: window.innerWidth / 4 - 50,
			y: window.innerHeight / 4 - 50 
		},
		Infinity,
		100,
		'dummy-fire',
		'Dummy Fire'
	),
	'layer-dummy'
)
system.call(
	new dummyFire(
		{
			x: window.innerWidth / 1.5 - 50,
			y: window.innerHeight / 4   
		},
		Infinity,
		0,
		'dummy-fire',
		'Dummy Fire'
	),
	'layer-dummy'
)
/*system.call(
	new dummyPolygon(
		[
			{x: 10, y: 10},
			{x: 100, y: 10},
			{x: 100, y: 100}
		], 
		'green', 
		'dummy', 
		'Dummy Rectangle Tris'
	), 
	'layer-dummy'
)
system.call(
	new dummyPolygon(
		[
			{x: 10, y: 10},
			{x: 100, y: 10},
			{x: 100, y: 100}, 
			{x: 10, y: 100}
		], 
		'red', 
		'dummy', 
		'Dummy Square'
	), 
	'layer-dummy'
)*/
