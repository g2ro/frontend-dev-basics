var _jQuery = function(elements) {
	this.length = elements.length;
	for(var i = 0; i < this.length; i++){
		this[i] = elements[i];
	}
}

_jQuery.prototype.click = function(callback){
	for(var i = 0; i< this.length; i++){
		this[i].addEventListener('click', callback);
	}
}
_jQuery.prototype.css = function(name, value){
	for(var i = 0; i< this.length; i++){
			this[i].style[name] = value;
		}
}

_jQuery.prototype.jquery = '0.0.1.beta';

var jQuery = function(param){

	if(typeof(param) === 'function'){
		window.addEventListener('load', param);
		return;	
	}
	
	var elements;
	
	if(typeof(param) === 'string'){
		elements = document.querySelectorAll(param);
	}
	
	return new _jQuery(elements || {length:0});
};

var $ = jQuery;