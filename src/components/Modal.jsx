import { useEffect } from "react";

function Modal({ isOpen, closeModal, children }) {
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      // Deshabilitar el scroll del body cuando el modal está abierto
      document.body.style.overflow = "hidden";
    } else {
      // Restaurar el scroll del body cuando el modal está cerrado
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-zinc-800 bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
      onMouseDown={closeModal}
    >
      <div
        className="bg-zinc-800 max-w-md w-full p-4 rounded-md my-2 overflow-auto"
        onMouseDown={stopPropagation}
        style={{ maxHeight: '80vh', overflowY: 'auto' }}
      >
        <div className="">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
