---
title: Guia de Estilo Markdown
published: 2025-03-08
updated: 2025-03-23
tags:
  - Guia
pin: 98
toc: false
lang: pt
abbrlink: markdown-style-guide
---

Aqui estão alguns exemplos básicos de sintaxe Markdown e seus efeitos estilísticos em Retypeset.

## Cabeçalhos

Para criar um cabeçalho, adicione sinais de número `#` na frente de uma palavra ou frase. O número de sinais de número que você usa deve corresponder ao nível do cabeçalho.

### Sintaxe

```
# Cabeçalho 1
## Cabeçalho 2
### Cabeçalho 3
#### Cabeçalho 4
##### Cabeçalho 5
###### Cabeçalho 6
```

### Saída

# Cabeçalho 1
## Cabeçalho 2
### Cabeçalho 3
#### Cabeçalho 4
##### Cabeçalho 5
###### Cabeçalho 6

## Parágrafo

Para criar parágrafos, use uma linha em branco para separar uma ou mais linhas de texto.

### Sintaxe

```
Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.
```

### Saída

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

Itatur? Quiatae cullecum rem ent aut odis in re eossequodi nonsequ idebis ne sapicia is sinveli squiatum, core et que aut hariosam ex eat.

## Imagens

Para adicionar uma imagem, adicione um ponto de exclamação `!`, seguido por um texto alternativo entre colchetes `[]` e o caminho ou URL para o recurso de imagem entre parênteses `()`.

### Sintaxe

```
![Image Description](./full/or/relative/path/of/image)
```

### Saída

![Descrição da Imagem](https://image.radishzz.cc/picsmaller/03.webp)

## Blockquotes

Para criar uma citação em bloco, adicione um `>` na frente de um parágrafo. Para criar uma citação em bloco com vários parágrafos, adicione um símbolo `>` às linhas vazias entre os parágrafos. Para citar fontes, você pode usar as tags `<cite>` ou `<footer>` para referências bibliográficas, enquanto as notas de rodapé podem ser inseridas usando a sintaxe `[^1]` ou `[^note]`.

### Blockquote com múltiplos parágrafos

#### Sintaxe

```markdown
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
>
> **Note** que você pode usar _sintaxe Markdown_ dentro de um blockquote.
```

#### Saída

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
>
> **Note** que você pode usar _sintaxe Markdown_ dentro de um blockquote.

### Blockquote citando fontes

#### Sintaxe

```markdown
> Não se comunique compartilhando memória, compartilhe memória comunicando.
>
> — <cite>Rob Pike[^1]</cite>

[^1]: A citação acima foi extraída da [palestra](https://www.youtube.com/watch?v=PAAkCSZUG1c) de Rob Pike durante o Gopherfest, 18 de novembro de 2015.
```

#### Saída

> Não se comunique compartilhando memória, compartilhe memória comunicando.
>
> — <cite>Rob Pike[^1]</cite>

[^1]: A citação acima foi extraída da [palestra](https://www.youtube.com/watch?v=PAAkCSZUG1c) de Rob Pike durante o Gopherfest, 18 de novembro de 2015.

## Tabelas

Para adicionar uma tabela, use três ou mais hífens `---` para criar o cabeçalho de cada coluna e use pipes `|` para separar cada coluna.

### Syntax

```markdown
| Itálico   | Negrito     | Código   |
| --------- | -------- | ------ |
| _itálico_ | **negrito** | `código` |
| _itálico_ | **negrito** | `código` |
```

### Saída

| Itálico   | Negrito     | Código   |
| --------- | -------- | ------ |
| _itálico_ | **negrito** | `código` |
| _itálico_ | **negrito** | `código` |

## Blocos de Código

Para criar um bloco de código, adicione três backticks ```` ``` ```` no início e no final do seu código. Você pode indicar a linguagem de programação que está sendo usada após os backticks de abertura para indicar como colorir e estilizar seu código, por exemplo, html, javascript, css, markdown etc.

### Sintaxe

````markdown
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Documento HTML5 de Exemplo</title>
  </head>
  <body>
    <p>Teste</p>
  </body>
</html>
```
````

### Saída

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Documento HTML5 de Exemplo</title>
  </head>
  <body>
    <p>Teste</p>
  </body>
</html>
```

## Tipos de Lista

### Lista Ordenada

#### Sintaxe

```markdown
1. Primeiro item
2. Segundo item
3. Terceiro item
```

#### Saída

1. Primeiro item
2. Segundo item
3. Terceiro item

### Lista Não Ordenada

#### Sintaxe

```markdown
- Item da lista
- Outro item
- E outro item
```

#### Saída

- Item da lista
- Outro item
- E outro item

### Lista Aninhada

#### Sintaxe

```markdown
- Fruta
  - Maçã
  - Laranja
  - Banana
- Laticínios
  - Leite
  - Queijo
```

#### Saída

- Fruta
  - Maçã
  - Laranja
  - Banana
- Laticínios
  - Leite
  - Queijo

## Outros Elementos

Incluindo sobrescrito `<sup>`, subscrito `<sub>`, abreviação `<abbr>`, tachado `<del>`, sublinhado ondulado `<u>`, entrada de teclado `<kbd>` e realce `<mark>`.

### Sintaxe

```html
H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

<abbr title="Graphics Interchange Format">GIF</abbr> é um formato de imagem bitmap.

Bons escritores sempre verificam erros de <u title="ortografia">ortografia</u>.

Pressione <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> para encerrar a sessão.

Não há <del>nada</del> nenhum código bom ou ruim, mas executá-lo então o define.

A maioria das <mark>salamandras</mark> são noturnas e caçam insetos, minhocas e outras pequenas criaturas.
```

### Saída

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

<abbr title="Graphics Interchange Format">GIF</abbr> é um formato de imagem bitmap.

Bons escritores sempre verificam erros de <u title="ortografia">ortografia</u>.

Pressione <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>Delete</kbd> para encerrar a sessão.

Não há <del>nada</del> nenhum código bom ou ruim, mas executá-lo então o define.

A maioria das <mark>salamandras</mark> são noturnas e caçam insetos, minhocas e outras pequenas criaturas.
```.
