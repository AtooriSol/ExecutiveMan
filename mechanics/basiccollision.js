function BasicCollision(mapper) {
	this.mapper = mapper;

	this.basicCollision = function(object) {
		var modifier = 2;
		var xmodifier = 2;

		return this.checkCollisions({
			left : { x: object.x + xmodifier - this.mapper.completedMapsWidthOffset, y: object.y + object.animations.spriteSheet._frameHeight / 2 },
			bottom : { x: object.x - this.mapper.completedMapsWidthOffset + object.animations.spriteSheet._frameWidth / 2 , y: object.y + object.animations.spriteSheet._frameHeight },
			right : { x: object.x - this.mapper.completedMapsWidthOffset + object.animations.spriteSheet._frameWidth - xmodifier, y: object.y + object.animations.spriteSheet._frameHeight / 2 },
			top : { x: object.x - this.mapper.completedMapsWidthOffset + object.animations.spriteSheet._frameWidth / 2 , y: object.y + modifier }
		}, this.mapper.collisionArray, this.mapper.heightOffset, this.mapper.widthOffset);
	};

	this.checkCollisions = function(playerCollisionPoints, collisionArray, heightOffset, widthOffset) {
		var moves = { left : true, down : true, right : true, up : true };
		var tilesize = 16; // this is used as width and height!

		try {
			var a = Math.floor((playerCollisionPoints.left.y - heightOffset) / tilesize);
			var b = Math.floor((playerCollisionPoints.left.x - widthOffset) / tilesize);

			if (a <= -1 || a > collisionArray.length) {
				a = 0;
			}

			if (b <= -1 || b > collisionArray[a].length) {
				b = 0;
			}

			if (collisionArray[a][b]) {
				moves.left = false;
			}

			a = Math.floor((playerCollisionPoints.bottom.y - heightOffset) / tilesize);
			b = Math.floor((playerCollisionPoints.bottom.x - widthOffset) / tilesize);

			if (a <= -1 || a > collisionArray.length) {
				a = 0;
			}

			if (b <= -1 || b > collisionArray[a].length) {
				b = 0;
			}

			if (collisionArray[a][b]) {
				moves.down = false;
			}

			a = Math.floor((playerCollisionPoints.right.y - heightOffset) / tilesize);
			b = Math.floor((playerCollisionPoints.right.x - widthOffset) / tilesize);

			if (a <= -1 || a > collisionArray.length) {
				a = 0;
			}

			if (b <= -1 || b > collisionArray[a].length) {
				b = 0;
			}

			if (collisionArray[a][b]) {
				moves.right = false;
			}

			a = Math.floor((playerCollisionPoints.top.y - heightOffset) / tilesize);
			b = Math.floor((playerCollisionPoints.top.x - widthOffset) / tilesize);

			if (a <= -1 || a > collisionArray.length) {
				a = 0;
			}

			if (b <= -1 || b > collisionArray[a].length) {
				b = 0;
			}

			if (collisionArray[a][b]) {
				moves.up = false;
			}
		} catch (error) {}

		return moves;
	};
}
