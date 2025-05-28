// commitlint.config.js
module.exports = {
  rules: {
    'custom-commit-format': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'custom-commit-format': ({ raw }) => {
          const regex = /^\[\d+주차\] \[[a-zA-Z0-9_-]+\] .+/;
          const valid = regex.test(raw);

          return [
            valid,
            '커밋 메시지는 `[1주차][jaeyoung] 문제 풀이` 형식이어야 합니다.',
          ];
        },
      },
    },
  ],
};
