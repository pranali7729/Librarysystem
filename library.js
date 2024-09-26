class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book); // Keep the book's original properties
    }

    borrowBook(id) {
        const book = this.books.find(b => b.id === id);
        if (book && book.available) {
            book.available = false;
            return 'Book borrowed';
        }
        return 'Book not available';
    }
    returnBook(id) {
        const book = this.books.find(b => b.id === id);
        if (book && !book.available) {
          book.available = true;
          return 'Book returned';
        }
        return 'Book not borrowed';
      }
      viewAvailableBooks() {
        return this.books.filter(book => book.available);
      }
}

module.exports = Library;
