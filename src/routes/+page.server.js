import fetchJson from "$lib/fetch-json"

export async function load() {
  const url = 'https://fdnd.directus.app/items/person?filter={"id":57}';

  const response = await fetchJson(url)

  return {
    persons: response.data[0],
  }
}