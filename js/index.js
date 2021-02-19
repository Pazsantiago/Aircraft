//Comienzo del codigo
import CrearMapa from './map.js';
import Personaje from './Player.js';
import InputHandler from './InputHandler.js';
import Wall from './wall.js';
document.addEventListener('DOMContentLoaded', function(){
	const canvas = document.getElementById("MyCanvas");
	let ctx = canvas.getContext("2d");
	const canvas1 = document.getElementById("capa1");
	let ctx1 = canvas1.getContext("2d");
	
	let player = new Personaje(ctx, 200, 450, 60, 60);
	let input = new InputHandler(player);
	let map = [1048,1048,1048,1048,1048,1048,1048,1048,1048,1048,1048,1048,1048,1048,1048,1048,1048,1048,1048,1048,
				1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1048,
				1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1048,
				1048,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1048,
				1048,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1048,
				1048,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1048,
				1048,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1048,
				1048,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1048,
				1048,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1048,
				1048,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1048,
				1048,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1048,
				1048,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1048,
				1048,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1048,
				1048,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1048,
				1048,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1048,
				1048,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1048,
				1048,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1048,
				1048,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1048,
				1048,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1380,1048,
				1048,1048,1048,1048,1048,1048,1048,1048,1048,1048,1048,1048,1048,1048,1048,1048,1048,1048,1048,1048

			];
	let capa1 = [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2998,2998,2998,2998,-1,-1,-1,-1,-1,
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2936,1037,1037,1037,1037,2938,-1,-1,-1,-1,
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2998,1037,1037,1037,1037,2998,-1,-1,-1,-1,
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2998,1037,1037,1037,1037,2998,-1,-1,-1,-1,
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3063,1037,1037,1037,1037,3067,-1,-1,-1,-1,
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2998,2998,2998,2998,-1,-1,-1,-1,-1,
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1987,-1,-1,-1,-1,-1,
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1040,1040,1040,1040,-1,-1,-1,-1,
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1987,-1,1040,1040,1040,1040,-1,-1,-1,-1,
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1040,1040,1040,1040,-1,-1,-1,-1,
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1040,1040,1040,1040,-1,-1,-1,-1,
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
				];

	let layerCollision = CrearMapa(map, canvas, ctx, [1048]);
	let layer1Collision = CrearMapa(capa1, canvas1, ctx1, [2998, 3063, 3067, 2936, 2938, 1037, 1987, 1040]);
	

	let walls = [];
	for(let a = 0; a < layerCollision.length; a++){
		walls.push(new Wall(layerCollision[a][0]));
		walls.push(new Wall(layerCollision[a][1]));
	}
	for(let a = 0; a < layer1Collision.length; a++){
		walls.push(new Wall(layerCollision[a][0]));
		walls.push(new Wall(layerCollision[a][1]));
	}


	function loop(){
		resize();
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
		CrearMapa(map, canvas, ctx, [[1048]]);
		CrearMapa(capa1, canvas1, ctx1, [[2998, 3063], [3067, 2936], [2938, 1037], [1987, 1040]]);
		player.draw();
		player.update();
		window.requestAnimationFrame(loop);

	}
	// setInterval(player.DrawX, 1000);
	// setInterval(player.DrawY, 1000);
	window.requestAnimationFrame(loop);


	function DetectCollision(){
		for(let a = 0; a < walls.length; a++){
			for(let b = 0; b <= 1; b++){
				if(walls[a, b].posx < player.posx + player.width && walls[a, b].posx + walls[a, b].width > player.posx
					&& walls[a, b].posy < player.posy + player.height && walls[a, b].posy + walls[a, b].height > player.posy){
					alert("Colision");
				}
			}
		}
	}
	function resize(){
		canvas.width = parseInt(getComputedStyle(document.getElementById('juego')).getPropertyValue('width'));
		canvas.height = parseInt(getComputedStyle(document.getElementById('juego')).getPropertyValue('height'));
		canvas1.width = parseInt(getComputedStyle(document.getElementById('juego')).getPropertyValue('width'));
		canvas1.height = parseInt(getComputedStyle(document.getElementById('juego')).getPropertyValue('height'));
	}

});