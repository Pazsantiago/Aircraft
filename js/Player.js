export default class Personaje{
	constructor(ctx, posx, posy, width, height){
		this.img = new Image();
		this.img.src = 'img/SpriteSheet/sprites.png';
		this.ctx = ctx;
		this.posx = posx;
		this.posy = posy;
		this.width = width;
		this.height = height;
		this.pos = 0;
		this.speedx = 7;
		this.speedy = 7;
		this.movx = 0;
		this.movy = 0;
		this.PosMy = 0;
		this.PosMx = 0;
		this.sideX = null;
		this.sideY = null;
	}


	SetXNull(){
		this.movx = 0;
		this.PosMx = 0;
	}
	SetYNull(){
		this.movy = 0;
		this.PosMy = 0;
	}
	update(){
		this.posx += this.movx;
		this.posy += this.movy;
	
	}


	draw(){
		if(this.pos == 0){
			this.ctx.drawImage(this.img, 0, 380, 16, 20, this.posx, this.posy , this.width, this.height);
		}
		if(this.PosMx == 1){
			this.ctx.drawImage(this.img, 112, 380, 16, 20, this.posx, this.posy , this.width, this.height);			
		}else if(this.PosMx == 2){
			this.ctx.drawImage(this.img, 128, 380, 16, 20, this.posx, this.posy , this.width, this.height);
		}else if(this.PosMx == 3){
			this.ctx.drawImage(this.img, 144, 380, 16, 20, this.posx, this.posy , this.width, this.height);
		}else if(this.PosMx == 4){
			this.ctx.drawImage(this.img, 160, 380, 16, 20, this.posx, this.posy , this.width, this.height);
		}else if(this.PosMx == -1){
			this.ctx.drawImage(this.img, 250, 380, -16, 20, this.posx, this.posy , this.width, this.height);
		}else if(this.PosMx == -2){
			this.ctx.drawImage(this.img, 234, 380, -16, 20, this.posx, this.posy , this.width, this.height);
		}else if(this.PosMx == -3){
			this.ctx.drawImage(this.img, 218, 380, -16, 20, this.posx, this.posy , this.width, this.height);
		}else if(this.PosMx == -4){
			this.ctx.drawImage(this.img, 202, 380, -16, 20, this.posx, this.posy , this.width, this.height);
		}
		if(this.PosMy == 1){
			this.ctx.drawImage(this.img, 80, 380, 16, 20, this.posx, this.posy , this.width, this.height);
		}else if(this.PosMy == 2){
			this.ctx.drawImage(this.img, 96, 380, 16, 20, this.posx, this.posy , this.width, this.height);
		}else if(this.PosMy == -1){
			this.ctx.drawImage(this.img, 250, 380, 16, 20, this.posx, this.posy , this.width, this.height);
		}else if(this.PosMy == -2){
			this.ctx.drawImage(this.img, 266, 380, 16, 20, this.posx, this.posy , this.width, this.height);
		}
	}
}