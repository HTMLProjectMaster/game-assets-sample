//item.layer('layer-dummy-particle')

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
		util.rng(2**31)
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
		'Dummy Fire'
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
		'Dummy Fire'
	),
	'layer-dummy'
)

/*system.call(
	new dummyFire(
		{
			x: window.innerWidth / 1.5 - 50,
			y: window.innerHeight / 4   
		},
		Infinity,
		0,
		'dummy fire',
		'Dummy Fire'
	),
	'layer-dummy'
)*/
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
