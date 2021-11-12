// PUT or UPDATE
export class PutUserDto {
    constructor(
      public id: string,
      public updatedAt: number = Date.now(),
      public createdAt: number,
      public email: string,
      public firstName: string,
      public lastName: string,
      public permissionLevel: number,
      public password?: string,
    ) {
    }
}

/* COULD USE an INTERFACE but It's better to use Classes with database
 Modeling because 1. have more control/power 2. better errors since it's
 Built into the code not just saved in TS memory. */


// export interface PutUserDto {
//     updatedAt: number;
//     createdAt: number;
//     id: string;
//     email: string;
//     password: string;
//     firstName: string;
//     lastName: string;
//     permissionLevel: number;
// }
