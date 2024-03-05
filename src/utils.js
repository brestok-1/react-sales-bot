export function getReport(messages) {
    return fetch('https://brestok-sales-bot-backend.hf.space/report', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'history': messages})
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .catch(error => {
        console.error('Error:', error);
        throw error;
    });
}

export function generateUUID() {
    const arr = new Uint8Array(16);
    window.crypto.getRandomValues(arr);

    arr[6] = (arr[6] & 0x0f) | 0x40; // Версия 4
    arr[8] = (arr[8] & 0x3f) | 0x80; // Вариант 1 0xx

    return ([...arr].map((b, i) =>
        (i === 4 || i === 6 || i === 8 || i === 10 ? "-" : "") + b.toString(16).padStart(2, "0")
    ).join(""));
}
