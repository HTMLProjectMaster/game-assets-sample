var dotConstantScaleMultiplier = 0.2

class dummyTree{
	constructor(pos, form, col, cnt, type, name){
		this.position = {
			x: pos.x, 
			y: pos.y
		}
		this.transform = {
			width: form.width,
			height: form.height
		}
		this.color = {
			leaves: col.leaves,
			chunk: col.chunk
		}
		this.count = {
			leaves: cnt.leaves, 
			chunk: cnt.chunk
		}
		this.loaded = {
			leaves: false,
			chunk: false
		}
		this.type = type
		this.name = name
	}
	update(){
		//this.chunk()
		this.leaves()
	}	
	chunk(){
		if(!this.loaded.chunk){
			this.loaded.chunk = true
			for(let i = 0; i < this.count.chunk; i++){
				system.call(
					new dummyTreeDot(
						{
							x: this.position.x + util.rng(this.transform.width),
							y: this.position.y * 1.5 + util.rng(this.transform.height)
						},
						{
							width: this.transform.width * dotConstantScaleMultiplier,
							height: (this.transform.height/2) * dotConstantScaleMultiplier
						},
						'rgb(' + String(150 * Math.random() + 100) + ', ' + String(100) + ', ' + String(0) + ')',
						'dummy tree chunk',
						'Dummy chunk'
					),
					'layer-dummy-tree-chunk'
				)
			}
		}
	}
	leaves(){
		if(!this.loaded.leaves){
			this.loaded.leaves = true
			for(let i = 0; i < this.count.leaves; i++){
				system.call(
					new dummyTreeDot(
						{
							x: this.position.x + (Math.random()/(this.transform.width - this.position.x)),
							y: this.position.y + (Math.random()/(this.transform.height - this.position.y))
						},
						{
							width: this.transform.width * dotConstantScaleMultiplier,
							height: (this.transform.height/2) * dotConstantScaleMultiplier
						},
						'rgb(' + String(0) + ', ' + String(255 * Math.random() + 100) + ', ' + String(0) + ')',
						'dummy tree leaves',
						'Dummy leaves'
					),
					'layer-dummy-tree-leaves'
				)
			}
		}
	}
}

class dummyTreeDot{
	constructor(pos, form, col, type ,name){
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
	}
	update(){
		this.draw()
	}
	draw(){
		canvas.context.beginPath()
		canvas.context.fillStyle = this.color
		canvas.context.fillRect(this.position.x, this.position.y, this.transform.width, this.transform.height)
		canvas.context.closePath()
	}

}
