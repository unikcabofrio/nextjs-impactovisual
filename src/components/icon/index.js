export default function IconeSVG({ icone, onClick }) {
    return (
        <span
            className="material-symbols-outlined"
            onClick={onClick || undefined}
            role="button"
            tabIndex={0}
        >
            {icone}
        </span>
    );
}
