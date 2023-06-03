import React from 'react'
import style from "./Testimonials.module.css"

function Testimonials() {
  return (
    <section className={style['testimonial-section']}>
        <h1 className={ style.heading }>Student About CodeBook</h1>
        <div className={ style["testimonial-grid"]}>
            <div className={ style["testimony"] }>
                    <p className={style["testimony-heading"]}>Very easy this was to integrate</p>
                    <p>If you care for your time, I hands down would go with this."</p>
                    <div className={style.personalDetails}>
                        <img className={ style["image"] } src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQhFQ8wIhX_UWtydLTbBo4sjEdeE1tUpgBXQ&usqp=CAU" alt="customer 1 pic" />
                        <p>Bonnie Green<br />
                        Developer at Random AI</p>
                    </div>
            </div>
            <div className={ style["testimony"] }>
                    <p className={style["testimony-heading"]}>Solid foundation for any project</p>
                    <p>Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
                    <div className={style.personalDetails}>
                        <img className={ style["image"] } src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6A-L-qUnMvuFTtT8wyFYGu7Et0WnummFIFg&usqp=CAU" alt="customer 2 pic" />
                        <p>Roberta Casas<br />
                        Lead designer at Random</p>
                    </div>
            </div>
            <div className={ style["testimony"] }>
                    <p className={style["testimony-heading"]}>Mindblowing workflow</p>
                    <p>Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
                    <div className={style.personalDetails}>
                        <img className={ style["image"] } src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROmXnkmJBGIRDCK7w49wosB5Zwxw5HH0TMuw&usqp=CAU" alt="customer 3 pic" />
                        <p>Jese Leos<br />
                        Software Engineer at Random</p>
                    </div>
            </div>
            <div className={ style["testimony"] }>
                    <p className={style["testimony-heading"]}>Efficient Collaborating</p>
                    <p>You have many examples that can be used to create a fast prototype for your team."</p>
                    <div className={style.personalDetails}>
                        <img className={ style["image"] } src="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?s=612x612&w=0&k=20&c=g_ZmKDpK9VEEzWw4vJ6O577ENGLTOcrvYeiLxi8mVuo=" alt="customer 4 pic" />
                        <p className={style.name}>Joseph McFall <br />
                          CTO at Random</p>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials