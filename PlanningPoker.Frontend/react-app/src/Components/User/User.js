import { useParams } from 'react-router';
import './User.scss';
import Card from '../Card/Card';

const User = ({userName}) =>{
    return(
        <div>
            <span>{userName}</span>
            <Card value='?'/>
        </div>
    )
}

export default User;