import './JoinRoom.scss';
import {useParams} from 'react-router-dom';

const JoinRoom = () => {
    let { roomName } = useParams();
    console.log(roomName);
    return (
        <div className='joinRoomBox'>
            <h1>Join Room - {roomName}</h1>
            <form>
                <p>
                    <label>User Name: </label>
                </p>
                <p>
                    <input type="text" name="userName"/>
                </p>
                <p>
                <input type="submit" value="Join Room"/>
                </p>
            </form>
        </div>
    );
}

export default JoinRoom;