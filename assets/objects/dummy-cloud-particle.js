class dummyCloudParticle{
	constructor(pos, form, col, type, name, life){
		this.color = col	
		this.name = name
		this.type = type
		this.flyspeed = 10
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
		this.children = new Array
	}
	update(){
		this.draw()
		this.move()
		this.fly()
		this.live()
		this.colorate()	
	}
	move(){
		this.position.x += this.velocity.x
		this.position.y += this.velocity.y
	}
	fly(){
		this.position.y -= this.flyspeed
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
	draw(){
		canvas.context.beginPath()
		canvas.context.fillStyle = this.color
		canvas.context.fillRect(this.position.x, this.position.y, this.transform.width, this.transform.height)
		canvas.context.closePath()
	}
}
