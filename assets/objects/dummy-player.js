class dummyPlayer{
	constructor(pos, form, col, type, name, index){	
		this.position = {
			x: pos.x,
			y: pos.y
		}
		this.transform = {
			width: form.width,
			height: form.height
		}
		this.index = index
		this.name = name
		this.type = type
		this.color = col
		this.speed = 5
		this.walkspeed = this.speed
		this.sprintspeed = this.walkspeed * 2
	}
	update(){
		this.draw()
		this.mouseTrigger()
		this.movement()
		this.collision()
	}
	mouseTrigger(){
		if(input.mouse.position.x - this.position.x - this.transform.width/2 < this.transform.width/2 && input.mouse.position.x - this.position.x - this.transform.width/2 > -this.transform.width/2 && input.mouse.position.y - this.position.y - this.transform.height/2 < this.transform.height/2 && input.mouse.position.y - this.position.y - this.transform.height/2 > -this.transform.height/2 ){
			if(input.mouse.button.includes(0)){
				this.position.x = input.mouse.position.x - this.transform.width/2
				this.position.y = input.mouse.position.y - this.transform.height/2
			}	
		}
	}
	movement(){	
		if(input.keyboard.key.includes(37)){this.position.x -= this.speed}
		if(input.keyboard.key.includes(38)){this.position.y -= this.speed}
		if(input.keyboard.key.includes(39)){this.position.x += this.speed}
		if(input.keyboard.key.includes(40)){this.position.y += this.speed}
		if(input.keyboard.key.includes(16)){
			this.speed = this.sprintspeed
			system.call(
				new dummyMoveParticle(
					{
						x: this.position.x + ((this.transform.width) * Math.random()), 
						y: this.position.y + this.transform.height
					},
					{
						width: 10 * (this.transform.width / 100),
						height: 10 * (this.transform.height / 100)
					},
					'white', 
					'dummy particle collider static', 
					'Dummy Move Particle', 
					util.rng(15)
				),
				'layer-dummy-particle', 
				true
			)
		}else{this.speed = this.walkspeed}
	}
	draw(){
		canvas.context.beginPath();
		canvas.context.fillStyle = this.color;
		canvas.context.fillRect(this.position.x, this.position.y, this.transform.width, this.transform.height)
		canvas.context.closePath();
	}
	collision(){
		for(var i = 0; i < item.layout.length; i++){
			for(var j = 0; j < item.layout[i].content.length; j++){
				if(item.layout[i].content[j].type.search('collider') != -1 && item.layout[i].content[j].type.search('static') == -1){
				util.collide({first: this, second: item.layout[i].content[j]})
			
				}
			}
		}
	}
}

