export const getContent = () => {
  return fetch('https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

