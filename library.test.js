const Library = require('./library');

describe('Library Management System', () => {
  test('should add a new book to the library', () => {
    const library = new Library();
    const book = { id: 1, title: '1984', author: 'George Orwell', year: 1949 };
    
    library.addBook(book);
    
    expect(library.books.length).toBe(1);
    expect(library.books[0]).toEqual(book);
  });
});
