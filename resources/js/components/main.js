import CreatePedido from "./CreatePedido";
import CreateTerceros from "./CreateTerceros";
import ListPedidos from "./PedidoList";
import TerceroList from "./TerceroList";

const Main = () => {

    const [pedidosActualizados, setPedidosActualizados] = useState(false);
    const [tercerosActualizados, tercerosPedidosActualizados] = useState(false);


    return (
        <div className="container p-5">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Terceros</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Pedido</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <CreateTerceros/>
                    <hr></hr>
                    <TerceroList/>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <CreatePedido/>
                    <hr/>
                    <ListPedidos/>
                </div>
            </div>
        </div>
    );


}


export default Main;
