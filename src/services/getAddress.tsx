import axios from "axios"

export async function getAddress(cep: string): Promise<any> {
    try {
        const response = await axios({
            method: 'get',
            url: `https://viacep.com.br/ws/${cep}/json/`,
        });
        return response.data;
    } catch (error) {
        console.error("Transaction failed:", error);
        throw new Error("Failed to retrieve address.");
    }
}