import { setupServer } from 'msw/node'
import { restHandlers } from './handlers'

const server = setupServer(...restHandlers)

export default server
