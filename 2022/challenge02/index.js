const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // MM/DD

const days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];

function countHours(year, holidays) {
    return holidays.map((date) => {
        return new Date(`${year}/${date}`).getDay();
    }).reduce((acc, curr) => {
        if (curr > 0 && curr <= 5) {
            acc += 1
        }
        return acc
    }, 0) * 2
}

console.log(countHours(2000, ['01/01']))