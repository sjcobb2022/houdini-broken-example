/** @type {import('houdini').ConfigFile} */
const config = {
    apiUrl: 'https://hydrogen-preview.myshopify.com/api/2022-07/graphql.json',
    schemaPollHeaders: {
        'X-Shopify-Storefront-Access-Token': '3b580e70970c4528da70c98e097c2fa0' 
    },
    scalars: {
        DateTime: {
            // the corresponding typescript type
            type: 'Date',
            // turn the api's response into that type
            unmarshal(val) {
                return new Date(val);
            },
            // turn the value into something the API can use
            marshal(date) {
                return date.getTime();
            }
        },

        Decimal: {
            type: 'number',

            unmarshal(val) {
                return new Number(val);
            },

            marshal(number) {
                return number.toString();
            }
        },

        URL: {
            type: 'URL',

            unmarshal(val) {
                return new URL(val);
            },

            marshal(url) {
                return url.toString();
            }
        }
    },
    plugins: {
        'houdini-svelte': {
            client: './src/client.ts',
            static: true
        }
    }
};

export default config;
