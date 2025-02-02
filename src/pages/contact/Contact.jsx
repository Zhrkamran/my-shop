import Container from "../../components/container/Container"
import styled from './contact.module.css'

function Contact() {
  return (
    <>
     <div className="container-fluid">
       <Container>
       <div className="row">
           <div className="col-12">
             <div className={styled["card"]}>
               <div className="row">
                 <div className="col-12">
                   <h2 className={styled["tiltle-page"]}>
                       تماس با ما
                   </h2>
                 </div>
               </div>
               <div className="row mt-3">
                 <div className="col-12">
                 <iframe className={styled['iframe']} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207371.9779412914!2d51.20973162467234!3d35.6970117877086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1645378586791!5m2!1sen!2s" ></iframe>
                 </div>
               </div>
             </div>
           </div>
        </div>
       </Container>
     </div>
    </>
  )
}

export default Contact