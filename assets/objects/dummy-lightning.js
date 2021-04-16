class dummyLightning{
	constructor(pos, type, name){
		this.position = {
			x: pos.x,
			y: pos.y
		}
		this.type = type
		this.name = name
		this.bolts = new Array
		this.boltCount = 0
		if(util.rng(2) == 1){
			this.reBlight = true
		}else{
			this.reblight = false
		}
		this.smallWidth = 0.25
		this.blightWidth = 3
		this.fadeSpeed = 0.30 * Math.random() + 0.025
		this.time = 500
	}
	update(){
		this.draw()
		this.timer()
		if(this.bolts.length < 10){
			this.tracer()	
		}
	}
	timer(){
		this.time -= 1
		if(this.time <= 0){
			item.clear(this, true)
		}
	}
	draw(){
		for(const bolt of this.bolts){
			bolt.draw()
			if(this.bolts.length > 9){bolt.fadeout()}
		}
	}
	tracer(){
		if(this.boltCount == 9){
			this.bolts.push(
				new dummyLightningBolt(
					{
						start: {
							x: this.bolts[this.boltCount - 1].position.end.x,
							y: this.bolts[this.boltCount - 1].position.end.y
						},
						end: {

							x: this.bolts[this.boltCount - 1].position.end.x + (Math.random() - 0.5) * 50,
							y: this.bolts[this.boltCount - 1].position.end.y + 50
						}
					},
					this.smallWidth,
					this.reBlight,
					this.blightWidth,
					this.fadeSpeed,
					'dummy lightningbolt',
					'Dummy LightningBolt',
					true
				)
			)
		}
		if(this.boltCount > 0 && this.boltCount < 9){
			this.bolts.push(
				new dummyLightningBolt(
					{
						start: {
							x: this.bolts[this.boltCount - 1].position.end.x,
							y: this.bolts[this.boltCount - 1].position.end.y
						},
						end: {

							x: this.bolts[this.boltCount - 1].position.end.x + (Math.random() - 0.5) * 50,
							y: this.bolts[this.boltCount - 1].position.end.y + 50
						}
					},
					this.smallWidth,
					this.reBlight,
					this.blightWidth,
					this.fadeSpeed,
					'dummy lightningbolt',
					'Dummy LightningBolt',
					false
				)
			)
		}
		else{
			this.bolts.push(
				new dummyLightningBolt(
					{
						start: {
							x: this.position.x,
							y: this.position.y
						},
						end: {
							x: this.position.x + (Math.random() - 0.5) * 50,
							y: this.position.y + 50
						}
					},
					this.smallWidth,
					this.reBlight,
					this.blightWidth,
					this.fadeSpeed,
					'dummy lightningbolt',
					'Dummy LightningBolt',
					false
				)		
			)
		}
		this.boltCount += 1
	}
	
}



class dummyLightningBolt{
	constructor(pos, light, blight, width, fadeSpeed, type, name, last){
		this.position = {
			start: {
				x: pos.start.x,
				y: pos.start.y
			},
			end: {
				x: pos.end.x,
				y: pos.end.y
			}
		}
		this.last = last
		this.width = light
		this.type = type
		this.name = name
		this.reBlight = blight
		this.blast = false
		this.blightWidth = width
		this.fadeSpeed = fadeSpeed
		this.calledParticle = false	
	}
	update(){}
	draw(){
		if(this.width > 0){util.line(this.position.start.x, this.position.start.y, this.position.end.x, this.position.end.y, this.width, 'white')}
		if(this.last == true && !this.calledParticle){	
			this.calledParticle = true
			for(let i = 0; i < util.rng(32) + 1; i++){
				this.rng = Math.random() * 12 + 1
				system.call(
					new dummyLightningParticle(
						{
							x: this.position.end.x,
							y: this.position.end.y
						},
						{
							width: this.rng,
							height: this.rng
						},
						'white',
						'dummy lightning particle',
						'Dummy Lightning Particle'
					),
					'layer-dummy',
					true
				)
			}
			system.call(
				new dummyLightningFlash(
					'dummy lightning flash screeneffect',
					'Dummy Lightning Flash',
					0.12 * Math.random() + 0.02
					
				),
				'layer-dummy', 
				true
			)
		}
	}
	fadeout(){
		if(this.reBlight && this.blast && this.width < 0 && this.fadeSpeed > 0.15){
			this.blast = false
			this.reBlight = 0
		}
		if(!this.blast){	
			this.width = this.blightWidth
			this.blast = true
		}
		this.width -= this.fadeSpeed
	}
}

class dummyLightningParticle{
	constructor(pos, form, type, name){
		this.position = {
			x: pos.x,
			y: pos.y
		}
		this.transform = {
			width: form.width,
			height: form.height
		}
		this.velocity = {
			x: 0,
			y: 0
		} 
		this.type = type
		this.name = name
		this.launched = false
		this.life = util.rng(60) + 15
		this.color = 'white'
	}
	launch(){
		if(!this.launched){
			this.launched = true
			this.velocity.x = (Math.random() - 0.5) * (Math.random() * 25)
			this.velocity.y = (Math.random() - 0.5) * (Math.random() * 25)
		}
	}
	decelerate(){
		this.velocity.x = this.velocity.x / 1.025
		this.velocity.y = this.velocity.y / 1.025
	}
	move(){
		this.position.x += this.velocity.x
		this.position.y += this.velocity.y
	}
	live(){
		if(this.life > 0){
			this.life -= 1
		}else{
			item.clear(this, true)
		}
	}
	colorate(){
		this.brightness += 1
		if(rules.translucent == true){
			this.color = 'rgba(255, 255, 255, ' + String(1/this.brightness) + ')'
		}else{
			this.color = 'white'
		}
	}
	update(){
		this.draw()
		this.launch()	
		this.decelerate()
		this.move()
		this.live()
		this.colorate()	
	}
	draw(){
		canvas.context.beginPath()
		canvas.context.fillStyle = this.color
		canvas.context.fillRect(this.position.x, this.position.y, this.transform.width, this.transform.height)
		canvas.context.closePath()
	}
}

class dummyLightningFlash{
	constructor(type, name, fadespeed){
		this.fadeSpeed = fadespeed
		this.color = 'rgba(255, 255, 255, 0)'
		this.brightness = 1
		this.type = type
		this.name = name
	}
	update(){
		this.draw()
		this.fade()
		this.destroy()
	}
	fade(){
		this.brightness -= this.fadeSpeed
		this.color = 'rgba(255, 255, 255, ' + String(this.brightness) + ')'
	}
	draw(){
		canvas.context.beginPath()
		canvas.context.fillStyle = this.color
		canvas.context.fillRect(0, 0, window.innerWidth, window.innerHeight)
		canvas.context.closePath()
	}
	destroy(){
		if(this.brightness < 0){
			item.clear(this, true)
		}
	}
}
