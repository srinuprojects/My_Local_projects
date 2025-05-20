import { useEffect, useState } from "react";

export default function DataBindingComponent(){
    const [mars, setMars] = useState({ photos: [] }); // Initialize with an empty photos array

    useEffect(() => {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
        .then(response => response.json())
        .then(data => {
            setMars(data); // Update the state with the fetched data
        })
    }, []); // Add an empty dependency array to ensure the effect only runs once on mount

    return (
        <div className="container">
            <h2>Mars Photos</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>
                        <th>Preview</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mars.photos && mars.photos.map(photo => (
                            <tr key={photo.id}>
                                <td>{photo.id}</td>
                                <td>{photo.camera.full_name}</td>
                                <td>{photo.rover.name}</td>
                                <td>
                                    <img src={photo.img_src} alt="Mars" width="100" height="100" />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
