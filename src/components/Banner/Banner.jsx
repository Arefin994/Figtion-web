

const Banner = () => {
    return (
        <div className='thm-clr'>
            <section className="header-area header-one">
                <div className="header-content-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-12">
                                <div className="header-wrapper">
                                    <div className="header-content">
                                        <h1 className="header-title">
                                            Unlimited Friendly & Easy Customisable
                                        </h1>
                                        <p className="text-lg">
                                            Stop wasting time and money designing and managing a website
                                            that doesn’t get results. Happiness guaranteed!
                                        </p>
                                        <div className="header-btn rounded-buttons">
                                            <a
                                                className="btn primary-btn-outline btn-lg"
                                                href="javascript:void(0)"
                                            >
                                                DOWNLOAD NOW
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="header-image d-none d-lg-block">
                                    <div className="image">
                                        <img
                                            src="./banner.jpg"
                                            alt="Header"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;