var currentElem;
var toggleElem;
var elemItems;
var allElems;
function calcMaxHeight(currentElem){
	let counter = 0;
	let max_height = 0
	elemItems = currentElem.children[0].children[0].querySelectorAll(".dropdown__link");
	for(item of elemItems){
		max_height += item.offsetHeight;
	}
	max_height += 20;
	return(max_height);
}
document.addEventListener("click", function(e){
	let activeElem;
	if(e.target.classList.contains("dropdown-toggle-button")){
		allElems = document.querySelectorAll(".dropdown-menu");
		currentElem = e.target.parentNode.parentNode.children[2];
		if(e.target.tagName == "svg"){
			if(currentElem.classList.contains("on")){
				currentElem.classList.remove("on");
				if(currentElem.parentNode.classList.contains("dropdown--page")){
					currentElem.parentNode.style.cssText = "background: rgb(61, 61, 61)";
				}
				else{
					currentElem.parentNode.style.cssText = "background: #797979";
				}
				toggleElem = currentElem.parentNode.children[1].children[0].children[0];
				toggleElem.setAttribute("d","M33 20L25 30L17 20");
				currentElem.style.maxHeight = 0;
			}
			else{
				for(activeElem of allElems){
					if(activeElem.classList.contains("on") && activeElem != currentElem){
						activeElem.classList.remove("on");
						if(activeElem.parentNode.classList.contains("dropdown--page")){
							activeElem.parentNode.style.cssText = "background: rgb(61, 61, 61)";
						}
						else{
							activeElem.parentNode.style.cssText = "background: #797979";
						}
						toggleElem = activeElem.parentNode.children[1].children[0].children[0];
						toggleElem.setAttribute("d","M33 20L25 30L17 20");
						activeElem.style.maxHeight = 0;
						break;
					}
				}	
				currentElem.classList.add("on");	
				if(currentElem.parentNode.classList.contains("dropdown--page")){
					currentElem.parentNode.style.cssText = "background: #95c11f";
				}
				else{
					currentElem.parentNode.style.cssText = "background: #009fe3";
				}
				toggleElem = currentElem.parentNode.children[1].children[0].children[0];
				toggleElem.setAttribute("d","M33 29L25 21L17 29");
				maxHeight = calcMaxHeight(currentElem);
				currentElem.style.maxHeight = maxHeight + "px";
			}
		}
		else if(e.target.tagName == "path"){	
			currentElem = e.target.parentNode.parentNode.parentNode.children[2];
			if(currentElem.classList.contains("on")){
				currentElem.classList.remove("on");
				if(currentElem.parentNode.classList.contains("dropdown--page")){
					currentElem.parentNode.style.cssText = "background: rgb(61, 61, 61)";
				}
				else{
					currentElem.parentNode.style.cssText = "background: #797979";
				}
				toggleElem = currentElem.parentNode.children[1].children[0].children[0];
				toggleElem.setAttribute("d","M33 20L25 30L17 20");
				currentElem.style.maxHeight = 0;
			}
			else{
				for(activeElem of allElems){
					if(activeElem.classList.contains("on") && activeElem != currentElem){
						activeElem.classList.remove("on");
						if(activeElem.parentNode.classList.contains("dropdown--page")){
							activeElem.parentNode.style.cssText = "background: rgb(61, 61, 61)";
						}
						else{
							activeElem.parentNode.style.cssText = "background: #797979";
						}
						toggleElem = activeElem.parentNode.children[1].children[0].children[0];
						toggleElem.setAttribute("d","M33 20L25 30L17 20");
						activeElem.style.maxHeight = 0;
						break;
					}
				}
				currentElem.classList.add("on");	
				if(currentElem.parentNode.classList.contains("dropdown--page")){
					currentElem.parentNode.style.cssText = "background: #95c11f";		
				}
				else{
					currentElem.parentNode.style.cssText = "background: #009fe3";
				}
				toggleElem = currentElem.parentNode.children[1].children[0].children[0];
				toggleElem.setAttribute("d","M33 29L25 21L17 29");
				maxHeight = calcMaxHeight(currentElem);
				currentElem.style.maxHeight = maxHeight + "px";
			}
		}
	}
}
);