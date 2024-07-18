import startIcon from '../assets/icons/Star.svg';

const arr = [1,2,3,4,5];

const  StarRating = ({styles}) => {

  return (
    <div className = "flex gap-[1px]">   
        {
            arr.map((item) => 
                <div key={item} className={`${styles}`}>
                    <img 
                        src = {startIcon}
                    />
                </div>
        )}
    </div>
  )
}

export default StarRating