export interface UserInfo
{
    login: string;
    roles: string[];
}

export interface MsalAccessToken
{
    family_name?: string;
    given_name?: string;
}
