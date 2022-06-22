const API_KEY = 'a32fabe21f4751b130f82477d3cdc472';

export async function getTrascript(symbol, year, quarter) {
    const url = `https://financialmodelingprep.com/api/v3/earning_call_transcript/${symbol}?quarter=${quarter}&year=${year}&apikey=${API_KEY}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
    const responseData = await response.json();
    return responseData?.[0]?.content;
}