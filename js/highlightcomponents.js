if(selector.indexOf('[id]') == -1){
    selector = selector + ', [id]';  
   	componentNode = document.createElement('style');
	componentNode.textContent = selector +","+"section"+ ' {outline: solid 1px rgb(186, 78, 114);}';
	document.head.appendChild(componentNode);
}else{
	componentNode.remove();
	componentNode = null;
	let selector_array = selector.split(',');
	selector_array.splice(2);
	selector = selector_array.join(',');
	console.log("removed "+selector);
}

