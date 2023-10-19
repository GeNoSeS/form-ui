import "./form.css"
const styles = {
   header : {
    textAlign:"center",
    
   },
   label :{
    fontSize:"1.3em",
    margin:"10px",
    textAlign:"center",
    
   },
   input :{
    margin:"10px" , 
    height:"20px",
    
    
   },
   right :{
        margin:"10px",
        textAlign:"left",
        
        
   },
 
}

const FormInput = () =>{
    return(
    <><><>
     <h1 style={styles.header}>JSS INSTITUTE OF SPEECH AND HEARING AND JSS HOSPITAL</h1>
     <p style={styles.header}>DEPARTMENT OF AUDIOLOGY AND DEPARTMENT OF GERIATRICS</p>
     <h2 style={styles.header}>HEARING WELNESS CLINIC</h2>
    
    <div style={{textAlign:"left"}}>
            <label style={styles.label}>Op Number :</label>
            <input style={styles.input}/>
            <br />
            <label style={styles.label}>Age :</label>
            <input style={styles.input}/>
            <br/>
            <label style={styles.label}>Gender :</label>
            <input style={styles.input} />
            <br />
            <label style={styles.label} >Systemic Illness :</label>
            <input style={styles.input} />
            <br/>
            <label style={styles.label}>HCA :</label>
            <input style={styles.input}/>
            </div>

            <h2 style={{margin:"10px",textAlign:"center"}}>Screening</h2>

         <div style={{display:"flex",alignItems:"center",margin:"10px 100px 10px 355px"}}className="screen">

                <div style={{margin:"50px",alignItems:"center"}}>
                    
                    <p style={styles.label} >Right</p>
                    <label style={styles.label}>500hz:</label>
                    <input  style={styles.input}/>dB
                    <br></br>
                    <label style={styles.label}>1khz:</label>
                    <input style={styles.input} />dB
                    <br></br>
                    <label style={styles.label} >2khz:</label>
                    <input  style={styles.input} />dB
                    <br></br>
                    <label style={styles.label} >4khz:</label>
                    <input style={styles.input}  />dB
                </div>

                <div style={{margin:"50px"}}>
                    <p style={styles.label} >Left</p>
                    <label style={styles.label} >500hz:</label>
                    <input  style={styles.input} />dB
                    <br></br>
                    <label style={styles.label} >1khz:</label>
                    <input style={styles.input} />dB
                    <br></br>
                    <label style={styles.label} >2khz:</label>
                    <input style={styles.input} />dB
                    <br></br>
                    <label style={styles.label} >4khz:</label>
                    <input style={styles.input} />dB
                    <br></br>
                </div>
               
            </div></>
            <div></div>
            <div className="MMSE">
                <h2>MMSE</h2>
                <label style={styles.label} >Orientation :</label>
                <input style={styles.input}/>
                <label style={styles.label}>Registration :</label>
                <input style={styles.input}/>
                <label style={styles.label} >Attention and Calculation :</label>
                <input style={styles.input}/>
                <label style={styles.label} >Recall :</label>
                <input style={styles.input}/>
                <br></br>
                <label style={styles.label} >Language : </label>
                <input style={styles.input}/>
                <label style={styles.label} >Total :</label>
                <input/>
            </div></><div >
                <div>
                <h2>SCAP-A</h2>
            
            
                1.<input style={styles.input}/>
                2.<input style={styles.input}/>
                3.<input style={styles.input}/>
                4.<input style={styles.input}/>
                5.<input style={styles.input}/>
                6. <input style={styles.input}/>
                7. <input style={styles.input}/>
                <br />
                8. <input style={styles.input}/>
                9.<input style={styles.input}/>
                10. <input style={styles.input}/>
                11. <input style={styles.input}/>
                12. <input style={styles.input}/>
                </div>
        
                <p style={styles.label} >Instruction : 1-Present  0-Absent</p>
                <div>
                <h2>Recommendation</h2>

               <label style={styles.label}>Audiology evaluation :</label> <input type='checkbox'></input>
               <label style={styles.label} > Follow Up : </label><input type='checkbox'></input>
                </div>
            </div>
            </>
           
    )
}

export default FormInput;