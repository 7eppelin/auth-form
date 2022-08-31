import { FC, useState } from "react";

import { InputInner } from "./input-inner";

type CommonChangeEvent = {
    target: {
        value: string;
    };
};

type Props = {
    value: string;
    onChange: (value: string) => void;
    type?: "text" | "email" | "password" | "textarea";
    label: string;
    disabled?: boolean;
    error?: string;
    required?: boolean;
};

export const TextInput: FC<Props> = ({
    value,
    onChange,
    type = "text",
    label,
    disabled,
    error,
    required,
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (e: CommonChangeEvent) => {
        onChange(e.target.value);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onClear = () => {
        onChange("");
    };

    return (
        <InputInner
            value={value}
            error={error}
            label={label}
            type={type}
            onChange={handleChange}
            onClear={onClear}
            onFocus={onFocus}
            onBlur={onBlur}
            isFocused={isFocused}
            disabled={disabled}
            required={required}
        />
    );
};
