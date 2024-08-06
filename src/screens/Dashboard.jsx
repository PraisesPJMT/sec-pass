import { useState, useMemo } from "react";
import { formatDateToCustomString } from "../utils/helpers";

import Key from "../assets/svgs/Key";
import Web from "../assets/svgs/Web";
import User from "../assets/svgs/User";
import Edit from "../assets/svgs/Edit";
import Show from "../assets/svgs/Show";
import Hide from "../assets/svgs/Hide";
import Used from "../assets/svgs/Used";
import useGuard from "../hook/useGuard";
import Delete from "../assets/svgs/Delete";
import Created from "../assets/svgs/Created";
import Modified from "../assets/svgs/Modified";
import EditLogin from "../components/EditLogin";
import DeleteLogin from "../components/DeleteLogin";
import DashboardHeader from "../components/DashboardHeader";

import "../assets/styles/Dashboard.css";

const Dashboard = () => {
    const { accounts } = useGuard();
    const data = useMemo(() => [...accounts], [accounts]);
    const [show, setShow] = useState(false);
    const [login, setLogin] = useState(data[0]);

    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    const handleEdit = () => {
        setOpenEdit(true);
        setOpenDelete(false);
    };

    const handleDelete = () => {
        setOpenDelete(true);
        setOpenEdit(false);
    };

    return (
        <div id="dashboard">
            <DashboardHeader />
            <aside>
                {data.map((account) => (
                    <button
                        key={account.password}
                        className={`account ${
                            account.password === login.password ? "active" : ""
                        }`}
                        type="button"
                        onClick={() => setLogin(account)}
                    >
                        <div className="logo">
                            <User />
                        </div>
                        <div className="details">
                            <span className="title">{account.name}</span>
                            <span>{account.url}</span>
                        </div>
                    </button>
                ))}
            </aside>
            <main>
                <div className="header">
                    <h2>{login.url}</h2>
                    <button
                        type="button"
                        className="secondary-btn"
                        onClick={handleEdit}
                    >
                        <Edit />
                        Edit
                    </button>
                    <button
                        type="button"
                        className="secondary-btn"
                        onClick={handleDelete}
                    >
                        <Delete />
                        Delete
                    </button>
                </div>
                <div className="body">
                    <div className="sec">
                        <div className="icon">
                            <User />
                        </div>
                        <div className="desc">
                            <p className="label">Username</p>
                            <p className="det">{login.username}</p>
                        </div>
                    </div>

                    <div className="sec">
                        <div className="icon">
                            <Key />
                        </div>
                        <div className="desc">
                            <p className="label">Password</p>
                            <p className="det">
                                {show ? login.password : "*************"}
                            </p>
                            <button
                                type="button"
                                className="secondary-btn"
                                onClick={() => setShow(!show)}
                            >
                                {!show ? <Show /> : <Hide />}
                            </button>
                        </div>
                    </div>

                    <div className="sec">
                        <div className="icon">
                            <Web />
                        </div>
                        <div className="desc">
                            <p className="label">Website</p>
                            <p className="det">{login.url}</p>
                        </div>
                    </div>

                    <div className="sec col">
                        <div className="sub-sec">
                            <div className="icon">
                                <Used />
                            </div>
                            <div className="desc">
                                <p className="label">Last autofilled</p>
                                <p className="det">
                                    {login.lastUsed
                                        ? formatDateToCustomString(
                                              login.lastUsed,
                                          )
                                        : "Never"}
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="sub-sec">
                            <div className="icon">
                                <Modified />
                            </div>
                            <div className="desc">
                                <p className="label">Last modified</p>
                                <p className="det">
                                    {formatDateToCustomString(
                                        login.lastModified,
                                    )}
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className="sub-sec">
                            <div className="icon">
                                <Created />
                            </div>
                            <div className="desc">
                                <p className="label">Created</p>
                                <p className="det">
                                    {formatDateToCustomString(login.createdAt)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <DeleteLogin
                    open={openDelete}
                    setOpen={setOpenDelete}
                    login={login}
                />

                <EditLogin
                    open={openEdit}
                    setOpen={setOpenEdit}
                    login={login}
                />
            </main>
        </div>
    );
};

export default Dashboard;
