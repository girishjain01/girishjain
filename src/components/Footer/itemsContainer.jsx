import Item from "./Item";
<<<<<<< HEAD
import { ABOUT, CONTACT, IMPORTENTLINK, OTHERS } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={ABOUT} title="परिचय" />
      <Item Links={CONTACT} title="संपर्क करें" />
      <Item Links={IMPORTENTLINK} title="महत्वपूर्ण लिंक" />
      <Item Links={OTHERS} title="अन्य" />
=======
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={PRODUCTS} title="PRODUCTS" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" />
>>>>>>> c60fca01c9bc1ff1078bb5b84581ee8c9ec7da6d
    </div>
  );
};

export default ItemsContainer;
