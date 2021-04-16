class dummyWaterParticle{
	constructor(pos, form, col, type, name, life){
		this.color = col	
		this.name = name
		this.type = type
		this.launched = false
		this.fallspeed = 0.015
		this.life = life
		this.time = 0
		this.brightness = 0
		this.color = col
		this.position = {
			x: pos.x,
			y: pos.y
		}
		this.velocity = {
			x: 0, 
			y: 0
		}
		this.transform = {
			width: form.width,
			height: form.height
		}

	}
	update(){
		this.draw()
		this.launch()
		this.decelerate()
		this.move()
		this.fall()
		this.live()
		this.colorate()
		this.collide()	
	}
	launch(){
		if(!this.launched){
			this.launched = true
			this.velocity.x = Math.floor(Math.random() * Math.floor(3) - 1) * Math.floor(Math.random() * Math.floor(9) + 1) * (this.transform.width / 10)
			this.velocity.y = Math.floor(Math.random() * Math.floor(-2)) * Math.floor(Math.random() * Math.floor(9) + 1) * (this.transform.height / 10)
		}
	}
	decelerate(){
		this.velocity.x = this.velocity.x / 1.1
		this.velocity.y = this.velocity.y / 1.1
	}
	move(){
		this.position.x += this.velocity.x
		this.position.y += this.velocity.y
	}
	fall(){
		this.time += 1
		this.position.y += (this.fallspeed * (this.time * 20)) * (this.transform.height / 10)
	}
	live(){
		if(this.life > 0){
			this.life -= 1
		}else{
			item.clear(this, true)
		}
	}
	colorate(){
		this.brightness += 5
		if(rules.translucent == true){
			this.color = 'rgba(0, 0, 255, ' + String(1/this.brightness) + ')'
		}else{
			this.color = 'rgb(' + String(this.brightness) + ', ' + String(this.brightness) + ', 255)'
		}
	}
	draw(){
		canvas.context.beginPath()
		canvas.context.fillStyle = this.color
		canvas.context.fillRect(this.position.x, this.position.y, this.transform.width, this.transform.height)
		canvas.context.closePath()
	}
	collide(){
		for(var i = 0; i < item.layout.length; i++){
			for(var j = 0; j < item.layout[i].content.length; j++){
				for(var k = 0; k < item.layout[i].content[j].children.length; k++){
					if(util.trigger({first: this, second: item.layout[i].content[j].children[k]})){
						if(item.layout[i].content[j].children[k].type.search('particle fire') != -1){
							this.vaporize()
						}
					}
				}
				if(item.layout[i].content[j].debuffs != undefined){
					if(item.layout[i].content[j].debuffs.search('infire') != -1){
						if(util.trigger({first: this, second: item.layout[i].content[j]})){
							if(util.rng(100) === 0){
								item.layout[i].content[j].debuffs = ''
							}
						}
					}
				}
			}
		}	
	}
	vaporize(){	
		system.call(
			new dummyCloudParticle(
				{
					x: this.position.x,
					y: this.position.y
				},
				{
					width: this.transform.width,
					height: this.transform.height
				},
				'white',
				'particle cloud collider',
				'Dummy Cloud Particle',
				util.rng(15)
			),
			'layer-dummy-particle',
			'true'
		)
		if(util.rng(10) === 0){
			item.clear(this)
		}
	}
}
