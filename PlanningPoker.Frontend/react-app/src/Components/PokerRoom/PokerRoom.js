import './PokerRoom.scss';
import Card from '../Card/Card';
import User from '../User/User';
import {useParams} from 'react-router-dom';

const PokerRoom = () => {
    let { roomName } = useParams();
    let { userName } = useParams();
    let { isScrumMaster } = useParams();
    let cards = [];
    for (var i = 0; i < 10; i++) {
        cards.push(<Card value={i}/>);
    }
    let users = [];
    for (var i = 0; i < 4; i++) {
        users.push(<User userName={"John"+i}/>);
    }
    return (
        <div className='pokerRoomBox'>
            <div>
                <h1>Poker Room - {roomName}</h1>
                <h2>{userName} - {isScrumMaster}</h2>
            </div>
            
            <h2>Result</h2>
            <div className='pokerRoomResultSet'>
                {/* Show the users and their cards */}
                {users}
            </div>

            <h2>Choose</h2>
            <div className='pokerRoomCardSet'>
                {/* The user can select his cards */}
                {cards}
            </div>

        </div>
    );
}

export default PokerRoom;