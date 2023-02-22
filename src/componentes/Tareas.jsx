import {TfiAngleDown, TfiBasketball, TfiBook, TfiClose, TfiSearch, TfiSignal, TfiTime} from "react-icons/tfi";
import {useState} from "react";

function Tareas({product, setProduct, item, setItem}) {
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        setProduct({...product, [e.target.name]: e.target.value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            product.nombreTarea === "" ||
            product.prioridadTarea === "" ||
            product.tiempoTarea === "" ||
            product.descricpionTarea === ""
        ) {
            setFormErrors(validate(product));
        } else {
            item.push(product);
            setItem([...item]);
            setProduct({
                nombreTarea: "",
                prioridadTarea: "",
                tiempoTarea: "",
                descricpionTarea: "",
            });
            setFormErrors({});
        }
    };

    const handleDelete = (param) => {
        const deleteItem = item.filter((item, index) => item.nombreTarea !== param.nombreTarea);
        setItem([...deleteItem]);
        console.log(param);
    };

    const validate = (values) => {
        const errors = {};
        if (!values.nombreTarea) {
            errors.nombreTarea = "Nombre de tarea es requerido!";
        }
        if (!values.prioridadTarea) {
            errors.prioridadTarea = "Prioridad de tarea es requerido!";
        }
        if (!values.tiempoTarea) {
            errors.tiempoTarea = "Tiempo de tarea es requerido!";
        }
        if (!values.descricpionTarea) {
            errors.descricpionTarea = "Descripción de tarea es requerido!";
        }
        return errors;
    };

    return (
        <div className="mt-1 bg-purple-50 p-2">
            <div className="bg-white hover:bg-amber-50 border flex flex-col rounded-lg shadow-lg hover:shadow-xl">
                <h1 className="p-3 text-3xl font-semibold text-purple-600 italic">Agregar tareas</h1>
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col">
                <div className="p-3 lg:w-1/3 w-full">
                    <div
                        className="bg-white lg:p-8 p-5 rounded-lg border border-lime-600 hover:bg-lime-50 shadow-lg hover:shadow-xl">
                        <h1 className="text-2xl text-center text-purple-600 mb-5 italic">Agregar tarea</h1>
                        <form onSubmit={handleSubmit}>
                            <input
                                name="nombreTarea"
                                value={product.nombreTarea}
                                onChange={handleChange}
                                className="placeholder:text-slate-500 block bg-white w-full border border-slate-300 rounded-md py-1 pl-5 pr-1 shadow-sm focus:outline-none focus:border-lime-500 focus:ring-lime-500 focus:lime-1 sm:text-sm"
                                placeholder="Nombre de la tarea"
                            />
                            <p className="text-red-900">{formErrors.nombreTarea}</p>
                            <br/>
                            <select
                                name="prioridadTarea"
                                value={product.prioridadTarea}
                                onChange={handleChange}
                                className="placeholder:text-slate-500 block bg-white w-full border border-slate-300 rounded-md py-1 pl-5 pr-1 shadow-sm focus:outline-none focus:border-lime-500 focus:ring-lime-500 focus:lime-1 sm:text-sm"
                                placeholder="Prioridad"
                            >
                                <option className="text-gray-200">Prioridad</option>
                                <option>Alta</option>
                                <option>Media</option>
                                <option>Baja</option>
                            </select>
                            <p className="text-red-900">{formErrors.prioridadTarea}</p>
                            <br/>
                            <input
                                name="tiempoTarea"
                                type="number" step={15} min={15}
                                value={product.tiempoTarea}
                                onChange={handleChange}
                                className="placeholder:text-slate-500 block bg-white w-full border border-slate-300 rounded-md py-1 pl-5 pr-1 shadow-sm focus:outline-none focus:border-lime-500 focus:ring-lime-500 focus:lime-1 sm:text-sm"
                                placeholder="Tiempo de tarea"
                            />
                            <p className="text-red-900">{formErrors.tiempoTarea}</p>
                            <br/>
                            <textarea
                                name="descricpionTarea"
                                value={product.descricpionTarea}
                                onChange={handleChange}
                                className="placeholder:text-slate-500 block bg-white w-full border border-slate-300 rounded-md py-1 pl-5 pr-1 shadow-sm focus:outline-none focus:border-lime-500 focus:ring-lime-500 focus:lime-1 sm:text-sm"
                                placeholder="Descripción tarea"
                            />
                            <p className="text-red-900">{formErrors.descricpionTarea}</p>
                            <br/>
                            <button
                                className="px-10 py-2 lg:ml-12 text-md text-white bg-lime-600 rounded hover:bg-purple-400">
                                Agregar
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mr-auto mt-2 p-1 w-full">
                    <div className="grid lg:grid-cols-3 gap-2 md:grid-cols-2 grid-cols-1 ">
                        {item.map((obj, index) => {
                            return (
                                <div
                                    className="bg-white p-5 rounded-xl border border-blue-500 hover:bg-blue-50 shadow-lg hover:shadow-xl"
                                    key={index}>
                                    <button
                                        onClick={() => handleDelete(obj)}
                                        className="float-right bg-red-500 px-2 text-white rounded-full"
                                    >
                                        x
                                    </button>
                                    <div className="mt-6 text-center p-1 md:p-0">
                                        <div className="flex space-x-4 items-center justify-between">
                                            <h1 className="text-purple-600">Nombre tarea:</h1>
                                            <p className="text-xl">{obj.nombreTarea}</p>
                                        </div>
                                        <div className="flex space-x-4 items-center justify-between">
                                            <h1 className="text-purple-600">Prioridad:</h1>
                                            <p className="text-xl">{obj.prioridadTarea}</p>
                                        </div>
                                        <div className="flex space-x-4 items-center justify-between">
                                            <h1 className="text-purple-600">Tiempo de tarea:</h1>
                                            <p className="text-xl">{obj.tiempoTarea}</p>
                                        </div>
                                        <div className="flex space-x-4 items-center justify-between">
                                            <h1 className="text-purple-600">Descripción tarea:</h1>
                                            <p className="text-xl">{obj.descricpionTarea}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Tareas;