// CREATE or NEW
export class CreateUserDto {
    constructor(
      public id: string,
      public createdAt: number,
      public updatedAt: number,
      public email: string,
      public password: string,
      public firstName?: string,
      public lastName?: string,
      public permissionLevel?: number,
    ) {
    }
}

/* COULD USE an INTERFACE but It's better to use Classes with database
 Modeling because 1. have more control/power 2. better errors since it's
 Built into the code not just saved in TS memory. */


// export interface CreateUserDto {
//     createdAt: number;
//     updatedAt: number;
//     id: string;
//     email: string;
//     password: string;
//     firstName?: string;
//     lastName?: string;
//     permissionLevel?: number;
// }
