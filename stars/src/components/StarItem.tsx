import React from "react"

interface StarProps {
  star: number
  rating: number
  index: number
  onMouseEnter: () => void
  onMouseLeave: () => void
  onClick: (index: number) => void
}

const StarItem = ({
  star,
  index,
  rating,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: StarProps) => {
  return (
    <div
      className="star-item"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => onClick(index)}>
      {rating && rating >= index + 1 ? (
        <span className="star">⭐️</span>
      ) : (
        <span className="star">★</span>
      )}
    </div>
  )
}
export default StarItem
