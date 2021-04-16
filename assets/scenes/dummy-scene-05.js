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
for(var i = 0; i < 1; i++){
	util.sleep(i * 100).then(() => {
		system.call(
			new dummyLightning(
				{
					x: 300,
					y: -100
				},	
				'dummy lightning',
			'Dummy Lightning'
			),
			'layer-dummy'
		)	
	})
}
