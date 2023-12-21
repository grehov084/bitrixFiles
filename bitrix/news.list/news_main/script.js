var odd_elems;
var even_elems;
var main_elem;
var show_more = document.querySelector(".section-news-load-more");
var parent_elem;
var odd_height;
var even_height;
var margin_top;
var counter;
var checkMain;
var window_width_default;
var newsPagen = 2;
function check_main(){
	main_elem = document.querySelector(".section-news--main");
	if(main_elem){
		margin_top = main_elem.offsetHeight;
		checkMain = 1;
	}
	else{
		margin_top = 0;
		checkMain = 0;
	}
	return margin_top;
}
function oddElems(margin_top, counter){
	if(checkMain == 1){
		margin_top = 20;
		margin_top += main_elem.offsetHeight;
	}	
	else{
		margin_top = 0;
	}

	for(odd_elem of odd_elems){
		if(counter == 0){

		}
		else{
			margin_top += 20;
		}
		counter++;
		odd_elem.style.top = margin_top + "px";
		margin_top += odd_elem.offsetHeight;
	}
	odd_height = margin_top;
	return margin_top;
}
function evenElems(margin_top, counter){
	window_width = window.innerWidth;
	if(checkMain == 1){
		margin_top = 20;
		margin_top += main_elem.offsetHeight;
	}	
	else{
		margin_top = 0;
	}
	counter = 0;
	for(even_elem of even_elems){
		if(counter == 0){

		}
		else{
			margin_top += 20;
		}
		counter++;
		even_elem.style.top = margin_top + "px";
		margin_top += even_elem.offsetHeight;
		even_elem.style.left = 51 + "%";
	}
	even_height = margin_top;
	return margin_top;
}
function positionElems(){
	odd_elems = document.querySelectorAll(".section-news-col:nth-child(odd)");
	even_elems = document.querySelectorAll(".section-news-col:nth-child(2n)");
	counter = 0;
	if(checkMain == 1){
		margin_top = 0;
		margin_top = check_main();
		oddElems(margin_top, counter);
		margin_top = check_main();
		margin_top = evenElems(margin_top, counter);
		return margin_top;
	}
	else{
		evenElems(margin_top, counter);
		margin_top = 0;
		margin_top = check_main();
		margin_top = oddElems(margin_top, counter);
		return margin_top;
	}
}
function setContainerHeight(){
	check_main();
	if(window.innerWidth > 640){
		let margin_top = 50;
		if(odd_height > even_height){
			parent_elem.style.height = odd_height + margin_top + "px";
		}
		else{
			parent_elem.style.height = even_height + margin_top + "px";
			}
		}
	else{
		let container_mobile_height = 0;
		let all_elems = document.querySelectorAll(".section-news-col");
		parent_elem = document.querySelector(".section-news-main .section-news-list");
		if(checkMain == 1){
			main_elem = document.querySelector(".section-news--main");
			container_mobile_height += main_elem.offsetHeight;
			container_mobile_height += 30;
		}
		let elem;
		for(elem of all_elems){
			container_mobile_height += elem.offsetHeight;
		}
		container_mobile_height += 20;
		parent_elem.style.height = container_mobile_height + "px";
	}
}

if(window.innerWidth > 640){
	document.addEventListener("DOMContentLoaded", function(){
		window_width_default = window.innerWidth;
		parent_elem = document.querySelector(".section-news-row");
		check_main();
		positionElems();
		setContainerHeight();
	});
}
else{
	document.addEventListener("DOMContentLoaded", function(){
		setContainerHeight();
	});
}
show_more.addEventListener("click", function(){
	if(window.innerWidth > 600){
		$.ajax({
		url: '/local/templates/main2/components/bitrix/news.list/news_main/ajax/more_news.php?PAGEN_1=' + newsPagen,
		success: function(data){
			$('.section-news-row--main').append(data);
			newsPagen++;
			check_main();
			counter = 0;
			parent_elem = document.querySelector(".section-news-list");
			positionElems();
			setContainerHeight();
		}
		});
	}
	else{
		$.ajax({
		url: '/local/templates/main2/components/bitrix/news.list/news_main/ajax/more_news.php?PAGEN_1=' + newsPagen,
		success: function(data){
			$('.section-news-row--main').append(data);
			newsPagen++;
			setContainerHeight();
		}
		});
	}
});
$(window).resize(function(){
	if(window.innerWidth < 640){
		setContainerHeight();
	}
	else{
		positionElems();
		setContainerHeight();
	}
});