import imgKeyboardMobile from '../../assets/mobile/image-keyboard.jpg';
import imgKeyboardTablet from '../../assets/tablet/image-keyboard.jpg';
import imgKeyboardDesktop from '../../assets/desktop/image-keyboard.jpg';
const Hero = () => {
    return (
        <section className="
            flex flex-col gap-16 mt-16 relative
            md:flex-row md:items-center md:gap-10"
        >
            <span className="hidden xl:floating-accent xl:top-0 xl:-right-[285px]"></span>
            <div className="
                flex flex-col gap-8
                md:max-w-md
                lg:gap-6"
            >
                <h1 className="
                    header
                    md:mb-0.5
                    lg:mb-0 lg:text-header_big"
                >
                    Typemaster keyboard
                </h1>
                <p className="
                    md:mb-1.5
                    lg:mb-4 lg:text-regular_desktop"
                >
                    Improve your productivity and gaming without breaking the bank. Upgrade to a high quality mechanical typing experience.
                </p>
                <div className="
                    flex gap-8 items-center
                    lg:gap-10"
                >
                    <button className="btn btn-orange">pre-order now</button>
                    <p className="uppercase font-bold">Release on 5/27</p>
                </div>
            </div>
            <div className="
                -mr-11
                md:-mr-44 md:shrink-0
                lg:mr-0"
            >
                <picture>
                    <source media="(min-width: 1024px)" srcSet={imgKeyboardDesktop}/>
                    <source media="(min-width: 768px)" srcSet={imgKeyboardTablet}/>
                    <img src={imgKeyboardMobile} alt="keyboard" className="
                        rounded-20
                        md:max-h-[425px]
                        lg:max-h-[480px]"
                    />
                </picture>
            </div>
        </section>
    );
};

export default Hero;
