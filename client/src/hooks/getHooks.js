export default class GetHooks {

    constructor() {
        this._apiBase = '/about-page-service';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

    getWorkList = async () => {
        return this.getResource(`/work-list-api/work-list`);
    }

}