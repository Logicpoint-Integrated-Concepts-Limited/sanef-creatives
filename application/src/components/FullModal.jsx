const modal = {
  position: "fixed",
  left: 0,
  top: 0,
  width: "100vw",
  height: "100vh",
  overflow: "auto",
};

const close = {
  position: "absolute",
  top: 15,
  right: 35,
  color: "#f1f1f1",
  fontSize: 40,
  fontWeight: "bold",
  cursor: "pointer",
};

const modalContent = {
  display: "flex",
  alignItems: "center",
  width: "85%",
  height: "100%",
  margin: "auto",
};

export const FullModal = ({ targetImageURL, onOpen, children }) => {
  return <div onClick={() => onOpen(targetImageURL)}> {children}</div>;
};

export const FullModalContent = ({ isOpen, onClose, children }) => {
  return (
    <div
      style={modal}
      className={`transition-all ease-out duration-100 cursor-pointer ${
        isOpen
          ? "bg-[rgba(0,0,0,0.7)] z-[100000000000] scale-100 translate-y-0"
          : "bg-none -z-10 scale-0 translate-y-[3000px]"
      }`}
      onClick={onClose}
    >
      <span
        style={close}
        onClick={onClose}
        className={`${isOpen ? "block" : "hidden"}`}
      >
        &times;
      </span>
      <div
        style={modalContent}
        className={`justify-center items-center transition-all ease-out duration-300 ${
          isOpen ? "scale-100" : "scale-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
