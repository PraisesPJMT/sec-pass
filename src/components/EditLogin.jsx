import { useState, useEffect } from "react";

import PropTypes from "prop-types";
import InputItem from "./InputItem";
import Web from "../assets/svgs/Web";
import User from "../assets/svgs/User";
import Logo from "../assets/svgs/Logo";
import useGuard from "../hook/useGuard";
import Thick from "../assets/svgs/Thick";
import PasswordItem from "./PasswordItem";

import "../assets/styles/EditLogin.css";

const EditLogin = ({ login, open, setOpen, handleUpdate }) => {
    const [success, setSuccess] = useState(false);
    const [edit, setEdit] = useState({
        name: login.name,
        username: login.username,
        password: login.password,
        url: login.url,
    });

    const [editErr, setEditErr] = useState("");

    const { editLogin } = useGuard();

    const handleChange = (event) => {
        setEditErr("");
        const { name, value } = event.target;
        setEdit({ ...edit, [name]: value });
    };

    const handleCancel = () => {
        setOpen(false);
        setSuccess(false);
        setEditErr("");
        setEdit({
            name: login.name,
            username: login.username,
            password: login.password,
            url: login.url,
        });
    };

    const handleEdit = () => {
        if (!edit.name || !edit.username || !edit.password || !edit.url) {
            setEditErr("All fields are required.");
            return;
        }

        editLogin(login.id, edit);
        handleUpdate(login);
        setSuccess(true);
    };

    useEffect(() => {
        setEdit({
            name: login.name,
            username: login.username,
            password: login.password,
            url: login.url,
        });
    }, [login]);

    return (
        <>
            <section id="edit" className={`${open ? "open" : ""}`}>
                <div className="edit-wrap">
                    {success ? (
                        <>
                            <h2>Account Updated</h2>
                            <div className="thick">
                                <Thick />
                            </div>
                            <p>Your account has been successfully updated.</p>
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
                            <h2>Edit Account</h2>
                            <form onSubmit={handleEdit}>
                                <div className="sec">
                                    <div className="icon logo">
                                        <Logo />
                                    </div>

                                    <InputItem
                                        value={edit.name}
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
                                        value={edit.username}
                                        name="username"
                                        label="Username"
                                        handleChange={handleChange}
                                        required={true}
                                    />
                                </div>

                                <div className="sec">
                                    <PasswordItem
                                        label="Password"
                                        value={edit.password}
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
                                        value={edit.url}
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
                                        UPDATE
                                    </button>
                                </div>
                                {editErr && (
                                    <p className="errorMsg">{editErr}</p>
                                )}
                            </form>
                        </>
                    )}
                </div>
            </section>
        </>
    );
};

EditLogin.propTypes = {
    login: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    handleUpdate: PropTypes.func.isRequired,
};

export default EditLogin;
