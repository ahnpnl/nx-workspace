const rewire = require("rewire")
const decorate_angular_cli = rewire("./decorate-angular-cli")
const symlinkNgCLItoNxCLI = decorate_angular_cli.__get__("symlinkNgCLItoNxCLI")
// @ponicode
describe("symlinkNgCLItoNxCLI", () => {
    test("0", () => {
        let callFunction = () => {
            symlinkNgCLItoNxCLI()
        }
    
        expect(callFunction).not.toThrow()
    })
})
