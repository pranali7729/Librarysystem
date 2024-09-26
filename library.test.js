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
    test('should allow a user to return a borrowed book', () => {
        const library = new Library();
        const book = { id: 1, title: '1984', author: 'George Orwell', year: 1949, available: false };
      
        library.addBook(book);
        const result = library.returnBook(1);
      
        expect(result).toBe('Book returned');
        expect(library.books[0].available).toBe(true);
      });
      test('should display all available books', () => {
        const library = new Library();
        const book1 = { id: 1, title: '1984', author: 'George Orwell', year: 1949, available: true };
        const book2 = { id: 2, title: 'Animal Farm', author: 'George Orwell', year: 1945, available: false };
      
        library.addBook(book1);
        library.addBook(book2);
      
        const availableBooks = library.viewAvailableBooks();
      
        expect(availableBooks.length).toBe(1);
        expect(availableBooks[0].id).toBe(1);
      });
      
      
});
