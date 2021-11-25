
const PdfView = () => {
  return (
    <div>
      <object 
      data={require('../assets/Marquez-cv.pdf')}
      aria-label="pdfContainer"
      type="application/pdf" 
      width="100%"
      height="100%"
      >
        {/* <br />
        <a href={require('../assets/Marquez-cv.pdf')} download="Marquez, Jose - CV.pdf">
          No compatible
         </a> */}
       </object>
    </div>
  )
}

export default PdfView;