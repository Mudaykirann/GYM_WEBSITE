import { HashLoader } from "react-spinners"
function LoadingSpinner({ loading }) {
    return (
        <div className="loading-spinner">
            <HashLoader size={150} color="#ff1616" aria-label="Loading Spinner"
                data-testid="loader" loading={loading} />
        </div>
    )
}

export default LoadingSpinner
