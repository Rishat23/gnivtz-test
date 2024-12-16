import React from "react";
import cl from "./employee-info-form-container.module.scss";
import EmployeeInfoForm from "./employee-info-form/employee-info-form"

const EmployeeInfoFormContainer = () => {
  return (
    <div className={cl.wrapper}>
        <EmployeeInfoForm />
    </div>
  );
};

export default EmployeeInfoFormContainer;
