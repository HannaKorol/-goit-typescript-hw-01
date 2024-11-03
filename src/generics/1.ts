//T дозволяє вказати тип даних, що очікуються при виклику функції.
//Коли викликаю fetchData, можу вказати, який тип даних я хочу отримати.

import axios from "axios";

async function fetchData(url: string): Promise<T> {
  // Promise<T> покращує типізацію та безпеку  коду.
  try {
    const response = await axios.get<T>(url); // Вказуємо тип T для axios.get
    return response.data; // Повертаємо дані типу T
  } catch (error: any) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}
