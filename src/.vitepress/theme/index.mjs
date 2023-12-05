import DefaultTheme from "vitepress/theme"
import "./style.css"

const components = import.meta.glob("./components/**/*.vue")

const theme = {
  ...DefaultTheme,
  async enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    for (const [path, component] of Object.entries(components).map(
      ([p, load]) => [p, load()],
    )) {
      const componentName = /([-a-z]+)\.vue$/u.exec(path)[1]
      ctx.app.component(
        componentName,
        await component.then((m) => m.default || m),
      )
    }
  },
}
export default theme
