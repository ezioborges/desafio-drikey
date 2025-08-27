import type { MockUsersType } from './UserType';

export type responseTokenType = {
	token: string;
	roles: string[];
	user: MockUsersType;
};
