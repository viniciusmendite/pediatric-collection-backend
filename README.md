## Pediatric Collection: Back-end

<div style="text-align: justify">&emsp; Estou desenvolvendo este projeto como voluntário para uma turma de faculdade de enfermagem. O sistema consiste em armazenar algumas informações clínicas, como dados do paciente, contato e nome do médico.</div><br/>

<div style="text-align: justify">&emsp; Para esse projeto fiz toda parte programática, o <b>back-end (feito em NodeJS)</b> e o <b>mobile (feito em React Native, ainda em produção)</b>.</div><br/>

<div style="text-align: justify">&emsp; Neste sistema utilizei o banco de dados <b>MongoDB</b>.</div>

<div style="text-align: justify">&emsp; <b>Aí surge a pergunta:</b> <i>Porque você salvou os dados em um banco noSQL, sendo que o relacionamente é de N-N (muitos para muitos) ?</i></div>

<div style="text-align: justify">&emsp; <b>Minha resposta:</b> <i>Inicialmente pensei em utilizar um banco relacional, que no caso usaria o PostgreSQL, mas por razão de tempo, iria demorar mais um pouco e não teria certeza se conseguiria entregar no prazo.</i></div>

### Estrutura e validação de campos

<div style="text-align: justify">&emsp;  Para ter maior performance na aplicação no momento da exibição das informações, utilizei a biblioteca <b>mongoose-paginate</b> para fazer essa limitação, que serão de 10 por vez.</div><br/>

<div style="text-align: justify">&emsp; Os dados ficarão salvos da seguinte forma no mongoDB:</div>

    {
      "patient": "João Da Silva",
      "responsible": "José da Silva",
      "pulse": 10,
      "saturation": 58,
      "respiration": 40,
      "pressure": "12/8",
      "address": "Rua Antônio Botelho 04",
      "neighborhood": "Centro",
      "city": "Apiacá",
      "telephone": "(28) 98816 4797",
      "medic": "Tadeu Peres",
      "date": "08/05/2020",
      "hour": "17:23"
    }

<div style="text-align: justify">&emsp; Para garantir a inserção correta dos dados, fiz a validação dos campos utilizando a biblioteca <b>Celebrate</b>.</div>

    routes.post(
      "/consultation",
      celebrate({
        [Segments.BODY]: Joi.object().keys({
          patient: Joi.string().required(),
          responsible: Joi.string().required(),
          pulse: Joi.number(),
          saturation: Joi.number(),
          respiration: Joi.number(),
          pressure: Joi.string(),
          address: Joi.string(),
          neighborhood: Joi.string(),
          city: Joi.string(),
          telephone: Joi.string(),
          medic: Joi.string().required(),
          date: Joi.string().required(),
          hour: Joi.string(),
        }),
      }),
      ConsultationController.store
    );

  <div style="text-align: justify">&emsp; E não menos importante, para fazer a chamada de rotas durante o desenvolvimento utilizei o <b>Insomnia</b>.</div>

### Bibliotecas utilizadas

- celebrate
- cors
- dotenv
- express
- mongoose
- mongoose-paginate
- nodemon (apenas em desenvolvimento)
