import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
    return (
        <div className="group">
            {label && <label className={`form-input-label ${otherProps.value.length > 0 ? "shrink" : ""}`}>{label}</label>}
            <input className="form-input" {...otherProps} />
        </div>
    );
};

export default FormInput;