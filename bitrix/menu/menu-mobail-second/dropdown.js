var current_elem;
var menu_elem;
var elem_disable;
var toggle_elem;
var toggle_disable;
var drop;
var i;
var k;
document.addEventListener("click", function(e){
	current_elem = null;
	toggle_elem = null;
	menu_elem = null;
	drop = null;
	if(e.target.classList.contains('dropdown-toggle-button')){
		k = 1;
		j = 2;
		current_elem = e.target.closest("li");
		menu_elem = current_elem.children[2];
		toggle_elem = e.target;
		if(toggle_elem.tagName == "svg"){
			toggle_elem = toggle_elem.children[0];
		}
		if(!menu_elem.classList.contains("drop")){
				menu_elem.classList.add("drop");
				console.log("true");
				console.log(menu_elem);
			} 
		else{
			menu_elem.classList.remove("drop");
			console.log("false");
			console.log(menu_elem);
			toggle_elem.setAttribute("d","M33 20L25 30L17 20");
			if(current_elem.classList.contains("dropdown--bg")){
				current_elem.style.cssText = 'background: rgb(61, 61, 61)';
				}
			else{
				current_elem.style.cssText = 'background: #9a9797';
				}
			}
		}
	}
)