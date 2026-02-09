export class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get year() {
    return this._year;
  }

  set title(value) {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new Error("Title must be a non-empty string");
    }
    this._title = value.trim();
  }

  set author(value) {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new Error("Author must be a non-empty string");
    }
    this._author = value.trim();
  }

  set year(value) {
    const currentYear = new Date().getFullYear();
    if (!Number.isInteger(value) || value < 0 || value > currentYear) {
      throw new Error(`Year must be an integer (between 0 and ${currentYear})`);
    }
    this._year = value;
  }

  printInfo() {
    console.log(`"${this.title}" by ${this.author} (${this.year})`);
  }

  
  static getOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error("Books must be a non-empty array");
    }

    for (const b of books) {
      if (!(b instanceof Book)) {
        throw new Error("All items in books array must be instances of Book");
      }
    }

    return books.reduce((oldest, current) =>
      current.year < oldest.year ? current : oldest
    );
  }
}
