system.call(
	new dummyPushable(
		{
			x: 200,
			y: 100
		},
		{
			width: 100,
			height: 100
		},
		'yellow',
		'dummy collider',
		'Dummy Pushable',
		util.rng(2**31),
		true
	),
	'layer-dummy'
)
system.call(
	new dummyPlayer(
		{
			x: 100,
			y: 100
		},
		{
			width: 100,
			height: 100
		},
		'blue', 'dummy collider',
		'Dummy Player',
		util.rng(2**31)
	),
	'layer-dummy'
)
system.call(
	new dummyWall(
		{
			x: 300,
			y: 100
		},
		{
			width: 100,
			height: 100
		},
		'red',
		'dummy collider static',
		'Dummy Wall',
		util.rng(2**31)
	),
	'layer-dummy'
)

system.call(
	new dummyFire(
		{
			x: 200,
			y: 300 
		},
		{
			width: 100,
			height: 100
		},
		Infinity,
		'dummy fire',
		'Dummy Fire 01'
	),
	'layer-dummy'
)
system.call(
	new dummyWater(
		{
			x: 400,
			y: 300 
		},
		{
			width: 100,
			height: 100
		},
		Infinity,
		'dummy water',
		'Dummy Water 01'
	),
	'layer-dummy'
)
system.call(
	new dummyFire(
		{
			x: 149,
			y: 349 
		},
		{
			width: 2,
			height: 2
		},
		Infinity,
		'dummy fire',
		'Dummy Fire 02'
	),
	'layer-dummy'
)
system.call(
	new dummyWater(
		{
			x: 349,
			y: 249 
		},
		{
			width: 2,
			height: 2
		},
		Infinity,
		'dummy water',
		'Dummy Water 02'
	),
	'layer-dummy'
)
