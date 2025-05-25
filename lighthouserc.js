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
        // アクセシビリティスコアが90%以上であることを要求
        'categories:accessibility': ['error', { minScore: 0.9 }],
        // 重要なアクセシビリティの問題を禁止
        'aria-required-attr': 'error',
        'aria-roles': 'error',
        'color-contrast': 'error',
        'document-title': 'error',
        'html-has-lang': 'error',
        'image-alt': 'error',
        'meta-viewport': 'error',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
