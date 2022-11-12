# Node Big Stream

Estudo sobre a leitura e processamento de grandes arquivos utilizando Streams do NodeJs (v16.13.1).
Foi realizado alguns testes baseado nesses dois links:

1. https://geshan.com.np/blog/2021/10/nodejs-read-file-line-by-line/
2. https://stackoverflow.com/questions/52785580/read-a-file-line-by-line-using-lambda-s3

Os testes realizados foram:

1. Ler e processar um arquivo no disco da própria máquina.
2. Ler e processar um arquivo do S3.

> Os dois foram realizando Streams do NodeJs

## Disco

Rode o script `generate-file.js` para gerar um arquivo `.csv` de 83Mb.
