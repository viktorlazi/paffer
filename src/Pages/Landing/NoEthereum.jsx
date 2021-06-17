function NoEthereum() {
  return (
    <div style={{display:'flex', flexDirection:'column', textAlign:'center'}}>
      <h1>
        No ethereum browser found.
      </h1>
      <h2>
        To run this app please add Metamask to your browser.
      </h2>
      <h4>
        <a style={{color:'blue'}} href="https://metamask.io/download">https://metamask.io/download</a>
      </h4>
    </div>
  )
}
export default NoEthereum;