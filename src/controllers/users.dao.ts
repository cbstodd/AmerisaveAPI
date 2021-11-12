import { CreateUserDto } from '../models/create.user.dto';
import { PatchUserDto } from '../models/patch.user.dto';
import { PutUserDto } from '../models/put.user.dto';

import shortid from 'shortid';
import debug from 'debug';


const log: debug.IDebugger = debug('app:in-memory-dao');

class UsersDao {
    users: Array<CreateUserDto>[] = [];

    constructor(users: Array<CreateUserDto>[]) {

        log('Created new instance of UsersDao');
    }
}

const allUsers: UsersDao = Array<UsersDao[]>([]);

const getUsers = () => allUsers.users;

const getUserById = (userId: string) => {
    allUsers.users.map((users) => {
        console.log(users);
        users.forEach((user) => {
            console.log(user);
            console.log(userId);
            if (user.id === userId) return user;
        });
    });
};

const addUser = (user: CreateUserDto) => {
    user.id = shortid.generate();
    allUsers.push(user);
    return user.id;
};
export default new UsersDao();

putUserById(userId: string, user: UsersDao) {
    const objIndex = this.users.findIndex(
      (obj: { id: string }) => obj.id === userId
    );
    this.users.splice(objIndex, 1, user);
    return `${user.id} updated via put`;
}


patchUserById(userId user) {
    const objIndex = this.users.findIndex((obj) => {
        id: string
    }


      (obj: {  }) => obj.id === userId
    );
    let currentUser = this.users[objIndex];
    const allowedPatchFields = [
        'id',
        'updatedAt',
        'createdAt',
        'email',
        'firstNam',
        'lastName',
        'permissionLevel',
    ];
    for (let field of allowedPatchFields) {
        if (field in user) {
            // @ts-ignore
            currentUser[field] = user[field];
        }
    }
    this.users.splice(objIndex, 1, currentUser);
    return `${user.id} patched`;
}
