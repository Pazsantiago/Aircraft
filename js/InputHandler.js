export default class InputHandler {
  	constructor(jugador) {
    	document.addEventListener("keydown", (event) => {
	      	switch (event.keyCode) {
		      	case 87:
		      		jugador.movy = -jugador.speedy; 
		      		// W
		      		break;
		      	case 68:
		      		jugador.movx = +jugador.speedx; 
		      		// D
		      		break;
		      	case 65:
		      		jugador.movx = -jugador.speedx; 
		      		// A
		      		break;
		      	case 83:
		      		jugador.movy = +jugador.speedy;
		      		// S
		      		break;


		        default:
		          break;
	  		}
		});
		document.addEventListener("keyup", (event) => {
	      	switch (event.keyCode) {
		      	case 87:
					jugador.SetYNull();
					jugador.pos = 0;
		      		// W
		      		break;
		      	case 68:
		      		jugador.SetXNull();
					jugador.pos = 0;
		      		// D
		      		break;
		      	case 65:
		      		jugador.SetXNull();
					jugador.pos = 0;
		      		// A
		      		break;
		      	case 83:
					jugador.SetYNull();
					jugador.pos = 0;
		      		// S
		      		break;


		        default:
		          break;
	  		}
		});
	}
}