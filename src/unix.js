export function unix(dt,type) {
    const seconds = dt * 1000
    const data = new Date(seconds)
    
    let result = 
    type == 'weekday' ? data.toLocaleString('ru-Ru', { weekday: 'short' }) :
    type == 'day' ? data.toLocaleString('ru-Ru', { day: 'numeric' }) :
    type == 'month' ? data.toLocaleString('ru-Ru', { month: 'long' }) : ''
    
    return result
}
