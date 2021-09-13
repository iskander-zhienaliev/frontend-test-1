export interface User {
  name: string;
  role: UserRole;
}

export enum UserRole {
  ADMIN = "admin",
  DEV = "dev"
}
