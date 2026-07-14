export async function getMessage(){
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/message`);
    const data = await response.json();
    return data;
}