import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

function Destino() {

    const navigate = useNavigate();
    const location = useLocation();
    const objeto = location.state.objeto;

    return (
        <>
            <h1>{objeto}</h1>
        </>
    );
}

export default Destino;