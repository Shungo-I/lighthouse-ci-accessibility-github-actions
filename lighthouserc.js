module.exports = {
  ci: {
    collect: {
      // プロダクションビルドを使用
      staticDistDir: '.next',
      numberOfRuns: 1,
      settings: {
        // アクセシビリティに焦点を当てた設定
        onlyCategories: ['accessibility'],
        skipAudits: ['uses-http2'],
      },
    },
    assert: {
      assertions: {
        // アクセシビリティスコアを警告として扱う
        'categories:accessibility': ['warn', { minScore: 0.9 }],
        // アクセシビリティの問題を警告として扱う
        'aria-required-attr': 'warn',
        'aria-roles': 'warn',
        'color-contrast': 'warn',
        'document-title': 'warn',
        'html-has-lang': 'warn',
        'image-alt': 'warn',
        'meta-viewport': 'warn',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
