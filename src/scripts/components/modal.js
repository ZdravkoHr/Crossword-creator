export class Modal {
	constructor() {
		this.template = document.getElementById('modal-template');
	}

	add() {
		document.body.appendChild(this.modalElement);
	}

	delete() {
		this.modalElement.remove();
	}

	create(innerElement) {
		const element = document.createElement('div');
		const templateBody = document.importNode(this.template.content, true);
		templateBody.appendChild(innerElement);
		element.appendChild(templateBody);
		element.classList.add('modal');
		this.modalElement = element;
	}
}
