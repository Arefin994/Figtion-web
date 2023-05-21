import './Extra1.css'


const Extra1 = () => {
    return (
        <div className='align-items-center justify-content-center '>
            <h2 className='text-center py-2'>Gal<span className="text-cstm">lery</span></h2>
            <div className="w-100 h-100 corso mx-auto my-auto">
                <div id="carouselExampleCaptions6969" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions6969" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions6969" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions6969" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions6969" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions6969" data-bs-slide-to="4" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://blog.fromjapan.co.jp/en/wp-content/uploads/2018/02/Play-Arts-Kai-Figures.jpg" className="d-block w-100 acc-img" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://cdn.shopify.com/s/files/1/1969/6605/files/Website-banner_figures.jpg?v=1657633477&width=1920" className="d-block w-100 acc-img" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://japantour.xyz/wp-content/uploads/2021/03/S__14196744-1024x772.jpg" className="d-block w-100 acc-img" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.ytimg.com/vi/Iy6XC_KoEKY/maxresdefault.jpg" className="d-block w-100 acc-img" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://i.pinimg.com/originals/b2/ff/02/b2ff020a299e78c92fe626a0221d3517.jpg" className="d-block w-100 acc-img" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions6969" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions6969" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Extra1;