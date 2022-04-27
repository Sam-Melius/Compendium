import fetch from 'cross-fetch';
//import { setupServer }from 'msw/node';
//import { rest } from 'msw';
global.fetch = fetch;

// const apiData = { 
//   data:[
//       {_id:"5e93b4a43af44260882e33b0",firstname:"Michael",lastname:"Scott",__v:0},
//       {_id:"5e93b4f03af44260882e33b1",firstname:"Jim",lastname:"Halpert",__v:0},
// ]};

// const server = setupServer(
//   rest.get('https://www.officeapi.dev/api/characters/', (req, res, ctx) => res(ctx.json(apiData)))
// );

// beforeAll(() => server.listen());
//     afterEach(() => server.resetHandlers());
//     afterAll(() => server.close);


