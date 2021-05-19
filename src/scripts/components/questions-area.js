export class QuestionsArea {
	constructor(definitions) {
		this.definitions = definitions;
		this.htmlEl = document.getElementById('questions-area');
	}

	addQuestions() {
		this.definitions.forEach((word, index) => {
			const questionsArea = document.getElementById('questions-area');
			const questionTemplate = document.querySelector('.question-template');
			const questionEl = document.createElement('div');
			questionEl.classList.add('question');
			questionEl.appendChild(
				document.importNode(questionTemplate.content, true)
			);

			questionEl.querySelector('p').innerHTML = `<span class="bold">${
				index + 1
			}. </span>${word.question}`;
			questionsArea.appendChild(questionEl);
		});
	}
}
