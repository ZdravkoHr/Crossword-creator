import { Modal } from './modal';

export class SubModal extends Modal {
	get modalContent() {
		const template = document.getElementById(this.id);
		const templateBody = document.importNode(template.content, true);
		return templateBody;
	}

	constructor(id) {
		super();
		this.id = id;
		this.create(this.modalContent);
	}
}
