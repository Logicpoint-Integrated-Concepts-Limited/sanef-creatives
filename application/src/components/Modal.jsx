import ReactModal from "react-modal"
import { MdOutlineCancelPresentation } from "react-icons/md";


const Modal = ({
    isOpen,
    setIsOpen,
    title,
    size = "l",
    children,
    onClose = () => { },
}) => {
    let modalClass;
    if (size === "xl") {
        modalClass = "modal-xlg";
    } else if (size === "l") {
        modalClass = "modal-lg";
    } else if (size === "sm") {
        modalClass = "";
    } else if (size === "xsm") {
        modalClass = "modal-xsm";
    }
    return (
        <ReactModal
            isOpen={isOpen}
            ariaHideApp={false}
            onRequestClose={() => setIsOpen(false)}
            shouldCloseOnOverlayClick={true}
        >
            <div className={`modal-dialog ${modalClass}`} role="document">
                <div className="modal-content app-modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{title}</h4>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={() => {
                                setIsOpen(false);
                                onClose();
                            }}
                        >
                            <span aria-hidden="true"><MdOutlineCancelPresentation size={30} color="" title="Close" /></span>
                        </button>
                    </div>
                    <div className="modal-body rec-modal-body">{children}</div>
                </div>
            </div>
        </ReactModal>
    );
};

export default Modal;
