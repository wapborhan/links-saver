import Icon from "../shared/Icon";

const SideMenuCard = ({ item, setSelectedCategories }) => {
  return (
    <li
      onClick={() => setSelectedCategories(item.name)}
      className="_menu_1jk02_1 bg-[#ffffff30] hover:bg-[#ffffff50]"
    >
      <Icon iconName={item.icon} size={20} />
      <span>{item.name}</span>
    </li>
  );
};

export default SideMenuCard;
