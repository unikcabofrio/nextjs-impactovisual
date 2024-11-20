export default function LoudDetails() {
    return (
        <div className="loudD">
            {[...Array(3)].map((_, index) => (
                <div key={index} className="loudDetails"></div>
            ))}
        </div>
    );
}
