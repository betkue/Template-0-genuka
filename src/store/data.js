export const Memoire = {
    idCompany: 489,
    lastLink:"",
    cart : [],
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
    
}



