# 💱 Converter-Money

Um aplicativo simples e estilizado para converter valores entre **Real Brasileiro (BRL)**, **Dólar Americano (USD)**, **Euro (EUR)** e **Franco-Suíço (CHF)** em ambas as direções.

---

## 🚀 Funcionalidades
- [Seleção de moeda de origem e destino](ca://s?q=Selecao_de_moedas_em_projeto).
- [Entrada de valor](ca://s?q=Entrada_de_valor_em_projeto) adaptável conforme a moeda escolhida.
- [Conversão bidirecional](ca://s?q=Conversao_reversa_em_projeto) entre todas as combinações possíveis.
- [Exibição dinâmica](ca://s?q=Exibicao_de_resultado_em_projeto) de nome, bandeira e ícone da moeda.
- Interface estilizada com [logo animado](ca://s?q=Logo_animado_em_projeto), cores modernas e responsividade.

---

## 🛠️ Tecnologias utilizadas
- [HTML5](ca://s?q=HTML5_em_projeto) → Estrutura da aplicação.
- [CSS3](ca://s?q=CSS3_em_projeto) → Estilização, paleta de cores e responsividade.
- [JavaScript](ca://s?q=JavaScript_em_projeto) → Lógica de conversão, formatação e manipulação do DOM.

---

## 🔑 Lógica de conversão
- Objeto `rates` define taxas de câmbio entre todas as moedas.
- Uso de `Intl.NumberFormat` para formatação correta de valores conforme moeda.
- Atualização dinâmica dos elementos HTML:
  - `.currency-value-to-convert` → mostra o valor original.
  - `.currency-value` → mostra o valor convertido.
  - `.currency-img`, `#currency-name`, `#currency-from-name` → mudam conforme seleção.
- Eventos:
  - `click` no botão → executa conversão.
  - `change` nos selects → atualiza visualização de bandeiras e nomes.

---

## 🎨 Estilo e design
- Paleta principal: violeta `#772FD3` e cinza claro `#F4F4F4`.
- Fonte [Roboto](ca://s?q=Tipografia_em_projeto) importada do Google Fonts.
- Logo animado centralizado no topo.
- Inputs e selects com bordas arredondadas e tipografia em negrito.
- Botão com sombra, efeitos `hover` e `active`.
- Caixa de resultados com borda violeta e `drop-shadow`.

---

## 📦 Instalação
Clone o repositório e abra o projeto no navegador:

```bash
git clone https://github.com/seuusuario/converter-money.git
cd converter-money



 ▶️ Uso

1. Digite o valor em Real.

2. Escolha a moeda para conversão.

3. Clique em Converter.

4. Veja o resultado exibido na caixa abaixo.

 📧 Contato

- Autor: Luis  
- GitHub: @Luis-Abal  
- Email: Luis.Abal.318798@gmail.com


