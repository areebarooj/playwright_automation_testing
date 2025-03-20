import { test, expect } from '@playwright/test';
import { fetchTemperature } from '../api/weatherApi.js';

test('Verify Islamabad temperature using OpenWeather API', async ({ request }) => {
    const city = 'Islamabad';

    const temperature = await fetchTemperature(request, city);
    console.log(`Temperature in ${city}: ${temperature}°C`);

    expect(temperature).not.toBeNull();
    expect(typeof temperature).toBe('number');
});