
const Book = ({book}) => {
    return (
        <>
            <div>{book.name}</div>
            <div>{book.author}</div>
            <div>{book.year_published}</div>
        </>
    );
}

export default Book;