export default function Button({index, value, onClick}) {
  return (
    <>
      <button id={index} onClick={onClick}>{value}</button>
    </>
  );
}
