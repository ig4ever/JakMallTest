export type TypeCategories = {
  error: boolean;
  internalError: boolean;
  code: number;
  message: string;
  causedBy: Array<string>;
  additionalInfo: string;
  timestamp: number;

  categories: Array<string>;
  categoryAliases: Array<TypeCategoryAlias>;
};

export type TypeCategoryAlias = {
  alias: string;
  resolved: string;
};
