import { response } from "express";
import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private users: User[];

    private static INSTANCE: UsersRepository;

    private constructor() {
        this.users = [];
    }

    public static getInstance(): UsersRepository {
        if (!UsersRepository.INSTANCE) {
            UsersRepository.INSTANCE = new UsersRepository();
        }

        return UsersRepository.INSTANCE;
    }

    create({ name, email }: ICreateUserDTO): User {
        const user = new User();

        Object.assign(user, {
            name,
            email,
            created_at: new Date(),
            updated_at: new Date(),
        });

        this.users.push(user);

        return user;
    }

    findById(id: string): User | undefined {
        return undefined;
    }

    findByEmail(email: string): User | undefined {
        return undefined;
    }

    turnAdmin(receivedUser: User): User {
        return undefined;
    }

    list(): User[] {
        return this.users;
    }
}

export { UsersRepository };
