import imgOneMobile from '../../assets/mobile/image-phone-and-keyboard.jpg';
import imgOneTablet from '../../assets/tablet/image-phone-and-keyboard.jpg';
import imgOneDesktop from '../../assets/desktop/image-phone-and-keyboard.jpg';
import imgTwoMobile from '../../assets/mobile/image-glass-and-keyboard.jpg';
import imgTwoTablet from '../../assets/tablet/image-glass-and-keyboard.jpg';
import imgTwoDesktop from '../../assets/desktop/image-glass-and-keyboard.jpg';

const About = () => {
    return (
        <section className="
            flex flex-col gap-[75px] mt-6 relative
            md:mt-10
            lg:flex-row lg:flex-between"
        >
            <span className="hidden xl:floating-accent xl:bottom-0 xl:-left-[285px]"></span>
            <div className="
                flex gap-6 h-[193px] -ml-11
                md:h-[320px] md:ml-0 md:gap-8
                lg:h-[480px] lg:w-[730px]"
            >
                <div className="relative flex-auto">
                    <picture>
                        <source media="(min-width: 1024px)" srcSet={imgOneDesktop}/>
                        <source media="(min-width: 768px)" srcSet={imgOneTablet}/>
                        <img src={imgOneMobile} alt="keyboard and phone" className="h-full w-full rounded-20 object-cover"/>
                    </picture>
                    <div className="absolute top-0 left-0 w-full h-full bg-accent mix-blend-multiply rounded-20"></div>
                </div>
                <div className="flex-auto">
                    <picture>
                        <source media="(min-width: 1024px)" srcSet={imgTwoDesktop}/>
                        <source media="(min-width: 768px)" srcSet={imgTwoTablet}/>
                        <img src={imgTwoMobile} alt="keyboard and glass" className="h-full w-full rounded-20 object-cover"/>
                    </picture>
                </div>
            </div>
            <div className="
                text-center
                md:flex-between md:text-left
                lg:flex-col lg:gap-6 lg:justify-normal lg:items-start lg:w-64"
            >
                <h2 className="
                    header mb-6
                    md:mb-0"
                >
                    mechanical <br/> wireless <br/> Keyboard
                </h2>
                <p className="md:max-w-[400px]">The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety of switches and keycaps, along with reliable wireless connectivity.</p>
            </div>
        </section>
    );
};

export default About;
