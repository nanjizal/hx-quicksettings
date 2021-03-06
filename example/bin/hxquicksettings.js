// Generated by Haxe 3.4.2
(function () { "use strict";
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10 ? "0" + m : "" + m) + "-" + (d < 10 ? "0" + d : "" + d) + " " + (h < 10 ? "0" + h : "" + h) + ":" + (mi < 10 ? "0" + mi : "" + mi) + ":" + (s < 10 ? "0" + s : "" + s);
};
var Main = function() {
	var _gthis = this;
	var panel1 = QuickSettings.create(10,10,"Panel 1").addRange("Range",0,100,30,1,function(value) {
		_gthis.panel4.setValue("Output","Range" + ": " + (value == null ? "null" : "" + value));
	}).addNumber("Number",0,100,50,1,function(value1) {
		_gthis.panel4.setValue("Output","Number" + ": " + (value1 == null ? "null" : "" + value1));
	}).addColor("Color","#ff0000",function(value2) {
		_gthis.panel4.setValue("Output","Color" + ": " + (value2 == null ? "null" : "" + value2));
	}).addBoolean("Boolean",true,function(value3) {
		_gthis.panel4.setValue("Output","Boolean" + ": " + (value3 == null ? "null" : "" + value3));
	}).addText("Text","some text",function(value4) {
		_gthis.panel4.setValue("Output","Text" + ": " + (value4 == null ? "null" : "" + value4));
	}).addTextArea("TextArea","a whole bunch of text can go here",function(value5) {
		_gthis.panel4.setValue("Output","TextArea" + ": " + (value5 == null ? "null" : "" + value5));
	}).addButton("Button",function(value6) {
		_gthis.panel4.setValue("Output","Button" + ": " + "clicked");
	}).addHTML("Info","Info. This is a description...").setKey("s").saveInLocalStorage("localstoragedemo_v3.0");
	var canvas = window.document.createElement("canvas");
	canvas.width = 100;
	canvas.height = 100;
	var context = canvas.getContext("2d");
	context.beginPath();
	context.fillStyle = "red";
	context.arc(50,50,50,0,Math.PI * 2);
	context.fill();
	var panel2 = QuickSettings.create(250,10,"Panel 2").addDropDown("DropDown",["one","two","three"],function(value7) {
		_gthis.panel4.setValue("Output","DropDown" + ": " + Std.string(value7.value));
	}).addImage("Image","boyhowdy.jpg").addProgressBar("ProgressBar",100,50).addElement("Element (canvas)",canvas);
	var panel3 = QuickSettings.create(490,10,"Panel3").addHTML("HTML","<b>bold</b> <u>underline</u> <i>italic</i><ol><li>one</li><li>two</li><li>three</li>").addPassword("Password","12345678",function(value8) {
		_gthis.panel4.setValue("Output","Password" + ": " + (value8 == null ? "null" : "" + value8));
	}).addDate("Date","2016-07-11",function(value9) {
		_gthis.panel4.setValue("Output","Date" + ": " + (value9 == null ? "null" : "" + value9));
	}).addTime("Time","06:03:25",function(value10) {
		_gthis.panel4.setValue("Output","Time" + ": " + (value10 == null ? "null" : "" + value10));
	});
	this.panel4 = QuickSettings.create(730,10,"Output Panel").addTextArea("Output");
	this.panel5 = QuickSettings.create(730,200).addFileChooser("file chooser","pick an image...","image/*",$bind(this,this.onFileChosen)).addTextArea("file info","").setTextAreaRows("file info",10).addImage("image","");
	var settings = QuickSettings.create(970,10,"HTML demo").addHTML("info","Since all the previous demos were canvas-based, I just wanted to show that there's no dependency on canvas here.").addHTML("info2","Most of this is done through direct binding on the HTML objects.").addHTML("info3","The fontSize control needs a callback because we have to add a unit (px or whatever)").bindText("title",window.document.title,window.document).bindColor("backgroundColor","#ffffff",window.document.body.style).bindText("innerHTML","Hello world",window.document.getElementsByTagName("h1")[0]).bindDropDown("fontFamily",["serif","sans-serif","monospace","cursive"],window.document.body.style);
	settings.addRange("fontSize",1,40,16,1,function(value11) {
		window.document.getElementsByTagName("p")[0].style.fontSize = value11 + "px";
	});
};
Main.__name__ = true;
Main.main = function() {
	window.document.addEventListener("DOMContentLoaded",function(e) {
		new Main();
	});
};
Main.prototype = {
	onFileChosen: function(file) {
		window.console.log(file);
		this.panel5.setValue("file info","name: " + file.name + "\n\nsize: " + file.size + " bytes\n\ndate: " + Std.string(file.lastModifiedDate) + "\n\ntype: " + file.type);
		this.panel5.setValue("image",URL.createObjectURL(file));
	}
};
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) {
					return o[0];
				}
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) {
						str += "," + js_Boot.__string_rec(o[i],s);
					} else {
						str += js_Boot.__string_rec(o[i],s);
					}
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g11 = 0;
			var _g2 = l;
			while(_g11 < _g2) {
				var i2 = _g11++;
				str1 += (i2 > 0 ? "," : "") + js_Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) {
			str2 += ", \n";
		}
		str2 += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
String.__name__ = true;
Array.__name__ = true;
Date.__name__ = ["Date"];
Main.main();
})();
