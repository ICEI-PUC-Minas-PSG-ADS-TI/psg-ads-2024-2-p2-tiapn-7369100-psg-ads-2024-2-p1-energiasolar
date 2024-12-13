
# 7. Indicadores

## 7.1 Variação do número de atendimentos realizados mensalmente

**Objetivo:** 
Medir a variação do número de atendimentos realizados em um mês em comparação ao mês anterior

**Unidade de medida:** 
Percentual (%)

**Métrica:**  
total de atendimentos no mês atual - total de atendimentos do mês anterior / total de atendimentos do mês anterior * 100

**Periodicidade:** 
Mensal

**Responsável:** 
Setor de Suporte ao Cliente

**Fórmula:** 
(∑ Atendimentos do mês atual - ∑ Atendimentos do mês anterior) / ∑ Atendimentos do mês anterior * 100

**Meta:** 
Manter a variação abaixo de 5%

**Sentido:** 
Para cima 

**Exemplo:** 
No mês de novembro houve 45 atendimentos e no mês anterior houve 42, logo (45-42)/42 * 100 = 7,14% ou seja está fora da meta pois os atendimentos aumentaram em 7,14%

**Variáveis que permitem o cálculo:** 
1. Total de atendimentos realizados no mês atual
2. Total de atendimentos realizados no mês anterior

**Como e onde capturar as variáveis:** 
Através do banco de dados onde são registrados os atendimentos

**Usuários do indicador:** 
Gestores do Suporte ao Cliente, Gerência geral

### 7.1.1 Consulta SQL
```sql
SET @mes_atual = MONTH(CURRENT_DATE);
SET @mes_anterior = MONTH(DATE_SUB(CURRENT_DATE, INTERVAL 1 MONTH));

SELECT 
    ((COUNT(CASE WHEN MONTH(DATA) = @mes_atual THEN 1 END) -
      COUNT(CASE WHEN MONTH(DATA) = @mes_anterior THEN 1 END)) / 
    COUNT(CASE WHEN MONTH(DATA) = @mes_anterior THEN 1 END)) * 100 AS VariacaoPercentual
FROM atendimento_atende;
```
## 7.2 Variação na busca de empresas parceiras por clientes mensalmente

**Objetivo:** 
Obter a variação do número de clientes que buscaram uma empresa parceira no mês atual em relação ao mês anterior

**Unidade de medida:** 
Percentual (%)

**Métrica:** 
Percentual de variação de clientes que buscaram por empresas parceiras.

**Periodicidade:** 
Mensal

**Responsável:** 
Setor de Suporte ao Cliente

**Fórmula:** 
(∑ TAtual - ∑ TAnterior ) / ∑ TAnterior * 100
Onde
TAtual​ = Clientes que buscaram empresas parceiras no mês atual.
TAnterior = Clientes que buscaram empresas parceiras no mês anterior.

**Meta:** 
Aumento de 10% ao mês

**Sentido:** 
Para cima 

**Exemplo:** 
No mês de novembro houve 63 clientes buscaram por uma empresa parceira e no mês anterior houve 51, logo (63-51)/51 * 100 = 23,5% ou seja dentro da meta pois as buscas aumentaram em 23,5%

**Variáveis que permitem o cálculo:** 
1. Total de clientes que buscaram uma empresa parceira no mês atual,
2. Total de clientes que buscaram uma empresa parceira no mês anterior

**Como e onde capturar as variáveis:** 
Através do banco de dados que registra as buscas por empresas parceiras

**Usuários do indicador:** 
Gerência geral e Gerência de Parcerias

### 7.2.1 Consulta SQL
```sql
SET @mes_atual = MONTH(CURRENT_DATE);
SET @mes_anterior = MONTH(DATE_SUB(CURRENT_DATE, INTERVAL 1 MONTH));

SELECT ( 
        COUNT(DISTINCT CASE WHEN MONTH(DATA) = @mes_atual
        AND YEAR(DATA) = YEAR(CURRENT_DATE) THEN fk_Cliente_IDCliente END) 
        - 
        COUNT(DISTINCT CASE WHEN MONTH(DATA) = @mes_anterior
		AND YEAR(DATA) = YEAR(DATE_SUB(CURRENT_DATE, INTERVAL 1 MONTH)) THEN fk_Cliente_IDCliente END)) 
    / 
    COUNT(DISTINCT CASE WHEN MONTH(DATA) = @mes_anterior
	AND YEAR(DATA) = YEAR(DATE_SUB(CURRENT_DATE, INTERVAL 1 MONTH)) THEN fk_Cliente_IDCliente END) 
    * 100 AS VariacaoPercentual
FROM procura;
```

## 7.3 Índice de Resolução em Primeira Interacao (IRPI)

**Objetivo:**
Medir a eficiência do suporte ao cliente, avaliando a porcentagem de problemas resolvidos na primeira interação.

**Unidade de medida:**
Percentual (%)

**Métrica:**
(Número de problemas resolvidos na primeira interação / Total de atendimentos) * 100

**Periodicidade:**
Mensal

**Responsável:**
Setor de Suporte ao Cliente

**Fórmula:**
(IRPI = ∑ Problemas resolvidos na 1ª interação / ∑ Atendimentos totais) * 100

**Meta:**
Manter IRPI acima de 80% ao mês

**Sentido:**
Para cima

**Exemplo:**
Se 80 problemas foram resolvidos na primeira interação de 100 atendimentos, IRPI = (80/100) * 100 = 80%.

**Variáveis:**
1. Número de problemas resolvidos na primeira interação
2. Total de atendimentos

**Como e onde capturar as variáveis:** 
Banco de dados de atendimentos

**Usuários do indicador:** 
Gestores do Suporte ao Cliente, Gerência geral