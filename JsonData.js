// JSON data representing a list of books
const jsonData = [
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
      "title": "The LAw of Human Nature",
      "author": "RObert Greene",
      "publishedYear": 1950,
      "price": 9.99
    }
  ];
  
  
  const books = JSON.parse(JSON.stringify(jsonData));
  
  // Calculate and log the total price of all the books
  const totalPrice = books.reduce((total, book) => total + book.price, 0);
  console.log("Total Price of All Books: $" + totalPrice.toFixed(2));
  
  // Filter the books published before the year 1960 and create a new array with these books
  const olderBooks = books.filter(book => book.publishedYear < 1960);
  
  // Sort the books by their published year in ascending order
  const sortedBooks = books.sort((a, b) => a.publishedYear - b.publishedYear);
  
  // Log the filtered and sorted books
  console.log("Books Published Before 1960:");
  console.log(olderBooks);
  
  console.log("Books Sorted by Published Year (Ascending):");
  console.log(sortedBooks);
  