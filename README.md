# Goal

Find out if TypeScript can validate JSON.

# Method

Create JSON files and import them. Validate against a type.

This requires enabling the apparently poorly documented [`resolveJsonModule`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-9.html#new---resolvejsonmodule) option.

# Result

Found that `interface` types are enforced, including allowing [type widening](https://blog.mariusschulz.com/2017/02/04/typescript-2-1-literal-type-widening) (the opposite of flow's `{| |}`).

![](https://cl.ly/01e0ca57cd96/Image%202018-12-05%20at%202.21.19%20PM.png)

# Run

Install dependencies:

```
npm install
```

Run TypeScript checker with `npm run start`, `npm run test`, or `npx tsc --noEmit`.