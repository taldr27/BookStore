import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RemoveBook from './RemoveBook';
import '../styles/Book.css';

const Book = (
  {
    // eslint-disable-next-line react/prop-types
    id, title, author, category, progress,
  },
) => {
  console.log(progress);
  return (
    <div className="book-container">
      <div className="book-data">
        <div className="book-details">
          <span className="span-category">{category}</span>
          <span className="span-title">{title}</span>
          <span className="span-author">{author}</span>
        </div>
        <div className="progress-container">
          <div className="graphic-progress">
            <div className="circular-progress" />
            <div className="progress-number">
              <CircularProgressbar className="circular-progress" value={progress} />
              <div className="percentage-number">
                <span className="percentageStyle">{`${progress}%`}</span>
                <span className="completedStyle">
                  Completed
                </span>
              </div>
            </div>
          </div>
          <div className="line" />
          <div className="current-chapter">
            <span className="currentChapter">Current Chapter</span>
            <span>Chapter 3: &ldquo;A Lesson Learned&ldquo;</span>
            {/* eslint-disable-next-line */}
            <RemoveBook id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
