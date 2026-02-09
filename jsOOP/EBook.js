import { Book } from "./Book.js";

export class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new Error("File format must be a non-empty string.");
    }

    const normalized = value.trim().toLowerCase();
    this._fileFormat = normalized;
  }

  printInfo() {
    console.log(`"${this.title}" by ${this.author} (${this.year}) [${this.fileFormat}]`);
  }

  // Сreate EBook from Book instance + format
  static fromBook(bookInstance, fileFormat) {
    if (!(bookInstance instanceof Book)) {
      throw new Error("First argument must be an instance of Book.");
    }
    return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
  }
}
