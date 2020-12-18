import React from 'react'
import PropTypes from 'prop-types'
// import { Tag } from 'ez-library'
import StarRating from '../StarRating'
import styles from './index.module.scss'

const Card = ({
  seq,
  title,
  description,
  linkUrl,
  lastUpdatedTime,
  tags
}) => {

  let tagList = null
  if (tags && tags.length > 0) {
    tagList = tags.map((item, index) => {
      return (
        <>
          <span key={index}> {item} </span>
        </>
      )
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{title}</h2>
      </div>
      <div className={styles.body}>
        <div className={styles.description}>{description}</div>
        <div className={styles.tags}>{tagList}</div>
      </div>
        
      <span className={styles.date}>{lastUpdatedTime}</span>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string, // 商品標題
  imageUrl: PropTypes.string, // 商品圖 url
  productNo: PropTypes.string, // 商編

}

Card.defaultProps = {

}

export default Card
