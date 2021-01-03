import requireAll from 'require-all'

const definitions = requireAll({
  dirname: __dirname,
  filter: /^(?!index)(.+?)\.ts$/
})

module.exports = Object.values(definitions)
