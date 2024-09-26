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
}

module.exports = Library;
