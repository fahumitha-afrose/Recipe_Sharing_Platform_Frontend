import React, { useState } from "react";
import Register from "./Register";

const Login = ({ setShowLogin }) => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
            <button type="button" className="btn-close" onClick={() => setShowLogin(false)}></button>
          </div>
          <div className="modal-body">
            {!showRegister ? (
              <>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
                <p className="mt-3 text-center">
                  New user? <button className="btn btn-link p-0" onClick={() => setShowRegister(true)}>Register</button>
                </p>
              </>
            ) : (
              <Register setShowRegister={setShowRegister} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;