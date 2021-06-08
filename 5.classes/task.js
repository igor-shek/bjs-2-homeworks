class PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state = 100, type = null) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = state;
		this.type = type;
	}

	fix() {
		let oneAndHalf = this.state * 1.5;

		if (oneAndHalf <= 0) {
			this.state = 0;
		} else if (oneAndHalf > 100) {
			this.state = 100;
		} else {
			this.state = oneAndHalf;
		}
	}

	set state(newState) {
		if (newState <= 0) {
			this.state = 0;
		} else if (newState > 100) {
			this.state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount, state, type = 'magazine') {
		super(name, releaseDate, pagesCount, state);

		this.type = type;
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state, type = 'book') {
		super(name, releaseDate, pagesCount, state);

		this.author = author;
		this.type = type;
	}
}

class NovelBook extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state, type = 'novel') {
		super(name, releaseDate, pagesCount, state);

		this.author = author;
		this.type = type;
	}
}

class FantasticBook extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state, type = 'fantastic') {
		super(name, releaseDate, pagesCount, state);

		this.author = author;
		this.type = type;
	}
}

class DetectiveBook extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount, state, type = 'detective') {
		super(name, releaseDate, pagesCount, state);

		this.author = author;
		this.type = type;
	}
}

class Library {
	constructor(name, books = []) {
		this.name = name;
		this.books = books;
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			for (const prop in this.books[i]) {
				if (prop === type && this.books[i][prop] === value) {
					return this.books[i];
				}
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		for (const printItem in this.books) {
			if (this.books[printItem].name === bookName) {
				const foundPrintItem = [];

				foundPrintItem.push(this.books[printItem]);

				this.books.splice(printItem);

				return foundPrintItem[0];
			}
		}
		return null;
	}
}