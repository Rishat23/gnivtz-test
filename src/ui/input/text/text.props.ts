export type TextInputProps = {
    label?: string;
    value: string | undefined;
    placeholder?: string;
    error?: string;
    onChange: (value: string) => void;
}