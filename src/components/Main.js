
import { Link } from 'react-router-dom';

const divStyle = {
    maxHeight: "90vh",
    overflow: "scroll",
    width:"30%"
}

export default function Main(props){ 
   
    return (       
        <div className="remove-scrollbar" style={divStyle}>
            <div className="list-group">
                <h3>The Phone-list</h3>
                {props.phones.map((phoneDetails) => {
                    return (                        
                            <Link
                                to={`/`+ phoneDetails.id}                                
                                className="list-group-item list-group-item-action"
                                key={phoneDetails.id}>
                                {phoneDetails.name}
                            </Link>                        
                    );
                })}
            </div>
        </div>      
    )
}

 