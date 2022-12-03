import './App.css';
import { useState } from 'react';

export function AddColor() {
    const [color, setColor] = useState("red");
    const [colorList, setcolorList] = useState(["green", "orange", "skyblue", "pink"]);
    const styles = { background: color };
    return (
        <div>
            <input style={styles} onChange={(event) => setColor(event.target.value)} placeholder="Enter a color" value={color} />
            <button onClick={() => setcolorList([...colorList, color])}>Add Color</button>
            {colorList.map((clr) => (<ColorBox colorname={clr} />))};
        </div>
    );
}


function ColorBox({ colorname }) {
    const palletStyle = {
        marginTop: "30px",
        marginLeft: "50px",
        width: "200px",
        height: "25px",
        background: colorname
    };
    return <div style={palletStyle}>
    </div>

}
