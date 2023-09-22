import React from 'react';

// MFA Code Input component used In Multi Factor AUthentication process.
const MfaCodeInput = () => {
  return (
    <>
      <label className="form-label" data-trans="mfaCodeInputLabel">
        Enter The Code Generated By The App
      </label>
      <div className="form-floating">
        <input
          type="text"
          className="form-control"
          id="mfaCodeInput"
          placeholder="1234"
        />
        <label
          htmlFor="mfaCodeInput"
          className="d-flex w-auto fs-6 left-none"></label>
      </div>
    </>
  );
};

export default MfaCodeInput;
