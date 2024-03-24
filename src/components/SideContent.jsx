import AboutMe from "./AboutMe";

const SideContent = (props) => {
  return (
    <>
      <div className={props.classNameSide}>
        <AboutMe
          titleSide={props.titleSide}
          pictureSide={props.pictureSide}
          descriptionSide={props.descriptionSide}
        />
      </div>
    </>
  );
};
export default SideContent;
