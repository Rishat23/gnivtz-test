export type InputProps = {
    label?: string;
    value: string | undefined;
    placeholder?: string;
    error?: string;
    type?: string;
    onChange: (value: string) => void;
};