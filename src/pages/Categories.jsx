import BusinessIcon from '@mui/icons-material/Business';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import { NavBar } from '../filePaths';

const Categories = ({ categories }) => {

    const navigate = useNavigate();

    return (
        <>
            <NavBar />
            <section className="categories">
                <button className="backBtn" onClick={() => navigate('/')}>
                    <ArrowBackIosIcon />
                </button>
                <div className="recentCategories">
                    <h4>Recent</h4>
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
                </div>
                <div className="allCategories">
                    <h4>All Categories</h4>
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
                </div>
            </section>
        </>
    )
}

export default Categories