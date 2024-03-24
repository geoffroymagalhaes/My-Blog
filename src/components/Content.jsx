import MainContent from "./MainContent";
import SideContent from "./SideContent";
const Content = (props) => {
  return (
    <>
      <div className="container content ">
        <MainContent
          classNameMain={props.classNameMain}
          title={props.title}
          subtitle={props.subtitle}
          picture={props.picture}
          description={props.description}
        />
        <SideContent
          classNameSide={props.classNameSide}
          titleSide={props.titleSide}
          pictureSide={props.pictureSide}
          descriptionSide={props.descriptionSide}
        />
      </div>
    </>
  );
};
export default Content;
