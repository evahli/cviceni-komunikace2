import './style.css';

export const IconButton = ({ label, onSelectName }) => {
  const handleSelect = () => {
    onSelectName(label);
    console.log(label)
  }
  return (
    <button onClick={handleSelect} className="icon-button">
      <i className="user-icon" />
      <div className="button-label">{label}</div>
    </button>
  );
};
