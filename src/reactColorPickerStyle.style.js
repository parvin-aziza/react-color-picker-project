import styled from 'styled-components';

const ColorPickerWrapper=styled.div`
.backGroundClass{
    background-color:${props=>(props.colour)} ;
    width: 100%;
    height:100vh;
    border: 1px solid black;
}
.buttonClass{
    background-color:black;
    color:white;
    margin-top:10px;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
}

.sketch-picker{
    margin: auto;
}
`

export default ColorPickerWrapper;
