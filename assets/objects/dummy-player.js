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
		this.children = new Array
		this.debuffs = ''
	}
	update(){
		this.draw()
		this.mouseTrigger()
		this.movement()
		this.collision()
		this.buffs()
	}
	buffs(){
		this.fireBuff()
	}
	fireBuff(){
		if(this.debuffs.search('infire') != -1){
			let rngscale = Math.random() + 1
			this.children.push(
				new dummyFireParticle(
					{
						x: this.position.x + (Math.random() * this.transform.width),
						y: this.position.y + (Math.random() * this.transform.height)
					},
					{
						width: rngscale * 10,
						height: rngscale * 10
					},
					'particle fire collider',
					'Dummy Fire Particle',
					util.rng(60)
				)
			)
		}
		if(this.firetime != undefined){	
			if(this.debuffs.search('infire') != -1){
				this.firetime -= 1
				if(this.firetime <= 0){
					this.debuffs = ''
				}
			}
		}
	}
	setFire(){
		this.firetime = util.rng(120) + 60
		this.debuffs = 'infire'
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
			this.children.push(
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
					'dummy particle collider playerparticle', 
					'Dummy Move Particle', 
					util.rng(15)
				)
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
				if(item.layout[i].content[j].type.search('static') == -1 && item.layout[i].content[j].type.search('collider') != -1 && item.layout[i].content[j] != this){
					for(const child of this.children){
						if(item.layout[i].content[j] != child){
							util.collide({first: this, second: item.layout[i].content[j]})
						}
					}
					if(this.children[0] == undefined){
						util.collide({first: this, second: item.layout[i].content[j]})
					}
				}
				if(item.layout[i].content[j].children != undefined){
					for(var k = 0; k < item.layout[i].content[j].children.length; k++){	
						if(item.layout[i].content[j].children[k] != this.children[k]){
							if(item.layout[i].content[j].children[k].type.search('static') == -1 && item.layout[i].content[j].children[k].type.search('collider') != -1){
								util.collide({first: this, second: item.layout[i].content[j].children[k]})
							}
						}
					}
				}
			}
		}
	}
}

