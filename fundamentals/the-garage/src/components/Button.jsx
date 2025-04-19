export default function Button({type, value, onClick}) {
  return (
    <>
      <button type={type} onClick={onClick}>{value}</button>
    </>
  );
}
