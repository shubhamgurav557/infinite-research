import bannerImg from '../../assets/banner.jpg';

const Banner = () => {
    return (
        <section className='banner'>
            <div className="items-bx">
                <div className='item'>Request Anything</div>
                <div className='item'>Create Events</div>
                <div className='item'>Auction Items</div>
            </div>
            <div className="carousel-bx">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={bannerImg} alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={bannerImg} alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={bannerImg} alt="Third slide" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner