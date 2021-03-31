class dummyFireParticle{
	constructor(pos, form, type, name, life){
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
		this.color = null	
		this.name = name
		this.type = type
		this.launched = false
		this.flyspeed = 0.025
		this.life = life
		this.time = 0
		this.brightness = 0
	}
	update(){
		this.draw()
		this.launch()
		this.decelerate()
		this.move()
		this.fly()
		this.live()
		this.colorate()	
	}
	launch(){
		if(!this.launched){
			this.launched = true
			while(this.velocity.x == 0){
				this.velocity.x = Math.floor(Math.random() * Math.floor(3) - 1) * Math.floor(Math.random() * Math.floor(9) + 1) * (this.transform.width / 10)
				this.velocity.y = Math.floor(Math.random() * Math.floor(-2)) * Math.floor(Math.random() * Math.floor(9) + 1) * (this.transform.height / 10)
			}
		}
	}
	decelerate(){
		this.velocity.x = this.velocity.x / 1.2
		this.velocity.y = this.velocity.y / 1.2
	}
	move(){
		this.position.x += this.velocity.x
		this.position.y += this.velocity.y
	}
	fly(){
		this.time += 1
		this.velocity.y = -(this.flyspeed * (this.time * 10)) * (this.transform.height / 10)
	}
	live(){
		if(this.life > 0){
			this.life -= 1
		}else{
			item.clear(this, true)
		}
	}
	colorate(){
		this.brightness += 10
		if(rules.translucent == true){
			this.color = 'rgba(255, ' + String(this.brightness) + ', ' + String(this.brightness / 2) + ', ' + String(this.brightness) + ')'
		}else{
			this.color = 'rgb(255, ' + String(this.brightness) + ', ' + String(this.brightness / 2) + ')'
		}
	}
	draw(){
		canvas.context.beginPath()
		canvas.context.fillStyle = this.color
		canvas.context.fillRect(this.position.x, this.position.y, this.transform.width, this.transform.height)
		canvas.context.closePath()
	}
}
