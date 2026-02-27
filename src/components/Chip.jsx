import './Chip.css';

function Chip({ label, isActive, onClick }) {
    return (
        <button
            className={`chip ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default Chip;
