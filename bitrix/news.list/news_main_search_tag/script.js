var first_elem = document.querySelector(".section-news-col:nth-child(1)");
var show_more = document.querySelector(".section-news-load-more");
var first_column_elems;
var second_column_elems;
var third_column_elems;
var fourth_column_elems 
var margin_top = 0;
var margin_left = 0;
var column_height = [0, 0, 0, 0];
var elem_width = 0;
var newsPagen = 2;
function first_column_position(elem_width){
		margin_top = 0;
		column_height[0] = 0;
		for(elem of first_column_elems){
			elem.style.top = margin_top + "px";
			margin_top += elem.offsetHeight;
			elem.style.left = 0 + "px";
		}
		column_height[0] += margin_top;
		return column_height[0];
}
function second_column_position(elem_width){
	if(second_column_elems != null){
		margin_top = 0;
		column_height[1] = 0;
		margin_left = elem_width;
		for(elem of second_column_elems){
			elem.style.top = margin_top + "px";
			elem.style.left = margin_left + "px";
			margin_top += elem.offsetHeight + 20;
		}
		column_height[1] += margin_top;
		return column_height[1];
	}
}
function third_column_position(elem_width){
	if(third_column_elems != null){
		margin_top = 0;
		column_height[2] = 0;
		margin_left = elem_width * 2;
		for(elem of third_column_elems){
			elem.style.top = margin_top + "px";
			elem.style.left = margin_left + "px"; 
			margin_top += elem.offsetHeight + 20;
		}
		column_height[2] += margin_top;
		return column_height[2];
	}
}
function fourth_column_position(elem_width){
	if(fourth_column_elems != null){
		margin_top = 0;
		column_height[3] = 0;
		margin_left = elem_width * 3;
		for(elem of fourth_column_elems){
			elem.style.top = margin_top + "px";
			elem.style.left = margin_left + "px";
			margin_top += elem.offsetHeight + 20;
		}
		column_height[3] += margin_top;
		return column_height[3];
	}
}
function setContainerHeight(){
	let container_height = Math.max.apply(null, column_height);
	let container_elem = document.querySelector(".section-news-row");
	container_elem.style.height = container_height + "px"; 
}
function getElems(){
	if(window.innerWidth >= 1100){
		first_column_elems = document.querySelectorAll(".section-news-col:nth-child(4n+1)");
		second_column_elems = document.querySelectorAll(".section-news-col:nth-child(4n+2)");
		third_column_elems = document.querySelectorAll(".section-news-col:nth-child(4n+3)");
		fourth_column_elems = document.querySelectorAll(".section-news-col:nth-child(4n+4)");
	}
	else if(window.innerWidth > 900 && window.innerWidth < 1100){
		first_column_elems = document.querySelectorAll(".section-news-col:nth-child(3n+1)");
		second_column_elems = document.querySelectorAll(".section-news-col:nth-child(3n+2)");
		third_column_elems = document.querySelectorAll(".section-news-col:nth-child(3n+3)");
		fourth_column_elems = null;
	}
	else if(window.innerWidth > 600 && window.innerWidth <= 900){
		first_column_elems = document.querySelectorAll(".section-news-col:nth-child(2n+1)");
		second_column_elems = document.querySelectorAll(".section-news-col:nth-child(2n+2)");
		third_column_elems = null;
		fourth_column_elems = null;
	}
	else if(window.innerWidth <= 600){
		first_column_elems = document.querySelectorAll(".section-news-col");
		second_column_elems = null;
		third_column_elems = null;
		fourth_column_elems = null;
	}
}
function positionElems(){
	elem_width = first_elem.offsetWidth;
	if(typeof(first_column_elems) != "undefined"){
		first_column_position(elem_width);
	}
	if(typeof(second_column_elems) != "undefined"){
		second_column_position(elem_width);
	}
	if(typeof(third_column_elems) != "undefined"){
		third_column_position(elem_width);
	}
	if(typeof(fourth_column_elems) != "undefined"){
		fourth_column_position(elem_width);
	}
}
if(show_more != null){
	show_more.addEventListener("click", function(){
		console.log("1");
		if(window.innerWidth > 600){
			$.ajax({
			url: '/local/templates/main2/components/bitrix/news.list/news_main/ajax/more_news.php?PAGEN_1=' + newsPagen,
			success: function(data){
				$('.section-news-list').append(data);
				newsPagen++;
				counter = 0;
				parent_elem = document.querySelector(".section-news-list");
				getElems();
				positionElems();
				setContainerHeight();
			}
			});
		}
		else{
			$.ajax({
			url: '/local/templates/main2/components/bitrix/news.list/news_main/ajax/more_news.php?PAGEN_1=' + newsPagen,
			success: function(data){
				$('.section-news-list').append(data);
				newsPagen++;
				getElems();
				positionElems();
				setContainerHeight();
			}
			});
		}
});
}
window.addEventListener("resize", function(){
	getElems();
	positionElems();
	setContainerHeight();
});
document.addEventListener("DOMContentLoaded", function(){
	getElems();
	positionElems();
	setContainerHeight();
});