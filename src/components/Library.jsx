import { useState, useRef, useEffect } from 'react';
import Book from './Book.jsx';

const Library = () => {
    const nameRef = useRef('Jason');
    const [name, setName] = useState('Library');
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch('http://localhost:3600/api/books');
            const json = await response.json();
            setBooks(json);
        };
        fetchData();
    },[]);
    useEffect(()=>{
        console.log(`useEffect ${name}`);
    },[nameRef])
    
    
    const clickName = (e) => {
        e.preventDefault()
        console.log(nameRef.current.value);
        setName(nameRef.current.value)
    };
    return (
    <>
        <h1>{name}</h1>
        <input type="text" ref={nameRef} />
        <input type="button" value="Enter" onClick={clickName} />    
        <ul>{books.map((book)=>{
            return(
                <li key={book.id} style={{paddingBottom: '25px'}}>
                    <Book book={book} />
                </li>
            );
        })}
        </ul>
    </>
    )
};

export default Library;