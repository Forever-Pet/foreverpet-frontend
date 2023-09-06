import WishList from "./WishList";
import OrderList from "./OrderList";

const TabContent = (props) => {

  return [<OrderList />, <WishList />][props.tab];
};

export default TabContent;
