// Function #1
function getTotalBooksCount(books){
  return books.reduce((acc) => acc + 1, 0);
}

// Function #2
function getTotalAccountsCount(accounts){
  return accounts.reduce((acc) => acc + 1, 0);
}

// Function #3
function getBooksBorrowedCount(books){
  return books.filter((book) => book.borrows.some((booksBorrowed) => booksBorrowed.returned === false)).length;
}

// Function #4
function getMostCommonGenres(books){
  const genres = [];
  books.forEach((book) => {
    const match = genres.find((genre) => genre.name === book.genre);
  if (match){
    match.count++;
  } else {
    const name = book.genre;
    genres.push({name, count: 1});
  }
  });
  let result = genres.sort((genreA, genreB) => genreA.count < genreB.count ? 1 : -1);
  result = result.slice(0,5);
  return result;
}

// Function #5
function getMostPopularBooks(books){
  const titleAndCount = [];
  books.forEach((book) => {
    const popularBooksArray = {name: book.title, count: book.borrows.length}
    titleAndCount.push(popularBooksArray)
  });  //might need to remove semi colon here
  titleAndCount.sort((titleAndCountA, titleAndCountB) => titleAndCountB.count - titleAndCountA.count);
  return titleAndCount.slice(0,5);
}

// Function #6
function getMostPopularAuthors(books, authors){
return books.map((book) => {
  const author = authors.find((author) => author.id === book.authorId)
  return {
    name: `${author.name.first} ${author.name.last}`,
    count: book.borrows.length
  }
}) .sort((a,b) => b.count - a.count).slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
