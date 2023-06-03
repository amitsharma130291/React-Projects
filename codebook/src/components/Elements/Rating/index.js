import styles from "./Rating.module.css"
function Rating({ ratingValue }) {
  const ratings = [false, false, false, false, false]

  for(let i = 0; i < ratingValue; i++){
    ratings[i] = true
  }

  return (
    <div className={styles["rating"]}>
        {
            ratings.map((rating, index)=>( 
                <div key={index}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill={ rating ? "#EAB308" : "#ffffff" } viewBox="0 0 24 24" strokeWidth="0" stroke="currentColor" className={styles.star}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                </div>               
               
            ))
        }
      
    </div>
  )
}

export default Rating