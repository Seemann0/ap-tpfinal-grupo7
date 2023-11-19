export default function Clase1() {
    return (
        <>
            <div>
                <form action="" className="formSeguros" id='FormularioCoopSeguros'>
                    <div>
                        <div>
                            <th>Nombre</th>
                            <label htmlFor="Nombre"></label>
                            <input type="text" name="Nombre" id="Nombre" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <th>Apellido</th>
                            <label htmlFor="Apellido"></label>
                            <input type="text" name="Apellido" id="Apellido" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <th>Dni</th>
                            <label htmlFor="Dni"></label>
                            <input type="text" name="Dni" id="Dni" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <th>Email</th>
                            <label htmlFor="Email"></label>
                            <input type="text" name="Email" id="Email" />
                        </div>
                    </div>
                    <td>
                        <div>
                            <th>Teléfono</th>
                            <label htmlFor=""></label>
                            <input type="text" />
                        </div>
                    </td>
                    <div>
                        <div>
                            <th>Tipo de seguro</th>
                            <label htmlFor="Seguro"></label>
                            <select name="Seguro" id="Seguro">
                                <option value="Basico">Basico: $500</option>
                                <option value="Intermedio">Intermedio: $1000</option>
                                <option value="Premium">Premium: $1500</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="enviarForm"></label>
                        <button id="enviarForm">Enviar</button>
                    </div>
                </form>
            </div>
        </>

    );
}