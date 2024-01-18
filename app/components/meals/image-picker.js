'use client';
import classes from './image-picker.module.css'
import {useRef} from 'react';

export default function ImagePicker({label, name}){
    const imageInput = useRef();
    function HandlePickClick(){
        imageInput.current.click();
    }
    return(
        <div className={classes.picker}> 
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <input
                    className={classes.input}
                    type="file" 
                    id={name} 
                    accept="image/png, image/jpg, image/jpeg"
                    name={name}
                    ref={imageInput}
                />
                <button className={classes.button} type="button" onClick={HandlePickClick}>
                    Pick an image
                </button>
            </div>
        </div>
    );
}