import React from 'react'
import { Link } from "react-router-dom"
import BusinessIcon from '@mui/icons-material/Business';
import { useNavigate } from 'react-router-dom';

const ExploreCategories = ({ categories }) => {
    const navigate = useNavigate();
    return (
        <section className="explore-categories">
            <div className="header">
                <h4>Explore Popular Categories</h4>
                <Link to='/categories'>View all</Link>
            </div>
            <div className="categories-bx">
                {
                    categories.map((value, key) => {
                        return (
                            <div className="category-item" key={key} onClick={() => navigate('/products')}>
                                <BusinessIcon />
                                <p>{value.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ExploreCategories