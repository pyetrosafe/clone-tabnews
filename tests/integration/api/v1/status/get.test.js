test('GET to api/v1/status must be return 200 with status ok', async () => {
  const response = await fetch('http://localhost:3000/api/v1/status');
  const status = response.status;
  const data = await response.json();

  expect(status).toBe(200);
  expect(data).toEqual({ status: 'ok' });
});