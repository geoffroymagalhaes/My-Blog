const AboutMe = (props) => {
  return (
    <>
      <h2>{props.titleSide}</h2>
      <img src={props.pictureSide} alt="" />
      <p>{props.descriptionSide}</p>
    </>
  );
};
export default AboutMe;
