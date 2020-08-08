
 export const time = () => {
    const date = new Date()
    const realTime = {}
    realTime.day = date.getDay()
    realTime.hours = date.getHours()
    realTime.min = date.getMinutes()
    return realTime
}

export const getSundays = () =>{
    let today = new Date();
    let nextSunday = new Date();

    let sunday = new Date(today.getTime() - today.getDay() * 24 * 3600 * 1000);
    nextSunday.setDate(sunday.getDate() + 7);
    let obj = {}
    obj.sunday = sunday.getTime()
    obj.nextSunday = nextSunday.getTime()

    return obj
}

export const makeDate = (ms) =>{
    let date = new Date(ms)
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
}

export const fullTime = (num) => {
    let obj = {}
    
    switch(num){
        case 0:
            obj.day = 'Sun'
            obj.workTime = '10.00 am to 15.00 am'
            break

        case 1:
            obj.day = 'Mon'
            obj.workTime = '10.00 am to 15.30 am'
            break

        case 2:
            obj.day = 'Tue'
            obj.workTime = '10.00 am to 14.30 am'
            break

        case 3:
            obj.day = 'Wed'
            obj.workTime = '10.00 am to 14.30 am'
            break

        case 4:
            obj.day = 'Thu'
            obj.workTime = '10.00 am to 15.00 am'
            break

        case 5:
            obj.day = 'Fri'
            obj.workTime = '10.00 am to 15.30 am'
            break

        case 6:
            obj.day = 'Weekend'
            obj.workTime = 'Have a great Weekend guys!'
            break

        default:
            obj.day = 'Default'
            obj.workTime = '0.00 am to 0.00 am'
            break

    }
    return obj 
}

