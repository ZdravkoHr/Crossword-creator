export class Table {
	static create(wordsInfo, squareInfo, color) {
		const mainArea = document.getElementById('main-area');
		const table = document.createElement('table');

		wordsInfo.forEach(info => {
			const row = document.createElement('div');
			for (const i in info.word) {
				const char = info.word[i];
				const col = document.createElement('div');
				col.style.width = squareInfo.sizes.side;
				col.style.height = squareInfo.sizes.side;
				col.textContent = char;
				col.classList.add('col');
				console.log(i, info.startingSpace);
				if (i == info.startingSpace) {
					console.log(1);

					col.style.backgroundColor = color;
				}
				row.appendChild(col);
			}
			const marginLeft =
				(squareInfo.sizes.side +
					squareInfo.sizes.border +
					squareInfo.margin * 2) *
					-info.startingSpace || squareInfo.margin;

			row.style.marginLeft = marginLeft + 'px';

			row.classList.add('row');
			table.appendChild(row);
		});

		table.classList.add('crossword-table');
		mainArea.appendChild(table);
	}
}
