import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../context/authContext";
import { RiMailFill, RiKeyFill, RiEyeLine, RiEyeOffLine } from "react-icons/ri";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const { signin, errors: loginErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit((data) => {
    // signin(data);
    console.log(data);
  });
  return (
    <div className="bg-secundary-100 p-8 rounded-xl w-auto lg:w-[450px]">
      {loginErrors.map((error, i) => (
        <div className="w-full bg-red-500 p-2 text-white rounded-md" key={i}>
          {error}
        </div>
      ))}
      <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
        Iniciar <span className="text-primary">Sesión</span>
      </h1>
      <form className="mb-8" onSubmit={onSubmit}>
        <div className="relative mb-4">
          <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="text"
            {...register("Usuario", { required: true })}
            className="py-3 pl-8 pr-4 bg-secundary-900 w-full rounded-lg outline-none"
            placeholder="Usuario"
          />
          {errors.Usuario && (
            <p className="w-full text-red-500">Usuario es requerido</p>
          )}
        </div>
        <div className="relative mb-4">
          <RiKeyFill className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type={showPassword ? "text" : "password"}
            {...register("Contraseña", { required: true })}
            className="py-3 px-8  bg-secundary-900 w-full rounded-lg outline-none"
            placeholder="Contraseña"
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer hover:text-white"
            />
          ) : (
            <RiEyeLine
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer hover:text-white"
            />
          )}
          {errors.Contraseña && (
            <p className="w-full text-red-500"> Contraseña es requerido</p>
          )}
        </div>

        <button
          className="py-3 pl-8 pr-4 bg-primary hover:bg-blue-500 transition-colors w-full rounded-lg outline-none text-white uppercase font-bold"
          type="submit"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
