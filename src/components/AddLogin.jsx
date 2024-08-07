import { useState } from "react";

import PropTypes from "prop-types";
import InputItem from "./InputItem";
import Web from "../assets/svgs/Web";
import User from "../assets/svgs/User";
import Logo from "../assets/svgs/Logo";
import useGuard from "../hook/useGuard";
import Thick from "../assets/svgs/Thick";
import PasswordItem from "./PasswordItem";

import "../assets/styles/EditLogin.css";

const AddLogin = ({ open, setOpen, handleUpdate }) => {
    const [success, setSuccess] = useState(false);
    const [add, setAdd] = useState({
        name: "",
        username: "",
        password: "",
        url: "",
    });

    const [addErr, setAddErr] = useState("");

    const { addLogin } = useGuard();

    const handleChange = (event) => {
        setAddErr("");
        const { name, value } = event.target;
        setAdd({ ...add, [name]: value });
    };

    const handleCancel = () => {
        setOpen(false);
        setSuccess(false);
        setAddErr("");
        setAdd({
            name: "",
            username: "",
            password: "",
            url: "",
        });
    };

    const handleadd = () => {
        if (!add.name || !add.username || !add.password || !add.url) {
            setAddErr("All fields are required.");
            return;
        }

        addLogin(add);
        handleUpdate();
        setSuccess(true);
    };

    return (
        <>
            <section id="edit" className={`${open ? "open" : ""}`}>
                <div className="edit-wrap">
                    {success ? (
                        <>
                            <h2>Account Added</h2>
                            <div className="thick">
                                <Thick />
                            </div>
                            <p>Your account has been successfully added.</p>
                            <button
                                onClick={handleCancel}
                                type="button"
                                className="tertiary-btn"
                            >
                                CLOSE
                            </button>
                        </>
                    ) : (
                        <>
                            <h2>Add Account</h2>
                            <form onSubmit={handleadd}>
                                <div className="sec">
                                    <div className="icon logo">
                                        <Logo />
                                    </div>

                                    <InputItem
                                        value={add.name}
                                        name="name"
                                        label="Name"
                                        handleChange={handleChange}
                                        autoFocus={true}
                                        required={true}
                                    />
                                </div>

                                <div className="sec">
                                    <div className="icon">
                                        <User />
                                    </div>

                                    <InputItem
                                        value={add.username}
                                        name="username"
                                        label="Username"
                                        handleChange={handleChange}
                                        required={true}
                                    />
                                </div>

                                <div className="sec">
                                    <PasswordItem
                                        label="Password"
                                        value={add.password}
                                        name="password"
                                        handleChange={handleChange}
                                        staticType={true}
                                    />
                                </div>

                                <div className="sec">
                                    <div className="icon">
                                        <Web />
                                    </div>

                                    <InputItem
                                        value={add.url}
                                        name="url"
                                        label="Website"
                                        handleChange={handleChange}
                                        required={true}
                                    />
                                </div>

                                <div className="btn-row">
                                    <button
                                        onClick={handleCancel}
                                        type="button"
                                        className="tertiary-btn"
                                    >
                                        CANCEL
                                    </button>

                                    <button
                                        type="submit"
                                        className="primary-btn"
                                    >
                                        ADD
                                    </button>
                                </div>
                                {addErr && <p className="errorMsg">{addErr}</p>}
                            </form>
                        </>
                    )}
                </div>
            </section>
        </>
    );
};

AddLogin.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    handleUpdate: PropTypes.func.isRequired,
};

export default AddLogin;
