
import Banner from '../Banner/Banner';
import Extra1 from '../Extra1/Extra1';
import PopularNow from '../PopularNow/PopularNow';

const Home = () => {
    return (
        <div className='thm-clr'>
            <Banner></Banner>
            <PopularNow></PopularNow>
            <Extra1></Extra1>
        </div>
    );
};

export default Home;