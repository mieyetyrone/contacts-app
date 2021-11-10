export async function getAllContacts() {

    const response = await fetch(`/api/contacts`);
    return await response.json();
}

export async function createContact(data) {
    const response = await fetch(`/api/contacts`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}