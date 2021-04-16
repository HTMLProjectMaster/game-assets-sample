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
		'Dummy Fire 02'
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
		'Dummy Water 02'
	),
	'layer-dummy'
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
