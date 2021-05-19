export function simulateInput() {
	document.getElementById('result-word').value = 'вода';
	document.querySelector('.confirm').click();
	document.getElementById(
		'all-words'
	).value = `Превозно средсвто: велосипед \n птица: сова \n плод-зеленчук: домат \n въпросително местоимение: защо`;
	document.querySelector('.confirm').click();
}
