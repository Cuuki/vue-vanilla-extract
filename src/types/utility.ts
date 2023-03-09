export type RecordAs<T, V> = {
  [K in keyof T]: T[K] extends object ? RecordAs<T[K], V> : V
};
