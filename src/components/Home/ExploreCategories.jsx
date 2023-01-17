import { Link } from "react-router-dom"
import BusinessIcon from '@mui/icons-material/Business';

const ExploreCategories = ({ categories }) => {
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
                            <div className="category-item" key={key}>
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