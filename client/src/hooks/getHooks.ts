

class GetHooks {

    readonly _apiBase: string;

    constructor() {
        this._apiBase = '/about-page-service';
    }

    async getResource(url: string):Promise<any> {
        const res = await fetch(`${this._apiBase}${url}`);
        console.log(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

    async getWorkList():Promise<any> {
        return this.getResource(`/work-list-api/work-list`);
    }

    async getSkillList():Promise<any> {
        return this.getResource(`/customer-api/skills`);
    }
}

export default GetHooks;