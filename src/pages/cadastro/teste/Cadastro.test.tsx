import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Cadastro from '../index'; // ajuste o caminho conforme necessário
import { api } from '../../../services/axios'; // ajuste o caminho conforme sua estrutura

// Simula a API
jest.mock('../../../services/axios');
const mockedApi = api as jest.Mocked<typeof api>;

describe('Tela de Cadastro', () => {
    it('deve preencher o formulário e realizar o cadastro com sucesso', async () => {
      // Mock da API para simular sucesso
      mockedApi.post.mockResolvedValueOnce({
        status: 201,
        data: {
          message: 'Successfully created User',
          response: {
            id: 1,
            email: 'test@gmail.com',
            name: 'Test User',
            birthDate: '1990-01-01T00:00:00.000Z',
            profession: 'Engineer',
            salary: 5000,
          },
        },
      });
  
      // Renderiza o componente
      const { getByPlaceholderText, getByText } = render(<Cadastro />);
  
      // Preenche o formulário
      fireEvent.changeText(getByPlaceholderText('E-mail'), 'test@gmail.com');
      fireEvent.changeText(getByPlaceholderText('Nome'), 'Test User');
      fireEvent.changeText(getByPlaceholderText('Nascimento'), '01/01/1990');
      fireEvent.changeText(getByPlaceholderText('Profissão'), 'Engineer');
      fireEvent.changeText(getByPlaceholderText('Salário'), '5000');
      fireEvent.changeText(getByPlaceholderText('Senha'), '123456');
      fireEvent.changeText(getByPlaceholderText('Confirme sua Senha'), '123456');
  
      // Submete o formulário
      fireEvent.press(getByText('CADASTRAR-SE'));
  
      // Verifica se a API foi chamada com os dados corretos
      await waitFor(() => {
        expect(mockedApi.post).toHaveBeenCalledWith('/user/create', {
          email: 'test@gmail.com',
          password: '123456',
          name: 'Test User',
          birthDate: new Date('1990-01-01T00:00:00.000Z'),
          profession: 'Engineer',
          salary: 5000,
        });
      });
  
      // Verifica se o alerta de sucesso é exibido
      await waitFor(() => {
        expect(getByText('Sucesso')).toBeTruthy();
      });
    }, 15000); // Aumenta o tempo limite para 15 segundos
  });
  
