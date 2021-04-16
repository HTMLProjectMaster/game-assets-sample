system.call(
	new dummyTree(
		{
			x: 300,
			y: 100
		},
		{
			width: 100,
			height: 200
		},
		{
			leaves: 'rgb(0, 255, 0)',
			chunk: 'rgb(200, 100, 0)'
		},
		{
			leaves: 100,
			chunk: 100
		},
		'dummy collider tree',
		'Dummy Tree'
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
		'rgba(255, 0, 255)',
		'dummy player collider',
		'DummyPlayer'
	),
	'layer-dummy'
)
