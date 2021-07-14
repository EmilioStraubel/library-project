// Function 1:
function findAccountById(accounts, id) {
  return accounts.filter((account) => account.id === id).find((account) => account);
}

// Function 2:
function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1: -1); 
}

// Function 3:
function getTotalNumberOfBorrows(account, books) {
  const accountID = account.id; 
  let total = 0;
  books.forEach((book) => (book.borrows.forEach((borrow) => {
    if (accountID === borrow.id){
      total++;
    }
  })));
  return total;
}

// Function 4: 
function getBooksPossessedByAccount(account, books, authors) {
  let booksPossessed = [];
books.forEach(book => {
  if (book.borrows.find((borrow) => borrow.id === account.id && borrow.returned === false)){
    booksPossessed.push(book);
  }
})
booksPossessed.forEach((book) => {
  let theAuthor = authors.find((author => author.id === book.authorId));
  book["author"] = theAuthor;

})
 console.log(booksPossessed);
  return booksPossessed;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
