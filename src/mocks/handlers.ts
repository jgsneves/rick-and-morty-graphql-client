import { graphql } from 'msw';

const characters = graphql.query('Characters', (req, res, ctx) => {
  const { page } = req.variables;
  if (page === 1) {
    return res(
      ctx.data({
        characters: {
          info: {
            __typename: 'Info',
            pages: 10,
            next: 2,
          },
          results: [
            {
              __typename: 'Characters',
              name: 'João Neves',
              origin: {
                __typename: 'Location',
                name: 'Salvador',
              },
              location: {
                __typename: 'Location',
                name: 'Salvador',
              },
              image: 'image.png',
              episode: [{ __typename: 'Episode', name: 'Pilot' }],
            },
            {
              name: 'José Santos',
              origin: {
                __typename: 'Location',
                name: 'Rio de Janeiro',
              },
              location: {
                __typename: 'Location',
                name: 'Rio de Janeiro',
              },
              image: 'image.png',
              episode: [
                { __typename: 'Episode', name: 'Pilot' },
                { __typename: 'Episode', name: 'Ep2' },
              ],
            },
          ],
        },
      }),
    );
  }
  return res(
    ctx.errors([
      {
        message: 'Houve algum erro de conexão. Tente novamente',
      },
    ]),
  );
});

const episodes = graphql.query('Episodes', (req, res, ctx) => {
  const { page } = req.variables;

  if (page === 1) {
    return res(
      ctx.data({
        episodes: {
          __typename: 'Episodes',
          info: {
            __typename: 'Info',
            pages: 10,
            next: 2,
          },
          results: [
            {
              __typename: 'Episode',
              name: 'A casa de papel',
              air_date: '25 de dezembro',
              characters: [
                {
                  __typename: 'Character',
                  name: 'João Neves',
                },
              ],
            },
            {
              __typename: 'Episode',
              name: 'Ep 2',
              air_date: '28 de dezembro',
              characters: [
                {
                  __typename: 'Character',
                  name: 'João Neves',
                },
                {
                  __typename: 'Character',
                  name: 'José da Silva',
                },
              ],
            },
          ],
        },
      }),
    );
  }
  return res(
    ctx.errors([
      {
        message: 'Não foi possível encontrar os episódios.',
      },
    ]),
  );
});

const handlers = [characters, episodes];

export default handlers;
