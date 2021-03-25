class dummyFire{
	constructor(pos, time, size, type, name){
		this.position = {
			x: pos.x, 
			y: pos.y
		}
		this.duration = time
		this.type = type
		this.name = name
		this.scale = size
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
		system.call(new dummyFireParticle({x: this.position.x + (Math.random() * this.scale), y: this.position.y + (Math.random() * this.scale)}, 'dummy-fire-particle', 'Dummy Fire Particle', Math.floor(Math.random() * Math.floor(60))), 'layer-dummy-particle', true)
	}

}
