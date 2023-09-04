/* eslint-disable @typescript-eslint/ban-types */
export type PascalCase<T> = T extends string ? (T extends `${infer A}${infer B}` ? `${Uppercase<A>}${B}` : T) : T

export type PascalCasedProps<T> = T extends Function
    ? T
    : T extends Array<infer U>
    ? Array<PascalCasedProps<U>>
    : {
          [K in keyof T as PascalCase<K>]: PascalCasedProps<T[K]>
      }

export type FirstParam<T> = T extends (firstParam: infer U, ...args: any) => any ? U : never

export type Underscore2CamelCase<T> = T extends string
    ? T extends `${infer A}_${infer B}${infer C}_${infer D}`
        ? Underscore2CamelCase<`${A}${Uppercase<B>}${C}_${D}`>
        : T extends `${infer A}_${infer B}${infer C}`
        ? `${A}${Uppercase<B>}${C}`
        : T
    : never

export type Underscore2CamelCaseProps<T> = T extends Function
    ? T
    : T extends Array<infer U>
    ? Array<Underscore2CamelCaseProps<U>>
    : {
          [K in keyof T as Underscore2CamelCase<K>]: Underscore2CamelCaseProps<T[K]>
      }
