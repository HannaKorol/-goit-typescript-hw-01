//Record<UserRole, string>: Це вказує, що об'єкт RoleDescription повинен мати всі ключі з UserRole і кожен ключ повинен мати значення типу string.

export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type UserRoleDescription = Record<UserRole, string>;

const RoleDescription: UserRoleDescription = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
