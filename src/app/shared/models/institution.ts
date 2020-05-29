import { InstitutionUser } from './institution-user';

export interface Institution {
    id?: any;
    regUser: InstitutionUser;
    name: string;
    director: string;
    address: string;
    studentsCount: string;
    areasCount: string;
    email: string;
    phone: string;
}
