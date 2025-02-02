import React, { useState } from "react";
function Login() {
    const [showModal, setShowModal] = useState(false);

  return (
    <div className="container text-center mt-5">
-      <button className="btn btn-primary" onClick={() => setShowModal(true)}>
        دخول
      </button>

-      {showModal && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">تسجيل الدخول</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <input type="text" className="form-control mb-2" placeholder="اسم المستخدم" />
                <input type="password" className="form-control mb-2" placeholder="كلمة المرور" />
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  إغلاق
                </button>
                <button className="btn btn-primary">تسجيل الدخول</button>
              </div>
            </div>
          </div>
        </div>
      )}

-      {showModal && <div className="modal-backdrop show"></div>}
    </div>

  );

}

export default Login
