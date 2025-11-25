const NAMING_CONVENTIONS: Record<string, unknown> = {
  "@tseslint/naming-convention": [
    'warn',
    {
      selector: 'default',
      format: ['camelCase'],
    },
    {
      selector: ['classProperty', 'accessor'],
      modifiers: ['private'],
      format: ['strictCamelCase'],
      leadingUnderscore: 'require',
    },
				{
      selector: ['classProperty', 'accessor'],
      modifiers: ['private'],
      types: ['boolean'],
      format: ['StrictPascalCase'],
      prefix: ['_is', '_should', '_has', '_can', '_did', '_will'],
    },
    {
      selector: 'classProperty',
      modifiers: ['static'],
      format: ['UPPER_CASE'],
    },
    {
      selector: ['variable', 'accessor', 'parameter', 'classProperty'],
      types: ['boolean'],
      format: ['StrictPascalCase'],
      prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
    },
    {
      selector: 'variable',
      modifiers: ['const', 'global'],
      types: ['boolean'],
      format: ['UPPER_CASE'],
      prefix: ['IS_', 'SHOULD_', 'HAS_', 'CAN_', 'DID_', 'WILL_'],
    },
    {
      selector: 'variable',
      modifiers: ['const', 'global'],
      format: ['UPPER_CASE'],
    },
    {
      selector: 'typeLike',
      format: ['StrictPascalCase'],
    },
  ],
};

export { NAMING_CONVENTIONS };
