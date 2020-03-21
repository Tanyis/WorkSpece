function Hello() {
    var name;
    this.setName = function (thyName) {
        name = thyName;
    };
    this.seyHello = function () {
        console.log('hello' +name)
    }
}
exports.Hello = Hello

module.Hello = Hello