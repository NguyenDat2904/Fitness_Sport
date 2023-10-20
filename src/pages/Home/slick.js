import Slider from 'react-slick';
import ItemCart from '~/components/ItemCart/ItemCart';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Slick = (props) => {
    const { slider } = props;

    const settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplaySpeed: 3000,
        autoplay: true,
        dotsClass: 'slick-dots',
        adaptiveHeight: true,
    };

    return (
        <Slider {...settings}>
            {slider
                ? slider.map((item, index) => {
                      return <ItemCart item={item} index={index} key={index} />;
                  })
                : ''}
        </Slider>
    );
};
