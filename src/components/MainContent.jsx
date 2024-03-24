import Item from "./Item";

const MainContent = (props) => {
  return (
    <>
      <div className={props.classNameMain}>
        <Item
          title={props.title}
          subtitle={props.subtitle}
          picture={props.picture}
          description={props.description}
        />
      </div>
    </>
  );
};
export default MainContent;
