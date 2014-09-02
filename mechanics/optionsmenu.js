var optionsUp = false;
function OptionsMenu() {
	optionsUp = false;
	this.setKeyLabel = null;
	this.setKey = null;
	optionsstage = new createjs.Container();

	var shape = new createjs.Shape();
    shape.graphics.beginFill("#0000FF").drawRect(32, 32, gamestage.canvas.width - 64, gamestage.canvas.height - 64);

	var divider = new createjs.Shape();
    divider.graphics.beginFill("#6699FF").drawRect(34, gamestage.canvas.height - 96, gamestage.canvas.width - 68, 3);
	this.setLeftButtonTouchTarget = new createjs.Shape();
    this.setLeftButtonTouchTarget.graphics.beginFill("#0000FF").drawRect(gamestage.canvas.width / 2 + 5, gamestage.canvas.height - 48, 80, 16);
    this.setLeftButtonTouchTarget.x = gamestage.canvas.width - 128;
    this.setLeftButtonTouchTarget.y = 64;
    this.setLeftButtonTouchTarget.spriteSheet = {};
    this.setLeftButtonTouchTarget.spriteSheet._frameHeight = 16;
    this.setLeftButtonTouchTarget.spriteSheet._frameWidth = 80;

    this.setRightButtonTouchTarget = new createjs.Shape();
    this.setRightButtonTouchTarget.graphics.beginFill("#0000FF").drawRect(gamestage.canvas.width / 2 + 5, gamestage.canvas.height - 48, 80, 16);
    this.setRightButtonTouchTarget.x = gamestage.canvas.width - 128;
    this.setRightButtonTouchTarget.y = 80;
    this.setRightButtonTouchTarget.spriteSheet = {};
    this.setRightButtonTouchTarget.spriteSheet._frameHeight = 16;
    this.setRightButtonTouchTarget.spriteSheet._frameWidth = 80;

    this.setJumpButtonTouchTarget = new createjs.Shape();
    this.setJumpButtonTouchTarget.graphics.beginFill("#0000FF").drawRect(gamestage.canvas.width / 2 + 5, gamestage.canvas.height - 48, 80, 16);
    this.setJumpButtonTouchTarget.x = gamestage.canvas.width - 128;
    this.setJumpButtonTouchTarget.y = 96;
    this.setJumpButtonTouchTarget.spriteSheet = {};
    this.setJumpButtonTouchTarget.spriteSheet._frameHeight = 16;
    this.setJumpButtonTouchTarget.spriteSheet._frameWidth = 80;

    this.setShootButtonTouchTarget = new createjs.Shape();
    this.setShootButtonTouchTarget.graphics.beginFill("#0000FF").drawRect(gamestage.canvas.width / 2 + 5, gamestage.canvas.height - 48, 80, 16);
    this.setShootButtonTouchTarget.x = gamestage.canvas.width - 128;
    this.setShootButtonTouchTarget.y = 112;
    this.setShootButtonTouchTarget.spriteSheet = {};
    this.setShootButtonTouchTarget.spriteSheet._frameHeight = 16;
    this.setShootButtonTouchTarget.spriteSheet._frameWidth = 80;

    this.setPauseButtonTouchTarget = new createjs.Shape();
    this.setPauseButtonTouchTarget.graphics.beginFill("#0000FF").drawRect(gamestage.canvas.width / 2 + 5, gamestage.canvas.height - 48, 80, 16);
    this.setPauseButtonTouchTarget.x = gamestage.canvas.width - 128;
    this.setPauseButtonTouchTarget.y = 128;
    this.setPauseButtonTouchTarget.spriteSheet = {};
    this.setPauseButtonTouchTarget.spriteSheet._frameHeight = 16;
    this.setPauseButtonTouchTarget.spriteSheet._frameWidth = 80;

    this.closeButtonTouchTarget = new createjs.Shape();
    this.closeButtonTouchTarget.graphics.beginFill("#0000FF").drawRect(gamestage.canvas.width / 2 + 5, gamestage.canvas.height - 48, 80, 16);
    this.closeButtonTouchTarget.x = gamestage.canvas.width / 2 - 40;
    this.closeButtonTouchTarget.y = 160;
    this.closeButtonTouchTarget.spriteSheet = {};
    this.closeButtonTouchTarget.spriteSheet._frameHeight = 16;
    this.closeButtonTouchTarget.spriteSheet._frameWidth = 80;

	var executivemanLabel = new createjs.Text("EXECUTIVE MAN", "bold 7px Arial", "#FFF");
	var executivemanLabel2 = new createjs.Text("EXECUTIVE MAN", "bold 7px Arial", "#000");
	var hasJoystickLabel = new createjs.Text("Joystick Detected", "bold 7px Arial", "#FFF");
	this.leftLabel = new createjs.Text("LEFT BUTTON", "bold 8px Arial", "#FFF");
	this.leftSelected = new createjs.Text("LEFT ARROW", "bold 8px Arial", "#FFF");
	this.rightLabel = new createjs.Text("RIGHT BUTTON", "bold 8px Arial", "#FFF");
	this.rightSelected =  new createjs.Text("RIGHT ARROW", "bold 8px Arial", "#FFF");
	this.jumpLabel =  new createjs.Text("JUMP BUTTON", "bold 8px Arial", "#FFF");
	this.jumpSelected =  new createjs.Text("SPACE", "bold 8px Arial", "#FFF");
	this.shootLabel =  new createjs.Text("SHOOT BUTTON", "bold 8px Arial", "#FFF");
	this.shootSelected =  new createjs.Text("C", "bold 8px Arial", "#FFF");
	this.pauseLabel =  new createjs.Text("PAUSE BUTTON", "bold 8px Arial", "#FFF");
	this.pauseSelected =  new createjs.Text("P", "bold 8px Arial", "#FFF");

	this.close =  new createjs.Text("CLOSE", "bold 8px Arial", "#FFF");

	executivemanLabel.x = gamestage.canvas.width / 2 - 30;
	executivemanLabel.y = 38;
	executivemanLabel2.x = gamestage.canvas.width / 2 - 29;
	executivemanLabel2.y = 39;

	this.leftLabel.x = 64;
	this.leftSelected.x = gamestage.canvas.width - 128;
	this.rightLabel.x = 64;
	this.rightSelected.x = gamestage.canvas.width - 128;
	this.jumpLabel.x = 64;
	this.jumpSelected.x = gamestage.canvas.width - 128;
	this.shootLabel.x = 64;
	this.shootSelected.x = gamestage.canvas.width - 128;
	this.pauseLabel.x = 64;
	this.pauseSelected.x = gamestage.canvas.width - 128;
	this.leftLabel.y = 64;
	this.leftSelected.y = 64;
	this.rightLabel.y = 80;
	this.rightSelected.y = 80;
	this.jumpLabel.y = 96;
	this.jumpSelected.y = 96;
	this.shootLabel.y = 112;
	this.shootSelected.y = 112;
	this.pauseLabel.y = 128;
	this.pauseSelected.y = 128;
	hasJoystickLabel.x = 64;
	hasJoystickLabel.y = 144;

	this.close.x = gamestage.canvas.width / 2 - 15;
	this.close.y = 160;

    optionsstage.addChild(shape);
    optionsstage.addChild(executivemanLabel2);
    optionsstage.addChild(executivemanLabel);
    optionsstage.addChild(this.divider);
	optionsstage.addChild(this.leftLabel);
	optionsstage.addChild(this.leftSelected);
	optionsstage.addChild(this.rightLabel);
	optionsstage.addChild(this.rightSelected);
	optionsstage.addChild(this.jumpLabel);
	optionsstage.addChild(this.jumpSelected);
	optionsstage.addChild(this.shootLabel);
	optionsstage.addChild(this.shootSelected);
	optionsstage.addChild(this.pauseLabel);
	optionsstage.addChild(this.pauseSelected);
	optionsstage.addChild(this.close);

	if (hasJoystick) {
		optionsstage.addChild(hasJoystickLabel);
	}

    this.remove = function() {
		optionsUp = false;
        playSound("pauseclose");
		gamestage.removeChild(optionsstage);
    };

    this.show = function() {
		optionsUp = true;
		playSound("pauseopen");

		document.addEventListener('click', optionsClickHandler.bind(this), false);

		gamestage.addChild(optionsstage);
    };
}

