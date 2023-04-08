export const Input = ({
    label,
    placeholder,
    type,
    bg,
    register,
    errors,
    name,
    value,
    onChange,
  }) => {
    return (
      <div className="text-sm w-full">
        <label className="text-border font-semibold block text-base mb-1 text-black">{label}</label>
        <input
          name={name}
          value={value}
          onChange={onChange}
          {...register}
          {...errors}
          type={type}
          placeholder={placeholder}
          className={`w-full text-sm mt-2 p-5 border border-border rounded text-black ${
            bg ? "bg-main" : "bg-dry"
          }`}
        />
      </div>
    );
  };