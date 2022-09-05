import React,{useState} from 'react';
import {SketchPicker}  from 'react-color';
import ColorPickerWrapper from './reactColorPickerStyle.style'


export const ReactColorPicker=()=>{
    const [bgColor,setBgColor]=useState('#32a84c');
    const [showColorPicker,setShowColorPicker]=useState(false)

    const handleOnChange=(color,event)=>{
        setBgColor(color.hex)
    }
    return(
        <ColorPickerWrapper colour={bgColor}>
            <div className="backGroundClass">
            </div>
            <button className="buttonClass" onClick={()=>setShowColorPicker(!showColorPicker)}>{!showColorPicker ? 'Select Background Color' : 'Hide Color Picker'} </button>
           {showColorPicker && <SketchPicker color={ bgColor } onChangeComplete={(e)=>handleOnChange(e)} />}
        </ColorPickerWrapper>
    )
}