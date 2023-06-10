
import './Spinner.css';

const Spinner = () => {
    return (
        <div className="spinner-1">
            loading. . .
            <div className="spinner-1-sec spinner-1-sec-t-red"></div>
            <div className="spinner-1-sec spinner-1-sec-r-green"></div>
            <div className="spinner-1-sec spinner-1-sec-b-blue"></div>
            <div className="spinner-1-sec spinner-1-sec-l-sky"></div>
        </div>
    );
};

export default Spinner;