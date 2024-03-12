export default function CssNesting() {
  return <>
    <h1>A h1 tag!</h1>
    <div className="parent">
      <div>
        <p>Grandchild</p>
      </div>
    </div>
  </>
}
