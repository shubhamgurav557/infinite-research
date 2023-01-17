import { Banner, ExploreCategories, HomeProducts, NavBar } from '../filePaths';

const Home = ({ categories, products }) => {
    return (
        <>
            <NavBar />
            <section className="home" id="home">
                <Banner />
                <ExploreCategories categories={categories} />
                <HomeProducts products={products} />
                <div className="d-flex">

                </div>
            </section>
        </>
    )
}

export default Home