import { HoudiniClient, type RequestHandlerArgs } from '$houdini';

async function fetchQuery({ fetch, text = '', variables = {}, metadata }: RequestHandlerArgs) {
  const url =
    import.meta.env.VITE_GRAPHQL_ENDPOINT ||
    ' https://hydrogen-preview.myshopify.com/api/2022-07/graphql.json';
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': '3b580e70970c4528da70c98e097c2fa0'
    },
    body: JSON.stringify({
      query: text,
      variables
    })
  });
  return await result.json();
}

export default new HoudiniClient(fetchQuery);
