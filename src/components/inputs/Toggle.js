export default function Toggle(props) {
  return (
    <label className="switch">
      <input type="checkbox" {...props} />
      <span className="slider" />
    </label>
  );
}
