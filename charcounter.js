function charCount(myChar, str) {
	let charCount = 0
	
	for (let i = 0; i < str.length; i++){
			 if (str.charAt(i) === myChar){
			charCount += 1;
	}
			 }
			 return charCount;
}