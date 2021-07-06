import type { InitialOptionsTsJest } from 'ts-jest/dist/types'
import { defaultsESM as tsjPreset } from 'ts-jest/presets'
// import { defaults as tsjPreset } from 'ts-jest/presets'
// import { jsWithTs as tsjPreset } from 'ts-jest/presets'
// import { jsWithTsESM as tsjPreset } from 'ts-jest/presets'
// import { jsWithBabel as tsjPreset } from 'ts-jest/presets'
// import { jsWithBabelESM as tsjPreset } from 'ts-jest/presets'

const config: InitialOptionsTsJest = {
  transform: {
    ...tsjPreset.transform
    // [...]
  },
  setupFiles: ['dotenv/config'] // if the project utilizes a .env file
}

export default config
