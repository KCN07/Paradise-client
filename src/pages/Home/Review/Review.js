import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import Rating from 'react-rating';

const Review = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://fast-wave-21808.herokuapp.com/reviews')
        .then(res=> res.json())
        .then(data=>{
            setReviews(data);
             console.log(data)
        })
        
    }, []);
    return (
        <div id="reviews" className="mb-5 mt-4">
            <h3 className="mb-5" style={{ borderBottom: '2px solid #ff871d' , paddingBottom: '10px', display: 'inline-block'}}>Customer's review</h3>
            <div className="row container" style={{marginLeft:'auto', marginRight:'auto'}}>
            {
                reviews.map(review=> <Card key={review._id} className="col-md-4" style={{ width: "20rem" , margin: '10px', border: 'none'}} >
                <Card.Img variant="top" src={review.image} className="img-fluid" style={{height: '300px', width: '350px'}} />
                <Card.Body>
                
                  <Card.Title className="title" >{review.name}</Card.Title>
                  
                  <Card.Text>
                    {review.review}
                  </Card.Text>
                  <Rating 
                    initialRating={review.ratting} 
                    readonly
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    style={{color: '#ff871d'}}
                    ></Rating>
                  
                </Card.Body>
              </Card>)
            }
        </div>

        </div>
        
    );
};

export default Review;

{/*  */}