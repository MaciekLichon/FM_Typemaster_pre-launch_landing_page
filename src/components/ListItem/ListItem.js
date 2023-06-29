

const ListItem = ({icon, title, text}) => {
    return (
        <div className="
            text-center flex-centered flex-col
            md:items-start md:text-left
            lg:justify-normal"
        >
            <div className="
                mb-12 w-[65px] h-[65px] rounded-20 bg-accent flex-centered
                md:mb-10"
            >
                <img src={icon} alt="icon"/>
            </div>
            <h3 className="header mb-6">{title}</h3>
            <p>{text}</p>
        </div>
    );
};

export default ListItem;
