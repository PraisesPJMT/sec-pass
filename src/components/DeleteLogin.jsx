import { useState } from "react";

import PropTypes from "prop-types";
import useGuard from "../hook/useGuard";
import Thick from "../assets/svgs/Thick";

import "../assets/styles/DeleteLogin.css";

const DeleteLogin = ({ login, open, setOpen, handleUpdate }) => {
    const [success, setSuccess] = useState(false);

    const { deleteLogin } = useGuard();

    const handleDelete = () => {
        deleteLogin(login.id);
        handleUpdate();
        setSuccess(true);
    };

    const handleCancel = () => {
        setOpen(false);
        setSuccess(false);
    };

    return (
        <>
            <section id="delete" className={`${open ? "open" : ""}`}>
                <div className="delete-wrap">
                    {success ? (
                        <>
                            <h2>Account Deleted</h2>
                            <div className="thick">
                                <Thick />
                            </div>
                            <p>Your account has been successfully deleted.</p>
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
                            <h2>Delete Account</h2>
                            <p>
                                Are you sure you want to delete the {login.name}{" "}
                                account?
                            </p>
                            <div className="btn-row">
                                <button
                                    onClick={handleCancel}
                                    type="button"
                                    className="tertiary-btn"
                                >
                                    CANCEL
                                </button>
                                <button
                                    onClick={handleDelete}
                                    type="button"
                                    className="primary-btn"
                                >
                                    DELETE
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    );
};

DeleteLogin.propTypes = {
    login: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
    handleUpdate: PropTypes.func.isRequired,
};

export default DeleteLogin;
