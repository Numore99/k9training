# K9 TRAINING - Site

Site estático de adestramento canino. Não precisa de npm, build ou servidor.
Você pode publicar arrastando a pasta para Hostinger, Vercel ou Netlify, e também funciona abrindo `index.html` com dois cliques.

---

## O Que Editar

Quase tudo muda em um único arquivo:

```text
lib/manifest.js
```

Abra esse arquivo com o Bloco de Notas ou qualquer editor de texto e altere o que está depois dos dois pontos `:`, sem remover as aspas `""` nem as vírgulas `,`.

### 1. WhatsApp

Procure esta linha e coloque seu número apenas com dígitos e código do país, sem `+` e sem espaços:

```js
whatsapp: "550000000000",
whatsappDisplay: "+55 00 00000-0000",
```

### 2. Marca, Instagram, Cidade e Horário

```js
name: "K9 TRAINING",
slogan: "Disciplina, vínculo e controle real.",
instagram: "k9training",
location: "Sua cidade · Brasil",
hours: "Segunda a sábado · 08:00 - 20:00",
```

### 3. Serviços e Planos

Em `services: [ ... ]` e `plans: [ ... ]`, você pode mudar nomes, textos e botões.
Para adicionar um item, copie um bloco `{ ... }` completo, cole antes do `]` final e separe com vírgula.

Depois de editar, salve o arquivo e recarregue a página com F5.

---

## Fotos

Coloque as imagens nesta pasta:

```text
assets/img/
```

Nomes que o site procura:

- `arte-marcelo.jpeg` - arte grande da capa
- `hero.jpg` - alternativa caso queira trocar a capa depois
- `k9-1.jpg` até `k9-9.jpg` - fotos da galeria

Se uma foto ainda não existir, o site mostra um marcador e não quebra.
Formato recomendado: `.jpg` ou `.webp`, com menos de 400 KB por foto.

Créditos de fotos de stock, se usar: `assets/credits.json`.

---

## Publicar o Site

### Opção A - Hostinger

1. Entre no Administrador de Arquivos da Hostinger.
2. Abra a pasta `public_html`.
3. Envie todo o conteúdo desta pasta, incluindo `index.html`, `styles.css`, `main.js`, `lib/`, `assets/` e `.htaccess`.
4. Acesse seu domínio.

### Opção B - Vercel / Netlify

1. Entre em vercel.com ou netlify.com.
2. Arraste a pasta completa para a área de upload ou conecte seu repositório.
3. Não precisa configurar build.

### Opção C - Testar no Computador

Dê dois cliques em `index.html`. Ele abre no navegador.
O formulário e o WhatsApp funcionam da mesma forma.

---

## Estrutura

```text
index.html        Início, capa e galeria
metodo.html       Método
servicos.html    Serviços e problemas comuns
processo.html      Processo de trabalho
planos.html       Planos
contato.html     Formulário e avaliação
styles.css        Design
main.js           Comportamento, animações, WhatsApp e formulário
lib/manifest.js   Dados editáveis
assets/img/       Fotos
assets/credits.json  Créditos de fotos
.htaccess         Configuração para Hostinger
```

---

## Notas

- O formulário não envia e-mails nem usa servidor: ele monta uma mensagem e abre o WhatsApp.
- Se um `.html` abrir sem estilo, confira se `styles.css` e `main.js` estão na mesma pasta.
- O site foi pensado para celular primeiro e depois adaptado para desktop.

Feito para K9 Training · 2026.

