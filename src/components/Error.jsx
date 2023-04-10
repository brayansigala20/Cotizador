import useCotizador from "../hooks/useCotizador"

const Error = () => {
    const {err, setErr} = useCotizador()
     
  return (
    <p className="text-center bg-red-200 p-2 uppercase font-black">{err}</p>
  )
}

export default Error