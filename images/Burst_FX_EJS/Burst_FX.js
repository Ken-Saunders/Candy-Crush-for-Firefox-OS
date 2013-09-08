(function(window) {
starburst = function() {
	this.initialize();
}
starburst._SpriteSheet = new SpriteSheet({images: ["Burst_FX.png"], frames: [[0,0,124,135,0,61.1,71.2],[124,0,124,135,0,61.1,71.2],[248,0,124,135,0,61.1,71.2],[372,0,124,135,0,61.1,71.2],[0,135,124,135,0,61.1,71.2],[124,135,124,135,0,61.1,71.2],[248,135,124,135,0,61.1,71.2],[372,135,124,135,0,61.1,71.2],[0,270,124,135,0,61.1,71.2],[124,270,124,135,0,61.1,71.2],[248,270,124,135,0,61.1,71.2],[372,270,124,135,0,61.1,71.2]]});
var starburst_p = starburst.prototype = new BitmapAnimation();
starburst_p.BitmapAnimation_initialize = starburst_p.initialize;
starburst_p.initialize = function() {
	this.BitmapAnimation_initialize(starburst._SpriteSheet);
	this.paused = false;
}
window.starburst = starburst;
}(window));

