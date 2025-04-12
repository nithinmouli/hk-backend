
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model allergies
 * 
 */
export type allergies = $Result.DefaultSelection<Prisma.$allergiesPayload>
/**
 * Model diseases
 * 
 */
export type diseases = $Result.DefaultSelection<Prisma.$diseasesPayload>
/**
 * Model health_goals
 * 
 */
export type health_goals = $Result.DefaultSelection<Prisma.$health_goalsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Allergies
 * const allergies = await prisma.allergies.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Allergies
   * const allergies = await prisma.allergies.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.allergies`: Exposes CRUD operations for the **allergies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Allergies
    * const allergies = await prisma.allergies.findMany()
    * ```
    */
  get allergies(): Prisma.allergiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diseases`: Exposes CRUD operations for the **diseases** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Diseases
    * const diseases = await prisma.diseases.findMany()
    * ```
    */
  get diseases(): Prisma.diseasesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.health_goals`: Exposes CRUD operations for the **health_goals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Health_goals
    * const health_goals = await prisma.health_goals.findMany()
    * ```
    */
  get health_goals(): Prisma.health_goalsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    allergies: 'allergies',
    diseases: 'diseases',
    health_goals: 'health_goals',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "allergies" | "diseases" | "health_goals" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      allergies: {
        payload: Prisma.$allergiesPayload<ExtArgs>
        fields: Prisma.allergiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.allergiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.allergiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergiesPayload>
          }
          findFirst: {
            args: Prisma.allergiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.allergiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergiesPayload>
          }
          findMany: {
            args: Prisma.allergiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergiesPayload>[]
          }
          create: {
            args: Prisma.allergiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergiesPayload>
          }
          createMany: {
            args: Prisma.allergiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.allergiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergiesPayload>[]
          }
          delete: {
            args: Prisma.allergiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergiesPayload>
          }
          update: {
            args: Prisma.allergiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergiesPayload>
          }
          deleteMany: {
            args: Prisma.allergiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.allergiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.allergiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergiesPayload>[]
          }
          upsert: {
            args: Prisma.allergiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$allergiesPayload>
          }
          aggregate: {
            args: Prisma.AllergiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAllergies>
          }
          groupBy: {
            args: Prisma.allergiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AllergiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.allergiesCountArgs<ExtArgs>
            result: $Utils.Optional<AllergiesCountAggregateOutputType> | number
          }
        }
      }
      diseases: {
        payload: Prisma.$diseasesPayload<ExtArgs>
        fields: Prisma.diseasesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.diseasesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diseasesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.diseasesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diseasesPayload>
          }
          findFirst: {
            args: Prisma.diseasesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diseasesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.diseasesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diseasesPayload>
          }
          findMany: {
            args: Prisma.diseasesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diseasesPayload>[]
          }
          create: {
            args: Prisma.diseasesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diseasesPayload>
          }
          createMany: {
            args: Prisma.diseasesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.diseasesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diseasesPayload>[]
          }
          delete: {
            args: Prisma.diseasesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diseasesPayload>
          }
          update: {
            args: Prisma.diseasesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diseasesPayload>
          }
          deleteMany: {
            args: Prisma.diseasesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.diseasesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.diseasesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diseasesPayload>[]
          }
          upsert: {
            args: Prisma.diseasesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$diseasesPayload>
          }
          aggregate: {
            args: Prisma.DiseasesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiseases>
          }
          groupBy: {
            args: Prisma.diseasesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiseasesGroupByOutputType>[]
          }
          count: {
            args: Prisma.diseasesCountArgs<ExtArgs>
            result: $Utils.Optional<DiseasesCountAggregateOutputType> | number
          }
        }
      }
      health_goals: {
        payload: Prisma.$health_goalsPayload<ExtArgs>
        fields: Prisma.health_goalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.health_goalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_goalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.health_goalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_goalsPayload>
          }
          findFirst: {
            args: Prisma.health_goalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_goalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.health_goalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_goalsPayload>
          }
          findMany: {
            args: Prisma.health_goalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_goalsPayload>[]
          }
          create: {
            args: Prisma.health_goalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_goalsPayload>
          }
          createMany: {
            args: Prisma.health_goalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.health_goalsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_goalsPayload>[]
          }
          delete: {
            args: Prisma.health_goalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_goalsPayload>
          }
          update: {
            args: Prisma.health_goalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_goalsPayload>
          }
          deleteMany: {
            args: Prisma.health_goalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.health_goalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.health_goalsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_goalsPayload>[]
          }
          upsert: {
            args: Prisma.health_goalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$health_goalsPayload>
          }
          aggregate: {
            args: Prisma.Health_goalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHealth_goals>
          }
          groupBy: {
            args: Prisma.health_goalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Health_goalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.health_goalsCountArgs<ExtArgs>
            result: $Utils.Optional<Health_goalsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    allergies?: allergiesOmit
    diseases?: diseasesOmit
    health_goals?: health_goalsOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    allergies: number
    diseases: number
    health_goals: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    allergies?: boolean | UsersCountOutputTypeCountAllergiesArgs
    diseases?: boolean | UsersCountOutputTypeCountDiseasesArgs
    health_goals?: boolean | UsersCountOutputTypeCountHealth_goalsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAllergiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: allergiesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountDiseasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: diseasesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountHealth_goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: health_goalsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model allergies
   */

  export type AggregateAllergies = {
    _count: AllergiesCountAggregateOutputType | null
    _avg: AllergiesAvgAggregateOutputType | null
    _sum: AllergiesSumAggregateOutputType | null
    _min: AllergiesMinAggregateOutputType | null
    _max: AllergiesMaxAggregateOutputType | null
  }

  export type AllergiesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AllergiesSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AllergiesMinAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
  }

  export type AllergiesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
  }

  export type AllergiesCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    _all: number
  }


  export type AllergiesAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AllergiesSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AllergiesMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type AllergiesMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type AllergiesCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    _all?: true
  }

  export type AllergiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which allergies to aggregate.
     */
    where?: allergiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of allergies to fetch.
     */
    orderBy?: allergiesOrderByWithRelationInput | allergiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: allergiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned allergies
    **/
    _count?: true | AllergiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AllergiesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AllergiesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AllergiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AllergiesMaxAggregateInputType
  }

  export type GetAllergiesAggregateType<T extends AllergiesAggregateArgs> = {
        [P in keyof T & keyof AggregateAllergies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllergies[P]>
      : GetScalarType<T[P], AggregateAllergies[P]>
  }




  export type allergiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: allergiesWhereInput
    orderBy?: allergiesOrderByWithAggregationInput | allergiesOrderByWithAggregationInput[]
    by: AllergiesScalarFieldEnum[] | AllergiesScalarFieldEnum
    having?: allergiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AllergiesCountAggregateInputType | true
    _avg?: AllergiesAvgAggregateInputType
    _sum?: AllergiesSumAggregateInputType
    _min?: AllergiesMinAggregateInputType
    _max?: AllergiesMaxAggregateInputType
  }

  export type AllergiesGroupByOutputType = {
    id: number
    name: string
    userId: number
    _count: AllergiesCountAggregateOutputType | null
    _avg: AllergiesAvgAggregateOutputType | null
    _sum: AllergiesSumAggregateOutputType | null
    _min: AllergiesMinAggregateOutputType | null
    _max: AllergiesMaxAggregateOutputType | null
  }

  type GetAllergiesGroupByPayload<T extends allergiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AllergiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AllergiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AllergiesGroupByOutputType[P]>
            : GetScalarType<T[P], AllergiesGroupByOutputType[P]>
        }
      >
    >


  export type allergiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allergies"]>

  export type allergiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allergies"]>

  export type allergiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allergies"]>

  export type allergiesSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
  }

  export type allergiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId", ExtArgs["result"]["allergies"]>
  export type allergiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type allergiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type allergiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $allergiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "allergies"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      userId: number
    }, ExtArgs["result"]["allergies"]>
    composites: {}
  }

  type allergiesGetPayload<S extends boolean | null | undefined | allergiesDefaultArgs> = $Result.GetResult<Prisma.$allergiesPayload, S>

  type allergiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<allergiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AllergiesCountAggregateInputType | true
    }

  export interface allergiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['allergies'], meta: { name: 'allergies' } }
    /**
     * Find zero or one Allergies that matches the filter.
     * @param {allergiesFindUniqueArgs} args - Arguments to find a Allergies
     * @example
     * // Get one Allergies
     * const allergies = await prisma.allergies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends allergiesFindUniqueArgs>(args: SelectSubset<T, allergiesFindUniqueArgs<ExtArgs>>): Prisma__allergiesClient<$Result.GetResult<Prisma.$allergiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Allergies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {allergiesFindUniqueOrThrowArgs} args - Arguments to find a Allergies
     * @example
     * // Get one Allergies
     * const allergies = await prisma.allergies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends allergiesFindUniqueOrThrowArgs>(args: SelectSubset<T, allergiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__allergiesClient<$Result.GetResult<Prisma.$allergiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allergies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergiesFindFirstArgs} args - Arguments to find a Allergies
     * @example
     * // Get one Allergies
     * const allergies = await prisma.allergies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends allergiesFindFirstArgs>(args?: SelectSubset<T, allergiesFindFirstArgs<ExtArgs>>): Prisma__allergiesClient<$Result.GetResult<Prisma.$allergiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allergies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergiesFindFirstOrThrowArgs} args - Arguments to find a Allergies
     * @example
     * // Get one Allergies
     * const allergies = await prisma.allergies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends allergiesFindFirstOrThrowArgs>(args?: SelectSubset<T, allergiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__allergiesClient<$Result.GetResult<Prisma.$allergiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Allergies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Allergies
     * const allergies = await prisma.allergies.findMany()
     * 
     * // Get first 10 Allergies
     * const allergies = await prisma.allergies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const allergiesWithIdOnly = await prisma.allergies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends allergiesFindManyArgs>(args?: SelectSubset<T, allergiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$allergiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Allergies.
     * @param {allergiesCreateArgs} args - Arguments to create a Allergies.
     * @example
     * // Create one Allergies
     * const Allergies = await prisma.allergies.create({
     *   data: {
     *     // ... data to create a Allergies
     *   }
     * })
     * 
     */
    create<T extends allergiesCreateArgs>(args: SelectSubset<T, allergiesCreateArgs<ExtArgs>>): Prisma__allergiesClient<$Result.GetResult<Prisma.$allergiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Allergies.
     * @param {allergiesCreateManyArgs} args - Arguments to create many Allergies.
     * @example
     * // Create many Allergies
     * const allergies = await prisma.allergies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends allergiesCreateManyArgs>(args?: SelectSubset<T, allergiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Allergies and returns the data saved in the database.
     * @param {allergiesCreateManyAndReturnArgs} args - Arguments to create many Allergies.
     * @example
     * // Create many Allergies
     * const allergies = await prisma.allergies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Allergies and only return the `id`
     * const allergiesWithIdOnly = await prisma.allergies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends allergiesCreateManyAndReturnArgs>(args?: SelectSubset<T, allergiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$allergiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Allergies.
     * @param {allergiesDeleteArgs} args - Arguments to delete one Allergies.
     * @example
     * // Delete one Allergies
     * const Allergies = await prisma.allergies.delete({
     *   where: {
     *     // ... filter to delete one Allergies
     *   }
     * })
     * 
     */
    delete<T extends allergiesDeleteArgs>(args: SelectSubset<T, allergiesDeleteArgs<ExtArgs>>): Prisma__allergiesClient<$Result.GetResult<Prisma.$allergiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Allergies.
     * @param {allergiesUpdateArgs} args - Arguments to update one Allergies.
     * @example
     * // Update one Allergies
     * const allergies = await prisma.allergies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends allergiesUpdateArgs>(args: SelectSubset<T, allergiesUpdateArgs<ExtArgs>>): Prisma__allergiesClient<$Result.GetResult<Prisma.$allergiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Allergies.
     * @param {allergiesDeleteManyArgs} args - Arguments to filter Allergies to delete.
     * @example
     * // Delete a few Allergies
     * const { count } = await prisma.allergies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends allergiesDeleteManyArgs>(args?: SelectSubset<T, allergiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Allergies
     * const allergies = await prisma.allergies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends allergiesUpdateManyArgs>(args: SelectSubset<T, allergiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Allergies and returns the data updated in the database.
     * @param {allergiesUpdateManyAndReturnArgs} args - Arguments to update many Allergies.
     * @example
     * // Update many Allergies
     * const allergies = await prisma.allergies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Allergies and only return the `id`
     * const allergiesWithIdOnly = await prisma.allergies.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends allergiesUpdateManyAndReturnArgs>(args: SelectSubset<T, allergiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$allergiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Allergies.
     * @param {allergiesUpsertArgs} args - Arguments to update or create a Allergies.
     * @example
     * // Update or create a Allergies
     * const allergies = await prisma.allergies.upsert({
     *   create: {
     *     // ... data to create a Allergies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Allergies we want to update
     *   }
     * })
     */
    upsert<T extends allergiesUpsertArgs>(args: SelectSubset<T, allergiesUpsertArgs<ExtArgs>>): Prisma__allergiesClient<$Result.GetResult<Prisma.$allergiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergiesCountArgs} args - Arguments to filter Allergies to count.
     * @example
     * // Count the number of Allergies
     * const count = await prisma.allergies.count({
     *   where: {
     *     // ... the filter for the Allergies we want to count
     *   }
     * })
    **/
    count<T extends allergiesCountArgs>(
      args?: Subset<T, allergiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AllergiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllergiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AllergiesAggregateArgs>(args: Subset<T, AllergiesAggregateArgs>): Prisma.PrismaPromise<GetAllergiesAggregateType<T>>

    /**
     * Group by Allergies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {allergiesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends allergiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: allergiesGroupByArgs['orderBy'] }
        : { orderBy?: allergiesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, allergiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllergiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the allergies model
   */
  readonly fields: allergiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for allergies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__allergiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the allergies model
   */
  interface allergiesFieldRefs {
    readonly id: FieldRef<"allergies", 'Int'>
    readonly name: FieldRef<"allergies", 'String'>
    readonly userId: FieldRef<"allergies", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * allergies findUnique
   */
  export type allergiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergies
     */
    select?: allergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergies
     */
    omit?: allergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergiesInclude<ExtArgs> | null
    /**
     * Filter, which allergies to fetch.
     */
    where: allergiesWhereUniqueInput
  }

  /**
   * allergies findUniqueOrThrow
   */
  export type allergiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergies
     */
    select?: allergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergies
     */
    omit?: allergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergiesInclude<ExtArgs> | null
    /**
     * Filter, which allergies to fetch.
     */
    where: allergiesWhereUniqueInput
  }

  /**
   * allergies findFirst
   */
  export type allergiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergies
     */
    select?: allergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergies
     */
    omit?: allergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergiesInclude<ExtArgs> | null
    /**
     * Filter, which allergies to fetch.
     */
    where?: allergiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of allergies to fetch.
     */
    orderBy?: allergiesOrderByWithRelationInput | allergiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for allergies.
     */
    cursor?: allergiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of allergies.
     */
    distinct?: AllergiesScalarFieldEnum | AllergiesScalarFieldEnum[]
  }

  /**
   * allergies findFirstOrThrow
   */
  export type allergiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergies
     */
    select?: allergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergies
     */
    omit?: allergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergiesInclude<ExtArgs> | null
    /**
     * Filter, which allergies to fetch.
     */
    where?: allergiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of allergies to fetch.
     */
    orderBy?: allergiesOrderByWithRelationInput | allergiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for allergies.
     */
    cursor?: allergiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` allergies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of allergies.
     */
    distinct?: AllergiesScalarFieldEnum | AllergiesScalarFieldEnum[]
  }

  /**
   * allergies findMany
   */
  export type allergiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergies
     */
    select?: allergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergies
     */
    omit?: allergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergiesInclude<ExtArgs> | null
    /**
     * Filter, which allergies to fetch.
     */
    where?: allergiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of allergies to fetch.
     */
    orderBy?: allergiesOrderByWithRelationInput | allergiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing allergies.
     */
    cursor?: allergiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` allergies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` allergies.
     */
    skip?: number
    distinct?: AllergiesScalarFieldEnum | AllergiesScalarFieldEnum[]
  }

  /**
   * allergies create
   */
  export type allergiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergies
     */
    select?: allergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergies
     */
    omit?: allergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergiesInclude<ExtArgs> | null
    /**
     * The data needed to create a allergies.
     */
    data: XOR<allergiesCreateInput, allergiesUncheckedCreateInput>
  }

  /**
   * allergies createMany
   */
  export type allergiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many allergies.
     */
    data: allergiesCreateManyInput | allergiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * allergies createManyAndReturn
   */
  export type allergiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergies
     */
    select?: allergiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the allergies
     */
    omit?: allergiesOmit<ExtArgs> | null
    /**
     * The data used to create many allergies.
     */
    data: allergiesCreateManyInput | allergiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * allergies update
   */
  export type allergiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergies
     */
    select?: allergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergies
     */
    omit?: allergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergiesInclude<ExtArgs> | null
    /**
     * The data needed to update a allergies.
     */
    data: XOR<allergiesUpdateInput, allergiesUncheckedUpdateInput>
    /**
     * Choose, which allergies to update.
     */
    where: allergiesWhereUniqueInput
  }

  /**
   * allergies updateMany
   */
  export type allergiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update allergies.
     */
    data: XOR<allergiesUpdateManyMutationInput, allergiesUncheckedUpdateManyInput>
    /**
     * Filter which allergies to update
     */
    where?: allergiesWhereInput
    /**
     * Limit how many allergies to update.
     */
    limit?: number
  }

  /**
   * allergies updateManyAndReturn
   */
  export type allergiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergies
     */
    select?: allergiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the allergies
     */
    omit?: allergiesOmit<ExtArgs> | null
    /**
     * The data used to update allergies.
     */
    data: XOR<allergiesUpdateManyMutationInput, allergiesUncheckedUpdateManyInput>
    /**
     * Filter which allergies to update
     */
    where?: allergiesWhereInput
    /**
     * Limit how many allergies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * allergies upsert
   */
  export type allergiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergies
     */
    select?: allergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergies
     */
    omit?: allergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergiesInclude<ExtArgs> | null
    /**
     * The filter to search for the allergies to update in case it exists.
     */
    where: allergiesWhereUniqueInput
    /**
     * In case the allergies found by the `where` argument doesn't exist, create a new allergies with this data.
     */
    create: XOR<allergiesCreateInput, allergiesUncheckedCreateInput>
    /**
     * In case the allergies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<allergiesUpdateInput, allergiesUncheckedUpdateInput>
  }

  /**
   * allergies delete
   */
  export type allergiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergies
     */
    select?: allergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergies
     */
    omit?: allergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergiesInclude<ExtArgs> | null
    /**
     * Filter which allergies to delete.
     */
    where: allergiesWhereUniqueInput
  }

  /**
   * allergies deleteMany
   */
  export type allergiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which allergies to delete
     */
    where?: allergiesWhereInput
    /**
     * Limit how many allergies to delete.
     */
    limit?: number
  }

  /**
   * allergies without action
   */
  export type allergiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergies
     */
    select?: allergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergies
     */
    omit?: allergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergiesInclude<ExtArgs> | null
  }


  /**
   * Model diseases
   */

  export type AggregateDiseases = {
    _count: DiseasesCountAggregateOutputType | null
    _avg: DiseasesAvgAggregateOutputType | null
    _sum: DiseasesSumAggregateOutputType | null
    _min: DiseasesMinAggregateOutputType | null
    _max: DiseasesMaxAggregateOutputType | null
  }

  export type DiseasesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DiseasesSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DiseasesMinAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
  }

  export type DiseasesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
  }

  export type DiseasesCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    _all: number
  }


  export type DiseasesAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DiseasesSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DiseasesMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type DiseasesMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type DiseasesCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    _all?: true
  }

  export type DiseasesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which diseases to aggregate.
     */
    where?: diseasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diseases to fetch.
     */
    orderBy?: diseasesOrderByWithRelationInput | diseasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: diseasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned diseases
    **/
    _count?: true | DiseasesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiseasesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiseasesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiseasesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiseasesMaxAggregateInputType
  }

  export type GetDiseasesAggregateType<T extends DiseasesAggregateArgs> = {
        [P in keyof T & keyof AggregateDiseases]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiseases[P]>
      : GetScalarType<T[P], AggregateDiseases[P]>
  }




  export type diseasesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: diseasesWhereInput
    orderBy?: diseasesOrderByWithAggregationInput | diseasesOrderByWithAggregationInput[]
    by: DiseasesScalarFieldEnum[] | DiseasesScalarFieldEnum
    having?: diseasesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiseasesCountAggregateInputType | true
    _avg?: DiseasesAvgAggregateInputType
    _sum?: DiseasesSumAggregateInputType
    _min?: DiseasesMinAggregateInputType
    _max?: DiseasesMaxAggregateInputType
  }

  export type DiseasesGroupByOutputType = {
    id: number
    name: string
    userId: number
    _count: DiseasesCountAggregateOutputType | null
    _avg: DiseasesAvgAggregateOutputType | null
    _sum: DiseasesSumAggregateOutputType | null
    _min: DiseasesMinAggregateOutputType | null
    _max: DiseasesMaxAggregateOutputType | null
  }

  type GetDiseasesGroupByPayload<T extends diseasesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiseasesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiseasesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiseasesGroupByOutputType[P]>
            : GetScalarType<T[P], DiseasesGroupByOutputType[P]>
        }
      >
    >


  export type diseasesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diseases"]>

  export type diseasesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diseases"]>

  export type diseasesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diseases"]>

  export type diseasesSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
  }

  export type diseasesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId", ExtArgs["result"]["diseases"]>
  export type diseasesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type diseasesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type diseasesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $diseasesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "diseases"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      userId: number
    }, ExtArgs["result"]["diseases"]>
    composites: {}
  }

  type diseasesGetPayload<S extends boolean | null | undefined | diseasesDefaultArgs> = $Result.GetResult<Prisma.$diseasesPayload, S>

  type diseasesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<diseasesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiseasesCountAggregateInputType | true
    }

  export interface diseasesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['diseases'], meta: { name: 'diseases' } }
    /**
     * Find zero or one Diseases that matches the filter.
     * @param {diseasesFindUniqueArgs} args - Arguments to find a Diseases
     * @example
     * // Get one Diseases
     * const diseases = await prisma.diseases.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends diseasesFindUniqueArgs>(args: SelectSubset<T, diseasesFindUniqueArgs<ExtArgs>>): Prisma__diseasesClient<$Result.GetResult<Prisma.$diseasesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Diseases that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {diseasesFindUniqueOrThrowArgs} args - Arguments to find a Diseases
     * @example
     * // Get one Diseases
     * const diseases = await prisma.diseases.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends diseasesFindUniqueOrThrowArgs>(args: SelectSubset<T, diseasesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__diseasesClient<$Result.GetResult<Prisma.$diseasesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diseases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diseasesFindFirstArgs} args - Arguments to find a Diseases
     * @example
     * // Get one Diseases
     * const diseases = await prisma.diseases.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends diseasesFindFirstArgs>(args?: SelectSubset<T, diseasesFindFirstArgs<ExtArgs>>): Prisma__diseasesClient<$Result.GetResult<Prisma.$diseasesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Diseases that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diseasesFindFirstOrThrowArgs} args - Arguments to find a Diseases
     * @example
     * // Get one Diseases
     * const diseases = await prisma.diseases.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends diseasesFindFirstOrThrowArgs>(args?: SelectSubset<T, diseasesFindFirstOrThrowArgs<ExtArgs>>): Prisma__diseasesClient<$Result.GetResult<Prisma.$diseasesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Diseases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diseasesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Diseases
     * const diseases = await prisma.diseases.findMany()
     * 
     * // Get first 10 Diseases
     * const diseases = await prisma.diseases.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diseasesWithIdOnly = await prisma.diseases.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends diseasesFindManyArgs>(args?: SelectSubset<T, diseasesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diseasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Diseases.
     * @param {diseasesCreateArgs} args - Arguments to create a Diseases.
     * @example
     * // Create one Diseases
     * const Diseases = await prisma.diseases.create({
     *   data: {
     *     // ... data to create a Diseases
     *   }
     * })
     * 
     */
    create<T extends diseasesCreateArgs>(args: SelectSubset<T, diseasesCreateArgs<ExtArgs>>): Prisma__diseasesClient<$Result.GetResult<Prisma.$diseasesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Diseases.
     * @param {diseasesCreateManyArgs} args - Arguments to create many Diseases.
     * @example
     * // Create many Diseases
     * const diseases = await prisma.diseases.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends diseasesCreateManyArgs>(args?: SelectSubset<T, diseasesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Diseases and returns the data saved in the database.
     * @param {diseasesCreateManyAndReturnArgs} args - Arguments to create many Diseases.
     * @example
     * // Create many Diseases
     * const diseases = await prisma.diseases.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Diseases and only return the `id`
     * const diseasesWithIdOnly = await prisma.diseases.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends diseasesCreateManyAndReturnArgs>(args?: SelectSubset<T, diseasesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diseasesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Diseases.
     * @param {diseasesDeleteArgs} args - Arguments to delete one Diseases.
     * @example
     * // Delete one Diseases
     * const Diseases = await prisma.diseases.delete({
     *   where: {
     *     // ... filter to delete one Diseases
     *   }
     * })
     * 
     */
    delete<T extends diseasesDeleteArgs>(args: SelectSubset<T, diseasesDeleteArgs<ExtArgs>>): Prisma__diseasesClient<$Result.GetResult<Prisma.$diseasesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Diseases.
     * @param {diseasesUpdateArgs} args - Arguments to update one Diseases.
     * @example
     * // Update one Diseases
     * const diseases = await prisma.diseases.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends diseasesUpdateArgs>(args: SelectSubset<T, diseasesUpdateArgs<ExtArgs>>): Prisma__diseasesClient<$Result.GetResult<Prisma.$diseasesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Diseases.
     * @param {diseasesDeleteManyArgs} args - Arguments to filter Diseases to delete.
     * @example
     * // Delete a few Diseases
     * const { count } = await prisma.diseases.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends diseasesDeleteManyArgs>(args?: SelectSubset<T, diseasesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diseasesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Diseases
     * const diseases = await prisma.diseases.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends diseasesUpdateManyArgs>(args: SelectSubset<T, diseasesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Diseases and returns the data updated in the database.
     * @param {diseasesUpdateManyAndReturnArgs} args - Arguments to update many Diseases.
     * @example
     * // Update many Diseases
     * const diseases = await prisma.diseases.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Diseases and only return the `id`
     * const diseasesWithIdOnly = await prisma.diseases.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends diseasesUpdateManyAndReturnArgs>(args: SelectSubset<T, diseasesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diseasesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Diseases.
     * @param {diseasesUpsertArgs} args - Arguments to update or create a Diseases.
     * @example
     * // Update or create a Diseases
     * const diseases = await prisma.diseases.upsert({
     *   create: {
     *     // ... data to create a Diseases
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Diseases we want to update
     *   }
     * })
     */
    upsert<T extends diseasesUpsertArgs>(args: SelectSubset<T, diseasesUpsertArgs<ExtArgs>>): Prisma__diseasesClient<$Result.GetResult<Prisma.$diseasesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Diseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diseasesCountArgs} args - Arguments to filter Diseases to count.
     * @example
     * // Count the number of Diseases
     * const count = await prisma.diseases.count({
     *   where: {
     *     // ... the filter for the Diseases we want to count
     *   }
     * })
    **/
    count<T extends diseasesCountArgs>(
      args?: Subset<T, diseasesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiseasesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Diseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiseasesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DiseasesAggregateArgs>(args: Subset<T, DiseasesAggregateArgs>): Prisma.PrismaPromise<GetDiseasesAggregateType<T>>

    /**
     * Group by Diseases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {diseasesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends diseasesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: diseasesGroupByArgs['orderBy'] }
        : { orderBy?: diseasesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, diseasesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiseasesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the diseases model
   */
  readonly fields: diseasesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for diseases.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__diseasesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the diseases model
   */
  interface diseasesFieldRefs {
    readonly id: FieldRef<"diseases", 'Int'>
    readonly name: FieldRef<"diseases", 'String'>
    readonly userId: FieldRef<"diseases", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * diseases findUnique
   */
  export type diseasesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diseases
     */
    select?: diseasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diseases
     */
    omit?: diseasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diseasesInclude<ExtArgs> | null
    /**
     * Filter, which diseases to fetch.
     */
    where: diseasesWhereUniqueInput
  }

  /**
   * diseases findUniqueOrThrow
   */
  export type diseasesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diseases
     */
    select?: diseasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diseases
     */
    omit?: diseasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diseasesInclude<ExtArgs> | null
    /**
     * Filter, which diseases to fetch.
     */
    where: diseasesWhereUniqueInput
  }

  /**
   * diseases findFirst
   */
  export type diseasesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diseases
     */
    select?: diseasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diseases
     */
    omit?: diseasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diseasesInclude<ExtArgs> | null
    /**
     * Filter, which diseases to fetch.
     */
    where?: diseasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diseases to fetch.
     */
    orderBy?: diseasesOrderByWithRelationInput | diseasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for diseases.
     */
    cursor?: diseasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diseases.
     */
    distinct?: DiseasesScalarFieldEnum | DiseasesScalarFieldEnum[]
  }

  /**
   * diseases findFirstOrThrow
   */
  export type diseasesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diseases
     */
    select?: diseasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diseases
     */
    omit?: diseasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diseasesInclude<ExtArgs> | null
    /**
     * Filter, which diseases to fetch.
     */
    where?: diseasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diseases to fetch.
     */
    orderBy?: diseasesOrderByWithRelationInput | diseasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for diseases.
     */
    cursor?: diseasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diseases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of diseases.
     */
    distinct?: DiseasesScalarFieldEnum | DiseasesScalarFieldEnum[]
  }

  /**
   * diseases findMany
   */
  export type diseasesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diseases
     */
    select?: diseasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diseases
     */
    omit?: diseasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diseasesInclude<ExtArgs> | null
    /**
     * Filter, which diseases to fetch.
     */
    where?: diseasesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of diseases to fetch.
     */
    orderBy?: diseasesOrderByWithRelationInput | diseasesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing diseases.
     */
    cursor?: diseasesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` diseases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` diseases.
     */
    skip?: number
    distinct?: DiseasesScalarFieldEnum | DiseasesScalarFieldEnum[]
  }

  /**
   * diseases create
   */
  export type diseasesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diseases
     */
    select?: diseasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diseases
     */
    omit?: diseasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diseasesInclude<ExtArgs> | null
    /**
     * The data needed to create a diseases.
     */
    data: XOR<diseasesCreateInput, diseasesUncheckedCreateInput>
  }

  /**
   * diseases createMany
   */
  export type diseasesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many diseases.
     */
    data: diseasesCreateManyInput | diseasesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * diseases createManyAndReturn
   */
  export type diseasesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diseases
     */
    select?: diseasesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the diseases
     */
    omit?: diseasesOmit<ExtArgs> | null
    /**
     * The data used to create many diseases.
     */
    data: diseasesCreateManyInput | diseasesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diseasesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * diseases update
   */
  export type diseasesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diseases
     */
    select?: diseasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diseases
     */
    omit?: diseasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diseasesInclude<ExtArgs> | null
    /**
     * The data needed to update a diseases.
     */
    data: XOR<diseasesUpdateInput, diseasesUncheckedUpdateInput>
    /**
     * Choose, which diseases to update.
     */
    where: diseasesWhereUniqueInput
  }

  /**
   * diseases updateMany
   */
  export type diseasesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update diseases.
     */
    data: XOR<diseasesUpdateManyMutationInput, diseasesUncheckedUpdateManyInput>
    /**
     * Filter which diseases to update
     */
    where?: diseasesWhereInput
    /**
     * Limit how many diseases to update.
     */
    limit?: number
  }

  /**
   * diseases updateManyAndReturn
   */
  export type diseasesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diseases
     */
    select?: diseasesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the diseases
     */
    omit?: diseasesOmit<ExtArgs> | null
    /**
     * The data used to update diseases.
     */
    data: XOR<diseasesUpdateManyMutationInput, diseasesUncheckedUpdateManyInput>
    /**
     * Filter which diseases to update
     */
    where?: diseasesWhereInput
    /**
     * Limit how many diseases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diseasesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * diseases upsert
   */
  export type diseasesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diseases
     */
    select?: diseasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diseases
     */
    omit?: diseasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diseasesInclude<ExtArgs> | null
    /**
     * The filter to search for the diseases to update in case it exists.
     */
    where: diseasesWhereUniqueInput
    /**
     * In case the diseases found by the `where` argument doesn't exist, create a new diseases with this data.
     */
    create: XOR<diseasesCreateInput, diseasesUncheckedCreateInput>
    /**
     * In case the diseases was found with the provided `where` argument, update it with this data.
     */
    update: XOR<diseasesUpdateInput, diseasesUncheckedUpdateInput>
  }

  /**
   * diseases delete
   */
  export type diseasesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diseases
     */
    select?: diseasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diseases
     */
    omit?: diseasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diseasesInclude<ExtArgs> | null
    /**
     * Filter which diseases to delete.
     */
    where: diseasesWhereUniqueInput
  }

  /**
   * diseases deleteMany
   */
  export type diseasesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which diseases to delete
     */
    where?: diseasesWhereInput
    /**
     * Limit how many diseases to delete.
     */
    limit?: number
  }

  /**
   * diseases without action
   */
  export type diseasesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diseases
     */
    select?: diseasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diseases
     */
    omit?: diseasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diseasesInclude<ExtArgs> | null
  }


  /**
   * Model health_goals
   */

  export type AggregateHealth_goals = {
    _count: Health_goalsCountAggregateOutputType | null
    _avg: Health_goalsAvgAggregateOutputType | null
    _sum: Health_goalsSumAggregateOutputType | null
    _min: Health_goalsMinAggregateOutputType | null
    _max: Health_goalsMaxAggregateOutputType | null
  }

  export type Health_goalsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Health_goalsSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Health_goalsMinAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
  }

  export type Health_goalsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
  }

  export type Health_goalsCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    _all: number
  }


  export type Health_goalsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Health_goalsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Health_goalsMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type Health_goalsMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
  }

  export type Health_goalsCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    _all?: true
  }

  export type Health_goalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which health_goals to aggregate.
     */
    where?: health_goalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of health_goals to fetch.
     */
    orderBy?: health_goalsOrderByWithRelationInput | health_goalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: health_goalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` health_goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` health_goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned health_goals
    **/
    _count?: true | Health_goalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Health_goalsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Health_goalsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Health_goalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Health_goalsMaxAggregateInputType
  }

  export type GetHealth_goalsAggregateType<T extends Health_goalsAggregateArgs> = {
        [P in keyof T & keyof AggregateHealth_goals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHealth_goals[P]>
      : GetScalarType<T[P], AggregateHealth_goals[P]>
  }




  export type health_goalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: health_goalsWhereInput
    orderBy?: health_goalsOrderByWithAggregationInput | health_goalsOrderByWithAggregationInput[]
    by: Health_goalsScalarFieldEnum[] | Health_goalsScalarFieldEnum
    having?: health_goalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Health_goalsCountAggregateInputType | true
    _avg?: Health_goalsAvgAggregateInputType
    _sum?: Health_goalsSumAggregateInputType
    _min?: Health_goalsMinAggregateInputType
    _max?: Health_goalsMaxAggregateInputType
  }

  export type Health_goalsGroupByOutputType = {
    id: number
    name: string
    userId: number
    _count: Health_goalsCountAggregateOutputType | null
    _avg: Health_goalsAvgAggregateOutputType | null
    _sum: Health_goalsSumAggregateOutputType | null
    _min: Health_goalsMinAggregateOutputType | null
    _max: Health_goalsMaxAggregateOutputType | null
  }

  type GetHealth_goalsGroupByPayload<T extends health_goalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Health_goalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Health_goalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Health_goalsGroupByOutputType[P]>
            : GetScalarType<T[P], Health_goalsGroupByOutputType[P]>
        }
      >
    >


  export type health_goalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["health_goals"]>

  export type health_goalsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["health_goals"]>

  export type health_goalsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["health_goals"]>

  export type health_goalsSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
  }

  export type health_goalsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "userId", ExtArgs["result"]["health_goals"]>
  export type health_goalsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type health_goalsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type health_goalsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $health_goalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "health_goals"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      userId: number
    }, ExtArgs["result"]["health_goals"]>
    composites: {}
  }

  type health_goalsGetPayload<S extends boolean | null | undefined | health_goalsDefaultArgs> = $Result.GetResult<Prisma.$health_goalsPayload, S>

  type health_goalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<health_goalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Health_goalsCountAggregateInputType | true
    }

  export interface health_goalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['health_goals'], meta: { name: 'health_goals' } }
    /**
     * Find zero or one Health_goals that matches the filter.
     * @param {health_goalsFindUniqueArgs} args - Arguments to find a Health_goals
     * @example
     * // Get one Health_goals
     * const health_goals = await prisma.health_goals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends health_goalsFindUniqueArgs>(args: SelectSubset<T, health_goalsFindUniqueArgs<ExtArgs>>): Prisma__health_goalsClient<$Result.GetResult<Prisma.$health_goalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Health_goals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {health_goalsFindUniqueOrThrowArgs} args - Arguments to find a Health_goals
     * @example
     * // Get one Health_goals
     * const health_goals = await prisma.health_goals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends health_goalsFindUniqueOrThrowArgs>(args: SelectSubset<T, health_goalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__health_goalsClient<$Result.GetResult<Prisma.$health_goalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Health_goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {health_goalsFindFirstArgs} args - Arguments to find a Health_goals
     * @example
     * // Get one Health_goals
     * const health_goals = await prisma.health_goals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends health_goalsFindFirstArgs>(args?: SelectSubset<T, health_goalsFindFirstArgs<ExtArgs>>): Prisma__health_goalsClient<$Result.GetResult<Prisma.$health_goalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Health_goals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {health_goalsFindFirstOrThrowArgs} args - Arguments to find a Health_goals
     * @example
     * // Get one Health_goals
     * const health_goals = await prisma.health_goals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends health_goalsFindFirstOrThrowArgs>(args?: SelectSubset<T, health_goalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__health_goalsClient<$Result.GetResult<Prisma.$health_goalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Health_goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {health_goalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Health_goals
     * const health_goals = await prisma.health_goals.findMany()
     * 
     * // Get first 10 Health_goals
     * const health_goals = await prisma.health_goals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const health_goalsWithIdOnly = await prisma.health_goals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends health_goalsFindManyArgs>(args?: SelectSubset<T, health_goalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$health_goalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Health_goals.
     * @param {health_goalsCreateArgs} args - Arguments to create a Health_goals.
     * @example
     * // Create one Health_goals
     * const Health_goals = await prisma.health_goals.create({
     *   data: {
     *     // ... data to create a Health_goals
     *   }
     * })
     * 
     */
    create<T extends health_goalsCreateArgs>(args: SelectSubset<T, health_goalsCreateArgs<ExtArgs>>): Prisma__health_goalsClient<$Result.GetResult<Prisma.$health_goalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Health_goals.
     * @param {health_goalsCreateManyArgs} args - Arguments to create many Health_goals.
     * @example
     * // Create many Health_goals
     * const health_goals = await prisma.health_goals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends health_goalsCreateManyArgs>(args?: SelectSubset<T, health_goalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Health_goals and returns the data saved in the database.
     * @param {health_goalsCreateManyAndReturnArgs} args - Arguments to create many Health_goals.
     * @example
     * // Create many Health_goals
     * const health_goals = await prisma.health_goals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Health_goals and only return the `id`
     * const health_goalsWithIdOnly = await prisma.health_goals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends health_goalsCreateManyAndReturnArgs>(args?: SelectSubset<T, health_goalsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$health_goalsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Health_goals.
     * @param {health_goalsDeleteArgs} args - Arguments to delete one Health_goals.
     * @example
     * // Delete one Health_goals
     * const Health_goals = await prisma.health_goals.delete({
     *   where: {
     *     // ... filter to delete one Health_goals
     *   }
     * })
     * 
     */
    delete<T extends health_goalsDeleteArgs>(args: SelectSubset<T, health_goalsDeleteArgs<ExtArgs>>): Prisma__health_goalsClient<$Result.GetResult<Prisma.$health_goalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Health_goals.
     * @param {health_goalsUpdateArgs} args - Arguments to update one Health_goals.
     * @example
     * // Update one Health_goals
     * const health_goals = await prisma.health_goals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends health_goalsUpdateArgs>(args: SelectSubset<T, health_goalsUpdateArgs<ExtArgs>>): Prisma__health_goalsClient<$Result.GetResult<Prisma.$health_goalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Health_goals.
     * @param {health_goalsDeleteManyArgs} args - Arguments to filter Health_goals to delete.
     * @example
     * // Delete a few Health_goals
     * const { count } = await prisma.health_goals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends health_goalsDeleteManyArgs>(args?: SelectSubset<T, health_goalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Health_goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {health_goalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Health_goals
     * const health_goals = await prisma.health_goals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends health_goalsUpdateManyArgs>(args: SelectSubset<T, health_goalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Health_goals and returns the data updated in the database.
     * @param {health_goalsUpdateManyAndReturnArgs} args - Arguments to update many Health_goals.
     * @example
     * // Update many Health_goals
     * const health_goals = await prisma.health_goals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Health_goals and only return the `id`
     * const health_goalsWithIdOnly = await prisma.health_goals.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends health_goalsUpdateManyAndReturnArgs>(args: SelectSubset<T, health_goalsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$health_goalsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Health_goals.
     * @param {health_goalsUpsertArgs} args - Arguments to update or create a Health_goals.
     * @example
     * // Update or create a Health_goals
     * const health_goals = await prisma.health_goals.upsert({
     *   create: {
     *     // ... data to create a Health_goals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Health_goals we want to update
     *   }
     * })
     */
    upsert<T extends health_goalsUpsertArgs>(args: SelectSubset<T, health_goalsUpsertArgs<ExtArgs>>): Prisma__health_goalsClient<$Result.GetResult<Prisma.$health_goalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Health_goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {health_goalsCountArgs} args - Arguments to filter Health_goals to count.
     * @example
     * // Count the number of Health_goals
     * const count = await prisma.health_goals.count({
     *   where: {
     *     // ... the filter for the Health_goals we want to count
     *   }
     * })
    **/
    count<T extends health_goalsCountArgs>(
      args?: Subset<T, health_goalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Health_goalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Health_goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Health_goalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Health_goalsAggregateArgs>(args: Subset<T, Health_goalsAggregateArgs>): Prisma.PrismaPromise<GetHealth_goalsAggregateType<T>>

    /**
     * Group by Health_goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {health_goalsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends health_goalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: health_goalsGroupByArgs['orderBy'] }
        : { orderBy?: health_goalsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, health_goalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHealth_goalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the health_goals model
   */
  readonly fields: health_goalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for health_goals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__health_goalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the health_goals model
   */
  interface health_goalsFieldRefs {
    readonly id: FieldRef<"health_goals", 'Int'>
    readonly name: FieldRef<"health_goals", 'String'>
    readonly userId: FieldRef<"health_goals", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * health_goals findUnique
   */
  export type health_goalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_goals
     */
    select?: health_goalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the health_goals
     */
    omit?: health_goalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: health_goalsInclude<ExtArgs> | null
    /**
     * Filter, which health_goals to fetch.
     */
    where: health_goalsWhereUniqueInput
  }

  /**
   * health_goals findUniqueOrThrow
   */
  export type health_goalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_goals
     */
    select?: health_goalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the health_goals
     */
    omit?: health_goalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: health_goalsInclude<ExtArgs> | null
    /**
     * Filter, which health_goals to fetch.
     */
    where: health_goalsWhereUniqueInput
  }

  /**
   * health_goals findFirst
   */
  export type health_goalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_goals
     */
    select?: health_goalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the health_goals
     */
    omit?: health_goalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: health_goalsInclude<ExtArgs> | null
    /**
     * Filter, which health_goals to fetch.
     */
    where?: health_goalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of health_goals to fetch.
     */
    orderBy?: health_goalsOrderByWithRelationInput | health_goalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for health_goals.
     */
    cursor?: health_goalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` health_goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` health_goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of health_goals.
     */
    distinct?: Health_goalsScalarFieldEnum | Health_goalsScalarFieldEnum[]
  }

  /**
   * health_goals findFirstOrThrow
   */
  export type health_goalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_goals
     */
    select?: health_goalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the health_goals
     */
    omit?: health_goalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: health_goalsInclude<ExtArgs> | null
    /**
     * Filter, which health_goals to fetch.
     */
    where?: health_goalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of health_goals to fetch.
     */
    orderBy?: health_goalsOrderByWithRelationInput | health_goalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for health_goals.
     */
    cursor?: health_goalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` health_goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` health_goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of health_goals.
     */
    distinct?: Health_goalsScalarFieldEnum | Health_goalsScalarFieldEnum[]
  }

  /**
   * health_goals findMany
   */
  export type health_goalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_goals
     */
    select?: health_goalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the health_goals
     */
    omit?: health_goalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: health_goalsInclude<ExtArgs> | null
    /**
     * Filter, which health_goals to fetch.
     */
    where?: health_goalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of health_goals to fetch.
     */
    orderBy?: health_goalsOrderByWithRelationInput | health_goalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing health_goals.
     */
    cursor?: health_goalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` health_goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` health_goals.
     */
    skip?: number
    distinct?: Health_goalsScalarFieldEnum | Health_goalsScalarFieldEnum[]
  }

  /**
   * health_goals create
   */
  export type health_goalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_goals
     */
    select?: health_goalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the health_goals
     */
    omit?: health_goalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: health_goalsInclude<ExtArgs> | null
    /**
     * The data needed to create a health_goals.
     */
    data: XOR<health_goalsCreateInput, health_goalsUncheckedCreateInput>
  }

  /**
   * health_goals createMany
   */
  export type health_goalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many health_goals.
     */
    data: health_goalsCreateManyInput | health_goalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * health_goals createManyAndReturn
   */
  export type health_goalsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_goals
     */
    select?: health_goalsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the health_goals
     */
    omit?: health_goalsOmit<ExtArgs> | null
    /**
     * The data used to create many health_goals.
     */
    data: health_goalsCreateManyInput | health_goalsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: health_goalsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * health_goals update
   */
  export type health_goalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_goals
     */
    select?: health_goalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the health_goals
     */
    omit?: health_goalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: health_goalsInclude<ExtArgs> | null
    /**
     * The data needed to update a health_goals.
     */
    data: XOR<health_goalsUpdateInput, health_goalsUncheckedUpdateInput>
    /**
     * Choose, which health_goals to update.
     */
    where: health_goalsWhereUniqueInput
  }

  /**
   * health_goals updateMany
   */
  export type health_goalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update health_goals.
     */
    data: XOR<health_goalsUpdateManyMutationInput, health_goalsUncheckedUpdateManyInput>
    /**
     * Filter which health_goals to update
     */
    where?: health_goalsWhereInput
    /**
     * Limit how many health_goals to update.
     */
    limit?: number
  }

  /**
   * health_goals updateManyAndReturn
   */
  export type health_goalsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_goals
     */
    select?: health_goalsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the health_goals
     */
    omit?: health_goalsOmit<ExtArgs> | null
    /**
     * The data used to update health_goals.
     */
    data: XOR<health_goalsUpdateManyMutationInput, health_goalsUncheckedUpdateManyInput>
    /**
     * Filter which health_goals to update
     */
    where?: health_goalsWhereInput
    /**
     * Limit how many health_goals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: health_goalsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * health_goals upsert
   */
  export type health_goalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_goals
     */
    select?: health_goalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the health_goals
     */
    omit?: health_goalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: health_goalsInclude<ExtArgs> | null
    /**
     * The filter to search for the health_goals to update in case it exists.
     */
    where: health_goalsWhereUniqueInput
    /**
     * In case the health_goals found by the `where` argument doesn't exist, create a new health_goals with this data.
     */
    create: XOR<health_goalsCreateInput, health_goalsUncheckedCreateInput>
    /**
     * In case the health_goals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<health_goalsUpdateInput, health_goalsUncheckedUpdateInput>
  }

  /**
   * health_goals delete
   */
  export type health_goalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_goals
     */
    select?: health_goalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the health_goals
     */
    omit?: health_goalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: health_goalsInclude<ExtArgs> | null
    /**
     * Filter which health_goals to delete.
     */
    where: health_goalsWhereUniqueInput
  }

  /**
   * health_goals deleteMany
   */
  export type health_goalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which health_goals to delete
     */
    where?: health_goalsWhereInput
    /**
     * Limit how many health_goals to delete.
     */
    limit?: number
  }

  /**
   * health_goals without action
   */
  export type health_goalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_goals
     */
    select?: health_goalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the health_goals
     */
    omit?: health_goalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: health_goalsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    phone_number: number | null
    age: number | null
    height: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    phone_number: number | null
    age: number | null
    height: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    phone_number: number | null
    name: string | null
    password: string | null
    age: number | null
    gender: string | null
    height: number | null
    purpose: string | null
    dietaryPreference: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    phone_number: number | null
    name: string | null
    password: string | null
    age: number | null
    gender: string | null
    height: number | null
    purpose: string | null
    dietaryPreference: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    phone_number: number
    name: number
    password: number
    age: number
    gender: number
    height: number
    purpose: number
    dietaryPreference: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    phone_number?: true
    age?: true
    height?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    phone_number?: true
    age?: true
    height?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    phone_number?: true
    name?: true
    password?: true
    age?: true
    gender?: true
    height?: true
    purpose?: true
    dietaryPreference?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    phone_number?: true
    name?: true
    password?: true
    age?: true
    gender?: true
    height?: true
    purpose?: true
    dietaryPreference?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    phone_number?: true
    name?: true
    password?: true
    age?: true
    gender?: true
    height?: true
    purpose?: true
    dietaryPreference?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    phone_number: number
    name: string
    password: string
    age: number
    gender: string
    height: number
    purpose: string
    dietaryPreference: string
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone_number?: boolean
    name?: boolean
    password?: boolean
    age?: boolean
    gender?: boolean
    height?: boolean
    purpose?: boolean
    dietaryPreference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    allergies?: boolean | users$allergiesArgs<ExtArgs>
    diseases?: boolean | users$diseasesArgs<ExtArgs>
    health_goals?: boolean | users$health_goalsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone_number?: boolean
    name?: boolean
    password?: boolean
    age?: boolean
    gender?: boolean
    height?: boolean
    purpose?: boolean
    dietaryPreference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone_number?: boolean
    name?: boolean
    password?: boolean
    age?: boolean
    gender?: boolean
    height?: boolean
    purpose?: boolean
    dietaryPreference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    phone_number?: boolean
    name?: boolean
    password?: boolean
    age?: boolean
    gender?: boolean
    height?: boolean
    purpose?: boolean
    dietaryPreference?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone_number" | "name" | "password" | "age" | "gender" | "height" | "purpose" | "dietaryPreference" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    allergies?: boolean | users$allergiesArgs<ExtArgs>
    diseases?: boolean | users$diseasesArgs<ExtArgs>
    health_goals?: boolean | users$health_goalsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      allergies: Prisma.$allergiesPayload<ExtArgs>[]
      diseases: Prisma.$diseasesPayload<ExtArgs>[]
      health_goals: Prisma.$health_goalsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      phone_number: number
      name: string
      password: string
      age: number
      gender: string
      height: number
      purpose: string
      dietaryPreference: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    allergies<T extends users$allergiesArgs<ExtArgs> = {}>(args?: Subset<T, users$allergiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$allergiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    diseases<T extends users$diseasesArgs<ExtArgs> = {}>(args?: Subset<T, users$diseasesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$diseasesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    health_goals<T extends users$health_goalsArgs<ExtArgs> = {}>(args?: Subset<T, users$health_goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$health_goalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly phone_number: FieldRef<"users", 'Int'>
    readonly name: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly age: FieldRef<"users", 'Int'>
    readonly gender: FieldRef<"users", 'String'>
    readonly height: FieldRef<"users", 'Float'>
    readonly purpose: FieldRef<"users", 'String'>
    readonly dietaryPreference: FieldRef<"users", 'String'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.allergies
   */
  export type users$allergiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the allergies
     */
    select?: allergiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the allergies
     */
    omit?: allergiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: allergiesInclude<ExtArgs> | null
    where?: allergiesWhereInput
    orderBy?: allergiesOrderByWithRelationInput | allergiesOrderByWithRelationInput[]
    cursor?: allergiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AllergiesScalarFieldEnum | AllergiesScalarFieldEnum[]
  }

  /**
   * users.diseases
   */
  export type users$diseasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the diseases
     */
    select?: diseasesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the diseases
     */
    omit?: diseasesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: diseasesInclude<ExtArgs> | null
    where?: diseasesWhereInput
    orderBy?: diseasesOrderByWithRelationInput | diseasesOrderByWithRelationInput[]
    cursor?: diseasesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiseasesScalarFieldEnum | DiseasesScalarFieldEnum[]
  }

  /**
   * users.health_goals
   */
  export type users$health_goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the health_goals
     */
    select?: health_goalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the health_goals
     */
    omit?: health_goalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: health_goalsInclude<ExtArgs> | null
    where?: health_goalsWhereInput
    orderBy?: health_goalsOrderByWithRelationInput | health_goalsOrderByWithRelationInput[]
    cursor?: health_goalsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Health_goalsScalarFieldEnum | Health_goalsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AllergiesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId'
  };

  export type AllergiesScalarFieldEnum = (typeof AllergiesScalarFieldEnum)[keyof typeof AllergiesScalarFieldEnum]


  export const DiseasesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId'
  };

  export type DiseasesScalarFieldEnum = (typeof DiseasesScalarFieldEnum)[keyof typeof DiseasesScalarFieldEnum]


  export const Health_goalsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId'
  };

  export type Health_goalsScalarFieldEnum = (typeof Health_goalsScalarFieldEnum)[keyof typeof Health_goalsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    phone_number: 'phone_number',
    name: 'name',
    password: 'password',
    age: 'age',
    gender: 'gender',
    height: 'height',
    purpose: 'purpose',
    dietaryPreference: 'dietaryPreference',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type allergiesWhereInput = {
    AND?: allergiesWhereInput | allergiesWhereInput[]
    OR?: allergiesWhereInput[]
    NOT?: allergiesWhereInput | allergiesWhereInput[]
    id?: IntFilter<"allergies"> | number
    name?: StringFilter<"allergies"> | string
    userId?: IntFilter<"allergies"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type allergiesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type allergiesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: allergiesWhereInput | allergiesWhereInput[]
    OR?: allergiesWhereInput[]
    NOT?: allergiesWhereInput | allergiesWhereInput[]
    name?: StringFilter<"allergies"> | string
    userId?: IntFilter<"allergies"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type allergiesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    _count?: allergiesCountOrderByAggregateInput
    _avg?: allergiesAvgOrderByAggregateInput
    _max?: allergiesMaxOrderByAggregateInput
    _min?: allergiesMinOrderByAggregateInput
    _sum?: allergiesSumOrderByAggregateInput
  }

  export type allergiesScalarWhereWithAggregatesInput = {
    AND?: allergiesScalarWhereWithAggregatesInput | allergiesScalarWhereWithAggregatesInput[]
    OR?: allergiesScalarWhereWithAggregatesInput[]
    NOT?: allergiesScalarWhereWithAggregatesInput | allergiesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"allergies"> | number
    name?: StringWithAggregatesFilter<"allergies"> | string
    userId?: IntWithAggregatesFilter<"allergies"> | number
  }

  export type diseasesWhereInput = {
    AND?: diseasesWhereInput | diseasesWhereInput[]
    OR?: diseasesWhereInput[]
    NOT?: diseasesWhereInput | diseasesWhereInput[]
    id?: IntFilter<"diseases"> | number
    name?: StringFilter<"diseases"> | string
    userId?: IntFilter<"diseases"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type diseasesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type diseasesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: diseasesWhereInput | diseasesWhereInput[]
    OR?: diseasesWhereInput[]
    NOT?: diseasesWhereInput | diseasesWhereInput[]
    name?: StringFilter<"diseases"> | string
    userId?: IntFilter<"diseases"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type diseasesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    _count?: diseasesCountOrderByAggregateInput
    _avg?: diseasesAvgOrderByAggregateInput
    _max?: diseasesMaxOrderByAggregateInput
    _min?: diseasesMinOrderByAggregateInput
    _sum?: diseasesSumOrderByAggregateInput
  }

  export type diseasesScalarWhereWithAggregatesInput = {
    AND?: diseasesScalarWhereWithAggregatesInput | diseasesScalarWhereWithAggregatesInput[]
    OR?: diseasesScalarWhereWithAggregatesInput[]
    NOT?: diseasesScalarWhereWithAggregatesInput | diseasesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"diseases"> | number
    name?: StringWithAggregatesFilter<"diseases"> | string
    userId?: IntWithAggregatesFilter<"diseases"> | number
  }

  export type health_goalsWhereInput = {
    AND?: health_goalsWhereInput | health_goalsWhereInput[]
    OR?: health_goalsWhereInput[]
    NOT?: health_goalsWhereInput | health_goalsWhereInput[]
    id?: IntFilter<"health_goals"> | number
    name?: StringFilter<"health_goals"> | string
    userId?: IntFilter<"health_goals"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type health_goalsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type health_goalsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: health_goalsWhereInput | health_goalsWhereInput[]
    OR?: health_goalsWhereInput[]
    NOT?: health_goalsWhereInput | health_goalsWhereInput[]
    name?: StringFilter<"health_goals"> | string
    userId?: IntFilter<"health_goals"> | number
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type health_goalsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    _count?: health_goalsCountOrderByAggregateInput
    _avg?: health_goalsAvgOrderByAggregateInput
    _max?: health_goalsMaxOrderByAggregateInput
    _min?: health_goalsMinOrderByAggregateInput
    _sum?: health_goalsSumOrderByAggregateInput
  }

  export type health_goalsScalarWhereWithAggregatesInput = {
    AND?: health_goalsScalarWhereWithAggregatesInput | health_goalsScalarWhereWithAggregatesInput[]
    OR?: health_goalsScalarWhereWithAggregatesInput[]
    NOT?: health_goalsScalarWhereWithAggregatesInput | health_goalsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"health_goals"> | number
    name?: StringWithAggregatesFilter<"health_goals"> | string
    userId?: IntWithAggregatesFilter<"health_goals"> | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    phone_number?: IntFilter<"users"> | number
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    age?: IntFilter<"users"> | number
    gender?: StringFilter<"users"> | string
    height?: FloatFilter<"users"> | number
    purpose?: StringFilter<"users"> | string
    dietaryPreference?: StringFilter<"users"> | string
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    allergies?: AllergiesListRelationFilter
    diseases?: DiseasesListRelationFilter
    health_goals?: Health_goalsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    phone_number?: SortOrder
    name?: SortOrder
    password?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    height?: SortOrder
    purpose?: SortOrder
    dietaryPreference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    allergies?: allergiesOrderByRelationAggregateInput
    diseases?: diseasesOrderByRelationAggregateInput
    health_goals?: health_goalsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone_number?: number
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    name?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    age?: IntFilter<"users"> | number
    gender?: StringFilter<"users"> | string
    height?: FloatFilter<"users"> | number
    purpose?: StringFilter<"users"> | string
    dietaryPreference?: StringFilter<"users"> | string
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    allergies?: AllergiesListRelationFilter
    diseases?: DiseasesListRelationFilter
    health_goals?: Health_goalsListRelationFilter
  }, "id" | "phone_number">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    phone_number?: SortOrder
    name?: SortOrder
    password?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    height?: SortOrder
    purpose?: SortOrder
    dietaryPreference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    phone_number?: IntWithAggregatesFilter<"users"> | number
    name?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    age?: IntWithAggregatesFilter<"users"> | number
    gender?: StringWithAggregatesFilter<"users"> | string
    height?: FloatWithAggregatesFilter<"users"> | number
    purpose?: StringWithAggregatesFilter<"users"> | string
    dietaryPreference?: StringWithAggregatesFilter<"users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type allergiesCreateInput = {
    name: string
    users: usersCreateNestedOneWithoutAllergiesInput
  }

  export type allergiesUncheckedCreateInput = {
    id?: number
    name: string
    userId: number
  }

  export type allergiesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutAllergiesNestedInput
  }

  export type allergiesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type allergiesCreateManyInput = {
    id?: number
    name: string
    userId: number
  }

  export type allergiesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type allergiesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type diseasesCreateInput = {
    name: string
    users: usersCreateNestedOneWithoutDiseasesInput
  }

  export type diseasesUncheckedCreateInput = {
    id?: number
    name: string
    userId: number
  }

  export type diseasesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutDiseasesNestedInput
  }

  export type diseasesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type diseasesCreateManyInput = {
    id?: number
    name: string
    userId: number
  }

  export type diseasesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type diseasesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type health_goalsCreateInput = {
    name: string
    users: usersCreateNestedOneWithoutHealth_goalsInput
  }

  export type health_goalsUncheckedCreateInput = {
    id?: number
    name: string
    userId: number
  }

  export type health_goalsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: usersUpdateOneRequiredWithoutHealth_goalsNestedInput
  }

  export type health_goalsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type health_goalsCreateManyInput = {
    id?: number
    name: string
    userId: number
  }

  export type health_goalsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type health_goalsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    phone_number: number
    name: string
    password: string
    age: number
    gender: string
    height: number
    purpose: string
    dietaryPreference: string
    createdAt?: Date | string
    updatedAt: Date | string
    allergies?: allergiesCreateNestedManyWithoutUsersInput
    diseases?: diseasesCreateNestedManyWithoutUsersInput
    health_goals?: health_goalsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    phone_number: number
    name: string
    password: string
    age: number
    gender: string
    height: number
    purpose: string
    dietaryPreference: string
    createdAt?: Date | string
    updatedAt: Date | string
    allergies?: allergiesUncheckedCreateNestedManyWithoutUsersInput
    diseases?: diseasesUncheckedCreateNestedManyWithoutUsersInput
    health_goals?: health_goalsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    phone_number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allergies?: allergiesUpdateManyWithoutUsersNestedInput
    diseases?: diseasesUpdateManyWithoutUsersNestedInput
    health_goals?: health_goalsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone_number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allergies?: allergiesUncheckedUpdateManyWithoutUsersNestedInput
    diseases?: diseasesUncheckedUpdateManyWithoutUsersNestedInput
    health_goals?: health_goalsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    phone_number: number
    name: string
    password: string
    age: number
    gender: string
    height: number
    purpose: string
    dietaryPreference: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type usersUpdateManyMutationInput = {
    phone_number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone_number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type allergiesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type allergiesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type allergiesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type allergiesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type allergiesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type diseasesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type diseasesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type diseasesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type diseasesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type diseasesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type health_goalsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type health_goalsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type health_goalsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type health_goalsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
  }

  export type health_goalsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AllergiesListRelationFilter = {
    every?: allergiesWhereInput
    some?: allergiesWhereInput
    none?: allergiesWhereInput
  }

  export type DiseasesListRelationFilter = {
    every?: diseasesWhereInput
    some?: diseasesWhereInput
    none?: diseasesWhereInput
  }

  export type Health_goalsListRelationFilter = {
    every?: health_goalsWhereInput
    some?: health_goalsWhereInput
    none?: health_goalsWhereInput
  }

  export type allergiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type diseasesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type health_goalsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    phone_number?: SortOrder
    name?: SortOrder
    password?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    height?: SortOrder
    purpose?: SortOrder
    dietaryPreference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
    phone_number?: SortOrder
    age?: SortOrder
    height?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    phone_number?: SortOrder
    name?: SortOrder
    password?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    height?: SortOrder
    purpose?: SortOrder
    dietaryPreference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    phone_number?: SortOrder
    name?: SortOrder
    password?: SortOrder
    age?: SortOrder
    gender?: SortOrder
    height?: SortOrder
    purpose?: SortOrder
    dietaryPreference?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
    phone_number?: SortOrder
    age?: SortOrder
    height?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type usersCreateNestedOneWithoutAllergiesInput = {
    create?: XOR<usersCreateWithoutAllergiesInput, usersUncheckedCreateWithoutAllergiesInput>
    connectOrCreate?: usersCreateOrConnectWithoutAllergiesInput
    connect?: usersWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type usersUpdateOneRequiredWithoutAllergiesNestedInput = {
    create?: XOR<usersCreateWithoutAllergiesInput, usersUncheckedCreateWithoutAllergiesInput>
    connectOrCreate?: usersCreateOrConnectWithoutAllergiesInput
    upsert?: usersUpsertWithoutAllergiesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAllergiesInput, usersUpdateWithoutAllergiesInput>, usersUncheckedUpdateWithoutAllergiesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersCreateNestedOneWithoutDiseasesInput = {
    create?: XOR<usersCreateWithoutDiseasesInput, usersUncheckedCreateWithoutDiseasesInput>
    connectOrCreate?: usersCreateOrConnectWithoutDiseasesInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutDiseasesNestedInput = {
    create?: XOR<usersCreateWithoutDiseasesInput, usersUncheckedCreateWithoutDiseasesInput>
    connectOrCreate?: usersCreateOrConnectWithoutDiseasesInput
    upsert?: usersUpsertWithoutDiseasesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutDiseasesInput, usersUpdateWithoutDiseasesInput>, usersUncheckedUpdateWithoutDiseasesInput>
  }

  export type usersCreateNestedOneWithoutHealth_goalsInput = {
    create?: XOR<usersCreateWithoutHealth_goalsInput, usersUncheckedCreateWithoutHealth_goalsInput>
    connectOrCreate?: usersCreateOrConnectWithoutHealth_goalsInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutHealth_goalsNestedInput = {
    create?: XOR<usersCreateWithoutHealth_goalsInput, usersUncheckedCreateWithoutHealth_goalsInput>
    connectOrCreate?: usersCreateOrConnectWithoutHealth_goalsInput
    upsert?: usersUpsertWithoutHealth_goalsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutHealth_goalsInput, usersUpdateWithoutHealth_goalsInput>, usersUncheckedUpdateWithoutHealth_goalsInput>
  }

  export type allergiesCreateNestedManyWithoutUsersInput = {
    create?: XOR<allergiesCreateWithoutUsersInput, allergiesUncheckedCreateWithoutUsersInput> | allergiesCreateWithoutUsersInput[] | allergiesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: allergiesCreateOrConnectWithoutUsersInput | allergiesCreateOrConnectWithoutUsersInput[]
    createMany?: allergiesCreateManyUsersInputEnvelope
    connect?: allergiesWhereUniqueInput | allergiesWhereUniqueInput[]
  }

  export type diseasesCreateNestedManyWithoutUsersInput = {
    create?: XOR<diseasesCreateWithoutUsersInput, diseasesUncheckedCreateWithoutUsersInput> | diseasesCreateWithoutUsersInput[] | diseasesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: diseasesCreateOrConnectWithoutUsersInput | diseasesCreateOrConnectWithoutUsersInput[]
    createMany?: diseasesCreateManyUsersInputEnvelope
    connect?: diseasesWhereUniqueInput | diseasesWhereUniqueInput[]
  }

  export type health_goalsCreateNestedManyWithoutUsersInput = {
    create?: XOR<health_goalsCreateWithoutUsersInput, health_goalsUncheckedCreateWithoutUsersInput> | health_goalsCreateWithoutUsersInput[] | health_goalsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: health_goalsCreateOrConnectWithoutUsersInput | health_goalsCreateOrConnectWithoutUsersInput[]
    createMany?: health_goalsCreateManyUsersInputEnvelope
    connect?: health_goalsWhereUniqueInput | health_goalsWhereUniqueInput[]
  }

  export type allergiesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<allergiesCreateWithoutUsersInput, allergiesUncheckedCreateWithoutUsersInput> | allergiesCreateWithoutUsersInput[] | allergiesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: allergiesCreateOrConnectWithoutUsersInput | allergiesCreateOrConnectWithoutUsersInput[]
    createMany?: allergiesCreateManyUsersInputEnvelope
    connect?: allergiesWhereUniqueInput | allergiesWhereUniqueInput[]
  }

  export type diseasesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<diseasesCreateWithoutUsersInput, diseasesUncheckedCreateWithoutUsersInput> | diseasesCreateWithoutUsersInput[] | diseasesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: diseasesCreateOrConnectWithoutUsersInput | diseasesCreateOrConnectWithoutUsersInput[]
    createMany?: diseasesCreateManyUsersInputEnvelope
    connect?: diseasesWhereUniqueInput | diseasesWhereUniqueInput[]
  }

  export type health_goalsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<health_goalsCreateWithoutUsersInput, health_goalsUncheckedCreateWithoutUsersInput> | health_goalsCreateWithoutUsersInput[] | health_goalsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: health_goalsCreateOrConnectWithoutUsersInput | health_goalsCreateOrConnectWithoutUsersInput[]
    createMany?: health_goalsCreateManyUsersInputEnvelope
    connect?: health_goalsWhereUniqueInput | health_goalsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type allergiesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<allergiesCreateWithoutUsersInput, allergiesUncheckedCreateWithoutUsersInput> | allergiesCreateWithoutUsersInput[] | allergiesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: allergiesCreateOrConnectWithoutUsersInput | allergiesCreateOrConnectWithoutUsersInput[]
    upsert?: allergiesUpsertWithWhereUniqueWithoutUsersInput | allergiesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: allergiesCreateManyUsersInputEnvelope
    set?: allergiesWhereUniqueInput | allergiesWhereUniqueInput[]
    disconnect?: allergiesWhereUniqueInput | allergiesWhereUniqueInput[]
    delete?: allergiesWhereUniqueInput | allergiesWhereUniqueInput[]
    connect?: allergiesWhereUniqueInput | allergiesWhereUniqueInput[]
    update?: allergiesUpdateWithWhereUniqueWithoutUsersInput | allergiesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: allergiesUpdateManyWithWhereWithoutUsersInput | allergiesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: allergiesScalarWhereInput | allergiesScalarWhereInput[]
  }

  export type diseasesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<diseasesCreateWithoutUsersInput, diseasesUncheckedCreateWithoutUsersInput> | diseasesCreateWithoutUsersInput[] | diseasesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: diseasesCreateOrConnectWithoutUsersInput | diseasesCreateOrConnectWithoutUsersInput[]
    upsert?: diseasesUpsertWithWhereUniqueWithoutUsersInput | diseasesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: diseasesCreateManyUsersInputEnvelope
    set?: diseasesWhereUniqueInput | diseasesWhereUniqueInput[]
    disconnect?: diseasesWhereUniqueInput | diseasesWhereUniqueInput[]
    delete?: diseasesWhereUniqueInput | diseasesWhereUniqueInput[]
    connect?: diseasesWhereUniqueInput | diseasesWhereUniqueInput[]
    update?: diseasesUpdateWithWhereUniqueWithoutUsersInput | diseasesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: diseasesUpdateManyWithWhereWithoutUsersInput | diseasesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: diseasesScalarWhereInput | diseasesScalarWhereInput[]
  }

  export type health_goalsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<health_goalsCreateWithoutUsersInput, health_goalsUncheckedCreateWithoutUsersInput> | health_goalsCreateWithoutUsersInput[] | health_goalsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: health_goalsCreateOrConnectWithoutUsersInput | health_goalsCreateOrConnectWithoutUsersInput[]
    upsert?: health_goalsUpsertWithWhereUniqueWithoutUsersInput | health_goalsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: health_goalsCreateManyUsersInputEnvelope
    set?: health_goalsWhereUniqueInput | health_goalsWhereUniqueInput[]
    disconnect?: health_goalsWhereUniqueInput | health_goalsWhereUniqueInput[]
    delete?: health_goalsWhereUniqueInput | health_goalsWhereUniqueInput[]
    connect?: health_goalsWhereUniqueInput | health_goalsWhereUniqueInput[]
    update?: health_goalsUpdateWithWhereUniqueWithoutUsersInput | health_goalsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: health_goalsUpdateManyWithWhereWithoutUsersInput | health_goalsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: health_goalsScalarWhereInput | health_goalsScalarWhereInput[]
  }

  export type allergiesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<allergiesCreateWithoutUsersInput, allergiesUncheckedCreateWithoutUsersInput> | allergiesCreateWithoutUsersInput[] | allergiesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: allergiesCreateOrConnectWithoutUsersInput | allergiesCreateOrConnectWithoutUsersInput[]
    upsert?: allergiesUpsertWithWhereUniqueWithoutUsersInput | allergiesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: allergiesCreateManyUsersInputEnvelope
    set?: allergiesWhereUniqueInput | allergiesWhereUniqueInput[]
    disconnect?: allergiesWhereUniqueInput | allergiesWhereUniqueInput[]
    delete?: allergiesWhereUniqueInput | allergiesWhereUniqueInput[]
    connect?: allergiesWhereUniqueInput | allergiesWhereUniqueInput[]
    update?: allergiesUpdateWithWhereUniqueWithoutUsersInput | allergiesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: allergiesUpdateManyWithWhereWithoutUsersInput | allergiesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: allergiesScalarWhereInput | allergiesScalarWhereInput[]
  }

  export type diseasesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<diseasesCreateWithoutUsersInput, diseasesUncheckedCreateWithoutUsersInput> | diseasesCreateWithoutUsersInput[] | diseasesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: diseasesCreateOrConnectWithoutUsersInput | diseasesCreateOrConnectWithoutUsersInput[]
    upsert?: diseasesUpsertWithWhereUniqueWithoutUsersInput | diseasesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: diseasesCreateManyUsersInputEnvelope
    set?: diseasesWhereUniqueInput | diseasesWhereUniqueInput[]
    disconnect?: diseasesWhereUniqueInput | diseasesWhereUniqueInput[]
    delete?: diseasesWhereUniqueInput | diseasesWhereUniqueInput[]
    connect?: diseasesWhereUniqueInput | diseasesWhereUniqueInput[]
    update?: diseasesUpdateWithWhereUniqueWithoutUsersInput | diseasesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: diseasesUpdateManyWithWhereWithoutUsersInput | diseasesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: diseasesScalarWhereInput | diseasesScalarWhereInput[]
  }

  export type health_goalsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<health_goalsCreateWithoutUsersInput, health_goalsUncheckedCreateWithoutUsersInput> | health_goalsCreateWithoutUsersInput[] | health_goalsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: health_goalsCreateOrConnectWithoutUsersInput | health_goalsCreateOrConnectWithoutUsersInput[]
    upsert?: health_goalsUpsertWithWhereUniqueWithoutUsersInput | health_goalsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: health_goalsCreateManyUsersInputEnvelope
    set?: health_goalsWhereUniqueInput | health_goalsWhereUniqueInput[]
    disconnect?: health_goalsWhereUniqueInput | health_goalsWhereUniqueInput[]
    delete?: health_goalsWhereUniqueInput | health_goalsWhereUniqueInput[]
    connect?: health_goalsWhereUniqueInput | health_goalsWhereUniqueInput[]
    update?: health_goalsUpdateWithWhereUniqueWithoutUsersInput | health_goalsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: health_goalsUpdateManyWithWhereWithoutUsersInput | health_goalsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: health_goalsScalarWhereInput | health_goalsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type usersCreateWithoutAllergiesInput = {
    phone_number: number
    name: string
    password: string
    age: number
    gender: string
    height: number
    purpose: string
    dietaryPreference: string
    createdAt?: Date | string
    updatedAt: Date | string
    diseases?: diseasesCreateNestedManyWithoutUsersInput
    health_goals?: health_goalsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAllergiesInput = {
    id?: number
    phone_number: number
    name: string
    password: string
    age: number
    gender: string
    height: number
    purpose: string
    dietaryPreference: string
    createdAt?: Date | string
    updatedAt: Date | string
    diseases?: diseasesUncheckedCreateNestedManyWithoutUsersInput
    health_goals?: health_goalsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAllergiesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAllergiesInput, usersUncheckedCreateWithoutAllergiesInput>
  }

  export type usersUpsertWithoutAllergiesInput = {
    update: XOR<usersUpdateWithoutAllergiesInput, usersUncheckedUpdateWithoutAllergiesInput>
    create: XOR<usersCreateWithoutAllergiesInput, usersUncheckedCreateWithoutAllergiesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAllergiesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAllergiesInput, usersUncheckedUpdateWithoutAllergiesInput>
  }

  export type usersUpdateWithoutAllergiesInput = {
    phone_number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diseases?: diseasesUpdateManyWithoutUsersNestedInput
    health_goals?: health_goalsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAllergiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone_number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diseases?: diseasesUncheckedUpdateManyWithoutUsersNestedInput
    health_goals?: health_goalsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutDiseasesInput = {
    phone_number: number
    name: string
    password: string
    age: number
    gender: string
    height: number
    purpose: string
    dietaryPreference: string
    createdAt?: Date | string
    updatedAt: Date | string
    allergies?: allergiesCreateNestedManyWithoutUsersInput
    health_goals?: health_goalsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutDiseasesInput = {
    id?: number
    phone_number: number
    name: string
    password: string
    age: number
    gender: string
    height: number
    purpose: string
    dietaryPreference: string
    createdAt?: Date | string
    updatedAt: Date | string
    allergies?: allergiesUncheckedCreateNestedManyWithoutUsersInput
    health_goals?: health_goalsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutDiseasesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutDiseasesInput, usersUncheckedCreateWithoutDiseasesInput>
  }

  export type usersUpsertWithoutDiseasesInput = {
    update: XOR<usersUpdateWithoutDiseasesInput, usersUncheckedUpdateWithoutDiseasesInput>
    create: XOR<usersCreateWithoutDiseasesInput, usersUncheckedCreateWithoutDiseasesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutDiseasesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutDiseasesInput, usersUncheckedUpdateWithoutDiseasesInput>
  }

  export type usersUpdateWithoutDiseasesInput = {
    phone_number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allergies?: allergiesUpdateManyWithoutUsersNestedInput
    health_goals?: health_goalsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutDiseasesInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone_number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allergies?: allergiesUncheckedUpdateManyWithoutUsersNestedInput
    health_goals?: health_goalsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateWithoutHealth_goalsInput = {
    phone_number: number
    name: string
    password: string
    age: number
    gender: string
    height: number
    purpose: string
    dietaryPreference: string
    createdAt?: Date | string
    updatedAt: Date | string
    allergies?: allergiesCreateNestedManyWithoutUsersInput
    diseases?: diseasesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutHealth_goalsInput = {
    id?: number
    phone_number: number
    name: string
    password: string
    age: number
    gender: string
    height: number
    purpose: string
    dietaryPreference: string
    createdAt?: Date | string
    updatedAt: Date | string
    allergies?: allergiesUncheckedCreateNestedManyWithoutUsersInput
    diseases?: diseasesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutHealth_goalsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutHealth_goalsInput, usersUncheckedCreateWithoutHealth_goalsInput>
  }

  export type usersUpsertWithoutHealth_goalsInput = {
    update: XOR<usersUpdateWithoutHealth_goalsInput, usersUncheckedUpdateWithoutHealth_goalsInput>
    create: XOR<usersCreateWithoutHealth_goalsInput, usersUncheckedCreateWithoutHealth_goalsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutHealth_goalsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutHealth_goalsInput, usersUncheckedUpdateWithoutHealth_goalsInput>
  }

  export type usersUpdateWithoutHealth_goalsInput = {
    phone_number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allergies?: allergiesUpdateManyWithoutUsersNestedInput
    diseases?: diseasesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutHealth_goalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone_number?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    age?: IntFieldUpdateOperationsInput | number
    gender?: StringFieldUpdateOperationsInput | string
    height?: FloatFieldUpdateOperationsInput | number
    purpose?: StringFieldUpdateOperationsInput | string
    dietaryPreference?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    allergies?: allergiesUncheckedUpdateManyWithoutUsersNestedInput
    diseases?: diseasesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type allergiesCreateWithoutUsersInput = {
    name: string
  }

  export type allergiesUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type allergiesCreateOrConnectWithoutUsersInput = {
    where: allergiesWhereUniqueInput
    create: XOR<allergiesCreateWithoutUsersInput, allergiesUncheckedCreateWithoutUsersInput>
  }

  export type allergiesCreateManyUsersInputEnvelope = {
    data: allergiesCreateManyUsersInput | allergiesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type diseasesCreateWithoutUsersInput = {
    name: string
  }

  export type diseasesUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type diseasesCreateOrConnectWithoutUsersInput = {
    where: diseasesWhereUniqueInput
    create: XOR<diseasesCreateWithoutUsersInput, diseasesUncheckedCreateWithoutUsersInput>
  }

  export type diseasesCreateManyUsersInputEnvelope = {
    data: diseasesCreateManyUsersInput | diseasesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type health_goalsCreateWithoutUsersInput = {
    name: string
  }

  export type health_goalsUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type health_goalsCreateOrConnectWithoutUsersInput = {
    where: health_goalsWhereUniqueInput
    create: XOR<health_goalsCreateWithoutUsersInput, health_goalsUncheckedCreateWithoutUsersInput>
  }

  export type health_goalsCreateManyUsersInputEnvelope = {
    data: health_goalsCreateManyUsersInput | health_goalsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type allergiesUpsertWithWhereUniqueWithoutUsersInput = {
    where: allergiesWhereUniqueInput
    update: XOR<allergiesUpdateWithoutUsersInput, allergiesUncheckedUpdateWithoutUsersInput>
    create: XOR<allergiesCreateWithoutUsersInput, allergiesUncheckedCreateWithoutUsersInput>
  }

  export type allergiesUpdateWithWhereUniqueWithoutUsersInput = {
    where: allergiesWhereUniqueInput
    data: XOR<allergiesUpdateWithoutUsersInput, allergiesUncheckedUpdateWithoutUsersInput>
  }

  export type allergiesUpdateManyWithWhereWithoutUsersInput = {
    where: allergiesScalarWhereInput
    data: XOR<allergiesUpdateManyMutationInput, allergiesUncheckedUpdateManyWithoutUsersInput>
  }

  export type allergiesScalarWhereInput = {
    AND?: allergiesScalarWhereInput | allergiesScalarWhereInput[]
    OR?: allergiesScalarWhereInput[]
    NOT?: allergiesScalarWhereInput | allergiesScalarWhereInput[]
    id?: IntFilter<"allergies"> | number
    name?: StringFilter<"allergies"> | string
    userId?: IntFilter<"allergies"> | number
  }

  export type diseasesUpsertWithWhereUniqueWithoutUsersInput = {
    where: diseasesWhereUniqueInput
    update: XOR<diseasesUpdateWithoutUsersInput, diseasesUncheckedUpdateWithoutUsersInput>
    create: XOR<diseasesCreateWithoutUsersInput, diseasesUncheckedCreateWithoutUsersInput>
  }

  export type diseasesUpdateWithWhereUniqueWithoutUsersInput = {
    where: diseasesWhereUniqueInput
    data: XOR<diseasesUpdateWithoutUsersInput, diseasesUncheckedUpdateWithoutUsersInput>
  }

  export type diseasesUpdateManyWithWhereWithoutUsersInput = {
    where: diseasesScalarWhereInput
    data: XOR<diseasesUpdateManyMutationInput, diseasesUncheckedUpdateManyWithoutUsersInput>
  }

  export type diseasesScalarWhereInput = {
    AND?: diseasesScalarWhereInput | diseasesScalarWhereInput[]
    OR?: diseasesScalarWhereInput[]
    NOT?: diseasesScalarWhereInput | diseasesScalarWhereInput[]
    id?: IntFilter<"diseases"> | number
    name?: StringFilter<"diseases"> | string
    userId?: IntFilter<"diseases"> | number
  }

  export type health_goalsUpsertWithWhereUniqueWithoutUsersInput = {
    where: health_goalsWhereUniqueInput
    update: XOR<health_goalsUpdateWithoutUsersInput, health_goalsUncheckedUpdateWithoutUsersInput>
    create: XOR<health_goalsCreateWithoutUsersInput, health_goalsUncheckedCreateWithoutUsersInput>
  }

  export type health_goalsUpdateWithWhereUniqueWithoutUsersInput = {
    where: health_goalsWhereUniqueInput
    data: XOR<health_goalsUpdateWithoutUsersInput, health_goalsUncheckedUpdateWithoutUsersInput>
  }

  export type health_goalsUpdateManyWithWhereWithoutUsersInput = {
    where: health_goalsScalarWhereInput
    data: XOR<health_goalsUpdateManyMutationInput, health_goalsUncheckedUpdateManyWithoutUsersInput>
  }

  export type health_goalsScalarWhereInput = {
    AND?: health_goalsScalarWhereInput | health_goalsScalarWhereInput[]
    OR?: health_goalsScalarWhereInput[]
    NOT?: health_goalsScalarWhereInput | health_goalsScalarWhereInput[]
    id?: IntFilter<"health_goals"> | number
    name?: StringFilter<"health_goals"> | string
    userId?: IntFilter<"health_goals"> | number
  }

  export type allergiesCreateManyUsersInput = {
    id?: number
    name: string
  }

  export type diseasesCreateManyUsersInput = {
    id?: number
    name: string
  }

  export type health_goalsCreateManyUsersInput = {
    id?: number
    name: string
  }

  export type allergiesUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type allergiesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type allergiesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type diseasesUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type diseasesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type diseasesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type health_goalsUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type health_goalsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type health_goalsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}