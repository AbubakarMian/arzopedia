import { SET_USER, LOGOUT_USER } from '../constants';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
    id: 0,
    name: 'Guest',
    email: 'guest@mail.com',
    access_token: 'EvcGFyZWl0LWFwcC1hZG1pbjo4NmRmMjZkMi01NjE1LTRiOTAtYTBjYy1jMDM5OWJiasdYAnHYzYNCg=='
}
const userReducer = (state = initialState, action) =>  {
   
     switch (action.type) {

        case SET_USER:
            AsyncStorage.setItem('User',JSON.stringify(state));


            return {
                ...state,
                id: action.value.id,
                name: action.value.name,
                email: action.value.email,
                access_token: action.value.access_token
            }
            break;
        case LOGOUT_USER:

            return {
                ...state,
                id: 0,
                name: 'Guest',
                email: 'guest@mail.com',
                access_token: 'guestAccessToken'
            }
            break;

        default:
            return state;
    }
}
export default userReducer;
