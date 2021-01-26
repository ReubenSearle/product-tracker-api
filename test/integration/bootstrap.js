import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import dirtyChai from 'dirty-chai'
import sinonChai from 'sinon-chai'

chai.config.includeStack = true
chai.use(chaiAsPromised)
chai.use(dirtyChai)
chai.use(sinonChai)
global.expect = chai.expect
