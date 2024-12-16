import React, { memo } from "react";
import Input from "../input";
import {EmailInputProps} from "./email.props";

const EmailInput = ( props: EmailInputProps ) => <Input type="email" {...props}/>;

export default memo(EmailInput);

