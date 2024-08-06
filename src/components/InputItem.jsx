import PropTypes from "prop-types";

const InputItem = ({
    value = "",
    name = "",
    label = "",
    type = "text",
    handleChange = () => {},
    autoFocus = false,
    required = false,
}) => {
    return (
        <label className="desc">
            <p className="label">{label}</p>
            <input
                type={type}
                value={value}
                name={name}
                onChange={handleChange}
                autoFocus={autoFocus}
                required={required}
            />
        </label>
    );
};

InputItem.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    handleChange: PropTypes.func,
    autoFocus: PropTypes.bool,
    required: PropTypes.bool,
};

export default InputItem;
