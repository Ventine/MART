import dayjs from "dayjs";

export function  obtenerMes(month = dayjs().month()){
    month = Math.floor(month)
    const year = dayjs().year();
    const primerDia = dayjs(new Date(year, month, 1)).day()
    let currentMesContador = 0 - primerDia

    const daysGrid = new Array(5).fill([]).map(() => {

        return new Array(7).fill(null).map(() => {
            currentMesContador++
            return dayjs(new Date(year, month, currentMesContador))
        })
    })
    return daysGrid
}