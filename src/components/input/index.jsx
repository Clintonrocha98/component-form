export function Input({
    id,
    label,
    onChange,
    value,
    type,
    placeholder,
}) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                name={id}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                type={type}
            />
        </>
    );
}
