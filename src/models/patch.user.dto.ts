import { PutUserDto } from './put.user.dto';
// Adding PutUserDto as a partial Type gives it the same features.
export interface PatchUserDto extends Partial<PutUserDto> {}
