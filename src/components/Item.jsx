const Item = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <h3>{props.subtitle}</h3>
      <img src={props.picture} alt="" />
      <p>{props.description}</p>
    </>
  );
};
export default Item;
