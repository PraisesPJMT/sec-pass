import PropTypes from "prop-types";

const SettingsRing = ({ className }) => {
    return (
        <svg
            width="800px"
            height="800px"
            viewBox="0 0 16 16"
            data-testid="settings-ring-svg"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                fill="#000000"
                fillRule="evenodd"
                d="M6.77208,0.683772 C6.90819,0.27543 7.29033,0 7.72076,0 L8.27924,0 C8.70967,0 9.09181,0.27543 9.22792,0.683772 L9.75342,2.26026 C10.125,2.37363 10.4812,2.52208 10.8183,2.70177 L12.3051,1.9584 C12.6901,1.7659 13.155,1.84136 13.4594,2.14572 L13.8543,2.54062 C14.1587,2.84498 14.2341,3.30995 14.0416,3.69494 L13.2983,5.1817 C13.4779,5.51878 13.6264,5.87503 13.7397,6.24658 L15.3162,6.77208 C15.7246,6.90819 16,7.29033 16,7.72076 L16,8.27924 C16,8.70967 15.7246,9.09181 15.3162,9.22792 L13.7397,9.75342 C13.6264,10.125 13.4779,10.4812 13.2983,10.8183 L14.0416,12.3051 C14.2341,12.69 14.1587,13.155 13.8543,13.4594 L13.4594,13.8543 C13.155,14.1586 12.6901,14.2341 12.3051,14.0416 L10.8183,13.2982 C10.4812,13.4779 10.125,13.6264 9.75342,13.7397 L9.22792,15.3162 C9.09181,15.7246 8.70967,16 8.27924,16 L7.72076,16 C7.29033,16 6.90819,15.7246 6.77208,15.3162 L6.24658,13.7397 C5.87503,13.6264 5.51879,13.4779 5.18172,13.2983 L3.69491,14.0417 C3.30992,14.2342 2.84495,14.1587 2.54059,13.8543 L2.14568,13.4594 C1.84132,13.1551 1.76587,12.6901 1.95836,12.3051 L2.70176,10.8183 C2.52208,10.4812 2.37363,10.125 2.26026,9.75342 L0.683772,9.22792 C0.27543,9.09181 0,8.70967 0,8.27924 L0,7.72076 C0,7.29033 0.27543,6.90819 0.683772,6.77208 L2.26026,6.24658 C2.37363,5.87502 2.52208,5.51876 2.70176,5.18167 L1.95837,3.69488 C1.76587,3.30989 1.84133,2.84492 2.14569,2.54056 L2.54059,2.14565 C2.84495,1.84129 3.30993,1.76584 3.69491,1.95833 L5.18172,2.70174 C5.5188,2.52207 5.87504,2.37362 6.24658,2.26026 L6.77208,0.683772 Z M8,12 C10.2091,12 12,10.2091 12,8 C12,5.79086 10.2091,4 8,4 C5.79086,4 4,5.79086 4,8 C4,10.2091 5.79086,12 8,12 Z"
            />
        </svg>
    );
};

SettingsRing.propTypes = {
    className: PropTypes.string,
};

export default SettingsRing;
