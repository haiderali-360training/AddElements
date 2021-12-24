import react from "react";

const MyComponents = (props) => {

    const clk = () => {props.setTime();}
    return(
        <div>DateTime: {props.times}  </div>
    )
}

export default MyComponents;