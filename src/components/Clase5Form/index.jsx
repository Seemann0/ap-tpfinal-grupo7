import { useState } from "react";

export default function Clase5Form() {
    const [nombre,setNombre] = useState();
    const [mail,setMail] = useState();
    const [submit,setSubmit] = useState();

    const onChangeNombre = (e) => (e.target.value);
    const onChangeMail = (e) => (e.target.value);
    return (
        <>
            <form action="" className="formSeguros" id='FormularioCoopSeguros'>
                <tr>
                    <td>
                        <th>Nombre</th>
                        <label htmlFor="Nombre"></label>
                        <input type="text" name="Nombre" id="Nombre" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <th>Apellido</th>
                        <label htmlFor="Apellido"></label>
                        <input type="text" name="Apellido" id="Apellido" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <th>Dni</th>
                        <label htmlFor="Dni"></label>
                        <input type="text" name="Dni" id="Dni" />
                    </td>
                </tr>
                <tr>
                    <td>
                        <th>Email</th>
                        <label htmlFor="Email"></label>
                        <input type="text" name="Email" id="Email" />
                    </td>
                </tr>
                <td>
                    <td>
                        <th>Teléfono</th>
                        <label htmlFor=""></label>
                        <input type="text" />
                    </td>
                </td>
                <tr>
                    <td>
                        <th>Tipo de seguro</th>
                        <label htmlFor="Seguro"></label>
                        <select name="Seguro" id="Seguro">
                            <option value="Basico">Basico: $500</option>
                            <option value="Intermedio">Intermedio: $1000</option>
                            <option value="Premium">Premium: $1500</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <label htmlFor="enviarForm"></label>
                    <button id="enviarForm">Enviar</button>
                </tr>
            </form>
        </>

    );
}