system.call(
	new dummyPushable(
		{
			x: 100,
			y: 200
		},
		{
			width: 75,
			height: 75
		},
		'yellow',
		'dummy player collider',
		'Dummy Player',
		util.rng(2**31)
	),
	'layer-dummy',
)
system.call(
	new dummyPushable(
		{
			x: 300,
			y: 200
		},
		{
			width: 75,
			height: 75
		},
		'yellow',
		'dummy player collider',
		'Dummy Player',
		util.rng(2**31),
		true
	),
	'layer-dummy',
)
system.call(
	new dummyPlayer(
		{
			x: 0,
			y: 0
		},
		{
			width: 75,
			height: 75
		},
		'purple',
		'dummy player collider',
		'Dummy Player',
	),
	'layer-dummy',
)
system.call(
	new dummyFire(
		{
			x: 300,
			y: 500
		},
		{
			width: 2,
			height: 2
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
			x: 300,
			y: 100
		},
		{
			width: 2,
			height: 2
		},
		Infinity,
		'dummy water',
		'Dummy Water 01'
	),
	'layer-dummy'
)
