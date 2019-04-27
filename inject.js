// this is the code which will be injected into a given page...

(function() {

	// find the height and width of displayed product image
	var prodDisplayedWidth = document.getElementById('imgTagWrapperId').clientWidth;
	var prodDisplayedHeight = document.getElementById('imgTagWrapperId').clientHeight;
	
	var prodPhysicalHeightCM = prompt("What is the product's physical height in centimeters?");
	var prodPhysicalWidthCM = 30;
	
	// compute size of US dollar bill to be shown
	var pixelsPerCM = prodDisplayedHeight/prodPhysicalHeightCM;
	
	var dollarBillHeight = (pixelsPerCM * 15.59);
	// 28 pixels per cm
	var element = document.createElement("div");
	element.style.top = 0;
	element.setAttribute("style", "position:absolute!important; background-image:url('https://i.imgur.com/cxFIAUV.png'); background-repeat:repeat-y; z-index:99; background-size:contain; color:transparent; height: " + (dollarBillHeight) + "px !important;");
	element.style.position = 'absolute';
    element.appendChild(document.createTextNode('This text does not have any meaning and can be ignored'));
    var my_elem = document.getElementById('imgTagWrapperId');
	
	my_elem.parentNode.insertBefore(element, my_elem);
	

})();
