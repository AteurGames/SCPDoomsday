var mode = "0";//0 - building, 1 - editing, 2 - selling, 3 - free mouse
//var dispmoney = document.getElementById("money");
var selectedX = -1;
var selectedY = -1;
var money = 50000;
var area="game";
var hdoor;
var year = 1;
var month = 1;
var day = 1;
var hour = 12;
var selectedItem = " ";
var isItem = "0";
var selectedTab = 0;
var ent;
var buildMap = [
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "]
];
var itemMap = [
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "]
];
var zoneMap = [
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "]
];
var landMap = [
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "],
	[" "," "," "," "," "," "," "," "," "," "," "," "]];

function preload() {
	hdoor = loadImage("images/items/HDoor.png");
}
function setup() {
	var canvas = createCanvas(1000,1000);
	canvas.parent('sketch-holder');
	mode = "0";
	ent = {
		world: {}
		template: {
			scientist: {
				entity: createSprite()
				status: 1; //alive - 1, dead - 0
				init: function() {
					this.entity.width = 25;
					this.entity.width = 25;
				}
			}
		}
	}
};	
}
function hideClass(name) {
	var divsToHide = document.getElementsByClassName(name); //divsToHide is an array
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.visibility = "hidden"; // or
        divsToHide[i].style.display = "none"; // depending on what you're doing
    }
}
function saveMap() {
	var saveBuild = "";
	for(var i=0;i<buildMap[0].length;i++) {
		saveBuild = saveBuild + "[";
		for(var y=0;y<buildMap.length;y++) {
			saveBuild = saveBuild + "'"+buildMap[i][y]+"'"
			if(y!=buildMap.length-1){
				saveBuild = saveBuild + ","
			}
		}
		saveBuild = saveBuild + "]";
		if(i!=buildMap[0].length-1){
			saveBuild = saveBuild + ","
		}
	}
	var saveItem = "";
	for(var i=0;i<itemMap[0].length;i++) {
		saveItem = saveItem + "[";
		for(var y=0;y<itemMap.length;y++) {
			saveItem = saveItem + "'"+itemMap[i][y]+"'"
			if(y!=itemMap.length-1){
				saveItem = saveItem + ","
			}
		}
		saveItem = saveItem + "]";
		if(i!=buildMap[0].length-1){
			saveItem = saveItem + ","
		}
	}
	prompt("Copy-paste this to save your file.",saveBuild);
	prompt("Copy-paste this to save your file.",saveItem);
}
function showClass(name) {
	var divsToHide = document.getElementsByClassName(name); //divsToHide is an array
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].style.visibility = "visible"; // or
        divsToHide[i].style.display = "inline"; // depending on what you're doing
    }
}
function round(num, places) {
    var multiplier = Math.pow(10, places);
    return Math.round(num * multiplier) / multiplier;
}
function money_round(num) {
    return Math.ceil(num * 100) / 100;
}
function findPrice(id,type) { //easy way to store prices
	if(type==0) {
		switch (id) {

		case " ":
		return 14.35;

		case "0":
		return 121.91;

		case "1":
		return 152.34;

		case "2":
		return 102.12;

		case "3":
		return 109.67;
		}
	}
	if(type==1){
		switch (id) {

		case " ":
		return 5.03

		case "0":
		return 51.14

		case "1":
		return 24.95
		}
	}
}
function checkSelectID(id) {
	if (id == " ") {
		return color(65,215,65); //ground
	}
	if (id == "0") {
		return color(65,65,65); //heavy floor
	}
	if (id == "1") {
		return color(65,65,85); //heavy wall
	}
	if (id == "2") {
		return color(115,115,115); // light floor
	}
	if (id == "3") {
		return color(85,85,85); // light wall
	}
	if (id == "4") {
		return color(115,115,115); // entrance floor
	}
	if (id == "5") {
		return color(165,165,140); // entrance wall
	}
}
function checkSelectItemID(id) {
	if (id == " ") {
		return color(65,215,65);
	}
	if (id == "0") {
		return color(45,55,45); //heavy door
	}
	if (id == "1") {
		return color(105,100,105); //light door
	}
}
function checkbuildMap(x,y) {
	if (buildMap[y][x] == " ") {
		return color(50,200,50); //ground
	}
	if (buildMap[y][x] == "0") {
		return color(50,50,50); //heavy floor
	}
	if (buildMap[y][x] == "1") {
		return color(50,50,70); //heavy wall
	}
	if (buildMap[y][x] == "2") {
		return color(100,100,100); // light floor
	}
	if (buildMap[y][x] == "3") {
		return color(70,70,70); // light wall
	}
	if (buildMap[y][x] == "4") {
		return color(100,100,100); // entrance floor
	}
	if (buildMap[y][x] == "5") {
		return color(150,150,125); // entrance wall
	}
}
function checkItemMap(x,y) {
	if (itemMap[y][x] == " ") {
		return 0; //no item
	}
	if (itemMap[y][x] == "0") {
		return color(30,40,30); //heavy door
	}
	if (itemMap[y][x] == "1") {
		return color(90,85,90); //light door
	}
}
function drawMap() {
	for(var i=0;i<buildMap[0].length;i++) {
		for(var j=0;j<buildMap.length;j++) {
			fill(checkbuildMap(i,j))
			rect(i*25,j*25,25,25);
		}
	}
	for(var k=0;k<itemMap[0].length;k++) {
		for(var l=0;l<itemMap.length;l++) {
			if (checkItemMap(k,l)!=0) {
				fill(checkItemMap(k,l))
				rect((k*25)+5.5,(l*25)+5.5,12.5,12.5);
			}
		}
	}
}
function drawSelect() {
	for(var x=0;x<buildMap[0].length;x++) {
		for(var y=0;y<buildMap.length;y++) {
			if(((mouseX-25 <= x*25)&&(mouseY-25 <= y*25))&&((mouseX > x*25)&&(mouseY > y*25))&&mode == "0" && isItem == "0") {
				fill(checkSelectID(selectedItem))
				rect(x*25,y*25,25,25);
				if((mouseIsPressed && buildMap[y][x] != selectedItem) && money >= findPrice(selectedItem,0)) {
					if (buildMap[y][x] != " ") {
						money += findPrice(buildMap[y][x],0)/2;
					}
					buildMap[y][x] = selectedItem;
					money -= findPrice(buildMap[y][x],0);
				}
				if (mouseIsPressed) {
					selectedX = -1;
					selectedY = -1;
				}
				//console.log(mouseX+","+mouseY)
			}
			if(((mouseX-25 <= x*25)&&(mouseY-25 <= y*25))&&((mouseX > x*25)&&(mouseY > y*25))&&mode == "0" && isItem == "1") {
				fill(checkSelectItemID(selectedItem))
				rect(x*25,y*25,25,25);
				if((mouseIsPressed && itemMap[y][x] != selectedItem) && money >= findPrice(selectedItem,1)) {
					if (itemMap[y][x] != " ") {
						money += findPrice(itemMap[y][x],1)/2;
					}
					itemMap[y][x] = selectedItem;
					money -= findPrice(itemMap[y][x],1);
				}
				if (mouseIsPressed) {
					selectedX = -1;
					selectedY = -1;
				}
				//console.log(mouseX+","+mouseY)
			}
			if(((mouseX-25 <= x*25)&&(mouseY-25 <= y*25))&&((mouseX > x*25)&&(mouseY > y*25))&&mode == "1") {
				if(itemMap[y][x] != " ") {
					fill(checkSelectItemID(itemMap[y][x]))
					rect((x*25)+5.5,(y*25)+5.5,12.5,12.5);
				}
				if(itemMap[y][x] == " ") {
					fill(checkSelectID(buildMap[y][x]))
					rect(x*25,y*25,25,25);
				}
				if(mouseIsPressed) {
					selectedX = x;
					selectedY = y;
				}
				//console.log(mouseX+","+mouseY)
			}
			if(selectedX != -1) {
				if(itemMap[selectedY][selectedX] != " ") {
					fill(checkSelectItemID(itemMap[selectedY][selectedX]));
					rect((selectedX*25)+5.5,(selectedY*25)+5.5,12.5,12.5);
				} else {
					fill(checkSelectID(buildMap[selectedY][selectedX]));
					rect(selectedX*25,selectedY*25,25,25);
				}
				
			}
		}
	}
}
function draw() {
	if (area=="game") {
		document.getElementById("money").innerHTML = "Money: $" + money_round(money);
		if (selectedTab == "1") {
			hideClass("heavy");
			showClass("light");
		} else if (selectedTab == "0") {
			hideClass("light");
			showClass("heavy");
		}
		drawMap();
		drawSelect();
	}
}
