import { Link } from "react-router-dom"

const HomeProducts = ({ products }) => {

    console.log(products)

    return (
        <section className="home-products">
            <div className="product-header">
                <h4>Trending Auctions</h4>
                <Link to='/auctions'>View all</Link>
            </div>
            <div className="product-bx">
                <div className="row">
                    {
                        products.map((value, key) => {
                            if (key < 4) {
                                return (
                                    <div className="cardItem col-md-3 col-sm-6" key={key}>
                                        <div className="card-image">
                                            <img src={value.images[0]} alt="" />
                                        </div>
                                        <div className="card-content">
                                            <div className="title">{value.title}</div>
                                            <div className="price">Rs. {value.price}</div>
                                            <div className="desc">{value.description}</div>
                                        </div>
                                    </div>

                                )
                            }
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default HomeProducts