There are some caveats to know here:
- [In development (`next dev`), `getStaticProps` is called on every request](https://nextjs.org/docs/basic-features/data-fetching/get-static-props#runs-on-every-request-in-development). Because of this, you would need to build(`npm run build`) and run(`npm run start`) the application every time. We have abstracted this for you by adding a script to `prototype` the application, simply execute `npm run prototype` to see the production functionality in action.
- To avoid unnecessary computing, Next.js saves the previously generated pages inside the `.next/` folder. This would prevent us from seeing some functionality, because of this, we remove the `.next/` folder when you run the `prototype` command introduced in the previous point.
- When running on dev(`npm run dev`), although the initial HTML returned is complete, the browser will show a white page until the JS has been downloaded, which is clearly visible when throttling the network. This can be avoided by running the app in production mode, which again, can be accomplished by using the `prototype` script(`npm run prototype`) mentioned above.
- Hovering over a `Link` will pre-fetch that page, because of this, we created our own `NoPrefetchLink` component to avoid pre-fetching and, therefore, support the purpose of this application.