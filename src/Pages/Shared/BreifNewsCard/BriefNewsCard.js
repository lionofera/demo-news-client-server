import React from 'react';
import { CardImg } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const BriefNewsCard = ({news}) => {

    const {_id, title, author, details, image_url, total_view, rating} = news;
    return (
        <div>
            <Card className="mb-5">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image
                         roundedCircle
                         src={author?.img}
                         style={{height: '60px'}}
                        >
                        </Image>
                        <div className='ms-3'>
                            <p className='mb-0'>{author?.name}</p>
                            <p>{author?.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark className='me-2'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant='top' src={image_url}/>
                    <Card.Text>
                    {details.length > 150?
                     <p>{details.slice(0, 200) + '...'} <Link to={`/news/${_id}`}>read more</Link></p> 
                     :
                     <p>{details}</p>  
                    }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                    <div>
                        <FaStar className='text-warning'></FaStar>
                        <span className='ms-2'>{rating?.number}</span>
                    </div>
                    <div>
                        <FaEye></FaEye>
                        <span className='ms-2'>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default BriefNewsCard;