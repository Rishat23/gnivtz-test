import React, { memo } from "react";
import InputMask from "react-input-mask";
import { PhoneInputProps } from "./phone.props";
import Input from "../input";

const PhoneInput = ({ value, placeholder, error, onChange }: PhoneInputProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawPhone = event.target.value.replace(/\D/g, "");
        onChange?.(rawPhone);
    };

    return (
        <>
            <InputMask
                mask="+7 (999) 999-99-99"
                value={value}
                onChange={handleChange}
            >
                {(inputProps: any) => (
                    <Input
                        {...inputProps}
                        placeholder={placeholder || "+7 (___) ___-__-__"}
                        className={error ? "input-error" : "input"}
                    />
                )}
            </InputMask>
            <input type="hidden" tabIndex={-1} readOnly value={value} />
        </>
    );
};

export default memo(PhoneInput);
