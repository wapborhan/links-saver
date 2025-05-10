import Icon from "../shared/Icon";

const SideMenuCard = ({ item, setSelectedCategories, refetch }) => {
  const handleChange = () => {
    setSelectedCategories(item.slug);
    // refetch();
  };

  return (
    <li
      onClick={handleChange}
      className="_menu_1jk02_1 bg-[#ffffff30] hover:bg-[#ffffff50]"
    >
      <Icon iconName={item.icon} size={20} />
      <span className="uppercase">{item.name}</span>
    </li>
  );
};

export default SideMenuCard;
