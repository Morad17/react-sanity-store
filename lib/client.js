import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'oemzls8r',
    dataset: 'production',
    apiVersion: '2022-04-29',
    useCdn: true,
    token: 'process.env.Sanity_Token'
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)