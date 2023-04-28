import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { listProducts } from "../action/productAction";
import { useLocation } from "react-router-dom";

export default function SearchBox({location}) {
    const [keyword, setKeyword] = useState('');
    console.log('searchBox');
    console.log(keyword);   
    const dispatch = useDispatch();
    location = useLocation();

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            window.location.href = `/search/${keyword}`
            //dispatch(listProducts(keyword))
            
        } else {
            window.location.href = '/'
            
        }
    }


    return (
        <form onSubmit={submitHandler} inline='true'
              className="d-flex align-items-center" >

            <input
                className="form-control mr-sm-2 ml-sm-5"
                type="text"
                name="search"
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search Products"
            />
            <button type="submit" className="me-5 p-1 rounded btn-success">Search</button>
        </form>
    )
}