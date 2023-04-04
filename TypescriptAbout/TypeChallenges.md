>[type-challenges](https://github.com/type-challenges/type-challenges)
# Easy

1. MyPick

```ts
type MyPick<T, K extends keyof T> = { [P in K]: T[P] }
```

2. MyReadonly

```ts
type MyReadonly<T> = { readonly [P in keyof T]: T[P] }
```

3. TupleToObject

```ts
type TupleToObject<T extends readonly PropertyKey[]> = { [P in T[number]]: P }
```
`T[number]` :[indexed access types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html)  
4. First

```ts
type First<T extends any[]> = T extends [] ? never : T[0]
```

5. Length

```ts
type Length<T extends readonly any[]> = T['length']
```

6. MyExclude

```ts
type MyExclude<T, K> = T extends K ? never : T
```

7. MyAwaited

```ts
type MyAwaited<T> = T extends Promise<infer one> ? one : never
```

8. ExampleType

```ts
type ExampleType = Promise<string>
```

9. If

```ts
type If<C extends boolean, T, F> = C extends true ? T : F
```

10. Concat

```ts
type Concat<T extends any[], K extends any[]> = [...T, ...K]
```

11. Includes

```ts
type Includes<T extends readonly unknown[], U> = U extends T[number] ? true : false
```

12. Push

```ts
type Push<T extends any[], P> = [...T, P]
```

13. Unshift

```ts
type Unshift<T extends any[], P> = [P, ...T]
```