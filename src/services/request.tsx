const apiUrl = import.meta.env.VITE_API_URL

export async function request(
    endpoint: string,
    method: "GET" | "POST" | "PATCH" | "DELETE",
    data: object | undefined,
    token: string,
    callback: (r: Response) => void,
    callback_error: (error: Error) => void
  ){
    try {
      const response = await fetch((apiUrl ?? `http://localhost:3333`)+endpoint, {
        method: method,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      
      // Checa se a resposta é ok (status 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Chama o callback passando a resposta
      callback(await response.json());
    } catch (error) {
      console.log("Ocorreu um erro na requisição:", error);
      // Chama o callback de erro passando o erro
      callback_error(error as Error);
    }
  }
    