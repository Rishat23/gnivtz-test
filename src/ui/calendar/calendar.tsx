import React, { memo } from "react";
import cl from "./calendar.module.scss";
import cn from "classnames";
import {CalendarProps} from "./calendar.props";

const Calendar = ({ value, onChange, error }: CalendarProps) => (
    <div className={cl.container}>
        <input
            type="date"
            value={value ?? ''}
            onChange={(event) => onChange(event.target.value)}
            className={cn(cl.input, { [cl.errorInput]: error })}
        />
        {error && <small className={cl.error}>{error}</small>}
    </div>
);

export default memo(Calendar);
