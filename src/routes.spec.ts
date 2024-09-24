import axios from 'axios';

describe('API tests', () => {
  it('Deve retornar uma resposta', async () => {
    const response = await axios.post('http://localhost:3333/sign-in');
    const output = response.data;
    expect(output.foo).toBe('bar');
  });
});
