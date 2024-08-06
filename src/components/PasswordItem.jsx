import { useState, useRef } from "react";
import PropTypes from "prop-types";

import Key from "../assets/svgs/Key";
import Hide from "../assets/svgs/Hide";
import Show from "../assets/svgs/Show";

const PasswordItem = ({
    label = "",
    value = "",
    name = "",
    handleChange = () => {},
    staticType = false,
    autoFocus = false,
    required = false,
    pass = "",
}) => {
    const [show, setShow] = useState(false);
    const inputRef = useRef();
    return (
        <>
            <div className="icon">
                <Key />
            </div>
            <div className="desc">
                <p className="label">{label}</p>
                {!staticType ? (
                    <p className="det">{show ? pass : "*************"}</p>
                ) : (
                    <>
                        <input
                            ref={inputRef}
                            type={show ? "text" : "password"}
                            value={value}
                            name={name}
                            onChange={handleChange}
                            autoFocus={autoFocus}
                            required={required}
                        />
                    </>
                )}
                <button
                    type="button"
                    className="secondary-btn"
                    onClick={() => {
                        inputRef?.current?.focus();
                        setShow(!show);
                    }}
                >
                    {!show ? <Show /> : <Hide />}
                </button>
            </div>
        </>
    );
};

PasswordItem.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    handleChange: PropTypes.func,
    staticType: PropTypes.bool,
    autoFocus: PropTypes.bool,
    required: PropTypes.bool,
    pass: PropTypes.string,
};

export default PasswordItem;
