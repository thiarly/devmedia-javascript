# algoritmo para calcular o valor do IPVA
import time

passeio_gasolisa = 4
camionte_gasolina = 3
onibus_carro_alcool = 2
caminhao_taxi_gas_eletricos = 1
veiculo_locacao_moto = 0.5

print('-' * 33)
print('Bem vindo ao calculador de IPVA')
print('-' * 33)
print('\n')
print('*' * 33)
print('Selecione o tipo de veículo:')
print('*' * 33)
print('1 - Carro de passeio movido à gasolina')
print('2 - Camionete ou veículo bicombustível')
print('3 - Ônibus ou carro movido à álcool')
print('4 - Caminhão, táxi, automóveis com gás ou elétricos')
print('5 - Veículo de locação guarde ou motos')
time.sleep(1)
print('\n')
opcao_veiculo = int(input('Digite a opção desejada: '))
while opcao_veiculo <1 or opcao_veiculo > 5:
    print('Opção inválida')
    opcao_veiculo = int(input('Digite a opção desejada: '))
    
valor_veiculo = float(input('Digite o valor do veículo: '))

if opcao_veiculo == 1:
    ipva = valor_veiculo * passeio_gasolisa / 100
elif opcao_veiculo == 2:
    ipva = valor_veiculo * camionte_gasolina / 100
elif opcao_veiculo == 3:
    ipva = valor_veiculo * onibus_carro_alcool / 100
elif opcao_veiculo == 4:
    ipva = valor_veiculo * caminhao_taxi_gas_eletricos / 100
else:
    ipva = valor_veiculo * veiculo_locacao_moto / 100

print('O valor do IPVA é: R$ {:.2f}'.format(ipva))

