# Fuel Mentor

A relação de consumo entre álcool e gasolina é de 70%, ou seja, se temos o mesmo volume de combustível, a energia gerada por 70% do consumo de gasolina é o mesmo de 100% do consumo de álcool. <br><br>
Dado o preço da gasolina e álcool em sua região, o Fuel Mentor recomendará qual combustível é mais vantajoso, com base no cálculo da relação de consumo.

## Como usar

1. Faça o download dos arquivos e abra o index.html.
1. Insira os valores (por litro) de álcool e gasolina que deseja comparar.
1. Clique no botão de "Calcular" para obter o resultado.
1. A aplicação retornará a opção mais vantajosa baseada no cálculo de álcool / gasolina ou uma mensagem de erro.
1. Clique nos campos para limpar as entradas ou clique no botão de "Limpar" para limpar todos os campos.

![calcCombPage](https://user-images.githubusercontent.com/62827811/99071458-edcbb200-2590-11eb-9443-58f751f48d55.png)

Há 4 opções de retorno ao inserir dados:

* _Gasolina!_ - Retornado se a divisão resultar em relação acima de 0,7.
* _Álcool!_ - Retornado se a divisão resultar em relação abaixo de 0,7.
* _Use qualquer um!_ - Retornado se a divisão resultar em relação igual a 0,7.
* _Use valores acima de zero!!_ - Retornado se o usuário(a) inserir caracteres, números negativos, zero ou valores vazios.

## Tecnologias

Página web criada com **javascript** puro e **materialize** para a responsividade.
