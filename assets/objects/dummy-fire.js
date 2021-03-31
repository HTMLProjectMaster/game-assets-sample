class dummyFire{
	constructor(pos, form, time, type, name){
		this.position = {
			x: pos.x, 
			y: pos.y
		}
		this.transform = {
			width: form.width,
			height: form.height
		}
		this.duration = time
		this.type = type
		this.name = name
	}
	update(){
		if(this.duration > 0){
			this.particle()
		}else{
			item.clear(this)
		}
		this.duration -= 1
	}	
	particle(){
		let rngscale = Math.random() + 1
		system.call(
			new dummyFireParticle(
				{
					x: this.position.x + (Math.random() * this.transform.width),
					y: this.position.y + (Math.random() * this.transform.height)
				},
				{
					width:  rngscale * 10,
					height:  rngscale * 10
				},
				'particle fire collider', 
				'Dummy Fire Particle', 
				util.rng(60)
			), 
			'layer-dummy-particle',
			true
		)
	}
}
