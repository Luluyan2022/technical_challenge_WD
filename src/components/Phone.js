import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const tdStyle = {
    width: "50%"   
}

export default function Phone(){ 
    const [phoneDetails, setPhoneDetails] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/api/phones/`+ id)
            .then((res) => {
                console.log(res.data)
                setPhoneDetails(res.data)
            })
            .catch((e) => {
                console.log("error in getting the phoneDetails from API");
            });
    }, [id])

    const renderDetails = () => {
        return (
            <div style={tdStyle}>
                <h3 className="mb-5">{phoneDetails.name}</h3>
                <table className="table">
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>MANUFACTURER</td>
                            <td>{phoneDetails.manufacturer}</td>
                        </tr>
                        <tr>
                            <td>DESCRIPTION</td>
                            <td>{phoneDetails.description}</td>
                        </tr>
                        <tr>
                            <td>COLOR</td>
                            <td>{phoneDetails.color}</td>
                        </tr>
                        <tr>
                            <td>PRICE</td>
                            <td>{phoneDetails.price}</td>
                        </tr>
                        <tr>
                            <td>IMAGEFILENAME</td>
                            <td>{phoneDetails.imageFileName}</td>
                        </tr>
                        <tr>
                            <td>SCREEN</td>
                            <td>{phoneDetails.screen}</td>
                        </tr>
                        <tr>
                            <td>PROCESSOR</td>
                            <td>{phoneDetails.processor}</td>
                        </tr>
                        <tr>
                            <td>RAM</td>
                            <td>{phoneDetails.ram}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
   
    return (       
          
        <div>
            {phoneDetails === null
                ? "loading...."
                : renderDetails()
            }
        </div>       
    )
}