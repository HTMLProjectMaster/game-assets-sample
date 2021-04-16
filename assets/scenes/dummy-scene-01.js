system.call(
	new dummyPushable(
		{
			x: 300,
			y: 400
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
			x: 500,
			y: 200
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
