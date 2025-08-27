import type { MockUsersType } from '../types/UserType';

export const mockUsers: MockUsersType[] = [
	{
		id: '7fe9e09d-9472-4e0e-94a1-7710d5b60b4b',
		email: 'admin@drikey.com',
		password: '123456',
		firstName: 'Admin',
		secondName: 'Admin',
		avatarUrl: '../assets/avatar.png',
		roles: ['admin', 'user'],
	},
	{
		id: '67707ed1-1cb5-4153-beea-ae466c88d441',
		email: 'consumer@drikey.com',
		password: 'Senhaforte12@',
		firstName: 'User',
		secondName: 'User',
		avatarUrl: '../assets/avatar.png',
		roles: ['user'],
	},
	{
		id: '9b11b676-48ae-4ba7-9323-6ca51e6a1c8c',
		email: 'unauthorized@unauthorized.com',
		password: 'Senhaforte12@',
		firstName: 'unauthorized',
		secondName: 'User',
		avatarUrl: '../assets/avatar.png',
		roles: ['unauthorized'],
	},
];
