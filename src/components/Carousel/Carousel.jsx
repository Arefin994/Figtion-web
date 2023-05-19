

const Carousel = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="img-fluid bnr-img d-block w-100" src="https://www.sideshow.com/cdn-cgi/image/height=850,quality=90,f=auto/https://www.sideshow.com/storage/product-images/906762/captain-america_marvel_gallery_5f0e494727b30.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="img-fluid bnr-img d-block w-100" src="https://surethingtoys.com/cdn/shop/products/STL198970_grande.jpg?v=1622823941" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="img-fluid bnr-img d-block w-100" src="https://preeti.com.bd/wp-content/uploads/2022/03/Harry-Potter-Action-Figure.webp" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default Carousel;