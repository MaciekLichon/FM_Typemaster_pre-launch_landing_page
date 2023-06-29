const Container = props => {
    return (
        <div className="
            max-w-[1100px] mx-auto px-6
            md:px-10"
        >
            {props.children}
        </div>
    );
};

export default Container;
