class dummyPushable {
	constructor (pos, form, col, type, name, index) {
		this.position = {
			x: pos.x, 
			y: pos.y
		}
		this.transform = {
			width: form.width,
			height: form.height
		}
		this.color = col
		this.type = type
		this.name = name
		this.index = index
	}		
	update(){
		this.collision()		
		this.draw()
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
	draw(){
		canvas.context.beginPath();
		canvas.context.fillStyle = this.color;
		canvas.context.fillRect(this.position.x, this.position.y, this.transform.width, this.transform.height);
		canvas.context.closePath();
	}
}
