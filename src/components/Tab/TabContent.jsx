import WishList from "./WishList";
import OrderList from "./OrderList";
import { useEffect } from "react";
import { useGetMemberData } from "../../hooks/useGetMemberData";

const TabContent = (props) => {
  const { data, postData } = useGetMemberData();

  useEffect(() => {
    if (props.tab == 1) {
      postData("user/wish");
    }
  }, [props.tab]);

  return [<OrderList />, <WishList data={data} />][props.tab];
};

export default TabContent;
