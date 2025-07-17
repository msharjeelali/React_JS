export default function Pad(prop){
    return <button 
    style={{backgroundColor: prop.color}} 
    className={prop.on ? "on" : undefined}
    onClick={() => prop.handleClick(prop.id)}
    ></button>
}