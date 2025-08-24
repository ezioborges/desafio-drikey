import type { UserType } from '../types/UserType';

export const users: UserType[] = [
	{
		id: '7fe9e09d-9472-4e0e-94a1-7710d5b60b4b',
		email: 'admin@drikey.com',
		password: 'Senhaforte12@',
		firstName: 'Admin',
		secondName: 'Admin',
		avatarUrl: '../assets/avatar.png',
		role: 'admin',
	},
	{
		id: '67707ed1-1cb5-4153-beea-ae466c88d441',
		email: 'user@drikey.com',
		password: 'Senhaforte12@',
		firstName: 'User',
		secondName: 'User',
		avatarUrl: '../assets/avatar.png',
		role: 'user',
	},
];
