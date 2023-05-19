import Carousel from '../Carousel/Carousel';
import './Banner.css'

const Banner = () => {
    return (
        <div className='thm-clr mt-3'>
            <section className="header-area header-one">
                <div className="header-content-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-12">
                                <div className="header-wrapper">
                                    <div className="header-content">
                                        <h1 className="header-title">
                                        Unleash Your Inner Hero with Our Action Figure Toys
                                        </h1>
                                        <p className="text-lg">
                                        Embark on epic adventures with our collection of action figure toys!
                                        </p>
                                        <div className="btn btn-cstm">
                                            <a
                                                className="btn primary-btn-outline btn-lg"
                                                href="javascript:void(0)"
                                            >
                                                Get Started
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="header-image d-none d-lg-block">
                                    <div className="image">  
                                        <Carousel></Carousel>
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