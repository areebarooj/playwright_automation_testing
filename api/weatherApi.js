import { config } from '../utils/config.js';

export async function fetchTemperature(request, city) {
    const url = `${config.baseUrl}?q=${city}&appid=${config.apiKey}&units=metric`;
    const response = await request.get(url);

    if (!response.ok()) {
        throw new Error(`Failed to fetch weather: ${response.status()}`);
    }

    const data = await response.json();
    return data.main.temp; 
}