// JSON data representing a list of books
const books = `[
    {
      "title": "The power of now",
      "author": "Eckhart Tolle ",
      "publishedYear": 2015,
      "price": 15.99
    },
    {
      "title": "Atomic Habits",
      "author": "James clear",
      "publishedYear": 2019,
      "price": 12.99
    },
    {
      "title": "As a man Thinketh",
      "author": "James Allen",
      "publishedYear": 1940,
      "price": 19.99
    },
    {
      "title": "The Law of Human Nature",
      "author": "RObert Greene",
      "publishedYear": 1950,
      "price": 9.99
    }
  ]`;
  
  
  const parsebooks = JSON.parse(books);

  
  // Calculate and log the total price of all the books
  const Pricesum = parsebooks.reduce((sum, book) => sum + book.price, 0);
  console.log("price sum", Pricesum);
  
  // Filter the books published before the year 1960 
  const olderBooks = parsebooks.filter(book => book.publishedYear < 1960);
  console.log("books published before the year 1960");
  console.log(olderBooks);
  // Sort the books by their published year in ascending
  const sortedBooks = parsebooks.sort((a, b) => a.publishedYear - b.publishedYear);

  
  
  console.log("Books Published Before 1960:");
  console.log(olderBooks);
  
  
  console.log("Books Sorted by Published Year (Ascending):");
  console.log(sortedBooks);
  