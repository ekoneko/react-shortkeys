module.exports = {
    "parser": "typescript-eslint-parser",
    "extends": [
        "eslint-config-airbnb"
    ],
    "plugins": [
        "react",
        "jsx-max-len",
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true
        }
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true,
        "jquery": true,
        "mocha": true
    },
    "rules": {
        "indent": [2, 4, { SwitchCase: 1 }],
        "arrow-parens": 0,
        "class-methods-use-this": 0,
        "no-console": 2,
        "object-shorthand": 0,
        "default-case": 0,
        "arrow-body-style": 0,
        "linebreak-style": 0,
        "prefer-const": 1,
        "prefer-template": 0,
        "guard-for-in": 0,
        "no-restricted-syntax": [2, "WithStatement"],
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/label-has-for": 0,
        "react/jsx-indent": [2, 4],
        "react/jsx-indent-props": [2, 4],
        "react/prefer-stateless-function": 1,
        "react/forbid-prop-types": 1,
        "react/jsx-filename-extension": 0,
        "react/jsx-first-prop-new-line": 0,
        "react/jsx-boolean-value": 0,
        "react/self-closing-comp": 0,
        "react/jsx-closing-bracket-location": 0,
        "jsx-max-len/jsx-max-len": [2, { "lineMaxLength": 100, "tabWidth": 4}],
        "react/jsx-key": 2,
        "react/jsx-no-target-blank":0,
        "semi": 0,
    },
    "globals": {}
}

