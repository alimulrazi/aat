import { data } from '../../data/users';
import {
    getAllUsersJSON,
    getIndividualUsersJSON,
    getFilteredUsersJSON
} from '../../controllers/users';

const res = {
    send: jest.fn(),
    status: jest.fn(() => res),
    json: jest.fn(() => {})
};

describe("User Controller", () => {
    test('getAllUsersJSON should list all the users', () => {
        getAllUsersJSON(null, res)

        expect(res.status).toBeCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(data);
    });

    test('getIndividualUsersJSON should return single user', () => {
        getIndividualUsersJSON({
            params: {
                id: 1
            },
        }, res)
        
        expect(res.status).toBeCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(data[0]);
    });

    test('getUsersJSON should return specific users filter by keyword', () => {
        const response = getFilteredUsersJSON({
            query: {
                country: 'United States',
            },
        }, res)
        
        expect(res.status).toBeCalledWith(200);
        expect(res.json).toHaveBeenCalledWith([data[1], data[2], data[3]]);
    });
});
