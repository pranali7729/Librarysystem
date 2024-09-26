const Library = require('./library');

describe('Library Management System', () => {
    test('should add a new book to the library', () => {
        const library = new Library();
        const book = { id: 1, title: '1984', author: 'George Orwell', year: 1949, available: true };
        
        library.addBook(book);
        
        expect(library.books.length).toBe(1);
        expect(library.books[0]).toEqual(book);
    });
    
    test('should allow a user to borrow a book if available', () => {
        const library = new Library();
        const book = { id: 1, title: '1984', author: 'George Orwell', year: 1949, available: true };
      
        library.addBook(book);
        const result = library.borrowBook(1);
      
        expect(result).toBe('Book borrowed');
        expect(library.books[0].available).toBe(false);
    });
    
    test('should not allow a user to borrow a book if not available', () => {
        const library = new Library();
        const book = { id: 1, title: '1984', author: 'George Orwell', year: 1949, available: false };
    
        library.addBook(book);
        const result = library.borrowBook(1);
    
        expect(result).toBe('Book not available');
    });
});
