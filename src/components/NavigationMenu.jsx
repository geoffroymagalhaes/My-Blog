import Link from "./Link";

const NavigationMenu = () => {
  return (
    <>
      <div className="nav-menu container">
        <div className="rightNav">
          <Link link="Oceania" />
          <Link link="America" />
          <Link link="Europe" />
        </div>
        <div className="leftNav">
          <Link link="Log in" />
        </div>
      </div>
    </>
  );
};
export default NavigationMenu;
