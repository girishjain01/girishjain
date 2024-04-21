import Item from "./Item";
import { ABOUT, CONTACT, IMPORTENTLINK, OTHERS } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={ABOUT} title="परिचय" />
      <Item Links={CONTACT} title="संपर्क करें" />
      <Item Links={IMPORTENTLINK} title="महत्वपूर्ण लिंक" />
      <Item Links={OTHERS} title="अन्य" />
    </div>
  );
};

export default ItemsContainer;
