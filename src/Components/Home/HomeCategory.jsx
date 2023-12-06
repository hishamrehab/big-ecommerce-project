import SubTitle from "../utility/SubTitle";
import BlackShirt from "../../Images/blackshart.jpg";
import BlackShirt2 from "../../Images/blueshairt.jpg";
import BlouseJeans from "../../Images/blousejeans.jpg";
import BlouseShairt from "../../Images/blueshairt.jpg";
import CategoryCart from "../Category.jsx/CategoryCart";

const HomeCategory = () => {
  return (
    <>
      <SubTitle title="More" btntitle="Categories" />
      <div className="d-flex flex-row  flex-wrap">
        <CategoryCart title="hello" img={BlackShirt} />
        <CategoryCart title="Sportswear" img={BlackShirt2} />
        <CategoryCart title="Electrical devices" img={BlouseJeans} />
        <CategoryCart title="Fashion" img={BlouseShairt} />
        <CategoryCart title="Games" img={BlouseShairt} />
        <CategoryCart title="Mobiles" img={BlouseShairt} />
      </div>
    </>
  );
};

export default HomeCategory;
