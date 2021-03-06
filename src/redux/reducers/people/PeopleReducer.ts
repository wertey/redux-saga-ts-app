import { LOAD_PEOPLE, LOAD_PEOPLE_FAILURE, LOAD_PEOPLE_SUCCESS } from './PeopleActions';
import {IPeopleState, PeopleActions} from '../../../model/people/type';

const initialState: IPeopleState = {
    page: 1,
    search: '',
    loading: false,
    error: null,
    data: null,
};

export default function peopleReducer(state = initialState, action: PeopleActions) {
    switch (action.type) {
        case LOAD_PEOPLE: {
            const { page, search } = action.payload;
            return {
                ...state,
                loading: true,
                page,
                search,
            }
        }

        case LOAD_PEOPLE_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload,
            }
        }

        case LOAD_PEOPLE_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        }

        default:
            return state;
    }
}
