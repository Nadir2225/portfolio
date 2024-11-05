import { ReactTyped } from "react-typed";
import "../App.css"; 

function Retyped(props) {
    return (
        <ReactTyped
            strings={[
                "Full-stack developer",
                "Android developer",
                "2D games Developer",
            ]}
            typeSpeed={60}
            backSpeed={70}
            loop
            cursorChar="|"
            cursorClassName="cursor" 
            style={props.style}
            className="gradient-text"
        />
    );
}

export default Retyped;
