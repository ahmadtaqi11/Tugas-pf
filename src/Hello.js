function Hello(props) {
  console.log(props);

  const { name } = props;

  return (
    <div className="Hello">
      <h2>Hello Semua</h2>
      <p>Saya {name} - FRONTEND </p>
    </div>
  );
}
export default Hello;
