import './CreateRoom.scss';
import { Link } from "react-router-dom";
import { useState } from 'react';


const CreateRoom = () => {
    const [ roomName , setRoomName] = useState('');
    const [ userName , setUserName] = useState('');
    const onRoomNameChange = (evt) => setRoomName(evt.target.value); 
    const onUserNameChange = (evt) => setUserName(evt.target.value);
    return (
        <div className='createRoomBox'>
            <h1>Create Room</h1>
            <form>
                <p>
                    <label>Room Name: </label>
                </p>
                <p>
                    <input type="text" name="roomName" onChange={onRoomNameChange}/>
                </p>
                <p>
                    <label>User Name: </label>
                </p>
                <p>
                    <input type="text" name="userName" onChange={onUserNameChange}/>
                </p>
                <p>
                <Link to={`/JoinRoom/${roomName}/${userName}`}><input type="submit" value="Create Room" /></Link>
                
                </p>
            </form>
        </div>
    );

}

export default CreateRoom;