function findAuthorById(authors, id) {
  return authors.filter((author) => author.id === id)
  .find((author) => author);
}

function findBookById(books, id) {
  return books.filter((book) =>book.id === id)
  .find((book) => book);
}

function partitionBooksByBorrowedStatus(books) {
  const notReturned = books.filter((book) =>
  !book.borrows[0].returned);
  const returned = books.filter((book) =>
   book.borrows[0].returned);
  const total = [];
  total.push(notReturned);
  total.push(returned);
  return total;
}

function getBorrowersForBook(book, accounts) {
  const {borrows} = book;
  const borrowers = borrows.map(({id,returned}) => {
    const account = accounts.find(account => account.id === id);
    return {
      ...account,
      returned,
    };
  });
  return borrowers
  .sort((borrowerA, borrowerB) => {
    const companyA = borrowerA.company;
    const companyB = borrowerB.company;
    return companyA.localeCompare(companyB);
  })
  .slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
