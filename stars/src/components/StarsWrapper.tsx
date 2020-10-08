import React, { useState } from "react"
import StarItem from "./StarItem"

interface StarsWrapperProps {
  onStars: number[]
}

const StarsWrapper: React.FC<StarsWrapperProps> = ({ onStars }) => {
  const [rating, setRating] = useState(() => 0)
  const [hover, setHover] = useState(() => 0)

  const handleRating = (index: number) => {
    if (rating === 1 && rating && rating > index) {
      setRating(0)
    } else {
      setRating(index + 1)
    }
  }

  return (
    <div className="stars">
      {onStars.map((star, index) => (
        <StarItem
          star={star}
          rating={hover || rating}
          index={index}
          key={star}
          onMouseEnter={() => setHover(index + 1)}
          onMouseLeave={() => setHover(0)}
          // onClick={() => setRating(index + 1)}
          onClick={handleRating}
        />
      ))}
    </div>
  )
}
export default StarsWrapper
