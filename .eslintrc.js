module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["emotion"],
  parser: "babel-eslint",
  env: {
    jest: true
  },
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "no-unused-vars": ["error", { extensions: [".js", ".jsx"] }],
    "react/forbid-prop-types": [0],
    "react/jsx-one-expression-per-line": [0]
  }
};
