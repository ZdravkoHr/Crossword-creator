import { SubModal } from './sub-modal';
import { Table } from './table';
import { QuestionsArea } from './/questions-area';
export class Crossword {
	constructor() {
		this.resultWordModal = new SubModal('result-word-template');
		this.allWordsModal = new SubModal('all-words-template');
		this.wordsInfo = [];
	}

	start() {
		this.askForResultWord();
	}

	askForResultWord() {
		this.askHandler(this.resultWordModal, this.resultWordBtnHandler);
	}

	askForAllWords() {
		this.askHandler(this.allWordsModal, this.allWordsBtnHandler);
	}

	askHandler(modal, fnHandler) {
		modal.add();
		modal.modalElement
			.querySelector('.btn.confirm')
			.addEventListener('click', fnHandler.bind(this));
	}

	resultWordBtnHandler(event) {
		event.preventDefault();
		const word = document.querySelector('#result-word').value;
		this.resultWord = word;
		this.resultWordModal.delete();
		this.askForAllWords();
	}

	allWordsBtnHandler(event) {
		event.preventDefault();
		const textArea = document.querySelector('#all-words');
		textArea.value.split('\n').forEach((pair, index) => {
			const [question, word] = pair.split(':').map(word => word.trim());
			const startingSpace = this.getStartingSpace(word, index);
			this.wordsInfo.push({ question, word, startingSpace });
		});
		this.allWordsModal.delete();
		this.createTable();
		this.addQuestionsArea();
	}

	createTable() {
		const squareInfo = {
			sizes: {
				side: 30,
				border: 1,
			},
			margin: 2,
		};
		Table.create(this.wordsInfo, squareInfo, '#ccc');
	}

	addQuestionsArea() {
		const questionsArea = new QuestionsArea(this.wordsInfo);
		questionsArea.addQuestions();
	}

	getStartingSpace(word, index) {
		return word.indexOf(this.resultWord[index]);
	}
}
