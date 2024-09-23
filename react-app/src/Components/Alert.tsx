interface Props {
  text: string;
  color?: "primary" | "secondary" | "danger";
  onClose: () => void;
}

const Alert = ({ text, color = "primary", onClose }: Props) => {
  return (
    <>
      <div
        className={"alert alert-" + color + " alert-dismissible fade show"}
        role="alert"
      >
        {text}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          onClick={onClose}
        ></button>
      </div>
    </>
  );
};

export default Alert;
