import ListItem from '../ListItem/ListItem';

import iconBattery from '../../assets/shared/icon-battery.svg';
import iconBluetooth from '../../assets/shared/icon-bluetooth.svg';
import iconCompatible from '../../assets/shared/icon-compatible.svg';
import iconLight from '../../assets/shared/icon-light.svg';

const listData = [
    {
        icon: iconCompatible,
        title: <>Higly <br/>compatible</>,
        text: 'Easy to use and works well with all major computer brands, gaming consoles and mobile devices. Plug & play, no installation or driver needed.'
    },
    {
        icon: iconBluetooth,
        title: <>Wireless <br/>with bluetooth</>,
        text: 'Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.'
    },
    {
        icon: iconBattery,
        title: <>High capacity <br/>battery</>,
        text: 'Equipped with a long-lasting built-in battery, you’ll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.'
    },
    {
        icon: iconLight,
        title: <>Rgb backlit <br/> modes</>,
        text: 'Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.'
    }
];

const List = () => {
    return (
        <section className="
            flex flex-col gap-16 mt-[111px] md:mt-[142px]
            md:grid md:grid-cols-2 md:gap-[72px]
            lg:grid-cols-4 lg:gap-[30px]"
        >
            {listData.map(item => (
                <ListItem icon={item.icon} title={item.title} text={item.text}/>
            ))}
        </section>
    );
};

export default List;
