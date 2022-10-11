import React, { useState } from "react";
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';

export default function Schedule () {
    if (!localStorage.getItem('my-key')){
        window.location.href = "/Client";
    }
    const [value, setValue] =useState(dayjs());
    function clicked(e){
        e.preventDefault();
        sessionStorage.setItem('pickuplocation',value.$d);
        window.location.href = "/category";
    
    }
        return(
            <>
            
            <section className="bg-slate-100 h-screen">
                <div className="pt-9 text-center "><p className="font-bold text-2xl"> Schedule your order to pickup     
                </p></div>
                <div className="px-3 pt-16 ">
                    <div className=" rounded-md bg-white py-5 px-10 ">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <Stack spacing={3}>
                          <MobileDateTimePicker
                              label="Time and Date"
                              value={value}
                              onChange={(newValue) => {
                                setValue(newValue);
                              }}
                              renderInput={(params) => <TextField {...params} />}
                            />

                          </Stack>
                        </LocalizationProvider>
                        
                        <div className="flex justify-center my-4">
                            <button onClick={clicked} className="w-1/3 py-4 bg-blue-500 text-white rounded px-3 ">
                                    Next
                            </button>
                            <button onClick={() =>window.location.href = "/category"} className="w-1/3 ml-3 py-4 bg-blue-500 text-white rounded px-3 ">
                                    Back
                            </button>
                        </div>    
                           
                    </div>
                </div>
                
            </section>
            </>
        )
    
}

