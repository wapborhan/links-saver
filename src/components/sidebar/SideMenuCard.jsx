import Icon from "../shared/Icon";

const SideMenuCard = ({ item }) => {
  return (
    <li className="_menu_1jk02_1 bg-[#ffffff30] hover:bg-[#ffffff50]">
      <Icon iconName="FaCamera" size={20} />
      <span>{item.name}</span>
    </li>
  );
};

export default SideMenuCard;
