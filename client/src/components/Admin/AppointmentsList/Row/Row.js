import React from 'react'
import './Row.css'
import TableData from '../TableData/TableData'

const Row = ({appointments, time}) => {
    console.log('Row rendred')
 
    return (
  
        <tr>
            <th className='left-th'>{time}</th>
            <TableData appointments={appointments.filter(obj => obj.day === 'Sun')} />
            <TableData appointments={appointments.filter(obj => obj.day === 'Mon')} />
            <TableData appointments={appointments.filter(obj => obj.day === 'Tue')} />
            <TableData appointments={appointments.filter(obj => obj.day === 'Wed')} />
            <TableData appointments={appointments.filter(obj => obj.day === 'Thu')} />
            <TableData appointments={appointments.filter(obj => obj.day === 'Fri')} />
        </tr>
    )
}

export default Row





