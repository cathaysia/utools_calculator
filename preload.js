let _relpace_words = {
    "abs": "Math.abs",
    "acos": "Math.acos",
    "asin": "Math.asin",
    "atan": "Math.atan",
    "atan2": "Math.atan2",
    "ceil": "Math.ceil",
    "cos": "Math.cos",
    "exp": "Math.exp",
    "floor": "Math.floor",
    "log": "Math.log",
    "max": "Math.max",
    "min": "Math.min",
    "pow": "Math.pow",
    "random": "Math.random",
    "round": "Math.round",
    "sin": "Math.sin",
    "sqrt": "Math.sqrt",
    "tan": "Math.tan",
    "toSource": "Math.toSource",
    "valueOf": "Math.valueOf",
    "+e": "+Math.E",
    "-e": "-Math.E",
    "*e": "*Math.E",
    "/e": "/Math.E",
    "pi": "Math.PI",
    "ln2": "Math.LN2",
    "ln10": "Math.LN10",
    "log2e": "Math.LOG2E",
    "log10e": "Math.LOG10E",
    "sqrt1_2": "Math.SQRT1_2",
    "sqrt2": "Math.SQRT1_2",
    "（": "(",
    "）": ")"

}
var _result;
var _description;

function calculator(expression) {
    _description = expression
    for (let key in _relpace_words) {
        if (key) {
            _description = _description.replace(key, _relpace_words[key])
        }
    }
    _result = String(eval(String(_description)))
    _description = String(_description).replace("Math.", "")
        .replace("E", String(Math.E.toFixed(3)))
        .replace("PI", String(Math.PI.toFixed(3)))
}


window.exports = {
    "jsq": {
        mode: "list",
        args: {
            enter: (action, callbackSetList) => {
                try {
                    calculator(action.payload)
                } catch (error) {
                    _result = String(error)
                    _description = ""
                }
                return callbackSetList([{
                    title: _result,
                    description: _description
                }])
            },
            search: (action, searchWord, callbackSetList) => {
                calculator(searchWord)
                return callbackSetList([{
                    title: _result,
                    description: _description
                }])
            },
            select: (action, itemData, callbackSetList) => {
                utools.hideMainWindow()
                utools.copyText(itemData.title)
                utools.outPlugin()
            }
        }
    }
}