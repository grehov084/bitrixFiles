var current_elem;
var menu_elem;
var toggle_elem;
var active_elem;
document.addEventListener("click", function(e){
	if(e.target.classList.contains('dropdown-toggle-button')){
		console.log("1");
		current_elem = e.target.closest("li");
		menu_elem = current_elem.children[2];
		toggle_elem = e.target;
		if(toggle_elem.tagName == "svg"){
			toggle_elem = toggle_elem.children[0];
		}
		if(!menu_elem.classList.contains("on")){
			menu_elem.classList.add("on");
			toggle_elem.setAttribute("d","M33 29L25 21L17 29");
			current_elem.style.cssText = 'background: #009fe3';
			console.log(current_elem);
		} 
		else{
			menu_elem.classList.remove("on");
			toggle_elem.setAttribute("d","M33 20L25 30L17 20");
			console.log(current_elem);
			if(current_elem.classList.contains("dropdown--bg")){

			}
			else{
				current_elem.style.cssText = 'background: #9a9797';
			}
		}
	}
console.log("1");
})