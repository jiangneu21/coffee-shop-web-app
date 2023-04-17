import React from "react";
import reviews from "../data/reviews";
/*import product from "./product";
import {useParams} from "react-router-dom";
import useFetch from "./fetch-api";*/
const Review = ({}) => {

/*    const { id } = useParams();
    const productData = useFetch(`http://localhost:4000/coffee/hot/${id}`);
    const review = reviews.find((r) => r.productId === productData.id);*/

    const review = reviews.find((r) => r.productId === "1");
    if (!review) {
        return <p>No comments yet</p>;
    }

    return (

        <div className="list-group">
            {reviews.map((review) => (
            <div className="col my-2" key={review.reviewId}>
                <span className="fw-bold">{review.userName}</span>
                <div className='rating'>
                    <span>
                    <i className={
                        review.rating >= 1 ? "fas fa-star"
                            : review.rating >= 0.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
                    </span>
                    <span>
                    <i className={
                        review.rating >= 2 ? "fas fa-star"
                            : review.rating >= 1.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
                    </span>
                    <span>
                    <i className={
                        review.rating >= 3 ? "fas fa-star"
                            : review.rating >= 2.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
                    </span>
                    <span>
                    <i className={
                        review.rating >= 4 ? "fas fa-star"
                            : review.rating >= 3.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
                    </span>
                    <span>
                    <i className={
                        review.rating >= 5 ? "fas fa-star"
                            : review.rating >= 4.5 ? "fas fa-star-half-alt" : "far fa-star"}></i>
                    </span>
                </div>
                {/*<div>
                    <i className="fas fa-star"></i>
                    {review.rating}
                </div>*/}
                <span>{review.comment && review.comment}</span>
            </div>))}
        </div>
    )
}
export default Review;