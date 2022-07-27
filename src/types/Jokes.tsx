export type TypeJokes = {
  error: boolean;
  internalError: boolean;
  code: number;
  message: string;
  causedBy: Array<string>;
  additionalInfo: string;
  timestamp: number;

  amount: number;
  jokes: Array<TypeJoke>;
};

export type TypeJoke = {
  category: string;
  type: string;
  joke: string;
  flags: TypeFlag;
  id: number;
  safe: boolean;
  lang: string;
};

export type TypeFlag = {
  nsfw: boolean;
  religious: boolean;
  political: boolean;
  racist: boolean;
  sexist: boolean;
  explicit: boolean;
};
