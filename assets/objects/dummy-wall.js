class dummyWall{
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
	}
	update(){
		this.draw()
		this.mouseTrigger()
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

