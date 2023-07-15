import debounce from "lodash/debounce.js"
export const loadGhButtonsScript = debounce(function setupGh() {
  loadScript("gh-buttons-script", "https://buttons.github.io/buttons.js")
}, 1000)
export const loadFbButtonsScript = debounce(function setupGh() {
  loadScript(
    "facebook-jssdk",
    "https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.11",
  )
}, 1000)
export const loadHatenaButtonsScript = debounce(function setupGh() {
  loadScript(
    "hatena-buttons-script",
    "https://b.st-hatena.com/js/bookmark_button.js",
  )
}, 1000)

function loadScript(id, src) {
  const target = document.getElementById(id)
  if (target) {
    target.parentElement.removeChild(target)
  }
  const firstScript = document.getElementsByTagName("script")[0]
  const js = document.createElement("script")
  js.id = id
  js.src = src
  firstScript.parentNode.insertBefore(js, firstScript)
}