function optionsClickHandler(event) {
	if (!optionsUp) {
		return;
	}

	if (clicked) {
		return;
	}

	clicked = true;
	setTimeout(function() { clicked = false; }, 250);

	var touchEventSpriteSheet = new createjs.SpriteSheet({
        "images": ["images/businessmanspritesheet.png"],
        "frames": {
            "width": 1, "height": 1, "count": 1
        },
        "animations": {
            "exist": {
                "frames" : [0],
                "next" : "exist"
            }
        }
    });
    var touchSprite = new createjs.Sprite(touchEventSpriteSheet, "exist");

    touchSprite.x = event.clientX / gamezoom;
    touchSprite.y = event.clientY / gamezoom;
    if (fastCollisionSprite(this.closeButtonTouchTarget, touchSprite)) {
		this.remove();
		event.target.removeEventListener(event.type, arguments.callee, false);
    } else if (fastCollisionSprite(this.setLeftButtonTouchTarget, touchSprite)) {
		this.leftSelected.text = "PRESS ANY KEY";
		this.setKeyLabel = this.leftSelected;
		this.setKey = "left";
		document.addEventListener('keydown', optionsKeyDownHandler.bind(this), false);
    } else if (fastCollisionSprite(this.setRightButtonTouchTarget, touchSprite)) {
		this.rightSelected.text = "PRESS ANY KEY";
		this.setKeyLabel = this.rightSelected;
		this.setKey = "right";
		document.addEventListener('keydown', optionsKeyDownHandler.bind(this), false);
    } else if (fastCollisionSprite(this.setJumpButtonTouchTarget, touchSprite)) {
		this.jumpSelected.text = "PRESS ANY KEY";
		this.setKeyLabel = this.jumpSelected;
		this.setKey = "jump";
		document.addEventListener('keydown', optionsKeyDownHandler.bind(this), false);
    } else if (fastCollisionSprite(this.setShootButtonTouchTarget, touchSprite)) {
		this.shootSelected.text = "PRESS ANY KEY";
		this.setKeyLabel = this.shootSelected;
		this.setKey = "shoot";
		document.addEventListener('keydown', optionsKeyDownHandler.bind(this), false);
    } else if (fastCollisionSprite(this.setJumpButtonTouchTarget, touchSprite)) {
		this.jumpSelected.text = "PRESS ANY KEY";
		this.setKeyLabel = this.jumpSelected;
		this.setKey = "jump";
		document.addEventListener('keydown', optionsKeyDownHandler.bind(this), false);
    } else if (fastCollisionSprite(this.setPauseButtonTouchTarget, touchSprite)) {
		this.pauseSelected.text = "PRESS ANY KEY";
		this.setKeyLabel = this.pauseSelected;
		this.setKey = "pause";
		document.addEventListener('keydown', optionsKeyDownHandler.bind(this), false);
    }

    if (hasJoystick) {
    	window.setInterval(gamepadPoll_options.bind(this), 60);
    }
}

function optionsKeyDownHandler(e) {
	if (!this.setKey) {
		return;
	}

	keyCodes[this.setKey] = e.keyCode;

	if (e.keyCode === 37) {
		this.setKeyLabel.text = "LEFT ARROW";
	} else if (e.keyCode === 39) {
		this.setKeyLabel.text = "RIGHT ARROW";
	} else if (e.keyCode === 32) {
		this.setKeyLabel.text = "SPACE";
	} else {
		this.setKeyLabel.text = String.fromCharCode(e.keyCode);
	}
	event.target.removeEventListener(event.type, arguments.callee, false);
	this.setKeyLabel = null;
	this.setKey = null;
}