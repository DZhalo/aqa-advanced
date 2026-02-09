import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

// 1. Book instances + printInfo
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2 = new Book("A Thousand Splendid Suns", "Khaled Hosseini", 2008);

book1.printInfo();
book2.printInfo();

// 2. EBook instance + printInfo
const ebook1 = new EBook("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997, "PDF");
ebook1.printInfo();

// 3. Getters/Setters usage
book2.title = "A Thousand Splendid Suns. New Edition";
console.log("Updated title:", book2.title);

ebook1.fileFormat = "epub";
console.log("Updated format:", ebook1.fileFormat);
ebook1.printInfo();

// 4. Book static method
const library = [book1, book2, ebook1];
const oldest = Book.getOldestBook(library);
console.log("The oldest book is:");
oldest.printInfo();

// 5. EBook static method
const ebookFromBook = EBook.fromBook(book1, "mobi");
console.log("EBook created from Book:");
ebookFromBook.printInfo();


