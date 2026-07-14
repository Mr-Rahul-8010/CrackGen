export async function getMessage(){
    const response = await fetch(`/api/message`);
    const data = await response.json();
    return data;
}