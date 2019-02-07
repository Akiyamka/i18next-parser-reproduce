const acornStage3 = require('acorn-stage3');
module.exports = {
  contextSeparator: '_',
  createOldCatalogs: true,
  defaultNamespace: 'translation',
  defaultValue: '',
  indentation: 2,
  keepRemoved: false,
  keySeparator: '.',
  lexers: {
    htm: ['HTMLLexer'],
    html: ['HTMLLexer'],
    js: [{
      lexer: 'JsxLexer',
      acorn: {
        injectors: [acornStage3],
        plugins: {
          stage3: true,
        },
      }
    }],
    default: ['JavascriptLexer']
  },
  lineEnding: 'auto',
  locales: ['en', 'fr'],
  namespaceSeparator: ':',
  output: 'locales/$LOCALE/$NAMESPACE.json',
  input: undefined,
  reactNamespace: false,
  sort: false,
  useKeysAsDefaultValue: false,
  verbose: true
}