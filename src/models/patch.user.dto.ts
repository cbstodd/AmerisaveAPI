// PUT or UPDATE
export class PatchUserDto {
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
