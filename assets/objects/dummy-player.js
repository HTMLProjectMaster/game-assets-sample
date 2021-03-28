class dummyPlayer{
	constructor(pos, col, type, name, size, index){	
		this.index = index
		this.name = name
		this.type = type
		this.position = {
			x: pos.x,
			y: pos.y
		}
		this.color = col
		this.basecol = col
		this.scale = size
		this.basespeed = 5
		this.speed = 5
		this.sprintspeed = 10
		this.player = false
	}
	update(){
		this.mouseTrigger()
		this.control()
		this.collide()
		this.draw()
	}
	mouseTrigger(){
		if(input.mouse.position.x - this.position.x - this.scale/2 < this.scale/2 && input.mouse.position.x - this.position.x - this.scale/2 > -this.scale/2 && input.mouse.position.y - this.position.y - this.scale/2 < this.scale/2 && input.mouse.position.y - this.position.y - this.scale/2 > -this.scale/2 ){
			if(input.mouse.button.includes(0)){
				this.position.x = input.mouse.position.x - this.scale/2
				this.position.y = input.mouse.position.y - this.scale/2
			}
			if(input.mouse.button.includes(1)){
				this.player = false
			}
			if(input.mouse.button.includes(2)){
				this.player = true
			}	
		}
	}
	control(){
		if(this.player){
			this.movement()
			this.color = 'blue'
		}
		else{
			this.color = this.basecol
		}
	}
	movement(){	
		if(input.keyboard.key.includes(37)){this.position.x -= this.speed}
		if(input.keyboard.key.includes(38)){this.position.y -= this.speed}
		if(input.keyboard.key.includes(39)){this.position.x += this.speed}
		if(input.keyboard.key.includes(40)){this.position.y += this.speed}
		if(input.keyboard.key.includes(16)){
			this.speed = this.sprintspeed * (this.scale / 100)
			system.call(new dummyMoveParticle({x: this.position.x + (this.scale * Math.random()), y: this.position.y + this.scale}, 'white', 'particle', 'Dummy Foot Particle', Math.floor(Math.random() * Math.floor(15)), 10 * (this.scale / 100)), 'layer-dummy-particle', true)
		}
		else{this.speed = this.basespeed * (this.scale / 100)}
	}
	draw(){
		canvas.context.beginPath();
		canvas.context.fillStyle = this.color;
		canvas.context.fillRect(this.position.x, this.position.y, this.scale, this.scale);
		canvas.context.closePath();
	}
	collide(){
		for(var i = 0; i < item.layout.length; i++){
			for(var j = 0; j < item.layout[i].content.length; j++){
				if((util.collide(this.position.x, this.position.y, this.scale, item.layout[i].content[j].position.x, item.layout[i].content[j].position.y, item.layout[i].content[j].scale) == true) && item.layout[i].content[j] != this && item.layout[i].content[j].type != 'particle'){
					console.log('colliding with: ', item.layout[i].content[j].name)
					this.vector = util.vectoryze(this.position.x, this.position.y, item.layout[i].content[j].position.x, item.layout[i].content[j].position.y)
					//if(this.position.x - item.layout[i].content[j].position.x > -45 && this.position.x - item.layout[i].content[j].position.x < -135){ this.position.x -= (1 / this.vector.y) * 100}
					//if(this.position.x - item.layout[i].content[j].position.x > 45 && this.position.x - item.layout[i].content[j].position.x < 135){ this.position.x += (1 / this.vector.y) * 100}
					if(this.position.y - item.layout[i].content[j].position.y > -45 && this.position.y - item.layout[i].content[j].position.y < 45){ this.position.y -= (1 / this.vector.y) * 150 * this.speed}
					if(this.position.y - item.layout[i].content[j].position.y > -135 && this.position.y - item.layout[i].content[j].position.y < 135){ this.position.y += (1 / this.vector.y) * 150 * this.speed}
				}
			}
		}
	}
}

