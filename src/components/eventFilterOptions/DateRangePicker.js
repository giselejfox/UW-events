import * as React from 'react';
import dayjs from 'dayjs';

import { DatePicker } from '@mui/x-date-pickers';

export default function DateRangePicker({ setDataToFilterBy, dataToFilterBy }) {

    return(
        <div>
            <DatePicker 
                className='my-3'
                defaultValue={dayjs('2022-04-17')} 
            />
        </div>
    )
}