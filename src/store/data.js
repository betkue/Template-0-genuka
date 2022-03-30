export const Memoire = {
    idCompany: 489,  //468 - 489
    User: {},
    lastLink:"",
    fetchCompany: async function compagny() {
        const response = await fetch(
            `https://dashboard.genuka.com/api/2021-10/companies/details/${this.idCompany}`
        );
        return await response.json();
    },
    fetchProducts: async function product() {
        const response = await fetch(
            `https://dashboard.genuka.com/api/2021-10/companies/${this.idCompany}/products`
        );
        return await response.json();
    },
    fetchCollections: async function product() {
        const response = await fetch(
            `https://dashboard.genuka.com/api/2021-10/companies/${this.idCompany}/collections`
        );
        return await response.json();
    }
    
}



