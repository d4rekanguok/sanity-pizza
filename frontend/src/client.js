import PicoSanity from 'picosanity'

export const client = new PicoSanity({
  projectId: '84f7qibt',
  dataset: 'production',
  apiVersion: '2021-03-25',
  useCdn: true,
})
