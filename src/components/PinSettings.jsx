import { useState } from "react";

import Logo from "../assets/svgs/Logo";
import useGuard from "../hook/useGuard";
import PasswordItem from "./PasswordItem";
import SettingsRing from "../assets/svgs/SettingsRing";

const PinSettings = () => {
  const [changePin, setChangePin] = useState(false);
  const [password, setPassword] = useState({ password: "", confirmPwd: "" });
  const [passErr, setPassErr] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const { pass, updatePass } = useGuard();

  const handleChange = (event) => {
    setPassErr("");
    const { name, value } = event.target;

    setPassword((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    if (password.password && password.confirmPwd) {
      if (password.password && password.confirmPwd) {
        updatePass(password.password);
        setPassErr("");
        setChangePin(false);
        setPassword({ password: "", confirmPwd: "" });
        setSuccessMsg("Pin changed successfully!");
        setTimeout(() => {
          setSuccessMsg("");
        }, 5000);
      } else {
        setPassErr("Passwords do not match!");
      }
    } else {
      setPassErr("Passwords can't be empty");
    }
  };

  return (
    <main className="wrap">
      <div className="wrap-logo">
        <SettingsRing className="ring" />
        <Logo className="logo" />
      </div>
      <h1>
        Pass<span>Guard</span>
      </h1>

      {changePin ? (
        <>
          <div className="sec col">
            <div className="sub-sec">
              <PasswordItem
                label="New Password"
                value={password.password}
                name="password"
                handleChange={handleChange}
                staticType={true}
                autoFocus={true}
              />
            </div>
            <hr />
            <div className="sub-sec">
              <PasswordItem
                label="Confirm Password"
                value={password.confirmPwd}
                name="confirmPwd"
                handleChange={handleChange}
                staticType={true}
              />
            </div>
          </div>

          {passErr && <p className="err">{passErr}</p>}

          <div className="btn-row">
            <button
              type="button"
              className="tertiary-btn"
              onClick={() => {
                setChangePin(false);
                setPassErr("");
                setPassword({ password: "", confirmPwd: "" });
              }}
            >
              CANCEL
            </button>
            <button type="button" className="primary-btn" onClick={handleSave}>
              SAVE
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="sec">
            <PasswordItem label="Password" staticType={false} pass={pass} />
          </div>

          <button
            type="button"
            className="primary-btn"
            onClick={() => {
              setChangePin(true);
              setSuccessMsg("");
            }}
          >
            CHANGE PIN
          </button>
        </>
      )}
      {successMsg && <p className="success">{successMsg}</p>}
    </main>
  );
};

export default PinSettings;
