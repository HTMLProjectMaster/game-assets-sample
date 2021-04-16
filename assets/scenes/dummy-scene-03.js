system.call(
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
)
