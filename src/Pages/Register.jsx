import React, { useState } from "react";
import Login from "./Login";

const Register = ({ setShowRegister }) => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Register</h5>
            <button type="button" className="btn-close" onClick={() => setShowRegister(false)}></button>
          </div>
          <div className="modal-body">
            {!showLogin ? (
              <>
                <form>
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Enter full name" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Register</button>
                </form>
                <p className="mt-3 text-center">
                  Already have an account? <button className="btn btn-link p-0" onClick={() => setShowLogin(true)}>Login</button>
                </p>
              </>
            ) : (
              <Login setShowLogin={setShowLogin} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;