import { useEffect } from "react";

function CardDelete({ closeModal }) {
  useEffect(() => {
    closeModal();
  }, []);
  return (
    <div className="p-4">
      <div className="mb-10">
        <h1 className="p-2 text-center text-white font-semibold text-xl">
          ¿Estás seguro de eliminar este registro?
        </h1>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => closeModal()}
          className="bg-green-600 hover:bg-green-500 p-2 w-[30%] text-white font-semibold rounded-lg"
        >
          Si
        </button>
        <button
          onClick={closeModal}
          className="bg-red-600 hover:bg-red-500 p-2 w-[30%] text-white font-semibold rounded-lg"
        >
          No
        </button>
      </div>
    </div>
  );
}
export default CardDelete;
